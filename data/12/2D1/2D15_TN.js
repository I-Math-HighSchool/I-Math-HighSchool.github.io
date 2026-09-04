// =========================================================================
// KHỐI DỮ LIỆU: 2D15 - Trắc nghiệm
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem2D15 = [
  {
    "id": "2D151TN1",
    "question": "Đồ thị hàm số $y = x^3 - 3x + 2$ là hình nào trong $4$ hình dưới đây?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "Hình $1$",
      "Hình $2$",
      "Hình $3$",
      "Hình $4$"
    ],
    "answer": 1,
    "explain": "Hàm số $y = x^3 - 3x + 2$ có $y(0)=2$, suy ra nhận Hình $2$."
  },
  {
    "id": "2D156TN2",
    "question": "Cho hàm số $y=\\dfrac{2x-1}{x-1}$. Tiếp tuyến của đồ thị hàm số tại điểm có hoành độ bằng $2$ có phương trình là",
    "options": [
      "$y=-x+5$",
      "$y=-x+1$",
      "$y=x-1$",
      "$y=-x-5$"
    ],
    "answer": 0,
    "explain": "$x_0=2 \\Rightarrow y_0=\\dfrac{2\\cdot 2-1}{2-1}=3$.<br>  $y'=\\dfrac{-1}{(x-1)^2}$.<br>  $y'(2)=\\dfrac{-1}{(2-1)^2}=-1$.<br>  Phương trình tiếp tuyến $y=-1(x-2)+3=-x+5$."
  },
  {
    "id": "2D151TN3",
    "question": "Cho hàm số $y=f(x)$ có đồ thị như hình vẽ. Đồ thị là của hàm số nào trong các hàm số dưới đây  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3-3x^2+x+2$",
      "$y=-x^3-3x^2+x+2$",
      "$y=-x^3+3x^2-x-1$",
      "$y=-x^3-3x^2-x+2$"
    ],
    "answer": 3,
    "explain": "Đồ thị hàm số đi qua điểm $(-2,0)$ và $(0,2)$. Thay lần lượt các điểm vào các đáp án thì chỉ mỗi đáp án C thoả mãn."
  },
  {
    "id": "2D151TN4",
    "question": "Đường cong trong hình bên là đồ thị của hàm số nào sau đây?   <br><img src=\"data/12/2D1/im2D1/2D15_tikz_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3-3x+1$",
      "$y=\\dfrac{x}{x+1}$",
      "$y=x^3-3x$",
      "$y=-x^3+3x$"
    ],
    "answer": 2,
    "explain": "Dựa vào đồ thị ta có   <br>- Đây là đồ thị của hàm số $ y=ax^3+bx^2+cx+d~(a\\ne 0) $.<br>- $ \\lim \\limits_{x \\to-\\infty } y=-\\infty\\Rightarrow a&gt;0$.<br>- Đồ thị hàm số đi qua điểm $ O(0;0) $.  Suy ra đây là đồ thị của hàm số $y=x^3-3x$."
  },
  {
    "id": "2D151TN5",
    "question": "Đồ thị hàm số nào dưới đây có dạng như đường cong trong hình bên?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{x^2+3x-5}{x-1}$",
      "$y=x^3-3x+1$",
      "$y=-x^3+3x+1$",
      "$y=\\dfrac{2x+1}{x+4}$"
    ],
    "answer": 2,
    "explain": "Đồ thị hàm số đã cho là đồ thị của hàm số bậc ba $f(x)=ax^3+bx^2+cx+d$ với hệ số $a&lt;0$. Trong các hàm số đã cho chỉ có hàm số $y=-x^3+3x+1$ thỏa mãn."
  },
  {
    "id": "2D151TN6",
    "question": "Đường cong trong hình vẽ bên là đồ thị của hàm số nào dưới đây?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{x-2}{x+1}$",
      "$y=\\dfrac{x+1}{x-1}$",
      "$y=\\dfrac{x}{x-1}$",
      "$y=\\dfrac{x}{x+1}$"
    ],
    "answer": 2,
    "explain": "Ta có đồ thị hàm số có tiệm cận đứng $x=1$, nên loại $y=\\dfrac{x-2}{x+1}$ và $y=\\dfrac{x}{x+1}$.<br>  Đồ thị hàm số đi qua gốc tọa độ $O(0;0)$ nên loại $y=\\dfrac{x+1}{x-1}$ và chọn $y=\\dfrac{x}{x-1}$."
  },
  {
    "id": "2D151TN7",
    "question": "Biết đường cong trong hình bên dưới là đồ thị của một trong bốn hàm số được liệt kê ở bốn phương án A, B, C, D dưới đây. Hàm số đó là hàm số nào?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3+3x^2+2$",
      "$y=x^3-3x^2-x+2$",
      "$y=-x^3-3x^2+2$",
      "$y=x^3-3x^2+2$"
    ],
    "answer": 3,
    "explain": "Quan sát đồ thị, thấy đồ thị của hàm số bậc $3$ hệ số $a&gt;0$, đi qua điểm $(2;-2)$ nên đồ thị trên là của hàm số $y=x^3-3x^2+2$."
  },
  {
    "id": "2D151TN8",
    "question": "Đường cong trong hình vẽ bên là đồ thị của hàm số nào?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_014.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{x^2-4x+5}{x-1}$",
      "$\\dfrac{x^2-4x-1}{x+1}$",
      "$y=\\dfrac{x^2+x-1}{x-1}$",
      "$y=\\dfrac{x^2-x+1}{x-1}$"
    ],
    "answer": 3,
    "explain": "Dựa vào đồ thị ta có  <br>- Tiệm cận đứng $x=1$ nên loại $y=\\dfrac{x^2-4x-1}{x+1}$.<br>- Đồ thị đi qua điểm $(0;-1)$ nên loại $y=\\dfrac{x^2+x-1}{x-1}$ và $y=\\dfrac{x^2-4x+4}{x-1}$.  Vậy đáp đúng là $y=\\dfrac{x^2-x+1}{x-1}$."
  },
  {
    "id": "2D151TN9",
    "question": "Bảng biến thiên dưới đây là của hàm số nào trong bốn hàm số được liệt kê ở bốn phương án A, B, C, D  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_015.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3-3x^2-1$",
      "$y=x^3+3x^2+1$",
      "$y=-x^3-3x^2-1$",
      "$y=-x^3+3x^2-1$"
    ],
    "answer": 3,
    "explain": "Ta có đồ thị hàm số đi qua các điểm $(0;-1)$ và $(2;3)$ nên chọn $y=-x^3+3x^2-1$."
  },
  {
    "id": "2D151TN10",
    "question": "Cho hàm số $y=\\dfrac{ax+b}{cx+d}$ có đồ thị như hình vẽ sau  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_016.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Mệnh đề nào sau đây là mệnh đề đúng?",
    "options": [
      "$ad &lt; 0 &lt; bc$",
      "$bc &lt; ad&lt; 0$",
      "$0&lt;ad&lt;bc$",
      "$ad&lt;bc&lt;0$"
    ],
    "answer": 3,
    "explain": "Đồ thị hàm số có tiệm cận đứng $x=1 \\Rightarrow -\\dfrac{d}{c}=1 \\Rightarrow d=-c$. <br>  Đồ thị hàm số có tiệm cận ngang $y=2 \\Rightarrow \\dfrac{a}{c}=2 \\Rightarrow a=2c$. <br>  Đồ thị hàm số đi qua điểm $(0;1) \\Rightarrow \\dfrac{b}{d}=1 \\Rightarrow b=d=-c$.<br>  Do đó $ad=-2c^2 &lt; bc =-c^2 &lt; 0$."
  },
  {
    "id": "2D152TN11",
    "question": "Cho hàm số $y=\\dfrac{-4x+3}{2x+2}$ có tâm đối xứng là điểm",
    "options": [
      "$(-1;-2)$",
      "$(-1;-1)$",
      "$(-2;-2)$",
      "$(-2;-1)$"
    ],
    "answer": 0,
    "explain": "Đồ thị hàm số có tiệm cận đứng là đường thẳng $x=-1$ và tiệm cận ngang là đường thẳng $y=-2$, nên đồ thị hàm số đã cho có tâm đối xứng là điểm $(-1;-2)$."
  },
  {
    "id": "2D151TN12",
    "question": "Đường cong trong hình vẽ bên là đồ thị của hàm số nào sau đây?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_020.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3-3x^2$",
      "$y=x^3-3x$",
      "$y=-x^3+3x^2$",
      "$y=-x^3+3x$"
    ],
    "answer": 3,
    "explain": "Vì điểm $\\left(-1;-2\\right)$ thuộc đồ thị hàm số nên hàm số có công thức là $y=-x^3+3x$."
  },
  {
    "id": "2D158TN13",
    "question": "Một vật được ném theo phương thẳng đứng từ điểm cách mặt đất $3$ m với vận tốc ban đầu $20$ m/s thì có phương trình là $h(t) = 3 + 20t - 4{,}9t^2$ với $t$ (s) là khoảng thời gian tính từ lúc ném vật đó theo phương thẳng đứng. Vận tốc của vật đó sau $2$ s là",
    "options": [
      "$0{,}8$ m/s",
      "$0{,}4$ m/s",
      "$0{,}2$ m/s",
      "$0{,}1$ m/s"
    ],
    "answer": 1,
    "explain": "Vận tốc $v(t) = h'(t) = 20 - 9{,}8t.$  Vận tốc sau $2\\,\\text{s}$ là  $v(2) = 20 - 9{,}8\\cdot 2 = 20 - 19{,}6 = 0{,}4\\,\\text{m/s}.$"
  },
  {
    "id": "2D158TN14",
    "question": "Một chất điểm chuyển động theo quy luật $s(t) = {t^3} - 3{t^2} + 9t + 36$ với $t$ (s) là khoảng thời gian tính từ lúc chất điểm bắt đầu chuyển động và $s$ (m) là quãng đường vật đi được trong khoảng thời gian đó. Tính quãng đường vật đi được ở giây thứ $4$.",
    "options": [
      "$22$ m",
      "$88$ m",
      "$44$ m",
      "$11$ m"
    ],
    "answer": 1,
    "explain": "Quãng đường vật đi được trong $4$ giây đầu là $s(4) = {4^3} - {3\\cdot 4^2} + 9\\cdot 4 + 36 = 88$ m."
  },
  {
    "id": "2D151TN15",
    "question": "Đường cong ở hình bên là đồ thị của hàm số nào trong các hàm số cho sau<br><img src=\"data/12/2D1/im2D1/2D15_tikz_021.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y = x^3+3x+1$",
      "$y = \\dfrac{x^2-1}{3x+5}$",
      "$y = \\log x$",
      "$y = x^3-3x-2$"
    ],
    "answer": 3,
    "explain": "<br>- Đồ thị là hàm bậc ba nên loại $y = \\dfrac{x^2-1}{3x+5}$ và $y = \\log x$.<br>- Đồ thị đi qua điểm $(0;-2)$ nên loại $y = x^3+3x+1$."
  },
  {
    "id": "2D151TN16",
    "question": "Đồ thị hàm số $y=\\dfrac{x^2-x-1}{x+1}$ cắt trục tung điểm có tung độ bằng",
    "options": [
      "$0$",
      "$-1$",
      "$1$",
      "$2$"
    ],
    "answer": 1,
    "explain": "Đồ thị hàm số $y=\\dfrac{x^2-x-1}{x+1}$ cắt trục tung điểm $M(0;y_0)$ có tung độ $y_0=\\dfrac{0-0-1}{0+1}=-1$."
  },
  {
    "id": "2D151TN17",
    "question": "Cho hàm số bậc ba $f(x)$ có đồ thị là đường cong như hình bên. Có bao nhiêu giá trị nguyên của tham số $m$ để phương trình $f(x)=m$ có 3 nghiệm thực phân biệt?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_024.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$5$",
      "$4$",
      "$2$",
      "$3$"
    ],
    "answer": 3,
    "explain": "Số nghiệm của phương trình $f(x)=m$ bằng số giao điểm của đồ thị hàm số và đường thẳng $y=m$.  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_025.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào hình vẽ, ta thấy phương trình $f(x)=m$ có ba nghiệm thực phân biệt khi đường thẳng $d:y=m$ cắt đồ thị hàm số $y=f(x)$ tại ba điểm phân biệt, tức là $-3&lt;m&lt;1$. <br>  Mà $m\\in\\mathbb{Z}$ nên $m\\in\\{-2;-1;0\\}$."
  },
  {
    "id": "2D151TN18",
    "question": "Biết rằng đường thẳng $y=4x+5$ cắt đồ thị hàm số $y=x^3+2x+1$ tại điểm duy nhất; kí hiệu $(x_0;y_0)$ là toạ độ điểm đó. Tìm $y_0$.",
    "options": [
      "$y_0=13$",
      "$y_0=12$",
      "$y_0=11$",
      "$y_0=10$"
    ],
    "answer": 0,
    "explain": "Phương trình hoành độ giao điểm: $x^3+2x+1=4x+5\\Leftrightarrow x^3-2x-4=0\\Leftrightarrow x=2.$  Với $x=2\\Rightarrow y=13$."
  },
  {
    "id": "2D152TN19",
    "question": "Cho hàm số $y=\\dfrac{x+3}{x+1}$ có đồ thị như hình vẽ bên. Tìm tọa độ tâm đối xứng $I$ của đồ thị trên.<br><img src=\"data/12/2D1/im2D1/2D15_tikz_028.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$I(1;1)$",
      "$I(-3;3)$",
      "$I(0;0)$",
      "$I(-1;1)$"
    ],
    "answer": 3,
    "explain": "Đồ thị hàm số có tiệm cận ngang $y=1$, tiệm cận đứng $x=-1$ và nhận giao điểm hai đường tiệm cận làm tâm đối xứng.<br>  Từ đó ta có tâm đối xứng của đồ thị là $I(-1;1)$."
  },
  {
    "id": "2D151TN20",
    "question": "Hình bên dưới là đồ thị của hàm số nào trong các hàm số dưới đây?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_032.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^2+1$",
      "$y=x^3+x+1$",
      "$y=-x^2+\\dfrac{1}{2} x+1$",
      "$y=-x^3-\\dfrac{1}{2} x+1$"
    ],
    "answer": 3,
    "explain": "Từ hình vẽ ta thấy đồ thị hàm số bậc $3$ có $a&lt;0$ và cắt trục tung tại điểm $(0;1)$."
  },
  {
    "id": "2D151TN21",
    "question": "Cho hàm số $y=ax^3+bx^2+cx+d$ có đồ thị như hình vẽ bên. Mệnh đề nào dưới đây đúng?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_034.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$a&gt;0$, $b&gt;0$, $c&lt;0$, $d&gt;0$",
      "$a&gt;0$, $b&lt;0$, $c&lt;0$, $d&gt;0$",
      "$a&gt;0$, $b&lt;0$, $c&gt;0$, $d&lt;0$",
      "$a&gt;0$, $b&gt;0$, $c&gt;0$, $d&gt;0$"
    ],
    "answer": 1,
    "explain": "Gọi $x_1$ và $x_2$ là hai điểm cực trị của hàm số.<br>  Dựa vào đồ thị hàm số ta thấy  <br>- $\\lim\\limits_{x\\to+\\infty}y=+\\infty$ nên $a&gt;0$.<br>- Giao điểm của đồ thị hàm số với trục tung tại điểm có tung độ dương nên $d&gt;0$.<br>- $x_1\\cdot x_2&lt;0$ nên $ac&lt;0$ suy ra $c&lt;0$.<br>- $x_1+x_2&gt;0$ nên $ab&lt;0$ suy ra $b&lt;0$.  Vậy $a&gt;0$, $b&lt;0$, $c&lt;0$, $d&gt;0$."
  },
  {
    "id": "2D151TN22",
    "question": "Đường cong trong hình bên là đồ thị của hàm số<br><img src=\"data/12/2D1/im2D1/2D15_tikz_035.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3+3x^2-2$",
      "$y=-x^3+3x^2-2$",
      "$y=x^3-3x^2-2$",
      "$y=-x^3+3x^2+2$"
    ],
    "answer": 1,
    "explain": "Giả sử hàm số cần tìm có dạng là $y=ax^3+bx^2+cx+d \\ (a\\ne 0)$.<br>  Đồ thị hàm số đi qua các điểm $(0;-2)$, $(1;0)$, $(2;2)$ và có điểm cực trị $(0;-2)$ nên ta có   \\[d=-2 \\text{ và } a+b+c+d=1 \\text{ và } 8a+4b+2c+d=2 \\text{ và } c=0 \\Leftrightarrow a=-1 \\text{ và } b=3 \\text{ và } c=0 \\text{ và } d=-2.\\]  Suy ra hàm số cần tìm là $y=-x^3+3x^2-2$."
  },
  {
    "id": "2D153TN23",
    "question": "Cho hàm số bậc ba $y=f(x)$ có đồ thị là đường cong trong hình bên. Số nghiệm thực của phương trình $f(x)=-1$ là<br><img src=\"data/12/2D1/im2D1/2D15_tikz_036.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$2$",
      "$1$",
      "$0$",
      "$3$"
    ],
    "answer": 3,
    "explain": "Vẽ đường thẳng $y=-1$.  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_037.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Đường thẳng $y=-1$ cắt đồ thị hàm số tại $3$ điểm nên phương trình $f(x)=-1$ có $3$ nghiệm."
  },
  {
    "id": "2D151TN24",
    "question": "Đồ thị dưới đây là đồ thị của hàm số nào?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_039.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3+x-1$",
      "$y=x^2+x-1$",
      "$y=\\dfrac{x+1}{x-1}$",
      "$y=\\dfrac{x^2-2x+2}{x-1}$"
    ],
    "answer": 2,
    "explain": "Đồ thị hàm số đã cho có dạng đồ thị hàm số bậc nhất trên bậc nhất.<br>  Dựa vào các đáp án thì ta suy ra đây là đồ thị của hàm số $y=\\dfrac{x+1}{x-1}$."
  },
  {
    "id": "2D151TN25",
    "question": "Cho hàm số $y=\\dfrac{ax+3}{bx+c}$ có đồ thị là đường cong trong hình vẽ.  Tính giá trị $M=a+b+c$.<br><img src=\"data/12/2D1/im2D1/2D15_tikz_040.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$0$",
      "$4$",
      "$3$",
      "$-1$"
    ],
    "answer": 1,
    "explain": "Đồ thị đi qua điểm $(-3;0)$ nên $0=\\dfrac{-3\\cdot a+3}{-3\\cdot b+c} \\Rightarrow -3\\cdot a+3=0 \\Leftrightarrow a=1$.<br>  Đồ thị hàm số có tiệm cận ngang $y=1$ nên $\\dfrac{a}{b}=1 \\Leftrightarrow b=a=1$.<br>  Đồ thị hàm số có tiệm cận đứng $x=-2$ nên $-\\dfrac{c}{b}=-2 \\Leftrightarrow c=2b=2$.<br>  Vậy $M=a+b+c=1+1+2=4$."
  },
  {
    "id": "2D151TN26",
    "question": "Cho hàm số đa thức bậc ba $y=f(x)$ có đồ thị như hình vẽ bên.  Biết phương trình $f(x)-m=0$ có duy nhất một nghiệm. Tìm tất cả giá trị của $m$.<br><img src=\"data/12/2D1/im2D1/2D15_tikz_041.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$m \\in \\mathbb{R}$",
      "$m \\in(-\\infty;-1) \\cup(3 ;+\\infty)$",
      "$m \\in(-1 ; 3)$",
      "$m \\in\\{3 ;-1\\}$"
    ],
    "answer": 1,
    "explain": "Ta có $f(x)-m=0 \\Leftrightarrow f(x)=m\\quad (1)$.<br>  $(1)$ có nghiệm duy nhất khi đồ thị hàm số $y=f(x)$ cắt đường thẳng $y=m$ tại duy nhất một điểm.  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_042.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">   Dựa vào đồ thị hàm số $y=f(x)$ ta có kết quả $m&lt;-1$ hoặc $m&gt;3$."
  },
  {
    "id": "2D151TN27",
    "question": "Cho hàm số $y=\\dfrac{a x+b}{c x+d}$ (với $c\\neq 0, ad-bc\\neq 0$) có đồ thị như hình vẽ bên. Khẳng định nào sau đây đúng?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_044.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "Đồ thị hàm số có hai điểm cực trị",
      "$\\lim\\limits_{x\\rightarrow-\\infty}f(x)=+\\infty$ và $\\lim\\limits_{x\\rightarrow+\\infty}f(x)=-\\infty$",
      "$\\lim\\limits_{x\\rightarrow 1^+}f(x)=-\\infty$ và $\\lim\\limits_{x\\rightarrow 1^-}f(x)=+\\infty$",
      "Hàm số đồng biến trên khoảng $(-\\infty ;+\\infty)$"
    ],
    "answer": 2,
    "explain": "Gọi $(C)$ là đồ thị hàm số $y=\\dfrac{a x+b}{c x+d}$. Từ đồ thị đã cho, ta thấy:  <br>- Hàm số đã cho không có cực trị và đồng biến trên mỗi khoảng $(-\\infty;1)$, $(1;+\\infty)$.<br>- $(C)$ có tiệm cận đứng là đường thẳng $x=1$ và $\\lim\\limits_{x\\rightarrow 1^-}f(x)=+\\infty$ và $\\lim\\limits_{x\\rightarrow 1^+}f(x)=-\\infty$.<br>- $(C)$ có tiệm cận ngang là đường thẳng $y=1$ nên $\\lim\\limits_{x\\rightarrow-\\infty}f(x)=1$, $\\lim\\limits_{x\\rightarrow+\\infty}f(x)=1$."
  },
  {
    "id": "2D153TN28",
    "question": "Số giao điểm của đồ thị hàm số $y=x^3-3x^2+2x$ với trục $Ox$ là",
    "options": [
      "$2$",
      "$0$",
      "$3$",
      "$1$"
    ],
    "answer": 2,
    "explain": "Phương trình hoành độ giao điểm của đồ thị hàm số $y=x^3-3x^2+2x$ với trục $Ox$ là $x^3-3x^2+2x=0.\\qquad (1)$  Ta thấy phương trình $(1)$ có $3$ nghiệm phân biệt là $0$, $1$, $2$ nên đồ thị hàm số $y=x^3-3x^2+2x$ cắt trục $Ox$ tại $3$ điểm phân biệt."
  },
  {
    "id": "2D151TN29",
    "question": "Đường cong trong hình vẽ bên là đồ thị của hàm số nào dưới đây?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_046.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{x^2+2 x-1}{x-1}$",
      "$y=\\dfrac{2 x-1}{x-1}$",
      "$y=\\dfrac{x+1}{x-1}$",
      "$y=x^3-3 x-1$"
    ],
    "answer": 2,
    "explain": "Đồ thị hàm số có tiệm cận ngang $y=1$ và tiệm cận đứng $x=1$ nên hàm số cần tìm là $y=\\dfrac{x+1}{x-1}$."
  },
  {
    "id": "2D151TN30",
    "question": "Đường cong ở hình sau là đồ thị của hàm số nào?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_049.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=-x^3+4x^2-1$",
      "$y=x^3-2x^2-2x-1$",
      "$y=-x^3+2x^2+2x-1$",
      "$y=-x^3+2x-1$"
    ],
    "answer": 2,
    "explain": "Đồ thị ở hình bên là đồ thị hàm số bậc ba $y=ax^3+bx^2+cx+d$ ($a \\ne 0$).<br>  Dựa vào đồ thị $\\lim\\lim\\limits_{x \\to +\\infty} y=-\\infty$ nên $a&lt;0$. Ta loại phương án $y=x^3-2x^2-2x-1$.<br>  Xét phương án $y=-x^3+4x^2-1$ có $y'=-3x^2+8x=0 \\Leftrightarrow x=0$ hoặc $x=\\dfrac{8}{3}$.<br>  Ta loại phương án này vì $x=0$ không phải là điểm cực trị của hàm số.<br>  Xét phương án $y=-x^3+2x-1$ có $y'=-3x^2+2 \\Leftrightarrow x=\\pm \\dfrac{\\sqrt{6}}{3}$.<br>  Dựa vào đồ thị ta thấy hai điểm cực trị không đối xứng qua $0$ nên ta loại phương án này.<br>  Vậy $y=-x^3+2x^2+2x-1$ là hàm cần tìm."
  },
  {
    "id": "2D155TN31",
    "question": "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và đồ thị hàm số $y=f'(x)$ như hình vẽ bên. Phát biểu nào sau đây đúng?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_050.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "Hàm số đã cho nghịch biến trên $(-1;2)$",
      "Hàm số đã cho nghịch biến trên $(0;1)$",
      "Hàm số đã cho đồng biến trên $(-\\infty;-1)$",
      "Hàm số đã cho đồng biến trên $(-1;1)$"
    ],
    "answer": 3,
    "explain": "Đồ thị hàm số $y=f'(x)$ cắt trục $Ox$ tại $3$ điểm nên phương trình $f'(x)=0$ có $3$ nghiệm phân biệt $x=-1$, $x=1$ và $x=2$.<br>  Dựa vào hình vẽ, đồ thị hàm số $y=f'(x)$ nằm phía trên trục $Ox$ trên khoảng $(-1;1)$, khi đó $f'(x)&gt;0$, $\\forall x \\in (-1;1)$ nên hàm số $y=f(x)$ đồng biến trên $(-1;1)$."
  },
  {
    "id": "2D152TN32",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_051.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tâm đối xứng của đồ thị hàm số $y=f(x)$ có tọa độ là",
    "options": [
      "$(2;2)$",
      "$(2;-2)$",
      "$(-2;-2)$",
      "$(-2;2)$"
    ],
    "answer": 1,
    "explain": "Ta có $\\lim\\limits_{x \\to -\\infty} f(x)=\\lim\\limits_{x \\to +\\infty} f(x)=-2$ nên đường thẳng $y=-2$ là tiệm cận ngang của đồ thị hàm số.<br>  Mặt khác $\\lim\\limits_{x\\to 2^+} f(x)=-\\infty$ và $\\lim\\limits_{x \\to 2^-} f(x)=+\\infty$ nên $x=2$ là tiệm cận đứng của đồ thị hàm số.<br>  Tâm đối xứng $I(2;-2)$ là giao điểm của hai đường tiệm cận."
  },
  {
    "id": "2D151TN33",
    "question": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và có đồ thị như hình vẽ dưới đây. Hàm số $f(x)$ đồng biến trên khoảng nào sau đây?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_054.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$(0; 4)$",
      "$(0; 2)$",
      "$(-1; 0)$",
      "$(-1; 1)$"
    ],
    "answer": 2,
    "explain": "Từ đồ thị hàm số ta thấy đồ thị hàm số đồng biến $(-\\infty;0)$ nên đồng biến $(-1;0)$."
  },
  {
    "id": "2D151TN34",
    "question": "Đường cong trong hình bên là đồ thị của hàm số nào dưới đây?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_058.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{2 x-1}{x+2}$",
      "$y=-x^3+3 x+2$",
      "$y=\\dfrac{3 x-2}{x+1}$",
      "$y=x^3-3 x+2$"
    ],
    "answer": 1,
    "explain": "Đường cong trong hình vẽ là đồ thị hàm số bậc ba với hệ số $a&lt;0$. Suy ra đường cong là đồ thị hàm số $y=-x^3+3 x+2$."
  },
  {
    "id": "2D158TN35",
    "question": "Giả sử chi phí $C(x)$ (tính bằng nghìn đồng) để sản xuất $x$ đơn vị của một loại hàng hoá nào đó được cho bởi hàm số $C(x)=8x^2+40x+1400$. Chi phí để sản xuất đơn vị hàng hoá thứ $60$ xấp xỉ với giá trị nào dưới đây?",
    "options": [
      "$1240$ (nghìn đồng)",
      "$984$ (nghìn đồng)",
      "$1640$ (nghìn đồng)",
      "$664$ (nghìn đồng)"
    ],
    "answer": 1,
    "explain": "Ta có $C(x)=8x^2+40x+1400$.<br>  Chi phí để sản xuất đơn vị hàng hoá thứ $60$ là   $C(60)-C(59) = 8\\cdot 60^2+40\\cdot 60+1400-(8\\cdot 59^2+40\\cdot 59+1400)$<br>$= 32600-31608$<br>$= 992.$"
  },
  {
    "id": "2D151TN36",
    "question": "Hàm số nào dưới đây có đồ thị là hình vẽ bên?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_061.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{x+1}{x-1}$",
      "$y=\\dfrac{x}{x-1}$",
      "$y=\\dfrac{2 x-1}{x-1}$",
      "$y=\\dfrac{x+1}{1-x}$"
    ],
    "answer": 0,
    "explain": "Dựa vào đồ thị ta nhận thấy đồ thị có hai đường tiệm cận là $x=1$ và $y=1$, đồng thời đồ thị hàm số không đi qua $O(0;0)$.<br>  Vậy hàm số có đồ thị như hình vẽ là $y=\\dfrac{x+1}{x-1}$."
  },
  {
    "id": "2D151TN37",
    "question": "Đường cong sau là đồ thị của hàm số nào trong các hàm số cho dưới đây?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_062.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{x-1}{x-1}$",
      "$y=\\dfrac{2x+1}{x-1}$",
      "$y=\\dfrac{2x+1}{x+1}$",
      "$y=\\dfrac{2x-1}{x-1}$"
    ],
    "answer": 3,
    "explain": "<br>- Đồ thị hàm số có tiệm cận ngang là $y=2$.<br>- Đồ thị hàm số có tiệm cận đứng là $x=1$.<br>- Đồ thị hàm số cắt trục tung tại điểm $(0;1)$.  Suy ra đường cong đã cho là đồ thị của hàm số $y=\\dfrac{2x-1}{x-1}$."
  },
  {
    "id": "2D151TN38",
    "question": "Hỏi hàm số nào là hàm số có đồ thị như hình bên?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_066.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{x^2+2x+2}{x+1}$",
      "$y=\\dfrac{x^2-2x-2}{x-1}$",
      "$y=\\dfrac{x^2+2x-2}{x-1}$",
      "$y=\\dfrac{x^2+x-2}{x-1}$"
    ],
    "answer": 2,
    "explain": "Theo đồ thị hàm số, hàm số nhận $x=1$ làm tiệm cận đứng, $y=x+3$ làm tiệm cận xiên.<br>  Xét $y=\\dfrac{x^2+2x-2}{x-1}=x+3+\\dfrac{1}{x-1}$ có<br>  $\\lim_{x\\to+\\infty}[f(x)-(x+3)]=\\lim_{x\\to+\\infty}\\dfrac{1}{x-1}=0$ nên nhận $y=x+3$ làm tiệm cận xiên<br>  và $\\lim_{x\\to 1^+}f(x)=+\\infty$; $\\lim_{x\\to 1^-}f(x)=-\\infty$ nên nhận $x=1$ làm tiệm cận đứng."
  },
  {
    "id": "2D151TN39",
    "question": "Bảng biến thiên dưới đây là của hàm số nào trong số các hàm số được cho trong các đáp án A, B, C, D?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_067.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{2x-3}{x-1}$",
      "$y=\\dfrac{x-1}{x-2}$",
      "$y=\\dfrac{2x-1}{x-1}$",
      "$y=\\dfrac{2x+1}{x-1}$"
    ],
    "answer": 0,
    "explain": "Từ bảng biến thiên: hàm số có tiệm cận đứng $x=1$, tiệm cận ngang $y=2$ và $y'&gt;0$ trên từng khoảng xác định.  <br>- Với $y=\\dfrac{2x-3}{x-1}$ có $y'=\\dfrac{1}{(x-1)^2}&gt;0$ (phù hợp).<br>- Với $y=\\dfrac{2x-1}{x-1}$ có $y'=\\dfrac{-1}{(x-1)^2}&lt;0$ (nghịch biến, loại).<br>- Với $y=\\dfrac{2x+1}{x-1}$ có $y'=\\dfrac{-3}{(x-1)^2}&lt;0$ (nghịch biến, loại).  Vậy chọn $y=\\dfrac{2x-3}{x-1}$."
  },
  {
    "id": "2D151TN40",
    "question": "Đồ thị hàm số $y=\\dfrac{x^2+3x+3}{x+2}$ cắt trục hoành tại bao nhiêu điểm?",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$4$"
    ],
    "answer": 0,
    "explain": "Phương trình hoành độ giao điểm  $ \\dfrac{x^2+3x+3}{x+2}=0 \\Rightarrow x^2+3x+3=0$ (vô nghiệm).<br>  Suy ra đồ thị không cắt trục hoành."
  },
  {
    "id": "2D151TN41",
    "question": "Đồ thị của hàm số nào dưới đây có dạng như đường cong trong hình bên?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_069.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=-x^3-3x+1$",
      "$y=x^3-3x^2+1$",
      "$y=\\dfrac{x-1}{2x+1}$",
      "$y=-x^3+3x+1$"
    ],
    "answer": 3,
    "explain": "<br>- Đồ thị trên là đồ thị của hàm số bậc 3.<br>- Đồ thị đi xuống từ nhánh ngoài cùng bên trái nên $a&lt;0$.<br>- Đồ thị có $2$ cực trị.  Suy ra đường cong hình bên là đồ thị của hàm số $y=-x^3+3x+1$."
  },
  {
    "id": "2D151TN42",
    "question": "Đồ thị của hàm số $y=x^3-3 x+2$ cắt trục tung tại điểm có tung độ bằng",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$-2$"
    ],
    "answer": 2,
    "explain": "Với $x=0$ suy ra $y=2$. Đồ thị hàm số cắt $Oy$ tại điểm $(0;2)$."
  },
  {
    "id": "2D151TN43",
    "question": "Đường cong trong hình là đồ thị của hàm số nào dưới đây?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_070.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{x-1}{x+1}$",
      "$y=\\dfrac{-2x+1}{2x+2}$",
      "$y=\\dfrac{x^2+3x+1}{x+3}$",
      "$y=x^2-3x^2$"
    ],
    "answer": 0,
    "explain": "Từ hình vẽ ta thấy,  đồ thị có đường tiệm cận đứng và tiệm cận ngang lần lượt là $x=-1$ và $y=1$ nên đó là đồ thị của hàm số $y=\\dfrac{x-1}{x+1}$."
  },
  {
    "id": "2D155TN44",
    "question": "Cho đồ thị của ba hàm số $y=f(x)$, $y=f'(x)$, $y=f''(x)$ được vẽ mô tả ở hình dưới đây.<br>  Hỏi đồ thị các hàm số $y=f(x)$, $y=f'(x)$ và $y=f''(x)$ theo thứ tự, lần lượt tương ứng với đường cong nào?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_071.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$(C_3)$; $(C_1)$; $(C_2)$",
      "$(C_1)$; $(C_3)$; $(C_2)$",
      "$(C_2)$; $(C_1)$; $(C_3)$",
      "$(C_1)$; $(C_2)$; $(C_3)$"
    ],
    "answer": 3,
    "explain": "Dựa vào các điểm cực trị của đồ thị hàm số và các giao điểm của đồ thị hàm số với trục hoành, ta thấy  <br>- Đường cong $(C_1)$ là đồ thị của hàm số $y=f(x)$.<br>- Đường cong $(C_2)$ là đồ thị của hàm số $y=f'(x)$.<br>- Đường cong $(C_3)$ là đồ thị của hàm số $y=f(x)$."
  },
  {
    "id": "2D151TN45",
    "question": "Cho hàm số $y=2x-1+\\dfrac{3}{x+3}$ có đồ thị $(C)$. Khoảng cách từ $M(2;-1)$ đến tiệm cận xiên của đồ thị $(C)$ là",
    "options": [
      "$\\dfrac{2}{\\sqrt{5}}$",
      "$\\dfrac{4}{\\sqrt{5}}$",
      "$2$",
      "$4$"
    ],
    "answer": 1,
    "explain": "Vì $\\lim\\limits_{x\\to \\pm \\infty}\\left[y-(2x-1)\\right]=\\lim\\limits_{x\\to \\pm \\infty}\\dfrac{3}{x+3}=0$<br>  nên đồ thị hàm số nhận đường thẳng $\\Delta\\colon y=2x-1$ làm tiệm cận xiên.<br>  Khi đó \\[\\mathrm{d}\\left(M, \\Delta\\right)=\\dfrac{|2\\cdot 2-1\\cdot (-1)-1|}{\\sqrt{2^2+(-1)^2}}=\\dfrac{4}{\\sqrt{5}}.\\]"
  },
  {
    "id": "2D151TN46",
    "question": "Đường cong trong hình bên là đồ thị của hàm số nào?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_073.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=-x^3+x$",
      "$y=\\dfrac{x+1}{x-1}$",
      "$y=x^4-2x^2$",
      "$y=x^3-3x$"
    ],
    "answer": 3,
    "explain": "Đồ thị trong hình bên là đồ thị hàm số bậc ba có hệ số $x^3$ dương.<br>  Dựa vào đáp án, phương án $y=x^3-3x$ là đúng."
  },
  {
    "id": "2D151TN47",
    "question": "Đường cong ở bên là đồ thị của hàm số nào?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_076.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=-x^{2}-4$",
      "$y=-x^{2}-3x-4$",
      "$y=-x^{3}+3x-2$",
      "$y=-x^{3}+3x^{2}-4$"
    ],
    "answer": 3,
    "explain": "Đây là đồ thị của hàm số bậc $3$ và cắt trục tung $Oy$ bằng $-4$ nên đồ thị $y=-x^{3}+3x^{2}-4$ thỏa mãn."
  },
  {
    "id": "2D151TN48",
    "question": "Đồ thị có dạng đường cong như hình bên dưới là của hàm số nảo?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_078.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^4-2x^2$",
      "$y=x^4-2x^2+1$",
      "$y=-x^3+2x^2-3$",
      "$y=-x^4-2x^2$"
    ],
    "answer": 0,
    "explain": "Đồ thị hàm số có dạng $y=ax^4+bx^2+c$ với $a\\neq 0$.<br>  Vì $\\lim\\limits_{x\\to +\\infty}y=+\\infty $ nên $a&gt;0$.<br>  Đồ thị đi qua gốc tọa độ nên đồ thị là của hàm số $y=x^4-2x^2$."
  },
  {
    "id": "2D151TN49",
    "question": "Đường cong ở hình bên là đồ thị của hàm số nào?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_085.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3-x^2-4$",
      "$y=-x^3+6x-4$",
      "$y=x^3-2x-4$",
      "$y=-x^3+3x^2-4$"
    ],
    "answer": 3,
    "explain": "Đường cong trong hình vẽ là đồ thị của hàm số bậc ba $y=ax^3+bx^2+cx+d$ với $a&lt;0$.<br>  Đồng thời đồ thị đi qua điểm $(-1;0)$ và $(2;0)$ nên chỉ có hàm số $y=-x^3+3x^2-4$ thỏa mãn."
  },
  {
    "id": "2D151TN50",
    "question": "Đồ thị của hàm số nào dưới đây có dạng như đường cong như hình bên?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_087.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y = x^3 - 3x - 1$",
      "$y = -x^3 - 2x^2 + x - 2$",
      "$y = -x^3 + 3x + 1$",
      "$y = -x^3 + x + 1$"
    ],
    "answer": 2,
    "explain": "Dựa vào đồ thị ta thấy hàm số có dạng là hàm bậc ba $y = ax^3 + bx^2 + cx + d$.<br>  Vì $\\displaystyle \\lim\\limits_{x \\to +\\infty} y = -\\infty \\Rightarrow a &lt; 0$.<br>  Hơn nữa, hàm số đạt cực trị tại $x = -1$ và $x = 1$.<br>  Xét hàm số $y = -x^3 + 3x + 1$, ta có $y' = -3x^2 + 3$.<br>  Do đó $y' = 0 \\Leftrightarrow -3x^2 + 3 = 0 \\Leftrightarrow x = -1 \\text{ hoặc } x = 1.$<br>  Suy ra hàm số $y = -x^3 + 3x + 1$ có $a = -1 &lt; 0$ và đạt cực trị tại $x = -1$, $x = 1$.<br>  Vậy đồ thị của hàm số $y = -x^3 + 3x + 1$ có dạng như hình đã cho."
  },
  {
    "id": "2D151TN51",
    "question": "Đường cong trong hình vẽ bên là của đồ thị hàm số nào sau đây?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_092.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{x+2}{x-2}$",
      "$y=-x^3+3x^2-1$",
      "$y=\\dfrac{x-1}{x-2}$",
      "$y=x^4-3x^2+2$"
    ],
    "answer": 0,
    "explain": "Đồ thị hàm số có tiệm cận đứng $x=2$ và tiệm cận ngang $y=1$. <br>  Đồ thị hàm số cắt trục $Oy$ tại điểm có hoành độ âm. <br>  Với hàm số $y = \\dfrac{x+2}{x-2}$, ta có $x=0$ suy ra $y =\\dfrac{0+2}{0-2} = -1 &lt; 0$. <br>  Vậy đường cong trong hình vẽ bên là của đồ thị hàm số $y=\\dfrac{x+2}{x-2}$."
  },
  {
    "id": "2D151TN52",
    "question": "Đường cong trong hình vẽ bên là của đồ thị hàm số nào sau đây?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_093.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3-3x^2-2$",
      "$y=-x^3+3x^2-2$",
      "$y=x^4-2x^2-2$",
      "$y=-x^4+2x^2-2$"
    ],
    "answer": 1,
    "explain": "Dựa vào hình vẽ, ta nhận thấy đây là đồ thị của hàm số bậc ba $y=ax^3+bx^2+cx+d$ với hệ số $a&lt;0$.<br>  Vậy đây là đồ thị của hàm số $y=-x^3+3x^2-2$."
  },
  {
    "id": "2D152TN53",
    "question": "Hình vẽ bên là đồ thị của hàm số $y=\\dfrac{a x+b}{c x+d}$.  Tâm đối xứng của đồ thị hàm số có tọa độ là<br><img src=\"data/12/2D1/im2D1/2D15_tikz_095.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$(-1;-1)$",
      "$(1; 1)$",
      "$(1;-1)$",
      "$(-1; 1)$"
    ],
    "answer": 3,
    "explain": "Tâm đối xứng của đồ thị hàm số có tọa độ là $(-1; 1)$."
  },
  {
    "id": "2D151TN54",
    "question": "Đường cong trong hình bên là đồ thị của hàm số nào dưới đây?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_096.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{x+1}{x-1}$",
      "$y=\\dfrac{2x-1}{x-1}$",
      "$y=\\dfrac{1-x}{-x+1}$",
      "$y=\\dfrac{x^2-1}{x-1}$"
    ],
    "answer": 0,
    "explain": "Đường cong trong hình vẽ là đồ thị của hàm số có dạng $y=\\dfrac{ax+b}{cx+d}$ với $ad-bc\\ne 0$ nên loại $y=\\dfrac{x^2-1}{x-1}$ và $y=\\dfrac{1-x}{-x+1}$.<br>  Đồ thị hàm số có tiệm cận ngang là $y=1$ nên loại $y=\\dfrac{2x-1}{x-1}$."
  },
  {
    "id": "2D151TN55",
    "question": "Đồ thị của hàm số $y=\\dfrac{x^2+2x+2}{x+1}$ là đường cong nào trong các đường cong sau?",
    "options": [
      "<br><img src=\"data/12/2D1/im2D1/2D15_tikz_097.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
      "<br><img src=\"data/12/2D1/im2D1/2D15_tikz_098.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
      "<br><img src=\"data/12/2D1/im2D1/2D15_tikz_099.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
      "<br><img src=\"data/12/2D1/im2D1/2D15_tikz_100.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">"
    ],
    "answer": 1,
    "explain": "Đồ thị hàm số $y=\\dfrac{x^2+2x+2}{x+1}$ có tiệm cận đứng $x=-1$. <br>  Ta có $y=\\dfrac{x^2+2x+2}{x+1}=x+1+\\dfrac{1}{x+1}$. <br>  Vì $\\lim\\limits_{x\\to-\\infty} \\left(\\dfrac{x^2+2x+2}{x+1}-(x+1)\\right)=\\lim\\limits_{x\\to-\\infty} \\dfrac{1}{x+1}=0$ nên đồ thị hàm số có đường tiệm cận xiên là $y=x+1$."
  },
  {
    "id": "2D151TN56",
    "question": "Đồ thị hàm số nào dưới đây có dạng như đường cong trong hình bên?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_101.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=-x^3-3 x^2+4$",
      "$y=x^3-3 x^2-4$",
      "$y=-\\dfrac{x^3}{3}+x^2-4$",
      "$y=x^3+3 x^2-4$"
    ],
    "answer": 1,
    "explain": "Hàm số cần tìm có dạng $y=ax^3+bx^2+cx+d$.  Ta thấy  <br>- $y(0)=-4 \\Rightarrow d=-4$.  <br>  Ta loại đáp án $y=-x^3-3 x^2+4$.<br>- $\\lim\\limits_{x \\to \\pm\\infty} y = \\pm\\infty \\Rightarrow a&gt;0$.  <br>  Ta loại đáp án $y=-\\dfrac{x^3}{3}+x^2-4$.<br>- Đạo hàm $y'=3x^2+2bx+c$.  <br>  Hàm số đạt cực trị tại $x=-2$ và $x=0$ nên phương trình $y'=0$ có $2$ nghiệm $x=-2$ và $x=0$.   <br>  Ta nhận đáp án $y=x^3-3 x^2-4$."
  },
  {
    "id": "2D151TN57",
    "question": "Hàm số nào dưới đây có bảng biến thiên như sau?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_102.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3-3x$",
      "$y=-x^3+3x$",
      "$y=-x^2+2x$",
      "$y=x^2-2x$"
    ],
    "answer": 1,
    "explain": "Bảng biến thiên có dạng của hàm số $y=ax^3+bx^2+cx+d$ với $a&lt;0$, suy ra hàm số $y=-x^3+3x$ thỏa mãn."
  },
  {
    "id": "2D151TN58",
    "question": "Hàm số nào trong các hàm số sau có đồ thị như hình vẽ bên dưới  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_103.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3-3x+2$",
      "$y=\\dfrac{x+2}{x+1}$",
      "$y=\\dfrac{x^2+2}{x+1}$",
      "$y=\\dfrac{x^2+x+2}{x+1}$"
    ],
    "answer": 3,
    "explain": "Đồ thị hàm số có tiệm cận xiên $y=x$ và tiệm cận đứng $x=-1$ do đó hàm số $y=\\dfrac{x^2+x+2}{x+1}$ thỏa mãn."
  },
  {
    "id": "2D152TN59",
    "question": "Tọa độ tâm đối xứng của đồ thị hàm số $y=x^3-3x+2$ là",
    "options": [
      "$(2;0)$",
      "$(0;2)$",
      "$(1;0)$",
      "$(-1;4)$"
    ],
    "answer": 1,
    "explain": "Xét hàm số $y=x^3-3x+2$.<br>  Ta có $y'=3x^2-3$ và $y''=6x$.<br>  Cho $y''=0 \\Leftrightarrow 6x = 0 \\Leftrightarrow x = 0$.<br>  Suy ra $y(0)=2$.<br>  Vậy tâm đối xứng là điểm uốn $I(0;2)$."
  },
  {
    "id": "2D151TN60",
    "question": "Đồ thị của hàm số nào dưới đây có dạng đường cong như hình bên?<br><img src=\"data/12/2D1/im2D1/2D15_tikz_107.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y = -x^3 + 3x^2 - 1$",
      "$y = x^3 - 3x^2 - 1$",
      "$y = \\dfrac{x^2 - 3x + 1}{x - 1}$",
      "$y = \\dfrac{x + 1}{x - 1}$"
    ],
    "answer": 0,
    "explain": "Dựa vào đồ thị, ta thấy đây là đồ thị của hàm số bậc ba có dạng $ y=ax^3+bx^2+cx+d$ với $a&lt;0$."
  },
  {
    "id": "2D151TN61",
    "question": "Hàm số nào dưới đây có dạng đồ thị như hình vẽ?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_108.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3+3x+2$",
      "$y=-x^3+3x+2$",
      "$y=x^3-3x+1$",
      "$y=x^3-3x+2$"
    ],
    "answer": 3,
    "explain": "Ta có $\\lim\\limits_{x\\to+\\infty}y=+\\infty$, đi qua các điểm $(1;0)$ và $(0;2)$.<br>  Từ các đáp án, ta có hàm số $y=x^3-3x+2$ thỏa mãn."
  },
  {
    "id": "2D151TN62",
    "question": "Đồ thị hàm số nào dưới đây có dạng đường cong như hình vẽ?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_111.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=-x^3+3x+1$",
      "$y=\\dfrac{x-1}{x+2}$",
      "$y=x^3-3x+1$",
      "$y=\\dfrac{x^2+3}{x+2}$"
    ],
    "answer": 2,
    "explain": "Đồ thị trong hình vẽ là đồ thị hàm số bậc ba $y=ax^3+bx^2+cx+d$ với $a \\ne 0$ nên loại các phương án $y=\\dfrac{x-1}{x+2}$ và $y=\\dfrac{x^2+3}{x+2}$.<br>  Dựa vào hình vẽ, nhánh cuối của đồ thị đi lên, tức là $\\lim\\limits_{x \\to +\\infty} y=+\\infty$ nên loại $y=-x^3+3x+1$.<br>  Vậy đường cong trong hình vẽ là đồ thị hàm số $y=x^3-3x+1$."
  },
  {
    "id": "2D151TN63",
    "question": "Hình vẽ bên là đồ thị của hàm số nào sau đây?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_116.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y = x^3 + 3x^2 - 2$",
      "$y = -x^3 + 3x^2 - 2$",
      "$y = x^3 - 3x^2 - 2$",
      "$y = \\dfrac{1}{2}x^3 + \\dfrac{3}{2}x^2 - 2$"
    ],
    "answer": 0,
    "explain": "Đường cong ở hình vẽ đi qua điểm $(2;2)$ nên là đồ thị của hàm số $y = x^3 + 3x^2 - 2$."
  },
  {
    "id": "2D151TN64",
    "question": "Biết đồ thị hàm số $f(x) = ax^3 + bx^2 + cx + d \\ (a,b,c,d \\in \\mathbb{R})$ có $2$ điểm cực trị là $M(-2;0)$ và $N(0;4)$. Tính giá trị biểu thức $T = 10a + 5b + 100c - 7d$ (làm tròn đến một chữ số thập phân).",
    "options": [
      "$T = -53$",
      "$T = 11$",
      "$T = -33$",
      "$T = 33$"
    ],
    "answer": 0,
    "explain": "Ta có $f'(x)=3ax^2+2bx+c$.<br>  Vì $M$, $N$ thuộc đồ thị hàm số nên $d=4$ và $-8a+4b-2c+4=0$. Hơn nữa  $f'(-2)=0 \\text{ và } f'(0)=0 \\Rightarrow 12a-4b+c=0 \\text{ và } c=0.$  Do đó $d=4$, $c=0$ và $12a-4b=0 \\text{ và } -8a+4b=-4\\Rightarrow a=-1 \\text{ và } b=-3.$<br>  Vậy $T = 10a + 5b + 100c - 7d=-10-15+0-28=-53$."
  },
  {
    "id": "2D151TN65",
    "question": "Cho đồ thị như hình vẽ bên dưới. Hỏi đồ thị là của hàm số nào dưới đây?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_117.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=-x^3+3x^2-4$",
      "$y=-x^3+3x^2-2$",
      "$y=-x^3-4$",
      "$y=x^3-3x^2-4$"
    ],
    "answer": 0,
    "explain": "Từ đồ thị hàm số, ta có hàm số cần tìm là hàm số bậc ba $y=ax^3+bx^2+cx+d$ ($a\\ne 0$).  <br>- Hệ số $a&lt;0$, loại phương án $y=x^3-3x^2-4$.<br>- Đồ thị hàm số cắt $Oy$ tại $y=-4$, suy ra $d=-4$, loại phương án $y=-x^3+3x^2-2$<br>- Hàm số có $2$ cực trị, loại phương án $y=-x^3-4$.  Vậy hàm số cần tìm là $y=-x^3+3x^2-4$."
  },
  {
    "id": "2D151TN66",
    "question": "Đường cong ở hình sau là đồ thị của hàm số nào?  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_118.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=-x^3+3 x^2-4$",
      "$y=\\dfrac{x+1}{x-1}$",
      "$y=x^3-4$",
      "$y=\\dfrac{x^2+4 x-1}{x-1}$"
    ],
    "answer": 0,
    "explain": "Dựa vào đồ thị hàm số ta thấy đây là hàm số bậc $3$, có hệ số $a&lt;0$ và có $2$ cực trị nên chọn đáp án $y=-x^3+3 x^2-4$."
  },
  {
    "id": "2D151TN67",
    "question": "Cho hàm số đa thức bậc ba $y=f(x)$ có đồ thị như hình vẽ bên. <br>  Biết phương trình $f(x)-m=0$ có duy nhất một nghiệm. Tìm tất cả giá trị của $m$.<br><img src=\"data/12/2D1/im2D1/2D15_tikz_121.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$m \\in \\mathbb{R}$",
      "$m \\in \\left\\{-3;-1\\right\\}$",
      "$m \\in \\left(-\\infty;-1\\right) \\cup \\left(3;+\\infty\\right)$",
      "$m \\in \\left(-1;3\\right)$"
    ],
    "answer": 2,
    "explain": "<br><img src=\"data/12/2D1/im2D1/2D15_tikz_122.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Theo giả thiết, phương trình $f(x)=m$ có duy nhất một nghiệm.<br>  Theo hình vẽ, đồ thị hàm số $y=f(x)$ cắt đường thẳng $y=m$ tại một điểm khi và chỉ khi $m \\in \\left(-\\infty;-1\\right) \\cup \\left(3;+\\infty\\right)$."
  },
  {
    "id": "2D151TN68",
    "question": "Cho hàm số $y=\\dfrac{ax+3}{bx+c}$ có đồ thị là đường cong như trong hình vẽ dưới đây.  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_123.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tính giá trị $M=a+b+c$.",
    "options": [
      "$-1$",
      "$4$",
      "$0$",
      "$3$"
    ],
    "answer": 1,
    "explain": "Theo hình vẽ, đồ thị hàm số $y=\\dfrac{ax+3}{bx+c}$ đi qua điểm $A(-3;0)$ nên $0=\\dfrac{-3a+3}{-3b+c} \\Rightarrow -3a+3=0 \\Rightarrow a=1. \\quad (1)$  Đồ thị của hàm số $y=\\dfrac{ax+3}{bx+c}$ có đường tiệm cận   đứng là $x=-\\dfrac{c}{b}$ và đường tiệm cận ngang là $y=\\dfrac{a}{b}$.<br>  Mà theo hình vẽ, đồ thị của hàm số $y=\\dfrac{ax+3}{bx+c}$ có đường tiệm cận đứng là $x=-2$ và đường tiệm cận ngang là $y=1$  nên ta có $-\\dfrac{c}{b}=-2 \\quad (2) \\text{ và } \\dfrac{a}{b}=1 \\quad (3).$<br>  Từ (1), (2) và (3) ta có hệ  $a=1 \\text{ và } -\\dfrac{c}{b}=-2 \\text{ và } \\dfrac{a}{b}=1 \\Rightarrow a=1 \\text{ và } 2b-c=0 \\text{ và } a-b=0 \\Rightarrow a=1 \\text{ và } b=1 \\text{ và } c=2.$  Vậy $M=a+b+c=1+1+2=4$."
  },
  {
    "id": "2D151TN69",
    "question": "Đường cong ở hình bên là đồ thị của hàm số $ y=\\dfrac{ax+b}{cx+d}$ với $a$ , $b$ , $c$ , $d$ là các số thực. Mệnh đề nào dưới đây đúng?<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS1_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$ y' &gt; 0$, $\\forall x\\ne 2$",
      "$ y' &gt; 0$, $\\forall x\\ne 3$",
      "$ y' &lt; 0$, $\\forall x\\ne 2$",
      "$ y' &lt; 0$, $\\forall x\\ne 3$"
    ],
    "answer": 2,
    "explain": "Dựa vào đồ thị hàm số ta thấy đồ thị là đường đi xuống từ trái qua phải trên các khoảng $\\left(-\\infty\\,;\\,2\\right)$ và $\\left(2\\,;\\,+\\infty\\right)$ nên hàm số nghịch biến, suy ra $ y' &lt; 0\\,,\\,\\,\\forall x\\ne 2$."
  },
  {
    "id": "2D151TN70",
    "question": "Bảng biến thiên sau là của hàm số nào dưới đây?  <br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS1_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$ y=\\dfrac{x^2+2x-2}{x-1}$",
      "$ y=\\dfrac{x^2+2x-2}{x+1}$",
      "$ y=\\dfrac{x^2+2x+2}{x-1}$",
      "$ y=\\dfrac{x^2+2x+2}{x+1}$"
    ],
    "answer": 0,
    "explain": "Dựa vào bảng biến thiên ta thấy đồ thị hàm số có tiệm cận đứng là đường thẳng $ x=1$. Do đó hàm số $ y=\\dfrac{x^2+2x-2}{x+1}$ và $ y=\\dfrac{x^2+2x+2}{x+1}$ không thỏa mãn.<br>  Ta thấy đồ thị hàm số đi qua điểm $\\left(0;2\\right)$ nên hàm số $ y=\\dfrac{x^2+2x+2}{x-1}$ không thỏa mãn.<br>  Vậy bảng biến thiên đề bài cho là của hàm số $ y=\\dfrac{x^2+2x-2}{x-1}$."
  },
  {
    "id": "2D151TN71",
    "question": "Cho hàm số $y=ax^3+3x+d$ có đồ thị như hình bên. Mệnh đề nào dưới đây đúng?<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS1_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$a&gt;0; d&lt;0$",
      "$a&gt;0; d&gt;0$",
      "$a&lt;0; d&lt;0$",
      "$a&lt;0; d&gt;0$"
    ],
    "answer": 2,
    "explain": "Đồ thị cắt trục tung tại điểm có hoành độ âm suy ra $d&lt;0$.<br>  Và $\\lim\\limits_{x\\to +\\infty} y=-\\infty$, suy ra $a&lt;0$."
  },
  {
    "id": "2D151TN72",
    "question": "Hàm số nào trong các hàm số sau có đồ thị như hình vẽ bên.<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS13_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3-3x+2$",
      "$y=\\dfrac{x+2}{x+1}$",
      "$y=\\dfrac{x^2+2}{x+1}$",
      "$y=\\dfrac{x^2+x+2}{x+1}$"
    ],
    "answer": 3,
    "explain": "Đồ thị hàm số có tiệm cận xiên $y=x$ và tiệm cận đứng $x=-1$ do đó hàm số $y=\\dfrac{x^2+x+2}{x+1}$ thỏa mãn."
  },
  {
    "id": "2D151TN73",
    "question": "Đồ thị hàm số nào dưới đây có dạng như đường cong trong hình vẽ?<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS2_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{2x-1}{x+1}$",
      "$y=\\dfrac{x^2+2x-2}{x-1}$",
      "$y=-x^3+3x+1$",
      "$y=x^3-3x+1$"
    ],
    "answer": 2,
    "explain": "Đồ thị trên là đồ thị hàm bậc $3$ có $a&lt;0$ nên chỉ có hàm số $y=-x^3+3x+1$ thỏa mãn."
  },
  {
    "id": "2D151TN74",
    "question": "Bảng biến thiên trong hình bên dưới là của hàm số nào sau đây?  <br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS2_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$ y=\\dfrac{x+3}{x-1}$",
      "$ y=\\dfrac{-x-2}{x-1}$",
      "$ y=\\dfrac{-x+3}{x-1}$",
      "$ y=\\dfrac{-x-3}{x-1}$"
    ],
    "answer": 2,
    "explain": "Nhìn vào bảng biến thiên ta thấy ngay tiệm cận đứng $x=1$ và tiệm cận ngang $ y=-1$, do đó hàm số $ y=\\dfrac{x+3}{x-1}$ không thỏa mãn.<br>   Nhìn vào bảng biến thiên, hàm số nghịch biến trên các khoảng $\\left(-\\infty ;1\\right)$ và $\\left(1;+\\infty\\right)$.<br>  Do đó hàm số $ y=\\dfrac{-x-2}{x-1}$ và   $ y=\\dfrac{-x-3}{x-1}$ không thỏa mãn do có $y'&gt;0, \\forall x \\ne 1$.<br>  Hàm số $ y=\\dfrac{-x+3}{x-1}$ có $ y'=\\dfrac{-2}{(x-1)^2} &lt; 0, \\forall x \\ne 1$ nên thỏa mãn."
  },
  {
    "id": "2D151TN75",
    "question": "Cho hàm số $y=f(x)$ có đồ thị như hình vẽ bên. Đồ thị đó có thể là đồ thị của hàm số nào sau đây?<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS20_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3+3x-1$",
      "$y=\\dfrac{x^2-x+1}{x-1}$",
      "$y=\\dfrac{x+1}{x-1}$",
      "$y=-x+1+\\dfrac{1}{x-1}$"
    ],
    "answer": 1,
    "explain": "Từ đồ thị hàm số ta thấy, đồ thị ở trên là đồ thị hàm số dạng bậc hai trên bậc nhất và có đường tiệm cận xiên.<br>  Do đó hàm số thỏa mãn đồ thị là $y=\\dfrac{x^2-x+1}{x-1}$."
  },
  {
    "id": "2D151TN76",
    "question": "Biết rằng đường cong ở hình bên là đồ thị của một trong các hàm số dưới đây, đó là hàm số nào?% Đồ thị hàm y=ax^3+bx^2+cx+d. Nếu hệ số lớn cần điều chỉnh hệ trục, vùng lưới, domain và lệnh \\clip  <br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS4_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x^3-2x^2$",
      "$y=x^3-5x^2+6x$",
      "$y=-x^3+2x^2$",
      "$y=-x^3+5x^2-6x$"
    ],
    "answer": 1,
    "explain": "Từ đồ thị hàm số trên, ta có hàm số đã cho là hàm bậc ba và có hệ số $a&gt;0$.<br>  Lại có đồ thị đã cho cắt trục hoành tại ba điểm là $0$, $2$, $3$. Do đó hàm số có đường cong như hình vẽ bên là hàm số $y=x^3-5x^2+6x$."
  },
  {
    "id": "2D153TN77",
    "question": "Cho hàm số bậc ba $y=f(x)$ có đồ thị là đường cong trong hình bên. Số nghiệm thực của phương trình $f(x)=1$ là<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS9_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$1$",
      "$0$",
      "$2$",
      "$3$"
    ],
    "answer": 3,
    "explain": "Vẽ đường thẳng $d\\colon y=1$ trên cùng hệ trục tọa độ với đồ thị $(C)\\colon y=f(x)$.<br> Dựa vào đồ thị, phương trình $f(x)=1$ có $3$ phân biệt."
  },
  {
    "id": "2D152TN2",
    "question": "Cho hàm số $y=\\dfrac{ax+b}{cx+d}$ có đồ thị như đường cong trong hình bên. Tâm đối xứng của đồ thị hàm số có tọa độ là<br><img src=\"data/12/2D1/im2D15/loc3_2_TL_TN_DS_THPT__007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$\\left(2;0\\right)$",
      "$\\left(-1;2\\right)$",
      "$\\left(2;-1\\right)$",
      "$\\left(-1;0\\right)$"
    ],
    "answer": 1,
    "explain": "Dựa vào đồ thị ta có tiệm cận ngang là $ y=2 $ và tiệm cận đứng là $ x=-1 $.<br>  Suy ra tâm đối xứng của đồ thị có tọa độ $\\left(-1;2\\right)$."
  }
];
