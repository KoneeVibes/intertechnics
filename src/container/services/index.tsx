import { ServicesWrapper } from "./styled";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { serviceBrochure } from "../../config/static";
import { BaseButton } from "../../component/button/styled";
import { useNavigate } from "react-router-dom";

export const Services = () => {
	const navigate = useNavigate();

	const handleNavigateToServicePage = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		url: string,
	) => {
		e.stopPropagation();
		return navigate(url);
	};

	return (
		<ServicesWrapper id="services">
			<Stack className="services-header">
				<Stack className="title-tab">
					<Stack className="tag">
						<Box component={"div"} className="tag-dot" />
						<Box component={"div"} className="tag-name">
							<Typography
								variant="subtitle1"
								sx={{
									fontFamily: "Inter",
									fontWeight: 600,
									fontSize: {
										mobile: 17,
									},
									lineHeight: "normal",
									color: "var(--dark-color-variant-II)",
								}}
							>
								What We Do
							</Typography>
						</Box>
					</Stack>
					<Box>
						<Typography
							variant="h2"
							sx={{
								fontFamily: "Inter",
								fontWeight: 700,
								fontSize: {
									mobile: 25,
									miniTablet: 35,
									tablet: 40,
									laptop: 50,
									desktop: 60,
								},
								lineHeight: "normal",
								color: "var(--dark-color)",
							}}
						>
							Our Service Portfolio
						</Typography>
					</Box>
				</Stack>
				<Stack className="learn-more-CTA">
					<Box component={"div"} className="learn-more-CTA-content">
						<Typography
							variant="h6"
							sx={{
								fontFamily: "Inter",
								fontWeight: 500,
								fontSize: 15,
								lineHeight: "normal",
								color: "var(--light-color)",
							}}
						>
							Learn More
						</Typography>
					</Box>
					<Box component={"div"} className="learn-more-CTA-icon">
						<IconButton
							size="large"
							color="inherit"
							sx={{
								color: "var(--dark-color)",
								backgroundColor: "var(--light-color)",
								padding: "calc(var(--basic-padding)/18)",
								"&:hover": {
									backgroundColor: "var(--light-color)",
								},
							}}
						>
							<ArrowForwardIcon />
						</IconButton>
					</Box>
				</Stack>
			</Stack>
			<Grid container spacing={"calc(var(--flex-gap)/3)"}>
				{serviceBrochure.map((service, index) => {
					return (
						<Grid
							key={index}
							sx={{ display: "flex", overflow: "hidden" }}
							size={{ mobile: 12, miniTablet: 6, laptop: 4 }}
						>
							<Stack
								className="service-stack"
								sx={{
									backgroundImage: `url(${service.thumbnail})`,
								}}
							>
								<Box>
									<Typography
										variant="h4"
										sx={{
											fontFamily: "Inter",
											fontWeight: 700,
											fontSize: { mobile: 30, laptop: 33 },
											lineHeight: "normal",
											color: "var(--light-color)",
											whiteSpace: "normal",
										}}
									>
										{service.title}
									</Typography>
								</Box>
								<Box>
									<Typography
										variant="body1"
										sx={{
											fontFamily: "Inter",
											fontWeight: 500,
											fontSize: 15,
											lineHeight: "normal",
											color: "var(--light-color)",
											whiteSpace: "normal",
										}}
									>
										{service.subtitle}
									</Typography>
								</Box>
								<Stack className="CTA-stack">
									<Box sx={{ display: "flex", overflow: "hidden" }}>
										<BaseButton
											disableElevation
											variant="contained"
											colour="var(--light-color-variant-V)"
											bgcolor="var(--light-color-variant-IV)"
											padding="calc(var(--basic-padding)/9)"
											onClick={(e) =>
												handleNavigateToServicePage(e, service.url)
											}
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
												Learn More
											</Typography>
										</BaseButton>
									</Box>
									<Box sx={{ display: "flex", overflow: "hidden" }}>
										<IconButton
											size="large"
											color="inherit"
											sx={{
												borderRadius: "6px",
												color: "var(--dark-color-variant-IV)",
												backgroundColor: "var(--light-color)",
												padding: "calc(var(--basic-padding)/12)",
												"&:hover": {
													backgroundColor: "var(--light-color)",
												},
											}}
											onClick={(e) =>
												handleNavigateToServicePage(e, service.url)
											}
										>
											<ArrowForwardIcon />
										</IconButton>
									</Box>
								</Stack>
							</Stack>
						</Grid>
					);
				})}
			</Grid>
		</ServicesWrapper>
	);
};
