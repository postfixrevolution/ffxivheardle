import React from "react";

import * as Styled from "./index.styled";

export function PlayHistory() {
  let stats = JSON.parse(localStorage.getItem("stats") || "{}");

  return (
    <Styled.PlayHistory>
      <div>
        {stats.length || 0} played

      </div>

      <div>
        0 won
      </div>

      <div>
        0% win rate
      </div>
    </Styled.PlayHistory>
  );
}
