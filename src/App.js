import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import './style.scss'
import './book.scss'
function App() {
  return (
    <div className="App">
      <h1>List book</h1>
      <section className='bookList'>
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </div>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src="https://images-us.bookshop.org/ingram/9780063281097.jpg?height=500&v=v2-7a3887f2f932617a8d4758a969fc8fed" alt="" />
const Title = () => <h2>A Council of Dolls</h2>
const Author = () => <h4>Mona Susan Power</h4>

export default App;
