import React, {useState, useEffect} from 'react'; // useState permite a utilização de estados para atualização em tempo real
import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// React é baseado nesses 3 conceitos:

// Componente: É uma função que retorna algum conteúdo HTML, CSS ou JS (Como a função "App" abaixo). É sempre inicado com LETRA MAIÚSCULA
// Propriedade: Similar a um atributo em HTML (como o Title do Header abaixo). Informações que um componente "pai" passa para um componente "filho".
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() { // Conceito JSX (JavaScript + HTML)
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data){
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return ( // Para evitar quebra de estilização, utilizamos a tag vazia. Isso não afeta o HTML puro da página
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
