export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Blue Spire Inc",
    duration: "December 2023 – Present",
    location: "Hyderabad, India",
    highlights: [
      "Architected and deployed production-grade full-stack applications using React, Angular, Node.js, Express.js, MySQL, MongoDB, and AWS services for enterprise clients including Citizens Bank.",
      "Led end-to-end microservices migration from Kubernetes to OpenShift, upgrading Node.js runtime from v14 to v18 and refactoring legacy code with modern ES6+ patterns.",
      "Engineered an environmental compliance portal using React + TypeScript frontend and Node.js + Express backend with DynamoDB, following layered architecture and repository patterns.",
      "Optimized GraphQL APIs by implementing query optimization, response caching, and resolver performance tuning, achieving sub-100ms response times.",
      "Built CI/CD pipelines using Jenkins, Bitbucket, and Docker, reducing deployment time by 50% and enabling daily releases.",
      "Improved system reliability by 45% through Jest and Jasmine test coverage, achieving 85%+ code coverage across services.",
      "Implemented Datadog monitoring, distributed tracing, and alerting, reducing incident response time by 25%.",
      "Used LaunchDarkly feature flags for gradual rollouts and safe production deployments.",
      "Explored LLM internals including tokenization (BPE), inference workflows, and RLHF concepts."
    ]
  }
];
