"use client";

import MainSheet from "@/components/layout/main-sheet";

type NavbarProps = {
  scrollToProjects: () => void;
  scrollToSkill: () => void;
};

export default function Navbar({
  scrollToProjects,
  scrollToSkill,
}: NavbarProps) {
  return (
    <div className="shadow-md w-full sticky top-0 left-0 z-10">
      <div className="flex items-center justify-between bg-transparent h-[75px] py-4 md:px-10 px-4 sm:px-6 border-slate-50/[0.06] backdrop-blur-[3px] border-b">
        <div className="font-bold flex items-center bg-gradient-to-tl from-slate-800 via-green-500 to-zinc-400 bg-clip-text text-transparent text-xl">
          RwNath
        </div>

        <div className="hidden md:flex justify-center items-center space-x-4 lg:space-x-6">
          <button
            type="button"
            onClick={scrollToProjects}
            className="text-white text-center text-base md:text-lg hover:text-purple-500 transition-colors"
          >
            Projets
          </button>
          <button
            type="button"
            onClick={scrollToSkill}
            className="text-white text-center text-base md:text-lg hover:text-purple-500 transition-colors"
          >
            Compétences
          </button>
        </div>

        <div className="md:hidden">
          <MainSheet
            scrollToProjects={scrollToProjects}
            scrollToSkill={scrollToSkill}
          />
        </div>
      </div>
    </div>
  );
}
