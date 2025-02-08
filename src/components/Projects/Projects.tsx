import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from './ProjectCard';
import { motion } from 'framer-motion';

type ProjectCategory = 'professional' | 'personal';

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Variants for each project card
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const professionalProjects: Project[] = [
  {
    id: 1,
    title: "Financial Markets Web Application",
    description: "A complex trading system used to process financial product trades. ",
    technicalDetails: {
      architecturalStyle: {
        label: 'Architectural Style',
        value: 'Microservices Architecture',
        isAvailable: true
      },
      frontEnd: {
        label: 'Frontend Technologies',
        value: ['Angular, TypeScript'],
        isAvailable: true
      },
      backEnd: {
        label: 'Backend Technologies',
        value: ['Java 8, Spring Boot, Oracle SQL, Kafka'],
        isAvailable: true
      },
      infra: {
        label: 'Infrastructure',
        value: ['Docker, Kubernetes, AWS, Amazon EKS, Amazon ECR, Jenkins CI/CD, SonarQube'],
        isAvailable: true
      }
    },
  },
  {
    id: 2,
    title: "Scheduling Web Application",
    description: "A web application used to manage scheduling, budgets, and resource alignment for workers.",
    technicalDetails: {
      architecturalStyle: {
        label: 'Architectural Style',
        value: 'Monolithic Architecture',
        isAvailable: true
      },
      frontEnd: {
        label: 'Frontend Technologies',
        value: ['React.js, TypeScript, React-Bootstrap, Redux Toolkit, SCSS/SASS'],
        isAvailable: true
      },
      backEnd: {
        label: 'Backend Technologies',
        value: ['Node.js, TypeScript, Fastify, MS SQL, Knex.js'],
        isAvailable: true
      },
      infra: {
        label: 'Infrastructure',
        value: ['Docker, Azure, Azure VMs, Azure App Service, Azure Application Insights, Azure CI/CD Pipelines'],
        isAvailable: true
      }
    }
  },
];

const personalProjects: Project[] = [
  {
    id: 101,
    title: "Personal Portfolio",
    description:
      "My personal portfolio website built with Next.js, Tailwind CSS, and TypeScript.",
    technicalDetails: {
      architecturalStyle: {
        label: 'Architectural Style',
        value: '',
        isAvailable: false
      },
      frontEnd: {
        label: 'Frontend Technologies',
        value: ['Next.js, Tailwind CSS, TypeScript'],
        isAvailable: true
      },
      backEnd: {
        label: 'Backend Technologies',
        value: [],
        isAvailable: false
      },
      infra: {
        label: 'Infrastructure',
        value: [],
        isAvailable: false
      }
    }
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('professional');

  // Choose which projects to display based on the active category
  const projectsToDisplay = activeCategory === 'professional' ? professionalProjects : personalProjects;

  return (
    <section id="projects" className="w-full h-auto bg-darkGray flex flex-col gap-4 justify-center items-center">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
        Projects
      </h2>
      <div className="container mx-auto px-4 py-8 mb-12">
      
        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveCategory('professional')}
            className={`px-4 py-2 rounded focus:outline-none ${
              activeCategory === 'professional' ? 'bg-darkPurple text-white' : 'bg-[#111418] text-white'
            }`}
          >
            Client Projects
          </button>
          <button
            onClick={() => setActiveCategory('personal')}
            className={`px-4 py-2 rounded focus:outline-none ${
              activeCategory === 'personal' ? 'bg-darkPurple text-white' : 'bg-[#111418] text-white'
            }`}
          >
            Personal Projects
          </button>
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          variants={gridVariants}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false }}
        >
          {projectsToDisplay.map((project: Project) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              <ProjectCard key={project.id} project={project} />
            </motion.div>
          ))}
        </motion.div>
     </div>
    </section>
  );
}
