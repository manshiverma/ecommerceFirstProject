const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
            <a href="searchbar.html">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                </a>
   
                <a href="registration.html"><img src="img/user.png" alt=""></a>
                <a href="addtocart.html"><img src="img/cart.png" alt=""></a>

                
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Home</a></li>
            <li class="link-item"><a href="product.html" class="link">Product</a></li>
            <li class="link-item"><a href="about.html" class="link">About</a></li>
            <li class="link-item"><a href="contact.html" class="link">Contact</a></li>
            
        </ul>
    `;
}



createNav();