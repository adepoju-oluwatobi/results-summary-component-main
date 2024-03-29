import './App.css'
import React from 'react'
import ReactionIcon from './assets/images/icon-reaction.svg'
import MemoryIcon from './assets/images/icon-memory.svg'
import VerbalIcon from './assets/images/icon-verbal.svg'
import VisualIcon from './assets/images/icon-visual.svg'

function App() {
  return (
    <>
    <div className="medium-container">
      <div className='container'>
      {/** TOP HEADER */}
        <div className='header'>
          <p className='heading'>Your Result</p>
          <div className='grade'>
            <p className='marks-obtained'>76</p>
            <p className='marks-obtainable'>of <span>100</span></p>
          </div>
          <p className='comment'>Great</p>
          <p className='comment-description'>You score higher than 65% of the people who have taken this test</p>
        </div>
        {/** ------------------ */}

        {/** ------------------ */}
        <div className='content'>
          <p className='summary'>Summary</p>
          <div className='summary-one'>
            <img src={ReactionIcon} alt="" />
            <p className='title'>Reaction</p>
            <p className='scores'>
              80 / <span>100</span>
            </p>
          </div>
          <div className='summary-two'>
            <img src={MemoryIcon} alt="" />
            <p className='title'>Memory</p>
             <p className='scores'>
              92 / <span>100</span>
            </p>
          </div>
          <div className='summary-three'>
            <img src={VerbalIcon} alt="" />
            <p className='title'>Verbal</p>
            <p className='scores'>
              61 / <span>100</span>
            </p>
          </div>
          <div className='summary-four'>
            <img src={VisualIcon} alt="" />
            <p className='title'>Visual</p>
             <p className='scores'>
              72 / <span>100</span>
            </p>
          </div>
          <button>Continue</button>
        </div>
        {/** End of content */}
    </div>
    </div>
    <div className='author'>
      <p>Challenged by Frontend Mentor</p>
    <p>Challenge solved by Adepoju Oluwatobi</p>
    </div>
    </>
  )
}

export default App