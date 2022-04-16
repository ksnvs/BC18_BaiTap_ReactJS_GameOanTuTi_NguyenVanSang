import React, { useState } from "react";
import "../assets/style/buble.css";
import { randomIntFromInterval } from "../utils/randomNum";

export default function GameOanXuXi(props) {
  let [state, setState] = useState({
    userChoose: 1,
    userChooseImg: ["./img/bao.png", "./img/bua.png", "./img/keo.png"],
    totalGamesCount: 0,
    winCount: 0,
    computerChoose: null,
  });
  const handleChangeUserChoose = (index) => {
    // console.log(index);
    setState({ ...state, userChoose: index });
  };
  const handleRenderUserChoose = () => {
    let userChooseIndex = state.userChoose;
    // console.log(state);
    return state.userChooseImg.map((item, index) => {
      return userChooseIndex === index ? (
        <button
          key={index}
          className="btn"
          style={{
            width: `30%`,
            height: `100%`,
            border: `1px solid orange `,
          }}
          onClick={() => {
            // console.log(index);
            handleChangeUserChoose(index);
          }}
        >
          {" "}
          <img style={{ height: `100%` }} src={item} alt="" />
        </button>
      ) : (
        <button
          key={index}
          className="btn"
          style={{
            width: `30%`,
            height: `100%`,
          }}
          onClick={() => {
            handleChangeUserChoose(index);
          }}
        >
          {" "}
          <img style={{ height: `100%` }} src={item} alt="" />
        </button>
      );
    });
  };
  const handlePlayGame = () => {
    let computerChoose = randomIntFromInterval(0, 2);
    let userChoose = state.userChoose;
    let totalGames = state.totalGamesCount;
    let totalWin = state.winCount;
    computerChoose == 0 && userChoose == 2 && totalWin++;
    computerChoose == 1 && userChoose == 0 && totalWin++;
    computerChoose == 2 && userChoose == 1 && totalWin++;
    totalGames++;
    // console.log(state);
    setState({
      ...state,
      computerChoose: computerChoose,
      totalGamesCount: totalGames,
      winCount: totalWin,
    });
  };
  return (
    <div
      className="container bg-game"
      style={{
        backgroundImage: `url("./img/bgGame.png")`,
        backgroundRepeat: `no-repeat`,
        width: `100vw`,
        minHeight: `100vh`,
        backgroundPosition: ` center`,
        backgroundAttachment: `fixed`,
        backgroundSize: `cover`,
        textAlign: `center`,
        position: `relative`,
      }}
    >
      <h2 style={{ color: `orange`, padding: `40px 0` }}>
        I'm iron man, i love <br /> you 3000 !!
      </h2>
      <p style={{ color: `limeGreen`, fontSize: `27px` }}>
        Số bàn thắng: <span style={{ color: `orange` }}>{state.winCount}</span>
      </p>
      <p
        style={{
          color: `limeGreen`,
          fontSize: `27px`,
        }}
      >
        Số bàn chơi:{" "}
        <span style={{ color: `orange` }}>{state.totalGamesCount}</span>
      </p>
      <div
        style={{
          //   backgroundColor: `white`,
          width: `350px`,
          height: `300px`,
          position: `absolute`,
          top: `40px`,
        }}
      >
        <div className="speech-bubble">
          <img
            style={{ height: `100%`, borderRadius: `.4em` }}
            src={state.userChooseImg[state.userChoose]}
            alt=""
          />
        </div>
        <div style={{ height: `200px` }}>
          <img style={{ height: `100%` }} src="./img/player.png" alt="" />
        </div>
        <div
          className="d-flex justify-content-between "
          style={{ height: `60px`, width: `100%` }}
        >
          {handleRenderUserChoose()}
        </div>
      </div>
      <div
        style={{
          //   backgroundColor: `white`,
          width: `350px`,
          height: `300px`,
          position: `absolute`,
          top: `40px`,
          right: `0`,
        }}
      >
        <div className="speech-bubble">
          <img
            style={{ height: `100%`, borderRadius: `.4em` }}
            src={state.userChooseImg[state.computerChoose]}
            alt=""
          />
        </div>
        <div style={{ height: `200px` }}>
          <img
            style={{ height: `100%` }}
            src="./img/playerComputer.png"
            alt=""
          />
        </div>
        <div style={{ height: `60px`, width: `100%` }}></div>
      </div>
      <button
        onClick={() => {
          handlePlayGame();
        }}
        className="btn btn-success"
      >
        Play game
      </button>
    </div>
  );
}
