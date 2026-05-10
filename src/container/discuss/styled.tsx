import { Stack, styled } from "@mui/material";

export const DiscussWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--basic-padding)/3) calc(var(--flex-gap)/9)",
		backgroundColor: "var(--light-color-variant-VI)",
		padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
		"& .CTA-stack": {
			gap: "calc(var(--flex-gap)/9)",
		},
		[theme.breakpoints.up("miniTablet")]: {
			"& .CTA-stack": {
				flexDirection: "row",
				alignItems: "center",
				gap: "calc(var(--flex-gap)/6)",
			},
		},
		[theme.breakpoints.up("tablet")]: {
			alignItems: "center",
			padding: "calc(var(--basic-padding)) calc(var(--basic-padding)/3)",
			"& .discuss-body": {
				width: "75%",
			},
		},
	};
});
