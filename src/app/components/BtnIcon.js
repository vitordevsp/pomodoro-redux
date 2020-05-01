import React from 'react'
import styled from 'styled-components'


function BtnIcon({ margin, icon }) {
    return (
        <Btn margin={margin}>{icon}</Btn>
    )
}

const Btn = styled.button`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:  ${({ margin = '0' }) => margin};
    color: ${({ color = '#343434' }) => color};
    background: ${({ background = '#F5F5F5' }) => background};
    box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.25);

    transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);

    :hover { transform: scale(1.1); }
    :active { opacity: .5; }
`

export default BtnIcon
