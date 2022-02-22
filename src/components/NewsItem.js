import React, { Component } from 'react';
import './NewsItem.css';

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className=" my-4">
                <div className="card">
                    <div className="badge_in">
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img style={{ height: "200px" }} src={!imageUrl ? "https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845__340.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>

        )
    }
}
