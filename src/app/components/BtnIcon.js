import styled from 'styled-components'


const BtnIcon = styled.button`
    min-width: ${({ width = '32px' }) => width};
    min-height: ${({ height = '32px' }) => height};
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    margin:  ${({ margin = '0' }) => margin};
    color: ${({ color = '#343434' }) => color};
    background: ${({ background = 'transparent' }) => background};
  
    ${({ shadow }) => shadow ? 'box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.25);' : null}
    transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);

    :hover { 
        transform: scale(1.18); 
        background: rgba(50, 50, 50, .1); 
    }
    
    :active { opacity: .5; }
`

export default BtnIcon
