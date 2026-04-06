import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface FormData {
  parentName: string
  parentPhone: string
  parentEmail: string
  emergencyContactName: string
  emergencyContactNumber: string
  firstTimeVisitor: boolean
  attendingRegularly: boolean
  lookingForCommunity: boolean
  exploringFaith: boolean
  friendInvited: boolean
  medicalConditions: string
  allergies: string
  medications: string
  liabilityConsent: boolean
  photoConsent: boolean
  communicationConsent: boolean
}

export default function YFLForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream-100 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl text-center"
        >
          <div className="w-20 h-20 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-coral-300" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Your registration has been submitted successfully.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-coral-200 text-white rounded-full hover:bg-coral-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-sage-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-coral-100 to-sage-100 p-12 text-center">
              <img
                src="/hd-logo.png"
                alt="Youth & Family Life"
                className="h-32 mx-auto mb-6"
              />
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Youth & Family Life
              </h1>
              <p className="text-lg text-gray-600">UNITY of TUSTIN</p>
              <div className="flex items-center justify-center mt-4 text-coral-300">
                <Sparkles className="w-5 h-5 mr-2" />
                <span className="font-semibold">Rooted in Love. Growing in Connection.</span>
                <Sparkles className="w-5 h-5 ml-2" />
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  We're so glad you're here!
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We're so excited to get to know you and your family! This form helps us understand 
                  how we can best support you. Whether you're a first-time visitor or have been with 
                  us for a while, we'd love to hear from you.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions or need assistance, please don't hesitate to reach out 
                  to us at{' '}
                  <a href="mailto:info@youthfamilylife.org" className="text-coral-300 hover:underline">
                    info@youthfamilylife.org
                  </a>
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                <section>
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-coral-200 text-white flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Basic Details</h3>
                  </div>

                  <div className="space-y-6 ml-14">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Parent/Guardian Name <span className="text-coral-300">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('parentName', { required: 'This field is required' })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-coral-200 focus:outline-none transition-colors"
                        placeholder="Your answer"
                      />
                      {errors.parentName && (
                        <p className="text-coral-300 text-sm mt-1">{errors.parentName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Parent/Guardian Phone Number
                      </label>
                      <input
                        type="tel"
                        {...register('parentPhone')}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-coral-200 focus:outline-none transition-colors"
                        placeholder="Your answer"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Parent/Guardian Email <span className="text-coral-300">*</span>
                      </label>
                      <input
                        type="email"
                        {...register('parentEmail', { 
                          required: 'This field is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-coral-200 focus:outline-none transition-colors"
                        placeholder="Your answer"
                      />
                      {errors.parentEmail && (
                        <p className="text-coral-300 text-sm mt-1">{errors.parentEmail.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Emergency Contact Name & Number
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          {...register('emergencyContactName')}
                          className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-coral-200 focus:outline-none transition-colors"
                          placeholder="Name"
                        />
                        <input
                          type="tel"
                          {...register('emergencyContactNumber')}
                          className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-coral-200 focus:outline-none transition-colors"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-sage-200 text-white flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Getting to Know You</h3>
                  </div>

                  <div className="space-y-4 ml-14">
                    <p className="text-gray-700 font-medium mb-4">
                      Please select all that apply to your family:
                    </p>

                    <label className="flex items-start space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        {...register('firstTimeVisitor')}
                        className="mt-1 w-5 h-5 text-coral-300 border-2 border-gray-300 rounded focus:ring-coral-200"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900">
                        This is our first time visiting
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        {...register('attendingRegularly')}
                        className="mt-1 w-5 h-5 text-coral-300 border-2 border-gray-300 rounded focus:ring-coral-200"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900">
                        We've been attending regularly
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        {...register('lookingForCommunity')}
                        className="mt-1 w-5 h-5 text-coral-300 border-2 border-gray-300 rounded focus:ring-coral-200"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900">
                        We're looking for a faith community
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        {...register('exploringFaith')}
                        className="mt-1 w-5 h-5 text-coral-300 border-2 border-gray-300 rounded focus:ring-coral-200"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900">
                        We're exploring our faith journey
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        {...register('friendInvited')}
                        className="mt-1 w-5 h-5 text-coral-300 border-2 border-gray-300 rounded focus:ring-coral-200"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900">
                        A friend invited us
                      </span>
                    </label>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-coral-200 text-white flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Medical & Agreements</h3>
                  </div>

                  <div className="space-y-6 ml-14">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Medical Conditions
                      </label>
                      <textarea
                        {...register('medicalConditions')}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-coral-200 focus:outline-none transition-colors resize-none"
                        placeholder="Please list any medical conditions we should be aware of"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Allergies
                      </label>
                      <textarea
                        {...register('allergies')}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-coral-200 focus:outline-none transition-colors resize-none"
                        placeholder="Please list any allergies"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Current Medications
                      </label>
                      <textarea
                        {...register('medications')}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-coral-200 focus:outline-none transition-colors resize-none"
                        placeholder="Please list any current medications"
                      />
                    </div>

                    <div className="space-y-4 pt-4">
                      <label className="flex items-start space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          {...register('liabilityConsent', { required: 'You must agree to continue' })}
                          className="mt-1 w-5 h-5 text-coral-300 border-2 border-gray-300 rounded focus:ring-coral-200"
                        />
                        <span className="text-gray-700 group-hover:text-gray-900">
                          I agree to the liability waiver and medical release <span className="text-coral-300">*</span>
                        </span>
                      </label>
                      {errors.liabilityConsent && (
                        <p className="text-coral-300 text-sm ml-8">{errors.liabilityConsent.message}</p>
                      )}

                      <label className="flex items-start space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          {...register('photoConsent')}
                          className="mt-1 w-5 h-5 text-coral-300 border-2 border-gray-300 rounded focus:ring-coral-200"
                        />
                        <span className="text-gray-700 group-hover:text-gray-900">
                          I consent to photos/videos being taken for promotional purposes
                        </span>
                      </label>

                      <label className="flex items-start space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          {...register('communicationConsent')}
                          className="mt-1 w-5 h-5 text-coral-300 border-2 border-gray-300 rounded focus:ring-coral-200"
                        />
                        <span className="text-gray-700 group-hover:text-gray-900">
                          I'd like to receive updates and communications from Youth & Family Life
                        </span>
                      </label>
                    </div>
                  </div>
                </section>

                <div className="bg-gradient-to-r from-coral-100 to-sage-100 rounded-2xl p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-coral-300 mr-2" />
                    <h3 className="text-2xl font-bold text-gray-800">Almost There!</h3>
                    <Sparkles className="w-6 h-6 text-coral-300 ml-2" />
                  </div>
                  <p className="text-gray-600 mb-6">
                    Thank you for taking the time to fill out this form. We're excited to connect with you!
                  </p>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-coral-300 text-white font-bold rounded-full hover:bg-coral-200 transition-all transform hover:scale-105 shadow-lg"
                  >
                    SUBMIT REGISTRATION
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
