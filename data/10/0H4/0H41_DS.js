// =========================================================================
// KHỐI DỮ LIỆU: §1. Giá trị lượng giác của một góc từ 0° đến 180° - Đúng sai
// Nguồn: SachBaiHoc_T10/Data-T10/HH10-CD1.4-DS.tex (chuyển từ LaTeX)
// Hình vẽ (bảng biến thiên, đồ thị, bảng số liệu...) đã được biên dịch sẵn
// bằng LaTeX/TikZ thành ảnh PNG tĩnh (không phụ thuộc TikzJax).
// =========================================================================
window.dungSai0H41 = [
  {
    "id": "0H412DS1",
    "question": "Cho góc $\\alpha = \\widehat{xOM}$ với điểm $M(x_0;y_0)$ trên nửa đường tròn đơn vị. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$\\sin \\alpha = x_0;\\cos\\alpha =y _0$",
        "answer": false
      },
      {
        "text": "Nếu $x_0&lt;0$ thì $0^\\circ&lt;\\alpha&lt;90^\\circ$",
        "answer": false
      },
      {
        "text": "Nếu $x_0=\\dfrac{1}{3};y_0=\\dfrac{2\\sqrt{2}}{3}$ thì $\\cot \\alpha = \\dfrac{1}{2\\sqrt{2}}$",
        "answer": true
      },
      {
        "text": "Nếu $x_0=-\\dfrac{1}{3};y_0=\\dfrac{2\\sqrt{2}}{3}$ thì $\\dfrac{\\tan\\alpha-\\cot\\alpha}{\\tan\\alpha+\\cot\\alpha} = \\dfrac{7}{9}$",
        "answer": true
      }
    ],
    "explain": "<br>- Khẳng định <strong>sai</strong> vì điểm $M(x_0;y_0)$ trên nửa đường tròn đơn vị thì $\\sin \\alpha = y_0;\\cos\\alpha =x_0$.<br>- Khẳng định <strong>sai</strong> vì $x_0&lt;0$ thì $90^\\circ &lt; \\alpha \\leq 180^\\circ$.<br>- Khẳng định <strong>đúng</strong> vì điểm $M\\left(\\dfrac{1}{3};\\dfrac{2\\sqrt{2}}{3}\\right)$ trên nửa đường tròn đơn vị thì $\\cos \\alpha = \\dfrac{1}{3};\\sin\\alpha = \\dfrac{2\\sqrt{2}}{3} \\Rightarrow \\cot\\alpha = \\dfrac{\\cos\\alpha}{\\sin\\alpha} = \\dfrac{1}{2\\sqrt{2}}$.<br>- Khẳng định <strong>đúng</strong> vì $\\cos \\alpha = -\\dfrac{1}{3};\\sin\\alpha = \\dfrac{2\\sqrt{2}}{3} \\Rightarrow \\cot\\alpha = -\\dfrac{1}{2\\sqrt{2}};\\tan\\alpha=-2\\sqrt{2}$ nên $\\dfrac{\\tan\\alpha-\\cot\\alpha}{\\tan\\alpha+\\cot\\alpha} =\\dfrac{-2\\sqrt{2}+\\dfrac{1}{2\\sqrt{2}}}{-2\\sqrt{2}-\\dfrac{1}{2\\sqrt{2}}}= \\dfrac{7}{9}$."
  },
  {
    "id": "0H413DS2",
    "question": "Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Hai góc $\\alpha$ và $180^\\circ-\\alpha$ gọi là hai góc bù nhau",
        "answer": true
      },
      {
        "text": "Nếu $\\alpha$ và $\\beta$ là hai góc hai góc bù nhau thì $\\sin\\alpha=\\sin\\beta$",
        "answer": true
      },
      {
        "text": "Nếu $\\alpha$ và $\\beta$ là hai góc hai góc phụ nhau thì $\\cos\\alpha=\\cos\\beta$",
        "answer": false
      },
      {
        "text": "Nếu $\\alpha$ và $\\beta$ là hai góc hai góc phụ nhau thì $P=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta = 1$",
        "answer": true
      }
    ],
    "explain": "<br>- Hai góc $\\alpha$ và $180^\\circ-\\alpha$ gọi là hai góc bù nhau.<br>- Nếu $\\alpha$ và $\\beta$ là hai góc hai góc bù nhau thì $\\sin\\alpha=\\sin\\beta$.<br>- Nếu $\\alpha$ và $\\beta$ là hai góc hai góc phụ nhau thì $\\cos\\alpha=\\sin\\beta$.<br>- Nếu $\\alpha$ và $\\beta$ là hai góc hai góc phụ nhau thì $\\cos\\alpha=\\sin\\beta$; $\\sin\\alpha=\\cos\\beta$ nên $P=\\sin^2\\alpha+\\cos^2\\alpha = 1$."
  },
  {
    "id": "0H412DS3",
    "question": "Cho $\\sin\\alpha = \\dfrac{1}{3}$ với $90^\\circ &lt; \\alpha &lt; 180^\\circ$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Điểm $M$ trên nửa đường tròn đơn vị phía trên trục $Ox$ sao cho $\\widehat{xOM} = \\alpha$ có tung độ bằng $\\dfrac{1}{3}$",
        "answer": true
      },
      {
        "text": "Giá trị $\\cos\\alpha = \\dfrac{2\\sqrt{2}}{3}$",
        "answer": false
      },
      {
        "text": "Giá trị $\\cot \\alpha = -2\\sqrt{2}$",
        "answer": true
      },
      {
        "text": "Giá trị $\\dfrac{\\tan\\alpha+3\\cot\\alpha}{\\tan\\alpha+\\cot\\alpha}=\\dfrac{25}{9}$",
        "answer": true
      }
    ],
    "explain": "<br>- Theo lý thuyết ta có $\\sin\\alpha=y_M = \\dfrac{1}{3}$.<br>- Vì $90^\\circ&lt;\\alpha&lt;180^\\circ$ nên $\\cos\\alpha=-\\sqrt{1-\\sin^2 \\alpha}=-\\dfrac{2\\sqrt{2}}{3}$.<br>- Vì $90^\\circ&lt;\\alpha&lt;180^\\circ$ nên $\\cot \\alpha &lt; 0\\Rightarrow \\cot \\alpha = - \\sqrt{\\dfrac{1}{\\sin^2 \\alpha}-1}=-2\\sqrt{2}$.<br>- Ta có $\\tan\\alpha=\\dfrac{1}{\\cot \\alpha} = -\\dfrac{1}{2\\sqrt{2}}$.<br>  Suy ra $\\dfrac{\\tan\\alpha+3\\cot\\alpha}{\\tan\\alpha+\\cot\\alpha}=\\dfrac{25}{9}$."
  },
  {
    "id": "0H412DS4",
    "question": "Cho $\\tan\\alpha=\\dfrac{1}{2}$ với $0&lt;\\alpha&lt;\\dfrac{\\pi}{2}$. Các mệnh đề sau đây đúng hay sai?",
    "subQuestions": [
      {
        "text": "$\\sin\\left(180^\\circ - \\alpha\\right)&lt;0$",
        "answer": false
      },
      {
        "text": "Giá trị $\\cos\\left(180^\\circ-\\alpha\\right) = \\dfrac{2}{\\sqrt{5}}$",
        "answer": false
      },
      {
        "text": "Giá trị $\\cot^2\\alpha = 2$",
        "answer": false
      },
      {
        "text": "Giá trị $\\dfrac{\\sin\\alpha+3\\cos\\alpha}{\\sin\\alpha-\\cos\\alpha}=7$",
        "answer": false
      }
    ],
    "explain": "<br>- $0&lt;\\alpha&lt;\\dfrac{\\pi}{2}$ thì $\\sin\\alpha&gt;0$, ta có $\\sin\\left(180^\\circ-\\alpha\\right)=\\sin\\alpha&gt;0$.<br>- Vì $0&lt;\\alpha&lt;\\dfrac{\\pi}{2}$ nên $\\cos\\alpha&gt;0$.<br>  Giá trị $\\cos\\left(180^\\circ-\\alpha\\right)=-\\cos\\alpha=-\\dfrac{1}{\\sqrt{1+\\tan^{2}\\alpha}}=-\\dfrac{2}{\\sqrt{5}}$.<br>- $\\cot\\alpha=\\dfrac{1}{\\tan\\alpha}=2$ nên $\\cot^{2}\\alpha=4$ .<br>- Do $\\cos\\alpha\\ne 0$ nên $\\dfrac{\\sin\\alpha+3\\cos\\alpha}{\\sin\\alpha-\\cos\\alpha} = \\dfrac{\\dfrac{\\sin\\alpha}{\\cos\\alpha}+3}{\\dfrac{\\sin\\alpha}{\\cos\\alpha}-1}=\\dfrac{\\tan \\alpha + 3}{\\tan\\alpha-1} = -7$."
  },
  {
    "id": "0H412DS5",
    "question": "Cho $\\sin\\alpha=\\dfrac{1}{3}$ với $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Giá trị $\\cos\\left(90^\\circ-\\alpha\\right)&lt;0$",
        "answer": false
      },
      {
        "text": "$\\cos\\alpha=-\\dfrac{2\\sqrt{2}}{3}$",
        "answer": true
      },
      {
        "text": "Giá trị $\\cot^{2}\\alpha=8$",
        "answer": true
      },
      {
        "text": "Giá trị $\\dfrac{5\\tan\\alpha+\\cot\\alpha}{\\tan\\alpha+\\cot\\alpha}=4$",
        "answer": false
      }
    ],
    "explain": "<br>- $\\cos\\left(90^\\circ-\\alpha\\right)=\\sin\\alpha=\\dfrac{1}{3}&gt;0$.<br>- $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$ nên $\\cos\\alpha&lt;0$. Do đó $\\cos\\alpha=-\\sqrt{1-\\sin^{2}\\alpha}=\\sqrt{1-\\left(\\dfrac{1}{3}\\right)^{2}}=-\\dfrac{2\\sqrt{2}}{3}$.<br>- $\\cot^{2}\\alpha=\\dfrac{1}{\\sin^{2}\\alpha}-1=\\dfrac{1}{\\left(\\dfrac{1}{3}\\right)^{2}}-1=8$.<br>- $\\dfrac{5\\tan\\alpha+\\cot\\alpha}{\\tan\\alpha+\\cot\\alpha}=\\dfrac{\\dfrac{5}{\\cot\\alpha}+\\cot\\alpha}{\\dfrac{1}{\\cot\\alpha}+\\cot\\alpha}=\\dfrac{5+\\cot^{2}\\alpha}{1+\\cot^{2}\\alpha}=\\dfrac{4+\\dfrac{1}{\\sin^{2}\\alpha}}{\\dfrac{1}{\\sin^{2}\\alpha}}=\\dfrac{9+4}{9}=\\dfrac{13}{9}$."
  },
  {
    "id": "0H413DS6",
    "question": "Xác định tính đúng sai của các mệnh đề sau (Giả sử các biểu thức luôn có nghĩa).",
    "subQuestions": [
      {
        "text": "$\\tan x+\\cot x=1$",
        "answer": false
      },
      {
        "text": "$(\\tan x+\\cot x)^{2}-(\\tan x-\\cot x)^{2}=-2$",
        "answer": false
      },
      {
        "text": "$\\dfrac{\\cot^{2}x-\\cos^{2}x}{\\cot^{2}x}+\\dfrac{\\sin x\\cdot\\cos x}{\\cot x}=1$",
        "answer": true
      },
      {
        "text": "$3\\left(\\sin^{4}x+\\cos^{4}x\\right)-2\\left(\\sin^{6}x+\\cos^{6}x\\right)=2$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $\\tan x+\\cot x=\\dfrac{\\sin x}{\\cos x}+\\dfrac{\\cos x}{\\sin x}=\\dfrac{\\sin^{2}x+\\cos^{2}x}{\\sin x\\cdot\\cos x}=\\dfrac{1}{\\sin x\\cdot\\cos x}$.<br>- $\\left(\\tan^{2}x+2\\tan x\\cdot\\cot x+\\cot^{2}x\\right)-\\left(\\tan^{2}x-2\\tan x\\cdot\\cot x+\\cot^{2}x\\right)=4$<br>- $\\dfrac{\\cot^{2}x-\\cos^{2}x}{\\cot^{2}x}+\\dfrac{\\sin x\\cdot\\cos x}{\\cot x} = \\dfrac{\\dfrac{\\cos^{2}x}{\\sin^{2}x}-\\cos^{2}x}{\\dfrac{\\cos^{2}x}{\\sin^{2}x}}+\\dfrac{\\sin x\\cdot\\cos x}{\\dfrac{\\cos x}{\\sin x}}$<br>$= \\dfrac{\\cos^{2}x\\left(1-\\sin^{2}x\\right)}{\\cos^{2}x}+\\sin^{2}x=1-\\sin^{2}x+\\sin^{2}x=1.$<br>- $\\sin^{4}x+\\cos^{4}x=1-2\\sin^{2}x\\cos^{2}x$ và $\\sin^{6}x+\\cos^{6}x=1-3\\sin^{2}x\\cos^{2}x$. Suy ra $3\\left(1-2\\sin^{2}x\\cos^{2}x\\right)-2\\left(1-3\\sin^{2}x\\cos^{2}x\\right)=1$."
  }
];
