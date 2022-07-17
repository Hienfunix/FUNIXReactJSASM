import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import  StaffDetail  from './StaffDetailComponent';

class StaffList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedStaff: null
           
        };
        // console.log('Menu Component constructor is invoked');
    }
    // componentDidMount(){
    //     console.log('Menu Component componentDidMount is invoked');
    // } 
    
    onStaffSelect(staff){
        this.setState({selectedStaff:staff});
    }

    render() {
        const list = this.props.staffs.map((staff) => {
            return (
              <div key = {staff.id} className="col-12 col-md-6 col-xl-4">
                <Card onClick={() => this.onStaffSelect(staff)}>
                    <CardBody>
                        <CardText>{staff.name}</CardText>
                    </CardBody>
                </Card>      
              </div> 
            );
        });
        // console.log('Menu Component render is invoked');
        return (
            <div className="container">
                <div className="row">
                        {list}
                </div>
                <div className="row">
                    <StaffDetail selectStaff = {this.state.selectedStaff} />
                </div>
                <p> Bấm vào tên nhân viên để xem thông tin </p>
            </div>
        );
    }
    
}
export default StaffList;
// class Menu extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedDish: null
           
//         };
//         console.log('Menu Component constructor is invoked');
//     }
//     componentDidMount(){
//         console.log('Menu Component componentDidMount is invoked');
//     } 
    
//     onDishSelect(dish){
//         this.setState({selectedDish:dish});
//     }

//     render() {
//         const menu = this.props.dishes.map((dish) => {
//             return (
//               <div key = {dish.id} className="col-12 col-md-5 m-1">
//                 <Card onClick={() => this.onDishSelect(dish)}>
//                     <CardImg width="100%" src={dish.image} alt={dish.name}/>
//                     <CardImgOverlay>
//                         <CardTitle heading>{dish.name}</CardTitle>
//                     </CardImgOverlay>
//                 </Card>      
//               </div> 
//             );
//         });
//         console.log('Menu Component render is invoked');
//         return (
//             <div className="container">
//                 <div className="row">
//                         {menu}
//                 </div>
//                 <div className="row">
//                     <DishDetail dishTest = {this.state.selectedDish} />
//                 </div>
//             </div>
//         );
//     }
    
// }
// export default Menu;