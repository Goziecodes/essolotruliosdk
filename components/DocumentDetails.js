import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Profile from "../public/Iconly/Light/Profile.svg";
import Paper from "../public/Iconly/Light/Paper.svg";
import Paper2 from "../public/Iconly/Light/Paper Upload.svg";
import Upload from "../public/Iconly/Light/Upload.svg";
import { FiUploadCloud } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';





export default function DocumentDetails({ startCapture, setSelected, setAutoCapture, onVerifyUser, setSpin, spin, docFrontComplete, docBackComplete, loading, result, setActiveTab, imageFrontError,
  imageBackError, livePhotoError, autoCapture, documentPageError, setDocumentPageError  }) {
  const [step, setStep] = useState(1);
  const [document, setDocument] = useState('ID');

  console.log({loading, result})
  console.log({imageFrontError})

  const {
    register: DocumentDetailsRegister,
    handleSubmit: DocumentDetailsRegisterHandleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();


  const documentDetailsonSubmit = (data) => {
    setDocument(data.document);
    setStep(1)
  };

  const Formdiv = styled.div`
width: 100%;
background: linear-gradient(
0deg
, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), #FFFFFF;

.form{
  width: 100%;
}



.buttonBox{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a{
    color: white;
  }
}

  .headerBox {
    height: 180px;
    display: flex;
    flex-direction: column;
    ${"" /* justify-content: center; */}
    align-items: center;
    justify-content: space-between;
  }

  .box {
    ${"" /* background: red; */}
    display: flex;
    flex-direction: column;
    ${"" /* justify-content: center; */}
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-style: normal;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.005em;
    color: rgba(0, 0, 0, 0.4);
    ${"" /* padding: 1px; */}
    ${"" /* margin-top: 25px; */}
  }

  .signinText {
    font-style: normal;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.4);
  }

  .uploadBox{
    display: flex;
  }

  .UploadContainer {
  display: flex;
  width: 157.5px;
  height: 157.5px;
  padding: 20px;
  border-radius: 20px;
  position: relative;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(111.69deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.025) 100.12%), #FFFFFF;
  box-shadow: inset -4px -4px 8px #FFFFFF, inset 4px 4px 8px rgba(0, 0, 0, 0.16);
  margin: 0px 10px;

  .set{
    position: absolute;
    top: 37px;
    left: 68px;
  }

  .uploadfield {
    width: 100%;
    height: 100%;
    background: linear-gradient(111.69deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.025) 100.12%), #FFFFFF;
    border: none;
    font-style: normal;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    font-size: 13px;
    text-align: center;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.4);
  }
  }

  .inputContainer {
  display: flex;
  width: 100%;
  position: relative;
  margin: 20px 0px;
  flex-direction: column;

  .user{
    position: absolute;
    top: 12px;
    left: 17px;
}

  .iconCircle{
padding: 12px;
width: 48px;
height: 48px;
left: -8px;
top: 12px;
background: linear-gradient(111.69deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.025) 100.12%), #FFFFFF;
box-shadow: -4px -4px 8px #FFFFFF, 4px 4px 8px rgba(0, 0, 0, 0.16);
border-radius: 24px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 20px;
}

  .err{
    font-style: normal;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: orangered;
    text-align: center;
  }
}
  .checkboxContainer {
  ${"" /* width:100%; */}
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 22px;
  font-family: 'Poppins', sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkboxContainer input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}



/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #d0d0d0;
  border-radius: 10px;
}

/* On mouse-over, add a grey background color */
.checkboxContainer:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a red background */
.checkboxContainer input:checked ~ .checkmark {
  background-color: rgba(141, 25, 25, 1);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkboxContainer input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkboxContainer .checkmark:after {
  left: 10px;
  top: 7px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkboxContainer .termsText {
font-style: normal;
font-family: 'Poppins', sans-serif;
font-weight: 200;
font-size: 14px;
line-height: 150%;
letter-spacing: 0.005em;

}



  .user{
    position: absolute;
    top: 12px;
    left: 17px;
    background: 'green';
}
  .user2{
    position: absolute;
    top: 24px;
    right: 17px;
}

  }
  .field {
    ${"" /* width: 400px; */}
    height: 48px;
    padding: 12px 50px;
    background: linear-gradient(
        291.76deg,
        rgba(0, 0, 0, 0.05) 0.12%,
        rgba(0, 0, 0, 0.025) 100%
      ),
      #ffffff;
    box-shadow: inset -4px -4px 8px #ffffff,
      inset 4px 4px 8px rgba(0, 0, 0, 0.16);
    border-radius: 24px;
    border: none;
    font-style: normal;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    font-size: 14px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.4);
  }
  .moreHeight {
    height: 72px;
    border-radius: 42px;
    padding: 12px 80px;


  }
`;

  const Signup = styled.button`
  width: 225px;
  height: 48px;
  background: linear-gradient(
      180deg,
      rgba(211, 121, 121, 0.5) 0%,
      rgba(141, 25, 25, 0.5) 100%
    ),
    #8d1919;
  box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(0, 0, 0, 0.16);
  border-radius: 24px;
  border: none;

  font-style: normal;
  font-weight: normal;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: white;
`;

  return (
    <>
      {step === 0 && (
        <div>
          <div className="descriptionText">
            <p>
              Select and upload any of the documents below. Only the following
              documents listed below will be accepted, all others will be
              rejected.
            </p>
          </div>

          <Formdiv>
            <div className="">
              {/* <div className="box"> */}

              <form className="form" onSubmit={DocumentDetailsRegisterHandleSubmit(documentDetailsonSubmit)}>
                {/* <div className="inputContainer">
                <Location className="user" style={{ width: "40px" }} />
                <input
                  className="field"
                  type="text"
                  placeholder="Country"
                  {...register("country", {
                    required: {
                      value: true,
                      message: "country is required",
                    },
                  })}
                />
                <span className="err">{errors.country?.message}</span>
              </div> */}

                <div className="inputContainer">
                  <div className="iconCircle user">
                    <Profile className="" style={{ width: "40px" }} />
                  </div>
                  <input
                    className="field moreHeight"
                    type="text"
                    disabled
                    placeholder="Government issued ID card"
                  // {...DocumentDetailsRegister("id", {
                  //   required: {
                  //     value: false,
                  //     message: "password is required",
                  //   },
                  // })}
                  />
                  <label className="checkboxContainer user2">
                    <div className="d-flex">
                      <input
                        name="document"
                        type="radio"
                        value='ID'
                        // defaultChecked
                        {...DocumentDetailsRegister("document", {
                          required: false,
                        })}
                        id="acceptTerms"
                        className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""
                          }`}
                      />
                      <span className="checkmark"></span>
                    </div>
                  </label>
                </div>

                <div className="inputContainer">
                  <div className="iconCircle user">
                    <Paper className="" style={{ width: "40px" }} />
                  </div>
                  <input
                    className="field moreHeight"
                    type="text"
                    disabled
                    placeholder="PassPort"
                  // {...DocumentDetailsRegister("passport", {
                  //   required: {
                  //     value: false,
                  //     message: "password is required",
                  //   },
                  // })}
                  />
                  <label className="checkboxContainer user2">
                    <div className="d-flex">
                      <input
                        name="document"
                        type="radio"
                        value={'passport'}
                        // defaultChecked
                        {...DocumentDetailsRegister("document", {
                          required: false,
                        })}
                        id="acceptTerms"
                        className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""
                          }`}
                      />
                      <span className="checkmark"></span>
                    </div>
                  </label>
                </div>

                <div className="inputContainer">
                  <div className="iconCircle user">
                    <Paper2 className="" style={{ width: "40px" }} />
                  </div>
                  <input
                    disabled
                    className="field moreHeight"
                    type="text"
                    value='driverLicense'
                    placeholder="Driver’s license"
                  // {...DocumentDetailsRegister("drivingLicence", {
                  //   required: {
                  //     value: false,
                  //     message: "password is required",
                  //   },
                  // })}
                  />
                  <label className="checkboxContainer user2">
                    <div className="d-flex">
                      <input
                        name="document"
                        type="radio"
                        value='DriverLicense'
                        // defaultChecked
                        {...DocumentDetailsRegister("document", {
                          required: false,
                        })}
                        id="acceptTerms"
                        className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""
                          }`}
                      />
                      <span className="checkmark"></span>
                    </div>
                  </label>
                </div>

                <div className="buttonBox">
                  <Signup
                    className="mt-4"
                    type="submit"
                  // onClick={() => setStep(1)}
                  >
                    {/* {mutation.isLoading ? ( */}
                    {/* <Spinner animation="border" variant="light" /> */}
                    {/* ) : ( */}
                    Continue
                    {/* )} */}
                  </Signup>
                </div>
              </form>
            </div>
          </Formdiv>
        </div>
      )}
      {step === 1 && (
        <div>
          <div className="descriptionText">
            <p>Upload Document for Verification.</p>
          </div>

          <Formdiv>
            <div className="">
              {/* <div className="box"> */}

              <form className="form" onSubmit={DocumentDetailsRegisterHandleSubmit(documentDetailsonSubmit)}>

                <div className="inputContainer">
                  <input
                    className="field moreHeight"
                    type="text"
                    disabled
                    placeholder="Auto capture"
                  />
                  <label className="checkboxContainer user2">
                    <div className="d-flex">
                      <input
                        // name="AutoCapture"
                        type="radio"
                        value='true'
                        // defaultChecked
                        checked={autoCapture}
                        onClick={() => setAutoCapture(true)}
                        {...DocumentDetailsRegister("AutoCapture", {
                          required: false,
                        })}
                        id="acceptTerms"
                        className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""
                          }`}
                      />
                      <span className="checkmark"></span>
                    </div>
                  </label>
                </div>

                <div className="inputContainer">
                  <input
                    className="field moreHeight"
                    type="text"
                    disabled
                    placeholder="Manual capture"
                  />
                  <label className="checkboxContainer user2">
                    <div className="d-flex">
                      <input
                        // defaultChecked
                        // name="AutoCapture"
                        type="radio"
                        value='false'
                        onClick={() => setAutoCapture(false)}
                        {...DocumentDetailsRegister("AutoCapture", {
                          required: false,
                        })}
                        id="acceptTerms"
                        className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""
                          }`}
                      />
                      <span className="checkmark"></span>
                    </div>
                  </label>
                </div>
                <div className="uploadBox">
                  <div className="UploadContainer" onClick={() => {
                    setSelected(() => 'DocumentFront')
                    startCapture('DocumentFront');
                  }}>
                    <div>
                    
                      {
                        spin === 'docFront' ? <Spinner animation="border" size="lg" /> : docFrontComplete === true ? <FaCheckCircle color="green" size={50} />  : imageFrontError === true ? <FiUploadCloud size={50}/> : <FiUploadCloud size={50} />
                      }
                    </div>
                    {
                      docFrontComplete ? (null) : (<h6 className={`${imageFrontError ? "text-danger" : null}`}>{`${imageFrontError === true  ? 'Please Retry' :  'Upload front'}`}</h6>)
                    }
                    {/* <Upload className="set" style={{ width: "40px" }} /> */}
                    {/* <input
                      className="uploadfield"
                      type="text"
                      disabled
                      placeholder={`${imageFrontError === true  ? 'Retry' :  'Upload front'}`}
                    // {...register("cpassword", {
                    //   required: {
                    //     value: true,
                    //     message: "password is required",
                    //   },
                    // })}
                    /> */}

                  </div>

                  <div className="UploadContainer" onClick={() => {
                    setSelected('DocumentBack')
                    startCapture('DocumentBack');
                  }}>
                     <div>
                      {
                        spin === 'docBack' ? <Spinner animation="border" size="lg" /> : docBackComplete === true ? <FaCheckCircle color="green" size={50} /> : imageBackError === true ? <FiUploadCloud size={50} /> : <FiUploadCloud size={50} />
                      }
                    </div>
                  {
                    docBackComplete ? (null) : (  <h6 className={`${imageBackError ? "text-danger" : null}`}>{`${imageBackError === true  ? 'Please Retry' :  'Upload Back'}`}</h6>)
                  }
                    {/* <Upload className="set" style={{ width: "40px" }} /> */}
                    {/* <input
                      className="uploadfield"
                      type="text"
                      disabled
                      placeholder={`${imageBackError === true  ? 'Retry' :  'Upload Back'}`}
                    // {...register("cpassword", {
                    //   required: {
                    //     value: true,
                    //     message: "password is required",
                    //   },
                    // })}
                    /> */}

                  </div>
                </div>

                <p className="text-center text-danger pt-4">
                  {
                  documentPageError && `${documentPageError}. please Retry`
                  }
                </p>

                {/* <div className="inputContainer">
                <Paper className="user" style={{ width: "40px" }} />
                <input
                  className="field"
                  type="text"
                  placeholder="ID number"
                  // {...register("id", {
                  //   required: {
                  //     value: true,
                  //     message: "ID number is required",
                  //   },
                  // })}
                />
                <span className="err">{errors.id?.message}</span>
              </div>

              <div className="inputContainer">
                <Calendar className="user" style={{ width: "40px" }} />
                <input
                  className="field"
                  type="text"
                  placeholder="Date of issuance"
                  // {...register("date", {
                  //   required: {
                  //     value: true,
                  //     message: "Date of issuance is required",
                  //   },
                  // })}
                />
                <span className="err">{errors.date?.message}</span>
              </div>

              <div className="inputContainer">
                <Calendar className="user" style={{ width: "40px" }} />
                <input
                  className="field"
                  type="text"
                  placeholder="Expiry date"
                  // {...register("expdate", {
                  //   required: {
                  //     value: true,
                  //     message: "Date of expiry is required",
                  //   },
                  // })}
                />
                <span className="err">{errors.expdate?.message}</span>
              </div>

              <div className="inputContainer">
                <Calendar className="user" style={{ width: "40px" }} />
                <input
                  className="field"
                  type="text"
                  placeholder="Issuing body (optional)"
                  // {...register("issuingBody")}
                />
                <span className="err">{errors.issuingBody?.message}</span>
              </div> */}

             {
              docBackComplete && docFrontComplete ? (   <div className="buttonBox">
              <Signup
                className="mt-4"
                type="button"
                // onClick={() => onVerifyUser()}
                onClick={() => setActiveTab(()=> "selfie")}
              >
                {
                loading ? 
               <Spinner animation="border" variant="light" /> :
                "Continue"
                }
              </Signup>
            </div>) : (null)
             }
              </form>
            </div>
          </Formdiv>

         <div className="mt-4">
         <h4>
          {
            result ? (
              <>
              <p>TransactionId: {result?.data?.TransactionID}</p>
              <p>Status: {result?.data?.Record?.RecordStatus}</p>
              </>
               ) : null
          }
            
          </h4>
         </div>
        </div>
      )}
    </>
  )
}
