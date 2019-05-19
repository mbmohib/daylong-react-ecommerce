import React from 'react';
import styled from 'styled-components';
import CartIcon from '@material-ui/icons/ShoppingCart';

import Title from './style/Title';


const EmptryCartWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 100px;
`;

const CartImage = styled(CartIcon)`
    width: 150px !important;
    font-size: 150px !important;
`;

const EmptryCart = () => (
    <EmptryCartWrapper>
        <CartImage />
        <Title>Your Cart is Empty</Title>
    </EmptryCartWrapper>
);

export default EmptryCart;
