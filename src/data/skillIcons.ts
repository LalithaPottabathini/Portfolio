import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiAngular,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithub,
  SiGit,
  SiPrisma,
  SiRedis,
  SiVercel,
  SiDatadog,
} from "react-icons/si";

import { FaDatabase, FaCode, FaCloud } from "react-icons/fa";

export const skillIcons: Record<string, IconType> = {
  // Languages
  "JavaScript (ES6+)": SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  SQL: FaDatabase,

  // Frontend
  "React.js": SiReact,
  Angular: SiAngular,
  "Redux Toolkit": SiRedux,
  "Tailwind CSS": SiTailwindcss,

  // Backend
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  GraphQL: SiGraphql,

  // Databases
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Redis: SiRedis,
  "Prisma ORM": SiPrisma,

  // Cloud & DevOps
  AWS: SiAmazon,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,
  Datadog: SiDatadog,

  // Generic
  "REST APIs": FaCode,
  "Microservices Architecture": FaCloud,
};
