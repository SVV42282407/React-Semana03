import React from 'react';
import './index.css';

const News = (props) => {
    const { movie, title, content, source, source_icon, date, external_url, img} = props;
    let thumb = process.env.PUBLIC_URL + '/movies/' + movie + '/' + img;
    let source_thumb = process.env.PUBLIC_URL + '/movies/' + movie + '/' + source_icon;
    return (
        <div className="news-item">
            <div className="news-image">
                <img src={thumb} alt={title}/>
            </div>
            <div className="news-container">
                <div className="news-header">
                    <div className="news-details">
                        <div className="news-source">
                            <img src={source_thumb} alt={source}/>
                            <span>{source}&nbsp;</span>
                        </div>
                        <div className="news-date">
                            <span> - {date}</span>
                        </div>
                    </div>
                    <div className="news-title">
                        {title}
                    </div>
                </div>
                <div className="news-content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default News;