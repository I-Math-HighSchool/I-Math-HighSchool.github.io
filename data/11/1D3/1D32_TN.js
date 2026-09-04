// =========================================================================
// KHỐI DỮ LIỆU: 1D32 - Trắc nghiệm (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.tracNghiem1D32 = [
  {
    "id": "1D322TN1",
    "question": "Giá trị của giới hạn $\\lim\\limits_{x \\to - 3} \\dfrac{\\sqrt{x^2 +16}}{x+1} $ là",
    "options": [
      "$1$",
      "$\\dfrac{-5}{2}$",
      "$\\dfrac{5}{2}$",
      "$ +\\infty$"
    ],
    "answer": 1,
    "explain": "Ta có $\\lim\\limits_{x \\to - 3} \\dfrac{\\sqrt{x^2 +16}}{x+1} = \\dfrac{\\sqrt{(-3)^2 +16}}{(-3)+1}=\\dfrac{-5}{2}$."
  },
  {
    "id": "1D324TN2",
    "question": "Tính $\\lim\\limits_{x \\to +\\infty} \\dfrac{x^2 - x + 1}{2 - x}$.",
    "options": [
      "$-1$",
      "$0$",
      "$+\\infty$",
      "$-\\infty$"
    ],
    "answer": 3,
    "explain": "$\\lim\\limits_{x \\to +\\infty} \\dfrac{x^2 - x + 1}{2 - x} = \\lim\\limits_{x \\to +\\infty} \\dfrac{x^2\\left(1 - \\dfrac{1}{x} + \\dfrac{1}{x^2}\\right)}{x\\left(\\dfrac{2}{x} - 1\\right)} = \\lim\\limits_{x \\to +\\infty} \\dfrac{x\\left(1 - \\dfrac{1}{x} + \\dfrac{1}{x^2}\\right)}{\\dfrac{2}{x} - 1}=-\\infty$.<br>  Vì $\\lim \\limits_{x \\to +\\infty} x=+\\infty$ và $\\lim \\limits_{x \\to +\\infty} \\dfrac{1-\\dfrac{1}{x}+\\dfrac{1}{x^2}}{\\dfrac{2}{x}-1}=-1&lt;0$."
  },
  {
    "id": "1D325TN3",
    "question": "Tìm giới hạn $\\lim\\limits_{x \\to 4^-} \\dfrac{x^2 + x}{x - 4}$.",
    "options": [
      "$+\\infty$",
      "$-\\infty$",
      "$0$",
      "$-\\dfrac{1}{4}$"
    ],
    "answer": 1,
    "explain": "$\\lim\\limits_{x \\to 4^-} \\dfrac{x^2 + x}{x - 4}=-\\infty$ vì $\\lim \\limits_{x \\to 4^-}( x^2+x)=20&gt;0 \\text{ và } \\lim \\limits_{x \\to 4^-} (x-4)=0 \\text{ và } x\\to 4^-\\Rightarrow x-4&lt;0.$"
  },
  {
    "id": "1D321TN4",
    "question": "Cho hàm số $y = f(x)$ có giới hạn hữu hạn khi $x$ dần tới $x_0$. Mệnh đề nào sau đây <strong>sai</strong>?",
    "options": [
      "$\\lim\\limits_{x \\to x_0} f(x) = L$",
      "$\\lim\\limits_{x \\to x_0} c = c$ (với $c$ là hằng số)",
      "$\\lim\\limits_{x \\to x_0} x = x_0$",
      "$\\lim\\limits_{x \\to +\\infty} f(x) = L$"
    ],
    "answer": 3,
    "explain": "Nếu $x$ dần tới $x_0$ thì hàm số $y=f(x)$ có giới hạn hữu hạn nên mệnh đề sai là $\\lim\\limits_{x \\to +\\infty} f(x) = L$."
  },
  {
    "id": "1D322TN5",
    "question": "Giới hạn $\\lim\\limits_{x \\to 3^{-}} \\dfrac{2x+5}{3-x}$ bằng",
    "options": [
      "$-\\infty$",
      "$+\\infty$",
      "$0$",
      "$11$"
    ],
    "answer": 1,
    "explain": "Ta có $\\lim\\limits_{x \\to 3^{-}} (2x+5)=2 \\cdot 3+5=11&gt;0$, $\\lim\\limits_{x \\to 3^{-}} (3-x)=0$.<br>  Mặt khác $x \\rightarrow 3^{-} \\Rightarrow x&lt;3 \\Rightarrow 3-x&gt;0$.<br>  Vậy $\\lim\\limits_{x \\to 3^{-}} \\dfrac{2x+5}{3-x}=+\\infty$."
  },
  {
    "id": "1D322TN6",
    "question": "Cho các giới hạn: $\\lim \\limits_{x \\rightarrow x_{0}} f(x)=2$; $\\lim \\limits_{x \\rightarrow x_{0}} g(x)=3$. Tính $\\lim \\limits_{x \\rightarrow x_{0}}[3 f(x)+4 g(x)]$.",
    "options": [
      "$-6$",
      "$5$",
      "$18$",
      "$17$"
    ],
    "answer": 2,
    "explain": "$\\lim \\limits_{x \\rightarrow x_{0}}[3 f(x)+4 g(x)]=3\\lim \\limits_{x \\rightarrow x_{0}} f(x)+4\\lim \\limits_{x \\rightarrow x_{0}} g(x)=3\\cdot2+4\\cdot3=18$."
  },
  {
    "id": "1D322TN7",
    "question": "Giới hạn $\\lim \\limits_{x\\to 2}\\dfrac{x^2-3x+2}{x-2}$ bằng",
    "options": [
      "$-1$",
      "$0$",
      "$2$",
      "$1$"
    ],
    "answer": 3,
    "explain": "$\\lim \\limits_{x\\to 2}\\dfrac{x^2-3x+2}{x-2}=\\lim \\limits_{x\\to 2}\\dfrac{(x-1)(x-2)}{x-2}=\\lim \\limits_{x\\to 2} (x-1)=2-1=1$."
  },
  {
    "id": "1D321TN8",
    "question": "Trong các mệnh đề sau, mệnh đề nào sai?",
    "options": [
      "$\\lim\\limits _{x \\rightarrow 0^{+}} \\dfrac{1}{x^4}=+\\infty$",
      "$\\lim\\limits _{x \\rightarrow 0^{+}} \\dfrac{1}{\\sqrt{x}}=+\\infty$",
      "$\\lim\\limits _{x \\rightarrow 2^{+}} \\dfrac{1}{x-2}=+\\infty$",
      "$\\lim\\limits _{x \\rightarrow 2^{+}} \\dfrac{1}{x-2}=-\\infty$"
    ],
    "answer": 3,
    "explain": "Khi $x \\rightarrow 2^{+}$ thì $x-2&gt;0$ nên $\\lim\\limits _{x \\rightarrow 2^{+}} \\dfrac{1}{x-2}=+\\infty$"
  },
  {
    "id": "1D322TN9",
    "question": "Tìm $\\lim\\limits _{x \\rightarrow-\\infty} \\dfrac{\\sqrt{x^2+3 x+5}}{4 x-1}$",
    "options": [
      "$-\\dfrac{1}{4}$",
      "$1$",
      "$0$",
      "$\\dfrac{1}{4}$"
    ],
    "answer": 0,
    "explain": "$\\lim\\limits _{x \\rightarrow-\\infty} \\dfrac{\\sqrt{x^2+3 x+5}}{4 x-1}=\\lim\\limits _{x \\rightarrow-\\infty} \\dfrac{-x\\sqrt{1+\\dfrac{3}{x}+\\dfrac{5}{x^2}}}{x\\left(4-\\dfrac{1}{x}\\right)}=\\lim\\limits _{x \\rightarrow-\\infty} \\dfrac{-\\sqrt{1+\\dfrac{3}{x}+\\dfrac{5}{x^2}}}{4-\\dfrac{1}{x}}=-\\dfrac{1}{4}$"
  },
  {
    "id": "1D322TN10",
    "question": "Cho $\\lim\\limits _{x \\rightarrow-\\infty}\\left(\\sqrt{x^2+a x+5}+x\\right)=5$. Khi đó giá trị $a$ là",
    "options": [
      "$10$",
      "$-6$",
      "$6$",
      "$-10$"
    ],
    "answer": 3,
    "explain": "Ta có: $\\lim\\limits _{x \\rightarrow-\\infty}\\left(\\sqrt{x^2+a x+5}+x\\right)=\\lim\\limits _{x \\rightarrow-\\infty}\\dfrac{ax+5}{\\sqrt{{{x}^{2}}+ax+5}-x}=\\lim\\limits _{x \\rightarrow-\\infty}\\dfrac{x\\left( a+\\dfrac{5}{x} \\right)}{x\\left( -\\sqrt{1+\\dfrac{a}{x}+\\dfrac{5}{{{x}^{2}}}}-1 \\right)}=\\lim\\limits _{x \\rightarrow-\\infty}\\dfrac{a+\\dfrac{5}{x}}{-\\sqrt{1+\\dfrac{a}{x}+\\dfrac{5}{{{x}^{2}}}}-1}=-\\dfrac{a}{2}$<br>  Theo giả thiết, ta suy ra $-\\dfrac{a}{2}=5 \\Leftrightarrow a=-10$"
  }
];
