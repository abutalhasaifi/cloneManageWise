const faq=document.querySelectorAll(".faqs");
faq.forEach(faqs => {
    faqs.addEventListener("click", () => {
       faqs.classList.toggle("active");
    })
});
