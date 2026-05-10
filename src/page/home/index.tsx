import { HomeWrapper } from "./styled";
import { Navigation } from "../../container/navigation";
import { Footer } from "../../container/footer";
import { Hero } from "../../container/hero";
import { Services } from "../../container/services";
import { TrustedPartner } from "../../container/trustedpartner";
import { Discuss } from "../../container/discuss";

export const Home = () => {
	return (
		<HomeWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation />
			<Hero />
			<Services />
			<TrustedPartner />
			<Discuss />
			<Footer />
		</HomeWrapper>
	);
};
