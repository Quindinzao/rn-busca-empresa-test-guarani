import React from 'react';
import { Switch } from 'react-native';
import { useThemeMode } from '../../contexts/ThemeContexts';
import { useTheme } from '@emotion/react';
import { Row } from './styles';
// import Text from '../Text';

const ToggleThemeSwitch = () => {
  const theme = useTheme();
  const { toggleTheme, themeMode } = useThemeMode();
  const isDark = themeMode === 'dark';

  const thumbColor = theme.colors.primary;
  const trackColor = theme.colors.secondary;

  return (
    <Row>
      {/* <Text fontSizeProp="small">{isDark ? 'Dark' : 'Light'}</Text> */}
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
        thumbColor={thumbColor}
        trackColor={{
          false: trackColor,
          true: trackColor,
        }}
      />
    </Row>
  );
};

export default ToggleThemeSwitch;
