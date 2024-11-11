import React from "react";

export const ServicePage = () => {
    return (
        <>
            {/* Page Header */}
            <section className="bg-teal-500 py-16 text-center text-white">
                <h1 className="text-4xl font-bold">Our Services</h1>
                <p className="mt-4 text-lg">Affordable fitness solutions designed for students</p>
            </section>

            {/* Service Cards */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Membership Discounts */}
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <h3 className="text-2xl font-semibold text-gray-800">Membership Discounts</h3>
                            <p className="mt-4 text-gray-600">
                                Get access to exclusive discounts on gym memberships specifically tailored for students, helping you save while staying fit.
                            </p>
                        </div>

                        {/* Multi-Gym Access */}
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <h3 className="text-2xl font-semibold text-gray-800">Multi-Gym Access</h3>
                            <p className="mt-4 text-gray-600">
                                Use one membership to access multiple gyms and fitness centers, giving you the flexibility to work out wherever is convenient.
                            </p>
                        </div>

                        {/* Group Fitness Classes */}
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <h3 className="text-2xl font-semibold text-gray-800">Group Fitness Classes</h3>
                            <p className="mt-4 text-gray-600">
                                Join a variety of group fitness classes at partner gyms, ranging from yoga to high-intensity interval training, all covered by your membership.
                            </p>
                        </div>

                        {/* Online Fitness Resources */}
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <h3 className="text-2xl font-semibold text-gray-800">Online Fitness Resources</h3>
                            <p className="mt-4 text-gray-600">
                                Access workout plans, nutrition guides, and other resources online to support your fitness journey anytime, anywhere.
                            </p>
                        </div>

                        {/* Personal Training Sessions */}
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <h3 className="text-2xl font-semibold text-gray-800">Personal Training Sessions</h3>
                            <p className="mt-4 text-gray-600">
                                Book discounted personal training sessions to get personalized guidance and achieve your fitness goals faster.
                            </p>
                        </div>

                        {/* Student Community Access */}
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <h3 className="text-2xl font-semibold text-gray-800">Student Community Access</h3>
                            <p className="mt-4 text-gray-600">
                                Join a community of like-minded students on their fitness journeys, offering support, motivation, and inspiration.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

           
        </>
    );
}
