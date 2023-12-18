import React from "react";
import "./Rules.css";
import { Link } from "react-router-dom";
import "./MainPage.css";

function Rules() {
  return (
    <div className="rules-container">
      <Link to="/" id="btn-rules-link">
        <img src="/home.png" alt="home" style={{ width: "50px" }} />
      </Link>
      <h1>Hive Game Rules</h1>
      <img
        style={{
          position: "absolute",
          top: "17vw",
          right: "10vw",
          border: "10px solid black",
        }}
        src="/circled.png"
      ></img>
      <div className="description-container">
        <h2>Components</h2>
        <ul>
          <li>2 Queen Bees (Yellow-Gold)</li>
          <li>4 Spiders (Brown)</li>
          <li>4 Beetles (Purple)</li>
          <li>6 Grasshoppers (Green)</li>
          <li>6 Soldier Ants (Blue)</li>
        </ul>
        <h2>Game Setup:</h2>
        <p>Both of players have all 11 pieces of one colour each</p>
        <h2>Objective of the game:</h2>
        <ul>
          <li>
            The main objective is to surround your opponent’s Queen Bee while at
            the same time trying to stop your opponent from doing the same to
            you.
          </li>
          <li>
            The pieces surrounding your Queen Bee can be made up of a mixture of
            both your pieces and your opponent’s.
          </li>
          <li>The first player to surround their opponent’s Queen Bee wins.</li>
        </ul>
        <h2>Introduction gameplay</h2>
        <ul>
          <li>Those hexagonal pieces used are known as Hive.</li>
          <li>
            The game starts with one player clicking and dragging a piece to the
            center and the next player joining one of their pieces to it edge to
            edge.
          </li>
          <li>
            Players then take turns to either place or move any one of their
            pieces.
          </li>
        </ul>
        <h2>Placing:</h2>
        <ul>
          <li>
            A new piece can be introduced into the game at any time. However,
            with the exception of the first piece placed by each player, pieces
            may not be placed next to a piece of the opponent’s colour.
          </li>
          <li>
            It is possible to win the game without placing all your pieces but
            once a piece has been placed it can’t be removed.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;
