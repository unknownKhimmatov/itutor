import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {


  return (


    <div className="header-main">
      <header>
        <nav>
          <div className="brand-logo">
            <img src="./images/white.png" alt="brand-logo" />
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
            <select className='select-language language'>
              <option value="">RUS</option>
              <option value="">UZB</option>
              <option value="">ENG</option>
            </select>
            <div className="dark-and-white-mode darkblcok" >
              <div className="mode-all" >
                <i class='bx bxs-moon dark'></i>
                <i class='bx bxs-sun white' ></i>
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
    </div>
  )
}

