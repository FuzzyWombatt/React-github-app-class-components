import React, { Component, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
        console.log(this.props.user)
    }
    //checking for types....essentially typescript esque functionailty 
    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
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
        
        if(loading) return <Spinner/>
        
        return (
           <Fragment>
               <Link to='/' className='w-1/8 bg-gray-600 pt-1 pb-1 pr-6 pl-6 text-center text-white border-2 hover:bg-gray-200 hover:text-black'>
                   Back
               </Link>
                Hireable: {' '}
                {hireable ? <FontAwesomeIcon icon={faCheck} className='text-green-700'/> : <FontAwesomeIcon icon={faTimesCircle} className='text-red-800'/>}
           </Fragment>
        )
    }
}

export default User
