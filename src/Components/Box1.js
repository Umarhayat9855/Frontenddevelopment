import React,{Component} from 'react';
import Money from './Money'; 
import './Box1.css';
export default class Box1 extends Component{
    render(){
        return(
         
                <div className="Mbox">
                <Money></Money>
                <a href="/Money"><h6>MONEY BACK GUARANTEE</h6></a>
                <h6 className="para">Shall open divide a one</h6>
                </div>
             
        );
    }
}