import React, { Component } from 'react'

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
        console.log(this.props.user)
    }

   
    render() {
        const{
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            Follwing,
            public_repos,
            piblic_gists,
            hireable
        } = this.props.user;

        const {loading} = this.props

        return (
            <div>
               {name}
            </div>
        )
    }
}

export default User
