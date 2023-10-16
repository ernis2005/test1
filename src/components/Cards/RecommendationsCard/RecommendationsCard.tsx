import React from 'react'
import './style.scss'
import { Block3SvgArrow, Block3SvgBG, Block3SvgSvg1, Block3SvgSvg2, Block3SvgSvg3 } from '../../svg/Block3Svg/Block3Svg'

import { motion, AnimatePresence } from "framer-motion"
const RecommendationsCard = () => {
    let name = 'RecommendationsCards'
    const left = {
        initial: {
            opacity: 0,
            x: -100
        },
        
        animate: {
            opacity: 1,
            
            transition: {
                duration: 1
            },
            x: 0
        },

    }
    const right = {
        initial: {
            opacity: 0,

            x: 100
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1
            },
            x: 0
        },
    }
    return (
        <AnimatePresence>
 <div className={`${name}`} >
            <motion.div 
              initial="initial"
              whileInView="animate"
              exit="initial"
              variants={left}
              className={`${name}Card`}>
                <div className={`${name}Info`}>
                    <p>В IT-сфере очень много перспективных дорожек. От создания сайтов и программ до графического дизайна мобильных игр или приложений. Вам вовсе не обязательно проводить 24/7 за написанием «сложного» кода для того, чтобы быть успешным</p>
                </div>

                <div className={`${name}Bg`}>
                    <p>oracledigital </p>
                    <p> oracledigital </p>
                    <p>oracledigital</p>
                    <p>oracledigital</p>
                </div>
                <div className={`${name}test`}>
                    <div style={{ height: '170px' }} className={`${name}svg`}>
                        <Block3SvgSvg1 />
                    </div>
                    <div className={`${name}InfoNumber`}>

                        <ul>
                            <li style={{ fontSize: '30px', opacity: '1', marginTop: '-16px' }}>01</li>
                            <li>02</li>
                            <li>03</li>
                            <li>04</li>

                        </ul>
                        <p><Block3SvgArrow /></p>

                    </div>
                </div>

            </motion.div>
            <motion.div 
              initial="initial"
              whileInView="animate"
              exit="initial"
              variants={right}
             className={`${name}Card2`}>
                <div className={`${name}Card2Block2`}>

                    <div className={`${name}InfoNumber2`}>
                        <ul>
                            <li >01</li>
                            <li style={{ fontSize: '30px', opacity: '1', marginTop: '-16px' }}>02</li>
                            <li>03</li>
                            <li>04</li>

                        </ul>
                        <div>
                            <Block3SvgArrow /></div>
                    </div>
                    <samp>
                        <Block3SvgBG />
                    </samp>
                </div>

                <p>В IT-сфере очень много перспективных дорожек. От создания сайтов и программ до графического дизайна мобильных игр или приложений. Вам вовсе не обязательно проводить 24/7 за написанием «сложного» кода для того, чтобы быть успешным</p>

            </motion.div>
            <motion.div 
            initial="initial"
            whileInView="animate"
            exit="initial"
            variants={left}
             className={`${name}Card`}>
                <div className={`${name}Info`}>
                    <p>В IT-сфере очень много перспективных дорожек. От создания сайтов и программ до графического дизайна мобильных игр или приложений. Вам вовсе не обязательно проводить 24/7 за написанием «сложного» кода для того, чтобы быть успешным</p>
                </div>

                <div className={`${name}Bg`}>
                    <p>oracledigital </p>
                    <p> oracledigital </p>
                    <p>oracledigital</p>
                    <p>oracledigital</p>
                </div>
                <div className={`${name}test`}>
                    <div style={{ height: '170px' }} className={`${name}svg2`} >
                        <Block3SvgSvg2 />
                    </div>
                    <div className={`${name}InfoNumber`}>

                        <ul>
                            <li >01</li>
                            <li>02</li>
                            <li style={{ fontSize: '30px', opacity: '1', marginTop: '-16px' }}>03</li>
                            <li>04</li>

                        </ul>
                        <p><Block3SvgArrow /></p>

                    </div>
                </div>

            </motion.div>
            <motion.div 
             initial="initial"
              whileInView="animate"
              exit="initial"
              variants={right}
             className={`${name}Card2`}>
                <div className={`${name}Card2Block2`}>

                    <div className={`${name}InfoNumber2`}>

                        <ul>
                            <li >01</li>
                            <li >02</li>
                            <li>03</li>
                            <li style={{ fontSize: '30px', opacity: '1', marginTop: '-16px' }}>04</li>

                        </ul>
                        <div><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66669 17.875L12 23.375L25.3334 9.625" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>

                    </div>
                    <samp className='svg2'>
                        <Block3SvgSvg3 />
                    </samp>
                </div>

                <p>В IT-сфере очень много перспективных дорожек. От создания сайтов и программ до графического дизайна мобильных игр или приложений. Вам вовсе не обязательно проводить 24/7 за написанием «сложного» кода для того, чтобы быть успешным</p>

            </motion.div>
        </div>
        </AnimatePresence>
       
    )
}
export default RecommendationsCard
