import React from "react";
import styled from "styled-components";
import Image from "next/image";
import msia from "../public/msia.png";

const FormDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Imagediv = styled.div`
  width: 50%;
  height: 100%;
  background: red;
`;
const Formdiv = styled.div`
  width: 450px;
  height: 80%;
  display: flex;
  justify-content: center;
  ${"" /* background: yellow; */}
`;

export default function register() {
  return (
    <>
      <FormDiv className="">
        <Imagediv className="image"></Imagediv>
        <div className="w-50 h-full  d-flex justify-content-center align-items-center">
          <Formdiv className="">
            <div>
            <Image src={msia} className="" alt="Picture of the author" />
            <p>New here?</p>
            <h6>Signing up is easy. It only takes a few steps.</h6>
            </div>
          </Formdiv>
        </div>
      </FormDiv>
      
    </>
  );
}
