import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommunityPage from "./pages/community";
import MapPage from "./pages/map";
import MyPage from "./pages/myPage";
import PostDetailPage from "./pages/detail/post";
import NewsDetailPage from "./pages/detail/news";

const App = () => {
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
