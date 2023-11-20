import ProjectCard from "@/app/_components/project-card";
import ContainerLayout from "@/app/_layouts/container";
import { IProject } from "@/lib/interfaces";
import { Button, Link } from "@nextui-org/react";
import { FunctionComponent } from "react";

interface RecentProjectsLayoutProps {
  projects: IProject[];
}

const RecentProjectsLayout: FunctionComponent<RecentProjectsLayoutProps> = ({
  projects,
}) => {
  return (
    <section>
      <ContainerLayout>
        <div className="grid gap-4 pb-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recent Projects</h2>
            <Button as={Link} variant="light" color="primary" href="/projects">
              All Projects
            </Button>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <li key={`recent-project-${project.slug}`}>
                <ProjectCard {...project} />
              </li>
            ))}
          </ul>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default RecentProjectsLayout;
