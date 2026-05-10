import { Stack, styled } from "@mui/material";

export const OurStoryWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/3)",
		padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
		"& .thumbnail-area": {
			"& img": {
				width: "100%",
				height: "100%",
				maxHeight: "29rem",
				borderRadius: "15px",
				objectFit: "cover",
			},
		},
		"& .content-area": {
			gap: "calc(var(--flex-gap)/6)",
			"& .title-tab": {
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
						backgroundColor: "var(--supplementary-color-II)",
					},
					"& .tag-name": {
						whiteSpace: "nowrap",
						overflow: "hidden",
					},
				},
			},
		},
		[theme.breakpoints.up(200)]: {
			"& .content-area": {
				"& .title-tab": {
					"& .tag": {
						width: "fit-content",
					},
				},
			},
		},
		[theme.breakpoints.up("tablet")]: {
			padding: "calc(var(--basic-padding)/3)",
			flexDirection: "row",
			justifyContent: "space-between",
			"& .thumbnail-area": {
				flex: 0.4,
				overflow: "hidden",
				"& img": {
					maxHeight: "unset",
				},
			},
			"& .content-area": {
				flex: 0.6,
				overflow: "hidden",
				padding: "calc(var(--basic-padding)/3) 0",
			},
		},
	};
});
