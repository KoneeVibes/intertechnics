import { Select, styled } from "@mui/material";
import type { BaseInputPropsType } from "../../../type/component.type";

export const BaseSelect = styled(Select)<BaseInputPropsType>(({
	colour,
	bgcolor,
	fontweight,
	fontsize,
	border,
	radius,
}) => {
	return {
		fontFamily: "Inter",
		fontWeight: fontweight || 400,
		fontSize: fontsize || "14px",
		lineHeight: "normal",
		border: border || "1px solid var(--border-color)",
		borderRadius: radius || "6px",
		color: colour || "var(--input-field-color)",
		backgroundColor: bgcolor || "var(--input-bg-color)",
		padding: "calc(var(--basic-padding)/9)",
		outline: "none",
		"& .MuiInputBase-input": {
			textOverflow: "ellipsis",
			padding: 0,
		},
		"& fieldset": {
			border: "none",
		},
	};
});
