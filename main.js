
    
     /* function calculateTotal() {
        // Mảng chứa giá của từng sản phẩm
        var prices = [2000000, 2000000, 2000000, 2000000, 2000000, 2000000];
        var total = 0; // Biến tổng cộng giá trị đơn hàng
    
        // Duyệt qua từng sản phẩm
        for (var i = 1; i <= 6; i++) {
            // Lấy giá trị của ô nhập liệu số lượng
            var x=document.getElementById("quantity");
            if(x>=0)
            {
            var quantity = document.getElementById("quantity" + i).value;
    
            // Tính giá trị phụ (số lượng * giá của sản phẩm)
            var subtotal = quantity * prices[i - 1];
    
            // Cộng giá trị phụ vào tổng cộng
            total += subtotal;
    
            // Hiển thị giá trị phụ cho từng sản phẩm
            document.getElementById("total" + i).innerHTML = subtotal.toLocaleString();
            }
            else break;
    }
    
    
        // Hiển thị tổng cộng cho toàn bộ đơn hàng
        document.getElementById("total").innerHTML = "Tổng cộng: " + total.toLocaleString() + " VNĐ";
    }
    */
    function calculateTotal() {
        // Mảng chứa giá của từng sản phẩm
        var prices = [2000000, 2000000, 2000000, 2000000, 2000000, 2000000];
        var total = 0; // Biến tổng cộng giá trị đơn hàng
    
        // Duyệt qua từng sản phẩm
        for (var i = 1; i <= 6; i++) {
            // Lấy giá trị của ô nhập liệu số lượng
            var quantityInput = document.getElementById("quantity" + i);
            var quantity = quantityInput.value;
    
            // Kiểm tra số lượng có phải là số không âm
            if (quantity >= 0) {
                // Tính giá trị phụ (số lượng * giá của sản phẩm)
                var subtotal = quantity * prices[i - 1];
    
                // Cộng giá trị phụ vào tổng cộng
                total += subtotal;
    
                // Hiển thị giá trị phụ cho từng sản phẩm
                document.getElementById("total" + i).innerHTML = subtotal.toLocaleString();
            } else {
                // Hiển thị thông báo lỗi nếu số lượng âm
                alert("Chọn số lượng bị sai cho sản phẩm " + i);
                // Đặt giá trị số lượng về 0
                quantityInput.value = 0;
                // Thoát khỏi vòng lặp
                return;
            }
        }
    
        // Hiển thị tổng cộng cho toàn bộ đơn hàng
        document.getElementById("total").innerHTML = "Tổng cộng: " + total.toLocaleString() + " VNĐ";
    }
    

        function buy() {
            var grandTotal = document.getElementById("total").innerText;
            alert("Đã mua hàng! Tổng cộng: " + grandTotal);
        }
   
