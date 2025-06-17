import React from 'react'
import "@/app/globals.css";
export default function Contact() {
  return (
        <>
      
      <div className=" text-white py-5">
        <div className="container text-center mb-4">
          <button className="btn btn-outline-light mb-3">Contact</button>
          <h1 className="fw-bold">Get in Touch with Us</h1>
          <p className="highlight">Have questions or need AI solutions? Let us know by filling out the form, and we’ll be in touch!</p>
        </div>

        <div className="container d-flex justify-content-center mb-4">
          <div className="row w-100">
            <div className="col-md-6 mb-3">
              <div className="p-3 bg-dark rounded">
                <h6 className="text-highlight mb-1">E-mail</h6>
                <p className="mb-0">Admin@xtract.com</p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="p-3 bg-dark rounded">
                <h6 className="text-highlight mb-1">Phone</h6>
                <p className="mb-0">+1(969) 819-8061</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <form className="bg-black p-4 rounded">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" id="firstName" className="form-control bg-dark text-white border-0" placeholder="Jane" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" id="lastName" className="form-control bg-dark text-white border-0" placeholder="Smith" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control bg-dark text-white border-0" placeholder="Jane@mail.com" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" id="phone" className="form-control bg-dark text-white border-0" placeholder="+1(969) 819-8061" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" rows="3" className="form-control bg-dark text-white border-0" placeholder="Hi, I am Jane. I want help with…"></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Submit Form</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
