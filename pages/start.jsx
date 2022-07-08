import React, { useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import msia from "../public/msia.png";
import bg4x from "../public/bg4x.png";
import abc from "../public/favicon.ico";
import Profile from "../public/Iconly/Light/Profile.svg";
import Location from "../public/Iconly/Light/Location.svg";
import Paper from "../public/Iconly/Light/Paper.svg";
import Paper2 from "../public/Iconly/Light/Paper Upload.svg";
import Calendar from "../public/Iconly/Light/Calendar.svg";
import Upload from "../public/Iconly/Light/Upload.svg";
import Camera from "../public/Iconly/Bold/Camera.svg";
import Message from "../public/Iconly/Light/Message.svg";
import Lock from "../public/Iconly/Light/Lock.svg";
import Hide from "../public/Iconly/Light/Hide.svg";
import DocumentDetails from "../components/DocumentDetails";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { FiUploadCloud } from 'react-icons/fi';
import { FaCameraRetro } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)),
    #ffffff;
  ${"" /* background: url(${bg4x}) no-repeat center center fixed; */}

  ${"" /* background: red; */}

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .welcomeText {
    font-style: normal;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 24px;
    color: #8d1919;
    text-align: center;
    margin-top: 0px;
  }

  .descriptionText {
    font-style: normal;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 14px;
    letter: 0.5%;
    color: #000000;
    text-align: center;
    margin-top: 20px;
  }
  .formText {
    font-style: normal;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter: 0.5%;
    color: black;
    margin-top: 20px;
  }

  .inputContainer {
    display: flex;
    width: 100%;
    position: relative;
    margin: 20px 0px;
    flex-direction: column;

    .err {
      font-style: normal;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      font-size: 14px;
      line-height: 150%;
      color: orangered;
      text-align: center;
    }
  }
`;

const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const HeaderText = styled.p`
  font-style: normal;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #000000;
  text-align: center;
  margin-top: 20px;
  color: ${(props) => (props.active ? "#8d1919" : "#000000")};
`;

const HeaderTextBox = styled.div`
  width: 138px;
  border-bottom: ${(props) => (props.active ? "2px solid #D37979" : "none")};

  ${"" /* color: ${props => props.active ? '#8d1919' : '#000000'}; */}
`;

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

export default function Register() {
  const [activeTab, setActiveTab] = useState("details");
  const [username, setUsername] = useState(process.env.NEXT_PUBLIC_USERNAME);
  const [password, setPassword] = useState(process.env.NEXT_PUBLIC_PASSWORD);
  const [sdkToken, setSdkToken] = useState("");
  const [isSDKInited, setIsSDKInited] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    FirstGivenName: "",
    FirstSurName: "",
    MiddleName: "",
    // DayOfBirth: "",
    // MonthOfBirth: "",
    // YearOfBirth: "",
  });
  const [selected, setSelected] = useState("");
  const [spin, setSpin] = useState("");
  const [autoCapture, setAutoCapture] = useState(true);
  const [imageFront, setImageFront] = useState("");
  console.log(imageFront, 'imagefront');
  const [imageBack, setImageBack] = useState("");
  const [livePhoto, setLivePhoto] = useState("");
  const [passport, setPassport] = useState("");
  const [docFrontComplete, setDocFrontComplete] = useState(false);
  const [docBackComplete, setDocBackComplete] = useState(false);
  const [selfieComplete, setSelfieComplete] = useState(false);
  const [transactionID, setTransactionID] = useState("");
  const [documentID, setDocumentID] = useState("");
  const [instanceID, setInstanceID] = useState("");
  const [selfie, setSelfie] = useState("");

  // const username = 'dev_Trulioo_15rtRS';
  // const password = 'LxC^^E4PfVn3nMk8';

  // const configKeys = `${username}:${password}`;
  const configKeys = `EsSolo_Live_DocV_API:Essolodocv@1`;

  /* ---------------------- convert configkeys to base64 ---------------------- */
  const buff = Buffer.from(configKeys);
  const base64Token = buff.toString("base64");

  const { isLoading, error, data, isFetching } = useQuery(
    "sdktoken",
    () =>
      axios.post(
        "https://gg-ic-sdk-server-proxy.globalgateway.io/token",
        {},
        {
          headers: {
            Authorization: `Basic ${base64Token}`,
            // Authorization: `Basic RXNTb2xvX0RlbW9fRG9jVl9BUEk6VHJ1bGlvb0BAMQ==`,
          },
        }
      ),
    {
      onSuccess: (data) => {
        console.log(data.data, "data me na");
        setSdkToken(data.data.token);
      },
      onError: (error) => {
        console.log(error, "error 1");
        console.log(error.response, "error 1");
      },
    }
    // .then((res) => setSdkToken(res.data.token))
  );

  const AsyncVerifyMutation = useMutation(
    async (userDetails) => {
      return await axios.post(
        // "https://api.globaldatacompany.com/verifications/v1/verify",
        "/api/transaction",
        userDetails
      );
    },
    {
      onSuccess: async (data) => {
        console.log(data, "success");
        // let response = data?.data;
        // console.log(response.TransactionID, "response from initial verify");
        // setTransactionID(() => response?.TransactionID);
        // setActiveTab("document")
      },
      onError: async (error, variables, context) => {
        console.log(error, `is the error`);
        console.log(error.response, `is the error response`);
      },
    }
  );

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setPersonalDetails(() => ({
      ...personalDetails,
      ...data,
      // firstName: data.firstName,
      // lastName: data.lastName,
    }));
    // console.log(data, "form data");

    setActiveTab("document");
  };

  const onVerifyUser = (data) => {
    console.log(imageFront, "imgf");
    console.log(imageBack, "imgb");
    console.log(personalDetails, "pds");

    AsyncVerifyMutation.mutate({
      AcceptTruliooTermsAndConditions: true,
      CleansedAddress: false,
      VerboseMode: true,
      ConfigurationName: "Identity Verification",
      CallBackUrl:"https://api.globaldatacompany.com/connection/v1/async-callback",
      CountryCode: "NG",
      DataFields: {
        PersonInfo: {
          ...personalDetails,
          // "FirstGivenName": data.firstName,
          // "FirstSurName": data.lastName
        },
        // "Location": {},
        // "Communication": {},
        Document: {
          DocumentFrontImage: imageFront,
          DocumentBackImage: imageBack,
          LivePhoto: selfie,
          DocumentType: "IdentityCard"
        },
        // "Passport": {},
        // "Business": {},
      },
    });

    // AsyncVerifyMutation.isSuccess && setActiveTab("document");
  };

  // console.log(isSDKInited, "isSDKInited");

  if (typeof window !== "undefined") {
    window.GlobalGatewayImageCompressionOption = {
      maxSizeMB: 4,
      maxWidthOrHeight: 4096,
      useWebWorker: true,
    };

    window.onAcuantSdkLoaded = () => {
      const successHelper = () => {
        setIsSDKInited(true);
        // console.log(isSDKInited, "isSDKInited");
      };
      const failHelper = () => {
        // console.error('Fail to init sdk');
        console.log("Fail to init sdk");
        // showError([{ code: -1, type: 'Capture SDK is not initialized' }]);
      };
      InitSDK(username, password, successHelper, failHelper);
    };
  }

  // function writeText(text) {
  //   // document.getElementById('quality-data').value = text;
  // }
  // function clearText() {
  //   // document.getElementById('quality-data').value = '';
  // }

  function showError(error) {
    console.log(error, "error");
    // endProcess();
    if (Array.isArray(error) && error.length > 0) {
      // document.querySelector('#globalGatewayError').innerHTML = "Error code: " + error[0].code + " " + error[0].type;
      console.log(error, "show-error");
    } else {
      console.log(error, "show-error");
      // document.querySelector('#globalGatewayError').innerHTML = "Unable to capture";
    }
  }

  //  async function showImage(result) {
  //     console.log(result, "result");
  //     console.log(selected, "selected");

  //     setRrr(result);

  //     // alert (JSON.stringify(result))

  //     // setDocumentID(result.classification.DocumentID)
  //     // setInstanceID(result.classification.InstanceID)

  //     if (selected == "DocumentFront") {
  //       setImageFront(result.image);
  //       console.log('uploading...');
  //       await axios
  //         .post(
  //           "/api/upload",
  //           // "https://api.globaldatacompany.com/v1/docv/UploadImage",
  //           {
  //             "TransactionID": transactionID,
  //             "DataField": "DocumentFrontImage",
  //             "Status": "Completed",
  //             "Value": result.image.split(',')[1],
  //           },
  //           {
  //             headers: {
  //               Authorization: `Basic RXNTb2xvX0RlbW9fRG9jVl9BUEk6VHJ1bGlvb0BAMQ==`,
  //             }
  //           }
  //         ).then((res) => console.log(res, 'my res1 here'))
  //     } else if (selected == "DocumentBack") {
  //       setImageBack(result.image);
  //       await axios
  //       .post(
  //         "api//upload",
  //         {
  //           "TransactionID": transactionID,
  //           "DataField": "DocumentBackImage",
  //           "Status": "Completed",
  //           "Value": result.image.split(',')[1],
  //         },
  //         {
  //           headers: {
  //             Authorization: `Basic RXNTb2xvX0RlbW9fRG9jVl9BUEk6VHJ1bGlvb0BAMQ==`,
  //           }
  //         }
  //       ).then((res) => console.log(res, 'my res2 here'))
  //     }

  //     // else if (selectedType == "LivePhoto") {
  //     //   startSelfie(shouldCollectGeo, token);
  //     // } else if (selectedType == "Passport") {
  //     //   startPassport(shouldCollectGeo, token);
  //     // }

  //     // endProcess();
  //     // document.querySelector('#globalGatewayError').innerHTML = "";
  //     // document.querySelector('#capturedFrontImage').src = result.image;
  //     // clearText();
  //   }

  function getIsAutoCapture() {
    // var dropDown = document.getElementById("captureModeSelection");
    // return dropDown.options[dropDown.selectedIndex].value == "Auto";
    // console.log(autoCapture, "autoCapture");
    return autoCapture;
  }


  async function startCapture(doctype) {
    console.log('starting capture')
    if (!isSDKInited) {
      console.log('Capture SDK is not initialized');
      return;
    }
    // var geoDropdown = document.getElementById("geoModeSelection");
    var shouldCollectGeo = true;


    // var selectedType = selected;
    var selectedType = doctype;

    var token = sdkToken;

    if (selectedType == "DocumentFront") {
      startDocumentFrontCapture(shouldCollectGeo, token);
    } else if (selectedType == "DocumentBack") {
      setSpin(()=> 'docBack')
      startDocumentBackCapture(shouldCollectGeo);
    } else if (selectedType == "LivePhoto") {
      startSelfie(shouldCollectGeo, token);
    } else if (selectedType == "Passport") {
      startPassport(shouldCollectGeo, token);
    }
  }

  function startDocumentFrontCapture(shouldCollectGeo, token) {
    setSpin(()=> 'docFront')

    // Capture Driver Licence and ID Cards.
    // StartAcuantFrontDocumentCapture(getIsAutoDropDown(), shouldCollectGeo, startProcess, showImage, showError, token);
    StartAcuantFrontDocumentCapture(
      getIsAutoCapture(),
      shouldCollectGeo,
      startProcess('docFront'),
      showFrontImage,
      showError,
      token
    );
  }

  function startDocumentBackCapture(shouldCollectGeo) {
    // Capture Driver Licence and ID Cards.
    setSpin(()=> 'docBack')

    StartAcuantBackDocumentCapture(
      getIsAutoCapture(),
      shouldCollectGeo,
      startProcess,
      showBackImage,
      showError
    );
  }

  function startPassport(shouldCollectGeo, token) {
    // Capture Photo Page of Passport
    StartAcuantPassportCapture(
      getIsAutoCapture(),
      shouldCollectGeo,
      startProcess,
      showImage,
      showError,
      token
    );
  }

  function startSelfie(shouldCollectGeo, token) {
    // Capture Selfie
    setSpin(()=> 'selfie')

    StartAcuantSelfieCapture(
      getIsAutoCapture(),
      shouldCollectGeo,
      startProcess,
      showLiveImage,
      showError,
      token
    );
  }

  function startSpinner() {
    // document.getElementById('main-spinner').style.display = 'block';
  }

  function hideSpinner() {
    // document.getElementById('main-spinner').style.display = 'none';
  }

  function startProcess() {
    console.log("start-process is called");
    // setSpin(() => '')
    // $('button').attr('disabled', true);
    // startSpinner();
  }

  function showImage(result) {
    console.log(selected, "sels");
    return;
    console.log(result, "result");

    if (selected == "DocumentFront" && result) {
      console.log("front");
      setImageFront(result.image.split(",")[1]);
    } else if (selected == "DocumentBack" && result) {
      console.log("yesyyyy");
      console.log(result, "yesyyyy");
      setImageBack(result.image.split(",")[1]);
    } else if ((selected == "LivePhoto") & result) {
      console.log("nooo");

      setLivePhoto(result.image.split(",")[1]);
    } else if ((selected == "Passport") & result) {
      console.log("nooo");

      setPassport(result.image.split(",")[1]);
    }
    // console.log('result', "result");
    // console.log(result, "result");
    // console.log(selected, "selected");
  }

  function showFrontImage(result) {
    setSpin(() => '')
    setDocFrontComplete(true)
    setImageFront(result.image.split(",")[1]);
  }

  function showBackImage(result) {
    setSpin(() => '')
    setDocBackComplete(true)
    setImageBack(result.image.split(",")[1]);
  }

  function showLiveImage(result) {
    setSpin(() => '')
    setSelfieComplete(true)
    setSelfie(result.image.split(",")[1]);
  }

  function endProcess() {
    // $(':button').attr('disabled', false);
    hideSpinner();
  }

  return (
    <>
      <Script src="./GlobalGatewayCapturePublicAcuant/GlobalGatewayImageCapture.js" />
      <ToastContainer />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container className="pt-4">
        <div className="logo">
          <Image src={msia} className="" alt="msia" />
        </div>

        <Header>
          <HeaderTextBox
            onClick={() => setActiveTab("details")}
            active={activeTab === "details"}
            className="box"
          >
            <HeaderText active={activeTab === "details"}>Details</HeaderText>
          </HeaderTextBox>

          <HeaderTextBox
            onClick={() => setActiveTab("document")}
            active={activeTab === "document"}
            className="box"
          >
            <HeaderText active={activeTab === "document"}>Document</HeaderText>
          </HeaderTextBox>

          <HeaderTextBox
            onClick={() => setActiveTab("selfie")}
            active={activeTab === "selfie"}
            className="box"
          >
            <HeaderText active={activeTab === "selfie"}>Selfie</HeaderText>
          </HeaderTextBox>
        </Header>

        {activeTab === "details" && (
          <div>
            <div className="descriptionText">
              <p>Your personal details are required to proceed.</p>
            </div>

            <Formdiv>
              <div className="">
                {/* <div className="box"> */}

                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="inputContainer">
                    <Profile className="user" style={{ width: "40px" }} />
                    <input
                      className="field"
                      type="text"
                      placeholder="First Name"
                      {...register("FirstGivenName", {
                        required: {
                          value: true,
                          message: "First name is required",
                        },
                      })}
                    />
                    <span className="err">{errors.FirstGivenName?.message}</span>
                  </div>

                  <div className="inputContainer">
                    <Profile className="user" style={{ width: "40px" }} />
                    <input
                      className="field"
                      type="text"
                      placeholder="Middle Name"
                      {...register("MiddleName", {
                        required: {
                          value: true,
                          message: "Middle name is required",
                        },
                      })}
                    />
                    <span className="err">{errors.MiddleName?.message}</span>
                  </div>

                  <div className="inputContainer">
                    <Profile className="user" style={{ width: "40px" }} />
                    <input
                      className="field"
                      type="text"
                      placeholder="Last Name"
                      {...register("FirstSurName", {
                        required: {
                          value: true,
                          message: "Last name is required",
                        },
                      })}
                    />
                    <span className="err">{errors.FirstSurName?.message}</span>
                  </div>
        

                  <div className="buttonBox">
                    <Signup className="mt-4" type="submit">
                      {AsyncVerifyMutation.isLoading ? (
                        <Spinner animation="border" variant="light" />
                      ) : (
                        "Continue to next section"
                      )}
                    </Signup>
                  </div>
                </form>
              </div>
            </Formdiv>
          </div>
        )}

        {activeTab === "document" && (
          <DocumentDetails
            startCapture={startCapture}
            setSelected={setSelected}
            setAutoCapture={setAutoCapture}
            onVerifyUser={onVerifyUser}
            setSpin={setSpin}
            docFrontComplete={docFrontComplete}
            docBackComplete={docBackComplete}
            spin={spin}
            loading={AsyncVerifyMutation.isLoading}
            result={AsyncVerifyMutation.data}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === "selfie" && <Selfie spin={spin} selfieComplete={selfieComplete}  startCapture={startCapture} onVerifyUser={onVerifyUser} result={AsyncVerifyMutation.data} loading={AsyncVerifyMutation.isLoading}

/>}
      </Container>
    </>
  );
}

// const DocumentDetails = ({ startCapture, setSelected, setAutoCapture }) => {
//   const [step, setStep] = useState(0);
//   const [document, setDocument] = useState('ID');

//   const {
//     register: DocumentDetailsRegister,
//     handleSubmit: DocumentDetailsRegisterHandleSubmit,
//     watch,
//     getValues,
//     formState: { errors },
//   } = useForm();

//   const mutation = useMutation(
//     async (signupDetails) => {
//       return await axios
//         .post(
//           "https://companymicroservice.azurewebsites.net/api/createacompany",
//           signupDetails
//         )
//         .catch((err) => {
//           console.log(err, "caught");
//           throw new Error(err);
//         });
//     },
//     {
//       onSuccess: async (data) => {
//         console.log(data.data, "success");
//         let response = data.data;
//         if (!response.error) {
//           toast.success("company registered successfully", {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         }
//       },
//       onError: async (error, variables, context) => {
//         console.log(error, `is the error`);
//       },
//     }
//   );

//   const documentDetailsonSubmit = (data) => {
//     setDocument(data.document);
//     setStep(1)
//   };

//   return (
//     <>
//       {step === 0 && (
//         <div>
//           <div className="descriptionText">
//             <p>
//               Select and upload any of the documents below. Only the following
//               documents listed below will be accepted, all others will be
//               rejected.
//             </p>
//           </div>

//           <Formdiv>
//             <div className="">
//               {/* <div className="box"> */}

//               <form className="form" onSubmit={DocumentDetailsRegisterHandleSubmit(documentDetailsonSubmit)}>
//                 {/* <div className="inputContainer">
//                   <Location className="user" style={{ width: "40px" }} />
//                   <input
//                     className="field"
//                     type="text"
//                     placeholder="Country"
//                     {...register("country", {
//                       required: {
//                         value: true,
//                         message: "country is required",
//                       },
//                     })}
//                   />
//                   <span className="err">{errors.country?.message}</span>
//                 </div> */}

//                 <div className="inputContainer">
//                   <div className="iconCircle user">
//                     <Profile className="" style={{ width: "40px" }} />
//                   </div>
//                   <input
//                     className="field moreHeight"
//                     type="text"
//                     disabled
//                     placeholder="Government issued ID card"
//                   // {...DocumentDetailsRegister("id", {
//                   //   required: {
//                   //     value: false,
//                   //     message: "password is required",
//                   //   },
//                   // })}
//                   />
//                   <label className="checkboxContainer user2">
//                     <div className="d-flex">
//                       <input
//                         name="document"
//                         type="radio"
//                         value='ID'
//                         // defaultChecked
//                         {...DocumentDetailsRegister("document", {
//                           required: false,
//                         })}
//                         id="acceptTerms"
//                         className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""
//                           }`}
//                       />
//                       <span className="checkmark"></span>
//                     </div>
//                   </label>
//                 </div>

//                 <div className="inputContainer">
//                   <div className="iconCircle user">
//                     <Paper className="" style={{ width: "40px" }} />
//                   </div>
//                   <input
//                     className="field moreHeight"
//                     type="text"
//                     disabled
//                     placeholder="PassPort"
//                   // {...DocumentDetailsRegister("passport", {
//                   //   required: {
//                   //     value: false,
//                   //     message: "password is required",
//                   //   },
//                   // })}
//                   />
//                   <label className="checkboxContainer user2">
//                     <div className="d-flex">
//                       <input
//                         name="document"
//                         type="radio"
//                         value={'passport'}
//                         // defaultChecked
//                         {...DocumentDetailsRegister("document", {
//                           required: false,
//                         })}
//                         id="acceptTerms"
//                         className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""
//                           }`}
//                       />
//                       <span className="checkmark"></span>
//                     </div>
//                   </label>
//                 </div>

//                 <div className="inputContainer">
//                   <div className="iconCircle user">
//                     <Paper2 className="" style={{ width: "40px" }} />
//                   </div>
//                   <input
//                     disabled
//                     className="field moreHeight"
//                     type="text"
//                     value='driverLicense'
//                     placeholder="Driver’s license"
//                   // {...DocumentDetailsRegister("drivingLicence", {
//                   //   required: {
//                   //     value: false,
//                   //     message: "password is required",
//                   //   },
//                   // })}
//                   />
//                   <label className="checkboxContainer user2">
//                     <div className="d-flex">
//                       <input
//                         name="document"
//                         type="radio"
//                         value='DriverLicense'
//                         // defaultChecked
//                         {...DocumentDetailsRegister("document", {
//                           required: false,
//                         })}
//                         id="acceptTerms"
//                         className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""
//                           }`}
//                       />
//                       <span className="checkmark"></span>
//                     </div>
//                   </label>
//                 </div>

//                 <div className="buttonBox">
//                   <Signup
//                     className="mt-4"
//                     type="submit"
//                   // onClick={() => setStep(1)}
//                   >
//                     {mutation.isLoading ? (
//                       <Spinner animation="border" variant="light" />
//                     ) : (
//                       "Continue"
//                     )}
//                   </Signup>
//                 </div>
//               </form>
//             </div>
//           </Formdiv>
//         </div>
//       )}
//       {step === 1 && (
//         <div>
//           <div className="descriptionText">
//             <p>Upload Document for Verification.</p>
//           </div>

//           <Formdiv>
//             <div className="">
//               {/* <div className="box"> */}

//               <form className="form" onSubmit={DocumentDetailsRegisterHandleSubmit(documentDetailsonSubmit)}>

//                 <div className="inputContainer">
//                   <input
//                     className="field moreHeight"
//                     type="text"
//                     disabled
//                     placeholder="Auto capture"
//                   />
//                   <label className="checkboxContainer user2">
//                     <div className="d-flex">
//                       <input
//                         // name="AutoCapture"
//                         type="radio"
//                         value='true'
//                         defaultChecked
//                         onClick={() => setAutoCapture(true)}
//                         {...DocumentDetailsRegister("AutoCapture", {
//                           required: false,
//                         })}
//                         id="acceptTerms"
//                         className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""
//                           }`}
//                       />
//                       <span className="checkmark"></span>
//                     </div>
//                   </label>
//                 </div>

//                 <div className="inputContainer">
//                   <input
//                     className="field moreHeight"
//                     type="text"
//                     disabled
//                     placeholder="Manual capture"
//                   />
//                   <label className="checkboxContainer user2">
//                     <div className="d-flex">
//                       <input
//                         // defaultChecked
//                         // name="AutoCapture"
//                         type="radio"
//                         value='false'
//                         onClick={() => setAutoCapture(false)}
//                         {...DocumentDetailsRegister("AutoCapture", {
//                           required: false,
//                         })}
//                         id="acceptTerms"
//                         className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""
//                           }`}
//                       />
//                       <span className="checkmark"></span>
//                     </div>
//                   </label>
//                 </div>

//                 <div className="uploadBox">
//                   <div className="UploadContainer" onClick={() => {
//                     startCapture();
//                     setSelected('DocumentFront')
//                   }}>
//                     <Upload className="set" style={{ width: "40px" }} />
//                     <input
//                       className="uploadfield"
//                       type="text"
//                       disabled
//                       placeholder="Upload front"
//                     // {...register("cpassword", {
//                     //   required: {
//                     //     value: true,
//                     //     message: "password is required",
//                     //   },
//                     // })}
//                     />

//                   </div>

//                   <div className="UploadContainer" onClick={() => {
//                     startCapture();
//                     setSelected('DocumentBack')
//                   }}>
//                     <Upload className="set" style={{ width: "40px" }} />
//                     <input
//                       className="uploadfield"
//                       type="text"
//                       disabled
//                       placeholder="Upload Back"
//                     // {...register("cpassword", {
//                     //   required: {
//                     //     value: true,
//                     //     message: "password is required",
//                     //   },
//                     // })}
//                     />

//                   </div>
//                 </div>

//                 {/* <div className="inputContainer">
//                   <Paper className="user" style={{ width: "40px" }} />
//                   <input
//                     className="field"
//                     type="text"
//                     placeholder="ID number"
//                     // {...register("id", {
//                     //   required: {
//                     //     value: true,
//                     //     message: "ID number is required",
//                     //   },
//                     // })}
//                   />
//                   <span className="err">{errors.id?.message}</span>
//                 </div>

//                 <div className="inputContainer">
//                   <Calendar className="user" style={{ width: "40px" }} />
//                   <input
//                     className="field"
//                     type="text"
//                     placeholder="Date of issuance"
//                     // {...register("date", {
//                     //   required: {
//                     //     value: true,
//                     //     message: "Date of issuance is required",
//                     //   },
//                     // })}
//                   />
//                   <span className="err">{errors.date?.message}</span>
//                 </div>

//                 <div className="inputContainer">
//                   <Calendar className="user" style={{ width: "40px" }} />
//                   <input
//                     className="field"
//                     type="text"
//                     placeholder="Expiry date"
//                     // {...register("expdate", {
//                     //   required: {
//                     //     value: true,
//                     //     message: "Date of expiry is required",
//                     //   },
//                     // })}
//                   />
//                   <span className="err">{errors.expdate?.message}</span>
//                 </div>

//                 <div className="inputContainer">
//                   <Calendar className="user" style={{ width: "40px" }} />
//                   <input
//                     className="field"
//                     type="text"
//                     placeholder="Issuing body (optional)"
//                     // {...register("issuingBody")}
//                   />
//                   <span className="err">{errors.issuingBody?.message}</span>
//                 </div> */}

//                 <div className="buttonBox">
//                   <Signup
//                     className="mt-4"
//                     type="button"
//                     onClick={() => setStep(1)}
//                   >
//                     {mutation.isLoading ? (
//                       <Spinner animation="border" variant="light" />
//                     ) : (
//                       "Continue"
//                     )}
//                   </Signup>
//                 </div>
//               </form>
//             </div>
//           </Formdiv>
//         </div>
//       )}
//     </>
//   );
// };

const Selfie = ({spin, selfieComplete, startCapture, onVerifyUser, result, loading}) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const SelfieBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 235px;
  height: 239px;
  margin: 0 auto;


    .selfieContainer {

      width: 100%;
      height: 100%;
  display: flex;
  padding: 20px;
  position: relative;
  border-radius: 20px;
  position: relative;
  justify-content: center;
  align-items: center;
  background: linear-gradient(111.69deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.025) 100.12%), #FFFFFF;
  box-shadow: inset -4px -4px 8px #FFFFFF, inset 4px 4px 8px rgba(0, 0, 0, 0.16);
  margin: 0px 10px;


  .set{
    // position: absolute;
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
    }
`;

  const mutation = useMutation(
    async (signupDetails) => {
      return await axios
        .post(
          "https://companymicroservice.azurewebsites.net/api/createacompany",
          signupDetails
        )
        .catch((err) => {
          console.log(err, "caught");
          throw new Error(err);
        });
    },
    {
      onSuccess: async (data) => {
        console.log(data.data, "success");
        let response = data.data;
        if (!response.error) {
          toast.success("company registered successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      },
      onError: async (error, variables, context) => {
        console.log(error, `is the error`);
      },
    }
  );

  const onSubmit = (data) => {
    console.log(data, "form data");
    delete data.confirmPassword;
    toast.success("company registered successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // mutation.mutate(data);
  };

  return (
    <>
      <div className="descriptionText">
        <p>Upload Selfie Verification.</p>
      </div>

      <Formdiv>
        <div className="">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <SelfieBox className="" onClick={() => {
                    // setSelected('selfie')
                    startCapture('LivePhoto');
                  }}>
              <div className="selfieContainer">
                {/* <Camera className="set" style={{ width: "40px" }} /> */}
                <div>
                      {
                        spin === 'selfie' ? <Spinner animation="border" size="lg" /> : selfieComplete === true ? <FaCheckCircle size={50} /> : <FaCameraRetro className="set" size={50} />
                      }
                    </div>    
                  {/* <input
                  className="uploadfield"
                  type="text"
                  placeholder=""
                  {...register("cpassword", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                  })}
                /> */}
              </div>
            </SelfieBox>

            <div className="buttonBox">
              <Signup
                className="mt-4"
                type="button"
                onClick={() => onVerifyUser()}
                // onClick={() => setStep(1)}
              >
               {
                    loading ? 
                   <Spinner animation="border" variant="light" /> :
                    "Continue"
                    }
              </Signup>
            </div>
          </form>

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
      </Formdiv>
    </>
  );
};
