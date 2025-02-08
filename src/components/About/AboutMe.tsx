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
                Hi, I&apos;m Michael. A software engineer with {years} years and {months} months of experience.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 md:text-justify">
                I&apos;ve worked on two client projects so far in financial services and accounting industries. 
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 md:text-justify">
                Most of my work focuses on backend development, but I do frontend development from time to time. 
                If I would give a percentage breakdown, it would be 70% backend and 30% frontend.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My strongest traits include adaptability, versatility, and a can-do attitude.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
