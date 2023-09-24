import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Keypad from '../Keypad'

describe('Simple Keypad component', () => {
	it('should render the keypad component', async () => {
		render(<Keypad />)
		const headerElement = screen.getByRole('heading', { name: 'Basic Keypad Code Input' })
		expect(headerElement).toBeDefined()
	})
	it.todo('should be able to genrate a new random 4 digit code')
	it.todo('should be able to clear a generated input code')
	it.todo('should be able to input a 4 digit code by pressing number buttons')
	it.todo('should be able to submit a input code after 4 digits have been pressed')
	it.todo('should validate whether the input code correctly matches the generated code')
})
