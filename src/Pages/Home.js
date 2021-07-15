import React from 'react';
import NavBar from "../Components/Navbar/Navbar";
import MyCarousel from "../Components/MainPage/carousel/MyCarousel";
import MovieListContainer from "../Components/MainPage/MovieSelection/MovieListContainer";
import MyTable from "../Components/MainPage/table/MyTable";


const Home = () => {
    return(
        <div>
            <NavBar />
            <MyCarousel/>
            <MovieListContainer/>
            <MyTable/>
        </div>
    );
};

export default Home;
