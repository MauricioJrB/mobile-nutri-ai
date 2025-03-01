import React, { InputHTMLAttributes } from "react";
import { KeyboardTypeOptions, Text } from "react-native";
import { Controller, FieldError } from "react-hook-form";

import {
  Container,
  Content,
  ErrorText,
  IconContainer,
  IconStyled,
  InputStyled,
  Label,
} from "./styles";

import { Feather } from "@expo/vector-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: keyof typeof Feather.glyphMap;
  name: string;
  control: any;
  placeholder?: string;
  hasIcon?: boolean;
  rules?: string;
  error?: string;
  keyboardType: KeyboardTypeOptions;
}

const InputForm = ({
  label,
  icon,
  name,
  control,
  placeholder,
  rules,
  error,
  keyboardType,
}: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Content>
        {icon && (
          <IconContainer>
            <IconStyled name={icon} size={20} />
          </IconContainer>
        )}
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputStyled
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              hasIcon={icon ? true : false}
              keyboardType={keyboardType}
            />
          )}
        />
      </Content>
      <ErrorText>{error && <Text>{error}</Text>}</ErrorText>
    </Container>
  );
};

export default InputForm;
