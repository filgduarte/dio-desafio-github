const Button = ({children, styleName, onClick}) => {
    return (
        <button
            type="button"
            className={'btn btn-' + styleName}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;