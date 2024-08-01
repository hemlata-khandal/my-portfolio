import { SkillCategory } from "./skill-category.model";
import AngularLogo from "../../assets/images/angular.png";
import HTML5Logo from "../../assets/images/html5.png";
import CSS3Logo from "../../assets/images/css3.png";
import MaterialDesignLogo from "../../assets/images/material-design.png";
import JSLogo from "../../assets/images/javascript.png";
import PHPLogo from "../../assets/images/php.png";
import IonicLogo from "../../assets/images/ionic.png";
import MySqlLogo from "../../assets/images/mysql.png";
import MongoDBLogo from "../../assets/images/mongodb.png";
import FirebaseLogo from "../../assets/images/firebase.png";
import DockerLogo from "../../assets/images/docker.png";
import GitHubLogo from "../../assets/images/github.png";
import TSLogo from "../../assets/images/typescript.png";

import AngularLogoWebp from "../../assets/images/angular.webp";
import HTML5LogoWebp from "../../assets/images/html5.webp";
import CSS3LogoWebp from "../../assets/images/css3.webp";
import MaterialDesignLogoWebp from "../../assets/images/material-design.webp";
import JSLogoWebp from "../../assets/images/javascript.webp";
import PHPLogoWebp from "../../assets/images/php.webp";
import IonicLogoWebp from "../../assets/images/ionic.webp";
import MySqlLogoWebp from "../../assets/images/mysql.webp";
import MongoDBLogoWebp from "../../assets/images/mongodb.webp";
import FirebaseLogoWebp from "../../assets/images/firebase.webp";
import DockerLogoWebp from "../../assets/images/docker.webp";
import GitHubLogoWebp from "../../assets/images/github.webp";
import TSLogoWebp from "../../assets/images/typescript.webp";

const skills: SkillCategory[] = [
  {
    name: "Front-End",
    skills: [
      {
        name: "Angular 9",
        logo: AngularLogo,
        logoWebp: AngularLogoWebp,
      },
      {
        name: "HTML5",
        logo: HTML5Logo,
        logoWebp: HTML5LogoWebp,
      },
      {
        name: "CSS3",
        logo: CSS3Logo,
        logoWebp: CSS3LogoWebp,
      },
      {
        name: "Material Design",
        logo: MaterialDesignLogo,
        logoWebp: MaterialDesignLogoWebp,
      },
    ],
  },
  {
    name: "Back-End",
    skills: [
      {
        name: "Core PHP",
        logo: PHPLogo,
        logoWebp: PHPLogoWebp,
      },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        logo: JSLogo,
        logoWebp: JSLogoWebp,
      },
      {
        name: "TypeScript",
        logo: TSLogo,
        logoWebp: TSLogoWebp,
      },
    ],
  },
  {
    name: "Mobile",
    skills: [
      {
        name: "Ionic 4",
        logo: IonicLogo,
        logoWebp: IonicLogoWebp,
      },
    ],
  },
  {
    name: "Databases",
    skills: [
      {
        name: "MySQL",
        logo: MySqlLogo,
        logoWebp: MySqlLogoWebp,
      },
      {
        name: "MongoDB",
        logo: MongoDBLogo,
        logoWebp: MongoDBLogoWebp,
      },
    ],
  },
  {
    name: "Cloud",
    skills: [
      {
        name: "Firebase",
        logo: FirebaseLogo,
        logoWebp: FirebaseLogoWebp,
      },
    ],
  },
  {
    name: "DevOps Tools",
    skills: [
      {
        name: "Docker",
        logo: DockerLogo,
        logoWebp: DockerLogoWebp,
      },
    ],
  },
  {
    name: "Other",
    skills: [
      {
        name: "Github",
        logo: GitHubLogo,
        logoWebp: GitHubLogoWebp,
      },
    ],
  },
];

export default skills;
