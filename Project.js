    const images = [
        "img/imgbox1.jpg",
        "img/imgbox2.jpg",
        "img/imgbox3.JPG",
        "img/imgbox4.jpg"
    ];
   let currentIndex = 0;
    const imgDiv = document.getElementById("img");

    function changeImage() {
        // ใส่ class fade ให้เบลอและจาง
        imgDiv.classList.add("fade");
        setTimeout(() => {
            // เปลี่ยนรูป
            currentIndex = (currentIndex + 1) % images.length;
            imgDiv.style.backgroundImage = `url(${images[currentIndex]})`;

            // เอา class fade ออก ค่อยๆ ชัดกลับมา
            imgDiv.classList.remove("fade");
        }, 1000); // 1s = ระยะเวลา transition
    }
    // เปลี่ยนภาพทุก 6 วินาที
    setInterval(changeImage, 6000);
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.7 });
elements.forEach(el => observer.observe(el));