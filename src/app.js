import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import Search from './components/users/Search'
import { Alert } from './components/layout/Alert';
import axios from 'axios'


class App extends Component{
    state = {
        users: [],
        loading: false,
        alert: null
    }

    async componentDidMount() {
        this.setState({loading: true})
        // must use back ticks for variable string syntax (`)
        const res = await axios.get(`https://api.github.com/users`);

        this.setState({users: res.data, loading: false})
    }
    //search github users
    searchUsers = async (text) => {
        console.log(text);
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
        
        //github api user search JSON object is different from initial User Request
        this.setState({users: res.data.items, loading: false})
    }

    clear = () => {
        this.setState({users: [], loading: false})
    }

    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}})
        setTimeout(() => this.setState({alert: null}), 1000)
    }

    render(){
        //destructuring to get rid of this.state._____
        const {users, loading} =  this.state;

        return(
        <div>
            <div>
                <Navbar />
                <div className='flex flex-col'>
                    <Alert alert={this.state.alert}/>
                    <Search 
                        searchUsers={this.searchUsers} 
                        clear={this.clear} 
                        clearable = { users.length > 0 ? true : false}
                        setAlert={this.setAlert}/>
                    <Users loading={loading} users={users}/>
                </div>
            </div>
        </div>
        );
    }
}

export default App; 