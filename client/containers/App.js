
import React from 'react';
import { select } from 'react-redux';
import fetch from 'isomorphic-fetch';

import CouponMaker from '../components/CouponMaker';
import Coupons from '../components/Coupons';

const API_BASE = '/api/coupons/';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'coupons': []
    };
  }

  getCoupons() {
    return fetch(API_BASE, {
      method: 'get',
      credentials: 'same-origin',
    }).then(response => {return response.json()});
  }

  createNewCoupon(coupon) {
    fetch(API_BASE,{
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: coupon
    }).then(
      response => {
        let coupons = this.state.coupons;
        coupons.push(response);
        this.setState({
          'coupons': coupons
        });
        console.log("Created a new coupon:", JSON.stringify(response, 2));
      }
    )
  }

  render() {
    let coupons = this.state.coupons;
    return (
      <div>
        <h1>Let's make some coupons!!!</h1>
        <CouponMaker onSubmit={this.createNewCoupon.bind(this)} />
        <Coupons coupons={coupons} />
      </div>
    );
  }
}

export default App;
