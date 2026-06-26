export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string;
}

export const projects: Project[] = [
  {
    id: "todo",
    title: "Todo Application",
    description: "Manage daily tasks efficiently",
    tech: "React + TypeScript",
  },
  {
    id: "minefleet",
    title: "MineFleet AI",
    description:
      "Real-time autonomous fleet monitoring platform",
    tech:
      "React + TypeScript + Node.js + AI",
  },
];