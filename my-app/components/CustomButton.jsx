import React from 'react'
import { Button } from "@nextui-org/react";

const CustomButton = ({ title, className, type, color , variant}) => {
    return (
        <Button
            className={className}
            type={type}
            color={color}
            variant={variant}
        >
            {title}
        </Button>
    )
}

export default CustomButton;