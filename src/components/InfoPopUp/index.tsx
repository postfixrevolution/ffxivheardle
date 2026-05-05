import React from "react";
import { IoMusicalNoteOutline, IoHelpCircleOutline } from "react-icons/io5";
import { Button } from "..";

import * as Styled from "./index.styled";

interface Props {
  onClose: () => void;
}

export function InfoPopUp({ onClose }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>Welcome and well met.</h1>
        <Styled.Spacer />
        <Styled.Section>
          <IoMusicalNoteOutline size={70} />
          <p>
            FFXIV Heardle is a fun daily music game based on <a href="https://heardle.app">Heardle</a>.
            It features Final Fantasy XIV songs from various expansions.
          </p>
        </Styled.Section>
        <Styled.Section>
          <IoHelpCircleOutline size={50} />
          <p>
            A new song is generated every day at 00:00 PST, and the task is to guess
            it in the shortest time possible.
          </p>
        </Styled.Section>
        <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
          Dismiss
        </Button>
        <Styled.Contact>
          Contact -{" "}
          <a href="mailto:soldersetsoul@gmail.com">
            soldersetsoul@gmail.com 
          </a>{" "}
        </Styled.Contact>
      </Styled.PopUp>
    </Styled.Container>
  );
}
