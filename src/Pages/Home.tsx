import '../styles/Pages/Home.css'
import '../Components/Modal'
import { Modal } from '../Components/Modal'

export function Home() {
  return (
    <div>
      <div className="banner">
        <div className="banner-image">
          <img src="/images/home-woman.jpg" alt="Mulher de fundo" />
        </div>
        <div className="banner-text">
          <h2>Capilar</h2>
          <h1>Fortalecimento</h1>
          <p>
            Com suas fórmulas especiais, os shampoos dermocosméticos ajudam a <br />
            fortalecer o cabelo, combater a queda e tratar a tão indesejada caspa.
          </p>
        </div>
      </div>

      <div className="content">

        <div className="buttons">
          <div className="first-button">
            <img src="/images/arrow.svg" alt="double arrow" />
            <span>Ordenar</span>
          </div>
          <div className="second-button">
            <img src="/images/grid.svg" alt="grid" />
            <span>Quantidade</span>
          </div>

        </div>
        <div className="info">
          <h3>Shampoo e Dermocosmético</h3>
          <p>Os shampoos dermocosméticos possuem fórmulas especiais que, além
          de tratar os fios, fortalecem a saúde do couro cabeludo - a pele sensível
          onde está a raiz dos cabelos. Eles regulam a oleosidade, hidratam e ajudam a combater
          a capas e a queda dos fios.
          </p>

        </div>

        <div className="container-modal">
          <div className="modal-top-left">
            <Modal />
          </div>
          <div className="modal-bottom-left">
            <Modal />
          </div>
          <div className="modal-right">
            <p>Conheça nossos <strong>Shampoos</strong></p>
            <img src="/images/home-woman.jpg" alt="Mulher de fundo" />
          </div>



        </div>
        <div className="long-modal">
          <h1>Anticaspa</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent consequat aliquam velit. Ut tristique ut leo ut bibendum.
            Curabitur suscipit maximus nunc in tempus. Sed maximus sem a dolor scelerisque semper.
            Maecenas ullamcorper, ex et tristique sollicitudin, erat risus congue urna, at malesuada nisl
            diam ut leo.
            Fusce ultricies mi rhoncus tempus interdum. Vestibulum tempor massa ac fermentum malesuada.
            </p>
        </div>
        <footer className="footer">
          Para mais informações sobre o combate à caspa, acesse o <strong>Dermaclub</strong>
        </footer>
      </div>
    </div>

  )
}