import React from 'react'


const Startup = (props) => {
    return (
        <div>
            <div className="container startups-custom">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 startup-profile">
                        <div className="col-md-3">
                            <img src={props.StartUpImg} className="startups-img img-thumbnail" alt="tutahub" />
                        </div>
                        <div className="col-md-9">
                        <a href="https://www.google.com"><h3><span>{props.startUpName}</span></h3></a>
                            <p>{props.detail}</p>
                            <a className="btn btn-default btn-startups" href="https://www.google.com" role="button">See full details</a>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Startup