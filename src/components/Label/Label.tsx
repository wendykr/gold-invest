import React from 'react'
import "./Label.scss"

interface LabelProps {
  key: number;
  flag: string;
}

export const Label: React.FC<LabelProps> = ({key, flag}) => {
  return (
    <div
      key={key}
      className={`label ${
        flag === "Novinka"
          ? "news"
          : flag === "Výprodej"
          ? "sale"
          : flag === "Tip"
          ? "tip"
          : ""
      }`}
    >
      {flag}
    </div>
  );
}
