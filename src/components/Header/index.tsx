import React from "react";
import { IoInformationCircleOutline,IoStatsChartOutline } from "react-icons/io5";

import * as Styled from "./index.styled";

interface Props {
  openInfoPopUp: () => void;
  openStatsPopUp: () => void;
}

export function Header({ openInfoPopUp, openStatsPopUp }: Props) {
  return (
    <Styled.Container>
      <Styled.Content>
        <IoInformationCircleOutline
          onClick={openInfoPopUp}
          size={30}
          width={30}
          height={30}
        />

        <Styled.Logo><a href="#">FFXIV Heardle</a></Styled.Logo>

        <Styled.Stats>
          <IoStatsChartOutline
          onClick={openStatsPopUp}
          size={30}
          width={30}
          height={30}
        />
          </Styled.Stats>
      </Styled.Content>
    </Styled.Container>
  );
}
