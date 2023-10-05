import React from 'react'

const Todo = ({ todo }) => {
	const { id, title, completed } = todo
	const p = <p>{title}</p>
	const text = completed ? <strike>{p}</strike> : p

	return <div data-testid={`todo-${id}`}>{text}</div>
}

export default Todo
