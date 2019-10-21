import React ,{ Component } from 'react';
import './header.css';
import Mlogo from './Mlogo';
import Shop from './Shop';
import Blog from './Blog';
import Pages from './Pages';
import Mpic from './Mpic';
import Pict from './Pict';
//import Box1 from './Box1';
//import Box2 from './Box2';
///import Box3 from './Box3';
class Header extends Component {
    state = {
        headerPhone:"03415584181",
        
     }
    render(){
        return(
          //  <div style={styles.container}>
          // <h5 fontstyles={fontstyles.container}><span>{this.state.headerPhone}</span><br/></h5>
       // </div>
<div>
<div className="Info">
    <ul className="Info1">
           <li>PHONE: +92 341 5584181</li>
           <li>|</li>
           <li><a href="EMAIL:">INFO@EISER.COM</a></li>
           <li>
               <ul className="Info3">
                   <li><a href="/Gift-Card">GIFT CARD</a></li>
                   <li>|</li>
                   <li><a href="/Trak-Card">TRACK CARD</a></li>
                   <li>|</li>
                   <li><a href="/Gift-Card">CONTACT US</a></li>
               </ul>
           </li>
       </ul>
       </div>
       <div>
        <ul className="main2">
            <li><a href="/home" className="Li"><Mlogo></Mlogo></a></li>
            <li className="main3">
                <ul>
                <li><a href="/home" className="li1">HOME</a></li>
                <li><a href="/home"><Shop></Shop></a></li>
                <li><a href="/home"><Blog></Blog></a></li>
                <li><a href="/home"><Pages></Pages></a></li>
                <li><a href="/home" className="lil">CONTACT</a></li>
                </ul>
            </li>
        </ul>
        </div> 
        <Mpic></Mpic>
        <Pict></Pict>
        
        
        
        
</div>
        );
    }
}

export default Header;
/*const styles={
    container: {
        width:"100%",
        height:20,
        background:"#d2d3d2"
    }
}
    const fontstyles={
        container1: {
            position: "float-left",
           // left: "200px"
}
    }*/