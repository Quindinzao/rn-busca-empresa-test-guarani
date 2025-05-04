// External Libraries
import React from 'react';
import { Switch } from 'react-native';
import { useTheme } from '@emotion/react';

// Contexts
import { useThemeMode } from '../../contexts/ThemeContexts';

// Styles
import { Row } from './styles';

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
