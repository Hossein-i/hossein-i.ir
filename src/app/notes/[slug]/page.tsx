import ArticleLayout from "@/app/_layouts/article";
import ContainerLayout from "@/app/_layouts/container";
import { getNote } from "@/lib/docs";
import { ArrowSmallLeftIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Link, User } from "@nextui-org/react";
import moment from "moment";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FunctionComponent } from "react";
import NextLink from "next/link";

interface NotePageProps {
  params: { [key: string]: any };
}

const NotePage: FunctionComponent<NotePageProps> = async ({ params }) => {
  const { slug } = params;
  const { meta, content } = getNote(slug);

  return (
    <>
      <ContainerLayout>
        <div className="grid gap-4 pt-16">
          <div>
            <Link as={NextLink} href="/notes" className="text-sm" replace>
              <div className="flex items-center gap-2">
                <ArrowSmallLeftIcon className="h-5 w-5" />
                <span>Back to Notes</span>
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

export default NotePage;
