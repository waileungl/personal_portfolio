import { useState, useEffect, useRef } from 'react';
import { IoMdSend } from 'react-icons/io';
import axios from 'axios';

const will_data = "Personality: Friendly; Context: You are going to pretend to be William, the owner of this website. William is a nickname, his first name is 'Weiliang', and last name is 'Liu'. William is a 27 years old Chinese male freelance software developer, he is actively looking for a software development job. Here is William's self-introduction, you can learn everything about William from the text below:My name is William Liu and I am a full-stack developer with 3 years of experience in the healthcare industry. I am currently working as a freelance developer in the Bay area, California, and I am experienced with the software development life cycle, object-oriented programming, database design, and agile methodologies. My technical skills include proficiency in languages such as JavaScript, Python, Java, SQL, HTML, and CSS as well as experience with frameworks such as React, Next.js, Express.js, Flask, Bootstrap, and Tailwind. I am also well-versed in database management using MongoDB, MySQL, and Firebase, as well as server management using AWS EC2, Nginx, Git, Gunicorn, and PM2. And learning machine learning as well. I have a number of technical projects under my belt.In terms of professional experience, I have worked as a Clinical Engineer at Johnson & Johnson from February 2020 to June 2022, where I provided technical support for cardiac ablation procedures in the Electrophysiology lab, successfully supported over 900 cases. I am also certified Allied Professional Certified Electrophysiology Specialist and I have developed and delivered training programs for new employees as a certified Asia-Pacific Virtual Mentor with 100% pass rate. I obtained a Software Development Certificate from Coding Dojo in November 2022 and a Bachelor of Pharmacy from Taylor's University in Malaysia in 2019. I am always eager to learn and take on new challenges and I am excited to see what opportunities lie ahead.' Please act as William and generate text that responds to the visitor's question or chats casually with them for all the following session, use a humorous tone where you can. Now, the vistor say:"

const will_reminder = "Act as William, the vistor now ask:"

var user_prompt;

var chat_history;

function Chat() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    const appendMessage = (message) => {
        setMessages((messages) => [...messages, message]);
    };

    const lastMessageRef = useRef(null);

    useEffect(() => {
        if (messages.length === 0)
            return;
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (text === '')
            return;
        if(messages.length === 0){
            user_prompt = will_data + text + "; You say:"
            chat_history = will_data + text + "; You say:"
        }else{
            // user_prompt = `${chat_history}; vistor ask:${text};    William say: `
            // chat_history = `${chat_history}; vistor ask:${text};    William say: `
            user_prompt = will_data + text + "; You say:"
            chat_history = will_data + text + "; You say:"
        }

        console.log(text)
        axios.post('http://localhost:8000', { prompt: user_prompt }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                appendMessage({
                    text: res.data.ai,
                });
                chat_history += `${res.data.ai}`
                console.log(chat_history)
            })
            .catch(err => {
                console.log('fail to get response from server', err);
            });
        
        appendMessage({
            text: text,
        });
        setText('');
    };

    return (
        <div className='chat-wrapper'>
            <div className='chat-container'>
                <div className='chat-area'>
                    {messages.map((message, index) => <div key={index} className="message-wrapper" ref={index === messages.length - 1 ? lastMessageRef : null}>
                        <div className="message-content">
                            <p className="name">Test</p>
                            <div className="message">{message.text}</div>
                        </div>
                    </div>
                    )}
                </div>
                <form onSubmit={submitHandler} className="chat-typing-area-wrapper">
                    <div className="chat-typing-area">
                        <input
                            className='chat-input'
                            value={text}
                            placeholder='Ask me anything..'
                            onChange={(e) => setText(e.target.value)} />
                        <button className="send-button">
                            <IoMdSend />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Chat;
