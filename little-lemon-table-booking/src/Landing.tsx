const Landing = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 max-h-[100vh]">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[0vh] pointer-events-none" aria-hidden="true">
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>
            {/* Hero content */}
            <div className="flex flex-col items-center pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Section header */}
                <div className="text-center pb-12 md:pb-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Experience the most <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">delicious</span> meals in Austria</h1>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">A restaurant experience you won't forget anytime soon.</p>
                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                            <div>
                                <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#book">Book a table</a>
                            </div>
                            <div>
                                <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <img className='w-[80vw] md:w-[40vw] h-auto self-center rounded-lg' alt="Our signature salmon meal" src='https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

            </div>

        </div>
    )
}
export default Landing;