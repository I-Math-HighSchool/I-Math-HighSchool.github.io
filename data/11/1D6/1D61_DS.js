// =========================================================================
// KHỐI DỮ LIỆU: 1D61 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1D61 = [
  {
    "id": "1D612DS1",
    "question": "Các mệnh đề sau <strong>đúng</strong> hay <strong>sai</strong>?",
    "subQuestions": [
      {
        "text": "$\\left(5^{-\\tfrac{2}{3}}\\right)^{-3} = 5^2$",
        "answer": true
      },
      {
        "text": "Hàm số $y = \\log_4 x$ có tập xác định $\\mathscr{D} = \\mathbb{R}$",
        "answer": false
      },
      {
        "text": "$\\sqrt[3]{\\dfrac{2}{5}\\cdot \\sqrt[7]{\\dfrac{2}{5}\\cdot \\sqrt[3]{\\dfrac{2}{5}} } }=\\left( \\dfrac{2}{5} \\right)^{\\tfrac{a}{b}}$ $\\Big(\\dfrac{a}{b}$ là phân số tối giản$\\Big)$, khi đó: $a+b = 88$",
        "answer": true
      },
      {
        "text": "Cho $Q = 2\\log_{16} x^4 + \\log_2 x^2$ và $\\log_2 x = 2$. Khi đó: $Q = 32$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta có $\\left(5^{-\\tfrac{2}{3}}\\right)^{-3}= 5^{-\\tfrac{2}{3}\\cdot (-3)}=5^2 $.<br>- <strong>Sai</strong>. Hàm số $y=\\log_4 x$ xác định khi và chỉ khi $x&gt;0$. Vậy tập xác định $\\mathscr{D}=(0;+\\infty)$.<br>- <strong>Đúng</strong>. Ta có   $\\sqrt[3]{\\dfrac{2}{5}\\cdot \\sqrt[7]{\\dfrac{2}{5}\\cdot \\sqrt[3]{\\dfrac{2}{5}} } } = \\sqrt[3]{\\dfrac{2}{5}\\cdot \\sqrt[7]{\\dfrac{2}{5}\\cdot \\left( \\dfrac{2}{5} \\right)^{\\tfrac{1}{3}} } }  = \\sqrt[3]{\\dfrac{2}{5}\\cdot \\sqrt[7]{\\left( \\dfrac{2}{5}\\right)^{\\tfrac{4}{3}} } }$<br>$= \\sqrt[3]{\\dfrac{2}{5}\\cdot \\left(\\dfrac{2}{5} \\right)^{\\tfrac{4}{21}} }  =\\sqrt[3]{\\left(\\dfrac{2}{5} \\right)^{\\tfrac{25}{21}}}  =\\left(\\dfrac{2}{5} \\right)^{\\tfrac{25}{63}}.$  Suy ra $a=25$ và $b=63$. Dó đó $a+b=88$.<br>- <strong>Sai</strong>. Ta có $Q = 2\\log_{16} x^4 + \\log_2 x^2= 2 \\log_{2^4}x^4+2\\log_2 x=2\\log_2 x+2\\log_2 x= 4\\log_2 x=4\\cdot 2=8.$"
  },
  {
    "id": "1D612DS2",
    "question": "Với $a$, $b$ là các số thực dương và khác $1$; $\\alpha$, $\\beta$ là số thực bất kì.",
    "subQuestions": [
      {
        "text": "$a^{\\alpha}\\cdot a^{\\beta}=a^{\\alpha\\cdot\\beta}$",
        "answer": false
      },
      {
        "text": "Hàm số $y=a^x$ có tập xác định là $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "$\\sqrt[3]{a\\sqrt{a^3}}=a^{\\tfrac{5}{3}}$",
        "answer": false
      },
      {
        "text": "$\\log _{a^2} a^{10}+\\log _{\\sqrt[3]b} \\left(b^{-2}\\right)=-1$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Ta có $a^{\\alpha}\\cdot a^{\\beta}= a^{\\alpha + \\beta}$.<br>- <strong>Đúng</strong>. Hàm số $y=a^x$ có tập xác định là $\\mathbb{R}$.<br>- <strong>Sai</strong>. Ta có $\\sqrt[3]{a\\sqrt{a^3}}=a^{\\tfrac{5}{3}} = \\sqrt[3]{a\\cdot a^{\\tfrac{3}{2}}} = \\sqrt[3]{a^{\\tfrac{5}{2}}} = a^{\\tfrac{5}{6}}$.<br>- <strong>Đúng</strong>. Ta có $\\log _{a^2} a^{10}+\\log _{\\sqrt[3]b} \\left(b^{-2}\\right)= \\dfrac{10}{2}\\log_a a + (-2)\\cdot 3\\log_b b = 5 - 6 = -1$."
  }
];
