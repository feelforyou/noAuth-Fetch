import React from 'react'

const SearchOutput = ({users}) => {
  return (
    <div className='Search-container'>    
        {users.map((user)=>{
            const {html_url, avatar_url, login,id} =user
            return <div className='SearchOutput' key={id}>
                <a href={html_url} rel="noreferrer" target='_blank'>
                  <p className='login'>{login}</p>
                  </a>
                <a href={html_url} rel="noreferrer" target='_blank'>
                  <img src={avatar_url} alt='user avatar' height='50px' width='50px' />
                  </a>
            </div> 
            
        })}

  


    </div>
            
  )
}

export default SearchOutput