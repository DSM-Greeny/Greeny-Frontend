import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { keywords } from "../../libs/constants/keywords";
import { PlaceType } from "../../types/place";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  SelectedStateAtom,
  SelectedStateAtomType,
} from "../../atoms/selectedState";
import { PlaceStateAtom } from "../../atoms/placeState";

const Map = () => {
  const setPlaceState = useSetRecoilState<PlaceType[]>(PlaceStateAtom);
  const [selected, setSelectedState] =
    useRecoilState<SelectedStateAtomType>(SelectedStateAtom);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const hasExecuted = useRef<boolean>(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const tooltip = useRef<kakao.maps.InfoWindow | null>(null);
  useEffect(() => {
    const closeTooltip = () => tooltip.current && tooltip.current.close();
    if (map && selected.id) {
      const latLng = new kakao.maps.LatLng(selected.y, selected.x),
        content = `<article>
            <h1>${selected.place_name}</h1>
            <a
              href="https://map.kakao.com/link/map/${selected.place_name},${selected.y},${selected.x}"
              target="_blank"
              rel="noopener noreferer nofollow"
            >
              큰지도보기
            </a>
            <a
              href="https://map.kakao.com/link/to/${selected.place_name},${selected.y},${selected.x}"
              target="_blank"
              rel="noopener noreferer nofollow"
            >
              길찾기
            </a>
          </article>`;
      closeTooltip();
      map.setCenter(latLng);
      tooltip.current = new kakao.maps.InfoWindow({
        map: map,
        position: latLng,
        content: content,
        removable: true,
        zIndex: 1,
      });
    } else if (map) closeTooltip();
  }, [selected]);
  useEffect(() => {
    if (map === null && mapRef.current) {
      const initMap = (position: GeolocationPosition) => {
        if (!hasExecuted.current) {
          hasExecuted.current = true;
          const markerImageUrl =
            "https://media.discordapp.net/attachments/1077850822341300244/1110422003493646417/marker.webp";
          const newMap = new kakao.maps.Map(mapRef.current!, {
            center: new kakao.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
            ),
            level: 13,
          });
          const markerImage = new kakao.maps.MarkerImage(
            markerImageUrl,
            new kakao.maps.Size(16, 16),
            {
              spriteOrigin: new kakao.maps.Point(0, 0),
              spriteSize: new kakao.maps.Size(16, 16),
            }
          );
          const places = new kakao.maps.services.Places();
          const initMarker = (
            data: kakao.maps.services.PlacesSearchResult,
            status: kakao.maps.services.Status
          ) => {
            if (status === kakao.maps.services.Status.OK) {
              data.forEach((place) => {
                const intId = parseInt(place.id),
                  floatX = parseFloat(place.x),
                  floatY = parseFloat(place.y);
                setPlaceState((prevState) => {
                  return [
                    ...prevState,
                    {
                      id: intId,
                      address_name: place.address_name,
                      category_name: place.category_name,
                      phone: place.phone,
                      place_name: place.place_name,
                      place_url: place.place_url,
                      x: floatX,
                      y: floatY,
                    },
                  ];
                });
                const latLng = new kakao.maps.LatLng(floatY, floatX);
                const marker = new kakao.maps.Marker({
                  map: newMap,
                  position: latLng,
                  image: markerImage,
                });
                kakao.maps.event.addListener(marker, "click", () =>
                  setSelectedState({
                    id: intId,
                    place_name: place.place_name,
                    x: floatX,
                    y: floatY,
                  })
                );
              });
            }
          };
          keywords.map((keyword) => places.keywordSearch(keyword, initMarker));
          setPlaceState((prevState) => {
            return prevState
              .filter((v, i, c) => i === c.findIndex((t) => t.id === v.id))
              .sort((a, b) =>
                a.address_name < b.address_name
                  ? -1
                  : a.address_name == b.address_name
                  ? 0
                  : 1
              );
          });
          setMap(newMap);
        }
      };
      if (navigator.geolocation) navigator.geolocation.watchPosition(initMap);
    }
  }, [mapRef.current]);
  return <Wrapper ref={mapRef}>권한을 기다리는 중...</Wrapper>;
};

export default Map;

const Wrapper = styled.div`
  width: 90vw;
  min-height: 401px;

  ${({ theme }) => theme.commons.boxShadow}

  article {
    margin: 8px;
    margin-right: 10px;
    margin-top: 6px;

    display: flex;
    flex-direction: column;

    h1,
    a {
      font-size: ${({ theme }) => theme.fontSizes.text};
    }
  }
`;
