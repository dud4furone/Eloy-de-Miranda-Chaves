function checkPassword() {
    var password = document.getElementById("password").value;
  
    // Substitua a senha abaixo pela senha desejada
    var correctPassword = "20";
  
    if (password === correctPassword) {
      window.location.href = "6Alista.html";
    } else {
      document.getElementById("errorMessage").innerText = "Senha incorreta. Tente novamente.";
    }
  }
  