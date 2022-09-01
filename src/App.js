import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

class App extends React.Component {

  constructor() {
    super();
    this.state = {  
        products : [],
        loading: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount(){
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     // console.log(snapshot);

    //     // snapshot.docs.map((doc)=>{
    //     //   console.log(doc.data());
    //     // })
    //     const products = snapshot.docs.map((doc) =>{
    //       const data = doc.data();
    //       data['id'] = doc.id;     // set the id for products items
    //       return data;
    //     });

    //     this.setState({
    //       products: products,
    //       loading: false
    //     })
    //   })

      this.db
      .collection('products')
      // .where('price','<=',999)  // We can apply filter
      // .where('qty','>=',2)
      .orderBy('price','desc')       // We can sort using price in decending order
      .onSnapshot((snapshot) => {
        // console.log(snapshot);

        // snapshot.docs.map((doc)=>{
        //   console.log(doc.data());
        // })
        const products = snapshot.docs.map((doc) =>{
          const data = doc.data();
          data['id'] = doc.id;     // set the id for products items
          return data;
        });

        this.setState({
          products: products,
          loading: false
        })
      })
  }
  handleIncreaseQuantity = (product) => {
    // console.log('Heyy please inc the qty of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1
    // // console.log(products);

    // this.setState({
    //     products
    // })
    // Also increase qty in db
    const docRef = this.db.collection('products').doc(products[index].id)
    // console.log(docRef);
    docRef
    .update({
      qty: products[index].qty + 1
    })
    .then(()=>{
      console.log("Updated Successfully");
    })
    .catch((error) => {
      console.log("Error : ",error);
    })
    
  }
  handleDecreaseQuantity = (product) => {
    // console.log('Heyy please dec the qty of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    // if(products[index].qty === 0){
    //     return 
    // }
    // products[index].qty -= 1

    // this.setState({
    //     products
    // })
    const docRef = this.db.collection('products').doc(products[index].id)
    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(()=>{
        console.log("Updated Successfully");
      })
      .catch((error) => {
        console.log("Error : ",error);
      })
  }
  handleDeleteProduct = (id) => {
    // const {products} = this.state;
    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //     products : items
    // })
    const docRef = this.db.collection('products').doc(id)
    // console.log(docRef);
    docRef
      .delete()
      .then(()=>{
        console.log("Deleted Successfully");
      })
      .catch((error) => {
        console.log("Error : ",error);
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
    products.map(product => {
      if (product.qty > 0){
        cartTotal = cartTotal + product.qty * product.price;
      }
      return '';
    });
    return cartTotal;
    // products.forEach((product)=>{                     // we can use forEach as well
    //   cartTotal = cartTotal + product.qty * product.price
    // })
    // return cartTotal;
  }
  addProduct = () =>{
    this.db
    .collection('products')
    .add({
      title: "Mug",
      qty: 1,
      price: 67,
      img: "https://cdn-icons-png.flaticon.com/512/1040/1040431.png"
    })
    .then((docRef) =>{
      console.log("Product has been added",docRef);
    })
    .catch((error)=>{
      console.log("Error: ",error);
    })
  }
  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding:10, fontSize:20}} >Add a product</button> */}
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h1>Loading...</h1>}
        <div style={{padding: 10, fontSize: 20}}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
  
}

export default App;
