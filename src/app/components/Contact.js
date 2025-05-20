"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="flex-1 relative">
            <div className="absolute inset-0">
              <Image
                src="https://picsum.photos/500/500"
                alt="Contact Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center text-center text-white p-6">
              <div>
                <h3 className="text-xl font-semibold text-black">Get in Touch</h3>
                <p className="mt-2 text-lg text-black">
                  We love to hear from you! Whether you have a question or
                  just want to chat, feel free to reach out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
