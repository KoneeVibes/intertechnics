import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { BaseServiceWrapper } from "./styled";
import type { BaseServicePropsType } from "../../type/component.type";
import { Fragment } from "react/jsx-runtime";
import growthIcon from "../../asset/icon/growth.svg";
import starIcon from "../../asset/icon/star-icon.svg";
import tickIcon from "../../asset/icon/tick.svg";
import dotIcon from "../../asset/icon/dot.svg";

export const BaseService: React.FC<BaseServicePropsType> = ({
	introduction,
	services,
}) => {
	const matches = useMediaQuery("(max-width:100px)");

	return (
		<BaseServiceWrapper>
			{introduction && (
				<Box component={"div"} className="introduction">
					<Typography
						variant="h6"
						sx={{
							fontFamily: "Inter",
							fontWeight: 400,
							fontSize: 20,
							lineHeight: "normal",
							color: "var(--input-field-color)",
							textAlign: "center",
						}}
					>
						{introduction}
					</Typography>
				</Box>
			)}
			<Stack className="services">
				{services?.map((service, index) => {
					return (
						<Stack key={index} className="service-item">
							<Stack className="text-area">
								<Box>
									<Typography
										variant="h3"
										sx={{
											fontFamily: "Inter",
											fontWeight: 600,
											fontSize: {
												mobile: 25,
												tablet: 32,
											},
											lineHeight: "normal",
											color: "var(--dark-color-variant-I)",
										}}
									>
										{service.title}
									</Typography>
								</Box>
								<Box>
									<Typography
										variant="body1"
										sx={{
											fontFamily: "Inter",
											fontWeight: 400,
											fontSize: 20,
											lineHeight: "normal",
											color: "var(--input-field-color)",
											whiteSpace: "normal",
										}}
									>
										{service.body}
									</Typography>
								</Box>
							</Stack>
							<Stack className="cards-area">
								{Object.entries(service.cards || {}).map(([key, value]) => {
									return (
										<Fragment>
											{key === "thumbnail" && (
												<Box
													component={"div"}
													sx={{ order: value.index }}
													className="thumbnail-box"
												>
													<img src={value.image} alt={service.title} />
												</Box>
											)}
											{key === "services" && (
												<Stack
													sx={{
														order: value.index,
														backgroundColor: value.bgColor,
													}}
													className="services-list"
												>
													<Box>
														<Typography
															variant="h4"
															sx={{
																fontFamily: "Inter",
																fontWeight: 800,
																fontSize: { mobile: 20 },
																lineHeight: "normal",
																color: "var(--dark-color-variant-XI)",
																whiteSpace: "normal",
																textTransform: "uppercase",
															}}
														>
															Services Include
														</Typography>
													</Box>
													<Box component={"ul"} className="service-items-list">
														{value.items.map((item, id) => {
															return (
																<Stack className="service-item">
																	<Box
																		component={"div"}
																		sx={{
																			flexShrink: matches ? 1 : 0,
																			display: "flex",
																			overflow: "hidden",
																		}}
																	>
																		<img src={tickIcon} alt="tick-icon" />
																	</Box>
																	<Box
																		component={"div"}
																		sx={{ overflow: "hidden" }}
																	>
																		<Typography
																			key={id}
																			component={"li"}
																			sx={{
																				fontFamily: "Inter",
																				fontWeight: 400,
																				fontSize: { mobile: 14 },
																				lineHeight: "normal",
																				color: "var(--dark-color-variant-XII)",
																				whiteSpace: "normal",
																			}}
																		>
																			{item}
																		</Typography>
																	</Box>
																</Stack>
															);
														})}
													</Box>
												</Stack>
											)}
											{key === "typicalResults" && (
												<Stack
													sx={{
														order: value.index,
														backgroundColor: value.bgColor,
													}}
													className="typical-results"
												>
													<Stack className="result-items-header">
														<Box
															component={"div"}
															sx={{ display: "flex", overflow: "hidden" }}
														>
															<img src={growthIcon} alt="growth-icon" />
														</Box>
														<Box component={"div"} sx={{ overflow: "hidden" }}>
															<Typography
																variant="h4"
																sx={{
																	fontFamily: "Inter",
																	fontWeight: 800,
																	fontSize: { mobile: 20 },
																	lineHeight: "normal",
																	color: "var(--dark-color-variant-XI)",
																	whiteSpace: "normal",
																	textTransform: "uppercase",
																}}
															>
																Typical Results
															</Typography>
														</Box>
													</Stack>
													<Box component={"ul"} className="result-items-list">
														{value.items.map((item, id) => {
															return (
																<Stack className="result-item">
																	<Box
																		component={"div"}
																		sx={{
																			flexShrink: matches ? 1 : 0,
																			display: "flex",
																			overflow: "hidden",
																		}}
																	>
																		<img src={dotIcon} alt="dot-icon" />
																	</Box>
																	<Box
																		component={"div"}
																		sx={{ overflow: "hidden" }}
																	>
																		<Typography
																			key={id}
																			component={"li"}
																			sx={{
																				fontFamily: "Inter",
																				fontWeight: 400,
																				fontSize: { mobile: 14 },
																				lineHeight: "normal",
																				color: "var(--dark-color-variant-XII)",
																				whiteSpace: "normal",
																			}}
																		>
																			{item}
																		</Typography>
																	</Box>
																</Stack>
															);
														})}
													</Box>
												</Stack>
											)}
											{key === "capabilities" && (
												<Stack
													sx={{
														order: value.index,
														backgroundColor: value.bgColor,
													}}
													className="capabilities"
												>
													<Stack className="capabilities-header">
														<Box
															component={"div"}
															sx={{ display: "flex", overflow: "hidden" }}
														>
															<img src={starIcon} alt="star-icon" />
														</Box>
														<Box component={"div"} sx={{ overflow: "hidden" }}>
															<Typography
																variant="h4"
																sx={{
																	fontFamily: "Inter",
																	fontWeight: 800,
																	fontSize: { mobile: 20 },
																	lineHeight: "normal",
																	color: "var(--dark-color-variant-XI)",
																	whiteSpace: "normal",
																	textTransform: "uppercase",
																}}
															>
																Specialized Capabilities
															</Typography>
														</Box>
													</Stack>
													<Box component={"ul"} className="capabilities-list">
														{value.items.map((item, id) => {
															return (
																<Stack className="capability-item">
																	<Box
																		component={"div"}
																		sx={{
																			flexShrink: matches ? 1 : 0,
																			display: "flex",
																			overflow: "hidden",
																		}}
																	>
																		<img src={dotIcon} alt="dot-icon" />
																	</Box>
																	<Box
																		component={"div"}
																		sx={{ overflow: "hidden" }}
																	>
																		<Typography
																			key={id}
																			component={"li"}
																			sx={{
																				fontFamily: "Inter",
																				fontWeight: 400,
																				fontSize: { mobile: 14 },
																				lineHeight: "normal",
																				color: "var(--dark-color-variant-XII)",
																				whiteSpace: "normal",
																			}}
																		>
																			{item}
																		</Typography>
																	</Box>
																</Stack>
															);
														})}
													</Box>
												</Stack>
											)}
										</Fragment>
									);
								})}
							</Stack>
						</Stack>
					);
				})}
			</Stack>
		</BaseServiceWrapper>
	);
};
