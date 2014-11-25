item = [
{
  id: 1,
  name: "Delivery Options",
  templateName: "delivery",
  width: "22%"
},
{
  id: 2,
  name: "Your Order",
  templateName: "orders",
  width: "17%"
},
{
  id: 3,
  name: "Order Details",
  templateName: "detailsForm",
  width: "20%"
},
{
  id: 4,
  name: "Order Summary",
  templateName: "summary",
  width: "22%"
},
{
  id: 5,
  name: "Finished",
  templateName: "finished",
  width: "19%"
}
];

// Sort by ID
_.sortBy(item,'id');

// Constants for different states
DELIVERY_STATE = 0;
ORDERS_STATE = 1;
DETAILS_STATE = 2;
SUMMARY_STATE = 3;
FINISHED_STATE = 4;
