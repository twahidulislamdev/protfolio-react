const Container = ({ children, className }) => {
  return <div className={`w-[1220px] m-auto ${className}`}>{children}</div>;
};

export default Container;
