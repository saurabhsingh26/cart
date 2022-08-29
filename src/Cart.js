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
    handleIncreaseQuantity = (product) => {
        // console.log('Heyy please inc the qty of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1
        // console.log(products);

        this.setState({
            products
        })
        
      }
      handleDecreaseQuantity = (product) => {
        // console.log('Heyy please dec the qty of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0){
            return 
        }
        products[index].qty -= 1

        this.setState({
            products
        })
      }
    render() {
        // const arr = [1,2,3,4,5]
        const { products } = this.state;
        return (
            <div className='cart'>

                {products.map((product) => {  // product is a local variable
                    return(
                        <CartItem 
                        product = {product} 
                        key = {product.id} 
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        onDecreaseQuantity = {this.handleDecreaseQuantity}
                        />
                    )
                    
                })}
                
            </div>
        )
    }
}


export default Cart;