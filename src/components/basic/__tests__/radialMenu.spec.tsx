import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import user from '@testing-library/user-event'
import RadialMenu from '../RadialMenu'

describe('Radial Menu component', () => {
	it('should render the sidemenu component', async () => {
		render(<RadialMenu />)
		const headerElement = screen.getByRole('heading', { name: 'Radial Hover Menu' })
		expect(headerElement).toBeDefined()
	})
	it('should display menu options when hovering over menu button', async () => {
		// user.setup()
		render(<RadialMenu />)
		// const menuElement = screen.getAllByRole('button', { name: 'Menu'})
		const menu = screen.getByText('Menu')
            await user.hover(menu)
            const options = screen.getAllByRole('button')
            expect(options).toHaveLength(7)
		
			// user.setup()
            // render(<RadialMenu/>)
            // const menu = screen.getByText('Menu')
            // await user.hover(menu)
            // const options = screen.getAllByRole('button')
            // expect(options).toHaveLength(7)

	})
	it.todo('should change center menu button from menu to cancel when hovering')
	it.todo('should change the output color and text when clicking on menu button color')
	it.todo('should be able to cancel all color changes when clicking on cancel')
})
