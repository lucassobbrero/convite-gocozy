import gocozy from "./gocozy.jpeg";
import images from "./images.jpeg";
import goo from "./goo.jpeg";
import oi from "./oi.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={oi}
          className="App-go"
          alt="logo"
          style={{
            width: 400,
            height: 400,
            left: 0,
            position: "absolute",
            top: -150,
            alignSelf: "center",
          }}
        />
        <img src={gocozy} className="App-logo" alt="logo" />
        <p className="App-title">O que estamos preparando para você?</p>
        <p className="App-description">
          <u>Convite Especial:</u>
          <br />
          <b style={{ fontSize: 27 }}>Imersão Fechada Go Cozy</b>
          <br />
          <br />
          Olá! Nossa equipe está preparando algo
          <b> para um grupo seleto de pessoas </b>
          que querem ver, na prática, como é produzir com a Máquina Go Cozy!{" "}
          <br />
          <b>Você foi escolhido </b>
          para participar dessa imersão fechada, onde poderá conhecer todos os
          benefícios de usar nossa máquina de derreter cera e otimizar sua
          produção de velas. Será uma oportunidade única de aprender diretamente
          com nossos especialistas, em uma experiência prática e personalizada.
          <br />
          Quem será que vai receber esse convite?
          <br />
          Só você pode garantir o seu lugar! Envie seu número de WhatsApp para
          garantir sua vaga e participar de um grupo onde somente{" "}
          <b>10 participantes selecionados</b> farão parte. Neste grupo você
          receberá informações de tudo o que preparamos para essa experiência
          exclusiva. Não perca essa chance de conhecer em detalhes, técnicas para
          manter sua cera na temperatura correta com a Go Cozy! <br />
          <br />
          Atenciosamente,
          <br />
          Equipe Go Cozy
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba mais
        </a> */}
      </header>
    </div>
  );
}

export default App;
