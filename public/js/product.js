//product
const productImages = document.querySelectorAll(".product-images img"); // selecting all image thumbs
const productImageSlide = document.querySelector(".image-slider"); // seclecting image slider element

let activeImageSlide = 0; // default slider image

productImages.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide = i; // updating the image slider variable to track current thumb
    })
})

// toggle size buttons

const sizeBtns = document.querySelectorAll('.size-radio-btn'); // selecting size buttons
let checkedBtn = 0; // current selected button

sizeBtns.forEach((item, i) => { // looping through each button
    item.addEventListener('click', () => { // adding click event to each 
        sizeBtns[checkedBtn].classList.remove('check'); // removing check class from the current button
        item.classList.add('check'); // adding check class to clicked button
        checkedBtn = i; // upading the variable
    })
})


//product1
const productImages1 = document.querySelectorAll(".product-images1 img"); // selecting all image thumbs
const productImageSlide1 = document.querySelector(".image-slider1"); // seclecting image slider element

let activeImageSlide1 = 0; // default slider image

productImages1.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages1[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide1.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide1 = i; // updating the image slider variable to track current thumb
    })
})


//product2
const productImages2 = document.querySelectorAll(".product-images2 img"); // selecting all image thumbs
const productImageSlide2 = document.querySelector(".image-slider2"); // seclecting image slider element

let activeImageSlide2 = 0; // default slider image

productImages2.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages2[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide2.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide2 = i; // updating the image slider variable to track current thumb
    })
})

//product3
const productImages3 = document.querySelectorAll(".product-images3 img"); // selecting all image thumbs
const productImageSlide3 = document.querySelector(".image-slider3"); // seclecting image slider element

let activeImageSlide3 = 0; // default slider image

productImages3.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages3[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide3.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide3 = i; // updating the image slider variable to track current thumb
    })
})

//product4
const productImages4 = document.querySelectorAll(".product-images4 img"); // selecting all image thumbs
const productImageSlide4 = document.querySelector(".image-slider4"); // seclecting image slider element

let activeImageSlide4 = 0; // default slider image

productImages4.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages4[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide4.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide4 = i; // updating the image slider variable to track current thumb
    })
})

//product5
const productImages5 = document.querySelectorAll(".product-images5 img"); // selecting all image thumbs
const productImageSlide5 = document.querySelector(".image-slider5"); // seclecting image slider element

let activeImageSlide5 = 0; // default slider image

productImages5.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages5[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide5.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide5 = i; // updating the image slider variable to track current thumb
    })
})

//product6
const productImages6 = document.querySelectorAll(".product-images6 img"); // selecting all image thumbs
const productImageSlide6 = document.querySelector(".image-slider6"); // seclecting image slider element

let activeImageSlide6 = 0; // default slider image

productImages6.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages6[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide6.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide6 = i; // updating the image slider variable to track current thumb
    })
})

//product7
const productImages7 = document.querySelectorAll(".product-images7 img"); // selecting all image thumbs
const productImageSlide7 = document.querySelector(".image-slider7"); // seclecting image slider element

let activeImageSlide7 = 0; // default slider image

productImages7.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages7[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide7.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide7 = i; // updating the image slider variable to track current thumb
    })
})

//product8
const productImages8 = document.querySelectorAll(".product-images8 img"); // selecting all image thumbs
const productImageSlide8 = document.querySelector(".image-slider8"); // seclecting image slider element

let activeImageSlide8 = 0; // default slider image

productImages8.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages8[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide8.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide8 = i; // updating the image slider variable to track current thumb
    })
})

//product9
const productImages9 = document.querySelectorAll(".product-images9 img"); // selecting all image thumbs
const productImageSlide9 = document.querySelector(".image-slider9"); // seclecting image slider element

let activeImageSlide9 = 0; // default slider image

productImages9.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages9[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide9.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide9 = i; // updating the image slider variable to track current thumb
    })
})

//product10
const productImages10 = document.querySelectorAll(".product-images10 img"); // selecting all image thumbs
const productImageSlide10 = document.querySelector(".image-slider10"); // seclecting image slider element

let activeImageSlide10 = 0; // default slider image

productImages10.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages10[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide10.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide10 = i; // updating the image slider variable to track current thumb
    })
})

//product11
const productImages11 = document.querySelectorAll(".product-images11 img"); // selecting all image thumbs
const productImageSlide11 = document.querySelector(".image-slider11"); // seclecting image slider element

let activeImageSlide11 = 0; // default slider image

productImages11.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages11[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide11.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide11 = i; // updating the image slider variable to track current thumb
    })
})

//product12
const productImages12 = document.querySelectorAll(".product-images12 img"); // selecting all image thumbs
const productImageSlide12 = document.querySelector(".image-slider12"); // seclecting image slider element

let activeImageSlide12 = 0; // default slider image

productImages12.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages12[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide12.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide12 = i; // updating the image slider variable to track current thumb
    })
})

//product13
const productImages13 = document.querySelectorAll(".product-images13 img"); // selecting all image thumbs
const productImageSlide13 = document.querySelector(".image-slider13"); // seclecting image slider element

let activeImageSlide13 = 0; // default slider image

productImages13.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages13[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide13.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide13 = i; // updating the image slider variable to track current thumb
    })
})

//product14
const productImages14 = document.querySelectorAll(".product-images14 img"); // selecting all image thumbs
const productImageSlide14 = document.querySelector(".image-slider14"); // seclecting image slider element

let activeImageSlide14 = 0; // default slider image

productImages14.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages14[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide14.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide14 = i; // updating the image slider variable to track current thumb
    })
})

//product14
const productImages15 = document.querySelectorAll(".product-images15 img"); // selecting all image thumbs
const productImageSlide15 = document.querySelector(".image-slider15"); // seclecting image slider element

let activeImageSlide15 = 0; // default slider image

productImages15.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages15[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide15.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide15 = i; // updating the image slider variable to track current thumb
    })
})

//product16
const productImages16 = document.querySelectorAll(".product-images16 img"); // selecting all image thumbs
const productImageSlide16 = document.querySelector(".image-slider16"); // seclecting image slider element

let activeImageSlide16 = 0; // default slider image

productImages16.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages16[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide16.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide16 = i; // updating the image slider variable to track current thumb
    })
})

//product17
const productImages17 = document.querySelectorAll(".product-images17 img"); // selecting all image thumbs
const productImageSlide17 = document.querySelector(".image-slider17"); // seclecting image slider element

let activeImageSlide17 = 0; // default slider image

productImages17.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages17[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide17.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide17 = i; // updating the image slider variable to track current thumb
    })
})

//product18
const productImages18 = document.querySelectorAll(".product-images18 img"); // selecting all image thumbs
const productImageSlide18 = document.querySelector(".image-slider18"); // seclecting image slider element

let activeImageSlide18 = 0; // default slider image

productImages18.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages18[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide18.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide18 = i; // updating the image slider variable to track current thumb
    })
})