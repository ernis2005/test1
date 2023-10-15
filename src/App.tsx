import React from 'react';

import './App.scss';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { ChooseUsCard } from './components/Cards/ChooseUsCard/ChooseUsCard';
import { OurCoursesCard } from './components/Cards/OurCoursesCard/OurCoursesCard';
import { MentorsCard } from './components/Cards/MentorsCard/MentorsCard';
import { CardReviews } from './components/Cards/CardReviews/CardReviews';
import { Block3SvgBG } from './components/svg/Block3Svg/Block3Svg';
import RecommendationsCard from './components/Cards/RecommendationsCard/RecommendationsCard';
import { Block4Svg } from './components/svg/Block4Svg/Block4Svg';
import { Tabs } from './components/Tabs/Tabs';

function App() {

  return (
    <main className='header'  >
      <div className='block'>
        <span className='BlockBg'>
          <p>ORACLEDIGITAL</p>
          <p>ORACLEDIGITAL</p>
          <p>ORACLEDIGITAL</p>
       
        </span>
        <div className='blockInfo'>
          <div className='h2'>
            <span>/получи</span>
            <span>работу в it</span>
            <span>программистом вы it </span>
           <div className='h2Button'>
           <button>  <p>Связаться с нами</p>
           <div>
           <AiOutlineArrowRight />
            </div>  </button>
           компании
           </div>
             
          </div>
          <span className='blockInfoP' style={{marginTop:'15px'}}><p>
          Quis fringilla convallis et vitae volutpat at porttitor. Est tincidunt massa aliquam sed enim rhoncus.  Id nullam sollicitudin aliquet in. 
             
            </p>
             </span>
        </div>
      </div>
      <div className='Contend block1'>
        <h2>Почему выбирают нас?</h2>
        <ChooseUsCard />
      </div>
      <div className='Contend block1'>
        <h2>Наши курсы</h2>
        <OurCoursesCard />
      </div>
      <div className='Contend InfoMentors'>
        <div className='InfoMentorsBlock1'>
          <p>Получайте знание у самых топовых менторов</p>
          <span style={{marginTop:'15px'}}>
            Chances are you will be 98% satisfied with the result/ 4.9 is our average
            <button>Записаться
              <div>
                <AiOutlineArrowRight />
              </div>
            </button>
          </span>
        </div>
        <div className='InfoMentorsCards'>
          <MentorsCard />
        </div>
        <span style={{marginTop:'15px'}} className='Blockinfotest'>
            Chances are you will be 98% satisfied with the result/ 4.9 is our average
            <button>Записаться
              <div>
                <AiOutlineArrowRight />
              </div>
            </button>
          </span>
      </div>

      <div className='Contend Reviews'>
        <div className='ReviewsBlock1'>
          <p>Что говорят наши студенты</p>
          <div>
            <span>4.9</span>
            <p>Chances are you will be 98% satisfied with the result/ 4.9 is our average </p>
          </div>
        </div>
        <div className='ReviewsBlock2'>
           <CardReviews /> 
        </div>
      </div>
      <div className='Contend Block3'>
        <div className='Block3Svg' >
        <h2> Почему стоит задуматься о карьере в IT?</h2>
        {/* <Block3SvgBG/> */}
        </div>
       <RecommendationsCard/>
      </div>
      <div  className='block4'>
  <div className='Block4Bg' >
  <img alt='/' src='/bg.png'/>
  </div>
  
  <div>
  <Tabs/>
  </div>
 
      </div>
    </main>
  );
}

export default App;
