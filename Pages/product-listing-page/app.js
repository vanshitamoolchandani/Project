const sbtn = document.querySelectorAll('#select-multi-btn');
const sbtnArr = document.querySelectorAll("#select-btn");

[].forEach.call(sbtnArr, (sbtn) => {
	toggleFocus(sbtn)
});


function toggleFocus(e) {
	setTimeout(() => {
		 e.addEventListener('focus', ({path}) => {
			  path[2].classList.add("is-focused");
		 }, true);

		 e.addEventListener('blur', ({path}) => {
			  path[2].classList.remove("is-focused");
		 }, true);
	}, 0);
}


const fav = document.querySelector('#fav');
const btnFav = document.querySelector('.btn-fav');
const cartBadge = document.querySelectorAll('#cart-badge');
const favBadge = document.querySelectorAll('#fav-badge');
const cartBtn = document.querySelectorAll(".cart-btn");
const favBtn = document.querySelectorAll(".fav-btn");

function changeIcon(x) {
    x.classList.toggle("fa-solid");
  }

for (let i = 0; i < cartBtn.length; i++) {
cartBtn[i].addEventListener('click' ,() => {
    alert('Product '+ [i+1] + ' Succefully Added to cart');
    
});
}
for (let i = 0; i < cartBtn.length; i++) {
    cartBtn[i].addEventListener('click' ,() => {
        for (let i = 0; i < cartBadge.length; i++) {
            var bdg = Number(cartBadge[i].innerHTML) + 1;
            cartBadge[i].innerHTML = bdg;
        }
    });
}

for (let i = 0; i < favBtn.length; i++) {
    favBtn[i].addEventListener('click' ,() => {
        for (let i = 0; i < favBadge.length; i++) {
            var bdg = Number(favBadge[i].innerHTML) + 1;
            favBadge[i].innerHTML = bdg;
        }
    });
}

const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com'
	}
};

fetch('https://telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com/sms-verification-code?phoneNumber=%3CREQUIRED%3E&verifyCode=%3CREQUIRED%3E', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));