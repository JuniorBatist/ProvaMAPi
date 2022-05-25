import { useState } from "react"
import axios from "axios"

export default function Index() {
    const [qtdInteiras, setQInteiras] = useState(0);
    const [qtdMeias, setQMeias] = useState(0);
    const [dia, setDia] = useState('');
    const [nacionalidade, setnacionalidade] = useState('');
    const [total, setTotal] = useState(0);

  async function calcular() {
       const resp = await axios.post('http://localhost:5000/dia2/IngressoCinema', {
            qtdInteiras: qtdInteiras,
            qtdMeias: qtdMeias,
            dia: dia,
            nacionalidade: nacionalidade
        })
        setTotal(resp.data.total);
    }

    return (
        <main>
            <h1> Ingresso Cinema</h1>

            <div>
                Qtd. Inteiras: <input type= 'text' value= {qtdInteiras} onChange={e => setQInteiras(Number(e.target.value))} />
            </div>

            <div>
                Qtd. Meias: <input type= 'text' value= {qtdMeias} onChange={e => setQMeias(Number(e.target.value))} />
            </div>

            <div>
                Dia <input type= 'text' value= {dia} onChange={ e => setDia (e.target.value)} />
            </div>

            <div>
                Nacionalidade <input type= 'text' value= {nacionalidade} onChange={e => setnacionalidade(e.target.value)}/>
            </div>

            <div>
                <button onClick={calcular} >Calcular</button>
            </div>

            <div>
                O total é R$ {total}
            </div>
        </main>
    )
}