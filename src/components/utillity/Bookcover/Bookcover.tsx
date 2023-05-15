import "./Bookcover.scss";
import React, { useMemo } from "react";

export interface BookcoverProps {
  icon: string;
  title?: string;
  link?: string;
}

const Bookcover: React.FunctionComponent<BookcoverProps> = (props) => {
  const { icon } = props;

  const imgUrl = useMemo(() => {
    return new URL(`/src/assets/${icon}`, import.meta.url).href;
  }, [icon]);

  return (
    <div
      className={`bookcover`}
      title={props.title}
      style={{
        // backgroundImage: `url(${imgUrl})`,
        cursor: props.link ? "pointer" : "default",
      }}
      onClick={() => {
        if (props.link) window.open(props.link, "_blank");
      }}
    >
      <img src={imgUrl}></img>
    </div>
  );
};

export default Bookcover;
