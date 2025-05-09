import {
  Bike,
  BookOpen,
  Camera,
  Gamepad2,
  Music,
  Palette,
  Plane,
  Utensils,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const Hobbies = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const hobbies = [
    {
      icon: <Music className="w-10 h-10" />,
      title: "Music",
      description: " I Enjoy Listing to music on my free time .",
      bgColor:
        "bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-700 dark:to-indigo-800",
    },
    {
      icon: <Gamepad2 className="w-10 h-10" />,
      title: "Gaming",
      description: "Strategy and adventure games are my favorites.",
      bgColor:
        "bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-700 dark:to-teal-800",
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Reading",
      description: "Science fiction and philosophy books and Manga .",
      bgColor:
        "bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-700 dark:to-orange-800",
    },
    {
      icon: <Bike className="w-10 h-10" />,
      title: "Cycling",
      description: "Exploring new trails and city routes.",
      bgColor:
        "bg-gradient-to-br from-blue-500 to-cyan-600 dark:from-blue-700 dark:to-cyan-800",
    },
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Photography",
      description: "Capturing landscapes and street life.",
      bgColor:
        "bg-gradient-to-br from-violet-500 to-purple-600 dark:from-violet-700 dark:to-purple-800",
    },
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Cooking",
      description: "Experimenting with Indian recipes.",
      bgColor:
        "bg-gradient-to-br from-rose-500 to-pink-600 dark:from-rose-700 dark:to-pink-800",
    },
    {
      icon: <Plane className="w-10 h-10" />,
      title: "Traveling",
      description: "Exploring new cultures and destinations.",
      bgColor:
        "bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-700 dark:to-blue-800",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Painting",
      description: "Creating abstract and landscape art.",
      bgColor:
        "bg-gradient-to-br from-fuchsia-500 to-violet-600 dark:from-fuchsia-700 dark:to-violet-800",
    },
  ];

  return (
    <section
      id="hobbies"
      ref={ref}
      className="py-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            My Hobbies
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-10"></div>
          <p className="text-xl text-center text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-16">
            When I'm not studying or working, here's what I enjoy doing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.title}
              className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-1000 delay-${
                index * 100
              } transform ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}>
              <div
                className={`${hobby.bgColor} h-full aspect-square flex flex-col items-center justify-center text-white p-6 transition-transform duration-500 transform group-hover:scale-110`}>
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{hobby.title}</h3>
                <p className="text-center text-white/80">{hobby.description}</p>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {hobby.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
