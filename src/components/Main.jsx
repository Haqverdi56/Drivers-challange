import React, { useEffect, useState, useContext } from 'react'
import { Oval } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dataContext } from '../context'

function Main() {
  const [datas, setDatas] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false)
  let {favorites, setFavorites} = useContext(dataContext);
  
  const fillData = () => {
    if(pageCount<1 || pageCount > 9) {
      return pageCount
    }
    fetch(`https://swapi.dev/api/people?page=${pageCount}`)
      .then(res => res.json())
      .then(res=> {
        setDatas(res.results)
        console.log(res)
        setLoading(false)
      })
      .catch(err=> {
        console.log("err", err)
      })
  }

  useEffect(() => {
    setLoading(true)
    fillData()
  }, [pageCount])

  const pageCounter = (e) => {
    console.log(e.target.innerText);
    if(e.target.innerText == 'Prev') {
      if(pageCount<2) {
      return pageCount
      }else {
        setPageCount(pageCount-1)
      }
    }else {
      if(pageCount>8) {
        return pageCount
        }else {
          setPageCount(pageCount+1)
        }
    }
  }

  const addToFavorites = (item) => {
    let filteredFavorites = favorites.find((q) => q.name == item.name);

    if (!filteredFavorites) {
      setFavorites([...favorites, item]);
    }
    console.log(favorites);
    notify()
  };
    
  const notify = () => toast("Wow so easy !");

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
              <th>Add to Favorite</th>
            </tr>
          </thead>
          <tbody>
            {
              loading ? <Oval
              height='350px'
              width="350px"
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2} />
              :
              datas && datas.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.birth_year}</td>
                  <td>{item.height}</td>
                  <td>{item.eye_color}</td>
                  <td>{item.skin_color}</td>
                  <td><button onClick={()=> addToFavorites(item)}>Add Favorite</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={pageCounter}>Prev</button>
        <button onClick={pageCounter}>Next</button>
        <span>{pageCount}</span>
      </div>
    </div>
  )
}

export default Main;