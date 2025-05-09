import { ExternalLink, Github } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: "Student Information Managent System",
      description:
        "SIMS is a web application desigined to manage and sstreamline student-related data including enrollment, attendance, and grades.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
      image:
        "https://www.vidyalayaschoolsoftware.com/webassets/images/school_software_1.png",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://project-demo.com",
    },
    {
      title: "Loan Calulator Web Application ",
      description:
        "Real-time Loan Calculation  application that provides user with the loan Amount in different currency using Exchange APIs.",
      technologies: ["React", "Exchangerate  API", "TailwindCSS"],
      image:
        "https://assets-news.housing.com/news/wp-content/uploads/2020/10/05171914/How-to-use-Housing.com-home-loan-calculator-FB-1200x700-compressed.jpg",
      github: "https://github.com/suraj1272/loan_calulator",
      live: "https://loan-calulator-black.vercel.app/",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management tool with real-time updates, team collaboration features, and detailed analytics dashboard.",
      technologies: ["React", "Firebase", "Material-UI", "Chart.js"],
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      github: "https://github.com/yourusername/task-manager",
      live: "https://tasks-demo.com",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-10"></div>
          <p className="text-xl text-center text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-16">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-1000 delay-${
                index * 200
              } ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}>
              <div className="relative  h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0   bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
