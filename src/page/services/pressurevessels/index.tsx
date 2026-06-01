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
				title="Pressure vessels integrity"
				subtitle="Pressure equipment integrity assurance to maintain safe and compliant operation of static assets."
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
