// =========================================================================
// KHỐI DỮ LIỆU: 1D16 - Trắc nghiệm
// Nguồn: Lý thuyết & phương pháp giải "Phương trình lượng giác thường gặp"
// (PT bậc nhất đối với sin và cos: a sinx + b cosx = c; PT bậc hai đối với
// một hàm số lượng giác; PT thuần nhất bậc hai/đẳng cấp đối với sinx, cosx)
// - chương trình Toán 11, GV tự soạn câu TN/DS/TL dựa trên lý thuyết chuẩn,
// đã tự kiểm tra lại toàn bộ nghiệm bằng cách thay số trực tiếp và bằng
// script kiểm tra số học (numpy) trước khi đưa vào ngân hàng.
// =========================================================================
window.tracNghiem1D16 = [
  {
    "id": "1D161TN1",
    "question": "Nghiệm của phương trình $\\sin x+\\cos x=1$ là",
    "options": [
      "$x=k2\\pi$ hoặc $x=\\dfrac{\\pi}{2}+k2\\pi$ $(k\\in\\mathbb{Z})$",
      "$x=k\\pi$ $(k\\in\\mathbb{Z})$",
      "$x=\\dfrac{\\pi}{4}+k2\\pi$ $(k\\in\\mathbb{Z})$",
      "Phương trình vô nghiệm"
    ],
    "answer": 0,
    "explain": "$\\sin x+\\cos x=\\sqrt{2}\\sin\\left(x+\\dfrac{\\pi}{4}\\right)=1\\Leftrightarrow \\sin\\left(x+\\dfrac{\\pi}{4}\\right)=\\dfrac{\\sqrt{2}}{2}.<br>\\Leftrightarrow x+\\dfrac{\\pi}{4}=\\dfrac{\\pi}{4}+k2\\pi$ hoặc $x+\\dfrac{\\pi}{4}=\\dfrac{3\\pi}{4}+k2\\pi.<br>\\Leftrightarrow x=k2\\pi$ hoặc $x=\\dfrac{\\pi}{2}+k2\\pi$."
  },
  {
    "id": "1D161TN2",
    "question": "Nghiệm của phương trình $\\sqrt{3}\\sin x-\\cos x=1$ là",
    "options": [
      "$x=\\dfrac{\\pi}{3}+k2\\pi$ hoặc $x=\\pi+k2\\pi$ $(k\\in\\mathbb{Z})$",
      "$x=\\dfrac{\\pi}{6}+k2\\pi$ hoặc $x=\\dfrac{5\\pi}{6}+k2\\pi$",
      "$x=\\dfrac{\\pi}{3}+k\\pi$ $(k\\in\\mathbb{Z})$",
      "Phương trình vô nghiệm"
    ],
    "answer": 0,
    "explain": "$\\sqrt{3}\\sin x-\\cos x=2\\sin\\left(x-\\dfrac{\\pi}{6}\\right)=1\\Leftrightarrow \\sin\\left(x-\\dfrac{\\pi}{6}\\right)=\\dfrac{1}{2}.<br>\\Leftrightarrow x-\\dfrac{\\pi}{6}=\\dfrac{\\pi}{6}+k2\\pi$ hoặc $x-\\dfrac{\\pi}{6}=\\dfrac{5\\pi}{6}+k2\\pi.<br>\\Leftrightarrow x=\\dfrac{\\pi}{3}+k2\\pi$ hoặc $x=\\pi+k2\\pi$."
  },
  {
    "id": "1D161TN3",
    "question": "Tìm điều kiện của tham số $m$ để phương trình $\\sin x+(m-1)\\cos x=m$ có nghiệm.",
    "options": [
      "$m\\le 1$",
      "$m\\ge 1$",
      "$m<1$",
      "Với mọi giá trị của $m$"
    ],
    "answer": 0,
    "explain": "Phương trình có dạng $a\\sin x+b\\cos x=c$ với $a=1,\\,b=m-1,\\,c=m$.<br>Điều kiện có nghiệm: $a^2+b^2\\ge c^2\\Leftrightarrow 1+(m-1)^2\\ge m^2\\Leftrightarrow 1+m^2-2m+1\\ge m^2\\Leftrightarrow -2m+2\\ge 0\\Leftrightarrow m\\le 1$."
  },
  {
    "id": "1D161TN4",
    "question": "Số điểm biểu diễn nghiệm của phương trình $2\\sin^2x-3\\sin x+1=0$ trên đường tròn lượng giác là",
    "options": [
      "$3$",
      "$2$",
      "$1$",
      "$4$"
    ],
    "answer": 0,
    "explain": "Đặt $t=\\sin x$ $(-1\\le t\\le 1)$: $2t^2-3t+1=0\\Leftrightarrow t=1$ hoặc $t=\\dfrac{1}{2}$.<br>$t=1$: $x=\\dfrac{\\pi}{2}+k2\\pi$ (1 điểm).<br>$t=\\dfrac{1}{2}$: $x=\\dfrac{\\pi}{6}+k2\\pi$ hoặc $x=\\dfrac{5\\pi}{6}+k2\\pi$ (2 điểm).<br>Tổng cộng có $3$ điểm biểu diễn nghiệm."
  },
  {
    "id": "1D161TN5",
    "question": "Nghiệm của phương trình $\\cos 2x-3\\cos x+2=0$ là",
    "options": [
      "$x=k2\\pi$ hoặc $x=\\pm\\dfrac{\\pi}{3}+k2\\pi$ $(k\\in\\mathbb{Z})$",
      "$x=k\\pi$ $(k\\in\\mathbb{Z})$",
      "$x=\\pm\\dfrac{\\pi}{3}+k\\pi$ $(k\\in\\mathbb{Z})$",
      "Phương trình vô nghiệm"
    ],
    "answer": 0,
    "explain": "$\\cos 2x=2\\cos^2x-1$ nên phương trình trở thành $2\\cos^2x-3\\cos x+1=0\\Leftrightarrow (2\\cos x-1)(\\cos x-1)=0.<br>\\Leftrightarrow \\cos x=\\dfrac{1}{2}$ hoặc $\\cos x=1\\Leftrightarrow x=\\pm\\dfrac{\\pi}{3}+k2\\pi$ hoặc $x=k2\\pi$."
  },
  {
    "id": "1D161TN6",
    "question": "Nghiệm của phương trình $\\tan^2x-(1+\\sqrt{3})\\tan x+\\sqrt{3}=0$ là",
    "options": [
      "$x=\\dfrac{\\pi}{4}+k\\pi$ hoặc $x=\\dfrac{\\pi}{3}+k\\pi$ $(k\\in\\mathbb{Z})$",
      "$x=\\dfrac{\\pi}{4}+k2\\pi$ hoặc $x=\\dfrac{\\pi}{3}+k2\\pi$",
      "$x=\\dfrac{\\pi}{6}+k\\pi$ $(k\\in\\mathbb{Z})$",
      "Phương trình vô nghiệm"
    ],
    "answer": 0,
    "explain": "Đặt $t=\\tan x$: $t^2-(1+\\sqrt{3})t+\\sqrt{3}=0\\Leftrightarrow (t-1)(t-\\sqrt{3})=0\\Leftrightarrow t=1$ hoặc $t=\\sqrt{3}.<br>\\Leftrightarrow \\tan x=1$ hoặc $\\tan x=\\sqrt{3}\\Leftrightarrow x=\\dfrac{\\pi}{4}+k\\pi$ hoặc $x=\\dfrac{\\pi}{3}+k\\pi$."
  },
  {
    "id": "1D161TN7",
    "question": "Nghiệm của phương trình $\\sin^2x-2\\sin x\\cos x-3\\cos^2x=0$ là",
    "options": [
      "$x=\\arctan 3+k\\pi$ hoặc $x=-\\dfrac{\\pi}{4}+k\\pi$ $(k\\in\\mathbb{Z})$",
      "$x=\\arctan 3+k2\\pi$ $(k\\in\\mathbb{Z})$",
      "$x=-\\dfrac{\\pi}{4}+k\\pi$ $(k\\in\\mathbb{Z})$ (chỉ một họ nghiệm)",
      "Phương trình vô nghiệm"
    ],
    "answer": 0,
    "explain": "Xét $\\cos x=0$: vế trái $=1\\ne 0$ nên $\\cos x=0$ không thỏa mãn, do đó $\\cos x\\ne 0$ với mọi nghiệm.<br>Chia hai vế cho $\\cos^2x$: $\\tan^2x-2\\tan x-3=0\\Leftrightarrow (\\tan x-3)(\\tan x+1)=0.<br>\\Leftrightarrow \\tan x=3$ hoặc $\\tan x=-1\\Leftrightarrow x=\\arctan 3+k\\pi$ hoặc $x=-\\dfrac{\\pi}{4}+k\\pi$."
  },
  {
    "id": "1D161TN8",
    "question": "Nghiệm của phương trình $3\\sin^2x+4\\sin x\\cos x-4\\cos^2x=0$ là",
    "options": [
      "$x=\\arctan\\dfrac{2}{3}+k\\pi$ hoặc $x=\\arctan(-2)+k\\pi$ $(k\\in\\mathbb{Z})$",
      "$x=\\arctan\\dfrac{2}{3}+k2\\pi$ $(k\\in\\mathbb{Z})$",
      "$x=\\dfrac{\\pi}{4}+k\\pi$ $(k\\in\\mathbb{Z})$",
      "Phương trình vô nghiệm"
    ],
    "answer": 0,
    "explain": "Xét $\\cos x=0$: vế trái $=3\\ne 0$ nên $\\cos x\\ne 0$ với mọi nghiệm.<br>Chia hai vế cho $\\cos^2x$: $3\\tan^2x+4\\tan x-4=0\\Leftrightarrow \\tan x=\\dfrac{2}{3}$ hoặc $\\tan x=-2$ (theo công thức nghiệm bậc hai với $\\Delta=64$).<br>Vậy $x=\\arctan\\dfrac{2}{3}+k\\pi$ hoặc $x=\\arctan(-2)+k\\pi$."
  },
  {
    "id": "1D161TN9",
    "question": "Nghiệm của phương trình $\\cos 2x+\\sin x=0$ là",
    "options": [
      "$x=\\dfrac{\\pi}{2}+k2\\pi$, $x=-\\dfrac{\\pi}{6}+k2\\pi$ hoặc $x=\\dfrac{7\\pi}{6}+k2\\pi$ $(k\\in\\mathbb{Z})$",
      "$x=\\dfrac{\\pi}{2}+k\\pi$ $(k\\in\\mathbb{Z})$",
      "$x=-\\dfrac{\\pi}{6}+k2\\pi$ (chỉ một họ nghiệm)",
      "Phương trình vô nghiệm"
    ],
    "answer": 0,
    "explain": "$\\cos 2x=1-2\\sin^2x$ nên phương trình trở thành $1-2\\sin^2x+\\sin x=0\\Leftrightarrow 2\\sin^2x-\\sin x-1=0.<br>\\Leftrightarrow (2\\sin x+1)(\\sin x-1)=0\\Leftrightarrow \\sin x=-\\dfrac{1}{2}$ hoặc $\\sin x=1.<br>\\Leftrightarrow x=-\\dfrac{\\pi}{6}+k2\\pi$ hoặc $x=\\dfrac{7\\pi}{6}+k2\\pi$ hoặc $x=\\dfrac{\\pi}{2}+k2\\pi$."
  },
  {
    "id": "1D161TN10",
    "question": "Số nghiệm của phương trình $2\\cos^2x-3\\cos x+1=0$ trên đoạn $[0;2\\pi]$ là",
    "options": [
      "$4$",
      "$3$",
      "$2$",
      "$1$"
    ],
    "answer": 0,
    "explain": "Đặt $t=\\cos x$: $2t^2-3t+1=0\\Leftrightarrow t=1$ hoặc $t=\\dfrac{1}{2}$.<br>$\\cos x=1\\Leftrightarrow x=0$ hoặc $x=2\\pi$ (thuộc đoạn).<br>$\\cos x=\\dfrac{1}{2}\\Leftrightarrow x=\\dfrac{\\pi}{3}$ hoặc $x=\\dfrac{5\\pi}{3}$ (thuộc đoạn).<br>Vậy có $4$ nghiệm phân biệt: $0,\\dfrac{\\pi}{3},\\dfrac{5\\pi}{3},2\\pi$."
  }
];
