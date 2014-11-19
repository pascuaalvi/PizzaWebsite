if (Products.find().count() === 0) {
  Products.insert({
    type: 'pizza',
    name: 'Hawaiian Pizza',
    desc: 'Cheese and tomato base with slices of ham and pineapple.',
    price: 7.90,
    imageSrc: "/Images/HawaiianPizza.jpg"
  });

  Products.insert({
    type: 'pizza',
    name: 'Seafood Pizza',
    desc: 'Cheese and tomato base with salmon.',
    price: 6.90,
    imageSrc: "/Images/SeafoodPizza.jpg"
  });

  Products.insert({
    type: 'pizza',
    name: 'Vege Pizza',
    desc: 'Cheese and tomato base with slices of mushroom, capsicum and parsley.',
    price: 6.50,
    imageSrc: "/Images/VegiePizza.jpg"
  });

  Products.insert({
    type: 'side',
    name: 'Salad',
    desc: 'Lettuce and tomato salad with slices of carrots, avocado and chopped onions.',
    price: 4.50,
    imageSrc: "/Images/Salad.jpg"
  });

  Products.insert({
    type: 'side',
    name: 'Kumara Fries',
    desc: 'Oven-baked kumara fries coated in batter.',
    price: 5.90,
    imageSrc: "/Images/KumaraFries.jpg"
  });

  Products.insert({
    type: 'drink',
    name: 'Pepsi',
    desc: 'Refreshing cola with zero sugar.',
    price: 3.60,
    imageSrc: "/Images/Pepsi.jpg"
  });

  Products.insert({
    type: 'drink',
    name: 'Orange Juice',
    desc: 'Refreshing 100% orange concrentrate from Tropicana.',
    price: 4.10,
    imageSrc: "/Images/OrangeJuice.jpg"
  });
}