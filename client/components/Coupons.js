import React from 'react';
import ReactDOM from 'react-dom';

class Coupons extends React.Component{
  render() {
    let coupons = this.props.coupons;
    console.log('Coupons props', coupons);
    let i = 0;
    return (
      <div className="panel panel-default">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Coupon Code</th>
              <th>Value</th>
              <th>Minimum Purchase</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => {
              <Coupon coupon={coupon} key={i++} />
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

class Coupon extends React.Component{
  render() {
    let coupon = this.props.coupon;
    console.log('coupon', coupon);
    let value = '';
    if (coupon.discount_type === 'fixed_amount') {
      value = '$' + coupon.value + ' off';
    } else if (coupon.discount_type === 'percentage') {
      value = coupon.value + '% off'
    }
    let minimum = '$' + coupon.minimum_order_amount;
    if (parseInt(coupon.minimum_order_amount) === 0){
      minimum = 'any amount';
    }
    return (
      <tr key={this.props.key}>
        <td>{coupon.code}</td>
        <td>{value}</td>
        <td>{minimum}</td>
      </tr>
    )
  }
}



export default Coupons;
