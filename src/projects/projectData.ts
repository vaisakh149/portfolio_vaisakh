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
    id: "weather",
    title: "Weather Dashboard",
    description: "Live weather forecast application",
    tech: "React + API",
  },
  {
    id: "expense",
    title: "Expense Tracker",
    description: "Track income and expenses",
    tech: "React + Redux",
  },
];