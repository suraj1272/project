import { Award, Briefcase, Download } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Resume = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const experiences = [
    {
      title: "Software Development Intern",
      company: "TechCiti Software Consulting Private Limited.",
      period: "Feb 2023 - Apr 2023",
      description:
        "Gained Knowledge About CyberSecurity , Web Development, and DataBase Management System & Worked on a project called Secure Banking Transaction Using Pycryptodome Module .",
    },
    // {
    //   title: "Web Development Freelancer",
    //   company: "Self-Employed",
    //   period: "Jan 2023 - Present",
    //   description:
    //     "Created custom websites for clients using modern web technologies. Managed project timelines and client communications.",
    // },
  ];

  // const education = [
  //   // {
  //   //   degree: "B.E. in Computer Science",
  //   //   institution: "Basavehwar Engineering College",
  //   //   period: "2021 - 2025",
  //   //   description:
  //   //     "Focusing on software development, algorithms, and data structures. Maintaining a strong academic record.",
  //   // },
  // ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2023",
    },
    {
      name: "React Native Development",
      issuer: "Coursera",
      date: "2023",
    },
  ];

  return (
    <section
      id="resume"
      ref={ref}
      className="py-20 min-h-screen flex flex-col justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            Resume
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-10"></div>

          <div className="flex justify-center mb-12">
            <a
              href="https://drive.google.com/file/d/1sV4rM2KyjzSqrtBDRo5OiCj3Hxk9ezHL/view?usp=sharing"
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 transform ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Experience
            </h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {exp.title}
                </h4>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  {exp.period}
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section
        <div
          className={`mb-12 transition-all duration-1000 delay-400 transform ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Education
            </h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {edu.degree}
                </h4>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  {edu.period}
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Certifications Section */}
        <div
          className={`transition-all duration-1000 delay-600 transform ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
