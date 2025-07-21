import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const service_id= "service_hogs4nq";
  const template_id="template_3ixujcg";
  const api_key="FDXaSnpy2sVjj54N4" ;


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        service_id,     // 🔁 Replace this
        template_id,    // 🔁 Replace this
        form.current,
      api_key      // 🔁 Replace this
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-800">
            <p className="flex items-center gap-3 text-lg">
              <FaEnvelope className="text-blue-600" />
              ajaykumar895377@gmail.com
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FaPhone className="text-blue-600" />
              +91-7398420730
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FaMapMarkerAlt className="text-blue-600" />
              Uttar Pradesh, India
            </p>

            {/* Social Links */}
            <div className="flex gap-6 pt-6">
              <a href="https://github.com/ajay7398" target="_blank" rel="noreferrer">
                <FaGithub className="text-2xl hover:text-gray-700 transition" />
              </a>
              <a href="https://www.linkedin.com/in/ajay-kumar-a64716242/" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-800 transition" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              📤 Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
