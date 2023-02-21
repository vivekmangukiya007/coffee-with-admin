import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Breadcrumb, Col, Container, Row } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"
import {Link} from "react-router-dom"
import joeblog from "./css/joeblog.css"
import AddComments from "./AddComments"
import GetComments from "./GetComments"
// import { Comments } from "./comments"

export const SingleBlogData = () => {
    const [data, setdata] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost/php/AdminPanel/singleBlog.php?id=${id}`)
            .then(function (fetch) {
                setdata(fetch.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    return (
        <>
            <Header/>

            {
                data.map((i) => {
                    return (
                        <>
                            <div>
                                {/* Page Header */}
                                <header className="page-header page-header-mini">
                                    <h1 className="title">{i.title}</h1>
                                    <ol className="breadcrumb pb-0">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{i.title}</li>
                                    </ol>
                                </header>
                                {/* End Of Page Header */}
                                <section className="container">
                                    <div className="page-container">
                                        <div className="page-content">
                                            <div className="card">
                                                <div className="card-header pt-0">
                                                    <h3 className="card-title mb-4">{i.title}</h3>
                                                    <div className="blog-media mb-4">
                                                        <img src={i.frame} alt className="w-100" />
                                                    </div>
                                                </div>
                                                <div className="card-body border-top">
                                                    <p className="my-3">{i.description}</p>
                                                </div>
                                                <div className="card-footer">
                                                    
                                                    <GetComments data={id}/> 
                                                    <AddComments data={id}/>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            
                        </>
                    )
                })
            }

            <Footer/>
        </>
    )
}