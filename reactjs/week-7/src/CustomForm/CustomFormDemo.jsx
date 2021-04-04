import React from 'react';
import CustomForm from './CustomFromHOC.jsx';

const Form = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit();
    }
}

const handleChange = (e) => {
    const inputName = e.targeet.name;
    const inputValue = e.target.value;
    props.onChange(inputName, inputValue);
}

return (
    <div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <input name="name" type="text" />
            <inputn ame="email" type="text" />
            <button type="submit">Submit</button>
        </form>
    </div>
);

const CustomFormDemo = (props) => {
    const FormWitchCustom = CustomForm({contact: {name: '', email: ''}}) ({propName: 'contact', propListName: 'contactList'})(Form)
    return(
        <div>
            <FormWitchCustom {...props}/>
        </div>
    )
}

export default CustomFormDemo;