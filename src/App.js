import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar'

class App extends React.Component {

  constructor() {
    super();
    this.state = {  
        products : [
            {
                price: 999,
                title: 'Phone',
                qty: 1,
                img: 'https://cdn-icons-png.flaticon.com/512/3137/3137807.png',
                id: 1
            },
            {
                price: 99,
                title: 'Watch',
                qty: 5,
                img: 'https://cdn-icons-png.flaticon.com/512/3845/3845840.png',
                id: 2
            },
            {
                price: 9999,
                title: 'Laptop',
                qty: 2,
                img: 'https://cdn-icons-png.flaticon.com/512/428/428001.png',
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
  handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
        products : items
    })
  }

  getCartCount = () => {
    const {products} = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }
  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.map((products) => {
      cartTotal = cartTotal + products.qty * products.price
    })
    return cartTotal;
  }
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize: 20}}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
  
}

export default App;
