// =========================================================================
// KHỐI DỮ LIỆU: 1D16 - Trả lời ngắn
// Nguồn: Lý thuyết & phương pháp giải "Phương trình lượng giác thường gặp"
// (PT bậc nhất đối với sin và cos: a sinx + b cosx = c; PT bậc hai đối với
// một hàm số lượng giác; PT thuần nhất bậc hai/đẳng cấp đối với sinx, cosx)
// - chương trình Toán 11, GV tự soạn câu TN/DS/TL dựa trên lý thuyết chuẩn,
// đã tự kiểm tra lại toàn bộ nghiệm bằng cách thay số trực tiếp và bằng
// script kiểm tra số học (numpy) trước khi đưa vào ngân hàng.
// =========================================================================
window.traLoiNgan1D16 = [
  {
    "id": "1D161TL1",
    "question": "Phương trình $2\\sin^2x-3\\sin x+1=0$ có bao nhiêu nghiệm thuộc đoạn $[0;2\\pi]$?",
    "answer": "3",
    "explain": "Đặt $t=\\sin x$: $2t^2-3t+1=0\\Leftrightarrow t=1$ hoặc $t=\\dfrac{1}{2}$.<br>$\\sin x=1\\Leftrightarrow x=\\dfrac{\\pi}{2}$ (thuộc $[0;2\\pi]$).<br>$\\sin x=\\dfrac{1}{2}\\Leftrightarrow x=\\dfrac{\\pi}{6}$ hoặc $x=\\dfrac{5\\pi}{6}$ (đều thuộc $[0;2\\pi]$).<br>Vậy có $3$ nghiệm."
  },
  {
    "id": "1D161TL2",
    "question": "Có bao nhiêu giá trị nguyên của tham số $m$ thuộc đoạn $[-5;5]$ để phương trình $\\sin x+(m-1)\\cos x=m$ có nghiệm?",
    "answer": "7",
    "explain": "Điều kiện có nghiệm: $1+(m-1)^2\\ge m^2\\Leftrightarrow m\\le 1$.<br>Các giá trị nguyên $m\\in[-5;5]$ thỏa $m\\le 1$ là $\\{-5;-4;-3;-2;-1;0;1\\}$: có $7$ giá trị."
  },
  {
    "id": "1D161TL3",
    "question": "Phương trình $\\sin^2x-2\\sin x\\cos x-3\\cos^2x=0$ có bao nhiêu nghiệm thuộc khoảng $(0;\\pi)$?",
    "answer": "2",
    "explain": "Xét $\\cos x=0$: vế trái $=1\\ne 0$ nên $\\cos x\\ne 0$. Chia hai vế cho $\\cos^2x$: $\\tan^2x-2\\tan x-3=0\\Leftrightarrow \\tan x=3$ hoặc $\\tan x=-1$.<br>$\\tan x=3\\Leftrightarrow x=\\arctan 3\\approx 0,398\\pi$ (thuộc $(0;\\pi)$).<br>$\\tan x=-1\\Leftrightarrow x=\\dfrac{3\\pi}{4}$ (thuộc $(0;\\pi)$).<br>Vậy có $2$ nghiệm."
  }
];
