function Button({ label, borderColor, bgColor, textColor }) {
    return (
        <>

            <button className={`border ${borderColor ? borderColor : `border-blue-400`} ${bgColor ? bgColor : `bg-white`} ${textColor ? textColor : `text-black`}  rounded-md p-2 px-4  m-4`}>
                {label}
            </button>

        </>
    );
}

export default Button;