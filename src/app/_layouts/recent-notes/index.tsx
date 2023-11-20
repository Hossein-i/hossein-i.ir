import NoteCard from "@/app/_components/note-card";
import ContainerLayout from "@/app/_layouts/container";
import { INote } from "@/lib/interfaces";
import { Button, Link } from "@nextui-org/react";
import { FunctionComponent } from "react";

interface RecentNotesLayoutProps {
  notes: INote[];
}

const RecentNotesLayout: FunctionComponent<RecentNotesLayoutProps> = ({
  notes,
}) => {
  return (
    <section>
      <ContainerLayout>
        <div className="grid gap-4 pb-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recent Notes</h2>
            <Button as={Link} variant="light" color="primary" href="/notes">
              All Notes
            </Button>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {notes.slice(0, 3).map((note) => (
              <li key={`recent-note-${note.slug}`}>
                <NoteCard {...note} />
              </li>
            ))}
          </ul>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default RecentNotesLayout;
