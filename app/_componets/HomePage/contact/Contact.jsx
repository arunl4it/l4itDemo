// components/ContactSection.jsx

export default function ContactSection() {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p>
  
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Chat to our L4IT team
            </h1>
  
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              We’d love to hear from you. Please fill out this form or shoot us an email.
            </p>
          </div>
  
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Email */}
              <ContactInfo
                title="Email"
                description="Our friendly team is here to help."
                contact="info@l4it.com"
                icon={
                  <EnvelopeIcon />
                }
              />
              {/* Live Chat */}
              <ContactInfo
                title="Live chat"
                description="Our friendly team is here to help."
                contact="Start new chat"
                icon={<PinIcon />}
              />
              {/* Office */}
              <ContactInfo
                title="Office"
                description="Come say hello at our office HQ."
                contact="100 Smith Street Collingwood VIC 3066 AU"
                icon={<PinIcon />}
              />
              {/* Phone */}
              <ContactInfo
                title="Phone"
                description="Mon-Fri from 8am to 5pm."
                contact="+1 (555) 000-0000"
                icon={<PhoneIcon />}
              />
            </div>
  
            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <InputField label="First Name" placeholder="John" />
                  <InputField label="Last Name" placeholder="Doe" className="mt-4 md:mt-0" />
                </div>
  
                <div className="mt-4">
                  <InputField label="Email address" type="email" placeholder="johndoe@example.com" />
                </div>
  
                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>
  
                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function ContactInfo({ title, description, contact, icon }) {
    return (
      <div>
        <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
          {icon}
        </span>
        <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">{title}</h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{description}</p>
        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">{contact}</p>
      </div>
    );
  }
  
  function InputField({ label, placeholder, type = "text", className = "" }) {
    return (
      <div className={`flex-1 px-2 ${className}`}>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    );
  }
  
  // Simple inline SVGs as React components (can also use @heroicons/react)
  function EnvelopeIcon() {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25...Z" />
      </svg>
    );
  }
  
  function PinIcon() {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0...Z" />
      </svg>
    );
  }
  
  function PhoneIcon() {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284...Z" />
      </svg>
    );
  }
  