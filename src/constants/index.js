import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import freelancerlogo from "../assets/images.png"
import mavy from "../assets/mavy.png"
import fiverr from "../assets/fiverr.png"
import eccomerceApp from "../assets/eccomerceApp.png"
import chatView from "../assets/chatView.png"
import crypto from "../assets/crypto.png"
import share from "../assets/share.png"
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

const services = [
  {
    title: "Web Developer (MERN STACK)",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "fiverr",
    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jun 2023 ",
    points: [
      "Implemented intricate UI/UX designs using React Native components and libraries",
      "Utilized Redux for state management, ensuring a scalable and maintainable codebase.",
      "Conducted comprehensive testing across multiple devices and platforms to ensure a consistent user experience.",
      "Integrated backend APIs seamlessly for data fetching and management.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: freelancerlogo,
    iconBg: "#383E56",
    date: "Jun 2023 - Jan 2024",
    points: [
      "Designed and implemented responsive and user-friendly front-end interfaces using React.js, incorporating state management with Redux or Context API",
      "Developed RESTful APIs using Node.js and Express.js for seamless communication between the front-end and back-end.",
      "Utilized Mongoose for MongoDB schema validation and data modeling to ensure data integrity and consistency.",
      "Conducted thorough testing, including unit tests, integration tests, and end-to-end tests, to ensure functionality and reliability",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Mavy",
    icon: mavy,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "end-to-end development of a React Native project, from initial planning to deployment",
      "Developing and maintaining web applications using React.js and React native ,other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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

const projects = [
  {
    name: "Ecommerce Admin",
    description:
      "The admin panel boasts an intuitive dashboard with key metrics like sales trends, customer analytics, and inventory status. Customizable widgets provide at-a-glance insights into the store's performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: eccomerceApp,
    source_code_link: "https://frontend-ecommerce-ts.vercel.app",
  },
  {
    name: "Chat App",
    description:
      "Our chat application harnesses the capabilities of the MERN create a seamless communication platform. Users can register, login, create groups, and exchange messages, fostering real-time interactions and collaboration.",
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
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: chatView,
    source_code_link: "https://chat-app-mern-beta.vercel.app/",
  },
  {
    name: "Cryptocurrency Tracker",
    description:
      "Our cryptocurrency tracker application utilizes the MERN stack—MongoDB, Express.js, React.js, and Node.js—to provide real-time information and analysis on various cryptocurrencies. Users can monitor cryptocurrency prices, view historical data, set alerts, and stay updated with market trends",
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
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://crypto-app-kappa-smoky.vercel.app/coins",
  },
];

export { services, technologies, experiences, testimonials, projects };
