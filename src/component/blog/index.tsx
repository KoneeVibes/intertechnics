import type { BaseBlogPropsType } from "../../type/component.type";
import { BaseBlogWrapper } from "./styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const BaseBlog: React.FC<BaseBlogPropsType> = ({ message }) => {
	const paragraphs = message
		? message
				.split(/\r?\n\s*\r?\n/)
				.map((paragraph: string) => paragraph.trim())
				.filter(Boolean)
		: [];

	const blocks: string[] = [];
	for (let i = 0; i < paragraphs.length; i += 4) {
		blocks.push(paragraphs.slice(i, i + 4).join("\n\n"));
	}

	return (
		<BaseBlogWrapper>
			{blocks.map((content, index) => (
				<Box key={index}>
					<Typography
						variant="body1"
						sx={{
							fontFamily: "Inter",
							fontWeight: 400,
							fontSize: { mobile: 19 },
							lineHeight: "normal",
							color: "var(--dark-color-variant-I)",
							whiteSpace: "pre-line",
						}}
					>
						{content}
					</Typography>
				</Box>
			))}
		</BaseBlogWrapper>
	);
};
