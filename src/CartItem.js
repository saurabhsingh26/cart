import React from 'react';

const CartItem = (props) => {
    
    const {price, title, qty } = props.product // We don't need to the this keyword we don't have access to it because this is not a class anymore.

    return (
        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image} src={props.product.img} alt=""/>
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
                        onClick={() => props.onIncreaseQuantity(props.product)}
                    />
                    <img 
                        className='action-icons' 
                        alt="decrease" 
                        src="https://cdn-icons-png.flaticon.com/512/6461/6461294.png" 
                        onClick={() => props.onDecreaseQuantity(props.product)}
                    />
                    <img 
                        className='action-icons' 
                        alt="delete" 
                        src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png" 
                        onClick={() => props.onDeleteProduct(props.product.id)}
                    />
                </div>
            </div>
        </div>
    )
    
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