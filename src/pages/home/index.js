import { Link } from "react-router-dom";

export default function Index() {
    return (
        <main>
            <h1> Home</h1>

            <ul>
                <li><Link to= '/corprimaria'> Cor primaria </Link></li>
                <li><Link to= '/ingressoCinema'> Ingresso </Link></li>
                <li><Link to= '/freqCar'> Frequencia </Link></li>
                <li><Link to= '/maiorNumero'> Maior numero </Link></li>
            </ul> 
        </main>
    )
}