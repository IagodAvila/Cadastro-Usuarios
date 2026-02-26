import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

const users = [{
  id:'121313214',
  name:'Iago',
  age: 32,
  email:'iago@iago.com'
},
{
  id:'121313212',
  name:'Aline',
  age: 27,
  email:'aline@aline.com'
},
]

  return (
    <div className='container'>
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text'/>
        <input name='idade' type='number'/>
        <input name='email' type='email'/>
        <button type='button'>Cadastrar</button>
      </form>
      
      
      <div>
        <div>
          <p>Nome:</p>
          <p>Idade:</p>
          <p>E-mail:</p>
          <button>
            <img src={Trash} alt="lixeira"/>
          </button>
        </div>
      </div>

    </div>
  )
  
}

export default Home
