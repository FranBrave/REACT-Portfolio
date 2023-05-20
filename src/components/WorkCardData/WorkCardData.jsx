import pro1 from "../../assets/pro1.png";
import pro2 from "../../assets/pro2.png";
import angular from "../../assets/angular.png";
import node from "../../assets/node.png";
import sass from "../../assets/sass.png";
import materialui from "../../assets/material.png";
import react from "../../assets/React.png";

const ProjectCardData = [
  {
    imgSrc: pro1,
    title: "Delivery, delicious, Deli Food!",
    text: "Home delivery food App: Cart, PayPal payment option, order tracking, registration form and login/logout.",
    github: "https://github.com/FranBrave/ANGULAR-NODEJS-DeliFood",
    url: "url.com",
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
];

export default ProjectCardData;
