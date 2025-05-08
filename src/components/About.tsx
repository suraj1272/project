import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { useInView } from "../hooks/useInView";

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-tr from-indigo-600 to-violet-600 dark:from-indigo-800 dark:to-violet-800 rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="College campus"
                  className="w-full h-full object-cover mix-blend-overlay dark:mix-blend-soft-light opacity-70"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex flex-col justify-end p-10 width-20px text-white">
                <h3 className="text-xl font-bold">My Academic Journey</h3>
                <p className="text-slate-200">
                  Exploring, learning, and growing
                </p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 transform ${
              isInView
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Education
            </h3>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-6 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                  <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Chinmay JC Eng Med High School
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    X{" "}
                  </p>
                  <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Muddebihal, Karnataka</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2018 - 2019</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-6 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                  <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Abhyudaya PU Science College
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    PCMCS{" "}
                  </p>
                  <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Muddebihal, Karnataka</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2019 - 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-6 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                  <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Basavehwar Engineering College
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    Computer Science & Engineering{" "}
                  </p>
                  <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Bagalkot, Karnataka</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2021 - 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 mb-6">
              I am currently pursuing my degree at Basavehwar Engineering
              College, where I've been developing my skills and knowledge in
              various fields. My academic journey has been filled with exciting
              challenges and valuable learning experiences.
            </p>

            <p className="text-slate-700 dark:text-slate-300">
              Outside of academics, I actively participate in extracurricular
              activities such as clubs, events, and volunteer work. These
              experiences have helped me develop leadership skills, teamwork
              abilities, and a broader perspective on my field of study.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
