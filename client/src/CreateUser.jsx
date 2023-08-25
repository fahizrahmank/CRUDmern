import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function CreateUser() {
  const nav = useNavigate()

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { name, email, age })
      .then((result) => console.log(result))
      .catch((err) => {
        console.log(err)});
        nav('/')
  };

  return (
    <div>
      <form action="POST" onSubmit={submit}>
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center">
            <MDBCol lg="9" className="my-5">
              <h1 class="text-black mb-4">Add new user</h1>

              <MDBCard>
                <MDBCardBody className="px-4">
                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Full name</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label="Email"
                        size="lg"
                        id="form1"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Email address</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label="example@example.com"
                        size="lg"
                        id="form2"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Age"
                      size="lg"
                      id="form5"
                      type="rel"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </MDBCol>

                  <MDBBtn className="my-4" size="lg">
                    Submit
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </div>
  );
}

export default CreateUser;
