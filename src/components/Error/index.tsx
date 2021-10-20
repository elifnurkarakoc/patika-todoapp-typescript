import React from 'react'
import { FormikErrors } from 'formik';
import {ErrorText} from "./Error.styled"
interface IErrorProps{
    message:string | FormikErrors<Date>;
}


const Error:React.FC<IErrorProps> = ({message}) => {
    return (
        <ErrorText>
            {message}
        </ErrorText>
    )
}

export default Error
