import { Box, IconButton, Stack, Typography } from "@mui/material";
import { BloglistWrapper } from "./styled";
import blogIcon from "../../asset/icon/blog.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Bloglist = () => {
	const API_KEY = import.meta.env.VITE_API_KEY;
	const PROJECT_KEY = import.meta.env.VITE_PROJECT_KEY;
	const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

	const navigate = useNavigate();

	const [liveBlogs, setLiveBlogs] = useState<
		Array<Record<string, string | number>>
	>([]);

	useEffect(() => {
		const retrieveAllBlogService = async () => {
			try {
				const response = await fetch(
					`${API_ENDPOINT}/public/blog/${PROJECT_KEY}`,
					{
						method: "GET",
						headers: {
							Authorization: `APIKey ${API_KEY}`,
							"Content-Type": "application/json",
						},
					},
				);
				const res = await response.json();
				if (!response.ok) {
					console.error("Error:", res);
				}
				return setLiveBlogs(res.data);
			} catch (error) {
				console.error("API fetch error:", error);
			}
		};
		retrieveAllBlogService();
	}, [API_KEY, PROJECT_KEY, API_ENDPOINT]);

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
				{liveBlogs.map((blog, index) => {
					return (
						<Stack
							component={"div"}
							key={index}
							className="blog-item"
							onClick={(e) => handleNavigateToBlogPost(e, blog.id)}
						>
							<Stack className="left-stack">
								<Box component={"div"} className="icon-box">
									<img src={blogIcon} alt="Blog Icon" />
								</Box>
								<Stack className="title-area">
									{blog.category && (
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
									)}
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
