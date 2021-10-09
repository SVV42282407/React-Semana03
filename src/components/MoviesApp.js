import './Movies.css';
import { movies } from '../data/movies';
import { cast } from '../data/cast';
import { news } from '../data/news';
import Banner from './movieBanner';
import Cast from './cast';
import News from './news';

const App = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="row">
                    {movies.map(movie => (
                        <Banner 
                            movie={movie.movie}
                            title={movie.title}
                            sinopsis={movie.sinopsis}
                            poster={movie.poster}
                            ranking={movie.ranking}
                            categories={movie.categories}
                            video_url={movie.video_url}
                        />
                    ))}
                </div>
            </div>
            <div className="main">
                <div className="row">
                    <div className="left-panel">
                        <h4>Cast</h4>
                        {cast.map( item => (
                            <Cast 
                                movie={item.movie}
                                actor={item.actor}
                                character={item.character}
                                cast_img={item.cast_img}
                            />
                        ))}
                    </div>
                    <div className="right-panel">
                        <h4>In the news</h4>
                        {news.map( item => (
                            <News 
                                movie={item.movie}
                                source={item.source}
                                source_icon={item.source_icon}
                                title={item.title}
                                content={item.content}
                                external_url={item.external_url}
                                img={item.img}
                                date={item.date}
                                />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;