import React from 'react'
import Fillter from './FillterLearingCenter'
import { useNavigate } from 'react-router-dom'
import ItTexnology from './Allsection-items/DISCIPLINES'

export default function Allsection() {


    const navigate = useNavigate()

    const FillterClick = () => {
        navigate("/Fillter")
    }

    return (
        <>
            <div className='allsections-main'>
                <div className="title-all-sections title">
                    <h3>
                        Выбирайте предмет и одного из наших экспертов
                    </h3>
                    <span>
                        Слева вы можете выбрать нужную категорию преподавателя, <br />
                        справа вы увидите всех кто отвечает вашим критериям поиска
                    </span>
                </div>
                <div className="main-sections-item">
                    <div className="saidbar">
                        <div className="item-saidbar saidbar-ul">
                            <ul>
                                <li>
                                    ВСЕ ДИСЦИПЛИНЫ
                                </li>
                                <li>
                                    IT-ТЕХНОЛОГИИ
                                </li>
                                <li>
                                    МАТЕМАТИКА
                                </li>
                                <li>
                                    ЯЗЫКИ
                                </li>
                                <li>
                                    ЛИТЕРАТУРА
                                </li>
                                <li>
                                    3D-ДИЗАЙН
                                </li>
                                <li>
                                    ВИДЕО-СЪЕМКА
                                </li>
                                <li>
                                    КУЛИНАРИЯ
                                </li>
                                <li>
                                    КУЗОВНЫЕ РАБОТЫ
                                </li>
                            </ul>
                            <span className='slider' onClick={FillterClick} ><i class='bx bx-slider-alt'></i> <p>Расширенный поиск</p></span>
                        </div>
                    </div>
                    <div className="all-sections">
                        <div className="skill-container">
                            <ItTexnology />
                        </div>
                    </div>
                </div>
                <div className="button-look-all">
                    <button onClick={FillterClick}>Смотреть все</button>
                </div>
            </div >
        </>
    )
}
