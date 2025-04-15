import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AjitPortfolio() {
  const [theme, setTheme] = useState("light");
  const bg = theme === "light" ? "bg-white" : "bg-gradient-to-br from-gray-900 via-blue-900 to-black backdrop-blur-md";
  const text = theme === "light" ? "text-gray-800" : "text-gray-100";
  const card = theme === "light" ? "bg-white" : "bg-gray-800/80 backdrop-blur-xl";
  const underline = theme === "light" ? "decoration-sky-500" : "decoration-amber-400";
  const link = theme === "light" ? "text-blue-600" : "text-amber-300";

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
      `}</style>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">Ajit Singh – M.Tech/MS 2025 Portfolio</h1>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-1 rounded-md border border-gray-300 hover:border-blue-500 text-sm"
        >
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <section className="text-center space-y-4 opacity-0">
        <div className="text-5xl font-extrabold">🎯 Ajit Singh</div>
        <div className="text-lg italic">Turning sentiment into insight with NLP, AI and DevOps</div>
        <p className="text-sm tracking-wide">Soul’s in Information Systems, hands are in DevOps and AI, however my voice echoes loudest in Responsible Computing.

</p>
        <a
          href="/AjitSingh_ResearchCV.pdf"
          download
          className="inline-block mt-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all"
        >
          📄 Download Research CV
        </a>
      </section>

      <nav className={`sticky top-0 z-50 ${card} shadow-md p-4 rounded-xl flex justify-center gap-6 text-sm font-medium ${theme === "light" ? "text-sky-700" : "text-amber-300"}`}>
        <a href="#about" className="hover:underline">About</a>
        <a href="#academics" className="hover:underline">Academics</a>
        <a href="#work" className="hover:underline">Work</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#achievements" className="hover:underline">Achievements</a>
        <a href="#tracker" className="hover:underline">Tracker</a>
        <a href="#certs" className="hover:underline">Certs</a>
      </nav>

      <main>
      <div id="about" className="opacity-0">
        <Card className={card}><CardContent className={`p-6 ${text}`}>
          <h2 className="text-2xl font-bold underline decoration-sky-500">🧑‍💻 About Me</h2>
          <p className="mt-4 text-sm leading-relaxed">
            I'm Ajit Singh, from Mumbai, India. I am passionate about Information Systems. I transitioned from electronics to computer science through self-learning, hackathons, research, and real-world work.
            <br /><br />
            The time has come in my life to move forward. As a natural progression of events shaped by my journey so far, I am now pursuing postgraduate opportunities in M.Tech, M.Tech (Research) or MS (Research) in Computer Science and Engineering or its applied domains (AI, ML, DL) from one of the nation's premier institutions. This marks a turning point - a transition not just in academics, but in my purpose.
          </p>
        </CardContent></Card>
      </div>


        <div id="academics" className="opacity-0">
          <Card className={card}><CardContent className="p-6">
            <h2 className="text-2xl font-bold underline decoration-sky-500">🎓 Academics</h2>
            <div className="border-l-4 border-sky-300 pl-4 space-y-4 mt-4 text-sm">
              <div>
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
          </CardContent></Card>
        </div>
        <div id="work" className="opacity-0">
          <Card className={card}><CardContent className="p-6">
            <h2 className="text-2xl font-bold underline decoration-sky-500">💼 Work Experience</h2>
            <div className="border-l-4 border-sky-300 pl-4 space-y-4 mt-4 text-sm">
              <div>
                <p className="font-semibold">🏢 Capgemini Engineering (Sep 2022 – Jul 2024)</p>
                <p>🛠️ Associate-II Software Engineer | Deployed & maintained 5G cloud services, Spring Boot + Docker + Amazon Web Services</p>
              </div>
              <div>
                <p className="font-semibold">🏫 Indian Institute of Information Technology Pune (May 2021 - Jul 2021)</p>
                <p>🔬 Summer Intern | Human Activity Recognition on UTD-MHAD dataset - Model selection, evaluation, report drafting</p>
              </div>
            </div>
          </CardContent></Card>
          </div>
        <div id="projects" className="opacity-0">
          <Card className={card}><CardContent className="p-6">
            <h2 className="text-2xl font-bold underline decoration-sky-500">🛠️ Projects</h2>
            <ul className="list-disc list-inside mt-4 space-y-2 text-sm">
              <li><strong>💬 NLP Pipeline for Analyzing Evolving Public Opinion Towards COVID-19 Vaccines on Twitter (B.Tech Project):</strong> <a className={`${link} underline`} href="https://github.com/iamajitsingh/CovidVaccine-AnalyzingPublicOpinion" target="_blank">GitHub</a></li>
              <li><strong>💊 MediSure – Django3 based solution for the Sociothon 2021 (IIT Roorkee) problem statement:</strong> <a className={`${link} underline`} href="https://github.com/iamajitsingh/django3-MediSure" target="_blank">GitHub</a></li>
            </ul>
          </CardContent></Card>
        </div>

        <div id="achievements" className="opacity-0">
          <Card className={card}><CardContent className="p-6">
            <h2 className="text-2xl font-bold underline decoration-sky-500">🏅 Achievements</h2>
            <ul className="list-disc list-inside mt-4 space-y-2 text-sm">
              <li>🥈 2nd Place – Sociothon 2021, IIT Roorkee</li>
              <li>🥇 1st Place – HackDSC 2021, VIT Bhopal</li>
              <li>🎯 Finalist – Skills Nights 2021, IIIT Nagpur</li>
              <li>📊 Top 3%ile Rank – JEE Main 2018</li>
            </ul>
          </CardContent></Card>
        </div>

        <div id="certs" className="opacity-0">
          <Card className={card}><CardContent className="p-6">
            <h2 className="text-2xl font-bold underline decoration-sky-500">📜 Certifications</h2>
            <ul className="list-disc list-inside mt-4 space-y-2 text-sm">
              <li>☁️ AWS Certified Cloud Practitioner – Score: 1000/1000</li>
              <li>☁️ Microsoft Azure Fundamentals – Score: 929/1000</li>
              <li>🧠 NVIDIA  DLI - Transformer-Based NLP Applications</li>
            </ul>
            <p className="mt-4 text-sm">
              <a href="https://drive.google.com/file/d/1pRrt9RI2Tb_V91X7BAn6Dp0UKz6rulef/view?usp=sharing" target="_blank" className={link}>AWS Certificate</a><br />
              <a href="https://drive.google.com/file/d/1ncIfOADlLnc2_7Zv7AycDoVTMAJ-x_Qe/view?usp=sharing" target="_blank" className={link}>Azure Certificate</a><br />
              <a href="https://drive.google.com/file/d/1k7yymAJNUuO79XoBUk_mdgTnAEBDR-U8/view?usp=sharing" target="_blank" className={link}>NVIDIA Certificate</a>
            </p>
          </CardContent></Card>
        </div>

        <div id="tracker" className="opacity-0">
          <Card className={card}><CardContent className="p-6">
            <h2 className="text-2xl font-bold underline decoration-sky-500">🗂️ Application Tracker</h2>
            <p className="mt-4 text-sm">
              📄 <a  className={`${link} underline`}  href="/MTech_Application_Tracker_2025.pdf"  target="_blank" rel="noopener noreferrer">Download PDF Tracker</a>
            </p>
          </CardContent></Card>
        </div>
    </main>

      <footer className="text-center text-xs pt-10 opacity-70">
        © 2025 <a className="underline" href="https://iamajit.in">iamajit.in | React, Tailwind CSS </a> 
      </footer>
    </div>
  );
}

