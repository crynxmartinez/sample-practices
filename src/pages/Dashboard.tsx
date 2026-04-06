import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, Sparkles } from 'lucide-react'

const demos = [
  {
    id: 'yfl-form',
    title: 'YFL Form',
    description: 'Youth & Family Life registration form with multi-step validation',
    path: '/yfl-form',
    icon: FileText,
    color: 'coral',
  },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-cream-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-coral-300 mr-2" />
            <h1 className="text-5xl font-bold text-gray-800">
              Sample Practices
            </h1>
            <Sparkles className="w-8 h-8 text-coral-300 ml-2" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of demo projects and practice implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {demos.map((demo, index) => {
            const Icon = demo.icon
            return (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={demo.path}>
                  <div className="bg-cream-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-gray-200 hover:border-coral-200 group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-coral-100 mb-6 group-hover:bg-coral-200 transition-colors">
                      <Icon className="w-8 h-8 text-coral-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {demo.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {demo.description}
                    </p>
                    <div className="mt-6 flex items-center text-coral-300 font-semibold group-hover:translate-x-2 transition-transform">
                      View Demo
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 text-gray-500"
        >
          <p>More demos coming soon...</p>
        </motion.div>
      </div>
    </div>
  )
}
