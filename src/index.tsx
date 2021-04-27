import React from 'react';
import CModal from './components/modal';
import Loading from './components/loading';
import GeralProvider from './context';

import Routes from './services/navigation/Routes';

const App = () => {
    return(
        <GeralProvider>
            <CModal />
            <Loading />
            <Routes />
        </GeralProvider>
    );
};

export default App;