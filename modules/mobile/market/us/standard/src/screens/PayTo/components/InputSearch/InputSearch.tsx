import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
import { IInputSearch } from './types';

export const InputSearch: React.FC<IInputSearch> = ({
  containerStyle = {},
  inputStyle = {},
  inputProps = {},
  iconProps = {},
  iconStyle = {},
  onChange,
}) => {
  const theme = useTheme();
  const inputStyles = makeStyles(theme);

  return (
    <View style={[inputStyles.container, containerStyle]}>
      <TextInput
        style={[inputStyles.input, inputStyle]}
        placeholder="Search contact by name, email or phone"
        placeholderTextColor={theme.inputColor}
        onChangeText={onChange}
        {...inputProps}
      />
      <Image
        {...iconProps}
        style={[inputStyles.icon, iconStyle]}
        source={require('../../assets/Zoom.png')}
      />
    </View>
  );
};

export * from './types';
