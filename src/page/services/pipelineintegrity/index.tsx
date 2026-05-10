import { PipelineIntegrityWrapper } from "./styled";
import { Navigation } from "../../../container/navigation";
import { Footer } from "../../../container/footer";
import { BaseHero } from "../../../component/hero";
import pipelineIntegrityBg from "../../../asset/image/pipeline-integrity-header.jpg";
import { BaseService } from "../../../component/service";
import { pipelineIntegrityServices } from "../../../config/static";

export const PipelineIntegrity = () => {
	return (
		<PipelineIntegrityWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation />
			<BaseHero
				title="Pipeline Integrity"
				subtitle="GHG auditing, LDAR, emissions reduction strategies and decarbonization roadmaps."
				image={pipelineIntegrityBg}
			/>
			<BaseService
				introduction={pipelineIntegrityServices.introduction}
				services={pipelineIntegrityServices.categories}
			/>
			<Footer />
		</PipelineIntegrityWrapper>
	);
};
