import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Corprimaria from './pages/corprimario'
import FreqCar from './pages/freqCar'
import Ingresso from './pages/ingressoCinema'
import MaiorNumero from './pages/maiorNumero'

export default function SiteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'element = {<Home />} />
                <Route path='/corprimaria'element = {<Corprimaria/>} />
                <Route path='/freqCar'element = {<FreqCar />} />
                <Route path='/ingressoCinema'element = {<Ingresso />} />
                <Route path='/maiorNumero'element = {<MaiorNumero />} />
            </Routes>
        </BrowserRouter>
    )
}