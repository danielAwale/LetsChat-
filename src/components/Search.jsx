import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user' />
      </div>
      <div className="userChat">
        <img src="https://scontent.fyvr1-1.fna.fbcdn.net/v/t31.18172-8/13048100_1210519918989003_4755961741411765901_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=lfKnyqOZo7wAX9F1tmS&_nc_ht=scontent.fyvr1-1.fna&oh=00_AfDMyr1imte1Gva5eFaB7f6y1ALBcfKEAXQFVMD2O_NpJQ&oe=63C08533" alt="" />
        <div className="userChatInfo">
          <span>Rahul</span>
        </div>
      </div>
    </div>
  )
}

export default Search