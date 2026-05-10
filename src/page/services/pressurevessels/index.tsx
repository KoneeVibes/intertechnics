import { PressureVesselsWrapper } from "./styled";
import { Navigation } from "../../../container/navigation";
import { Footer } from "../../../container/footer";
import { BaseHero } from "../../../component/hero";
import pressureVesselsBg from "../../../asset/image/pressure-vessels-header.jpg";
import { pressureVesselServices } from "../../../config/static";
import { BaseService } from "../../../component/service";

export const PressureVessels = () => {
	return (
		<PressureVesselsWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation />
			<BaseHero
				title="Pressure vessels NDT Testing "
				subtitle="Reliable, cost-effective delivery of materials, equipment, and services."
				image={pressureVesselsBg}
			/>
			<BaseService
				introduction={pressureVesselServices.introduction}
				services={pressureVesselServices.categories}
			/>
			<Footer />
		</PressureVesselsWrapper>
	);
};
