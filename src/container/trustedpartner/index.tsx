import { Box, Stack, Typography } from "@mui/material";
import { TrustedPartnerWrapper } from "./styled";
import trustedPartner from "../../asset/image/trusted-partner.png";
import { partnership } from "../../config/static";

export const TrustedPartner = () => {
	return (
		<TrustedPartnerWrapper>
			<Stack className="title-tab">
				<Stack className="tag">
					<Box component={"div"} className="tag-dot" />
					<Box component={"div"} className="tag-name">
						<Typography
							variant="subtitle1"
							sx={{
								fontFamily: "Inter",
								fontWeight: 600,
								fontSize: {
									mobile: 17,
								},
								lineHeight: "normal",
								color: "var(--dark-color-variant-II)",
							}}
						>
							Why Inter-Technics
						</Typography>
					</Box>
				</Stack>
				<Box>
					<Typography
						variant="h2"
						sx={{
							fontFamily: "Inter",
							fontWeight: 700,
							fontSize: {
								mobile: 25,
								miniTablet: 35,
								tablet: 40,
								laptop: 50,
								desktop: 60,
							},
							lineHeight: "normal",
							color: "var(--dark-color)",
						}}
					>
						Your Trusted Partner
					</Typography>
				</Box>
			</Stack>
			<Stack className="content-stack">
				<Box component={"div"} className="thumbnail-area">
					<img src={trustedPartner} alt="Trusted Partner" />
				</Box>
				<Stack className="content-area">
					{partnership.map((detail, index) => {
						return (
							<Stack
								key={index}
								component={"div"}
								className="partnership-detail"
							>
								<Stack className="detail-area">
									<Box>
										<Typography
											variant="h4"
											sx={{
												fontFamily: "Inter",
												fontWeight: 700,
												fontSize: {
													mobile: 20,
													tablet: 25,
													laptop: 33,
												},
												lineHeight: "normal",
												color: "var(--dark-color)",
												whiteSpace: "normal",
											}}
										>
											{detail.title}
										</Typography>
									</Box>
									<Box>
										<Typography
											variant="body1"
											sx={{
												fontFamily: "Inter",
												fontWeight: 500,
												fontSize: {
													mobile: 19,
												},
												lineHeight: "normal",
												whiteSpace: "normal",
												color: "var(--dark-color-variant-VI)",
											}}
										>
											{detail.body}
										</Typography>
									</Box>
								</Stack>
								<Box component={"div"} className="detail-icon">
									<img src={detail.icon} alt="partnership detail icon" />
								</Box>
							</Stack>
						);
					})}
				</Stack>
			</Stack>
		</TrustedPartnerWrapper>
	);
};
