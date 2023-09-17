import { useState } from 'react'
import SideMenu from './components/basic/SideMenu'
import { BsCloudMoonFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'
import ToggleButtons from './components/basic/ToggleButtons'
import RadialMenu from './components/basic/RadialMenu'

const App = () => {
	const [theme, setTheme] = useState<boolean>(true)
	const [testingStats, setTestingStats] = useState<boolean>(false)

	const toggleTheme = () => {
		const rootElement = document.documentElement
		if (theme) {
			setTheme(!theme)
			rootElement.setAttribute('data-theme', 'dark')
			return
		}
		rootElement.setAttribute('data-theme', 'light')
		setTheme(!theme)
	}

	const showTestingStats = () => {
		setTestingStats(!testingStats)
	}

	return (
		<div className="bg-bkg text-content">
			<div className="flex flex-row">
				<h1 className="text-3xl font-bold m-2 mb-8">List of react components and features for practice</h1>
				<div className="flex flex-row m-2 p-2">
					<button className="button" onClick={() => toggleTheme()}>
						{theme ? (
							<div className="flex flex-row gap-1">
								Dark
								<BsCloudMoonFill />
							</div>
						) : (
							<div className="flex flex-row gap-1">
								Light
								<FaSun />
							</div>
						)}
					</button>
					<button className="button" onClick={() => showTestingStats()}>
						Testing Stats
					</button>
				</div>
			</div>
			{testingStats ? <div className="component">stats</div> : ''}
			<SideMenu />
			<ToggleButtons />
			<RadialMenu />
		</div>
	)
}

export default App
