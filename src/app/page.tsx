import { getNotes, getProjects } from "@/lib/docs";
import HeroHeaderLayout from "./_layouts/hero-header";
import RecentNotesLayout from "./_layouts/recent-notes";
import RecentProjectsLayout from "./_layouts/recent-projects";
import SubscribeLayout from "./_layouts/subscribe";

export default function Home() {
  const notes = getNotes();
  const projects = getProjects();

  return (
    <>
      <HeroHeaderLayout />
      <RecentNotesLayout notes={notes} />
      <RecentProjectsLayout projects={projects} />
      <SubscribeLayout />
    </>
  );
}
