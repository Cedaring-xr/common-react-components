import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SideMenu from '../SideMenu'

describe('SideMenu component', () => {
	it('should render the sidemenu component', async () => {
		render(<SideMenu />)
		const headerElement = screen.getByRole('heading', { name: 'Slide Menu' })
		expect(headerElement).toBeDefined()
	})
	it.todo('should be able to expand and contract the side menu')
	it.todo('should have the first item selected when the menu is expanded')
	it.todo('should display the correct text title that correlates to the menu item active')
	it.todo('should be able to select the active item via tab navigation')
})
