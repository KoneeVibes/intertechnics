import { NavigationWrapper } from "./styled";
import {
	Box,
	IconButton,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import logo from "../../asset/logo/logo.png";
import { navLinks, serviceBrochure } from "../../config/static";
import { HashLink } from "react-router-hash-link";
import { BaseButton } from "../../component/button/styled";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../context";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Navigation = () => {
	const navigate = useNavigate();
	const matches = useMediaQuery("(max-width:1024px)");

	const {
		openMenu,
		setOpenMenu,
		showServicesDropdown,
		setShowServicesDropdown,
	} = useContext(AppContext);
	const servicesDropdownRef = useRef<HTMLDivElement | null>(null);
	const servicesTriggerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!showServicesDropdown) return;
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			const clickedInsideDropdown =
				servicesDropdownRef.current?.contains(target);
			const clickedServicesTrigger =
				servicesTriggerRef.current?.contains(target);
			if (!clickedInsideDropdown && !clickedServicesTrigger) {
				setShowServicesDropdown(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showServicesDropdown, setShowServicesDropdown]);

	useEffect(() => {
		if (openMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}
	}, [openMenu]);

	const handleLogoClick = () => {
		setOpenMenu(false);
		navigate("/");
	};

	const handleNavigateToContactUs = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		e.preventDefault();
		setOpenMenu(false);
		navigate("/contact-us");
	};

	const handleNavItemClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		item: Record<string, string>,
	) => {
		e.preventDefault();
		switch (item.name) {
			case "Services":
				setShowServicesDropdown((prev) => !prev);
				break;
			default:
				navigate(item.url);
				setOpenMenu(false);
				break;
		}
	};

	return (
		<NavigationWrapper>
			<Box component={"div"} className="nav-logo">
				<img src={logo} alt="logo" onClick={handleLogoClick} />
			</Box>
			<Stack className="nav-items">
				{navLinks?.map((navItem, index) => {
					return (
						<Box
							key={index}
							ref={navItem.name === "Services" ? servicesTriggerRef : undefined}
							sx={{
								display:
									navItem.name === "Services" && matches ? "flex" : "block",
								flexDirection:
									navItem.name === "Services" && matches ? "column" : "row",
								alignItems:
									navItem.name === "Services" && matches
										? "center"
										: "flex-start",
							}}
							className="nav-item"
						>
							<HashLink
								key={index}
								smooth={true}
								to={navItem.url}
								onClick={(e) => handleNavItemClick(e, navItem)}
								style={{
									display: navItem.name === "Services" ? "flex" : "block",
									alignItems: navItem.name === "Services" ? "center" : "block",
								}}
							>
								<Typography
									variant="subtitle1"
									sx={{
										fontFamily: "Inter",
										fontWeight: 500,
										fontSize: 15,
										lineHeight: "normal",
										cursor: "pointer",
										color: "var(--dark-color)",
										textTransform: "capitalize",
										"&:hover": {
											borderBottom: "2px solid var(--primary-color)",
										},
									}}
								>
									{navItem.name}
								</Typography>
								{navItem.name === "Services" && (
									<KeyboardArrowDownIcon
										sx={{ color: "var(--dark-color-variant-X)" }}
									/>
								)}
							</HashLink>
							{navItem.name === "Services" && showServicesDropdown && (
								<Stack ref={servicesDropdownRef} className="services-dropdown">
									{serviceBrochure.map((service, id) => {
										return (
											<Box key={id}>
												<HashLink
													smooth={true}
													to={service.url}
													onClick={(e) => handleNavItemClick(e, service)}
												>
													<Typography
														variant="subtitle1"
														sx={{
															fontFamily: "Inter",
															fontWeight: 500,
															fontSize: 15,
															lineHeight: "normal",
															cursor: "pointer",
															color: "var(--dark-color)",
															whiteSpace: "normal",
															textTransform: "capitalize",
															"&:hover": {
																color: "var(--primary-color)",
															},
														}}
													>
														{service.title}
													</Typography>
												</HashLink>
											</Box>
										);
									})}
								</Stack>
							)}
						</Box>
					);
				})}
				<Box className="nav-item">
					<BaseButton
						disableElevation
						variant="contained"
						sx={{ width: "100%" }}
						padding="calc(var(--basic-padding)/9)"
						onClick={handleNavigateToContactUs}
					>
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
							Contact Us
						</Typography>
					</BaseButton>
				</Box>
			</Stack>
			<Box component={"div"} className="nav-menu">
				<IconButton
					size="large"
					color="inherit"
					aria-label="menu"
					sx={{
						color: "var(--primary-color)",
						padding: 0,
					}}
					onClick={() => setOpenMenu(!openMenu)}
				>
					{openMenu ? <CloseIcon /> : <MenuIcon />}
				</IconButton>
			</Box>
		</NavigationWrapper>
	);
};
