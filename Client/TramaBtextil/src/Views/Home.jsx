import StackedCard from "../Components/Card.jsx";
import React from "react";
import cards from "./cards.json";
import SearchBar from "../Components/SearchBar.jsx";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <SearchBar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          alignItems: "start",
          height: "auto",
          marginTop: 20,
          marginBottom: 50,
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
