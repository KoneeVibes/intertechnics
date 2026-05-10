import { TrainingAndManpowerWrapper } from "./styled";
import { Navigation } from "../../../container/navigation";
import { Footer } from "../../../container/footer";
import { BaseHero } from "../../../component/hero";
import trainingAndManpowerBg from "../../../asset/image/training-and-manpower-header.jpg";
import { BaseService } from "../../../component/service";
import { trainingAndManpowerService } from "../../../config/static";

export const TrainingAndManpower = () => {
	return (
		<TrainingAndManpowerWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation />
			<BaseHero
				title="Training & Manpower Development"
				subtitle="Competency-based specialist training across technical and commercial disciplines."
				image={trainingAndManpowerBg}
			/>
			<BaseService
				introduction={trainingAndManpowerService.introduction}
				services={trainingAndManpowerService.categories}
			/>
			<Footer />
		</TrainingAndManpowerWrapper>
	);
};
