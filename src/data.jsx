import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';
import Work7 from './assets/project-7.jpg';
import Work8 from './assets/project-8.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Abdul',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Aziz',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '33 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indonesian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'DKI Jakarta',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'dev.abdaziz@outlook.com',
  },
];

export const stats = [
  {
    id: 1,
    no: '9+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '8+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '6+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '13+',
    title: ' Certifications',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2016 - PRESENT',
    title: 'System Engineer <span> PT. Ivatama Teknologi </span> ',
    desc: 'Application analyst and Database Design, Functional Specification And Technical Documentation, Deployment and Implementation Preparation',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2014 - 2016',
    title: 'K2 and Sharepoint Developer <span> PT. Prima Integrasi Solusindo </span>',
    desc: 'Application analyst and Database Design, Functional Specification And Technical Documentation, Deployment and Implementation Preparation',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2014',
    title: 'Junior Programmer <span> PT. Victorindo Abadi Solusindo </span>',
    desc: 'Application analyst and Database Design',
  },
  
  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2011 - 2013',
    title: 'Freelancer <span> PT. Kompas Gramedia </span>',
    desc: 'Interviewer and Asistent Reasearch in Litbang Harian Kompas',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012',
    title: 'Computer Degree <span> Budi Luhur University </span>',
    desc: 'Faculty of information technology - Information Systems Department',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '25',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Catch!',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Catch!',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'PT. Asuransi Adira Dinamika ',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C#',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Document Management System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Document Management System',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'IDX (Indonesia Stock Exchange)',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C# Sharepoint',
      },
      
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Medical Panel',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Medical Panel',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'PT. Prudential Life Assurance (Prudential Indonesia)',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C# and Sharepoint',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'FSMGMT, Attendance and BDS Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'FSMGMT and Attendance',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'PT. Bank Central Asia',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C++, java, and C#',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'ECIC',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'ECIC (Electronic for Capital Investment Committee)',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'PT. Bank CIMB Niaga',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C# and K2',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'FSMGMT and Attendance V2',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'FSMGMT and Attendance V2',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'PT. Bank Central Asia',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C++ and C#',
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: 'BERTA',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Fingerprint Integration with BERTA Services',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'PT. Bank Central Asia',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C#',
      },
    ],
  },

  {
    id: 8,
    img: Work8,
    title: 'Biometric Password',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Biometric Password',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'PT. Bank Tabungan Negara',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C++, .Net Core, and C#',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
