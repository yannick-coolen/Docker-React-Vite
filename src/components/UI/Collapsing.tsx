import { ReactNode, useState } from "react";
import Button from "./Button";

import classes from "../style/Collapsing.module.scss";

interface CollapseProps {
  children: ReactNode;
  button?: boolean;
  closingButton?: boolean;
  bordered?:
    | "top-only"
    | "right-only"
    | "bottom-only"
    | "left-only"
    | "default"
    | "none";
}

export default function Collapsing({
  children,
  button = false,
  bordered = "default",
}: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  const borderClassName = classes[`border-edge-line-${bordered}`];

  const toggleCollapsingHandle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div style={{ margin: "1rem" }}>
        {button && (
          <Button
            content={isOpen ? "Close" : "Open"}
            width={"default"}
            onClick={toggleCollapsingHandle}
          />
        )}
        {isOpen && <div className={borderClassName}>{children}</div>}
      </div>
    </>
  );
}
