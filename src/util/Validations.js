import {isEmail} from "validator";
import React from "react";

export const required = (value) => {
    if (!value) {
        return (
            <span style={{color:"red"}}>
                This field is required!
            </span>
        );
    }
};


export const nameValidation = value => {
    if (value.length < 3 && value.length > 15) {
        return (
            <span style={{color:"red"}}>
                Name must be between 3 and 15 characters long.
            </span>
        );
    }
}

export const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <span style={{color:"red"}}>
                This is not a valid email.
            </span>
        );
    }
};
