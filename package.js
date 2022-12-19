let main=document.getElementById("container");
    let url = ("hotel.json")
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        display(data);
    })
    .catch((err)=>{
        console.log(err);
    })

    function display(data){
        data.forEach(el => {
            let cart=document.createElement("div");
            let img=document.createElement("img");
            img.setAttribute("src",el.image);
            let title=document.createElement("h2");
            title.innerText=el.title;
            let city=document.createElement("h3");
            city.innerText=el.city;
            let discription=document.createElement("p");
            discription.innerText=el.discription;
            let deal=document.createElement("div");
            let discount=document.createElement("h5");
            discount.innerText="Member price available";
            let ogp=document.createElement("p");
            ogp.innerText=el.ogp;
            let ap=document.createElement("h4");
            ap.innerText=el.ap;
            let button=document.createElement("button");
            button.innerText="Log in for member prices"
            deal.append(discount,ogp,ap)
            cart.append(img,title,city,discription,deal,button);
            main.append(cart);
            
        });

    }