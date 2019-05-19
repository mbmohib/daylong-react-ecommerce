import React from 'react';
import styled from 'styled-components';

import SidebarHeader from './SidebarHeader';
import EmptryCart from './EmptyCart';
import Cart from './Cart';

const SidebarWrapper = styled.div`

`;

const SidebarContainer = styled.div`

`;

const Sidebar = props =>  (
    <SidebarWrapper>
        <SidebarHeader 
            totalItems={props.cart.items.length} 
            totalPrice={props.cart.totalprice}
        />
        <SidebarContainer>
            {
                props.cart.items.length > 0 ? 
                <Cart cartItems={props.cart.items} handleDeletingProduct={props.handleDeletingProduct}/> : 
                <EmptryCart />
            }
        </SidebarContainer>
    </SidebarWrapper>
)


export default Sidebar;