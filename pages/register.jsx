import React from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { useMutation } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { Spinner } from 'react-bootstrap'
import styled from "styled-components";
import Image from "next/image";
import msia from "../public/msia.png";
import bg4x from "../public/bg4x.png";
import abc from '../public/favicon.ico'
import Profile from "../public/Iconly/Light/Profile.svg";
import Message from "../public/Iconly/Light/Message.svg";
import Lock from "../public/Iconly/Light/Lock.svg";
import Hide from "../public/Iconly/Light/Hide.svg";
import 'react-toastify/dist/ReactToastify.css';




const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: linear-gradient(
0deg
, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), #FFFFFF;
`;

const Imagediv = styled.div`
  width: 60%;
`;

const Signup = styled.button`
width: 400px;
height: 48px;
background: linear-gradient(180deg, rgba(211, 121, 121, 0.5) 0%, rgba(141, 25, 25, 0.5) 100%), #8D1919;
box-shadow: -4px -4px 8px #FFFFFF, 4px 4px 8px rgba(0, 0, 0, 0.16);
border-radius: 24px;
border: none;

font-style: normal;
font-weight: normal;
font-family: 'Poppins', sans-serif;
font-size: 14px;
line-height: 24px;
color: white;


`;

const Formdiv = styled.div`
  width: 40%;
  ${'' /* background: yellow; */}
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
    font-size: 14px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.4);
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

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(
    async (signupDetails) => {
      return await axios.post(
        'https://companymicroservice.azurewebsites.net/api/createacompany',
        signupDetails
      )
        .catch((err) => {
          console.log(err, 'caught')
          throw new Error(err);
        });
    },
    {
      onSuccess: async (data) => {
        console.log(data.data, 'success')
        let response = data.data
        if (!response.error) {
          toast.success('company registered successfully', {
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

  console.log(errors, "form data");
  toast.success('company registered successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const onSubmit = (data) => {
    console.log(data, "form data");
    delete data.confirmPassword;
    toast.success('company registered successfully', {
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
      <ToastContainer />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&display=swap" rel="stylesheet" />
      </Head>
      <Container className="">
        <Imagediv className="image" img={bg4x}>
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition={"left"}
            src={bg4x}
            className=""
            alt="Picture of the author"
          />
        </Imagediv>

        {/* <div className=" w-full h-full bg-primary  d-flex justify-content-center align-items-center"> */}
        <Formdiv>
          <div className="headerBox mt-4">
            <Image src={msia} className="" alt="msia" />
            <div className="d-flex flex-column align-items-center">
              <p>New here?</p>
              <p className="signinText">
                Signing up is easy. It only takes a few steps.
              </p>
            </div>
          </div>

          <div className="box">


            <form className='' onSubmit={handleSubmit(onSubmit)}>

              <div className="inputContainer">
                <Profile className='user' style={{ width: '40px' }} />
                <input
                  className="field"
                  type="text"
                  placeholder="Company Name"
                  {...register("cname", {
                    required: {
                      value: true,
                      message: "company name is required"
                    },
                  })}
                />
                <span className="err">{errors.cname?.message}</span>
              </div>


              <div className="inputContainer">
                <Message className='user' style={{ width: '40px' }} />
                <input
                  className="field"
                  type="text"
                  placeholder="madridista@essolo.come"
                  {...register("cemail", {
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email address"
                    },
                    required: {
                      value: true,
                      message: "email is required"
                    },
                  })}
                />
                <span className="err">{errors.cemail?.message}</span>
              </div>

              <div className="inputContainer">
                <Profile className='user' style={{ width: '40px' }} />
                <input
                  className="field"
                  type="number"
                  placeholder="+2349031945894"
                  {...register("cmobile", {
                    required: {
                      value: true,
                      message: "mobile number is required"
                    },
                    maxLength: {
                      value: 11,
                      message: 'phone number must not exceed 11 digits'
                    }
                  })}
                />
                <span className="err">{errors.cmobile?.message}</span>
              </div>

              <div className="inputContainer">
                <Lock className='user' style={{ width: '40px' }} />
                <input
                  className="field"
                  type="text"
                  placeholder="*************"
                  {...register("cpassword", {
                    required: {
                      value: true,
                      message: "password is required"
                    }
                  })}
                />
                <Hide className='user2' style={{ width: '40px' }} />
                <span className="err">{errors.cpassword?.message}</span>
              </div>

              <div className="inputContainer">
                <Lock className='user' style={{ width: '40px' }} />
                <input
                  className="field"
                  type="text"
                  placeholder="Confirm password"
                  {...register("confirmPassword", {
                    required: "Please confirm password!",
                    validate: {
                      matchesPreviousPassword: (value) => {
                        const { cpassword } = getValues();
                        return cpassword === value || "Passwords should match!";
                      }
                    }
                  })}
                />
                <Hide className='user2' style={{ width: '40px' }} />
                <span className="err">{errors.confirmPassword?.message}</span>

              </div>

              <div className="inputContainer ">
                <Signup className='mt-4' type="submit">
                  {
                    mutation.isLoading ? (<Spinner animation="border" variant="light" />) : ('Sign up')
                  }
                </Signup>
              </div>
            </form>
          </div>


        </Formdiv>
        {/* </div> */}
      </Container>
    </>
  );
}
