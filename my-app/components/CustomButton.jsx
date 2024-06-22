import React from 'react'
import { Button } from "@nextui-org/react";

const CustomButton = ({ title, className, type, color }) => {
    return (
        <Button
            className={className}
            type={type}
            color={color}
        >
            {title}
        </Button>
    )
}

export default CustomButton;