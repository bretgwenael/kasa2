import React from 'react';
import Banner from "../../components/Banner/Banner";
import HousingItems from '../../components/housing/HousingItems';
import housingList from '../../data/housingList.json';
import './home.css';

function Home() {
  return (
    <div className='home-container'>
      <Banner page="home" />
      <div className="home">
        {housingList.map((housing) => (
          <HousingItems key={housing.id} housing={housing} />
        ))}
      </div>
    </div>
  );
}

export default Home;