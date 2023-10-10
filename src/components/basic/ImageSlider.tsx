import React, { useState } from 'react'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { FaChevronCircleRight } from 'react-icons/fa'
import { GoDot } from 'react-icons/go'
import { GoDotFill } from 'react-icons/go'

import camp from '/public/camping1.png'
import ship from '/public/icyShip.png'
import mtn from '/public/spaceMountains.png'

const images = [
	{ url: camp, description: 'camping', alt: 'camping image' },
	{ url: ship, description: 'ship in ice', alt: 'ship in ice' },
	{ url: mtn, description: 'psychedelic mountains', alt: 'psychedelic colorful mountains' }
]

export default function ImageSlider() {
	const [imageIndex, setImageIndex] = useState(0)

	const prevImage = () => {
		console.log('prev')
		setImageIndex((index) => {
			if (index === 0) {
				return images.length - 1
			}
			return index - 1
		})
	}

	const nextImage = () => {
		console.log('next')
		setImageIndex((index) => {
			if (index === images.length - 1) {
				return 0
			}
			return index + 1
		})
	}
	return (
		<section className="component h-[400px] p-4 relative">
			<div id="carousel-container" className=" w-[350px] h-[350px] overflow-hidden">
				<div className="relative w-[1050px] flex">
					{images.map((image) => (
						<div key={image.url}>
							<img
								src={image.url}
								className="object-cover transition:translate duration-300"
								style={{ translate: `${-100 * imageIndex}%` }}
							></img>
						</div>
					))}
					<button
						aria-label="view previous"
						className="hover:bg-slate-700 focus-visible:bg-slate-700 opacity-70 w-[35px] h-[350px] cursor-pointer absolute flex justify-start items-center transition-all ease-in-out duration-200 group"
						onClick={() => prevImage()}
					>
						<FaChevronCircleLeft className="text-3xl text-neutral-700 group-hover:text-slate-100 group-focus-visible:text-slate-100 ml-1 transition-all ease-in-out duration-200" />
					</button>
					<button
						aria-label="view-next"
						className="hover:bg-slate-700 focus-visible:bg-slate-700 opacity-70 h-[350px] w-[35px] absolute left-[315px] flex justify-end items-center transition-all ease-in-out duration-200 group"
						onClick={() => nextImage()}
					>
						<FaChevronCircleRight className="text-3xl text-neutral-700 group-hover:text-slate-100 group-focus-visible:text-slate-100 mr-1 transition-all ease-in-out duration-200" />
					</button>
				</div>
				<div id="image-button-container" className="absolute flex left-[175px] top-[345px]">
					{images.map((_, index) => (
						<button
							key={index}
							aria-label={`view image ${index}`}
							onClick={() => setImageIndex(index)}
							className="text-white"
						>
							{index === imageIndex ? <GoDotFill /> : <GoDot />}
						</button>
					))}
				</div>
			</div>
		</section>
	)
}
