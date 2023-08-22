import { ReactNode } from "react";

import classes from "./Container.module.css";

interface Props {
  children: ReactNode;
  size: "default-size" | "full-size" | "half-size"; // Specify the allowed size values
}

export default function DefaultContainer({ children, size }: Props) {
  const containerClassName = (() => {
    switch (size) {
      case "default-size":
        return classes["default-container-size"];
      case "full-size":
        return classes["full-container-size"];
      case "half-size":
        return classes["half-container-size"];
      default:
        return "";
    }
  })();

  return (
    <section>
      <div className={containerClassName}>{children}</div>
    </section>
  );
}
