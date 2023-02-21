import React from 'react'

function Footer() {
  return (
    <>
     {/* Page Footer */}
     <footer className="page-footer">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-3 text-center text-md-left mb-3 mb-md-0">
                            <img src="https://coffeeaffection.com/wp-content/uploads/elementor/thumbs/Coffee-Affection-primary-logo-p8bq4id59gotp1vm7anm2tyicszbbbc2gr4nzgd4ty.png" className="logo" />
                        </div>
                        <div className="col-md-9 text-center text-md-right">
                            <div className="socials">
                                <a href="#" className="font-weight-bold text-muted mr-4"><i className="fa-brands fa-facebook-f pr-1" /> 123,345</a>
                                <a href="#" className="font-weight-bold text-muted mr-4"><i className="fa-brands fa-twitter pr-1" /> 321,534</a>
                                <a href="#" className="font-weight-bold text-muted mr-4"><i className="fa-brands fa-pinterest-p pr-1" /> 543,312</a>
                                <a href="#" className="font-weight-bold text-muted mr-4"><i className="fa-brands fa-instagram pr-1" /> 123,023</a>
                                <a href="#" className="font-weight-bold text-muted mr-4"><i className="fa-brands fa-youtube pr-1" /> 231,043</a>
                            </div>
                        </div>
                    </div>
                    <p className="border-top mb-0 mt-4 pt-3 small">©Copy Right, Created By <a href="#" className="text-danger font-weight-bold">Glass Info.</a> Allrights reserved
                    </p>
                </div>
            </footer>
            {/* End of Page Footer */} 
    </>
  )
}

export default Footer
