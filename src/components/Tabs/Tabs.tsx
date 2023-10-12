import React, { useState } from 'react'
import  './style.scss'
import { Accordions } from './Accordion/Accordion'
export const Tabs = () => {
   let [state,setState]= useState(0)
  return (
    <div className='Tabs'>
        <h2 className='TabsH2'>Часто задаваемые вопросы</h2>
        <p>Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor ipsum sem. Neque porta morbi ullamcorper blandit libero quam ligula ut aenean. </p>
   <div>
    <Accordions/>
   </div>
   
    </div>
  )
}
