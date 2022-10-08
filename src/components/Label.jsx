import tr from "../language/tr.js";

const Label = ({ children, className, ...props }) => {
  if (children) {
    return (
      <div className={className} {...props}>
        {tr[children]}
      </div>
    );
  }
};

export default Label;
