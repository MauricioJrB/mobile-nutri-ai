import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Entypo, Feather } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  View,
  KeyboardTypeOptions,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../../contexts/Theme";
import { styles as createStyles } from "./styles";

interface InputProps {
  label: string;
  icon: keyof typeof Feather.glyphMap;
  name: string;
  control: any;
  placeholder?: string;
  error?: string;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export const InputForm = ({
  label,
  icon,
  name,
  control,
  placeholder,
  error,
  keyboardType,
  secureTextEntry,
}: InputProps) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

  const showToggleIcon = secureTextEntry;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Feather name={icon} size={20} style={styles.icon} />
        </View>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={theme.colors.input.placeholder.primary}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry && isPasswordVisible}
            />
          )}
        />
        {showToggleIcon && (
          <TouchableOpacity
            style={styles.iconRightContainer}
            onPress={() => setIsPasswordVisible((prev) => !prev)}
          >
            <Entypo
              name={isPasswordVisible ? "eye" : "eye-with-line"}
              size={20}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
