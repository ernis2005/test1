import React from 'react'
import './style.scss'
import { AiOutlineArrowRight, AiOutlineInstagram } from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'
import {TbBrandTelegram} from 'react-icons/tb'
import { FiFacebook, FiLinkedin } from 'react-icons/fi'
const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Contend Footers'>
                 <div className='FooterBlock1'>
                    <div className='FooterBlock1Info'>
                        <h1>У вас остались вопросы?</h1>
                        <span>
                        Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor ipsum sem. 
                        </span>
                    </div>
                    <div className='FooterInputs'>
                        <input type="text" placeholder="Name*" />
                        <input type="text"  placeholder="Email*" />
                        <input type="text"   placeholder="Message*"/>
                        <button>
                            <samp>отправить</samp>
                            
                            <div>
                            <AiOutlineArrowRight />
                            </div>
                        </button>
                    </div>
                 </div>
                  <div className='FooterBlock2'>
                        <div className='FooterBlock2Bloc1'>
                        <h1>
          opacle <span>digital</span>
        </h1>
                           <p>@ 2023 OracleDigital All rights Recerved.</p>
                        </div>
                        <div className='test1'>
                        <div className='FooterBlock2Bloc2'>
                            <p>Quick Links</p>
                            <ul>
                                <li>Главная</li>
                                <li>О компании</li>
                                <li>Услуги</li>
                                <li>Контакты</li>
                          
                            </ul>
                        </div>
                        <div className='FooterBlock2Bloc3'>
                            <p>Контакты</p>
                            <ul>
                                <li><HiOutlineMail/>odigital@gmail.com</li>
                                <li><BsTelephone style={{fontSize:'18px'}}/>+996 709 554 789</li>
                            </ul>
                        </div>
                        <div  className='FooterBlock2Bloc4'>
                            <p>Мы в соц.сетях</p>
                            <ul>
                                <li><AiOutlineInstagram/></li>
                                <li><TbBrandTelegram/></li>
                                <li><FiFacebook/></li>
                                <li><FaWhatsapp/></li>
                                <li>
                                    <FiLinkedin/>
                                </li>
                            </ul>
                        </div>
                        </div>
                     <p className='OracleDigital'>@ 2023 OracleDigital All rights Recerved.</p>
                  </div>
        </div>
    </div>
  )
}

export default Footer