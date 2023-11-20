"use client";

import NoteCard from "@/app/_components/note-card";
import { INote } from "@/lib/interfaces";
import { Input } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FunctionComponent, useCallback } from "react";

interface NotesWithSearchProps {
  notes: INote[];
}

const NotesWithSearch: FunctionComponent<NotesWithSearchProps> = ({
  notes,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleValueChange = (value: string) => {
    router.replace(
      [pathname, "?", createQueryString("search", value)].join(""),
    );
  };

  return (
    <>
      <Input
        variant="bordered"
        label="Search"
        onValueChange={handleValueChange}
      />
      <ul className="grid gap-4 md:grid-cols-3">
        {notes
          .filter(
            ({ meta }) =>
              meta.title
                ?.toLocaleLowerCase()
                .includes(searchParams.get("search") || ""),
          )
          .map((note) => (
            <li key={`note-${note.slug}`}>
              <NoteCard {...note} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default NotesWithSearch;
