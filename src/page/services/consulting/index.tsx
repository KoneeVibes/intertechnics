import { ConsultingWrapper } from "./styled";
import { Navigation } from "../../../container/navigation";
import { Footer } from "../../../container/footer";
import { BaseHero } from "../../../component/hero";
import consultingBg from "../../../asset/image/consulting-services-header.png";
import { BaseService } from "../../../component/service";
import { consultingService } from "../../../config/static";

export const Consulting = () => {
	return (
		<ConsultingWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation />
			<BaseHero
				title="Consulting Services"
				subtitle="Expert advisory across the asset life cycle from conception to production."
				image={consultingBg}
			/>
			<BaseService
				introduction={consultingService.introduction}
				services={consultingService.categories}
			/>
			<Footer />
		</ConsultingWrapper>
	);
};
