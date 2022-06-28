window.onload=()=>{
    let cards=document.getElementById("cards")
    let stanga=document.getElementById("stanga")
    let dreapta=document.getElementById("dreapta")
    var scrollstanga=null
    var scrolldreapta=null

    stanga.addEventListener("mouseenter", ()=>{
        scrollstanga=setInterval(()=>{
            cards.scrollLeft-=1
        },1)
    })

    dreapta.addEventListener("mouseenter", ()=>{
        scrolldreapta=setInterval(()=>{
            cards.scrollLeft+=1
        },.1)
    })

    stanga.addEventListener("mouseleave", ()=>{
      clearInterval(scrollstanga)
    })

    dreapta.addEventListener("mouseleave", ()=>{
       clearInterval(scrolldreapta)
    })
}