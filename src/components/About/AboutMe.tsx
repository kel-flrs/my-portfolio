import { calculateTotalYearsAndMonthsOfExp } from "@/utils/calculateTotalYearsAndMonthsOfExp";
import { motion } from 'framer-motion'

export default function AboutMe() {
  const { years, months } = calculateTotalYearsAndMonthsOfExp();

  return (
    <section id="about" className="h-screen bg-darkGray flex flex-col justify-center items-center">
       <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
          About Me
        </h2>
      <div className="container mx-auto px-4 py-12 max-w-[800px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Software Engineer with {years} years and {months} months of experience building backend-focused full stack web applications 
                across mid-sized and enterprise projects in financial and professional services industry.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 md:text-justify">
                Worked on client projects following Agile/Scrum methodologies, involving both microservices 
                and monolithic architectures, which allowed me to gain hands-on experience with Docker, Kubernetes, 
                CI/CD pipelines (Jenkins, Azure Pipelines), and cloud platforms (AWS, Azure). 
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 md:text-justify">
                A fellow with a curious mind, valuing efficiency, and committed to continuous learning.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
