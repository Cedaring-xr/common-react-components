import { useState } from 'react'

interface Dots {
	x: number
	y: number
}

function DotMaker() {
	const [dots, setDots] = useState<Dots[]>([]) //dot position
	const [removedDots, setRemovedDots] = useState<Dots[]>([]) //array of undone dots

	const addCircle = (e) => {
		const { pageX, pageY } = e
		setDots([
			...dots,
			{
				x: pageX,
				y: pageY
			}
		])
	}

	const undo = () => {
		const newDots = [...dots]
		const removedDot = newDots.pop()
		if (!removedDot) return
		setRemovedDots([...removedDots, removedDot])
		setDots(newDots)
	}

	const redo = () => {
		const newRemoved = [...removedDots]
		const newDots = [...dots]
		if (!newRemoved) return
		const removedDot = newRemoved.pop()
		if (removedDots.length > 0) {
			newDots.push(removedDot)
			setDots(newDots)
			setRemovedDots(newRemoved)
		}
		return
	}

	const handleClear = () => {
		setDots([])
	}

	return (
		<section className="component">
			<div>
				<h2 className="component-title">DotMaker</h2>
				<p>click anywhere in the box below.</p>
				<button className="button" onClick={() => handleClear()}>
					Clear All
				</button>
				{dots.length > 0 ? (
					<button className="button" onClick={undo}>
						Undo
					</button>
				) : (
					''
				)}
				{removedDots.length > 0 ? (
					<button className="button" onClick={redo}>
						Redo
					</button>
				) : (
					''
				)}
				<span>Total dot count is: {dots.length}</span>
				<div className="w-[800px] h-[300px] border-2 border-black mb-4" role="customBox" onClick={addCircle}>
					{dots.map((dot, index) => (
						<div
							key={index}
							className="absolute w-4 h-4 rounded-full bg-green-600"
							style={{
								left: dot.x + 'px',
								top: dot.y + 'px'
							}}
						></div>
					))}
				</div>
			</div>
		</section>
	)
}

export default DotMaker
