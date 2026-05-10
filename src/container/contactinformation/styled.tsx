import { Stack, styled } from "@mui/material";

export const ContactInformationWrapper = styled(Stack)(({ theme }) => {
	return {
		overflow: "hidden",
		gap: "calc(var(--flex-gap)/3)",
		padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
		"& .left-stack": {
			gap: "calc(var(--flex-gap)/3)",
			"& .contact-avenues": {
				gap: "calc(var(--flex-gap)/12)",
				"& .contact-avenue": {
					flexDirection: "row",
					overflow: "hidden",
					gap: "calc(var(--flex-gap)/12)",
					"& .icon-box": { overflow: "hidden" },
					"& .text-stack": { overflow: "hidden" },
				},
			},
			"& .connection-methods": {
				gap: "calc(var(--flex-gap)/12)",
				overflow: "hidden",
				"& .connection-method": {
					flexDirection: "row",
					gap: "calc(var(--flex-gap)/12)",
					borderRadius: "8px",
					padding: "calc(var(--basic-padding)/12)",
					backgroundColor: "var(--dark-color-variant-XIII)",
					"& .icon-box": { overflow: "hidden" },
					"& .text-stack": { overflow: "hidden" },
				},
			},
		},
		"& .right-stack": {
			borderRadius: "12px",
			gap: "calc(var(--flex-gap)/3)",
			backgroundColor: "var(--light-color)",
			boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
			padding: "calc(var(--basic-padding)/6)",
			"& fieldset": {
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
			},
			"& .MuiFormLabel-root": {
				marginBlock: 0,
				marginBlockEnd: "calc(var(--basic-margin)/9)",
			},
		},
		[theme.breakpoints.up(100)]: {
			"& .left-stack": {
				"& .contact-avenues": {
					"& .contact-avenue": {
						"& .icon-box": {
							flexShrink: 0,
						},
					},
				},
				"& .connection-methods": {
					"& .connection-method": {
						"& .icon-box": {
							flexShrink: 0,
						},
					},
				},
			},
		},
		[theme.breakpoints.up("tablet")]: {
			padding: "calc(var(--basic-padding)/3)",
			flexDirection: "row",
			"& .left-stack": {
				flex: 1,
				overflow: "hidden",
			},
			"& .right-stack": {
				flex: 1,
				overflow: "hidden",
			},
		},
	};
});
