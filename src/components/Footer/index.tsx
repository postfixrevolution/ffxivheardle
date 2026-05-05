import React from "react";
import { IoHeart } from "react-icons/io5";

import * as Styled from "./index.styled";

export function Footer() {
  return (
    <footer>
      <Styled.Text>
        Made with the love and will to forge ahead.
        <br/>
        <Styled.Credit>
          © postfixrevolution
        </Styled.Credit>
      </Styled.Text>
    </footer>
  );
}
