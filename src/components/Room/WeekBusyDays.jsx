import React from 'react'

export default function WeekBusyDays() {
    return (
        <div className='weekbusydays'>
            <div className="item-week-busy-days">
                <div className="title-week-busy-days">
                    <h3>
                        Шахматка занятости преподавателя
                    </h3>
                </div>


                <div className="week-table">
                    <div className="border-container-table">
                        <table class="demo">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th> Понедельник</th>
                                    <th>Вторник</th>
                                    <th>Среда</th>
                                    <th>Четверг</th>
                                    <th>Пятница</th>
                                    <th>Суббота</th>
                                    <th>Воскресенье</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>08:00-10:00</td>
                                    <td>Занятие</td>
                                    <td>&nbsp;</td>
                                    <td>Занятие</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>10:00-12:00</td>
                                    <td></td>
                                    <td>Занятие</td>
                                    <td>&nbsp;</td>
                                    <td>Занятие</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>12:00-14:00</td>
                                    <td>Занятие</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>Занятие</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>14:00-16:00</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>16:00-18:00</td>
                                    <td>Занятие</td>
                                    <td>Занятие</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>Занятие</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>18:00-20:00</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
