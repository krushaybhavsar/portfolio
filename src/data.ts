import { TimelineElementExperience } from "./types";

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
      "On a cross-functional development team of MIT and Harvard engineers, I delivered critical product features on the main React.js site, the Java Spring Boot backend, and PostgreSQL database. I also led standup meetings, discussed the company's next steps at team lead meetings, and helped amass 10,000+ users globally.",
    skillsUsed: ["C++", "Python", "JavaScript"],
    links: [
      {
        icon: "https://www.facebook.com/images/branding/facebooklogo/1x/facebooklogo_color_272x92dp.png",
        previewImage:
          "https://www.facebook.com/images/branding/facebooklogo/1x/facebooklogo_color_272x92dp.png",
        displayText: "Facebook",
        hyperlink: "https://www.facebook.com/",
      },
    ],
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
    skillsUsed: ["C++", "Python", "JavaScript"],
    links: [
      {
        icon: "https://www.facebook.com/images/branding/facebooklogo/1x/facebooklogo_color_272x92dp.png",
        previewImage:
          "https://www.facebook.com/images/branding/facebooklogo/1x/facebooklogo_color_272x92dp.png",
        displayText: "Facebook",
        hyperlink: "https://www.facebook.com/",
      },
    ],
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
    links: [
      {
        icon: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        previewImage:
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        displayText: "Google",
        hyperlink: "https://www.google.com/",
      },
    ],
  },
];