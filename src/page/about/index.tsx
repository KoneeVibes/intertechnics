import { AboutWrapper } from "./styled";
import { Navigation } from "../../container/navigation";
import { Footer } from "../../container/footer";
import { Discuss } from "../../container/discuss";
import { Drive } from "../../container/drive";
import { BaseHero } from "../../component/hero";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { BaseButton } from "../../component/button/styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import aboutBg from "../../asset/image/about-bg.png";
import { HashLink } from "react-router-hash-link";
import { OurStory } from "../../container/ourstory";
import { OurJourney } from "../../container/ourjourney";
import { OurMission } from "../../container/ourmission";

export const About = () => {
	const callToAction = (
		<Stack className="CTA-stack">
			<Box sx={{ display: "flex", overflow: "hidden" }}>
				<HashLink smooth={true} to={"/#services"}>
					<BaseButton
						disableElevation
						variant="contained"
						colour="var(--dark-color)"
						bgcolor="var(--light-color)"
						padding="calc(var(--basic-padding)/9)"
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
				</HashLink>
			</Box>
			<Box sx={{ display: "flex", overflow: "hidden" }}>
				<HashLink smooth={true} to={"/#services"}>
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
					>
						<ArrowForwardIcon />
					</IconButton>
				</HashLink>
			</Box>
		</Stack>
	);

	return (
		<AboutWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation />
			<BaseHero
				title="About Inter-Technics"
				subtitle="Expertise You Can Trust. Partnership You Can Count On."
				callToAction={callToAction}
				image={aboutBg}
			/>
			<OurStory />
			<OurJourney />
			<OurMission />
			<Drive />
			<Discuss />
			<Footer />
		</AboutWrapper>
	);
};
