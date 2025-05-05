import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LockClosedIcon,
  } from "@heroicons/react/24/outline";
  
  const features = [
    {
      name: "AI-Based Website Development",
      description: "Harness the power of AI to build intelligent, fast, and user-focused websites tailored to your business goals.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Cybersecurity Services",
      description: "Protect your digital infrastructure with end-to-end cybersecurity solutions.",
      icon: LockClosedIcon,
    },
    {
      name: "Web & Mobile App Development",
      description: "Custom web and mobile applications designed to enhance performance.",
      icon: ArrowPathIcon,
    },
    {
      name: "Database Services",
      description: "Secure database design, management, and optimization services.",
      icon: FingerPrintIcon,
    },
  ];
  
  export default function ProductsFeatures() {
    return (
      <div id="Services" className="bg-white py-24 sm:py-32 h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-base font-semibold text-red-800">Run Business With</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">Reliable IT Support</p>
            <p className="mt-6 text-lg text-gray-600">
              Contact L4IT Company today to learn more about how we can help you
              refocus on what’s important!
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r bg-red-800 to-black">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  