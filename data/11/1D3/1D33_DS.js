// =========================================================================
// KHỐI DỮ LIỆU: 1D33 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D33 = [
  {
    "id": "1D332DS1",
    "question": "Cho hàm số $f(x)=x^2-6x+2 \\text{khi} x &gt; 2 \\text{ và } 3a+1 \\text{khi} x \\le 2$, với $a$ là số thực. Xét tính đúng sai các phát biểu sau",
    "subQuestions": [
      {
        "text": "$f(2)=7$",
        "answer": false
      },
      {
        "text": "$\\lim\\limits_{x\\to 2^-} f(x)=3a+1$",
        "answer": true
      },
      {
        "text": "$\\lim\\limits_{x\\to 2^+} f(x)=-5$",
        "answer": false
      },
      {
        "text": "Khi $a=-\\dfrac{7}{3}$ thì hàm số $y=f(x)$ liên tục tại điểm $x=2$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Vì $x=2$ thỏa mãn $x \\le 2$ nên $f(2)=3a+1$.<br>- <strong>Đúng</strong>.<br>  Ta có $\\lim\\limits_{x\\to 2^-} f(x)=\\lim\\limits_{x\\to 2^-}(3a+1)=3a+1$.<br>- <strong>Sai</strong>.<br>  Ta có $\\lim\\limits_{x\\to 2^+} f(x)=\\lim\\limits_{x\\to 2^+}(x^2-6x+2)=2^2-6 \\cdot 2+2=4-12+2=-6$.<br>- <strong>Đúng</strong>.<br>  Để hàm số $y=f(x)$ liên tục tại $x=2$, ta cần có $f(2)=\\lim\\limits_{x\\to 2^-} f(x)=\\lim\\limits_{x\\to 2^+} f(x)$.<br>  Ta có $f(2)=3a+1$, $\\lim\\limits_{x\\to 2^-} f(x)=3a+1$, và $\\lim\\limits_{x\\to 2^+} f(x)=-6$.<br>  Do đó, hàm số liên tục tại $x=2$ khi $3a+1=-6 \\Leftrightarrow 3a=-7 \\Leftrightarrow a=-\\dfrac{7}{3}$."
  },
  {
    "id": "1D332DS2",
    "question": "Cho hàm số $f(x)=\\dfrac{1}{4} x+\\dfrac{1}{4} \\text{khi } x \\leq 2 \\text{ và } \\dfrac{\\sqrt{3x-2}-2}{x-2} \\text{khi } x &gt; 2.$",
    "subQuestions": [
      {
        "text": "$\\lim\\limits_{x \\to 2^{+}} f(x)=\\dfrac{1}{2}$",
        "answer": false
      },
      {
        "text": "$\\lim\\limits_{x \\to 0} f(x)=\\dfrac{1}{4}$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ liên tục tại $x=2$",
        "answer": true
      },
      {
        "text": "$\\lim\\limits_{x \\to 2^{-}} f(x)=\\dfrac{3}{4}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có   $\\lim\\limits_{x \\to 2^{+}} f(x) = \\lim\\limits_{x \\to 2^{+}}\\dfrac{\\sqrt{3x-2}-2}{x-2}$<br>$= \\lim\\limits_{x \\to 2^{+}}\\dfrac{3x-2-4}{(x-2)\\left(\\sqrt{3x-2}+2\\right)}$<br>$= \\lim\\limits_{x \\to 2^{+}}\\dfrac{3(x-2)}{(x-2)\\left(\\sqrt{3x-2}+2\\right)}$<br>$= \\lim\\limits_{x \\to 2^{+}}\\dfrac{3}{\\sqrt{3x-2}+2}$<br>$= \\dfrac{3}{4}.$<br>- Ta có $\\lim\\limits_{x \\to 0} f(x)=\\lim\\limits_{x \\to 0}\\left(\\dfrac{1}{4} x+\\dfrac{1}{4}\\right)=\\dfrac{1}{4}$.<br>- Ta có $f(2)=\\dfrac{1}{4}\\cdot 2+\\dfrac{1}{4}=\\dfrac{3}{4}$.<br>  Ta có $\\lim\\limits_{x \\to 2^{-}} f(x)=\\lim\\limits_{x \\to 2^{-}}\\left(\\dfrac{1}{4} x+\\dfrac{1}{4}\\right)=\\dfrac{3}{4}$.<br>  Suy ra $\\lim\\limits_{x \\to 2^{-}} f(x)=\\lim\\limits_{x \\to 2^{+}} f(x)=f(2)$.<br>  Do đó $f(x)$ liên tục tại $x=2$.<br>- Ta có $\\lim\\limits_{x \\to 2^{-}} f(x)=\\lim\\limits_{x \\to 2^{-}}\\left(\\dfrac{1}{4} x+\\dfrac{1}{4}\\right)=\\dfrac{3}{4}$."
  },
  {
    "id": "1D332DS3",
    "question": "Cho hàm số $f(x)=\\dfrac{x-3}{x+1}$",
    "subQuestions": [
      {
        "text": "Hàm số đã cho liên tục tại $x_{0}=1$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho liên tục trên các khoảng $\\left(-\\infty;1\\right)$, $\\left(1;+\\infty \\right)$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\lim_{x\\rightarrow (-1)^{+}}\\dfrac{x-3}{x+1}=+\\infty$",
        "answer": false
      },
      {
        "text": "Không tồn tại giới hạn $\\displaystyle\\lim_{x\\rightarrow -1}\\left[f(x) \\right]^{2}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br> Hàm số $f(x)$ xác định trên $\\mathbb{R}\\setminus \\left\\lbrace -1\\right\\rbrace$, do đó $x_{0}=1$ thuộc tập xác định của hàm số.<br> Ta có $\\displaystyle\\lim_{x\\rightarrow1}f(x)=\\lim_{x\\rightarrow1}\\frac{x-3}{x+1}=\\frac{1-3}{1+1}=\\frac{-2}{2}=-1=f(1)$. Vậy hàm số $f(x)$ liên tục tại $x_{0}=1$.<br>- <strong>Sai</strong>.<br> Tập xác định của hàm số $f(x)$ là $\\left(-\\infty;-1 \\right)\\cup\\left(-1;+\\infty\\right)$. Vậy hàm số $f(x)$ liên tục trên các khoảng $\\left(-\\infty;-1 \\right)$ và $\\left(-1;+\\infty\\right)$.<br>- <strong>Sai</strong>. <br>Ta có $\\displaystyle\\lim_{x\\rightarrow (-1)^{+}}\\dfrac{x-3}{x+1}=-\\infty$.<br>- <strong>Sai</strong>.<br> Ta có $\\displaystyle\\lim_{x\\rightarrow -1}\\left[f(x) \\right]^{2}=+\\infty$."
  },
  {
    "id": "1D332DS4",
    "question": "Cho hàm số $x-2 \\text{khi } x\\leq 2 \\text{ và } \\dfrac{mx-2}{x^2-3x+2} \\text{khi }x&gt;2$. Khi đó",
    "subQuestions": [
      {
        "text": "Hàm số đã cho liên tục tại điểm $x=2$ với $m\\neq 1$",
        "answer": false
      },
      {
        "text": "$f(2)=2$",
        "answer": false
      },
      {
        "text": "Giới hạn $\\lim \\limits_{x\\to 2^-}f(x)=0$",
        "answer": true
      },
      {
        "text": "Với $m=1$ thì hàm số đã cho không liên tục tại $x=2$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $f(2)=2-2=0$.<br>   Hàm số liên tục tại $x=2$ khi $\\lim \\limits_{x\\to 2^+}f(x)=\\lim \\limits_{x\\to 2^-}f(x)=f(2)$  $\\lim \\limits_{x\\to 2^+}f(x)=f(2).$<br>$\\Leftrightarrow \\lim \\limits_{x\\to 2^+}\\dfrac{mx-2}{x^2-3x+2}=0.$<br>$\\Rightarrow \\lim \\limits_{x\\to 2^+}(mx-2)=0.$<br>$\\Rightarrow 2m-2=0.$<br>$\\Rightarrow m=1.$  Với $m=1$, $f(x)=\\dfrac{1\\cdot x-2}{x^2-3x+2}=\\dfrac{x-2}{x^2-3x+2}$ khi $x&gt;2$.<br>  $\\lim \\limits_{x\\to 2^+}f(x)=\\lim \\limits_{x\\to 2^+}\\dfrac{x-2}{x^2-3x+2}=\\lim \\limits_{x\\to 2^+}\\dfrac{1}{x-1}=\\dfrac{1}{2-1}=1\\neq f(2)$<br>   $\\Rightarrow $ Không tồn tại $m$ để hàm số liên tục tại $x=2$.<br>- $f(2)=2-2=0$.<br>- $\\lim \\limits_{x\\to 2^-}f(x)=\\lim \\limits_{x\\to 2^-}\\left(x-2\\right)=2-2=0$.<br>- Với $m=1$, $f(x)=\\dfrac{1\\cdot x-2}{x^2-3x+2}=\\dfrac{x-2}{x^2-3x+2}$ khi $x&gt;2$.<br>  $\\lim \\limits_{x\\to 2^+}f(x)=\\lim \\limits_{x\\to 2^+}\\dfrac{x-2}{x^2-3x+2}=\\lim \\limits_{x\\to 2^+}\\dfrac{1}{x-1}=\\dfrac{1}{2-1}=1\\neq f(2)$<br>   Vậy hàm số đã cho không liên tục tại $x=2$."
  },
  {
    "id": "1D332DS5",
    "question": "Xét tính liên tục của hàm số",
    "subQuestions": [
      {
        "text": "$f(x)=\\dfrac{3x-2}{x-5}$ là hàm số liên tục trên mỗi khoảng $(-\\infty;5),(5;+\\infty)$",
        "answer": true
      },
      {
        "text": "$f(x)=\\sin x-2\\cos x+3$ là hàm số liên tục trên $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)=-\\dfrac{x}{2} \\text{ khi } x\\le 1 \\text{ và } \\dfrac{x^2-3x+2}{x^2-1} \\text{ khi } x&gt;1$ là hàm gián đoạn tại điểm $x_0=1$",
        "answer": false
      },
      {
        "text": "Hàm số $f(x)=\\dfrac{3x-2}{x-5}$ là hàm số gián đoạn tại điểm $x_0=5$",
        "answer": true
      }
    ],
    "explain": "<br>- $f(x)=\\dfrac{3x-2}{x-5}$ là hàm phân thức, có tập xác định là $\\left(-\\infty;5\\right)\\cup\\left(5;+\\infty\\right)$ nên hàm số liên tục trên các khoảng $\\left(-\\infty;5\\right)$ và $\\left(5;+\\infty\\right)$.<br>- $f(x)=\\sin x-2\\cos x+3$ có tập xác định là $\\mathbb{R}$ nên hàm số liên tục trên $\\mathbb{R}$.<br>- $f(1)=-\\dfrac{1}{2}$.<br>   $\\lim\\limits_{x\\to1^{-}}f(x)=\\lim\\limits_{x\\to1^{-}}\\left(-\\dfrac{x}{2}\\right)=-\\dfrac{1}{2}$.<br>  $\\lim\\limits_{x\\to1^{+}}f(x)=\\lim\\limits_{x\\to1^{+}}\\dfrac{x^2-3x+2}{x^2-1}=\\lim\\limits_{x\\to1^{+}}\\dfrac{(x-1)(x-2)}{(x-1)(x+1)}=\\lim\\limits_{x\\to1^{+}}\\dfrac{x-2}{x+1}=-\\dfrac{1}{2}$.<br>  Vì $\\lim\\limits_{x\\to1^{+}}f(x)=\\lim\\limits_{x\\to1^{-}}f(x)=f(1)=-\\dfrac{1}{2}$ nên hàm số liên tục tại $x_0=1$.<br>- Vì $f(5)$ không tồn tại nên hàm số không liên tục tại $x_0=5$."
  },
  {
    "id": "1D334DS1",
    "question": "Một bãi đỗ xe ôtô tính phí $60\\,000$ cho giờ đầu tiên (hoặc một phần của giờ đầu tiên) và thêm $40\\,000$ đồng cho mỗi giờ (hoặc một phần của mỗi giờ) tiếp theo, tối đa là $200\\,000$ đồng. Gọi $C=C(t)$ là hàm số biểu thị chi phí theo thời gian đỗ xe.",
    "subQuestions": [
      {
        "text": "Số tiền đỗ xe của một người với thời gian $2{,}5$ giờ là $140\\,000$ đồng",
        "answer": false
      },
      {
        "text": "Hàm số $C(t)$ liên tục trên $[0;+\\infty)$",
        "answer": false
      },
      {
        "text": "$\\lim\\limits _{t\\rightarrow 3}C(t)=140\\,000$",
        "answer": false
      },
      {
        "text": "Chênh lệch chi phí đối với hai khách hàng đỗ xe có thời gian $t_{1}$; $t_{2}$ thay đổi với $2&lt;t_{1}\\leq 3$; $3&lt;t_{2}\\leq 4$ là không đổi",
        "answer": true
      }
    ],
    "explain": "Hàm số biểu thị chi phí theo thời gian đỗ xe<br> $C(t)= 60\\,000 0&lt;t \\leq 1 \\text{ và } 60\\,000+40\\,000(t-1) 1&lt;t \\leq 4 \\text{ và } 200\\,000 t&gt;4.$ <br>- Số tiền đỗ xe của một người với thời gian $2{,}5$ giờ là<br> $C(2{,}5) =60\\,000+40\\,000(2{,}5-1)=120\\,000$.<br>- Ta có $\\lim\\limits _{t\\rightarrow 4^-}C(t)=180\\,000 \\text{ và } \\lim\\limits _{t\\rightarrow 4^+}C(t)=200\\,000.$<br> Suy ra hàm số không liên tục tại $t=4$.<br>- Ta có $\\lim\\limits _{t\\rightarrow 3}C(t)=\\lim\\limits _{t\\rightarrow 3}\\left[60\\,000+40\\,000(t-1)\\right]=140\\,000$.<br>- Chi phí đối với khách hàng đỗ xe của hai khách hàng tại thời điểm $t_{1}$, $t_{2}$ lần lượt là<br> $C(t_{1})=60\\,000+40\\,000(3-1)=140\\,000$.<br> $C(t_{2})=60\\,000+40\\,000(4-1)=180\\,000$.<br> Chênh lệch chi phí đối với hai khách hàng đỗ xe là \\[C(t_{1})-C(t_{2})=180\\,000-140\\,000=40\\,000.\\]"
  },
  {
    "id": "1D332DS6",
    "question": "Cho hàm số $x-2 \\text{khi } x\\leq 2 \\text{ và } \\dfrac{mx-2}{x^2-3x+2} \\text{khi }x&gt;2$. Khi đó",
    "subQuestions": [
      {
        "text": "Hàm số đã cho liên tục tại điểm $x=2$ với $m\\neq 1$",
        "answer": false
      },
      {
        "text": "$f(2)=2$",
        "answer": false
      },
      {
        "text": "Giới hạn $\\lim \\limits_{x\\to 2^-}f(x)=0$",
        "answer": true
      },
      {
        "text": "Với $m=1$ thì hàm số đã cho không liên tục tại $x=2$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $f(2)=2-2=0$.<br>   Hàm số liên tục tại $x=2$ khi $\\lim \\limits_{x\\to 2^+}f(x)=\\lim \\limits_{x\\to 2^-}f(x)=f(2)$  $\\lim \\limits_{x\\to 2^+}f(x)=f(2).$<br>$\\Leftrightarrow \\lim \\limits_{x\\to 2^+}\\dfrac{mx-2}{x^2-3x+2}=0.$<br>$\\Rightarrow \\lim \\limits_{x\\to 2^+}(mx-2)=0.$<br>$\\Rightarrow 2m-2=0.$<br>$\\Rightarrow m=1.$  Với $m=1$, $f(x)=\\dfrac{1\\cdot x-2}{x^2-3x+2}=\\dfrac{x-2}{x^2-3x+2}$ khi $x&gt;2$.<br>  $\\lim \\limits_{x\\to 2^+}f(x)=\\lim \\limits_{x\\to 2^+}\\dfrac{x-2}{x^2-3x+2}=\\lim \\limits_{x\\to 2^+}\\dfrac{1}{x-1}=\\dfrac{1}{2-1}=1\\neq f(2)$<br>   $\\Rightarrow $ Không tồn tại $m$ để hàm số liên tục tại $x=2$.<br>- $f(2)=2-2=0$.<br>- $\\lim \\limits_{x\\to 2^-}f(x)=\\lim \\limits_{x\\to 2^-}\\left(x-2\\right)=2-2=0$.<br>- Với $m=1$, $f(x)=\\dfrac{1\\cdot x-2}{x^2-3x+2}=\\dfrac{x-2}{x^2-3x+2}$ khi $x&gt;2$.<br>  $\\lim \\limits_{x\\to 2^+}f(x)=\\lim \\limits_{x\\to 2^+}\\dfrac{x-2}{x^2-3x+2}=\\lim \\limits_{x\\to 2^+}\\dfrac{1}{x-1}=\\dfrac{1}{2-1}=1\\neq f(2)$<br>   Vậy hàm số đã cho không liên tục tại $x=2$."
  }
];
