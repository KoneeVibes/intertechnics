import { Box, styled } from "@mui/material";

export const HeroWrapper = styled(Box)(({ theme }) => {
	return {
		"& .hero-slide-stack": {
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			minHeight: "38rem",
			gap: "calc(var(--flex-gap)/3)",
			padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
			"& .CTA-stack": {
				flexDirection: "row",
				alignItems: "center",
				gap: "calc(var(--flex-gap)/18)",
			},
		},
		[theme.breakpoints.up("tablet")]: {
			"& .hero-slide-stack": {
				padding: "calc(var(--basic-padding)/3)",
			},
		},
	};
});
