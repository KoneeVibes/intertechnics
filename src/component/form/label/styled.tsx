import { FormLabel, styled } from "@mui/material";
import type { BaseLabelPropsType } from "../../../type/component.type";

export const BaseLabel = styled(FormLabel)<BaseLabelPropsType>(({
	colour,
	fontsize,
	fontweight,
}) => {
	return {
		fontFamily: "Inter",
		fontWeight: fontweight || 500,
		fontSize: fontsize || "14px",
		lineHeight: "normal",
		color: colour || "var(--dark-color-variant-I)",
		marginBlock: "calc(var(--basic-margin)/9)",
		overflow: "hidden",
		textOverflow: "ellipsis",
	};
});
