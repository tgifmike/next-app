import { getProject } from "@/sanity/sanity_utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shaddow font-extra bold">
          {project.name}
        </h1>

        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferer"
          className="bg-gray-100 rounded-lg text-grey-500 py-3 px-4
          whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition "
        >
          View Project
        </a>
      </header>
      {/*  content here  */}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>

      {/*  Imahe here  */}
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-grey-700 object-cover rounded-xl"
      />
    </div>
  );
}
