type ButtonProps = {
    children: JSX.Element | JSX.Element[] | string,
    classNames?: string
}

const Button = ({ children, classNames }: ButtonProps) => {
  return (
    <button className={`${classNames && classNames} bg-white px-5 py-3 rounded-full`}>
        { children }
    </button>
  );
}

export default Button