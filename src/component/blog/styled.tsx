import { Stack, styled } from "@mui/material";

export const BaseBlogWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/3)",
		padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
		[theme.breakpoints.up("tablet")]: {
			padding: "calc(var(--basic-padding)/3)",
			paddingBottom: "calc(var(--basic-padding))",
		},
	};
});
