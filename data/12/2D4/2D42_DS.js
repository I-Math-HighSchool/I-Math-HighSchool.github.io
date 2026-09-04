// =========================================================================
// KHỐI DỮ LIỆU: 2D42 - Đúng/Sai (bổ sung từ nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai2D42 = [
  {
    "id": "2D422DS1",
    "question": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[a;b]$. Gọi $F(x)$ là một nguyên hàm của hàm số $y=f(x)$ trên đoạn $[a;b]$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int\\limits_a^b f(x) \\mathrm{\\,d}x=F(b)-F(a)$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_a^b f(x) \\mathrm{\\,d}x=-\\displaystyle\\int\\limits_b^a f(x) \\mathrm{\\,d}x$",
        "answer": true
      },
      {
        "text": "Nếu $a&lt;c&lt;b$ và $\\displaystyle\\int\\limits_a^b f(x) \\mathrm{\\,d}x=m$, $\\displaystyle\\int\\limits_c^a f(x) \\mathrm{\\,d}x=n$ thì $\\displaystyle\\int\\limits_c^b f(x) \\mathrm{\\,d}x=m-n$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_a^b \\left[2024f(x)+2025\\right]\\mathrm{d}x=2024\\displaystyle\\int\\limits_a^b f(x) \\mathrm{\\,d}x+2025(a-b)$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $\\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x=F(x)\\Big|_a^b=F(b)-F(a)$.<br>- Ta có $\\displaystyle \\int\\limits_b^a f(x) \\mathrm{\\,d}x=F(x)\\Big|_b^a=F(a)-F(b)=-\\left[F(b)-F(a)\\right]=-\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x$.<br>- Với $a&lt;c&lt;b$ ta có  $\\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x=\\displaystyle \\int\\limits_a^c f(x) \\mathrm{\\,d}x+\\displaystyle \\int\\limits_c^b f(x) \\mathrm{\\,d}x$<br>$\\Leftrightarrow \\displaystyle \\int\\limits_c^b f(x) \\mathrm{\\,d}x=\\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x-\\displaystyle \\int\\limits_a^c f(x) \\mathrm{\\,d}x$<br>$\\Leftrightarrow \\displaystyle \\int\\limits_c^b f(x) \\mathrm{\\,d}x=\\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x+\\displaystyle \\int\\limits_c^a f(x) \\mathrm{\\,d}x$<br>$\\Leftrightarrow \\displaystyle \\int\\limits_c^b f(x) \\mathrm{\\,d}x=m+n.$<br>- Ta có $\\displaystyle \\int\\limits_a^b \\left[ 2024f(x)+2025\\right] \\mathrm{d}x = 2024 \\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x +2025 \\displaystyle \\int\\limits_a^b \\mathrm{d}x$<br>$= 2024\\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x+2025x\\Big|_a^b$<br>$= 2024\\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x+2025(b-a).$"
  },
  {
    "id": "2D427DS2",
    "question": "Một chất điểm chuyển động trên đường thẳng nằm ngang (chiều dương hướng sang phải) với gia tốc phụ thuộc vào thời gian $t$ (s) là $a(t)=2t-7$ (m/s$^2$). Biết vận tốc đầu bằng $6$ (m/s).",
    "subQuestions": [
      {
        "text": "Vận tốc tức thời của chất điểm tại thời điểm $t$ (s) xác định bởi $v(t)=t^2-7t+10$",
        "answer": false
      },
      {
        "text": "Tại thời điểm $t=7$ (s), vận tốc của chất điểm là $6$ m/s",
        "answer": true
      },
      {
        "text": "Độ dịch chuyển của vật trong khoảng thời gian $1 \\le t\\le 7$ là $18$ m",
        "answer": false
      },
      {
        "text": "Trong $8$ giây đầu tiên, thời điểm chất điểm xa nhất về phía bên phải là $t=7$ (s)",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $v(t)=\\displaystyle\\int\\limits a(t) \\mathrm{\\,d}t=\\displaystyle\\int\\limits \\left(2t-7\\right)\\mathrm{\\,d}t=t^2-7t+C$.<br>  Ta có $v(0)=6 \\Rightarrow C=6$.<br>  Vậy $v(t)=t^2-7t+6$ (m/s).<br>- Tại thời điểm $t=7$ (s), ta có $v(7)=7^2-7 \\cdot 7+6=6$ (m/s).<br>- Độ dịch chuyển của vật trong khoảng thời gian $1 \\le t \\le 7$ là \\[S=\\displaystyle\\int\\limits_1^7 v(t) \\mathrm{\\,d}t=\\displaystyle\\int\\limits_1^7 \\left(t^2-7t+6\\right)\\mathrm{\\,d}t=\\left(\\dfrac{t^3}{3}-\\dfrac{7t^2}{2}+6t\\right)\\Bigg|_1^7=-18.\\]<br>- Tọa độ của chất điểm tại thời điểm $t$ là   \\[x(t)=\\displaystyle\\int\\limits v(t) \\mathrm{\\,d}t=\\displaystyle\\int\\limits \\left(t^2-7t+6\\right) \\mathrm{\\,d}t=\\dfrac{t^3}{3}-\\dfrac{7t^2}{2}+6t+C.\\]  Ta cần tìm giá trị lớn nhất của $x(t)$ với $t \\in [0;8]$.<br>  Ta có $x'(t)=v(t)=0$ khi $t=1$ hoặc $t=6$.<br>  Ta có $x(0)=C$; $x(1)=\\dfrac{17}{6}+C$, $x(6)=-18+C$, $x(8)=-\\dfrac{16}{3}+C$.<br>  Vậy giá trị lớn nhất của $x(t)$ với $t \\in [0;8]$ đạt được khi $t=1$."
  },
  {
    "id": "2D422DS3",
    "question": "Cho hàm số $f(x)=2x^3-1$ và hàm số $g(x)$ xác định trên $\\mathbb{R}$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int f(x) \\mathrm{d}x =\\dfrac{x^4}{2}+C$",
        "answer": false
      },
      {
        "text": "Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$, trục hoành, $2$ đường thẳng $x=0$; $x=1$ quanh $Ox$ bằng $\\dfrac{5}{7}$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int_{-2}^2 f(x) \\mathrm{d}x =\\left.\\left(\\dfrac{x^4}{2}-x\\right)\\right|_{-2}^2$",
        "answer": true
      },
      {
        "text": "Biết $\\displaystyle\\int_{-2}^2 \\left[f(x)+g(x)\\right] \\mathrm{d}x =15$. Khi đó $\\displaystyle\\int_{-2}^2 g(x) \\mathrm{d}x =19$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.  Ta thấy  $  \\displaystyle\\int f(x) \\mathrm{d}x   =\\displaystyle\\int \\left(2x^3-1\\right) \\mathrm{d}x   =\\dfrac{x^4}{2}-x+C.  $<br>- <strong>Sai</strong>.  Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$, trục hoành, $2$ đường thẳng $x=0$; $x=1$ quanh $Ox$ là  $V = \\pi \\displaystyle\\int \\left(2x^3-1\\right)^2 \\mathrm{d}x$<br>$= \\pi \\displaystyle\\int \\left(4x^6-4x^3+1\\right) \\mathrm{d}x$<br>$= \\pi \\left. \\left(\\dfrac{4}{7}x^7 - x^4 + x\\right) \\right|_0^1$<br>$= \\dfrac{4\\pi}{7}.$<br>- <strong>Đúng</strong>.  Ta thấy  $  \\displaystyle\\int_{-2}^2 f(x) \\mathrm{d}x  = \\displaystyle\\int_{-2}^2 \\left(2x^3-1\\right) \\mathrm{d}x  = \\left. \\left(\\dfrac{x^4}{2}-x\\right) \\right|_{-2}^2  = -4.  $<br>- <strong>Đúng</strong>.  Ta có  $  \\displaystyle\\int_{-2}^2 \\left[f(x)+g(x)\\right] \\mathrm{d}x =15  \\Leftrightarrow  \\displaystyle\\int_{-2}^2 f(x) \\mathrm{d}x + \\displaystyle\\int_{-2}^2 g(x) \\mathrm{d}x = 15.  $  Mà $\\displaystyle\\int_{-2}^2 f(x) \\mathrm{d}x = -4$ nên  $  \\displaystyle\\int_{-2}^2 g(x) \\mathrm{d}x = 15 + 4 = 19.  $"
  },
  {
    "id": "2D422DS4",
    "question": "Cho $\\displaystyle\\int\\limits_{0}^{2} f(x)\\mathrm{\\,d}x = 4$, $\\displaystyle\\int\\limits_{0}^{3} f(x)\\mathrm{\\,d}x= 3$ và $\\displaystyle\\int\\limits_{0}^{3} g(x)\\mathrm{\\,d}x= -2$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int_{2}^{0} f(x)\\mathrm{\\,d}x= -\\dfrac{1}{4}$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_{2}^{3} f(x)\\mathrm{\\,d}x= -1$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_{0}^{2} (f(x)-x)\\mathrm{\\,d}x= 2$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_{0}^{3} (f(x)-2g(x))\\mathrm{\\,d}x= 7$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  $\\displaystyle\\int\\limits_{0}^{2} f(x)\\mathrm{\\,d}x = 4\\Rightarrow \\displaystyle\\int\\limits_{2}^{0} f(x)\\mathrm{\\,d}x= -4$.<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\int_{2}^{3} f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^{3} f(x)\\mathrm{\\,d}x-\\displaystyle\\int\\limits_{0}^{2} f(x)\\mathrm{\\,d}x=3-4=-1$.<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\int_{0}^{2} (f(x)-x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^{2} f(x)\\mathrm{\\,d}x-\\displaystyle\\int\\limits_{0}^{2} x\\mathrm{\\,d}x=4-2= 2$.<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\int\\limits_{0}^{3} (f(x)-2g(x))\\mathrm{\\,d}x=3-2\\cdot(-2)= 7$."
  },
  {
    "id": "2D427DS5",
    "question": "Một vật chuyển động với vận tốc $y=v(t)$ (m/s) được cho bởi đồ thị như hình vẽ bên dưới. Trong thời gian 3 giây kể từ khi bắt đầu chuyển động, đồ thị đó là một phần của đường parabol có đỉnh $I(2;4)$, khoảng thời gian còn lại đồ thị là đoạn thẳng song song trục hoành.<br><img src=\"data/12/2D4/im2D42/dlts_12_DLTS25_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Vận tốc không đổi trong khoảng thời gian từ $3$ giây đến $5$ giây",
        "answer": true
      },
      {
        "text": "Trong $3$ giây đầu tiên thì $v(t)=-t^2+4t$",
        "answer": true
      },
      {
        "text": "Quãng đường mà vật di chuyển trong 3 giây đầu được tính bởi công thức $\\displaystyle\\int_0^3\\left(-t^2+4t\\right) \\mathrm{\\,d}t$",
        "answer": true
      },
      {
        "text": "Quãng đường mà vật di chuyển trong $5$ giây kể từ khi bắt đầu chuyển động bằng $\\dfrac{250}{3}$ (m)",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Vận tốc không đổi trong khoảng thời gian từ $3$ giây đến $5$ giây.<br>- <strong>Đúng</strong>.<br>  Giả sử phương trình vận tốc của vật là $v(t)=at^2+bt+c\\ (a\\ne 0)$.<br>  Ta có $c=0 \\text{ và } 4a+2b+c=4 \\text{ và } -\\dfrac{b}{2a}=2\\Leftrightarrow c=0 \\text{ và } b=4 \\text{ và } a=-1\\Leftrightarrow v(t)=-t^2+4t$.<br>- <strong>Đúng</strong>.<br>  Quãng đường mà vật di chuyển trong 3 giây đầu được tính bởi công thức $\\displaystyle\\int_0^3\\left(-t^2+4t\\right) \\mathrm{\\,d}t$<br>- <strong>Sai</strong>.<br>  Ta có $v(3)=3$ suy ra phương trình chuyển động của vận tốc trên khoảng từ $3$ đến $5$ giây là $v=3$.<br>  Vậy quãng đường mà vật di chuyển trong $5$ giờ là  $\\displaystyle\\int\\limits_{0}^{3} (-t^2+4t) \\mathrm{\\,d}t+\\displaystyle\\int\\limits_{3}^{5} 3 \\mathrm{\\,d}t =15$ (km)."
  },
  {
    "id": "2D427DS6",
    "question": "Một chất điểm chuyển động trên đường thẳng nằm ngang (chiều dương hướng sang phải) với gia tốc phụ thuộc vào thời gian $t$ (s) là $a(t)=2t-7$ m/s$^2$. Biết vận tốc đầu bằng $6$ m/s.",
    "subQuestions": [
      {
        "text": "Vận tốc tức thời của chất điểm tại thời điểm $t$ (s) xác định bởi $v(t)=t^2-7t+10$",
        "answer": false
      },
      {
        "text": "Tại thời điểm $t=7$ s, vận tốc của chất điểm là $6$ m/s",
        "answer": true
      },
      {
        "text": "Độ dịch chuyển của vật trong khoảng thời gian $1 \\le t \\le 7$ là $18$ m",
        "answer": false
      },
      {
        "text": "Trong $8$ giây đầu tiên, thời điểm chất điểm xa nhất về phía bên phải là $t=7$ s",
        "answer": false
      }
    ],
    "explain": "<br>- $v(t)=\\displaystyle\\int\\limits a(t) \\mathrm{\\,d}t=t^2-7t+C$.<br>  Khi $t=0$ thì $v=6$ m/s, suy ra $v(0)=6 \\Rightarrow C=6$.<br>  Vậy $v(t)=t^2-7t+6$ m/s.<br>- Ta có $v(7)=7^2-7\\cdot7+6=49-49+6=6$ m/s.<br>- Độ dịch chuyển $\\Delta s=s(7)-s(1)=\\displaystyle\\int\\limits_1^7 v(t) dt=\\displaystyle\\int\\limits_1^7 (t^2-7t+6) \\mathrm{\\,d}t=-18\\ne 18$.<br>- Độ dịch chuyển là<br>  $d(t)=\\displaystyle\\int\\limits v(t)\\,\\mathrm{d}t=\\dfrac{t^3}{3}-\\dfrac{7t^2}{2}+6t+C$. <br>  $d(0)=0 \\Rightarrow C=0$.<br>  $\\Rightarrow d(t)=\\dfrac{t^3}{3}-\\dfrac{7t^2}{2}+6t$  Ta có  $d'(t)=0 \\Leftrightarrow v(t)=0$<br>$\\Leftrightarrow t^2-7t+6=0$<br>$\\Leftrightarrow (t-6)(t-1)=0$<br>$\\Leftrightarrow t=1 \\text{ hoặc } t=6.$  Bảng biến thiên  <br><img src=\"data/12/2D4/im2D42/dlts_12_DLTS27_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  $d(1)=\\dfrac{1^3}{3}-\\dfrac{7\\cdot1^2}{2}+6\\cdot1=2{,}83$,<br>  $d(8)=\\dfrac{8^3}{3}-\\dfrac{7\\cdot8^2}{2}+6\\cdot8=-5{,}33$.<br>  Vậy thời điểm chất điểm xa nhất về phía bên phải trong khoảng $0 \\le t \\le 8$ là $t=1$."
  },
  {
    "id": "2D422DS7",
    "question": "Cho số thực $a$ và hàm số $f(x) = 2x \\text{khi }x\\le0 \\text{ và } a\\left(x-x^2\\right) \\text{khi }x&gt;0$",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int\\limits_{-1}^0 f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{-1}^0 2x \\mathrm{\\,d}x$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_{0}^1 f(x) \\mathrm{\\,d}x=-\\dfrac{a}{6}$",
        "answer": false
      },
      {
        "text": "Khi $a=2$, $\\displaystyle\\int\\limits_{-1}^1 f(x) \\mathrm{\\,d}x=-\\dfrac{2}{3}$",
        "answer": true
      },
      {
        "text": "Điều kiện cần cà đủ để $\\displaystyle\\int\\limits_{-1}^2 f(x) \\mathrm{\\,d}x&gt;3$ là $a&gt;-6$",
        "answer": false
      }
    ],
    "explain": "<br>- $\\displaystyle\\int\\limits_{-1}^0 f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{-1}^0 2x\\mathrm{\\,d}x$.<br>- $\\displaystyle\\int\\limits_{0}^1 f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^1 a\\left(x-x^2\\right)\\mathrm{\\,d}x=a\\left(\\dfrac{x^2}{2}-\\dfrac{x^3}{3}\\right)\\Bigg|_0^1=a\\left(\\dfrac{1^2}{2}-\\dfrac{1^3}{3}\\right)=\\dfrac{a}{6}$.<br>- Khi $a=2$, $\\displaystyle\\int\\limits_{-1}^1 f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{-1}^0 2x \\mathrm{\\,d}x+\\displaystyle\\int\\limits_{0}^1 2\\left(x-x^2\\right) \\mathrm{\\,d}x=-1+\\dfrac{1}{3}=-\\dfrac{2}{3}$.<br>- Ta có   $\\displaystyle\\int\\limits_{-1}^2 f(x) \\mathrm{\\,d}x = \\displaystyle\\int\\limits_{-1}^0 2x \\mathrm{\\,d}x+\\displaystyle\\int\\limits_{0}^2 a\\left(x-x^2\\right) \\mathrm{\\,d}x$<br>$= -1+a\\left(\\dfrac{x^2}{2}-\\dfrac{x^3}{3}\\right)\\Bigg|_0^2=-1-\\dfrac{2a}{3}$  Do đó $\\displaystyle\\int\\limits_{-1}^2 f(x) \\mathrm{\\,d}x&gt;3\\Leftrightarrow -1-\\dfrac{2a}{3}&gt;3\\Leftrightarrow a&lt;-6$."
  },
  {
    "id": "2D422DS8",
    "question": "Cho hàm số $f(x)=5x^4-2x$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int f(x) \\mathrm{\\,d}x$=$\\displaystyle\\int 5x^4 \\mathrm{\\,d}x$+ $\\displaystyle\\int 2x \\mathrm{\\,d}x$",
        "answer": false
      },
      {
        "text": "Nếu $F(x)$ là một nguyên hàm của hàm số $f(x)$ thỏa mãn $F(0)=3$ thì $F(x)=x^5-x^2+3$",
        "answer": true
      },
      {
        "text": "Nếu $F'(x)=f(x), \\forall x\\in\\mathbb{R}$ thì $F(x)$ được gọi là một nguyên hàm của $f(x)$ trên $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Nếu $F(x)$ là một nguyên hàm của hàm số $f(x)$ thõa mãn $F(1)=3$ thì $F(-1)=1$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\displaystyle\\int f(x) \\mathrm{\\,d}x$=$\\displaystyle\\int 5x^4 \\mathrm{\\,d}x -\\displaystyle\\int 2x \\mathrm{\\,d}x$.<br>- Ta có $\\displaystyle\\int (5x^4-2x) \\mathrm{\\,d}x=x^5-x^2+C$.<br>  $F(0)=3\\Leftrightarrow C=3$. Suy ra $F(x)=x^5-x^2+3$.<br>- Nếu $F'(x)=f(x), \\forall x\\in\\mathbb{R}$ thì $F(x)$ được gọi là một nguyên hàm của $f(x)$ trên $\\mathbb{R}$.<br>- Ta có $F(1)=3\\Leftrightarrow C=3$, suy ra $F(x)=x^5-x^2+3$.<br>  Vậy $F(-1)=1$."
  },
  {
    "id": "2D427DS9",
    "question": "Một ô tô đang chạy với tốc độ $54\\,\\text{km/h}$ thì người lái xe bất ngờ phát hiện chướng ngại vật trên đường cách đó $38\\,\\text{m}$. Người lái xe phản ứng một giây và sau đó đạp phanh khẩn cấp. Kể từ thời điểm này, ô tô chuyển động chậm dần đều với tốc độ $v\\left( t \\right) = -5t + 15\\,\\left( \\text{m/s} \\right)$, trong đó $t$ là thời gian tính bằng giây. Gọi $s\\left( t \\right)$ là quãng đường xe ô tô đi được trong thời gian $t$ (giây) kể từ lúc đạp phanh.",
    "subQuestions": [
      {
        "text": "Hàm số $s\\left( t \\right)$ được biểu diễn bởi công thức $s\\left(t \\right) = -\\dfrac{5}{2}t^2 + 15t$",
        "answer": true
      },
      {
        "text": "Thời gian kể từ lúc đạp phanh đến khi ô tô dừng hẳn là $3$ giây",
        "answer": true
      },
      {
        "text": "Quãng đường ô tô đi được từ lúc đạp phanh đến lúc dừng hẳn là $20\\,\\text{m}$",
        "answer": false
      },
      {
        "text": "Ô tô không chạm vào chướng ngại vật",
        "answer": true
      }
    ],
    "explain": "Đổi $54\\,\\text{km/h} = 15\\,\\text{m/s} $  <br>- $s(t)=\\displaystyle \\int \\limits v(t)\\,\\mathrm{d}x =\\displaystyle \\int \\limits \\left(-5t+15\\right)\\,\\mathrm{d}x =-\\dfrac{5}{2}t^2 + 15t+C$.<br>  Vì $s(0)=0$ nên $C=0$.<br>  Do đó hàm số $s\\left( t \\right)$ được biểu diễn bởi công thức $s\\left(t \\right) = -\\dfrac{5}{2}t^2 + 15t$.<br>- Khi xe dừng hẳn thì $v(t)=0 \\Leftrightarrow -5t+15=0 \\Leftrightarrow t=3$.<br>  Vậy thời gian kể từ lúc đạp phanh đến khi ô tô dừng hẳn là $3$ giây.<br>- Quãng đường ô tô đi được từ lúc đạp phanh đến khi dừng hẳn là $s_1=\\displaystyle \\int \\limits_0^3 v(t)\\,\\mathrm{d}x=\\displaystyle \\int \\limits_0^3 (-5t+15)\\,\\mathrm{d}x=22{,}5\\, \\text{(m).}$<br>- Quãng đường ô tô đi được kể từ khi phát hiện chướng ngại vật đến khi đạp phanh là $s_2=15 \\cdot 1=15$ (m).<br>  Tổng quãng đường từ khi nhìn thấy chướng ngại vật đến khi xe dừng hẳn là $37{,}5$ (m).<br>  Vậy ô tô không chạm vào chướng ngại vật."
  },
  {
    "id": "2D422DS10",
    "question": "Cho hàm số $f(x)$ thỏa mãn $f'(x)=x+{e}^x$, $\\forall x\\in\\mathbb{R}$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int\\limits_1^2 f'(x){\\,d}x={e}^2+{e}+\\dfrac{5}{2}$",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi đồ thị của các đường $y=f'(x)$, $y=x+1$ và $x=2$ là $\\dfrac{57}{13}$",
        "answer": false
      },
      {
        "text": "$f(x)={e}^x+x^2+C$",
        "answer": false
      },
      {
        "text": "Khi $f(0)=4$ thì $\\displaystyle\\int\\limits_0^1 f(x){\\,d}x=\\dfrac{6{e}+13}{6}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có \\[\\displaystyle\\int\\limits_1^2 f'(x){\\,d}x=\\displaystyle\\int\\limits_1^2 x+{e}^x{\\,d}x=\\left.\\left({e}^x+\\dfrac{1}{2}x^2\\right)\\right|^2_1={e}^2-{e}+\\dfrac{3}{2}.\\]<br>- Hoàng độ giao điểm của các đường $y=f'(x)$, $y=x+1$ là  \\[x+{e}^x=x+1 \\Leftrightarrow {e}^x=1 \\Leftrightarrow x=0.\\]  Do trên đoạn $[0;2]$: $f'(x)-(x+1)={e}^x-1&gt;0$. <br>  Diện tích hình phẳng giới hạn là \\[S=\\displaystyle\\int\\limits_0^2 \\left({e}^x-1\\right){\\,d}x={e}^2-3.\\]<br>- $f(x)=\\displaystyle\\int f'(x){\\,d}x={e}^x+\\dfrac{1}{2}x^2+C$.<br>- Có $f(x)=\\displaystyle\\int f'(x){\\,d}x={e}^x+\\dfrac{1}{2}x^2+C$. <br>  Với $f(0)=4 \\Leftrightarrow {e}^0+\\dfrac{1}{2}\\cdot0^2+C=4 \\Leftrightarrow C=4$. <br>  Với $f(x)={e}^x+\\dfrac{1}{2}x^2+4$. <br>  Khi đó $\\displaystyle\\int\\limits_0^1 f(x){\\,d}x={e}+\\dfrac{6}{13}=\\dfrac{6{e}+13}{6}$."
  }
];
