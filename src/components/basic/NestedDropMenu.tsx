import { useState } from 'react'

type NavItem = {
	label: string
	subItems?: NavItem[] // Submenu items, if any
  };

const NestedDropMenu: React.FC = () => {
	const [menuItems] = useState<NavItem[]>([
		{
		  label: 'Home',
		},
		{
		  label: 'Products',
		  subItems: [
			{ label: 'Product 1',
				subItems: [
					{ label: 'subProduct 1'},
					{ label: 'subProduct 2'},
					{ label: 'subProduct 3'}
				] },
			{ label: 'Product 2' },
			{ label: 'Product 3' },
		  ],
		},
		{
		  label: 'Services',
		  subItems: [
			{ label: 'Service 1' },
			{ label: 'Service 2' },
		  ],
		},
		{
		  label: 'Contact',
		},
	])
	const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)
	const [nestedMenu, setNestedMenu] = useState<string | null>(null)

	const handleSubMenuToggle = (label: string) => {
	if (openSubMenu === label) {
		setOpenSubMenu(null)
		} else {
			setOpenSubMenu(label)
		}
	}

	const handleNestedMenuToggle = (label: string) => {
		if (openSubMenu === label) {

		}
	}

	return (
		<section className="component">
			<h2 className="component-title">Nested Drop Menu</h2>
			<nav className='w-full h-[300px] border-[1px] border-teal-500'>
				<ul className='flex flex-row bg-slate-200'>
					{menuItems.map((item, index) => (
					<li key={index} className='m-2 text-bkg p-2' onMouseEnter={() => handleSubMenuToggle(item.label)}
					onMouseLeave={() => handleSubMenuToggle(item.label)}>
						<span
						
						className={`bg-slate-300 ${ item.subItems ? 'has-submenu' : ''}`}
						>
						{item.label}
						</span>
						{item.subItems && openSubMenu === item.label && (
						<ul>
							{item.subItems.map((subItem, subIndex) => (
							<li key={subIndex} onMouseEnter={() => handleSubMenuToggle(item.label)}
							onMouseLeave={() => handleNestedMenuToggle(item.label)}>{subItem.label}</li>
							))}
						</ul>
						)}
					</li>
					))}
				</ul>
			</nav>
		</section>
	)
}

export default NestedDropMenu
