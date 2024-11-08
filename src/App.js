import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AskList from "./component/AskList";
import AskWrite from "./component/AskWrite";
import BoardDetail from "./component/BoardDetail";
import BoardList from "./component/BoardList";
import BoardModify from "./component/BoardModify";
import ComplainDetail from "./component/ComplainDetail";
import ComplainList from "./component/ComplainList";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Join from "./component/Join";
import Login from "./component/Login";
import Main from "./component/Main";
import NoticeList from "./component/NoticeList";
import NoticeWrite from "./component/NoticeWrite";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/home" element={<Main />} />

        <Route exact path="/join" element={<Join />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/boardList" element={<BoardList />} />
        {/* <Route exact path="/community/notice" element={<Notice />} /> */}
        <Route exact path="/community/noticeWrite" element={<NoticeWrite />} />

        <Route exact path="/community/noticeList" element={<NoticeList />} />

        <Route exact path="/community/askWrite" element={<AskWrite />} />
        <Route exact path="/community/askList" element={<AskList />} />

        <Route
          exact
          path="/community/complainList"
          element={<ComplainList />}
        />
        <Route
          exact
          path="/community/complainDetail"
          element={<ComplainDetail />}
        />

        {/* // :num부분은 pathvariable처럼, 값에 따라 변하는 값을 의미 */}
        <Route exact path="/boardDetail/:num" element={<BoardDetail />} />
        <Route exact path="/boardModify/:num" element={<BoardModify />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
