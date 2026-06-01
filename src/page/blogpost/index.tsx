import { BlogPostWrapper } from "./styled";
import { Navigation } from "../../container/navigation";
import { Footer } from "../../container/footer";
import { BaseHero } from "../../component/hero";
import { BaseBlog } from "../../component/blog";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

export const BlogPost = () => {
	const API_KEY = import.meta.env.VITE_API_KEY;
	const PROJECT_KEY = import.meta.env.VITE_PROJECT_KEY;
	const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

	const { id } = useParams();

	const [activeBlog, setActiveBlog] = useState<Record<
		string,
		string | number
	> | null>(null);

	useEffect(() => {
		const retrieveBlogByIdService = async () => {
			try {
				const response = await fetch(
					`${API_ENDPOINT}/public/blog/${PROJECT_KEY}/${id}`,
					{
						method: "GET",
						headers: {
							Authorization: `APIKey ${API_KEY}`,
							"Content-Type": "application/json",
						},
					},
				);
				const res = await response.json();
				if (!response.ok) {
					console.error("Error:", res);
				}
				return setActiveBlog(res.data);
			} catch (error) {
				console.error("API fetch error:", error);
			}
		};
		retrieveBlogByIdService();
	}, [API_KEY, PROJECT_KEY, API_ENDPOINT, id]);

	return (
		<BlogPostWrapper
			maxWidth={false}
			sx={{
				padding: "0 !important",
			}}
		>
			<Navigation />
			<BaseHero title={activeBlog?.title} image={activeBlog?.thumbnail} />
			<BaseBlog message={DOMPurify.sanitize(String(activeBlog?.body ?? ""))} />
			<Footer />
		</BlogPostWrapper>
	);
};
