import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ to, label, className, type }) {
  return (
    <li>
      <Link
        className={`${className} ${type === "button" && "btn-header"}`}
        to={to}
      >
        {label}
      </Link>
    </li>
  );
}
