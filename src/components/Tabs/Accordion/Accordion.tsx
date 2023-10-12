import React from 'react'
import cm from 'classnames'
import './style.scss'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export const Accordions = () => {
    let name = 'Accordions'
    const [state, setstate] = React.useState<Number>(0)
    let onClick = (id: Number) => {

        if (id == state) {
            setstate(0)
        } else (
            setstate(id)
        )
    }
    return (
        <div className={`${name}`}>
            <div className={`${name}Card`}>
                <div className={`${name}CardBlock1`} onClick={() => onClick(1)}>
                    <p>Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?</p>
                    {state != 1 ? (
                        <span style={{display:'grid', alignItems:'center'}}><AiOutlinePlus /></span>
                    ) : (
                        <span  style={{display:'grid', alignItems:'center'}}><AiOutlineMinus /></span>
                    )
                    }


                </div>
                <div className={cm("LoremIS", {
                    ['loremAc']: state == 1
                })}>
                    <p>
                       Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id interdum interdum tellus. </p>
                </div>
            </div>


            <div className={`${name}Card`}>
                <div className={`${name}CardBlock1`} onClick={() => onClick(2)}>
                    <p>Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?</p>
                    {state != 2 ? (
                        <span style={{display:'grid', alignItems:'center'}}><AiOutlinePlus /></span>
                    ) : (
                        <span style={{display:'grid', alignItems:'center'}}><AiOutlineMinus /></span>
                    )
                    }

                </div>
                <div className={cm("LoremIS", {
                    ['loremAc']: state == 2
                })}>
                    <p>
                       Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id interdum interdum tellus. </p>
                </div>
            </div>
            <div className={`${name}Card`}>
                <div className={`${name}CardBlock1`} onClick={() => onClick(3)}>
                    <p>Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?</p>
                    {state != 3 ? (
                        <span style={{display:'grid', alignItems:'center'}}><AiOutlinePlus /></span>
                    ) : (
                        <span style={{display:'grid', alignItems:'center'}}><AiOutlineMinus /></span>
                    )
                    }

                </div>
                <div className={cm("LoremIS", {
                    ['loremAc']: state == 3
                })}>
                    <p>
                       Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id interdum interdum tellus. </p>
                </div>
            </div>
            <div className={`${name}Card`}>
                <div className={`${name}CardBlock1`} onClick={() => onClick(4)}>
                    <p>Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?</p>
                    {state != 4 ? (
                        <span style={{display:'grid', alignItems:'center'}}><AiOutlinePlus /></span>
                    ) : (
                        <span style={{display:'grid', alignItems:'center'}}><AiOutlineMinus /></span>
                    )
                    }
                </div>
                <div className={cm("LoremIS", {
                    ['loremAc']: state == 4
                })}>
                    <p>
                       Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id interdum interdum tellus. </p>
                </div>
            </div>
            <div className={`${name}Card`}>
                <div className={`${name}CardBlock1`} onClick={() => onClick(5)}>
                    <p>Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?</p>
                    {state != 5 ? (
                        <span style={{display:'grid', alignItems:'center'}}> <AiOutlinePlus /></span>
                    ) : (
                        <span style={{display:'grid', alignItems:'center'}}> <AiOutlineMinus /></span>
                    )
                    }

                </div>
                <div className={cm("LoremIS", {
                    ['loremAc']: state == 5
                })}>
                    <p>
                       Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id interdum interdum tellus. </p>
                </div>
            </div>
        </div>
    )
}
