import React from 'react';
import styled from 'styled-components';


const CartItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    transition: all 0.3s ease-in-out;

    :hover {
        box-shadow: ${props => props.theme.smallShadow}
    }
`;

const CartDelete = styled.button`
    all: unset;
    cursor: pointer;
    border: 1px solid #D64541;
    border-radius: 50%;
    padding: 0 6px;
    color: #D64541;
`;

const CartTitle = styled.p`
    text-transform: capitalize;
    font-size: 0.9rem;
    color: #28282d90;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const CartItem = props => (
    <CartItemWrapper>
        <CartTitle>
            <span>{props.index + 1}. </span>
            {props.item.title}
        </CartTitle>
        <CartDelete onClick={() => props.handleDeletingProduct(props.item)}>x</CartDelete>
    </CartItemWrapper>
)

export default CartItem;