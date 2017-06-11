import React from 'react';
import TextInput from 'prosdevlab-react/TextInput';

export default function ExampleTextInputError() {
    return (
        <TextInput
            htmlId="exampleId"
            name="firstName"
            label="First Name"
            onChange={()=>{}}
            required
            error="First name is required."
        />
    )

}