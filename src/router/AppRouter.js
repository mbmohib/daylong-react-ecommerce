import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';
import ProductList from '../containers/ProductList';
import FourOFour from '../components/FourOFour';


const AppRouter = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" component={ProductList} exact />
                <Route component={FourOFour} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default AppRouter;