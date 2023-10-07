import React from 'react'
import { data } from './Data'
import { FiArrowUpRight } from 'react-icons/fi'


import './Page.scss'
export const ChooseUsCard = () => {
    return (
        <div className='Cards'>
            {data.map((res) => (
                <div className='Card'>
                    <div className='Icon' dangerouslySetInnerHTML={res.Incon} />
                    <div className='info'>
                        <p>{res.name}</p>
                        <span><FiArrowUpRight /></span>
                    </div>
                </div>
            ))}
        </div>
    )
}
