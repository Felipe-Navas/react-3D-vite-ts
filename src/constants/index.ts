import { tarmac, naranjax, ibm, kaver, high_soft, itec } from '../assets/images'
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from '../assets/icons'

export const skills = [
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
]

export const experiences = [
  {
    title: 'Senior Software Engineer',
    company_name: 'Tarmac.io',
    icon: tarmac,
    iconBg: '#bbedb7',
    date: 'Feb 2022 - Sep 2023',
    points: [
      'Utilized my understanding of React.js fundamentals to promote better component lifecycle practices, resulting in a 23% increase in turnaround speed with 100% deadline adherence.',
      'Designed and developed 20+ front-end and back-end features utilizing React.js, Node.js, TypeScript, and GraphQL.',
      'Focused on full-stack engineering with modules on both front and back-end processes across 8 applications.',
      'Built extensive test coverage for all features, which reduces the number of customer complaints by 23%.',
      'Wrote automated tests that ensure 100% correct functionality of the code using Cypress.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Naranja X',
    icon: naranjax,
    iconBg: '#fbc3bc',
    date: 'Sep 2020 - Feb 2022',
    points: [
      'Owned 100% of technical leadership responsibilities for product feature research and development.',
      'Developed and maintained an application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design.',
      'Built RESTful APIs that served data to our Javascript front-end based on chosen user inputs that handled over 10,000+ concurrent users.',
      'Collaborated with an agile team of 6, and helped prioritize and scope feature requests to ensure that the biggest impact features were worked.',
    ],
  },
  {
    title: 'Senior Software Developer',
    company_name: 'IBM',
    icon: ibm,
    iconBg: '#a5c2f2',
    date: 'Oct 2018 - Sep 2020',
    points: [
      'Created and oversaw a robust back-end that served 5+ web applications that handled 7,000+ concurrent users.',
      'Engineered modern applications with Node.js, JavaScript, and Oracle.',
      'Worked within an agile scrum team, contributing to 100% continuous improvement and deployment (CI/CD).',
      'Designed, and developed robust, and reliable platform components which enhanced credit card tracking by 30%.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'Kaver Consulting',
    icon: kaver,
    iconBg: '#ebe6e7',
    date: 'Feb 2017 - Sep 2018',
    points: [
      'Contributed to the design and development of software system architecture to establish stable client transactions synchronization between 4 servers used for 1000+ COBOL applications.',
      'Built RESTful APIs to allow users to submit information by storing data in Oracle DB and COBOL Vision Files.',
      'Designed and developed 30+ software applications based on user stories, requirements, and design specifications.',
      'Developed and integrated multi-threading functionality for a critical software process resulting in a 40% reduction in processing time.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'High Soft SRL',
    icon: high_soft,
    iconBg: '#d7d3d2',
    date: 'Aug 2014 - Feb 2017',
    points: [
      'Led the migration of a file system to an MS SQL database, ensuring data integrity and improving overall system performance.',
      'Designed and developed user interfaces to enhance user experience and streamline processes.',
      'Implemented improvements to optimize and enhance heavy processes, resulting in increased efficiency and reduced processing time.',
      'Collaborated with cross-functional teams to gather requirements, analyze system needs, and deliver effective software solutions.',
      'Conducted thorough testing and debugging to ensure system functionality and reliability.',
      'Provided ongoing support and maintenance for COBOL applications, addressing issues and implementing updates as necessary.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'ITEC Rio Cuarto',
    icon: itec,
    iconBg: '#bdc4cd',
    date: 'Apr 2013 - Apr 2014',
    points: [
      "Developed and maintained the Institute's web application, focusing on usability and user experience.",
      'Collaborated with the IT team to manage and maintain computer laboratories, ensuring optimal functionality and availability.',
      'Conducted system analysis, gathered requirements, and designed software solutions to meet specific organizational needs.',
      'Provided technical support and troubleshooting assistance to end users, resolving issues promptly and ensuring minimal disruption to operations.',
      'Implemented security measures to protect data integrity and confidentiality.',
    ],
  },
]

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/Felipe-Navas',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/felipenavaslederhos',
  },
]

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Amazon Price Tracker',
    description:
      'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    link: 'https://github.com/adrianhajdin/pricewise',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Full Stack Threads Clone',
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: 'https://github.com/adrianhajdin/threads',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Car Finding App',
    description:
      'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Full Stack Instagram Clone',
    description:
      'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/adrianhajdin/social_media_app',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Real-Estate Application',
    description:
      'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/adrianhajdin/projects_realestate',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'AI Summarizer Application',
    description:
      'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  },
]
