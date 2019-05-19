import React from 'react';
import styled from 'styled-components';
import CartIcon from '@material-ui/icons/ShoppingCart';

import truckImg from '../../images/cargo-truck.png'


const SidebarHeaderWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid #cdcdcd;
    padding: 23.5px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TotalItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Mins = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 18px;
    }
   
`;

const TotalPrice = styled.div`
    display: flex;
    align-items: center;

    p {
        background: #DE9221;
        color: #fff;
        padding: 5px 8px;
        border-radius: 3px 0 0 3px;
        font-size: 0.8rem;
    }

    button {
        all: unset;
        background: #F8A330;
        color: #fff;
        border-radius: 0 3px 3px 0;
        padding: 5px 8px;
        text-transform: uppercase;
        font-size: 0.8rem;
    }
   
`;

const SidebarHeader = props => (
    <SidebarHeaderWrapper>
        <TotalItems>
            <CartIcon />
            <p>{props.totalItems} items</p>
        </TotalItems>

        <Mins>
            <img src={truckImg} alt="Truck Icon" />
            10 min
        </Mins>

        <TotalPrice>
            <p>${props.totalPrice}</p>
            <button>checkout</button>
        </TotalPrice>
    </SidebarHeaderWrapper>
)

export default SidebarHeader;