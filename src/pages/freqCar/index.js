import axios from "axios";
import { useState } from "react"

export default function Index() {
    const [texto, setTexto] = useState('');
    const [caracter, setCaracter] = useState('');
    const [resposta, setResposta] = useState('');

    async function verificarFreq() {
       const resp = await axios.get(`http://localhost:5000/dia2/freqcaractere/${texto}/${caracter}`)
       setResposta(resp.data.freq);
    }

    return (
        <main>
            <h1> Frequencia </h1>

            <div>
                Texto: <input type='text' value={texto} onChange={e => setTexto(e.target.value)}/>
            </div>
            
            <div>
                Caracteres: <input type='text' value={caracter} onChange={e => setCaracter(e.target.value)}/>
            </div>
            <div>
                <button onClick={verificarFreq}>Verificar frequencia </button>
            </div>
            <div>
                Frequencia: {resposta}
            </div>

        </main>
    )
}