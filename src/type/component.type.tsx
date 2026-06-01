import type { FormLabelProps, InputBaseProps } from "@mui/material";

export type BaseTypographyType = {
	fontsize?: string;
	fontweight?: number;
	colour?: string;
};

export type BaseButtonPropsType = BaseTypographyType & {
	radius?: string;
	padding?: string;
	bgcolor?: string;
	border?: string;
};

export type BaseLabelPropsType = BaseTypographyType & FormLabelProps;

export type BaseInputPropsType = BaseTypographyType & {
	border?: string;
	bgcolor?: string;
	radius?: string;
	padding?: string;
} & InputBaseProps;

export type BaseCarouselPropsType = {
	autoFocus?: boolean;
	infiniteLoop?: boolean;
	showStatus?: boolean;
	children: React.ReactNode[] | undefined;
};

export type BaseHeroPropsType = {
	title?: string | number;
	subtitle?: string;
	image?: string | number;
	callToAction?: React.ReactNode;
};

export type BaseServicePropsType = {
	introduction?: string;
	services?: Record<string, string | number>[];
};

export type BaseBlogPropsType = {
	message?: string | number;
};
