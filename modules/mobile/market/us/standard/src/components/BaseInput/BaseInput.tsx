import React, { FC } from 'react';
import { Text, TextInput, View, ViewStyle } from 'react-native';
import { useTheme } from '../../context/hooks/useTheme';

import { makeStyles } from './styles';

export interface IBaseInput {
  onChange: (param: string) => void;
  style?: ViewStyle;
  placeholder?: string;
  bottomLabel?: string;
}

export const BaseInput: FC<IBaseInput> = ({
  bottomLabel,
  onChange,
  style,
  placeholder,
}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        style={[styles.input, style]}
        placeholderTextColor={theme.inputColor}
      />
      {bottomLabel && <Text style={styles.bottomLabel}>{bottomLabel}</Text>}
    </View>
  );
};
