import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import RadialMenu from '../RadialMenu'

describe('Radial Menu component', () => {
	it('should render the sidemenu component', async () => {
		render(<RadialMenu />)
		const headerElement = screen.getByRole('heading', { name: 'Radial Hover Menu' })
		expect(headerElement).toBeDefined()
	})
	it.todo('should display menu options when hovering over menu button')
	it.todo('should change center menu button from menu to cancel when hovering')
	it.todo('should change the output color and text when clicking on menu button color')
	it.todo('should be able to cancel all color changes when clicking on cancel')
})
