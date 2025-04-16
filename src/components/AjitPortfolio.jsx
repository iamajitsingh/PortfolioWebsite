import { FaLightbulb } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export default function AjitPortfolio() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");


  const bg = theme === "light" 
  ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-100 to-gray-300" 
  : "bg-gradient-to-br from-gray-900 via-blue-900 to-black backdrop-blur-md";
  const text = theme === "light" ? "text-slate-800" : "text-slate-200";
  const card = theme === "light"
  ? "bg-white"
  : "bg-black/40 backdrop-blur-xl shadow-xl";
  const underline = theme === "light" ? "decoration-sky-500" : "decoration-amber-400";
  const link = theme === "light"
  ? "text-blue-800"
  : "text-yellow-300";

const linkUltra = `
  relative inline-block font-semibold transition-all duration-300 ease-in-out
  hover:scale-[1.08] hover:-translate-y-[1.5px]
  hover:underline hover:underline-offset-8 hover:decoration-wavy

  before:content-[''] before:absolute before:inset-0 before:rounded-lg
  before:bg-gradient-to-r before:from-cyan-400 before:via-white before:to-cyan-400
  dark:before:from-yellow-300 dark:before:via-white dark:before:to-yellow-300
  before:bg-[length:200%_auto] before:opacity-0 hover:before:opacity-30
  before:animate-shimmer before:z-[-1]
`;

  useEffect(() => {
    const sections = document.querySelectorAll("section, main > div");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main > div[id]");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);
  
  

  return (
    <div className={`font-sans p-6 space-y-8 max-w-5xl mx-auto scroll-smooth min-h-screen transition-colors duration-500 ${bg} ${text}`}>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes spin-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
@keyframes shimmer {
  100% {
    background-position: 200% center;
  }
}
.before\:animate-shimmer::before {
  animation: shimmer 2.5s linear infinite;
}
  @keyframes spark1 {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(60px, -40px) scale(0); opacity: 0; }
  }

  @keyframes spark2 {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(-40px, 60px) scale(0); opacity: 0; }
  }

  @keyframes spark3 {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(30px, 30px) scale(0); opacity: 0; }
  }

  .animate-spin-slow {
    animation: spin-slow 10s linear infinite;
  }

  .animate-spark1 {
    animation: spark1 2s ease-out infinite alternate;
    top: 10%; left: 50%;
  }

  .animate-spark2 {
    animation: spark2 3s ease-in-out infinite alternate;
    top: 40%; left: 30%;
  }

  .animate-spark3 {
    animation: spark3 2.5s ease-in infinite alternate;
    top: 60%; left: 70%;
  }

  @keyframes pulse-glow {
  0% {
    text-shadow: 0 0 0px rgba(0, 200, 255, 0.4);
  }
  50% {
    text-shadow: 0 0 10px rgba(0, 200, 255, 0.8);
  }
  100% {
    text-shadow: 0 0 0px rgba(0, 200, 255, 0.4);
  }
}
.pulse-text {
  animation: pulse-glow 2.5s infinite ease-in-out;
}
.dark .pulse-text {
  animation: pulse-glow 2.5s infinite ease-in-out;
  text-shadow: 0 0 2px rgba(255, 191, 0, 0.4);
}

@keyframes core-glow {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 1; }
}

.group-hover\:animate-pulse {
  animation: core-glow 1.6s ease-in-out infinite;
}
      `}</style>

      <div className="flex justify-between items-center">
      <motion.h1
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className={`text-4xl sm:text-5xl font-extrabold tracking-tight text-center 
  ${theme === "light" 
    ? "text-blue-800 drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]" 
    : "text-amber-300 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]"}`}
>
  🔮 M.Tech / MS(R) 2025 Portfolio
</motion.h1>

        <div className="relative group">
  <button
    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    className={`
      flex items-center gap-2 px-4 py-2 rounded-full border 
      ${theme === "light" 
        ? "border-yellow-300 bg-white text-yellow-600 hover:bg-yellow-50" 
        : "border-blue-300 bg-black text-blue-300 hover:bg-blue-950"
      } 
      shadow-md hover:shadow-lg transition-all duration-300 ease-in-out 
      font-semibold text-sm
    `}
  >
    <FaLightbulb 
      className={`
        text-lg transition-transform duration-300 
        ${theme === "light" ? "rotate-0 text-yellow-400" : "rotate-180 text-blue-300"}
      `}
    />
    {theme === "light" ? "Turn the lights off?" : "Turn the lights on?"}
  </button>

  {/* Optional Stark Core-style Glow Ring */}
  <div className={`
    absolute inset-0 rounded-full border-2 
    ${theme === "light" ? "border-yellow-300" : "border-blue-500"} 
    blur-md opacity-30 pointer-events-none
    group-hover:animate-pulse
  `}></div>
</div>

      </div>

<section className="text-center space-y-4 opacity-0 mt-6">
  {/* Hero Title with rotating glow */}
  <div className="relative inline-block">
  {/* Background Glow */}
  <div className="absolute inset-0 flex justify-center items-center z-[-1]">
  <div className="w-44 h-44 rounded-full 
  bg-gradient-to-tr from-blue-400 via-sky-500 to-indigo-500 
  animate-pulse animate-spin-slow animate-[hue-rotate_30s_linear_infinite]
  opacity-20 blur-xl shadow-lg shadow-blue-300 dark:shadow-blue-900">
</div>
  </div>

  {/* Spark Particles Layer */}
  <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
    <div className="absolute w-1 h-1 bg-white rounded-full opacity-80 animate-spark1"></div>
    <div className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-70 animate-spark2"></div>
    <div className="absolute w-1 h-1 bg-indigo-300 rounded-full opacity-60 animate-spark3"></div>
  </div>

  {/* Main Name */}
  <div className={`text-5xl font-extrabold tracking-tight drop-shadow-sm ${
    theme === "light" ? "text-slate-800" : "text-white drop-shadow-[0_0_6px_rgba(255,191,0,0.25)]"
  }`}>
    🎯 Ajit Singh
  </div>
</div>

  {/* Subtitle */}
  <div className={`text-lg italic font-medium ${
    theme === "light" ? "text-gray-700" : "text-gray-300"
  }`}>
    Turning sentiment into insight with NLP, AI and DevOps
  </div>

  {/* Paragraph */}
  <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className={`text-sm sm:text-[1.05rem] leading-relaxed font-semibold tracking-wide max-w-3xl mx-auto px-2 sm:px-4
  ${theme === "light" ? "text-gray-900 bg-white/50 backdrop-blur-md shadow-sm rounded-xl" : "text-slate-200 bg-white/5 backdrop-blur-md rounded-xl shadow-md"}
`}
>
  Soul’s in <span className="font-bold decoration decoration-blue-400 dark:decoration-yellow-300">Information Systems</span>, hands are in <span className="font-bold">DevOps</span> & <span className="font-bold">AI</span>,<br />
  but my voice echoes loudest in <span className="text-red-600 dark:text-red-400 font-bold">Responsible Computing</span>.
  <br /> <span className="opacity-80 mt-2 inline-block">😬 Cringed already? <span className="underline">Read on</span>.</span>
</motion.p>

  {/* CV Button */}
  <motion.a
  whileHover={{ scale: 1.05, rotate: [-1, 0, 1, 0] }}
  transition={{ type: "spring", stiffness: 300 }}
  href="/AjitSingh_ResearchCV.pdf"
  download
  className={`
    mt-4 inline-block px-6 py-3 rounded-xl text-sm font-bold transition duration-300 ease-in-out 
    shadow-md hover:shadow-2xl border-2 border-transparent
    ${theme === "light" 
      ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-blue-600 hover:to-indigo-600" 
      : "bg-gradient-to-r from-amber-400 to-pink-400 text-black hover:from-pink-500 hover:to-yellow-300"}
  `}
>
  🚀 Download Research CV
</motion.a>
</section>

{/* DESKTOP + MOBILE MENU */}
{/* Mobile Menu Toggle Button */}
<div className="sm:hidden flex justify-end px-6 py-2 z-50">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-xl font-bold text-blue-700 dark:text-yellow-300 focus:outline-none"
  >
    {menuOpen ? "✖" : "☰"}
  </button>
</div>


{/* NAVIGATION BAR */}
<div className="sticky top-0 z-40 w-full">
  <nav
    className={`
      w-full
      ${card}
      px-6 py-4 rounded-2xl
      transition-all duration-500 ease-in-out
      ${theme === "light" ? "bg-white/90 text-sky-800" : "bg-black/40 text-amber-300"}
      shadow-xl backdrop-blur-xl border border-slate-300 dark:border-slate-600
      flex-wrap justify-center gap-6 text-sm font-semibold
      ${menuOpen ? "flex flex-col items-center" : "hidden sm:flex"}
    `}
  >
    {[
      { name: "About", href: "#about" },
      { name: "Academics", href: "#academics" },
      { name: "Work", href: "#work" },
      { name: "Projects", href: "#projects" },
      { name: "Achievements", href: "#achievements" },
      { name: "Certs", href: "#certs" },
      { name: "Tracker", href: "#tracker" },
    ].map((item, index) => {
      const isActive = activeSection === item.href.substring(1);

      return (
        <a
          key={index}
          href={item.href}
          className={`
            relative group px-2 py-1 transition duration-300
            ${isActive ? "text-sky-600 dark:text-yellow-300 font-bold scale-[1.08]" : "hover:scale-[1.05]"}
          `}
        >
          <span className={`relative z-10 ${isActive ? "animate-pulse" : ""}`}>
            {item.name}
          </span>
          <span className={`
            absolute left-0 bottom-[-3px] h-[2px] rounded-full 
            bg-gradient-to-r from-sky-400 to-indigo-500 
            dark:from-yellow-400 dark:to-pink-500
            transition-all duration-300
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
          `} />
        </a>
      );
    })}
  </nav>
</div>





      <main className="space-y-2">
      <div className="relative my-12">
  <div className="absolute inset-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm opacity-60 animate-pulse"></div>
  <div className="relative z-10 h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-600"></div>
</div>
<motion.div
  id="about"
  className="opacity-0"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
       <Card className={`
  rounded-3xl 
  border border-slate-300 dark:border-neutral-700 
  transition duration-300 ease-in-out transform 
  hover:scale-[1.015] 
  hover:shadow-[0_8px_30px_rgba(0,200,255,0.25)] 
  hover:border-sky-300 dark:hover:border-sky-500
  ${card}
`}>
<CardContent className={`p-8 sm:p-10 space-y-4 ${text}`}>
          <h2 className={`text-3xl font-semibold mb-2 underline ${underline} drop-shadow-sm tracking-tight`}>🧑‍💻 About Me</h2>
          <div className="w-20 h-[6px] rounded-full mt-1 mb-4 shadow-inner 
  bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400
  dark:from-yellow-300 dark:via-orange-400 dark:to-pink-500">
</div>

          <p className="text-base sm:text-[1.05rem] leading-relaxed tracking-wide font-semibold">
            I'm Ajit Singh, from Mumbai, India. I am passionate about Information Systems. I transitioned from electronics to computer science through self-learning, hackathons, research, and real-world work.
            <br /><br />
            The time has come in my life to move forward. As a natural progression of events shaped by my journey so far, I am now pursuing postgraduate opportunities in M.Tech, M.Tech (Research) or MS (Research) in Computer Science and Engineering or its applied domains (AI, ML, DL) from one of the nation's premier institutions. This marks a turning point - a transition not just in academics, but in my purpose.
          </p>
        </CardContent></Card></motion.div>


        <div className="relative my-12">
  <div className="absolute inset-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm opacity-60 animate-pulse"></div>
  <div className="relative z-10 h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-600"></div>
</div>

        <motion.div
  id="academics"
  className="opacity-0"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
               <Card className={`
  rounded-3xl 
  border border-slate-300 dark:border-neutral-700 
  transition duration-300 ease-in-out transform 
  hover:scale-[1.015] 
  hover:shadow-[0_8px_30px_rgba(0,200,255,0.25)] 
  hover:border-sky-300 dark:hover:border-sky-500
  ${card}
`}><CardContent className={`p-8 sm:p-10 space-y-4 ${text}`}>

            <h2 className={`text-3xl font-semibold mb-2 underline ${underline} drop-shadow-sm tracking-tight`}>🎓 Academics</h2>
            <div className="w-20 h-[6px] rounded-full mt-1 mb-4 shadow-inner 
  bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400
  dark:from-yellow-300 dark:via-orange-400 dark:to-pink-500">
</div>

            <div className="border-l-4 border-sky-300 pl-4 space-y-4 mt-4 text-sm">
            <div className="bg-gradient-to-r from-sky-100/40 to-white dark:from-sky-800/20 dark:to-transparent p-4 rounded-lg border border-sky-200 dark:border-sky-700 text-sm sm:text-base">
                <p className="font-semibold">📘 2022 – B.Tech in Electronics and Communication Engineering</p>
                <p>🏫 Indian Institute of Information Technology Guwahati | CGPA: 8.73/10 | Top 3 in class</p>
              </div>
              <div>
                <p className="font-semibold">📗 2018 – Class XII (HSC)</p>
                <p>🏫 Maharashtra State Board | 82.77%</p>
              </div>
              <div>
                <p className="font-semibold">📕 2016 – Class X (SSC)</p>
                <p>🏫 Maharashtra State Board | 92.60%</p>
              </div>
            </div>
          </CardContent></Card></motion.div>


          <div className="relative my-12">
  <div className="absolute inset-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm opacity-60 animate-pulse"></div>
  <div className="relative z-10 h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-600"></div>
</div>

        <motion.div
  id="work"
  className="opacity-0"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>   
               <Card className={`
  rounded-3xl 
  border border-slate-300 dark:border-neutral-700 
  transition duration-300 ease-in-out transform 
  hover:scale-[1.015] 
  hover:shadow-[0_8px_30px_rgba(0,200,255,0.25)] 
  hover:border-sky-300 dark:hover:border-sky-500
  ${card}
`}><CardContent className={`p-8 sm:p-10 space-y-4 ${text}`}>


            <h2 className={`text-3xl font-semibold mb-2 underline ${underline} drop-shadow-sm tracking-tight`}>💼 Work Experience</h2>
            <div className="w-20 h-[6px] rounded-full mt-1 mb-4 shadow-inner 
  bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400
  dark:from-yellow-300 dark:via-orange-400 dark:to-pink-500">
</div>

            <div className="border-l-4 border-sky-300 pl-4 space-y-4 mt-4 text-sm">
              <div className="bg-gradient-to-r from-sky-100/40 to-white dark:from-sky-800/20 dark:to-transparent p-4 rounded-lg border border-sky-200 dark:border-sky-700 text-sm sm:text-base">
                <p className="font-semibold">🏢 Capgemini Engineering (Sep 2022 – Jul 2024)</p>
                <p>🛠️ Associate-II Software Engineer | Deployed & maintained 5G cloud services, Spring Boot + Docker + Amazon Web Services</p>
              </div>
              <div>
                <p className="font-semibold">🏫 Indian Institute of Information Technology Pune (May 2021 - Jul 2021)</p>
                <p>🔬 Summer Intern | Human Activity Recognition on UTD-MHAD dataset - Model selection, evaluation, report drafting</p>
              </div>
            </div>
          </CardContent></Card></motion.div>


          <div className="relative my-12">
  <div className="absolute inset-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm opacity-60 animate-pulse"></div>
  <div className="relative z-10 h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-600"></div>
</div>

<motion.div
  id="projects"
  className="opacity-0"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
               <Card className={`
  rounded-3xl 
  border border-slate-300 dark:border-neutral-700 
  transition duration-300 ease-in-out transform 
  hover:scale-[1.015] 
  hover:shadow-[0_8px_30px_rgba(0,200,255,0.25)] 
  hover:border-sky-300 dark:hover:border-sky-500
  ${card}
`}><CardContent className={`p-8 sm:p-10 space-y-4 ${text}`}>

            <h2 className={`text-3xl font-semibold mb-2 underline ${underline} drop-shadow-sm tracking-tight`}>🛠️ Projects</h2>
            <div className="w-20 h-[6px] rounded-full mt-1 mb-4 shadow-inner 
  bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400
  dark:from-yellow-300 dark:via-orange-400 dark:to-pink-500">
</div>

            <ul className="list-disc list-inside marker:text-sky-500 dark:marker:text-sky-300 space-y-2 text-base leading-snug text-sm">
            <div className="bg-gradient-to-r from-sky-100/40 to-white dark:from-sky-800/20 dark:to-transparent p-4 rounded-lg border border-sky-200 dark:border-sky-700 text-sm sm:text-base">
              <li><strong>💬 NLP Pipeline for Analyzing Evolving Public Opinion Towards COVID-19 Vaccines on Twitter (B.Tech Project):</strong> <a className={`${link} ${linkUltra}`} href="https://github.com/iamajitsingh/CovidVaccine-AnalyzingPublicOpinion" target="_blank">GitHub</a></li></div>
              <li><strong>💊 MediSure – Django3 based solution for the Sociothon 2021 (IIT Roorkee) problem statement:</strong> <a className={`${link} ${linkUltra}`} href="https://github.com/iamajitsingh/django3-MediSure" target="_blank">GitHub</a></li>
            </ul>
          </CardContent></Card></motion.div>


          <div className="relative my-12">
  <div className="absolute inset-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm opacity-60 animate-pulse"></div>
  <div className="relative z-10 h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-600"></div>
</div>

        <motion.div
  id="achievements"
  className="opacity-0"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
               <Card className={`
  rounded-3xl 
  border border-slate-300 dark:border-neutral-700 
  transition duration-300 ease-in-out transform 
  hover:scale-[1.015] 
  hover:shadow-[0_8px_30px_rgba(0,200,255,0.25)] 
  hover:border-sky-300 dark:hover:border-sky-500
  ${card}
`}><CardContent className={`p-8 sm:p-10 space-y-4 ${text}`}>

            <h2 className={`text-3xl font-semibold mb-2 underline ${underline} drop-shadow-sm tracking-tight`}>🏅 Achievements</h2>
            <div className="w-20 h-[6px] rounded-full mt-1 mb-4 shadow-inner 
  bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400
  dark:from-yellow-300 dark:via-orange-400 dark:to-pink-500">
</div>

            <ul className="list-disc list-inside marker:text-sky-500 dark:marker:text-sky-300 space-y-2 text-base leading-snug text-sm">
            <div className="bg-gradient-to-r from-sky-100/40 to-white dark:from-sky-800/20 dark:to-transparent p-4 rounded-lg border border-sky-200 dark:border-sky-700 text-sm sm:text-base">
              <li>🥈 2nd Place – Sociothon 2021, IIT Roorkee</li></div>
              <div className="bg-gradient-to-r from-sky-100/40 to-white dark:from-sky-800/20 dark:to-transparent p-4 rounded-lg border border-sky-200 dark:border-sky-700 text-sm sm:text-base">
              <li>🥇 1st Place – HackDSC 2021, VIT Bhopal</li></div>
              
              <li>🎯 Finalist – Skills Nights 2021, IIIT Nagpur</li>
              <li>📊 Top 3%ile Rank – JEE Main 2018</li>
            </ul>
          </CardContent></Card></motion.div>


          <div className="relative my-12">
  <div className="absolute inset-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm opacity-60 animate-pulse"></div>
  <div className="relative z-10 h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-600"></div>
</div>
<motion.div
  id="certs"
  className="opacity-0"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
               <Card className={`
  rounded-3xl 
  border border-slate-300 dark:border-neutral-700 
  transition duration-300 ease-in-out transform 
  hover:scale-[1.015] 
  hover:shadow-[0_8px_30px_rgba(0,200,255,0.25)] 
  hover:border-sky-300 dark:hover:border-sky-500
  ${card}
`}><CardContent className={`p-8 sm:p-10 space-y-4 ${text}`}>

            <h2 className={`text-3xl font-semibold mb-2 underline ${underline} drop-shadow-sm tracking-tight`}>📜 Certifications</h2>
            <div className="w-20 h-[6px] rounded-full mt-1 mb-4 shadow-inner 
  bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400
  dark:from-yellow-300 dark:via-orange-400 dark:to-pink-500">
</div>

            <ul className="list-disc list-inside marker:text-sky-500 dark:marker:text-sky-300 space-y-2 text-base leading-snug text-sm">
            <div className="bg-gradient-to-r from-sky-100/40 to-white dark:from-sky-800/20 dark:to-transparent p-4 rounded-lg border border-sky-200 dark:border-sky-700 text-sm sm:text-base">
              <li>☁️ AWS Certified Cloud Practitioner – Score: 1000/1000</li></div>
              <li>☁️ Microsoft Azure Fundamentals – Score: 921/1000</li>
              <li>🧠 NVIDIA  DLI - Transformer-Based NLP Applications</li>
            </ul>
            <p className="mt-4 text-sm">
              <a href="https://drive.google.com/file/d/1pRrt9RI2Tb_V91X7BAn6Dp0UKz6rulef/view?usp=sharing" target="_blank" className={`${link} ${linkUltra}`}>AWS Certificate</a><br />
              <a href="https://drive.google.com/file/d/1ncIfOADlLnc2_7Zv7AycDoVTMAJ-x_Qe/view?usp=sharing" target="_blank" className={`${link} ${linkUltra}`}>Azure Certificate</a><br />
              <a href="https://drive.google.com/file/d/1k7yymAJNUuO79XoBUk_mdgTnAEBDR-U8/view?usp=sharing" target="_blank" className={`${link} ${linkUltra}`}>NVIDIA Certificate</a>
            </p>
          </CardContent></Card></motion.div>


          <div className="relative my-12">
  <div className="absolute inset-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm opacity-60 animate-pulse"></div>
  <div className="relative z-10 h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-600"></div>
</div>
<motion.div
  id="tracker"
  className="opacity-0"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <Card className={`
    rounded-3xl 
    border border-slate-300 dark:border-neutral-700 
    transition duration-300 ease-in-out transform 
    hover:scale-[1.015] 
    hover:shadow-[0_8px_30px_rgba(0,200,255,0.25)] 
    hover:border-sky-300 dark:hover:border-sky-500
    ${card}
  `}>
    <CardContent className={`p-8 sm:p-10 space-y-4 ${text}`}>
      <h2 className={`text-3xl font-semibold mb-2 underline ${underline} drop-shadow-sm tracking-tight`}>
        🗂️ Application Tracker
      </h2>
      <div className="w-20 h-[6px] rounded-full mt-1 mb-4 shadow-inner 
        bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400
        dark:from-yellow-300 dark:via-orange-400 dark:to-pink-500">
      </div>

      {/* Tracker PDF */}
      <div className="bg-gradient-to-r from-sky-100/40 to-white dark:from-sky-800/20 dark:to-transparent p-4 rounded-lg border border-sky-200 dark:border-sky-700 text-sm sm:text-base">
        📄 <a className={`${link} ${linkUltra} font-medium`} href="/MTech_Application_Tracker_2025.pdf" target="_blank" rel="noopener noreferrer">
          Applications Submitted (PDF)
        </a>
      </div>

      {/* SOP Master Document */}
      <div className="bg-gradient-to-r from-sky-100/40 to-white dark:from-sky-800/20 dark:to-transparent p-4 rounded-lg border border-sky-200 dark:border-sky-700 text-sm sm:text-base">
        📝 <a className={`${link} ${linkUltra} font-medium`} href="/Generic_SOP.pdf" target="_blank" rel="noopener noreferrer">
          Statement of Purpose (PDF)
        </a>
      </div>

      {/* Certificates Index */}
      <div className="bg-gradient-to-r from-sky-100/40 to-white dark:from-sky-800/20 dark:to-transparent p-4 rounded-lg border border-sky-200 dark:border-sky-700 text-sm sm:text-base">
        🎖️ <a className={`${link} ${linkUltra} font-medium`} href="/AjitSinghAdditionalInfo_General_Application.pdf" target="_blank" rel="noopener noreferrer">
          Certificate Index (PDF)
        </a>
      </div>

    </CardContent>
  </Card>
</motion.div>

    </main>

    <footer className="relative z-50 mt-20 text-center text-sm font-medium py-12 px-4">
  {/* Rotating Reactor Core Background */}
  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full 
    bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 dark:from-yellow-300 dark:via-orange-400 dark:to-pink-500 
    opacity-10 blur-2xl animate-spin-slow z-0">
  </div>

  {/* Glowing Reactor Text */}
  <div className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 dark:from-yellow-300 dark:via-orange-400 dark:to-pink-500 animate-glow">
    <span className="text-base sm:text-lg font-semibold tracking-wider">
      ⚛️ Powered by React + TailwindCSS 💨
    </span>
    <br />
    <span className="sm:text-sm mt-2 block opacity-99">
      © 2025 <a href="https://iamajit.in" target="_blank" className="underline hover:text-blue-600 dark:hover:text-yellow-300 transition duration-200">iamajit.in</a> | Designed by Ajit Singh
    </span>
  </div>

  {/* Reactor Icon Animation */}
  <div className="relative mt-6 flex justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-cyan-400 dark:border-yellow-400 animate-ping-slow shadow-md shadow-cyan-400 dark:shadow-yellow-300" />
    <div className="absolute w-6 h-6 rounded-full bg-cyan-300 dark:bg-yellow-300 shadow-inner shadow-white" />
  </div>

  {/* Extra Styles */}
  <style>{`
    @keyframes glowPulse {
      0%, 100% { text-shadow: 0 0 10px rgba(0,212,255,0.7), 0 0 20px rgba(0,212,255,0.4); }
      50% { text-shadow: 0 0 20px rgba(0,212,255,0.9), 0 0 30px rgba(0,212,255,0.6); }
    }
    .animate-glow {
      animation: glowPulse 3.5s ease-in-out infinite;
    }
    .animate-ping-slow {
      animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
    .animate-spin-slow {
      animation: spin 18s linear infinite;
    }
  `}</style>
</footer>


    </div>
  );
}

