import { Box, Typography } from "@mui/material";
import { OurMissionWrapper } from "./styled";

export const OurMission = () => {
	return (
		<OurMissionWrapper>
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
						textAlign: { tablet: "center" },
						color: "var(--supplementary-color-III)",
					}}
				>
					Our Story
				</Typography>
			</Box>
			<Box component={"div"} className="title">
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
						whiteSpace: "normal",
						textAlign: { tablet: "center" },
						color: "var(--light-color)",
					}}
				>
					Empowering Sustainable Growth
				</Typography>
			</Box>
			<Box component={"div"} className="body">
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
						textAlign: { tablet: "center" },
						color: "var(--dark-color-variant-VI)",
					}}
				>
					To empower organizations to achieve sustainable growth by delivering
					focused, actionable strategies and digital solutions that create
					lasting impact.
				</Typography>
			</Box>
		</OurMissionWrapper>
	);
};
