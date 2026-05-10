import { ResourcesWrapper } from "./styled";
import { Navigation } from "../../container/navigation";
import { Footer } from "../../container/footer";
import { BaseHero } from "../../component/hero";
import resourcesBg from "../../asset/image/resources.png";
import { Bloglist } from "../../container/bloglist";

export const Resources = () => {
	return (
		<ResourcesWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation />
			<BaseHero
				title="Insights & Resources"
				subtitle="Perspectives on strategy, transformation, and operational excellence."
				image={resourcesBg}
			/>
			<Bloglist />
			<Footer />
		</ResourcesWrapper>
	);
};
