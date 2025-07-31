let tinhLuong = function() {
    let LuongNgay = document.querySelector("#LuongNgay").value *1;
    let SoNgay = document.querySelector("#SoNgay").value *1;
    let result1 = document.querySelector("#result1");
    result1.innerHTML = `Tong luong: ${(LuongNgay * SoNgay).toLocaleString()} VND`;
}
let tinhTrungBinh = function() {
    let num1 = document.querySelector("#num1").value * 1;
    let num2 = document.querySelector("#num2").value * 1;
    let num3 = document.querySelector("#num3").value * 1;
    let num4 = document.querySelector("#num4").value * 1;
    let num5 = document.querySelector("#num5").value * 1;
    let result2 = document.querySelector("#result2");
    result2.innerHTML = `Gia tri trung binh: ${((num1 + num2 + num3 + num4 + num5) / 5)}`;
}
let quyDoiTien = function() {
    let money = document.querySelector("#money").value * 1;
    let result3 = document.querySelector("#result3");
    result3.innerHTML = `Gia tri quy doi: ${(money * 23500).toLocaleString('vi-VN')} VND`;
}

let tinhHinhChuNhat = function() {
    let chieuDai = document.querySelector("#chieuDai").value * 1;
    let chieuRong = document.querySelector("#chieuRong").value * 1;
    let result4 = document.querySelector("#result4");
    let dienTich = chieuDai * chieuRong;
    let chuVi = (chieuDai + chieuRong) * 2;
    result4.innerHTML = `Dien tich: ${dienTich} - Chu vi: ${chuVi}`;
}

let tinhTongKySo = function() {
    let number = document.querySelector("#so2ChuSo").value * 1;
    let result5 = document.querySelector("#result5");
    if (number < 10 || number > 99) {
        // alert("Vui long nhap so co 2 chu so");
        result5.innerHTML = "Vui long nhap so co 2 chu so";
        return;
    }
    let so_hang_dv = number %10;
    let so_hang_chuc = Math.floor(number/10);
    result5.innerHTML = `Tong 2 ky so: ${so_hang_dv + so_hang_chuc}`;
}