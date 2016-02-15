import React from 'react';
import ReactDOM from 'react-dom';

class CouponMaker extends React.Component{

  handleSubmit(e) {
    e.preventDefault();
    let form = this.refs.form;
    let coupon = {};
    ['value', 'discount_type', 'minimum_order_amount'].forEach((field) => {
      coupon[field] = form[field].value;
    });
    console.log(coupon);
    this.props.onSubmit && this.props.onSubmit(coupon);
  }

  render() {
    return (
      <div>
        <form ref="form" className="form-inline" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label>Value</label>
            <input className="form-control" type="text" name="value" size="4" required></input>
          </div>
          <div className="form-group">
            <label>Type</label>
            <select className="form-control" name="discount_type" required>
              <option value="percentage">% off</option>
              <option value="fixed_amount">$ off</option>
            </select>
          </div>
          <div className="form-group">
            <label>Minimum $</label>
            <input className="form-control" name="minimum_order_amount" type="text" size="4" defaultValue="0" required></input>
          </div>
          <button className="btn btn-primary" type="submit">Create!</button>
        </form>
      </div>
    );
  }
}

export default CouponMaker;
