# About
## `useThemify` is a super simple and fast way to set up different themes in your react app!

# Set up
- In your main style file (`index.css` in this example) set the name of the variables your are going to use inside `:root`. Remeber to set up default values!
```css
:root {
    --color1: #f9e6cf;
    --color2: #5ac54f;
    --color3: #33984b;
    --color4: #134c4c;
    --color5: #0c2e44;
}
```
- Create a themes.js file. Here you will write your themes: 
```JavaScript
  const themes = {
    green: {
      color1: '#f9e6cf',
      color2: '#5ac54f',
      color3: '#33984b',
      color4: '#134c4c',
      color5: '#0c2e44',
    },
    gold: {
      color1: '#ffecd6',
      color2: '#ffd4a3',
      color3: '#ffaa5e',
      color4: '#d08159',
      color5: '#8d697a',
    },
  };
```
- Copy `useThemify` and import the themes!
```JavaScript
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
```
- Thats it! to use it you import it where you need it and set the themes by name!