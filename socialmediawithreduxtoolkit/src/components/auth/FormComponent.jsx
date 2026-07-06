const FormComponent = ({ data, handleChange }) => {
  return (
    <>
      {data.map((value) => {
        return (
          <aside key={value.name}>
            <label htmlFor={value.name}>{value.displayName}</label>
            <input
              type={value.type}
              placeholder={`Enter Your ${value.name}`}
              id={value.name}
              onChange={handleChange}
              name={value.name}
              value={value.state}
            />
          </aside>
        );
      })}
    </>
  );
};

export default FormComponent;
