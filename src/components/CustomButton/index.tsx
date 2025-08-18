import { TouchableOpacity, Text } from "react-native";
import { useTheme } from "../../contexts/Theme";
import { styles as createStyles } from "./styles";
interface Props {
  title: string;
  onPress: () => void;
}

export function CustomButton({ title, onPress }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
