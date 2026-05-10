import { Stack, styled } from "@mui/material";

export const OurMissionWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/6)",
		backgroundColor: "var(--dark-color-variant-IX)",
		padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
		[theme.breakpoints.up("tablet")]: {
			alignItems: "center",
			padding: "calc(var(--basic-padding)/2)",
			"& .tag-name, & .title, & .body": {
				width: "75%",
			},
		},
	};
});
