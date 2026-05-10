import { ContactWrapper } from "./styled";
import { Navigation } from "../../container/navigation";
import { Footer } from "../../container/footer";
import { BaseHero } from "../../component/hero";
import contactBg from "../../asset/image/contact.png";
import { ContactInformation } from "../../container/contactinformation";

export const Contact = () => {
	return (
		<ContactWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation />
			<BaseHero
				title="Let's Start a Conversation"
				subtitle="Every great partnership begins with dialogue."
				image={contactBg}
			/>
			<ContactInformation />
			<Footer />
		</ContactWrapper>
	);
};
