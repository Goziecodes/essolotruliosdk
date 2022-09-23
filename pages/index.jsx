import React, { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "react-query";
import axios from "axios";
import Script from "next/script";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";
import Link from 'next/link'
import styled from "styled-components";
import Image from "next/image";
import msia from "../public/msia.png";
import bg4x from "../public/1.png";
import abc from "../public/favicon.ico";
import Profile from "../public/Iconly/Light/Profile.svg";
import Message from "../public/Iconly/Light/Message.svg";
import Lock from "../public/Iconly/Light/Lock.svg";
import Hide from "../public/Iconly/Light/Hide.svg";
import "react-toastify/dist/ReactToastify.css";

// background: linear-gradient(
//   0deg
//   , rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), #FFFFFF;
//   `;

// .headerBox {
//   ${"" /* background: red; */}
//   ${'' /* height: 180px; */}
//   display: flex;
//   flex-direction: column;
//   ${"" /* justify-content: center; */}
//   align-items: center;
//   ${'' /* justify-content: space-between; */}
// }

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url('${bg4x.src}') no-repeat;
  background-size: contain;
  .welcomeText {
    font-style: normal;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 24px;
    color: #8d1919;
    text-align: center;
    margin-top: 80px;
  }

  .descriptionText {
    font-style: normal;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 14px;
    color: #000000;
    text-align: center;
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

const Texts = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Imagediv = styled.div`
  ${'' /* width: 100%;
  height: 90px; */}
  background: red;
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

  a{
    color: white;
  }
`;

const Formdiv = styled.div`
  width: 40%;
  ${"" /* background: yellow; */}
  background: linear-gradient(
0deg
, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), #FFFFFF;

  .headerBox {
    ${"" /* background: red; */}
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
    font-size: 24px;
    color: #8D1919;
  }

  .inputContainer {
  display: flex;
  width: 100%;
  position: relative;
  margin: 20px 0px;
  flex-direction: column;

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
  width:100%;
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
}
  .user2{
    position: absolute;
    top: 12px;
    right: 17px;
}

  }
  .field {
    width: 400px;
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
`;

export default function Home() {
  const [username, setUsername] = useState(process.env.NEXT_PUBLIC_USERNAME);
  const [password, setPassword] = useState(process.env.NEXT_PUBLIC_PASSWORD);
  const [isSDKInited, setIsSDKInited] = useState(false);
  console.log(isSDKInited, 'from index')
  const router = useRouter();
  // console.log(router.query, 'me')
  // if (typeof window !== 'undefined') {
  //   window.sessionStorage.setItem('userDetails', JSON.stringify(router.query))
  // }
  // if (typeof window !== "undefined") {
  //   console.log(window, 'window')
  //   window.GlobalGatewayImageCompressionOption = {
  //     maxSizeMB: 4,
  //     maxWidthOrHeight: 4096,
  //     useWebWorker: true,
  //   };

  //   window.onAcuantSdkLoaded = () => {
  //     const successHelper = () => {
  //       setIsSDKInited(true);
  //       console.log(isSDKInited, "isSDKInited");
  //     };
  //     const failHelper = () => {
  //       // console.error('Fail to init sdk');
  //       console.log("Fail to init sdk");
  //       // showError([{ code: -1, type: 'Capture SDK is not initialized' }]);
  //     };
  //     console.log('about to init');
  //     InitSDK(username, password, successHelper, failHelper);
  //   };
  // }

  // const loaded =  globalThis?.window
  // console.log(loaded, 'pumping')

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(
    async (signupDetails) => {
      return await axios
        .post(
          "http://localhost:3000/trulio/verifyAsync",
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
        router.push('/start')
        // if (!response.error) {
        //   toast.success("company registered successfully", {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   });
        // }
      },
      onError: async (error, variables, context) => {
        console.log(error, `is the error`);
      },
    }
  );


  const onSubmit = (data) => {
    let user = ''
    if(typeof window !== 'undefined'){
      user = window.sessionStorage?.getItem('userDetails') 
   }
   const userDetails = user !== '' && JSON.parse(user);

  const verificationData =  {
    "AcceptTruliooTermsAndConditions": true,
    "CompanyId": userDetails.CompanyId,
    "ProjectDataId": userDetails.ProjectDataId,
    "CleansedAddress": false,
    "ConfigurationName": "Identity Verification",
    "CountryCode": userDetails.CountryCode,
    "DataFields": {
        "PersonInfo": {
            "FirstGivenName": userDetails.FirstGivenName,
            "FirstSurName": userDetails.FirstSurName,
            "MiddleName": userDetails.MiddleName,
            "DayOfBirth": userDetails.DayOfBirth,
            "MonthOfBirth": userDetails.MonthOfBirth,
            "YearOfBirth": userDetails.YearOfBirth
        },
        "Document": {
            "DocumentType": "IdentityCard"
        }
    }
}

    // console.log(verificationData, "form data");
    // delete data.confirmPassword;
    // toast.success("company registered successfully", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
    mutation.mutate(verificationData);
  };

  return (
    <>
      <Script src="./GlobalGatewayImageCapture.js" />
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
        <Texts>
          <Image src={msia} className="" alt="msia" />

          <div className="headerBox p-3">
            <p className="welcomeText">Get started on the MSIA KYC Framework</p>
          </div>

          <div className="descriptionText">
            <p>
             Make sure your scanned documents are very clear, legible and zoomed in properly for best results.
            </p>
          </div>

          <Signup className="mt-4" type="button">
          {/* <Signup className="mt-4" type="button" onClick={onSubmit}> */}
          <Link href="/start">
          <a>Begin KYC Verification</a>
        </Link>
          
          </Signup>
        </Texts>

         {/* <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image alt="Mountains" src={bg4x} layout="responsive" objectFit="contain" />
    </div> */}
        
         {/* <Imagediv className="image" img={bg4x}>
          <Image
  // width={100}
  // height={100}
    // layout="intrinsic"
    layout="fill"
    objectFit="cover"
    sizes="(max-width: 600px) 100vw, 600px"
    objectPosition={"center"}
    src={bg4x}
    className=""
    alt="Picture of the author"
  />
        </Imagediv>  */}
      </Container>
    </>
  );
}
