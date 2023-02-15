import React from 'react'
import Footer from '../home/Footer'
import { Header } from '../Header/Header'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Modal1 from './Modal1'

export default function Profil() {
    const [isModal, setIsModal] = useState(false)





    return (

        <>
            <Header />
            <div className='profil'>
                <div className="item-profil">
                    <div className="saidbar-profil">
                        <ul>
                            <NavLink to='/Edit' >
                                <li  style={{color:"#000"}}>
                                    Личные данные
                                </li>
                            </NavLink>

                            <NavLink to='/Chat' >
                                <li>
                                    Мои чаты
                                </li>
                            </NavLink>
                            <NavLink to='/Balanc'>
                                <li>
                                    Баланс
                                </li>
                            </NavLink>
                            <NavLink to='/PlatnieServises' >
                                <li>
                                    Платные услуги
                                </li>
                            </NavLink>
                            <NavLink to='/transanksiya'>
                                <li>
                                    Транзакции
                                </li>
                            </NavLink>
                            <NavLink to='/MyOtzif'>
                                <li>
                                    Мои отзывы
                                </li>
                            </NavLink>
                            <NavLink to='/Pictures'>
                                <li>
                                    Избранные
                                </li>
                            </NavLink>
                            <NavLink to='/MainProfil'>
                                <li>
                                    Выход
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="main-profil">
                        <div className='edit'>
                            <div className="top-edit">
                                <div className="ava-edit">
                                    <img src="./images/roomava.png" alt="" />
                                    <i class='bx bxs-pencil'></i>
                                </div>
                            </div>
                            <div className="middle-edit">
                                <div className="item-middle-edit">
                                    <div className="name_surname">
                                        <span>
                                            <label htmlFor="name"> Имя</label><br />
                                            <input type="text" name="" id="name" placeholder='Рафаэль' />
                                        </span>
                                        <span>
                                            <label htmlFor="surname">Фамилия</label><br />
                                            <input type="text" id='surname' placeholder='Ройтман' />
                                        </span>
                                    </div>
                                    <div className="phone_email">
                                        <span>
                                            <label htmlFor="phone">Номер телефона</label><br />
                                            <input type="number" id='phone' placeholder='+998 93 565 32 45' />
                                        </span>
                                        <span>
                                            <label htmlFor="email">Email</label><br />
                                            <input type="email" id='email' placeholder='rafaelroytman@gmail.com' />
                                        </span>
                                    </div>
                                    <div className="coutr_city">
                                        <span>
                                            <label htmlFor="country">Страна</label><br />
                                            <input type="text" id='country' placeholder='Узбекистан' />
                                        </span>
                                        <span>
                                            <label htmlFor="city">Регион</label><br />
                                            <input type="text" id='city' placeholder='Ташкент' />
                                        </span>
                                    </div>
                                    <div className="password">
                                        <span>
                                            <label htmlFor="password">Пароль</label><br />
                                            <input type="text" id='password' />
                                        </span>
                                        <span>
                                            <label htmlFor="password2">Подтвердите пароль</label><br />
                                            <input type="text" id='password2' />
                                        </span>
                                    </div>
                                    <div className="bottom-button-edit">
                                        <button onClick={() => setIsModal((prev) => !prev)} >Изменить</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Modal1 isModal={isModal} setIsModal={setIsModal} />

        </>
    )
}

