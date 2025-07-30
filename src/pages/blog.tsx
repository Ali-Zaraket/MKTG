import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBlogById } from "../api/get-blogs";
import Wrapper from "../components/layouts/wrapper";
import ReactGA from "react-ga4";
import Loading from "../components/common/loading";
import { Blog as BlogType } from "../api/types";
import React from "react";
import { sanityApiConfig } from "../api";
import ImageUrlBuilder from "@sanity/image-url";

export default function Blog() {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  document.documentElement.scrollTo({ top: 0 });

  const params = useParams();
  const blogId = params["blogId"];

  const query = useQuery({ queryKey: ["blog", blogId], queryFn: () => getBlogById(blogId), enabled: Boolean(blogId) });

  if (query.isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  if (query.isError) return <>error...</>;
  if (!query.data) return <Wrapper>No blog found!</Wrapper>;

  const blog = query.data as BlogType;

  const builder = ImageUrlBuilder({
    baseUrl: "https://cdn.sanity.io",
    projectId: sanityApiConfig.prjId,
    dataset: sanityApiConfig.dataset,
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <img
        src={builder.image(blog.image.asset._ref).toString()}
        alt={blog.title}
        className="mb-6 border border-primary/20 rounded"
      />

      <h1 className="text-4xl font-bold text-gray-900 mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{new Date(blog.releaseDate).toDateString()}</p>

      <p className="text-lg text-gray-700 mb-8">{blog.smallDescription}</p>

      <div className="prose max-w-none prose-lg prose-headings:text-gray-900 prose-p:text-gray-800 prose-img:rounded-xl prose-a:text-blue-600">
        {blog?.content?.map((block) => {
          if (block._type !== "block") return null;

          const Tag =
            block.style === "h2"
              ? "h2"
              : block.style === "h3"
              ? "h3"
              : block.style === "h4"
              ? "h4"
              : block.style === "blockquote"
              ? "blockquote"
              : "p";

          return (
            <Tag key={block._key}>
              {block?.children?.map((child) => (
                <React.Fragment key={child._key}>{child.text}</React.Fragment>
              ))}
            </Tag>
          );
        })}
      </div>
    </div>
  );
}
