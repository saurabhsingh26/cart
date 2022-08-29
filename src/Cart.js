import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {  
            products : [
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 99,
                    title: 'Watch',
                    qty: 5,
                    img: '',
                    id: 2
                },
                {
                    price: 9999,
                    title: 'Laptop',
                    qty: 2,
                    img: '',
                    id: 3
                },
            ]
        }
        
    }
    render() {
        // const arr = [1,2,3,4,5]
        const { products } = this.state;
        return (
            <div className='cart'>
                {/* { arr.map((item) =>{  // we can iterate over arr
                    return item + 5
                }) } */}
                
                {products.map((product) => {
                    return(
                        <CartItem 
                        product = {product} 
                        key = {product.id} 
                        />
                    )
                    
                })}
                
            </div>
        )
    }
}


export default Cart;