import { Stack, styled } from "@mui/material";

export const FooterWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/3)",
		padding: "calc(var(--basic-padding)/6)",
		backgroundColor: "var(--dark-color)",
		"& .upper-section": {
			gap: "calc(var(--flex-gap)/3)",
			padding: "calc(var(--basic-padding)/6)",
			"& .link-stack": {
				overflow: "hidden",
				gap: "calc(var(--flex-gap)/6)",
				"& .link-stack-header": {
					overflow: "hidden",
				},
				"& .link-stack-items": {
					gap: "calc(var(--flex-gap)/9)",
					"& .link-stack-item": {
						overflow: "hidden",
					},
				},
			},
		},
		"& .separator": {
			height: "1px",
			backgroundColor: "var(--light-color-variant-I)",
		},
		"& .lower-section": {
			gap: "calc(var(--flex-gap)/3)",
			padding: "calc(var(--basic-padding)/6)",
		},
		[theme.breakpoints.up("laptop")]: {
			padding: "calc(var(--basic-padding)/6) calc(var(--basic-padding)/3)",
		},
		[theme.breakpoints.up("desktop")]: {
			"& .upper-section": {
				flexDirection: "row",
				justifyContent: "space-between",
			},
		},
	};
});
