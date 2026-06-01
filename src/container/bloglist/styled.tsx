import { Stack, styled } from "@mui/material";

export const BloglistWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/3)",
		padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
		"& .blog-list": {
			gap: "calc(var(--flex-gap)/6)",
			"& .blog-item": {
				cursor: "pointer",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				borderRadius: "8px",
				gap: "calc(var(--flex-gap)/3)",
				backgroundColor: "var(--light-color)",
				boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
				padding: "calc(var(--basic-padding)/6)",
				"& .left-stack": {
					flexDirection: "row",
					alignItems: "center",
					gap: "calc(var(--flex-gap)/6)",
					overflow: "hidden",
					"& .icon-box": { display: "flex" },
					"& .title-area": {
						gap: "calc(var(--flex-gap)/18)",
						overflow: "hidden",
					},
				},
				"& .navigation-button-area": {
					display: "flex",
					overflow: "hidden",
					flexShrink: 1,
				},
			},
		},
		[theme.breakpoints.up(200)]: {
			"& .blog-list": {
				"& .blog-item": {
					"& .navigation-button-area": {
						flexShrink: 0,
					},
				},
			},
		},
		[theme.breakpoints.up("tablet")]: {
			padding: "calc(var(--basic-padding)/3)",
			paddingBottom: "calc(var(--basic-padding))",
		},
	};
});
