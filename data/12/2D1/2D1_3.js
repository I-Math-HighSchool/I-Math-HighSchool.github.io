// =========================================================================
// KHỐI DỮ LIỆU: window.dungSai (batch 2 - từ nguồn LaTeX C1.1-DonDieu)
// Nguồn: TaiLieuThamKhao/BANK-25-26/Lop12/C1.1-DonDieu.tex (chuyển từ LaTeX)
// Hình vẽ (bảng biến thiên, đồ thị...) đã được biên dịch sẵn bằng LaTeX/TikZ
// thành ảnh PNG tĩnh, lưu tại data/12/2D1/im2D1/ (không phụ thuộc TikzJax).
// =========================================================================
window.dungSai2D11_2 = [
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
    "explain": "Ta có $y'=-3x^2+4x$. Cho $y'=0\\Leftrightarrow x=-\\dfrac{4}{3} \\text{ hoặc } x=0.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên nhận xét  <br>- &lt;strong&gt;Đúng&lt;/strong&gt; Hàm số có $2$ điểm cực trị.<br>- &lt;strong&gt;Sai&lt;/strong&gt; Giá trị cực đại của hàm số là $-3$.<br>- &lt;strong&gt;Sai&lt;/strong&gt; Hàm số nghịch biến trên $\\left(0;+\\infty\\right)$ và $10^{79}&lt;10^{80}$ nên $f\\left(10^{79}\\right)&gt;f\\left(10^{80}\\right)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt; Gọi $A\\left(-\\dfrac{4}{3};-\\dfrac{49}{23}\\right)$, $B(0;-3)$ là hai điểm cực trị.<br>  Ta có $\\overrightarrow{AB}=\\left(\\dfrac{4}{3};\\dfrac{32}{27}\\right)$ suy ra $AB=\\sqrt{\\left(\\dfrac{4}{3}\\right)^2+\\left(\\dfrac{32}{27}\\right)^2}=\\dfrac{4\\sqrt{145}}{27}$."
  },
  {
    "id": "2D112DS7",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
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
        "text": "Quãng đường hạt đi được trong $6$ giây đầu tiên là $108$\\,m",
        "answer": true
      },
      {
        "text": "Trong $3$ giây đầu tiên hạt chuyển động lên trên",
        "answer": false
      },
      {
        "text": "Vận tốc của hạt theo thời gian $t$ là $v=2t^2-18t$\\,(m/s)",
        "answer": false
      },
      {
        "text": "Hạt luôn tăng tốc",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $s'(t)=2t^2-18$, $s'(t)=0\\Leftrightarrow t=3$. Bảng biến thiên của $s(t)$ như hình vẽ bên dưới  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_050.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Quãng đường hạt đi được trong $3$ giây đầu tiên là $\\left|s(3)-s(0)\\right|=|5-(-31)|=36$\\,m.<br>  Quãng đường hạt đi được trong $3$ giây tiếp theo là $\\left|s(6)-s(3)\\right|=|41-(-31)|=72$\\,m.<br>  Quãng đường hạt đi được trong $6$ giây đầu tiên là $S=36+72=108$\\,m<br>- Trong $3$ giây đầu tiên hạt chuyển động từ vị trí $s(0)=5$\\,m đến vị trí $s(3)=-31$\\,m nên hạt chuyển động xuống.<br>- Vận tốc của hạt theo thời gian $t$ là $v(t)=s'(t)=2t^2-18$\\,(m/s).<br>- Ta có $v(t)=0\\Leftrightarrow t=3$. Bảng biến thiên của $v(t)$ như hình vẽ bên dưới  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_051.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, ta thấy trong $3$ giấy đầu tiên, hạt chuyển động chậm dần từ $18$\\,m/s xuống $0$\\,m/s."
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
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R} \\setminus \\{2\\}$.<br>- Ta có $y' = \\dfrac{(2x+1)(x-2) - (x^2+x-5)}{(x-2)^2} = \\dfrac{x^2-4x+3}{(x-2)^2}$.<br>- Cho $y'=0 \\Leftrightarrow x^2-4x+3=0 \\Leftrightarrow x=1 \\text{ hoặc } x=3.$ Ta có bảng biến thiên:  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_069.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- Từ bảng biến thiên, ta thấy tại $x=3$ hàm số đạt cực tiểu.<br>- Ta có:   $a=\\lim\\limits_{x\\to +\\infty}\\dfrac{x^2+x-5}{x(x-2)}=1;$<br>$b=\\lim\\limits_{x\\to +\\infty}\\dfrac{x^2+x-5}{x-2}-x=3.$  Ta cũng có $\\lim\\limits_{x\\to -\\infty}\\dfrac{f(x)}{x}=1$; $\\lim\\limits_{x\\to -\\infty}[f(x)-ax]=3$.<br>  Do đó, đồ thị hàm số có tiệm cận xiên là đường thẳng $y=x+3$."
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
    "question": "Cho hàm số $y=f(x)=a x^3+b x^2+c x+d$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_075.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
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
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Theo BBT, hàm số đạt cực tiểu tại $x=2$ và $y_{CT}=-2$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Theo BBT, hàm số nghịch biến trên khoảng $(-1;2)$ và $(0;1) \\subset(-1;2)$ nên hàm số nghịch biến trên khoảng $(0;1)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Trên khoảng $(-\\infty;2)$, Hàm số đạt GTLN bằng 1 tại $x=-1$.<br>  $\\lim\\limits_{x\\to-\\infty} y=-\\infty$ nên hàm số không có GTNN.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Phương trình $f(x)+1=0 \\Leftrightarrow f(x)=-1 \\, (1)$.  Số nghiệm của phương trình $(1)$ bằng số giao điểm của đồ thị hàm số $y=f(x)$ và đường thẳng $y=-1$.<br>  Từ BBT:  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_076.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta thấy đường thẳng $y=-1$ cắt đồ thị hàm số $y=f(x)$ tại ba điểm có hoành độ $x=x_1 \\in(-\\infty ;-1)$, $x=x_2 \\in(-1 ; 2)$, $x=x_3 \\in(2 ;+\\infty)$.<br>   Do đó phương trình $f(x)+1=0$ có 3 nghiệm thực phân biệt."
  },
  {
    "id": "2D112DS12",
    "question": "Hàm số $y=f(x)$ xác định và liên tục trên $\\mathbb{R}$. Hàm số $f'(x)$ có đồ thị như sau. Các mệnh đề sau đúng hay sai?<br><img src=\"data/12/2D1/im2D1/2D11_tikz_083.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
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
    "explain": "Từ đồ thị ta có $f'(x)=0\\Leftrightarrow x=-1$.<br>  Ta có bảng biến thiên của $f(x)$ như sau  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_084.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên ta thấy hàm số đồng biến trên khoảng $(-1;+\\infty)$ và nghịch biến trên khoảng $(-\\infty;-1)$.  <br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>   Do $(0;2)\\subset (-1;+\\infty)$ nên hàm số $y=f(x)$ đồng biến trên khoảng $(0;2)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>   Hàm số chỉ có $1$ điểm cực trị.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>   Ta có $h'(x)=f'(x)$, do đó $h(x)$ có cùng tính chất với $f(x)$ hay hàm số $h(x)$ nghịch biến trên khoảng $(-\\infty;-1)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>   Ta có $g'(x)=(1-2x)'f'(1-2x)=-2f'(1-2x)$.<br>  Xét $g'(x)=0\\Leftrightarrow 1-2x=-1\\Leftrightarrow x=1$.<br>  Ta có bảng biến thiên của $g(x)$ như sau  <br><img src=\"data/12/2D1/im2D1/2D11_tikz_085.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta thấy hàm số đồng biến trên khoảng $(1;+\\infty)$ và nghịch biến trên khoảng $(-\\infty;1)$."
  }
];
