import React from "react";
import styled from "styled-components";

import productImg from "../../images/product.png";
import Title from "../style/Title";

const ProductWrapper = styled.div`
    padding: 10px;
    border: 1px solid #cdcdcd;
`;

const ProductImg = styled.img`
    width: 100px;
    display: block;
    margin: 0 auto 20px;
`;

const ProductPrice = styled.p``;

const ProductButton = styled.button`
    all: unset;
    border: 1px solid ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};
    width: 100%;
    text-align: center;
    padding: 5px 0;
    box-sizing: border-box;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
        background: ${props => props.theme.primaryColor};
        color: #fff;
    }
`;

const Product = props => (
    <ProductWrapper>
        <ProductImg src={productImg} alt="" />
        <Title normalFont small oneLine>
            {props.product.title}
        </Title>
        <ProductPrice>${props.product.price}</ProductPrice>
        <ProductButton onClick={() => props.handleAddingProduct(props.product)}>
            Add to Cart
        </ProductButton>
    </ProductWrapper>
);

export default Product;
