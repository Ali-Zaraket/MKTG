import { useQuery } from "@tanstack/react-query";
import BlogsGrid from "../common/blogs";
import Wrapper from "../layouts/wrapper";
import { getBlogs } from "../../api/get-blogs";
import Loading from "../common/loading";
import { Link } from "react-router-dom";

export default function Blogs() {
  const query = useQuery({ queryKey: ["blogs"], queryFn: getBlogs });

  if (query.isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  if (query.isError) return <>error...</>;
  if (!query.data) return <></>;

  return (
    <section id="blogs" className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32">
      <Wrapper>
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="mx-auto md:text-center">
            <h2 className="font-medium text-2xl sm:text-5xl tracking-tight text-primary">
              The ImageAssist Knowledge Center
            </h2>
            <br />
            <p className="font-inter text-lg tracking-tight max-w-4xl mx-auto">
              Product updates, how-to guides, and clinical photography best practices—everything you need to get the
              most out of ImageAssist. &nbsp;
              <Link to="/blogs" className="!text-black !underline">
                View all
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8">
          <BlogsGrid blogs={query?.data?.slice(0, 3)} />
        </div>
      </Wrapper>
    </section>
  );
}
