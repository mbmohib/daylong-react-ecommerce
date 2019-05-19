import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import Container from '../components/style/Container';
import Sidebar from '../containers/Sidebar';



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Layout = props => (
    <Wrapper>
        <Container>
            <main style={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid item sm={8}>
                        {props.children}
                    </Grid>
                    <Grid item sm={4}>
                        <Sidebar />
                    </Grid>
                </Grid>
            </main>
        </Container>
    </Wrapper>
);


export default Layout;