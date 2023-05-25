import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { keywords } from "../../libs/constants/keywords";
import { PlaceType } from "../../types/place";
import { useRecoilState } from "recoil";
import {
  SelectedStateAtom,
  SelectedStateAtomType,
} from "../../atoms/selectedState";
import { PlaceStateAtom } from "../../atoms/placeState";

declare global {
  interface Window {
    kakao: any;
  }
}
const { kakao } = window;
const Map = () => {
  const [placeState, setPlaceState] =
    useRecoilState<PlaceType[]>(PlaceStateAtom);
  const [selected, setSelectedState] =
    useRecoilState<SelectedStateAtomType>(SelectedStateAtom);
  const [map, setMap] = useState<any>(null);
  const [tooltip, setTooltip] = useState<any>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (map)
      if (selected.id) {
        map.setCenter(new kakao.maps.LatLng(selected.y, selected.x));
        if (tooltip) tooltip.close();
        setTooltip(
          new kakao.maps.InfoWindow({
            map: map,
            position: new kakao.maps.LatLng(selected.y, selected.x),
            content:
              `<article>` +
              "<h1>" +
              selected.place_name +
              "</h1>" +
              `<a href="https://map.kakao.com/link/map/${selected.place_name},${selected.y},${selected.x}" target="_blank rel="noopener noreferer nofollow"">큰지도보기</a>` +
              `<a href="https://map.kakao.com/link/to/${selected.place_name},${selected.y},${selected.x}" target="_blank" rel="noopener noreferer nofollow">길찾기</a>` +
              `</article>`,
            removable: true,
            zIndex: 1,
          })
        );
      } else if (tooltip) tooltip.close();
  }, [selected]);
  useEffect(() => {
    if (mapRef.current) {
      if (map === null) {
        const setPos = (position: GeolocationPosition) =>
          setMap(
            new kakao.maps.Map(mapRef.current, {
              center: new kakao.maps.LatLng(
                position.coords.latitude,
                position.coords.longitude
              ),
              level: 13,
            })
          );
        if (navigator.geolocation) navigator.geolocation.watchPosition(setPos);
      } else if (placeState.length === 0) {
        const markerImage = new kakao.maps.MarkerImage(
            "https://media.discordapp.net/attachments/1077850822341300244/1110422003493646417/marker.webp",
            new kakao.maps.Size(16, 16),
            {
              spriteOrigin: new kakao.maps.Point(0, 0),
              spriteSize: new kakao.maps.Size(16, 16),
            }
          ),
          places = new kakao.maps.services.Places();
        const addMarker = (data: any, status: any) => {
          if (status === kakao.maps.services.Status.OK) {
            data.forEach((place: any) => {
              setPlaceState((prevState) => {
                return [
                  ...prevState,
                  {
                    id: place.id,
                    address_name: place.address_name,
                    category_name: place.category_name,
                    phone: place.phone,
                    place_name: place.place_name,
                    place_url: place.place_url,
                    x: place.x,
                    y: place.y,
                  },
                ]
                  .filter((v, i, c) => i === c.findIndex((t) => t.id === v.id))
                  .sort((a, b) =>
                    a.address_name < b.address_name
                      ? -1
                      : a.address_name == b.address_name
                      ? 0
                      : 1
                  );
              });
              const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
                image: markerImage,
              });
              kakao.maps.event.addListener(marker, "click", () =>
                setSelectedState({
                  id: place.id,
                  place_name: place.place_name,
                  x: place.x,
                  y: place.y,
                })
              );
            });
          }
        };
        keywords.map((v) => places.keywordSearch(v, addMarker));
      }
    }
  }, [mapRef.current]);
  useEffect(() => {
    if (placeState.length > 0 && map.sa.length === 0) {
      setSelectedState({ id: "", place_name: "", x: "", y: "" });
      const markerImage = new kakao.maps.MarkerImage(
        "https://media.discordapp.net/attachments/1077850822341300244/1110422003493646417/marker.webp",
        new kakao.maps.Size(16, 16),
        {
          spriteOrigin: new kakao.maps.Point(0, 0),
          spriteSize: new kakao.maps.Size(16, 16),
        }
      );
      placeState.forEach((place: PlaceType) => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
          image: markerImage,
        });
        kakao.maps.event.addListener(marker, "click", () =>
          setSelectedState({
            id: place.id,
            place_name: place.place_name,
            x: place.x,
            y: place.y,
          })
        );
      });
    }
  }, [map, placeState]);
  return <Wrapper ref={mapRef}>권한을 기다리는 중...</Wrapper>;
};

export default Map;

const Wrapper = styled.div`
  width: 345px;
  min-height: 401px;

  ${({ theme }) => theme.commons.boxShadow}

  article {
    margin: 8px;
    margin-right: 10px;
    margin-top: 6px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1,
    a {
      font-size: ${({ theme }) => theme.fontSizes.text};
    }
  }
`;
