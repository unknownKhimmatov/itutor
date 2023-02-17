import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Route, Routes
} from 'react-router-dom'
import App from '../../App'

export const Header = () => {

  const [navshow, setNavShow] = useState(false)

  const NavRemove = () => {
    setNavShow(false)
  }

  const [darkmode, setDarkmode] = useState(false)



  return (
    <>


      <div className="header-main">
        <header>
          <nav>
            <div className="brand-logo" id='brand'>
              <img src="./images/white.png" alt="brand-logo" />
            </div>
            <ul className='navul' id='navul' >
              <li>
                <NavLink to='/' ><a href="#">На Главную</a></NavLink>
              </li>

              <li>
                <NavLink to='/NewsMain' ><a href="#">Новости сервиса</a></NavLink>
              </li>

              <li>
                <NavLink to="/Comment" ><a href="#">Отзывы</a></NavLink>
              </li>
              <select className='select-language language'>
                <option value="">RUS</option>
                <option value="">UZB</option>
                <option value="">ENG</option>
              </select>
              <div className="dark-and-white-mode darkblcok" onClick={() => setDarkmode((prev) => !prev)} style={{ justifyContent: darkmode ? "end" : "start" }} >
                <div className="mode-all" >
                  <i class='bx bxs-moon dark' style={{ display: darkmode ? "block" : "none" }}></i>
                  <i class='bx bxs-sun white' style={{ display: darkmode ? "none" : "block" }}  ></i>
                </div>
              </div>
            </ul>
          </nav>
          <div className="massage-and-provite-room-container">
            <div className="massage-container">
              <NavLink to='/Chat'>
                <img src="./images/message2.png" alt="" />
              </NavLink>
              <span>1</span>
            </div>
            <div className="provite-room-container">
              <NavLink to='/profile'>
                <span >
                  Личный кабинет
                </span>
              </NavLink>
            </div>
          </div>
        </header>
        <i class="fa-solid fa-bars hamurger" onClick={() => setNavShow((prev) => !prev)} ></i>
      </div>

      <div className="reaponsive-header" id='block' style={{ display: navshow ? "flex" : "none", }}>
        <header  >
          <i class='bx bx-x res-header-clos' onClick={NavRemove}></i>
          <nav>
            <div className="brand-logo">
              <img src="./images/logo.png" alt="brand-logo" />
            </div>
            <ul className='navul' >
              <li>
                <NavLink to='/' ><a href="#">На Главную</a></NavLink>
              </li>

              <li>
                <NavLink to='/NewsMain' ><a href="#">Новости сервиса</a></NavLink>
              </li>

              <li>
                <NavLink to="/Comment" ><a href="#">Отзывы</a></NavLink>
              </li>
              <select className='select-language-res language'>
                <option value="" id='opt' >RUS</option>
                <option value="">UZB</option>
                <option value="">ENG</option>
              </select>
              <div className="dark-and-white-mode-res" onClick={() => setDarkmode((prev) => !prev)} style={{ justifyContent: darkmode ? "end" : "start" }}>
                <div className="mode-all" >
                  <i class='bx bxs-moon dark' style={{ display: darkmode ? "none" : "block" }} ></i>
                  <i class='bx bxs-sun white' style={{ display: darkmode ? "block" : "none" }} ></i>
                </div>
              </div>
            </ul>
            <div className="massage-and-provite-room-container-res">
              <div className="massage-container-res">
                <NavLink to='/Chat'>
                  <img src="./images/massage.png" alt="" />
                </NavLink>
                <span>1</span>
              </div>
              <div className="provite-room-container-res">
                <NavLink to='/profile'>
                  <span >
                    Личный кабинет
                  </span>
                </NavLink>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <Routes>
        <Route to='/body' element={<App setDarkmode={setDarkmode} darkmode={darkmode} />} ></Route>
      </Routes>
    </>
  )
}

