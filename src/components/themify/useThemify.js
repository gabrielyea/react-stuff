import { useCallback } from 'react';
import themes from './themes';

const useThemify = () => {
  const applyTheme = useCallback((themeName) => {
    Object.keys(themes[themeName]).forEach((att) => {
      document.documentElement.style.setProperty(`--${att}`, themes[themeName][att]);
    });
  }, []);
  return [applyTheme];
};

export default useThemify;
