function isValidUsername(username) {
    var regex = /^[a-zA-Z]+$/;
          return regex.test(username);
}

function signup(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Kiểm tra tên đăng nhập không chứa ký tự đặc biệt
    if (!isValidUsername(username)) {
        alert("Nhập tên sai. Vui long nhập lại");
        return;
    }

    // Kiểm tra mật khẩu có ít nhất 8 ký tự
    if (password.length < 8) {
        alert("Password phải đủ 8 kí tự");
        return;
    }

    // Kiểm tra email có kết thúc bằng "@gmail.com"
    if (!email.endsWith("@gmail.com")) {
        alert("Email phải kết thúc @gmail.com");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords không phù hơp");
        return;
    }

    var user = {
        username: username,
        email: email,
        password: password,
    };
    var json = JSON.stringify(user);
    // Lưu thông tin người dùng
    localStorage.setItem(username, json);
    window.location.href = "index.html";
    alert("Đăng kí không thành công");
}

function login(event) {
    event.preventDefault();
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById("loginPassword").value;

    var user = localStorage.getItem(loginEmail);
    var data = JSON.parse(user);

    if (user == null) {
        alert("Vui lòng nhập tên người dùng hoặc email hợp lệ");
    } else if (loginEmail == data.username || loginEmail == data.email) {
        if (loginPassword == data.password) {
            alert("Login successful");
            window.location.href = "index.html";
        } else {
            alert(" password sai");
        }
    } else {
        alert("Login sai. Vui long nhap lại");
    }
}
