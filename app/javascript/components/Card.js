import React from 'react';
import Modal from './Modal';
class Card extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }
    showModal = () => {
        this.setState({ show: true });
    }
    hideModal = () => {
        this.setState({ show: false });
    }
    addInMenu = () => {
        this.props.add(this.props.id, this.props.title, this.props.img, this.props.body, this.props.type, this.props.index)
    }
    removeFromMenu = () => {
        this.props.remove(this.props.id, this.props.title, this.props.img, this.props.body, this.props.type, this.props.index)
    }
    render(){
        if(this.props.add){
            var button = <button type="button" className="float-right" onClick={this.addInMenu}>Add to Cart</button>
        }
        else{
            var button = <button type="button" className="float-right" onClick={this.removeFromMenu}>Remove from cart</button>
        }
        return(
            <div className="col-md-4"> 
                <div className="card">
                    <img className="card-img-top" src= {this.props.img} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title border-bottom pb-3">{this.props.title} <a href="#" className="float-right d-inline-flex share"><i className="fas fa-share-alt text-primary"></i></a></h5>
                    <p className="card-text">{this.props.body.substring(0,50) + '....'}</p>
                    {button}
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        <div className="container">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <img className="image-container-center img-responsive" src={this.props.img} height='150px' width='150px'></img>
                            </div>
                        </div>
                            <p>{this.props.title}</p>
                            <p>{this.props.body}</p>
                            </div>
                    </Modal>
                    <button type="button" onClick={this.showModal}>Read More</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card