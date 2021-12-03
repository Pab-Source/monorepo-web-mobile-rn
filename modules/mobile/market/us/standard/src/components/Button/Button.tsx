import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from '../../context/hooks/useTheme';
import { makeStyles } from './styles';

export interface IButton {
  disabled?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  styleText?: TextStyle;
  children?: any;
}

export const Button = ({
  children,
  disabled = false,
  onPress = () => {},
  style,
  styleText,
  ...props
}: IButton) => {
  const theme = useTheme();

  const styles = makeStyles(theme);

  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        disabled ? styles.buttonDisabled : styles.buttonActive,
        style,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          disabled ? styles.buttonTextDisabled : styles.buttonTextActive,
          styleText,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
