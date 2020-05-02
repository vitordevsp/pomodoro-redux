import React from 'react'
import styled from 'styled-components'
import Text from '../../components/Text'
import BtnIcon from '../../components/BtnIcon'
import { MdCheckCircle, MdDeleteForever } from 'react-icons/md'
import Horizontal from '../../components/Horizontal'


function ItemList({ num, text, time, onSelect, onDelete }) {
    return (
        <Card onClick={onSelect} name='cardItem' className='teste' width='100%' padding='0 12px' justify='space-between'>
            <Horizontal>
                <MdCheckCircle size='24' color='#4EB089' />
                <Text margin='0 0 0 12px'>{`${num} - ${text}`}</Text>
            </Horizontal>

            {time && <Text className='none' weight='300' size='1em'>{time}</Text>}

            {onDelete && <ContainerBtnDel className='hide'>
                <BtnIcon name='btnDel' onClick={onDelete}> <MdDeleteForever size='24' color='#303030' /> </BtnIcon>
            </ContainerBtnDel>}
        </Card>
    )
}

const Card = styled.div`
    width: ${({ width = 'initial' }) => width};
    height: 44px;
    border-radius: 10px;
    background: #FFFFFF;
    
    padding: ${({ padding = '0' }) => padding};
    margin: ${({ margin = '0 0 12px' }) => margin};

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: 0px 3px 3px .5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    overflow: hidden;
    position: relative;

    .hide {
        position: absolute;
        transition: right 300ms ease-in;
        right: -40px;
    }

    .none { transition: opacity 400ms ease; }

    :hover .hide { right: 8px; }
    :hover .none { opacity: 0; }
`

const ContainerBtnDel = styled.div`
    button svg { transition: fill 500ms ease-out; }

    :hover button svg { fill: #B50000; }
`

export default ItemList
