export default function contact() {
    const element = document.createElement('div');
    element.classList.add('contact');
  
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    element.appendChild(heading);
  
    const address = document.createElement('p');
    address.textContent = '123 Food Street, Flavor Town, USA';
    element.appendChild(address);
  
    const phone = document.createElement('p');
    phone.textContent = 'Phone: (123) 456-7890';
    element.appendChild(phone);
  
    const email = document.createElement('p');
    email.textContent = 'Email: info@restaurant.com';
    element.appendChild(email);
  
    return element;
  }
  