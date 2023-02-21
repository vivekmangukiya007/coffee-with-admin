import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react"
import Header from './Header'
import AOS from "aos"
import Footer from './Footer'
import { Link } from "react-router-dom";
AOS.init()

function Index() {
    const [data, setdata] = useState([]);
    const [like, setlike] = useState([]);

    useEffect(() => {
        axios.post("http://localhost/php/AdminPanel/viewData.php")
            .then(function (fetch) {
                setdata([...fetch.data])
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    const handleDetails = (props) => {
        window.location.href = `SingleBlogData/${props}`
    }
    
    const handleLike = (props) => {
        axios.post(`http://localhost/php/AdminPanel/Likes.php?id=${props}`)
            .then((res) => {
                console.log(res)
                console.log("hello")
                // window.location.reload()
            })
    }
    
    useEffect(() => {
        axios.get("http://localhost/php/AdminPanel/GetLikes.php")
            .then(function (fetch) {
                setlike([...fetch.data])
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    useEffect(() => {
        data.map((i, k) => {
            like.map((j) => {
                if (i.id === j.bid) {
                    document.getElementById("l" + k).innerHTML = j.likes + " TotalLikes"
                }
            })
        })
    })
    return (
        <>
            <Header />
            {/* page-header */}
            <header className="page-header" />
            {/* end of page header */}
            <div className="container">
                <div className="page-container">
                    <div className="page-content">
                        <hr />
                        <div className="row">
                            {
                                data.map((i, j) => {
                                    return (
                                        <>
                                            <div className="col-lg-6">
                                                <div className="card text-center mb-5">
                                                    <div className="card-header p-0">
                                                        <div className="blog-media">
                                                            <img src={i.frame} className="w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="card-body px-0">
                                                        <h5 className="card-title mb-2">{i.title}</h5>
                                                        <p className="my-2">{i.description}</p>
                                                    </div>
                                                    <div className="card-footer p-0 text-center">
                                                        <div className="py-2 px-3 d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">

                                                                <button onClick={() => { handleLike(i.id) }} className="btn p-0 mb-2">
                                                                    <i className="fa-solid fs-6 fa-heart" style={{ color: "red", paddingRight: '5px' }}></i><span>Like</span>
                                                                </button>
                                                            </div>
                                                            <div className='p-0 mb-2 '>
                                                                <i className="fa-solid fs-6 fa-heart "  style={{ color: "red", paddingRight: '5px' }}></i><span id={"l" + j}>0 TotalLikes</span>
                                                            </div>
                                                        </div>
                                                        <Link to="SingleBlogData" onClick={() => { handleDetails(i.id) }} className="btn btn-outline-dark btn-sm">READ MORE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Index
