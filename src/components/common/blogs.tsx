import { Blog } from "../../api/types";
import BlogCard from "./blog-card";

export default function BlogsGrid({ blogs }: { blogs?: Blog[] }) {
  if (!blogs || blogs.length < 1) return <>No blogs found!</>;
  return (
    <div className="grid items-start place-content-center grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
      {blogs?.map((b) => (
        <BlogCard blog={b} key={b._id} />
      ))}
    </div>
  );
}
