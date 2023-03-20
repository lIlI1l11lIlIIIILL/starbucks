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