
 
 const btnEl = document.querySelector(".button");
 const messageEl = document.querySelector(".message");
 const ContainerEl = document.querySelector(".grid-container");

 //generate random color
 const GenerateColors= () => {
  ContainerEl.innerHTML = "";

  //generate random color
  for(let i=0; i<8; i++){
    let randomColor= '#' + Math.floor(Math.random()* 0xffffff).toString(16).padStart(6, '0');
    console.log(randomColor);

    let html = `<div class="grid-container" style="background:${randomColor}">
                    <div class="grid-item">${randomColor}</div>
                </div>`;

    ContainerEl.insertAdjacentHTML("afterbegin", html);

    //get the value
    const colorValues = document.querySelector(".grid-item");
    colorValues.addEventListener("click", () => copyColorCode(randomColor));
  }
 };

 btnEl.addEventListener("click", () => {
  GenerateColors();
 })

 //copy color codes
 const copyColorCode = (val)=>{
  navigator.clipboard.writeText(val).then(()=>{
    messageEl.textContent = `You have copied ${val}`
    messageEl.classList.add('active')

    setTimeout(()=>{
      messageEl.classList.remove("active");
    }, 15000);
  });
 }; 

 GenerateColors(); 