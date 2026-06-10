export interface Project {
  id: number
  title: string
  image: string
  github: string
  category: 'major' | 'mini'
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Department Management System',
    image: '/assets/img/portfolio/department-management-system.webp',
    github: 'https://github.com/Juhilkumar/DMS',
    category: 'major',
  },
  {
    id: 2,
    title: 'Halifax Foodie',
    image: '/assets/img/portfolio/halifax-foodie.webp',
    github: 'https://github.com/Juhilkumar/HalifaxFoodie',
    category: 'major',
  },
  {
    id: 3,
    title: 'Twitter Data Analysis',
    image: '/assets/img/portfolio/twitter-data-analysis.webp',
    github: 'https://github.com/Juhilkumar/TwitterDataAnalysis',
    category: 'major',
  },
  {
    id: 4,
    title: 'Inventory Management System',
    image: '/assets/img/portfolio/inventory-management-system.webp',
    github: 'https://github.com/Juhilkumar/Inventory-Management-System',
    category: 'major',
  },
  {
    id: 5,
    title: 'Sentiment & Semantic Analysis',
    image: '/assets/img/portfolio/sentiment-and-semantic-analysis.webp',
    github: 'https://github.com/Juhilkumar/SentimentAndSemanticAnalysis',
    category: 'mini',
  },
  {
    id: 6,
    title: 'Star Wars',
    image: '/assets/img/portfolio/star-wars.webp',
    github: 'https://github.com/Juhilkumar/REDspaceStarWars',
    category: 'mini',
  },
  {
    id: 7,
    title: 'File Management System',
    image: '/assets/img/portfolio/file-management-system.webp',
    github: 'https://github.com/Juhilkumar/FMS',
    category: 'mini',
  },
]
