import { Stack, styled } from "@mui/material";

export const TrustedPartnerWrapper = styled(Stack)(({ theme }) => {
	return {
		"& .title-tab": {
			padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
			justifyContent: "flex-start",
			gap: "calc(var(--flex-gap)/12)",
			overflow: "hidden",
			"& .tag": {
				flexDirection: "row",
				alignItems: "center",
				borderRadius: "27px",
				width: "-webkit-fill-available",
				gap: "calc(var(--flex-gap)/18)",
				padding: "calc(var(--basic-padding)/12)",
				backgroundColor: "var(--light-color-variant-III)",
				"& .tag-dot": {
					width: 10,
					height: 10,
					borderRadius: "50%",
					backgroundColor: "var(--primary-color)",
				},
				"& .tag-name": {
					whiteSpace: "nowrap",
					overflow: "hidden",
				},
			},
		},
		"& .content-stack": {
			"& .thumbnail-area": {
				padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
				borderTop: "1px solid var(--dark-color-variant-V)",
				"& img": {
					width: "100%",
					maxHeight: "29rem",
					borderRadius: "15px",
				},
			},
			"& .content-area": {
				"& .partnership-detail": {
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					gap: "calc(var(--flex-gap)/6)",
					padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
					borderLeft: "1px solid var(--dark-color-variant-V)",
					borderTop: "1px solid var(--dark-color-variant-V)",
					"& .detail-area": {
						overflow: "hidden",
					},
					"& .detail-icon": {
						overflow: "hidden",
					},
				},
			},
		},
		[theme.breakpoints.up(200)]: {
			"& .title-tab": {
				"& .tag": {
					width: "fit-content",
				},
			},
			"& .content-stack": {
				"& .content-area": {
					"& .partnership-detail": {
						"& .detail-icon": {
							flexShrink: 0,
						},
					},
				},
			},
		},
		[theme.breakpoints.up("tablet")]: {
			"& .title-tab": {
				padding: "calc(var(--basic-padding)/3)",
			},
			"& .content-stack": {
				"& .thumbnail-area": {
					flex: 1,
					overflow: "hidden",
					padding: "calc(var(--basic-padding)/3)",
				},
				"& .content-area": {
					flex: 1,
					overflow: "hidden",
					"& .partnership-detail": {
						padding: "calc(var(--basic-padding)/3)",
					},
				},
			},
		},
		[theme.breakpoints.up("laptop")]: {
			"& .title-tab": {
				padding: "calc(var(--basic-padding)/3)",
			},
			"& .content-stack": {
				flexDirection: "row",
				"& .thumbnail-area": {
					flex: 1,
					overflow: "hidden",
				},
				"& .content-area": {
					flex: 1,
					overflow: "hidden",
				},
			},
		},
	};
});
