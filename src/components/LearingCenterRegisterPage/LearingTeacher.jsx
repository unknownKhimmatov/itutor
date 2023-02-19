

import React from 'react'
import Footer from '../home/Footer'
import { Header } from '../Header/Header'
import { NavLink } from 'react-router-dom'
import TeacherList from './TeacherList'

export default function LearingTeacher() {
    return (
        <>
            <Header />
            <div className='profil'>
                <div className="item-profil">
                    <div className="saidbar-profil" >
                        <ul>
                            <NavLink to='/MainCenter' >
                                <li >
                                    Личные данные
                                </li>
                            </NavLink>

                            <NavLink to='/LearingCenterChat' >
                                <li  >
                                    Мои чаты
                                </li>
                            </NavLink>
                            <NavLink to='/LearingTeacher'>
                                <li style={{ color: "#000" }}>
                                    Преподаватели
                                </li>
                            </NavLink>
                            <NavLink to='/LearingBlance'>
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

                        <div className="item-learing-teacher">
                            <div className="teacher-list">
                                <TeacherList />
                                <TeacherList />
                                <TeacherList />
                            </div>

                            <div className="zayafka">
                                <div className="title-zayafka">
                                    <h3>
                                        Заявки на вступление
                                    </h3>
                                </div>
                                <div className="zayafka-cards">
                                    <div className="left-card-zayafka">
                                        <section className="left-card-zayafka-left">
                                            <img src="./images/room/roomava.png" alt="" />
                                        </section>
                                        <section className="left-card-zayafka-rigth">
                                            <span>
                                                <h4>
                                                    Ройтман Рафаэль
                                                </h4>
                                                <p>
                                                    Преподаватель по UI UX
                                                </p>
                                            </span>
                                            <span className='zayafka-button'>
                                                <button>Подробнее</button>
                                            </span>
                                        </section>
                                    </div>
                                    <div className="left-card-zayafka">
                                        <section className="left-card-zayafka-left">
                                            <img src="./images/room/roomava.png" alt="" />
                                        </section>
                                        <section className="left-card-zayafka-rigth">
                                            <span>
                                                <h4>
                                                    Ройтман Рафаэль
                                                </h4>
                                                <p>
                                                    Преподаватель по UI UX
                                                </p>
                                            </span>
                                            <span className='zayafka-button'>
                                                <button>Подробнее</button>
                                            </span>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
