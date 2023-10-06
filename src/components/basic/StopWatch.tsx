import React, { useState, useEffect } from 'react'

export default function Stopwatch() {
	const [time, setTime] = useState(0)
	const [running, setRunning] = useState(false)

	useEffect(() => {
		let interval = null
		if (running) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10)
			}, 10)
		} else {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [running])

	const numberStyle = {
		margin: '20px',
		display: 'flex',
		gap: '0.3rem'
	}

	return (
		<section className="component">
			<h2 className="component-title">Stopwatch</h2>
			<div className="flex m-4 gap-1 text-4xl">
				<span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
				<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
			</div>
			{!running && time === 0 && (
				<button className="button" onClick={() => setRunning(true)}>
					start
				</button>
			)}
			{running && (
				<button className="button" onClick={() => setRunning(false)}>
					stop
				</button>
			)}
			{running ||
				(time !== 0 && (
					<button className="button" onClick={() => setRunning(true)}>
						resume
					</button>
				))}
			{running ||
				(time > 0 && (
					<button className="button" onClick={() => setTime(0)}>
						reset
					</button>
				))}
		</section>
	)
}
