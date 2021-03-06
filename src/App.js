import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Nome />
      <Informacoes />
      <Objetivo />
      <Formacao />
    </div>
  );
}

function Nome() {
    return (
      <div className="header">
        <h1><i>Vinicius Bueno Silva</i></h1>
      </div>
    );
}

function Informacoes() {
    return (
      <div className="informacoes">
        <h2>Informações</h2>
        <h4>Brasileiro, Solteiro, 19 anos</h4>
        <h4>
          Endereço: Rua Fantasia, 45 - Guaianases - São Paulo
        </h4>
        <h4>Telefone: (11) 99999-8888</h4>
        <h4>E-mail: viniciusbuenoti@gmail.com</h4>
      </div>
    );
}

function Objetivo() {
    return (
      <div className="objetivo">
        <h2>Objetivo</h2>
        <p>
          Procuro por uma vaga na área de T.I, almejo cargos menores/iniciantes na minha área como Suporte Técnico ou Jovem Aprendiz T.I
        </p>
      </div>
    );
}

function Formacao() {
    return (
      <div className="formacao">
        <hr></hr>
        <h2>Formação</h2>
        <p><strong>Ensino Médio</strong><br></br> Situação: Completo <br></br> Inicio: 2016 <br></br>
        Término: 2018</p>

        <p><strong>Tecnico em Informática</strong><br></br> Situação: Cursando <br></br> Instituição: Senac Tatuapé<br></br>
        Início: 2019 <br></br>
        Previsão de Término: Outubro de 2020 </p>

        <p><strong>Excel Intermediário</strong><br></br> Situação: Completo <br></br> Instituição: Portal AulaEAD<br></br>
        Início: 2019 <br></br>
        Término: 2020</p>
      </div>
    );
}

export default App;