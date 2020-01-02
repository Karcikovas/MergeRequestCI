import React from "react";
import pkg from "../../../package.json";

const Footer = () => (
  <footer>
    <a target="_blank" href={pkg.repository}>
      GitLab Pull Request Dashboard v{pkg.version}
    </a>
  </footer>
);
export default Footer;
