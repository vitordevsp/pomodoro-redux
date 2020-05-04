import React from 'react'
import Horizontal from '../../../components/Horizontal'
import styled from 'styled-components'
import Text from '../../../components/Text'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdArrowDropDown, MdDeleteForever } from 'react-icons/md'
import BtnIcon from '../../../components/BtnIcon'


function ItemList({ indicator, text, checked, openModal, onDelete, changeDone }) {
    return (
        <Horizontal margin='10px 0 0'>
            <Card onClick={changeDone} padding='0 5px' cursor='pointer' selected={checked}>
                {checked ?
                    <MdCheckBox size='26' color='#4EB089' /> :
                    <MdCheckBoxOutlineBlank size='26' color='#4EB089' />
                }
            </Card>

            <Card margin='0 8px' selected={checked}>
                <Text margin='0 6px 0 12px'>{indicator}</Text>
                <BtnIcon onClick={openModal}> <MdArrowDropDown size='24' color='#303030' /> </BtnIcon>
            </Card>

            <Card className='teste' width='100%' padding='0 4px 0 12px' justify='space-between' selected={checked} hidden>
                <Text scratched={checked}>{text}</Text>

                <ContainerbtnDel className='hide'>
                    <BtnIcon onClick={onDelete}> <MdDeleteForever size='24' color='#303030' /> </BtnIcon>
                </ContainerbtnDel>
            </Card>
        </Horizontal>
    )
}

const Card = styled.div`
    width: ${({ width = 'initial' }) => width};
    height: 38px;
    border-radius: 6px;
    background: #FFFFFF;
        
    padding: ${({ padding = '0' }) => padding};
    margin: ${({ margin = '0' }) => margin};
    border: 2px solid ${({ selected }) => selected ? '#4EB089' : '#FFFFFF'};

    display: flex;
    align-items: center;
    justify-content: ${({ justify = 'initial' }) => justify};

    box-shadow: 0px 2px 2px .5px rgba(0, 0, 0, 0.25);
    cursor: ${({ cursor = 'default' }) => cursor};
    position: relative;
    ${({ hidden }) => hidden ? 'overflow: hidden;' : null};

    .hide {
        position: relative;
        right: -40px;
        transition: right 300ms ease-in;
    }

    :hover .hide { right: 0; }
`

const ContainerbtnDel = styled.div`
    button svg { transition: fill 500ms ease-out; }

    :hover button svg { fill: #B50000; }
`

export default ItemList
