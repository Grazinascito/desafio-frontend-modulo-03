import "./style.css";

const Resume = () => {
  return (
    <div className="container-resume">
      <h3>Resumo</h3>

      <div className="container-resume__itens">
        <div>Entradas</div>
        <div>R$ 200,00</div>
      </div>
      <div className="container-resume__itens">
        <div>Saídas</div>
        <div>R$ 70,50</div>
      </div>
      <div className="container-resume__itens">
        <div className="container-resume__itens--bold">Saldo</div>
        <div className="container-resume__itens--blueocean">R$ 129,50</div>
      </div>
    </div>
  );
};

export default Resume;
