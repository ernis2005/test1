import React from 'react'
import './style.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'
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
                            отправить
                            <div>
                            <AiOutlineArrowRight />
                            </div>
                        </button>
                    </div>
                 </div>
                  <div>2</div>
        </div>
    </div>
  )
}

export default Footer