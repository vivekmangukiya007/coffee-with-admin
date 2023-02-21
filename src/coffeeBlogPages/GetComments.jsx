import React,{useEffect,useState} from 'react'
import axios from 'axios'
function GetComments(props) {
  const [data, setdata] = useState([])

  useEffect(() => {
    axios.post(`http://localhost/php/AdminPanel/GetComments.php?id=${props.data}`)
      .then(function (res) {
        setdata(res.data)
      })
  })
  return (
    <>
      <h6 className="mt-5 mb-3 text-center"><a href="#" className="text-dark">Comments</a></h6>
      <hr />
      {
        data.map((i, j) => {
          return (
            <>
              <div className="media mt-4">
                <div className="media-body">
                  <h6 className="mt-0">{i.name}</h6>
                  <p>{i.comment}</p>
                </div>
              </div>
              <hr />
            </>
          )
        })
      }

    </>
  )
}

export default GetComments
