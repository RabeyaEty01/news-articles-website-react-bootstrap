
import { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import './App.css';
import News from './components/News/News';


function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=48b0865aef894262a854db8c7790ba9d')
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, [])
  return (
    <div className="App">
      {news.length === 0 ?
        <Spinner animation="border" /> :

        <Row xs={1} md={3} className="g-4">
          {
            news.map(nw => <News news={nw}

            ></News>)
          }
        </Row>
      }



    </div>
  );
}

export default App;
