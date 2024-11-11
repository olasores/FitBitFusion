import weight from "../images/weight.png"

export const AboutPage = () => {
    return (
        <>
            {/* Page Header */}
            <section className="bg-teal-500 py-16 text-center text-white">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-4 text-lg">Learn more about who we are and what we do</p>
            </section>

          {/* Our Vision Section */}
          <section className="py-16">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                    {/* Left Side - Text Section */}
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            We are driven by a shared commitment to empower individuals through
                            innovative technology, creating solutions that make a real impact in
                            education, fitness, and personal development.
                        </p>
                        <p className="text-lg text-gray-700">
                            Our vision is to create a more connected, accessible world where
                            everyone has the tools they need to thrive in an ever-changing
                            environment.
                        </p>
                    </div>
                    
                    {/* Right Side - Image Section */}
                    <div className="md:w-1/2 mt-8 md:mt-0">
                    <img
                        src={weight}
                        alt="hero-img"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {/* <section className="py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/200"
                                alt="Team Member"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">John Doe</h3>
                            <p className="text-gray-600">CEO & Founder</p>
                            <p className="mt-4 text-gray-700">
                                John has over 10 years of experience in the tech industry, leading teams
                                and driving innovation.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/200"
                                alt="Team Member"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">Jane Smith</h3>
                            <p className="text-gray-600">COO & Co-Founder</p>
                            <p className="mt-4 text-gray-700">
                                Jane's leadership and strategic vision have been key to growing the company
                                and expanding into new markets.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/200"
                                alt="Team Member"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">Alex Johnson</h3>
                            <p className="text-gray-600">CTO</p>
                            <p className="mt-4 text-gray-700">
                                Alex is the technical brain behind our platform, with deep expertise in
                                software architecture and development.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Values Section */}
            <section className="py-16 bg-teal-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-8">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-teal-500 mb-4">Innovation</h3>
                            <p className="text-gray-700">
                                We thrive on creativity and strive to deliver cutting-edge solutions to
                                our users.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-teal-500 mb-4">Integrity</h3>
                            <p className="text-gray-700">
                                We operate with honesty and transparency, building trust with our users
                                and stakeholders.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-teal-500 mb-4">Collaboration</h3>
                            <p className="text-gray-700">
                                We believe in the power of teamwork, both within our company and with
                                our clients and partners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
