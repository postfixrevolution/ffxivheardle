import React from "react";
import Countdown from 'react-countdown';

import * as Styled from "./index.styled";

export function TimeToNext() {
  const timeToNextDay = Math.floor(
      (new Date(new Date().setHours(24, 0, 0, 0)).getTime() -
        new Date().getTime())
    );

  return (
      <Styled.Text>
        <Countdown date={Date.now() + timeToNextDay}/>
      </Styled.Text>
  );
}
