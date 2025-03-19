<script>
    const images = document.querySelectorAll("img");
    images.forEach(image => {
        image.addEventListener("mouseover", function() {
            image.style.transform = "scale(1.2)";
            image.style.transition = "transform 0.3s ease";
        });
        image.addEventListener("mouseout", function() {
            image.style.transform = "scale(1)";
        });
    });
</script>
