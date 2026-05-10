import { Stack, styled } from "@mui/material";

export const BaseServiceWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/3)",
		padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
		paddingBottom: "calc(var(--basic-padding))",
		"& .services": {
			gap: "calc(var(--flex-gap)/3)",
			"& .service-item": {
				gap: "calc(var(--flex-gap)/6)",
				"& .text-area": {
					gap: "calc(var(--flex-gap)/9)",
				},
				"& .cards-area": {
					gap: "calc(var(--flex-gap)/6)",
					"& .thumbnail-box": {
						flex: 1,
						overflow: "hidden",
						borderRadius: "12px",
						maxHeight: "20rem",
						"& img": {
							width: "100%",
							height: "100%",
							objectFit: "cover",
							borderRadius: "inherit",
						},
					},
					"& .services-list": {
						flex: 1,
						overflow: "hidden",
						borderRadius: "12px",
						padding: "calc(var(--basic-padding)/6)",
						"& .service-items-list": {
							paddingInlineStart: 0,
							display: "flex",
							flexDirection: "column",
							gap: "calc(var(--flex-gap)/12)",
							marginBlock: "calc(var(--flex-gap)/6)",
							"& .service-item": {
								flexDirection: "row",
								alignItems: "center",
								gap: "calc(var(--flex-gap)/18)",
							},
						},
					},
					"& .typical-results": {
						flex: 1,
						overflow: "hidden",
						borderRadius: "12px",
						padding: "calc(var(--basic-padding)/6)",
						"& .result-items-header": {
							flexDirection: "row",
							alignItems: "center",
							gap: "calc(var(--flex-gap)/12)",
						},
						"& .result-items-list": {
							paddingInlineStart: 0,
							display: "flex",
							flexDirection: "column",
							gap: "calc(var(--flex-gap)/12)",
							marginBlock: "calc(var(--flex-gap)/6)",
							"& .result-item": {
								flexDirection: "row",
								alignItems: "flex-start",
								gap: "calc(var(--flex-gap)/18)",
							},
						},
					},
					"& .capabilities": {
						flex: 1,
						overflow: "hidden",
						borderRadius: "12px",
						padding: "calc(var(--basic-padding)/6)",
						"& .capabilities-header": {
							flexDirection: "row",
							alignItems: "center",
							gap: "calc(var(--flex-gap)/12)",
						},
						"& .capabilities-list": {
							paddingInlineStart: 0,
							display: "flex",
							flexDirection: "column",
							gap: "calc(var(--flex-gap)/12)",
							marginBlock: "calc(var(--flex-gap)/6)",
							"& .capability-item": {
								flexDirection: "row",
								alignItems: "flex-start",
								gap: "calc(var(--flex-gap)/18)",
							},
						},
					},
				},
			},
		},
		[theme.breakpoints.up("tablet")]: {
			gap: "calc(var(--flex-gap)/2)",
			padding: "calc(var(--basic-padding)/3)",
			paddingBottom: "calc(var(--basic-padding))",
			"& .introduction": {
				width: "75%",
				marginLeft: "auto",
				marginRight: "auto",
			},
			"& .services": {
				gap: "calc(var(--flex-gap)/2)",
				"& .service-item": {
					"& .cards-area": {
						flexDirection: "row",
						justifyContent: "space-between",
						"& .thumbnail-box": {
							maxHeight: "unset",
						},
					},
				},
			},
		},
	};
});
