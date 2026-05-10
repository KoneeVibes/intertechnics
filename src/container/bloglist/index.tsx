import { Box, IconButton, Stack, Typography } from "@mui/material";
import { BloglistWrapper } from "./styled";
import { blogs } from "../../config/static";
import blogIcon from "../../asset/icon/blog.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

export const Bloglist = () => {
	const navigate = useNavigate();

	const handleNavigateToBlogPost = (
		e:
			| React.MouseEvent<HTMLButtonElement>
			| React.MouseEvent<HTMLDivElement, MouseEvent>,
		id: string | number,
	) => {
		e.stopPropagation();
		return navigate(`/blog/${id}`);
	};

	return (
		<BloglistWrapper>
			<Box component={"div"} className="header">
				<Typography
					variant="h3"
					sx={{
						fontFamily: "Inter",
						fontWeight: 600,
						fontSize: {
							mobile: 36,
						},
						lineHeight: "normal",
						whiteSpace: "normal",
						color: "var(--dark-color-variant-I)",
					}}
				>
					Latest Articles
				</Typography>
			</Box>
			<Stack className="blog-list">
				{blogs.map((blog, index) => {
					return (
						<Stack
							component={"div"}
							key={index}
							className="blog-item"
							onClick={(e) => handleNavigateToBlogPost(e, blog.id)}
						>
							<Stack className="left-stack">
								<Box>
									<img src={blogIcon} alt="Blog Icon" />
								</Box>
								<Stack className="title-area">
									<Box>
										<Typography
											variant="subtitle1"
											sx={{
												fontFamily: "Inter",
												fontWeight: 500,
												fontSize: {
													mobile: 12,
												},
												lineHeight: "normal",
												whiteSpace: "normal",
												color: "var(--dark-color-variant-XIV)",
											}}
										>
											{blog.category}
										</Typography>
									</Box>
									<Box>
										<Typography
											variant="h5"
											sx={{
												fontFamily: "Inter",
												fontWeight: 500,
												fontSize: {
													mobile: 18,
												},
												lineHeight: "normal",
												whiteSpace: "normal",
												color: "var(--dark-color-variant-I)",
											}}
										>
											{blog.title}
										</Typography>
									</Box>
								</Stack>
							</Stack>
							<Box component={"div"} className="navigation-button-area">
								<IconButton
									size="large"
									color="inherit"
									sx={{
										color: "var(--input-field-color)",
										backgroundColor: "transparent",
										padding: "0",
										"&:hover": {
											backgroundColor: "transparent",
										},
									}}
									onClick={(e) => handleNavigateToBlogPost(e, blog.id)}
								>
									<ArrowForwardIcon />
								</IconButton>
							</Box>
						</Stack>
					);
				})}
			</Stack>
		</BloglistWrapper>
	);
};
