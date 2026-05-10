import { Box, Stack, Typography } from "@mui/material";
import { DiscussWrapper } from "./styled";
import { BaseButton } from "../../component/button/styled";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Discuss = () => {
	const navigate = useNavigate();
	const matches = useMediaQuery("(max-width:425px)");

	const handleNavigateToContact = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		e.stopPropagation();
		return navigate("/contact-us");
	};

	return (
		<DiscussWrapper>
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
						whiteSpace: "normal",
						color: "var(--dark-color)",
					}}
				>
					Let's Discuss Your Project
				</Typography>
			</Box>
			<Box component={"div"} className="discuss-body">
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Inter",
						fontWeight: 500,
						fontSize: 19,
						lineHeight: "normal",
						whiteSpace: "normal",
						textAlign: { tablet: "center" },
						color: "var(--dark-color-variant-VII)",
					}}
				>
					Whether you need turnkey operations, integrity management, training,
					or technical consultancy, we're here to help. Contact us today to
					discuss how Inter-Technics can support your operations.
				</Typography>
			</Box>
			<Stack className="CTA-stack">
				<Box sx={{ display: "flex", overflow: "hidden" }}>
					<BaseButton
						disableElevation
						variant="contained"
						fullWidth={matches}
						padding="calc(var(--basic-padding)/9)"
						onClick={handleNavigateToContact}
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
							Request a Quote
						</Typography>
					</BaseButton>
				</Box>
				<Box sx={{ display: "flex", overflow: "hidden" }}>
					<BaseButton
						disableElevation
						variant="contained"
						fullWidth={matches}
						colour="var(--dark-color)"
						bgcolor="var(--light-color)"
						padding="calc(var(--basic-padding)/9)"
						onClick={handleNavigateToContact}
						sx={{
							border: "1px solid var(--dark-color-variant-VIII)",
							"&:hover": {
								border: "1px solid var(--dark-color-variant-VIII)",
							},
						}}
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
							Schedule a Consultation
						</Typography>
					</BaseButton>
				</Box>
			</Stack>
		</DiscussWrapper>
	);
};
