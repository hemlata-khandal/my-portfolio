import React, { ReactNode } from "react";
import { Link, Typography } from "@mui/material";

interface SocialLinkProps {
  href: string;
  startIcon: ReactNode;
  text: string;
}

const SocialLink: React.FunctionComponent<SocialLinkProps> = (props) => {
  const { href, startIcon, text } = props;
  return (
    <Link
      target="_blank"
      href={href}
      display="flex"
      color="#fff"
      rel="noreferrer"
    >
      {startIcon}
      &nbsp;
      <Typography sx={{ textDecoration: "none" }}>{text}</Typography>
    </Link>
  );
};

export default SocialLink;
