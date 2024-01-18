import StackedCard from '../Components/Card.jsx';
import React from 'react';

const Home = () => {
    const cards = [
        {
            title: "Trama B Textil",
            subtitle: "Impulsamos cadenas de valor 3i",
            description: "Economía del conocimento, economía circular y social.",
            image: [ "https://media.licdn.com/dms/image/D4D0BAQH27RuY4Iewng/company-logo_200_200/0/1688326001267/trama_b_textil_logo?e=2147483647&v=beta&t=hMtEGzcG4u-cIl2pJwasCzJ4F-mNTBMOZhYT0zEcCEw",],
            redirection: "https://www.linkedin.com/company/trama-b-textil/",
            ods: [
                { color: "#BE8B2D", text: "ODS 12" }, 
                { color: "#A21942", text: "ODS 8" },
                { color: "#FF3A21", text: "ODS 5" },
                { color: "#C5192D", text: "ODS 4" },
                { color: "#DD1367", text: "ODS 10" },
                { color: "#19486A", text: "ODS 17" }
                   
              ]
        },
        {
            title: "Hebra Circular",
            subtitle: "Soluciones para la industria textil",
            description: "Transicionar hacia una producción sostenible♻️",
            image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOYsTED7VwoFSQ8QKRiBwLT-16BGZXhPxjA&usqp=CAU","https://www.residuosprofesional.com/wp-content/uploads/2022/06/residuo-textill-berritex.jpg",],
            redirection: "https://www.linkedin.com/company/hebra-circular/",
            ods: [
                { color: "#BE8B2D", text: "ODS 12" }, 
                { color: "#A21942", text: "ODS 8" },
                { color: "#FF3A21", text: "ODS 5" } 
              ]
        },
        
    ];

    return (
        <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: 'auto', 

        }}>
            {cards.map((card, index) => (
                <StackedCard
                    key={index}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                    image={card.image}
                    redirection={card.redirection}
                    ods={card.ods}
                />
            ))}
        </div>
    );
};

export default Home;