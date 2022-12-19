let main=document.getElementById("l-right");
    // let serch=document.getElementById("search");
    let jk;
    let ab;
    fetch("rest.json")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        
        jk=data;
        ab=data;
        display(data);
        // console.log(data)
    })
    .catch((err)=>{
        cnsole.log(err)
    })

    

    function display(data){
        data.forEach(el => {
           let cart = document.createElement("div");
           let img=document.createElement("img");
           img.setAttribute("src",el.img);
           let div=document.createElement("div");
           div.setAttribute("class","div")
           let div1=document.createElement("div");
           div1.setAttribute("class","div1");
           let button=document.createElement("button");
           button.innerText="Book now";
           let div2=document.createElement("div");
           div2.setAttribute("class","div2");
           let name=document.createElement("h2");
           name.innerText=el.name;
           let city=document.createElement("h3");
           city.innerText=el.city;
           let star=document.createElement("h5");
           star.innerText=el.star;
           let rate=document.createElement("p");
           rate.innerText=el.rate;
           div.append(div1,div2)
           div2.append(button)
           div1.append(name,city,star,rate)
           cart.append(img,div);
            main.append(cart);
        });
    }

    function search(){
        main.innerHTML=null;
        let a=document.querySelector("#search").value;
        let newData=jk.filter((el)=>{
            return el.city.toLowerCase().includes(a.toLowerCase());
        })
        if(newData.length===0){
            main.innerText="No result found"
        }
        console.log(newData)
        display(newData);
    }
    
    function star5(){
        let arr1=[];
        main.innerHTML=null;
        let five=document.getElementById("5-star").value;
        
       
        jk.filter((el)=>{
            if(five==="5" && el.star==="★ ★ ★ ★ ★"){
               arr1.push(el)
            }
        })
        display(arr1)
    }
    function star4(){
        let arr1=[];
        main.innerHTML=null;
        let four=document.getElementById("4-star").value;
        jk.filter((el)=>{
            if(four==="4" && el.star==="★ ★ ★ ★ ✩"){
               arr1.push(el)
            }
        })
        display(arr1)
    }
    function star3(){
        let arr1=[];
        main.innerHTML=null;
        let three=document.getElementById("3-star").value;
        jk.filter((el)=>{
            if(three==="3" && el.star==="★ ★ ★ ✩ ✩"){
               arr1.push(el)
            }
        })
        display(arr1)
    }
    function star2(){
        let arr1=[];
        main.innerHTML=null;
        let two=document.getElementById("2-star").value;
        jk.filter((el)=>{
            if(two==="2" && el.star==="★ ★ ✩ ✩ ✩"){
               arr1.push(el)
            }
        })
        display(arr1)
    }
    function star1(){
        let arr1=[];
        main.innerHTML=null;
        let one=document.getElementById("1-star").value;
        jk.filter((el)=>{
            if(one==="1" && el.star==="★ ✩ ✩ ✩ ✩"){
               arr1.push(el)
            }
        })
        display(arr1)
    }
    
    function check(){
        let show=document.getElementsByClassName("hl").value;
        if(show==="h2l"){
            jk.sort((a,b)=>+b.rate - +a.rate);
        }
        if(show==="l2h"){
            jk.sort((a,b)=>+a.rate - +b.rate);
        }
        console.log(jk)
        main.innerHTML=null;
        display(jk);

    }
    
    function ngp(){
        let arr2=[];
        main.innerHTML=null;
        let ngp=document.getElementById("ngp").value;
        jk.filter((el)=>{
            if(ngp==="ngp" && el.city==="Nagpur"){
                arr2.push(el);
            }
        })
        display(arr2)
    }
    function nas(){
        let arr2=[];
        main.innerHTML=null;
        let nas=document.getElementById("nas").value;
        jk.filter((el)=>{
            if(nas==="nas" && el.city==="Nashik"){
                arr2.push(el);
            }
        })
        display(arr2)
    }
    function mum(){
        let arr2=[];
        main.innerHTML=null;
        let mum=document.getElementById("mum").value;
        jk.filter((el)=>{
            if(mum==="mum" && el.city==="Mumbai"){
                arr2.push(el);
            }
        })
        display(arr2)
    }
    function del(){
        let arr2=[];
        main.innerHTML=null;
        let del=document.getElementById("del").value;
        jk.filter((el)=>{
            if(del==="del" && el.city==="Delhi"){
                arr2.push(el);
            }
        })
        display(arr2)
    }