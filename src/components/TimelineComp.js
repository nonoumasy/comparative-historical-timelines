import React from "react";

import { Tooltip, Typography } from "@material-ui/core";

export const TimelineComp = ({ country, horz, data }) => {
  function generateLightColorHex() {
    let color = "#";
    for (let i = 0; i < 3; i++)
      color += (
        "0" +
        Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
      ).slice(-2);
    return color;
  }

  return (
    <>
      <Typography style={{ color: "#fff", marginBottom: 10 }}>
        {country}
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: horz ? "row" : "column",
          width: 2500,
          marginBottom: 20
        }}
      >
        {data
          .filter((item) => item.country === country)
          .sort(function (a, b) {
            return a.startYear - b.startYear;
          })
          .map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start"
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: "#fff",
                    width: item.endYear - item.startYear,
                    // marginRight: 10,
                    marginBottom: 5
                  }}
                >
                  {item.startYear}
                </div>
                <Tooltip
                  title={`${item.title} (${
                    item.endYear - item.startYear
                  }) years`}
                >
                  <div
                    style={{
                      height: 3,
                      backgroundColor: generateLightColorHex(),
                      width: item.endYear - item.startYear,
                      marginRight: 10,
                      marginBottom: 5
                    }}
                  />
                </Tooltip>
                {item.endYear - item.startYear > (horz ? 30 : 1) && (
                  <div
                    style={{
                      fontSize: 10,
                      color: "#fff",
                      width: item.endYear - item.startYear,
                      marginRight: 10,
                      marginBottom: 20
                    }}
                  >
                    {item.title} ({item.endYear - item.startYear}) years
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};
