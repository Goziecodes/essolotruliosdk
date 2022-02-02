import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function register() {
  return (
    <>
      <div className="w-100">
            <div className="image"></div>
            <div className="form "></div>
            <Title>My page</Title>
      </div>
    </>
  )
}
