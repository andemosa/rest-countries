import * as React from "react";

interface themeStyles {
    background: string;
    text: string;
    elements: string;
}

interface ThemeContextInterface {
  isLightTheme: boolean;
  themeStyles: themeStyles;
  toggleTheme: () => void;
}

type Props = {
  children: React.ReactNode;
};

export const ThemeContext =
  React.createContext<ThemeContextInterface | null>(null);

// stylings based on theme chosen
const themeValues = {
  light: {
    background: "hsl(0, 0%, 98%)",
    text: "hsl(200, 15%, 8%)",
    elements: "hsl(0, 0%, 100%)",
  },
  dark: {
    background: "hsl(207, 26%, 17%)",
    text: "hsl(0, 0%, 100%)",
    elements: "hsl(209, 23%, 22%)",
  },
};

const ThemeContextProvider = ({ children }: Props) => {
  // General Theme state
  const [isLightTheme, setIsLightTheme] = React.useState(true);

  // Toggle theme Function
  const toggleTheme = () => {
    setIsLightTheme(isLightTheme ? false : true);
  };

  const themeStyles = isLightTheme ? themeValues.light : themeValues.dark;

  const sampleThemeContext: ThemeContextInterface = {
    isLightTheme: isLightTheme,
    themeStyles: themeStyles,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={sampleThemeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
