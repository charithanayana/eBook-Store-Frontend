


const SignUpInputs = (props:any) => {
    
    const {label,errorMessage, onChange, id, ...inputProps } = props;


    return (

        <div className="mt-2">
            <label className="block text-gray-700 font-semibold mb-2">
                {label}
            </label>
            <input
                className="text-gray-700 border border-gray-300 rounded py-1.5 px-2 block w-full focus:outline-2 focus:outline-blue-700 invalid:block"
               {...inputProps} 
               onChange={onChange}
               required
            />
            <span className="text-red-600 text-sm hidden">
                {errorMessage}
            </span>
        </div>
    )
}

export default SignUpInputs