// =========================================================================
// KHỐI DỮ LIỆU: 2D11 - Đúng sai
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai2D11 = [
  {
    "id": "2D112DS1",
    "question": "Cho hàm số $y=f(x)=ax^3+bx^2+cx+d$ có đồ thì như hình vẽ dưới đây  <br><img src=\"data/12/2D1/im2D11/loc8_TT_THPT_AnDuong__007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$2a+3b+c=9$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực tiểu tại $x=1$",
        "answer": false
      },
      {
        "text": "Tổng giá trị lớn nhất, giá trị nhỏ nhất của hàm số trên $[-1;0]$ bằng $3$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(-\\infty;-1)$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Đồ thị hàm số đi qua ba điểm $(-2;1)$, $(-1;2)$, $(0;1)$ và đạt cực trị tại $x=1$ nên ta có hệ phương trình sau  \\[-8a+4b-2c+d=1 \\text{ và } -a+b-c+d=2 \\text{ và } d=1 \\text{ và } c=0\\Leftrightarrow a=1 \\text{ và } b=2 \\text{ và } c=0 \\text{ và } d=1\\]  Vậy $2a+3b+c=8$.<br>- <strong>Sai</strong>.<br>  Dựa vào đồ thị hàm số, ta thấy hàm số đạt cực tiểu tại $x=0$.<br>- <strong>Đúng</strong>.<br>  Dựa vào đồ thị hàm số, ta thấy  <br>- Giá trị lớn nhất của hàm số trên đoạn $[-1;0]$ là $2$.<br>- Giá trị nhỏ nhất của hàm số trên đoạn $[-1;0]$ là $1$.  Vậy tổng giá trị lớn nhất, giá trị nhỏ nhất của hàm số trên đoạn $[-1;0]$ bằng $2+1=3$.<br>- <strong>Sai</strong>.<br>  Dựa vào đồ thị hàm số, ta thấy hàm số đồng biến trên khoảng $(-\\infty;a)$ với $a\\in(-2;-1)$."
  },
  {
    "id": "2D117DS2",
    "question": "Số dân của một thị trấn sau $t$ năm kể từ năm $1\\,970$ được ước tính bởi công thức $f(t) = \\dfrac{26t+10}{t+5}$ ($f(t)$ được tính bằng nghìn người).",
    "subQuestions": [
      {
        "text": "Số dân của thị trấn vào đầu năm $1\\,980$ là $18$ nghìn người",
        "answer": true
      },
      {
        "text": "Số dân của thị trấn vào đầu năm $1\\,995$ là $23$ nghìn người",
        "answer": false
      },
      {
        "text": "Xem $f$ là một hàm số xác định trên nửa khoảng $[0, +\\infty)$. Khi đó hàm số đồng biến trên $[0, +\\infty)$",
        "answer": true
      },
      {
        "text": "Đạo hàm của hàm số $f$ biểu thị tốc độ tăng dân số của thị trấn (tính bằng nghìn~người/năm). Vào năm $1\\,998$ thì tốc độ tăng dân số là $0{,}125$ nghìn người/năm",
        "answer": false
      }
    ],
    "explain": "<br>- Do thời gian $t$ tính từ năm $1\\,970$.<br>  Năm $1980$ ứng với $t = 1\\,980 - 1\\,970 = 10$ (năm).<br>  Ta có $f(10) = \\dfrac{26 \\cdot 10 + 10}{10 + 5} = 18$.<br>  Vậy số dân vào đầu năm $1\\,980$ là $18$ (nghìn người).<br>- Năm $1995$ ứng với $t = 1\\,995 - 1\\,970 = 25$ (năm).<br>  Khi đó $f(25) = \\dfrac{26 \\cdot 25 + 10}{25 + 5} = 22$.<br>  Vậy số dân vào đầu năm $1\\,995$ là $22$ (nghìn người.)<br>- Xét hàm số $f(t) = \\dfrac{26t+10}{t+5}$ trên nửa khoảng $[0;+\\infty)$.<br>  Ta có $f'(t) = \\dfrac{120}{(t+5)^2} &gt; 0$, với mọi $t \\in [0, +\\infty)$.<br>  Vậy hàm số $f(t)$ đồng biến trên $[0, +\\infty)$.<br>- Năm $1\\,998$ ứng với $t = 1\\,998 - 1\\,970 = 28$ (năm).<br>  Vậy tốc độ tăng dân số vào năm $1\\,998$ là $f'(28) = \\dfrac{120}{(28+5)^2} \\approx 0{,}11$ (nghìn người/năm)."
  }
];
