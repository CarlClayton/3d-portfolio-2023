import {
  mobile,
  backend,
  covea,
  creator,
  web,
  javascript,
  typescript,
  html,
  hsbc,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  evogym,
  cryptoverse,
  dollabank,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const intro = `I'm a motivated software engineer skilled in TypeScript &
React with over ten years experience in the insurance
industry. Proven ability to translate business requirements
into code and test strategy. Quickly learns new technologies
with a pragmatic approach to problem solving.`;

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Node Developer",
    icon: backend,
  },
  {
    title: "ProductWriter Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Covéa Insurance",
    icon: covea,
    iconBg: "#E6DEDD",
    date: "Nov 2019 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Developer Analyst",
    company_name: "Covéa Insurance",
    icon: covea,
    iconBg: "#E6DEDD",
    date: "Jan 2011 - Nov 2019",
    points: [
      "Development and maintenance of Polaris ProductWriter Personal Lines Household schemes",
      "Instrumental in establishing Personal Lines test strategy.",
      "Maintenance and development of Sharepoint intranet.",
    ],
  },
  {
    title: "Telecoms Analyst",
    company_name: "HSBC Operations",
    icon: hsbc,
    iconBg: "#FFF",
    date: "2008 - 2010",
    points: [
      "Management and allocation of departmental workflow",
      "Production of monthly key performance indicator statistics and call logging reports",
      "Auditing of telephone extensions and contract tariffs",
      "Circuit inventory management",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const projects_intro = `Following projects showcases my skills and experience
through real-world examples of my work. Each project is
briefly described with links to code repositories and live
demos in it. It reflects my ability to solve complex
problems, work with different technologies, and manage
projects effectively.`;

const projects = [
  {
    name: "EvoGym",
    description: "Typescript Fitness Application tutorial",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: evogym,
    deployed_link: "https://lucent-basbousa-c6bc2d.netlify.app/",
    source_code_link: "https://github.com/CarlClayton/gym-typescript",
  },
  {
    name: "Cryptoverse",
    description:
      "Web application that enables users to search for cryptocurrencies, view their current value, and read crypto related news articles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoverse,
    deployed_link: "https://benevolent-kangaroo-7dc2fb.netlify.app/",
    source_code_link: "https://github.com/",
  },
  {
    name: "Dolla Bank",
    description:
      "React banking website using styled components and React smooth scroll. The website is fully responsive using React Hooks and React Router",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dollabank,
    deployed_link: "https://endearing-flan-b6c485.netlify.app/",
    source_code_link: "https://github.com/CarlClayton/bank-app",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
