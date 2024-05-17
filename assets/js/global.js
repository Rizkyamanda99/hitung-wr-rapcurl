function checkLS() {
    if (localStorage.getItem('cookies') === null) {
        localStorage.setItem('cookies', 0);
    }
}

function res() {
    // let sum = parseInt(localStorage.getItem('cookies'))

    // if (sum == 0) {
    //     window.open('https://www.effectivecpmgate.com/swqh6tcn3k?key=163b8eee7c2fbbbdae754cb90a81d9f7', '_blank');
    // } else {
    validation();
    // }
    // localStorage.setItem('cookies', 1);

}

function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const IGrizkyrapp = `<a href="https://www.instagram.com/rizkyyrap_?igsh=MWE3M3dmbjgxZXFzNQ==" target="_blank">rizkyyrap_</a>`;
    const rizkyamandaWA = `<a href="https://api.whatsapp.com/send?phone=6285971782005" target="_blank">6285971782005</a>`;

    let arrayEl = [
        `<p class="animation mb-0 text-truncate">Hitung Wr disini aja :)</p>`,
        `<p class="animation mb-0 text-truncate">Yang Kroco boleh hitung wr disini :)</p>`,
        `<p class="animation mb-0 text-truncate">IG: ${IGrizkyrapp} / WA: ${rizkyamandaWA}</p>`,
    ];
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;IGrizkyrapp
        if (array >= arrayEl.length) {
            array = 0;
        }
    }, 5000);
}

window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-206846692-3');