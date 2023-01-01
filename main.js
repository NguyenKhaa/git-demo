/*----
getElementById()	        trả về phần tử có giá trị id đã cho.
getElementsByName()	      trả về tất cả các phần tử có giá trị name đã cho.
getElementsByTagName()	  trả về tất cả các phần tử có tên thẻ đã cho.
getElementsByClassName()	trả về tất cả các phần tử có class đã cho.
----*/


function newElement() {
    let li = document.createElement("li"); // tạo thẻ li
    let inputValue = document.getElementById("txt").value; //lấy ra giá trị input
    let t = document.createTextNode(inputValue);    //tạo ra 1 textnode để lưu gt input
    li.appendChild(t); // nối textnode vào bên trong thẻ li
    if (inputValue === '') {
      alert("Vui lòng nhập nội dung");
    } else {
      document.getElementById("todo").appendChild(li); // chỏ tới todo --> thêm thẻ li vào
    }
    document.getElementById("txt").value = ""; 

  //--tạo ra icon thùng rác--
    let span = document.createElement("span"); //tạo ra 1 span
    let i = document.createElement("i"); //tạo ra 1 thher i
    i.className = ('far fa-trash-alt'); // thêm 1 className cho i
    span.className = "close"; // thêm class cho span
    span.appendChild(i); // nối i vào span
    li.appendChild(span); //nối span vào li
  
    //dele
    let close = document.getElementsByClassName("close"); // lấy tất cả El có class là Close
    
    for (let i = 0; i < close.length; i++) { // khởi tạo i =0; điều kiện để chạy;  length: độ dài mảng
      close[i].onclick = function() { // bắt được i nào được click vào thì chạy hàm dưới
        var M = this.parentElement; //tạo ra 1 biến --> chỏ tới thằng cha của i 
        M.style.display = "none";
      }
    }
  }
