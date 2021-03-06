import React from 'react';
import { connect } from 'react-redux';
import Searcher from '../components/Searcher';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';
//import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

//const API = 'http://localhost:3000/initialState';
const Home = ({ mylist, trends, originals }) => { //se inicializa el state para que luego de llegar los datos renderize
  // const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  // useEffect(() => {
  //   fetch('http://localhost:3000/initialState')
  //     .then((response) => response.json())
  //     .then((data) => setVideos(data));
  // }, []);

  //const initialState = useInitialState(API);
  //console.log(initialState);
  return (
    <>
      <Header />
      <Searcher />
      {
        mylist.length > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              {mylist.map((item) => { return <CarouselItem key={item.id} {...item} isList />; })}

            </Carousel>
          </Categories>
        )
      }

      <Categories title='Destacados'>
        <Carousel>
          {trends !== undefined &&
            trends.map((item) => {
              return <CarouselItem key={item.id} {...item} />;
            })}
        </Carousel>
      </Categories>

      <Categories title='originals'>
        <Carousel>
          {originals !== undefined &&
            originals.map((item) => {
              return <CarouselItem key={item.id} {...item} />;
            })}
        </Carousel>
      </Categories>

    </>

  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(/*props*/mapStateToProps, /*actions*/null)(Home);
