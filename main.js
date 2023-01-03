/*----
getElementById()	        trả về phần tử có giá trị id đã cho.
getElementsByName()	      trả về tất cả các phần tử có giá trị name đã cho.
getElementsByTagName()	  trả về tất cả các phần tử có tên thẻ đã cho.
getElementsByClassName()	trả về tất cả các phần tử có class đã cho.
----*/

function createTask() {
    let inputValue = document.getElementById("txt").value; //lấy ra giá trị input
    let li = document.createElement("li"); // tạo thẻ li
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
    span.addEventListener('click', deleteTask); // thêm sk vào nút xóa
    
  }

  function deleteTask(){

    let close = document.getElementsByClassName("close"); // lấy tất cả El có class là Close
    
    for (let i = 0; i < close.length; i++) { // lặp qua các button để lấy chính xác thằng đc click
      var parent = this.parentElement;  // chỏ tới thằng cha (li)
      parent.remove();
    }
    
  }
