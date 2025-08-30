import { FaComputer } from 'react-icons/fa6';
import Navbar from '../components/Navbar';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaGraduationCap, FaSchool, FaCode, FaTools, FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Navbar />

      {/* Background layer for gradient and blobs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-br from-[#fef9f9] via-[#f9f4ff] to-[#eef3ff]">
        <div className="absolute top-[-4rem] left-[-4rem] w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob" />
        <div className="absolute bottom-[-4rem] right-[-4rem] w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000" />
      </div>

      {/* Horizontally scrollable sections */}
      <main className="pt-24 flex flex-col overflow-y-auto">

        {/* Home Section */}
        <section
          id="home"
          className="w-screen min-h-screen flex flex-col md:flex-row items-center justify-between px-10 snap-start"
        >
          {/* Text */}
          <div className="space-y-4 max-w-xl px-6 md:px-16 text-center md:text-left">
            <h2 className="text-3xl text-gray-800">Hii There,</h2>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight whitespace-nowrap">
              <span className="text-gray-800">I'm </span>
              <span className="text-purple-600">Pardhavi Mallampati</span>
            </h1>
            <p className="text-2xl text-gray-700">I Am Into Web Development.</p>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-6 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/pardhavi-mallampati-808a64258/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 hover:scale-125 transition-transform duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/Pardhavi-08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 hover:scale-125 transition-transform duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="tel:9492444443"
                className="text-gray-600 hover:text-purple-600 hover:scale-125 transition-transform duration-300"
              >
                <FaPhoneAlt size={28} />
              </a>
              <a href="mailto:pardhavi084@gmail.com" className="text-gray-600 hover:text-purple-600 hover:scale-125 transition-transform duration-300">
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>

          {/* Image */}
     
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full min-h-screen px-6 py-16 flex flex-col items-center justify-start text-center md:px-12"
        >
          <div className="w-full max-w-5xl space-y-8">
            <h2 className="mt-8 text-3xl font-semibold text-gray-800 underline underline-offset-4 decoration-purple-500">
              About Me
            </h2>
            <p className="text-lg text-gray-700">
              I&apos;m an enthusiastic and dedicated Computer Science student with a strong foundation across software development, full-stack web technologies, and applied machine learning. My experience spans building responsive, user-centric applications with modern frameworks like React, Next.js, and Tailwind CSS, as well as implementing scalable backends with Node.js, Express.js, and MongoDB.
            </p>
            <p className="text-lg text-gray-700">
              Beyond web development, I have applied ML in real-world projects like fingerprint-based blood group detection and sentiment analysis, strengthening my ability to design and deploy functional, user-focused solutions.
            </p>
            <p className="text-lg text-gray-700">
              Outside of academics and coding, I enjoy refining UI/UX interactions, keeping up with the latest tech innovations, and experimenting with creative problem-solving approaches. I value continuous learning, adaptability, and innovation, and I aim to contribute to projects that make a meaningful difference.
            </p>
            <p className="text-lg text-gray-700">
              Let&apos;s innovate and build together!
            </p>
          </div>
        </section>

     {/* Projects Section */}
<section
  id="projects"
  className="relative w-full min-h-screen px-6 py-24 flex flex-col items-center text-center md:px-12 overflow-hidden bg-gradient-to-br from-[#eef3ff] via-[#f9f4ff] to-[#fef9f9]"
>
  <h2 className="text-3xl font-semibold text-gray-800 underline underline-offset-4 decoration-purple-500 mb-15">
    Projects
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full">
    {[
      {
        title: 'Smart Healthcare System',
        description: 'An IoT-based solution for real-time patient monitoring with emergency alert systems.',
        tools: ['React.js', 'Node.js', 'MongoDB', 'Python', 'TensorFlow','OpenCV'],
        github: 'https://github.com/Pardhavi-08/Smart-Healthcare-System',
        demo: 'https://drive.google.com/file/d/10vEgauWPZCbOPNARuvmkbS6Ou1WsuAYO/view?usp=sharing',
      },
      {
        title: 'Sentiment Analysis',
        description: 'Analyzed user sentiments from text data using NLP and machine learning techniques.',
        tools: ['Python', 'NLTK', 'Scikit-learn', 'Pandas','Numpy','TF-IDF'],
        github: 'https://github.com/Pardhavi-08/ML-Sentiment_Analysis',
        demo: 'https://pardhavi-08-ml-sentiment-analysis-predict-hvsfr4.streamlit.app/',
      },
      {
        title: 'Event Calendar App',
        description: 'A responsive calendar app for event scheduling with recurrence and drag-and-drop.',
        tools: ['React', 'Vite','HTML5','JavaScript', 'Tailwind CSS','LocalStorage'],
        github: 'https://github.com/Pardhavi-08/Flam-Frontend-Task3-event-calendar',
        demo: 'https://mellifluous-capybara-800f76.netlify.app/',
      },
    ].map((project, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-left flex flex-col justify-between space-y-4"
      >
        <div>
          <h3 className="text-xl font-bold text-purple-700">{project.title}</h3>
          <p className="text-gray-700 mt-2">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          {project.tools.map((tool, i) => (
            <span key={i} className="bg-purple-100 px-3 py-1 rounded-full">
              {tool}
            </span>
          ))}
        </div>

        <div className="flex gap-5 pt-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-purple-700"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-purple-700"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Skills Section */}
        <section
          id="skills"
          className="w-full min-h-screen px-6 py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 flex flex-col items-center text-center md:px-12"
        >
          <div className="w-full max-w-6xl space-y-12">
            <h2 className="mt-8 text-3xl font-semibold text-gray-800 underline underline-offset-4 decoration-purple-500">
              My Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {[{
                title: "Programming Languages",
                icon: <FaCode className="text-gray-500" />,
                items: ["C", "C++"]
              }, {
                title: "Tools and Version Control",
                icon: <FaTools className="text-gray-500" />,
                items: ["VS Code", "GitHub", "Canva"]
              }, {
                title: "Front-End",
                icon: <FaLaptopCode className="text-gray-500" />,
                items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
              }, {
                title: "Machine Learning",
                icon: <FaComputer className="text-gray-500" />,
                items: ["Scikit-learn", "TensorFlow", "OpenCV", "NumPy", "Pandas", "NLTK", "TF-IDF"]
              }].map((skillSet) => (
                <div
                  key={skillSet.title}
                  className="flex flex-col justify-between h-full bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition"
                >
                  <div className="flex flex-col items-center space-y-5">
                    <h3 className="text-2xl font-semibold text-purple-700 flex items-center gap-2">
                      {skillSet.icon} {skillSet.title}
                    </h3>
                    <ul className="flex flex-wrap gap-3 justify-center text-gray-800 text-sm">
                      {skillSet.items.map((item) => (
                        <li
                          key={item}
                          className="bg-purple-100 px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-transform duration-200"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="relative w-full min-h-screen px-6 py-24 flex flex-col items-center text-center md:px-12 overflow-hidden bg-gradient-to-br from-[#eef3ff] via-[#f9f4ff] to-[#fef9f9]"
        >
          <div className="absolute top-[-4rem] left-[-4rem] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob -z-10" />
          <div className="absolute bottom-[-4rem] right-[-4rem] w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000 -z-10" />

          <div className="w-full max-w-5xl z-10 space-y-18">
            <h2 className="text-3xl font-semibold text-gray-800 underline underline-offset-4 decoration-purple-500">Education</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
                period: "2022 - Present",
                title: "B.Tech in Computer Science and Engineering",
                institute: "SRM University AP",
                result: " CGPA 7.91 / 10.0",
                icon: <FaGraduationCap className="text-gray-600" size={48}/>
              }, {
                period: "2020 - 2022",
                title: "Board of Secondary Education",
                institute: "Bhashyam Junior College",
                result: "82.3%",
                icon: <FaSchool className="text-gray-600" size={25}/>
              }, {
                period: "2019 - 2020",
                title: "10th Grade, Central Board of Secondory Education",
                institute: "Bhashyam Blooms",
                result: "73.4%",
                icon: <FaSchool className="text-gray-600" size={38} />
              }].map((edu, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition text-left flex flex-col items-start">
                  <div className="flex items-center gap-7 mb-10">
                    {edu.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700">{edu.title}</h3>
                      <p className="text-sm text-gray-800">{edu.institute}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-800 mt-auto w-full flex justify-between">
                    <span>{edu.period}</span>
                    <span>{edu.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Contact Section */}
<section
  id="contact"
  className="relative w-full min-h-screen px-6 py-24 flex flex-col items-center text-center md:px-12 overflow-hidden bg-gradient-to-br from-[#eef3ff] via-[#f9f4ff] to-[#fef9f9]"
>
  <h2 className="text-3xl font-semibold text-gray-800 underline underline-offset-4 decoration-purple-500 mb-10">
    Contact
  </h2>

  <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Left: Text + Icons + Resume Button */}
    <div className="flex flex-col items-center md:items-start space-y-6">
      {/* Heading Text */}
      <p className="text-lg text-gray-600 max-w-md text-center md:text-left">
        I'm always open to new opportunities, collaborations, or just a friendly tech conversation. Whether you have a project in mind, a question, or simply want to say hello — feel free to connect!
      </p>

      <h3 className="text-xl font-semibold text-gray-600 text-center md:text-left">
        Let’s Connect!
      </h3>

      {/* Icons Row */}
      <div className="flex gap-6 text-gray-600">
        <a
          href="https://www.linkedin.com/in/pardhavi-mallampati-808a64258/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600 hover:scale-125 transition-transform"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://github.com/Pardhavi-08"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600 hover:scale-125 transition-transform"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="tel:9492444443"
          className="hover:text-purple-600 hover:scale-125 transition-transform"
        >
          <FaPhoneAlt size={26} />
        </a>
        <a
          href="mailto:pardhavi084@gmail.com"
          className="hover:text-purple-600 hover:scale-125 transition-transform"
        >
          <FaEnvelope size={26} />
        </a>
      </div>

      {/* Resume Button */}
      <a
        href="Resume.pdf"
        download
        className="bg-purple-600 text-white px-5 py-2 rounded-md shadow hover:bg-purple-700 transition"
      >
        Download Resume
      </a>
    </div>

    {/* Right: Contact Form */}
    {/* Right: Contact Form */}
<div className="w-full max-w-md mx-auto">
<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/success"        // where to redirect after submit (we’ll add this page)
  className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-md"
>
  {/* Netlify required hidden fields */}
  <input type="hidden" name="form-name" value="contact" />
  <p className="hidden">
    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
  </p>

  {/* your inputs */}
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full px-4 py-3 border border-gray-600 text-gray-700 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full px-4 py-3 border border-gray-600 text-gray-700 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
  />
  <textarea
    name="message"
    rows={5}
    placeholder="Your Message"
    required
    className="w-full px-4 py-3 border border-gray-600 text-gray-700 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
  />
  <button
    type="submit"
    className="bg-purple-600 text-white px-6 py-3 rounded-md shadow hover:bg-purple-700 transition"
  >
    Send Message
  </button>
</form>

</div>

  </div>
</section>
 <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>

      </main>
    </>
  );
}