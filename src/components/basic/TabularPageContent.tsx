import React, { useState, useReducer } from 'react'

const reducer = (state, action) => {
	//switch statement for handling actions to tabs
}

const TabularPageContent = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 })
	const [tabCount, setTabCount] = useState<number>(0)

	const addTab = () => {
		setCount((prevCount) => prevCount + 1)
	}

	const removeTab = () => {
		setCount((prevCount) => prevCount - 1)
	}

	return (
		<section className="component">
			<h2 className="component-title">Dynamic Tabs</h2>
			<button className="button" onClick={() => addTab()}>
				Add Tab
			</button>
			<div className="h-[50px] border-teal-500 border-2 p-2 mx-4">
				{/* {tabCount.map((tab) => (
					<div>
						<div
							className={activeTab === tab.number ? 'active-tab tabs' : 'tabs'}
							key={tab.id}
							onClick={() => showTab(tab.number)}
						>
							<p className="tab-content">{tab.number}</p>
						</div>
					</div>
				))} */}
			</div>
			<div className="h-[300px] border-black border-[1px] p-2 mx-4 mb-2">
				{/* {tabCount.map((tab) => (
					<div className={activeTab === tab.number ? 'active-content' : 'content'}>
						<h2>Content #{tab.number}</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.
						</p>
						<button onClick={() => removeTab(tab.number)}>Remove Tab</button>
					</div>
				))} */}
			</div>
		</section>
	)
}

export default TabularPageContent
