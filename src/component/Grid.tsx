import { ReactNode } from "react";

import classes from "./style/Grid.module.scss";

interface GridProps {
  children: ReactNode;
  width?: "small" | "default";
  background?: boolean;
  bordered?: boolean;
}

interface ElementProps {
  children: ReactNode;
  background?: boolean;
  bordered?: boolean;
}

export function Grid({
  children,
  width = "default",
  background = false,
  bordered = false,
}: GridProps) {
  const containerSize = width === "small" ? "small" : "default";

  return (
    <section>
      <div
        className={`${classes[`grid-container-${containerSize}`]} ${
          background ? `${classes.background}` : ""
        } ${bordered ? `${classes["border-line"]}` : ""}`}
      >
        {children}
      </div>
    </section>
  );
}

export function Element({
  children,
  background = false,
  bordered = false,
}: ElementProps) {
  return (
    <section>
      <div
        className={`${background ? `${classes.background}` : ""} ${
          bordered ? `${classes["border-line"]}` : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
}

Grid.Element = Element;
