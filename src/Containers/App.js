import React,{ Component } from 'react';
import { SearchBox } from '../Components/searchbox';
import { CardNames } from '../Components/CardNames';
import Scrool from '../Components/Scroll';
import {robots} from '../Components/roboInform';

class App extends Component{
    constructor() {
        super();
        this.state={
            robots: robots,
            searchField: ''
        }
    }

    //componentDidMount(){
      //  fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
       // .then(users=>this.setState(this.state.robots=users));
    //}
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value});
    }

    render(){
        const matchedRobot=this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            }
        )
        return(
            <div className='tc'>
                <h1 className='f1 i'>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scrool>
                    <CardNames robots={matchedRobot} />
                </Scrool>
                
            </div>
        );
    }
}

export default App;