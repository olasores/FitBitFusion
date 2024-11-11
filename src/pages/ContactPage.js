import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";




export const ContactPage = () => {
    return (
        <>
            {/* Page header contact */}
            <section className="bg-teal-500 py-16 text-center text-white">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-4 text-lg">Get in touch with us for any questions or support.</p>
            </section>

           {/* Contact Info Section */}
           <section className="py-12 text-center">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-teal-600 mb-4">Our Contact Information</h2>
                    <p className="text-gray-700">Feel free to reach out to us directly via phone, email, or visit our office.</p>
                    
                    <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12 mt-8 text-left">
                        {/* Phone Section */}
                        <div className="flex items-start space-x-4">
                            <FaPhone className="text-teal-600 text-2xl mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                                <p className="text-gray-700">+1 (123) 456-7890</p>
                                <p className="text-gray-700">+1 (987) 654-3210</p>
                            </div>
                        </div>

                        {/* Email Section */}
                        <div className="flex items-start space-x-4">
                            <MdEmail className="text-teal-600 text-2xl mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                                <p className="text-gray-700">support@fitnessfusion.com</p>
                                <p className="text-gray-700">info@fitnessfusion.com</p>
                            </div>
                        </div>

                        {/* Address Section */}
                        <div className="flex items-start space-x-4">
                            <FaLocationDot className="text-teal-600 text-2xl mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800">Address</h3>
                                <p className="text-gray-700">123 Fitness St.</p>
                                <p className="text-gray-700">Wellness City, Fit State, 12345</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* send us a message Section */}
            <section className="py-16 flex justify-center">
                <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-teal-600 text-center">Send Us a Message</h2>
                    
                    <form className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                                required
                            />
                        </div>

                        {/* Subject Field */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Your Message"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-md"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};
