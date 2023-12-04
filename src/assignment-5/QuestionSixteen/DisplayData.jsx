const DisplayData = ({ data }) => {
  return (
    <>
      <h4>
        16.Develop an HOC named withDataFetching that fetches data from an API
        and passes it as props to a component. Use this HOC to retrieve and
        display data in a component.
      </h4>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};
export default DisplayData;
