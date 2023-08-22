/*//var dùng để khai báo biến
var fullName = 'Nguyen Duc Tam'
var age=22;
//alert dùng để in ra thông báo
alert(fullName);
alert(age);
//giới thiêuk về một số hàm built-in
//1. alert: dùng để in ra 
//2. console: in ra các dòng thông báo
console.log(fullName)
//3. confirm: là sự kếta hợp của cả 1 và 2
confirm('Xac Nhan Ban Da du tuoi')
//4. prompt: dùng để tương tác với người dùng như nhâp vào những yêu cầu mà người làm tạo ra
prompt('Ban da du 18 tuoi')
//5. set timeout: chạy một đoạn code trong một khoảng thời gian nào đó(giá trị time được tính là mini giây(ms))
setTimeout(function() {
alert('Thong Bao')
},1000)
//6. set interval: thực thi liên tục các thông báo trong 1 khoảng time
/**setInterval(function(){
alert('đã có lỗi sảy ra')
},1000)
*/



function send(){
    var arr = document.getElementsByTagName('input');
    var name = arr[0].value;
    var age = arr[1].value;
    var check1 = arr[2].checked;
    var check1 = arr[5].checked;
    var check3 = arr[7].checked;
    var g
    if(name == "" || age == "" || address == ""){
        alert("please fill all fields");
        return;
    }
    if(isNaN(age)){
        alert("age must be a number")
        return;
    }
    if()
    
} 