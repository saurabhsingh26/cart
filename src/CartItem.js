import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {  // "this" refers to CartItem Object and create state to that object.
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this) //It will bind the value of "this" to instance of CartItem.
    }

    increaseQuantity = () => {  //arrow fxn will automaticall bind for the same.
        console.log(this.state);
    }
    render() {
        const {price, title, qty } = this.state
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} alt=""/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>{price}</div>
                    <div style={{color: '#777'}}>{qty}</div>
                    <div className='cart-item-actions'>
                        <img 
                            className='action-icons' 
                            alt="increase" 
                            src="https://cdn-icons-png.flaticon.com/512/7168/7168754.png"
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            className='action-icons' 
                            alt="decrease" 
                            src="https://cdn-icons-png.flaticon.com/512/6461/6461294.png" 
                        />
                        <img 
                            className='action-icons' 
                            alt="delete" 
                            src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png" 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

// Style our elements using objects
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;