
import React,{Component} from 'react';
import './Shop.css';
export default class Shop extends Component{
     render(){
         return(
             <React.Fragment>
                 <div class="dropdown">
  <button class="dropbtn">SHOP</button>
  <div class="dropdown-content">
    <a href="/Link1">SHOP CATEGORY</a>
    <a href="/Link2">PRODUCT DETAIL</a>
    <a href="/Link3">PRODUCT CHECKOUT</a>
    <a href="/Link4">SHOPPING CHECKOUT</a>
  </div>
</div>
             </React.Fragment>
         );
     }
}
