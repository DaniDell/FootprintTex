import StackedCard from '../Components/Card.jsx';
import React from 'react';

const Home = () => {
    const cards = [
        {
            title: "Trama B Textil",
            subtitle: "Impulsamos cadenas de valor 3i",
            description: "Economía del conocimento, economía circular y social.",
            image: "https://media.licdn.com/dms/image/D4D0BAQH27RuY4Iewng/company-logo_200_200/0/1688326001267/trama_b_textil_logo?e=2147483647&v=beta&t=hMtEGzcG4u-cIl2pJwasCzJ4F-mNTBMOZhYT0zEcCEw",
            redirection: "https://www.linkedin.com/company/trama-b-textil/"
        },
        {
            title: "Hebra Circular",
            subtitle: "Soluciones circulares para la industria textil",
            description: "Incorporar valores y procesos para transicionar hacia una producción sostenible♻️",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOYsTED7VwoFSQ8QKRiBwLT-16BGZXhPxjA&usqp=CAU",
            redirection: "https://www.linkedin.com/company/hebra-circular/"
        },
        // Agrega más objetos de tarjetas aquí
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {cards.map((card, index) => (
                <StackedCard
                    key={index}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                    image={card.image}
                    redirection={card.redirection}
                />
            ))}
        </div>
    );
};

export default Home;