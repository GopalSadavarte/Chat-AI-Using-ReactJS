import { useState } from 'react'
import LandingInfo from './LandingInfo'
export default function Main ({ margin }) {
  const [input, setInput] = useState('')

  function sendRequest () {
    if (input !== '') {
      alert(input)
    }
  }
  return (
    <div
      className={`${margin ? 'width position-fixed' : 'col-10'} text-light`}
      id='main'
    >
      <div className='col-2'>
        <h2 className='heading mx-2 my-3 main-heading fs-4'>Chat-AI</h2>
      </div>
      <div className='container w-75 my-4 mx-auto' style={{ height: '70vh' }}>
        <h2
          className='heading mx-auto text-center'
          style={{ color: 'rgb(202, 199, 199)' }}
        >
          Welcome to Chat-AI
        </h2>
        <div
          className='d-flex w-100 mx-5 my-5'
          style={{ alignContent: 'center' }}
        >
          <LandingInfo />
        </div>
      </div>
      <div className='form-input text-center'>
        <div>
          <input
            type='text'
            name='input'
            id='input'
            onChange={e => setInput(e.target.value)}
            onKeyUp={e => {
              if (e.key == 'Enter') {
                e.currentTarget.nextElementSibling.click()
              }
            }}
            placeholder='Write a message'
          />
          <i class='fa-solid fa-paper-plane' onClick={sendRequest}></i>
        </div>
      </div>
      <footer className='mt-1'>
        <p className='text-center'>
          Created by <strong>Gopal Sadavarte</strong>
        </p>
      </footer>
    </div>
  )
}
