document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.querySelector(".review-left");

    reviewForm.addEventListener("submit", function (event) {
       

        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const rating = document.querySelector('select[name="rating"]').value;
        const review = document.querySelector('input[placeholder="Write your review here"]').value;

        if (!name || !email || !rating || !review) {
            alert("Please fill out all fields before submitting!");
            return;
        }

        fetch("http://localhost:3002/submit-review", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, rating, review })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            reviewForm.reset();
        })
        .catch(error => console.error("Error:", error));
    });
});
