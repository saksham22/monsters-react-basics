import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card.component';
import Searchbox from './components/search-box/search-box.component';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  constructor(){
    super();
    this.state = {
      // string: "Hello Saksham"
      monsters:[
        {
          name:'Frankenstein',
          id:'1'
        },
        {
          name:'Dracula',
          id:'2'
        },
        {
          name:'Zombie',
          id:'3'
        },
      ],
      searchField:''
    };
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/').then(response=> response.json()).then(users=>this.setState({monsters:users}))
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(

      <div className='App'>
        <h1>Monsters Roladex</h1>
        
        
        {/* <input type='search' placeholder='search monster' onChange={e => this.setState({searchField:e.target.value})}/> */}
        <Searchbox placeholder="Search Monsters" handleChange={e => this.setState({searchField:e.target.value})}/>

      
  <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}


export default App;
