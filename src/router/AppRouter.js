import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';
import Home from '../containers/Home';
import FourOFour from '../components/FourOFour';


const AppRouter = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route component={FourOFour} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default AppRouter;