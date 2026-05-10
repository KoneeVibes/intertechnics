import { Stack, styled } from "@mui/material";

export const BaseHeroWrapper = styled(Stack)(({ theme }) => {
	return {
		justifyContent: "center",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		minHeight: "28rem",
		gap: "calc(var(--flex-gap)/3)",
		padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
		[theme.breakpoints.up("tablet")]: {
			padding: "calc(var(--basic-padding)/3)",
		},
	};
});
