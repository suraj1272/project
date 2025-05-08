import { ArrowDownCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900/20 dark:to-slate-900 opacity-70"></div>

      {/* Animated background circles */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-emerald-300 dark:bg-emerald-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-violet-300 dark:bg-violet-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <span className="block text-slate-900 dark:text-white">Hi, I'm</span>
          <span className="block mt-2  pb-1 bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 text-transparent bg-clip-text">
            Suraj Buddodi
          </span>
        </h1>

        <p
          className={`text-xl sm:text-2xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          I'm a passionate frontend developer with a knack for creating
          beautiful and functional web applications. I love turning ideas into
          reality through code.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <a
            href="#about"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Learn More
          </a>
          <a
            href="#skills"
            className="px-8 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-indigo-100 dark:border-slate-700">
            View Skills
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
