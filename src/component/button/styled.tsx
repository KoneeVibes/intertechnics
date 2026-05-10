import { Button, styled, type ButtonProps } from "@mui/material";
import type { BaseButtonPropsType } from "../../type/component.type";

export const BaseButton = styled(Button)<ButtonProps & BaseButtonPropsType>(({
	variant,
	fontsize,
	fontweight,
	radius,
	padding,
	bgcolor,
	border,
	colour,
}) => {
	return {
		fontFamily: "Inter",
		fontWeight: fontweight || 600,
		fontSize: fontsize || "14px",
		lineHeight: "normal",
		borderRadius: radius || "6px",
		border:
			variant === "contained"
				? "none"
				: border || "1px solid var(--dark-color)",
		color:
			variant === "contained"
				? colour || "var(--light-color)"
				: colour || "var(--dark-color)",
		background:
			variant === "contained"
				? bgcolor || "var(--primary-color)"
				: bgcolor || "transparent",
		padding: padding || "calc(var(--basic-padding)/3)",
		textTransform: "capitalize",
		minWidth: 0,
		"&:hover": {
			border:
				variant === "contained"
					? "none"
					: border || "1px solid var(--dark-color)",
			background:
				variant === "contained"
					? bgcolor || "var(--primary-color)"
					: bgcolor || "transparent",
		},
	};
});
