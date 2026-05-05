import React from "react";
import { Button } from "..";

import * as Styled from "./index.styled";
import { PlayHistory } from "../PlayHistory";

interface Props {
  onClose: () => void;
}

export function StatsPopUp({ onClose }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>Your FFXIV Heardle Stats</h1>
        <Styled.Spacer />
        <Styled.Section>
          <PlayHistory/>
        </Styled.Section>
        <Styled.Spacer />
        <Styled.Section>
          <Styled.SectionTitle>
            Guess Distribution
          </Styled.SectionTitle>
        </Styled.Section>
        <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
          Dismiss
        </Button>
      </Styled.PopUp>
    </Styled.Container>
  );
}
