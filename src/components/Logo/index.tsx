import React from "react";
import { Image } from "./styles";

interface Props {
  width: number;
  height: number;
}

const Logo = ({ width, height }: Props) => {
  return (
    <Image
      source={require("../../assets/nutri-ai.png")}
      style={{ width, height }}
    />
  );
};

export default Logo;
