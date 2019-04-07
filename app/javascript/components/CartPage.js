import React from 'react';
// import axios from 'axios';
import Card from '../components/Card'

class CartPage extends React.Component{
    removeFromCart=(id, name, image, desc, type, index)=>{
        let cart = this.props.cartItems;
        var remove_item;
        // let new_cart=cart.filter((data)=>{
        //     data['id'] !== id
        // })
        // cart.map((data)=>{
        //     if(data('id')===id){
        //         remove_item = data;
        //     }
        // })
        const filteredArray = cart.filter((data) => data.id !== id);
        this.props.handleState(filteredArray)
    }
    render(){
        let arr = []
        this.props.cartItems.map((data, idx)=>{
            switch(data['type']){
                case 'bundle_templates':
                    arr.push(this.props.bundle_templates[data['index']])
                break;
                case 'meal_boxes':
                    arr.push(this.props.meal_boxes[data['index']])
                break;
                    arr.push(this.props.sides[data['index']])
                break;
                case 'desserts':
                    arr.push(this.props.desserts[data['index']])
                break;
                case 'drinks':
                    arr.push(this.props.drinks[data['index']])
                break;
            }
        });
        const bundle = arr.map((data, idx) => {
            // console.log(data)
            return <Card key={data.id + data.name} id={data.id} title={data.name} body={data.description} img={data.image_url} remove={this.removeFromCart}></Card>
        });
        return(
            <div className="row">
                {bundle}
            </div>
        )
    }
}

export default CartPage
