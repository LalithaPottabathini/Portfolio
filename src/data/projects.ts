export interface Project {
  title: string;
  description: string;
  contributions: string[];
  techStack?: string[];
}

export const projects: Project[] = [
  {
    title: "Citizens Bank – Convergence & PaaS Migration",
    description:
      "Enterprise banking platform modernization and cloud-native migration.",
    contributions: [
      "Developed and integrated Angular + TypeScript SPA with GraphQL backend microservices.",
      "Implemented DataLoader for batch processing and optimized query execution plans.",
      "Reduced API payload size by 40% using selective field resolution.",
      "Migrated monolithic services to microservices on OpenShift with autoscaling and fault tolerance.",
      "Implemented health checks, service discovery, and circuit breaker patterns."
    ],
    techStack: ["Angular", "TypeScript", "GraphQL", "OpenShift", "Docker"]
  },
  {
    title: "Environmental Quality Portal",
    description:
      "State-level environmental compliance and emissions monitoring platform.",
    contributions: [
      "Built full-stack platform using React + TypeScript, Node.js, Express, and DynamoDB.",
      "Developed real-time dashboards with data visualization and optimized DynamoDB queries.",
      "Implemented responsive UI using Tailwind CSS for cross-device compatibility.",
      "Deployed static assets using AWS S3."
    ],
    techStack: ["React", "TypeScript", "Node.js", "DynamoDB", "AWS S3"]
  },
  {
    title: "E-Commerce Platform (MERN Stack)",
    description:
      "Scalable e-commerce backend with clean architecture and domain-driven design.",
    contributions: [
      "Designed RESTful APIs using Node.js and Express.",
      "Implemented clean architecture with service layer, repository pattern, and dependency injection.",
      "Built modules for users, products, cart, and order management."
    ],
    techStack: ["Node.js", "Express", "TypeORM", "MongoDB"]
  },
  {
    title: "Book Procurement Cell Management System",
    description:
      "Procurement and inventory system for exam booklet distribution.",
    contributions: [
      "Designed normalized MySQL database schema with optimized joins and indexing.",
      "Implemented SQL stored procedures and triggers for inventory tracking and reporting.",
      "Built responsive frontend using JavaScript, HTML5, and CSS3 with form validations."
    ],
    techStack: ["MySQL", "SQL", "JavaScript", "HTML", "CSS"]
  }
];
