const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, {
  threshold: 0.01 
});

const blocks = document.querySelectorAll(".main__block");
blocks.forEach(block => {
  observer.observe(block);
});
