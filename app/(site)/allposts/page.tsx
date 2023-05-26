import { getBlogs } from "@/sanity/sanity_utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export default async function allPosts() {
  const blogs = await getBlogs();

  return (
    <div>
      <h1 className="text-5xl font-extrabold text-grey-800">All Blog Posts</h1>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog._id}
            className="border-2 border-grey-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {blog.image && (
              <Image
                src={blog.image}
                alt={blog.name}
                width={950}
                height={400}
                className="object-cover rounded-lg border-2 border-gray-500"
              />
            )}
            <div className="mt-2 text-lg font-extrabold text-red-400">
              {blog.name}
            </div>
            <div className="text-md text-gray-700 mt-5">
              <PortableText value={blog.preview} />
            </div>
            {/* need to add publish date */}
            <div></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
