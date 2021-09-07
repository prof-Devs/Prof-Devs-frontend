import React from 'react';
import TextField from "@material-ui/core/TextField"
import { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import './chat.css'
import { BiSend } from 'react-icons/bi';

const heroku = process.env.HEROKU;
// const socket = io('https://localhost:3001',{transports :['websocket']})
function Chat(props) {
	const [state, setState] = useState({ message: "", name: props.NickName })
	const [chat, setChat] = useState([])

	const socketRef = useRef()

	useEffect(
		() => {
			socketRef.current = io.connect("https://profdev-academy.herokuapp.com", { transports: ['websocket'] })
			socketRef.current.on("message", ({ name, message }) => {
				setChat([...chat, { name, message }])
			})
			return () => socketRef.current.disconnect()
		},
		[chat]
	)

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	}

	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
			<div key={index}>
				<h3>
					{name}: <span>{message}</span>
				</h3>
			</div>
		))
	}

	return (
		<>
			<div id="chat-container">
				<form onSubmit={onMessageSubmit}>
					<h1 id="h1Chat">Messenger</h1>
					<div className="render-chat">
						{renderChat()}
					</div>
					<div id="typing">
						<div>
							<textarea
								name="message"
								onChange={(e) => onTextChange(e)}
								value={state.message}
								id="outlined-multiline-static "
								className="textField"
								placeholder='type here ... '
							/>
						</div>
						<div>
							<button id='buttonCss'><BiSend /></button>
						</div>
					</div>
				</form>
			</div>


		</>
	)
}


export default Chat;
