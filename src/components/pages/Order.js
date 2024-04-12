
import React from 'react';
import { useParams } from 'react-router-dom';
import { MenuList } from '../../helpers/MenuList';
import '../../styles/Order.css';

function Order() {
  const { itemId } = useParams();
  const selectedItem = MenuList.find(item => item.id === parseInt(itemId));

  if (!selectedItem) {
    return <div className="orderContainer">Item not found!</div>;
  }

  const orderNumber = '+233551035300';

  return (
    <div className="orderContainer">
      <div className="orderCard">
        <div className="imageSection">
          <img src={selectedItem.Image} alt={selectedItem.name} className="itemImage" />
        </div>
        <div className="detailsSection">
          <div className="orderDetails">
            <h2>Call to Order</h2>
            <div className="itemName">{selectedItem.name}</div>
            <div className="itemPrice">Price: ${selectedItem.price}</div>
            <a href={`tel:${orderNumber}`} className="orderButton">Order Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
