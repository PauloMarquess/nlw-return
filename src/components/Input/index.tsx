interface InputProps {
    placeholder: string;
    type: string;
    onChange: () => void;
}

const Input = ({ placeholder, type, onChange }: InputProps) => {
    return (
        <div>
            <input onChange={onChange} placeholder={placeholder} type={type} />
        </div>
    );
};

export default Input;
