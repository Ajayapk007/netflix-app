import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
import React from 'react';


function App() {
  return (
     <Provider store={appStore} >
        <Body />
     </Provider>

  );
}

export default App;
