import React from 'react';

import './App.scss';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { ChooseUsCard } from './components/Cards/ChooseUsCard/ChooseUsCard';
import { OurCoursesCard } from './components/Cards/OurCoursesCard/OurCoursesCard';
import { MentorsCard } from './components/Cards/MentorsCard/MentorsCard';

function App() {
  return (
    <main className='header' >
      <div className='block'>
        <span className='BlockBg'>
          <p>ORACLEDIGITAL</p>
          <p>ORACLEDIGITAL</p>
        </span>
        <div className='blockInfo'>
          <h2>
            /получи <br />
            работу в it<br />
            программистом вы it <br />
             
             <button>  <span>Связаться с нами</span>   <div>
             <AiOutlineArrowRight/></div> </button>компании  
          </h2>
          <p>Quis fringilla convallis et vitae volutpat at porttitor. Est tincidunt massa aliquam sed enim rhoncus.  Id nullam sollicitudin aliquet in. </p>
        </div>
      </div>
   <div className='Contend block1'> 
        <h2>Почему выбирают нас?</h2>
         <ChooseUsCard/>
      </div>
      <div className='Contend block1'>
        <h2>Наши курсы</h2>
        <OurCoursesCard/>
      </div>
    {/*     <div className='Contend InfoMentors'>
      <div className='InfoMentorsBlock1'>
        <p>Получайте знание у самых топовых менторов</p>
        <span>
        Chances are you will be 98% satisfied with the result/ 4.9 is our average 
        <button>Записаться -</button>
        </span>
      </div>
      <div className='InfoMentorsCards'>
        <MentorsCard/>
      </div>
      </div>
      <div>
        hello
      </div>
      <div>
        hello
      </div>
      <div>
        hello
      </div> */}
    </main>
  );
}

export default App;
