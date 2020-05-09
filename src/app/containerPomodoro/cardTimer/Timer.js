import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { MdEdit } from 'react-icons/md' // MdDone
import Horizontal from '../../components/Horizontal'
import BtnIcon from '../../components/BtnIcon'
import Button from '../../components/Button'


const setPageTitle = newTitle => document.title = newTitle

const convertTimer = {
    int: (timer) => {
        const arrayTimer = timer.split(':')

        const min = parseInt(arrayTimer[0])
        const seg = parseInt(arrayTimer[1])

        return { min, seg }
    },

    string: (min, seg) => {

        if (min < 10 && min >= 0) min = `0${min}`
        if (seg < 10) seg = `0${seg}`

        return `${min}:${seg}`
    }
}

const timerDecrement = time => {
    let { min, seg } = convertTimer.int(time)

    if (seg === 0) {
        min -= 1;
        seg = 60;
    }

    seg -= 1

    return { min, seg }
}


function Timer({ obj }) {

    const initialTimer = '00:05' // '25:00'
    const [timer, setTimer] = useState(initialTimer)
    const [idInterval, setIdInterval] = useState('')
    const [reset, setReset] = useState(false)
    const [conclude, setConclude] = useState(false)


    // ------------- Timer Functions -------------  
    const changeTimer = () => setTimer(time => {

        const { min, seg } = timerDecrement(time)

        if (min <= 0 && seg === 0) {
            console.log('tocar alerta, seg: ', seg)
            setConclude(true)
        }

        const newTimer = convertTimer.string(min, seg)

        setPageTitle(`${obj.indicator}) ${newTimer}`)

        return newTimer
    })

    const startTimer = () => {
        if (idInterval !== '') return
        if (timer.slice(0, 1) === '-') setConclude(true)

        const id = setInterval(changeTimer, 1000)
        setIdInterval(id)
        setReset(false)
    }

    const pauseTimer = () => {
        clearTimeout(idInterval)
        setIdInterval('')
        if (timer !== initialTimer) setReset(true)
        setConclude(false)
    }

    const resetTimer = () => {
        clearTimeout(idInterval)
        setTimer(initialTimer)
        setPageTitle('Pomodoro')
        setReset(false)
        setConclude(false)
    }

    const concludePomodoro = () => {
        console.log('concludePomodoro: ', timer)
        resetTimer()
    }


    return (
        <Container>
            <Horizontal margin='0 0 20px 80px' position='relative'>
                <h2>{timer}</h2>

                <BtnIcon margin='0 0 0 26px' width='36px' height='36px' background='#F5F5F5' shadow>
                    <MdEdit size='24' />
                </BtnIcon>

                {/* <BtnIcon margin='0 0 0 26px' width='36px' height='36px' background='#F5F5F5' shadow>
                    <MdDone size='24' />
                </BtnIcon> */}
            </Horizontal>

            <Horizontal>
                {(conclude) ?
                    <Button onClick={concludePomodoro} text='CONCLUIR' background='#4EB089' color='white' /> :
                    <Button onClick={startTimer} text='INICIAR' background='#4EB089' color='white' />
                }

                {(reset) ?
                    <Button onClick={resetTimer} text='ZERAR' /> :
                    <Button onClick={pauseTimer} text='PARAR' />
                }
            </Horizontal>
        </Container>
    )
}

const Container = styled.div`
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h2 {
        color: #343434;
        font-family: monospace; 
        font-size: 44px;
        cursor: default;
    }
`

export default Timer
