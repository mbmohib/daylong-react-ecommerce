import React from 'react';
import styled from 'styled-components';

import productImg from '../images/product.png';
import Title from '../components/style/Title';

const ProductWrapper = styled.div`
    padding: 10px;
    border: 1px solid #cdcdcd;
`;

const ProductImg = styled.img`
    width: 100px;
    display: block;
    margin: 0 auto 20px;
`;

const ProductPrice = styled.p`
    
`;

const Product = props => (
    <ProductWrapper>
        <ProductImg src={productImg} alt="" />
        <Title normalFont small>Skinny Pop Black Paper</Title>
        <ProductPrice>$20</ProductPrice>
    </ProductWrapper>
)

export default Product;