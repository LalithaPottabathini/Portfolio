export interface Skill {
  title: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    title: "Languages & Core",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Java",
      "Python",
      "SQL",
      "HTML5",
      "CSS3",
      "Functional Programming",
      "DOM"
    ]
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Angular",
      "Redux",
      "Tailwind CSS",
      "SPA",
      "Responsive Design",
      "Performance Optimization",
      "Unit Testing"
    ]
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "JWT Authentication",
      "OAuth",
      "Microservices Architecture",
    ]
  },
  {
    title: "Databases & ORM",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "DynamoDB",
      "Prisma ORM",
      "TypeORM",
      "DB Modeling",
      "Indexing",
      "Query Optimization"
    ]
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (S3, EC2, DynamoDB)",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Jenkins",
      "Git",
      "GitHub",
      "Bitbucket",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Datadog",
      "Monitoring & APM",
      "Vercel"
    ]
  },
  {
    title: "Testing & Architecture",
    items: [
      "Jest",
      "Jasmine",
      "Karma",
      "Unit Testing",
      "Integration Testing",
      "TDD",
      "MVC",
    ]
  }
];
