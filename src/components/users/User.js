import React, { Component, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Repos from '../repos/Repos'


export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getRepos(this.props.match.params.login);
        //console.log(this.props.user)
    }
    //checking for types....essentially typescript esque functionailty 
    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
        getRepos: PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired
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
            following,
            public_repos,
            public_gists,
            hireable,
            company
        } = this.props.user;

        const {loading, repos} = this.props
        
        if(loading) return <Spinner/>
        
        return (
           <Fragment>
               <div className='h-screen w-11/12 self-center'>
                    <div className='flex mb-2'>
                        <Link to='/' className='w-1/8 bg-gray-600 pt-1 pb-1 pr-6 pl-6 text-center text-white border-2 hover:bg-gray-200 hover:text-black'>
                            Back
                        </Link>
                        <div>
                            Hireable: {' '}
                            {hireable ? <FontAwesomeIcon icon={faCheck} className='text-green-700'/> : <FontAwesomeIcon icon={faTimesCircle} className='text-red-800'/>}
                        </div>
                    </div>
                    <div className='grid grid-cols-2 border-2 '>
                        <div className='flex flex-col items-center text-center content-center justify-center'>
                            <img src={avatar_url} alt='' className='rounded-full w-150'/>
                            <h1>{name}</h1>
                            <p>Location: {location}</p>
                        </div>
                        <div>
                            {bio && (<Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>)}
                            <a href={html_url} className='text-white bg-gray-600 mb-2 align-middle border-2 p-1 hover:bg-gray-200 hover:text-black'>Visit Github Profile</a>
                            <ul>
                                <li>
                                    {login && (<Fragment>
                                        <strong>Username: </strong>{login}
                                    </Fragment>)}
                                </li>
                                <li>
                                    {company && (<Fragment>
                                        <strong>Company: </strong>{company}
                                    </Fragment>)}
                                </li>
                                <li>
                                    {blog && (<Fragment>
                                        <strong>Website: </strong>{blog}
                                    </Fragment>)}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-2 flex flex-row justify-center'>
                        <div className='m-1 pr-2 pl-2'>Followers: {followers}</div>
                        <div className='m-1 pr-2 pl-2'>Following: {following}</div>    
                        <div className='m-1 pr-2 pl-2'>Public Repos: {public_repos}</div>    
                        <div className='m-1 pr-2 pl-2'>Public Gists: {public_gists}</div>                                             
                    </div>
                    <Repos repos={repos}/>
                </div>
           </Fragment>
        )
    }
}

export default User
