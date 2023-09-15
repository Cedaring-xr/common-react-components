import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ToggleButtons from '../ToggleButtons'

describe('ToggleButtons component', () => {
	it('should render the toggle buttons component', async () => {
		render(<ToggleButtons />)
		const headerElement = screen.getByRole('heading', { name: 'Simple Toggle Buttons' })
		expect(headerElement).toBeDefined()
	})
	it.todo('should be able to change the color when clicking')
	it.todo('should change each color independently')
	it.todo('should display the correct text that corresponds to the color')
})
