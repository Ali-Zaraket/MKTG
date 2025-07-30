import { Link } from "react-router-dom";
import { sanityApiConfig } from "../../api";
import { Blog } from "../../api/types";
import ImageUrlBuilder from "@sanity/image-url";

export default function BlogCard({ blog }: { blog: Blog }) {
  const builder = ImageUrlBuilder({
    baseUrl: "https://cdn.sanity.io",
    projectId: sanityApiConfig.prjId,
    dataset: sanityApiConfig.dataset,
  });

  return (
    <Link className="max-w-96 block border border-primary/10 rounded-2xl p-4" to={`/blogs/${blog._id}`}>
      <img src={builder.image(blog.image.asset._ref).toString()} alt={blog.title} className="w-full rounded-2xl" />
      <legend className="mt-2 mb-3 text-xl">{blog.title}</legend>
      <p className="text-sm mb-2 text-black/75">{blog.smallDescription}</p>
      <p className="text-xs text-secondary/75">{new Date(blog.releaseDate).toDateString()}</p>
    </Link>
  );
}
