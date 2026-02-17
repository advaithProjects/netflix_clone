import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Titlecards from "../../components/Titlecards/Titlecards";
import Footer from "../../components/Footer/Footer";
import Salaar_banner1 from "../../assets/Salaar_banner1.jpg";
import Salaar_title from "../../assets/Salaar_title.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={Salaar_banner1} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={Salaar_title} alt="" className="caption-img" />
          <p>
            It follows a violent story of friendship and betrayal set in the
            fictional dystopian city-state of Khansaar. The word "Salaar" means
            leader, commander, or chief.
          </p>
          <div className="hero-btns">
            <a href="https://www.youtube.com/watch?v=4GPvYMKtrtI&t=30s">
              <button className="btn">
                <img src={play_icon} alt="" />
                Play
              </button>
            </a>
            <a href="https://en.wikipedia.org/wiki/Salaar:_Part_1_%E2%80%93_Ceasefire">
              <button className="btn dark-btn">
                <img src={info_icon} alt="" />
                More Info
              </button>
            </a>
          </div>
          <Titlecards />
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"Blockbuster on Netflix"} category={"top_rated"} />
        <Titlecards title={"Only on Netflix"} category={"popular"} />
        <Titlecards title={"Upcoming on Netflix"} category={"upcoming"} />
        <Titlecards title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
