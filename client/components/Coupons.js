import React from 'react';
import ReactDOM from 'react-dom';

class Coupons extends React.Component{

  renderCoupons(coupons){
    let key = 0;
    return coupons.map((c) => {
      let value = '';
      if (c.discount_type === 'fixed_amount') {
        value = '$' + coupon.value + ' off';
      } else if (c.discount_type === 'percentage') {
        value = c.value + '% off'
      }
      let minimum = '$' + c.minimum_order_amount;
      return (
        <tr key={key++}>
          <td>{c.code}</td>
          <td>{value}</td>
          <td>{minimum}</td>
        </tr>
      );
    });
  }

  render() {
    let coupons = this.props.coupons;
    let couponsTable = this.renderCoupons(this.props.coupons);
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
            {couponsTable}
          </tbody>
        </table>
      </div>
    );
  }
}


export default Coupons;
