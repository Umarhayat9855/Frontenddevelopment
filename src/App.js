import React, { Component } from 'react';
import Header from './Components/header'; 
//import Body from './Components/body';
import Footer from './Components/footer';
class App extends Component {
  state={ } 
    render(){
      return(
        <div>
        <Header/>
        <Footer/>
      </div>
      );
    }
  }
export default App;
const styles = {
  container: {
    width: "100%",
    
  }
}