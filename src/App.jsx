import "./App.css";
import Main from "./components/Main";

// css

import "./App.css";
import './components/css/News.css'
import "../src/components/css/Home.css";
import "./components/css/TeacherAndStudents.css";
import "./components/css/Fillter.css";
import "./components/css/Comment.css"
import './components/css/Profil.css'
import "./components/Profil Pages/Css/BalanceStyle.css"
import "./components/css/Room.css"
import "./components/css/Pictures.css"


import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfilPage } from "./components/Profil Pages/Profil/ProfilPage";
import { MyChat } from "./components/Profil Pages/ProfileMyChat/MyChat";
import { MyCalendar } from "./components/Profil Pages/MyCalendar/MyCalendar";
import { Balance } from "./components/Profil Pages/MyBalance/Balance";
import { PaidServices } from "./components/Profil Pages/PaidServices/PaidServices";
import { TransactionsPage } from "./components/Profil Pages/TransactionsPage/TransactionsPage";
import { Reviews } from "./components/Profil Pages/Reviews/Reviews";
import ScrollTop from './ScrollTop'
import NewsMain from "./components/News/MainNews";
import OneNews from './components/News/OneNews'
import CommentMain from './components/Comment/Comments'
import CenterRoom from './components/CenterRoom/LearingCenterRoom'
import PutProfil from './components/Profil/PutProfil'
import Chat from './components/Profil/Chat'
import Balanc from './components/Profil/Balanc'
import Platnieservises from './components/Profil/PlatnieServises'
import Transaksiya from './components/Profil/Transaksiya'
import MyOtzif from './components/Profil/MyOtzif'
import Pictures from './components/Profil/Pictures'
import Edit from './components/Profil/Edit'

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <div className="container">
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/profile" element={<ProfilPage />} />
          <Route path="/my-chat" element={<MyChat />} />
          <Route path="/my-calendar" element={<MyCalendar />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/paid-services" element={<PaidServices />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/NewsMain" element={<NewsMain />} ></Route>
          <Route path="/OneNews" element={<OneNews />} ></Route>
          <Route path="/Comment" element={<CommentMain />} ></Route>

          {/* profil  */}
          <Route path="/MainProfil" element={<PutProfil />}  ></Route>
          <Route path="/Chat" element={<Chat />} ></Route>
          <Route path="/Balanc" element={<Balanc />} ></Route>
          <Route path="/PlatnieServises" element={<Platnieservises />} > </Route>
          <Route path="transanksiya" element={<Transaksiya />} > </Route>
          <Route path="/MyOtzif" element={<MyOtzif />} > </Route>
          <Route path="/Pictures" element={<Pictures />} ></Route>
          <Route path="/Edit" element={<Edit />} ></Route>

          {/* Room  */}
          <Route path="/CenterRoom" element={<CenterRoom />} > </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
