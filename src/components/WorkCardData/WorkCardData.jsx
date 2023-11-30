import pro1 from "../../assets/pro1.png";
import pro2 from "../../assets/pro2.png";
import pro3 from "../../assets/pro3.png";
import angular from "../../assets/angular.png";
import node from "../../assets/node.png";
import sass from "../../assets/sass.png";
import materialui from "../../assets/material.png";
import react from "../../assets/React.png";
import ionic from "../../assets/ionic.svg";

const ProjectCardData = [
  {
    imgSrc: pro1,
    title: "Delivery, delicious, Deli Food!",
    text: "Home delivery food App: Cart, PayPal payment option, order tracking, registration form and login/logout.",
    github: "https://github.com/FranBrave/ANGULAR-NODE-DeliFood",
    url: "https://delifood.onrender.com/",
    logos: [angular, node, sass],
  },
  {
    imgSrc: pro2,
    title: "Fitness App",
    text: "A gym exercise query app features muscle groups and related videos, assisting users in finding and learning specific exercises for their training. ",
    github: "https://github.com/FranBrave/REACT-FitnessApp",
    url: "https://valiente-fitness-app.netlify.app/",
    logos: [react, materialui],
  },
  {
    imgSrc: pro3,
    title: "SmartChat",
    text: "A ChatGPT-based chatbot where you can resolve all your doubts. The language model is Davinci, and being built in Ionic makes it very optimal for use on mobile. ",
    github: "https://github.com/FranBrave/IONIC-NODE-SmartChat",
    url: "https://ionic-smart-chat.vercel.app/",
    logos: [ionic, node],
  },
];

export default ProjectCardData;
