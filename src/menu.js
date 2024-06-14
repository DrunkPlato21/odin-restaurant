export default function menu() {
    const element = document.createElement('div');
    element.classList.add('menu');
  
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    element.appendChild(heading);
  
    const items = [
      { name: 'Spaghetti Bolognese', price: '$12.99' },
      { name: 'Margherita Pizza', price: '$10.99' },
      { name: 'Caesar Salad', price: '$8.99' },
      { name: 'Grilled Salmon', price: '$15.99' },
      { name: 'Chocolate Cake', price: '$6.99' }
    ];
  
    const menuList = document.createElement('ul');
    items.forEach(item => {
      const menuItem = document.createElement('li');
      
      const itemName = document.createElement('span');
      itemName.textContent = item.name;
      
      const itemPrice = document.createElement('span');
      itemPrice.textContent = item.price;
      itemPrice.classList.add('price');
      
      menuItem.appendChild(itemName);
      menuItem.appendChild(itemPrice);
      menuList.appendChild(menuItem);
    });
  
    element.appendChild(menuList);
  
    return element;
  }
  