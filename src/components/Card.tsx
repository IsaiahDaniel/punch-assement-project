type CardProps = {
    children: JSX.Element | JSX.Element[],
    classNames?: string;
}

const Card = ({ children, classNames }: CardProps) => {
  return (
    <div className={`bg-white py-10 px-5 ${classNames && classNames}`}>
        { children }
    </div>
  );
}

export default Card;
