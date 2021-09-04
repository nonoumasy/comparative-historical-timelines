import "./styles.css";
import { useState } from "react";
import data from "./data.json";
import { Button, Typography } from "@material-ui/core";

import { TimelineComp } from "./components/TimelineComp";
import { ReferenceComp } from "./components/ReferenceComp";

export default function App() {
  // console.log(data);
  const [horz, setHorz] = useState(true);

  const handleClick = () => {
    setHorz(!horz);
  };
  return (
    <div
      style={{
        width: "100vw",
        overflow: "auto",
        padding: 20
        //  backgroundColor: "red"
      }}
    >
      <Typography variant="h5" style={{ color: "#fff", marginBottom: 0 }}>
        Comparative Historical Timelines by Country
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20, fontSize: 12, color: "#ccc" }}
      >
        data source: Wikipedia.com
      </Typography>
      <Button
        onClick={handleClick}
        variant="contained"
        disableElevation
        style={{ marginBottom: 40 }}
      >
        Toggle Orientation
      </Button>
      <TimelineComp data={data} country={"Korea"} horz={horz} />
      <TimelineComp data={data} country={"Japan"} horz={horz} />
      <TimelineComp data={data} country={"China"} horz={horz} />
      <ReferenceComp data={data} />
    </div>
  );
}
