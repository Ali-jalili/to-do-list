import React from 'react'

const ListItmes = ({ listItmes, deletItem, setIsUpdating, isUpdating, Update }) => {
  return (
    <div className='todo-listItems'>

      {
        listItmes.map(item => (

          <div className='todo-item' >

            {
              isUpdating === item._id ? Update() : <>
                <p className='item-content'>{item.item}</p>


                <button className='update-item' onClick={() => { setIsUpdating(item._id) }}>Update</button>
                <button className='delete-item' onClick={() => { deletItem(item._id) }}>Delete</button>


              </>
            }

          </div>

        ))

      }

    </div>
  )
}

export default ListItmes;