// =========================================================================
// KHỐI DỮ LIỆU: 1D33 - Trắc nghiệm
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem1D33 = [
  {
    "id": "1D332TN1",
    "question": "Cho hàm số $f(x) = \\dfrac{x^2 - 6x}{x + 2}$. Hàm số $f(x)$ gián đoạn tại điểm nào dưới đây?",
    "options": [
      "$x = 1$",
      "$x = -2$",
      "$x = 2$",
      "$x = -3$"
    ],
    "answer": 1,
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus \\left\\lbrace -2 \\right\\rbrace$. Do đó hàm số $f(x)$ gián đoạn tại điểm $x=-2$."
  },
  {
    "id": "1D331TN2",
    "question": "Cho hàm số $y = f(x)$ xác định trên $(m; n)$, $a \\in (m; n)$. Phát biểu nào sau đây là đúng?",
    "options": [
      "Hàm số $y = f(x)$ liên tục tại $x = a$ khi và chỉ khi $\\lim\\limits_{x \\to a} f(x) = f(a)$",
      "Hàm số $y = f(x)$ liên tục tại $x = a$ khi và chỉ khi $\\lim\\limits_{x \\to n} f(x) = f(a)$",
      "Hàm số $y = f(x)$ liên tục tại $x = a$ khi và chỉ khi $\\lim\\limits_{x \\to m} f(x) = f(a)$",
      "Hàm số $y = f(x)$ liên tục tại $x = a$ khi và chỉ khi $\\lim\\limits_{x \\to a^+} f(x) = \\lim\\limits_{x \\to a^-} f(x)$"
    ],
    "answer": 0,
    "explain": "Theo định nghĩa, hàm số $y = f(x)$ liên tục tại $x = a$ khi và chỉ khi $\\lim\\limits_{x \\to a} f(x) = f(a)$."
  },
  {
    "id": "1D332TN3",
    "question": "Trong các hàm số sau, hàm số nào liên tục trên $\\mathbb{R}$?",
    "options": [
      "$y = \\tan x$",
      "$y = \\sqrt{2023 + x}$",
      "$y = \\dfrac{x + 1}{x - 3}$",
      "$y = x^3 + 2x^2 - 4$"
    ],
    "answer": 3,
    "explain": "Hàm số $y = x^3 + 2x^2 - 4$ là hàm đa thức có tập xác định $\\mathscr{D}=\\mathbb{R}$ nên liên tục trên $\\mathbb{R}$."
  },
  {
    "id": "1D332TN4",
    "question": "Hàm số nào sau đây liên tục trên $\\mathbb{R}$?",
    "options": [
      "$y=\\dfrac{x-1}{x+1}$",
      "$y=x^2+2024$",
      "$y=\\sqrt{x-1}$",
      "$y=\\tan x$"
    ],
    "answer": 1,
    "explain": "Hàm số bậc hai có tập xác định là $\\mathbb{R}$ và liên tục trên $\\mathbb{R}$."
  },
  {
    "id": "1D332TN5",
    "question": "Hàm số $y=x^2+\\sqrt{x-2}$ gián đoạn tại điểm nào sau đây?",
    "options": [
      "$x_0=4$",
      "$x_0=0$",
      "$x_0=2$",
      "$x_0=3$"
    ],
    "answer": 2,
    "explain": "Hàm số $y=x^2$ liên tục trên $\\mathbb{R}$.<br>  Hàm số $y=\\sqrt{x-2}$ có tập xác định $D=[2;+\\infty)$.<br>  Vậy hàm số $y=x^2+\\sqrt{x-2}$ có tập xác định $D=[2;+\\infty)$.<br>   Do đó, hàm số gián đoạn tại $x_0=0$. Tuy nhiên, trong các đáp án chỉ có $x_0=2$ thuộc tập xác định của hàm số và khiến biểu thức $\\sqrt{x-2}$ không xác định khi $x&lt;2$.<br>  Vậy hàm số gián đoạn tại $x_0=2$."
  },
  {
    "id": "1D332TN6",
    "question": "Tìm các khoảng trên đó hàm số $f(x)=\\dfrac{x^2+1}{x+2}$ liên tục",
    "options": [
      "$(-\\infty ;-2)$ và $(-2 ;+\\infty)$",
      "$[-2 ;+\\infty)$",
      "$(-\\infty ; 2)$",
      "$\\mathbb{R}$"
    ],
    "answer": 0,
    "explain": "Dễ thấy hàm số có tập xác định $\\mathscr D=(-\\infty ;-2) \\cup (-2 ;+\\infty)$ nên hàm số liên tục trên các khoảng $(-\\infty ;-2)$ và $(-2 ;+\\infty)$"
  },
  {
    "id": "1D332TN7",
    "question": "Cho hàm số $f(x)=\\dfrac{x^2-2024x-2025}{x+1} \\text{khi }x&gt;-1 \\text{ và } 2026ax \\text{khi }x\\leq -1$. Xác định số thực $a$ để hàm số liên tục tại điểm $x=-1$.",
    "options": [
      "$a=-1$",
      "$a=-3$",
      "$a=3$",
      "$a=1$"
    ],
    "answer": 0,
    "explain": "$\\text{Hàm số }f(x)\\text{ liên tục tại điểm }x=-1 \\Leftrightarrow \\lim\\limits_{x\\to-1^{-}}f(x)=f(-1)$<br>$\\Leftrightarrow \\lim\\limits_{x\\to-1^{-}}\\dfrac{x^2-2024x-2025}{x+1}=2026a\\cdot (-1)$<br>$\\Leftrightarrow -2026=-2026a$<br>$\\Leftrightarrow a=-1.$"
  },
  {
    "id": "1D332TN8",
    "question": "Hàm số nào sau đây liên tục tại $ x=1$?  \\def\\dotEX{}",
    "options": [
      "$ f( x )=\\dfrac{{x^2}-1}{x-1}\\text{ khi }x&lt;1 \\text{ và } 2x+1\\text{ khi }x\\ge 1.$",
      "$ f( x )=\\dfrac{{x^2}-1}{x-1} \\text{ khi }x&lt;1 \\text{ và } 2x \\text{ khi }x\\ge 1.$",
      "$f( x )=\\dfrac{{x^2}-1}{x-1}\\text{ khi }x&lt;1 \\text{ và } 2x-1\\text{ khi }x\\ge 1.$",
      "$f( x )=\\dfrac{{x^2}-1}{x-1} \\text{ khi }x&lt;1 \\text{ và } x-1 \\text{ khi }x\\ge 1.$"
    ],
    "answer": 1,
    "explain": "Xét hàm số $ f( x )=\\dfrac{{x^2}-1}{x-1} \\text{ khi }x&lt;1 \\text{ và } 2x \\text{ khi }x\\ge 1$, ta có <br>- $\\lim\\limits_{x \\to 1^-} f \\left( x \\right) = \\lim\\limits_{x \\to 1^-} \\dfrac{x^2 - 1}{x - 1} = \\lim\\limits_{x \\to 1^-} \\left( x + 1 \\right) = 2$;<br>- $ \\lim\\limits_{x \\to 1^+} f \\left( x \\right) = \\lim\\limits_{x \\to 1^+} 2x = 2$. Vì $\\lim\\limits_{x \\to 1^+} f \\left( x \\right) = \\lim\\limits_{x \\to 1^-} f \\left( x \\right) = 2 $ nên hàm số liên tục tại $x = 1$."
  }
];
