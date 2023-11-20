import { getAllTags } from "@/lib/docs";
import { FunctionComponent } from "react";
import ContainerLayout from "../_layouts/container";
import { Chip, Link } from "@nextui-org/react";
import { HashtagIcon } from "@heroicons/react/24/outline";

interface TagsPageProps {}

const TagsPage: FunctionComponent<TagsPageProps> = () => {
  const tags = getAllTags();

  return (
    <section>
      <ContainerLayout>
        <div className="grid gap-8 py-16">
          <h1 className="text-3xl font-bold">All Tags</h1>
          <ul className="flex flex-wrap gap-4">
            {tags.map((value, i) => (
              <li key={`tag-${i}`}>
                <Chip
                  as={Link}
                  href={`/notes?tags=${value}`}
                  variant="flat"
                  color="primary"
                  size="lg"
                  startContent={<HashtagIcon className="h-4 w-4" />}
                >
                  {value}
                </Chip>
              </li>
            ))}
          </ul>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default TagsPage;
