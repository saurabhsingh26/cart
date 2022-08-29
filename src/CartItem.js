import React from 'react';

class CartItem extends React.Component {
    
    render() {
        // console.log(this.props.product);
        const {price, title, qty } = this.props.product

        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} alt=""/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs. {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img 
                            className='action-icons' 
                            alt="increase" 
                            src="https://cdn-icons-png.flaticon.com/512/7168/7168754.png"
                            onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img 
                            className='action-icons' 
                            alt="decrease" 
                            src="https://cdn-icons-png.flaticon.com/512/6461/6461294.png" 
                            onClick={this.decreaseQuantity}
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