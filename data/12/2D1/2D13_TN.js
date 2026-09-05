// =========================================================================
// KHỐI DỮ LIỆU: 2D13 - Trắc nghiệm
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem2D13 = [
  {
    "id": "2D131TN1",
    "question": "Cho hàm số $y = f (x)$ liên tục trên $\\mathbb{R}$ và có đạo hàm $f'(x) = (2x-1)(x+1)(x^2 -1)$. Hàm số $y = f(x)$ có giá trị lớn nhất trên $[-2;1]$ bằng",
    "options": [
      "$f(-2)$",
      "$f(-1)$",
      "$f\\left(\\dfrac{1}{2}\\right)$",
      "$f(1)$"
    ],
    "answer": 2,
    "explain": "Ta có $f'(x) = (2x-1)(x+1)(x^2 -1)$. Cho $f'(x)=0\\Leftrightarrow x=\\dfrac{1}{2} \\text{ hoặc } x=-1 \\text{ hoặc } x=1.$<br>  Vì $x\\in[-2;1]$ nên nhận $x=\\dfrac{1}{2}$, $x=1$, $x=-1$ (nghiệm kép).<br>  Bảng biên thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy hàm số $y = f(x)$ có giá trị lớn nhất trên $[-2;1]$ bằng $f\\left(\\dfrac{1}{2}\\right)$."
  },
  {
    "id": "2D136TN2",
    "question": "Lợi nhuận một xưởng thu được từ việc sản xuất một mặt hàng được cho bởi công thức  $P(x) = -x^3 +24x^2 +780x-1\\,000$ (nghìn đồng) trong đó $x$ (tạ) là khối lượng sản phẩm sản  xuất được. Xưởng chỉ sản xuất tối đa $40$ tạ sản phẩm trong một tuần. Hỏi để có lợi nhuận lớn  nhất thì xưởng cần sản xuất bao nhiêu tạ sản phẩm trong một tuần?",
    "options": [
      "$40$",
      "$26$",
      "$17\\,928$",
      "$4\\,600$"
    ],
    "answer": 1,
    "explain": "Ta có $P'(x) = -3x^2+48x+780$. Giải $P'(x)=0\\Leftrightarrow x=26 \\text{ hoặc } x=-10.$<br>  Vì $x \\in [0;40]$ nên ta xét các giá trị $x=0, x=26, x=40$. <br>  $P(0) = -1\\,000$. <br>  $P(26) = -26^3+24.26^2+780\\cdot26-1\\,000 = 17\\,928$. <br>  $P(40) = -40^3+24.40^2+780\\cdot40-1\\,000 = 4\\,600$. <br>  Vậy giá trị lớn nhất là $P(26) = 17\\,928$. Vậy xưởng cần sản xuất 26 tạ sản phẩm. <br>"
  },
  {
    "id": "2D131TN3",
    "question": "Giá trị lớn nhất của hàm số $f(x)=\\dfrac{\\ln x}{x}$ trên đoạn $[1;\\mathrm{e}^2]$ bằng",
    "options": [
      "$\\mathrm{e}^{-1}$",
      "$1$",
      "$2\\mathrm{e}^{-2}$",
      "$\\mathrm{e}$"
    ],
    "answer": 2,
    "explain": "Ta có $f'(x)=\\dfrac{1-\\ln x}{x^2}=0\\Leftrightarrow 1-\\ln x=0\\Leftrightarrow x=\\mathrm{e}$.<br>  Khi đó $f(1)=0$, $f\\left(\\mathrm{e}\\right)=\\dfrac{1}{\\mathrm{e}}$, $f(\\mathrm{e}^2)=\\dfrac{2}{\\mathrm{e}^2}=2\\mathrm{e}^{-2}$.<br>  Do đó $\\max\\limits_{\\left[1;\\mathrm{e}^2\\right]} f(x)=\\dfrac{1}{\\mathrm{e}}=\\mathrm{e}^{-1}$."
  },
  {
    "id": "2D131TN4",
    "question": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[-2;2]$ và có đồ thị là đường cong như trong hình vẽ. Gọi $M$, $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn $[-2;1]$. Giá trị của $M$ và $m$ là<br><img src=\"data/12/2D1/im2D1/2D13_tikz_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$M=4; m=-4$",
      "$M=2; m=-2$",
      "$M=2; m=-2$",
      "$M=2; m=-4$"
    ],
    "answer": 3,
    "explain": "Từ đồ thị hàm số trên $[-2;1]$ ta có  <br>- Giá trị lớn nhất $M=2$ đạt được tại $x=-1$.<br>- Giá trị nhỏ nhất $m=-4$ đạt được tại $x=-2$.  Vậy $M=2$ và $m=-4$."
  },
  {
    "id": "2D131TN5",
    "question": "Cho hàm số $f(x)$ liên tục trên đoạn $[-2 ; 2]$ có đồ thị như hình vẽ. Giá trị lớn nhất của hàm số trên đoạn $[-2 ; 2]$ là<br><img src=\"data/12/2D1/im2D1/2D13_tikz_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$3$",
      "$1$",
      "$-2$",
      "$2$"
    ],
    "answer": 0,
    "explain": "Giá trị lớn nhất của hàm số trên đoạn $[-2 ; 2]$ là $3$."
  },
  {
    "id": "2D131TN6",
    "question": "Cho hàm số $y=f(x)$ liên tục trên đoạn $\\left[-2;2\\right]$ và có đồ thị như hình bên. Gọi $M$, $m$ lần lượt là giá trị lớn nhất, giá trị nhỏ nhất của hàm số đã đoạn $[-2;2]$ . Giá trị của $M-m$ bằng<br><img src=\"data/12/2D1/im2D1/2D13_tikz_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$1$",
      "$-3$",
      "$-4$",
      "$5$"
    ],
    "answer": 3,
    "explain": "Từ đồ thị ta có $ M=\\max\\limits_{[-2;2] } y=1 $ và $ m=\\min\\limits_{ [-2;2]} y= -4$.<br>  Suy ra $ M-m=1-(-4)=5 $."
  },
  {
    "id": "2D131TN7",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Hàm số đã cho đạt giá trị lớn nhất trên khoảng $\\left(-\\infty ;2\\right)$ tại điểm",
    "options": [
      "$x=2$",
      "$x=11$",
      "$x=4$",
      "$x=-1$"
    ],
    "answer": 3,
    "explain": "Dựa vào bảng biến thiên ta thấy hàm số đạt giá trị lớn nhất trên khoảng $\\left(-\\infty ;2\\right)$ tại điểm $x=-1$."
  },
  {
    "id": "2D131TN8",
    "question": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[-1;3]$ và có đồ thị như hình vẽ. Giá trị lớn nhất của hàm số đã cho trên đoạn $[-1;3]$ bằng<br><img src=\"data/12/2D1/im2D1/2D13_tikz_011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$1$",
      "$-2$",
      "$3$",
      "$2$"
    ],
    "answer": 2,
    "explain": "Dựa vào đồ thị hàm số, ta có giá trị lớn nhất của hàm số trên đoạn $[-1;3]$ là $y=3$ đạt được tại điểm $x=3$."
  },
  {
    "id": "2D136TN9",
    "question": "Số dân của một thị trấn sau $t$ năm kể từ năm $2022$ được tính bởi công thức   $f(t)=\\dfrac{26t+10}{t+5}$ ($f(t)$ được tính bằng nghìn người). Trong khoảng thời gian từ năm $2022$ đến năm $2032$ dân số của thị trấn đạt giá trị lớn nhất bằng bao nhiêu?",
    "options": [
      "$18$ nghìn người",
      "$2$ nghìn người",
      "$6$ nghìn người",
      "$18{,}5$ nghìn người"
    ],
    "answer": 0,
    "explain": "Ta có $2032-2022=10 \\Leftrightarrow t \\in [0;10]$, $f'(t)=\\dfrac{120}{(t+5)^2} &gt;0$, $\\forall t \\in (0;10)$.<br>  Do đó dân số của thị trấn đạt giá trị lớn nhất trong khoảng thời gian từ năm $2022$ đến năm $2032$ bằng $f(10)=18$ nghìn người."
  },
  {
    "id": "2D131TN10",
    "question": "Hàm số nào sau đây tồn tại giá trị lớn nhất và giá trị nhỏ nhất trên tập xác định?",
    "options": [
      "$y=\\dfrac{2 x^2+5 x+1}{2 x-2}$",
      "$y=\\sqrt{4-x^2}$",
      "$y=x^3-2 x^2+5 x+1$",
      "$y=\\dfrac{5 x+1}{3-x}$"
    ],
    "answer": 1,
    "explain": "Xét hàm số $y=\\sqrt{4-x^2}$.<br>  Tập xác định $\\mathscr{D}=\\left[-2;2\\right]$.<br>  Đạo hàm $y'=\\dfrac{-x}{\\sqrt{4-x^{2}}}$; $y'=0 \\Leftrightarrow x=0 \\in \\left[-2;2\\right]$.<br>  Ta có $y(2)=y(-2)=0$; $y(0)=2$.<br>  Vậy giá trị lớn nhất của hàm số đã cho bằng $2$ và giá trị nhỏ nhất bằng $0$."
  },
  {
    "id": "2D131TN11",
    "question": "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và có bảng biến thiên như hình bên dưới  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_015.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Giá trị nhỏ nhất của hàm số bằng",
    "options": [
      "$-7$",
      "$9$",
      "$-9$",
      "$7$"
    ],
    "answer": 0,
    "explain": "Dựa vào bảng biến thiên của hàm số, giá trị nhỏ nhất của hàm số là $-7$, đạt được tại $x=-2$ hoặc $x=2$."
  },
  {
    "id": "2D131TN12",
    "question": "Trên đoạn $[0;3]$, hàm số $y=-x^3+3x$ đạt giá trị lớn nhất tại điểm",
    "options": [
      "$x=1$",
      "$x=2$",
      "$x=0$",
      "$x=3$"
    ],
    "answer": 0,
    "explain": "Hàm số $y=-x^3+3x$ có đạo hàm $y'=-3x^2+3$.<br>  Cho $y'=0$ ta được $-3x^2+3=0\\Leftrightarrow x=1\\in[0;3]$; $x=-1\\notin[0;3]$.<br>  Khi đó $f(0)=0$; $f(1)=2$; $f(3)=-18$.<br>  Vậy hàm số đạt giá trị lớn nhất bằng $2$ tại $x=1$."
  },
  {
    "id": "2D131TN13",
    "question": "Quan sát hình và chọn khẳng định đúng.  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_016.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Giá trị nhỏ nhất của hàm số $y=f(x)$ trên đoạn $[0;4]$ trong hình là",
    "options": [
      "$-2$",
      "$0$",
      "$-1$",
      "$1$"
    ],
    "answer": 2,
    "explain": "Dựa vào đồ thị ta có $\\min\\limits_{x \\in [0;4]} f(x) = f(3) = -1$."
  },
  {
    "id": "2D131TN14",
    "question": "Cho hàm số $y=x^3-12x+6$. Giá trị lớn nhất của hàm số trên đoạn $[-3;3]$ là",
    "options": [
      "$17$",
      "$6$",
      "$15$",
      "$22$"
    ],
    "answer": 3,
    "explain": "Đặt $f(x)=x^3-12x+6$, ta có $y'=3x^2-12$.<br>  $y'=0 \\Leftrightarrow 3x^2-12=0 \\Leftrightarrow x=-2 \\text{ hoặc } x=2$.<br>  Ta có $f(-3)=15$, $f(-2)=22$, $f(2) =-10$, $f(3)=-3$ nên $\\max\\limits_{x \\in [-3;3]} f(x)=f(-2)=22$."
  },
  {
    "id": "2D131TN15",
    "question": "Cho hàm số $y=f(x)$ có đồ thị như hình bên. Giá trị lớn nhất của hàm số trên đoạn $[0; 2]$ là<br><img src=\"data/12/2D1/im2D1/2D13_tikz_020.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$2$",
      "$0$",
      "$1$",
      "$3$"
    ],
    "answer": 3,
    "explain": "Từ đồ thị hàm số, ta thấy trên đoạn $\\left[0;2\\right]$ hàm số có giá trị lớn nhất là $3$."
  },
  {
    "id": "2D131TN16",
    "question": "Giá trị nhỏ nhất của hàm số $y=x^4-2x^2-1$ trên đoạn $\\left[0;2\\right]$ bằng",
    "options": [
      "$7$",
      "$1$",
      "$-1$",
      "$-2$"
    ],
    "answer": 3,
    "explain": "Ta có: $y'=4x(x^2-1)$.<br>  $y'=0\\Leftrightarrow x=0 \\text{ hoặc } x=-1 \\text{ hoặc } x=1$.<br>  $y(0)=-1$;\\qquad $y(2)=7$;\\qquad$y(1)=-2$.<br>  Vậy $\\min\\limits_{x\\in\\mathscr [0;2]}y=-2$."
  },
  {
    "id": "2D131TN17",
    "question": "Cho hàm số $y = f(x)$ liên tục và đồng biến trên $[1;2]$. Khẳng định nào sau đây đúng.",
    "options": [
      "Giá trị lớn nhất của hàm số là $f(2)$",
      "Hàm số không có giá trị lớn nhất và nhỏ nhất trên $[1;2]$",
      "Hàm số đạt giá trị nhỏ nhất trên $[1;2]$ tại $x=1$",
      "Hàm số có giá trị nhỏ nhất nhưng không có giá trị lớn nhất trên $[1;2]$"
    ],
    "answer": 2,
    "explain": "Do hàm số $y=f(x)$ liên tục và đồng biến trên đoạn $[1;2]$, nên giá trị nhỏ nhất của hàm số là $f(1)$, tức là hàm số đạt giá trị nhỏ nhất trên $[1;2]$ tại $x=1$."
  },
  {
    "id": "2D131TN18",
    "question": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[1;5]$ và có đồ thị như hình vẽ bên.  Trên đoạn $[1;5]$ hàm số đã cho có giá trị lớn nhất tại điểm<br><img src=\"data/12/2D1/im2D1/2D13_tikz_028.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$x=1$",
      "$x=5$",
      "$x=2$",
      "$x=4$"
    ],
    "answer": 2,
    "explain": "Trên đoạn $[1;5]$ hàm số đã cho có giá trị lớn nhất là $4$ tại điểm $x=2$."
  },
  {
    "id": "2D131TN19",
    "question": "Cho hàm số $y=\\dfrac{x-1}{2x+1}$. Gọi giá trị lớn nhất và nhỏ nhất của hàm số trên đoạn $[0;2]$ lần lượt là $M$ và $m$. Giá trị của tổng $M+m$ bằng",
    "options": [
      "$\\dfrac15$",
      "$-\\dfrac15$",
      "$-\\dfrac45$",
      "$-1$"
    ],
    "answer": 2,
    "explain": "Ta có đạo hàm $y'=\\dfrac{(2x+1)-2(x-1)}{(2x+1)^2}=\\dfrac{3}{(2x+1)^2}$.<br>  Suy ra $y'&gt;0, \\forall x \\in (0;2)$.<br>  Ta có $y(0)=-1$, $y(2)=\\dfrac{1}{5}$.<br>  Suy ra giá trị nhỏ nhất của hàm số là $m=-1$ và giá trị lớn nhất của hàm số là $M=\\dfrac{1}{5}$.<br>  Vậy $M+m=\\dfrac{1}{5}-1=-\\dfrac{4}{5}$."
  },
  {
    "id": "2D131TN20",
    "question": "Cho hàm số $y=f(x)$ xác định trên đoạn $[-\\sqrt{3};\\sqrt{5}]$ và có bảng biến thiên như hình vẽ.   <br><img src=\"data/12/2D1/im2D1/2D13_tikz_031.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Khẳng định nào sau đây là đúng?",
    "options": [
      "$\\min\\limits_{[-\\sqrt{3};\\sqrt{5}]}y=0$",
      "$\\max\\limits_{[-\\sqrt{3};\\sqrt{5}]}y=2\\sqrt{5}$",
      "$\\min\\limits_{[-\\sqrt{3};\\sqrt{5}]}y=1$",
      "$\\max\\limits_{[-\\sqrt{3};\\sqrt{5}]}y=2$"
    ],
    "answer": 1,
    "explain": "Từ bảng biến thiên, ta thấy hàm số đạt giá trị nhỏ nhất bằng $-2$ tại $x = 1$ và đạt giá trị lớn nhất bằng $2\\sqrt{5}$ tại $x=\\sqrt{5}$."
  },
  {
    "id": "2D131TN21",
    "question": "Cho hàm số $y=f(x)$ xác định và liên tục trên $(-4;4)$ và có bảng biến thiên trên $(-4;4)$ như sau  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_033.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Mệnh đề nào sau đây &lt;strong&gt;đúng&lt;/strong&gt;?",
    "options": [
      "Hàm số không có GTLN, GTNN trên $(-4;4)$",
      "$\\max\\limits_{(-4;4)} y=0$ và $\\max\\limits_{(-4;4)} y=-4$",
      "$\\max\\limits_{(-4;4)} y=10$ và $\\max\\limits_{(-4;4)} y=-10$",
      "$\\max\\limits_{(-4;4)} y=-4$ và $\\max\\limits_{(-4;4)} y=10$"
    ],
    "answer": 0,
    "explain": "Vì hàm số $y=f(x)$ xác định và liên tục trên $(-4;4)$ không nhận giá trị của hàm số tại $4$ và $-4$ nên hàm số không có GTLN, GTNN trên $(-4;4)$."
  },
  {
    "id": "2D131TN22",
    "question": "Giá trị lớn nhất của hàm số $f(x) = x^3 - 3x + 2$ trên đoạn $[-1;3]$ bằng",
    "options": [
      "$4$",
      "$20$",
      "$16$",
      "$2$"
    ],
    "answer": 1,
    "explain": "Tập xác định $D=\\mathbb{R}$.<br>  Ta có $f'(x)=3x^2-3$. Xét $f'(x)=0\\Leftrightarrow 3x^2-3=0\\Leftrightarrow x=1 \\text{ hoặc } x=-1.$<br>  Trên $[-1;3]$, ta xét $f(-1)=4$; $f(1)=0$; $f(3)=20$.<br>  Giá trị lớn nhất của hàm số $f(x) = x^3 - 3x + 2$ trên đoạn $[-1;3]$ bằng $20$ tại $x=3$."
  },
  {
    "id": "2D131TN23",
    "question": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[-1;3]$ và có đồ thị như hình vẽ. Gọi $M$, $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y=f(x)$ trên đoạn $[-1;3]$. Ta có giá trị của $M+2m$ là<br><img src=\"data/12/2D1/im2D1/2D13_tikz_035.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$M+2m=3$",
      "$M+2m=4$",
      "$M+2m=1$",
      "$M+2m=2$"
    ],
    "answer": 3,
    "explain": "Theo đồ thị trên $[-1;3]$, ta có $M=4$, $m=-1$.<br>  Suy ra $M+2m=4+2\\cdot (-1)=2$.<br>"
  },
  {
    "id": "2D131TN24",
    "question": "Cho hàm số $y = f(x)$ xác định và liên tục trên $\\mathbb{R}$ có đồ thị như hình vẽ bên dưới.  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_036.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tìm giá trị nhỏ nhất $m$ và giá trị lớn nhất $M$ của hàm số $y = f(x)$ trên đoạn $[-2; 2]$.",
    "options": [
      "$m = -5$; $M = -1$",
      "$m = -2$; $M = 2$",
      "$m = -1$; $M = 0$",
      "$m = -5$; $M = 0$"
    ],
    "answer": 0,
    "explain": "Dựa vào đồ thị, giá trị nhỏ nhất $m = -5$ và giá trị lớn nhất $M = -1$ trên đoạn $[-2; 2]$."
  },
  {
    "id": "2D132TN25",
    "question": "Cho hàm số $y=f(x)$ có tập xác định $\\mathscr{D}$. Gọi $M$ là giá trị lớn nhất của hàm số $f(x)$ trên $\\mathscr{D}$. Khẳng định nào sau đây đúng?",
    "options": [
      "$f(x) &lt; M;\\; \\forall x\\in \\mathscr{D}$",
      "$f(x)\\le M;\\; \\forall x\\in \\mathscr{D}$",
      "$f(x)\\le M;\\; \\forall x\\in \\mathscr{D}$ và $\\exists x_0 \\in \\mathscr{D}$ để $f(x_0)=M$",
      "$f(x)\\ge M;\\; \\forall x\\in \\mathscr{D}$ và $\\exists x_0 \\in \\mathscr{D}$ để $f(x_0)=M$"
    ],
    "answer": 2,
    "explain": "Nểu $f(x)\\le M;\\; \\forall x\\in \\mathscr{D}$ và $\\exists x_0 \\in \\mathscr{D}$ để $f(x_0)=M$ thì $M$ là giá trị lớn nhất của hàm số $f(x)$ trên $\\mathscr{D}$."
  },
  {
    "id": "2D131TN26",
    "question": "Gọi giá trị nhỏ nhất và giá trị lớn nhất của hàm số $y=\\dfrac{\\ln x}{x}$ trên nửa khoảng $[1;\\mathrm{e}^2)$ lần lượt là $m$ và $M$. Giá trị của biểu thức $\\ln (M+m)$ bằng",
    "options": [
      "$\\mathrm{e}$",
      "$\\mathrm{e}^{-1}$",
      "$1$",
      "$-1$"
    ],
    "answer": 3,
    "explain": "Tập xác định của hàm số là $\\mathscr{D}=(0;+\\infty)$.<br>  Ta có $y^{\\prime}=\\dfrac{1-\\ln x}{x^2}$.<br>  $y^{\\prime}=0 \\Leftrightarrow \\ln x=1 \\Leftrightarrow x=\\mathrm{e}$.<br>  Bảng biến thiên của hàm số đã cho trên nửa khoảng $[1;\\mathrm{e}^2)$ là  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_037.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên suy ra $m=0$ và $M=\\dfrac{1}{\\mathrm{e}}$.<br>  Vậy $\\ln (M+m) = -1$."
  },
  {
    "id": "2D136TN27",
    "question": "Trong một nhà hàng, mỗi tuần để chế biến $x$ phần ăn ($x$ lấy giá trị trong khoảng từ $30$ đến $120$) thì chi phí trung bình của một phần ăn được cho bởi công thức:   \\[  \\overline{C}(x)=2x-235+\\dfrac{7\\,200}{x}.  \\]  Số phần ăn $x$ là bao nhiêu thì chi phí trung bình của mỗi phần ăn là thấp nhất?",
    "options": [
      "$x=40$",
      "$x=50$",
      "$x=60$",
      "$x=70$"
    ],
    "answer": 2,
    "explain": "Áp dụng bất đẳng thức AM-GM ta có  \\[  \\overline{C}(x)=2x+\\dfrac{7200}{x}-235 \\ge 2\\cdot\\sqrt{2x\\cdot\\dfrac{7\\,200}{x}}-235=5.  \\]  Dấu “=”\\ xảy ra khi $2x=\\dfrac{7\\,200}{x}\\Rightarrow x=60$.<br>  Vậy để chi phí trung bình của mỗi phần ăn là thấp nhất thì số phần ăn là $60$."
  },
  {
    "id": "2D131TN28",
    "question": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[-1;3]$ và có đồ thị như hình vẽ bên. Gọi $M,m$ lần lượt là giá trị lớn nhất và nhỏ nhất của hàm số đã cho trên đoạn $[-1;3]$. Giá trị của $M+m$ là<br><img src=\"data/12/2D1/im2D1/2D13_tikz_039.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$-5$",
      "$-2$",
      "$-6$",
      "$2$"
    ],
    "answer": 1,
    "explain": "Dựa vào hình vẽ, ta thấy $M=2$ và $m=-4$.<br>  Vậy $M+m=-2$."
  },
  {
    "id": "2D131TN29",
    "question": "Giá trị lớn nhất của hàm số $y=x^3-3x+2$ trên đoạn $[0;2]$ bằng",
    "options": [
      "$0$",
      "$6$",
      "$4$",
      "$2$"
    ],
    "answer": 2,
    "explain": "Ta có $y'=3x^2-3=0\\Leftrightarrow x=\\pm1$.<br>  Mặt khác $y(0)=2$, $y(2)=4$, $y(1)=0$.<br>  Do đó giá trị lớn nhất của hàm số $y=x^3-3x+2$ trên đoạn $[0;2]$ bằng $4$."
  },
  {
    "id": "2D131TN30",
    "question": "Tìm giá trị lớn nhất $M$ của hàm số $y=\\dfrac{3x-1}{x-3}$ trên đoạn $[0;2]$.",
    "options": [
      "$M=5$",
      "$M=\\dfrac{1}{3}$",
      "$M=-\\dfrac{1}{3}$",
      "$M=-5$"
    ],
    "answer": 1,
    "explain": "Trên đoạn $[0;2]$ ta luôn có $y'=-\\dfrac{8}{(x-3)^2}&lt;0$, $\\forall x\\in(0;2)$.<br>  Vì $y(0)=\\dfrac{1}{3}$, $y(2)=-5$ nên $M= \\max\\limits_{[0;2]}y=y(0)=\\dfrac{1}{3}$."
  },
  {
    "id": "2D131TN31",
    "question": "Cho hàm số $f(x)=x^3-3x^2-9x+35$. Giá trị lớn nhất của hàm số $f(x)$ trên đoạn $[0;5]$ là",
    "options": [
      "$20$",
      "$40$",
      "$35$",
      "$8$"
    ],
    "answer": 1,
    "explain": "Ta có $f'(x)=3x^2-6x-9$.<br> Cho $f'(x)=0 \\Leftrightarrow 3x^2-6x-9=0 \\Leftrightarrow x=3 \\in [0;5] \\text{ hoặc } x=-1 \\notin [0;5].$<br> Ta tính $f(0)=35 \\text{ và } f(3)=8 \\text{ và } f(5)=40 \\Rightarrow \\max\\limits_{[0;5]}f(x)=f(5)=40$.<br> Vậy giá trị lớn nhất của hàm số $f(x)$ trên đoạn $[0;5]$ là $40$."
  },
  {
    "id": "2D131TN32",
    "question": "Giá trị lớn nhất của hàm số $f(x)=x^3+3x-6$ trên đoạn $[1;3]$ là",
    "options": [
      "$30$",
      "$39$",
      "$36$",
      "$10$"
    ],
    "answer": 0,
    "explain": "Ta có $f'(x)=3x^2+3&gt;0,\\,\\forall x \\in [1;3]$.<br>  Hàm số đồng biến trên $[1;3]$ nên $\\max\\limits_{[1;3]}f(x)=f(3)=30$."
  },
  {
    "id": "2D131TN33",
    "question": "Cho hàm số $y=f(x)$ liên tục và có bảng biến thiên trên đoạn $[-3;3]$ như hình.  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_056.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $M$ là giá trị lớn nhất của hàm số $y=f(x)$ trên đoạn $[-3;3]$. Mệnh đề nào dưới đây là mệnh đề đúng?",
    "options": [
      "$M=f(2)$",
      "$M=f(0)$",
      "$M=f(3)$",
      "$M=f(-1)$"
    ],
    "answer": 1,
    "explain": "Giá trị lớn nhất trên đoạn $[-3;3]$ là $M=f(0)=5$."
  },
  {
    "id": "2D136TN34",
    "question": "Một doanh nghiệp sản xuất và bán $x$ chiếc máy xay sinh tố hằng tháng (với $x \\in \\mathbb{N}^*$) thì lợi nhuận thu được (đơn vị: nghìn đồng) được mô tả bởi hàm số $\\mathrm{P}(x)$. Hàm số $\\mathrm{P}(x)$ có bảng biến thiên như sau:  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_059.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Hỏi hằng tháng lợi nhuận lớn nhất mà doanh nghiệp có thể thu được là bao nhiêu?",
    "options": [
      "$100$ triệu đồng",
      "$48$ triệu đồng",
      "$192$ triệu đồng",
      "$29$2 triệu đồng"
    ],
    "answer": 2,
    "explain": "Hằng tháng lợi nhuận lớn nhất mà doanh nghiệp có thể thu được là $192$ triệu đồng."
  },
  {
    "id": "2D131TN35",
    "question": "Cho hàm số $y=f(x)$ liên tục trên $[-2 ; 4]$ và có đồ thị là đường cong như hình bên dưới.  Giá trị nhỏ nhất của hàm số đã cho trên đoạn $[-2; 4]$ là<br><img src=\"data/12/2D1/im2D1/2D13_tikz_060.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$2$",
      "$6$",
      "$-2$",
      "$-3$"
    ],
    "answer": 3,
    "explain": "Giá trị nhỏ nhất của hàm số đã cho trên đoạn $[-2; 4]$ là $-3$."
  },
  {
    "id": "2D131TN36",
    "question": "Cho hàm số $f(x)$ liên tục trên đoạn $[-1;3]$ và có đồ thị như hình vẽ bên. Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và nhỏ nhất của hàm số đã cho trên $[-1;3]$. Giá trị của $M-m$ bằng?<br><img src=\"data/12/2D1/im2D1/2D13_tikz_070.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$1$",
      "$3$",
      "$-4$",
      "$5$"
    ],
    "answer": 3,
    "explain": "Theo đồ thị trên đoạn $[-1;3]$ ta có $M=3$, $m=-2$ suy ra $M-m=3-(-2)=5$ ."
  },
  {
    "id": "2D136TN37",
    "question": "Lợi nhuận trước thuế theo quý của công ty X được cho bởi biểu đồ sau đây. Từ quý I năm $2021$ đến quý III năm $2022$, lợi nhuận trước thuế theo quý của công ty X đạt giá trị lớn nhất bằng bao nhiêu tỷ đồng?  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_071.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$270$",
      "$60$",
      "$205$",
      "$300$"
    ],
    "answer": 2,
    "explain": "Quan sát biểu đồ: các giá trị lần lượt là $150$, $185$, $145$, $205$, $155$, $270$, $60$.<br>  Giá trị lớn nhất trong các số này là $270$.<br>  Vậy lợi nhuận lớn nhất bằng $270$ tỷ đồng."
  },
  {
    "id": "2D131TN38",
    "question": "Cho hàm số $y=f(x)$ xác định trên $\\left[-2; 4\\right]$ có đồ thị như hình vẽ sau. Giá trị lớn nhất hàm số $y=f(x)$ trên đoạn $\\left[-2; 4\\right]$ là<br><img src=\"data/12/2D1/im2D1/2D13_tikz_078.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$3$",
      "$2$",
      "$7$",
      "$-2$"
    ],
    "answer": 2,
    "explain": "Quan sát đồ thị hàm số $y=f(x)$ trên đoạn $\\left[-2; 4\\right]$.<br>  Điểm cao nhất của đồ thị trên đoạn này là điểm có tung độ $y=7$ tại $x=-2$.<br>  Giá trị lớn nhất của hàm số $y=f(x)$ trên đoạn $\\left[-2; 4\\right]$ là $\\displaystyle\\max_{x \\in \\left[-2; 4\\right]} f(x) = 7$."
  },
  {
    "id": "2D131TN39",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên trền $[-5 ; 7)$ như sau  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_079.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Mệnh đề nào đưới đây đúng?",
    "options": [
      "$\\min\\limits_{(-5 ; 7)} f(x)=6$",
      "$\\min\\limits_{(-5 ; 7)} f(x)=2$",
      "$\\max\\limits_{(-5 ; 7)} f(x)=9$",
      "$\\max\\limits_{(-5 ; 7)} f(x)=6$"
    ],
    "answer": 1,
    "explain": "Dựa vào bảng biến thiên, ta có $\\min\\limits_{(-5 ; 7)} f(x)=2$."
  },
  {
    "id": "2D132TN40",
    "question": "Tìm giá trị lớn nhất của hàm số $y=f(x)=\\dfrac{x}{x^2+1}$ trên nửa khoảng $(0;+\\infty)$",
    "options": [
      "$\\dfrac{1}{4}$",
      "$4$",
      "$\\dfrac{1}{2}$",
      "$2$"
    ],
    "answer": 2,
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}$.<br> Ta có $f'(x)=\\dfrac{-x^2+1}{\\left(x^2+1\\right)^2}=0 \\Leftrightarrow -x^2+1=0 \\Leftrightarrow x=1 \\in (0;+\\infty) \\text{ hoặc } x=-1 \\notin (0;+\\infty) $.<br> Ta có bảng biến thiên sau <br><img src=\"data/12/2D1/im2D1/2D13_tikz_080.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"> Do đó, giá trị lớn nhất của hàm số trên nửa khoảng $(0;+\\infty)$ bằng $\\dfrac{1}{2}$ khi $x=1$."
  },
  {
    "id": "2D131TN41",
    "question": "Cho hàm số $f(x)=x^3-3x^2-9x+35$. Giá trị nhỏ nhất của hàm số $f(x)$ trên đoạn $[0;5]$ là",
    "options": [
      "$20$",
      "$40$",
      "$35$",
      "$8$"
    ],
    "answer": 3,
    "explain": "Ta có $f'(x)=3x^2-6x-9$.<br> Cho $f'(x)=0 \\Leftrightarrow 3x^2-6x-9=0 \\Leftrightarrow x=3 \\in [0;5] \\text{ hoặc } x=-1 \\notin [0;5].$<br> Ta tính $f(0)=35 \\text{ và } f(3)=8 \\text{ và } f(5)=40 \\Rightarrow \\min\\limits_{[0;5]}f(x)=f(3)=8$.<br> Vậy giá trị nhỏ nhất của hàm số $f(x)$ trên đoạn $[0;5]$ là $8$."
  },
  {
    "id": "2D131TN42",
    "question": "Cho hàm số $y=f(x)$ có đồ thị như hình bên. Giá trị lớn nhất của $y=f(x)$ trên đoạn $[-3;3]$ đạt được tại<br><img src=\"data/12/2D1/im2D1/2D13_tikz_082.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$x=3$",
      "$x=2$",
      "$x=1$",
      "$x=-1$"
    ],
    "answer": 1,
    "explain": "Giá trị lớn nhất của $y=f(x)$ trên đoạn $[-3;3]$ bằng $3$, đạt được tại các điểm $x=2$."
  },
  {
    "id": "2D131TN43",
    "question": "Giá trị nhỏ nhất của hàm số $y=e^{x^{2}-4x}$ trên đoạn $[0;4]$ bằng",
    "options": [
      "$\\dfrac{1}{e^{2}}$",
      "$\\dfrac{1}{e^{4}}$",
      "$\\dfrac{1}{e}$",
      "$1$"
    ],
    "answer": 1,
    "explain": "Ta có $y'=(2x-4)e^{x^{2}-4x}$, $y'=0\\Leftrightarrow 2x-4=0\\Leftrightarrow x=2\\in [0;4]$.<br>  Tính được $y(0)=1$, $y(2)=e^{-4}=\\dfrac{1}{e^{4}}$, $y(4)=1$.<br>  Do đó giá trị nhỏ nhất của hàm số trên đoạn $[0;4]$ là $\\dfrac{1}{e^{4}}$."
  },
  {
    "id": "2D131TN44",
    "question": "Để hàm số $y=\\dfrac{m^2x+1}{x-1}$ đạt giá trị nhỏ nhất trên đoạn $[-5;-2]$ là $5$ thì tất cả các giá trị thực của  tham số m là",
    "options": [
      "$m=\\pm 3$",
      "$m=\\pm 2$",
      "$m=\\pm 2\\sqrt{2}$",
      "$m=\\pm \\sqrt{2}$"
    ],
    "answer": 2,
    "explain": "Ta có $y'=\\dfrac{-m^2-1}{(x-1)^2}&lt;0,\\forall x\\neq 1 $.<br>  Suy ra hàm số nghịch biến trên $[-5;-2]$.<br>  Suy ra $\\displaystyle\\min_{[-5;-2]}y=y(-2)=\\dfrac{-2m^2+1}{-3}$.<br>  Ta có $\\displaystyle\\min_{[-5;-2]}y=5\\Leftrightarrow \\dfrac{-2m^2+1}{-3}=5\\Leftrightarrow m^2=8\\Leftrightarrow \\pm 2\\sqrt{2}$."
  },
  {
    "id": "2D131TN45",
    "question": "Cho hàm số $f(x)$ có đồ thị trên đoạn $[-3;3]$ như hình vẽ bên dưới.  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_093.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x)$ trên đoạn $[-3;3]$ là",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$-2$"
    ],
    "answer": 0,
    "explain": "Dựa vào hình vẽ, giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên $[-3;3]$ lần lượt là $4$ và $-2$.<br>  Suy ra tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x)$ trên đoạn $[-3;3]$ là $T=4-2=2$."
  },
  {
    "id": "2D131TN46",
    "question": "Giá trị nhỏ nhất của hàm số $y=x^2-2x+3$ trên đoạn $[2;4]$ là",
    "options": [
      "$-1$",
      "$2$",
      "$3$",
      "$1$"
    ],
    "answer": 2,
    "explain": "Ta có $y'=2x-2&gt;0$, $\\forall x\\in[2;4]$.<br>  Suy ra hàm số đồng biến trên $[2;4]$, vậy giá trị nhỏ nhất của hàm số trên đoạn $[2;4]$ là $y(2)=3$."
  },
  {
    "id": "2D131TN47",
    "question": "Hàm số $y=f(x)$ liên tục trên đoạn $[-1;3]$ và có bảng biến thiên như sau:  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_095.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $M$, $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y=f(x)$ trên đoạn $[0;3]$. Tính giá trị $M-m$.",
    "options": [
      "$M-m=4$",
      "$M-m=5$",
      "$M-m=6$",
      "$M-m=3$"
    ],
    "answer": 0,
    "explain": "Từ bảng biến thiên, giá trị lớn nhất của hàm số trên đoạn $[0;3]$ là $M=5$ và giá trị nhỏ nhất của hàm số trên đoạn $[0;3]$ là $m=1$. <br>  Do đó $M-m=5-1=4$."
  },
  {
    "id": "2D131TN48",
    "question": "Cho hàm số $y = f(x)$ liên tục trên đoạn $[-1;3]$ và có đồ thị như hình vẽ. Giá trị lớn nhất của hàm số đã cho trên đoạn $[-1;3]$ bằng  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_096.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$3$",
      "$0$",
      "$2$",
      "$1$"
    ],
    "answer": 0,
    "explain": "Dựa vào đồ thị, giá trị lớn nhất của hàm số đã cho trên đoạn $[-1;3]$ bằng $3$."
  },
  {
    "id": "2D131TN49",
    "question": "Cho hàm số $y=f(x)$ liên tục và có bảng biến thiên trên đoạn $[-1;3]$ như sau. Khẳng định nào sau đây là đúng?  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_099.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$\\max\\limits_{[-1;3]} f(x) = f(0)$",
      "$\\max\\limits_{[-1;3]} f(x) = f(2)$",
      "$\\max\\limits_{[-1;3]} f(x) = f(-1)$",
      "$\\max\\limits_{[-1;3]} f(x) = f(3)$"
    ],
    "answer": 0,
    "explain": "Dựa vào bảng biến biên hàm số $y=f(x)$, ta có  $\\max\\limits_{[-1;3]} f(x) = 5 = f(0)$."
  },
  {
    "id": "2D131TN50",
    "question": "Cho hàm số $y=f(x)$ xác định trên đoạn $\\left[-\\sqrt{3}; \\sqrt{5}\\right]$ và có bảng biến thiên như hình vẽ.  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_101.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Khẳng định nào sau đây là đúng?",
    "options": [
      "$\\min \\limits_{\\left[-\\sqrt{3}; \\sqrt{5}\\right]} y=0$",
      "$\\min \\limits_{\\left[-\\sqrt{3}; \\sqrt{5}\\right]} y=1$",
      "$\\max \\limits_{\\left[-\\sqrt{3}; \\sqrt{5}\\right]} y=2\\sqrt{5}$",
      "$\\max \\limits_{\\left[-\\sqrt{3}; \\sqrt{5}\\right]} y=2$"
    ],
    "answer": 2,
    "explain": "Ta có $\\max \\limits_{\\left[-\\sqrt{3}; \\sqrt{5}\\right]} y=2\\sqrt{5}$."
  },
  {
    "id": "2D131TN51",
    "question": "Giá trị nhỏ nhất của hàm số $f(x)=3x^4-1728x^2+248\\,832$ trên đoan $[-92;100]$ bằng",
    "options": [
      "$0$",
      "$2$",
      "$1$",
      "$3$"
    ],
    "answer": 0,
    "explain": "Hàm số liên tục trên đoạn $[-92;100]$.<br>  Ta có $f'(x)=12x^3-3456x$, $f'(x)=0\\Leftrightarrow x=0 \\text{ hoặc } x=\\pm 12\\sqrt{2}.$<br>  $f(-92)=200\\,540\\,928$; $f(100)=282\\,968\\,832$; $f(0)=248\\,832$; $f(\\pm 12\\sqrt{2})=0$.<br>  Suy ra $\\min\\limits_{[-92;100]}f(x)=f(\\pm 12\\sqrt{2})=0$."
  },
  {
    "id": "2D131TN52",
    "question": "Giá trị lớn nhất của hàm số $y=x^3-3 x^2-9 x+35$ trên đoạn $\\left[-\\dfrac{5}{2}; \\dfrac{1}{3}\\right]$ bằng",
    "options": [
      "$40$",
      "$35$",
      "$8$",
      "$33$"
    ],
    "answer": 0,
    "explain": "Xét hàm số $y=x^3-3 x^2-9 x+35$ với  <br>- Miền xác định $\\mathscr{D} = \\mathbb{R}$.<br>- Đạo hàm $y'=3x^2-6x+9$. Cho $y'=0$, ta được  $  3x^2-6x+9 = 0  \\Leftrightarrow  x=-1 \\in \\left[-\\dfrac{5}{2}; \\dfrac{1}{3}\\right] \\text{ hoặc } x=3 \\not\\in \\left[-\\dfrac{5}{2}; \\dfrac{1}{3}\\right].  $  Ta thấy  $y\\left(-\\dfrac{5}{2}\\right) = \\dfrac{185}{8};$<br>$y\\left(\\dfrac{1}{3}\\right) = \\dfrac{856}{27};$<br>$y\\left(-1\\right) = 40.$  Do đó  $  \\max_{\\left[-\\dfrac{5}{2}; \\dfrac{1}{3}\\right]} y = 40 \\quad \\text{tại} \\quad x=-1.  $"
  },
  {
    "id": "2D136TN53",
    "question": "Một chất điểm chuyển động theo quy luật $s(t)=6t^2-t^3$ (trong đó $t$ tính bằng giây và $s(t)$ tính bằng m). Trong khoảng từ $0$ giây đến $4$ giây vận tốc $v(t)$ của chất điểm đạt giá trị lớn nhất bằng",
    "options": [
      "$12$\\,(m/s)",
      "$24$\\,(m/s)",
      "$2$\\,(m/s)",
      "$6$\\,(m/s)"
    ],
    "answer": 0,
    "explain": "Ta có $v(t)=s'(t)=12t-3t^2$.<br>  Xét hàm số $f(t)=12t-3t^2$ với $0\\le t \\le 4 $.<br>  Ta có $f'(t)=12-6t$.<br> Suy ra $f'(t)=0\\Leftrightarrow t=2\\in [0;4] $.<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_105.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên ta có $\\max\\limits_{t\\in[0;4] } f(t)=f(2)=12$. <br>  Vậy trong khoảng từ $0$ giây đến $4$ giây vận tốc $v(t)$ của chất điểm đạt giá trị lớn nhất bằng $12$\\,(m/s)."
  },
  {
    "id": "2D131TN54",
    "question": "Cho hàm số $f(x)$ liên tục trên $[-1; 5]$ và có đồ thị trên đoạn $[-1; 5]$ như hình vẽ. Tổng giá trị lớn nhất và giả trị nhỏ nhất của hàm số $f(x)$ trên đoạn $[0; 5]$ bằng<br><img src=\"data/12/2D1/im2D1/2D13_tikz_110.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$-1$",
      "$1$",
      "$4$",
      "$2$"
    ],
    "answer": 1,
    "explain": "Dựa vào đồ thị ta thấy giá trị lớn nhất của hàm số bằng $3$ và giá trị nhỏ nhất của hàm số bằng $-2$.<br>  Do đó tổng giá trị lớn nhất và giá trị nhỏ nhất bằng $-2+3=1$."
  },
  {
    "id": "2D131TN55",
    "question": "Cho hàm số $y=f(x)$ đồng biến trên $\\mathbb{R}$.  Giá trị nhỏ nhất của $f(x)$ trên đoạn $[0; 3]$ đạt được tại",
    "options": [
      "$x=1$",
      "$x=3$",
      "$x=0$",
      "$x=2$"
    ],
    "answer": 2,
    "explain": "Vì hàm số đồng biến trên $\\mathbb{R}$ nên nó đồng biến trên $[0; 3]$.<br>  Do đó, giá trị nhỏ nhất đạt được tại $x=0$."
  },
  {
    "id": "2D131TN56",
    "question": "Giá trị nhỏ nhất của hàm số $y = x + \\dfrac{9}{x}$ trên đoạn $[2;4]$ là",
    "options": [
      "$\\min\\limits_{[2;4]} y=6$",
      "$\\min\\limits_{[2;4]} y=\\dfrac{25}{4}$",
      "$\\min\\limits_{[2;4]} y=\\dfrac{13}{2}$",
      "$\\min\\limits_{[2;4]} y = -6$"
    ],
    "answer": 0,
    "explain": "Xét hàm số $ y=x+\\dfrac{9}{x}$ trên đoạn $[2; 4]$.<br>  $y'=1-\\dfrac{9}{{x^2}}$.<br>  $y'=0\\Leftrightarrow {x^2}=9\\Leftrightarrow x=\\pm 3$.<br>  Vì $x\\in [2;4]$ nên $ x=3$.<br>  Ta có  <br>- $y(2)=2+\\dfrac{9}{2}=6{,}5$.<br>- $y(3)=3+\\dfrac{9}{3}=6$.<br>- $y(4)=4+\\dfrac{9}{4}=6{,}25$.  Vậy giá trị nhỏ nhất của hàm số là $6$."
  },
  {
    "id": "2D131TN57",
    "question": "Cho hàm số $y = f(x)$ liên tục trên đoạn $[-3;5]$ và có đồ thị như hình vẽ bên. Giá trị lớn nhất của hàm số $y = f(x)$ trên đoạn $[-3;5]$ bằng<br><img src=\"data/12/2D1/im2D1/2D13_tikz_114.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$3$",
      "$2$",
      "$-3$",
      "$5$"
    ],
    "answer": 0,
    "explain": "Từ đồ thị của hàm số $y = f(x)$ trên đoạn $[-3;5]$ ta thấy:<br>  Giá trị lớn nhất của hàm số $y = f(x)$ trên đoạn $[-3;5]$ bằng $3$ đạt được khi $x=5$."
  },
  {
    "id": "2D131TN58",
    "question": "Hàm số $y=\\sqrt{x^2+4x+5}$ đạt giá trị nhỏ nhất trên đoạn $[-4;4]$ tại điểm",
    "options": [
      "$-2$",
      "$1$",
      "$-4$",
      "$4$"
    ],
    "answer": 0,
    "explain": "Xét trên đoạn $[-4;4]$, ta có \\[y'=\\dfrac{\\left(x^2+4x+5\\right)'}{2\\sqrt{x^2+4x+5}}=\\dfrac{2x+4}{2\\sqrt{x^2+4x+5}}.\\]  Cho $y'=0\\Leftrightarrow 2x+4=0\\Leftrightarrow x=-2\\in [-4;4]$.<br>  Ta tính được $y(-4)=\\sqrt{5}$, $y(-2)=1$, $y(4)=\\sqrt{37}$.<br>  Vậy $\\min\\limits_{[-4;4]} y=1$ tại $x=-2$."
  },
  {
    "id": "2D131TN59",
    "question": "Giá trị nhỏ nhất của hàm số $y=\\dfrac{2x-1}{x+1}$ trên đoạn $[1; 2]$ là",
    "options": [
      "$-1$",
      "$\\dfrac{1}{2}$",
      "$1$",
      "$-\\dfrac{1}{2}$"
    ],
    "answer": 1,
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{-1\\}$.<br>  Ta có $y'=\\dfrac{3}{(x+1)^2}&gt;0,\\forall x\\in [1; 2]$. Suy ra hàm số $y=f(x)$ đồng biến trên $[1;2]$.<br>  Vậy $\\displaystyle\\min_{x\\in [1;2]}f(x)=f(1)=\\dfrac{1}{2}$."
  },
  {
    "id": "2D131TN60",
    "question": "Cho hàm số $y=f(x)$ có đồ thị như hình vẽ  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_119.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Hàm số $y=f(x)$ đạt giá trị nhỏ nhất trên đoạn $[-1;1]$ tại",
    "options": [
      "$x=1$",
      "$x=-1$",
      "$x=0$",
      "$x=-4$"
    ],
    "answer": 1,
    "explain": "Hàm số $y=f(x)$ đạt giá trị nhỏ nhất trên đoạn $[-1;1]$ tại $x=-1$."
  },
  {
    "id": "2D136TN61",
    "question": "Một vật chuyển động với vận tốc biểu thị qua biểu thức $v=f(t)$ có bảng biến thiên như hình vẽ (với $t$ là khoảng thời gian tính từ lúc vật bắt đầu chuyển động). Hỏi trong khoảng thời gian $10$ giây kể từ lúc bắt đầu chuyển động, vật có vận tốc nhỏ nhất khi $t$ bằng bao nhiêu?  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_120.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$0$ (s)",
      "$9$ (s)",
      "$1$ (s)",
      "$8$ (s)"
    ],
    "answer": 2,
    "explain": "Trong khoảng thời gian $10$ giây kể từ lúc bắt đầu chuyển động, vật có vận tốc nhỏ nhất khi $t=1$ (s)."
  },
  {
    "id": "2D131TN62",
    "question": "Cho hàm số $y = f(x)$ liên tục trên đoạn $[-1;3]$ và có đồ thị như hình vẽ bên dưới.   <br><img src=\"data/12/2D1/im2D1/2D13_tikz_121.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và nhỏ nhất của hàm số đã cho trên đoạn $[-1;3]$. Giá trị của $M + 2m$ bằng",
    "options": [
      "$-1$",
      "$1$",
      "$4$",
      "$5$"
    ],
    "answer": 0,
    "explain": "Giá trị lớn nhất $M=3$ và giá trị nhỏ nhất $m=-2$ nên $M+2m=-1$."
  },
  {
    "id": "2D131TN63",
    "question": "Giá trị cực tiểu của hàm số $y = -x^4 + 8x^2 + 2\\,025$ là bao nhiêu?",
    "options": [
      "$y=2\\,041$",
      "$y=0$",
      "$ y= -2\\,025$",
      "$y=2\\,025$"
    ],
    "answer": 3,
    "explain": "Tập xác định $\\mathscr{D} =\\mathbb{R}$.<br>  Ta có $y = -x^4 + 8x^2 +2\\,025$<br>  Đạo hàm $y' = -4x^3 + 16x=0$<br>  Xét y'=0<br>  $\\Leftrightarrow -4x=0 \\text{ hoặc } x^2 -4 =0$<br>  $\\Leftrightarrow x=0 \\text{ hoặc } x =2 \\text{ hoặc } x=-2$.  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_122.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy giá trị cực tiểu của hàm số là $y = 2\\,025$."
  },
  {
    "id": "2D131TN64",
    "question": "Cho hàm số $y=f(x)$ xác định và liên tục trên $\\mathbb{R}$ có đồ thị như hình vẽ bên. Tìm giá trị nhỏ nhất $m$ và giá trị lớn nhất $M$ của hàm số $y=f(x)$ trên đoạn $[-2;2]$.<br><img src=\"data/12/2D1/im2D1/2D13_tikz_123.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$m=-2; M=2$",
      "$m=-5; M=0$",
      "$m=-1; M=0$",
      "$m=-5; M=-1$"
    ],
    "answer": 3,
    "explain": "$M = \\min\\limits_{[-2;2]}f(x) =-5$.<br>  $M = \\max\\limits_{[-2;2]}f(x) =-1$."
  },
  {
    "id": "2D131TN65",
    "question": "Giá trị lớn nhất của hàm số $y= \\sqrt{4x -x^2}$ trên $[0;4]$ là",
    "options": [
      "$2$",
      "$4$",
      "$0$",
      "$1$"
    ],
    "answer": 0,
    "explain": ""
  },
  {
    "id": "2D131TN66",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau.  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_124.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Trên khoảng $(0,+\\infty)$, giá trị lớn nhất của hàm số đã cho bằng",
    "options": [
      "$3$",
      "$-2$",
      "$-1$",
      "$2$"
    ],
    "answer": 0,
    "explain": "Từ bảng biến thiên, ta có $\\lim\\limits_{x\\to 0^+}=a&lt;3$, $\\lim\\limits_{x\\to+\\infty}=-\\infty$.<br>  Ta có bảng biến thiên của hàm số trên khoảng $(0;+\\infty)$  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_125.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên trên khoảng $(0;+\\infty)$, hàm số đạt giá trị lớn nhất bằng $3$ tại $x=2$."
  },
  {
    "id": "2D131TN67",
    "question": "Cho hàm số $y=f(x)$ xác định, liên tục trên $\\left[-1; \\dfrac{5}{2}\\right]$ và có đồ thị là đường cong như hình vẽ  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_126.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Giá trị lớn nhất $M$ và giá trị nhỏ nhất $m$ của hàm số $f(x)$ trên $\\left[-1; \\dfrac{5}{2}\\right]$ là",
    "options": [
      "$M=4; m=1$",
      "$M=4; m=-1$",
      "$M=\\dfrac{7}{2}; m=-1$",
      "$M=\\dfrac{7}{2}; m=1$"
    ],
    "answer": 1,
    "explain": "Dựa vào đồ thị hàm số, ta có  <br>- Giá trị lớn nhất của hàm số trên đoạn $\\left[-1; \\dfrac{5}{2}\\right]$ là $M = 4$.<br>- Giá trị nhỏ nhất của hàm số trên đoạn $\\left[-1; \\dfrac{5}{2}\\right]$ là $m = -1$."
  },
  {
    "id": "2D131TN68",
    "question": "Gọi $M$, $m$ lần lượt là giá trị lớn nhất, giá trị nhỏ nhất của hàm số $f(x)=x^4-2x^2-1$ trên $[-1;2]$. Giá trị của biểu thức $M+3m$ bằng",
    "options": [
      "$4$",
      "$6$",
      "$1$",
      "$5$"
    ],
    "answer": 0,
    "explain": "Ta có $f'(x)=4x^3-4x$.<br>  Khi đó $f'(x)=0 \\Leftrightarrow x=0 \\text{ hoặc } x=1 \\text{ hoặc } x=-1.$<br>  Xét trên $[-1;2]$, ta có $f(-1)=-2$, $f(0)=-1$, $f(1)=-2$, $f(2)=7$.<br>  Do đó $M=\\max \\limits_{[-1;2]} f(x)=7$, $m=\\min \\limits_{[-1;2]} f(x)=-1$ nên $M+3m= 7 +3 \\cdot (-1) =4$."
  },
  {
    "id": "2D131TN69",
    "question": "Tìm giá trị lớn nhất $M$ của hàm số $y=\\dfrac{3x-1}{x-3}$ trên đoạn $[0;2]$.",
    "options": [
      "$M=-5$",
      "$M=5$",
      "$M=\\dfrac{1}{3}$",
      "$M=-\\dfrac{1}{3}$"
    ],
    "answer": 2,
    "explain": "Ta có $y'=\\dfrac{-8}{(x-3)^2}&lt;0$, $\\forall x \\in [0;2]$.<br>  Xét trên đoạn $[0;2]$, ta có $y(0)=\\dfrac{1}{3}$ và $y(2)=-5$ nên $M=\\max \\limits_{[0;2]} y = y(0)=\\dfrac{1}{3}$."
  },
  {
    "id": "2D131TN70",
    "question": "Tìm giá trị lớn nhất $M$ của hàm số $y=x^3+3x$ trên đoạn $\\left[0;2\\right]$ bằng",
    "options": [
      "$M=0$",
      "$M=4$",
      "$M=14$",
      "$M=-2$"
    ],
    "answer": 2,
    "explain": "Ta có $y'=3x^2+3&gt;0, \\forall x \\in \\mathbb{R}$.<br>  Khi đó $y(0)=0$; $ y(2)=14$.<br>  Vậy $\\max\\limits_{x\\in\\left[0;2\\right]}y=y(2)=14=M$."
  },
  {
    "id": "2D136TN71",
    "question": "Một loại thuốc được dùng cho một bệnh nhân và nồng độ thuốc trong máu của bệnh nhân được giám sát bởi bác sĩ. Biết rằng nồng độ thuốc trong máu của bệnh nhân sau khi tiêm vào cơ thể trong $ t$ giờ được cho bởi công thức $c(t)=\\dfrac{t}{t^2+1}$ $\\left(mg/L\\right)$. Sau khi tiêm thuốc bao lâu thì nồng độ thuốc trong máu của bệnh nhân cao nhất?",
    "options": [
      "$4$ giờ",
      "$1$ giờ",
      "$3$ giờ",
      "$2$ giờ"
    ],
    "answer": 1,
    "explain": "Xét hàm số $ c(t)=\\dfrac{t}{t^2+1}$, $ (t &gt; 0)$ có  $ c'(t)=\\dfrac{1-t^2}{\\left(t^2+1\\right)^2}$.<br>  $ c'(t)=0\\Leftrightarrow t=1 \\in\\left(0;\\,+\\infty\\right) \\text{ hoặc } t=-1\\notin\\left(0;\\,+\\infty\\right).$  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D13/dlts_12_DLTS1_006.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy với $ t=1$ giờ thì nồng độ thuốc trong máu của bệnh nhân cao nhất."
  },
  {
    "id": "2D136TN72",
    "question": "Để doanh thu cao nhất trong mùa hè năm $2024$, Ban quản lý bể bơi Trung tâm văn hóa Huyện Châu Đức tiến hành thăm dò dư luận. Qua thăm dò dư luận cho thấy số khách đến bơi thay đổi phụ thuộc vào giá vé $x$ theo hàm cầu là: $y(x)=-\\dfrac{1}{50}x+1\\,300$, với $x$ giá mỗi vé bơi đơn vị đồng. Tính doanh thu cao nhất của bể bơi đó.",
    "options": [
      "$21\\,125\\,000$",
      "$21\\,152\\,000$",
      "$21\\,225\\,000$",
      "$22\\,125\\,000$"
    ],
    "answer": 0,
    "explain": "Doanh thu  $  R(x) = x \\cdot y = -\\dfrac{1}{50}x^2 + 1\\,300 x.  $  Đạo hàm của $R(x)$  $  R'(x) = -\\dfrac{1}{25}x+1\\,300.  $  Cho $R'(x) = 0$, ta được  $  -\\dfrac{1}{25}x+1\\,300 = 0  \\Leftrightarrow  x = 32\\,500.  $  Bảng biến thiên của $R(x)$  <br><img src=\"data/12/2D1/im2D13/dlts_12_DLTS15_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">   Từ đó, ta thấy doanh thu cao nhất là $21\\,125\\,000$ đồng."
  },
  {
    "id": "2D136TN73",
    "question": "Trong một nhà hàng, mỗi tuần để chế biến $x$ phần ăn ($x$ lấy giá trị trong khoảng từ $30$ đến $120$) thì chi phí trung bình của một phần ăn được cho bởi công thức: $  \\overline{C}(x)=2x-235+\\dfrac{7\\,200}{x}.$  Số phần ăn $x$ là bao nhiêu thì chi phí trung bình của mỗi phần ăn là thấp nhất?",
    "options": [
      "$x=40$",
      "$x=50$",
      "$x=60$",
      "$x=70$"
    ],
    "answer": 2,
    "explain": "Áp dụng bất đẳng thức AM-GM ta có  \\[  \\overline{C}(x)=2x+\\dfrac{7200}{x}-235 \\ge 2\\cdot\\sqrt{2x\\cdot\\dfrac{7\\,200}{x}}-235=5.  \\]  Dấu “=”\\ xảy ra khi $2x=\\dfrac{7\\,200}{x}\\Rightarrow x=60$.<br>  Vậy để chi phí trung bình của mỗi phần ăn là thấp nhất thì số phần ăn là $60$."
  },
  {
    "id": "2D131TN74",
    "question": "Cho hàm số $y = f(x)$ xác định và liên tục trên $\\mathbb{R}$ có đồ thị như hình vẽ bên. Tìm giá trị nhỏ nhất $m$ và giá trị lớn nhất $M$ của hàm số $y = f(x)$ trên đoạn $[-2; 2]$.<br><img src=\"data/12/2D1/im2D13/dlts_12_DLTS21_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$m = -5$; $M = -1$",
      "$m = -2$; $M = 2$",
      "$m = -1$; $M = 0$",
      "$m = -5$; $M = 0$"
    ],
    "answer": 0,
    "explain": "Dựa vào đồ thị, giá trị nhỏ nhất $m = -5$ và giá trị lớn nhất $M = -1$ trên đoạn $[-2; 2]$."
  },
  {
    "id": "2D131TN75",
    "question": "Giá trị nhỏ nhất của hàm số $f(x)=x^3-6x^2+9x-1$ trên nửa khoảng $[-1;+\\infty)$ là",
    "options": [
      "$1$",
      "$-17$",
      "$17$",
      "$3$"
    ],
    "answer": 1,
    "explain": "Ta có $f’(x)=3x^2-12x+9$, $f’(x)=0\\Leftrightarrow x=1\\in[-1;+\\infty) \\text{ hoặc } x=3\\in[-1;+\\infty).$ <br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D13/dlts_12_DLTS3_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy $\\min\\limits_{[-1;+\\infty)} f(x)=f(-1)=-17$."
  },
  {
    "id": "2D131TN76",
    "question": "Giá trị nhỏ nhất của hàm số $y=\\sqrt{16-x^2}$ trên đoạn $[-2;2]$ bằng",
    "options": [
      "$4$",
      "$2\\sqrt{3}$",
      "$2\\sqrt{5}$",
      "$0$"
    ],
    "answer": 1,
    "explain": "Ta có $y=\\sqrt{16-x^2}$, khi đó $y'=-\\dfrac{x}{\\sqrt{16-x^2}}$.<br>  Suy ra $y'=0\\Leftrightarrow x=0\\in \\left[-2;2\\right]$.<br>  Ta có $f(-2)=f(2)=2\\sqrt{3}$, $f(0)=4$.<br>  Vậy giá trị nhỏ nhất của hàm số $y=\\sqrt{16-x^2}$ bằng $2\\sqrt{3}$."
  },
  {
    "id": "2D132TN77",
    "question": "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và có bảng biến thiên như hình bên   Giá trị nhỏ nhất của hàm số bằng<br><img src=\"data/12/2D1/im2D13/dlts_12_DLTS8_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$-7$",
      "$9$",
      "$-9$",
      "$7$"
    ],
    "answer": 0,
    "explain": "Dựa vào bảng biến thiên của hàm số, giá trị nhỏ nhất của hàm số là $-7$, đạt được tại $x=-2$ hoặc $x=2$."
  },
  {
    "id": "2D136TN74",
    "question": "Một cửa hàng buôn giày nhập một đôi với giá là $40$ đôla. Cửa hàng ước tính rằng nếu đôi giày được bán với giá $x$ đôla thì mỗi tháng khách hàng sẽ mua $\\left(120-x\\right)$ đôi. Hỏi cửa hàng bán một đôi giày giá bao nhiêu thì thu được nhiều lãi nhất?",
    "options": [
      "$80$ USD",
      "$160$ USD",
      "$40$ USD",
      "$240$ USD"
    ],
    "answer": 0,
    "explain": "Lãi mỗi đôi giày là $x-40$ đôla $(40\\le x\\le 120)$.<br>   Tiền lãi khi bán được $\\left(120-x\\right)$ đôi giày là $f(x)=\\left(x-40\\right)\\cdot \\left(120-x\\right)=-x^2+160x-4800.$   Ta có $f'(x)=-2x+160$.<br>  $f'(x)=0\\Leftrightarrow-2x+160=0\\Leftrightarrow x=80$.<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D13/loc8_TT_KSCL_THPT_Le__003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy cửa hàng cần bán giày với giá $80$ USD một đôi thì thu được nhiều lãi nhất."
  },
  {
    "id": "2D131TN77",
    "question": "Giá trị nhỏ nhất của hàm số $y=(x-3)^2 \\mathrm{e}^x$ trên đoạn $[0;2]$ bằng",
    "options": [
      "$9$",
      "$\\mathrm{e}^2$",
      "$0$",
      "$4\\mathrm{e}$"
    ],
    "answer": 1,
    "explain": "Hàm số $y=(x-3)^2 \\mathrm{e}^x$ liên tục trên đoạn $[0;2]$. <br>  Ta có $y' = 2(x-3)\\mathrm{e}^x +(x-3)^2 \\mathrm{e}^x = \\mathrm{e}^x (x-3)(x-1)$. <br>  Khi đó $y'=0 \\Leftrightarrow \\mathrm{e}^x (x-3)(x-1)=0 \\Leftrightarrow x=3 \\notin [0;2] \\text{ hoặc } x=1 \\in [0;2].$<br>  Do đó $y(0) = 9$; $y(1) = 4\\mathrm{e}$ ; $y(2) = \\mathrm{e}^2$. <br>  Vậy giá trị nhỏ nhất của hàm số là $y(2) = \\mathrm{e}^2$."
  },
  {
    "id": "2D131TN78",
    "question": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[-1;3]$ và có đồ thị như hình vẽ. Gọi $M$ và $m$ lần  lượt là giá trị lớn nhất và nhỏ nhất của hàm số đã cho trên $[-1;3]$. Tính giá trị $M-m$ bằng<br><img src=\"data/12/2D1/im2D13/loc8_TT_THPT_DaoDuyTu_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$4$",
      "$0$",
      "$1$",
      "$5$"
    ],
    "answer": 3,
    "explain": "Ta có $M-m=3-(-2)=5$."
  },
  {
    "id": "2D131TN79",
    "question": "Xét hàm số $y=\\dfrac{x-1}{2x+1}$ trên $\\left[0; 1\\right]$. Khẳng định nào sau đây đúng?",
    "options": [
      "$\\max\\limits_{\\left[0; 1\\right]} y=0$",
      "$\\min\\limits_{\\left[0; 1\\right]} y=-\\dfrac{1}{2}$",
      "$\\min\\limits_{\\left[0; 1\\right]} y=\\dfrac{1}{2}$",
      "$\\max\\limits_{\\left[0; 1\\right]} y=1$"
    ],
    "answer": 0,
    "explain": "Ta có $y'=\\dfrac{3}{(2x+1)^2}&gt;0$, $\\forall x\\in \\left[0; 1\\right]$ nên $\\max\\limits_{\\left[0; 1\\right]} y=y(1)=0$."
  },
  {
    "id": "2D132TN6",
    "question": "Bạn Nga có một tấm bìa hình vuông cạnh $20$ cm. Bạn muốn cắt ở mỗi góc một hình  vuông nhỏ để gấp và dán lại thành một cái hộp đựng đồ dùng học tập không có nắp (mép dán không đáng kể).  Để cái hộp có thể tích lớn nhất thì hình vuông nhỏ cắt đi có độ dài cạnh là  <br><img src=\"data/12/2D1/im2D13/loc8_TT_THPT_DaoDuyTu_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br><img src=\"data/12/2D1/im2D13/loc8_TT_THPT_DaoDuyTu_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$20$ cm",
      "$\\dfrac{10}{3}$ cm",
      "$\\dfrac{20}{3}$ cm",
      "$10$ cm"
    ],
    "answer": 1,
    "explain": "Gọi $ x $ là cạnh hình vuông bị cắt ($ 0\\le x\\le 10 $).<br>  Khi đó thể tích của khối hình chữ nhật tạo thành là   \\[V(x)=x\\cdot \\left(20-2x\\right)^2= 4x^3-80x^2+400x.\\]  Suy ra $V'(x)=12 x^2-160 x+400$; $ V'(x)=0\\Leftrightarrow x=10 \\text{ hoặc } x=\\dfrac{10}{3}. $<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D13/loc8_TT_THPT_DaoDuyTu_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy thể tích khối hộp chữ nhật lớn nhất khi cạnh hình vuông bị cắt là $\\dfrac{10}{3}$ cm."
  },
  {
    "id": "2D131TN80",
    "question": "Cho hàm số $y=f(x)$ có đồ thị như hình bên. Giá trị lớn nhất của hàm số $f(x)$ trên đoạn $[-3; 2]$ đạt được tại $x$ bằng<br><img src=\"data/12/2D1/im2D13/loc8_TT_THPT_Lien_cap_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$4$",
      "$2$",
      "$-3$",
      "$0$"
    ],
    "answer": 2,
    "explain": "Quan sát đồ thị ta thấy giá trị lớn nhất của hàm số $f(x)$ trên đoạn $[-3; 2]$ là $4$ và đạt được tại $x = -3$."
  },
  {
    "id": "2D131TN81",
    "question": "Giá trị lớn nhất của hàm số $f(x)=\\dfrac{2x-3}{x+1}$ trên đoạn $[0; 2]$ là",
    "options": [
      "$-3$",
      "$3$",
      "$\\dfrac{1}{3}$",
      "$1$"
    ],
    "answer": 2,
    "explain": "Tập xác định: $\\mathscr{D}=\\mathbb{R} \\setminus\\{-1\\}$.<br>  $f'(x)=\\dfrac{5}{(x+1)^2} &gt; 0, \\forall x \\neq-1$.<br>  Suy ra hàm số $f(x)$ đồng biến trên đoạn $[0;2]$.<br>  Vậy $\\max\\limits_{[0;2]} f(x)=f(2)=\\dfrac{1}{3}$."
  },
  {
    "id": "2D131TN9",
    "question": "Giá trị nhỏ nhất của hàm số $f(x)=x^4-8x^2+a$, ($a \\in \\mathbb{R}$) trên đoạn $[-1;3]$ bằng",
    "options": [
      "$-6$",
      "$a$",
      "$-16+a$",
      "$9+a$"
    ],
    "answer": 2,
    "explain": "Xét hàm số $f(x)=x^4-8x^2+a$ trên đoạn $[-1;3]$.<br>  Ta có $f'(x)=4x^3-16x$; $f'(x)=0 \\Leftrightarrow 4x(x^2-4)=0 \\Leftrightarrow x=0 \\in [-1;3] \\text{ hoặc } x=2 \\in [-1;3] \\text{ hoặc } x=-2 \\notin [-1;3].$<br>  Tính các giá trị:  <br>- $f(-1) = (-1)^4 - 8(-1)^2 + a = a-7$.<br>- $f(0) = a$.<br>- $f(2) = 2^4 - 8 \\cdot 2^2 + a = a-16$.<br>- $f(3) = 3^4 - 8 \\cdot 3^2 + a = a+9$.  So sánh các giá trị trên, ta thấy $\\min\\limits_{x \\in [-1;3]} f(x) = f(2) = a-16 = -16+a$."
  },
  {
    "id": "2D131TN82",
    "question": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[1;5]$ và có đồ thị như hình vẽ bên. Trên đoạn $[1;5]$, hàm số đã cho đạt giá trị lớn nhất tại điểm<br><img src=\"data/12/2D1/im2D13/loc8_TT_THPT_NguyenVi_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$x=4$",
      "$x=2$",
      "$x=5$",
      "$x=1$"
    ],
    "answer": 1,
    "explain": "Dựa vào đồ thị hàm số, trên đoạn $[1;5]$ hàm số đạt giá trị lớn nhất bằng $4$ tại $x=2$."
  },
  {
    "id": "2D131TN83",
    "question": "Giá trị nhỏ nhất của hàm số $y=x^4-2x^2-1$ trên đoạn $[0;2]$ bằng",
    "options": [
      "$7$",
      "$-2$",
      "$1$",
      "$-1$"
    ],
    "answer": 1,
    "explain": "Ta có $y=x^4-2x^2-1$.<br>  Suy ra $y' = 4x^3-4x$.<br>  Khi đó $y'=0 \\Leftrightarrow x=0\\in[0;2] \\text{ hoặc } x=1\\in[0;2] \\text{ hoặc } x=-1\\notin[0;2].$<br>  Xét trên đoạn $[0;2]$ ta có  <br>- $f(0)=-1$.<br>- $f(1)=-2$.<br>- $f(2)=7$.  Vậy giá trị nhỏ nhất của hàm số $y=x^4-2x^2-1$ trên đoạn $[0;2]$ bằng $-2$ đạt được tại $x = 1$."
  }
];
