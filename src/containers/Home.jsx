import React from 'react';
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';
const Home = () => { //se inicializa el state para que luego de llegar los datos renderize
  // const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  // useEffect(() => {
  //   fetch('http://localhost:3000/initialState')
  //     .then((response) => response.json())
  //     .then((data) => setVideos(data));
  // }, []);
  const initialState = useInitialState(API);
  console.log(initialState);
  return (
    <div className='App'>

      <Header />
      <Searcher />
      {
        initialState.mylist !== undefined && initialState.mylist.length > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              <CarouselItem />

            </Carousel>
          </Categories>
        )
      }

      <Categories title='Destacados'>
        <Carousel>
          {initialState.mylist !== undefined &&
            initialState.trends.map((item) => {
              return <CarouselItem key={item.id} {...item} />;
            })
          }
        </Carousel>
      </Categories>

      <Categories title='originals'>
        <Carousel>
          {initialState.mylist !== undefined &&
            initialState.originals.map((item) => {
              return <CarouselItem key={item.id} {...item} />;
            })
          }
        </Carousel>
      </Categories>

      <Footer />
    </div>

  );
};

export default Home;
