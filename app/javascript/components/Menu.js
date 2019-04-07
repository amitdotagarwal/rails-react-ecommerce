import React from 'react'
import axios from 'axios'
import Card from './Card'
import CartPage from '../components/CartPage'

class Menu extends React.Component {
  state = {
    bundle_templates: [],
    meal_boxes: [],
    sides: [],
    desserts: [],
    drinks: [],
    cart: []
  };

  componentDidMount() {
    axios
      .get('/api/menu/index')
      .then(response => {
        this.setState({
            bundle_templates: response.data['bundle_templates'],
            meal_boxes: response.data['meal_boxes'],
            sides: response.data['sides'],
            desserts: response.data['desserts'],
            drinks: response.data['drinks']
      });
      })
  }

  renderAllPosts = () => {
    return(
      <ul>
        {this.state.bundle_templates.map((data, idx) => (
          <li key={idx}>{data.name}</li>
        ))}
      </ul>
    )
  }

  addToCart = (id, name, image, desc, type, index) => {
    let count = this.state.itemsCount;
    let cart = this.state.cart;
    let obj={type: type, index: index, id: id}
    cart.push(obj)
    count++
    this.setState({itemsCount: count, cart: cart})
  }
  
  handler = (cart_arr) => {
    this.setState({
      cart: cart_arr
    })
  }

  render(){
    const bundle = this.state.bundle_templates.map((data, idx) => {
        return <Card key={data.id} id={data.id} title={data.name} body={data.description} type="bundle_templates" index={idx} img={data.image_url} add={this.addToCart}></Card>
    });
    const meal = this.state.meal_boxes.map((data, idx) => {
        return <Card key={data.id} id={data.id} title={data.name} body={data.description} type="meal_boxes" index={idx} img={data.image_url} add={this.addToCart}></Card>
    });
    const sides = this.state.sides.map((data, idx) => {
        return <Card key={data.id} id={data.id} title={data.name} body={data.description} type="sides" index={idx} img={data.image_url} add={this.addToCart}></Card>
    });
    const desserts = this.state.desserts.map((data, idx) => {
        return <Card key={data.id} id={data.id} title={data.name} body={data.description} type="desserts" index={idx} img={data.image_url} add={this.addToCart}></Card>
    });
    const drinks = this.state.drinks.map((data, idx) => {
        return <Card key={data.id} id={data.id} title={data.name} body={data.description} type="drinks" index={idx} img={data.image_url} add={this.addToCart}></Card>
    });
  return(
    <div className="container">
      <div className="row text-center"><h1>Menu Items</h1></div>
      <div className='row'>
        {bundle}
        {meal}
        {sides}
        {desserts}
        {drinks}
      </div>
      <h1 id="cart-items">Cart Items</h1>
      <CartPage cartItems={this.state.cart}
        handleState = {this.handler}
        count = {this.state.itemsCount}
         bundle_templates={this.state.bundle_templates}
         meal_boxes={this.state.meal_boxes}
         sides={this.state.sides}
         desserts={this.state.desserts}
         drinks={this.state.drinks}>
      </CartPage>
      </div>
    )
  }
}

export default Menu