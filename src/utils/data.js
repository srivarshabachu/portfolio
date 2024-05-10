import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Websites Developed",
    projects: 5,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Certifications completed",
    projects: 3,
    icon: CiMobile1,
    bg: "#EEC048",
  },
];

export const WhatDoIHelp = [
  "Languages: C , C++ , Python , Java , JavaScript , C#.",
  "Data Structures and Algorithms",
  "Databases: MongoDB, MicroSoft SQL Server",
  "Frameworks: React.js , ASP.NET Core.",
  "Version Control:Git.",
  "Software tools :Visual Studio Code , Visual Studio 2022"
];

export const workExp = [
  {
    place: "Self-Employed, Brisbane",
    tenure: "Aug 2014 - Sep 2016",
    role: "Visual Designer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "New Man Services",
    tenure: "Aug 2014 - Sep 2016",
    role: "UI/UX Designer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "Global Solution",
    tenure: "Aug 2014 - Sep 2016",
    role: "Sr. Product Designer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
];

export const comments = [
  {
    name: "FinTrack",
    post: "Developed using C# , ASP.net MVC and MS SQL server",
    comment:
      "FinTrack is an expense tracking web application utilizing the ASP.NET MVC framework with C#, Syncfusion components, and Microsoft SQL Server. This project serves as a comprehensive solution for efficient expense management.Users can track and manage their expenses seamlessly through an intuitive web interface.",
    img:'./budget.png'
  },
  {
    name: "ID Card generator",
    post: "Developed using python",
    comment:
      "Developed a Python application using PyQRCode and Tkinter to create ID cards with embedded QR codes for attendance tracking. Demonstrates adept Python programming skills and GUI development expertise.Ensured accuracy in QR code generation and user- friendly interface for seamless usability. Integrated with attendance systems for efficient data capture, showcasing practical problem - solving abilities.",
    img: "./id-card.png",
  },
  {
    name: "Agrico",
    post: "Developed using Next.js , TailwindCSS and MongoDb",
    comment:
      "Led the development of Agrico ,Dynamic farmer buyer website using Next.js framework,tailwindcss and MongoDb. Integrated features for farmers to showcase their produce and buyers to browse and purchase agricultural products. Added features like virtual farm tour, farmer profile and nutritional information.",
    img: "./test-tube.png",
  },
  {
    name: "ChatGPT Clone",
    post: "Developed using React framework",
    comment:
      "Developed a ChatGPT clone using JavaScript, HTML, and CSS, integrating the OpenAI API for natural language processing, showcasing proficiency in frontend development andAPI utilization.",
    img: "./chatgpt.png",
  },
  {
    name: "Doodle Jump Game",
    post: "JavaScript",
    comment:
      "Doodle Jump Clone : Built a Doodle Jump clone using ReactJS and CSS as a learning project for JavaScript, demonstrating practical application of frontend development concepts and enhancing proficiency in JavaScript programming",
    img: "./doodle-jump-ninja-350x250.webp",
  },
  {
    name: "Blood-Hub",
    post: "Developed using React framework and MongoDb",
    comment:
      "A Blood-Hub is a web-based platform designed to streamline and enhance the processes associated with blood donation, storage, and distribution. This system provides users with a user-friendly interface to manage various aspects of blood banking.",
    img: "./saline.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
