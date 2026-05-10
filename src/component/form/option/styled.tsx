import { MenuItem, styled } from "@mui/material";
import type { BaseTypographyType } from "../../../type/component.type";

export const BaseOption = styled(MenuItem)<BaseTypographyType>(({
	colour,
	fontweight,
	fontsize,
}) => {
	return {
		fontFamily: "Inter",
		fontWeight: fontweight || 400,
		fontSize: fontsize || "14px",
		lineHeight: "normal",
		color: colour || "var(--input-field-color)",
		padding: "calc(var(--basic-padding)/9)",
	};
});
