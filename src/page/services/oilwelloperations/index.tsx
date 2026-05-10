import { OilWellOperationsWrapper } from "./styled";
import { Navigation } from "../../../container/navigation";
import { Footer } from "../../../container/footer";
import { BaseHero } from "../../../component/hero";
import oilWellOperationsBg from "../../../asset/image/oil-well-operations-header.jpg";
import { BaseService } from "../../../component/service";
import { oilWellServices } from "../../../config/static";

export const OilWellOperations = () => {
	return (
		<OilWellOperationsWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation />
			<BaseHero
				title="Oil well operations"
				subtitle="Complete project delivery from concept to commissioning with single-point accountability."
				image={oilWellOperationsBg}
			/>
			<BaseService
				introduction={oilWellServices.introduction}
				services={oilWellServices.categories}
			/>
			<Footer />
		</OilWellOperationsWrapper>
	);
};
