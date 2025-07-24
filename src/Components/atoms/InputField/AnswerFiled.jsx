const AnswerFiled = ({ answers, value, selected, onSelect, name }) => {
    return (
        <div onClick={() => onSelect(value)} className={`border rounded-md px-4 py-2 cursor-pointer ${selected === value ? 'bg-blue-500 text-white' : 'bg-white text-black'}`} >{answers}</div>
    );
};

export default AnswerFiled;
