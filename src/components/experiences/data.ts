import { Company } from "./company.model";
import MejesticLogo from "../../assets/images/majestic.png";
import CapgeminiLogo from "../../assets/images/capgemini.png";

import MajesticLogoWebp from "../../assets/images/majestic.webp";
import CapgeminiLogoWebp from "../../assets/images/capgemini.webp";

const companies: Company[] = [
  {
    logo: CapgeminiLogo,
    logoWeb: CapgeminiLogoWebp,
    name: "Capgemini",
    position: "Senior Consultant",
    location: "Gurugram, IN",
    description:
      "Capgemini SE is a French multinational information technology services and consulting company, headquartered in Paris, France.",
    accomplishments: [
      "Experience in system analysis, design, workflow architecture, development, testing and maintenance of web applications.",
      "Worked on REST API to create the services and tested on postman and bind the data in the view.",
      "Used SVN and git for version control and JIRA for defect tracking.",
      "Build a new E-commerce application from scratch including the design and development of the application using SOA services and Angular framework. This application was then used by the business to get their orders and send the orders to production department.",
      "Implemented project using AGILE SCRUM methodology. Involved in daily stand up meetings and sprint meetings.",
      "Developed applications using Angular, HTML5, CSS3, MVC framework and JavaScript.",
      "Collaborated with team to fix various release bugs, UI audits and reviewed code changes of features and bugs to ensure code quality.",
      "Worked on Cluster Migration of the applications from MobaXtrem to Portainer. Created YML files for the deployment process.",
      "Worked on existing application to implement new features using Angular, HTML, CSS and typescript.",
      "Leading a successful team to deliver the high-quality front end solutions.",
    ],
    duration: "Apr 2022 - Present",
  },
  {
    logo: MejesticLogo,
    logoWeb: MajesticLogoWebp,
    name: "Majestic Technosoft Pvt. Ltd.",
    position: "Full Stack Developer",
    location: "Jaipur, IN",
    description:
      "Majestic Technosoft has in house team of specialists with passion for technology and keep an eye on latest web development technology, design and marketing strategies.",
    accomplishments: [
      "Hands on experience in design and development for websites (HTML, CSS, Javascript, Wordpress, Bootstrap) and applications (Ionic framework , Angular JS).",
      "Developed over 20 dynamic websites using Angular and Laravel.",
      "Improved website load time by 25% through optimization techniques.",
      "Worked on building a new POS Application from scratch using Ionic and Angular. Designed the Front End of the application using Ionic, HTML and CSS.",
    ],
    duration: "Jun 2016 - Mar 2022",
  },
];

export default companies;
