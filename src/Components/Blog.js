import React,{Component} from 'react';
import './Blog.css';
export default class Blog extends Component{
     render(){
         return(
             <React.Fragment>
                 <div class="dropdown">
  <button class="dropbtn">BLOG</button>
  <div class="dropdown-content">
    <a href="/Link1">BLOG</a>
    <a href="/Link2">BLOG DETAILS</a>
  </div>
</div>
             </React.Fragment>
         );
     }
}
