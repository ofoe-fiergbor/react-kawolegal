import React from 'react'


const SeachBar =()=>{
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <form>
                            <div className="row">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="search Startup by name or industry" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary" type="search">
                                            <span className="glyphicon glyphicon-search"> Search</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SeachBar