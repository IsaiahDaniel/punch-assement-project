import React from 'react'

type ButtonProps = {
    children: JSX.Element | JSX.Element[] | string,
    classNames?: string
}

const Button = ({ children, classNames }: ButtonProps) => {
  return (
    <button className={`bg-white px-5 py-3 rounded-full ${classNames && classNames}`}>
        { children }
    </button>
  );
}

export default Button