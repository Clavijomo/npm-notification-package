import { CheckCircleOutline, Error, Info, WarningOutlined } from "@mui/icons-material"
import React from "react";

export const useSelectIcon = (type: 'success' | 'error' | 'info' | 'warning') => {

    switch (type) {
        case 'success':
            return <CheckCircleOutline color="success" />;

        case 'warning':
            return <WarningOutlined color="warning" />;

        case 'error':
            return <Error color="error" />;

        case 'info':

        default:
            return <Info color="info" />;
    }
}