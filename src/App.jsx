
import './App.css'
import htmlimg from './assets/html5.png'
import cssimg from './assets/css3.png'
import jsimg from './assets/js.png'
import reactimg from './assets/reactjs.png'
import ProgressBar from "@ramonak/react-progress-bar";
import fb from './assets/logo-facebook.jpg'
import gh from './assets/logo-github.jpg'
import insta from './assets/logo-instagram.jpg'
import ws from './assets/logo-whatsapp.png'



function App() {
  
  return (
    <div className='App'>
      <header>
        <span>
        <h1 className='creative'>Creative</h1>
        <h1 className='developer'>Developer</h1>
        </span>
        
        <div className='image'>
        </div>
        
      </header>

      <main>
        <div className='Aboutme'>
          <h2>Sobre mim</h2>
          <p>Olá! Sou Amâncio Fernando Chiluvane, um entusiasta desenvolvedor frontend apaixonado por transformar ideias criativas em experiências interativas na web. Minha jornada na programação começou com a busca por unir design e código de forma harmoniosa.</p>
          <p>
          Com mais de 3 anos de experiência na criação de interfaces atraentes e funcionais, encontrei minha paixão na interseção entre design e desenvolvimento. Adoro transformar designs em código limpo e otimizado, proporcionando aos usuários uma jornada digital excepcional. 
          </p>
          <p>
          Minha abordagem de trabalho é colaborativa por natureza. Acredito que o melhor código surge de equipes que compartilham conhecimento e inspiração. Minha experiência em colaborar com designers, desenvolvedores e especialistas em UX me permite criar produtos que são igualmente atraentes e funcionais.
          </p>
        </div>

        <section className='Tech'>
            <h2>Tecnologias</h2>
            <div className='techsimg'>
              <div className='logo'>
                <img src={htmlimg} alt="imagem html5"  />
                <ProgressBar bgColor="chocolate"  className='pb'  completed={90}/>
              </div>
              <div className='logo'>
                <img src={cssimg} alt="imagem Css3"/>
                <ProgressBar 
                bgColor="aquamarine"
                labelColor='black'
                className='pb'   completed={91}/>
              </div>
              
              <div className='logo'>
                <img src={jsimg} alt="imagem javascript"  />
                <ProgressBar 
                bgColor = "yellow"
                labelColor='black'
                className='pb'    completed={60}/>
              </div>
              <div className='logo'>
                <img src={reactimg} alt="imagem react"  />
                <ProgressBar className='pb'   completed={75}/>
              </div>
              
              
              
            </div>
        </section>

        <section className='Projects'>
            <h2>Projectos</h2>
            <div className='proj'>
            <a href="https://amanciochiluvane.github.io/habits/"><div className='Habits ' id='projec'></div></a>
            
            <a href="https://salesmz.vercel.app/"><div className='Salesmz ' id='projec'></div></a>
            
            <a href="https://amanciochiluvane.github.io/html5/exercicios/desafio10/index.html"><div className='Android'id='projec'></div></a>
            
            <a href="https://amanciochiluvane.github.io/html5/exercicios/desafio12/index.html"><div className='Cordel' id='projec'></div></a>
            </div>
           
            
        </section>

      </main>

      <footer>
      <h2>Contactos</h2>
      <div className='Social'>
                 
        <a href="https://www.facebook.com/amancio.chiluvane.10?mibextid=ZbWKwL" target="_blank"><img src={fb} alt="Facebook" /></a>
        <a href="https://github.com/amanciochiluvane" target="_blank"><img src={gh} alt="Gituhub"/></a>
        <a href="https://www.instagram.com/invites/contact/?i=i8t2qah3htnx&utm_content=2l5ppuo" target="_blank"><img src={insta} alt="Instagram" /></a>
        <a href="https://wa.link/kmb5on" target="_blank"><img src={ws} alt="Whatsapp"/></a>
        
      </div>
      </footer>

    </div>      
  )
}

export default App
