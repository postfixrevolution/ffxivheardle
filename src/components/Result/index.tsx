import React from "react";

import { Song } from "../../types/song";
import { GuessType } from "../../types/guess";
import { scoreToEmoji } from "../../helpers";

import { Button } from "../Button";
import { YouTube } from "../YouTube";

import * as Styled from "./index.styled";

interface Props {
  didGuess: boolean;
  currentTry: number;
  todaysSolution: Song;
  guesses: GuessType[];
}

export function Result({
  didGuess,
  todaysSolution,
  guesses,
  currentTry,
}: Props) {
  const textForTry = ["Wow!", "Great", "Nice", "Well done", "Good"];

  if (didGuess) {
    const copyResult = React.useCallback(() => {
      navigator.clipboard.writeText(scoreToEmoji(guesses));
    }, [guesses]);

    const triesConjugation = currentTry === 1 ? "try" : "tries";

    return (
      <>
        <Styled.ResultTitle>{textForTry[currentTry - 1]}</Styled.ResultTitle>
        <Styled.SongTitle>
          The song for today is {todaysSolution.name} - {todaysSolution.artist}
        </Styled.SongTitle>
        <Styled.Tries>
          You guessed it in {currentTry} {triesConjugation}
        </Styled.Tries>
        <YouTube id={todaysSolution.youtubeId} />
        <Button onClick={copyResult} variant="green">
          Copy Result
        </Button>
        <Styled.TimeToNext>
             Remember to come back tomorrow - the next FFXIV Heardle will be available in:
        </Styled.TimeToNext>
        <TimeToNext />
      </>
    );
  } else {
    return (
      <>
        <Styled.ResultTitle>Sorry, you didn't get it this time...</Styled.ResultTitle>
        <Styled.SongTitle>
          The song for today is {todaysSolution.name} - {todaysSolution.artist}
        </Styled.SongTitle>
        <YouTube id={todaysSolution.youtubeId} />
        <Styled.TimeToNext>
             Remember to come back tomorrow - the next FFXIV Heardle will be available in:
        </Styled.TimeToNext>
        <TimeToNext />
      </>
    );
  }
}
