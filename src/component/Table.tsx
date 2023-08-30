import { ReactNode } from "react";

import classes from "./style/Table.module.scss";

type textPosition = "start" | "middle" | "end";

interface TableProps {
  bordered?: boolean;
  children?: ReactNode;
  textPosition?: textPosition;
  whitespace?: number;
}

interface TableHeadProps {
  children?: ReactNode;
}

interface TableBodyProps {
  children?: ReactNode;
}

interface TableHeaderCellProps {
  colSpan?: number;
  rowSpan?: number;
  bordered?: boolean;
  children: ReactNode;
  textPosition?: textPosition;
}

interface TableBodyCellProps {
  colSpan?: number;
  rowSpan?: number;
  bordered?: boolean;
  children: ReactNode;
  textPosition?: textPosition;
}

const textPositionName = (textPosition: string) => {
  switch (textPosition) {
    case "start":
      return classes["text-position-start"];
    case "middle":
      return classes["text-position-middle"];
    case "end":
      return classes["text-position-end"];
  }
};

export function Table({
  children,
  bordered = false,
  textPosition,
  whitespace,
}: TableProps) {
  return (
    <table
      className={`
    ${bordered ? classes.borderStyle : ""} 
    ${textPositionName(textPosition ?? "")}}`}
      style={{ padding: `${whitespace}rem` }}
    >
      {children}
    </table>
  );
}

export function Head({ children }: TableHeadProps) {
  return <thead>{children}</thead>;
}

export function Body({ children }: TableBodyProps) {
  return <tbody>{children}</tbody>;
}

export function TableHeadCell({
  colSpan,
  rowSpan,
  bordered = false,
  children,
  textPosition,
}: TableHeaderCellProps) {
  return (
    <th
      className={`
        ${bordered ? classes.borderStyle : ""} 
        ${textPositionName(textPosition ?? "")}}`}
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      {children}
    </th>
  );
}

export function TableBodyCell({
  colSpan,
  rowSpan,
  bordered = false,
  children,
}: TableBodyCellProps) {
  return (
    <td
      className={bordered ? classes.borderStyle : ""}
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      {children}
    </td>
  );
}

Table.Head = Head;
Head.Cell = TableHeadCell;
Table.Body = Body;
Body.Cell = TableBodyCell;
