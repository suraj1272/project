import { BarChart3, Brush, Code, Globe } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Skills",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Mongo DB", level: 75 },
        { name: "Node.js", level: 70 },
      ],
    },

    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Professional Skills",
      skills: [
        { name: "Project Management", level: 80 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Team Leadership", level: 75 },
        { name: "Time Management", level: 80 },
      ],
    },
    {
      icon: <Brush className="w-6 h-6" />,
      title: "Creative Skills",
      skills: [
        { name: "Photography", level: 80 },
        { name: "Video Editing", level: 70 },
        { name: "Content Creation", level: 85 },
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Languages",
      skills: [
        { name: "English", level: 95 },
        { name: "Kannada", level: 95 },
        { name: "Hindi", level: 40 },
        // { name: "German", level: 30 },
        // { name: "Mandarin", level: 20 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-10"></div>
          <p className="text-xl text-center text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-16">
            Here are some of the skills I've developed throughout my academic
            and personal journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 transition-all duration-1000 delay-${
                index * 200
              } transform ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } hover:shadow-2xl transition-shadow duration-300`}>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mr-4 text-indigo-600 dark:text-indigo-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-indigo-400 dark:to-violet-400 rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          animation: `growWidth 1.5s ease-out ${
                            skillIndex * 0.2 + index * 0.5
                          }s both`,
                        }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
