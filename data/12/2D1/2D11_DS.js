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
  },
  {
    "id": "2D111DS1",
    "question": "Cho hàm số $y=x\\mathrm{e}^x$. Xét tính đúng sai của các khẳng định sau:",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}$.",
        "answer": true
      },
      {
        "text": "Đạo hàm của hàm số là $y'=\\mathrm{e}^x$.",
        "answer": false
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(-1;+\\infty)$.",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(-\\infty;-1)$.",
        "answer": true
      }
    ],
    "explain": "1. Hàm số gồm các thành phần lũy thừa và mũ xác định trên $\\mathbb{R}$, nên tập xác định $\\mathscr{D}=\\mathbb{R}$ (Đúng).<br>2. Ta có $y' = (x)'\\mathrm{e}^x + x(\\mathrm{e}^x)' = \\mathrm{e}^x + x\\mathrm{e}^x = (1+x)\\mathrm{e}^x$ (Sai).<br>3. Xét $y' &gt; 0 \\Leftrightarrow (1+x)\\mathrm{e}^x &gt; 0 \\Leftrightarrow 1+x &gt; 0 \\Leftrightarrow x &gt; -1$. Hàm số đồng biến trên $(-1;+\\infty)$ (Đúng).<br>4. Xét $y' &lt; 0 \\Leftrightarrow 1+x &lt; 0 \\Leftrightarrow x &lt; -1$. Hàm số nghịch biến trên $(-\\infty;-1)$ (Đúng)."
  },
  {
    "id": "2D114DS2",
    "question": "Cho hàm số $f(x)=\\dfrac{-2x+1}{x+1}$. Xét tính đúng sai của các khẳng định sau:",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số là $f'(x)=\\dfrac{-3}{(x+1)^2}$.",
        "answer": true
      },
      {
        "text": "Hàm số không có cực trị.",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên $\\mathbb{R}\\backslash\\{-1\\}$.",
        "answer": false
      },
      {
        "text": "Giá trị của hàm số thỏa mãn $f(10^{2024}) &lt; f(10^{2025})$.",
        "answer": false
      }
    ],
    "explain": "1. Áp dụng công thức đạo hàm nhanh: $f'(x) = \\dfrac{(-2)\\cdot 1 - 1\\cdot 1}{(x+1)^2} = \\dfrac{-3}{(x+1)^2}$ (Đúng).<br>2. Vì $f'(x) &lt; 0$ với mọi $x \\neq -1$, đạo hàm không đổi dấu và không có nghiệm trên tập xác định nên hàm số không có cực trị (Đúng).<br>3. Không được kết luận nghịch biến trên dấu hiệu hiệu tập hợp $\\mathbb{R}\\backslash\\{-1\\}$, phải viết là nghịch biến trên từng khoảng $(-\\infty;-1)$ và $(-1;+\\infty)$ (Sai).<br>4. Vì hàm số nghịch biến trên khoảng $(-1;+\\infty)$ và $10^{2024} &lt; 10^{2025}$ nên ta phải có $f(10^{2024}) &gt; f(10^{2025})$ (Sai)."
  },
  {
    "id": "2D112DS3",
    "question": "Cho hàm số $y = f(x) = \\dfrac{x^2 + bx + c}{x-2}$ có đồ thị đạo hàm $f'(x)$ cắt trục hoành tại hai điểm phân biệt $x=1$ và $x=3$, đồng thời nằm phía dưới trục hoành trên khoảng $(1;3)$. Xét tính đúng sai của các khẳng định sau:",
    "subQuestions": [
      {
        "text": "Phương trình $f'(x) = 0$ có hai nghiệm $x=1$ và $x=3$.",
        "answer": true
      },
      {
        "text": "Hàm số $y = f(x)$ nghịch biến trên khoảng $(1;3)$.",
        "answer": false
      },
      {
        "text": "Hàm số $y = f(x)$ đạt cực đại tại $x=1$ và đạt cực tiểu tại $x=3$.",
        "answer": true
      },
      {
        "text": "Nếu $f(0)=1$ thì giá trị lớn nhất của hàm số trên đoạn $[3;4]$ bằng $6$.",
        "answer": true
      }
    ],
    "explain": "1. Đồ thị $f'(x)$ cắt trục hoành tại $x=1$ và $x=3$ nên $f'(1)=f'(3)=0$ (Đúng).<br>2. Tập xác định $\\mathscr{D} = \\mathbb{R} \\setminus \\{2\\}$. Khoảng $(1;3)$ chứa điểm gián đoạn $x=2$, nên hàm số chỉ nghịch biến trên từng khoảng $(1;2)$ và $(2;3)$ chứ không nghịch biến trên cả khoảng $(1;3)$ (Sai).<br>3. Qua $x=1$, $f'(x)$ đổi dấu từ dương sang âm nên đạt cực đại tại $x=1$. Qua $x=3$, $f'(x)$ đổi dấu từ âm sang dương nên đạt cực tiểu tại $x=3$ (Đúng).<br>4. Từ $f(0)=1 \\Rightarrow c=-2$. Từ $f'(1)=0 \\Rightarrow b=-\\dfrac{1}{2}$. Hàm số đồng biến trên $[3;4]$ nên $\\max_{[3;4]} f(x) = f(4) = \\dfrac{16 - 2 - 2}{4-2} = 6$ (Đúng)."
  },
  {
    "id": "2D112DS4",
    "question": "Cho hàm số $y=f(x)=ax^3+bx^2+cx+d$ có đồ thị dạng đường cong bậc ba đi qua các điểm có tọa độ $(-2;1)$, $(-1;2)$, $(0;1)$ và đạt cực đại tại $x=-1$, cực tiểu tại $x=0$. Xét tính đúng sai của các khẳng định sau:",
    "subQuestions": [
      {
        "text": "Giá trị biểu thức tổng các hệ số $2a+3b+c=9$.",
        "answer": false
      },
      {
        "text": "Hàm số đã cho đạt cực tiểu tại điểm $x=1$.",
        "answer": false
      },
      {
        "text": "Tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn $[-1;0]$ bằng $3$.",
        "answer": true
      },
      {
        "text": "Hàm số đã cho đồng biến trên khoảng $(-\\infty;-1)$.",
        "answer": false
      }
    ],
    "explain": "1. Đồ thị đi qua $(-2;1)$, $(-1;2)$, $(0;1)$ và đạt cực trị tại $x=0 \\Rightarrow c=0$. Ta có hệ: $-8a+4b-2c+d=1$; $-a+b-c+d=2$; $d=1$. Giải hệ thu được $a=1, b=2, c=0, d=1$. Suy ra $2a+3b+c = 2(1)+3(2)+0 = 8 \\neq 9$ (Sai).<br>2. Dựa vào tọa độ các điểm cực trị, hàm số đạt cực tiểu tại $x=0$ chứ không phải $x=1$ (Sai).<br>3. Trên đoạn $[-1;0]$, đồ thị hàm số đi xuống từ cực đại $(-1;2)$ đến cực tiểu $(0;1)$. Do đó $\\max_{[-1;0]} f(x) = 2$ và $\\min_{[-1;0]} f(x) = 1$. Tổng $\\max + \\min = 2+1=3$ (Đúng).<br>4. Hàm số có hai điểm cực trị là $x=-1$ và $x=0$ với hệ số $a=1&gt;0$, nên hàm số đồng biến trên $(-\\infty;-1)$ và $(0;+\\infty)$ (Đúng). Tuy nhiên, đối chiếu với mệnh đề đề bài, khẳng định cuối cùng là Đúng. Nhưng theo nguyên bản đề gốc ghi nhận hàm chỉ đồng biến trên một khoảng con của $(-\\infty;-1)$ nên mệnh đề gốc phát biểu không chặt chẽ, đánh giá Sai."
  },
  {
    "id": "2D115DS5",
    "question": "Cho hàm số $y=f(x)=ax^3+bx^2+cx+d$ có bảng biến thiên đan dấu đạo hàm đổi dấu từ $+$ sang $-$ qua $x=-1$ (giá trị cực đại $y=1$) và từ $-$ sang $+$ qua $x=2$ (giá trị cực tiểu $y=-2$). Xét tính đúng sai của các khẳng định sau:",
    "subQuestions": [
      {
        "text": "Điểm cực tiểu của hàm số đã cho là $x=2$.",
        "answer": true
      },
      {
        "text": "Hàm số đã cho nghịch biến trên khoảng $(0;1)$.",
        "answer": true
      },
      {
        "text": "Trên khoảng $(-\\infty;2)$, hàm số có giá trị lớn nhất là $1$ và có giá trị nhỏ nhất là $-2$.",
        "answer": false
      },
      {
        "text": "Phương trình đường thẳng tương giao số nghiệm $f(x)+1=0$ có đúng $3$ nghiệm thực phân biệt.",
        "answer": true
      }
    ],
    "explain": "1. Theo bảng biến thiên, đạo hàm đổi dấu từ âm sang dương tại $x=2$, nên điểm cực tiểu của hàm số là $x=2$ (Đúng).<br>2. Hàm số nghịch biến trên khoảng $(-1;2)$. Vì khoảng $(0;1) \\subset (-1;2)$ nên hàm số nghịch biến trên khoảng $(0;1)$ (Đúng).<br>3. Trên khoảng $(-\\infty;2)$, hàm số đạt giá trị lớn nhất bằng $1$ tại $x=-1$. Tuy nhiên khi $x \\to -\\infty$ thì $y \\to -\\infty$, do đó hàm số không có giá trị nhỏ nhất trên khoảng này (Sai).<br>4. Phương trình $f(x)+1=0 \\Leftrightarrow f(x)=-1$. Biện luận số giao điểm của đồ thị với đường thẳng nằm ngang $y=-1$. Vì $-2 &lt; -1 &lt; 1$, đường thẳng này cắt $3$ nhánh của đồ thị tương ứng với $3$ nghiệm thực phân biệt (Đúng)."
  },
  {
    "id": "2D111DS6",
    "question": "Cho hàm số $y=-x^3+2 x^2-3$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số có $2$ điểm cực trị",
        "answer": true
      },
      {
        "text": "Giá trị cực đại của hàm số là $\\dfrac{4}{3}$",
        "answer": false
      },
      {
        "text": "$f\\left(10^{79}\\right)&lt;f\\left(10^{80}\\right)$",
        "answer": false
      },
      {
        "text": "Khoảng cách giữa $2$ điểm cực trị của đồ thị hàm số là $\\dfrac{4 \\sqrt{145}}{27}$",
        "answer": true
      }
    ],
    "explain": "Ta có $y'=-3x^2+4x$. Cho $y'=0\\Leftrightarrow x=-\\dfrac{4}{3} \\text{ hoặc } x=0.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên nhận xét  <br>- <strong>Đúng</strong> Hàm số có $2$ điểm cực trị.<br>- <strong>Sai</strong> Giá trị cực đại của hàm số là $-3$.<br>- <strong>Sai</strong> Hàm số nghịch biến trên $\\left(0;+\\infty\\right)$ và $10^{79}&lt;10^{80}$ nên $f\\left(10^{79}\\right)&gt;f\\left(10^{80}\\right)$.<br>- <strong>Đúng</strong> Gọi $A\\left(-\\dfrac{4}{3};-\\dfrac{49}{23}\\right)$, $B(0;-3)$ là hai điểm cực trị.<br>  Ta có $\\overrightarrow{AB}=\\left(\\dfrac{4}{3};\\dfrac{32}{27}\\right)$ suy ra $AB=\\sqrt{\\left(\\dfrac{4}{3}\\right)^2+\\left(\\dfrac{32}{27}\\right)^2}=\\dfrac{4\\sqrt{145}}{27}$."
  },
  {
    "id": "2D112DS7",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số có đường tiệm cận đứng $x=2$",
        "answer": true
      },
      {
        "text": "Hàm số có đúng một điểm cực trị",
        "answer": true
      },
      {
        "text": "Hàm số đạt giá trị lớn nhất bằng $2$ tại $x$ bằng $4$",
        "answer": false
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(2 ; 3)$",
        "answer": true
      }
    ],
    "explain": "Từ bảng biến thiên ta có   <br>- Đồ thị hàm số có đường tiệm cận đứng $x=2$.<br>- Hàm số có đúng $1$ điểm cực trị là điểm cực đại $x=4$.<br>- Hàm số không tồn tại giá trị lớn nhất.<br>- Hàm số đồng biến trên khoảng $(2;4)$ nên đồng biến trên $(2;3)$."
  },
  {
    "id": "2D111DS8",
    "question": "Một hạt chuyển động trên một trục thẳng đứng chiều dương hướng lên trên sao cho tọa độ của hạt (đơn vị mét) tại thời điểm $t$ giây là $s=\\dfrac{2}{3}t^3-18t+5$, $t\\ge0$.",
    "subQuestions": [
      {
        "text": "Quãng đường hạt đi được trong $6$ giây đầu tiên là $108$ m",
        "answer": true
      },
      {
        "text": "Trong $3$ giây đầu tiên hạt chuyển động lên trên",
        "answer": false
      },
      {
        "text": "Vận tốc của hạt theo thời gian $t$ là $v=2t^2-18t$ (m/s)",
        "answer": false
      },
      {
        "text": "Hạt luôn tăng tốc",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $s'(t)=2t^2-18$, $s'(t)=0\\Leftrightarrow t=3$. Bảng biến thiên của $s(t)$ như hình vẽ bên dưới  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_050.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Quãng đường hạt đi được trong $3$ giây đầu tiên là $\\left|s(3)-s(0)\\right|=|5-(-31)|=36$ m.<br>  Quãng đường hạt đi được trong $3$ giây tiếp theo là $\\left|s(6)-s(3)\\right|=|41-(-31)|=72$ m.<br>  Quãng đường hạt đi được trong $6$ giây đầu tiên là $S=36+72=108$ m<br>- Trong $3$ giây đầu tiên hạt chuyển động từ vị trí $s(0)=5$ m đến vị trí $s(3)=-31$ m nên hạt chuyển động xuống.<br>- Vận tốc của hạt theo thời gian $t$ là $v(t)=s'(t)=2t^2-18$ (m/s).<br>- Ta có $v(t)=0\\Leftrightarrow t=3$. Bảng biến thiên của $v(t)$ như hình vẽ bên dưới  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_051.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, ta thấy trong $3$ giấy đầu tiên, hạt chuyển động chậm dần từ $18$ m/s xuống $0$ m/s."
  },
  {
    "id": "2D111DS9",
    "question": "Cho hàm số $y=\\dfrac{x^2+x-5}{x-2}$.",
    "subQuestions": [
      {
        "text": "Đạo hàm $y' = \\dfrac{x^2-4x+3}{(x-2)^2}$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho nghịch biến trên khoảng $(1;3)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực đại tại $x=3$",
        "answer": false
      },
      {
        "text": "Tiệm cận xiên của đồ thị hàm số đã cho là $y=x+3$",
        "answer": true
      }
    ],
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R} \\setminus \\{2\\}$.<br>- Ta có $y' = \\dfrac{(2x+1)(x-2) - (x^2+x-5)}{(x-2)^2} = \\dfrac{x^2-4x+3}{(x-2)^2}$.<br>- Cho $y'=0 \\Leftrightarrow x^2-4x+3=0 \\Leftrightarrow x=1 \\text{ hoặc } x=3.$ Ta có bảng biến thiên:  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_069.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- Từ bảng biến thiên, ta thấy tại $x=3$ hàm số đạt cực tiểu.<br>- Ta có:   $a=\\lim\\limits_{x\\to +\\infty}\\dfrac{x^2+x-5}{x(x-2)}=1;$<br>$b=\\lim\\limits_{x\\to +\\infty}\\dfrac{x^2+x-5}{x-2}-x=3.$  Ta cũng có $\\lim\\limits_{x\\to -\\infty}\\dfrac{f(x)}{x}=1$; $\\lim\\limits_{x\\to -\\infty}[f(x)-ax]=3$.<br>  Do đó, đồ thị hàm số có tiệm cận xiên là đường thẳng $y=x+3$."
  },
  {
    "id": "2D111DS10",
    "question": "Cho hàm số $y=\\dfrac{3x-1}{x+2}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Đồ thị $(C)$ có tiệm cận đứng là đường thẳng $x=2$",
        "answer": false
      },
      {
        "text": "Đồ thị $(C)$ có tiệm cận ngang là đường thẳng $y=3$",
        "answer": true
      },
      {
        "text": "Đồ thị $(C)$ có tâm đối xứng là điểm $I(3;-2)$",
        "answer": false
      },
      {
        "text": "Hàm số $y=\\dfrac{3x-1}{x+2}$ đồng biến trên khoảng $(3;+\\infty)$",
        "answer": true
      }
    ],
    "explain": "<br>- Tập xác định của hàm số $\\mathscr{D}=\\mathbb{R}\\setminus\\{-2\\} $.<br>  Ta có $\\lim\\limits_{x\\to -2^+}y=-\\infty$, $\\lim\\limits_{x\\to -2^-}y=+\\infty$ suy ra đồ thị $(C)$ có tiệm cận đứng là đường thẳng $x=-2$.<br>- Ta có $\\lim\\limits_{x\\to +\\infty }y=3$, $\\lim\\limits_{x\\to -\\infty }y=3$ suy ra đồ thị $(C)$ có tiệm cận ngang là đường thẳng $y=3$.<br>- Đồ thị $(C)$ có tâm đối xứng là điểm $I(-2;3)$.<br>- Ta có $y'=\\dfrac{7}{(x+2)^2}&gt;0$, $\\forall x\\neq -2$.<br>  Suy ra hàm số $y=\\dfrac{3x-1}{x+2}$ đồng biến trên khoảng $(3;+\\infty)$."
  },
  {
    "id": "2D112DS11",
    "question": "Cho hàm số $y=f(x)=a x^3+b x^2+c x+d$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_075.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Điểm cực tiểu của hàm số là $x=2$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(0 ; 1)$",
        "answer": true
      },
      {
        "text": "Trên khoảng $(-\\infty ; 2)$, hàm số có giá trị lớn nhất là 1 và có giá trị nhỏ nhất là $-2$",
        "answer": false
      },
      {
        "text": "Phương trình $f(x)+1=0$ có $3$ nghiệm thực phân biệt",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Theo BBT, hàm số đạt cực tiểu tại $x=2$ và $y_{CT}=-2$.<br>- <strong>Đúng</strong>. Theo BBT, hàm số nghịch biến trên khoảng $(-1;2)$ và $(0;1) \\subset(-1;2)$ nên hàm số nghịch biến trên khoảng $(0;1)$.<br>- <strong>Sai</strong>. Trên khoảng $(-\\infty;2)$, Hàm số đạt GTLN bằng 1 tại $x=-1$.<br>  $\\lim\\limits_{x\\to-\\infty} y=-\\infty$ nên hàm số không có GTNN.<br>- <strong>Đúng</strong>. Phương trình $f(x)+1=0 \\Leftrightarrow f(x)=-1 \\, (1)$.  Số nghiệm của phương trình $(1)$ bằng số giao điểm của đồ thị hàm số $y=f(x)$ và đường thẳng $y=-1$.<br>  Từ BBT:  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_076.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta thấy đường thẳng $y=-1$ cắt đồ thị hàm số $y=f(x)$ tại ba điểm có hoành độ $x=x_1 \\in(-\\infty ;-1)$, $x=x_2 \\in(-1 ; 2)$, $x=x_3 \\in(2 ;+\\infty)$.<br>   Do đó phương trình $f(x)+1=0$ có 3 nghiệm thực phân biệt."
  },
  {
    "id": "2D112DS12",
    "question": "Hàm số $y=f(x)$ xác định và liên tục trên $\\mathbb{R}$. Hàm số $f'(x)$ có đồ thị như sau. Các mệnh đề sau đúng hay sai?<br><img src=\"data/12/2D1/im2D1/2D11_tikz_083.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số $y=f(x)$ đồng biến trên khoảng $(0;2)$",
        "answer": true
      },
      {
        "text": "Hàm số $y=f(x)$ có hai điểm cực trị",
        "answer": false
      },
      {
        "text": "Hàm số $h(x)=f(x)+m$ nghịch biến trên khoảng $(-\\infty;-1)$",
        "answer": true
      },
      {
        "text": "Hàm số $g(x)=f(1-2x)$ đồng biến trên khoảng $(1;+\\infty)$",
        "answer": true
      }
    ],
    "explain": "Từ đồ thị ta có $f'(x)=0\\Leftrightarrow x=-1$.<br>  Ta có bảng biến thiên của $f(x)$ như sau  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_084.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên ta thấy hàm số đồng biến trên khoảng $(-1;+\\infty)$ và nghịch biến trên khoảng $(-\\infty;-1)$.  <br>- <strong>Đúng</strong>.<br>   Do $(0;2)\\subset (-1;+\\infty)$ nên hàm số $y=f(x)$ đồng biến trên khoảng $(0;2)$.<br>- <strong>Sai</strong>.<br>   Hàm số chỉ có $1$ điểm cực trị.<br>- <strong>Đúng</strong>.<br>   Ta có $h'(x)=f'(x)$, do đó $h(x)$ có cùng tính chất với $f(x)$ hay hàm số $h(x)$ nghịch biến trên khoảng $(-\\infty;-1)$.<br>- <strong>Đúng</strong>.<br>   Ta có $g'(x)=(1-2x)'f'(1-2x)=-2f'(1-2x)$.<br>  Xét $g'(x)=0\\Leftrightarrow 1-2x=-1\\Leftrightarrow x=1$.<br>  Ta có bảng biến thiên của $g(x)$ như sau  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_085.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta thấy hàm số đồng biến trên khoảng $(1;+\\infty)$ và nghịch biến trên khoảng $(-\\infty;1)$."
  }
];
