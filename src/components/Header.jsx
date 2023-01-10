import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Header = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        const nvg = props.login ? "/login" : "/signup";
        navigate(props.login ? "/login" : "/signup")
    }
  return (
    <Container className='flex a-center j-between'>
        <div className="logo">
            <img src="/assets/logo.png" alt="" />
        </div>
        <button onClick={handleClick}>
            {props.login ? "Log in" : "Sign in"}
        </button>
    </Container>
  )
}

const Container = styled.div`
    padding: 0 4rem;
    .logo{
        img{
            height: 5rem;
        }
    }
    button{
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius:0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
    }
`

export default Header
