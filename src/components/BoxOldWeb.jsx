
import { useState, useRef } from "react"

const BoxOldWeb = () => {
	const [open, setOpen] = useState(false)
	const clickSound = useRef(null)

	const playSound = () => {
		if (clickSound.current) {
			clickSound.current.currentTime = 0
			clickSound.current.play()
		}
	}

	const handleOpen = () => {
		playSound()
		setOpen(true)
	}

	const handleClose = () => {
		playSound()
		setOpen(false)
	}

	return (
		<div id="BoxOldWeb">
			{/* AUDIO */}
			<audio ref={clickSound} src="click.mp3" />

			{/* CARD */}
			<div onClick={handleOpen} className="cursor-pointer">
				<div className="flex justify-between">
					<img src="/link.png" alt="" className="w-auto h-6" />
					<img src="/next.png" alt="" className="h-3 w-3" />
				</div>
				<h1 className="text-white text-base font-semibold pr-0 mt-5">
					Old Website
				</h1>
			</div>

			{/* MODAL */}
			<div
				className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
					open ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
			>
				{/* BACKDROP */}
				<div
					onClick={handleClose}
					className="absolute inset-0 bg-black/60 backdrop-blur-sm"
				/>

				{/* BOX */}
				<div
					className={`relative bg-zinc-900 text-white px-6 py-8 rounded-2xl shadow-xl transform transition-all duration-300 ${
						open ? "scale-100 opacity-100" : "scale-90 opacity-0"
					}`}
				>
					{/* CLOSE BUTTON */}
					<button
						onClick={handleClose}
						className="absolute top-2 right-3 text-white text-lg"
					>
						✕
					</button>

					<h1 className="text-xl font-bold text-center">
						mau ngapain? kepo ya? 😏
					</h1>
					<p className="text-sm text-gray-400 text-center mt-2">
						akses dibatasi bro...
					</p>
				</div>
			</div>
		</div>
	)
}

export default BoxOldWeb
