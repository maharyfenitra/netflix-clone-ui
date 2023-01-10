import React from 'react'
import styled from 'styled-components'
function BackgroundImage() {
  return (
    <Container>
    <img src="/assets/login.jpg" alt="Not found"/>
    </Container>
  )
}
const Container = styled.div`
height: 100vh;
width: 100vw;
img {
    height: 100vh;
    width: 100vw;
}

`
export default BackgroundImage