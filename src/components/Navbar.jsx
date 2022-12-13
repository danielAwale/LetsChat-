import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Letz Chat!</span>
      <div className="user">
        <img src="https://scontent.fyvr1-1.fna.fbcdn.net/v/t31.18172-8/1490904_698721330168867_2069051041_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=e8O2z2f6wcMAX_T_i6m&_nc_ht=scontent.fyvr1-1.fna&oh=00_AfDkda27-1OTdV1ZKLaNM2ZL4bvCD6s56ys6iL6nDnpUmQ&oe=63C06092" alt="" />
        <span>Daniel</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar