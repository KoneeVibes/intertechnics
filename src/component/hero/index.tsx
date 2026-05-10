import { Box, Typography } from "@mui/material";
import { BaseHeroWrapper } from "./styled";
import type { BaseHeroPropsType } from "../../type/component.type";

export const BaseHero: React.FC<BaseHeroPropsType> = ({
	image,
	title,
	subtitle,
	callToAction,
}) => {
	return (
		<BaseHeroWrapper
			sx={{
				backgroundImage: `url(${image})`,
			}}
		>
			{title && (
				<Box>
					<Typography
						variant="h1"
						sx={{
							fontFamily: "Inter",
							fontWeight: 700,
							fontSize: {
								mobile: 30,
								miniTablet: 45,
								tablet: 50,
								laptop: 60,
								desktop: 70,
								xl: 80,
							},
							lineHeight: "normal",
							color: "var(--light-color-variant-II)",
							whiteSpace: "normal",
							textAlign: "left",
							display: "-webkit-box",
							WebkitLineClamp: 2,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
						}}
					>
						{title}
					</Typography>
				</Box>
			)}
			{subtitle && (
				<Box>
					<Typography
						variant="body1"
						sx={{
							fontFamily: "Inter",
							fontWeight: 400,
							fontSize: { mobile: 19 },
							lineHeight: "normal",
							color: "var(--light-color)",
							textTransform: "capitalize",
							whiteSpace: "normal",
							textAlign: "left",
							display: "-webkit-box",
							WebkitLineClamp: 6,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
						}}
					>
						{subtitle}
					</Typography>
				</Box>
			)}
			{callToAction && callToAction}
		</BaseHeroWrapper>
	);
};
