import React, { useState } from 'react';

const Login = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', height: '100vh', paddingTop: "2rem" }}>
            {!isLoaded && <div><h1>Cargando el cuestionario de desarrollo...</h1></div>}
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScCKcLyQYpZISXeoT5AesDm-4wvAOJ8AZE5hFODfX-y8dLYdg/viewform?embedded=true" 
                width="100%" 
                height="3673" 
                frameBorder={0}
                onLoad={() => setIsLoaded(true)}
                style={{ display: isLoaded ? 'block' : 'none' }}
            >
                Cargando…
            </iframe>
        </div>
    );
};

export default Login;