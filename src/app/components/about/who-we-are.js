import React from 'react'
import { AiFillSignal } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { FaBolt } from "react-icons/fa6";

function Who() {
    return (
        <div>
        <div className='d-flex flex-column align-items-center text-center mt-5 px-3'>
  <h5>Who We Are</h5>
  <h2 className='mt-2 fw-bold'>Who We Are</h2>
  <p className='mt-3' style={{ maxWidth: "545px" , color: "grey" }}>
    Xtract is a team of innovators dedicated to making AI automation simple and effective. 
    We help businesses streamline workflows, boost efficiency, and scale with smart, AI-driven solutions.
  </p>
</div>

<div className="container my-5">
<div className="row justify-content-center g-4">
  {/* Column 1 */}
  <div className="col-md-3">
    <div className="p-3 shadow rounded bg-gradient text-white" style={{ width: "100%", margin: "0 auto" }}>
      <div className="d-flex gap-2 mb-2">
        <AiFillSignal size={25} style={{ color: "white" }} />
        <h5 className="mb-0 text-white">150+ Businesses</h5>
      </div>
      <p className="text-grey" style={{ maxWidth: "250px", margin: "0 auto", color: "#ccc" }}>
        Companies have streamlined their workflows with Xtract’s AI solutions.
      </p>
    </div>
  </div>

  {/* Column 2 */}
  <div className="col-md-3">
    <div className="p-3 shadow rounded bg-gradient text-white" style={{ width: "100%", margin: "0 auto" }}>
      <div className="d-flex gap-2 mb-2">
        <CiClock2 size={25} style={{ color: "white" }} />
        <h5 className="mb-0 text-white">1M+ Hours</h5>
      </div>
      <p className="text-grey" style={{ maxWidth: "250px", margin: "0 auto", color: "#ccc" }}>
        Reducing manual work and boosting productivity through automation.
      </p>
    </div>
  </div>

  {/* Column 3 */}
  <div className="col-md-3">
    <div className="p-3 shadow rounded bg-gradient text-white" style={{ width: "100%", margin: "0 auto" }}>
      <div className="d-flex gap-2 mb-2">
        <FaBolt size={25} style={{ color: "white",}} />
        <h5 className="mb-0 text-white">95% Faster</h5>
      </div>
      <p className="text-grey" style={{ maxWidth: "250px", margin: "0 auto", color: "#ccc" }}>
        Clients see improved efficiency within the first three months of usage.
      </p>
    </div>
  </div>
</div>
    </div>


</div>

    )
}

export default Who
