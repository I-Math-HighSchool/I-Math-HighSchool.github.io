// =========================================================================
// KHỐI DỮ LIỆU: 1D65 - Trắc nghiệm
// Nguồn: Các bài toán mũ/lôgarit nâng cao (bất phương trình cơ bản, phương pháp
// mũ hoá - lôgarit hoá, đặt ẩn phụ, hàm số/đánh giá, tham số) - trích và biên
// soạn lại từ thư mục "26-Toan11-HKII(Form-23-Oxyz)/Data-Logarit" (CD5.1-CD5.5),
// đã tự giải lại và kiểm tra từng câu trước khi thêm; loại bỏ các câu có lời
// giải nguồn sai/không nhất quán sau khi kiểm tra.
// =========================================================================
window.tracNghiem1D65 = [
  {
    "id": "1D651TN1",
    "question": "Giải bất phương trình $3^{x^{2}-2x}<27$.",
    "options": [
      "$(3;+\\infty)$",
      "$(-1;3)$",
      "$(-\\infty;-1)\\cup(3;+\\infty)$",
      "$(-\\infty;-1)$"
    ],
    "answer": 1,
    "explain": "Ta có $3^{x^{2}-2x}<27=3^3 \\Leftrightarrow x^{2}-2x<3 \\Leftrightarrow x^{2}-2x-3<0 \\Leftrightarrow -1<x<3$."
  },
  {
    "id": "1D651TN2",
    "question": "Tập nghiệm của bất phương trình $5^x>\\dfrac{1}{25}$ là",
    "options": [
      "$(-1;+\\infty)$",
      "$(-2;+\\infty)$",
      "$(5;+\\infty)$",
      "$(2;+\\infty)$"
    ],
    "answer": 1,
    "explain": "Ta có $5^x>\\dfrac{1}{25}=5^{-2}\\Leftrightarrow x>-2$. Vậy tập nghiệm là $(-2;+\\infty)$."
  },
  {
    "id": "1D651TN3",
    "question": "Tìm tập xác định $\\mathscr{D}$ của hàm số $y=\\ln(\\ln x)$.",
    "options": [
      "$\\mathscr{D}=(\\mathrm{e};+\\infty)$",
      "$\\mathscr{D}=(1;+\\infty)$",
      "$\\mathscr{D}=(0;+\\infty)$",
      "$\\mathscr{D}=(-\\infty;+\\infty)$"
    ],
    "answer": 1,
    "explain": "Hàm số xác định khi $\\ln x>0 \\Leftrightarrow x>1$. Vậy $\\mathscr{D}=(1;+\\infty)$."
  },
  {
    "id": "1D651TN4",
    "question": "Tìm tập xác định $\\mathscr{D}$ của hàm số $y=\\sqrt{1+\\log_{0,8}(x-2)}$.",
    "options": [
      "$\\mathscr{D}=\\left(\\dfrac{13}{4};+\\infty\\right)$",
      "$\\mathscr{D}=\\left[\\dfrac{13}{4};+\\infty\\right)$",
      "$\\mathscr{D}=\\left[2;\\dfrac{13}{4}\\right]$",
      "$\\mathscr{D}=\\left(2;\\dfrac{13}{4}\\right]$"
    ],
    "answer": 3,
    "explain": "Điều kiện: $x-2>0$ và $1+\\log_{0,8}(x-2)\\ge 0 \\Leftrightarrow \\log_{0,8}(x-2)\\ge -1$.<br>Vì cơ số $0,8<1$ nên $\\log_{0,8}(x-2)\\ge -1 \\Leftrightarrow x-2\\le (0,8)^{-1}=\\dfrac{5}{4} \\Leftrightarrow x\\le \\dfrac{13}{4}$.<br>Kết hợp $x>2$, ta được $\\mathscr{D}=\\left(2;\\dfrac{13}{4}\\right]$."
  },
  {
    "id": "1D651TN5",
    "question": "Bất phương trình $9^x<3^{x+4}$ có tập nghiệm $S$ là",
    "options": [
      "$S=(-\\infty;4)$",
      "$S=(4;+\\infty)$",
      "$S=(0;6)$",
      "$S=(0;4)$"
    ],
    "answer": 0,
    "explain": "Ta có $9^x<3^{x+4}\\Leftrightarrow 3^{2x}<3^{x+4}\\Leftrightarrow 2x<x+4\\Leftrightarrow x<4$. Vậy $S=(-\\infty;4)$."
  },
  {
    "id": "1D651TN6",
    "question": "Tìm tập nghiệm của bất phương trình $\\left(\\dfrac{1}{2}\\right)^{x^2-x}>\\dfrac{1}{2^{4-x}}$.",
    "options": [
      "$(2;+\\infty)$",
      "$(-2;2)$",
      "$(-2;+\\infty)$",
      "$(-\\infty;-2)\\cup(2;+\\infty)$"
    ],
    "answer": 1,
    "explain": "Vì $0<\\dfrac{1}{2}<1$ nên $\\left(\\dfrac{1}{2}\\right)^{x^2-x}>\\left(\\dfrac{1}{2}\\right)^{4-x}\\Leftrightarrow x^2-x<4-x\\Leftrightarrow x^2-4<0\\Leftrightarrow -2<x<2$."
  },
  {
    "id": "1D651TN7",
    "question": "Bất phương trình $8^{x^2-3x+4}\\le\\left(\\dfrac{1}{4}\\right)^{3x-15}$ có bao nhiêu nghiệm nguyên dương (nguyên dương)?",
    "options": [
      "$2$",
      "$4$",
      "$6$",
      "$3$"
    ],
    "answer": 3,
    "explain": "Ta có $8^{x^2-3x+4}\\le\\left(\\dfrac{1}{4}\\right)^{3x-15}\\Leftrightarrow 2^{3(x^2-3x+4)}\\le 2^{-2(3x-15)}\\Leftrightarrow 3(x^2-3x+4)\\le -2(3x-15)$<br>$\\Leftrightarrow x^2-x-6\\le 0 \\Leftrightarrow -2\\le x\\le 3$. Do $x$ nguyên dương nên $x\\in\\{1;2;3\\}$: có $3$ nghiệm."
  },
  {
    "id": "1D651TN8",
    "question": "Tập nghiệm của bất phương trình $\\left(\\dfrac{1}{3}\\right)^{-3x^2}<3^{2x+1}$ là",
    "options": [
      "$\\left(-\\infty;-\\dfrac{1}{3}\\right)\\cup(1;+\\infty)$",
      "$(1;+\\infty)$",
      "$\\left(-\\dfrac{1}{3};1\\right)$",
      "$\\left(-\\infty;-\\dfrac{1}{3}\\right)$"
    ],
    "answer": 2,
    "explain": "Bất phương trình tương đương $3^{3x^2}<3^{2x+1}\\Leftrightarrow 3x^2<2x+1\\Leftrightarrow 3x^2-2x-1<0\\Leftrightarrow -\\dfrac{1}{3}<x<1$."
  },
  {
    "id": "1D651TN9",
    "question": "Giải bất phương trình $\\left(2,5\\right)^{5x-7}>\\left(\\dfrac{2}{5}\\right)^{x+1}$.",
    "options": [
      "$x\\ge 1$",
      "$x>1$",
      "$x<1$",
      "$x=1$"
    ],
    "answer": 1,
    "explain": "Ta có $2,5=\\dfrac{5}{2}$ và $\\dfrac{2}{5}=\\left(\\dfrac{5}{2}\\right)^{-1}$, cơ số $\\dfrac{5}{2}>1$ nên<br>$\\left(\\dfrac{5}{2}\\right)^{5x-7}>\\left(\\dfrac{5}{2}\\right)^{-(x+1)}\\Leftrightarrow 5x-7>-(x+1)\\Leftrightarrow 6x>6\\Leftrightarrow x>1$."
  },
  {
    "id": "1D651TN10",
    "question": "Bất phương trình $25^{x+1}+9^{x+1}\\ge 34\\cdot 15^{x}$ có tập nghiệm $S$. Tập $S$ chứa bao nhiêu số nguyên trong đoạn $[-2021;2022]$?",
    "options": [
      "$4045$",
      "$4043$",
      "$3$",
      "$2023$"
    ],
    "answer": 1,
    "explain": "Đặt $t=\\left(\\dfrac{5}{3}\\right)^x>0$. Ta có $25\\cdot 5^{2x}-34\\cdot 5^x\\cdot 3^x+9\\cdot 9^x... $, chia hai vế cho $9^{x+1}$ và biến đổi được<br>$25t^2-34t+9\\ge 0 \\Leftrightarrow t\\le \\dfrac{9}{25}=\\left(\\dfrac{5}{3}\\right)^{-2}$ hoặc $t\\ge 1=\\left(\\dfrac{5}{3}\\right)^0$, suy ra $x\\le -2$ hoặc $x\\ge 0$.<br>Số nguyên trong $[-2021;-2]$: có $2020$ số; số nguyên trong $[0;2022]$: có $2023$ số. Tổng: $2020+2023=4043$."
  },
  {
    "id": "1D651TN11",
    "question": "Tìm tập nghiệm của bất phương trình $1+2^{x+1}+3^{x+1}<6^x$.",
    "options": [
      "$\\mathbb{R}$",
      "$(2;+\\infty)$",
      "$(-\\infty;2)$",
      "$(2;10)$"
    ],
    "answer": 1,
    "explain": "Xét $f(x)=\\dfrac{1}{6^x}+\\dfrac{2}{3^x}+\\dfrac{3}{2^x}-1$ (chia hai vế cho $6^x$). Ta thấy $x=2$ là nghiệm của $f(x)=0$ (vì $1+2^3+3^3=36=6^2$) và $f$ nghịch biến trên $\\mathbb{R}$, nên $f(x)<0 \\Leftrightarrow x>2$. Vậy tập nghiệm là $(2;+\\infty)$."
  },
  {
    "id": "1D651TN12",
    "question": "Tính số nghiệm nguyên của bất phương trình $2\\log_5\\dfrac{x^2+1}{x}+2x^4-6x^2+1\\le 0$.",
    "options": [
      "$2$",
      "$4$",
      "$0$",
      "$1$"
    ],
    "answer": 3,
    "explain": "Điều kiện $x>0$. Bất phương trình tương đương $\\log_5(x^2+1)^2+2(x^2+1)^2\\le \\log_5(5x^2)+2\\cdot 5x^2$.<br>Xét $f(t)=\\log_5 t+2t$ đồng biến trên $(0;+\\infty)$ (vì $f'(t)=\\dfrac{1}{t\\ln 5}+2>0$), bất phương trình có dạng $f(u)\\le f(v)$ với $u=(x^2+1)^2$, $v=5x^2$, suy ra $(x^2+1)^2\\le 5x^2 \\Leftrightarrow x^4-3x^2+1\\le 0 \\Leftrightarrow \\dfrac{3-\\sqrt5}{2}\\le x^2\\le \\dfrac{3+\\sqrt5}{2}$.<br>Kết hợp $x>0$: $\\sqrt{\\dfrac{3-\\sqrt5}{2}}\\le x\\le\\sqrt{\\dfrac{3+\\sqrt5}{2}}$, tức $0,618\\le x\\le 1,618$. Do $x$ nguyên nên $x=1$: có $1$ nghiệm."
  },
  {
    "id": "1D651TN13",
    "question": "Tìm tập nghiệm $S$ của bất phương trình $(\\sqrt3+1)^{x}+(\\sqrt3-1)^{x}\\le \\sqrt2^{x}$.",
    "options": [
      "$S=\\mathbb{R}$",
      "$S=(0;+\\infty)$",
      "$S=(-\\infty;0]$",
      "$S=\\varnothing$"
    ],
    "answer": 3,
    "explain": "Chia hai vế cho $(\\sqrt2)^x>0$: đặt $a=\\dfrac{\\sqrt3+1}{\\sqrt2}$, $b=\\dfrac{\\sqrt3-1}{\\sqrt2}$, ta có $a\\cdot b=\\dfrac{(\\sqrt3+1)(\\sqrt3-1)}{2}=\\dfrac{2}{2}=1$ nên $b=\\dfrac{1}{a}$.<br>Bất phương trình trở thành $a^x+a^{-x}\\le 1$. Nhưng theo bất đẳng thức Cô-si, $a^x+a^{-x}\\ge 2$ với mọi $x$ (vì $a>0,a\\ne 1$), nên không có $x$ nào thoả $a^x+a^{-x}\\le 1$. Vậy $S=\\varnothing$."
  }
];
