// =========================================================================
// KHỐI DỮ LIỆU: 1D62 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1D62 = [
  {
    "id": "1D624DS1",
    "question": "Anh Nam hiện có $4$ tỷ đồng và mong muốn mua một ngôi nhà trị giá $5$ tỷ đồng. Do chưa có đủ tiền nên anh quyết định mở hai tài khoản tiết kiệm tại ngân hàng như sau<br>   <strong>Tài khoản $1$:</strong> Anh gửi toàn bộ $4$ tỷ đồng với lãi suất $7{,}5\\%$/năm theo thể thức lãi kép, kì hạn $12$ tháng.<br>   <strong>Tài khoản $2$:</strong> Vào cuối mỗi tháng, anh Nam gửi $20$ triệu đồng vào tài khoản này với lãi suất $6\\%$/năm theo thể thức lãi kép, kì hạn $1$ tháng.",
    "subQuestions": [
      {
        "text": "Sau năm đầu tiên, số tiền anh Nam có trong <strong>tài khoản $1$</strong> là $4{,}3$ tỷ đồng",
        "answer": true
      },
      {
        "text": "Sau $4$ năm, tổng số tiền trong <strong>tài khoản $1$</strong> của anh Nam sẽ lớn hơn $5$ tỷ đồng",
        "answer": true
      },
      {
        "text": "Giá bất động sản tăng trung bình $9\\%$ mỗi năm. Sau $4$ năm, giá ngôi nhà anh Nam muốn mua là $7{,}2$ tỷ đồng <em>(làm tròn kết quả đến hàng phần mười)</em>",
        "answer": false
      },
      {
        "text": "Sau $4$ năm, tổng số tiền gửi trong cả hai tài khoản tiết kiệm của anh Nam đủ để mua nhà mà không phải vay ngân hàng",
        "answer": false
      }
    ],
    "explain": "<br>- Sau năm đầu tiên, số tiền anh Nam có trong <strong>tài khoản $1$</strong> là  \\[4\\cdot \\left(1+7{,}5\\%\\right)^1=4{,}3 \\text{ tỷ đồng}.\\]<br>- Sau $4$ năm, tổng số tiền trong <strong>tài khoản $1$</strong> của anh Nam là   \\[4\\cdot \\left(1+7{,}5\\%\\right)^4\\approx 5{,}3\\text{ tỷ đồng}&gt;5\\text{ tỷ đồng}.\\]<br>- Sau $4$ năm, giá ngôi nhà anh Nam muốn mua là   \\[5\\cdot \\left(1+9\\%\\right)^4\\approx 7{,}1 \\text{ tỷ đồng}.\\]<br>- Sau $4$ năm, số tiền anh Nam có trong <strong>tài khoản $2$</strong> là<br>   \\[0{,}02\\cdot \\dfrac{\\left(1+\\dfrac{6}{12}\\%\\right)^{4\\cdot12}-1}{\\dfrac{6}{12}\\%}\\cdot (1+\\dfrac{6}{12}\\%)\\approx 1{,}1 \\text{ tỷ đồng}.\\]   Sau $4$ năm, tổng số tiền gửi trong cả hai tài khoản tiết kiệm của anh Nam là   \\[5{,}3+1{,}1=6{,}4&lt;7{,}1.\\]   Vậy anh Nam không đủ tiền để mua nhà mà không phải vay ngân hàng."
  },
  {
    "id": "1D622DS2",
    "question": "Cho $x$, $y$ là $2$ số dương; $m$, $n$ là hai số thực tùy ý",
    "subQuestions": [
      {
        "text": "$(x^m)^n=(x^n)^m$",
        "answer": true
      },
      {
        "text": "$x^{2m}=(x^m)^2$",
        "answer": true
      },
      {
        "text": "$\\log_5 25x=5+\\log_5 x$",
        "answer": false
      },
      {
        "text": "$\\log _{\\sqrt{3}} x+\\log _{\\frac{1}{3}}\\left(3x^3 y\\right)+\\log_9(3y^3)=1$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Ta có $(x^m)^n=x^{mn}=(x^n)^m$.<br>- <strong>Đúng</strong>.<br>  Ta có $x^{2m}=(x^m)^2$.<br>- <strong>Sai</strong>.<br>  Ta có $\\log_5 25x=\\log_{5}5^2+\\log_5 x=2+\\log_5 x$.<br>- <strong>Sai</strong>.<br>  $\\log _{\\sqrt{3}} x+\\log _{\\frac{1}{3}}\\left(3x^3 y\\right)+\\log_9(3y^3) = \\log _{3^{\\frac{1}{2}}} x+\\log _{3^{-1}}\\left(3x^3 y\\right)+\\log_{3^2}(3y^3)$<br>$= 2\\cdot \\log _{3} x-1\\cdot\\log_{3}\\left(3x^3 y\\right)+\\dfrac{1}{2}\\cdot \\log_{3}(3y^3)$<br>$= 2\\log _{3} x-\\left(1+3\\log_{3}x+\\log_{3}y\\right)+\\dfrac{1}{2}\\cdot \\left(1+3\\log_{3}y\\right)$<br>$= -\\log _{3} x+\\dfrac{1}{2}\\log_{3}y-\\dfrac{1}{2}.$"
  }
];
