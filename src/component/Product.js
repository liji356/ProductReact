import React, { useState } from 'react'
import Header from './Header'

const Product = () => {

    var[Name,setName]=useState("")
    var[Price,setPrice]=useState("")
    var[description,setDescription]=useState("")


    const changePro=()=>{
        const data={"Name":Name,"Price":Price,"description":description}
        console.log(data)
    }
  return (
    <div>
        <Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(x)=>{setName(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Price</label>
                    <input onChange={(x)=>{setPrice(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Description</label>
                    <input onChange={(x)=>{setDescription(x.target.value)}} type="text" className="form-control"/>
                    <div className="col col-12 col-sm-6 col-md-6 col-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button  onClick={changePro} className="btn btn-primary">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Product