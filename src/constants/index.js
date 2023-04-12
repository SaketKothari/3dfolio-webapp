import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  cpp,
  reactjs,
  nodejs,
  mongodb,
  accenture,
  sodainmind,
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: creator,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'C++',
    icon: cpp,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Soda in Mind',
    icon: sodainmind,
    iconBg: '#E6DEDD',
    date: 'Nov 2022 - Feb 2023',
    points: [
      'Built websites with HTML, CSS, JavaScript and web pages based on visual designs.',
      'Writing clean, efficient, and well-documented code that adhered to industry standards and best practices.',
      'I successfully delivered several small features and enhancements that improved the overall user experience of the website.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Accenture',
    icon: accenture,
    iconBg: '#383E56',
    date: 'Feb 2022 - Present',
    points: [
      'Completed the training on CloudNative Microservices which is a powerful approach for building highly scalable, resilient software applications that can adapt to changing business needs and handle high traffic loads with ease.',
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Working on Microservices using Spring Boot.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "So if you're in need of a web developer, look no further. This man is the hero Gotham deserves, and he'll make your website shine brighter than the Bat-Signal on a clear night.",
    name: 'Bruce Wayne',
    designation: 'CFO',
    company: 'Wayne Enterprises, Inc.',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    testimonial:
      'Dear fellow wizards and muggles, I am writing to share my experience working with an exceptional web developer. As many of you may know, he is a former Gryffindor Quidditch captain and a skilled web developer. Throughout the process, he was always available to answer our questions and address any concerns we had.',
    name: 'Hermione Granger',
    designation: 'CTO',
    company: 'Hogwarts School of Witchcraft and Wizardrys',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    testimonial:
      "So if you need a web developer, this guy is the go-to guy. He's not like those other jabronis out there who overpromise and underdeliver. This guy delivers the goods, and he'll do it with a smile on his face. Trust me, you won't regret it.",
    name: 'Anthony Soprano',
    designation: 'COO',
    company: 'Barone Sanitation',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
];

const projects = [
  {
    name: 'Ecommerce Webapp (Amazon Clone)',
    description:
      'A ecommerce web application that mimics the functionality and features of Amazon web application with payment integration. It is a online platform that allows users to buy and sell goods and services and it has user authentication feature thanks to Firebase.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'next.js',
        color: 'gray-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'firebase',
        color: 'orange-text-gradient',
      },
      {
        name: 'webhooks',
        color: 'teal-text-gradient',
      },
      {
        name: 'stripe',
        color: 'green-text-gradient',
      },
    ],
    image: project_1,
    source_code_link:
      'https://github.com/SaketKothari/amazon-clone-ecommerce-webapp',
    live_code_link: 'https://amazon-next-saketkothari.vercel.app/',
  },
  {
    name: 'Streaming Platform Webapp (Netflix Clone)',
    description:
      'A streaming platform that replicates the core features and functionalities of Netflix. The platform offers a wide range of movies, TV shows, and other video content that users can access and watch online, anytime and anywhere. Build using MERN Stack.',
    tags: [
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node.js',
        color: 'white-text-gradient',
      },
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
      {
        name: 'jwt',
        color: 'black-text-gradient',
      },
    ],
    image: project_2,
    source_code_link: 'https://github.com/SaketKothari/netflix-clone-webapp',
    live_code_link: 'https://github.com/SaketKothari/netflix-clone-webapp',
  },
  {
    name: 'Ecommerce Store API',
    description:
      'A backend API of the Ecommerce Tshirt selling website made with Node.js, Express.js and MongoDB, the API is made by following the proper coding conventions and security measures.',
    tags: [
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'node.js',
        color: 'white-text-gradient',
      },
      {
        name: 'cloudinary',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodemailer',
        color: 'pink-text-gradient',
      },
      {
        name: 'authentication',
        color: 'white-text-gradient',
      },
    ],
    image: project_3,
    source_code_link: 'https://github.com/SaketKothari/tshirt-store-api',
    live_code_link: 'https://tshirt-store.onrender.com/api-docs/',
  },
  {
    name: 'API Proxy Server',
    description:
      'We will use Node.js & Express to create a server in order to hide public API keys, add rate limiting and caching on a weather app (The proxy server can cache API responses to reduce the number of requests that need to be forwarded to the API server, improving the performance and availability of the API).',
    tags: [
      {
        name: 'node.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'express.js',
        color: 'green-text-gradient',
      },
      {
        name: 'api-cache',
        color: 'pink-text-gradient',
      },
    ],
    image: project_4,
    source_code_link: 'https://github.com/SaketKothari/API-Proxy-Server',
    live_code_link: 'https://github.com/SaketKothari/API-Proxy-Server',
  },
  {
    name: 'Video Chat App',
    description:
      'Peer to peer video chat using WebRTC and Socket.io. Instantly join a video call with a code. Build an app that allows you to video chat with your friends and colleagues just as well as Zoom does.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'express.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'socket.io',
        color: 'orange-text-gradient',
      },
      {
        name: 'webrtc',
        color: 'white-text-gradient',
      },
    ],
    image: project_5,
    source_code_link: 'https://github.com/SaketKothari/video-chat-app',
    live_code_link: 'https://video-chat-app-sk.netlify.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
