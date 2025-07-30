import { useQuery } from "@tanstack/react-query";
import Wrapper from "../components/layouts/wrapper";
import { getBlogs } from "../api/get-blogs";
import Loading from "../components/common/loading";
import BlogsGrid from "../components/common/blogs";
import ReactGA from "react-ga4";

export default function Blogs() {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  document.documentElement.scrollTo({ top: 0 });

  const query = useQuery({ queryKey: ["blogs"], queryFn: getBlogs });

  if (query.isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  if (query.isError) return <>error...</>;

  return (
    <Wrapper>
      <BlogsGrid blogs={query.data} />
    </Wrapper>
  );
}
