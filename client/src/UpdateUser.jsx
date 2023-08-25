import React,{useState,useEffect} from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function UpdateUser() {
  const { id } = useParams();

  const nav = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();


  useEffect(()=> {
    axios.get('http://localhost:3001/getUser/'+ id)
    .then(result => console.log(result))
    .catch(err=> console.log(err))
  })

  return (
    <div>
      <form action="">
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center">
            <MDBCol lg="9" className="my-5">
              <h1 class="text-black mb-4">Update user</h1>

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
                    />
                  </MDBCol>

                  <MDBBtn className="my-4" size="lg">
                    Update
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

export default UpdateUser;
