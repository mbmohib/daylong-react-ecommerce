import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import ProductList from '../components/Products/ProductList';
import Sidebar from '../components/Sidebar/Sidebar';


class Home extends Component {

    state = {
        products: null,
        searchedProducts: null,
        cart: {
            items: [],
            totalprice: 0
        }
    }

    componentDidMount() {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const products = [];
                res.data.map( data => {
                    products.push({
                        ...data,
                        price: Math.floor(Math.random() * 100) + 1  
                    })
                });

                this.setState({ products }, () => {
                    // Update SearchProduct state after fetching data
                    this.handleSearch('');
                })
            })
            .catch(err => {});
    }

    /**
     *  Add product to Cart
     *  @memberof Home
     */
    handleAddingProduct = product => {
        // Copy Product Cart
        const updatedCart = {...this.state.cart};
        // Copy 2nd level cart items
        const updatedCartItems = [...updatedCart.items];

        // Prevent duplicate entry to cart
        if(!updatedCartItems.find(item => item.id === product.id)) {
            updatedCartItems.push(product);
            updatedCart.items = updatedCartItems;

            // Update Total Price
            updatedCart.totalprice += product.price;
        }


        
        // Update cart
        this.setState({ cart: updatedCart })
    }

    /**
     *  Remove product from Cart
     *  @memberof Home
     */
    handleDeletingProduct = product => {
        // Copy Product Cart
        const updatedCart = {...this.state.cart};
        // Removes product from Cart
        const updatedCartItems = updatedCart.items.filter( item => {
            return item.id !== product.id
        })

        updatedCart.items = updatedCartItems;

        // Update Total Price
        updatedCart.totalprice -= product.price;
        
        // Update cart
        this.setState({ cart: updatedCart })
    }

    /**
     *  Match products from search input value &
     *  store in another state property
     *  @memberof Home
     */
    handleSearch = searchValue => {
        const regex = new RegExp(searchValue, 'gi');
        const searchedProducts = this.state.products.filter( product => {
            return product.title.match(regex);
        })

        this.setState(() => ({ searchedProducts }));
    }

    render() {
        return (
            <Grid container>
                <Grid item sm={8}>
                    {
                        this.state.products &&
                        <ProductList 
                            products={this.state.searchedProducts}
                            handleAddingProduct={this.handleAddingProduct}
                            handleSearch={this.handleSearch}
                        />
                    }
                </Grid>
                <Grid item sm={4}>
                    <Sidebar 
                        cart={this.state.cart} 
                        handleDeletingProduct={this.handleDeletingProduct}
                    />
                </Grid>
            </Grid>
            
        )
    }
}

export default Home;