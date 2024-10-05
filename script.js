const product = [
    {
      id: 0,
      image: 'imagess/p1.jpg',
      title: 'Sansevieria',
      price: 120,
    },
    {
      id: 1,
      image: 'imagess/p2.jpg',
      title: 'Sansevieria',
      price: 60,
    },
    {
      id: 2,
      image: 'imagess/p3.jpg',
      title: 'Sansevieria',
      price: 230,
    },
    {
      id: 3,
      image: 'imagess/p4.jpg',
      title: 'Sansevieria',
      price: 100,
    },
    {
        id: 4,
        image: 'imagess/p5.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 5,
        image: 'imagess/p6.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 6,
        image: 'imagess/p7.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 7,
        image: 'imagess/p8.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 8,
        image: 'imagess/1.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 9,
        image: 'imagess/2.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 10,
        image: 'imagess/3.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 11,
        image: 'imagess/4.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 12,
        image: 'imagess/5.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 13,
        image: 'imagess/6.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 14,
        image: 'imagess/7.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 15,
        image: 'imagess/8.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 16,
        image: 'imagess/pic1.jpg',
        title: 'Sansevieriat',
        price: 100,
      },
      {
        id: 17,
        image: 'imagess/pic2.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 18,
        image: 'imagess/pic3.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 19,
        image: 'imagess/pic4.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 20,
        image: 'imagess/pic5.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 21,
        image: 'imagess/pic6.jpg',
        title: 'Sansevieria',
        price: 100,
      },
      {
        id: 22,
        image: 'imagess/pic7.jpg',
        title: 'Sansevieriat',
        price: 100,
      },
      {
        id: 23,
        image: 'imagess/pic8.jpg',
        title: 'Sansevieria',
        price: 100,
      },
     
      
    

  ];
  
  const categories = [...new Set(product.map((item) => item))];
  
  let i = 0;
  
  document.getElementById('root').innerHTML = categories
    .map((item) => {
      let { image, title, price } = item;
  
      return `
        <div class='box'>
          <div class='img-box'>
            <img class='images' src=${image}></img>
          </div>
          <div class='bottom'>
            <p>${title}</p>
            <h2>${price}.00</h2>
            <button onclick='addtocart(${i++})'>Add to cart</button>
          </div>
        </div>
      `;
    })
    .join('');
    var cart = [];

    function addtocart(a) {
      cart.push({ ...categories[a] });
      displaycart();
    }
    
    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }
    
    function displaycart() {
        let j = 0, total=0;
        document.getElementById("count").innerHTML=cart.length;
      if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML="$ "+0+".00";
      } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
          var { image, title, price } = items;
          total =total+price;
          document.getElementById("total").innerHTML="$ "+total+".00";
          return `
            <div class='cart-item'>
               <div class='row-img'>
                  <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>$ ${price}.00</h2>
               
               <i class="fa-solid fa-trash" onclick='delElement(${j++})'></i>
            </div>
          `;
        }).join('');
      }
    }