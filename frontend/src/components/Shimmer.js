const Shimmer = () => {
  return (
    <div className="shimmer-div">
      {Array(48)
        .fill("")
        .map((e, index) => (
          <div className="shimmer" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
