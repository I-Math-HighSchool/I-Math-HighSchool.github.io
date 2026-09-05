// =========================================================================
// KHỐI DỮ LIỆU: 1D13 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 5), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D13 = [
  {
    "id": "1D137DS1",
    "question": "Cho một dao động điều hòa có được mô tả dưới dạng một hàm số là $y = 50\\cos2x$.",
    "subQuestions": [
      {
        "text": "Giá trị của hàm số tại $x = \\dfrac{\\pi}{2}$ bằng $0$",
        "answer": false
      },
      {
        "text": "Tập giá trị của hàm số này là $T = \\left[-50;50\\right]$",
        "answer": true
      },
      {
        "text": "Hàm số này có thể viết lại dưới dạng $y = 50\\left(1 - 2\\cos^2x\\right)$",
        "answer": false
      },
      {
        "text": "Một dao động điều hòa khác cùng phương với dao động điều hòa ban đầu là $y = 50\\cos\\left(2x + \\dfrac{\\pi}{3}\\right)$. Khi đó tổng hợp hai dao động điều hòa này có thể mô tả bằng hàm số $y = 50\\sqrt{3} \\cos \\left(2x + \\dfrac{\\pi}{6}\\right)$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $f\\left(\\dfrac{\\pi}{2}\\right) = 50 \\cdot \\cos \\left(\\dfrac{\\pi}{2} \\cdot 2\\right) = 50 \\cdot (-1) = -50$.<br>- Vì $-1 \\leq \\cos 2x \\leq 1 \\Leftrightarrow -50 \\leq 50\\cos 2x\\leq 50$. Suy ra $T = \\left[-50;50\\right]$.<br>- Ta có $\\cos 2x = 2\\cos^2 x - 1$ nên $y = 50\\cos 2x = 50\\left(2\\cos^2 x - 1\\right)$.<br>- Ta cần tìm dao động tổng hợp $y = y_1 + y_2$. Theo đề bài, ta có  $y = 50\\cos 2x + 50\\cos\\left(2x + \\dfrac{\\pi}{3}\\right)$  Áp dụng công thức $\\cos a + \\cos b = 2\\cos\\dfrac{a+b}{2}\\cos\\dfrac{a-b}{2}$, ta có  $y = 50\\left[ \\cos 2x + \\cos\\left(2x + \\dfrac{\\pi}{3}\\right) \\right]$<br>$= 50 \\cdot 2 \\cdot \\cos\\left( \\dfrac{2x + \\left(2x + \\dfrac{\\pi}{3}\\right)}{2} \\right) \\cdot \\cos\\left( \\dfrac{2x - \\left(2x + \\dfrac{\\pi}{3}\\right)}{2} \\right)$<br>$= 100 \\cdot \\cos\\left( \\dfrac{4x + \\dfrac{\\pi}{3}}{2} \\right) \\cdot \\cos\\left( \\dfrac{-\\dfrac{\\pi}{3}}{2} \\right)$<br>$= 100 \\cdot \\cos\\left( 2x + \\dfrac{\\pi}{6} \\right) \\cdot \\cos\\left( -\\dfrac{\\pi}{6} \\right)$<br>$= 100 \\cdot \\dfrac{\\sqrt{3}}{2} \\cdot \\cos\\left( 2x + \\dfrac{\\pi}{6} \\right)$<br>$= 50\\sqrt{3} \\cos\\left( 2x + \\dfrac{\\pi}{6} \\right)$  Vậy $y = 50\\sqrt{3} \\cos\\left( 2x + \\dfrac{\\pi}{6} \\right)$."
  },
  {
    "id": "1D135DS2",
    "question": "Cho biểu thức $A=(\\sin x+\\cos x)^2$.",
    "subQuestions": [
      {
        "text": "$A=1+\\sin 2x$",
        "answer": true
      },
      {
        "text": "Khi $x=0$ thì $A=0$",
        "answer": false
      },
      {
        "text": "$A\\in[-2;0]$",
        "answer": false
      },
      {
        "text": "Nếu $\\cos 2x=1$ thì $A=1$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $A=(\\sin x+\\cos x)^2=\\sin^2x+\\cos^2x+2\\sin x\\cos x=1+\\sin 2x$.<br>- Khi $x=0$, $A=1+\\sin(2\\cdot 0)=1+\\sin 0=1$.<br>- Ta có $-1\\le\\sin 2x\\le 1\\Leftrightarrow 1-1\\le 1+\\sin 2x\\le 1+1\\Leftrightarrow 0\\le A\\le 2$.<br>- Có $\\cos 2x=1\\Rightarrow 2x=k2\\pi\\Rightarrow x=k\\pi,(k\\in\\mathbb{Z})$.<br>  Khi đó $\\sin 2x=\\sin(2k\\pi)=0$.  Do đó $A=1+\\sin 2x=1+0=1$."
  },
  {
    "id": "1D135DS3",
    "question": "Cho $\\sin\\alpha=\\dfrac{2}{3}$, $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$. Khi đó:",
    "subQuestions": [
      {
        "text": "$\\cos \\left(\\dfrac{\\pi}{4}-\\alpha\\right)=\\dfrac{\\sqrt{10}-2\\sqrt{2}}{6}$",
        "answer": false
      },
      {
        "text": "$\\tan \\alpha=-\\dfrac{2\\sqrt{5}}{5}$",
        "answer": true
      },
      {
        "text": "$\\cos \\left(\\dfrac{\\pi}{3}+\\alpha\\right)=\\dfrac{\\sqrt{5}-2\\sqrt{3}}{6}$",
        "answer": false
      },
      {
        "text": "$\\cos \\alpha=-\\dfrac{\\sqrt{5}}{3}$",
        "answer": true
      }
    ],
    "explain": "Ta có  $\\sin^2\\alpha + \\cos^2\\alpha = 1$<br>$\\Leftrightarrow \\cos \\alpha = \\pm \\sqrt{1 - \\dfrac{4}{9}}$<br>$\\Leftrightarrow \\cos \\alpha = \\pm \\dfrac{\\sqrt{5}}{3}$  Vì $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$ nên $\\cos \\alpha &lt; 0 \\Rightarrow \\cos \\alpha = - \\dfrac{\\sqrt{5}}{3}$.  <br>- Ta có \\[\\cos \\left(\\dfrac{\\pi}{4}-\\alpha\\right)= \\cos \\dfrac{\\pi}{4} \\cos \\alpha + \\sin \\dfrac{\\pi}{4} \\sin \\alpha = \\dfrac{\\sqrt{2}}{2} \\cdot \\left(-\\dfrac{\\sqrt{5}}{3}\\right) + \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{2}{3} = \\dfrac{-\\sqrt{10} + 2\\sqrt{2}}{6}.\\]<br>- Ta có \\[\\tan \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha} = \\dfrac{\\frac{2}{3}}{-\\frac{\\sqrt{5}}{3}} = - \\dfrac{2\\sqrt{5}}{5}.\\]<br>- Ta có \\[\\cos \\left(\\dfrac{\\pi}{3}+\\alpha\\right)= \\cos \\dfrac{\\pi}{3} \\cos \\alpha - \\sin \\dfrac{\\pi}{3} \\sin \\alpha = \\dfrac{1}{2} \\cdot \\left(-\\dfrac{\\sqrt{5}}{3}\\right) - \\dfrac{\\sqrt{3}}{2} \\cdot \\dfrac{2}{3} = \\dfrac{-\\sqrt{5} - 2\\sqrt{3}}{6}.\\]<br>- Chứng minh trên."
  },
  {
    "id": "1D135DS4",
    "question": "Cho $\\sin \\alpha=\\dfrac{3}{5}$ và $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$.",
    "subQuestions": [
      {
        "text": "$\\cos \\alpha=-\\dfrac{4}{5}$",
        "answer": true
      },
      {
        "text": "$\\cos \\left(\\dfrac{\\pi}{2}-\\alpha\\right)&lt;0$",
        "answer": false
      },
      {
        "text": "$\\sin \\dfrac{\\alpha}{2}\\cdot \\cos\\dfrac{\\alpha}{2}=\\dfrac{3}{10}$",
        "answer": true
      },
      {
        "text": "$\\tan \\left(\\alpha-\\dfrac{\\pi}{4}\\right)=7$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Ta có $\\cos^2 \\alpha=1-\\sin^2 \\alpha=\\dfrac{16}{25}$.<br>  Do $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$ suy ra $\\cos \\alpha=-\\dfrac{4}{5}$.<br>- <strong>Sai</strong>.<br>  Ta có $\\cos \\left(\\dfrac{\\pi}{2}-\\alpha\\right)=\\sin \\alpha=\\dfrac{3}{5}&gt;0$.<br>- <strong>Đúng</strong>.<br>  Ta có $\\sin \\alpha=2\\sin \\dfrac{\\alpha}{2}\\cos\\dfrac{\\alpha}{2}\\Rightarrow \\sin \\dfrac{\\alpha}{2}\\cos\\dfrac{\\alpha}{2}=\\dfrac{1}{2}\\sin \\alpha=\\dfrac{3}{10}$.<br>- <strong>Sai</strong>.<br>  Ta có $\\tan \\alpha=\\dfrac{\\sin \\alpha}{\\cos \\alpha}=-\\dfrac{3}{4}$. <br>  Do đó $\\tan \\left(\\alpha-\\dfrac{\\pi}{4}\\right)=\\dfrac{\\tan\\alpha-1}{1+\\tan\\alpha}=-7$."
  },
  {
    "id": "1D135DS5",
    "question": "Cho biết $\\cos x=-\\dfrac{12}{13}$ và $\\pi&lt;x&lt;\\dfrac{3 \\pi}{2}$; khi đó",
    "subQuestions": [
      {
        "text": "$\\sin x&gt;0$",
        "answer": false
      },
      {
        "text": "$\\cot x=\\dfrac{12}{5}$",
        "answer": true
      },
      {
        "text": "$\\tan 2 x=\\dfrac{119}{120}$",
        "answer": true
      },
      {
        "text": "$\\sin \\left(\\dfrac{\\pi}{3}-x\\right)=\\dfrac{5-12 \\sqrt{3}}{26}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\pi&lt;x&lt;\\dfrac{3 \\pi}{2}$ thuộc góc phần tư thứ tư nên $\\sin x&lt;0$.<br>- Ta có $\\sin^2x=1-\\cos^2x=1-\\left(-\\dfrac{12}{13}\\right)^2=\\dfrac{25}{169}$, suy ra $\\sin x=-\\dfrac{5}{13}$.<br>  Do đó $\\cot x=\\dfrac{\\cos x}{\\sin x}=-\\dfrac{12}{13}:\\dfrac{-5}{13}=\\dfrac{12}{5}$.<br>- $\\tan 2x=\\dfrac{\\sin 2x}{\\cos 2x}=\\dfrac{2\\sin x\\cos x}{2\\cos^2x-1}=\\dfrac{2\\cdot \\left(-\\dfrac{5}{13}\\right)\\cdot \\left(-\\dfrac{12}{13}\\right)}{2\\left(-\\dfrac{12}{13}\\right)^2-1}=\\dfrac{120}{119}$.<br>- $\\sin \\left(\\dfrac{\\pi}{3}-x\\right)=\\sin \\dfrac{\\pi}{3}\\cos x-\\cos \\dfrac{\\pi}{3}\\sin x=\\dfrac{\\sqrt{3}}{2} \\cdot\\left(-\\dfrac{12}{13}\\right)-\\dfrac{1}{2} \\cdot\\left(-\\dfrac{5}{13}\\right)=\\dfrac{5-12 \\sqrt{3}}{26}$."
  },
  {
    "id": "1D135DS6",
    "question": "Xét tính đúng sai của các phát biểu sau:",
    "subQuestions": [
      {
        "text": "$\\sin \\left(a+b\\right)=\\sin a \\cos b + \\cos a \\sin b$",
        "answer": true
      },
      {
        "text": "$\\sin 31^{\\circ} \\cdot \\cos 12^{\\circ} + \\cos 12^{\\circ} \\cdot \\sin 31^{\\circ}=\\sin 19^{\\circ}$",
        "answer": false
      },
      {
        "text": "Cho $\\cos x=\\dfrac{4}{5}$, $x \\in \\left(-\\dfrac{\\pi}{2};0 \\right)$. Giá trị của $\\sin 2x$ là $-\\dfrac{24}{25}$",
        "answer": true
      },
      {
        "text": "Cho $\\dfrac{\\sin^4{\\alpha}}{a}+\\dfrac{\\cos^4{\\alpha}}{b}=\\dfrac{1}{a+b}$. Giá trị của biểu thức: $A=\\dfrac{\\sin^{8}\\alpha}{a^{3}} + \\dfrac{\\cos^{8}\\alpha}{b^{3}}=\\dfrac{1}{a^{3}+b^{3}}$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $\\sin 31^{\\circ} \\cdot \\cos 12^{\\circ} + \\cos 12^{\\circ} \\cdot \\sin 31^{\\circ}=2\\sin 31^{\\circ} \\cdot \\cos 12^{\\circ}$.<br>- Vì $x\\in\\left(-\\dfrac{\\pi}{2};0\\right)$ nên $\\cos x&gt;0$ và $\\sin x&lt;0$. <br>  Từ $\\cos x=\\dfrac{4}{5}\\Rightarrow \\sin x=-\\sqrt{1-\\cos^2 x}=-\\dfrac{3}{5}$.<br>  Suy ra $\\sin 2x=2\\sin x\\cos x=2\\cdot\\left(-\\dfrac{3}{5}\\right)\\cdot\\dfrac{4}{5}=-\\dfrac{24}{25}$.<br>- Thay $\\sin^2\\alpha = 1 - \\cos^2\\alpha$ vào đẳng thức $\\dfrac{\\sin^4\\alpha}{a}+\\dfrac{\\cos^4\\alpha}{b}=\\dfrac{1}{a+b}$, ta có: <br>  $\\dfrac{\\left(1-\\cos^2\\alpha\\right)^2}{a}+\\dfrac{\\cos^4\\alpha}{b}=\\dfrac{1}{a+b}$<br>$\\Leftrightarrow b(a+b) \\left(1-2\\cos^2\\alpha +\\cos^4\\alpha\\right)+a(a+b){\\cos^4\\alpha}=ab$<br>$\\Leftrightarrow (a+b)^2\\cos^4\\alpha - 2b(a+b)\\cos^2 \\alpha + b^{2} = 0$<br>$\\Leftrightarrow \\left[(a+b)\\cos^2\\alpha-b\\right]^2=0$<br>$\\Leftrightarrow \\cos^2\\alpha = \\dfrac{b}{a+b}.$  Từ đó suy ra $\\sin^2\\alpha = \\dfrac{a}{a+b}$.<br>  Do đó  $A=\\dfrac{\\sin^8\\alpha}{a^3}+\\dfrac{\\cos^8\\alpha}{b^3}=\\dfrac{\\left(\\dfrac{a}{a+b}\\right)^4}{a^3}+\\dfrac{\\left(\\dfrac{b}{a+b}\\right)^4}{b^3}=\\dfrac{1}{\\left(a+b\\right)^3}$."
  },
  {
    "id": "1D135DS7",
    "question": "Cho $\\sin a=\\dfrac{5}{13}$; $\\tan b=\\dfrac{3}{4}$, với $a$, $b$ là các góc nhọn.",
    "subQuestions": [
      {
        "text": "$\\cos a=\\dfrac{7}{13}$",
        "answer": false
      },
      {
        "text": "$\\sin 2 a=\\dfrac{110}{169}$",
        "answer": false
      },
      {
        "text": "$\\tan a=\\dfrac{5}{12}$",
        "answer": true
      },
      {
        "text": "$\\tan(a+b)=\\dfrac{56}{33}$",
        "answer": true
      }
    ],
    "explain": "<br>- Do $a$ là góc nhọn $\\Rightarrow \\cos a=\\sqrt{1-\\sin^2 a}=\\sqrt{1-\\left(\\dfrac{5}{13}\\right)^2}=\\dfrac{12}{13}$.<br>- $\\sin 2 a=2 \\sin a \\cos a=2 \\cdot \\dfrac{5}{13} \\cdot \\dfrac{12}{13}=\\dfrac{120}{169}$.<br>- $\\tan a= \\dfrac{\\sin a}{\\cos a}=\\dfrac{\\dfrac{5}{13}}{\\dfrac{12}{13}}=\\dfrac{5}{12}$.<br>- $\\tan a =\\dfrac{5}{12}, \\tan b=\\dfrac{3}{4} \\Rightarrow \\tan(a+b)=\\dfrac{56}{33}$."
  },
  {
    "id": "1D135DS8",
    "question": "Cho $\\cos \\alpha=\\dfrac{3}{4}$ với $\\dfrac{3\\pi}{2} &lt; \\alpha &lt; 2\\pi$.",
    "subQuestions": [
      {
        "text": "$\\cos(\\alpha+21\\pi)=-\\dfrac{3}{4}$",
        "answer": true
      },
      {
        "text": "$\\sin \\alpha=\\dfrac{\\sqrt{7}}{4}$",
        "answer": false
      },
      {
        "text": "$\\sin 2\\alpha=-\\dfrac{3\\sqrt{7}}{16}$",
        "answer": false
      },
      {
        "text": "Giá trị của biểu thức $M=\\tan\\left(\\alpha+\\dfrac{\\pi}{3}\\right)+\\dfrac{4\\sqrt{3}}{3}$ bằng $\\sqrt{7}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có  \\[\\cos(\\alpha+21\\pi)=\\cos (\\alpha+\\pi)=-\\cos \\alpha=-\\dfrac{3}{4}.\\]<br>- Với $\\dfrac{3\\pi}{2} &lt; \\alpha &lt; 2\\pi$, ta có $\\sin\\alpha&lt;0$.<br>  Do đó $\\sin \\alpha=-\\sqrt{1-\\cos^2\\alpha}=-\\sqrt{1-\\left(\\dfrac{3}{4}\\right)^2}=-\\dfrac{\\sqrt{7}}{4}$.<br>- Ta có $\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha=2\\cdot \\left(-\\dfrac{\\sqrt{7}}{4}\\right)\\cdot \\dfrac{3}{4}=-\\dfrac{3\\sqrt{7}}{8}$.<br>- Ta có $\\tan \\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha}=-\\dfrac{\\sqrt{7}}{4}:\\dfrac{3}{4}=-\\dfrac{\\sqrt{7}}{3}$.<br>  Áp dụng công thức cộng  \\[\\tan \\left(\\alpha+\\dfrac{\\pi}{3}\\right)=\\dfrac{\\tan\\alpha+\\tan \\dfrac{\\pi}{3}}{1-\\tan\\alpha\\tan \\dfrac{\\pi}{3}}=\\sqrt{7}-\\dfrac{4\\sqrt{3}}{3}.\\]  Do đó $M=\\tan\\left(\\alpha+\\dfrac{\\pi}{3}\\right)+\\dfrac{4\\sqrt{3}}{3}=\\sqrt{7}$."
  },
  {
    "id": "1D135DS9",
    "question": "Cho biết $\\sin \\alpha = \\dfrac{1}{3}$ và $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$.",
    "subQuestions": [
      {
        "text": "$\\sin 2\\alpha = \\dfrac{-4\\sqrt{2}}{3}$",
        "answer": false
      },
      {
        "text": "$\\cos \\alpha &gt; 0$",
        "answer": false
      },
      {
        "text": "$\\cos \\alpha = -\\dfrac{2\\sqrt{2}}{3}$",
        "answer": true
      },
      {
        "text": "$\\cos\\left(\\alpha + \\dfrac{\\pi}{3}\\right) = -\\dfrac{2\\sqrt{2}+\\sqrt{3}}{6}$",
        "answer": true
      }
    ],
    "explain": "Vì $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$ nên $\\cos \\alpha &lt; 0$. Suy ra $\\cos \\alpha = -\\sqrt{1 - \\sin^2 \\alpha} = -\\sqrt{1 - \\left(\\dfrac{1}{3}\\right)^2} = -\\dfrac{2\\sqrt{2}}{3}$.  <br>- <strong>Sai</strong>. $\\sin 2\\alpha = 2 \\sin \\alpha \\cos \\alpha = 2 \\cdot \\dfrac{1}{3} \\cdot \\left(-\\dfrac{2\\sqrt{2}}{3}\\right) = -\\dfrac{4\\sqrt{2}}{9}$.<br>- <strong>Sai</strong>. Vì $\\alpha$ thuộc góc phần tư thứ II nên $\\cos \\alpha &lt; 0$.<br>- <strong>Đúng</strong>. Ta có $\\cos \\alpha = -\\dfrac{4\\sqrt{2}}{9}$.<br>- <strong>Đúng</strong>. Ta có $\\cos\\left(\\alpha + \\dfrac{\\pi}{3}\\right) = \\cos \\alpha \\cos \\dfrac{\\pi}{3} - \\sin \\alpha \\sin \\dfrac{\\pi}{3} = \\left(-\\dfrac{2\\sqrt{2}}{3}\\right)\\cdot \\dfrac{1}{2} - \\dfrac{1}{3}\\cdot \\dfrac{\\sqrt{3}}{2} = \\dfrac{-2\\sqrt{2}-\\sqrt{3}}{6}.$"
  },
  {
    "id": "1D135DS10",
    "question": "Cho $\\sin \\alpha = -\\dfrac{4}{5}$ với $-\\pi &lt; \\alpha &lt; -\\dfrac{\\pi}{2}$.",
    "subQuestions": [
      {
        "text": "$\\cos \\alpha = -\\sqrt{1 - \\sin^2 \\alpha}$",
        "answer": true
      },
      {
        "text": "$\\cos \\alpha = -\\dfrac{3}{5}$",
        "answer": true
      },
      {
        "text": "$\\cos\\left(\\alpha + \\dfrac{\\pi}{3}\\right) = \\cos \\alpha \\cos \\dfrac{\\pi}{3} + \\sin \\alpha \\sin \\dfrac{\\pi}{3}$",
        "answer": false
      },
      {
        "text": "$\\cos\\left(\\alpha + \\dfrac{\\pi}{3}\\right) = \\dfrac{-3-4\\sqrt{3}}{10}$",
        "answer": false
      }
    ],
    "explain": "Vì $-\\pi &lt; \\alpha &lt; -\\dfrac{\\pi}{2}$ nên $\\cos \\alpha &lt; 0$ và $\\sin \\alpha &lt; 0$.<br>- Ta có $\\sin^2 \\alpha + \\cos^2 \\alpha = 1 \\Rightarrow \\cos^2 \\alpha = 1 - \\sin^2 \\alpha$.<br>  Vì $\\cos \\alpha &lt; 0$ suy ra $\\cos \\alpha = -\\sqrt{1 - \\sin^2 \\alpha}$.<br>- Theo ý trên, ta có $\\cos \\alpha = -\\sqrt{1 - \\left(-\\dfrac{4}{5}\\right)^2} =-\\dfrac{3}{5}$.<br>- Ta có $\\cos\\left(\\alpha + \\dfrac{\\pi}{3}\\right) = \\cos \\alpha \\cos \\dfrac{\\pi}{3} - \\sin \\alpha \\sin \\dfrac{\\pi}{3}$.<br>- Ta có  $\\cos\\left(\\alpha + \\dfrac{\\pi}{3}\\right) = \\cos \\alpha \\cos \\dfrac{\\pi}{3} - \\sin \\alpha \\sin \\dfrac{\\pi}{3}$<br>$= \\left(-\\dfrac{3}{5}\\right) \\cdot \\dfrac{1}{2} - \\left(-\\dfrac{4}{5}\\right) \\cdot \\dfrac{\\sqrt{3}}{2}$<br>$= \\dfrac{4\\sqrt{3}-3}{10}.$"
  },
  {
    "id": "1D135DS11",
    "question": "Cho biết $\\sin\\alpha=\\dfrac{1}{3}$ và $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$. Xét tính đúng sai của các khẳng định sau:",
    "subQuestions": [
      {
        "text": "$\\cos\\alpha &lt; 0$",
        "answer": true
      },
      {
        "text": "$\\cos\\alpha=-\\dfrac{2\\sqrt{2}}{3}$",
        "answer": true
      },
      {
        "text": "$\\sin 2\\alpha=-\\dfrac{4\\sqrt{2}}{3}$",
        "answer": false
      },
      {
        "text": "$\\cos\\left(\\alpha+\\dfrac{\\pi}{3}\\right)=-\\dfrac{2\\sqrt{2}+\\sqrt{3}}{6}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Vì $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$ nên $\\cos\\alpha&lt;0$.<br>- <strong>Đúng</strong>. Ta có $\\cos^2\\alpha=1-\\sin^2\\alpha=1-\\left(\\dfrac{1}{3}\\right)^2=\\dfrac{8}{9}$. <br>  Do $\\cos\\alpha&lt;0$ nên $\\cos\\alpha=-\\dfrac{2\\sqrt{2}}{3}$.<br>- <strong>Sai</strong>. Ta có $\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha=2\\cdot\\dfrac{1}{3}\\cdot\\left(-\\dfrac{2\\sqrt{2}}{3}\\right)=-\\dfrac{4\\sqrt{2}}{9}$.<br>- <strong>Đúng</strong>. $\\cos\\left(\\alpha+\\dfrac{\\pi}{3}\\right)=\\cos\\alpha\\cos\\dfrac{\\pi}{3}-\\sin\\alpha\\sin\\dfrac{\\pi}{3}=-\\dfrac{2\\sqrt{2}}{3}\\cdot\\dfrac{1}{2}-\\dfrac{1}{3}\\cdot\\dfrac{\\sqrt{3}}{2}=-\\dfrac{2\\sqrt{2}+\\sqrt{3}}{6}$."
  },
  {
    "id": "1D135DS12",
    "question": "Cho $\\sin a = \\dfrac{5}{13}$ và $\\tan b = \\dfrac{3}{4}$ với $a$, $b$ là các góc nhọn.",
    "subQuestions": [
      {
        "text": "$\\cos a =\\dfrac{7}{10}$",
        "answer": false
      },
      {
        "text": "$\\sin 2a = \\dfrac{110}{169}$",
        "answer": false
      },
      {
        "text": "$\\tan a = \\dfrac{5}{12}$",
        "answer": true
      },
      {
        "text": "$\\tan(a+b) = \\dfrac{56}{33}$",
        "answer": true
      }
    ],
    "explain": "<br>- Do $a$ là góc nhọn nên $\\cos a = \\sqrt{1-\\sin^2 a} = \\dfrac{12}{13}$.<br>- $\\sin 2a = 2\\sin a\\cos a = \\dfrac{120}{169}$.<br>- $\\tan a = \\dfrac{\\sin a}{\\cos a} = \\dfrac{5}{12}$.<br>- $\\tan(a+b) = \\dfrac{\\tan a + \\tan b}{1-\\tan a\\tan b} = \\dfrac{56}{33}$."
  },
  {
    "id": "1D135DS13",
    "question": "Cho hàm số lượng giác $f(x)=2\\sin x-\\sqrt{2}$, xét trên đoạn $[0;4\\pi]$.",
    "subQuestions": [
      {
        "text": "Số nghiệm của phương trình $f(x)=0$ trong đoạn $[0;4\\pi]$ bằng $5$",
        "answer": false
      },
      {
        "text": "Hàm số đã cho là hàm số lẻ",
        "answer": false
      },
      {
        "text": "Phương trình $f(x)+\\sqrt{2}=0$ có nghiệm là $x=\\dfrac{\\pi}{2}+k2\\pi, k\\in\\mathbb{Z}$",
        "answer": false
      },
      {
        "text": "Cho $f(x)=0$ khi đó $\\cos^2x=\\dfrac{1}{2}$",
        "answer": true
      }
    ],
    "explain": "<br>- Xét phương trình $f(x)=0\\Leftrightarrow 2\\sin x-\\sqrt{2}=0\\Leftrightarrow\\sin x=\\dfrac{\\sqrt{2}}{2}$.  <br>  Trong đoạn $[0; 2\\pi]$, phương trình có $2$ nghiệm là $x=\\dfrac{\\pi}{4}$ và $x=\\dfrac{3\\pi}{4}$.  <br>  Do tính tuần hoàn với chu kỳ $2\\pi$, trong đoạn $[2\\pi; 4\\pi]$ phương trình cũng có $2$ nghiệm.  <br>  Vậy tổng số nghiệm trong đoạn $[0; 4\\pi]$ là $2+2=4$ nghiệm.<br>- Tập xác định $D=\\mathbb{R}$ là tập đối xứng.  <br>  Ta có $f(-x)=2\\sin(-x)-\\sqrt{2}=-2\\sin x-\\sqrt{2}\\neq-f(x)$ và $f(-x)\\neq f(x)$.  <br>  Vậy hàm số không chẵn, không lẻ.<br>- Xét $f(x)+\\sqrt{2}=0\\Leftrightarrow 2\\sin x=0\\Leftrightarrow\\sin x=0\\Leftrightarrow x=k\\pi$, $(k\\in\\mathbb{Z})$.<br>- Khi $f(x)=0\\Rightarrow\\sin x=\\dfrac{\\sqrt{2}}{2}\\Rightarrow\\sin^2x=\\dfrac{1}{2}$.  <br>  Ta có $\\cos^2x=1-\\sin^2x=1-\\dfrac{1}{2}=\\dfrac{1}{2}$."
  },
  {
    "id": "1D135DS14",
    "question": "Cho $\\sin x=\\dfrac{1}{3}$, $\\left(\\dfrac{\\pi}{2} &lt; x &lt; \\pi\\right)$. Khi đó",
    "subQuestions": [
      {
        "text": "$\\cos x &lt; 0$",
        "answer": true
      },
      {
        "text": "$\\cos x=-\\dfrac{2\\sqrt{2}}{3}$",
        "answer": true
      },
      {
        "text": "$\\cos 2x=-\\dfrac{7}{9}$",
        "answer": false
      },
      {
        "text": "$\\sin \\left(x-\\dfrac{\\pi}{3}\\right)=\\dfrac{1+2\\sqrt{6}}{6}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\dfrac{\\pi}{2} &lt; x &lt; \\pi$ suy ra $\\cos x&lt;0$; $\\tan x&lt;0$ và $\\cot x&lt;0$.<br>- Ta có $\\dfrac{\\pi}{2} &lt; x &lt; \\pi$ suy ra $\\cos x&lt;0$.<br>  Do đó $\\cos x=-\\sqrt{1-\\sin^2x}=-\\sqrt{1-\\left(\\dfrac{1}{2}\\right)^2}=-\\dfrac{2\\sqrt{2}}{3}$.<br>- Ta có $\\cos 2x=1-2\\sin^2x=1-2\\cdot\\left(\\dfrac{1}{3}\\right)^2=\\dfrac{7}{9}$.<br>- Ta có   $\\sin \\left(x-\\dfrac{\\pi}{3}\\right) = \\sin x\\cos\\dfrac{\\pi}{3}-\\cos x\\sin\\dfrac{\\pi}{3}$<br>$= \\dfrac{1}{3}\\cdot\\dfrac{1}{2}+\\dfrac{2\\sqrt{2}}{3}\\cdot\\dfrac{\\sqrt{3}}{2}$<br>$= \\dfrac{1+2\\sqrt{6}}{6}.$"
  },
  {
    "id": "1D135DS15",
    "question": "Cho hàm số $y=\\cos x-\\dfrac{\\sqrt3}{2}$.",
    "subQuestions": [
      {
        "text": "Hàm số đã cho có tập xác định $\\mathscr D=\\mathbb{R}\\setminus\\left\\{\\dfrac{\\sqrt3}{2}\\right\\}$",
        "answer": false
      },
      {
        "text": "Hàm số đã cho là hàm số tuần hoàn với chu kì $2\\pi$",
        "answer": true
      },
      {
        "text": "Phương trình $\\cos x-\\dfrac{\\sqrt3}{2}=0$ tương đương với phương trình $\\cos x=\\cos\\dfrac{\\pi}{6}$",
        "answer": true
      },
      {
        "text": "$\\cos x-\\dfrac{\\sqrt3}{2}=\\cos x-\\cos\\dfrac{\\pi}{6}  =2\\sin\\dfrac{x+\\dfrac{\\pi}{6}}{2}\\sin\\dfrac{x-\\dfrac{\\pi}{6}}{2}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Hàm số $y=\\cos x-\\dfrac{\\sqrt3}{2}$ xác định với mọi $x\\in\\mathbb R$ nên tập xác định là $\\mathbb R$.<br>- <strong>Đúng</strong>. Vì hàm số $y=\\cos x$ là hàm tuần hoàn chu kì $2\\pi$ nên $y=\\cos x-\\dfrac{\\sqrt3}{2}$ cũng có chu kì $2\\pi$.<br>- <strong>Đúng</strong>. Ta có $\\cos x-\\dfrac{\\sqrt3}{2}=0 \\Leftrightarrow \\cos x=\\dfrac{\\sqrt3}{2}=\\cos\\dfrac{\\pi}{6}$.<br>- <strong>Sai</strong>. Công thức đúng là  \\[  \\cos x-\\cos\\dfrac{\\pi}{6}  =-2\\sin\\dfrac{x+\\dfrac{\\pi}{6}}{2}\\sin\\dfrac{x-\\dfrac{\\pi}{6}}{2}.  \\]"
  },
  {
    "id": "1D135DS16",
    "question": "Biết $\\sin a = \\dfrac{4}{5}$ với $\\dfrac{\\pi}{2} &lt; a &lt; \\pi$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$\\sin \\left( \\dfrac{\\pi}{2} - a \\right) &lt; 0$",
        "answer": true
      },
      {
        "text": "$\\cos a = \\dfrac{3}{5}$",
        "answer": false
      },
      {
        "text": "$\\sin 2a = -\\dfrac{24}{25}$",
        "answer": false
      },
      {
        "text": "$\\cos \\left( a + \\dfrac{\\pi}{6} \\right) = -\\dfrac{4-3\\sqrt{3}}{10}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta có $\\dfrac{\\pi}{2} &lt; a &lt; \\pi$ suy ra $-\\dfrac{\\pi}{2} &lt; \\dfrac{\\pi}{2} - a &lt; 0$ hay $\\sin \\left( \\dfrac{\\pi}{2} - a \\right) &lt; 0$.<br>- <strong>Sai</strong>. Ta có $\\cos ^2 a =1-\\sin ^2 a =\\dfrac{9}{25}$, suy ra $\\cos a =\\pm \\dfrac{3}{5}$.<br>  Mà $\\dfrac{\\pi}{2} &lt; a &lt; \\pi$ nên $\\cos a = -\\dfrac{3}{5}$.<br>- <strong>Sai</strong>. Ta có $\\sin 2a=2 \\sin a\\cos a=2\\cdot \\dfrac{4}{5} \\cdot \\left(-\\dfrac{3}{5}\\right)=-\\dfrac{24}{25}$.<br>- <strong>Sai</strong>. Ta có $\\cos \\left( a + \\dfrac{\\pi}{6} \\right)=\\cos a\\cos \\dfrac{\\pi}{6}-\\sin a\\sin \\dfrac{\\pi}{6}=-\\dfrac{3}{5}\\cdot \\dfrac{\\sqrt{3}}{2}-\\dfrac{4}{5}\\cdot \\dfrac{1}{2} = -\\dfrac{4+3\\sqrt{3}}{10}$."
  }
];
