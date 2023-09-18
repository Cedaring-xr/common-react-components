import React, { useState } from 'react'

const ValidationForm = () => {
	const [name, setName] = useState<string>('')

	const handleSubmit = () => {}

	return (
		<section className="component">
			<h2>Simple Validation Form</h2>
			<form onSubmit={handleSubmit()}>
				<label htmlFor="Name">Name Input Field</label>
				<input type="text" placeholder="Name" className="input" name="Name"></input>
				<textarea placeholder="Feedback paragraph"></textarea>
				<button className="button" type="submit">
					Submit Form
				</button>
			</form>
			<div>Output of Form</div>
		</section>
	)
}

export default ValidationForm
