import { Stack, styled } from "@mui/material";

export const ServicesWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/3)",
		padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
		"& .services-header": {
			overflow: "hidden",
			gap: "calc(var(--flex-gap)/6)",
			"& .learn-more-CTA": {
				overflow: "hidden",
				width: "-webkit-fill-available",
				cursor: "pointer",
				borderRadius: "40px",
				flexDirection: "row",
				alignItems: "center",
				gap: "calc(var(--flex-gap)/18)",
				backgroundColor: "var(--primary-color)",
				padding: "calc(var(--basic-padding)/18) calc(var(--basic-padding)/12)",
				"& .learn-more-CTA-content": {
					whiteSpace: "nowrap",
					overflow: "hidden",
				},
			},
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
						backgroundColor: "var(--primary-color)",
					},
					"& .tag-name": {
						whiteSpace: "nowrap",
						overflow: "hidden",
					},
				},
			},
		},
		"& .service-stack": {
			cursor: "pointer",
			overflow: "hidden",
			borderRadius: "15px",
			justifyContent: "flex-end",
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			minHeight: "20rem",
			gap: "calc(var(--flex-gap)/6)",
			padding: "calc(var(--basic-padding)/6)",
			"& .CTA-stack": {
				display: "none",
				flexDirection: "row",
				alignItems: "center",
				gap: "calc(var(--flex-gap)/18)",
			},
			"&:hover": {
				"& .CTA-stack": {
					display: "flex",
				},
			},
		},
		[theme.breakpoints.up(200)]: {
			"& .services-header": {
				"& .learn-more-CTA": {
					width: "fit-content",
				},
				"& .title-tab": {
					"& .tag": {
						width: "fit-content",
					},
				},
			},
		},
		[theme.breakpoints.up("tablet")]: {
			padding: "calc(var(--basic-padding)/3)",
			"& .services-header": {
				flexDirection: "row",
				alignItems: "center",
				gap: "calc(var(--flex-gap)/3)",
				justifyContent: "space-between",
			},
		},
	};
});
