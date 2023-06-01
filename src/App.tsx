import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommunityPage from "./pages/community";
import MapPage from "./pages/map";
import MyPage from "./pages/myPage";
import PostDetailPage from "./pages/detail/post";
import NewsDetailPage from "./pages/detail/news";
import { useSetRecoilState } from "recoil";
import { UserAgentStateAtom } from "./atoms/userAgentState";
import { useEffect } from "react";

const App = () => {
  const setUserAgentState = useSetRecoilState<string>(UserAgentStateAtom);

  useEffect(() => {
    const iOS = navigator.userAgent.match(/iOS_App/i);
    const Android = navigator.userAgent.match(/Android_App/i);
    if (iOS) setUserAgentState("iOS");
    else if (Android) setUserAgentState("Android");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/:id" element={<PostDetailPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
