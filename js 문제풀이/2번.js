//2번
//편의점 알바생인 당신은 재고의 개수와 물품이 맞는지 확인해야 합니다. 
//전산표를 보고, 해당 물품의 개수와 전산표에 적힌 개수가 같은지 확인합니다.
//일치하면 '전산표와 일치합니다' 아니면 '전산표와 일치하지 않습니다'를 출력합니다.
//전산표에 없는 품목이면 '품목이름(품목 없음)'가 나옵니다. 

//풀이과정1
const data = {
    야채곱창 : 5,
    바나나우유 : 10,
    삼각김밥 : 15,
    도시락 : 10,
    샌드위치 : 10,
}
function inventoryControl(product, count) {
    let selectedProduct = data[product]; 
    if (!selectedProduct) 
    return `${product} 품목없음`;
    if (selectedProduct !== count)
    return "전산표와 일치하지 않습니다";
    return "전산표와 일치합니다";//콘솔창 띄울때는 console.log치기
  }
console.log(inventoryControl('야채곱창',10))

//풀이과정2
function product(kind, count) {
    const cu = {
        야채곱창: 5,
        바나나우유: 10,
        삼각김밥: 15,
        도시락: 10,
        샌드위치: 10,
      };
    
      if (cu[kind] === undefined) {
        console.log(`${kind} (품목없음)`);
      } else if (cu[kind] !== count) {
        console.log('전산표와 일치하지 않습니다');
      } else {
        console.log('전산표와 일치합니다.');
      }
    }

//풀이과정3
  function checkitem(productName, quantity) {
    let item = {
        야채곱창: 5,
        바나나우유: 10,
        삼각김밥: 15,
        도시락: 10,
        샌드위치: 10,
    };
    if (!item[productName]) {
        console.log('품목없음');
        return item;
    }
    item =
        item[productName] === quantity
            ? console.log(`${productName}의 전산표가 일치합니다.`)
            : console.log(`${productName}의 전산표가 일치하지 않습니다.`);
}

