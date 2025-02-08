import { motion } from 'framer-motion'
import { ReactElement } from 'react'
import { SiJavascript, SiTypescript, SiNodedotjs, SiReact, SiExpress, SiNestjs, SiDocker, SiPostgresql, SiMongodb } from 'react-icons/si'
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";

interface Skill {
  name: string
  icon: ReactElement
  rating: number
  color: string
}

const skills: Skill[] = [
  { name: 'JavaScript', icon: <SiJavascript />, rating: 4, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: <SiTypescript />, rating: 4, color: 'text-blue-600' },
  { name: 'Node.js', icon: <SiNodedotjs />, rating: 4, color: 'text-green-600' },
  { name: 'Express', icon: <SiExpress />, rating: 4, color: 'text-black' },
  { name: 'NestJS', icon: <SiNestjs />, rating: 3, color: 'text-red-500' },
  { name: 'Java', icon: <FaJava/>, rating: 4, color: 'text-orange-400' },
  { name: 'Spring Boot', icon: <BiLogoSpringBoot/>, rating: 4, color: 'text-green-600' },
  { name: 'React', icon: <SiReact />, rating: 3, color: 'text-cyan-400' },
  { name: 'SQL Server', icon: <DiMsqlServer />, rating: 3, color: 'text-red-300' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, rating: 3, color: 'text-blue-500' },
  { name: 'MongoDB', icon: <SiMongodb />, rating: 3, color: 'text-green-600' },
  { name: 'Docker', icon: <SiDocker />, rating: 3, color: 'text-blue-500' }
]

export default function Skills() {
  return (
    <section id="skills" className="w-full h-auto bg-darkGray flex justify-center items-center">
       <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Skills
          </h2>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 flex justify-center">
                  <span className={`text-4xl ${skill.color}`}>
                    {skill.icon}
                  </span>
                </div>
                
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < skill.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
