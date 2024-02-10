
// darkTheme functions will come here....

import Main from './components/Main';
import ReactLogo from './components/reactLogo/ReactLogo';


import { themes } from './theme';
import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
// import {GlobalStyles} from "./global"



function App() {

  const [theme, setTheme] = useState("dark");
  console.log(theme)

  return (
    <>
      <ThemeProvider theme={themes[theme]}>

        <Main theme={themes[theme]} setTheme={setTheme} />
        {/* <ReactLogo theme={themes[theme]} /> */}

      </ThemeProvider>

    </>
  );


}

export default App;
