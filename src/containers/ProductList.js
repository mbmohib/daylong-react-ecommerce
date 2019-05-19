import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import ProductHeader from '../components/ProductHeader';
import Product from '../components/Product';
import Title from '../components/style/Title';


const ProductListWrapper = styled.div`
    background: #FCFCFC;
`;

const ProductListContainer = styled.div`
    padding: 10px;
`;

const ProductListTitle = styled(Title)`
    padding: 10px;
`;


class ProductList extends Component {
    render() {
        return (
            <ProductListWrapper>
                <ProductHeader />

                <ProductListTitle>Favorites</ProductListTitle>

                <ProductListContainer>
                    <Grid container>
                        <Grid item sm={3}>
                            <Product />
                        </Grid>

                        <Grid item sm={3}>
                            <Product />
                        </Grid>

                        <Grid item sm={3}>
                            <Product />
                        </Grid>

                        <Grid item sm={3}>
                            <Product />
                        </Grid>
                    </Grid>
                </ProductListContainer>
            </ProductListWrapper>
        )
    }
}

export default ProductList;