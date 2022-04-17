function showText (el) {
    if (el.previousElementSibling.clientHeight 
        el.previousElementSibling.style.height = "40%";=== 80) {
        el.innerHTML = "Show Less...";      
    } else {
        el.previousElementSibling.style.height = "80px";
        el.innerHTML = "Read More...";
    }
}