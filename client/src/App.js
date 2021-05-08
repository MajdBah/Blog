import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import CreatePost from './components/createPost';
import ViewPost from './components/viewPost';
import EditPost from './components/editPost';
import axios from 'axios';


class App extends React.Component {

  constructor(props){
    super(props);
    let token = localStorage.getItem('token');
    axios.defaults.headers.common = {'Authorization': token};
  }

  render(){
  return (

    <Router>
      <div>
     <Header></Header>
     <div className="container">
       <div>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/login" component={Login} />
           <Route exact path="/register" component={Register} />
           <Route exact path="/post/create" component={CreatePost} />
           <Route exact path="/post/view/:id" component={ViewPost} />
           <Route exact path="/post/edit/:id" component={EditPost} />
         </Switch>
       </div>
     </div>
    </div>
    </Router>
    
  );
  }
}

export default App;
