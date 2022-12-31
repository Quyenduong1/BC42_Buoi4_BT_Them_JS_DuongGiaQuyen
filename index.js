let button = document.getElementById("button-after").onclick = function() {
    // B1 : Lấy giá trị các input 
    let day = document.getElementById("num1").value;
    let month = document.getElementById("num2").value;
    let year = document.getElementById("num3").value;
    // B2: Hiển thị các giá trị này ra thẻ div và ép kiểu sang number 
    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    let show = document.getElementById("show-after");
    show.style.display = "block";

    // B3: Thuật toán + xuất kết quả 

    if  (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
       if (day === 1 && month === 3) {
        day--;
        if (day === 0) {
            day = 29;
            month--;
            show.innerHTML = day + " / " + month + " / " + year;
        }
       } else {
        day--;
        show.innerHTML = day + " / " + month + " / " + year;
       }
    } else if (day === 1 && month === 5 || day === 1 && month === 7 || day === 1 && month === 10 || day === 1 && month === 12) { 
        day--;
        if (day === 0 ) {
            day = 30;
            month--;
            show.innerHTML = day + " / " + month + " / " + year;
        }
    } else if (day === 1  && month === 3 ) {
        day--;
        if (day === 0) {
            day = 28;
            month--;
            show.innerHTML = day + " / " + month + " / " + year;
        }  
    } else if (day === 1 && month === 2 || day === 1 && month === 4 || day === 1 && month === 6 || day === 1 && month === 8 || day === 1 && month === 9 || day === 1 && month === 11 ) {
        day--;
        if (day === 0 ) {
            day = 31;
            month--;
            show.innerHTML = day + " / " + month + " / " + year;
        }
       
    } else if (day === 1 && month === 1 ) {
        day = 31;
        month--;
        if (month === 0) {
            month = 12;
            year--;
            show.innerHTML = day + " / " + month + " / " + year;
        }
    } else { 
        day--;
        show.innerHTML = day + " / " + month + " / " + year;
    }

}

// tính NGÀY MAI 

let button2 = document.getElementById("buttonTomorrow").onclick = function() {

    let day = document.getElementById("num1").value;
    let month = document.getElementById("num2").value;
    let year = document.getElementById("num3").value;

    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    let show2 = document.getElementById("show-after");
    show2.style.display = "block";

    if  (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
       if (day === 29 && month === 2) {
        day++;
        if (day === 30) {
            day = 1;
            month++;
            show2.innerHTML = day + " / " + month + " / " + year;
        }
       }  else {
        day++;
        show2.innerHTML = day + " / " + month + " / " + year;
       }
    } else if ( day === 31 && month === 3 || day === 31 && month === 5 || day === 31 && month === 7 || day === 31 && month === 8 || day === 31 && month === 10 || day === 31 && month === 1) {
        day++;
        if ( day > 31 ) {
            day = 1;
            month++;
            show2.innerHTML = day + " / " + month + " / " + year;
        }
    } else if ( day === 31 && month === 12 ) {
        day++;
        if ( day > 31 ) {
            day = 1;
            month++;
            if ( month === 13) {
                month = 1;
                year++;
            }
            show2.innerHTML = day + " / " + month + " / " + year;
        }
    } else if ( day === 30 && month === 4 || day === 30 && month === 6 || day === 30 && month === 9 || day === 30 && month === 11) {
        day++;
        if ( day <= 31 ) {
            day = 1;
            month++;
            show2.innerHTML = day + " / " + month + " / " + year;
        }
    } else if ( day === 28 && month === 2) {
        day++;
        if ( day === 29) {
            day = 1;
            month++;
            show2.innerHTML = day + " / " + month + " / " + year;
        }
    } else {
        day++;
        show2.innerHTML = day + " / " + month + " / " + year;
    }
}

// BÀI 2 

let buttonB2 = document.getElementById("button-b2").onclick = function() {
    // B1 : Lấy giá trị các input 
    let month = document.getElementById("num1-b2").value;
    let year = document.getElementById("num2-b2").value;
    // B2: Hiển thị các giá trị này ra thẻ div và ép kiểu sang number 
    month = parseInt(month);
    year = parseInt(year);

    let showB2 = document.getElementById("show-b2");
    showB2.style.display = "block";

    // B3: Thuật toán + xuất kết quả 

    if  (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
       if (month === 2) {
        showB2.innerHTML = "Tháng" + " " +  month + "  " + "Năm" + "  " + year + " Có 29 Ngày ";
       }     
    } else {
        if (month === 2) {
            showB2.innerHTML = "Tháng" + " " +  month + "  " + "Năm" + "  " + year + " Có 28 Ngày ";
           }
    }

    if ( month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        showB2.innerHTML = "Tháng" + " " +  month + "  " + "Năm" + "  " + year + " Có 31 Ngày ";        
    } else if (month === 4 || month === 6 || month === 9 || month === 11 ) {
        showB2.innerHTML = "Tháng" + " " +  month + "  " + "Năm" + "  " + year + " Có 30 Ngày ";   
    }

    if ( month < 1 || month > 12 ) {
        alert("Sai Dữ liệu");
    }
}



// bài 3 
let buttonB3 = document.getElementById("button-b3").onclick = function () {

    let so = +document.getElementById("num1-b3").value;

    let showSo = document.getElementById("show-b3");
    showSo.style.display = "block";

    if ( so < 100 || so > 999 ) {
        alert(" Không đúng");
    } else { 
        let donVi = so % 10;
        so /= 10 ;
        so = Math.floor(so);    
        let chuC = so % 10;
        chuC = Math.floor(chuC);
        let tram = so / 10 ;
        tram = Math.floor(tram);
            if ( tram === 1) {
            showSoHangTram = " Một Trăm ";
        } else if ( tram === 2) {
            showSoHangTram = " Hai Trăm ";
        } else if ( tram === 3) {
            showSoHangTram = " Ba Trăm ";
        } else if ( tram === 4) {
            showSoHangTram = " Bốn Trăm ";
        } else if ( tram === 5) {
            showSoHangTram = " Năm Trăm ";
        } else if ( tram === 6) {
            showSoHangTram = " Sáu Trăm ";
        } else if ( tram === 7) {
            showSoHangTram = " Bảy Trăm ";
        } else if ( tram === 8) {
            showSoHangTram = " Tám Trăm ";
        } else if ( tram === 9) {
            showSoHangTram = " Chín Trăm ";
        } 

         if ( chuC === 0) {
            showSoHangChuc = " Lẻ ";
        } else if ( chuC === 1) {
            showSoHangChuc = " mười ";
        } else if ( chuC === 2) { 
            showSoHangChuc = " hai mươi ";
        }
        else if ( chuC === 3) { 
            showSoHangChuc = " Ba mươi ";
        }
        else if ( chuC === 4) { 
            showSoHangChuc = " Bốn mươi ";
        }
        else if ( chuC === 5) { 
            showSoHangChuc = " Năm mươi ";
        }
        else if ( chuC === 6) { 
            showSoHangChuc = " Sáu mươi ";
        }
        else if ( chuC === 7) { 
            showSoHangChuc = " Bảy mươi ";
        }
        else if ( chuC === 8) { 
            showSoHangChuc = " Tám mươi ";
        }
        else if ( chuC === 9) { 
            showSoHangChuc = " Chín mươi ";
        } 

        if ( donVi === 1) {
            showSoHangDonVi = " Một ";
        } else if ( donVi === 2 ) {
            showSoHangDonVi = " Hai ";
        } else if ( donVi === 3 ) {
            showSoHangDonVi = " Ba ";
        } else if ( donVi === 4 ) {
            showSoHangDonVi = " Bốn ";
        } else if ( donVi === 5 ) {
            showSoHangDonVi = " Năm ";
        } else if ( donVi === 6 ) {
            showSoHangDonVi = " Sáu ";
        } else if ( donVi === 7 ) {
            showSoHangDonVi = " Bảy ";
        } else if ( donVi === 8 ) {
            showSoHangDonVi = " Tám ";
        } else if ( donVi === 9 ) {
            showSoHangDonVi = " Chín ";
        }
        const kq = showSoHangTram + " " + showSoHangChuc+ " " + showSoHangDonVi;
        showSo.innerHTML = kq;
    }

}

// Bài 4: 



























