import React, { Component } from 'react';
import styled from 'styled-components';
import Search from '@material-ui/icons/Search';

const HeaderWrapper = styled.div`
    width: 100%;
    border-right: 1px solid #cdcdcd;
    border-bottom: 1px solid #cdcdcd;
    padding: 20px;
    margin-bottom: 10px;
`;

const SearchWrapper = styled.div`
    width: 70%;
    position: relative;
    margin: 0 auto;
`;

const SearchInput = styled.input`
    all: unset;
    border: 1px solid #cdcdcd;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    padding-left: 50px;
`;

const SearchIcon = styled(Search)`
    position: absolute;
    left: 8px;
    top: 7px;
    color: #00000080;
`;

class ProductHeader extends Component {
    state = {
        searchValue: '',
    }

    handleChange = e => {
        const searchValue = e.target.value;

        this.setState(() => ({ searchValue }), () => {
            this.props.handleSearch(searchValue);
        })
    }


    render() {
        return (
            <HeaderWrapper>
                <SearchWrapper>
                    <SearchInput 
                        onChange={this.handleChange} 
                        type="text" 
                        placeholder="Search...."
                        searchValue={this.state.searchValue}
                    />
                    <SearchIcon />
                </SearchWrapper>
            </HeaderWrapper>   
        )
    }
} 


export default ProductHeader;