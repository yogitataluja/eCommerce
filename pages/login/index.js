import React, { useState } from 'react'

const Index = () => {
    const [user, setUser]=useState({})
    return (
        <div className="container"> 
        <form>
        <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label"> First name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
        <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label"> Last name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We&aposll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
        
    )
}

export default Index
