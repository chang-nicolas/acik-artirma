import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuShow, setMobileMenuShow] = React.useState("");
  const [activeBurger, setActiveBurger] = React.useState("");

  const toggleMobileMenu = () => {
    console.log("ew");
    if (mobileMenuShow == "") {
      setMobileMenuShow("show");
      setActiveBurger("active");
    } else {
      console.log(mobileMenuShow);
      setMobileMenuShow("");
      setActiveBurger("");
    }
  };
  return (
    <>
      <div className="header-hero-wrapper">
        <div className="header-hero">
          <div className="hero-overlay">
            <div className="hero-logo-wrap">
              <div className="hero-logo">RIVA NETWORK</div>
            </div>
            <div className="hamburger-btn">
              <button
                className={`burger ${activeBurger}`}
                onClick={toggleMobileMenu}
              >
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-nav-2">
          <div className="container">
            <nav>
              <ul>
                <li className="nav-link">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27.802"
                      height="29.342"
                      viewBox="0 0 27.802 29.342"
                    >
                      <path
                        id="Path_1"
                        data-name="Path 1"
                        d="M9.216,25.986V21.74a1.974,1.974,0,0,1,1.971-1.964h4a1.974,1.974,0,0,1,1.984,1.964h0V26a1.7,1.7,0,0,0,1.665,1.688h2.664a4.784,4.784,0,0,0,4.808-4.76h0V10.85A3.377,3.377,0,0,0,24.97,8.213L15.861.949a4.4,4.4,0,0,0-5.46,0L1.332,8.226A3.351,3.351,0,0,0,0,10.863V22.927a4.784,4.784,0,0,0,4.808,4.76H7.471a1.709,1.709,0,0,0,1.718-1.7h0"
                        transform="translate(0.75 0.905)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        fillRule="evenodd"
                      />
                    </svg>
                    Anasayfa
                  </Link>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.095"
                      height="24.095"
                      viewBox="0 0 24.095 24.095"
                    >
                      <g
                        id="Iconly_Light_Game"
                        data-name="Iconly/Light/Game"
                        transform="translate(0.75 0.75)"
                      >
                        <g id="Game">
                          <line
                            id="Stroke-1"
                            y2="4.231"
                            transform="translate(7.737 11.652)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <line
                            id="Stroke-2"
                            x1="4.317"
                            transform="translate(5.579 13.768)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <line
                            id="Stroke-3"
                            x1="0.121"
                            transform="translate(14.979 11.781)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <line
                            id="Stroke-4"
                            x1="0.121"
                            transform="translate(17.028 15.819)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            id="Stroke-5"
                            d="M6.072,0h0A1.53,1.53,0,0,0,7.618,1.515H8.811A2.375,2.375,0,0,1,11.2,3.855v.763"
                            transform="translate(0.788 0)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            fillRule="evenodd"
                          />
                          <path
                            id="Stroke-7"
                            d="M16.3,21.985q-5.093.086-10,0A6.033,6.033,0,0,1,0,15.827V10.574A6.033,6.033,0,0,1,6.3,4.415q4.942-.084,10,0a6.032,6.032,0,0,1,6.295,6.159v5.253A6.032,6.032,0,0,1,16.3,21.985Z"
                            transform="translate(0 0.567)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            fillRule="evenodd"
                          />
                        </g>
                      </g>
                    </svg>
                    Oyunlar
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.095"
                      height="24.095"
                      viewBox="0 0 24.095 24.095"
                    >
                      <g
                        id="Iconly_Light_Game"
                        data-name="Iconly/Light/Game"
                        transform="translate(0.75 0.75)"
                      >
                        <g id="Game">
                          <line
                            id="Stroke-1"
                            y2="4.231"
                            transform="translate(7.737 11.652)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <line
                            id="Stroke-2"
                            x1="4.317"
                            transform="translate(5.579 13.768)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <line
                            id="Stroke-3"
                            x1="0.121"
                            transform="translate(14.979 11.781)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <line
                            id="Stroke-4"
                            x1="0.121"
                            transform="translate(17.028 15.819)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            id="Stroke-5"
                            d="M6.072,0h0A1.53,1.53,0,0,0,7.618,1.515H8.811A2.375,2.375,0,0,1,11.2,3.855v.763"
                            transform="translate(0.788 0)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            fillRule="evenodd"
                          />
                          <path
                            id="Stroke-7"
                            d="M16.3,21.985q-5.093.086-10,0A6.033,6.033,0,0,1,0,15.827V10.574A6.033,6.033,0,0,1,6.3,4.415q4.942-.084,10,0a6.032,6.032,0,0,1,6.295,6.159v5.253A6.032,6.032,0,0,1,16.3,21.985Z"
                            transform="translate(0 0.567)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            fillRule="evenodd"
                          />
                        </g>
                      </g>
                    </svg>
                    Sıralama
                  </a>
                </li>
                <li>
                  <div className="riva-logo">
                    <a href="#">
                      <img src="images/footer-logo.svg" alt="" />
                    </a>
                  </div>
                </li>
                <li className="nav-link">
                  <Link to="/marketplace">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21.936"
                      height="23.216"
                      viewBox="0 0 21.936 23.216"
                    >
                      <g
                        id="Iconly_Light_Bag"
                        data-name="Iconly/Light/Bag"
                        transform="translate(0.749 0.75)"
                      >
                        <g id="Bag">
                          <path
                            id="Path_33955"
                            d="M15.728,21.9H6.3C2.833,21.9.175,20.653.93,15.618l.879-6.825C2.274,6.28,3.877,5.318,5.284,5.318h11.5c1.427,0,2.937,1.034,3.474,3.475l.879,6.825C21.777,20.085,19.192,21.9,15.728,21.9Z"
                            transform="translate(-0.801 -0.189)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_33956"
                            d="M15.274,5.659A4.881,4.881,0,0,0,10.394.778h0a4.881,4.881,0,0,0-4.9,4.881h0"
                            transform="translate(-0.193 -0.778)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            fillRule="evenodd"
                          />
                          <line
                            id="Line_192"
                            x1="0.052"
                            transform="translate(13.5 9.969)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <line
                            id="Line_193"
                            x1="0.052"
                            transform="translate(6.913 9.969)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </g>
                      </g>
                    </svg>
                    Market
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="/news">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.979"
                      height="23.979"
                      viewBox="0 0 23.979 23.979"
                    >
                      <g
                        id="Iconly_Light_Chat"
                        data-name="Iconly/Light/Chat"
                        transform="translate(1.3 1.1)"
                      >
                        <g id="Chat">
                          <path
                            id="Stroke-4"
                            d="M18.419,18.418A10.8,10.8,0,0,1,6.243,20.58a4.368,4.368,0,0,0-1.533-.429c-1.281.008-2.875,1.249-3.7.422s.414-2.424.414-3.712A4.31,4.31,0,0,0,1,15.335a10.792,10.792,0,1,1,17.42,3.083Z"
                            transform="translate(0 0)"
                            fill="none"
                            stroke="#fffbfb"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.2"
                            fillRule="evenodd"
                          />
                          <line
                            id="Stroke-11"
                            x2="0.01"
                            transform="translate(15.04 11.235)"
                            fill="none"
                            stroke="#fffbfb"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.2"
                          />
                          <line
                            id="Stroke-13"
                            x2="0.01"
                            transform="translate(10.715 11.235)"
                            fill="none"
                            stroke="#fffbfb"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.2"
                          />
                          <line
                            id="Stroke-15"
                            x2="0.01"
                            transform="translate(6.389 11.235)"
                            fill="none"
                            stroke="#fffbfb"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.2"
                          />
                        </g>
                      </g>
                    </svg>
                    Destek
                  </Link>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="19.795"
                      viewBox="0 0 20 19.795"
                    >
                      <g
                        id="Iconly_Light_Add-User"
                        data-name="Iconly/Light/Add-User"
                        transform="translate(0.75 0.75)"
                      >
                        <g id="Add-User">
                          <path
                            id="Stroke-1"
                            d="M7.877,13.206c-3.844,0-7.127.581-7.127,2.909s3.263,2.93,7.127,2.93c3.845,0,7.127-.582,7.127-2.909S11.742,13.206,7.877,13.206Z"
                            transform="translate(-0.75 -0.75)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            fillRule="evenodd"
                          />
                          <path
                            id="Stroke-3"
                            d="M7.877,9.886a4.552,4.552,0,1,0-.031,0Z"
                            transform="translate(-0.75 -0.75)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            fillRule="evenodd"
                          />
                          <line
                            id="Stroke-5"
                            y2="4.01"
                            transform="translate(16.454 5.919)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <line
                            id="Stroke-7"
                            x1="4.09"
                            transform="translate(14.41 7.924)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </g>
                      </g>
                    </svg>
                    Kayıt /
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.477"
                      height="20"
                      viewBox="0 0 18.477 20"
                    >
                      <g
                        id="Iconly_Light_Login"
                        data-name="Iconly/Light/Login"
                        transform="translate(0.75 0.75)"
                      >
                        <g id="Login">
                          <line
                            id="Stroke-1"
                            x1="12.041"
                            transform="translate(0 9.25)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            id="Stroke-3"
                            d="M9.885,7.106l2.928,2.916L9.885,12.938"
                            transform="translate(-0.771 -0.772)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            fillRule="evenodd"
                          />
                          <path
                            id="Stroke-4"
                            d="M5.5,5.389V4.456A3.684,3.684,0,0,1,9.189.772h4.884a3.675,3.675,0,0,1,3.675,3.675v11.14a3.685,3.685,0,0,1-3.685,3.685H9.178A3.675,3.675,0,0,1,5.5,15.6v-.942"
                            transform="translate(-0.771 -0.772)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            fillRule="evenodd"
                          />
                        </g>
                      </g>
                    </svg>
                    Giriş
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className={`mobile-menu-bg ${mobileMenuShow}`}></div>

      <div className={`mobile-menu ${mobileMenuShow}`}>
        <button onClick={toggleMobileMenu} className="close-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
          </svg>
        </button>
        <div className="riva-logo">
          <a href="#">
            <img src="images/footer-logo.svg" alt="" />
          </a>
        </div>
        <ul>
          <li className="nav-link active">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.802"
                height="29.342"
                viewBox="0 0 27.802 29.342"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M9.216,25.986V21.74a1.974,1.974,0,0,1,1.971-1.964h4a1.974,1.974,0,0,1,1.984,1.964h0V26a1.7,1.7,0,0,0,1.665,1.688h2.664a4.784,4.784,0,0,0,4.808-4.76h0V10.85A3.377,3.377,0,0,0,24.97,8.213L15.861.949a4.4,4.4,0,0,0-5.46,0L1.332,8.226A3.351,3.351,0,0,0,0,10.863V22.927a4.784,4.784,0,0,0,4.808,4.76H7.471a1.709,1.709,0,0,0,1.718-1.7h0"
                  transform="translate(0.75 0.905)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  fillRule="evenodd"
                />
              </svg>
              Anasayfa
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.095"
                height="24.095"
                viewBox="0 0 24.095 24.095"
              >
                <g
                  id="Iconly_Light_Game"
                  data-name="Iconly/Light/Game"
                  transform="translate(0.75 0.75)"
                >
                  <g id="Game">
                    <line
                      id="Stroke-1"
                      y2="4.231"
                      transform="translate(7.737 11.652)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <line
                      id="Stroke-2"
                      x1="4.317"
                      transform="translate(5.579 13.768)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <line
                      id="Stroke-3"
                      x1="0.121"
                      transform="translate(14.979 11.781)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <line
                      id="Stroke-4"
                      x1="0.121"
                      transform="translate(17.028 15.819)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Stroke-5"
                      d="M6.072,0h0A1.53,1.53,0,0,0,7.618,1.515H8.811A2.375,2.375,0,0,1,11.2,3.855v.763"
                      transform="translate(0.788 0)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      fillRule="evenodd"
                    />
                    <path
                      id="Stroke-7"
                      d="M16.3,21.985q-5.093.086-10,0A6.033,6.033,0,0,1,0,15.827V10.574A6.033,6.033,0,0,1,6.3,4.415q4.942-.084,10,0a6.032,6.032,0,0,1,6.295,6.159v5.253A6.032,6.032,0,0,1,16.3,21.985Z"
                      transform="translate(0 0.567)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
              </svg>
              Oyunlar
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.095"
                height="24.095"
                viewBox="0 0 24.095 24.095"
              >
                <g
                  id="Iconly_Light_Game"
                  data-name="Iconly/Light/Game"
                  transform="translate(0.75 0.75)"
                >
                  <g id="Game">
                    <line
                      id="Stroke-1"
                      y2="4.231"
                      transform="translate(7.737 11.652)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <line
                      id="Stroke-2"
                      x1="4.317"
                      transform="translate(5.579 13.768)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <line
                      id="Stroke-3"
                      x1="0.121"
                      transform="translate(14.979 11.781)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <line
                      id="Stroke-4"
                      x1="0.121"
                      transform="translate(17.028 15.819)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Stroke-5"
                      d="M6.072,0h0A1.53,1.53,0,0,0,7.618,1.515H8.811A2.375,2.375,0,0,1,11.2,3.855v.763"
                      transform="translate(0.788 0)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      fillRule="evenodd"
                    />
                    <path
                      id="Stroke-7"
                      d="M16.3,21.985q-5.093.086-10,0A6.033,6.033,0,0,1,0,15.827V10.574A6.033,6.033,0,0,1,6.3,4.415q4.942-.084,10,0a6.032,6.032,0,0,1,6.295,6.159v5.253A6.032,6.032,0,0,1,16.3,21.985Z"
                      transform="translate(0 0.567)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
              </svg>
              Sıralama
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.936"
                height="23.216"
                viewBox="0 0 21.936 23.216"
              >
                <g
                  id="Iconly_Light_Bag"
                  data-name="Iconly/Light/Bag"
                  transform="translate(0.749 0.75)"
                >
                  <g id="Bag">
                    <path
                      id="Path_33955"
                      d="M15.728,21.9H6.3C2.833,21.9.175,20.653.93,15.618l.879-6.825C2.274,6.28,3.877,5.318,5.284,5.318h11.5c1.427,0,2.937,1.034,3.474,3.475l.879,6.825C21.777,20.085,19.192,21.9,15.728,21.9Z"
                      transform="translate(-0.801 -0.189)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      fillRule="evenodd"
                    />
                    <path
                      id="Path_33956"
                      d="M15.274,5.659A4.881,4.881,0,0,0,10.394.778h0a4.881,4.881,0,0,0-4.9,4.881h0"
                      transform="translate(-0.193 -0.778)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      fillRule="evenodd"
                    />
                    <line
                      id="Line_192"
                      x1="0.052"
                      transform="translate(13.5 9.969)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <line
                      id="Line_193"
                      x1="0.052"
                      transform="translate(6.913 9.969)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </g>
                </g>
              </svg>
              Market
            </a>
          </li>
          <li className="nav-link">
            <Link to="/news">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.979"
                height="23.979"
                viewBox="0 0 23.979 23.979"
              >
                <g
                  id="Iconly_Light_Chat"
                  data-name="Iconly/Light/Chat"
                  transform="translate(1.3 1.1)"
                >
                  <g id="Chat">
                    <path
                      id="Stroke-4"
                      d="M18.419,18.418A10.8,10.8,0,0,1,6.243,20.58a4.368,4.368,0,0,0-1.533-.429c-1.281.008-2.875,1.249-3.7.422s.414-2.424.414-3.712A4.31,4.31,0,0,0,1,15.335a10.792,10.792,0,1,1,17.42,3.083Z"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#fffbfb"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                      fillRule="evenodd"
                    />
                    <line
                      id="Stroke-11"
                      x2="0.01"
                      transform="translate(15.04 11.235)"
                      fill="none"
                      stroke="#fffbfb"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                    />
                    <line
                      id="Stroke-13"
                      x2="0.01"
                      transform="translate(10.715 11.235)"
                      fill="none"
                      stroke="#fffbfb"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                    />
                    <line
                      id="Stroke-15"
                      x2="0.01"
                      transform="translate(6.389 11.235)"
                      fill="none"
                      stroke="#fffbfb"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                    />
                  </g>
                </g>
              </svg>
              Destek
            </Link>
          </li>
          <li className="nav-link">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19.795"
                viewBox="0 0 20 19.795"
              >
                <g
                  id="Iconly_Light_Add-User"
                  data-name="Iconly/Light/Add-User"
                  transform="translate(0.75 0.75)"
                >
                  <g id="Add-User">
                    <path
                      id="Stroke-1"
                      d="M7.877,13.206c-3.844,0-7.127.581-7.127,2.909s3.263,2.93,7.127,2.93c3.845,0,7.127-.582,7.127-2.909S11.742,13.206,7.877,13.206Z"
                      transform="translate(-0.75 -0.75)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      fillRule="evenodd"
                    />
                    <path
                      id="Stroke-3"
                      d="M7.877,9.886a4.552,4.552,0,1,0-.031,0Z"
                      transform="translate(-0.75 -0.75)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      fillRule="evenodd"
                    />
                    <line
                      id="Stroke-5"
                      y2="4.01"
                      transform="translate(16.454 5.919)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <line
                      id="Stroke-7"
                      x1="4.09"
                      transform="translate(14.41 7.924)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </g>
                </g>
              </svg>
              Kayıt /
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.477"
                height="20"
                viewBox="0 0 18.477 20"
              >
                <g
                  id="Iconly_Light_Login"
                  data-name="Iconly/Light/Login"
                  transform="translate(0.75 0.75)"
                >
                  <g id="Login">
                    <line
                      id="Stroke-1"
                      x1="12.041"
                      transform="translate(0 9.25)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Stroke-3"
                      d="M9.885,7.106l2.928,2.916L9.885,12.938"
                      transform="translate(-0.771 -0.772)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      fillRule="evenodd"
                    />
                    <path
                      id="Stroke-4"
                      d="M5.5,5.389V4.456A3.684,3.684,0,0,1,9.189.772h4.884a3.675,3.675,0,0,1,3.675,3.675v11.14a3.685,3.685,0,0,1-3.685,3.685H9.178A3.675,3.675,0,0,1,5.5,15.6v-.942"
                      transform="translate(-0.771 -0.772)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
              </svg>
              Giriş
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
