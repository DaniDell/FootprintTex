import React from 'react';

const DetailUser = () => {
    return (
        <div style={{  margin: '10px', textAlign: 'center'}}>
        <div style={{ 
            position: 'relative',
            overflow: 'hidden',
            marginTop: '40px',
            paddingTop: '56.25%' /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
        }}>
           
            <iframe 
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    border: '0'
                }}
                src="https://www.youtube.com/embed/8V7pB7NfM-4?si=rmKczDBNPKMsSb7Z&amp;start=27" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
        </div>
        <p>Segundas Oportunidades</p>
        </div>
    );
};

export default DetailUser;