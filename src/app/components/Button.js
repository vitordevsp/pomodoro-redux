import React from 'react'
import styled from 'styled-components'


function Button({ background, color, text }) {
    return (
        <Btn background={background} color={color}>{text}</Btn>
    )
}

const Btn = styled.button`
    font-size: 20px;
    font-weight: bold;
    padding: 10px 36px;
    margin: 6px 12px;
    border-radius: 32px;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${({ color = '#343434' }) => color};
    background: ${({ background = '#F5F5F5' }) => background};
    box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.25);

    transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);

    :hover { transform: scale(1.08); }
    :active { opacity: .5; }
`


export default Button
