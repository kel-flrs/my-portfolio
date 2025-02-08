// components/ProjectCard.tsx
import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  technicalDetails: {
    architecturalStyle: {
      label: string,
      value: string,
      isAvailable: boolean;
    },
    frontEnd: {
      label: string,
      value: string[],
      isAvailable: boolean;
    },
    backEnd: {
      label: string,
      value: string[],
      isAvailable: boolean;
    },
    infra: {
      label: string,
      value: string[],
      isAvailable: boolean;
    }
  };
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technicalDetails } = project;
  return (
    <div className="border border-[#3939ed] dark:border-gray-800 dark:bg-gray-900 rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-bold mb-2 text-blue-500">{title}</h3>
      <p className="text-white mb-4">{description}</p>
      <div className="flex flex-col gap-4">
      {Object.entries(technicalDetails).map(([key, detail]) => (
        detail.isAvailable && <div key={key}>
          <h3 className="text-lg font-bold text-blue-500">{detail.label}</h3>
          {Array.isArray(detail.value) ? (
              detail.value.map((item, index) => (
                <p key={index} className="text-white">
                  {item}
                </p>
              ))
          ) : (
            <p className="text-white">{detail.value}</p>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProjectCard;
