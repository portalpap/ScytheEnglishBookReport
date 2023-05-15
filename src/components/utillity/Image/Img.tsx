import React, { useMemo } from "react";

export interface ImgProps {
  src: string;
}

const Img: React.FunctionComponent<ImgProps> = (props) => {
  const imgUrl = useMemo(() => {
    return new URL(`/src/assets/${props.src}`, import.meta.url).href;
  }, [props.src]);
  return <img src={imgUrl}></img>;
};

export default Img;
