import React from "react";
import DocumentSVG from "../src/Assests/undraw_folder_39kl.svg";
// import { Layout, Menu, Breadcrumb } from "antd";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Jumbotron,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <div>
        <Navbar className="fixed-top" bg="light" expand="lg">
          <Navbar.Brand href="/">Json Converter</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
            <Button variant="outline-success">SignIn</Button>
            <Button variant="outline-success">Signup</Button>
            <Button variant="btn btn-danger">Logout</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <div className="jumbotron jumbotron-fuid jumbo1">
          <div className="row">
            {" "}
            <div className="col-md-4 text-center overlap pt-5">
              <h1 className="display-3">JSON Converter</h1>
              <h3 className="text-dark">
                Convert your JSON files in 3 quick steps
              </h3>
            </div>
            <div className="col-md-2 overlap"></div>
            <div className="col-md-6 overlap">
              <img src={DocumentSVG} width={600} height={400} />
            </div>
          </div>
        </div>{" "}
        <div className="jumbotron jumbotron-fuid jumbo2">
          <div className="row text-white ">
            <h1 className=" col text-center pt-4">Three simple steps</h1>
          </div>
          <div className="row text-white">
            <div class="card-deck">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title h3 text-light text-center">
                    Upload Json File
                  </h5>
                  <p class="card-text text-light text-center">
                    Click on the upload button in the below section and browse
                    the image you want to convert
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-light text-center h3">
                    Select format
                  </h5>
                  <p class="card-text text-light text-center">
                    Select the format you want your json file converted to
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-light text-center">
                    Auto Download File
                  </h5>
                  <p class="card-text text-light text-center">
                    Please make sure to login and the file will automatically
                    download in the selected format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron-fuid jumbo3 text-center">
          {/* Start form */}
          {/* break
          break
          break
          break */}
          <form>
            <div className="form-row align-items-center">
              <div className="col-md-4">
                <input type="file" style={{ color: "white" }}></input>
              </div>
              <div className="col-md-3">
                <select className="custom-select" defaultValue={""}>
                  <option value="" disabled>
                    Choose File type to Convert
                  </option>
                  <option value="">XLS</option>
                  <option value="">CSV</option>
                  <option value="">XLSM</option>
                  <option value="">XLSB</option>
                  <option value="">XLSX</option>
                </select>
              </div>

              <div class="col-md-2">
                <button class="btn btn-danger text-center ">
                  Convert NOW!!
                </button>
              </div>
            </div>
          </form>

          {/* End FOrm */}
        </div>
        <div className="jumbotron jumbotron-fuid jumbo4 ">
          <div className="row">
            <h1 className="col text-center text-light">
              JSON Converter Footer
            </h1>
          </div>
          <div className="row ">
            <div className="col text-center text-light">
              Copyright © 2020 JSON Converter. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
