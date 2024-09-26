import Sidebar from './Sidebar'
import Main from './Main'
import { useState } from 'react'
function Chat () {
  const [mainMargin, setMargin] = useState(false)
  return (
    <div className='container-fluid'>
      <div className='d-flex row'>
        <Sidebar setMargin={setMargin} margin={mainMargin} />
        <Main margin={mainMargin} />
      </div>
    </div>
  )
}

export default Chat
