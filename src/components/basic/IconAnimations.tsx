import React from 'react'
import { GiWaterDrop } from 'react-icons/gi'

const IconAnimations = () => {
	return (
		<section className="component">
			<div className="border border-gray-800 rounded-lg w-16 h-14 px-1 py-0 pt-2 flex flex-row m-4 bg-slate-600">
				<div className="w-2 bg-lime-500 animate-[playing_1.2s_ease-in-out_infinite] origin-bottom m-0.5"></div>
				<div className="w-2 bg-lime-500 animate-[playing2_1.2s_ease-in-out_infinite] origin-bottom m-0.5"></div>
				<div className="w-2 bg-lime-500 animate-[playing3_1.2s_ease-in-out_infinite] origin-bottom m-0.5"></div>
				<div className="w-2 bg-lime-500 animate-[playing4_1.2s_ease-in-out_infinite] origin-bottom m-0.5"></div>
				<div className="w-2 bg-lime-500 animate-[playing5_1.2s_ease-in-out_infinite] origin-bottom m-0.5"></div>
			</div>
			<div className="border border-gray-800 rounded-lg w-16 h-14 px-2 py-2 flex flex-row m-4 bg-slate-600 relative">
				<div className="w-4 h-4 bg-emerald-500 animate-[cycle1_3s_infinite] absolute"></div>
				<div className="w-4 h-4 bg-emerald-500 animate-[cycle2_3s_infinite] absolute  bottom-2 right-2"></div>
			</div>
			<div className="border border-gray-800 rounded-lg w-16 h-14 px-2 py-2 flex flex-row m-4 bg-slate-600 relative">
				single spinner
			</div>
			<div className="border border-gray-800 rounded-lg w-16 h-14 px-2 py-2 flex flex-row m-4 bg-slate-600 relative">
				multi spinner
			</div>
			<div className="border border-gray-800 rounded-lg w-16 h-14 px-2 py-2 flex flex-row m-4 bg-slate-600 relative items-center">
				<GiWaterDrop className="text-teal-500 text-2xl mx-auto animate-ping" />
				<div className="chang-size rounded-full w-1 h-1"></div>
			</div>
			<div className="border border-gray-800 rounded-lg w-16 h-14 px-2 py-2 flex flex-row m-4 bg-slate-600 relative">
				One Plus spinning dots
			</div>
			<div className="border border-gray-800 rounded-lg w-16 h-14 px-2 py-2 flex flex-row m-4 bg-slate-600 relative">
				twitch points redeem box
			</div>
		</section>
	)
}

export default IconAnimations
