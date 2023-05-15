import "./Tab.scss";
import React, { useMemo } from "react";

export interface TabProps {
  className?: string;
  label: string;
  icon: string;
  size: number;
  color?: string;
  placement?: "top" | "right" | "bottom" | "left";
}

const Tab: React.FunctionComponent<TabProps> = (props) => {
  const { className, icon, size, color, label, placement } = props;

  const imgUrl = useMemo(() => {
    return new URL(`/src/assets/${icon}`, import.meta.url).href;
  }, [icon]);

  return (
    <div className={`tab ${placement}`}>
      <label>{label}</label>
      <img src={imgUrl} style={{ width: size, fill: color }}></img>
    </div>
  );
};

export default Tab;
