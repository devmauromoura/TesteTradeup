interface IInput{
    title: string;
    color: string;
    placeholder?: string;
    icon: string;
    keyboardType?: string;
    value: string;
    set: (value: string) => void
}

export default IInput;