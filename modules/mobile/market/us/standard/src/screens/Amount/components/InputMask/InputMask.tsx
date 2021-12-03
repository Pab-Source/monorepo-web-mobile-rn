import React from 'react';
import { View, Image } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
import type { IInputMask } from './types';

export const InputMask: React.FC<IInputMask> = ({ onChange }) => {
  const theme = useTheme();

  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>
        <Image source={require('../../../../assets/dollar.png')} />
        <TextInputMask
          keyboardType="numeric"
          style={styles.input}
          placeholder="0,00"
          placeholderTextColor={theme.colorAmountPlaceholder}
          onChangeText={(formatted) => onChange(formatted)}
          mask={'[999990].[99]'}
        />
      </View>
    </View>
  );
};
