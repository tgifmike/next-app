import { getBlog } from "@/sanity/sanity_utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { blog: string };
};

export default async function Blog({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-red-600 text-5xl drop-shaddow fornt-extrabold">
          {blog.name}
        </h1>
      </header>
      {/* image here */}
      <Image
        src={blog.image}
        alt={blog.name}
        width={520}
        height={380}
        className="mt-10 border-2 border-grey-700 object-cover rounded-xl"
      />
      {/* content here */}
      <div className="text-lg text-gray-700 mt-5 font-serif text-justify leading-loose">
        <PortableText value={blog.content} />
      </div>
    </div>
  );
}
