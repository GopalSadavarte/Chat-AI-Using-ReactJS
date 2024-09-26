export default function Sidebar ({ setMargin, margin }) {
  function toggle () {
    const side = document.getElementById('sidebar')
    side.classList.toggle('set-margin')
    if (margin) {
      setMargin(false)
    } else {
      setMargin(true)
    }
  }

  return (
    <aside className='col-2 text-light' id='sidebar'>
      <div className={`side-bar my-4`}>
        <div
          className={`heading ${margin ? 'position-absolute' : 'remove'}`}
          style={{ display: margin ? 'block' : 'flex', gap: '8rem' }}
        >
          <i
            className='fa-solid fa-bars fs-5 mx-2'
            title='Toggle Sidebar'
            onClick={toggle}
          ></i>
          <i
            className='fa-brands fa-rocketchat fs-5 mx-1'
            title='New Chat'
            onClick={() => {
              document.getElementById('input').focus()
            }}
          ></i>
        </div>
        <hr />
        <div className='container-fluid my-4' id='history'>
          <h6 className='heading text-light'>History</h6>
          <hr />
          <span>Users:100</span>
        </div>
      </div>
    </aside>
  )
}
