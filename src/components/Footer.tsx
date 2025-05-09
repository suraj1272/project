import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 text-transparent bg-clip-text">
              Get In Touch
            </h2>
          </div>

          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/suraj1272"
              className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              aria-label="Github">
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/suraj-buddodi-a92272299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
              className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:buddodisuraj@gmail.com"
              className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-8"></div>

          <div className="text-center text-slate-600 dark:text-slate-400">
            <p className="mb-2">Designed and built with ❤️</p>
            <p>© {currentYear} Suraj Buddodi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
