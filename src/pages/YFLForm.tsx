import { useState, useEffect } from 'react'

export default function YFLForm() {
  const [activeTab, setActiveTab] = useState<'family' | 'youth'>('family')

  useEffect(() => {
    document.title = 'YFL Form - Youth & Family Life Registration'
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Form Container */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('family')}
              className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === 'family'
                  ? 'text-[#B8856A] border-b-2 border-[#B8856A] bg-white'
                  : 'text-gray-500 hover:text-gray-700 bg-gray-50'
              }`}
            >
              <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                activeTab === 'family' ? 'bg-[#B8856A] text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                1
              </span>
              FAMILY REGISTRATION
            </button>
            <div
              className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 text-sm font-medium ${
                activeTab === 'youth'
                  ? 'text-[#B8856A] border-b-2 border-[#B8856A] bg-white'
                  : 'text-gray-400 bg-gray-50 cursor-not-allowed'
              }`}
            >
              <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                activeTab === 'youth' ? 'bg-[#B8856A] text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                2
              </span>
              YOUTH INFORMATION
            </div>
          </div>

          {/* Logo Section */}
          <div className="bg-gradient-to-b from-[#E8DDD5] to-[#F5F1ED] py-12 text-center">
            <img
              src="/hd-logo.png"
              alt="Youth & Family Life"
              className="h-80 w-auto mx-auto"
            />
          </div>

          {/* Form Content Area */}
          <div className="p-8 md:p-8 bg-[#F5F1ED]">
            {activeTab === 'family' && (
              <div className="max-w-4xl mx-auto space-y-4">
                {/* Welcome Section */}
                <div className="border-l-4 border-[#B8856A] border border-gray-200 rounded-lg p-8 bg-white/30">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">We're so glad you're here.</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We are a collaborative spiritual community dedicated to the holistic wellbeing of youth and families. Rooted in love, we create transformational experiences — through nature, creativity, music, service, and universal spiritual principles we plant seeds that grow into forests of change.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We co-create our conscious community by nurturing spiritual confidence, fostering deep connection, and honoring each soul's unique unfolding.
                  </p>
                  <div className="bg-[#E8F5E9] border border-[#A5D6A7] rounded-md p-4 flex items-start gap-3">
                    <span className="text-[#4CAF50] text-xl">ℹ️</span>
                    <p className="text-sm text-gray-700">
                      Please fill this out once per family. You'll complete a short form for each child after this.
                    </p>
                  </div>
                </div>

                {/* Family Details Section */}
                <div className="rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#FFF3E0] rounded-lg flex items-center justify-center text-xl">
                      🏠
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Family Details</h3>
                      <p className="text-sm text-gray-500">At Unity of Tustin we celebrate and honor the many expressions of family and welcome everyone with love and gratitude into our Youth and Family Life community.</p>
                    </div>
                  </div>

                  <form className="space-y-6">
                    {/* Parent/Guardian Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        PARENT / GUARDIAN NAME(S) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Full name(s) of parent(s) / guardian(s)"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8856A] focus:border-transparent"
                      />
                    </div>

                    {/* Phone and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          PRIMARY PHONE NUMBER <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="( ) -"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8856A] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          EMAIL ADDRESS <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8856A] focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Preferred Method of Contact */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        PREFERRED METHOD OF CONTACT
                      </label>
                      <div className="flex flex-wrap gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="contact" value="text" className="w-4 h-4 text-[#B8856A] focus:ring-[#B8856A]" />
                          <span className="text-sm text-gray-700">📱 TEXT</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="contact" value="call" className="w-4 h-4 text-[#B8856A] focus:ring-[#B8856A]" />
                          <span className="text-sm text-gray-700">📞 CALL</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="contact" value="email" className="w-4 h-4 text-[#B8856A] focus:ring-[#B8856A]" />
                          <span className="text-sm text-gray-700">📧 EMAIL</span>
                        </label>
                      </div>
                    </div>

                    {/* Emergency Contact */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        EMERGENCY CONTACT <span className="text-gray-400 text-xs">(if different from above)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name and phone number"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8856A] focus:border-transparent"
                      />
                    </div>
                  </form>
                </div>

                {/* Decorative Line Separator */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4A5A5] to-transparent my-4"></div>

                {/* Getting to Know You Section */}
                <div>
                  {/* Decorative Line Separator */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4A5A5] to-transparent mb-4"></div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#E8F5E9] rounded-lg flex items-center justify-center text-xl">
                      🌱
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Getting to Know You</h3>
                      <p className="text-sm text-gray-500">Help us understand how you found us and what you're looking for.</p>
                    </div>
                  </div>

                  <form className="space-y-6">
                    {/* How did you hear about us */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        HOW DID YOU HEAR ABOUT UNITY OF TUSTIN YOUTH & FAMILY LIFE? <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8856A] focus:border-transparent appearance-none cursor-pointer">
                          <option value="">Select one...</option>
                          <option value="friend">Friend or Family Referral</option>
                          <option value="website">Website</option>
                          <option value="social">Social Media</option>
                          <option value="sunday">Sunday Service</option>
                          <option value="event">Event or Workshop</option>
                          <option value="flyer">Flyer or Poster</option>
                          <option value="search">Online Search</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* What brings you to our community */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        WHAT BRINGS YOU TO OUR COMMUNITY? WHAT ARE YOU SEEKING?
                      </label>
                      <div className="flex flex-wrap gap-3">
                        <label className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full cursor-pointer hover:bg-[#E8DDD5] hover:border-[#B8856A] has-[:checked]:bg-[#D4C4B8] has-[:checked]:border-[#B8856A] has-[:checked]:shadow-md transition-all">
                          <input type="checkbox" className="hidden" />
                          <span className="text-sm">✨ SPIRITUAL GROWTH / CONNECTION</span>
                        </label>
                        <label className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full cursor-pointer hover:bg-[#E8DDD5] hover:border-[#B8856A] has-[:checked]:bg-[#D4C4B8] has-[:checked]:border-[#B8856A] has-[:checked]:shadow-md transition-all">
                          <input type="checkbox" className="hidden" />
                          <span className="text-sm">🧡 COMMUNITY / BELONGING</span>
                        </label>
                        <label className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full cursor-pointer hover:bg-[#E8DDD5] hover:border-[#B8856A] has-[:checked]:bg-[#D4C4B8] has-[:checked]:border-[#B8856A] has-[:checked]:shadow-md transition-all">
                          <input type="checkbox" className="hidden" />
                          <span className="text-sm">🌿 YOUTH PROGRAMS</span>
                        </label>
                        <label className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full cursor-pointer hover:bg-[#E8DDD5] hover:border-[#B8856A] has-[:checked]:bg-[#D4C4B8] has-[:checked]:border-[#B8856A] has-[:checked]:shadow-md transition-all">
                          <input type="checkbox" className="hidden" />
                          <span className="text-sm">🔥 YOUNG ADULT CONNECTION (NGU)</span>
                        </label>
                        <label className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full cursor-pointer hover:bg-[#E8DDD5] hover:border-[#B8856A] has-[:checked]:bg-[#D4C4B8] has-[:checked]:border-[#B8856A] has-[:checked]:shadow-md transition-all">
                          <input type="checkbox" className="hidden" />
                          <span className="text-sm">🧡 PERSONAL HEALING OR SUPPORT</span>
                        </label>
                        <label className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full cursor-pointer hover:bg-[#E8DDD5] hover:border-[#B8856A] has-[:checked]:bg-[#D4C4B8] has-[:checked]:border-[#B8856A] has-[:checked]:shadow-md transition-all">
                          <input type="checkbox" className="hidden" />
                          <span className="text-sm">🔵 CURIOSITY / EXPLORING</span>
                        </label>
                        <label className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full cursor-pointer hover:bg-[#E8DDD5] hover:border-[#B8856A] has-[:checked]:bg-[#D4C4B8] has-[:checked]:border-[#B8856A] has-[:checked]:shadow-md transition-all">
                          <input type="checkbox" className="hidden" />
                          <span className="text-sm">🎉 EVENTS OR SOCIAL CONNECTION</span>
                        </label>
                        <label className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full cursor-pointer hover:bg-[#E8DDD5] hover:border-[#B8856A] has-[:checked]:bg-[#D4C4B8] has-[:checked]:border-[#B8856A] has-[:checked]:shadow-md transition-all">
                          <input type="checkbox" className="hidden" />
                          <span className="text-sm">OTHER</span>
                        </label>
                      </div>
                    </div>

                    {/* Additional information */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ANYTHING ELSE YOU'D LIKE US TO KNOW ABOUT YOUR FAMILY?
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Share anything that would help us welcome and support your family well..."
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8856A] focus:border-transparent resize-none"
                      />
                    </div>
                  </form>
                </div>

                {/* Decorative Line Separator */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4A5A5] to-transparent my-4"></div>

                {/* Release & Agreements Section */}
                <div className="border-l-4 border-[#B8856A] border border-gray-200 rounded-lg p-8 bg-white/30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#F3E5F5] rounded-lg flex items-center justify-center text-xl">
                      📝
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Release & Agreements</h3>
                      <p className="text-sm text-gray-500">Please read both sections carefully before signing below.</p>
                    </div>
                  </div>

                  <form className="space-y-6">
                    {/* Liability & Photography Release Box */}
                    <div className="bg-[#FFF8F0] border border-[#E8DDD5] rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-[#FFE0B2] rounded-lg flex items-center justify-center text-lg">
                          📋
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Liability & Photography Release</h4>
                          <p className="text-xs text-gray-500">Scroll to read the full document before agreeing</p>
                        </div>
                      </div>

                      {/* Scrollable Release Text */}
                      <div className="bg-white border border-gray-300 rounded-md p-4 max-h-64 overflow-y-auto mb-4">
                        <h5 className="text-sm font-semibold text-[#D89580] mb-3">LIABILITY RELEASE</h5>
                        <p className="text-sm text-gray-700 leading-relaxed mb-4">
                          As the above-named participant (or legal guardian if participant is under age 18), I confirm that I am participating in these events of my own free will and have the appropriate permission to participate in and travel to/from these events.
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed mb-4">
                          I confirm that I agree to all terms outlined in this release document, including indemnifying and holding harmless the group leaders, or any other representative of Unity of Tustin, or Unity of Tustin itself, or the Southwest Region of the Association of Unity Churches from all liability arising from participation in or attendance at this function.
                        </p>
                        <div className="bg-gray-50 border-l-2 border-gray-300 pl-4 py-2 my-4">
                          <p className="text-xs italic text-gray-600">
                            ↑ Scroll up to read the full document before agreeing below.
                          </p>
                        </div>
                      </div>

                      {/* Consent Checkboxes */}
                      <div className="space-y-4">
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input 
                            type="checkbox" 
                            className="mt-1 w-5 h-5 text-[#B8856A] border-gray-300 rounded focus:ring-[#B8856A]"
                          />
                          <div>
                            <p className="font-semibold text-gray-800 group-hover:text-gray-900">I agree to the Liability Release</p>
                            <p className="text-sm text-gray-600 mt-1">
                              I confirm I am participating of my own free will and agree to hold harmless Unity of Tustin and the Southwest Region of the Association of Unity Churches from all liability arising from participation in these events.
                            </p>
                          </div>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input 
                            type="checkbox" 
                            className="mt-1 w-5 h-5 text-[#B8856A] border-gray-300 rounded focus:ring-[#B8856A]"
                          />
                          <div>
                            <p className="font-semibold text-gray-800 group-hover:text-gray-900">I agree to the Photography Release</p>
                            <p className="text-sm text-gray-600 mt-1">
                              I grant Unity of Tustin permission to use photographs and video images of the above participant for publication, social media, advertising, and presentations. I will not use these images for personal gain.
                            </p>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Signature Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          PARENT / GUARDIAN SIGNATURE <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type full legal name to sign"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8856A] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          DATE SIGNED <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          defaultValue="2026-04-06"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8856A] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                {/* Decorative Line Separator */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4A5A5] to-transparent my-4"></div>

                {/* Almost There Section */}
                <div className="border-l-4 border-[#B8856A] border border-gray-200 rounded-lg p-8 bg-white/30 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
                    Almost there! ✨
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
                    Thank you for providing your family information. The next step is to register each child and/or teen individually so we can best support them. Please fill out a Youth Information Form for each young person attending.
                  </p>
                  <button
                    onClick={() => setActiveTab('youth')}
                    className="px-8 py-3 bg-[#D89580] text-white font-semibold rounded-full hover:bg-[#C67F6B] transition-all shadow-md hover:shadow-lg"
                  >
                    CONTINUE TO YOUTH FORM →
                  </button>
                </div>
              </div>
            )}
            {activeTab === 'youth' && (
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="border-l-4 border-[#B8856A] border border-gray-200 rounded-lg p-8 bg-white/30 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Youth Information</h3>
                  <p className="text-gray-600">Youth form content will be added here...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
