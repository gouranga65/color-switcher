const body = document.getElementsByTagName("body");
const buttons = document.querySelectorAll(".box").forEach((button) => {
    button.addEventListener('click',(event)=>{
        if (event.target.class=="white") {
            console.log("hello");
        }
    })
});
