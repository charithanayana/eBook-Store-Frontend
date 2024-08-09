import { useState } from "react";



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
                focused={focused.toString()}
            />

            <span className="text-red-600 text-sm hidden peer-invalid:block">
                {errorMessage}
            </span>


        </div>

    )
}

export default SignUpInputs;