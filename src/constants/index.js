import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  nextjs,
  mysql,
  postgresql,
  graphql,
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
  dalleHomePage,
  jobit,
  tripguide,
  threejs,
  expressjs,
  postman,
  svelte,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Technical Content Writer",
    icon: creator,
  },
];

const technologies = [
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
    name: "NextJs",
    icon: nextjs,
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
    name: "Graphql",
    icon: graphql,
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
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "Game Developer",
    company_name: "Freelancer",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2019 - Dec 2019",
    points: [
      "Participated in Designing and Developing of 2 games and Published it on playstore.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Participating in many Game jams.",
    ],
  },
  {
    title: "Android Developer Intern",
    company_name: "Eatoes(Early stage startup)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed rich UI for the applications modules using Jetpack Compose.",
      "Worked on Designing, Enhancements, Bug-fixing and Maintenance of the Application.",
      "Participated in Designing and Developing App screens and its workflow using Activity and Fragments.",
      "Responsible for designing the Login screen UI and handling the Authentication with backend servers.",
      "Worked very closely with the UI design team in getting the image assets, screens and app icons.",
      "Tested the application on multiple android devices and debugged the issues using Logcat",
    ],
  },
  {
    title: "Android Developer",
    company_name: "Tummoc",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Programmed with MVVM, Clean-Architecture, modular, robust code using Kotlin and Jetpack Compose with supporting different UI resolutions from ldpi, mdpi, hdpi, xhdpi, xxhdpi..",
      "Involved in the full life cycle of the project including analysis design, development, debugging, testing, and deployment..",
      "Integrated Facebook, Tumblr, Twitter, Maps V2, and other open source APIs within applications.",
      "Worked with third-party libraries and techniques such as Dagger/Hilt, Retrofit and Image loading libraries such as Glide, Picasso and COIL.",
    ],
  },
  {
    title: "Technical Content Writer",
    company_name: "Hashnode",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Write and published Tech Blogs on hashnode.",
      "Technical Content Writer whos wrote blogs on different topics.",
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
    name: "DALL-E",
    description: "Full Stack MERN AI Image Generation App.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express js",
        color: "black-text-gradient",
      },
    ],
    image: dalleHomePage,
    source_code_link: "https://github.com/Snach13/DALL-E-mern-stack",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
