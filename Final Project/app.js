let openShopping = document.querySelector('.shopping');
        let closeShopping = document.querySelector('.closeShopping');
        let list = document.querySelector('.list');
        let listCard = document.querySelector('.listCard');
        let body = document.querySelector('body');
        let total = document.querySelector('.total');
        let quantity = document.querySelector('.quantity');

        openShopping.addEventListener('click', () => {
            body.classList.add('active');
        });

        closeShopping.addEventListener('click', () => {
            body.classList.remove('active');
        });

        let products = [
            {
                id: 1,
                name: 'beige fabric loveseat and couch, Window Living room Sofa bed Furniture Couch, Elegant sofa, angle, interior Design',
                image: 'sofa1.png',
                price: 349.99,
            },
            {
                id: 2,
                name: 'Couch Furniture King Living Living room Sofa bed, sofa, angle, furniture',
                image: 'sofa2.png',
                price: 329.99,
            },
            {
                id: 3,
                name: 'Abena Knitted Cotton Pouf by Christopher Knight Home',
                image: 'chair1.png',
                price: 299.99,
            },
            {
                id: 4,
                name: 'Table Couch Chair Living room Furniture, Gray Armchair, angle',
                image: 'chair2.png',
                price: 129.99,
            },
            {
                id: 5,
                name: 'Chair Table Living room IKEA Slipcover, White Armchair, angle, kitchen',
                image: 'chair3.png',
                price: 199.99,
            },
            {
                id: 6,
                name: 'Coffee Tables Coffee Tables Furniture Living room, coffee table, glass, angle',
                image: 'table1.png',
                price: 499.99,
            },
            {
                id: 7,
                name: 'Bedside Tables Furniture Coffee Tables Dining room, table, glass, angle',
                image: 'table2.png',
                price: 329.99,
            },
            {
                id: 8,
                name: 'Television set LED-backlit LCD LCD television Smart TV, tv smart, television, display Advertising',
                image: 'tv1.png',
                price: 1.799,
            },
            {
                id: 9,
                name: 'Panasonic LED-backlit LCD High-definition television 1080p Smart TV, smart tv, purple, television',
                image: 'tv2.png',
                price: 1.199,
            },
        ];

        let listCards = [];

        function initApp() {
            products.forEach((value, key) => {
                let newDiv = document.createElement('div');
                newDiv.classList.add('item');
                newDiv.innerHTML = `
                    <img src="image/${value.image}" width="200" height="200"> <!-- Set the width and height here -->
                    <div class="title">${value.name}</div>
                    <div class="price">${value.price.toLocaleString()}</div>
                    <button onclick="addToCard(${key})">Add To Card</button>`;
                list.appendChild(newDiv);
            });
        }

        function addToCard(key) {
            if (listCards[key] == null) {
                // copy product form list to list card
                listCards[key] = JSON.parse(JSON.stringify(products[key]));
                listCards[key].quantity = 1;
            }
            reloadCard();
        }

        function reloadCard() {
            listCard.innerHTML = '';
            let count = 0;
            let totalPrice = 0;
            listCards.forEach((value, key) => {
                if (value != null) {
                    totalPrice = totalPrice + value.price;
                    count = count + value.quantity;
                    let newDiv = document.createElement('li');
                    newDiv.innerHTML = `
                        <div><img src="image/${value.image}" width="50" height="50" style="border-radius: 100%"></div> <!-- Set the width and height here -->
                        <div>${value.name}</div>
                        <div>${value.price.toLocaleString()}</div>
                        <div>
                            <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                            <div class="count">${value.quantity}</div>
                            <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                        </div>`;
                    listCard.appendChild(newDiv);
                }
            });
            total.innerText = totalPrice.toLocaleString();
            quantity.innerText = count;
        }

        function changeQuantity(key, quantity) {
            if (quantity == 0) {
                delete listCards[key];
            } else {
                listCards[key].quantity = quantity;
                listCards[key].price = quantity * products[key].price;
            }
            reloadCard();
        }

        initApp(); // Call the initApp function to create the cards with smaller images.