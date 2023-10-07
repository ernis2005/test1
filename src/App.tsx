import React from 'react';

import './App.scss';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { ChooseUsCard } from './components/Cards/ChooseUsCard/ChooseUsCard';

function App() {
  return (
    <main >
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
            helllo компании
            {/* <button>Связаться с нами  <AiOutlineArrowRight/></button>  */}
          </h2>
          <p>Quis fringilla convallis et vitae volutpat at porttitor. Est tincidunt massa aliquam sed enim rhoncus. <br /> Id nullam sollicitudin aliquet in. </p>
        </div>
      </div>
      <div className='Contend block1'> 
        <h2>Почему выбирают нас?</h2>
         <ChooseUsCard/>
      </div>
      <div>
        hello
      </div>
      <div>
        hello
      </div>
      <div>
        hello
      </div>
      <div>
        hello
      </div>
      <div>
        hello
      </div>
    </main>
  );
}

export default App;
