import StackedCard from "../Components/Card.jsx";
import React from "react";
import cards from "./cards.json";
// import SearchBar from "../Components/SearchBar.jsx";

const Home = () => {
  return (
    <div style={{ minHeight: "calc(100vh - 3rem - 4rem)", width: "100%", alignItems: "center",  
    padding: "0rem" }}>
      {/* <SearchBar /> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
          alignItems: "start",
          height: "auto",
          paddingTop: "1.5rem",
          paddingBottom: "1rem",
        }}
      >
        {cards.map((card, index) => (
          <StackedCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            image={card.image}
            redirection={card.redirection}
            ods={card.ods}
            category={card.category}
            instagramLink={card.instagramLink}
            linkedinLink={card.linkedinLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
