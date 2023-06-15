import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommunityPage } from "./pages/community";
import { PostDetailPage } from "./pages/detail/post";
import { MapPage } from "./pages/map";
import { MyPage } from "./pages/myPage";
import { NewsDetailPage } from "./pages/detail/news";
import { useRecoilValue } from "recoil";
import { ModalStateAtom, ModalStateAtomType } from "./atoms/modalState";
import { Modal } from "./components/modal";

const App = () => {
  const modalState = useRecoilValue<ModalStateAtomType>(ModalStateAtom);
  const isModalStateSet = modalState !== undefined;
  return (
    <>
      {isModalStateSet && <Modal>{modalState}</Modal>}
      <BrowserRouter>
        <Routes>
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/:id" element={<PostDetailPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
