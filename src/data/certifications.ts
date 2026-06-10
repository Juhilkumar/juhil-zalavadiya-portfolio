export interface Certification {
  id: number
  title: string
  issuer: string
  link: string
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Microservices with Spring Boot and Spring Cloud',
    issuer: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-6928031f-1a89-45ab-b35d-b5424519964c/',
  },
  {
    id: 2,
    title: 'Docker Foundations Professional Certificate',
    issuer: 'Docker, Inc',
    link: 'https://www.linkedin.com/learning/certificates/fb40b260bf404de8c771e6d5fce16b80a3ecde9481259661a142c9e0d439c5d2',
  },
  {
    id: 3,
    title: 'React - The Complete Guide 2024 (incl. Next.js, Redux)',
    issuer: 'Academind (Udemy)',
    link: 'https://www.udemy.com/certificate/UC-f226caad-0517-4da3-9c07-9e20a9928c0a/',
  },
  {
    id: 4,
    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    issuer: 'Academind (Udemy)',
    link: 'https://www.udemy.com/certificate/UC-e9c93761-6e0a-495c-8d9e-e1a8700cd195/',
  },
  {
    id: 5,
    title: 'AWS Educate Introduction to Cloud Computing 101',
    issuer: 'Amazon Web Services (AWS)',
    link: '',
  },
  {
    id: 6,
    title: 'AWS Certified Security Specialty Exam Introduction',
    issuer: 'Premraj Jeyaprakash (Udemy)',
    link: 'https://www.udemy.com/certificate/UC-91d79646-7e89-4cd6-b553-69f0cb8d6fa6/',
  },
  {
    id: 7,
    title: 'Java Tutorial Course',
    issuer: 'SoloLearn',
    link: 'https://www.sololearn.com/Certificate/1068-13535535/pdf/',
  },
  {
    id: 8,
    title: 'Programming Using HTML',
    issuer: 'SoloLearn',
    link: 'https://www.sololearn.com/Certificate/1014-13535535/pdf',
  },
  {
    id: 9,
    title: 'Programming in HTML Using CSS',
    issuer: 'SoloLearn',
    link: 'https://www.sololearn.com/Certificate/1023-13535535/pdf/',
  },
  {
    id: 10,
    title: 'Programming in HTML with JavaScript',
    issuer: 'SoloLearn',
    link: 'https://www.sololearn.com/Certificate/1024-13535535/pdf/',
  },
]
