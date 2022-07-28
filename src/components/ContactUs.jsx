import React from "react";

export default function ContactUs() {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        id="formContainer"
      >
        <div
          className="card w-50 text-dark bg-light"
          style={{ height: "600px" }}
        >
          <p className="fs-1 text-center">Request for Product info</p>
          <div className="ps-3 pe-3">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Message</span>
                <textarea
                  className="form-control"
                  aria-label="message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
