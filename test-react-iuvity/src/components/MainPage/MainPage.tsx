import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import '../../App.css';
import UsuarioData from '../UsuarioData/UsuarioData';
import DispositivosList from '../DispositivosList/DispositivosList';
import NotFound from '../NotFound/NotFound';
import { Dispositivo } from '../../models/Dispositivo';
import ModificarData from '../ModificarData/ModificarData';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

const MainPage: React.FC = () => {

    const [dispositi, setDispositivo] = useState<Dispositivo | null>(null);
    const [idNumber, setIdNumber] = useState<number | null>(null);

    const validarDispositivo = async (dispositivo: Dispositivo, type: number) => {
        setDispositivo(dispositivo);
        setIdNumber(type);
        console.log('DATA HIJO: ');
        console.log(dispositi);
        console.log('DATA HIJO idNumber: ' + idNumber);

        if (dispositi && idNumber) {
            if (idNumber === 0) {
                //await guardarDispositivo(dispositi);
            } else {
                //await actualizarDispositivo(dispositi);
            }
        }
    };


    return (
        <div id='test' className="container">
            <div className="col-md-10 offset-md-1">
                <div className="invoice-contents">
                    <table className="invoice-table">
                        <tbody>
                            <tr>
                                <td className="logo-cell">
                                    <img src="https://www.iuvity.com/hubfs/Iuvity%20portal%20anterior/iuvity-web/iuvity%20logo%20footer.svg" />
                                </td>
                                <td className="company-info">
                                    <p>
                                        ColoredStrategies Inc<br />
                                        35 Little Russell St. Bloomsburg London,UK<br />784 451 12 47
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="info-section">
                                    <div>
                                        <UsuarioData />
                                    </div>

                                    <div>
                                        <AnimatePresence mode="wait">
                                            <Routes>
                                                <Route path="/" element={
                                                    <PageTransition>
                                                        <DispositivosList onValidarDispositivo={validarDispositivo} />
                                                    </PageTransition>
                                                } />
                                                <Route path="/data" element={
                                                    <PageTransition>
                                                        <ModificarData
                                                            dispositivo={dispositi} />
                                                    </PageTransition>
                                                } />
                                                <Route path="*" element={
                                                    <PageTransition>
                                                        <NotFound />
                                                    </PageTransition>
                                                } />
                                            </Routes>
                                        </AnimatePresence>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MainPage;