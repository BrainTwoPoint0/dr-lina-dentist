"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const smoothScroll = (targetId: string) => {
    // Close mobile menu first
    setIsMenuOpen(false);

    // Add a small delay to let the menu close animation finish
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  // Smooth animation variants for consistency
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4 },
  };

  // Services Section Component with animations
  const ServicesSection = () => {
    const services = [
      {
        icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Pediatric Dentistry",
        description:
          "Specialized dental care for children from infants to teenagers, creating positive dental experiences.",
      },
      {
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Orthodontics",
        description:
          "Expert teeth alignment and bite correction using modern techniques for beautiful smiles.",
      },
      {
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        title: "Maxillofacial Prosthetics",
        description:
          "Specialized prosthetic rehabilitation for patients with facial defects or oral conditions.",
      },
    ];

    return (
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={fadeInUp.transition}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Comprehensive Dental Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    delay: index * 0.1,
                  },
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Credentials Section Component
  const CredentialsSection = () => {
    return (
      <section id="credentials" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={fadeInUp.transition}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            The Dentist with the Most Diplomas
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              transition={{ ...fadeInLeft.transition, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Advanced Degrees from Paris
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>
                      Diplôme Universitaire de Prothèse Maxillo-Faciale
                    </strong>{" "}
                    (4 years) - Paris 7/Garancière
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>
                      Certificat d'Études Supérieures en Pédodontie
                    </strong>{" "}
                    - Université Paris 7
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Certificat en Orthopédie Dento-Faciale</strong> -
                    Paris 7
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={fadeInRight.initial}
              whileInView={fadeInRight.animate}
              transition={{ ...fadeInRight.transition, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Specialized Training
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Certificat en Biologie de la Bouche</strong>{" "}
                    (Histo-Embryologique) - Université Paris 7
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>30+ years of clinical experience</strong> treating
                    children in Lebanon
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Active member</strong> of the Lebanese Dental
                    Association
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  // FAQ Section Component
  const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
      {
        question:
          "Why is Dr. Lina considered the best pediatric dentist in Lebanon?",
        answer:
          "Dr. Lina has over 30 years of experience and is French-trained at Université Paris 7/Garancière. She's the only dentist in Lebanon with multiple advanced degrees in pediatric dentistry, orthodontics, and maxillofacial prosthetics. Her unique approach treats children without anesthesia using trust-based methods.",
      },
      {
        question:
          "How can Dr. Lina treat children without anesthesia or laughing gas?",
        answer:
          "Dr. Lina uses a special trust-based approach developed through her French training and 30+ years of experience. She builds genuine rapport with children, uses gentle techniques, and creates a comfortable environment that eliminates the need for anesthesia in most cases.",
      },
      {
        question: "What services does the best dentist in Beirut offer?",
        answer:
          "Dr. Lina offers comprehensive dental services including pediatric dentistry, orthodontics (braces), and specialized maxillofacial prosthetics. She treats children from infancy through teenage years with gentle, pain-free methods.",
      },
      {
        question: "Where is Dr. Lina's dental clinic located in Beirut?",
        answer:
          "The clinic is conveniently located in Ras El Nabeh, Beirut, on the 5th floor of Grand Beyrouth Building, Bechara Khoury Street. It's easily accessible from all areas of Beirut and provides modern facilities for children's dental care.",
      },
      {
        question:
          "What makes Dr. Lina different from other dentists in the Middle East?",
        answer:
          "Dr. Lina is the only French-trained pediatric dentist in Lebanon with the most diplomas and certifications. Her unique combination of European dental techniques, Arabic cultural understanding, and 30+ years of local experience makes her the top choice for families seeking the best dental care for their children.",
      },
      {
        question:
          "How to book an appointment with the best pediatric dentist in Lebanon?",
        answer:
          "You can easily book an appointment by calling. Dr. Lina's clinic is open Monday through Friday.",
      },
    ];

    return (
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={fadeInUp.transition}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    delay: index * 0.1,
                  },
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 flex-shrink-0 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl font-bold text-gray-900"
            >
              Dr. Lina
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => smoothScroll("home")}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                Home
              </button>
              <button
                onClick={() => smoothScroll("about")}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                About
              </button>
              <button
                onClick={() => smoothScroll("credentials")}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                Credentials
              </button>
              <button
                onClick={() => smoothScroll("services")}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                Services
              </button>
              <button
                onClick={() => smoothScroll("contact")}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            <motion.a
              href="tel:+9611647444"
              className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.a>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4 border-t border-gray-200 mt-4">
              <button
                onClick={() => smoothScroll("home")}
                className="block w-full text-left text-gray-600 hover:text-blue-600 transition duration-300"
              >
                Home
              </button>
              <button
                onClick={() => smoothScroll("about")}
                className="block w-full text-left text-gray-600 hover:text-blue-600 transition duration-300"
              >
                About
              </button>
              <button
                onClick={() => smoothScroll("credentials")}
                className="block w-full text-left text-gray-600 hover:text-blue-600 transition duration-300"
              >
                Credentials
              </button>
              <button
                onClick={() => smoothScroll("services")}
                className="block w-full text-left text-gray-600 hover:text-blue-600 transition duration-300"
              >
                Services
              </button>
              <button
                onClick={() => smoothScroll("contact")}
                className="block w-full text-left text-gray-600 hover:text-blue-600 transition duration-300"
              >
                Contact
              </button>
              <a
                href="tel:+9611647444"
                className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-blue-50 to-white pt-32 pb-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Dr. Lina
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-700 mb-4"
              >
                Pediatric Dentist & Orthodontist
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg text-gray-600 mb-4"
              >
                Specialist in Maxillofacial Prosthetics
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-lg text-gray-600 mb-8"
              >
                30+ years of gentle, pain-free dental care for children in
                Beirut
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="space-y-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+9611647444"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Book an Appointment
                </motion.a>
                <p className="text-sm text-gray-600">
                  No general anesthesia or laughing gas needed
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-blue-100 rounded-2xl p-8 shadow-lg"
            >
              <div className="space-y-4">
                {[
                  "Trust-based approach with children",
                  "Pain-free treatment while awake",
                  "Member of Lebanese Dental Association",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    className="flex items-start space-x-3"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-gray-700">{text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Expert Dental Care with French Education Excellence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Dr. Lina is a highly experienced pediatric dentist and orthodontist
            with more than 30 years of dedicated service in Beirut. Trained at
            the prestigious Université Paris 7/Garancière in France, she brings
            world-class expertise to Lebanon.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Her unique, calm approach focuses on building trust with each child,
            ensuring pain-free treatment while they stay awake and comfortable.
            The clinic provides a safe, supportive space where children and
            families feel welcomed and cared for.
          </p>
        </div>
      </section>

      {/* Credentials Section */}
      <CredentialsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Dr. Lina?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                French-Trained Excellence
              </h3>
              <p className="text-gray-600">
                With extensive education from Université Paris 7/Garancière, Dr.
                Lina brings world-class French dental expertise to Beirut,
                combining European standards with local understanding.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No Anesthesia Needed
              </h3>
              <p className="text-gray-600">
                Dr. Lina's gentle, trust-based approach allows her to provide
                pain-free dental treatment without the need for general
                anesthesia or laughing gas, even for very young children.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Multiple Specializations
              </h3>
              <p className="text-gray-600">
                Unique combination of pediatric dentistry, orthodontics,
                and maxillofacial prosthetics expertise -
                comprehensive care under one roof.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Convenient Location
              </h3>
              <p className="text-gray-600">
                Centrally located in Ras El Nabeh, Beirut, with easy access from
                all areas of the city. Modern facilities on the 5th floor of
                Grand Beyrouth building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Schedule an appointment for your child's gentle dental care
          </p>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Clinic Location
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong>Grand Beyrouth Building, 5th Floor</strong>
                </p>
                <p className="text-gray-600 mb-2">Bechara Khoury Street</p>
                <p className="text-gray-600 mb-6">
                  Ras El Nabeh, Beirut, Lebanon
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Official Links
                </h3>
                <p className="text-gray-600 mb-2">
                  <a
                    href="https://www.lda.org.lb/dentists/dr-lina-abdel-hussein-chamseddine/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Lebanese Dental Association Profile
                  </a>
                </p>
                <p className="text-gray-600 mb-4">
                  <a
                    href="https://share.google/tMNls4wGrMyk94DC9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    View Clinic Location on Google Maps
                  </a>
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Office Hours
                </h3>
                <p className="text-gray-600 mb-6">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday/Sunday: Closed
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Book an Appointment
                </h3>
                <a
                  href="tel:+9611647444"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">
            © 2025 Dr. Lina - Pediatric Dentist & Orthodontist
          </p>
          <p className="text-gray-400 text-sm">
            French-trained specialist providing gentle, pain-free dental care
            for children in Beirut for over 30 years
          </p>
        </div>
      </footer>
    </div>
  );
}
