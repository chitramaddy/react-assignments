const ShimmerRestaurant = () => {
  return (
    <div className="shimmer-restaurant">
      <h3 className="shimmer-para">loading...</h3>
      <p className="shimmer-para"></p>
      <p className="shimmer-para"></p>
      <p className="shimmer-para"></p>
    </div>
  );
};

export default Shimmer = () => {
  const fifteenArray = new Array(15);
  return (
    <div className="shimmer">
      <input className="shimmer-input"></input>
      <div className="shimmer-list">
        {Array(10)
          .fill('')
          .map((arr, index) => {
            return <ShimmerRestaurant />;
          })}
      </div>
    </div>
  );
};
