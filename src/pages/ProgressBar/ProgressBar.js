import React from 'react'
import FourSplit from '../components/FourSplit'
import ReactForm, { ReactForm2, ReactForm3 } from './components/ReactForm'
import ProgressBar from './components/ProgressBar'



export default function ProgressBar() {
    return (
        <>
            <FourSplit
                elemOne={<ReactForm />}
                elemTwo={<ReactForm2 />}
                elemThree={<ReactForm3 />}
                elemFour={<ProgressBar />}
            />
        </>
    )
}
