import { Box, IconButton, Stack, Typography } from "@mui/material";
import { BaseCarousel } from "../../component/carousel";
import { heroSlides } from "../../config/static";
import { HeroWrapper } from "./styled";
import { BaseButton } from "../../component/button/styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
	const navigate = useNavigate();

	const handleNavigateToAboutUs = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		return navigate("/about");
	};

	return (
		<HeroWrapper>
			<BaseCarousel showStatus={true} autoFocus={true} infiniteLoop={true}>
				{heroSlides.map((slide, index) => {
					return (
						<Stack
							key={index}
							className="hero-slide-stack"
							sx={{
								backgroundImage: `url(${slide.image})`,
							}}
						>
							<Box>
								<Typography
									variant="h1"
									sx={{
										fontFamily: "Inter",
										fontWeight: 700,
										fontSize: {
											mobile: 30,
											miniTablet: 45,
											tablet: 50,
											laptop: 60,
											desktop: 70,
											xl: 80,
										},
										lineHeight: "normal",
										color: "var(--light-color-variant-II)",
										whiteSpace: "normal",
										textAlign: "left",
										display: "-webkit-box",
										WebkitLineClamp: 2,
										WebkitBoxOrient: "vertical",
										overflow: "hidden",
									}}
								>
									{slide.title}
								</Typography>
							</Box>
							<Box>
								<Typography
									variant="body1"
									sx={{
										fontFamily: "Inter",
										fontWeight: 400,
										fontSize: { mobile: 19 },
										lineHeight: "normal",
										color: "var(--light-color)",
										textTransform: "capitalize",
										whiteSpace: "normal",
										textAlign: "left",
										display: "-webkit-box",
										WebkitLineClamp: 6,
										WebkitBoxOrient: "vertical",
										overflow: "hidden",
									}}
								>
									{slide.subtitle}
								</Typography>
							</Box>
							<Stack className="CTA-stack">
								<Box sx={{ display: "flex", overflow: "hidden" }}>
									<BaseButton
										disableElevation
										variant="contained"
										colour="var(--dark-color)"
										bgcolor="var(--light-color)"
										padding="calc(var(--basic-padding)/9)"
										onClick={handleNavigateToAboutUs}
									>
										<Typography
											color={"inherit"}
											variant={"button"}
											sx={{
												fontSize: "inherit",
												fontFamily: "inherit",
												fontWeight: "inherit",
												lineHeight: "inherit",
												textTransform: "capitalize",
											}}
										>
											Explore More
										</Typography>
									</BaseButton>
								</Box>
								<Box sx={{ display: "flex", overflow: "hidden" }}>
									<IconButton
										size="large"
										color="inherit"
										sx={{
											borderRadius: "6px",
											color: "var(--light-color)",
											backgroundColor: "var(--primary-color)",
											padding: "calc(var(--basic-padding)/12)",
											"&:hover": {
												backgroundColor: "var(--primary-color)",
											},
										}}
										onClick={handleNavigateToAboutUs}
									>
										<ArrowForwardIcon />
									</IconButton>
								</Box>
							</Stack>
						</Stack>
					);
				})}
			</BaseCarousel>
		</HeroWrapper>
	);
};
