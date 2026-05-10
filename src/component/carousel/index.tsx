import { Box, IconButton } from "@mui/material";
import { BaseCarouselWrapper } from "./styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type React from "react";
import type { BaseCarouselPropsType } from "../../type/component.type";

export const BaseCarousel: React.FC<BaseCarouselPropsType> = ({
	autoFocus,
	infiniteLoop,
	showStatus,
	children,
}) => {
	return (
		<BaseCarouselWrapper
			autoFocus={autoFocus}
			infiniteLoop={infiniteLoop}
			interval={10000}
			showIndicators={false}
			showThumbs={false}
			showStatus={showStatus}
			renderArrowPrev={(clickHandler) => {
				return (
					<Box component={"div"} className="carousel-arrow carousel-arrow-prev">
						<IconButton
							size="large"
							color="inherit"
							sx={{
								color: "var(--light-color)",
								padding: 0,
							}}
							onClick={clickHandler}
						>
							<ArrowBackIcon />
						</IconButton>
					</Box>
				);
			}}
			renderArrowNext={(clickHandler) => {
				return (
					<Box component={"div"} className="carousel-arrow carousel-arrow-next">
						<IconButton
							size="large"
							color="inherit"
							sx={{
								color: "var(--light-color)",
								padding: 0,
							}}
							onClick={clickHandler}
						>
							<ArrowForwardIcon />
						</IconButton>
					</Box>
				);
			}}
		>
			{children}
		</BaseCarouselWrapper>
	);
};
