import { sanityApiConfig } from ".";
import { Blog, SanityResponse } from "./types";

export async function getBlogs() {
  try {
    const response = await fetch(
      `https://${sanityApiConfig.prjId}.api.sanity.io/v2023-01-01/data/query/${sanityApiConfig.dataset}?query=*[_type == "blog" %26%26 isActive == true]{_id,title,smallDescription,releaseDate,image,content} | order(releaseDate desc)`
    );
    const data = (await response.json()) as SanityResponse<Blog[]>;
    return data.result;
  } catch (e) {
    console.log(e);
    return Promise.resolve([]);
  }
}

export async function getBlogById(blogId?: string) {
  try {
    const response = await fetch(
      `https://${sanityApiConfig.prjId}.api.sanity.io/v2023-01-01/data/query/${sanityApiConfig.dataset}?query=*[_type == "blog" %26%26 isActive == true %26%26 _id == '${blogId}']{_id,title,smallDescription,releaseDate,image,content} | order(releaseDate desc)`
    );
    const data = (await response.json()) as SanityResponse<Blog[]>;
    if (data.result.length) return data.result[0] as Blog;
    return data.result;
  } catch (e) {
    console.log(e);
    return Promise.resolve({});
  }
}
