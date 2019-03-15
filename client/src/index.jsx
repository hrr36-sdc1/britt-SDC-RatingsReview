import React from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import axios from ('axios');

import Reviews from './components/Reviews.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.onReviewSubmit = this.onReviewSubmit.bind(this);
  }


  componentDidMount() {
    this.get()
  }

  get() {
    let id = Math.floor(Math.random()* 100000);
    //let id = 86619;
    $.ajax({
      type: 'GET',
      url: '/reviews/' + id,
      success: (reviews => {
        this.setState({
          reviews: reviews
        })
        console.log(reviews)
      }),
      error: (err => {
        console.log('this is an src/components/index error:', err)
      })
    })
  }


  onReviewSubmit() {
    let id = 7;
    $.ajax({
      type: 'POST',
      url: '/postreviews/' + id,
      data: {
        nickname: "bzanetis",
        review: "These are the best running shoes. But running is awful.",
        rating: 4,
        recommend: "yes",
        createdAt: "2018-12-04T06:00:00.000Z",
        index: 7

      },
      success: function(results) {
        console.log(results, 'post req success');
      },
      error: function(results) {
        console.log('error in post req')
      }
    })
  }

  onHelpfulSubmit() {
    $.ajax({
      type: 'PATCH',
      url: '/reviews/1600',
      success: function(results) {
        console.log(results, 'patch req success');
      },
      error: function(results) {
        console.log('error in patch req')
      }
    })
  }

  onDeleteSubmit() {
    let id = Math.floor(Math.random()* 100000);
    console.log(id)
    $.ajax({
      type: 'DELETE',
      url: '/reviews/' + id,
      success: function(results) {
        console.log(results, 'delete req success');
      },
      error: function(results) {
        console.log('error in delete req')
      }
    })
  }


  render () {
    return (
      <div>
        <h3 className="review-header">Ratings & Reviews</h3>
        <div className="review-sort-on">SORT ON</div>
        <div className="review-button-container">
          <button className="review-clicked-on">RELEVANT</button>
          <button className="review-unclicked" onClick={this.onHelpfulSubmit}>HELPFUL</button>
          <button className="delete helpful" onClick={this.onDeleteSubmit}>DELETE</button>
          <button className="review-unclicked">NEWEST</button>
        </div>
        <Reviews reviews={this.state.reviews}/>
        <div className="review-button-container">
          <button className="review-load-more">LOAD MORE<span className="review-arrow">&#8594;</span></button>
          <button className="review-write" onClick={this.onReviewSubmit}>WRITE A REVIEW<span className="review-arrow">&#8594;</span></button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));