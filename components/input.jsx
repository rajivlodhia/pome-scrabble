const Input = ({letters, maxLength, onChange}) => {
    return (
        <input
            className="rounded-full border-2 border-gray-300 p-2"
            type="text"
            value={letters}
            maxLength={maxLength}
            onChange={(e) => onChange(e)}
        />
    )
}

export default Input;
