import { Image } from "react-native";
import darkLogo from "../../assets/nutri-ai-dark.png";
import lightLogo from "../../assets/nutri-ai-light.png";
import { useTheme } from "../../contexts/Theme";

interface Props {
  width: number;
  height: number;
}

export function Logo({ width, height }: Props) {
  const { theme } = useTheme();
  const isDark = theme.mode === "dark";

  return (
    <Image
      source={isDark ? darkLogo : lightLogo}
      style={{ width, height }}
      resizeMode="contain"
    />
  );
}
