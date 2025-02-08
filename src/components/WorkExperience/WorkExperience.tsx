
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

interface TimelineItem {
  id: number
  date: string
  title: string
  company: string
  responsibilities: string[],
  technologies: string[],
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    date: 'October 2022 - Present',
    title: 'Full-Stack Software Engineer',
    company: 'Cognizant (Formerly Magenic)',
    responsibilities: [
      'Developed new features for a scheduling web application, built RESTful API endpoints, SQL stored procedures, and user interfaces from scratch.',
      'Implemented feature enhancements and bug fixes to two microservice for financial markets and bulk upload service.',
      'Analyzed and debugged BPMN workflows, identifying and resolving bottlenecks to ensure 100% accuracy in multi-step trade submissions.',
      'Regularly monitored and resolved post-deployments issues by checking Kubernetes logs, metrics, and scaling replicas.',
      'Worked closely with product owners, business analysts, and QA teams in a collaborative agile environment, ensuring timely delivery of sprint goals.'
    ],
    technologies: [
      'Node.js', 
      'TypeScript', 
      'React.js', 
      'Angular', 
      'Java', 
      'Spring Boot', 
      'SQL Server', 
      'Oracle SQL', 
      'PostgreSQL', 
      'Docker', 
      'Kubernetes', 
      'Kafka', 
      'Azure', 
      'AWS',
      'Jenkins CI/CD',
      'Azure Pipelines',
      'Git'
    ]
  },
  {
    id: 2,
    date: 'March 2022 - June 2022',
    title: 'Full-Stack Developer Intern',
    company: 'Accenture',
    responsibilities: [
      'Led the design and development of a web-based examination management system as an internship project.',
      'Spearheaded backend development efforts by designing and implementing RESTful APIs and database solutions.',
    ],
    technologies: ['MongoDB', 'Express', 'React.js', 'Node.js', 'Git']
  }
]

export default function WorkExperience() {
  return (
    <section id="experience" className="bg-darkGray h-auto flex flex-col justify-center items-center">
       <h2 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
          Work Experience
        </h2>
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500 to-purple-500" />
       
        <div className="space-y-8 lg:space-y-16">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative flex flex-col lg:flex-row lg:even:flex-row-reverse"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-8 h-6 w-6 -translate-x-1/2 transform lg:relative lg:left-0 lg:top-0 lg:mx-4 lg:flex lg:h-12 lg:w-12 lg:shrink-0 lg:items-center lg:justify-center">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 ring-8 ring-blue-500/20 lg:h-12 lg:w-12">
                  <Briefcase className="h-4 w-4 text-white lg:h-6 lg:w-6" />
                </div>
              </div>

              {/* Content card */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-500">
                    <span>{item.date}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 font-medium text-gray-600 dark:text-gray-300">
                    {item.company}
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                    {item.responsibilities.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <p className="mb-4 font-medium text-gray-600 dark:text-gray-300">
                    Technologies: {item.technologies.join(", ")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}