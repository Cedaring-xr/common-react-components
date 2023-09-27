import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ValidationForm from '../ValidationForm'

describe('ToggleButtons component', () => {
	it('should render the toggle buttons component', async () => {
		render(<ValidationForm />)
		const headerElement = screen.getByRole('heading', { name: 'Simple Validation Form' })
		expect(headerElement).toBeDefined()
	})
	it.todo('should be able to input text for name and feedback')
	it.todo('should save and display the text output in the output field')
    it.todo('should overwrite the output of the form on re-submission')
})
