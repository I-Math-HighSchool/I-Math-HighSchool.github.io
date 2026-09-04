// =========================================================================
// KHỐI DỮ LIỆU: 2D43 - Đúng/Sai (bổ sung từ nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai2D43 = [
  {
    "id": "2D431DS1",
    "question": "Cho hàm số $f(x)=x^2-4$ có đồ thị $(C)$. Gọi $D$ là hình phẳng giới hạn bởi đồ thị $(C)$ và trục hoành.",
    "subQuestions": [
      {
        "text": "Diện tích hình phẳng $D$ là $S=\\displaystyle\\int\\limits_{-2}^2\\left|x^2-4\\right|\\mathrm{\\,d}x$",
        "answer": true
      },
      {
        "text": "Thể tích khối tròn xoay khi quay hình phẳng $D$ quanh trục $Ox$ là $V=\\displaystyle\\int\\limits_{-2}^2\\left(x^2-4\\right)^2\\mathrm{\\,d}x$",
        "answer": false
      },
      {
        "text": "Gọi $S_1$ là diện tích hình phẳng giới hạn bởi đồ thị $(C)$, đường thẳng $d\\colon y=-3x$ và hai đường thẳng $x=-4$; $x=1$. Khi đó $S_1=125$",
        "answer": false
      },
      {
        "text": "Đường thẳng $x=m$, $(m\\in\\mathbb{R})$ chia hình phẳng $D$ thành hai phần có diện tích bằng nhau. Khi đó $m=0$",
        "answer": true
      }
    ],
    "explain": "Phương trình hoành độ giao điểm của đồ thị hàm số $f(x)=x^2-4$ và trục hoành là  \\[x^2-4=0\\Leftrightarrow x=2 \\text{ hoặc } x=-2.\\]  <br>- Diện tích hình phẳng $D$ là $S=\\displaystyle\\int\\limits_{-2}^2\\left|x^2-4\\right|\\mathrm{\\,d}x$.<br>- Thể tích khối tròn xoay khi quay hình phẳng $D$ quanh trục $Ox$ là $V=\\pi\\displaystyle\\int\\limits_{-2}^2\\left(x^2-4\\right)^2\\mathrm{\\,d}x$.<br>- Phương trình hoành độ giao điểm của đồ thị hàm số $(C)\\colon y=x^2-4$ và đường thẳng $d\\colon y=-3x$ là  \\[x^2-4=-3x\\Leftrightarrow x^2+3x-4=0\\Leftrightarrow x=1 \\text{ hoặc } x=-4.\\]  Diện tích hình phẳng giới hạn bởi đồ thị $(C)$, đường thẳng $d\\colon y=-3x$ và hai đường thẳng $x=-4$; $x=1$ là  \\[S=\\displaystyle\\int\\limits_{-4}^1\\left|x^2+3x-4\\right|\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{-4}^1\\left(-x^2-3x+4\\right)\\mathrm{\\,d}x=\\left(-\\dfrac{x^3}{3}-\\dfrac{3x^2}{2}-4x\\right)\\Bigg|_{-4}^1=\\dfrac{125}{6}.\\]<br>- Ta có $\\displaystyle\\int\\limits_{-2}^m\\left|x^2-4\\right|\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{m}^2\\left|x^2-4\\right|\\mathrm{\\,d}x$ với $-2&lt;m&lt;2$.<br>  Xét biểu thức $h(x)=x^2-4$ ta có bảng xét dấu như sau  <br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS16_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Suy ra   $\\displaystyle\\int\\limits_{-2}^m\\left|x^2-4\\right|\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{m}^2\\left|x^2-4\\right|\\mathrm{\\,d}x$<br>$\\Leftrightarrow \\displaystyle\\int\\limits_{-2}^m\\left(4-x^2\\right)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{m}^2\\left(4-x^2\\right)\\mathrm{\\,d}x$<br>$\\Leftrightarrow \\left(4x-\\dfrac{x^3}{3}\\right)\\Bigg|_{-2}^m=\\left(4x-\\dfrac{x^3}{3}\\right)\\Bigg|_m^2$<br>$\\Leftrightarrow \\dfrac{m^3}{3}-4m-\\dfrac{16}{3}=-\\dfrac{16}{3}-\\dfrac{m^3}{3}+4m$<br>$\\Leftrightarrow \\dfrac{2m^3}{3}-8m=0$<br>$\\Leftrightarrow m=0 \\text{ hoặc } m=\\pm2\\sqrt{3.}$  So với điều kiện suy ra $m=0$."
  },
  {
    "id": "2D431DS2",
    "question": "[Dự án đề kiểm tra Toán 12 GHKII NH24-25- Lê Hồ Quang Minh]%[THPT Thuận Thành 1-2-3 - Bắc Ninh]  Một vật chuyển động đều với vận tốc có phương trình $v(t)=t^2-2 t+1$, trong đó $t$ được tính bằng giây, quãng đường $s(t)$ được tính bằng mét.",
    "subQuestions": [
      {
        "text": "Quãng đường vật đi được từ khi vật bắt đầu chuyển động đến khi gia tốc bị triệt tiêu là $\\dfrac{1}{3}$ m",
        "answer": true
      },
      {
        "text": "Quãng đường vật đi được trong 2 giây tính đến thời điểm mà vận tốc đạt $9(\\mathrm{m} / \\mathrm{s})$ là $\\dfrac{26}{3}$ m",
        "answer": false
      },
      {
        "text": "Quãng đường đi được của vật sau 2 giây kể từ khi vật bắt đầu chuyển động là $\\dfrac{2}{3}$ m",
        "answer": true
      },
      {
        "text": "Quãng đường vật đi được từ 0 giây đến thời điểm mà gia tốc bằng $10(\\mathrm{m} / \\mathrm{s}^2)$ là $44$ m",
        "answer": false
      }
    ],
    "explain": "<br>- Gia tốc tức thời của vật là $a(t)=v'(t)=2t-2$.<br>  Gia tốc triệt tiêu khi $a(t)=0 \\Leftrightarrow t=1$. Tức là gia tốc triệt tiêu tại thời điểm $t=1$ giây.<br>  Vậy quãng đường vật đi được từ khi bắt đầu chuyển động đến khi gia tốc triệt tiêu là<br>  $s=\\displaystyle \\int \\limits_0^{1} (t^2-2t+1) \\mathrm{~d}t=\\dfrac{1}{3}$ m.<br>- Cho $v(t)=9 \\Leftrightarrow t=4$.<br>  Quãng đường vật đi được trong 2 giây tính đến thời điểm mà vận tốc đạt $9(\\mathrm{m} / \\mathrm{s})$ là<br>  $s=\\displaystyle \\int \\limits_4^{6} (t^2-2t+1) \\mathrm{~d}t=\\dfrac{98}{3}$ m.<br>- Quãng đường đi được của vật sau 2 giây kể từ khi vật bắt đầu chuyển động là<br>  $s=\\displaystyle \\int \\limits_0^{2} (t^2-2t+1) \\mathrm{~d}t=\\dfrac{2}{3}$ m.<br>- Cho $a(t)=10\\Leftrightarrow 2t-2=10 \\Leftrightarrow t=6$.<br>  Quãng đường vật đi được từ 0 giây đến thời điểm mà gia tốc bằng $10(\\mathrm{m} / \\mathrm{s}^2)$ là<br>  $s=\\displaystyle \\int \\limits_0^{6} (t^2-2t+1) \\mathrm{~d}t=42$ m."
  },
  {
    "id": "2D431DS3",
    "question": "Cho đồ thị hàm số $y=x^3-2x^2-3x+4 \\quad (C)$ và đường thẳng $d \\colon y=2x-2$.<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS17_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đường thẳng $d$ cắt đồ thị $(C)$ tại ba điểm $A(-2;-6)$, $B(1;0)$, $C(3;4)$",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi đồ thị $(C)$, trục hoành, đường thẳng $x=-1$, $x=2$ bằng $\\dfrac{21}{4}$",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi đồ thị $(C)$ và đường thẳng $d$ bằng $\\dfrac{253}{12}$",
        "answer": false
      },
      {
        "text": "Biết đường thẳng $d$ cắt đồ thị $(C)$ thành hai miền $S_1$ và $S_2$. Tỉ số $\\dfrac{S_1}{S_2}=\\dfrac{63}{16}$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có phương trình hoành độ giao điểm \\[x^3-2x^2-3x+4=2x-2 \\Leftrightarrow x^3-2x^2-5x+6=0 \\Leftrightarrow x=-2 \\text{ hoặc } x=1 \\text{ hoặc } x=3.\\]  Với $x=-2 \\Rightarrow y=-6$; với $x=1 \\Rightarrow y=0$; với $x=3 \\Rightarrow y=4$.<br>  Vậy đường thẳng $d$ cắt đồ thị $(C)$ tại ba điểm $A(-2;-6)$, $B(1;0)$ và $C(3;4)$.<br>- Diện tích cần tính là $S=\\displaystyle\\int\\limits_{-1}^2 |x^3-2x^2-3x+4| \\mathrm{\\,d}x=\\dfrac{97}{12}$.<br>- Hình phẳng cần tìm được giới hạn bởi các đường $y=f(x)=x^3-2x^2-3x+4 \\text{ và } y=g(x)=2x-2 \\text{ và } x=-2 \\text{ và } x=3.$<br>  Ta có $f(x)-g(x)=x^3-2x^2-5x+6$.<br>  Diện tích cần tính là \\[S=S_1+S_2=\\displaystyle\\int\\limits_{-2}^1 \\left| x^3-2x^2-5x+6 \\right|\\mathrm{d}x+\\displaystyle\\int\\limits_{1}^3 \\left| x^3-2x^2-5x+6 \\right|\\mathrm{d}x=\\dfrac{63}{4}+\\dfrac{16}{3}=\\dfrac{253}{12}.\\]<br>- Ta có $\\dfrac{S_1}{S_2}=\\dfrac{\\dfrac{63}{4}}{\\dfrac{16}{3}}=\\dfrac{189}{64}$."
  },
  {
    "id": "2D431DS4",
    "question": "Cho hai hàm số $f(x)=ax^3+bx^2+cx-2$ và $g(x)=dx^2+ex+2$ ($a$, $b$, $c$, $d$, $e \\in \\mathbb{R}$). Biết rằng đồ thị của hai hàm số $y=f(x)$ và $y=g(x)$ cắt nhau tại ba điểm có hoành độ lần lượt là $-2$; $-1$; $1$ (tham khảo hình vẽ).<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS23_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$f(x)-g(x)=0 \\Leftrightarrow ax^3 + (b-d)x^2 + (c-e)x - 4 = 0$",
        "answer": true
      },
      {
        "text": "$a$ là số thực dương",
        "answer": true
      },
      {
        "text": "Giá trị của $a = \\dfrac{1}{2}$",
        "answer": false
      },
      {
        "text": "Hình phẳng giới hạn bởi hai đồ thị hàm số đã cho có diện tích bằng $\\dfrac{37}{6}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Phương trình hoành độ giao điểm của đồ thị $f\\left( x \\right)$ và $g\\left( x \\right)$ là<br>  $a{x^3}+b{x^2}+cx-2=d{x^2}+3x+2\\Leftrightarrow ax^3+\\left( b-d \\right){x^2}+\\left( c-e \\right)x-4=0.\\left( * \\right)$<br>- <strong>Đúng</strong>.<br>  $a$ là số thực dương.<br>- <strong>Sai</strong>.<br>  Do đồ thị của hai hàm số cắt nhau tại ba điểm suy ra phương trình $\\left( * \\right)$ có ba nghiệm $x=-2$; $x=-1$; $x=1$.<br>  Ta được  $a{x^3}+\\left( b-d \\right){x^2}+\\left( c-e \\right)x-4=a\\left( x+2 \\right)\\left( x+1 \\right)\\left( x-1 \\right)$.<br>  Khi đó $-4=-2a\\Rightarrow a=2$.<br>- <strong>Đúng</strong>.<br>  Vậy diện tích hình phẳng cần tìm là $\\displaystyle\\int\\limits_{-2}^{1}{\\left| 2\\left( x+2 \\right)\\left( x+1 \\right)\\left( x-1 \\right) \\right|\\text{d}x=\\dfrac{37}{6}}$."
  },
  {
    "id": "2D433DS5",
    "question": "Một chiếc trống có dạng khối tròn xoay. Một mặt phẳng đi qua tâm của đáy và vuông góc với mặt phẳng đáy cắt khối tròn xoay là phần hình phẳng được tô đậm trong hình vẽ. Biết rằng hai đường cong thành bên lần lượt là một phần của đồ thị $y = f(x)$ và $y = g(x)$.  <br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS24_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$f(x) = -\\dfrac{1}{100}x^2 + 40$",
        "answer": true
      },
      {
        "text": "Diện tích của phần mặt cắt bằng $\\dfrac{16640}{3}\\text{ cm}^2$",
        "answer": true
      },
      {
        "text": "Thể tích của chiếc trống bằng $\\dfrac{293888\\pi}{3}\\text{ cm}^3$",
        "answer": true
      },
      {
        "text": "$g(x) = f(-x)$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS24_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $(H)$ là hình phẳng giới hạn bởi các đường   $y=f(x)$, trục hoành, trục tung và đường thẳng $x= 40$.  <br>- <strong>Đúng</strong>.<br>  Đường cong phía trên là một phần của parabol quay bề lõm xuống dưới, tọa độ đỉnh là $(0; 40)$ nên có phương trình $y=ax^2+40$.<br>  Vì parabol đi qua điểm $(40; 24)$ nên suy ra  $24=a\\cdot 40^2+40\\Rightarrow a=-\\dfrac{1}{100}$.<br>  Vậy $f(x) = -\\dfrac{1}{100}x^2 + 40$.<br>- <strong>Đúng</strong>.<br>  Mặt cắt là một hình đối xứng, diện tích mặt cắt này bằng $4$ lần diện tích hình phẳng $(H)$ nên diện tích mặt cắt bằng   $S = 4\\cdot S_H$<br>$= 4\\displaystyle \\int\\limits_0^{40} f(x) \\mathrm{\\,d}x$<br>$= 4 \\displaystyle \\int\\limits_0^{40} \\left(-\\dfrac{1}{100}x^2 + 40\\right) \\mathrm{\\,d}x$<br>$=4\\left(-\\dfrac{1}{300}x^3 + 40x\\right)\\Bigg|_0^{40}$<br>$= \\dfrac{16640}{3}.$<br>- <strong>Đúng</strong>.<br>  Thể tích của chiếc trống bằng $2$ lần thể tích vật thể tròn xoay giới hạn bởi hình phẳng $(H)$ khi nó quanh trục hoành  $V = 2\\pi \\displaystyle \\int\\limits_0^{40} [f(x)]^2 \\mathrm{\\,d}x$<br>$= 2\\pi \\displaystyle \\int\\limits_0^{40} \\left(-\\dfrac{1}{100}x^2 + 40\\right)^2 \\mathrm{\\,d}x$<br>$= 2\\pi \\displaystyle \\int\\limits_0^{40} \\left(\\dfrac{1}{10000}x^4 -\\dfrac{4}{5}x^2+ 1600\\right) \\mathrm{\\,d}x$<br>$=2\\pi \\left(\\dfrac{1}{50000}x^5 -\\dfrac{4}{15}x^3+ 1600x\\right)\\Bigg|_0^{40}$<br>$=\\dfrac{293888\\pi}{3}.$<br>- <strong>Sai</strong>.<br>   Do tính đối xứng của mặt cắt của trống nên ta có  \\[f(x) = -\\dfrac{1}{100}x^2 + 40 \\Rightarrow g(x) = \\dfrac{1}{100}x^2 -40.  \\]   Suy ra $g(x) \\neq f(-x)$."
  },
  {
    "id": "2D431DS6",
    "question": "Cho hàm số $f(x) = x^3 - 3x^2 + 2x - 1$ và $F(x)$ là một nguyên hàm tùy ý của $f(x)$.",
    "subQuestions": [
      {
        "text": "Hàm số $y = \\dfrac{1}{4}x^4 - x^3 + x^2 - x$ là một nguyên hàm của hàm số $f(x)$",
        "answer": true
      },
      {
        "text": "$F'(x) = x^3 - 3x^2 + 2x - 1$",
        "answer": true
      },
      {
        "text": "Biết $F(0) = 1$. Khi đó $F(1) = \\dfrac{5}{4}$",
        "answer": false
      },
      {
        "text": "$F(x) = \\dfrac{1}{4}x^4 - x^3 + x^2 - x$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Nguyên hàm của $f(x)$ là $F(x) = \\dfrac{1}{4}x^4 - x^3 + x^2 - x + C$, với $C$ hằng số. <br>  Nên biểu thức đã cho là một nguyên hàm.<br>- <strong>Đúng</strong>.<br>  Vì $F(x)$ là nguyên hàm của $f(x)$ nên $F'(x) = f(x)$.<br>- <strong>Sai</strong>.<br>  Từ $F(0) = 1$, ta tìm được hằng số $C = 1$. Thay vào   \\[  F(1) = \\dfrac{1}{4} - 1 + 1 - 1 + 1 = \\dfrac{1}{4} \\neq \\dfrac{5}{4}.  \\]<br>- <strong>Sai</strong>.<br>  Vì thiếu hằng số $C$."
  },
  {
    "id": "2D431DS7",
    "question": "Cho hàm số $f(x) = \\begin{cases}   x^2 - x & \\text{khi} x \\le 0 \\\\  x & \\text{khi } x > 0  \\end{cases}$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\displaystyle \\int\\limits_2^5 f(x)\\mathrm{\\,d}x = \\displaystyle \\int\\limits_2^5 x\\mathrm{\\,d}x$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_{-4}^{-2} f(x)\\mathrm{\\,d}x = 6$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_{-1}^{1} f(x)\\mathrm{\\,d}x + \\displaystyle \\int\\limits_1^3 f(x)\\mathrm{\\,d}x = \\dfrac{20}{3}$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_{-2}^{1} f(x)\\mathrm{\\,d}x = \\dfrac{31}{6}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Vì $2 &gt; 0$ nên $f(x) = x$ trên đoạn $[2;5]$, do đó $\\displaystyle \\int\\limits_2^5 f(x)\\mathrm{\\,d}x = \\displaystyle \\int\\limits_2^5 x\\mathrm{\\,d}x$.<br>- <strong>Sai</strong>.<br>  Với $x \\in [-4; -2]$, ta có $f(x) = x^2 - x$. Khi đó  \\[  \\displaystyle \\int\\limits_{-4}^{-2} f(x)\\mathrm{\\,d}x = \\displaystyle \\int\\limits_{-4}^{-2} (x^2 - x)\\mathrm{\\,d}x = \\left(\\dfrac{x^3}{3} - \\dfrac{x^2}{2}\\right)\\Bigg|_{-4}^{-2} = \\dfrac{74}{3}.  \\]<br>- <strong>Đúng</strong>.<br>  Ta có $f(x) = x^2 - x$ khi $x \\le 0$, $f(x) = x$ khi $x &gt; 0$. Khi đó  \\[  \\displaystyle \\int\\limits_{-1}^3 f(x)\\mathrm{\\,d}x + \\displaystyle \\int\\limits_1^3 f(x)\\mathrm{\\,d}x = \\displaystyle \\int\\limits_{-1}^{0} (x^2 - x)\\mathrm{\\,d}x + \\displaystyle \\int\\limits_{0}^{1} x\\mathrm{\\,d}x + \\displaystyle \\int\\limits_1^3 x\\mathrm{\\,d}x = \\dfrac{20}{3}.  \\]<br>- <strong>Đúng</strong>.<br>  Tính $\\displaystyle \\int\\limits_{-2}^1 f(x)\\mathrm{\\,d}x = \\displaystyle \\int\\limits_{-2}^0 (x^2 - x)\\mathrm{\\,d}x + \\displaystyle \\int\\limits_0^1 x\\mathrm{\\,d}x = \\dfrac{14}{3} + \\dfrac{1}{2} = \\dfrac{31}{6}$."
  },
  {
    "id": "2D431DS8",
    "question": "Trong không gian tọa độ $Oxyz$, cho hai điểm $A(1;0;1)$, $B(5;2;3)$ và mặt phẳng $(P)\\colon 2x - y + z - 4 = 0$.",
    "subQuestions": [
      {
        "text": "Mặt phẳng $(P)$ cắt trục $Ox$ tại điểm có hoành độ bằng $3$",
        "answer": false
      },
      {
        "text": "$d(A, (P)) &gt; d(B, (P))$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $(Q)$ đi qua hai điểm $A$, $B$ và vuông góc với mặt phẳng $(P)$ có phương trình là $x - 2z + 1 = 0$",
        "answer": true
      },
      {
        "text": "Mặt phẳng trung trực của đoạn thẳng $AB$ có phương trình là $2x + y + z - 9 = 0$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Giao điểm của mặt phẳng $(P)$ với trục $Ox$ là khi $y = z = 0$, suy ra $2x = 4 \\Rightarrow x = 2$.<br>- <strong>Sai</strong>.<br>  Khoảng cách từ điểm $A$ đến mặt phẳng $(P)$ là  \\[  d(A, P) = \\dfrac{|2\\cdot1 - 0 + 1 - 4|}{\\sqrt{2^2 + (-1)^2 + 1^2}} = \\dfrac{1}{\\sqrt{6}}.  \\]  Khoảng cách từ điểm $B$ đến mặt phẳng $(P)$ là  \\[d(B, P) = \\dfrac{|2\\cdot5 - 2 + 3 - 4|}{\\sqrt{6}} = \\dfrac{7}{\\sqrt{6}}.  \\]  Ta có $d(A, P) &lt; d(B, P)$.<br>- <strong>Đúng</strong>.<br>  Ta có $\\overrightarrow{AB} = (4;2;2)$, vectơ pháp tuyến của $(P)$ là $\\overrightarrow{n} = (2; -1; 1)$.<br>  Mặt phẳng $(Q)$ đi qua $A$, $B$ và vuông góc với $(P)$ nên nhận $\\overrightarrow{n}_Q = \\left[\\overrightarrow{AB}, \\overrightarrow{n}\\right]=(4;0;-8)$ là vectơ pháp tuyến.<br>  Phương trình mặt phẳng $(Q)$ là   \\[4(x-1)+0(y-0) -8(z-1)=0 \\enspace \\text{hay} \\enspace x-2z+1=0.  \\]<br>- <strong>Đúng</strong>.<br>  Gọi $M$ là trung điểm của đoạn thẳng $AB$, khi đó $M = \\left(\\dfrac{6}{2}; \\dfrac{2}{2}; \\dfrac{4}{2}\\right) = (3;1;2)$.<br>  Ta có $\\overrightarrow{AB} = (4;2;2)$.<br>  Mặt phẳng trung trực $(Q)$ của đoạn thẳng $AB$ đi qua điểm $M$ và vuông góc với $AB$ nên có vectơ pháp tuyến là $\\overrightarrow{AB}$. <br>  Phương trình của $(Q)$ là  \\[  4(x-3)+2(y-1)+2(z-2)=0 \\enspace \\text{hay} \\enspace 2x + y + z - 9 = 0.  \\]"
  },
  {
    "id": "2D431DS9",
    "question": "Cho hàm số $y=5x-x^2$ có đồ thị $(P)$ và đường thẳng $d\\colon y=x$.",
    "subQuestions": [
      {
        "text": "$(P)$ và $d$ có một điểm chung",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi parabol $(P)$, trục $Ox$ và hai đường thẳng $x=0$, $x=6$ bằng $\\dfrac{71}{3}$",
        "answer": true
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi parabol $(P)$, đường thẳng $d$ và hai đường thẳng $x=0$, $x=4$ bằng $\\dfrac{32}{3}$",
        "answer": true
      },
      {
        "text": "Thể tích của khối tròn xoay khi cho hình phẳng giới hạn bởi $(P)$, trục $Ox$ và hai đường thẳng $x=0$, $x=6$ quay quanh trục $Ox$ bằng $115$",
        "answer": false
      }
    ],
    "explain": "<br>- Phương trình hoành độ giao điểm của $(P)$ và $d$ là  \\[5x-x^2=x\\Leftrightarrow x^2-4x=0\\Leftrightarrow x=0 \\text{ hoặc } x=4.\\]  Vậy $d$ cắt $(P)$ tại hai điểm phân biệt.<br>- Diện tích hình phẳng giới hạn bởi parabol $(P)$, trục $Ox$ và hai đường thẳng $x=0$, $x=6$ là  \\[S=\\displaystyle\\int\\limits_0^6\\left|5x-x^2\\right|\\mathrm{d}x=\\displaystyle\\int\\limits_0^5\\left(5x-x^2\\right)\\mathrm{d}x-\\displaystyle\\int\\limits_5^6\\left(5x-x^2\\right)\\mathrm{d}x=\\dfrac{125}{6}+\\dfrac{17}{6}=\\dfrac{71}{3}.\\]<br>- Diện tích hình phẳng giới hạn bởi parabol $(P)$, đường thẳng $d$ và hai đường thẳng $x=0$, $x=4$ là  \\[S=\\displaystyle\\int\\limits_0^4\\left|5x-x^2-x\\right|\\mathrm{d}x=\\displaystyle\\int\\limits_0^4\\left|4x-x^2\\right|\\mathrm{d}x=\\displaystyle\\int\\limits_0^4\\left(4x-x^2\\right)\\mathrm{d}x=\\dfrac{32}{3}.\\]<br>- Thể tích của khối tròn xoay khi cho hình phẳng giới hạn bởi $(P)$, trục $Ox$ và hai đường thẳng $x=0$, $x=6$ là  \\[V=\\pi\\displaystyle\\int\\limits_0^6\\left(5x-x^2\\right)^2\\mathrm{\\,d}x=\\pi\\displaystyle\\int\\limits_0^6\\left(x^4-10x^3+25x^2\\right)\\mathrm{d}x=\\dfrac{576\\pi}{5}.\\]"
  },
  {
    "id": "2D431DS10",
    "question": "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $f'(x)=2-5\\sin x$ và $f(0)=10$.",
    "subQuestions": [
      {
        "text": "$f(\\pi) = 2\\pi$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int f'(x)\\mathrm{\\,d}x=2x-5\\cos x+C$, với $C$ là hằng số",
        "answer": false
      },
      {
        "text": "$f(x)=2x+5\\cos x+5$",
        "answer": true
      },
      {
        "text": "Diện tích $S$ của hình phẳng $(H)$ giới hạn bởi các đường cong $y=f(x)$; $y=g(x)=5\\cos x+9$ và trục tung bằng $4$",
        "answer": true
      }
    ],
    "explain": "Ta có $f(x)=\\displaystyle\\int f'(x)\\mathrm{\\,d}x=\\displaystyle\\int \\left(2-5\\sin x\\right)\\mathrm{\\,d}x=2x+5\\cos x+C$.<br>  $f(0) = 10\\Leftrightarrow 2\\cdot0+5\\cos0+C=10\\Leftrightarrow C=5$.<br>  Suy ra $f(x)=2x+5\\cos x+5$.<br>  $f(\\pi) = 2\\pi$  <br>- Vì $f(\\pi)=2\\pi+5\\cos \\pi+5=2\\pi$.<br>- Vì $\\displaystyle\\int f'(x)\\mathrm{\\,d}x=\\displaystyle\\int \\left(2-5\\sin x\\right)\\mathrm{\\,d}x=2x+5\\cos x+C$.<br>- Ta có $f(x)=2x+5\\cos x+5$.<br>- Phương tình hoành độ giao điểm của $f(x)$ và $g(x)$ là  $2x+5\\cos x+5=5\\cos x+9\\Leftarrow x=2.$  Do đó diện tích hình $(H)$ được tính bởi   $S=\\displaystyle\\int\\limits_2^4 \\left|\\left(2x+5\\cos x+5\\right)-\\left(5\\cos x+9\\right)\\right|\\mathrm{d}x=\\displaystyle\\int\\limits_2^4 \\left|2x-4\\right|\\mathrm{d}x=\\displaystyle\\int\\limits_2^4 \\left(2x-4\\right)\\mathrm{d}x=4.$"
  },
  {
    "id": "2D431DS11",
    "question": "Cho hàm số $f(x)=x^2-2x$ có đồ thị là $(C)$ và đường thẳng $d\\colon y=x$.",
    "subQuestions": [
      {
        "text": "Tích phân $\\displaystyle\\int_0^1f(x){\\,d}x$ bằng $-\\dfrac{2}{3}$",
        "answer": true
      },
      {
        "text": "Hình phẳng giới hạn bởi $(C)$, trục hoành và hai đường thẳng $x=1$, $x=2$ có diện tích bằng $\\dfrac{4}{3}$",
        "answer": false
      },
      {
        "text": "Hình phẳng giới hạn bởi $(C)$ và $d$ có diện tích bằng $\\dfrac{9}{2}$",
        "answer": true
      },
      {
        "text": "Gọi $(H)$ là hình phẳng giới hạn bởi $(C)$, trục hoành và hai đường thẳng $x=0$, $x=1$. Khối tròn xoay thu được khi cho $(H)$ quay quanh trục hoành có thể tích bằng $\\dfrac{8\\pi}{15}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\int_0^1f(x){\\,d}x=\\displaystyle\\int_0^1 (x^2-2x){\\,d}x=-\\dfrac{2}{3}$.<br>- <strong>Sai</strong>.<br>  Diện tích hình phẳng giới hạn bởi $(C)$, trục hoành và hai đường thẳng $x=1$, $x=2$ là $\\displaystyle\\int_1^2|x^2-2x|{\\,d}x=\\dfrac{2}{3}$.<br>- <strong>Đúng</strong>.<br>  Xét $x^2-2x=x \\Leftrightarrow x^2 -3x=0 \\Leftrightarrow x=0 \\text{ hoặc } x=3. $<br>  Diện tích hình phẳng giới hạn bởi $(C)$ và $d$ là   $\\displaystyle\\int_0^3|(x^2-2x)-x|{\\,d}x=\\dfrac{9}{2}$.<br>- <strong>Đúng</strong>.<br>  Thể tích khối tròn xoay thu được khi cho $(H)$ quay quanh trục hoành là $V=\\pi \\displaystyle\\int_0^1 (x^2-2x)^2 {\\,d}x=\\dfrac{8\\pi}{15}.$"
  },
  {
    "id": "2D431DS12",
    "question": "Cho hai hàm số $f(x) = x\\sqrt{x} + 8$, $g(x) = 5^x - e^x$ và $F(x)$ là một nguyên hàm của $f(x)$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle \\int \\limits g\\left( x \\right)\\,\\mathrm{d}x = 5^x \\ln 5 - e^x + C$",
        "answer": false
      },
      {
        "text": "$\\displaystyle \\int\\limits_{1}^{3} f\\left( x \\right)\\,\\mathrm{d}x = F\\left( 3 \\right) - F\\left( 1 \\right)$",
        "answer": true
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = g\\left( x \\right)$, trục $Ox$ và các đường thẳng $x = 1$, $x = 2$ bằng $7{,}8$ (làm tròn đến hàng phần chục)",
        "answer": true
      },
      {
        "text": "Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$, trục $Ox$, $x = 0$, $x = 3$ quanh trục $Ox$ bằng $312$ (làm tròn đến hàng đơn vị)",
        "answer": false
      }
    ],
    "explain": "<br>- $\\displaystyle \\int \\limits g\\left( x \\right)\\,\\mathrm{d}x = \\dfrac{5^x}{\\ln 5} - e^x + C$.<br>- $\\displaystyle \\int\\limits_{1}^{3} f\\left( x \\right)\\,\\mathrm{d}x = F\\left( 3 \\right) - F\\left( 1 \\right)$.<br>- Diện tích hình phẳng cần tìm là $S=\\displaystyle \\int\\limits_{1}^{2} \\left| 5^x -e^x \\right|\\,\\mathrm{d}x = 7{,}8$.<br>- Thể tích khối tròn xoay cần tìm là $V=\\pi \\displaystyle \\int\\limits_{0}^{3}\\left(x\\sqrt{x} + 8\\right)^2\\,\\mathrm{d}x=980.$"
  },
  {
    "id": "2D431DS13",
    "question": "Trên đường quốc lộ, một ô tô đang di chuyển với vận tốc $45$ km/h. Cùng lúc, một đoàn tàu chạy song song với đường quốc lộ với vận tốc $60$ km/h. Khi ô tô cách đuôi tàu $100$ m thì ô tô bắt đầu tăng tốc với vận tốc $v(t)=2{,}5t+b$ (m/s) với $t$ là thời gian kể từ lúc ô tô bắt đầu tăng tốc. Khi đạt đến tốc độ tối đa cho phép là $90$ km/h thì ô tô giữ nguyên vận tốc.",
    "subQuestions": [
      {
        "text": "Giá trị của $b$ bằng $12{,}5$",
        "answer": true
      },
      {
        "text": "Thời gian ô tô đạt vận tốc tối đa cho phép là $5$ giây",
        "answer": true
      },
      {
        "text": "Khoảng cách giữa ô tô và đuôi tàu sau $3$ giây là $51{,}25$ m",
        "answer": false
      },
      {
        "text": "Thời gian ô tô bắt kịp đuôi tàu kể từ lúc ô tô bắt đầu tăng tốc là $15{,}75$ giây",
        "answer": true
      }
    ],
    "explain": "Đổi đơn vị: $45$ km/h $=12{,}5$ m/s, $60$ km/h $=\\dfrac{50}{3}$ m/s, $90$ km/h $=25$ m/s.  <br>- Ta có $v(0)$ là vận tốc của ô tô lúc bắt đầu tăng tốc, vậy $v(0)=b=12{,}5$.<br>- Hàm số biểu thị vận tốc của ô tô là $v=2{,}5t+12{,}5$. <br>  Khi ô tô đạt vận tốc tối đa cho phép là $25$ m/s, ta có phương trình  $2{,}5t+12{,}5=25\\Leftrightarrow t=5.$  Vậy ô tô đạt vận tốc tối đa cho phép sau $5$ giây.<br>- Sau $3$ giây thì ô tô đi được $\\displaystyle\\int\\limits_{0}^{3} \\left(2{,}5t+12{,}5\\right)\\mathrm{\\,d}t=48{,}75$ m. <br>  Sau $3$ giây thì tàu đi được $\\dfrac{50}{3}\\cdot 3=50$ m. <br>  Vậy sau $3$ giây thì ô tô cách tàu một quãng là $100+(50-48{,}75)=101{,}25$ mét.<br>- Sau $5$ giây ô tô đi được $\\displaystyle\\int\\limits_{0}^{5} (2{,}5t+12{,}5)\\mathrm{\\,d}t=93{,}75$ m. <br>  Sau $5$ giây tàu đi được $\\dfrac{50}{3}\\cdot 5=\\dfrac{250}{3}$ m. <br>  Vậy khoảng cách giữa ô tô và tàu sau $5$ giây là $100+\\left(\\dfrac{250}{3}-93{,}75\\right)=\\dfrac{1075}{12}$ (m). <br>  Vì sau $5$ giây thì cả ô tô và tàu đều chuyển động thẳng đều và ô tô đi nhanh hơn, nên thời gian để ô tô bắt kịp đuôi tàu là $\\dfrac{1075}{12}:\\left(25-\\dfrac{50}{3}\\right)=10{,}75$ (giây). <br>  Vậy tổng thời gian ô tô cần để bắt kịp đuôi tàu kể từ lúc bắt đầu tăng tốc là $15{,}75$ (giây)."
  },
  {
    "id": "2D435DS14",
    "question": "Một kiến trúc sư đang thiết kế mái vòm cong cho một trung tâm triển lãm nghệ thuật. Mặt cắt đứng của mái vòm có hình dáng nửa trên của một hinhg Elip. Hình elip này có trục lớn nằm ngang. Chiều rộng của mái vòm (theo phương ngang) là $20$ mét và chiều cao tối đa của mái vòm (từ đáy đến đỉnh vòm) là $8$ mét.  <br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS36_011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Nếu ta đặt gốc tọa độ tại tâm hình elip thì phương trình hình elip là $\\dfrac{x^2}{100}+\\dfrac{y^2}{64}=1$",
        "answer": true
      },
      {
        "text": "Diện tích của mặt cắt đứng của mái vòm (phần hình elip) bằng $40{,}6\\pi$ ($\\text{m}^2$)",
        "answer": false
      },
      {
        "text": "Thể tích không gian bên trong mái vòm (khi ta tưởng tượng mái vòm kéo dài theo chiều sâu và tạo thành một không gian ba chiều) được tạo ra bằng cách quay nửa hình elip quanh trục nằm ngang bằng $\\dfrac{1380\\pi}{2}\\ (\\text{m}^3)$",
        "answer": false
      },
      {
        "text": "Nếu kiến trúc sư muốn làm cho mái vòm cao hơn bằng cách tăng chiều cao lên $10$ mét (thay vì $8$ mét) nhưng vẫn giữ nguyên chiều rộng $20$ mét thì cả diện tích mặt cắt đứng và thể tích không gian bên trong mái vòm sẽ tăng lên theo cùng một tỉ lệ",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Chiều rộng mái vòm là $20$ mét suy ra $2a=20\\Leftrightarrow a=10\\Rightarrow a^2=100$.<br>  Chiều cao tối đa của mái vòm là $8$ mét, suy ra $b=8\\Rightarrow b^2=64$.<br>  Vậy phương trình elip là $\\dfrac{x^2}{100}+\\dfrac{y^2}{64}=1$.<br>- <strong>Sai</strong>. Ta có $  \\dfrac{x^2}{100}+\\dfrac{y^2}{64}=1\\Leftrightarrow y=\\pm \\sqrt{64\\left(1-\\dfrac{x^2}{100}\\right)}=\\pm 8 \\sqrt{ 1-\\dfrac{x^2}{100}}=\\pm \\dfrac{4}{5}\\sqrt{100-x^2}$.<br>  Diện tích mặt cắt đứng mái vòm là   $ S=\\displaystyle \\int\\limits_{-10}^{10}\\dfrac{4}{5}\\sqrt{100-x^2}\\mathrm{\\,d }x=\\dfrac{4}{5}\\displaystyle \\int\\limits_{-10}^{10}\\sqrt{100-x^2}\\mathrm{\\,d }x=\\dfrac{4}{5}\\cdot 50\\pi=40\\pi.$  Hoặc dùng công thức diện tích diện tích nửa elip (giới thiệu thêm - không khuyến khích dùng)  $S=\\dfrac{1}{2}\\pi \\cdot a\\cdot b=\\dfrac{1}{2}\\cdot \\pi\\cdot 10\\cdot 8=40\\pi\\text{ m}^2.$<br>- <strong>Sai</strong>. Thể tích không gian bên trong mái vòm là  $V = \\dfrac{1}{2}\\pi\\displaystyle \\int\\limits_{-10}^{10}\\left(\\dfrac{4}{5}\\sqrt{100-x^2}\\right)^2\\mathrm{\\,d}x  = \\dfrac{1}{2}\\pi \\displaystyle \\int\\limits_{-10}^{10}\\dfrac{16}{25}\\left(100-x^2\\right)\\mathrm{\\,d}x$<br>$= \\dfrac{1}{2}\\cdot \\dfrac{16\\pi}{25}\\cdot \\dfrac{4000}{3}=   \\dfrac{1280\\pi}{3}\\text{ m}^3.$   Hoặc có thể sử dụng công thức (giới thiệu thêm - không khuyến khích dùng)  $V=\\dfrac{1}{2}\\cdot \\dfrac{4}{3}\\pi\\cdot a\\cdot b^2=\\dfrac{1}{2}\\cdot \\dfrac{4}{3}\\pi\\cdot 10\\cdot 8^2=\\dfrac{1280\\pi}{3}\\text{ m}^3$.<br>- <strong>Sai</strong>. Nếu tăng trục chiều cao thành $10$ m thì nửa elip trở thành nửa hình tròn.<br>  Do đó, diện tích mặt cắt lúc sau là $S'=\\dfrac{1}{2}\\pi R^2=50\\pi$. <br>  Tỉ lệ diện tích tăng lên là $\\dfrac{S'}{S}=\\dfrac{5}{4}$.<br>  Thể tích vòm lúc sau là nửa hình cầu và bằng $V'=\\dfrac{1}{2}\\cdot\\dfrac{4}{3}\\pi R^3=\\dfrac{2000\\pi}{3}$.<br>  Tỉ lệ thể tích tăng lên là $\\dfrac{V'}{V}=\\dfrac{25}{16}$.<br>  Do đó tỉ lệ diện tích mặt cắt đứng và thể tích tăng lên theo hai tỉ lệ khác nhau.<br>  \\fontqhv{Ghi chú: Nếu tăng chiều rộng lên (chẳng hạn từ $20$m thành $25$m) thì tỷ lệ diện tích mặt cắt đứng và thể tích vòm sẽ tăng lên theo cùng một tỉ lệ (Học sinh tự kiểm chứng, xem như bài tập).}"
  }
];
