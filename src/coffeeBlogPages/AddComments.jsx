import React from 'react'
import axios from 'axios'
function AddComments(props) {
    const handleSubmit = () => {
        const form = document.getElementById('form')
        const comt = [form.elements[0].value, form.elements[1].value,
        form.elements[2].value]
        const fdata = new FormData()
        fdata.append("cid", props.data)
        fdata.append("name", comt[1])
        fdata.append("email", comt[2])
        fdata.append("comment", comt[0])
        axios.post("http://localhost/php/AdminPanel/AddComments.php", fdata)
            .then(function () {
                window.location.reload()
            })
    }
    return (
        <>  
            <h6 className="mt-5 mb-3 text-center"><a href="#" className="text-dark">Write Your Comment</a></h6>
            <form onSubmit={handleSubmit} id='form'>
                <div className="form-row">
                    <div className="col-12 form-group">
                        <textarea name id cols={30} rows={10} required className="form-control" placeholder="Enter Your Comment Here" defaultValue={""} />
                    </div>
                    <div className="col-sm-6 form-group">
                        <input type="text" className="form-control" required placeholder='Enter Name' />
                    </div>
                    <div className="col-sm-6 form-group">
                        <input type="email" className="form-control" required placeholder="Enter Email" />
                    </div>
                    <div className="form-group col-12">
                        <input type="submit" className="btn btn-primary btn-block" value="Post Comment"></input>

                        {/* <button className="btn btn-primary btn-block">Post Comment</button> */}
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddComments
