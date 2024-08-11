import { useState } from "react";
import './SignUp.css'



const SignUpInputs = (props: any) => {
    const { label, errorMessage, onChange, id, ...inputProps } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    return (

        <div className="mt-2">
            <label className="block text-gray-700 font-semibold mb-2">
                {label}
            </label>
            <input
                className="peer text-gray-700 border border-gray-300 rounded py-1.5 px-2 block w-full focus:outline-2 focus:outline-blue-700"
                type="text"
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)}
                focused={focused.toString()}
            />

            <strong className=".error">
                {errorMessage}
            </strong>


        </div>

    )
}

export default SignUpInputs;