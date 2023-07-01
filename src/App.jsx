import React from 'react'
import './app.css'

function App() {
  return (
    <div className='conainer'>
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
          <p>Summary</p>
          <div>
            <img src="" alt="" />
            <p>Reaction</p>
            <p>
              80 / <span>100</span>
            </p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Memory</p>
             <p>
              92 / <span>100</span>
            </p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Verbal</p>
            <p>
              61 / <span>100</span>
            </p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Visual</p>
             <p>
              72 / <span>100</span>
            </p>
          </div>
          <button>Continue</button>
        </div>
        {/** End of content */}
    </div>
  )
}

export default App