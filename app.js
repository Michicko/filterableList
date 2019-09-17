const searchInput = document.querySelector('.search-input');
let ul = document.querySelector('.collection-list')
let lis = ul.querySelectorAll('li.collection-item');

searchInput.addEventListener('keyup', function(e){
    let input = e.target.value.toUpperCase();
    for(let i = 0; i < lis.length; i++) {
        let a = lis[i].firstChild.textContent.toUpperCase();
        if(a.indexOf(input) > -1) {
            lis[i].style.display = '';
        } else {
            lis[i].style.display = 'none';
        }
    }
});





