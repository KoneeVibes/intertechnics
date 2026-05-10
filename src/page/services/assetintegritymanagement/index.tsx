import { AssetIntegrityManagementWrapper } from "./styled";
import { Navigation } from "../../../container/navigation";
import { Footer } from "../../../container/footer";
import { BaseHero } from "../../../component/hero";
import assetIntegrityManagementBg from "../../../asset/image/asset-integrity-management-header.png";
import { BaseService } from "../../../component/service";
import { assetIntegrityService } from "../../../config/static";

export const AssetIntegrityManagement = () => {
	return (
		<AssetIntegrityManagementWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation />
			<BaseHero
				title="Asset Integrity Management"
				subtitle="Protecting Critical Assets Throughout Their Life Cycle"
				image={assetIntegrityManagementBg}
			/>
			<BaseService
				introduction={assetIntegrityService.introduction}
				services={assetIntegrityService.categories}
			/>
			<Footer />
		</AssetIntegrityManagementWrapper>
	);
};
