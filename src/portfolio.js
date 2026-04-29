/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false,
};

const seo = {
  title: "Shahzad's Portfolio",
  description:
    "Full Stack Developer and passionate learner building modern web applications.",
  og: {
    title: "Shahzad Portfolio",
    type: "website",
    url: "https://shahzadarksher.github.io/",
  },
};

const greeting = {
  title: "Shahzad",
  logo_name: "shahzad",
  nickname: "shahzad",
  subTitle:
    "Full Stack Developer passionate about building modern web applications and learning new technologies.",
  resumeLink: "/resume",
  portfolio_repository: "https://github.com/shahzadarksher/portfolio",
  githubProfile: "https://github.com/shahzadarksher",
};

// Open Source Information (for GitHub API calls)
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN || "",
  githubUserName: process.env.REACT_APP_GITHUB_USERNAME || "shahzadarksher",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/shahzadarksher",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shahzad",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Email",
    link: "mailto:shahzad@example.com",
    fontAwesomeIcon: "fas fa-envelope",
    backgroundColor: "#bd20e4ff",
  },
];

const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building responsive websites with HTML, CSS, and JavaScript",
        "⚡ Creating interactive user interfaces with React",
        "⚡ Implementing modern CSS frameworks like Tailwind CSS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#c64c14ff" },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building server-side applications",
        "⚡ Working with databases and APIs",
        "⚡ Understanding of backend architecture",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: { color: "#339933" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#0d0553ff" },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Your University Name",
      subtitle: "Bachelor in Computer Science",
      logo_path: "lpu.jpeg",
      alt_name: "Your University",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Studied programming, data structures, algorithms, and more",
        "⚡ Completed courses on web development and software engineering",
      ],
      website_link: "https://youruniversity.edu",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internships",
  description:
    "Full Stack Developer with experience in building web applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [],
    },
    {
      title: "Internships",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Achievements Page
const achievementSection = {
  title: "Achievements",
  subtitle: "Awards and Recognition",
  achievementsCards: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar.svg",
    description:
      "Feel free to reach out to me for any questions or opportunities. I'll be happy to connect with you!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document my technical experiences and share knowledge.",
    link: "https://medium.com/@yourusername",
    avatar_image_path: "blogs_image.svg",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  openSource,
  skills,
  // competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  achievementSection,
  // publicationsHeader,
  // publications,
  contactPageData,
};
