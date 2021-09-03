import React from 'react';
import TextField from "@material-ui/core/TextField"
import { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import './chat.css'
const heroku = process.env.HEROKU;
// const socket = io('https://localhost:3001',{transports :['websocket']})
function Chat(props) {
	console.log('Chat Props', props.NickName);
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
			<div >
				{/* <div id="chatWrapper"> */}

					<form onSubmit={onMessageSubmit}>
						<h1 id="h1Chat">Messenger</h1>
						{/* <div className="name-field">
					<TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Name" />
				</div> */}
						<div>
							<textarea
								name="message"
								onChange={(e) => onTextChange(e)}
								value={state.message}
								id="outlined-multiline-static "
								class="textField"
								placeholder='message....'
							
								
							/>
						</div>
						<button id='buttonCss'>Send Message</button>
					</form>
					<div className="render-chat">
						{/* <h1>Chat Log</h1> */}
						{renderChat()}
					</div>
				{/* </div> */}
			</div>
			{/* <button type="button" id='buttonCss' onClick={props.showWhitboard}>Go to Whiteboard!</button> */}
		</>
	)
}


export default Chat;
