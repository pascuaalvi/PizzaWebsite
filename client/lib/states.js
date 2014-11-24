item = [
{
  id: 1,
  name: "Delivery Options",
  templateName: "delivery",
  width: "25%"
},
{
  id: 2,
  name: "Our Menu",
  templateName: "orders",
  width: "25%"
},
{
  id: 3,
  name: "Order Details",
  templateName: "details",
  width: "25%"
},
{
  id: 4,
  name: "Finished",
  templateName: "summary",
  width: "25%"
}
];

// Sort by ID
_.sortBy(item,'id');

// Constants for different states
DELIVERY_STATE = 0;
ORDERS_STATE = 1;
DETAILS_STATE = 2;
SUMMARY_STATE = 3;
