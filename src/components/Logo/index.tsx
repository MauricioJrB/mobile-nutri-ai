import React from "react";
import { Image } from "./styles";
import logo from "../../assets/nutri-ai-dark.png";

interface Props {
  width: number;
  height: number;
}

const Logo = ({ width, height }: Props) => {
  return <Image source={logo} style={{ width, height }} />;
};

export default Logo;
