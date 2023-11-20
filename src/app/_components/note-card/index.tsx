import { INote } from "@/lib/interfaces";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Card, CardBody, Link } from "@nextui-org/react";
import moment from "moment";
import { FunctionComponent } from "react";

const NoteCard: FunctionComponent<INote> = ({
  slug,
  meta: { date, title, excerpt },
}) => (
  <Card
    as={Link}
    href={`notes/${slug}`}
    classNames={{
      base: "border border-gray-300 dark:border-gray-600 p-4",
    }}
    shadow="none"
    fullWidth
    isBlurred
    isHoverable
    isPressable
  >
    <CardBody>
      <div className="flex h-full flex-col gap-4">
        <div className="flex flex-auto flex-col gap-4">
          <div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{moment(date).format("MMM DD, YYYY")}</span>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-4 w-4" />
                <span>1 K</span>
              </div>
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-justify text-sm text-gray-500">{excerpt}</p>
        </div>
        <p className="justify-items-end">Read more...</p>
      </div>
    </CardBody>
  </Card>
);

export default NoteCard;
