// console.log("ㅎㅇ")

window.onload = function(){
    if(window.scrollY > 500){
        //상단버튼 보이기
        gsap.to('#to-top',0.6,{
            x : 0
        });
    }else{
        //상단버튼 숨기기
        gsap.to('#to-top',0.6,{
            x : 100
        });
    }
}

const searchE1 = document.querySelector(".search_bar");
const searchInputE1 = searchE1.querySelector("input");
console.log(searchE1);
console.log(searchInputE1);

searchE1.addEventListener('click' , function(){
    searchInputE1.focus();
});

searchInputE1.addEventListener('focus' , function(){
    searchE1.classList.add('focused');
    searchInputE1.setAttribute('placeholder', '검색어를 입력 해주세요.');
});

searchInputE1.addEventListener('blur' , function(){
    searchE1.classList.remove('focused');
    searchInputE1.setAttribute('placeholder', '');
});

const badgeE1 = document.querySelector('#top_layout .badges');

// console.log(badgeE1);

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){
        //뱃지 숨기기
        //badgeE1.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeE1,0.6,{
            opacity:0,
            display : 'none'
        });
        //상단버튼 보이기
        gsap.to("#to-top",0.6,{
            x: 0
        });

    }else{
        //벳지 보이기
        // badgeE1.style.display = 'block';
        gsap.to(badgeE1,0.6,{
            opacity:1,
            display : 'block'
        });

         //상단버튼 보이기
        gsap.to("#to-top",0.6,{
            x:100
        });

    }
}, 300));
//_.throttle(함수,시간);

const fadeEls = document.querySelectorAll('#body_layout .fade-in');
console.log(fadeEls);

fadeEls.forEach(function(fadeEl,index){
    // console.log(fadeEl);
    // console.log(index);
    gsap.to(fadeEl,1,{
        opacity:1,
        delay:(index+1) * 0.5
    });
});

// SWIPER기능을 사용하기위한 생성자 호출, new Swiper('선택자', {옵션});
new Swiper(".notice--line .swiper-container",{
    //
    direction : 'vertical',
    //자동 슬라이드
    autoplay:true,
    //슬라이드가 끝난 후 처음부터 반복
    loop:true
});


//notice--------------------------------------------------------------------------------------------


new Swiper(".promotion .swiper-container",{


    // 화면에 보여줄 슬라이드 개수
    slidesPerView : 3,
    // 슬라이드 사이 여백
    spaceBetween : 10,
    //1번이미지가 가운데보여주는 옵션
    centeredSlides : true,
    loop : true,
    autoplay:{
        delay : 3000
    },
    pagination:{
        el: '.swiper-pagination' ,
        clickable:true
    },
    navigation:{
        prevEl : 'swiper-button-prev',
        nextEl : 'swiper-button-next'
    }
})

new Swiper('#awards .swiper-container',{
    autoplay : true,
    loop : true,
    spaceBetween : 30,
    slidesPerView : 5
    ,navigation : {
        prevEl : 'awards .swiper-prev',
        nextEl : 'awards .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
// console.log(promotionEl);
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// console.log(promotionToggleBtn);

let isHidepromotion = false;
//true 숨기기, false 보이기

promotionToggleBtn.addEventListener('click', function(){
    isHidepromotion = !isHidepromotion;
    console.log(isHidepromotion);
    if(isHidepromotion){
        // 숨김처리
        promotionEl.classList.add('hide');
    }else{
        // 보임처리
        promotionEl.classList.remove('hide');
    }
});

function random(min,max){

    return parseFloat((Math.random() * (max - min) +min).toFixed(2) )
}

function floatingObject(selector, delay, size){
    //gsap.to(요소, 시간, 옵션);
    gsap.to(selector,random(1.5,2.5),{
        y : size,
        repeat : -1,
        yoyo : true,
        ease : Power1.easeInout,
        delay : random(0,delay)
    });
}

floatingObject('.floating', 1, 15);
floatingObject('.floating', .5, 15);
floatingObject('.floating', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
// console.log(spyEl);
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement : spyEl, //보여짐 여부를 감시할 요소
        triggerHook : .8
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});

const toTopEl = document.querySelector('#to-top');

toTopEl.addEventListener('click', function(){
    gsap.to(window,0.7,{
        scrollTo : 0
    });
});