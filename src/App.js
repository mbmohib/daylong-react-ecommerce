import React from 'react';


import AppRouter from './router/AppRouter';
import GlobalStyle from './theme/globalStyle';



const App = () => (
    <GlobalStyle>
        <AppRouter />
    </GlobalStyle>
)

export default App;