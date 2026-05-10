import { styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import { AppContext } from "../../context";
import { useContext, useEffect } from "react";

export const NavigationWrapper = styled(Stack)(({ theme }) => {
	const { openMenu, setOpenMenu, setShowServicesDropdown } =
		useContext(AppContext);

	useEffect(() => {
		const handleResize = () => {
			setOpenMenu(false);
			setShowServicesDropdown(false);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [setOpenMenu, setShowServicesDropdown]);

	return {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "calc(var(--basic-padding)/6)",
		gap: "calc(var(--flex-gap)/6)",
		boxSizing: "border-box",
		minHeight: "var(--mobile-nav-height)",
		"& .nav-logo": {
			overflow: "hidden",
			"& img": {
				width: "100%",
				height: "auto",
				cursor: "pointer",
			},
		},
		"& .nav-items": {
			display: openMenu ? "flex" : "none",
			position: openMenu ? "fixed" : "static",
			top: "var(--mobile-nav-height)",
			left: 0,
			right: 0,
			background: "var(--light-color)",
			height: "stretch",
			zIndex: 10,
			overflow: "auto",
			gap: "calc(var(--flex-gap)/3)",
			alignItems: "center",
			padding: "calc(var(--basic-padding)/6)",
			"& .nav-item": {
				"& .services-dropdown": {
					marginBlockStart: "calc(var(--basic-margin)/9)",
					gap: "calc(var(--flex-gap)/9)",
					alignItems: "center",
				},
			},
		},
		"& .nav-menu": {
			overflow: "hidden",
		},
		"& a": {
			textDecoration: "none",
		},
		[theme.breakpoints.up("tablet")]: {
			padding: "calc(var(--basic-padding)/6) calc(var(--basic-padding)/3)",
		},
		[theme.breakpoints.up("laptop")]: {
			minHeight: "unset",
			"& .nav-items": {
				display: "flex",
				flexDirection: "row",
				gap: "calc(var(--flex-gap)/3)",
				padding: 0,
				"& .nav-item": {
					"& .services-dropdown": {
						top: "5rem",
						position: "absolute",
						padding: "calc(var(--basic-padding)/6)",
						background: "var(--light-color)",
						zIndex: 1,
						gap: "calc(var(--flex-gap)/9)",
						maxWidth: "12rem",
						marginBlockStart: "unset",
						alignItems: "flex-start",
					},
				},
			},
			"& .nav-menu": {
				display: "none",
			},
		},
	};
});
