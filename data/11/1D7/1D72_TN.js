// =========================================================================
// KHỐI DỮ LIỆU: 1D72 - Trắc nghiệm
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem1D72 = [
  {
    "id": "1D724TN1",
    "question": "Đạo hàm của hàm số $y = \\cos x$ là",
    "options": [
      "$y' = \\dfrac{1}{\\tan^2 x}$",
      "$y' = \\sin x$.",
      "$y' = -\\sin x$",
      "$y' = \\tan x$"
    ],
    "answer": 2,
    "explain": "Ta có $(\\cos x)'= -\\sin x$."
  },
  {
    "id": "1D722TN2",
    "question": "Đạo hàm của hàm số $y = 4^x$ là",
    "options": [
      "$y' = 4^x$",
      "$y' = \\dfrac{4^x}{\\ln 4}$",
      "$y' = 4^x \\ln 4$",
      "$y' = 4^x \\log 4$"
    ],
    "answer": 2,
    "explain": "Ta có $(4^x)'=4^x \\ln 4$."
  },
  {
    "id": "1D722TN3",
    "question": "Hàm số $y=3^x$ có đạo hàm là",
    "options": [
      "$y'=3^x$",
      "$y'=3^{x+1}$",
      "$y'=3^x \\ln 3$",
      "$y'=\\dfrac{3^{x+1}}{x+1}$"
    ],
    "answer": 2,
    "explain": "Ta có $y'=(3^x)'=3^x\\ln 3$."
  },
  {
    "id": "1D722TN4",
    "question": "Với mọi $x$ dương, hàm số $y=\\log_2 x$ có đạo hàm là",
    "options": [
      "$y'=2^x \\ln 2$",
      "$y'=\\dfrac{2}{x}$",
      "$y'=x \\ln 2$",
      "$y'=\\dfrac{1}{x \\ln 2}$"
    ],
    "answer": 3,
    "explain": "Ta có $y'=(\\log_2 x)'=\\dfrac{1}{x \\ln 2}$."
  },
  {
    "id": "1D722TN5",
    "question": "Đạo hàm $y'$ của hàm số $y = x^2 + 3x$ là",
    "options": [
      "$y' = 2x$",
      "$y' = 2x + 3$",
      "$y' = 2x^2 + x$",
      "$y' = 2x^2 + 1$"
    ],
    "answer": 1,
    "explain": "Ta có $y' = (x^2)' + (3x)' = 2x + 3$."
  },
  {
    "id": "1D722TN6",
    "question": "Cho hàm số $y = x^3 - 3x + 2$ có đồ thị là $(\\mathrm{C})$. Hệ số góc $k$ của tiếp tuyến của đồ thị $(\\mathrm{C})$ tại điểm có hoành độ $x_0 = 1$ là",
    "options": [
      "$k = 3$",
      "$k = 1$",
      "$k = 0$",
      "$k = 6$"
    ],
    "answer": 2,
    "explain": "Hệ số góc $k$ của tiếp tuyến của đồ thị $(C)$ tại điểm có hoành độ $x_0=1$ là $k = y'(1)$.<br>  Ta có $y' = 3x^2 - 3$.<br>  Suy ra $k = y'(1) = 3\\cdot 1^2 - 3 = 0$."
  },
  {
    "id": "1D722TN7",
    "question": "Đạo hàm của hàm số $y=5^x$ là",
    "options": [
      "$y'=x \\cdot 5^{x-1}$",
      "$y'=5^x$",
      "$y'=\\dfrac{5^x}{\\ln 5}$",
      "$y'=5^x \\ln 5$"
    ],
    "answer": 3,
    "explain": "Ta có $y'=(5^x)'=5^x\\cdot \\ln 5$."
  },
  {
    "id": "1D722TN8",
    "question": "Cho hàm số $y=\\dfrac{1}{3} x^3-3x^2+5x+3$. Gọi $x_1$, $x_2$ là các nghiệm của phương trình $y'=0$ $(x_1 &lt; x_2)$. Giá trị $S=2x_2-x_1$ là",
    "options": [
      "$-9$",
      "$9$",
      "$7$",
      "$-3$"
    ],
    "answer": 1,
    "explain": "Ta có $y'=x^2-6x+5$.<br>  Cho $y'=0 \\Leftrightarrow x_1=1 \\text{ hoặc } x_2=5.$<br>  Suy ra $S=2x_2-x_1=2\\cdot 5-1=9$."
  },
  {
    "id": "1D721TN9",
    "question": "Khẳng định nào sau đây sai?",
    "options": [
      "$(2017)'=0$",
      "$(x^3)'=3x^2$",
      "$(\\sqrt{x})'=\\dfrac{1}{2\\sqrt{x}}$",
      "$\\left(\\dfrac{1}{x}\\right)'=\\dfrac{1}{x^2}$"
    ],
    "answer": 3,
    "explain": "Ta có $\\left(\\dfrac{1}{x}\\right)'=-\\dfrac{1}{x^2}$."
  },
  {
    "id": "1D722TN10",
    "question": "Cho hàm số $y=f(x)$ có đồ thị $(C)$ và đạo hàm $f'(1)=3$. Hệ số góc tiếp tuyến của $(C)$ tại điểm $M\\left(1; f(1)\\right)$ bằng",
    "options": [
      "$2$",
      "$3$",
      "$-2$",
      "$6$"
    ],
    "answer": 1,
    "explain": "Hệ số góc tiếp tuyến của $(C)$ tại điểm $M\\left(1; f(1)\\right)$ bằng $f'(1)=3$."
  },
  {
    "id": "1D722TN11",
    "question": "Tiếp tuyến của đồ thị hàm số $y=x^3-2x$ tại điểm $x_0=-1$ có hệ số góc là",
    "options": [
      "$k=1$",
      "$k=-1$",
      "$k=3$",
      "$k=-3$"
    ],
    "answer": 3,
    "explain": "Ta có  \\[y'=3x^2-2.\\]  Tiếp tuyến của đồ thị hàm số $y=x^3-2x$ tại điểm $x_0=-1$ có hệ số góc là  \\[k=f'(-1)=3\\cdot (-1)^2-1=1.\\]"
  },
  {
    "id": "1D721TN12",
    "question": "Khẳng định nào sau đây là đúng?",
    "options": [
      "$(3x)'=3$",
      "$\\left(\\dfrac{1}{x}\\right)'=\\dfrac{1}{x^2}$",
      "$(\\sqrt{x})'=\\dfrac{1}{\\sqrt{x}}$",
      "$(x^3)'=3x^2$"
    ],
    "answer": 3,
    "explain": "Theo quy tắc đạo hàm, ta có $(x^3)'=3x^2$."
  },
  {
    "id": "1D722TN13",
    "question": "Đạo hàm cấp hai của hàm số $y = 3x^2$ là",
    "options": [
      "$6$",
      "$3x$",
      "$6x$",
      "$3$"
    ],
    "answer": 3,
    "explain": "Ta có $y'=6x \\Rightarrow y'' = 6$."
  },
  {
    "id": "1D722TN14",
    "question": "Cho đường cong $(C)\\colon y=x^2$. Phương trình tiếp tuyến của $(C)$ tại điểm $M\\left(-1;1\\right)$ là",
    "options": [
      "$y=-2x+1$",
      "$y=2x+1$",
      "$y=-2x-1$",
      "$y=2x-1$"
    ],
    "answer": 2,
    "explain": "Ta có $y'=2x \\Rightarrow y'(-1)=-2$.<br>  Phương trình tiếp tuyến tại điểm $M\\left(-1;1\\right)$ có dạng $y=y'(x_0)(x-x_0)+y_0$.<br>  hay $y = -2(x+1)+1 \\Rightarrow y= -2x-1$"
  },
  {
    "id": "1D724TN15",
    "question": "Đạo hàm của hàm số $y=x \\cdot \\sin x$ là",
    "options": [
      "$\\cos x+x \\cdot \\sin x$",
      "$x \\cdot \\cos x$",
      "$\\sin x-x \\cdot \\cos x$",
      "$\\sin x+x \\cdot \\cos x$"
    ],
    "answer": 3,
    "explain": "Áp dụng công thức $u \\cdot v = u'\\cdot v + v' \\cdot v$.<br>  Suy ra $y' = \\sin x + x \\cdot \\cos x$."
  },
  {
    "id": "1D725TN16",
    "question": "Tìm đạo hàm của hàm số $y=\\log _5 x$ tại $x=2$.",
    "options": [
      "$y'(2)=\\dfrac{5}{\\ln 2}$",
      "$y'(2)=\\dfrac{1}{2 \\ln 5}$",
      "$y'(2)=\\dfrac{1}{5 \\ln 2}$",
      "$y'(2)=\\dfrac{2}{\\ln 5}$"
    ],
    "answer": 1,
    "explain": "Ta có $y'(x)=\\dfrac{1}{x\\cdot \\ln{5}} \\Rightarrow y'(2)=\\dfrac{1}{2 \\ln 5}$."
  },
  {
    "id": "1D722TN17",
    "question": "Đạo hàm của hàm số $y=2x^3+3$ là",
    "options": [
      "$y'=6 x^2$",
      "$y'=6 x$",
      "$y'=3 x^2$",
      "$y'=6 x^2+3$"
    ],
    "answer": 0,
    "explain": "Ta có $y'=2\\cdot 3 x^{2}=6 x^2$."
  },
  {
    "id": "1D722TN18",
    "question": "Cho hàm số $f(x)=x^4+2 x^2-3$. Tìm $x$ để $f'(x)&gt;0$?",
    "options": [
      "$x&lt;-1$",
      "$x&lt;0$",
      "$x&gt;0$",
      "$-1&lt;x&lt;0$"
    ],
    "answer": 2,
    "explain": "Ta có $f'(x)=4x^3+2\\cdot 2x=4x^3+4x$.<br>  Và $f'(x)&gt;0 \\Leftrightarrow 4x^3+4x&gt;0 \\Leftrightarrow x&gt;0$."
  },
  {
    "id": "1D721TN19",
    "question": "Giả sử các hàm số $f=f(x)$; $g=g(x)$ là các hàm số có đạo hàm tại điểm $x$ thuộc khoảng xác định. Trong các khẳng định sau khẳng định nào <strong>sai</strong>?",
    "options": [
      "$\\left(\\dfrac{f}{g}\\right)'=\\dfrac{f' \\cdot g+f \\cdot g'}{g^2}$",
      "$(f+g)'=f'+g'$",
      "$(f-g)'=f'-g'$",
      "$(f \\cdot g)'=f' \\cdot g+g' \\cdot f$"
    ],
    "answer": 0,
    "explain": "Ta có $\\left(\\dfrac{f}{g}\\right)'=\\dfrac{f' \\cdot g-f \\cdot g'}{g^2} \\quad (g=g(x) \\ne 0)$."
  },
  {
    "id": "1D724TN20",
    "question": "Đạo hàm của hàm số $y=\\sin x+\\cos x$ là",
    "options": [
      "$y'=-\\cos x+\\sin x$",
      "$y'=\\cos x+\\sin x$",
      "$y'=-\\cos x-\\sin x$",
      "$y'=\\cos x-\\sin x$"
    ],
    "answer": 3,
    "explain": "Ta có $y'=(\\sin x)' + (\\cos x)'=(\\cos x) + (-\\sin x) = \\cos x-\\sin x$."
  },
  {
    "id": "1D722TN21",
    "question": "Tìm đạo hàm của hàm số $y = x^7$.",
    "options": [
      "$y' = 7x^6$",
      "$y' = 6x^7$",
      "$y' = x^6$",
      "$y' = 7x^8$"
    ],
    "answer": 0,
    "explain": "Ta có $y' = (x^7)' = 7x^6$."
  },
  {
    "id": "1D725TN22",
    "question": "Đạo hàm của hàm số $y=\\ln\\dfrac{x}{x+1}$ là",
    "options": [
      "$y'=\\dfrac{x}{x+1}$",
      "$y'=\\dfrac{1}{x(x+1)}$",
      "$y'=-\\dfrac{1}{x(x+1)}$",
      "$y'=\\dfrac{x+1}{x}$"
    ],
    "answer": 1,
    "explain": "Gọi $M(x_0;y_0)$ là tiếp điểm của tiếp tuyến với đồ thị hàm số.<br>  Xét hàm số $y=\\ln\\dfrac{x}{x+1}$, ta có $y'=\\dfrac{\\left(\\dfrac{x}{x+1}\\right)'}{\\dfrac{x}{x+1}}=\\dfrac{\\dfrac{1}{(x+1)^2}}{\\dfrac{x}{x+1}}=\\dfrac{1}{x(x+1)}$."
  },
  {
    "id": "1D725TN1",
    "question": "Đạo hàm của hàm số $y=3^x$ là",
    "options": [
      "$y'=\\dfrac{3^x}  {\\ln 3}$",
      "$y'=\\dfrac{-3^x}  {\\ln 3}$",
      "$y'=-3^x\\ln 3$",
      "$y'=3^x\\ln 3$"
    ],
    "answer": 3,
    "explain": "Ta có $y=3^x\\Rightarrow y'=3^x\\ln 3$."
  },
  {
    "id": "1D725TN2",
    "question": "Cho $a$, $b$ là hai số thực dương khác $1$ thỏa mãn đồ thị hàm số $y=f(x)=\\log_a x+\\log_b x$ luôn đi qua điểm $M(\\mathrm{e};20)$. Tính đạo hàm của hàm số tại điểm $x=5$.",
    "options": [
      "$15$",
      "$\\dfrac{1}{15}$",
      "$4$",
      "$\\dfrac{e}{4}$"
    ],
    "answer": 2,
    "explain": "Tập xác định $\\mathscr{D}=(0;+\\infty)$.<br>  Do đồ thị hàm số luôn đi qua điểm $M(\\mathrm{e};20)$ nên   $20=f(\\mathrm{e})=\\log_a \\mathrm{e}+\\log_b \\mathrm{e}=\\dfrac{1}{\\ln a}+\\dfrac{1}{\\ln b}.$  Ta có $y'=f'(x)=\\dfrac{1}{x\\cdot \\ln a}+\\dfrac{1}{x\\cdot \\ln b}$.<br>   Khi đó $y'(5)=f'(5)=\\dfrac{1}{5\\ln a}+\\dfrac{1}{5\\ln b}=\\dfrac{1}{5}\\cdot \\left(\\dfrac{1}{\\ln a}+\\dfrac{1}{\\ln b} \\right)=\\dfrac{1}{5}\\cdot 20=4.$"
  },
  {
    "id": "1D722TN22",
    "question": "Tiếp tuyến của đồ thị hàm số $y=\\dfrac{2x+3}{x-2}$ tại điểm có hoành độ bằng $3$ có phương trình là",
    "options": [
      "$y=7x+13$",
      "$y=30-7x$",
      "$y=3x+9$",
      "$y=-\\dfrac{4}{3} x-2$"
    ],
    "answer": 1,
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus \\{2\\}$.<br>  Ta có $y'=\\dfrac{-7}{\\left(x-2\\right)^2}$ suy ra $y'(3)=\\dfrac{-7}{\\left(3-2\\right)^2}=-7$, $y(3)=\\dfrac{2\\cdot 3+3}{3-2}=9$.<br>  Tiếp tuyến của đồ thị hàm số $y=\\dfrac{2x+3}{x-2}$ tại điểm có hoành độ bằng $3$ có phương trình là $y=-7\\left(x-3\\right)+9\\Leftrightarrow y=-7x+30.$"
  },
  {
    "id": "1D722TN23",
    "question": "Đạo hàm của hàm số $ y=\\dfrac{1}{3}x^3-x^2+1$ là",
    "options": [
      "$y'=x^2-2x$",
      "$y'=x^2-2x+1$",
      "$y'=x^3-2x$",
      "$y'=\\dfrac{1}{3}x^2-2x$"
    ],
    "answer": 0,
    "explain": "Ta có $y'=\\left(\\dfrac{1}{3}x^3-x^2+1 \\right)'=\\dfrac{1}{3}\\cdot 3x^2-2x=x^2-2x$."
  },
  {
    "id": "1D722TN24",
    "question": "Tiếp tuyến của đồ thị hàm số $y=x^2+4x-5$ tại điểm có hoành độ bằng $1$ là",
    "options": [
      "$y=6x+1$",
      "$y=6x+6$",
      "$y=6x-1$",
      "$y=6x-6$"
    ],
    "answer": 3,
    "explain": "Khi $ x=1\\Rightarrow y=0$.<br>  Ta có $y'=2x+4$<br>  Tiếp tuyến của đồ thị hàm số tại điểm $( 1;0 )$ là<br>  $ y=y'( 1 )\\cdot ( x-1 )+0=6( x-1 )=6x-6.$"
  },
  {
    "id": "1D726TN6",
    "question": "Cho một chất điểm chuyển động có phương trình $s=2 t^2+3 t$ ($t$ tính bằng giây, $s$ tính bằng mét). Vận tốc của chất điểm tại thời điểm $t_0=2$ (giây) bằng",
    "options": [
      "$19$ (m$ / $s)",
      "$22$ (m$ / $s)",
      "$11$ (m$ / $s)",
      "$9$ (m$ / $s)"
    ],
    "answer": 2,
    "explain": "Ta có $v(t)=s'(t)=4 t+3$.<br>  Vận tốc của chất điểm tại thời điểm $t_0=2$ là $v(2)=4\\cdot 2+3=11$ (m$ / $s)."
  },
  {
    "id": "1D722TN25",
    "question": "Cho hàm số $y=\\dfrac{2x-1}{x+1}$. Giá trị $f'(3)$ bằng",
    "options": [
      "$\\dfrac{4}{5}$",
      "$\\dfrac{3}{16}$",
      "$\\dfrac{2}{9}$",
      "$\\dfrac{1}{6}$"
    ],
    "answer": 1,
    "explain": "Tập xác định của hàm số đã cho là $\\mathscr{D}=\\mathbb{R} \\setminus \\{-1\\}$.<br>  Ta có $y=f(x)=\\dfrac{2x-1}{x+1}\\Rightarrow f'(x)=\\dfrac{3}{(x+1)^2}$.<br>  Khi đó $f'(3)=\\dfrac{3}{(3+1)^2}=\\dfrac{3}{16}$."
  }
];
