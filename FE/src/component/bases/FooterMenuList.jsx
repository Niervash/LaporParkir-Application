import React from "react";

const FooterMenuList = ({ text = { title: "" } }) => {
  return (
    <li>
      <a href="#" className="hover:underline me-4 md:me-6">
        {text.title}
      </a>
    </li>
  );
};

export default FooterMenuList;
