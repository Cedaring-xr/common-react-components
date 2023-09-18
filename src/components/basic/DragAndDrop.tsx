import React, { useState, useRef } from 'react'
import { BsStack } from 'react-icons/bs'

function DragAndDrop() {
	const [draggableItems, setDraggableItems] = useState(['Item 1', 'Item 2', 'Item 3'])

	let draggingItem = useRef()
	let dragOver = useRef()

	function handleDrag(e, index) {
		draggingItem = index
	}

	function handleDragOver(e, index) {
		dragOver = index
	}

	function handleDrop(e, index) {}

	return (
		<section className="component">
			<h2 className="component-title">Drag re-order and add Stack</h2>
			<div className="add-drad-item">
				<input type="text" name="draggable-item-name" placeholder="add item" className="input" />
				<button className="button">Add Item</button>
			</div>
			<div className="drag-container">
				{draggableItems.map((item, index) => (
					<div
						key={index}
						className="draggable flex flex-row"
						draggable="true"
						onDragStart={(e) => handleDrag(e, index)}
						onDragOver={(e) => handleDragOver(e, index)}
						onDragEnd={(e) => handleDrop(e, index)}
					>
						<div className="hamburger">
							<BsStack className="text-2xl m-2" />
						</div>
						<p className="mt-2">{item}</p>
					</div>
				))}
			</div>
		</section>
	)
}
export default DragAndDrop
