import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeProps {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeProps => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
};
