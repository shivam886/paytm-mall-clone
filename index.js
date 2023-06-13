let cont=document.getElementById("append"); 
let searchInput=document.getElementById("search");
        let button=document.getElementById("search-btn"); 
        button.addEventListener("click",moviecall); 
        //let bt=document.querySelector("button").textContent="Search"; 
         
     
        async function moviecall(){ 
          
            let get=searchInput.value; 
 
           if (get!==""){ 
            // let url=(`https://63c781245c0760f69ab8a4f3.mockapi.io/products?search=${get}`); 
            let url=(`https://63c781245c0760f69ab8a4f3.mockapi.io/products?search=${get}`); 
              
          try { 
            let request=await fetch(url); 
            let data=await request.json(); 
            displayPoster(data); 
            document.getElementById("hidden").innerHTML=""; 
 
            console.log(data); 
           } catch (error) { 
            console.log(error); 
          } 
           } 
           
        }          
        let CartArr=JSON.parse(localStorage.getItem("cart"))||[] 
     
        function displayPoster(data){ 
           
            cont.innerHTML=""; 
          data.forEach((ele)=>{ 
            
     
             
           
            let innerdiv=document.createElement("div"); 
        innerdiv.setAttribute("class","insidediv"); 
 
        //   image append in sub div 
 
            let imagediv=document.createElement("div"); 
            imagediv.setAttribute("class","imgdiv"); 
             
                let image=document.createElement("img"); 
                image.setAttribute("src",ele.image); 
 
            imagediv.append(image); 
 
            let descdiv=document.createElement("div"); 
            descdiv.setAttribute("class","desciptiondiv"); 
 
                let title= document.createElement("h4"); 
                title.textContent=ele.title; 
 
                let category=document.createElement("p"); 
                category.textContent=ele.category; 
 
                let price=document.createElement("h5"); 
                price.textContent=ele.price; 
 
                let button =document.createElement("button"); 
                button.textContent="Add to cart"; 
            descdiv.append(title,category,price,button); 
 
        innerdiv.append(imagediv,descdiv); 
 
        cont.append(innerdiv) 
     
      }) 
    } 
    moviecall(); 