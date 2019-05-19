import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import ProductHeader from './ProductHeader';
import Product from './Product';
import Title from '../style/Title';

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
                <ProductHeader handleSearch={this.props.handleSearch}/>

                <ProductListTitle>Favorites</ProductListTitle>

                <ProductListContainer>
                    <Grid container>
                        {
                            this.props.products && this.props.products.map( product => (
                                <Grid key={product.id} item sm={3}>
                                    <Product 
                                        product={product}
                                        handleAddingProduct={this.props.handleAddingProduct}
                                    />
                                </Grid>
                                ))
                        }
                    </Grid>
                </ProductListContainer>
            </ProductListWrapper>
        )
    }
}

export default ProductList;