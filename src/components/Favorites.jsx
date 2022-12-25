import React, { useContext } from 'react'
import { dataContext } from '../context'
import { ToastContainer, toast } from 'react-toastify';


function Favorites() {
  let {favorites, setFavorites} = useContext(dataContext)

  const deleteFav = (item) => {
    setFavorites(favorites.filter((q) => q.name !== item.name))
    notify()
  }
  
  const notify = () => toast("Remove");
  return (
    <div>
      <div>
      <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
        <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth Year</th>
                <th>Height</th>
                <th>Eye color</th>
                <th>Skin color</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                favorites && favorites.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.birth_year}</td>
                    <td>{item.height}</td>
                    <td>{item.eye_color}</td>
                    <td>{item.skin_color}</td>
                    <td><button onClick={()=>deleteFav(item)}>Delete</button></td>
                  </tr>
                ))
              }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Favorites
