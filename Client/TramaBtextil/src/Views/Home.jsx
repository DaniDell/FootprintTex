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
        {
            title: "Segundas Oportunidades",
            subtitle: "Red de Descarte Textil",
            description: "Recircula descartes textiles y comercializa textiles reciclado.",
            image: "data:image/jpeg;base64,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",
            redirection: "/detalle/:id"
        },
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
        },        {
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
        },        {
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
                />
            ))}
        </div>
    );
};

export default Home;