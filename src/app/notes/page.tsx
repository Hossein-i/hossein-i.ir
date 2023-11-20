import { getNotes } from "@/lib/docs";
import { FunctionComponent } from "react";
import ContainerLayout from "../_layouts/container";
import NotesWithSearch from "./_layouts/notes-with-search";

interface NotesPageProps {}

const NotesPage: FunctionComponent<NotesPageProps> = () => {
  const notes = getNotes();

  return (
    <section>
      <ContainerLayout>
        <div className="grid gap-8 py-16">
          <h1 className="text-3xl font-bold">All Notes</h1>
          <NotesWithSearch notes={notes} />
        </div>
      </ContainerLayout>
    </section>
  );
};

export default NotesPage;
