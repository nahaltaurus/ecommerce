let shop=document.getElementById("shop");

let data=[
    {
        id:1,
        name:"kurtha",
        desc:"good quality product with durable capability",
        price:450,
        img:"5.jpg"
    },
    {
        id:2,
        name:"churidar",
        desc:"good quality product with durable capability",
        price:250,
        img:"1.jpg"
    },
    {
        id:3,
        name:"pajera",
        desc:"good quality product with durable capability",
        price:150,
        img:"2.jpg"
    },
    {
        id:4,
        name:"saree",
        desc:"good quality product with durable capability",
        price:650,
        img:"3.jpg"
    },
]
let gen= () =>{
    return(shop.innerHTML=data.map((x)=>{
        return `<div class="item">
        <img width="185" height="200" src="${x.img}" alt="">
        <div  id="pid-${x.id}"class="desc">
          <h2>${x.name}</h2>
          <p>${x.desc}</p>
          <div class="price-quant">
            <p>$${x.price}</p>
            <div class="button">
              <i  onclick="inc()"class="bi bi-dash"></i>
              <div  id="${x.id}"class="value">0</div>
              <i onclick="dec()" class="bi bi-plus"></i>
            </div>
          </div>
        </div>
       </div>
       `; }).join(""));
};

gen();

let inc=() => {
  
}
let dec=() => {}
let upd=() =>  {}
