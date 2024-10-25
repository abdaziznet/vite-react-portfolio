import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaBlogger,
  FaBlog,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpg";
import Work4 from "./assets/project-4.jpg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";
import Work7 from "./assets/project-7.jpg";
import Work8 from "./assets/project-8.jpg";
import Work9 from "./assets/project-9.jpg";
import Work10 from "./assets/project-10.jpg";
import Work11 from "./assets/project-11.jpg";
import Work12 from "./assets/project-12.jpg";
import Work13 from "./assets/project-7.jpg";
import Work14 from "./assets/project-14.jpg";
import Work15 from "./assets/project-15.jpg";
import Work16 from "./assets/project-16.jpg";
import Work17 from "./assets/project-17.jpg";
import Work18 from "./assets/project-7.jpg";
import Work19 from "./assets/project-19.jpg";
import Work20 from "./assets/project-20.jpg";
import Work21 from "./assets/project-21.jpg";
import Work22 from "./assets/project-22.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

import CertMTA from "./assets/img-cert-MTA.png";
import CertKAFKA from "./assets/img-cert-KAFKA.png";
import CertDicoding from "./assets/img-cert-dicoding.png";
import CertK2 from "./assets/K2_Five_Core_Badge.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
  {
    id: 5,
    name: "Blog",
    icon: <FaBlog className="nav__icon" />,
    path: "http://blog.abdaziz.net",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Abdul",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Aziz",
  },

  {
    id: 3,
    title: "Age : ",
    description: "34 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indonesian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "DKI Jakarta",
  },

  {
    id: 7,
    title: "Email : ",
    description: "dev.abdaziz@outlook.com",
  },
  {
    id: 8,
    title: "Blog : ",
    description: "blog.abdaziz.net",
  },
];

export const stats = [
  {
    id: 1,
    no: "9+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "8+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "6+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "13+",
    title: " Certifications",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2016 - PRESENT",
    title: "System Engineer <span> PT. Ivatama Teknologi </span> ",
    desc: "Application analyst and Database Design, Functional Specification And Technical Documentation, Deployment and Implementation Preparation",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2014 - 2016",
    title:
      "K2 and Sharepoint Developer <span> PT. Prima Integrasi Solusindo </span>",
    desc: "Application analyst and Database Design, Functional Specification And Technical Documentation, Deployment and Implementation Preparation",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2013 - 2014",
    title: "Junior Programmer <span> PT. Victorindo Abadi Solusindo </span>",
    desc: "Application analyst and Database Design",
  },

  {
    id: 4,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2011 - 2013",
    title: "Freelancer <span> PT. Kompas Gramedia </span>",
    desc: "Interviewer and Asistent Reasearch in Litbang Harian Kompas",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012",
    title: "Computer Degree <span> Budi Luhur University </span>",
    desc: "Faculty of information technology - Information Systems Department",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "25",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "89",
  },

  {
    id: 3,
    title: "Css",
    percentage: "70",
  },

  {
    id: 4,
    title: "Php",
    percentage: "66",
  },

  {
    id: 5,
    title: "Wordpress",
    percentage: "95",
  },

  {
    id: 6,
    title: "Jquery",
    percentage: "50",
  },

  {
    id: 7,
    title: "Angular",
    percentage: "65",
  },

  {
    id: 8,
    title: "React",
    percentage: "45",
  },
];

export const certificate = [
  {
    id: 1,
    img: CertK2,
    title: "K2 Five Core",
    desc: "Earners of the K2 Five Core: Using K2 Apps to quickly create applications, Building simple to intermediate level applications in K2 with SmartObjects, SmartForms, and Workflows, Standard and custom reporting, Day to day administration.",
    date: "2018",
    url: "https://www.credential.net/c849c2a0-6768-4b22-8013-9b7d3907bf6f?username=abdaziz#gs.487dhr",
  },
  {
    id: 2,
    img: CertK2,
    title: "K2 blackpearl Core",
    desc: "Earners of the K2 blackpearl Core: Create process-driven applications, Enterprise-capable workflow engine, Powerful task management, Powerful task management, Extendible and customizable, Extensive integration capabilities.",
    date: "2018",
    url: "https://www.credential.net/a1ee9b9e-971f-4574-8f61-8c598b137b85?username=abdaziz#gs.4flgbe",
  },
  {
    id: 3,
    img: CertDicoding,
    title: "Cloud Practitioner Essentials (Learn AWS Cloud Basics)",
    desc: "Cloud Practitioner Essentials (AWS Cloud Basic Learning) Certification. Materials studied: Introduction to Amazon Web Services, Computing in the Cloud, Global Infrastructure and Reliability, Networking, Storage and Databases, Security, Monitoring and Analytics, Pricing and Support, Migration and Innovation, Cloud Travel, AWS Certified Cloud Practitioner Fundamentals.",
    date: "2022",
    url: "https://www.dicoding.com/certificates/6RPNDWEL4Z2M",
  },
  {
    id: 4,
    img: CertDicoding,
    title: "Learn Javascript Programming Basics",
    desc: "JavaScript Programming Basic Learning Certification. Materials studied: Introduction to JavaScript, JavaScript Fundamentals, Data Structure, Function, Object-Oriented Programming, Functional Programming, Setup Environment, Module, Error Handling, Concurrency, Node Package Manager, JavaScript Testing.",
    date: "2022",
    url: "https://www.dicoding.com/certificates/GRX5L979VP0M",
  },
  {
    id: 5,
    img: CertDicoding,
    title: "Learn to Make Back-End Apps for Beginners",
    desc: "Certification of Learning to Create Back-End Applications for Beginners. Materials studied: Introduction to Back-End, Node.js Basics, Building Web Service using Node.js, Deploy Web Service, Consuming and Testing RESTful API using Postman, Submission.",
    date: "2022",
    url: "https://www.dicoding.com/certificates/07Z6RV9NRPQR",
  },
  {
    id: 6,
    img: CertDicoding,
    title: "Learn Devops Basics",
    desc: "DevOps Fundamentals Learning Certification. Materials studied: Introduction to DevOps, DevOps Principles, CALMS Framework, DevOps Practices, DevOps Implementation Stories.",
    date: "2022",
    url: "https://www.dicoding.com/certificates/2VX316KDNZYQ",
  },
  {
    id: 7,
    img: CertDicoding,
    title: "Learn Google Cloud Basics",
    desc: "Google cloud Basics Certification. Materials studied: Cloud Computing, Servers and Networks, Storage and Databases, Security and Compliance, Cost and Billing, Increasing Business Value.",
    date: "2022",
    url: "https://www.dicoding.com/certificates/JMZVG1MJJZN9",
  },
  {
    id: 8,
    img: CertMTA,
    title: "MTA: Software Development Fundamentals",
    desc: "Earners of the MTA: Software Development Fundamentals certification have demonstrated core software development skills. The MTA program provides an appropriate entry point to a future career in technology.",
    date: "2022",
    url: "https://www.credly.com/badges/1e6b4e79-5494-4fe5-91ed-00be2bde6292?source=linked_in_profile",
  },

  {
    id: 9,
    img: CertDicoding,
    title: "Learn Machine Learning for Beginners",
    desc: "The class is intended for beginners who want to start their career in the field of machine learning by referring to industry competency standards. At the end of the class, students can learn basic material and Machine Learning algorithms, and be able to implement them in creating Machine Learning models to process data. Materials studied: Introduction to Data, Supervised and Unsupervised Learning, Support Vector Machine (SVM), Machine Learning Basics, Neural Network, TensorFlow",
    date: "2023",
    url: "https://www.dicoding.com/certificates/81P2VV21OPOY",
  },
  {
    id: 10,
    img: CertDicoding,
    title: "Getting Started Programming in Python",
    desc: "The class is intended for beginners who want to learn the basics of Python programming with reference to industry standards. Materials studied: Getting to know Python, Interacting with Data, Expressions, Control Flow, Matrix, Subprogram, Object-Oriented Programming (OOP), Style Guide in Python, Unit Testing, Popular Libraries in Python.",
    date: "2023",
    url: "https://www.dicoding.com/certificates/GRX5QLRKRZ0M",
  },
  {
    id: 11,
    img: CertDicoding,
    title: "Learn Basic Data Visualization",
    desc: "The class is intended for beginners who want to start their careers in the field of data processing by referring to industry competency standards. At the end of the class, students can create an effective data visualization using Google Sheets according to industry best practice techniques, thereby increasing their value in a career as a Software Developer.",
    date: "2023",
    url: "https://www.dicoding.com/certificates/1RXY1OE83PVM",
  },
  {
    id: 12,
    img: CertDicoding,
    title: "Learn Solid Programming Principles",
    desc: "Learning Solid Programming Principles. Materials studied: Object-Oriented Programming (OOP), Relations on OOP, Software Design Principle, S.O.L.I.D.",
    date: "2023",
    url: "https://www.dicoding.com/certificates/N9ZO4QQY6ZG5",
  },
  {
    id: 13,
    img: CertDicoding,
    title: "Get Started Programming With Java",
    desc: "Get Started Programming With Java. Materials studied: Introduction to Java, Basic Java, Control Flow, Collection Type, Object-Oriented Programming (OOP), Common Class, Case study.",
    date: "2023",
    url: "https://www.dicoding.com/certificates/NVP79255RZR0",
  },
  {
    id: 14,
    img: CertDicoding,
    title: "Learn Basic Structured Query Language (SQL)",
    desc: "Learn Basic Structured Query Language (SQL). Materials studied: Introduction to Data and Databases, Understand the concept of Database Management Systems (DMS), Introduction to Structured Query Language, Understand basic queries that are often used in SQL at a basic stage.",
    date: "2023",
    url: "https://www.dicoding.com/certificates/1RXY6E469ZVM",
  },
  {
    id: 15,
    img: CertDicoding,
    title: "Learn Computer Networks for Beginners",
    desc: "Learning Computer Networks for Beginners. Materials studied: Network Model, IP Address, Domain Name System, Network Security, Network Services on AWS, and Submission.",
    date: "2023",
    url: "https://www.dicoding.com/certificates/MEPJK2WV6X3V",
  },
  {
    id: 16,
    img: CertKAFKA,
    title: "Confluent Fundamentals Accreditation",
    desc: "Recipient of Confluent Fundamentals Accreditation: Learn the concepts of event streaming and how Kafka enables real-time data processing and event-driven architectures. Materials studied: Kafka Architecture, Kafka Topics and Partitions, Producers and Consumers, Kafka Connect, Kafka Streams.",
    date: "2023",
    url: "https://www.credential.net/f53d2b09-72dd-4394-9087-11c3674e2308",
  },
  {
    id: 17,
    img: CertDicoding,
    title: "Getting Started with Dart Programming",
    desc: "The class is intended for beginners who want to learn the basics of the Dart programming language with reference to industry standards. Materials studied: Introduction, Your First Dart Program, Dart Fundamentals, Control Flow, Collection, Object Oriented Programming, Functional Styles, Dart Type System, Dart Futures, Effective Dart.",
    date: "2024",
    url: "https://www.dicoding.com/certificates/53XEO2G10ZRN",
  },
  {
    id: 18,
    img: CertDicoding,
    title: "Learn to Create Flutter Apps for Beginners",
    desc: "This class is intended for beginners who want to start their career in Flutter Development with reference to industry standards. At the end of the class, students can create Flutter applications by utilizing widgets to organize their layouts. Materials studied: Introduction to Flutter, Flutter Basics, Introduction to Widgets, Deployment, and Submission.",
    date: "2024",
    url: "https://www.dicoding.com/certificates/81P24NEWNZOY",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Catch!",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Catch!",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Asuransi Adira Dinamika ",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C#",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Document Management System",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Document Management System",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "IDX (Indonesia Stock Exchange)",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C# Sharepoint",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Medical Panel",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Medical Panel",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Prudential Life Assurance (Prudential Indonesia)",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C# and Sharepoint",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Attendance Phase: 2",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Enhancement Attendance integration with bioagent",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Central Asia",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C++",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "FSMGMT Phase: 2",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Enhancement Fingerprint Management integration with device finger",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Central Asia",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C++",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "BDS Web Simulator",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "BDS Web Simulator integration with bioagent",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Central Asia",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Java",
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: "Bioagent Phase:2",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Bioagent is Middleware Background Service integration with device finger",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Central Asia",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C++",
      },
    ],
  },

  {
    id: 8,
    img: Work8,
    title: "Finger Web Service",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Finger Web Service using WWS (Windows Web Service) API",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Central Asia",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C++, and C#",
      },
    ],
  },

  {
    id: 9,
    img: Work9,
    title: "Finger Web Admin",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Finger Web Administrator",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Central Asia",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C#, javascript, Bootstrap and JQuery",
      },
    ],
  },

  {
    id: 10,
    img: Work10,
    title: "ECIC",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "ECIC (Electronic for Capital Investment Committee)",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank CIMB Niaga",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C# and K2",
      },
    ],
  },

  {
    id: 11,
    img: Work11,
    title: "Attendance Phase: 3",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Enhancement Attendance integration with bioagent",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Central Asia",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C++",
      },
    ],
  },

  {
    id: 12,
    img: Work12,
    title: "FSMGMT Phase: 3",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Enhancement Finger Management integration with device finger",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Central Asia",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C++",
      },
    ],
  },

  {
    id: 13,
    img: Work13,
    title: "Bioagent Phase: 3",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Enhancement Bioagent integration with device finger",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Central Asia",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C++",
      },
    ],
  },

  {
    id: 14,
    img: Work14,
    title: "Finger Restfull API",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Finger Restfull API",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Central Asia",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C#",
      },
    ],
  },

  {
    id: 15,
    img: Work15,
    title: "BERTA",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Fingerprint Integration with BERTA Services",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Central Asia",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C#",
      },
    ],
  },

  {
    id: 16,
    img: Work16,
    title: "FSMGMT Biometric Password",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Fingerprint Management for Biometric Password integration with device finger",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Tabungan Negara",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C++",
      },
    ],
  },

  {
    id: 17,
    img: Work17,
    title: "BDS Client Simulator Biometric Password",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "BDS Client Simulator for Biometric Password integration with bioagent",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Tabungan Negara",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Vb 6, and C++",
      },
    ],
  },

  {
    id: 18,
    img: Work18,
    title: "Bioagent Biometric Password",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Bioagent for Biometric Password integration with device finger",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Tabungan Negara",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C++",
      },
    ],
  },

  {
    id: 19,
    img: Work19,
    title: "BDS Web Simulator Biometric Password",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "BDS Web Simulator for Biometric Password integration with bioagent",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Tabungan Negara",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: ".NET Core",
      },
    ],
  },

  {
    id: 20,
    img: Work20,
    title: "Biometric API Windows Service",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Biometric API Windows Service for Biometric Password integration with Library",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Tabungan Negara",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: ".NET Core, and C++",
      },
    ],
  },

  {
    id: 21,
    img: Work21,
    title: "Finger Restfull API Biometric Password",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Finger Restfull API for Biometric Password",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Tabungan Negara",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "C#",
      },
    ],
  },

  {
    id: 22,
    img: Work22,
    title: "Fingerprint System Reparation Tools",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Fingerprint System Reparation Tools for Biometric reparation images",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "PT. Bank Central Asia",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React Js, C++, C#",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
