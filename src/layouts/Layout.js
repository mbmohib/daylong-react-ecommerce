import React from 'react';
import styled from 'styled-components';

import Container from '../components/style/Container';



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Layout = props => (
    <Wrapper>
        <Container>
            <main style={{ flexGrow: 1 }}>
                {props.children}
            </main>
        </Container>
    </Wrapper>
);


export default Layout;