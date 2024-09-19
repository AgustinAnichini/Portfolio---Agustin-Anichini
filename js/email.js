document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var form = this;
    var name = form.querySelector('input[name="name"]').value.trim();
    var email = form.querySelector('input[name="email"]').value.trim();
    var phone = form.querySelector('input[name="phone"]').value.trim();
    var agenda = form.querySelector('input[name="agenda"]').value.trim();
    var consulta = form.querySelector('textarea[name="consulta"]').value.trim();
    var responseMessage = document.getElementById("responseMessage");

    if (!name || !email || !consulta || !phone || !agenda) {
        responseMessage.textContent = "Por favor, complete todos los campos.";
        responseMessage.className = "message-box error";
        responseMessage.style.display = "block";    
        return;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        responseMessage.textContent = "Por favor, ingrese un email válido.";
        responseMessage.className = "message-box error";
        responseMessage.style.display = "block";
        return;
    }

    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    document.getElementById("loadingSpinner").style.display = "block"; 
    xhr.open("POST", "sendEmail.php", true);

    xhr.onload = function() {
        var responseMessage = document.getElementById("responseMessage");
        var loadingSpinner = document.getElementById("loadingSpinner");

        loadingSpinner.style.display = "none"; 

        if (xhr.status === 200) {
            responseMessage.textContent = xhr.responseText;
            responseMessage.className = "message-box success";
        } else {
            responseMessage.textContent = "Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.";
            responseMessage.className = "message-box error";
        }
        responseMessage.style.display = "block";
    };

    xhr.onerror = function() {
        var responseMessage = document.getElementById("responseMessage");
        var loadingSpinner = document.getElementById("loadingSpinner");

        loadingSpinner.style.display = "none"; 

        responseMessage.textContent = "Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.";
        responseMessage.className = "message-box error";
        responseMessage.style.display = "block";
    };

    xhr.send(formData);
});
