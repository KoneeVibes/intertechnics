import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

export const AboutWrapper = styled(Container)(() => {
	return {
		overflow: "hidden",
		"& .CTA-stack": {
			flexDirection: "row",
			alignItems: "center",
			gap: "calc(var(--flex-gap)/18)",
			"& a": {
				textDecoration: "none",
			},
		},
	};
});
