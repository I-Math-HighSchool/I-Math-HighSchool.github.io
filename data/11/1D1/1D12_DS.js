// =========================================================================
// KHỐI DỮ LIỆU: 1D12 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 5), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D12 = [
  {
    "id": "1D122DS1",
    "question": "Cho biết $\\sin \\alpha = \\dfrac{3}{5}$, $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$.",
    "subQuestions": [
      {
        "text": "$\\cos\\alpha &gt; 0$",
        "answer": false
      },
      {
        "text": "$\\cos\\alpha = -\\dfrac{4}{5}$",
        "answer": true
      },
      {
        "text": "$\\tan\\alpha = \\dfrac{3}{4}$",
        "answer": false
      },
      {
        "text": "$\\sin2\\alpha = -\\dfrac{24}{25}$",
        "answer": true
      }
    ],
    "explain": "<br>- Vì $\\alpha$ thuộc góc phần tư thứ II nên $\\cos\\alpha &lt; 0$.<br>- Ta có $\\cos\\alpha = -\\sqrt{1-\\sin^2\\alpha} = -\\sqrt{1-\\left(\\dfrac{3}{4}\\right)^2} = -\\dfrac{4}{5}$.<br>- Ta có $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} = -\\dfrac{3}{4}$.<br>- Ta có $\\sin2\\alpha = 2\\sin\\alpha\\cos\\alpha = 2\\cdot\\dfrac{3}{5}\\cdot\\left(-\\dfrac{4}{5}\\right) = -\\dfrac{24}{25}$."
  },
  {
    "id": "1D124DS2",
    "question": "Cho biểu thức $H=\\dfrac{\\sin (x-2024\\pi)+\\cos \\left(\\dfrac{\\pi}{2}-x\\right)}{\\sin (\\pi-x)+\\sin (\\pi+x)-2}$.",
    "subQuestions": [
      {
        "text": "$\\sin (\\pi-x)=\\sin x$",
        "answer": true
      },
      {
        "text": "$\\cos \\left(\\dfrac{\\pi}{2}-x\\right)=\\sin x$",
        "answer": true
      },
      {
        "text": "$\\sin (x-2024\\pi)=-\\sin x$",
        "answer": false
      },
      {
        "text": "Rút gọn biểu thức $H=0$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $\\sin (\\pi-x)=\\sin x$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $\\cos \\left(\\dfrac{\\pi}{2}-x\\right)=\\sin x$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Ta có $\\sin (x-2024\\pi)=\\sin x$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  $H=\\dfrac{\\sin (x-2024\\pi)+\\cos \\left(\\dfrac{\\pi}{2}-x\\right)}{\\sin (\\pi-x)+\\sin (\\pi+x)-2}=\\dfrac{\\sin x+\\sin x}{\\sin x-\\sin x-2}=-\\sin x$."
  },
  {
    "id": "1D122DS3",
    "question": "Cho $\\cos \\alpha = -\\dfrac{3}{4}$, với $\\alpha \\in \\left(\\dfrac{\\pi}{2};\\pi\\right)$. Khi đó",
    "subQuestions": [
      {
        "text": "$\\cos 2 \\alpha = 2 \\cos \\alpha = -\\dfrac{3}{2}$",
        "answer": false
      },
      {
        "text": "$\\sin \\alpha = \\pm \\dfrac{\\sqrt{7}}{4}$",
        "answer": false
      },
      {
        "text": "$\\sin \\alpha &gt;0$",
        "answer": true
      },
      {
        "text": "$\\tan   \\alpha = - \\dfrac{\\sqrt{7}}{3}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\cos 2 \\alpha = 2 \\cos^2 \\alpha -1=2 \\cdot \\left(-\\dfrac{3}{4}\\right)^2-1=\\dfrac{1}{8}$.<br>- Ta có $\\sin^2 \\alpha +\\cos ^2 \\alpha =1 \\Rightarrow \\sin^2 \\alpha = 1-\\cos^2 \\alpha =1 - \\left(-\\dfrac{3}{4}\\right)^2=\\dfrac{7}{16}$.<br>  Mà $\\alpha \\in \\left(\\dfrac{\\pi}{2};\\pi\\right)$ nên $\\sin \\alpha &gt;0$.<br>  Do đó $\\sin \\alpha = \\sqrt{\\dfrac{7}{16}} =\\dfrac{\\sqrt{7}}{4}$.<br>- Vì $\\alpha \\in \\left(\\dfrac{\\pi}{2};\\pi\\right)$ nên $\\sin \\alpha &gt;0$.<br>- Ta có $\\tan \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha} = \\left(\\dfrac{\\sqrt{7}}{4}\\right) : \\dfrac{-3}{4} = -\\dfrac{\\sqrt{7}}{3}$."
  },
  {
    "id": "1D122DS4",
    "question": "Cho biết $\\sin \\alpha = \\dfrac{1}{3}$ và $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$. Xét tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "$\\cos 2\\alpha &lt; 0$",
        "answer": false
      },
      {
        "text": "$\\sin 2\\alpha = -\\dfrac{4\\sqrt{2}}{9}$",
        "answer": true
      },
      {
        "text": "$\\tan \\alpha &gt; 0$",
        "answer": false
      },
      {
        "text": "$\\cos \\alpha = -\\dfrac{2\\sqrt{2}}{3}$",
        "answer": true
      }
    ],
    "explain": "Ta có $\\cos\\alpha=1-\\sin^2\\alpha=1-\\dfrac{1}{9}=\\dfrac{8}{9}\\Rightarrow\\cos\\alpha=-\\dfrac{2\\sqrt{2}}{3}$ (vì $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$)  <br>- &lt;strong&gt;Sai&lt;/strong&gt;. $\\cos2\\alpha=1-2\\sin^2\\alpha=1-\\dfrac{2}{9}=\\dfrac{7}{9}&gt;0$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. $\\sin 2\\alpha =2\\sin \\alpha\\cdot\\cos\\alpha=2\\cdot\\dfrac{1}{3}\\cdot\\dfrac{-2\\sqrt{2}}{3}= -\\dfrac{4\\sqrt{2}}{9}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. $\\tan \\alpha =\\dfrac{\\sin\\alpha}{\\cos\\alpha}=\\dfrac{\\tfrac{1}{3}}{\\tfrac{-2\\sqrt{2}}{3}}=-\\dfrac{\\sqrt{2}}{4}&lt;0$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\cos \\alpha = -\\dfrac{2\\sqrt{2}}{3}$."
  },
  {
    "id": "1D122DS5",
    "question": "Cho góc $\\alpha$ thỏa mãn $\\sin\\alpha =\\dfrac{3}{5}$ và $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$, khi đó",
    "subQuestions": [
      {
        "text": "$\\sin 2\\alpha=-\\dfrac{12}{25}$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất $y=\\sin (x+\\alpha)$ là $1$",
        "answer": true
      },
      {
        "text": "$\\sin \\left(\\alpha + \\dfrac{121\\pi}{12}\\right)\\cdot\\cos \\left(\\alpha - \\dfrac{\\pi}{12}\\right)=-\\dfrac{23}{100}$",
        "answer": true
      },
      {
        "text": "$\\cos \\alpha &gt; 0$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có  $\\sin^2 \\alpha + \\cos^2 \\alpha =1$<br>$\\Leftrightarrow \\cos^2 \\alpha = 1 - \\sin^2 \\alpha$<br>$\\Leftrightarrow \\cos^2 \\alpha = 1 - \\left(\\dfrac{3}{5}\\right)^2$<br>$\\Leftrightarrow \\cos^2 \\alpha = \\dfrac{16}{25}.$  Do $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$ nên $\\cos \\alpha &lt; 0 \\Rightarrow \\cos \\alpha = -\\dfrac{4}{5}$. Khi đó $\\sin 2\\alpha = 2\\sin \\alpha \\cos \\alpha = 2\\cdot\\dfrac{3}{5}\\cdot\\left(-\\dfrac{4}{5}\\right) = -\\dfrac{24}{25}.$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\sin (x+\\alpha) \\le 1, \\forall x \\in \\mathbb{R}$. Do đó giá trị lớn nhất của $y=\\sin (x+\\alpha)$ là $1$ khi $x = \\dfrac{\\pi}{2} - \\alpha$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có   $\\sin \\left(\\alpha + \\dfrac{121\\pi}{12}\\right)\\cdot\\cos \\left(\\alpha - \\dfrac{\\pi}{12}\\right) =\\dfrac{1}{2}\\left[\\sin \\left(\\alpha + \\dfrac{121\\pi}{12}+\\alpha -\\dfrac{\\pi}{12}\\right)+\\sin \\left(\\alpha + \\dfrac{121\\pi}{12}-\\alpha +\\dfrac{\\pi}{12}\\right)\\right]$<br>$=\\dfrac{1}{2}\\left[\\sin(2\\alpha+10\\pi)+\\sin \\left(\\dfrac{122\\pi}{12}\\right)\\right]$<br>$=\\dfrac{1}{2}\\left[\\sin 2\\alpha+\\dfrac{1}{2}\\right]$<br>$=-\\dfrac{23}{100}.$<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Do $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$ nên $\\cos \\alpha &lt; 0$."
  },
  {
    "id": "1D122DS6",
    "question": "Cho góc $\\alpha$ thỏa mãn $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$ và $\\sin \\alpha = \\dfrac{3}{5}$.",
    "subQuestions": [
      {
        "text": "$\\cot \\alpha &gt; 0$",
        "answer": false
      },
      {
        "text": "$\\cos \\alpha = \\dfrac{4}{5}$",
        "answer": false
      },
      {
        "text": "$\\tan \\left( \\dfrac{\\pi}{2} - \\alpha \\right) + \\sin (\\pi - \\alpha) = -\\dfrac{11}{15}$",
        "answer": true
      },
      {
        "text": "$\\dfrac{5\\cos \\alpha + \\sin \\alpha}{\\cos^3 \\alpha - 2\\sin^2 \\alpha + \\cos \\alpha} = \\dfrac{425}{126}$",
        "answer": true
      }
    ],
    "explain": "<br>- Vì $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$ nên $\\cos \\alpha &lt; 0$, $\\sin \\alpha &gt; 0$. Do đó $\\cot \\alpha = \\dfrac{\\cos \\alpha}{\\sin \\alpha} &lt; 0$.<br>- Ta có $\\cos^2 \\alpha = 1 - \\sin^2 \\alpha = 1 - \\left(\\dfrac{3}{5}\\right)^2 = \\dfrac{16}{25}$.<br>  Vì $\\cos \\alpha &lt; 0$ nên $\\cos \\alpha =-\\sqrt{\\dfrac{16}{25}} =-\\dfrac{4}{5}$.<br>- Ta có $\\cot \\alpha=\\dfrac{\\cos\\alpha}{\\sin\\alpha}=\\dfrac{-\\dfrac{4}{5}}{\\dfrac{3}{5}}=-\\dfrac{4}{3}$.<br>  $\\tan \\left( \\dfrac{\\pi}{2} - \\alpha \\right) + \\sin (\\pi - \\alpha) = \\cot \\alpha + \\sin \\alpha = -\\dfrac{4}{3}+\\dfrac{3}{5}=-\\dfrac{11}{15}$.<br>- Ta có $\\tan\\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha}=\\dfrac{\\dfrac{3}{5}}{-\\dfrac{4}{5}}=-\\dfrac{3}{4}$.<br>  Chia cả tử và mẫu của biểu thức cho $\\cos^3 \\alpha$, ta có   $P = \\dfrac{\\dfrac{5\\cos \\alpha + \\sin \\alpha}{\\cos^3 \\alpha}}{\\dfrac{\\cos^3 \\alpha - 2\\sin^2 \\alpha + \\cos \\alpha}{\\cos^3 \\alpha}} = \\dfrac{\\dfrac{5}{\\cos^2 \\alpha} + \\dfrac{\\tan \\alpha}{\\cos^2 \\alpha}}{1 - \\dfrac{2\\tan^2 \\alpha}{\\cos \\alpha} + \\dfrac{1}{\\cos^2 \\alpha}}$<br>$= \\dfrac{5(1 + \\tan^2 \\alpha) + \\tan \\alpha(1 + \\tan^2 \\alpha)}{1 - \\dfrac{2\\tan^2 \\alpha}{\\cos \\alpha} + (1 + \\tan^2 \\alpha)}   =\\dfrac{(5 + \\tan \\alpha)(1 + \\tan^2 \\alpha)}{2 + \\tan^2 \\alpha - \\dfrac{2\\tan^2 \\alpha}{\\cos \\alpha}}$<br>$= \\dfrac{\\left( 5 - \\dfrac{3}{4} \\right) \\cdot \\left( 1 + \\dfrac{9}{16} \\right)}{2 + \\dfrac{9}{16} - \\dfrac{2 \\cdot \\dfrac{9}{16}}{-\\dfrac{4}{5}}}= \\dfrac{425}{254}.$"
  },
  {
    "id": "1D122DS7",
    "question": "Cho biết $\\sin\\alpha=-\\dfrac{12}{13},(\\dfrac{3\\pi}{2}&lt;\\alpha &lt;2\\pi)$.",
    "subQuestions": [
      {
        "text": "$\\cos\\alpha &gt;0$",
        "answer": true
      },
      {
        "text": "$\\cos\\alpha=\\dfrac{5}{13}$",
        "answer": true
      },
      {
        "text": "$\\tan\\alpha=\\dfrac{12}{5}$",
        "answer": false
      },
      {
        "text": "$\\cos\\left(\\dfrac{\\pi}{3}-\\alpha\\right)=\\dfrac{5-\\sqrt{3}}{26}$",
        "answer": false
      }
    ],
    "explain": "<br>- Vì $\\dfrac{3\\pi}{2} &lt; \\alpha &lt; 2\\pi$ nên $\\alpha$ thuộc cung phần tư thứ IV, do đó $\\cos\\alpha &gt; 0$.<br>- Ta có $\\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - \\left(-\\dfrac{12}{13}\\right)^2 = \\dfrac{25}{169} \\Rightarrow \\cos\\alpha = \\pm\\dfrac{5}{13}$.<br>  Vì $\\cos\\alpha &gt; 0$ nên $\\cos\\alpha = \\dfrac{5}{13}$.<br>- $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} = \\dfrac{-\\dfrac{12}{13}}{\\dfrac{5}{13}} = -\\dfrac{12}{5}$.<br>- $\\cos\\left(\\dfrac{\\pi}{3}-\\alpha\\right) = \\cos\\dfrac{\\pi}{3}\\cos\\alpha + \\sin\\dfrac{\\pi}{3}\\sin\\alpha = \\dfrac{1}{2} \\cdot \\dfrac{5}{13} + \\dfrac{\\sqrt{3}}{2} \\cdot \\left(-\\dfrac{12}{13}\\right) = \\dfrac{5-12\\sqrt{3}}{26}$."
  },
  {
    "id": "1D122DS8",
    "question": "Cho $\\cos x=-\\dfrac{3}{5}$, với $\\dfrac{\\pi}{2}&lt;x&lt;\\pi$. Khi đó:",
    "subQuestions": [
      {
        "text": "$\\cot x=-\\dfrac{4}{3}$",
        "answer": false
      },
      {
        "text": "$\\tan x=-\\dfrac{3}{4}$",
        "answer": false
      },
      {
        "text": "$\\sin x=-\\dfrac{4}{5}$",
        "answer": false
      },
      {
        "text": "$\\sin x&gt;0$",
        "answer": true
      }
    ],
    "explain": "Ta có $\\sin^2 x=1-\\cos^2 x=1-\\left(-\\dfrac{3}{5}\\right)^2=\\dfrac{16}{25}$.<br>  Vì $\\dfrac{\\pi}{2}&lt;x&lt;\\pi$ nên $\\sin x=\\dfrac{4}{5}$.   <br>- <strong>Sai</strong>. Vì $\\cot x=\\dfrac{\\cos x}{\\sin x}=-\\dfrac{3}{4}$.<br>- <strong>Sai</strong>. Vì $\\tan x=\\dfrac{\\sin x}{\\cos x}=-\\dfrac{4}{3}$.<br>- <strong>Sai</strong>. Vì $\\sin x=\\dfrac{4}{5}$.<br>- <strong>Đúng</strong>. Vì $\\dfrac{\\pi}{2}&lt;x&lt;\\pi$ nên $\\sin x&gt;0$."
  },
  {
    "id": "1D124DS1",
    "question": "Cho góc lượng giác $\\alpha$ thỏa mãn $\\tan \\alpha=3$.",
    "subQuestions": [
      {
        "text": "$\\cot \\alpha=\\dfrac{1}{3}$",
        "answer": true
      },
      {
        "text": "$\\tan (\\alpha+3\\pi)=3+3\\pi$",
        "answer": false
      },
      {
        "text": "$\\tan (-\\alpha)=-3$",
        "answer": true
      },
      {
        "text": "$\\cot 2\\alpha=-\\dfrac{4}{3}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\cot \\alpha=\\dfrac{1}{\\tan\\alpha}=\\dfrac{1}{3}$.<br>- Ta có $\\tan (\\alpha+3\\pi)=\\tan\\alpha$.<br>- Ta có $\\tan (-\\alpha)=-\\tan\\alpha=-3$.<br>- Ta có $\\cot 2\\alpha=\\dfrac{1}{\\tan2\\alpha}=\\dfrac{1-\\tan^2\\alpha}{2\\tan\\alpha}=\\dfrac{1-3^2}{2\\cdot 3}=-\\dfrac{4}{3}$"
  }
];
