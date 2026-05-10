import { styled } from "@mui/material";
import type { BaseTypographyType } from "../../../type/component.type";

export const BaseLegend = styled("legend")<BaseTypographyType>(({
	fontweight,
	fontsize,
	colour,
}) => {
	return {
		fontFamily: "Inter",
		fontWeight: fontweight || 400,
		fontSize: fontsize || "24px",
		lineHeight: "normal",
		color: colour || "var(--dark-color-variant-I)",
		overflow: "hidden",
		textOverflow: "ellipsis",
	};
});
