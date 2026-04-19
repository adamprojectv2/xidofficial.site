import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ButtonSend from "../components/ButtonSend"
import ButtonRequest from "../components/ButtonRequest"
import Modal from "@mui/material/Modal"
import { IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useSpring, animated } from "@react-spring/web"

const Carousel = () => {
	// 🔥 Ganti dengan gambar kamu sendiri
	const images = [
		"/Background.jpg",
		"/P5.jpeg",
		"/P5.jpg",
		"/ClassMeet.jpeg",
		"Background.jpeg", 
	]

	const [open, setOpen] = useState(false)
	const [selectedImage, setSelectedImage] = useState(null)

	const modalFade = useSpring({
		opacity: open ? 1 : 0,
		config: { duration: 300 },
	})

	const settings = {
		centerMode: true,
		centerPadding: "30px",
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1,
					dots: false,
				},
			},
		],
	}

	const handleImageClick = (imageUrl) => {
		setSelectedImage(imageUrl)
		setOpen(true)
	}

	const handleCloseModal = () => {
		setOpen(false)
		setSelectedImage(null)
	}

	return (
		<>
			<div className="text-white opacity-60 text-base font-semibold mb-4 mx-[10%] mt-10 lg:text-center lg:text-3xl lg:mb-8">
				Class Gallery
			</div>

			<div>
				<Slider {...settings}>
					{images.map((img, index) => (
						<img
							key={index}
							src={img}
							alt={`img-${index}`}
							onClick={() => handleImageClick(img)}
							style={{
								cursor: "pointer",
								borderRadius: "10px",
								padding: "5px",
							}}
						/>
					))}
				</Slider>
			</div>

			<div className="flex justify-center items-center gap-6 text-base mt-5">
				<ButtonSend />
				<ButtonRequest />
			</div>

			<Modal
				open={open}
				onClose={handleCloseModal}
				className="flex justify-center items-center"
			>
				<animated.div
					style={{
						...modalFade,
						maxWidth: "90vw",
						position: "relative",
					}}
				>
					<IconButton
						onClick={handleCloseModal}
						sx={{
							position: "absolute",
							top: 10,
							right: 10,
							backgroundColor: "white",
						}}
					>
						<CloseIcon />
					</IconButton>

					<img
						src={selectedImage}
						alt="preview"
						style={{ maxWidth: "100%", borderRadius: "10px" }}
					/>
				</animated.div>
			</Modal>
		</>
	)
}

export default Carousel
