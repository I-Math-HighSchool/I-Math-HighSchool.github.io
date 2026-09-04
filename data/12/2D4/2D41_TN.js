// =========================================================================
// KHỐI DỮ LIỆU: §1. Nguyên hàm - Trắc nghiệm
// Nguồn: TaiLieuThamKhao/BANK-25-26/Lop12/CD1.1-CD1.6.tex (gộp) (chuyển từ LaTeX)
// Hình vẽ (bảng biến thiên, đồ thị...) đã được biên dịch sẵn bằng LaTeX/TikZ
// thành ảnh PNG tĩnh (không phụ thuộc TikzJax).
// =========================================================================
window.tracNghiem2D41 = [
  {
    "id": "2D411TN1",
    "question": "Hàm số $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên khoảng $K$ nếu",
    "options": [
      "$f'(x)=F(x)$, $\\forall x \\in K$",
      "$f'(x)=-F(x)$, $\\forall x \\in K$",
      "$F'(x)=f(x)$, $\\forall x \\in K$",
      "$F'(x)=-f(x)$, $\\forall x \\in K$"
    ],
    "answer": 2,
    "explain": "Hàm số $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên khoảng $K$ nếu $F'(x)=f(x)$, $\\forall x \\in K$."
  },
  {
    "id": "2D411TN2",
    "question": "Cho hai hàm số $f(x)$, $g(x)$ xác định và liên tục trên $\\mathbb{R}$, chọn khẳng định đúng trong các khẳng định sau.",
    "options": [
      "$\\displaystyle\\int \\left[ f(x)-g(x) \\right] \\mathrm{\\,d} x=f(x)-g(x)$",
      "$\\displaystyle\\int \\left[ f(x)+g(x) \\right] \\mathrm{\\,d} x=\\displaystyle\\int f(x) \\mathrm{\\,d} x+\\displaystyle\\int g(x) \\mathrm{\\,d} x$",
      "$\\displaystyle\\int f(x) \\cdot g(x) \\mathrm{\\,d} x=\\displaystyle\\int f(x) \\mathrm{\\,d} x \\cdot \\displaystyle\\int g(x) \\mathrm{\\,d} x$",
      "$\\displaystyle\\int \\dfrac{f(x)}{g(x)} \\mathrm{\\,d} x=\\dfrac{f(x)}{g(x)}$"
    ],
    "answer": 1,
    "explain": "Khẳng định đúng là $\\displaystyle\\int \\left[ f(x)+g(x) \\right] \\mathrm{\\,d} x=\\displaystyle\\int f(x) \\mathrm{\\,d} x+\\displaystyle\\int g(x) \\mathrm{\\,d} x$."
  },
  {
    "id": "2D411TN3",
    "question": "Khẳng định nào sau đây là &lt;strong&gt;sai&lt;/strong&gt;?",
    "options": [
      "$\\displaystyle\\int k\\ f(x) \\mathrm{\\,d} x =k\\int f(x) \\mathrm{\\,d} x$, $\\left(k\\in \\mathbb{R}\\setminus\\{0\\}\\right)$",
      "$\\displaystyle \\int[f(x).g(x)] {\\rm d} x =\\displaystyle\\int f(x) \\mathrm{\\,d} x .\\int g(x) \\mathrm{\\,d} x$",
      "$\\displaystyle \\int f'(x) \\mathrm{\\,d} x =f(x)+C$",
      "$\\displaystyle\\int[f(x)+g(x)] \\mathrm{\\,d} x =\\displaystyle \\int f(x) \\mathrm{\\,d} x +\\displaystyle\\int g(x) \\mathrm{\\,d} x$"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "2D411TN4",
    "question": "Cho hàm số $ f(x) $ có đạo hàm liên tục trên $ \\mathbb{R} $ và $ k $ là một số thực. Khẳng định nào sau đây là &lt;strong&gt;sai&lt;/strong&gt;?",
    "options": [
      "$ \\left [\\displaystyle \\int f(x) \\mathrm{\\,d}x\\right ]'=f(x) $",
      "$ \\displaystyle \\int \\left [f(x)\\right ]' \\mathrm{\\,d}x =f(x)+C $",
      "$ \\displaystyle \\int kf(x) \\mathrm{\\,d}x = k \\displaystyle \\int f(x) \\mathrm{\\,d}x $",
      "$ \\displaystyle \\int \\left [f(x)+k\\right ] \\mathrm{\\,d}x = \\displaystyle \\int f(x) \\mathrm{\\,d}x +\\displaystyle \\int k \\mathrm{\\,d}x$"
    ],
    "answer": 2,
    "explain": "Khẳng định sai là $ \\displaystyle \\int kf(x) \\mathrm{\\,d}x = k \\displaystyle \\int f(x) \\mathrm{\\,d}x $.  Vì với $ k=0 $ ta có $ \\displaystyle \\int kf(x) \\mathrm{\\,d}x = C \\text{ và } k \\displaystyle \\int f(x) \\mathrm{\\,d}x =0. $"
  },
  {
    "id": "2D411TN5",
    "question": "Mệnh đề nào sau đây &lt;strong&gt;sai&lt;/strong&gt;?",
    "options": [
      "$\\displaystyle\\int\\limits\\left[f_{1}(x)+f_{2}(x)\\right] \\mathrm{\\,d}x=\\displaystyle\\int\\limits f_{1}(x) \\mathrm{\\,d}x+\\displaystyle\\int\\limits f_{2}(x) \\mathrm{\\,d}x$",
      "Nếu $F(x)$ và $G(x)$ đều là nguyên hàm của hàm số $f(x)$ thì $F(x)=G(x)$",
      "$\\displaystyle\\int\\limits k f(x) \\mathrm{\\,d}x=k \\displaystyle\\int\\limits f(x) \\mathrm{\\,d}x$ ($k$ là hằng số và $k \\neq 0$)",
      "Nếu $\\displaystyle\\int\\limits f(x) \\mathrm{\\,d}x=F(x)+C$ thì $\\displaystyle\\int\\limits f(u) \\mathrm{\\,d}u=F(u)+C$"
    ],
    "answer": 1,
    "explain": "Nếu $F(x)$ và $G(x)$ đều là nguyên hàm của hàm số $f(x)$ thì $F(x)=G(x)$ là mệnh đề sai."
  },
  {
    "id": "2D411TN6",
    "question": "Kí hiệu $ K $ là một khoảng hoặc một nửa khoảng hoặc một đoạn của $ \\mathbb{R} $. Mệnh đề nào sau đây &lt;strong&gt;sai&lt;/strong&gt;?",
    "options": [
      "Nếu $ f(x) $ và $ g(x) $ bằng nhau trên $ K $ thì nguyên hàm của $ f(x) $ bằng nguyên hàm của $ g(x) $ trên $ K $",
      "Mọi hàm số $ f(x) $ liên tục trên $ K $ đều có nguyên hàm trên $ K $",
      "Nếu $ F(x) $ là một nguyên hàm của $ f(x) $ trên $ K $ thì $ F(x)+C $ ($ C $ là hằng số) cũng là một nguyên hàm của $ f(x) $ trên $ K $",
      "Nếu nguyên hàm của $ f(x) $ bằng nguyên hàm của $ g(x) $ trên $ K $ thì hai hàm số $f(x)$ và $ g(x) $ bằng nhau trên $ K $"
    ],
    "answer": 0,
    "explain": "Các nguyên hàm của cùng một hàm số khác nhau ở hằng số $ C $ nên mệnh đề \\lq\\lq Nếu $ f(x) $ và $ g(x) $ bằng nhau trên $ K $ thì nguyên hàm của $ f(x) $ bằng nguyên hàm của $ g(x) $ trên $ K $\\rq\\rq\\text{ } sai."
  },
  {
    "id": "2D411TN7",
    "question": "Nếu $\\displaystyle\\int\\limits f(x) \\mathrm{\\,d}x=F(x)+C$ thì",
    "options": [
      "$\\displaystyle\\int\\limits f(2 x+3) \\mathrm{\\,d}x=2 F(2 x+3)+C$",
      "$\\displaystyle\\int\\limits f(2 x+3) \\mathrm{\\,d}x=\\dfrac{1}{2} F(x)+C$",
      "$\\displaystyle\\int\\limits f(2 x+3) \\mathrm{\\,d}x=F(2 x+3)+C$",
      "$\\displaystyle\\int\\limits f(2 x+3) \\mathrm{\\,d}x=\\dfrac{1}{2} F(2 x+3)+C$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int\\limits f(2x+3) \\mathrm{\\,d}x=\\displaystyle\\int\\limits \\dfrac{1}{2}f(2x+3) \\mathrm{\\,d}(2x+3)=\\dfrac{1}{2} F(2 x+3)+C$."
  },
  {
    "id": "2D411TN8",
    "question": "Cho biết $F(x)$ là một nguyên hàm của hàm số $f(x)$. Tìm $I = \\displaystyle \\int [-f(x)+1]\\mathrm{\\,d}x$.",
    "options": [
      "$I = xF(x) + x+C$",
      "$I=-F(x)+1+C$",
      "$I=-xF(x) + 1 + C$",
      "$I = -F(x) + x + C$"
    ],
    "answer": 3,
    "explain": "Ta có $I = \\displaystyle \\int [-f(x)+1]\\mathrm{\\,d}x = -F(x) + x + C$."
  },
  {
    "id": "2D411TN9",
    "question": "Tính \\(\\displaystyle\\int\\left(x^2+\\dfrac{3}{x}-2\\sqrt{x}\\right)\\,\\mathrm{d}x\\), ta được kết quả là",
    "options": [
      "\\(\\dfrac{x^3}{3}-3\\ln |x|+\\dfrac{4}{3}\\sqrt{x^3}+C\\)",
      "\\(\\dfrac{x^3}{3}+3\\ln |x|-\\dfrac{4}{3}\\sqrt{x^3}+C\\)",
      "\\(\\dfrac{x^3}{3}-3\\ln |x|-\\dfrac{4}{3}\\sqrt{x^3}+C\\)",
      "\\(\\dfrac{x^3}{3}+3\\ln |x|+\\dfrac{4}{3}\\sqrt{x^3}+C\\)"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "2D411TN10",
    "question": "Nguyên hàm của hàm số $y=\\sqrt{2x+3}$ là",
    "options": [
      "$\\dfrac{2\\sqrt{\\left( 2x+3 \\right)^3}}{3}+C$",
      "$\\dfrac{1}{2\\sqrt{2x+3}}+C$",
      "$\\dfrac{1}{\\sqrt{2x+3}}+C$",
      "$\\dfrac{\\sqrt{\\left( 2x+3 \\right)^3}}{3}+C$"
    ],
    "answer": 3,
    "explain": ""
  },
  {
    "id": "2D411TN11",
    "question": "Trong các mệnh đề sau, mệnh đề nào &lt;strong&gt;sai&lt;/strong&gt;?",
    "options": [
      "$\\displaystyle\\int\\dfrac{1}{2x}\\mathrm{\\,d} x=\\dfrac{\\ln \\left| x \\right|}{2}+C$",
      "$\\displaystyle\\int \\textrm{e}^{2x}\\mathrm{\\,d} x=\\dfrac{1}{2}{\\textrm{e}^{2x}}+C$",
      "$\\displaystyle\\int3x^2\\mathrm{\\,d} x=x^3+C$",
      "$\\displaystyle\\int\\sin 2x\\mathrm{\\,d} x=2\\cos 2x+C$"
    ],
    "answer": 3,
    "explain": ""
  },
  {
    "id": "2D411TN12",
    "question": "Tìm nguyên hàm của hàm số $f(x)=x^{\\sqrt 2}.$",
    "options": [
      "$ \\dfrac{1}{\\sqrt 2 -1}x^{\\sqrt 2 -1}+C$",
      "$ \\dfrac{1}{\\sqrt 2 +1}x^{\\sqrt 2 +1}+C$",
      "$ x^{\\sqrt 2 -1}+C$",
      "$ x^{\\sqrt 2 +1}+C$"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "2D411TN13",
    "question": "Tìm nguyên hàm của hàm số $g(x)=\\dfrac{3}{4-5x}$.",
    "options": [
      "$\\displaystyle\\int\\limits g(x) \\textrm{d}x=-\\dfrac{3}{5}\\ln|4-5x|+C$",
      "$\\displaystyle\\int\\limits g(x) \\textrm{d}x=\\dfrac{3}{5}\\ln|4-5x|+C$",
      "$\\displaystyle\\int\\limits g(x) \\textrm{d}x=3.\\ln|4-5x|+C$",
      "$\\displaystyle\\int\\limits g(x) \\textrm{d}x=3.\\ln(4-5x)+C$"
    ],
    "answer": 0,
    "explain": ""
  },
  {
    "id": "2D411TN14",
    "question": "Tìm họ nguyên hàm của hàm số $f(x)=\\dfrac{1}{\\sqrt{2x}}.$",
    "options": [
      "$\\sqrt{2x}+C$",
      "$\\dfrac{1}{2}\\sqrt{2x}+C$",
      "$2\\sqrt{2x}+C$",
      "$\\dfrac{1}{2\\sqrt{2x}}+C$"
    ],
    "answer": 0,
    "explain": ""
  },
  {
    "id": "2D411TN15",
    "question": "Tìm nguyên hàm của hàm số $f(x)=3\\sqrt{x}-\\dfrac{1}{x^2}$.",
    "options": [
      "$\\displaystyle \\int f(x) \\, \\textrm{d}x = 2 \\sqrt{x^3}+\\dfrac{1}{x}+C$",
      "$\\displaystyle \\int f(x) \\, \\textrm{d}x = \\dfrac{3}{2} \\sqrt{x^3}-\\dfrac{1}{x}+C$",
      "$\\displaystyle \\int f(x) \\, \\textrm{d}x = 3 \\sqrt{x^3}+\\dfrac{1}{x}+C$",
      "$\\displaystyle \\int f(x) \\, \\textrm{d}x = 3 \\sqrt{x^3}-\\dfrac{1}{x}+C$"
    ],
    "answer": 0,
    "explain": ""
  },
  {
    "id": "2D411TN16",
    "question": "Khẳng định nào dưới đây đúng?",
    "options": [
      "$\\displaystyle\\int \\mathrm{e}^x \\mathrm{\\, d} x=\\mathrm{e}^{x+1}+C$",
      "$\\displaystyle\\int \\mathrm{e}^x \\mathrm{\\, d} x=x \\mathrm{e}^x+C$",
      "$\\displaystyle\\int \\mathrm{e}^x \\mathrm{\\, d} x=-\\mathrm{e}^{x+1}+C$",
      "$\\displaystyle\\int \\mathrm{e}^x \\mathrm{\\, d} x=\\mathrm{e}^x+C$"
    ],
    "answer": 3,
    "explain": "Vì $\\left(\\mathrm{e}^x\\right)'=\\mathrm{e}^x$ nên khẳng định đúng là $\\displaystyle\\int \\mathrm{e}^x \\mathrm{\\, d} x=\\mathrm{e}^x+C$."
  },
  {
    "id": "2D411TN17",
    "question": "$\\displaystyle\\int 2^x\\mathrm{\\,d}x$ bằng",
    "options": [
      "$2^{x+1}+C$",
      "$\\dfrac{2^{x+1}}{x+1}+C$",
      "$2^x\\ln 2+C$",
      "$\\dfrac{2^x}{\\ln 2}+C$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int 2^x\\mathrm{\\,d}x=\\dfrac{2^x}{\\ln 2}+C$."
  },
  {
    "id": "2D411TN18",
    "question": "Khẳng định nào sau đây &lt;strong&gt;sai&lt;/strong&gt;?",
    "options": [
      "$\\displaystyle\\int\\limits \\ln x \\mathrm{\\,d} x=\\dfrac1{x}+C$",
      "$\\displaystyle\\int\\limits \\mathrm{e}^x \\mathrm{\\,d} x=\\mathrm{e}^x+C$",
      "$\\displaystyle\\int\\limits x \\mathrm{\\,d} x=\\dfrac{x^2}{2}+C$",
      "$\\displaystyle\\int\\limits \\dfrac1{x} \\mathrm{\\,d} x=\\ln |x|+C$"
    ],
    "answer": 0,
    "explain": "Khẳng định &lt;strong&gt;sai&lt;/strong&gt; là $\\displaystyle\\int\\limits \\ln x \\mathrm{\\,d} x=\\dfrac1{x}+C$."
  },
  {
    "id": "2D413TN19",
    "question": "Tính $\\displaystyle\\int \\tan^2 x\\mathrm{\\,d}x$.",
    "options": [
      "$\\cos x+C$",
      "$\\tan x+C$",
      "$\\tan x-x+C$",
      "$\\sin x+C$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int \\tan^2 x\\mathrm{\\,d}x=\\displaystyle\\int\\left(\\tan^2x+1-1\\right)\\mathrm{\\,d}x=\\displaystyle\\int\\left(\\dfrac{1}{\\cos^2x}-1\\right)\\mathrm{\\,d}x=\\tan x-x+C$."
  },
  {
    "id": "2D411TN20",
    "question": "Cho hàm số $f(x)=\\mathrm{e}^{-x}$. Khẳng định nào dưới đây đúng ?",
    "options": [
      "$\\displaystyle\\int\\limits f(x) \\mathrm{~d}x=-\\mathrm{e}^{-x}+C$",
      "$\\displaystyle\\int\\limits f(x) \\mathrm{~d}x=\\mathrm{e}^{-x}+C$",
      "$\\displaystyle\\int\\limits f(x) \\mathrm{~d}x=-x \\mathrm{e}^{-x+1}+C$",
      "$\\displaystyle\\int\\limits f(x) \\mathrm{~d}x=\\mathrm{e}^{x}+C$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int\\limits f(x) \\mathrm{~d}x=\\displaystyle\\int\\limits \\mathrm{e}^{-x} \\mathrm{~d}x=-\\mathrm{e}^{-x}+C$."
  },
  {
    "id": "2D411TN21",
    "question": "Trên khoảng $(0;+\\infty)$, họ nguyên hàm của hàm số $f(x)=-\\sqrt[3]{x}$ là",
    "options": [
      "$\\displaystyle\\int\\limits f(x) \\mathrm{\\,d}x=-\\dfrac{1}{3}x^{-\\tfrac{2}{3}}+C$",
      "$\\displaystyle\\int\\limits f(x) \\mathrm{\\,d}x=\\dfrac{1}{3}x^{-\\tfrac{2}{3}}+C$",
      "$-\\displaystyle\\int\\limits f(x) \\mathrm{\\,d}x=-\\dfrac{3}{4}x^{\\tfrac{4}{3}}+C$",
      "$\\displaystyle\\int\\limits f(x) \\mathrm{\\,d}x=\\dfrac{3}{4}x^{\\tfrac{4}{3}}+C$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int\\limits-\\sqrt[3]{x}\\mathrm{\\,d}x=\\displaystyle\\int\\limits-x^{\\tfrac{1}{3}}\\mathrm{\\,d}x=-\\dfrac{3}{4}x^{\\tfrac{4}{3}}+C$."
  },
  {
    "id": "2D413TN22",
    "question": "Tìm nguyên hàm của hàm số $f(x) =\\sin (1 - 3x)$.",
    "options": [
      "$ -\\dfrac{1}{3}\\cos(1 - 3x) + C$",
      "$ -3\\cos(1 - 3x) + C$",
      "$3\\cos(1 - 3x) + C$",
      "$\\dfrac{1}{3}\\cos(1 - 3x) + C$"
    ],
    "answer": 3,
    "explain": ""
  },
  {
    "id": "2D413TN23",
    "question": "Họ nguyên hàm $F(x)$ của hàm số $f(x)=\\cot^{2}{x}$ là",
    "options": [
      "$\\cot{x}-x+C$",
      "$-\\cot{x}-x+C$",
      "$\\cot{x}+x+C$",
      "$\\tan{x}+x+C$"
    ],
    "answer": 1,
    "explain": "Ta có $F(x)=\\displaystyle\\int{f(x)}\\mathrm{\\,d}x=\\displaystyle\\int{\\cot^{2}{x}}\\mathrm{\\,d}x=\\displaystyle\\int{\\left(1+\\cot^{2}{x}-1\\right)}\\mathrm{\\,d}x<br>=\\displaystyle\\int{\\left(\\dfrac{1}{\\sin^{2}{x}}-1\\right)}\\mathrm{\\,d}x=-\\cot{x}-x+C$."
  },
  {
    "id": "2D413TN24",
    "question": "Tìm nguyên hàm của hàm số $f(x)=\\tan^2 2x+\\dfrac{1}{2}.$",
    "options": [
      "$\\displaystyle\\int\\left(\\tan^22x+\\dfrac{1}{2}\\right) \\mathrm{\\,d}x=2\\tan 2x-2x+C$",
      "$\\displaystyle\\int\\left(\\tan^22x+\\dfrac{1}{2}\\right) \\mathrm{\\,d}x=\\tan 2x-\\dfrac{x}{2}+C$",
      "$\\displaystyle\\int\\left(\\tan^22x+\\dfrac{1}{2}\\right) \\mathrm{\\,d}x=\\tan 2x-x+C$",
      "$\\displaystyle\\int\\left(\\tan^22x+\\dfrac{1}{2}\\right) \\mathrm{\\,d}x=\\dfrac{1}{2}\\tan 2x-\\dfrac{x}{2}+C$"
    ],
    "answer": 3,
    "explain": "Ta có   $\\displaystyle\\int\\left(\\tan^22x+\\dfrac{1}{2}\\right) \\mathrm{\\,d}x =\\displaystyle\\int\\left(\\dfrac{1}{\\cos^2 2x}-\\dfrac{1}{2}\\right) \\mathrm{\\,d}x$<br>$=\\dfrac{1}{2}\\tan 2x-\\dfrac{x}{2}+C.$"
  },
  {
    "id": "2D411TN25",
    "question": "Cho hàm số $f(x)=\\mathrm{e}^x \\left (2+\\dfrac{\\mathrm{e}^{-x}}{\\cos^2 x}\\right )$ xác định với mọi $x \\neq \\dfrac{\\pi}{2}+k\\pi, k\\in \\mathbb{R}$. Mệnh đề nào sau đây đúng?",
    "options": [
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=2\\mathrm{e}^x+\\tan x+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=2\\mathrm{e}^x-\\tan x+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=2\\mathrm{e}^x+\\dfrac{1}{\\cos x}+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=2\\mathrm{e}^x+\\dfrac{1}{\\cos x}+C$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\displaystyle\\int \\left (2\\mathrm{e}^x+\\dfrac{1}{\\cos^2 x}\\right )\\mathrm{\\,d}x=2\\mathrm{e}^x+\\tan x+C$."
  },
  {
    "id": "2D414TN26",
    "question": "Hàm số $F(x)=\\mathrm{e}^{x^2}$ là một nguyên hàm của hàm số nào dưới đây?",
    "options": [
      "$f(x)=\\mathrm{e}^{2x}$",
      "$f(x)=\\dfrac{\\mathrm{e}^{x^2}}{2x}$",
      "$f(x)=x^2\\mathrm{e}^{x^2}-1$",
      "$f(x)=2x\\mathrm{e}^{x^2}$"
    ],
    "answer": 3,
    "explain": "Ta có $F(x)=\\mathrm{e}^{x^2}$ là một nguyên hàm của hàm số $f(x)$.<br>  Suy ra $f(x)=F'(x) = (x^2)'\\cdot \\mathrm{e}^{x^2} = 2x\\mathrm{e}^{x^2}$."
  },
  {
    "id": "2D411TN27",
    "question": "Tìm tất cả các giá trị thực của tham số $ m $ để hàm số $ F(x)=x^3+2x^2+(m^2-1)x+C $ ($ C $ là hằng số) là nguyên hàm của hàm số $ f(x)=3x^2+4x+3 $ trên $ \\mathbb{R} $.",
    "options": [
      "$ m=2 $",
      "$ m=\\pm 4 $",
      "$ m=-2 $",
      "$ m=\\pm 2 $"
    ],
    "answer": 3,
    "explain": "Ta có $ F'(x)=3x^2+4x+m^2-1 $.<br>  Do $ F(x) $ là nguyên hàm của $ f(x) $ nên ta có $ F'(x)=f(x) \\Rightarrow m^2-1=3\\Leftrightarrow m=\\pm 2 $."
  },
  {
    "id": "2D411TN28",
    "question": "Cho $\\displaystyle\\int f(x) \\mathrm{d}x=-\\cos x+C$. Khẳng định nào dưới đây đúng?",
    "options": [
      "$f(x)=-\\sin x$",
      "$f(x)=\\cos x$",
      "$f(x)=\\sin x$",
      "$f(x)=-\\cos x$"
    ],
    "answer": 2,
    "explain": "Ta có $f(x)=(-\\cos x+C)'=\\sin x$."
  },
  {
    "id": "2D413TN29",
    "question": "Hàm số $F(x)=\\cot x$ là một nguyên hàm của hàm số nào dưới đây trên khoảng $\\left(0;\\dfrac{\\pi}{2}\\right)$?",
    "options": [
      "$f_2(x)=\\dfrac{1}{\\sin ^2x}$",
      "$f_1(x)=-\\dfrac{1}{\\cot^2x}$",
      "$f_4(x)=\\dfrac{1}{\\cos^2x}$",
      "$f_3(x)=-\\dfrac{1}{\\sin ^2x}$"
    ],
    "answer": 3,
    "explain": "Với $F(x)=\\cot x$, ta có $\\left[F(x)\\right]'=(\\cot x)'=-\\dfrac{1}{\\sin^2x}$ nên $F(x)=\\cot x$ là một nguyên hàm của hàm số $f_3(x)=-\\dfrac{1}{\\sin^2x}$."
  },
  {
    "id": "2D411TN30",
    "question": "Cho hàm số $f(x)$ liên tục trên $(1;+\\infty)$ có đạo hàm $f'(x) = \\dfrac{9}{\\sqrt{2x + 1} - \\sqrt{2x - 2}}$ và $f(3) = 7\\sqrt{7}$. Biết rằng $f(1) = a + b\\sqrt{c}$, với $a,b,c$ là các số tự nhiên nhỏ hơn 10. Tính $a^3+ b^3$.",
    "options": [
      "539",
      "-485",
      "485",
      "-539"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "2D411TN31",
    "question": "Tính $\\displaystyle\\int{F(x)}\\mathrm{\\,d}x$, biết   $F(x)$ là nguyên hàm của hàm số $f(x) = \\dfrac{1}{(x+2)\\sqrt{x} - x\\sqrt{x+2}}$ thỏa $F(1) = \\sqrt{3}$.",
    "options": [
      "$\\dfrac{2}{3}x\\sqrt{x} + \\dfrac{2}{3}(x+2)\\sqrt{x+2} + C$",
      "$\\dfrac{3}{2}x\\sqrt{x} + \\dfrac{3}{2}(x+2)\\sqrt{x+2} + C$",
      "$\\dfrac{2}{3}x\\sqrt{x} + \\dfrac{2}{3}(x+2)\\sqrt{x+2}-x + C$",
      "$\\dfrac{3}{2}x\\sqrt{x} + \\dfrac{3}{2}(x+2)\\sqrt{x+2} - x+ C$"
    ],
    "answer": 2,
    "explain": ""
  },
  {
    "id": "2D413TN32",
    "question": "Nguyên hàm của hàm số $f(x)=\\sin 21x$ là",
    "options": [
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=-\\dfrac{1}{21}\\cos 21 x+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=21\\cos 21 x+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\dfrac{1}{21}\\cos 21 x+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=-21\\cos 21 x+C$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int \\sin21x\\mathrm{\\,d}x=-\\dfrac{1}{21}\\cos 21 x+C$."
  },
  {
    "id": "2D411TN33",
    "question": "Tìm họ các nguyên hàm của hàm số $f(x)=\\dfrac{1}{3x+2}$.",
    "options": [
      "$ 3\\ln |3x+2| +C$",
      "$ x^3+2x +C$",
      "$ \\dfrac{1}{3}\\ln |3x+2| +C$",
      "$ \\ln |3x+2| +C$"
    ],
    "answer": 2,
    "explain": ""
  },
  {
    "id": "2D413TN34",
    "question": "Tìm nguyên hàm $F(x)$ của hàm số $f(x)=\\dfrac{1}{\\cos^22x}$.",
    "options": [
      "$F(x)=\\tan 2x+C$",
      "$F(x)=-\\dfrac{1}{2}\\tan 2x+C$",
      "$F(x)=-\\cot 2x+C$",
      "$F(x)=\\dfrac{1}{2}\\tan 2x+C$"
    ],
    "answer": 3,
    "explain": "$F(x)=\\displaystyle\\int \\dfrac{1}{\\cos^22x}\\mathrm{\\,d}x=\\dfrac{1}{2}\\displaystyle\\int \\dfrac{1}{\\cos^22x}\\mathrm{\\,d}(2x)=\\dfrac{1}{2}\\tan 2x+C$."
  },
  {
    "id": "2D411TN35",
    "question": "Cho hàm số $f(x)=\\mathrm{e}^x+2x$. Khẳng định nào dưới đây đúng?",
    "options": [
      "$\\displaystyle\\int f(x) \\mathrm{\\,d}x=\\mathrm{e}^x+x^2+C$",
      "$\\displaystyle\\int f(x) \\mathrm{\\,d}x=\\mathrm{e}^x+C$",
      "$\\displaystyle\\int f(x) \\mathrm{\\,d}x=\\mathrm{e}^x-x^2+C$",
      "$\\displaystyle\\int f(x) \\mathrm{\\,d}x=\\mathrm{e}^x+2x^2+C$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int f(x) \\mathrm{\\,d}x= \\int \\left(\\mathrm{e}^x+2x\\right) \\mathrm{\\,d}x = \\mathrm{e}^x+x^2+C$."
  },
  {
    "id": "2D413TN36",
    "question": "Cho hàm số $f(x)=1-\\dfrac{1}{\\cos ^2 2x}$. Khẳng định nào dưới đây đúng?",
    "options": [
      "$\\displaystyle\\int f(x) \\mathrm{\\,d}x=x+\\tan 2x+C$",
      "$\\displaystyle\\int f(x) \\mathrm{\\,d}x=x+\\dfrac{1}{2} \\cot 2x+C$",
      "$\\displaystyle\\int f(x) \\mathrm{\\,d}x=x-\\dfrac{1}{2} \\tan 2x+C$",
      "$\\displaystyle\\int f(x) \\mathrm{\\,d}x=x+\\dfrac{1}{2} \\tan 2x+C$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int f(x) \\mathrm{\\,d}x=\\int \\left(1-\\dfrac{1}{\\cos ^2 2x}\\right) \\mathrm{\\,d}x =x-\\dfrac{1}{2} \\tan 2x+C$."
  },
  {
    "id": "2D413TN37",
    "question": "Hàm số nào sau đây là một nguyên hàm của hàm số $ f(x)=4\\sin^2x $?",
    "options": [
      "$ 2x-\\cos2x $",
      "$ 2x+\\sin2x $",
      "$ 2x+\\cos2x $",
      "$ 2x-\\sin2x $"
    ],
    "answer": 3,
    "explain": "Ta có $ \\displaystyle\\int\\limits f(x) \\mathrm{\\,d}x = \\displaystyle\\int\\limits 2(1-\\cos2x) \\mathrm{\\,d}x =2\\left( x-\\dfrac{1}{2}\\sin2x \\right) + C = 2x-\\sin2x + C $."
  },
  {
    "id": "2D411TN38",
    "question": "Biết $\\displaystyle\\int \\dfrac{x^5-2x}{x^4}\\mathrm{\\,d}x=ax^2+b\\cdot\\dfrac{1}{x^2}+C$, với $a$, $b$ là các số hữu tỉ. Giá trị của $a+b$ bằng",
    "options": [
      "$-\\dfrac{1}{2}$",
      "$0$",
      "$2$",
      "$\\dfrac{3}{2}$"
    ],
    "answer": 3,
    "explain": "Ta có  \\[\\displaystyle\\int \\dfrac{x^5-2x}{x^4}\\mathrm{\\,d}x=\\displaystyle\\int \\left(x-2x^{-3}\\right)\\mathrm{\\,d}x=\\dfrac{1}{2}x^2+x^{-2}+C=\\dfrac{1}{2}x^2+\\dfrac{1}{x^2}+C.\\]  Do đó $a=\\dfrac{1}{2}$ và $b=1$. Suy ra $a+b=\\dfrac{3}{2}$."
  },
  {
    "id": "2D413TN39",
    "question": "Gọi $F(x)$ là nguyên hàm của hàm số $y=4\\cos^4x -3\\cos^2 x$. $F(x)$ là nguyên hàm của hàm số nào dưới đây?",
    "options": [
      "$F(x)=\\dfrac{\\cos 4x}{8}+\\dfrac{\\cos 2x}{4}+C$",
      "$F(x) =\\sin^3 x \\cos x +C$",
      "$F(x) =-\\sin x \\cos^3 x +C$",
      "$F(x)=\\dfrac{\\sin 4x}{8}+\\dfrac{\\sin 2x}{4}+C$"
    ],
    "answer": 3,
    "explain": "Ta có $4\\cos^4x -3\\cos^2 x = \\dfrac{\\cos 4x}{2} + 2\\cos 2x +\\dfrac{3}{2} - \\dfrac{3(\\cos 2x +1)}{2} = \\dfrac{\\cos 4x}{2} + \\dfrac{\\cos 2x}{2}$. <br> $\\displaystyle F(x) = \\int \\left ( \\dfrac{\\cos 4x}{2} + \\dfrac{\\cos 2x}{2}\\right ) ~ \\mathrm{d}x= \\dfrac{\\sin 4x}{8}+\\dfrac{\\sin 2x}{4}+C$."
  },
  {
    "id": "2D413TN40",
    "question": "Họ nguyên hàm $F(x)$ của hàm số $f(x)=\\cos^{2}{x}\\sin{x}$ là",
    "options": [
      "$\\dfrac{3}{4}\\cos{x}-\\dfrac{1}{12}\\cos{3x}+C$",
      "$-\\dfrac{3}{4}\\cos{x}-\\dfrac{1}{12}\\cos{3x}+C$",
      "$\\dfrac{3}{4}\\cos{x}+\\dfrac{1}{4}\\cos{3x}+C$",
      "$\\dfrac{3}{4}\\cos{x}-\\dfrac{1}{4}\\cos{3x}+C$"
    ],
    "answer": 0,
    "explain": "Ta có $F(x)=\\displaystyle\\int{f(x)}\\mathrm{\\,d}x=\\displaystyle\\int{\\cos^{2}{x}\\sin{x}}\\mathrm{\\,d}x=\\displaystyle\\int{\\left(\\dfrac{1}{2}+\\dfrac{\\cos{2x}}{2}\\right)\\sin{x}}\\mathrm{\\,d}x<br>=\\displaystyle\\int{\\dfrac{1}{2}\\sin{x}}\\mathrm{\\,d}x-\\dfrac{1}{4}\\displaystyle\\int{\\left(\\sin{3x}-\\sin{x}\\right)}\\mathrm{\\,d}x=\\dfrac{3}{4}\\displaystyle\\int{\\sin{x}}\\mathrm{\\,d}x-\\dfrac{1}{4}\\displaystyle\\int{\\sin{3x}\\mathrm{\\,d}x}<br>=\\dfrac{3}{4}\\cos{x}-\\dfrac{1}{12}\\cos{3x}+C.$"
  },
  {
    "id": "2D413TN41",
    "question": "Một nguyên hàm $\\displaystyle\\int \\cos x .\\cos 5x \\mathrm{\\, d} x$ là",
    "options": [
      "$\\dfrac{1}{5}\\sin x.\\sin 5x $",
      "$\\dfrac{1}{4}\\sin 4x +\\dfrac{1}{6}\\sin 6x +C$",
      "$\\dfrac{1}{8}\\sin 4x +\\dfrac{1}{12}\\sin 6x $",
      "$-\\dfrac{1}{8}\\sin 4x -\\dfrac{1}{12}\\sin 6x $"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int \\dfrac{1}{2}\\left(\\cos 4x +\\cos 6x \\right) \\mathrm{\\, d} x=\\dfrac{1}{8}\\sin 4x +\\dfrac{1}{12} \\sin 6x +C.$"
  },
  {
    "id": "2D413TN42",
    "question": "Biết $F(x)$ là một nguyên hàm của hàm số $f(x) =2x - 3\\cos x$ và $F\\left(\\dfrac{\\pi}{2}\\right) =\\dfrac{\\pi ^2}{4}$. Tính $F(\\pi)$. ",
    "options": [
      "$F(\\pi) =\\pi^2 - 3$",
      "$F(\\pi) =\\pi^2 + 3$",
      "$F(\\pi) =\\pi + 3$",
      "$F(\\pi) =\\pi - 3$"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "2D412TN43",
    "question": "Cho hàm số $y=f(x)$ có đạo hàm là $f'(x)=6x+6,\\forall x\\in\\mathbb{R}$ và $f(0)=0$. Biết $F(x)$ là nguyên hàm $f(x)$ thỏa mãn $F(1)=5$, khi đó $F(0)$ bằng",
    "options": [
      "$2$",
      "$7$",
      "$-3$",
      "$1$"
    ],
    "answer": 3,
    "explain": "Ta có   $f'(x)=6x+6,\\forall x\\in\\mathbb{R}\\Rightarrow f(x)=3x^2+6x+C$.<br>  $f(0)=0\\Rightarrow C=0\\Rightarrow f(x)=3x^2+6x\\Rightarrow F(x)=x^3+3x^2+D$.<br>  $F(1)=5\\Rightarrow D+4=5\\Rightarrow D=1\\Rightarrow F(x)=x^3+3x^2+1\\Rightarrow F(0)=1$.<br>  Vậy $F(0)=1$."
  },
  {
    "id": "2D413TN44",
    "question": "Biết $F(x)$ là một nguyên hàm của hàm số $f(x) = \\sin x$ và đồ thị hàm số $y = F(x)$ đi qua điểm $M\\left(\\dfrac{\\pi}{2};1\\right)$. Tính $F(\\pi)$.",
    "options": [
      "$F(\\pi) = 2$",
      "$F(\\pi) = 1$",
      "$F(\\pi) = 0$",
      "$F(\\pi) = -1$"
    ],
    "answer": 0,
    "explain": "Ta có $F(x) = \\displaystyle \\int f(x)\\mathrm{\\,d}x = \\displaystyle \\int \\sin x\\mathrm{\\,d}x = -\\cos x + C$.<br>  Do đồ thị hàm số $y=F(x)$ đi qua điểm $M\\left(\\dfrac{\\pi}{2};1\\right)$ nên $C=1$. Vậy $F(x) = -\\cos x + 1$.<br>  Do đó $F(\\pi) = -\\cos \\pi + 1 = 2$."
  },
  {
    "id": "2D414TN45",
    "question": "Cho hàm số $f(x)$ có đạo hàm $f'(x)=\\dfrac{1}{x}$, $\\forall x\\in \\mathbb{R}\\setminus\\{0\\}$ và $f(1)=2$, $f(-\\mathrm{e})=4$. Biết $F(x)$ là một nguyên hàm của $f(x)$ thỏa mãn $F\\left(\\mathrm{e}^2\\right) =2\\mathrm{e}$. Giá trị của $F\\left(\\mathrm{e}\\right)$ bằng",
    "options": [
      "$5\\mathrm{e}^2-4\\mathrm{e}$",
      "$4\\mathrm{e}-3\\mathrm{e}^2$",
      "$4\\mathrm{e}-5\\mathrm{e}^2$",
      "$3\\mathrm{e}-4\\mathrm{e}^2$"
    ],
    "answer": 1,
    "explain": "Ta có $f(x)=\\displaystyle\\int f'(x)\\mathrm{\\,d}x=\\displaystyle\\int \\dfrac{1}{x}\\mathrm{\\,d}x=\\ln|x|+C$.<br>  Suy ra $f(x)=\\ln x+C_1\\text{ với } x&gt;0 \\text{ và } \\ln\\left(-x\\right)+C_2\\text{ với } x&lt;0.$<br>  Với $f(1)=2\\Rightarrow \\ln 1+C_1=2\\Rightarrow C_1=2.$<br>  Với $f(-\\mathrm{e})=4\\Rightarrow \\ln\\mathrm{e}+C_2=4\\Rightarrow C_2=3$.<br>  Ta suy ra $f(x)=\\ln x+2\\text{ với } x&gt;0 \\text{ và } \\ln\\left(-x\\right)+3\\text{ với } x&lt;0.$  <br>Ta có   $F(x)=\\displaystyle\\int \\left(\\ln x+2\\right)\\mathrm{\\,d}x=x\\ln x-\\displaystyle\\int x\\cdot \\dfrac{1}{x}\\mathrm{\\,d}x+2x=x\\ln x+x+C$  Do $F\\left(\\mathrm{e}^2\\right)=2\\mathrm{e}\\Rightarrow 2\\mathrm{e}^2+\\mathrm{e}^2+C=2\\mathrm{e}\\Rightarrow C=2\\mathrm{e}-3\\mathrm{e}^2$.<br>  Suy ra $F(x)=x\\ln x+x+2\\mathrm{e}-3\\mathrm{e}^2\\Rightarrow F(\\mathrm{e})=4\\mathrm{e}-3\\mathrm{e}^2$."
  },
  {
    "id": "2D413TN46",
    "question": "Cho hàm số $f(x)$ thỏa mãn $f'(x)=3-5\\sin x$ và $f(0)=1$. Mệnh đề nào dưới đây &lt;strong&gt;đúng&lt;/strong&gt;?",
    "options": [
      "$f(x)=3x-5\\cos x+5$",
      "$f(x)=3x+5\\cos x+5$",
      "$f(x)=3x+5\\cos x-4$",
      "$f(x)=3x-5\\cos x+15$"
    ],
    "answer": 2,
    "explain": "Ta có $f(x)=\\displaystyle\\int f'(x)\\mathrm{\\,d}x=\\displaystyle\\int (3-5\\sin x)\\mathrm{\\,d}x=3x+5\\cos x+C$.<br>  Ta có $f(0)=1\\Leftrightarrow 3\\cdot 0+5\\cos 0+C=1\\Leftrightarrow C=-4$.<br>  Vậy $f(x)=3x+5\\cos x-4$."
  },
  {
    "id": "2D413TN47",
    "question": "Cho hàm số $y=f(x)$ có đạo hàm là $f'(x) = \\sin x-9 \\cos 3x, \\forall x \\in \\mathbb{R}$ và $f\\left( \\dfrac{\\pi}{2} \\right) =1$. Biết $F(x)$ là một nguyên hàm của $f(x)$ thỏa mãn $F(0)=2$, khi đó $F(\\pi)$ bằng",
    "options": [
      "$2 \\pi$",
      "$2+2 \\pi$",
      "$-2 \\pi$",
      "$2-2 \\pi$"
    ],
    "answer": 2,
    "explain": "Ta có $f(x) = \\displaystyle\\int\\limits f'(x) \\mathrm{\\,d}x= \\displaystyle\\int\\limits \\sin x-9 \\cos 3x \\mathrm{\\,d}x= -\\cos x -3 \\sin 3x + C$.<br>  $f \\left( \\dfrac{\\pi}{2} \\right) = 1 \\Rightarrow C=-2$.<br>  Khi đó $f(x) = -\\cos x -3 \\sin 3x -2$.<br>  $F(x) = \\displaystyle\\int\\limits f(x) \\mathrm{\\,d}x= \\displaystyle\\int\\limits -\\cos x -3 \\sin 3x -2 \\mathrm{\\,d}x= -\\sin x + \\cos 3x - 2x + C'$.<br>  $F(0)=2 \\Rightarrow C'=1$.<br>  Suy ra $F(x)= -\\sin x + \\cos 3x - 2x +1$. Vậy $F(\\pi) = -2 \\pi$."
  },
  {
    "id": "2D412TN48",
    "question": "Cho hàm số $f(x)$ có đạo hàm $f'(x)=\\dfrac{1}{1-x}$ và $f(2)=0.$ Tính $f(5).$ ",
    "options": [
      "$f(5)=2\\ln2$",
      "$f(5)=\\ln4 + 1$",
      "$f(5)=-2\\ln2+1 $",
      "$f(5)=-2\\ln2 $"
    ],
    "answer": 3,
    "explain": ""
  },
  {
    "id": "2D413TN49",
    "question": "Cho $F(x)$ là một nguyên hàm của hàm số $f(x)=\\cos(\\pi-x)$ và $F(\\pi)=0.$ Tính $F\\left(\\dfrac{\\pi}{2}\\right).$",
    "options": [
      "$F\\left(\\dfrac{\\pi}{2}\\right)=1$",
      "$F\\left(\\dfrac{\\pi}{2}\\right)=0$",
      "$F\\left(\\dfrac{\\pi}{2}\\right)=-2$",
      "$F\\left(\\dfrac{\\pi}{2}\\right)=-1$"
    ],
    "answer": 3,
    "explain": "Ta có $f(x)=\\cos(\\pi-x) =-\\cos x$.<br>  Xét hàm số $F(x)=-\\sin x+C$. Ta có $F'(x)=f(x)\\Rightarrow F(x)$ là một nguyên hàm của $f(x)$.<br>  Mặt khác : $F(\\pi)=0\\Leftrightarrow -\\sin\\left(\\pi\\right)+C=0\\Leftrightarrow C=0 \\Rightarrow F(x)=-\\sin x$.<br>  Vậy $F\\left(\\dfrac{\\pi}{2}\\right)= -\\sin\\left(\\dfrac{\\pi}{2}\\right)=-1.$"
  },
  {
    "id": "2D414TN50",
    "question": "Nguyên hàm $\\displaystyle \\int \\dfrac{1+\\ln x}{x} \\mathrm{\\,d}x$ $(x&gt;0)$ bằng",
    "options": [
      "$x+\\ln^2 x +C$",
      "$\\ln^2 x + \\ln x +C$",
      "$\\dfrac{1}{2} \\ln^2 x +\\ln x +C$",
      "$x+\\dfrac{1}{2} \\ln^2 x +C$"
    ],
    "answer": 2,
    "explain": "Đặt $u=1+\\ln x \\Rightarrow \\mathrm{\\,d}u = \\dfrac{1}{x} \\mathrm{\\,d}x$. Do đó<br>  $\\displaystyle \\int \\dfrac{1+\\ln x}{x} \\mathrm{\\,d}x = \\displaystyle \\int u \\mathrm{\\,d}u = \\dfrac{u^2}{2}+C=\\dfrac{(1+\\ln x)^2}{2}+C = \\dfrac{1}{2} \\ln^2 x +\\ln x +C.$"
  },
  {
    "id": "2D413TN51",
    "question": "Biết rằng $F(x)$ là một nguyên hàm của hàm số $ f(x) = - \\sin x (4 \\cos x + 1) $ thỏa mãn $F\\left ( \\dfrac{ \\pi }{2} \\right ) = - 1$. Tìm $F(x)$",
    "options": [
      "$ F(x) = \\cos 2x + \\cos x - 1 $",
      "$ F(x) = -2\\cos 2x + \\cos x - 3 $",
      "$ F(x) = \\cos 2x + \\cos x $",
      "$ F(x) = -\\cos 2x - \\cos x - 2 $"
    ],
    "answer": 2,
    "explain": "Ta có $ \\displaystyle \\int \\left [ - \\sin x (4 \\cos x + 1) \\right ] \\mathrm{\\, d} x = - \\int \\left ( 2 \\sin 2x + \\sin x \\right ) \\mathrm{\\, d} x = \\cos 2x + \\cos x + C $.<br>  Ta có $ F \\left ( \\dfrac{\\pi}{2} \\right ) = \\cos \\pi + \\cos \\dfrac{\\pi}{2} + C = - 1 \\Leftrightarrow C = 0 $.<br>[3pt]  Vậy $ F \\left ( x \\right ) = \\cos 2x + \\cos x $."
  },
  {
    "id": "2D415TN52",
    "question": "Tìm nguyên hàm của hàm số $f(x) = x(x+1)^{20}$.",
    "options": [
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=22(x+1)^{22} - 22(x+1)^{22}+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\dfrac{(x+1)^{22}}{22} - \\dfrac{(x+1)^{21}}{21}+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=22(x+1)^{22}+22(x+1)^{22}+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\dfrac{(x+1)^{22}}{22}+\\dfrac{(x+1)^{22}}{22}+C$"
    ],
    "answer": 1,
    "explain": "Họ nguyên hàm của hàm số $f(x)$ là  $I =\\displaystyle\\int x(x+1)^{20}\\mathrm{\\,d}x=\\displaystyle\\int (x+1-1)(x+1)^{20}\\mathrm{\\,d}(x+1)$<br>$=\\displaystyle\\int\\left((x+1)^{21}-(x+1)^{20}\\right)\\mathrm{\\,d}(x+1)=\\dfrac{(x+1)^{22}}{22}-\\dfrac{(x+1)^{21}}{21}+C.$"
  },
  {
    "id": "2D413TN53",
    "question": "Tìm nguyên hàm $ F(x) $ của hàm số $f(x) = \\tan x$ trên khoảng $\\left(-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right)$ và $F(0) = 1$. Giá trị $F\\left(\\dfrac{\\pi}{3}\\right)$ bằng",
    "options": [
      "$2-\\ln2$",
      "$-1+\\ln2$",
      "$1+\\ln2$",
      "$1-\\ln2$"
    ],
    "answer": 2,
    "explain": "Ta có $F(x) =\\displaystyle \\int \\tan x \\mathrm{\\,d}x = -\\displaystyle \\int \\dfrac{\\mathrm{  \\,d}(\\cos x)}{\\cos x} = - \\ln |\\cos x| + C$.<br>  Vì $F(0) = 1 \\Leftrightarrow - \\ln |\\cos 0| + C =1 \\Leftrightarrow C = 1$. Nên $F(x) = - \\ln |\\cos x| + 1.$<br>  Ta có $F\\left( \\dfrac{\\pi}{3}\\right) = - \\ln \\left|\\cos \\dfrac{\\pi}{3}\\right| + 1 = - \\ln \\dfrac{1}{2} +1 = 1 + \\ln2$."
  },
  {
    "id": "2D415TN54",
    "question": "Họ nguyên hàm của hàm số $f(x)=x^2\\sqrt{4+x^3}$ là",
    "options": [
      "$2\\sqrt{x^3+4}+C$",
      "$\\dfrac{2}{9}\\sqrt{\\left(4+x^3\\right)^3}+C$",
      "$2\\sqrt{\\left(4+x^3\\right)^3}+C$",
      "$\\dfrac{1}{9}\\sqrt{\\left(4+x^3\\right)^3}+C$"
    ],
    "answer": 1,
    "explain": "Ta có $\\displaystyle\\int f(x) \\mathrm{\\,d}x=\\displaystyle\\int \\dfrac{1}{3}\\sqrt{4+x^3} \\mathrm{\\,d}(4+x^3)=\\dfrac{1}{3}\\cdot \\dfrac{2}{3}\\sqrt{\\left(4+x^3\\right)^3}+C=\\dfrac{2}{9}\\sqrt{\\left(4+x^3\\right)^3}+C$."
  },
  {
    "id": "2D413TN55",
    "question": "Tìm nguyên hàm $F(x)$ của hàm số  $f(x)=\\cos x\\sqrt{\\sin x+1}$.",
    "options": [
      "$F(x)=\\dfrac{1}{3}(\\sin x+1)\\sqrt{\\sin x+1}+C$",
      "$F(x)=\\dfrac{1-2\\sin x-3\\sin^2 x}{2\\sqrt{\\sin x+1}}$",
      "$F(x)=\\dfrac{2}{3}(\\sin x+1)\\sqrt{\\sin x+1}+C$",
      "$F(x)=\\dfrac{1}{3}\\sin x\\sqrt{\\sin x+1}+C$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int\\cos x\\sqrt{\\sin x+1}\\mathrm{\\,d}x=\\displaystyle\\int\\sqrt{\\sin x+1}\\mathrm{\\,d}(\\sin x+1)=\\dfrac{2}{3}(\\sin x+1)\\sqrt{\\sin x+1}+C$."
  },
  {
    "id": "2D413TN56",
    "question": "Nguyên hàm $F(x)$ của hàm số $f(x)=\\sin^22x\\cdot\\cos^32x$ thỏa $F\\left(\\dfrac{\\pi}{4}\\right)=0$ là",
    "options": [
      "$F(x)=\\dfrac{1}{6}\\sin^32x-\\dfrac{1}{10}\\sin^52x+\\dfrac{1}{15}$",
      "$F(x)=\\dfrac{1}{6}\\sin^32x+\\dfrac{1}{10}\\sin^52x-\\dfrac{1}{15}$",
      "$F(x)=\\dfrac{1}{6}\\sin^32x-\\dfrac{1}{10}\\sin^52x-\\dfrac{1}{15}$",
      "$F(x)=\\dfrac{1}{6}\\sin^32x+\\dfrac{1}{10}\\sin^52x-\\dfrac{4}{15}$"
    ],
    "answer": 2,
    "explain": "Đặt $t=\\sin 2x\\Rightarrow\\mathrm{\\,d}t=2\\cos 2x\\mathrm{\\,d}x\\Rightarrow \\dfrac{1}{2}\\mathrm{\\,d}t=\\cos 2x\\mathrm{\\,d}x$.<br>  Ta có  $F(x)=\\displaystyle\\int \\limits \\sin^22x\\cdot\\cos^32x\\mathrm{\\,d}x=\\dfrac{1}{2}\\cdot\\displaystyle\\int\\limits t^2\\cdot\\left(1-t^2\\right)\\mathrm{\\,d}t=\\dfrac{1}{2}\\cdot\\displaystyle\\int\\limits \\left(t^2-t^4\\right)\\mathrm{\\,d}t$<br>  $=\\dfrac{1}{6}t^3-\\dfrac{1}{10}t^5+C=\\dfrac{1}{6}\\sin^32x-\\dfrac{1}{10}\\sin^52x+C$.<br>  Mà từ giả thiết ta được $F\\left(\\dfrac{\\pi}{4}\\right)=0\\Leftrightarrow \\dfrac{1}{6}\\sin^3\\dfrac{\\pi}{2}-\\dfrac{1}{10}\\sin^5\\dfrac{\\pi}{2}+C=0\\Leftrightarrow C=-\\dfrac{1}{15}$.<br>  Vậy $F(x)=\\dfrac{1}{6}\\sin^32x-\\dfrac{1}{10}\\sin^52x-\\dfrac{1}{15}$."
  },
  {
    "id": "2D415TN57",
    "question": "Xét nguyên hàm $I=\\displaystyle \\int x^3{\\left(4x^4-3\\right)}^5 \\, \\mathrm{\\, d}x$. Bằng cách đặt $u=4x^4-3,$ khẳng định nào dưới đây đúng?",
    "options": [
      "$I=\\displaystyle\\dfrac{1}{4}\\int u^5 \\mathrm{\\, d} u$",
      "$I=\\displaystyle\\dfrac{1}{12}\\int u^5 \\mathrm{\\, d} u$",
      "$I=\\displaystyle\\dfrac{1}{16}\\int u^5 \\mathrm{\\, d} u$",
      "$I=\\displaystyle\\int u^5 \\mathrm{\\, d} u$"
    ],
    "answer": 2,
    "explain": ""
  },
  {
    "id": "2D415TN58",
    "question": "Nguyên hàm \\ $\\displaystyle \\int \\dfrac{{(x-2)}^{10}}{{(x+1)}^{12}} \\mathrm{\\,d} x $ bằng",
    "options": [
      "$-\\dfrac{1}{11}{\\left(\\dfrac{x-2}{x+1}\\right)}^{11} +C$",
      "$\\dfrac{1}{3}{\\left(\\dfrac{x-2}{x+1}\\right)}^{11} +C$",
      "$\\dfrac{1}{11}{\\left(\\dfrac{x-2}{x+1}\\right)}^{11} +C$",
      "$\\dfrac{1}{33}{\\left(\\dfrac{x-2}{x+1}\\right)}^{11} +C$"
    ],
    "answer": 3,
    "explain": ""
  },
  {
    "id": "2D415TN59",
    "question": "Cho hàm số $f(x)=\\dfrac{2x}{x^2+1}$. Giả sử $F(x)$ là một nguyên hàm của $f(x)$ thỏa mãn $F(0)=2$. Giá trị của $F(3)$ bằng",
    "options": [
      "$\\ln 10-2$",
      "$\\ln 10$",
      "$\\ln 10+2$",
      "$\\dfrac{1}{2}\\ln 10+1$"
    ],
    "answer": 2,
    "explain": "Ta có $\\displaystyle\\int\\limits\\dfrac{2x}{x^2+1}\\mathrm{\\,d}x=\\displaystyle\\int\\limits\\dfrac{1}{x^2+1}\\mathrm{\\,d}(x^2+1)$.<br>  Suy ra $F(x)=\\ln(x^2+1)+C$.<br>  Ta có $F(0)=2\\Leftrightarrow \\ln 1=C\\Leftrightarrow C=0$.<br>  Suy ra $F(x)=\\ln(x^2+1)+2$.<br>  Vậy $F(3)=\\ln(3^2+1)+2=\\ln 10+2$."
  },
  {
    "id": "2D414TN60",
    "question": "Họ các nguyên hàm $\\displaystyle\\int\\limits x\\mathrm{e}^{x^2 + 1} \\mathrm{\\,d}x$ là",
    "options": [
      "$x\\cdot \\mathrm{e}^{x^2 + 1} + C$",
      "$\\mathrm{e}^{x^2 + 1} + C$",
      "$\\dfrac{\\mathrm{e}^{x^2 + 1}}{2} + C$",
      "$\\dfrac{x\\mathrm{e}^{x^2 + 1}}{2} + C$"
    ],
    "answer": 2,
    "explain": "Đặt $u = x^2 + 1 \\Rightarrow \\dfrac{1}{2}\\mathrm{d} u = x\\mathrm{\\,d}x$.<br>  Do đó $\\displaystyle\\int\\limits x\\mathrm{e}^{x^2 + 1} \\mathrm{\\,d}x = \\dfrac{1}{2}\\int\\limits \\mathrm{e}^{u} \\mathrm{\\,d}x = \\dfrac{1}{2}\\mathrm{e}^{u} + C = \\dfrac{1}{2}\\mathrm{e}^{x^2 + 1} + C = \\dfrac{\\mathrm{e}^{x^2 + 1}}{2} + C$."
  },
  {
    "id": "2D415TN61",
    "question": "Biết rằng $F(x)$ là một nguyên hàm của hàm số $f(x) = x(x^2 + 1)^{2022}$ thỏa mãn $F(0) = \\dfrac{1}{4046}$. Giá trị của $F(1)$ bằng",
    "options": [
      "$2^{2023}$",
      "$\\dfrac{2^{2023}}{2023}$",
      "$2^{2022}$",
      "$\\dfrac{2^{2022}}{2023}$"
    ],
    "answer": 3,
    "explain": "Đặt $u = x^2 + 1 \\Rightarrow \\dfrac{1}{2}\\mathrm{d} u = x\\mathrm{\\,d}x$.<br>  Do đó $\\displaystyle\\int\\limits x(x^2 + 1)^{2022} \\mathrm{\\,d}x = \\dfrac{1}{2}\\int\\limits u^{2022} \\mathrm{\\,d}u = \\dfrac{1}{2}\\cdot \\dfrac{u^{2023}}{2023} + C = \\dfrac{(x^2+1)^{2023}}{4046} + C$.<br>  Suy ra $F(x) = \\dfrac{(x^2+1)^{2023}}{4046} + C$.<br>  Vì $F(0) = \\dfrac{1}{4046} \\Leftrightarrow \\dfrac{1}{4046} + C = \\dfrac{1}{4046} \\Rightarrow C = 0$.<br>  Ta có $F(x) = \\dfrac{(x^2+1)^{2023}}{4046}$.<br>  Vậy $F(1) = \\dfrac{(1+1)^{2023}}{4046} = \\dfrac{2^{2023}}{4046} = \\dfrac{2^{2022}}{2023}$."
  },
  {
    "id": "2D415TN62",
    "question": "Họ nguyên hàm của hàm số $f(x)=4 x^{2}\\sqrt{x^{3}+1}$ là",
    "options": [
      "$F(x)=\\dfrac{8\\left(\\sqrt{x^{3}+1}\\right)^{3}}{9}+C$",
      "$F(x)=\\dfrac{4\\left(\\sqrt{x^{3}+1}\\right)^{3}}{3}+C$",
      "$F(x)=\\dfrac{8\\left(x^{3}+1\\right)^{3}}{9}+C$",
      "$F(x)=\\dfrac{2\\left(\\sqrt{x^{3}+1}\\right)^{3}}{9}+C$"
    ],
    "answer": 0,
    "explain": "Ta có $F(x)=\\displaystyle\\int 4x^2\\sqrt{x^3+1}\\mathrm{\\,d}x$.<br>  Đặt $t=\\sqrt{x^3+1}\\Rightarrow t^2=x^3+1\\Rightarrow x^3=t^2-1\\Rightarrow x^2\\mathrm{\\,d}x=\\dfrac{2}{3}t\\mathrm{\\,d}t$.<br>  Suy ra $\\displaystyle\\int 4x^2\\sqrt{x^3+1}\\mathrm{\\,d}x=4\\displaystyle\\int \\dfrac{2}{3}t^2 \\mathrm{\\,d}t=\\dfrac{8}{9}t^3+C$.<br>  Thay $t=\\sqrt{x^3+1}$, ta được $F(x)=\\dfrac{8\\left(\\sqrt{x^{3}+1}\\right)^{3}}{9}+C$."
  },
  {
    "id": "2D415TN63",
    "question": "Biến đổi nguyên hàm $\\displaystyle\\int{\\dfrac{1}{\\sqrt{x}+2}}\\mathrm{\\, d} x$ bằng cách đặt $t=\\sqrt{x}+2$ ta được nguyên hàm $\\displaystyle\\int{f\\left( t \\right)\\text{dt}}$. Khi đó $f\\left( t \\right)$ là",
    "options": [
      "$f\\left( t \\right)=2+\\dfrac{4}{t}$",
      "$f\\left( t \\right)=2-\\dfrac{4}{t}$",
      "$f\\left( t \\right)=1-\\dfrac{2}{t}$",
      "$f\\left( t \\right)=2-\\dfrac{4}{t+2}$"
    ],
    "answer": 1,
    "explain": "Ta có $t=\\sqrt{x}+2\\Rightarrow \\sqrt{x}=t-2\\Rightarrow x=t^2-4t+4\\Rightarrow \\mathrm{\\, d} x=\\left( 2t-4 \\right)\\mathrm{\\, d} t$.<br>  Ta được $I=\\displaystyle\\int{\\dfrac{2t-4}{t}}\\mathrm{\\, d} t=\\displaystyle\\int{\\left( 2-\\dfrac{4}{t} \\right)}\\mathrm{\\, d} t$.<br>  Do đó $f\\left( t \\right)=2-\\dfrac{4}{t}$."
  },
  {
    "id": "2D415TN64",
    "question": "Họ nguyên hàm của $I=\\displaystyle \\int x\\sqrt[3]{x^2+1}\\mathrm{\\,d}x$ bằng",
    "options": [
      "$\\dfrac{3}{8}\\sqrt[3]{(x^2+1)} + C$",
      "$\\dfrac{3}{8}\\sqrt[3]{(x^2+1)^4} + C$",
      "$\\dfrac{1}{8}\\sqrt[3]{(x^2+1)^4} + C$",
      "$\\dfrac{1}{8}\\sqrt[3]{(x^2+1)} + C$"
    ],
    "answer": 1,
    "explain": "Đặt $t = \\sqrt[3]{x^2+1} \\Rightarrow t^3 = x^2+1 \\Rightarrow 3t^2\\mathrm{d}t=2x\\mathrm{d}x$.<br>  Khi đó $I=\\displaystyle \\int \\dfrac{3}{2}t^2\\cdot t\\mathrm{\\,d}t = \\int \\dfrac{3}{2}t^3\\mathrm{\\,d}t = \\dfrac{3}{8}t^4 + C = \\dfrac{3}{8}\\sqrt[3]{(x^2+1)^4} + C$."
  },
  {
    "id": "2D415TN65",
    "question": "Họ nguyên hàm của hàm số $f(x)=\\dfrac{x^2}{\\sqrt{x^3+1}}$ là",
    "options": [
      "$\\dfrac{1}{3}\\sqrt{x^3+1}+C$",
      "$\\dfrac{1}{3\\sqrt{x^3+1}}+C$",
      "$\\dfrac{2}{3}\\sqrt{x^3+1}+C$",
      "$\\dfrac{2}{3\\sqrt{x^3+1}}+C$"
    ],
    "answer": 2,
    "explain": "Họ nguyên hàm của hàm số $f(x)=\\dfrac{x^2}{\\sqrt{x^3+1}}$ là $F(x)=\\displaystyle\\int\\dfrac{x^2}{\\sqrt{x^3+1}}\\mathrm{\\,d}x$.<br>  Đặt $t=\\sqrt{x^3+1}$, suy ra $t^2=x^3+1$. Khi đó $2t\\mathrm{\\,d}t = 3x^2\\mathrm{\\,d}x$ hay $x^2\\mathrm{\\,d}x = \\dfrac{2}{3}t\\mathrm{\\,d}t$.<br>  Do đó $\\displaystyle\\int\\dfrac{x^2}{\\sqrt{x^3+1}}\\mathrm{\\,d}x$ trở thành  \\[\\dfrac{2}{3}\\displaystyle\\int\\dfrac{t\\mathrm{\\,d}t}{t} = \\dfrac{2}{3}\\displaystyle\\int\\mathrm{\\,d}t = \\dfrac{2}{3}t + C.\\]  Vậy $F(x)=\\dfrac{2}{3}\\sqrt{x^3+1}+C$."
  },
  {
    "id": "2D413TN66",
    "question": "Biết $F(x)$ là một nguyên hàm của hàm số  $f(x)=\\dfrac{\\sin x}{1+3\\cos x}$ và $F\\left (\\dfrac{\\pi}{2}\\right )=2$. Tính $F(0)$. ",
    "options": [
      "$-\\dfrac{1}{3}\\ln 2 +2$",
      "$-\\dfrac{2}{3}\\ln 2 +2$",
      "$-\\dfrac{2}{3}\\ln 2 -2$",
      "$-\\dfrac{1}{3}\\ln 2 -2$"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "2D414TN67",
    "question": "Cho hàm số $y=f(x)$ có đạo hàm  ${f}'(x)=\\dfrac{x + (x + 1)\\ln x}{x\\left(1 + \\ln x\\right)}$. Biết $f\\left(1\\right)= - 1$, tính $f(\\mathrm{e})$. ",
    "options": [
      "$\\mathrm{e}-1-\\ln 2$",
      "$\\mathrm{e}-2 - \\ln 2$",
      "$\\mathrm{e}+\\ln 2$",
      "$4e\\mathrm{e} - \\ln 2$"
    ],
    "answer": 0,
    "explain": "Ta có $f(x)=\\displaystyle\\int{\\dfrac{x + (x + 1)\\ln x}{x\\left(1 + \\ln x\\right)}\\mathrm{\\,d}x}=\\displaystyle\\int{\\mathrm{\\,d}x} + \\displaystyle\\int{\\dfrac{\\ln x}{x\\left(1 + \\ln x\\right)}\\mathrm{\\,d}x}=x + \\displaystyle\\int{\\dfrac{\\ln x}{x\\left(1 + \\ln x\\right)}\\mathrm{\\,d}x}$ (*).  <br>- Tính $\\displaystyle\\int{\\dfrac{\\ln x}{x\\left(1 + \\ln x\\right)}\\mathrm{\\,d}x}$<br>  Đặt $t=1 + \\ln x\\Rightarrow \\mathrm{\\,d}t=\\dfrac{\\mathrm{\\,d}x}{x}$. Khi đó:<br>  $\\displaystyle\\int{\\dfrac{\\ln x}{x\\left(1 + \\ln x\\right)}\\mathrm{\\,d}x}=\\displaystyle\\int{\\dfrac{t - 1}{t}\\mathrm{\\,d}t}=\\displaystyle\\int{\\mathrm{\\,d}t} - \\displaystyle\\int{\\dfrac{\\mathrm{\\,d}t}{t}=t - \\ln |t|=1 + \\ln x - \\ln \\left|1 + \\ln x\\right|} + C$.<br>- Thay vào (*), suy ra $f(x)=x+1 + \\ln x - \\ln \\left|1 + \\ln x\\right|+ C$. <br>  Theo đề ta có: $f\\left(1\\right)= - 1\\Leftrightarrow 2 + C= - 1\\Leftrightarrow C= - 3$. Vậy, $f(x)=x+1 + \\ln x - \\ln \\left|1 + \\ln x\\right|-3$.<br>- Suy ra: $f(\\mathrm{e})= \\mathrm{e}-1- \\ln 2$."
  },
  {
    "id": "2D412TN68",
    "question": "Cho hai hàm số $u=u(x)$, $v=v(x)$ có đạo hàm liên tục. Khi đó, $\\displaystyle \\int u\\mathrm{\\, d} v$ bằng",
    "options": [
      "$uv+\\displaystyle \\int{v\\mathrm{\\, d} u}$",
      "$-uv+\\displaystyle \\int{v\\mathrm{\\, d} u}$",
      "$uv-\\displaystyle \\int v\\mathrm{\\, d} u$",
      "$-uv-\\displaystyle \\int{v\\mathrm{\\, d} u}$"
    ],
    "answer": 2,
    "explain": "Ta có công thức nguyên hàm từng phần $\\displaystyle \\int u\\mathrm{\\, d} v=uv-\\displaystyle \\int v\\mathrm{\\, d} u$."
  },
  {
    "id": "2D414TN69",
    "question": "Cho hàm số $f(x)=x\\mathrm{e}^x$. Tính $\\displaystyle\\int f(x)\\mathrm{\\,d}x$.",
    "options": [
      "$\\mathrm{e}^x(x-1)+C$",
      "$\\mathrm{e}^x+C$",
      "$\\mathrm{e}^x(x+1)+C$",
      "$x{\\mathrm{e}^x}+C$"
    ],
    "answer": 0,
    "explain": "Đặt $u=x \\text{ và } \\mathrm{\\,d}v=\\mathrm{e}^x\\mathrm{\\,d}x\\Rightarrow \\mathrm{\\,d}u=\\mathrm{\\,d}x \\text{ và } v=\\mathrm{e}^x.$<br>  Vậy $\\displaystyle\\int f(x)\\mathrm{\\,d}x=x\\mathrm{e}^x-\\displaystyle\\int \\mathrm{e}^x \\mathrm{\\,d}x=x\\mathrm{e}^x-\\mathrm{e}^x+C$."
  },
  {
    "id": "2D413TN70",
    "question": "Họ nguyên hàm $F(x)$ của hàm số $f(x)=(x+1) \\cos x$ là",
    "options": [
      "$F(x)=-(x+1) \\sin x+\\cos x+C$",
      "$F(x)=(x+1) \\sin x-\\cos x+C$",
      "$F(x)=-(x+1) \\sin x-\\cos x+C$",
      "$F(x)=(x+1) \\sin x+\\cos x+C$"
    ],
    "answer": 3,
    "explain": "Ta có   {  $F(x) = \\displaystyle\\int(x+1)\\cos x \\mathrm{\\,d}x=\\displaystyle\\int(x+1) \\mathrm{\\,d}\\left(\\sin x\\right)$<br>$= (x+1)\\sin x- \\displaystyle\\int \\sin x \\mathrm{\\,d}x=  (x+1)\\sin x+\\cos x+C.$}"
  },
  {
    "id": "2D414TN71",
    "question": "Biết $F(x)$ là một nguyên hàm của hàm số ${f(x) = 2x\\ln x}$ và $F(1) = 0$. Tính $F(\\mathrm{e})$.",
    "options": [
      "$F(\\mathrm{e}) = \\dfrac{\\mathrm{e}^2+1}{2}$",
      "$F(\\mathrm{e}) = \\dfrac{3\\mathrm{e}^2-1}{2}$",
      "$F(\\mathrm{e}) = 1$",
      "$F(\\mathrm{e}) = 3\\mathrm{e}^2-1$"
    ],
    "answer": 0,
    "explain": "Đặt $u=\\ln x \\text{ và } \\mathrm{\\,d}v=2x\\mathrm{\\,d}x   \\Rightarrow \\mathrm{\\,d}u=\\dfrac{1}{x}\\mathrm{\\,d}x \\text{ và } v=x^2.<br>  \\Rightarrow \\displaystyle\\int\\limits_{1}^{\\mathrm{e}} 2x\\ln x \\mathrm{\\,d}x= x^2 \\ln x \\Big|_1^{\\mathrm{e}}-\\displaystyle\\int\\limits_{1}^{\\mathrm{e}} x \\mathrm{\\,d}x=\\mathrm{e}^2-\\dfrac{x^2}{2} \\Big|_1^{\\mathrm{e}}=\\mathrm{e}^2-\\left(\\dfrac{\\mathrm{e}^2}{2}-\\dfrac{1}{2}\\right)=\\dfrac{\\mathrm{e}^2}{2}+\\dfrac{1}{2}.$<br>  Ta có $\\displaystyle\\int\\limits_{1}^{\\mathrm{e}} 2x\\ln x \\mathrm{\\,d}x=F(\\mathrm{e}) - F(1) \\Rightarrow F(\\mathrm{e})=\\displaystyle\\int\\limits_{1}^{\\mathrm{e}} 2x\\ln x \\mathrm{\\,d}x+ F(1)=\\dfrac{\\mathrm{e}^2}{2}+\\dfrac{1}{2}.$"
  },
  {
    "id": "2D414TN72",
    "question": "Tìm nguyên hàm của hàm số $f\\left(x\\right) = \\sqrt{x}\\ln x$.",
    "options": [
      "$\\displaystyle\\int f\\left(x\\right)\\, \\mathrm{d} x = \\dfrac{1}{9}x^{\\tfrac{3}{2}}\\left(3\\ln x - 2\\right) + C$",
      "$\\displaystyle\\int f\\left(x\\right)\\, \\mathrm{d} x = \\dfrac{2}{3}x^{\\tfrac{3}{2}}\\left(3\\ln x - 2\\right) + C$",
      "$\\displaystyle\\int f\\left(x\\right)\\, \\mathrm{d} x = \\dfrac{2}{9}x^{\\tfrac{3}{2}}\\left(3\\ln x - 1\\right) + C$",
      "$\\displaystyle\\int f\\left(x\\right)\\, \\mathrm{d} x = \\dfrac{2}{9}x^{\\tfrac{3}{2}}\\left(3\\ln x - 2\\right) + C$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int f\\left(x\\right)\\, \\mathrm{d} x = \\displaystyle\\int \\sqrt{x}\\ln x\\, \\mathrm{d} x$.<br>  Theo công thức tích phân từng phần   $\\displaystyle\\int \\sqrt{x}\\ln x\\, \\mathrm{d} x = \\dfrac{2}{3}x^{\\tfrac{3}{2}}\\cdot\\ln x - \\displaystyle\\int \\dfrac{2}{3}x^{\\tfrac{3}{2}}\\cdot\\dfrac{1}{x}\\, \\mathrm{d} x$<br>$= \\dfrac{2}{3}x^{\\tfrac{3}{2}}\\cdot\\ln x - \\dfrac{2}{3}\\displaystyle\\int x^{\\tfrac{1}{2}}\\, \\mathrm{d} x$<br>$= \\dfrac{2}{3}x^{\\tfrac{3}{2}}\\cdot\\ln x - \\dfrac{4}{9}x^{\\tfrac{3}{2}} + C$<br>$= \\dfrac{2}{9}x^{\\tfrac{3}{2}}\\cdot\\left(3\\ln x - 2\\right) + C.$"
  },
  {
    "id": "2D413TN73",
    "question": "Biết $\\displaystyle \\int x\\cos2x\\mathrm{\\,d}x=ax\\sin2x+b\\cos2x+C$ với $a$, $b$ là các số hữu tỉ. Tính tích $ab$.",
    "options": [
      "$ \\dfrac{1}{8}$",
      "$ \\dfrac{1}{4}$",
      "$ -\\dfrac{1}{8}$",
      "$ -\\dfrac{1}{4}$"
    ],
    "answer": 0,
    "explain": "Đặt $u=x \\text{ và } \\mathrm{\\, d}v=\\cos2x\\mathrm{\\, d}x\\Rightarrow \\mathrm{\\, d}u=\\mathrm{\\, d}x \\text{ và } v=\\dfrac{\\sin2x}{2}$.  Khi đó  $\\int x\\cos2x\\mathrm{\\,d}x = \\dfrac{1}{2}x\\sin2x-\\dfrac{1}{2}\\int\\sin2x\\mathrm{\\,d}x$<br>$= \\dfrac{1}{2}x\\sin2x+\\dfrac{1}{4}\\cos2x+C.$  Suy ra $a=\\dfrac{1}{2}$, $b=\\dfrac{1}{4}$ $\\Rightarrow ab=\\dfrac{1}{8}$."
  },
  {
    "id": "2D414TN74",
    "question": "Hàm số nào dưới đây là nguyên hàm của hàm số $f(x)=(3x+2)\\mathrm{e}^{2x+3}$?",
    "options": [
      "$F(x)=\\dfrac{1}{2}(3x+1)\\mathrm{e}^{2x+3}$",
      "$F(x)=\\dfrac{1}{3}(2x+3)\\mathrm{e}^{2x+3}$",
      "$F(x)=\\dfrac{1}{4}(6x+1)\\mathrm{e}^{2x+3}$",
      "$F(x)=(3x-1)\\mathrm{e}^{2x+3}$"
    ],
    "answer": 2,
    "explain": "Ta có  \\[\\displaystyle\\int\\limits f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits (3x+2)\\mathrm{e}^{2x+3}\\mathrm{\\,d}x.\\]  Đặt \\[u=3x+2 \\text{ và } \\mathrm{d}v=\\mathrm{e}^{2x+3}\\mathrm{\\,d}x\\Rightarrow\\mathrm{d}u=3\\mathrm{\\,d}x \\text{ và } v=\\dfrac{1}{2}\\mathrm{e}^{2x+3}.\\]  Khi đó  $\\displaystyle\\int\\limits (3x+2)\\mathrm{e}^{2x+3}\\mathrm{\\,d}x = \\dfrac{1}{2}(3x+2)\\mathrm{e}^{2x+3}-\\dfrac{3}{2}\\displaystyle\\int\\limits \\mathrm{e}^{2x+3}\\mathrm{\\,d}x$<br>$= \\dfrac{1}{2}(3x+2)\\mathrm{e}^{2x+3}-\\dfrac{3}{4}\\mathrm{e}^{2x+3}+C$<br>$= \\left(\\dfrac{3}{2}x+1-\\dfrac{3}{4}\\right)\\mathrm{e}^{2x+3}+C$<br>$= \\dfrac{1}{4}(6x+1)\\mathrm{e}^{2x+3}+C.$"
  },
  {
    "id": "2D414TN75",
    "question": "Giả sử $F(x)$ là một nguyên hàm của $f(x)=\\dfrac{\\ln (x+3)}{x^2}$ sao cho $F(-2)+F(1)=0$. Giá trị của $F(-1)+F(2)$ bằng",
    "options": [
      "$\\dfrac{7}{3}\\ln 2$",
      "$\\dfrac{2}{3}\\ln 2+\\dfrac{3}{6}\\ln 5$",
      "$\\dfrac{10}{3}\\ln 2-\\dfrac{5}{6}\\ln 5$",
      "$0$"
    ],
    "answer": 2,
    "explain": "$F(x)=\\displaystyle\\int \\dfrac{\\ln (x+3)}{x^2} \\mathrm{\\,d}x$, $(x&gt;-3)$. <br>  Đặt $u=\\ln (x+3) \\text{ và } \\mathrm{\\,d}v=\\dfrac{1}{x^2}\\mathrm{\\,d}x  \\Rightarrow \\mathrm{\\,d}u=\\dfrac{1}{x+3}\\mathrm{\\,d}x \\text{ và } v=-\\dfrac{1}{x}. $  $F(x) = -\\dfrac{1}{x}\\ln (x+3)+\\displaystyle\\int \\dfrac{1}{x(x+3)}\\mathrm{\\,d}x$<br>$= -\\dfrac{1}{x}\\ln (x+3)+\\dfrac{1}{3}\\displaystyle\\int \\left(\\dfrac{1}{x}-\\dfrac{1}{x+3}\\right)\\mathrm{\\,d}x$<br>$= -\\dfrac{1}{x}\\ln (x+3)+\\dfrac{1}{3}\\ln \\left|\\dfrac{x}{x+3}\\right|+C.$  Suy ra   $F(x)=-\\dfrac{1}{x}\\ln (x+3)+\\dfrac{1}{3}\\ln \\dfrac{x}{x+3}+C_1 \\text{ khi } x&gt;0 \\text{ và } -\\dfrac{1}{x}\\ln (x+3)+\\dfrac{1}{3}\\ln \\dfrac{-x}{x+3}+C_2 \\text{ khi } -3&lt;x&lt;0.  $  Khi đó <br>  $F(-2)=\\dfrac{1}{3}\\ln 2 +C_2.$<br>  $F(1)=-\\ln4+\\dfrac{1}{3}\\ln\\dfrac{1}{4}+C_1$.<br>  $F(-2)+F(1)=0\\Rightarrow C_1+C_2=\\dfrac{7}{3}\\ln2.$<br>  $F(-1)=\\ln2+\\dfrac{1}{3}\\ln\\dfrac{1}{2} +C_2.$<br>  $F(2)=-\\dfrac{1}{2}\\ln5+\\dfrac{1}{3}\\ln\\dfrac{2}{5}+C_1$.<br>  $\\Rightarrow F(-1)+F(2)=\\ln2+\\dfrac{1}{3}\\ln\\dfrac{1}{2}-\\dfrac{1}{2}\\ln5+\\dfrac{1}{3}\\ln\\dfrac{2}{5}+C_1+C_2=\\dfrac{10}{3}\\ln 2-\\dfrac{5}{6}\\ln 5$."
  },
  {
    "id": "2D412TN76",
    "question": "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=\\dfrac{1}{x-1}+6x$, $\\forall x\\in (1;+\\infty)$ và $f(2)=12$. Biết $F(x)$ là nguyên hàm của $f(x)$ thỏa mãn $F(2)=6$, khi đó giá trị biểu thức $P=F(5)-4F(3)$ bằng",
    "options": [
      "$24$",
      "$10$",
      "$20$",
      "$25$"
    ],
    "answer": 0,
    "explain": "Với $x\\in (1;+\\infty)$, ta có $f(x)=\\displaystyle\\int \\left(\\dfrac{1}{x-1}+6x\\right)\\mathrm{\\,d}x=\\ln (x-1)+3x^2+C$. <br>  Vì $f(2)=12$ nên ta có $C=0$, vậy $f(x)=\\ln (x-1)+3x^2$. <br>  Có $F(x)=\\displaystyle\\int (\\ln (x-1)+3x^2)\\mathrm{\\,d}x=\\displaystyle\\int \\ln (x-1)\\mathrm{\\,d}x+\\displaystyle\\int 3x^2\\mathrm{\\,d}x$. <br>  Xét $I=\\displaystyle\\int \\ln (x-1)\\mathrm{\\,d}x$. <br>  Đặt $u=\\ln (x-1) \\text{ và } \\mathrm{\\,d}v=\\mathrm{\\,d}x\\Rightarrow \\mathrm{\\,d}u=\\dfrac{1}{x-1}\\mathrm{\\,d}x \\text{ và } v=x.$ <br>  Khi đó $I=x\\ln (x-1)-\\displaystyle\\int \\dfrac{x}{x-1}\\mathrm{\\,d}x=x\\ln (x-1)-\\displaystyle\\int \\left(1+\\dfrac{1}{x-1}\\right)\\mathrm{\\,d}x=x\\ln (x-1)-x-\\ln (x-1)+D.$  Vậy $F(x)=x(\\ln (x-1)-1)-\\ln (x-1)+x^3+D$. <br>  Vì $F(2)=6$ nên ta có $-2+8+D=6\\Leftrightarrow D=0$. <br>  Vậy $F(x)=x(\\ln (x-1)-1)-\\ln (x-1)+x^3$. <br>  Có $F(5)=120+4\\ln 4=120+8\\ln 2$, $F(3)=24+2\\ln 2$, suy ra $P=F(5)-4F(3)=24$."
  },
  {
    "id": "2D414TN77",
    "question": "Biết $\\displaystyle \\int x^3\\ln x \\mathrm{\\, d} x =x^4\\left(a+b\\ln x\\right)+C$, với $a$, $b$ là các số hữu tỉ. Giá trị $a+b$ bằng",
    "options": [
      "$-\\dfrac{5}{16}$",
      "$-\\dfrac{1}{64}$",
      "$-\\dfrac{1}{4}$",
      "$\\dfrac{3}{16}$"
    ],
    "answer": 3,
    "explain": "Đặt $u=\\ln x \\text{ và } \\mathrm{d}v=x^3 \\mathrm{\\, d} x \\Rightarrow \\mathrm{d}u=\\dfrac{1}{x}\\mathrm{\\, d} x \\text{ và } v=\\dfrac{1}{4}x^4$. Khi đó  $\\displaystyle \\int x^3\\ln x \\mathrm{\\, d} x =\\int u\\mathrm{\\, d} v=uv-\\int v \\mathrm{\\, d} u =\\dfrac{1}{4}x^4\\ln x -\\int \\dfrac{1}{4}x^3 \\mathrm{\\, d} x$<br>$=\\dfrac{1}{4}x^4\\ln x -\\dfrac{1}{16}x^4+C=x^4\\left(-\\dfrac{1}{16}+\\dfrac{1}{4}\\ln x\\right)+C.$  Suy ra $a=-\\dfrac{1}{16}$ và $b=\\dfrac{1}{4}$. Suy ra $a+b=-\\dfrac{1}{16}+\\dfrac{1}{4}=\\dfrac{3}{16}$."
  },
  {
    "id": "2D413TN78",
    "question": "Cho $F(x)$ là một nguyên hàm của $f(x)=\\cos\\sqrt{x}$ trên khoảng $(0;+\\infty)$ và thỏa mãn $F\\left(\\pi^2\\right)=1$. Biết  ${F\\left(\\dfrac{\\pi^2}{9}\\right)=\\dfrac{\\pi\\sqrt{a}}{b}+c}$ ($a$, $b$, $c$ là các số nguyên dương và $a&lt;4$), tính $a+b+c$.",
    "options": [
      "$7$",
      "$10$",
      "$8$",
      "$13$"
    ],
    "answer": 1,
    "explain": "Xét $F(x)=\\displaystyle\\int \\cos\\sqrt{x}\\mathrm{\\,d}x$.<br>  Đặt $t=\\sqrt{x}$, khi đó $t^2=x$, suy ra $2t\\mathrm{\\,d}t = \\mathrm{d}x$.<br>  Do đó  $F(x) = \\displaystyle\\int 2t\\cos t\\mathrm{\\,d}t = 2t\\sin t - \\displaystyle\\int 2\\sin t\\mathrm{\\,d}t = 2t\\sin t+2\\cos t +C$<br>$= 2\\sqrt{x}\\sin\\sqrt{x}+2\\cos\\sqrt{x}+C.$  Mà $F\\left(\\pi^2\\right)=1$ nên  \\[2\\pi\\cdot \\sin \\pi+2\\cos \\pi + C=1 \\Leftrightarrow C=3.\\]  Vì thế $F(x)=2\\sqrt{x}\\sin \\sqrt{x}+2\\cos\\sqrt{x}+3$.<br>  Vậy $F\\left(\\dfrac{\\pi^2}{9}\\right) = 2\\cdot \\dfrac{\\pi}{3}\\sin\\dfrac{\\pi}{3}+2\\cos\\dfrac{\\pi}{3}+3 = \\dfrac{\\pi\\sqrt{3}}{3}+4$.<br>  Suy ra $a=3$, $b=3$ và $c=4$.<br>  Vậy $a+b+c=10$."
  },
  {
    "id": "2D414TN79",
    "question": "Một nguyên hàm của hàm số $f(x) = \\big(x^2 + 2x\\big)\\mathrm{e}^{x}$ là",
    "options": [
      "$x^2\\mathrm{e}^{x}$",
      "$\\big(x^2 - 2x\\big)\\mathrm{e}^{x}$",
      "$\\big(2x + 2\\big)\\mathrm{e}^{x}$",
      "$\\big(x^2+ x\\big)\\mathrm{e}^{x}$"
    ],
    "answer": 0,
    "explain": ""
  },
  {
    "id": "2D413TN80",
    "question": "Cho hàm số $f(x)=\\dfrac{x}{\\cos^2 x}$, với $x\\neq \\dfrac{\\pi}{2}+k\\pi, k \\in \\mathbb{Z}$. Một nguyên hàm của hàm số $f(x)$ là",
    "options": [
      "$x\\tan x-\\ln |\\cos x|$",
      "$x\\tan x+\\ln (\\cos x)$",
      "$x\\tan x+\\ln |\\cos x|$",
      "$x\\tan x-\\ln |\\sin x|$"
    ],
    "answer": 0,
    "explain": "Đặt $u=x \\text{ và } \\mathrm{d}v=\\dfrac{1}{\\cos^2 x} \\Rightarrow \\mathrm{d}u=\\mathrm{d}x \\text{ và } v=\\tan x.$<br>  Khi đó $\\displaystyle\\int \\dfrac{x}{\\cos^2 x}\\mathrm{\\,d}x=x\\tan x-\\displaystyle\\int \\tan x\\mathrm{\\,d}x=x\\tan x-\\ln |\\cos x|+C$."
  },
  {
    "id": "2D414TN81",
    "question": "Tìm nguyên hàm: $I= \\displaystyle \\int{\\mathrm{e}^{x}}\\mathrm{\\,d}x^2$.",
    "options": [
      "$I=2\\mathrm{e}^{x}(x-1)+C$",
      "$I=\\mathrm{e}^{x}+C$",
      "$I=x^{2}\\mathrm{e}^{x}+C$",
      "$I=2x\\mathrm{e}^{x}+C$"
    ],
    "answer": 0,
    "explain": "$I= \\displaystyle \\int{\\mathrm{e}^{x}\\mathrm{\\,d}(x^{2})}=2\\displaystyle\\int x\\mathrm{e}^x\\mathrm{\\,d}x=2\\displaystyle\\int x\\mathrm{\\,d}\\left(\\mathrm{e}^x\\right)=2\\left[x\\mathrm{e}^x-\\displaystyle\\int \\mathrm{e}^x\\mathrm{\\,d}x\\right]=2[x\\mathrm{e}^x-\\mathrm{e}^x]+C=2\\mathrm{e}^x(x-1)+C.$"
  },
  {
    "id": "2D414TN82",
    "question": "Biết $F(x)$ là một nguyên hàm của hàm số ${f(x)=\\dfrac{\\left( \\mathrm{e}^{- x}+1\\right) \\left( x+1\\right) ^2-1}{x + 1}}$ và đồ thị hàm số ${y=F(x)}$ cắt trục tung tại điểm có tung độ bằng $4$. Biết ${F(-3)= \\mathrm{e}^{a} - \\ln b + \\dfrac{c}{d}}$, trong đó $a,b,c,d \\in \\mathbb{N}$, $b&lt;5$, $\\dfrac{c}{d}$ là phân số tối giản. Tính $a+b+c+d$.",
    "options": [
      "$22$",
      "$21$",
      "$23$",
      "$20$"
    ],
    "answer": 0,
    "explain": "Ta có: $F(x)=\\displaystyle\\int{\\dfrac{\\left( \\mathrm{e}^{- x}+1\\right) \\left( x+1\\right) ^2-1}{x + 1}\\mathrm{\\,d}x}=\\displaystyle\\int{\\left( x+1\\right)\\mathrm{e}^{- x}\\mathrm{\\,d}x} + \\displaystyle\\int{\\left(x + 1 - \\dfrac{1}{x + 1}\\right)\\mathrm{\\,d}x}=I_1 + I_2$.  <br>- Giải $I_1=\\displaystyle\\int{\\left( x+1\\right)\\mathrm{e}^{- x}\\mathrm{\\,d}x}$; Đặt $u=x + 1 \\text{ và } \\mathrm{\\,d}v=\\mathrm{e}^{- x}\\mathrm{\\,d}x \\Rightarrow \\mathrm{\\,d}u=\\mathrm{\\,d}x \\text{ và } v= - \\mathrm{e}^{- x}$, khi đó:<br>  $I_1= - (x + 1)\\mathrm{e}^{- x} + \\displaystyle\\int{\\left(\\mathrm{e}^{- x}\\right)\\mathrm{\\,d}x}= - (x + 1)\\mathrm{e}^{- x} - \\mathrm{e}^{- x} + C= - \\mathrm{e}^{- x}(x + 2) + C$.<br>- Giải $I_2=\\displaystyle\\int{\\left(x + 1 - \\dfrac{1}{x + 1}\\right)\\mathrm{\\,d}x}=\\dfrac{x^2}{2} + x - \\ln \\left|x + 1\\right|+ C$.<br>- Suy ra: $F(x)= - \\mathrm{e}^{- x}(x + 2) + \\dfrac{x^2}{2} + x - \\ln \\left|x + 1\\right|+ C$.<br>- Đồ thị hàm số $y=F(x)$ cắt trục tung tại điểm có tung độ bằng $4$ nên $F\\left(0\\right)=4\\Rightarrow C=6$.<br>- Vậy $F(x)= - \\mathrm{e}^{- x}(x + 2) + \\dfrac{x^2}{2} + x - \\ln \\left|x + 1\\right|+ 6$.<br>- Suy ra $F(-3)= \\mathrm{e}^{3} - \\ln 2 + \\dfrac{15}{2} \\Rightarrow a = 3, b = 2, c= 15, d= 2$."
  },
  {
    "id": "2D412TN83",
    "question": "Tìm nguyên hàm của hàm số $f(x)=\\dfrac{x+1}{x-1}$.",
    "options": [
      "$\\displaystyle\\int f(x)\\mathrm{\\, d}x=-x+2\\ln \\left|{x-1}\\right|+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\, d}x=-x-2\\ln \\left|{x-1}\\right|+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\, d}x=x+2\\ln \\left|{x-1}\\right|+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\, d}x=x-2\\ln \\left|{x-1}\\right|+C$"
    ],
    "answer": 2,
    "explain": "Ta có:$\\displaystyle\\int \\dfrac{x+1}{x-1}\\mathrm{\\, d}x=\\int \\left(1+\\dfrac{2}{x-1}\\right)\\mathrm{\\, d}x=x+2\\ln \\left|{x-1}\\right|+C $"
  },
  {
    "id": "2D411TN84",
    "question": "Cho hàm số $f(x)=\\dfrac{1}{x(x+2)}$. Mệnh đề nào sau đây &lt;strong&gt;đúng&lt;/strong&gt;?",
    "options": [
      "$\\displaystyle \\int f(x)\\,dx=\\ln\\biggl|\\dfrac{x}{x+2}\\biggr|+C$",
      "$\\displaystyle \\int f(x)\\,dx=\\dfrac{1}{2}\\ln\\biggl|\\dfrac{x}{x+2}\\biggr|+C$",
      "$\\displaystyle \\int f(x)\\,dx=\\ln\\biggl|\\dfrac{x+2}{x}\\biggr|+C$",
      "$\\displaystyle \\int f(x)\\,dx=\\dfrac{1}{2}\\ln\\biggl|\\dfrac{x+2}{x}\\biggr|+C$"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "2D412TN85",
    "question": "Tìm $\\displaystyle \\int\\limits \\dfrac{\\left(x+1\\right)^2}{x^2}\\mathrm{d}x $.",
    "options": [
      "$x+2\\ln |x| +\\dfrac{1}{x}+C$",
      "$x-2\\ln |x| -\\dfrac{1}{x}+C$",
      "$x-2\\ln |x| +\\dfrac{1}{x}+C$",
      "$x+2\\ln |x| -\\dfrac{1}{x}+C$"
    ],
    "answer": 3,
    "explain": ""
  },
  {
    "id": "2D412TN86",
    "question": "Tìm nguyên hàm của hàm số ${ f(x)=\\dfrac{1}{2x^2+3x+1} }$.",
    "options": [
      "$\\ln \\left| \\dfrac{2x+1}{x+1} \\right| +C $",
      "$ \\ln \\left| \\dfrac{x+1}{2x+1} \\right| +C$",
      "$ \\ln \\left| \\dfrac{2x-1}{x-1} \\right| +C$",
      "$\\dfrac{1}{2} \\ln \\left| \\dfrac{2x+1}{x+1} \\right| +C $"
    ],
    "answer": 0,
    "explain": ""
  },
  {
    "id": "2D412TN87",
    "question": "Tính $\\displaystyle\\int\\frac{x^2+2x+3}{x+1}\\, \\textrm{\\,d}x $.",
    "options": [
      "$\\dfrac{x^2}{2}+x+2\\ln\\left|x-1\\right|+C$",
      "$\\dfrac{x^2}{2}+x+\\ln\\left|x+1\\right|+C$",
      "$\\dfrac{\\left(x+1\\right)^2}{2}+2\\ln\\left|x+1\\right|+C$",
      "$\\dfrac{x^2}{2}-x+2\\ln\\left|x+1\\right|+C$"
    ],
    "answer": 2,
    "explain": ""
  },
  {
    "id": "2D412TN88",
    "question": "Tìm $\\displaystyle\\int\\limits \\dfrac{\\textrm{\\,d}x}{x^2 - 3x + 2}$.",
    "options": [
      "$\\ln\\Big\\vert\\dfrac{x - 2}{x - 1}\\Big\\vert + C$",
      "$\\ln\\Big\\vert\\dfrac{x - 1}{x - 2}\\Big\\vert + C$",
      "$\\ln\\big(x - 2\\big)\\big(x - 1\\big) + C$",
      "$\\ln\\dfrac{1}{x - 2} - \\ln\\dfrac{1}{x - 1} + C$"
    ],
    "answer": 0,
    "explain": ""
  },
  {
    "id": "2D412TN89",
    "question": "Tìm nguyên hàm của hàm số $f(x)=\\dfrac{x}{x^2-16}$.",
    "options": [
      "$\\displaystyle\\int f(x)\\textrm{d}x=-\\dfrac{x^2+16}{(x^2-16)^2}+C$",
      "$\\displaystyle\\int f(x)\\textrm{d}x=\\dfrac{1}{2}\\ln\\left|x^2-16\\right|+C$",
      "$\\displaystyle\\int f(x)\\textrm{d}x=\\dfrac{1}{8}\\ln\\left|\\dfrac{x-4}{x+4}\\right|+C$",
      "$\\displaystyle\\int f(x)\\textrm{d}x=\\ln\\left|x^2-16\\right|+C$"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "2D412TN90",
    "question": "Họ nguyên hàm của hàm số $f(x) = \\dfrac{x + 3}{x^2 + 3x + 2}$ là",
    "options": [
      "$F(x) = 2\\ln\\vert x + 2\\vert - \\ln\\vert x + 1\\vert + C$",
      "$F(x) = 2\\ln\\vert x + 1\\vert + \\ln\\vert x + 2\\vert + C$",
      "$F(x) = 2\\ln\\vert x + 2\\vert + \\ln\\vert x + 1\\vert + C$",
      "$F(x) = 2\\ln\\vert x + 1\\vert - \\ln\\vert x + 2\\vert + C$"
    ],
    "answer": 3,
    "explain": ""
  },
  {
    "id": "2D412TN91",
    "question": "Tìm một nguyên hàm của hàm số ${f(x)=\\dfrac{5-x}{3-2x-x^2}}$.",
    "options": [
      "$\\displaystyle\\int f(x)\\mathrm{\\, d}x=\\ln \\dfrac{(x+3)^2}{\\left|{x-1}\\right|}$",
      "$\\displaystyle\\int f(x)\\mathrm{\\, d}x=-\\ln \\dfrac{{(x+3)}^2}{\\left|{x-1}\\right|}+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\, d}x=\\ln \\dfrac{{(x+3)}^2}{\\left|{x-1}\\right|}+C$",
      "$\\displaystyle\\int f(x)\\mathrm{\\, d}x=-\\ln \\dfrac{{(x-3)}^2}{\\left|{x+1}\\right|}+C$"
    ],
    "answer": 0,
    "explain": "$\\int \\dfrac{5-x}{3-2x-x^2}\\mathrm{\\, d}x =\\int \\dfrac{(x+3)+2(1-x)}{(x+3)(1-x)}\\mathrm{\\, d}x=\\int \\left(\\dfrac{1}{1-x}+\\dfrac{2}{x+3}\\right)\\mathrm{\\, d}x$<br>$=2\\ln \\left| x+3 \\right|-\\ln \\left| x-1 \\right|+C=\\ln (x+3)^2-\\ln \\left|x-1\\right|+C$<br>$=\\ln \\dfrac{(x+3)^2}{\\left|x-1\\right|}+C$"
  },
  {
    "id": "2D412TN92",
    "question": "Họ nguyên hàm của hàm số $f(x)=\\dfrac{2x}{{(1-x)}^3}$ là",
    "options": [
      "$F(x)=\\dfrac{2}{x-1}+\\dfrac{1}{{(x-1)}^2}+C$ ",
      "$F(x)=\\dfrac{2}{x-1}-\\dfrac{1}{{(x-1)}^2}+C$ ",
      "$F(x)=\\dfrac{1}{1-x}+\\dfrac{1}{4{(1-x)}^4}+C$",
      "$F(x)=\\dfrac{1}{1-x}-\\dfrac{1}{4{(1-x)}^4}+C$"
    ],
    "answer": 0,
    "explain": "$\\displaystyle\\int \\dfrac{2x}{(1-x)^3}\\mathrm{\\, d}x=\\int \\dfrac{2-2(1-x)}{(1-x)^3}\\mathrm{\\, d}x=\\int \\left(\\dfrac{2}{\\left(1-x\\right)^3}-\\dfrac{2}{(1-x)^2}\\right)\\mathrm{\\, d}x=\\dfrac{1}{(x-1)^2}+\\dfrac{2}{x-1}+C$"
  },
  {
    "id": "2D413TN93",
    "question": "Hàm số $F(x)=\\sin3x$ là một nguyên hàm của hàm số nào dưới đây?",
    "options": [
      "$f_4(x)=-3\\cos3x$",
      "$f_3(x)=3\\cos3x$",
      "$f_2(x)=-\\dfrac{1}{3}\\cos3x$",
      "$f_1(x)=\\dfrac{1}{3}\\cos3x$"
    ],
    "answer": 1,
    "explain": "Vì $F'(x)=3\\cos 3x$ nên $F(x)=\\sin3x$ là một nguyên hàm của hàm số $f_3(x)=3\\cos3x$."
  },
  {
    "id": "2D413TN94",
    "question": "Nguyên hàm của hàm số $y=\\sin x+2\\cos x$ là",
    "options": [
      "$\\cos x-2\\sin x+C$",
      "$-\\cos x+2\\sin x+C$",
      "$\\cos x+2\\sin x+C$",
      "$-\\cos x-2\\sin x+C$"
    ],
    "answer": 1,
    "explain": "Ta có $\\displaystyle\\int\\limits \\left(\\sin x+2\\cos x\\right) \\mathrm{d}x=-\\cos x+2\\sin x+C$."
  },
  {
    "id": "2D413TN95",
    "question": "Tìm nguyên hàm $F(x)$ của hàm số $f(x)=6x+\\sin 3x$, biết $F(0)=\\dfrac{2}{3}$.",
    "options": [
      "$F(x)=3x^2-\\dfrac{1}{3}\\cos 3x+\\dfrac{2}{3}$",
      "$F(x)=3x^2-\\dfrac{1}{3}\\cos 3x-1$",
      "$F(x)=3x^2+\\dfrac{1}{3}\\cos 3x+1$",
      "$F(x)=3x^2-\\dfrac{1}{3}\\cos 3x+1$"
    ],
    "answer": 3,
    "explain": "$\\displaystyle\\int\\limits f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits \\left(6x+\\sin 3x\\right)\\mathrm{d}x=3x^2-\\dfrac{1}{3}\\cos 3x+C=F(x)$.<br>  Ta có $F(0)=\\dfrac{2}{3} \\Leftrightarrow 0-\\dfrac{1}{3}\\cdot 1+C=\\dfrac{2}{3} \\Leftrightarrow C=1$.<br>  Vậy $F(x)=3x^2-\\dfrac{1}{3}\\cos 3x+1$."
  },
  {
    "id": "2D414TN96",
    "question": "Nếu $\\displaystyle\\int\\limits f(x) \\mathrm{\\,d}x=\\dfrac{1}{x}+\\ln x+C$ thì $f(x)$ là",
    "options": [
      "$f(x)=\\sqrt{x}+\\ln x+C$",
      "$f(x)=-\\sqrt{x}-\\dfrac{1}{x}+\\ln x+C$",
      "$f(x)=-\\dfrac{1}{x^2}+\\ln x+C$",
      "$f(x)=\\dfrac{x-1}{x^2}$"
    ],
    "answer": 3,
    "explain": "Ta có $\\left(\\dfrac{1}{x}+\\ln x+C\\right)'=-\\dfrac{1}{x^2}+\\dfrac{1}{x}=\\dfrac{x-1}{x^2}$, suy ra $f(x)=\\dfrac{x-1}{x^2}$ là hàm số cần tìm."
  },
  {
    "id": "2D412TN97",
    "question": "Cho hàm số $f(x)=7^x$. Khẳng định nào sau đây đúng?",
    "options": [
      "$\\displaystyle\\int 7^x \\mathrm{d}x =\\dfrac{7^x}{\\ln 7}+C$",
      "$\\displaystyle\\int 7^x \\mathrm{d}x =\\dfrac{7^{x+1}}{x+1}+C$",
      "$\\displaystyle\\int 7^x \\mathrm{d}x =7^{x+1}+C$",
      "$\\displaystyle\\int 7^x \\mathrm{d}x =7^x \\ln 7+C$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int 7^x \\mathrm{d}x =\\dfrac{7^x}{\\ln 7}+C$."
  },
  {
    "id": "2D412TN98",
    "question": "Cho hàm số $y=f(x)$ và $y=g(x)$ liên tục trên $\\mathbb{R}$. Phát biểu nào sau đây là đúng?",
    "options": [
      "$\\displaystyle\\int f^k(x) \\mathrm{d}x =\\left(\\displaystyle\\int f(x) \\mathrm{d}x \\right)^k, \\forall k \\in \\mathbb{R}$",
      "$\\displaystyle\\int f(x) \\pm g(x) \\mathrm{d}x =\\displaystyle\\int f(x) \\mathrm{d}x \\pm \\displaystyle\\int g(x) \\mathrm{d}x $",
      "$\\displaystyle\\int k f(x) \\mathrm{d}x =k \\displaystyle\\int f(x) \\mathrm{d}x , \\forall k \\in \\mathbb{R}$",
      "$\\displaystyle\\int f(x) g(x) \\mathrm{d}x =\\displaystyle\\int f(x) \\mathrm{d}x \\displaystyle\\int g(x) \\mathrm{d}x $"
    ],
    "answer": 1,
    "explain": "Với hàm số $y=f(x)$ và $y=g(x)$ liên tục trên $\\mathbb{R}$ thì  $  \\displaystyle\\int f(x) \\pm g(x) \\mathrm{d}x =\\displaystyle\\int f(x) \\mathrm{d}x \\pm \\displaystyle\\int g(x) \\mathrm{d}x .  $"
  },
  {
    "id": "2D412TN99",
    "question": "Họ tất cả các nguyên hàm của hàm số $f(x)=2x+6$ là",
    "options": [
      "$x^2+6x+C$",
      "$2x^2+6x+C$",
      "$x^2+C$",
      "$2x^2+C$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle\\int (2x+6)\\mathrm{\\,d}x = x^2+6x+C$."
  },
  {
    "id": "2D413TN100",
    "question": "Họ tất cả các nguyên hàm của hàm số $f(x)=2\\sin x$ là",
    "options": [
      "$2\\cos x+C$",
      "$\\sin 2x+C$",
      "$\\sin^2 x+C$",
      "$-2\\cos x+C$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int 2\\sin x\\mathrm{\\,d}x = -2\\cos x+C$."
  },
  {
    "id": "2D412TN101",
    "question": "Nguyên hàm của hàm số $f(x)=x^2+1$ là",
    "options": [
      "$x^3+x+C$",
      "$3x^3+x+C$",
      "$x^3+C$",
      "$\\dfrac{1}{3}x^3+x+C$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int (x^2+1) \\mathrm{\\,d}x=\\dfrac{1}{3}x^3+x+C$."
  },
  {
    "id": "2D413TN102",
    "question": "Họ nguyên hàm của hàm số $f(x)=\\mathrm{e}^{x}+\\cos x$ là",
    "options": [
      "$\\mathrm{e}^{x}+\\sin x+C$",
      "$\\dfrac{\\mathrm{e}^{x+1}}{x+1}+\\sin x+C$",
      "$\\mathrm{e}^{x}-\\sin x+C$",
      "$\\dfrac{\\mathrm{e}^{x+1}}{x+1}-\\sin x+C$"
    ],
    "answer": 0,
    "explain": "Họ nguyên hàm của hàm số $f(x)$ là  \\[\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\left(\\mathrm{e}^{x}+\\cos x\\right)\\mathrm{d}x=\\mathrm{e}^{x}+\\sin x+C.\\]"
  },
  {
    "id": "2D411TN103",
    "question": "Trong các khẳng định sau, khẳng định nào <strong>sai</strong>?",
    "options": [
      "$\\displaystyle\\int\\limits\\mathrm{\\,d}x=x+C$",
      "$\\displaystyle\\int\\limits 0\\mathrm{\\,d}x=C$",
      "$\\displaystyle\\int\\limits\\dfrac{1}{x}\\mathrm{\\,d}x=-\\dfrac{1}{x^2}+C$",
      "$\\displaystyle\\int\\limits x^{\\alpha}\\mathrm{\\,d}x=\\dfrac{x^{\\alpha+1}}{\\alpha+1}+C(\\alpha\\neq-1)$"
    ],
    "answer": 2,
    "explain": "Do $\\displaystyle\\int\\limits\\dfrac{1}{x}\\mathrm{\\,d}x=\\ln|x|+C$ nên khẳng định sai là ``$\\displaystyle\\int\\limits\\dfrac{1}{x}\\mathrm{\\,d}x=-\\dfrac{1}{x^2}+C$''."
  },
  {
    "id": "2D412TN104",
    "question": "Tìm họ nguyên hàm $F(x)$ của hàm số $f(x)=x^3+x+1$.",
    "options": [
      "$F(x)=\\dfrac{x^4}{4}+\\dfrac{x^3}{2}+C$",
      "$F(x)=\\dfrac{x^4}{4}+\\dfrac{x^2}{2}+x+C$",
      "$F(x)=x^4+\\dfrac{x^3}{2}+x+C$",
      "$F(x)=3x^3+C$"
    ],
    "answer": 1,
    "explain": "Họ nguyên hàm của hàm số $f(x)$ là  \\[F(x)=\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\left(x^3+x+1\\right)\\mathrm{d}x=\\dfrac{x^4}{4}+\\dfrac{x^2}{2}+x+C.\\]"
  },
  {
    "id": "2D412TN105",
    "question": "Cho hàm số $f(x)=2^x+3$. Khẳng định nào sau đây đúng?",
    "options": [
      "$\\displaystyle\\int\\limits f(x)\\, \\mathrm{d}x=2^{x-3}+C$",
      "$\\displaystyle\\int\\limits f(x)\\, \\mathrm{d}x=2^x \\ln 2+3x+C$",
      "$\\displaystyle\\int\\limits f(x)\\, \\mathrm{d}x=\\dfrac{2^x}{\\ln 2}+3+C$",
      "$\\displaystyle\\int\\limits f(x)\\, \\mathrm{d}x=\\dfrac{2^x}{\\ln 2}+3x+C$"
    ],
    "answer": 3,
    "explain": "Ta có  $\\displaystyle\\int\\limits f(x)\\, \\mathrm{d}x=\\displaystyle\\int\\limits (2^x+3)\\, \\mathrm{d}x=\\displaystyle\\int\\limits 2^x\\, \\mathrm{d}x+\\displaystyle\\int\\limits 3\\, \\mathrm{d}x=\\dfrac{2^x}{\\ln 2}+3x+C$."
  },
  {
    "id": "2D413TN106",
    "question": "Biết $F(x)$ là một nguyên hàm của hàm số $f(x) = \\sin x$ và đồ thị hàm số $y = F(x)$ đi qua điểm $M(0;1)$. Tính $F\\left( \\dfrac{\\pi}{2} \\right)$.",
    "options": [
      "$F\\left(\\dfrac{\\pi}{2} \\right) = 1$",
      "$F\\left(\\dfrac{\\pi}{2} \\right) = 2$",
      "$F\\left(\\dfrac{\\pi}{2} \\right) = -1$",
      "$F\\left( \\dfrac{\\pi}{2} \\right) = 0$"
    ],
    "answer": 1,
    "explain": "Ta có $F(x)=\\displaystyle\\int \\sin x\\mathrm{\\,d}x=-\\cos x+C$.<br>   $F(0)=1\\Leftrightarrow -\\cos 0+C=1\\Leftrightarrow C=2\\Rightarrow F(x)=-\\cos x+2$.<br>  Suy ra $F\\left(\\dfrac{\\pi}{2} \\right) = -\\cos\\dfrac{\\pi}{2}+2=2$."
  },
  {
    "id": "2D412TN107",
    "question": "Trong các hàm số sau, hàm số nào không phải là nguyên hàm của $f(x) = x^3$?",
    "options": [
      "$\\dfrac{x^4}{4} - 1$",
      "$\\dfrac{x^4}{4}$",
      "$\\dfrac{x^4}{4}+1$",
      "$3x^2$"
    ],
    "answer": 3,
    "explain": "Ta thấy $\\displaystyle\\int x^3 \\mathrm{\\,d}x=\\dfrac{x^4}{4}+C$."
  },
  {
    "id": "2D413TN108",
    "question": "Tìm nguyên hàm của hàm số $f(x) = 3\\cos x + \\dfrac{1}{x^2}$ trên $(0; +\\infty)$.",
    "options": [
      "$3\\cos x + \\ln x + C$",
      "$3\\cos x +\\dfrac{1}{x}+ C$",
      "$-3\\sin x +\\dfrac{1}{x}+ C$",
      "$3\\sin x -\\dfrac{1}{x} +C$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int \\left(3\\cos x + \\dfrac{1}{x^2}\\right) \\mathrm{\\,d}x=3\\sin x -\\dfrac{1}{x} +C$."
  },
  {
    "id": "2D413TN109",
    "question": "Cho $F(x)$ là một nguyên hàm của hàm số $f(x) = 6x + \\sin x$ và $F(0) = 2$. Khẳng định nào sau đây đúng?",
    "options": [
      "$F(x) = 3x^2 + \\cos x + 1$",
      "$F(x) = 2x^2 + \\cos x + 1$",
      "$F(x) = 2x^2 - \\cos x + 3$",
      "$F(x) = 3x^2 - \\cos x + 3$"
    ],
    "answer": 3,
    "explain": "Ta tính nguyên hàm  \\[  F(x) = \\displaystyle\\int\\limits (6x + \\sin x)\\,\\mathrm{d}x = 3x^2 - \\cos x + C.  \\]  Dùng điều kiện $F(0) = 2$  \\[  F(0) = 3 \\cdot 0^2 - \\cos(0) + C = -1 + C = 2 \\Rightarrow C = 3.  \\]  Vậy  \\[  F(x) = 3x^2 - \\cos x + 3.  \\]"
  },
  {
    "id": "2D412TN110",
    "question": "Cho $\\displaystyle\\int\\limits5^{x} \\mathrm{~d} x=F(x)+C$. Khẳng định nào dưới đây <strong>đúng</strong>?",
    "options": [
      "$F'(x)=5^x\\cdot\\ln 5$",
      "$F'(x)=-5^x$",
      "$F'(x)=5^x$",
      "$F'(x)=5^x+C$"
    ],
    "answer": 2,
    "explain": "Lấy đạo hàm hai vế ta được $F'(x)=5^x$."
  },
  {
    "id": "2D412TN111",
    "question": "Họ nguyên hàm của hàm số $f(x)=3x^2+2x+5$ là",
    "options": [
      "$x^3+x^2+5x+C$",
      "$x^3+x+C$",
      "$x^3+x^2+C$",
      "$x^3+x^2+5$"
    ],
    "answer": 0,
    "explain": "$\\displaystyle\\int\\limits f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits(3x^2+2x+5)\\mathrm{\\,d}x=x^3+x^2+5x+C$"
  },
  {
    "id": "2D412TN112",
    "question": "Cho hàm số $f(x)$ có đạo hàm $f'(x)$ liên tục trên $\\mathbb{R}$, tìm mệnh đề đúng trong các mệnh đề dưới đây.",
    "options": [
      "$\\displaystyle\\int f'(x){\\,d}x=f(x)$",
      "$\\displaystyle\\int f(x){\\,d}x=f'(x)$",
      "$\\displaystyle\\int f(x){\\,d}x=f'(x)+C$",
      "$\\displaystyle\\int f'(x){\\,d}x=f(x)+C$"
    ],
    "answer": 3,
    "explain": "Ta có $\\displaystyle\\int f'(x){\\,d}x=f(x)+C$."
  },
  {
    "id": "2D411TN113",
    "question": "Phát biểu nào sau đây là đúng?",
    "options": [
      "$\\displaystyle\\int\\limits \\mathrm{e}^{-3x}\\mathrm{\\,d}x=\\mathrm{e}^{-3x}+C$",
      "$\\displaystyle\\int\\limits \\mathrm{e}^{-3x}\\mathrm{\\,d}x=-\\dfrac{1}{3}\\mathrm{e}^{-3x}+C$",
      "$\\displaystyle\\int\\limits \\mathrm{e}^{-3x}\\mathrm{\\,d}x=\\dfrac{1}{3}\\mathrm{e}^{-3x}+C$",
      "$\\displaystyle\\int\\limits \\mathrm{e}^{-3x}\\mathrm{\\,d}x=-\\dfrac{1}{3}\\mathrm{e}^{-3x}$"
    ],
    "answer": 1,
    "explain": "Phát biểu đúng là $\\displaystyle\\int\\limits \\mathrm{e}^{-3x}\\mathrm{\\,d}x=-\\dfrac{1}{3}\\mathrm{e}^{-3x}+C$."
  }
];
