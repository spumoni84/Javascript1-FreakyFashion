function loadProducts(event) {
        if (event) {
            event.preventDefault();
        }

        const windowWidth = window.innerWidth;console.log(`Window width is: ${windowWidth}px`);
 
const windowWidth = window.innerWidth;
 
        
        fetch('/admin/products/load?limit=8')
            .then(response => response.json())
            .then(products => {
                console.log(products);
                const productList = document.getElementById('product-lists');
                productList.innerHTML = '';
                products.forEach(product => {
                    const card = document.createElement('div');
                    const link = document.createElement('a');
                    link.href = 'product-details.html';
                    card.appendChild(link);
                    const cardInner = document.createElement('div');

                    const newOverlay = document.createElement('div');
                    const heartOlveray = document.createElement('div');
                    const image = document.createElement('img');
                    const productHeader = document.createElement('div');

                    row.innerHTML = `
                        <td>${product.name}</td>
                        <td>${product.sku}</td>
                        <td>${product.price}</td>
                        <td><img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px;"></td>
                        <td>${product.brand}</td>
                        <td><a href="/admin/products/edit/${product.id}">Edit</a></td>
                    `;
                    productList.appendChild(row);
                });
            })
            .catch(error => console.error('Error loading products:', error));
    }
    
    loadProducts();

/*
<div>
<a href="product-details.html" class="product-link">
            <div class="product">
                <div class="new-overlay">Nyhet</div>
                <div class="heart-overlay"><i class="fas fa-heart"></i></div>
                <img src="/img/Army-green-troja.webp" alt="Army green troja">
                <div class="product-header">
                    <h3>Arme grön tröja</h3>
                    <p class="price">449 SEK</p>
                </div>
                <p>Levis</p>
            </div>
            </a>
            </div>
*/















/* document.addEventListener('DOMContentLoaded', function() {
    const heartOverlays = document.querySelectorAll('.heart-overlay i');

    heartOverlays.forEach(heart => {
        heart.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior
            if (heart.classList.contains('far')) {
                heart.classList.remove('far');
                heart.classList.add('fas');
            } else {
                heart.classList.remove('fas');
                heart.classList.add('far');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const heartOverlay = document.querySelector('.heart-overlay-unique');

    heartOverlay.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action (scrolling to the top)
        heartOverlay.classList.toggle('filled'); // Toggle the 'filled' class
        const heartIcon = heartOverlay.querySelector('i');
        heartIcon.classList.toggle('fas'); // Change from 'far' to 'fas' for filled heart
        heartIcon.classList.toggle('far'); // Change from 'fas' to 'far' for empty heart
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const heartOverlay = document.querySelector('.heart-overlay-unique');

    heartOverlay.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action (scrolling to the top)
        heartOverlay.classList.toggle('filled'); // Toggle the 'filled' class
        const heartIcon = heartOverlay.querySelector('i');
        heartIcon.classList.toggle('fas'); // Change from 'far' to 'fas' for filled heart
        heartIcon.classList.toggle('far'); // Change from 'fas' to 'far' for empty heart
    });
});

 */