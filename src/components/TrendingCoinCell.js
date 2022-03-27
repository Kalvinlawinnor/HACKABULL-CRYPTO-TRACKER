import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useState } from "react";

export const TrendingCoinCell = ({ url, name, percentage, price }) => {
  const [increase, setIncrease] = useState(true);

  useEffect(() => {
    if (percentage < 0) setIncrease(false);
    else setIncrease(true);
  });

  return (
    <article
      style={{
        display: "block",
        margin: "20px",
        padding: "10px",
        borderRadius: "15px",
        background: "#f0f0f0",
        color: "#07ad31",
        boxShadow: "0 3px 6px 0 #f0f0f0, 0 6px 10px 0 #f0f0f0",
      }}
    >
      <div>
        <img src={url} alt="no image" style={{ width: 50 }} />
        <h4>{name}</h4>
        <p>$ {price}</p>
      </div>
      <div style={{ marginTop: 15 }}>
        <span>
          {increase ? (
            <FontAwesomeIcon
              icon={faArrowUp}
              style={{ color: "green", fontSize: 50 }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faArrowDown}
              style={{ color: "red", fontSize: 50 }}
            />
          )}
        </span>
        <span style={{ fontSize: 20 }}>{percentage}%</span>
      </div>
    </article>
  );
};