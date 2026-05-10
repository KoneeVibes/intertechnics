import { OurJourneyWrapper } from "./styled";
import ourJourneyImg from "../../asset/image/our-journey.png";
import { Box, Stack, Typography } from "@mui/material";

export const OurJourney = () => {
	return (
		<OurJourneyWrapper>
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
								Our Story
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
							Our Journey
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
						Founded over a decade ago by strategy consultants and technology
						leaders who saw a gap: clients needed partners who could bridge the
						divide between strategy and execution. Today, we work with
						organizations ranging from ambitious startups to established
						enterprises, built on the foundation of client satisfaction and
						word-of-mouth recommendations.
					</Typography>
				</Box>
			</Stack>
			<Box component={"div"} className="thumbnail-area">
				<img src={ourJourneyImg} alt="Our Story" />
			</Box>
		</OurJourneyWrapper>
	);
};
