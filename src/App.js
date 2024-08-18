import './App.css';
import chatGPTLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import gptLogo from './assets/chatgptLogo.svg'
import userIcon from './assets/user-icon.png'
import { sendMessageToOpenAI } from './openAi';
import { useEffect, useRef, useState } from 'react';


function App() {
  const msgEnd = useRef(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{
    text: "Hello, Here is ChatGPT , How can i help you!",
    isBot: true
  }]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSendMessage = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      { text, isBot: false }
    ]);
    const response = await sendMessageToOpenAI(input);
    setMessages([
      ...messages,
      { text: input, isBot: false },
      { text: response, isBot: true }
    ])
  }

  const handleEnter = async (e) => {
    if (e.key === 'Enter') await handleSendMessage();
  }

  const handleQuery = async (e) => {
    const text = e.target.value;
    setMessages([
      ...messages,
      { text, isBot: false }
    ]);
    const response = await sendMessageToOpenAI(input);
    setMessages([
      ...messages,
      { text: input, isBot: false },
      { text: response, isBot: true }
    ])
  }

  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={chatGPTLogo} alt='logo' className='logo' />
            <span className='brand'>ChatGPT</span>
          </div>
          <button className='midBtn' onClick={() => { window.location.reload() }}>
            <img src={addBtn} className='addBtn' alt='add button' />
            New Chat
          </button>
          <div className='upperSideBottom'>
            <button className='query' value={"what is programming"} onClick={handleQuery}>
              <img src={msgIcon} alt='message icon' />
              what is programming
            </button>
            <button className='query' value={"How to use api"}>
              <img src={msgIcon} alt='message icon' />
              How to use api
            </button>
            <button className='query' value={"what is java"}>
              <img src={msgIcon} alt='message icon' />
              what is java
            </button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'>
            <img src={home} alt='Home' className='listItemImg' />
            Home
          </div>
          <div className='listItems'>
            <img src={saved} alt='Saved' className='listItemImg' />
            Saved
          </div>
          <div className='listItems'>
            <img src={rocket} alt='Upgrade to pro' className='listItemImg' />
            Upgrade to pro
          </div>
        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          {
            messages.map((message, id) => {
              return <div key={id} className={message.isBot ? 'chat bot' : 'chat'}>
                <img className='chat-img' alt='image' src={message.isBot ? gptLogo : userIcon} />
                <p className='text'>{message.text}</p>
              </div>
            })
          }
          <div ref={msgEnd} />
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' value={input} onKeyDown={handleEnter} onChange={(e) => { setInput(e.target.value) }} placeholder='Send a message...' />
            <button className='send' onClick={handleSendMessage}>
              <img src={sendBtn} alt='send button' />
            </button>
          </div>
          <p>ChatGPT can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
