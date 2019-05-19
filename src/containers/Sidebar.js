import React, { Component } from 'react';
import styled from 'styled-components';

import SidebarHeader from '../components/SidebarHeader';
import EmptryCart from '../components/EmptyCart';
import Cart from '../components/Cart';

const SidebarWrapper = styled.div`

`;

const SidebarContainer = styled.div`

`;

class Sidebar extends Component {
    render() {
        return (
            <SidebarWrapper>
                <SidebarHeader />
                <SidebarContainer>
                    <Cart />
                    <EmptryCart />
                </SidebarContainer>
            </SidebarWrapper>
        )
    }
}

export default Sidebar;