import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { ContactInformationWrapper } from "./styled";
import emailIcon from "../../asset/icon/email.svg";
import phoneIcon from "../../asset/icon/phone.svg";
import hourIcon from "../../asset/icon/hours.svg";
import addressIcon from "../../asset/icon/address.svg";
import calendarIcon from "../../asset/icon/calendar.svg";
import downloadIcon from "../../asset/icon/download.svg";
import proposalIcon from "../../asset/icon/proposal.svg";
import { BaseFieldSet } from "../../component/form/fieldset/styled";
import { BaseLabel } from "../../component/form/label/styled";
import { useMemo, useState } from "react";
import { BaseInput } from "../../component/form/input/styled";
import { BaseButton } from "../../component/button/styled";

export const ContactInformation = () => {
	const initialFormDetails = useMemo(() => {
		return {
			fullName: "",
			email: "",
			phone: "",
			company: "",
			serviceInterest: "",
			message: "",
		};
	}, []);

	const [error] = useState<string | null>(null);
	const [isLoading] = useState<boolean>(false);
	const [formDetails, setFormDetails] = useState(initialFormDetails);

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			| React.ChangeEvent<HTMLInputElement>
			| (Event & {}),
	) => {
		const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
		setFormDetails((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<ContactInformationWrapper>
			<Stack className="left-stack">
				<Box component={"div"} className="stack-header">
					<Typography
						variant="h3"
						sx={{
							fontFamily: "Inter",
							fontWeight: 700,
							fontSize: {
								mobile: 40,
							},
							lineHeight: "normal",
							whiteSpace: "normal",
							color: "var(--dark-color-variant-I)",
						}}
					>
						Contact Information
					</Typography>
				</Box>
				<Stack className="contact-avenues">
					<Stack className="contact-avenue">
						<Box component={"div"} className="icon-box">
							<img src={emailIcon} alt="Email Icon" />
						</Box>
						<Stack className="text-stack">
							<Box>
								<Typography
									variant="h5"
									sx={{
										fontFamily: "Inter",
										fontWeight: 500,
										fontSize: {
											mobile: 15,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--dark-color-variant-I)",
									}}
								>
									Email
								</Typography>
							</Box>
							<Box>
								<Typography
									variant="body1"
									sx={{
										fontFamily: "Inter",
										fontWeight: 400,
										fontSize: {
											mobile: 14,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--input-field-color)",
									}}
								>
									info@inter-technics.com
								</Typography>
							</Box>
						</Stack>
					</Stack>
					<Stack className="contact-avenue">
						<Box component={"div"} className="icon-box">
							<img src={phoneIcon} alt="Phone Icon" />
						</Box>
						<Stack component={"div"} className="text-stack">
							<Box>
								<Typography
									variant="h5"
									sx={{
										fontFamily: "Inter",
										fontWeight: 500,
										fontSize: {
											mobile: 15,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--dark-color-variant-I)",
									}}
								>
									Phone
								</Typography>
							</Box>
							<Box>
								<Typography
									variant="body1"
									sx={{
										fontFamily: "Inter",
										fontWeight: 400,
										fontSize: {
											mobile: 14,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--input-field-color)",
									}}
								>
									Available upon request
								</Typography>
							</Box>
						</Stack>
					</Stack>
					<Stack className="contact-avenue">
						<Box component={"div"} className="icon-box">
							<img src={hourIcon} alt="Hours Icon" />
						</Box>
						<Stack className="text-stack">
							<Box>
								<Typography
									variant="h5"
									sx={{
										fontFamily: "Inter",
										fontWeight: 500,
										fontSize: {
											mobile: 15,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--dark-color-variant-I)",
									}}
								>
									Business Hours
								</Typography>
							</Box>
							<Box>
								<Typography
									variant="body1"
									sx={{
										fontFamily: "Inter",
										fontWeight: 400,
										fontSize: {
											mobile: 14,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--input-field-color)",
									}}
								>
									Mon–Fri: 9 AM – 6 PM
								</Typography>
							</Box>
							<Box>
								<Typography
									variant="body1"
									sx={{
										fontFamily: "Inter",
										fontWeight: 400,
										fontSize: {
											mobile: 14,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--input-field-color)",
									}}
								>
									Sat: By appointment
								</Typography>
							</Box>
						</Stack>
					</Stack>
					<Stack className="contact-avenue">
						<Box component={"div"} className="icon-box">
							<img src={addressIcon} alt="Address Icon" />
						</Box>
						<Stack className="text-stack">
							<Box>
								<Typography
									variant="h5"
									sx={{
										fontFamily: "Inter",
										fontWeight: 500,
										fontSize: {
											mobile: 15,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--dark-color-variant-I)",
									}}
								>
									Address
								</Typography>
							</Box>
							<Box>
								<Typography
									variant="body1"
									sx={{
										fontFamily: "Inter",
										fontWeight: 400,
										fontSize: {
											mobile: 14,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--input-field-color)",
									}}
								>
									9A Charles Ifeanyi Street, Lekki Phase 1, Lagos Nigeria
								</Typography>
							</Box>
						</Stack>
					</Stack>
				</Stack>
				<Stack className="connection-methods">
					<Stack className="connection-method">
						<Box component={"div"} className="icon-box">
							<img src={calendarIcon} alt="Calendar Icon" />
						</Box>
						<Stack className="text-stack">
							<Box>
								<Typography
									variant="h5"
									sx={{
										fontFamily: "Inter",
										fontWeight: 500,
										fontSize: {
											mobile: 15,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--dark-color-variant-I)",
									}}
								>
									Schedule a Consultation
								</Typography>
							</Box>
							<Box>
								<Typography
									variant="body1"
									sx={{
										fontFamily: "Inter",
										fontWeight: 400,
										fontSize: {
											mobile: 14,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--input-field-color)",
									}}
								>
									Book a 30-minute call with a senior advisor.
								</Typography>
							</Box>
						</Stack>
					</Stack>
					<Stack className="connection-method">
						<Box component={"div"} className="icon-box">
							<img src={downloadIcon} alt="Download Icon" />
						</Box>
						<Stack className="text-stack">
							<Box>
								<Typography
									variant="h5"
									sx={{
										fontFamily: "Inter",
										fontWeight: 500,
										fontSize: {
											mobile: 15,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--dark-color-variant-I)",
									}}
								>
									Download Capabilities Deck
								</Typography>
							</Box>
							<Box>
								<Typography
									variant="body1"
									sx={{
										fontFamily: "Inter",
										fontWeight: 400,
										fontSize: {
											mobile: 14,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--input-field-color)",
									}}
								>
									Learn more about our services and success stories.
								</Typography>
							</Box>
						</Stack>
					</Stack>
					<Stack className="connection-method">
						<Box component={"div"} className="icon-box">
							<img src={proposalIcon} alt="Proposal Icon" />
						</Box>
						<Stack className="text-stack">
							<Box>
								<Typography
									variant="h5"
									sx={{
										fontFamily: "Inter",
										fontWeight: 500,
										fontSize: {
											mobile: 15,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--dark-color-variant-I)",
									}}
								>
									Request a Proposal
								</Typography>
							</Box>
							<Box>
								<Typography
									variant="body1"
									sx={{
										fontFamily: "Inter",
										fontWeight: 400,
										fontSize: {
											mobile: 14,
										},
										lineHeight: "normal",
										whiteSpace: "normal",
										color: "var(--input-field-color)",
									}}
								>
									Have a specific project in mind? Let us know.
								</Typography>
							</Box>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
			<Stack className="right-stack">
				<Box component={"div"} className="stack-header">
					<Typography
						variant="h3"
						sx={{
							fontFamily: "Inter",
							fontWeight: 400,
							fontSize: {
								mobile: 24,
							},
							lineHeight: "normal",
							whiteSpace: "normal",
							color: "var(--dark-color-variant-I)",
						}}
					>
						Get in Touch
					</Typography>
				</Box>
				<Grid container spacing={"calc(var(--flex-gap)/9)"}>
					<Grid
						sx={{ overflow: "hidden" }}
						size={{ mobile: 12, miniTablet: 6 }}
					>
						<BaseFieldSet>
							<BaseLabel>Full Name *</BaseLabel>
							<BaseInput
								required
								name="fullName"
								placeholder="Your name"
								value={formDetails.fullName}
								onChange={(e) => handleChange(e)}
							/>
						</BaseFieldSet>
					</Grid>
					<Grid
						sx={{ overflow: "hidden" }}
						size={{ mobile: 12, miniTablet: 6 }}
					>
						<BaseFieldSet>
							<BaseLabel>Email *</BaseLabel>
							<BaseInput
								required
								type="email"
								name="email"
								placeholder="you@company.com"
								value={formDetails.email}
								onChange={(e) => handleChange(e)}
							/>
						</BaseFieldSet>
					</Grid>
					<Grid
						sx={{ overflow: "hidden" }}
						size={{ mobile: 12, miniTablet: 6 }}
					>
						<BaseFieldSet>
							<BaseLabel>Phone</BaseLabel>
							<BaseInput
								name="phone"
								type="phone"
								placeholder="+1 (555) 000-000"
								value={formDetails.phone}
								onChange={(e) => handleChange(e)}
							/>
						</BaseFieldSet>
					</Grid>
					<Grid
						sx={{ overflow: "hidden" }}
						size={{ mobile: 12, miniTablet: 6 }}
					>
						<BaseFieldSet>
							<BaseLabel>Company *</BaseLabel>
							<BaseInput
								required
								name="company"
								placeholder="Your organization"
								value={formDetails.company}
								onChange={(e) => handleChange(e)}
							/>
						</BaseFieldSet>
					</Grid>
					<Grid sx={{ overflow: "hidden" }} size={12}>
						<BaseFieldSet>
							<BaseLabel>How can we help you?</BaseLabel>
							<BaseInput
								name="serviceInterest"
								value={formDetails.serviceInterest}
								onChange={(e) => handleChange(e)}
							/>
						</BaseFieldSet>
					</Grid>
					<Grid sx={{ overflow: "hidden" }} size={12}>
						<BaseFieldSet>
							<BaseLabel>Message *</BaseLabel>
							<BaseInput
								multiline
								required
								minRows={5}
								name="message"
								placeholder="Tell us about your project or challenge..."
								value={formDetails.message}
								onChange={(e) => handleChange(e)}
							/>
						</BaseFieldSet>
					</Grid>
				</Grid>
				{error && (
					<Box>
						<Typography
							sx={{
								fontFamily: "Inter",
								fontWeight: 400,
								fontSize: {
									mobile: 15,
								},
								lineHeight: "normal",
								whiteSpace: "normal",
								textAlign: "center",
								color: "var(--error-color)",
							}}
						>
							{error}
						</Typography>
					</Box>
				)}
				<Box sx={{ overflow: "hidden" }}>
					<BaseButton
						type="submit"
						variant="contained"
						disableElevation
						padding="calc(var(--basic-padding)/9)"
						sx={{
							width: "100%",
						}}
					>
						{isLoading ? (
							<CircularProgress color="inherit" className="loader" />
						) : (
							<Typography
								color={"inherit"}
								variant={"button"}
								sx={{
									fontSize: "inherit",
									fontFamily: "inherit",
									fontWeight: "inherit",
									lineHeight: "inherit",
									textTransform: "capitalize",
								}}
							>
								Send Message
							</Typography>
						)}
					</BaseButton>
				</Box>
			</Stack>
		</ContactInformationWrapper>
	);
};
