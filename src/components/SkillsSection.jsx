import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code2,
  Braces,
  Atom,
  FileCode,
  Palette,
  Triangle,
  Server,
  Zap,
  Database,
  Cylinder,
  Share2,
  GitBranch,
  Package,
  Figma,
  Code,
  Flame,
  Box,
  Grid3X3,
  Component,
  Layers,
  Sparkles,
  CircleDot,
  Boxes,
  CloudLightning,
} from "lucide-react";

const skills = [
  // Frontend
  {
    name: "HTML",
    level: 90,
    category: "frontend",
    icon: Code2,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    level: 85,
    category: "frontend",
    icon: Palette,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    icon: Braces,
    color: "text-yellow-500",
  },
  {
    name: "TypeScript",
    level: 80,
    category: "frontend",
    icon: FileCode,
    color: "text-blue-600",
  },
  {
    name: "React",
    level: 85,
    category: "frontend",
    icon: Atom,
    color: "text-blue-400",
  },
  {
    name: "Next.js",
    level: 80,
    category: "frontend",
    icon: Triangle,
    color: "text-gray-800",
  },
  {
    name: "Vue.js",
    level: 70,
    category: "frontend",
    icon: Component,
    color: "text-green-500",
  },
  {
    name: "Angular",
    level: 65,
    category: "frontend",
    icon: Layers,
    color: "text-red-600",
  },
  {
    name: "Redux",
    level: 75,
    category: "frontend",
    icon: CircleDot,
    color: "text-purple-600",
  },
  {
    name: "Tailwind",
    level: 90,
    category: "frontend",
    icon: Sparkles,
    color: "text-cyan-500",
  },
  {
    name: "Bootstrap",
    level: 80,
    category: "frontend",
    icon: Grid3X3,
    color: "text-purple-500",
  },
  {
    name: "jQuery",
    level: 70,
    category: "frontend",
    icon: Code,
    color: "text-blue-700",
  },
  {
    name: "Vite",
    level: 85,
    category: "frontend",
    icon: Zap,
    color: "text-yellow-600",
  },

  // Backend
  {
    name: "Python",
    level: 85,
    category: "backend",
    icon: Code2,
    color: "text-yellow-600",
  },
  {
    name: "Node.js",
    level: 80,
    category: "backend",
    icon: Server,
    color: "text-green-600",
  },
  {
    name: "Express",
    level: 75,
    category: "backend",
    icon: Zap,
    color: "text-gray-600",
  },
  {
    name: "NestJS",
    level: 70,
    category: "backend",
    icon: Boxes,
    color: "text-red-500",
  },
  {
    name: "FastAPI",
    level: 75,
    category: "backend",
    icon: CloudLightning,
    color: "text-teal-500",
  },
  {
    name: "Flask",
    level: 80,
    category: "backend",
    icon: Flame,
    color: "text-gray-700",
  },
  {
    name: "PostgreSQL",
    level: 75,
    category: "backend",
    icon: Cylinder,
    color: "text-blue-700",
  },
  {
    name: "MongoDB",
    level: 70,
    category: "backend",
    icon: Database,
    color: "text-green-500",
  },
  {
    name: "Firebase",
    level: 65,
    category: "backend",
    icon: Flame,
    color: "text-orange-600",
  },
  {
    name: "SQLite",
    level: 70,
    category: "backend",
    icon: Box,
    color: "text-blue-600",
  },

  // Tools
  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    icon: GitBranch,
    color: "text-orange-600",
  },
  {
    name: "Docker",
    level: 70,
    category: "tools",
    icon: Package,
    color: "text-blue-600",
  },
  {
    name: "Figma",
    level: 85,
    category: "tools",
    icon: Figma,
    color: "text-purple-500",
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    icon: Code,
    color: "text-blue-500",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <div className="flex items-center gap-3">
                    <IconComponent className={`w-6 h-6 ${skill.color}`} />
                    <h3 className="font-semibold text-lg"> {skill.name}</h3>
                  </div>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>

                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
