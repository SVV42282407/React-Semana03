import React from 'react';
import './index.css';

const Banner = (props) => {
    const { movie, title, categories, ranking, sinopsis, video_url, poster } = props;
    let poster_img = process.env.PUBLIC_URL + 'movies/' + movie + '/' + poster;
    return (
        <div className="banner-container">
            <div className="banner-poster">
                <img src={poster_img} alt={title} />
            </div>
            <div className="banner-content">
                <div className="banner-title">
                    {title}
                </div>
                <div className="banner-details">
                    <div className="banner-categories">
                        <ul>
                            {categories.map( (cat, index) => (
                                <li className={index === 0 ? 'first' : ''}>
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="banner-ranking">
                        {ranking} / 10
                    </div>
                </div>
                <div className="banner-description">
                    {sinopsis}
                </div>
                <div className="banner-buttons">
                    <button type="button">Get ticket</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;