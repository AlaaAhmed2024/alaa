import { useState, useEffect } from "react";

const ProgressCounter = () => {
  const progressColor = "#0d6efd";

  let incrementBy = 10;
  let timeInterval = 300;

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(
      () =>
        setCount((prevCount) =>
          prevCount < 100 ? prevCount + incrementBy : prevCount
        ),
      timeInterval
    );
  }, []);

  const progressStyles = {
    backgroundColor: progressColor,
    height: "100%",
    width: count + "%",
    textAlign: "center",
    borderRadius:"5px",
  };

 

  return (
    <div style={{ height: 22, width: "200px" , marginTop:"10px" , backgroundColor:"#e9ecef" }}>
      <div style={progressStyles}>
        <span style={{ color: "white" , borderRadius:"5px"}}>{count  + " % " }</span>
      </div>
    </div>
  );
};

export default ProgressCounter;
