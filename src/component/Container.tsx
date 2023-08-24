import { ReactNode } from "react";

import classes from "./Container.module.scss";

interface Props {
  children: ReactNode;
  textPosition?: "middle" | "end";
  size?: "full-size" | "small-size"; // Specify the allowed size values
}

export default function Container({ children, textPosition, size }: Props) {
  const containerSizeName = (() => {
    switch (size) {
      case "full-size":
        return classes["full-container-size"];
      case "small-size":
        return classes["half-container-size"];
      default:
        return classes["default-container-size"];
    }
  })();

  const textPositionName = (() => {
    switch (textPosition) {
      case "middle":
        return classes["text-position-middle"];
      case "end":
        return classes["text-position-end"];
    }
  })();

  return (
    <section>
      <div className={`${containerSizeName}`}>
        <div className={`${textPositionName}`}>{children}</div>
      </div>
    </section>
  );
}
