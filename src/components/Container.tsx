import { ReactNode } from "react";

import classes from "./style/Container.module.scss";

interface Props {
  children: ReactNode;
  textPosition?: "middle" | "end"; // Specify the textpostition, DEFAULT position of text is left
  size?: "full-size" | "small-size"; // Specify the allowed size values
  borderlineStyle?: "none";
}

export default function Container({
  children,
  textPosition,
  size,
  borderlineStyle,
}: Props) {
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

  const borderLineStyle = (() => {
    if (borderlineStyle === "none") {
      return classes["container-no-line"];
    } else {
      return classes["borderline-style"];
    }
  })();

  return (
    <>
      <div
        className={`${containerSizeName} ${borderLineStyle} ${classes["container-box"]}`}
      >
        <div className={`${textPositionName}`}>{children}</div>
      </div>
    </>
  );
}
