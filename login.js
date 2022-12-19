let email=document.getElementById("email");
    let pass=document.getElementById("pass");
    let log=document.getElementById("log");
    log.addEventListener("click",check);
    let url = ("data.json");
    let jk;
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        jk=data
    })
    .catch((err)=>{
        console.log(err)
    });
    // let jk=[
    //      {
    //         "email":"aniketzade4024@gmail.com",
    //         "pass":"Aniket"
    //     }
    // ]
    function check(){
      jk.forEach((el) => {
        if(email.value!==el.email || email.value==="" || pass.value!==el.pass){
            alert("Please Enter Valid Details ⚠️"+"\n"+"Or"+"\n"+"If you don't have an account then Register First 😊");
        }
        if(email.value===el.email && pass.value===el.pass ){
            alert("Login successfully ✅")
        }
      });
    }
    
    check()
    