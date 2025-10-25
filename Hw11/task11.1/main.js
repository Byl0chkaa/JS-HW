let divCarts = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(cartsObject => {
        let {carts} = cartsObject;
        let div = document.createElement('div');
        div.classList.add('div-container');

        for (const cart of carts) {
            let divElement = document.createElement('div');
            divElement.classList.add('cart-container');
            let divInfo = document.createElement('div');
            divInfo.innerText = `
        "total": ${cart.total},
        "discountedTotal": ${cart.discountedTotal},
        "userId": ${cart.userId},
        "totalProducts": ${cart.totalProducts},
        "totalQuantity": ${cart.totalQuantity}`

            let ol = document.createElement('ol');
            for (const product of cart.products) {
                let li = document.createElement('li');
                let info = document.createElement('p');
                info.innerText = `
                "id": ${product.id},
                "title": ${product.title},
                "price": ${product.price},
                "quantity": ${product.quantity},
                "total": ${product.total},
                "discountPercentage": ${product.discountPercentage},
                "discountedTotal": ${product.discountedTotal}`;

                let img = document.createElement('img');
                img.src = product.thumbnail;
                li.append(img,info);
                ol.appendChild(li);
            }
            div.append(divInfo, ol);
            divCarts.appendChild(div);
        }
    });