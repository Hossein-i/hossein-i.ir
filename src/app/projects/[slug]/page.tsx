import ContainerLayout from "@/app/_layouts/container";
import { getProject } from "@/lib/docs";
import { ArrowSmallLeftIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Link, User } from "@nextui-org/react";
import { FunctionComponent } from "react";
import NextLink from "next/link";
import moment from "moment";
import ArticleLayout from "@/app/_layouts/article";
import { MDXRemote } from "next-mdx-remote/rsc";

interface ProjectPageProps {
  params: { [key: string]: any };
}

const ProjectPage: FunctionComponent<ProjectPageProps> = ({ params }) => {
  const { slug } = params;
  const { meta, content } = getProject(slug);

  return (
    <>
      <ContainerLayout>
        <div className="grid gap-4 pt-16">
          <div>
            <Link as={NextLink} href="/projects" className="text-sm" replace>
              <div className="flex items-center gap-2">
                <ArrowSmallLeftIcon className="h-5 w-5" />
                <span>Back to Projects</span>
              </div>
            </Link>
          </div>
          <h1 className="text-3xl font-bold">{meta.title}</h1>
          <div className="flex items-center justify-between ">
            <User
              name={meta.author.name}
              description={moment(meta.date).format("MMM DD, YYYY")}
              avatarProps={{ src: meta.author.image, alt: meta.author.name }}
            />
            <div className="flex items-center gap-2 text-gray-500">
              <ClockIcon className="h-5 w-5" />
              <span className="text-sm">{meta.readTime}</span>
            </div>
          </div>
        </div>
      </ContainerLayout>
      <ArticleLayout>
        <MDXRemote
          source={content}
          components={{
            a: (props) => <Link href={props.href}>{props.children}</Link>,
          }}
        />
      </ArticleLayout>
    </>
  );
};

export default ProjectPage;
