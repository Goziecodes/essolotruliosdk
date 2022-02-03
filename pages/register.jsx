import React from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Image from "next/image";
import msia from "../public/msia.png";
import bg4x from "../public/bg4x.png";
import Profile from "../public/Iconly/Light/Profile.svg";
import Message from "../public/Iconly/Light/Message.svg";
import Lock from "../public/Iconly/Light/Lock.svg";
import Hide from "../public/Iconly/Light/Hide.svg";



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
}
  .checkboxContainer {
    display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
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
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.checkboxContainer:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.checkboxContainer input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  ${'' /* display: none; */}
}

/* Show the checkmark when checked */
.checkboxContainer input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkboxContainer .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
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
    font-weight: 200;
    font-size: 14px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.4);
  }
`;

export default function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data, "form data");
    };
    return (
        <>
            <Head>
                <link
                    href="https://fonts.google.com/specimen/Poppins"
                    rel="stylesheet"
                />
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
                                    {...register("companyName")}
                                />
                            </div>

                            <div className="inputContainer">
                                <Message className='user' style={{ width: '40px' }} />
                                <input
                                    className="field"
                                    type="text"
                                    placeholder="madridista@essolo.come"
                                    {...register("email")}
                                />
                            </div>

                            <div className="inputContainer">
                                <Profile className='user' style={{ width: '40px' }} />
                                <input
                                    className="field"
                                    type="text"
                                    placeholder="+2349031945894"
                                    {...register("phone")}
                                />
                            </div>

                            <div className="inputContainer">
                                <Lock className='user' style={{ width: '40px' }} />
                                <input
                                    className="field"
                                    type="text"
                                    placeholder="*************"
                                    {...register("password")}
                                />
                                <Hide className='user2' style={{ width: '40px' }} />
                            </div>

                            <div className="inputContainer">
                                <Lock className='user' style={{ width: '40px' }} />
                                <input
                                    className="field"
                                    type="text"
                                    placeholder="Confirm password"
                                    {...register("confirmPassword")}
                                />
                                <Hide className='user2' style={{ width: '40px' }} />
                            </div>

                            <div className="checkboxContainer">
                                <input name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                                <span className="checkmark"></span>
                                <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                                <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                            </div>
                        </form>
                    </div>


                </Formdiv>
                {/* </div> */}
            </Container>
        </>
    );
}
