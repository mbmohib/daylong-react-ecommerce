import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';

class Home extends Component {

    state = {
        products: null,
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

                this.setState({ products })
            })
            .catch(err => {});
    }

    handleAddingProduct = product => {
        // Copy Product Cart
        const updatedCart = {...this.state.cart};
        // Copy 2nd level cart items
        const updatedCartItems = [...updatedCart.items];

        updatedCartItems.push(product);
        updatedCart.items = updatedCartItems;

        // Update Total Price
        updatedCart.totalprice += product.price;
        
        // Update cart
        this.setState({ cart: updatedCart })
    }

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

    render() {
        return (
            <Grid container>
                <Grid item sm={8}>
                    {
                        this.state.products && 
                        <ProductList 
                            products={this.state.products}
                            handleAddingProduct={this.handleAddingProduct}
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