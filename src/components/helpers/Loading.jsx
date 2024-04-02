const Loading = () => {
  return (
    <div className="loaderWrapper">
      <div
        className="spinner-border"
        role="status"
        style={{ color: "#A537DC", margin: "0 auto" }}
      >
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default Loading;
