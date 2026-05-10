import { BlogPostWrapper } from "./styled";
import { Navigation } from "../../container/navigation";
import { Footer } from "../../container/footer";
import { BaseHero } from "../../component/hero";
import { BaseBlog } from "../../component/blog";
import { useParams } from "react-router-dom";
import { blogs } from "../../config/static";

export const BlogPost = () => {
	const { id } = useParams();
	const activeBlog = blogs.find((blog) => blog.id === Number(id));

	return (
		<BlogPostWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation />
			<BaseHero title={activeBlog?.title} image={activeBlog?.thumbnail} />
			<BaseBlog message={activeBlog?.body} />
			<Footer />
		</BlogPostWrapper>
	);
};
