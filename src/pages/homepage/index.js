import React from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import ActiveAuctions from "./ActiveAuctions";
import EndedActions from "./EndedAuctions";
import BestFifty from "./BestFifty";

const Home = () => {
  const [firstLink, setFirstLink] = React.useState("active");
  const [secondLink, setSecondLink] = React.useState("");
  const [thirdLink, setThirdLink] = React.useState("");

  const onLinkClicked = (num) => {
    setFirstLink("");
    setSecondLink("");
    setThirdLink("");

    if (num == "1") setFirstLink("active");
    if (num == "2") setSecondLink("active");
    if (num == "3") setThirdLink("active");
  };

  return (
    <>
      <div className="gap"></div>
      <div className="acik-artirma-wrapper">
        <div className="container">
          <div className="section-title">
            <span>Aktif</span>
            <b>Açık Artırmalar</b>
          </div>

          <div className="acik-artirma-links">
            <Link
              to="/active-auctions"
              onClick={() => onLinkClicked(1)}
              className={`${firstLink}`}
            >
              {" "}
              Aktif Açık Artırmalar
            </Link>
            <Link
              to="/ended-auctions"
              onClick={() => onLinkClicked(2)}
              className={`${secondLink}`}
            >
              Biten Açık Artırmalar
            </Link>
            <Link
              to="/best50"
              onClick={() => onLinkClicked(3)}
              className={`${thirdLink}`}
            >
              En İyi 50 Açık Artırma
            </Link>
            {/* 
            
             */}
          </div>
          <Routes>
            <Route path="/active-auctions" element={<ActiveAuctions />} />
            <Route path="/ended-auctions" element={<EndedActions />} />
            <Route path="/best50" element={<BestFifty />} />
            <Route path="*" element={<Navigate to="/active-auctions" />} />
          </Routes>
        </div>
      </div>
      <div className="gap"></div>
    </>
  );
};

export default Home;
