export default function Sample() {
  return (
    <div className="bg-white pt-28 pb-28">
      <div className="max-w-7xl  mx-auto py-5">
        {/* the heading and paragraph section start */}
        <div className="max-w-2xl mx-auto  justify-center ">
          <h5 className=" text-center text-red-800 text-md pb-2 font-light">
            For Bussiness Professionals
          </h5>
          <h1 className="text-center text-4xl text-black font-extrabold">
            What Makes Us <span className="bg-gradient-to-r bg-red-800 to-black bg-clip-text text-transparent">Different</span> ?
          </h1>
          <div className="w-30 h-2 mx-auto mt-4 rounded bg-gradient-to-r bg-red-800 to-black"></div>
          <p className="text-center mt-5 text-gray-400">
            Our platform is built specifically for business leaders, with
            features designed to make accessing reliable IT support seamless,
            efficient, and effective
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-4 mt-14 gap-4 sm:gap-10">
          <div className=" p-8 shadow rounded-2xl shadow-gray-400 ">
            <h3 className="text-black font-bold text-xl pb-4 text-left">
              Custom Software Solutions
            </h3>
            <p className="text-black text-left font-light text-lg ">
              Our team develops tailored software that adapts to your unique
              workflows and business challenges — ensuring efficiency,
              scalability, and innovation at every step.
            </p>
          </div>
          <div className=" p-8 shadow rounded-2xl shadow-gray-400 ">
            <h3 className="text-black font-bold text-xl pb-4 text-left">
              Cloud-First Approach
            </h3>
            <p className="text-black text-left font-light text-lg ">
              We help you move your business to the cloud with secure, reliable,
              and cost-effective solutions — enabling seamless access and
              business continuity from anywhere.
            </p>
          </div>
          <div className=" p-8 shadow rounded-2xl shadow-gray-400 ">
            <h3 className="text-black font-bold text-xl pb-4 text-left">
              Enterprise-Grade Security
            </h3>
            <p className="text-black text-left font-light text-lg ">
              Security is in our DNA. We implement proactive cybersecurity
              strategies to protect your data, infrastructure, and operations
              from evolving digital threats.
            </p>
          </div>
          <div className=" p-8 shadow rounded-2xl shadow-gray-400 ">
            <h3 className="text-black font-bold text-xl pb-4 text-left">
              AI for Business Growth
            </h3>
            <p className="text-black text-left font-light text-lg ">
              We leverage Artificial Intelligence to automate workflows, enhance
              customer experiences, and deliver data-driven insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
