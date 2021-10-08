import React, { Component } from 'react'

export class Search extends Component {
   //when form keep component level state
    state = {
       text: "",
   }

   onChange = (e) => {
       this.setState({text: e.target.value})
   }
   //if not an => function have to bind method with this.onSubmit.bind(this)
   onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === ''){
            //type for alert.type is actually tailwind colors
           this.props.setAlert('Please enter something', 'gray-100')
        } else{
            //passes data up to App level
            this.props.searchUsers(this.state.text);
            // resets form
            this.setState({text: ''});
        }
       
   }

    render() {
        return (
            <div className='self-center flex flex-col w-11/12'>
                <form className='flex flex-col' onSubmit={this.onSubmit}>
                    <input className='border-2 mb-4 mt-4' type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}></input>
                    <input className='text-white bg-gray-600 mb-2 border-2 p-1 cursor-pointer hover:bg-gray-200 hover:text-black' type="submit" value="Search"></input>
                </form>
                {this.props.clearable && (<button className='text-white bg-gray-600 mb-2 align-middle border-2 p-1 hover:bg-gray-200 hover:text-black' onClick={this.props.clear}>Clear</button>)}
            </div>
        )
    }
}

export default Search
