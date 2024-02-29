import React, { FC } from 'react';

enum AlertType {
    Success = 'alert-success',
    Error = 'alert-danger',
    Info = 'alert-info',
    Warning = 'alert-warning',
}

interface messageProps {
    message: string
    }


const ErrorMessage: FC<messageProps> = ({message}) => {

    return (
        <div role='alert' className={`alert ${AlertType}`}>
           {message}
        </div>
    );
}

export default ErrorMessage;