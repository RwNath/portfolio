"use client";

import { Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Footer from "@/components/layout/footer";
import IconCard from "@/components/layout/IconCard";
import Navbar from "@/components/layout/navbar";
import { useScrollTo } from "@/components/layout/ScrollToFunction";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import meteorbot from "../../public/images/meteorbotbanner.png";
import portfolio from "../../public/images/portfolio.png";

export default function Home() {
  const projectsRef = useRef<HTMLHeadingElement>(null);
  const skillRef = useRef<HTMLHeadingElement>(null);
  const scrollToProjects = useScrollTo(projectsRef);
  const scrollToSkill = useScrollTo(skillRef);

  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 mb-6">
      <Navbar
        scrollToProjects={scrollToProjects}
        scrollToSkill={scrollToSkill}
      />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-100 bg-gradient-to-tl from-slate-800 via-green-500 to-zinc-400 bg-clip-text text-transparent animate-bounce">
        RwNath
      </h1>

      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-center font-semibold max-w-3xl px-2">
        Salut moi c&apos;est{" "}
        <span className="bg-gradient-to-tl from-slate-800 via-green-500 to-zinc-400 bg-clip-text text-transparent">
          Nath
        </span>
        , je suis un apprenti développeur fullstack, je te souhaite la bienvenue
        sur mon portfolio !
      </p>

      <button
        onClick={scrollToProjects}
        type="button"
        className="mt-2 inline-flex items-center px-5 sm:px-6 py-3 bg-gradient-to-tl from-green-600 via-green-500 to-green-600 text-white rounded-2xl hover:bg-green-500 transition-colors shadow-lg shadow-green-500/50 text-sm sm:text-base"
        aria-label="Voir mes projets"
      >
        <Folder className="w-5 h-5 mr-2" />
        <span className="font-semibold">Voir mes projets</span>
      </button>

      <h1
        ref={projectsRef}
        className="mt-100 font-semibold flex items-center justify-center text-2xl sm:text-3xl md:text-5xl"
      >
        Mes projets
      </h1>
      <Separator className="w-full max-w-3xl mx-auto mt-3" />

      {/* Grid principale responsive */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-[90%] md:max-w-[70%] mx-auto">
        <Link
          href="/"
          className="px-4 py-4 bg-sidebar h-auto min-h-[450px] rounded-xl transition-transform duration-300 hover:scale-105 flex flex-col"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center">
            Portfolio
          </h2>
          <p className="text-gray-300 text-sm sm:text-base text-justify">
            Mon portfolio personnel présente mes projets et réalisations en tant
            qu&apos;apprenti développeur fullstack. Il combine un design
            moderne, des animations et un thème sombre pour une expérience
            utilisateur agréable. Le portfolio sert à la fois de vitrine
            professionnelle et d&apos;espace d&apos;expérimentation pour mes
            apprentissages en développement web.
          </p>
          <Separator className="mt-4 w-3/4 mx-auto" />

          <div className="mt-3 flex justify-center gap-2 flex-wrap">
            <Button variant="outline" size="icon-lg">
              <SiTypescript className="text-blue-600" />
            </Button>
            <Button variant="outline" size="icon-lg">
              <SiTailwindcss className="text-sky-400" />
            </Button>
            <Button variant="outline" size="icon-lg">
              <FaReact className="text-[#61DAFB]" />
            </Button>
            <Button variant="outline" size="icon-lg">
              <TbBrandNextjs />
            </Button>
            <Button variant="outline" size="icon-lg">
              <SiVercel />
            </Button>
            <Button variant="outline" size="icon-lg">
              <FaGithub />
            </Button>
          </div>
          <Separator className="mt-3 w-3/4 mx-auto" />
          <Image
            src={portfolio.src}
            alt="Meteor bot"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[200px] sm:h-[230px] mt-2 rounded-lg object-cover"
          />
        </Link>

        <Link
          href="https://meteorbot.vercel.app/"
          className="px-4 py-4 bg-sidebar h-auto min-h-[450px] rounded-xl transition-transform duration-300 hover:scale-105 flex flex-col"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center">
            Meteor bot
          </h2>
          <p className="text-gray-300 text-sm sm:text-base text-justify">
            Meteor Bot est un bot Discord complet et polyvalent, conçu pour
            améliorer l&apos;expérience de votre serveur. Il combine des outils
            de modération puissants, des fonctionnalités amusantes et des
            options de personnalisation avancées pour répondre aux besoins de
            toutes les communautés. Fiable, rapide et facile à utiliser, Meteor
            Bot permet de gérer efficacement.
          </p>
          <Separator className="mt-4 w-3/4 mx-auto" />
          <div className="mt-3 flex justify-center gap-2 flex-wrap">
            <Button variant="outline" size="icon-lg">
              <SiJavascript className="text-yellow-300" />
            </Button>
            <Button variant="outline" size="icon-lg">
              <Image
                src="https://skillicons.dev/icons?i=discordjs"
                alt="Discord.js"
                width={24}
                height={24}
                unoptimized
              />
            </Button>
            <Button variant="outline" size="icon-lg">
              <SiMongodb className="text-green-400" />
            </Button>
            <Button variant="outline" size="icon-lg">
              <FaGithub />
            </Button>
            <Separator className="w-3/4 mx-auto" />
            <Image
              src={meteorbot.src}
              alt="Meteor bot"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[200px] sm:h-[230px] mt-2 rounded-lg object-cover"
            />
          </div>
        </Link>
      </div>

      <h1
        ref={skillRef}
        className="font-semibold flex items-center justify-center text-2xl sm:text-3xl md:text-5xl mt-40"
      >
        Mes compétences
      </h1>
      <Separator className="w-full max-w-3xl mx-auto mt-3" />

      {/* Grille compétences responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
        <IconCard
          image="https://skillicons.dev/icons?i=javascript"
          unoptimized
        />
        <IconCard
          image="https://skillicons.dev/icons?i=typescript"
          unoptimized
        />
        <IconCard image="https://skillicons.dev/icons?i=lua" unoptimized />
        <IconCard image="https://skillicons.dev/icons?i=html" unoptimized />
        <IconCard image="https://skillicons.dev/icons?i=css" unoptimized />
        <IconCard
          image="https://skillicons.dev/icons?i=tailwindcss"
          unoptimized
        />
        <IconCard image="https://skillicons.dev/icons?i=nextjs" unoptimized />
        <IconCard image="https://skillicons.dev/icons?i=react" unoptimized />
        <IconCard image="https://skillicons.dev/icons?i=mongodb" unoptimized />
        <IconCard image="https://skillicons.dev/icons?i=git" unoptimized />
      </div>

      <Separator className="w-full max-w-3xl mx-auto mt-6" />
      <Footer />
    </main>
  );
}
