import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import '../App.css';
import dateFormat from "dateformat";

class StaffDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedStaffDetail: this.props.staffDetailed
           
        };
       
    }

    renderStaff(selectStaff){
        if (selectStaff != null) {
            return(
            <Card>
               <CardBody>
                    <CardText>{selectStaff.name}</CardText>
                </CardBody>                
                <CardImg width="100%" src={selectStaff.image} alt={selectStaff.name}/>
            </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
            
    }

    renderInfo(listStaff){
        if (listStaff == null) {
            return (<div>không có gì</div>)
        }
        const inf = ( 
                <li key={listStaff.id}>
                    <p> Họ và Tên: {listStaff.name}</p>
                    <p> Ngày sinh: {dateFormat(listStaff.doB, "dd/mm/yyyy")} </p>
                    <p> Ngày vào công ty: {dateFormat(listStaff.startDate, "dd/mm/yyyy")}</p>
                    <p> Phòng ban: {listStaff.department.name} </p>
                    <p> Số ngày nghỉ còn lại: {listStaff.annualLeave} </p>
                    <p> Số ngày đã làm thêm: {listStaff.overTime} </p>
                </li>
        
        )
        return (
            <div >
                <h3> Thông tin chi tiết: </h3>
                <ul className='list-unstyled'>
                    {inf}
                </ul>

            </div>
        )
    }


    render(){
        const listStaff = this.props.selectStaff

        console.log(listStaff);
        
        if (listStaff == null) {
            return (<div></div>);
        }
        
        const staffImage = this.renderStaff(listStaff);
        const staffInfo = this.renderInfo(listStaff);

        return (
            <div className='row contentSelect' style={{color: "red"}}>
                {staffImage}
                {staffInfo}
            </div>
        )
    }
}

export default StaffDetail;
// class DishDetail extends Component {
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedDishdetail: this.props.dishDetail
           
//         };
       
//     }

//     renderDish(dishTest){
//         if (dishTest != null) {
//             return(
//             <Card>
//                 <CardImg width="100%" src={dishTest.image} alt={dishTest.name}/>
//                 <CardBody>
//                     <CardTitle>{dishTest.name}</CardTitle>
//                     <CardText>{dishTest.description}</CardText>
//                 </CardBody>
//             </Card>
//             )
//         }
//         else{
//             return(
//                 <div></div>
//             )
//         }
            
//     }
//     renderComments(comments){
//         if (comments == null) {
//             return (<div></div>)
//         }
//         const cmnts = comments.map(comment => {
//             return (
//                 <li key={comment.id}>
//                     <p>{comment.comment}</p>
//                     <p>-- {comment.author}, &nbsp;
//                     {new Intl.DateTimeFormat('en-US', {
//                         year: 'numeric',
//                         month: 'long',
//                         day: '2-digit'
//                     }).format(new Date(comment.date))}
//                     </p>
//                 </li>
//             )
//         })
//         return (
//             <div className='col-12 col-md-5 m-1'>
//                 <h4> Comments </h4>
//                 <ul className='list-unstyled'>
//                     {cmnts}
//                 </ul>

//             </div>
//         )
//     }


//     render(){
//         const menuDish = this.props.dishTest

//         console.log(menuDish);
        
//         if (menuDish == null) {
//             return (<div></div>);
//         }

//         const dishItem = this.renderDish(menuDish);
//         const dishComment = this.renderComments(menuDish.comments);

//         return (
//             <div className='row'>
//                 {dishItem}
//                 {dishComment}
//             </div>
//         )
//     }
// }

// export default DishDetail;