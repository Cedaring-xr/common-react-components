import { useState } from 'react'
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs'

// TODO: focus functionality with clicking and tabs, title of text matching menu item
const SideMenu = () => {
	const [menu, setMenu] = useState<boolean>(false)
	const [focus, setfocus] = useState<string[]>([])

	const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

	const handleItemSelect = (index: number) => {
		// setfocus(focus = items[index])
	}

	const toggleOpen = () => {
		setMenu(!menu)
		// set focus to item 1 on open
		// setfocus(focus[0])
	}

	const itemFocus = () => {
		console.log('item focus')
	}

	return (
		<section className="component">
			<h2 className="component-title">Slide Menu</h2>
			<div className="flex flex-row">
				<div className="bg-bkg rounded-r-lg min-h-[250px] w-fit border-2 border-stone-600" onClick={toggleOpen}>
					{!menu ? (
						<BsFillArrowRightSquareFill className="text-3xl hover:text-4xl" />
					) : (
						<BsFillArrowLeftSquareFill className="text-3xl hover:text-4xl float-right" />
					)}
					{menu ? (
						<ul className="p-2 m-2 border-2 border-text-content mt-10">
							{items.map((item, index) => (
								<li
									key={index}
									onClick={() => handleItemSelect(index)}
									className="underline pb-2 focus:bg-slate-400"
								>
									{item}
								</li>
							))}
						</ul>
					) : (
						''
					)}
				</div>
				{menu ? (
					<div className="m-8 p-4 border-2 border-content rounded-xl">
						{items.map((item, index) => (
							<div key={index}>
								<h3>{item}</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id commodi
									molestiae ipsum nulla libero dolores sit perferendis inventore cumque.
								</p>
							</div>
						))}
					</div>
				) : (
					''
				)}
			</div>
		</section>
	)
}

export default SideMenu
