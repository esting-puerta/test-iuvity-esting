import React from 'react';
import './NotFound.css';

const NotFound: React.FC = () => {
    return (

            <main className="main-content">
                <div className="error-container fade-in">
                    <div className="floating-elements">
                        <div className="floating-circle circle-1"></div>
                        <div className="floating-circle circle-2"></div>
                        <div className="floating-circle circle-3"></div>
                    </div>

                    <div className="error-number">404</div>

                    <h1 className="error-title">Página no encontrada</h1>

                    <p className="error-subtitle">
                        Lo sentimos, la página que busca no está disponible
                    </p>

                    <p className="error-description">
                        La página que está intentando acceder ha sido movida, eliminada o no existe.
                        Esto puede ocurrir por un enlace incorrecto o una URL que ha cambiado.
                    </p>

                    <div className="action-buttons">
                        <a  className="btn btn-primary">
                            <svg className="icon" viewBox="0 0 24 24">
                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                            </svg>
                            Volver atrás
                        </a>

                        <a className="btn btn-secondary">
                            <svg className="icon" viewBox="0 0 24 24">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                            Ir al inicio
                        </a>

                    </div>

                    <div className="help-section">
                        <h3 className="help-title">
                            <svg className="icon" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                            </svg>
                            ¿Qué puedo hacer?
                        </h3>

                        <div className="help-list">
                            <ul>
                                <li>Verificar que la URL esté escrita correctamente</li>
                                <li>Usar el menú de navegación para encontrar la página</li>
                                <li>Utilizar la función de búsqueda del sitio</li>
                                <li>Contactar al administrador del sistema</li>
                                <li>Revisar los enlaces favoritos guardados</li>
                            </ul>
                        </div>

                        <div className="search-suggestion">
                            <h4>💡 Sugerencia</h4>
                            <p>Si llegó aquí desde un enlace externo, es posible que la página haya sido reestructurada. Intente navegar desde la página principal. </p>
                        </div>
                    </div>
                </div>
            </main>

    );
};

export default NotFound;