

/* 버튼 function */
// window.onload = function () {
//     document.querySelector('.slideBtn2').addEventListener('click', function () {
//         document.querySelector('.slides').style.transform = 'translate(-100vw)';
//     });
//     document.querySelector('.slideBtn1').addEventListener('click', function () {
//         document.querySelector('.slides').style.transform = 'translate(0vw)';
//     });
// }



window.onload = function () {

    function slide() {
        document.querySelector('.slides').style.transform = 'translate(-100vw)';
    }

    function slideBack() {
        document.querySelector('.slides').style.transform = 'translate(0vw)';
    }

    setInterval(slide, 7000);
    setInterval(slideBack, 14000);


    const nav = document.querySelector('ul.nav');
    const winWidth = window.innerWidth;
    const dropdownMenuBox = document.querySelector('.dropdown-menu-box');

    function displayNone() {
        dropdownMenuBox.style.display = "none";
    }

    function displayBlock() {
        dropdownMenuBox.style.display = "block";
    }

    if (winWidth > 767) {
        nav.addEventListener('mouseover', displayBlock);
        nav.addEventListener('mouseout', displayNone);
    } else {
        return null;
    }

}

// 브라우저 크기 변경시 새로고침 (반응형 적용 위해)
window.onresize = function () {
    document.location.reload();
}
