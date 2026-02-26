import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "121313214",
      name: "Iago",
      age: 32,
      email: "iago@iago.com",
    },
    {
      id: "121313212",
      name: "Aline",
      age: 27,
      email: "aline@aline.com",
    },
  ];

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="E-mail" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              E-mail: <span>{user.email}</span>
            </p>
          </div>
            <button>
              <img src={Trash} alt="lixeira" />
            </button>
        </div>
      ))}
      
    </div>
  );
}

export default Home;
