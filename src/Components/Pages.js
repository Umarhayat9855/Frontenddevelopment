import React,{Component} from 'react';
import './Pages.css';
export default class Pages extends Component{
     render(){
         return(
             <React.Fragment>
                 <div class="dropdown">
  <button class="dropbtn">PAGES</button>
  <div class="dropdown-content">
    <a href="/Link1">TRACKING</a>
    <a href="/Link2">ELEMENTS</a>
  </div>
</div>
             </React.Fragment>
         );
     }
}
