import { OurStoryWrapper } from "./styled";
import ourStoryImg from "../../asset/image/our-service.png";
import { Box, Stack, Typography } from "@mui/material";

export const OurStory = () => {
	return (
		<OurStoryWrapper>
			<Box component={"div"} className="thumbnail-area">
				<img src={ourStoryImg} alt="Our Story" />
			</Box>
			<Stack className="content-area">
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
				<Box>
					<Typography
						variant="body1"
						sx={{
							fontFamily: "Inter",
							fontWeight: 500,
							fontSize: {
								mobile: 19,
							},
							lineHeight: "normal",
							whiteSpace: "normal",
							color: "var(--dark-color-variant-VI)",
						}}
					>
						Inter-Technics is a strategic advisory and digital transformation
						consultancy dedicated to helping organizations achieve sustainable
						growth through focused, actionable solutions. With a team of
						seasoned professionals who have led transformation initiatives at
						Fortune 500 companies and high-growth startups alike, we bring a
						rare combination of strategic thinking, technical expertise, and
						hands-on implementation experience.
					</Typography>
				</Box>
			</Stack>
		</OurStoryWrapper>
	);
};
