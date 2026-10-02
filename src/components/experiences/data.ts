import { Company } from "./company.model";
import MejesticLogo from "../../assets/images/majestic.png";
import CapgeminiLogo from "../../assets/images/capgemini.png";
import InfosysLogo from "../../assets/images/infosys.png";

import MajesticLogoWebp from "../../assets/images/majestic.webp";
import CapgeminiLogoWebp from "../../assets/images/capgemini.webp";
import InfosysLogoWebp from "../../assets/images/infosys.webp";

const companies: Company[] = [
  {
    logo: InfosysLogo,
    logoWeb: InfosysLogoWebp,
    name: "Infosys Limited",
    position: "Technology Lead",
    location: "Bengaluru, IN",
    description:
      "Infosys Limited is a global leader in next-generation digital services and consulting, enabling clients across industries to navigate their digital transformation.",
    accomplishments: [
      "Led the Telstra AN25->AN26 re-architecture project, driving the High-Level Design (HLD) and technical direction for migrating a monolithic application to a micro-frontend architecture.",
      "Led a team of 8 engineers across 5+ cross-functional teams, coordinating delivery, code reviews and technical mentorship.",
      "Architected the monolith-to-micro-frontend migration using Webpack 5 Module Federation, enabling independent deployment and scaling of frontend modules.",
      "Built modern dashboards combining Angular 17+ with Signals and React/Redux, using AG-Grid and D3.js for high-performance data visualization at scale.",
      "Designed and integrated GraphQL and TigerGraph with Spring Boot services to power graph-based data queries across the platform.",
      "Set up AWS S3 + CloudFront hosting with CI/CD pipelines for fast, reliable frontend deployments.",
      "Introduced an observability framework and integrated Knowi BI for actionable reporting and monitoring.",
      "Established a testing strategy using Jest, React Testing Library and Playwright, improving release confidence.",
      "Scaled the architecture to support 1000x growth in data volume and concurrent usage.",
    ],
    duration: "Aug 2024 - Aug 2026",
  },
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
    duration: "Apr 2022 - Aug 2024",
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
