//item에 마우스 올리면 img 경로가 다른 이미지로 변경
//변수
const item1 = document.querySelector('.item');
const item1Img = document.querySelector('.item img');
const item2 = document.querySelector('.sale');
const item2Img = document.querySelector('.sale img');

//변수 테스트
console.log(item1, item1Img);
console.log(item2, item2Img);

//이벤트
item1.addEventListener('mouseover', item1ImgSrc);
item1.addEventListener('mouseout', item1ImgSrcOut );
item2.addEventListener('mouseover', item2ImgSrc);
item2.addEventListener('mouseout', item2ImgSrcOut);

//함수
function item1ImgSrc() {
    item1Img.src = 'https://image.msscdn.net/thumbnails/images/prd_img/20260311/6116024/detail_6116024_17745057036811_big.jpg?w=1200';
};
function item1ImgSrcOut() {
    item1Img.src = 'https://image.msscdn.net/thumbnails/images/goods_img/20260311/6116024/6116024_17745056984735_big.jpg?w=1200';
};
function item2ImgSrc() {
    item2Img.src ='https://image.msscdn.net/thumbnails/images/prd_img/20260331/6230371/detail_6230371_17751953832422_big.jpg?w=1200';
}
function item2ImgSrcOut() {
        item2Img.src ='https://image.msscdn.net/thumbnails/images/goods_img/20260331/6230371/6230371_17846211076037_big.jpg?w=1200';

}