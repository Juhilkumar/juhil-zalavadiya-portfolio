export interface WorkExperience {
  id: number
  company: string
  url: string
  role: string
  description: string
}

export interface Education {
  id: number
  institution: string
  url: string
  period: string
  location: string
  degree: string
  field: string
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: 'Government of Nova Scotia',
    url: 'https://beta.novascotia.ca/',
    role: 'Java / FileNet Developer',
    description: 'Spearheaded the development of Java-based applications within the IBM WebSphere environment, encompassing IBM FileNet, Content Manager, and Datacap, resulting in the successful implementation of 10+ document management solutions and a 25% improvement in processing efficiency for key business operations.',
  },
  {
    id: 2,
    company: 'Outlier',
    url: 'https://outlier.ai/',
    role: 'Part-Time Software Engineer – AI Training',
    description: 'Engineered advanced AI training programs, enhancing data analysis capabilities by 30% and optimizing performance by 40%, powering nine machine learning and large language models, driving significant operational efficiency.',
  },
  {
    id: 3,
    company: 'Upwork',
    url: 'https://www.upwork.com/',
    role: 'Freelance Software Developer',
    description: 'Orchestrated the development of three highly scalable and fault-tolerant Full Stack applications, utilizing Java, Spring Boot, React.js, Node.js, TypeScript, PostgresSQL, and MongoDB with Selenium and Cucumber testing, adopting AWS for cloud and debugging production issues to reduce downtime by 40% and increase deployment efficiency by 50%.',
  },
  {
    id: 4,
    company: 'Verafin Solutions ULC (Nasdaq AFC)',
    url: 'https://verafin.com/',
    role: 'Software Developer',
    description: 'Optimized Software-as-a-Service (SaaS) platform efficiency by spotting and rectifying bottlenecks, obtaining an outstanding 75% reduction in endpoint latencies; engineered a highly efficient data model processing ~1 Billion transactions per week.',
  },
  {
    id: 5,
    company: 'Global Relay',
    url: 'https://www.globalrelay.com/',
    role: 'Software Developer',
    description: 'Architected and nurtured 8 Spring Boot apps for cloud message archive, leveraging Docker, Kubernetes, and Jenkins to implement a resilient DevOps pipeline, accomplishing a 40% rise in system performance through efficient microservices.',
  },
]

export const education: Education[] = [
  {
    id: 1,
    institution: 'Dalhousie University',
    url: 'https://www.dal.ca/',
    period: '2021–2022',
    location: 'Halifax, NS',
    degree: "Master's Degree, School of Computer Science",
    field: 'Master of Applied Computer Science',
  },
  {
    id: 2,
    institution: 'Gujarat Technological University',
    url: 'https://www.gtu.ac.in/',
    period: '2016–2020',
    location: 'Anand, GJ',
    degree: "Bachelor's Degree, School of Computer Science",
    field: 'Information Technology Engineering',
  },
]
