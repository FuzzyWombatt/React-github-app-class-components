import React from 'react';
import PropTypes from 'prop-types'

const UserItem = ({user: {login, avatar_url,html_url}}) => {
    return(
        <div className='flex flex-col items-center border-2'>
            <img
                src={avatar_url}
                alt=''
                className='m-2 rounded-full w-1/3 lg:w-1/4'
            />
            <h3 className='mb-2'>{login}</h3>
            <div className='mb-6'>
                <a className='bg-gray-600 pt-1 pb-1 pr-6 pl-6 text-center text-white border-2' href={html_url}>
                    More
                </a>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    users: PropTypes.object.isRequired,
}

export default UserItem
