import React, { useContext } from 'react'
import Footer from '../home/Footer'
import { Header } from '../Header/Header'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Context } from '../../Context/Context'



export default function Profil() {
    const [isModal, setIsModal] = useState(false)


    const { dark, setDark } = useContext(Context)





    return (

        <>
            <Header />
            <div className='profil'>
                <div className="item-profil">
                    <div className="saidbar-profil">

                        <ul>
                            <NavLink to='/MainCenter' >
                                <li style={{ color: "#000" }}>
                                    Личные данные
                                </li>
                            </NavLink>

                            <NavLink to='/LearingCenterChat' >
                                <li>
                                    Мои чаты
                                </li>
                            </NavLink>
                            <NavLink to='/LearingTeacher'> 
                                <li>
                                    Преподаватели
                                </li>
                            </NavLink>
                            <NavLink to='/LearingBalance'>
                                <li>
                                    Баланс
                                </li>
                            </NavLink>
                            <NavLink to='/LearingBlance' >
                                <li>
                                    Платные услуги
                                </li>
                            </NavLink>
                            <NavLink to='/'>
                                <li>
                                    Транзакции
                                </li>
                            </NavLink>
                            <NavLink to='/'>
                                <li>
                                    Мои отзывы
                                </li>
                            </NavLink>
                            <NavLink to='/'>
                                <li>
                                    Избранные
                                </li>
                            </NavLink>
                            <NavLink to='/'>
                                <li>
                                    Выход
                                </li>
                            </NavLink>
                        </ul>
                    </div>


                    <section className="learingcenterregister">
                        <div className="item-learingcenterregister">
                            <div className="profil-img-center">
                                <img src="./images/room/uchblogo.png" alt="" />
                                <i class='bx bx-pencil'></i>
                            </div>

                            <div className="main-information-in-center">
                                <span>
                                    <label htmlFor="id">ID договора</label>
                                    <input type="text" id='id' placeholder='3123124' />
                                </span>
                                <span>
                                    <label htmlFor="Наименование">Наименование учебного центра</label>
                                    <input type="text" id='Наименование' placeholder='Наименование' />
                                </span>
                                <span>
                                    <label htmlFor="phone">Номер телефона</label>
                                    <input type="tel" id='phone' placeholder='+998 99 999 99 99' />
                                </span>
                                <span>
                                    <label htmlFor="pochta">Почта</label>
                                    <input type="email" id='pochta' placeholder='@mail.ru' />
                                </span>
                                <span>
                                    <label htmlFor="Пароль">Пароль</label>
                                    <input type="text" id='Пароль' placeholder='Пароль' />
                                </span>
                                <span>
                                    <label htmlFor="Страна">Страна</label>
                                    <input type="tel" id='Страна' placeholder='Страна' />
                                </span>
                                <span>
                                    <label htmlFor="Регион">Регион</label>
                                    <input type="email" id='Регион' placeholder='Ташкент' />
                                </span>
                            </div>

                            <div className="learingcenter-information-middle-box">
                                <div className="learinginformation-txt">
                                    <span className='aboutcenter'>
                                        <label htmlFor="txt">О центре</label>
                                        <textarea name="" id="txt" cols="30" rows="10"></textarea>
                                    </span>
                                    <section className='lessons-and-price'>
                                        <span>
                                            <label htmlFor="Дисциплина">Дисциплина 1</label>
                                            <select name="" id="">
                                                <option value="">Веб дизайн</option>
                                                <option value="">Веб дизайн</option>
                                                <option value="">Веб дизайн</option>
                                                <option value="">Веб дизайн</option>
                                            </select>
                                        </span>
                                        <span className='xandplus'>
                                            <i class='bx bx-x'></i>
                                        </span>
                                        <span>
                                            <label htmlFor="Стоимость"> Стоимость в учебном центре</label>
                                            <input type="text" id='Стоимость' placeholder='48$' />
                                        </span>
                                        <span>
                                            <label htmlFor="Стоимость"> Online через Zoom</label>
                                            <input type="text" id='Стоимость' placeholder='48$' />
                                        </span>
                                        <span>
                                            <label htmlFor="Дисциплина">Дисциплина 2</label>
                                            <select name="" id="">
                                                <option value="">Веб дизайн</option>
                                                <option value="">Веб дизайн</option>
                                                <option value="">Веб дизайн</option>
                                                <option value="">Веб дизайн</option>
                                            </select>
                                        </span>
                                        <span className='xandplus'>
                                            <i class='bx bx-plus'></i>
                                        </span>
                                        <span>
                                            <label htmlFor="Стоимость"> Стоимость в учебном центре</label>
                                            <input type="text" id='Стоимость' placeholder='48$' />
                                        </span>
                                        <span>
                                            <label htmlFor="Стоимость"> Online через Zoom</label>
                                            <input type="text" id='Стоимость' placeholder='48$' />
                                        </span>
                                    </section>
                                </div>
                            </div>

                            <div className="sertificate-and-photogalery">
                                <span>
                                    <label htmlFor="filesertificate" title='sertificate downland'>
                                        Сертификаты
                                        <div className="filesertificate">Загруженный сертификат</div>
                                        <input type="file" name="" id="filesertificate" />
                                    </label>
                                </span>
                                <span className='photo-edit'>
                                    <label htmlFor="">Фотогалерея</label>
                                    <div className="imgs-edit-center">
                                        <img src="./images/room/photo.png" alt="" />
                                        <img src="./images/room/photo.png" alt="" />
                                    </div>
                                </span>
                                <span className='vd-edit'>
                                    <label htmlFor="">Видеобзор</label>
                                    <div className="vd-center">
                                        <img src="./images/room/vd.jpg" alt="" />
                                    </div>
                                </span>
                            </div>
                            <div className="learingcenterbutton">
                                <button>Изменить</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />

        </>
    )
}

