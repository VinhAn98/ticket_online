import React from 'react';
import { List, Card } from 'antd';
import MovieListItem from "./MovieListItem";
const MovieList = () => {

    const movies = [
        {id:1,name:'movie1',minute:'100p',img:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
        {id:2,name:'movie2',minute:'100p',img:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
        {id:3,name:'movie3',minute:'100p',img:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
        {id:4,name:'movie4',minute:'100p',img:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
        {id:5,name:'movie5',minute:'100p',img:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
        {id:6,name:'movie6',minute:'100p',img:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'}
    ];
    /*const listItems = movies.map((movie) =>
        <MovieListItem key={movie.id} name={movie.name} minute={movie.minute} img={movie.img} />
    );*/

    return(
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
            }}
            dataSource={movies}
            renderItem={item => (
                <List.Item>
                    <MovieListItem key={item.id} name={item.name} minute={item.minute} img={item.img} />
                </List.Item>
            )}
        />
    );
};

export default MovieList;