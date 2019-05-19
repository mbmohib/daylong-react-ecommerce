import React from 'react';
import styled from 'styled-components';


const CartItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

const CartDelete = styled.button`
    all: unset;
    cursor: pointer;
`;

const CartTitle = styled.p`
    font-size: 0.9rem;
    color: #28282d90;
`;

const CartItem = props => (
    <CartItemWrapper>
        <CartTitle>Apple from montigo</CartTitle>
        <CartDelete>x</CartDelete>
    </CartItemWrapper>
)

export default CartItem;