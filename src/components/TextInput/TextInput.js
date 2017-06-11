import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

/** Text input with label */
function TextInput({htmlId, htmlFor, label, required = false, type = "text", name, placeholder, value, onChange, error, children, ...props}) {
    return (
        <div style={{marginBottom: 16}}>
        <Label htmlFor={htmlFor} label={label} />
            <input
                id={htmlId}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={error && {border: 'solid 1px red'}}
                {...props}
            />
            {children}
            {error && <div className="error" style={{color: 'red'}}>{error}</div>}
        </div>
    )
}

TextInput.propTypes = {
    /** Unique HTML ID. */
    htmlId: PropTypes.string.isRequired,

    /** Input name. */
    name: PropTypes.string.isRequired,

    /** Input label */
    label: PropTypes.string.isRequired,

    /** Input type */
    type: PropTypes.oneOf(['text', 'number', 'password']),

    /** Mark label with asterisk if set to true */
    required: PropTypes.bool,

    /** Function to call onChange */
    onChange: PropTypes.func.isRequired,

    /** Placeholder to display when empty */
    placeholder: PropTypes.string,

    /** Value */
    value: PropTypes.any,

    /** String to display when error occurs */
    error: PropTypes.string,

    /** Child component to display next to the input */
    children: PropTypes.node
};

export default TextInput;