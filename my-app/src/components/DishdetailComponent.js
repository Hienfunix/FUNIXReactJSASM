import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedDishdetail: this.props.dishDetail
           
        };
       
    }

    renderDish(dishTest){
        if (dishTest != null) {
            return(
            <Card>
                <CardImg width="100%" src={dishTest.image} alt={dishTest.name}/>
                <CardBody>
                    <CardTitle>{dishTest.name}</CardTitle>
                    <CardText>{dishTest.description}</CardText>
                </CardBody>
            </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
            
    }
    renderComments(comments){
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>

            </div>
        )
    }


    render(){
        const menuDish = this.props.dishTest

        console.log(menuDish);
        
        if (menuDish == null) {
            return (<div></div>);
        }

        const dishItem = this.renderDish(menuDish);
        const dishComment = this.renderComments(menuDish.comments);

        return (
            <div className='row'>
                {dishItem}
                {dishComment}
            </div>
        )
    }
}

export default DishDetail;