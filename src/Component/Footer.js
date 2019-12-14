import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid footer-custom">
                <div className="row">
                    <div className="col-md-6">
                        <p className="footer-text">© 2017 KawoLegal. All Rights Reserved</p>
                    </div>
                    <div className="col-md-6 media-icons">
                        <i><a href="https://facebook.com" className="fa fa-facebook">#</a></i>
                        <i><a href="https://twitter.com" className="fa fa-twitter">#</a></i>
                        <i><a href="https://www.instagram.com" className="fa fa-instagram">#</a></i>
                        <i><a href="https://linkedIn.com" className="fa fa-linkedin">#</a></i>
                    </div>
                </div>
            </div>
        </footer>


    )
}
export default Footer