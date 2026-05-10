import { Box, Stack, Typography } from "@mui/material";
import { DriveWrapper } from "./styled";
import drivingForce from "../../asset/image/driving-force.png";
import { drivingForces } from "../../config/static";

export const Drive = () => {
	return (
		<DriveWrapper>
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
							Our Values
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
						What Drives Us
					</Typography>
				</Box>
			</Stack>
			<Stack className="content-stack">
				<Box component={"div"} className="thumbnail-area">
					<img src={drivingForce} alt="what drives us" />
				</Box>
				<Stack className="content-area">
					{drivingForces.map((detail, index) => {
						return (
							<Stack
								key={index}
								component={"div"}
								className="driving-force-detail"
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
		</DriveWrapper>
	);
};
