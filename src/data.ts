import {
  PhotographyAlbum,
  ProjectCarouselCard,
  SkillsByCategory,
  TimelineElementExperience,
} from "./types";

// https://heroicons.com/outline

export const ExperienceSectionData: TimelineElementExperience[] = [
  {
    id: 1,
    jobPosition: "Python Tutor",
    companyName: "Accel Learning",
    companyLogo: require("../src/assets/accel-learning-logo.png"),
    location: "New York, NY",
    date: "Nov 2020 – Aug 2021",
    description:
      "As a Python tutor, I instructed students on the basics of programming in Python and helped spark their interest in the field of computer science. I also developed an easy-to-understand project-based Python curriculum designed for high school and middle school students. My cirriculum was taught students Python modules like PyGame and Matplotlib and enabled them to create various games and complex physics simulations.",
    skillsUsed: ["Python", "Tutoring", "Curriculum Development"],
    links: [],
  },
  {
    id: 2,
    jobPosition: "Senior Software Developer",
    companyName: "Mentor Labs",
    companyLogo: require("../src/assets/mission-mentor-logo.png"),
    location: "New York, NY",
    date: "Aug 2021 – Apr 2022",
    description:
      "On a cross-functional development team of MIT and Harvard engineers, I delivered critical product features on the main React.js site, the Java Spring Boot backend, and PostgreSQL database. I also led standup meetings, discussed the company's next steps at team lead meetings, and helped amass 10,000+ users globally. Since then, the company has been acquired by Crimson Education.",
    skillsUsed: ["React.js", "PostgreSQL", "Java Spring", "AWS"],
    links: [],
  },
  {
    id: 3,
    jobPosition: "Summer Extern",
    companyName: "Cisco Systems",
    companyLogo: require("../src/assets/cisco-logo.png"),
    location: "New York, NY",
    date: "Jul 2022",
    description:
      "Throughout the program, I formulated and presented technological solutions using Cisco services to issues posed in the public transportation sector. I also acquired certifications and an integrated understanding of cybersecurity and IoT through various NetACAD sessions. The opportunity helped me build my networking, communication, and team building skills while interacting with influential company executives.",
    skillsUsed: ["Internet of Things", "Cybersecurity", "Networking"],
    links: [],
  },
  {
    id: 4,
    jobPosition: "Academy of Math and Programming Intern",
    companyName: "Jane Street",
    companyLogo: require("../src/assets/jane-street-logo.png"),
    location: "New York, NY",
    date: "Jul 2023 – Aug 2023",
    description:
      "I was selected as one of 77 nationally for a rigorous 5-week program focused on mathematical data analysis and programming, where I developed trading strategies to automate market exchanges. I managed to place 7th in Jane Street's Electronic Trading Competition. The program gave me to the oppportunity to explore combinatorics and number theory with Math Olympians to solve complex linguistic and game theory problems.",
    skillsUsed: ["Python", "Graph Theory", "Combinatorics", "Number Theory"],
    links: [],
  },
];

export const ProjectsSectionData: ProjectCarouselCard[] = [
  {
    id: 1,
    image: require("../src/assets/munch.png"),
    title: "Munch",
    description:
      "A social culinary hub for college students to buy/sell homecooked meals and discover recipes created by other students.",
    fullDescription:
      "Munch is a social culinary hub for college students to buy/sell homecooked meals and discover recipes created by other students. The application was developed using a cross-platform mobile application with cached state-management, scalable persistent data storage, and a gateway authentication layer using relational database systems, a Prisma object relational mapper, and AWS services.",
    skillsUsed: [
      "React Native",
      "Redux",
      "AWS",
      "PostgreSQL",
      "GraphQL",
      "Firebase",
      "Node.js",
      "React.js",
      "TypeScript",
      "HTML",
      "CSS",
    ],
    projectLink: "https://joinmunch.app",
    additionalLinks: [],
  },
  {
    id: 2,
    image: require("../src/assets/tutorconnect.png"),
    title: "Tutor Connect",
    description:
      "A web application that connects students with tutors for personalized learning experiences.",
    fullDescription:
      "Tutor Connect is an online platform that allows high school students to instantly connect with qualified and verified tutors. The site began as a service for the Secaucus Public School District, but is currently being scaled to allow for other school districts to purchase the service. The platform comes fully equipped with an administator dashboard that allows school staff to manage student permissions, view analytics, and gain insight into the platform's usage.",
    skillsUsed: [
      "React.js",
      "TypeScript",
      "HTML",
      "CSS",
      "Node.js",
      "Firebase",
    ],
    projectLink: "https://tutorconnect.sboe.org",
    additionalLinks: [],
  },
  {
    id: 3,
    image: require("../src/assets/tileshift.png"),
    title: "Tileshift",
    description: "A daily web-based word puzzle game.",
    fullDescription:
      "Tileshift is a daily web-based word puzzle game. The goal of the game is to align tiles to spell a word and turn them green. To win the game, players must use all the tiles within thirty moves. Players can also compete against friends and share their results. The site has gained over 125,000 hits on Reddit with an estimated 410 players across 3 different continents and an average engagement time of 7 minutes and 40 seconds per user. The game was developed ",
    skillsUsed: [
      "React.js",
      "TypeScript",
      "HTML",
      "CSS",
      "Node.js",
      "Firebase",
    ],
    projectLink: "https://tileshiftgame.com",
    additionalLinks: [],
  },
  {
    id: 4,
    image: require("../src/assets/signslate.png"),
    title: "Signslate",
    description:
      "A web application that allows users to speak and translate English to American Sign Language (ASL) and ASL to English in real-time.",
    fullDescription:
      "Signslate is a web application that allows users to speak and translate English to American Sign Language (ASL) and ASL to English in real-time via webcam or microphone input and displays the ASL translation using web-scraped videos. The site web-scrapes videos off the internet using a Flask python server and displays them on a ReactJS frontend for translating speech to ASL. To translate ASL to English, the site uses a custom trained machine learning model to recognize ASL gestures and translate them to English. The site received 1st place in the Diversity and Inclusion Category of the High Tech Hacks 2021 Hackathon, 1st place overall in the Simplihacks 2021 Hackathon, and won the Wolfram Alpha Award.",
    skillsUsed: [
      "React.js",
      "Python",
      "Flask",
      "TypeScript",
      "HTML",
      "CSS",
      "Node.js",
      "Firebase",
    ],
    projectLink: "https://github.com/krushaybhavsar/signslate",
    additionalLinks: [],
  },
  {
    id: 5,
    image: require("../src/assets/privalink.png"),
    title: "Privalink",
    description:
      "A platform to generate secure, private, and encrypted self-destructive links for sharing sensitive information.",
    fullDescription:
      "Privalink allows you to send any sensitive data or information to people you trust using self-destructing links. After someone has viewed the link, all sensitive data will be deleted from the Firebase firestore and the link will no longer be available for use. The site also gives users the option to instantly get notified via email after the link is opened and to set an expiration date for the link.",
    skillsUsed: [
      "React.js",
      "TypeScript",
      "HTML",
      "CSS",
      "Node.js",
      "Firebase",
    ],
    projectLink: "https://privalink.app",
    additionalLinks: [],
  },
];

export const SkillsSectionData: SkillsByCategory[] = [
  {
    categoryTitle: "Programming & Markup Languages",
    skills: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "Java" },
      { name: "C#" },
      { name: "MATLAB" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "XML" },
    ],
  },
  {
    categoryTitle: "Frameworks",
    skills: [
      { name: "React.js" },
      { name: "React Native" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Next.js" },
      { name: "Electron" },
      { name: "GraphQL" },
      { name: "Prisma" },
      { name: "Redux" },
      { name: "Spring Boot" },
      { name: "Flask" },
      { name: "Django" },
      { name: "OpenCV" },
      { name: "NumPy" },
      { name: "TensorFlow" },
    ],
  },
  {
    categoryTitle: "Tools",
    skills: [
      { name: "PostgreSQL" },
      { name: "Amazon Web Services (AWS)" },
      { name: "Firebase" },
      { name: "Git" },
      { name: "Jira" },
      { name: "Figma" },
      { name: "Android Studio" },
      { name: "Unity" },
      { name: "Arduino" },
      { name: "Processing" },
    ],
  },
];

export const PhotographyScreenData: PhotographyAlbum[] = [
  {
    id: 1,
    title: "Açores",
    dir: "acores",
    length: 21,
  },
  {
    id: 2,
    title: "Atlanta",
    dir: "atlanta",
    length: 8,
  },
  {
    id: 3,
    title: "New York City",
    dir: "nyc",
    length: 8,
  },
  {
    id: 4,
    title: "Costa Rica",
    dir: "costa-rica",
    length: 14,
  },
];
