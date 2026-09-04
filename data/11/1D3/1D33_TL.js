// =========================================================================
// KHỐI DỮ LIỆU: 1D33 - Trả lời ngắn (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.traLoiNgan1D33 = [
  {
    "id": "1D333TL1",
    "question": "Tìm giá trị của tham số $m$ để hàm số $f(x)=\\dfrac{x^2-x-2}{x-2}, \\text { khi } x \\neq 2 \\text{ và } m+1, \\text { khi } x=2$ liên tục tại điểm $x_0=2$.",
    "answer": "2",
    "explain": "Ta có $f(2)=m+1$ và $\\displaystyle\\lim\\limits _{x \\rightarrow 2}f(x)=\\displaystyle\\lim\\limits _{x \\rightarrow 2} \\dfrac{x^2-x-2}{x-2}=\\displaystyle\\lim\\limits _{x \\rightarrow 2} \\dfrac{(x-2)(x+1)}{x-2}=\\displaystyle\\lim\\limits _{x \\rightarrow 2} (x+1)=3$<br>  Để hàm số liên tục tại điểm $x_0=2$ thì $\\displaystyle\\lim\\limits _{x \\rightarrow 2} f(x)=f(2) \\Leftrightarrow m+1=3 \\Leftrightarrow m=2$"
  },
  {
    "id": "1D332TL2",
    "question": "[Lê Xe] Cho hàm số $f(x) =x^2 + x + 1, \\text{khi } x \\neq 4 \\text{ và } 2a + 1, \\text{khi } x = 4.$ Tìm $a$ để hàm số liên tục tại $x_0 = 4$.",
    "answer": "10",
    "explain": "Ta có   <br>- $f(x_0) = f(4) = 2a + 1.$<br>- $\\lim\\limits_{x \\to x_0} f(x) = \\lim\\limits_{x \\to 4} \\left( x^2 + x + 1 \\right) = 21.$  Để hàm số liên tục tại điểm $x_0 = 4$ thì   $\\lim\\limits_{x \\to 4} f(x) = f(4) \\Rightarrow 2a + 1 = 21 \\Leftrightarrow a = 10.$"
  }
];
