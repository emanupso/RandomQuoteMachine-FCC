import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'

const quotes = [
  {
    qtext: "It wasn't over. It still isn't over!",
    author: 'Noah Calhoun - The Notebook',
  },
  {
    qtext: 'The world is your oyster. You are the pearl.',
    author: 'Sebastian Wilder - La La Land',
  },
  {
    qtext: 'I drive.',
    author: 'Driver - Drive',
  },
  {
    qtext: 'You wanna go have a drink sometime?',
    author: 'Sebastian Wilder - La La Land',
  },
  {
    qtext: "I'm just Ken and I'm enough And I'm great at doing stuff",
    author: 'Ken - Barbie',
  },
  {
    qtext: 'All the best memories are hers.',
    author: 'Officer K - Bladerunner 2049',
  },
  {
    qtext: 'Don’t try to find me. You won’t.',
    author: 'Court Gentry - The Gray Man',
  },
  {
    qtext: 'Look at him. That’s my quant',
    author: 'Jared Vennett - The Big Short',
  },
]
class Wrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: quotes,
      index: 0,
    }
    this.randomizer = this.randomizer.bind(this)
  }
  randomizer = () => {
    this.setState({
      index: Math.floor(Math.random() * this.state.quotes.length),
    })
  }
  componentDidMount() {
    this.randomizer()
  }

  render() {
    const currentQuote = this.state.quotes[this.state.index]

    const tweetText = `"${currentQuote.qtext}" - ${currentQuote.author}`
    return (
      <div id="quote-box">
        <Quote quote={currentQuote} />
        <div id="buttons">
          <a id="new-quote" href="#" onClick={this.randomizer}>
            New Quote
          </a>
          <a
            id="tweet-quote"
            target="_top"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              tweetText
            )}`}
          >
            Tweet
          </a>
        </div>
      </div>
    )
  }
}

const Quote = (props) => {
  return (
    <div id="quote" className="typewriter">
      <p id="text">"{props.quote.qtext}"</p>
      <p id="author">{props.quote.author}</p>
    </div>
  )
}

export default Wrapper

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Wrapper />)
