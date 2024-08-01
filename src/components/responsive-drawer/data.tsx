import {
  AlternateEmail,
  DataObject,
  Grade,
  Person,
  School,
  Timeline,
} from "@mui/icons-material";
import { DrawerListItem } from "./DrawerListItem.model";

const drawerListItems: DrawerListItem[] = [
  {
    id: "about",
    displayText: "About Me",
    icon: <Person />,
  },
  {
    id: "experiences",
    displayText: "Experiences",
    icon: <Timeline />,
  },
  {
    id: "skills",
    displayText: "Skills",
    icon: <DataObject />,
  },
  {
    id: "certifications",
    displayText: "Certifications",
    icon: <Grade />,
  },
  {
    id: "education",
    displayText: "Education",
    icon: <School />,
  },
  {
    id: "contact-me",
    displayText: "Contact Me",
    icon: <AlternateEmail />,
  },
];

export default drawerListItems;
