import React from 'react';
import {Tabs} from 'antd';
import MovieCarousel from "./MovieCarousel";

const {TabPane} = Tabs;


const MovieListContainer = () => {
    //tab
    //carousel ==> movie list ==> movie list item
    // change tab to change carousel
    return (
        <div>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Tab 1" key="1">
                    <MovieCarousel/>
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    <MovieCarousel/>
                </TabPane>

            </Tabs>
        </div>
    );
};

export default MovieListContainer;