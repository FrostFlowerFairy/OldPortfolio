/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hi",
  title2: " I'm Tyrese Sòng (Sòng Nán Hǔ)",
  logo_name: "Tyrese Song ( Song Nan Hu )",
  nickname: "Tyrese",
  full_name: "Tyrese Sòng (Sòng Nán Hǔ)",
  subTitle1: "Full Stack Developer.",
  subTitle2: "Life Long Learner.",
  subTitle: "Full Stack Developer, Life Long Learner.",
  resumeLink: "/assets/FullStackDeveloperResumeOfTyreseSong.pdf",
  mail: "mailto:bowenmanuel48@gmail.com@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/TyreseSong",
  // linkedin: "https://www.linkedin.com/in/TyreseSong",
  gmail: "bowenmanuel48@gmail.com@gmail.com",
  // twitter: "https://twitter.com/TyreseSong",
};

const skills = {
  data: [
    {
      _id: "354c54b7-ffd8-40f1-972f-1d006733df25",
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing highly interactive user interfaces and backend for web applications",
        "⚡ Building fast and responsive website front end using React, Vue and Angular",
        "⚡ Creating application backend in Node, Express, MongoDB and Rest API",
        "⚡ Integration of third party services such as Firebase, Vercel etc.",
        "⚡ Make SEO(search engine optimized) friendly websites",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:next-dot-js",
          style: {
            color: "#ff00ff",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#593D88",
          },
        },
        {
          skillName: "Less",
          fontAwesomeClassname: "simple-icons:less",
          style: {
            color: "#f653d7",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#398644",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#dd0031",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vue-dot-js",
          style: {
            color: "#1e4927",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "gray",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:uikit",
          style: {
            color: "#007FFF",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769ad",
          },
        },
        {
          skillName: "Framer Motion",
          fontAwesomeClassname: "logos:framer",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Styled Components",
          fontAwesomeClassname: "vscode-icons:file-type-styled",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary-icon",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Stripe",
          fontAwesomeClassname: "logos:stripe",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Elasticsearch",
          fontAwesomeClassname: "simple-icons:elasticsearch",
          style: {
            color: "#35ff94",
          },
        },
        {
          skillName: "Solr",
          fontAwesomeClassname: "simple-icons:apachesolr",
          style: {
            color: "#ffff39",
          },
        },
      ],
    },
    {
      _id: "c026fe64-1542-42b0-84ab-9311840c169f",
      title: "Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud Platform",
          fontAwesomeClassname: "skill-icons:gcp-dark",
          style: {
            backgroundColor: "transparent",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "skill-icons:vercel-light",
          style: {
            color: "gray",
            fill: "gray",
            // backgroundColor: "white",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
            width: "1em",
            height: "1em",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
            width: "1em",
            height: "1em",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "The University of Hong Kong (HKU), Hong Kong",
      subtitle: "Bachelor's in Computer Science",
      logo_path: "hku-logo.png",
      alt_name: "The University of Hong Kong (HKU)",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have taken varity of courses related to Computer Programming and Data Structures, Algorithms, Human-Computer Interaction and User Experience Design, Software Engineering and Development Methodologies, and etc.",
        "⚡ Apart from this, I have done courses on Database Systems and Data Management, Computer Networks and Distributed Systems, Artificial Intelligence and Machine Leaning",
      ],
      website_link: "https://hku.hk/",
    },
    {
      title: "The University of Hong Kong (HKU), Hong Kong",
      subtitle: "Certificate in Full Stack Web Development",
      logo_path: "hku-logo.png",
      alt_name: "The University of Hong Kong (HKU)",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ HTML, CSS, and JavaScript",
        "⚡ Front-end web development frameworks such as React and Angular",
        "⚡ Back-end web development frameworks such as Node.js and Express",
        "⚡ Database management using MongoDB and MySQL",
        "⚡ Server-side scripting using PHP and Python",
        "⚡ Web application security and authentication",
        "⚡ Agile software development methodologies",
        "⚡ Project management and collaboration tools",
      ],
      website_link: "https://hku.hk/",
    },
    {
      title: "The University of Hong Kong (HKU), Hong Kong",
      subtitle: "Master's in Computer Science",
      logo_path: "hku-logo.png",
      alt_name: "The University of Hong Kong (HKU)",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Advanced Algorithms and Data Structures, Security and Cryptography, etc.",
        "⚡ Apart from this, I have done courses on Programming Languages and Compilers, Cloud Computing, Big Data, IoT",
      ],
      website_link: "https://hku.hk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Frontend Developer Capstone",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/f80912b58e3afcfa49e6116210a2c9da",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Advanced React",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/877acd7eaf9dd532a2cb5b103576967e",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "React Basics",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/29c75a387fcaf2f1e2403f73473092b2",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Programming with JavaScript",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/cb44f1ee2db3f50b83a56cbae15fcc74",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "HTML and CSS in depth",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/667de02731a480b76b5300c6612d174d",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Christian Hur",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/97WF8EZ4Y2YD",
      alt_name: "Coursera",
      color_code: "#0056d2",
    },
    {
      title: "ML and AI in GCP",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2862832",
      alt_name: "GCP",
      color_code: "#2fa9508a",
    },
    {
      title: "Foundational Infrastructure in GCP",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2653409",
      alt_name: "GCP",
      color_code: "#4087f08a",
    },
    {
      title: "Networking & Security in GCP",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2510430",
      alt_name: "GCP",
      color_code: "#eb40308a",
    },
    {
      title: "Cloud Computing Fundamentals in GCP",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2469792",
      alt_name: "GCP",
      color_code: "#fabd008a",
    },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "Work and Apprenticeship",
  description:
    "I've over 2 years of experience as a full stack developer. I've worked on building products for multiple stakeholders in The University of Hong Kong (HKU) as well as my personal projects.",
  header_image_path: "experience.svg",
  sections: {
    title: "Work Experience",
    experiences: [
      {
        title: "Full Stack Developer Intern",
        company: "The University of Hong Kong (HKU)",
        company_url: "https://hku.hk/",
        logo_path: "hku-logo.png",
        alt_name: "The University of Hong Kong (HKU)",
        duration: "(May, 2021 - March, 2022)",
        location: "Remote",
        description:
          "<li>I was responsible for developing and maintaining 3 web applications.</li><br>" +
          "<li>I collaborated with a team of developers to design and implement new features, resulting in a 20% increase in user engagement.</li><br>" +
          "<li>I also optimized the performance of existing applications, reducing page load times by 30%.</li><br>" +
          "<li>In addition, I deployed a fresh authentication mechanism, leading to a 50% decrease in login inaccuracies.</li><br>" +
          "<li>I was also responsible for conducting code reviews and providing feedback to other developers, resulting in a 15% improvement in code quality.</li><br>" +
          "<li>Furthermore, I developed a new reporting system, allowing stakeholders to access real-time data, resulting in a 40% reduction in report generation time.</li>",
        color: "#0071C5",
      },
      {
        title: "Full Stack Developer",
        company: "The University of Hong Kong (HKU)",
        company_url: "https://hku.hk/",
        logo_path: "hku-logo.png",
        alt_name: "The University of Hong Kong (HKU)",
        duration: "(April, 2021 - February, 2023)",
        location: "Remote",
        description:
          "<li>I led a team of 5 developers to build a web application that increased user engagement by 30% and reduced page load time by 50%.</li><br>" +
          "<li>I agile practices to optimize the development workflow, leading to a 20% in project delivery rate.</li><br>" +
          "<li>In addition, I developed a custom CMS that allowed content editors to update the website without any coding knowledge, decreasing the amount of time dedicated to content updates by 70%.</li><br>" +
          "<li>I optimized the website's SEO, resulting in a 25% increase in organic traffic and a 15% increase in conversion rates.</li><br>" +
          "<li>Furthermore, I implemented a responsive design that improved the user experience on mobile devices, resulting in a 40% increase in mobile traffic.</li><br>" +
          "<li>I also integrated a chatbot that handled over 500 customer inquiries per day, dismising the workload of customer service representatives by 30%.</li>",
        color: "#4285F4",
      },
    ],
  },
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create MERN and MEAN Stack Projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "project-0",
      name: "Crafty Commerce",
      url: "https://crafty-commerce.vercel.app/",
      repoUrl: "https://github.com/TyreseSong/crafty-commerce",
      description:
        "Crafty Commerce is a full stack e-commerce web application that allows you to purchase different categories of product online. You can apply filters accordingly and find your favourite products in crafty commerce. You can pay with debit/credit cards and in just few click your product will be delivered.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Stripe",
          iconifyClass: "logos:stripe",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        {
          name: "Cloudinary",
          iconifyClass: "logos:cloudinary-icon",
        },
        {
          name: "Framer Motion",
          iconifyClass: "logos:framer",
        },
      ],
    },
    {
      id: "project-1",
      name: "Tikkaway",
      url: "https://restaurant-app-bceb0.web.app/",
      repoUrl: "https://github.com/TyreseSong/tikkaway",
      description:
        "Tikkaway is a full stack restaurant web application that allows you to order food online. It has wide variety of categories on the menu like Chicken, Curry, Rice, Fish, Fruits, Icecreams, Soft Drinks etc.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        {
          name: "Framer Motion",
          iconifyClass: "logos:framer",
        },
      ],
    },
    {
      id: "project-2",
      name: "MEAN Agency",
      url: "",
      repoUrl: "https://github.com/TyreseSong/mean-agency",
      description:
        "Mean Agency is a full stack service provider web application that allows you to provide services to other companies.",
      languages: [
        {
          name: "Angular",
          iconifyClass: "logos:angular-icon",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "Handlebars",
          iconifyClass: "vscode-icons:file-type-handlebars",
        },
      ],
    },
    {
      id: "project-3",
      name: "Countdown Timer",
      url: "https://countdown-timer-TyreseSong.vercel.app/",
      repoUrl: "https://github.com/TyreseSong/countdown-timer",
      description: "A Simple React App for countdown to new year using hooks.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "project-4",
      name: "Portfolio",
      url: "",
      repoUrl: "https://github.com/TyreseSong/full-stack-portfolio",
      description: "You are watching it right now 😉.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React Reveal",
          iconifyClass: "simple-icons:scrollreveal",
        },
        {
          name: "Styled Components",
          iconifyClass: "vscode-icons:file-type-styled",
        },
      ],
    },
    {
      id: "project-5",
      name: "SpaceX Capsules",
      url: "https://spacex-capsules.vercel.app/",
      repoUrl: "https://github.com/TyreseSong/spacex-capsules",
      description:
        "A React application which shows you the filtered spaceX capsules data.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "portfolioProfileImage.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
