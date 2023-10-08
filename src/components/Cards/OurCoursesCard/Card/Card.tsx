import React from 'react'
import './style.scss'
import {BiRightArrowAlt} from 'react-icons/bi'
let name = 'OurCoursesCard'
interface Person {
    image:string
}
export const Card = ({image}:Person) => {
    return (
        <div className={`${name}`}>
            <p>
                Front-End
                <samp>(HTML, CSS, JavaScript)</samp>

            </p>
            <div className={`${name}Image`}>
                <img src={image} alt='js' />
            </div>
            <p className={`${name}name`}>Групповое занятие, группы от 5 до 8 студентов.</p>
            <div className={`${name}block1`}>
                <div>
                    <span>
                        Количество зантий:
                        <p >
                            5 зан./нед., (Пн-Пт)
                        </p>

                    </span>
                    <span>
                        Форма обучения:
                        <p style={{textAlign:'right', justifyContent:'right'}}>
                            Онлайн
                        </p>
                    </span>
                </div>
                <div>
                <span>
                Время занятия: 
                        <p >
                        120 минут
                        </p>
                    </span>
                    <span>
                    Длительность курса
                        <p style={{textAlign:'right', justifyContent:'right'}}>
                        16 недель
                        </p>
                    </span>
                </div>
            </div>
            <div className={`${name}Bonuses`}>
               <samp>
               Бонусы
               </samp>
               <p  className={`${name}Bonusesp`}>
               Предоставляем возможность повторить и закрепить любой урок из программы курса
               </p>
            </div>
            <div className={`${name}Price`}>
        <p>15 000с / в месяц</p>
        <s>18 590</s>
            </div>
            <div 
            className={`${name}Button`}>
                <p>Связаться с нами</p>
                <div    className={`${name}ButtonSvg`}>
                <BiRightArrowAlt/>
                </div>
            </div>
        </div>
    )
}
