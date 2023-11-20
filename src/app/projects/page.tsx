import { FunctionComponent } from "react";
import ContainerLayout from "../_layouts/container";
import { getProjects } from "@/lib/docs";
import ProjectCard from "../_components/project-card";

interface ProjectsPageProps {}

const ProjectsPage: FunctionComponent<ProjectsPageProps> = () => {
  const projects = getProjects();

  return (
    <section>
      <ContainerLayout>
        <div className="grid gap-8 py-16">
          <h1 className="text-3xl font-bold">All Projects</h1>
          <ul className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <li key={`project-${project.slug}`}>
                <ProjectCard {...project} />
              </li>
            ))}
          </ul>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ProjectsPage;
