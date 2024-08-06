import './App.css';
import chatGPTLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'

function App() {
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={chatGPTLogo} className='logo' />
            <span className='brand'>ChatGPT</span>
          </div>
          <button className='midBtn'>
            <img src={addBtn} className='addBtn'/>
            New Chat
          </button>
          <div className='upperSideBottom'>
            <button className='query'>
              <img src={msgIcon}/>
              what is programming
            </button>
            <button className='query'>
              <img src={msgIcon}/>
              How to use api
            </button>
            <button className='query'>
              <img src={msgIcon}/>
              what is java
            </button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'>
            <img src={home} alt='Home' className='listItemImg'/>
            Home
          </div>
          <div className='listItems'>
            <img src={saved} alt='Saved' className='listItemImg'/>
            Saved
          </div>
          <div className='listItems'>
            <img src={rocket} alt='Upgrade to pro' className='listItemImg'/>
            Upgrade to pro
          </div>
        </div>
      </div>
      <div className='main'></div>
    </div>
  );
}

export default App;
