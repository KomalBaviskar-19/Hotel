document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const roomType = document.getElementById("roomType").value;

    // Display the booking result
    const result = `Booking successful! ${name}, your ${roomType} room is booked from ${checkin} to ${checkout}.`;
    document.getElementById("bookingResult").textContent = result;

    // Clear form
    document.getElementById("bookingForm").reset();
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const contactName = document.getElementById("contactName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display the contact result
    const result = `Thank you for your message, ${contactName}. We will get back to you soon!`;
    document.getElementById("contactResult").textContent = result;

    // Clear form
    document.getElementById("contactForm").reset();
});
