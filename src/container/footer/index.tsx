import { Box, Stack, Typography } from "@mui/material";
import { FooterWrapper } from "./styled";
import { footerLinks } from "../../config/static";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
	const navigate = useNavigate();

	const handleNavigation = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
		item: Record<string, string | number>,
	) => {
		e.preventDefault();
		return navigate(`${item.url}`);
	};

	return (
		<FooterWrapper>
			<Stack className="upper-section">
				{Object.entries(footerLinks)?.map(([key, footerLinks]) => {
					return (
						<Stack key={key} className="link-stack">
							<Box component={"div"} className="link-stack-header">
								<Typography
									variant="h4"
									sx={{
										fontFamily: "Inter",
										fontWeight: 700,
										fontSize: 30,
										lineHeight: "normal",
										color: "var(--light-color)",
										textTransform: "capitalize",
									}}
								>
									{key}
								</Typography>
							</Box>
							<Stack className="link-stack-items">
								{footerLinks.map((link, index) => {
									return (
										<Box
											key={index}
											component={"div"}
											className="link-stack-item"
											onClick={(e) => {
												if (key === "Connect") return;
												handleNavigation(e, link);
											}}
										>
											<Typography
												variant="subtitle1"
												sx={{
													fontFamily: "Inter",
													fontWeight: 400,
													fontSize: 18,
													lineHeight: "normal",
													color: "var(--light-color)",
													textTransform: "capitalize",
												}}
											>
												{link.name}
											</Typography>
										</Box>
									);
								})}
							</Stack>
						</Stack>
					);
				})}
			</Stack>
			<Box component={"div"} className="separator" />
			<Stack className="lower-section">
				<Box>
					<Typography
						variant="subtitle2"
						sx={{
							fontFamily: "Inter",
							fontWeight: 400,
							fontSize: 18,
							lineHeight: "normal",
							color: "var(--light-color)",
							textTransform: "capitalize",
						}}
					>
						© 2026 Inter-Technics. All rights reserved.
					</Typography>
				</Box>
			</Stack>
		</FooterWrapper>
	);
};
