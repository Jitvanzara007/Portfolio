// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import djangologo from './assets/tech_logo/django1.png'
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import kictLogo from './assets/company_logo/kict-logo.png';

// Education Section Logo's
import indusLogo from './assets/education_logo/indus.png';
import tejaslogo from './assets/education_logo/tejas.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import wanderwiseLogo from './assets/work_logo/wanderwise.png';
import wanderwiseLogo2 from './assets/work_logo/wanderwise2.png';
import walletlyLogo from './assets/work_logo/walletlyLogo.png';
import hotellogo from './assets/work_logo/hotel.png'
import weatherlogo from './assets/work_logo/weather.png'


export const SkillsInfo = [{
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'Material UI', logo: materialuiLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Django', logo: djangologo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'Firebase', logo: firebaseLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'JavaScript', logo: javascriptLogo },

        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Compass', logo: mcLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },

        ],
    },
];

export const experiences = [{
    id: 0,
    img: kictLogo,
    role: "Full Stack Developer Intern",
    company: "KICT",
    date: "Dec 2024 - May 2025",
    desc: "Worked as a Full Stack Developer Intern at KICT, where I contributed to both frontend and backend development using modern web technologies. I specialize in Python and Django framework for backend development, creating robust and scalable web applications. My role involves developing responsive user interfaces, implementing RESTful APIs, managing databases, and collaborating with cross-functional teams to deliver high-quality software solutions. This experience has provided me with hands-on exposure to real-world projects and enhanced my skills in full-stack development.",
    skills: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "ReactJS",
        "SQL",
        "Git",
        "RESTful APIs",
    ],
}, ];

export const education = [{
        id: 0,
        img: indusLogo,
        school: "Indus University, Ahemdabad",
        date: "Oct 2021 - Apr 2025",
        grade: "8.5 CGPA",
        desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering from Indus University, Ahmedabad. During my time at Indus, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Indus University has been instrumental in shaping my technical abilities and professional growth.",
        degree: "Bachelor of Technology - B.Tech (Information Technology)",
    },
    {
        id: 1,
        img: tejaslogo,
        school: "M.K. Patel High School",
        date: "June 2020 - May 2021",
        grade: "75%",
        desc: "I completed my class 12 education from MK Patel High School, Bopal, under the GSHSEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
        degree: "GSHSEB(XII)-PCM with Computer Application ",
    },
    {
        id: 2,
        img: tejaslogo,
        school: "Tejas Shikshan Sankul,Bopal",
        date: "June 2018 - March 2019",
        grade: "86%",
        desc: "I completed my class 10 education from Tejas Shikshan Sankul ,Bopal under the GSEB board, where I studied Science with Computer.",
        degree: "GSEB(X)",
    },

];

export const projects = [{
        id: 0,
        title: "WanderWise-AI Travel Planner",
        description: "An intelligent AI-powered travel planning application that helps users create personalized travel itineraries. The app uses advanced algorithms to suggest optimal routes, attractions, and activities based on user preferences, budget, and travel dates. Features include interactive maps, real-time weather updates, and comprehensive travel recommendations to make trip planning effortless and enjoyable.",
        image: wanderwiseLogo2,
        tags: ["React JS", "AI/ML", "API Integration", "FIREBASE", "Gemini API"],
        github: "https://github.com/Jitvanzara007/wandarwise",
        webapp: "https://wandarwise.vercel.app/",
    },
    {
        id: 1,
        title: "Walletly-Expense Manager",
        description: "A comprehensive MERN stack expense management application that helps users track their daily expenses, set budgets, and analyze spending patterns. Features include expense categorization, monthly/yearly reports, budget alerts, and intuitive dashboards. The app provides detailed insights into financial habits and helps users make informed decisions about their spending.",
        image: walletlyLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express", "MERN Stack", ],
        github: "https://github.com/Jitvanzara007/Walletly-ExpenseManager",
        webapp: "https://walletly-expense-manager.vercel.app/",
    },
    {
        id: 2,
        title: "Weather App",
        description: "A responsive weather application built with HTML, CSS, and JavaScript that provides real-time weather information for any location worldwide. Features include current weather conditions, 5-day forecasts, temperature conversions, and location-based weather updates. The app offers a clean, user-friendly interface with accurate weather data from reliable APIs.",
        image: weatherlogo,
        tags: ["HTML", "CSS", "JavaScript", "Weather API", "Responsive Design"],
        github: "https://github.com/Jitvanzara007/weatherapp",
        webapp: "https://weatherapp-beta-liard.vercel.app/",
    },
    {
        id: 3,
        title: "Axis Grand Hotel Website",
        description: "I created a responsive hotel website using HTML, CSS, and JavaScript. The site features a modern design, mobile responsiveness, and showcases hotel amenities and booking information.",
        image: hotellogo,
        tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        github: "https://github.com/Jitvanzara007/Hotel_Website",
        webapp: "https://hotel-website-nu-vert.vercel.app/",
    },
];