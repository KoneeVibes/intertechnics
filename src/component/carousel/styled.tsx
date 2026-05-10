import { styled } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const BaseCarouselWrapper = styled(Carousel)(({ theme }) => {
	return {
		"& .carousel-arrow": {
			position: "absolute",
			left: "calc(var(--basic-padding)/6)",
			bottom: "calc(var(--basic-padding)/3)",
			cursor: "pointer",
			zIndex: 1,
			"& button": {
				border: "1px solid var(--light-color)",
				borderRadius: "50%",
				padding: "calc(var(--basic-padding)/8)",
			},
		},
		"& .carousel-arrow-next": {
			marginLeft: "calc(var(--flex-gap)/1.75)",
		},
		"& .carousel-status": {
			top: "unset",
			bottom: "calc(var(--basic-padding)/3)",
			right: "calc(var(--basic-padding)/6)",
		},
		[theme.breakpoints.up("tablet")]: {
			"& .carousel-arrow": {
				left: "calc(var(--basic-padding)/3)",
			},
			"& .carousel-status": {
				right: "calc(var(--basic-padding)/3)",
			},
		},
	};
});
