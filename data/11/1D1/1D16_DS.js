// =========================================================================
// KHỐI DỮ LIỆU: 1D16 - Đúng/Sai
// Nguồn: Lý thuyết & phương pháp giải "Phương trình lượng giác thường gặp"
// (PT bậc nhất đối với sin và cos: a sinx + b cosx = c; PT bậc hai đối với
// một hàm số lượng giác; PT thuần nhất bậc hai/đẳng cấp đối với sinx, cosx)
// - chương trình Toán 11, GV tự soạn câu TN/DS/TL dựa trên lý thuyết chuẩn,
// đã tự kiểm tra lại toàn bộ nghiệm bằng cách thay số trực tiếp và bằng
// script kiểm tra số học (numpy) trước khi đưa vào ngân hàng.
// =========================================================================
window.dungSai1D16 = [
  {
    "id": "1D161DS1",
    "question": "Cho phương trình lượng giác $\\sin x+\\sqrt{3}\\cos x=1$ (*).",
    "subQuestions": [
      {
        "text": "Phương trình (*) tương đương với $2\\sin\\left(x+\\dfrac{\\pi}{3}\\right)=1$",
        "answer": true
      },
      {
        "text": "Phương trình (*) có nghiệm $x=-\\dfrac{\\pi}{6}+k2\\pi$ $(k\\in\\mathbb{Z})$",
        "answer": true
      },
      {
        "text": "Phương trình (*) có nghiệm $x=\\dfrac{\\pi}{2}+k2\\pi$ $(k\\in\\mathbb{Z})$",
        "answer": true
      },
      {
        "text": "Trong khoảng $(0;2\\pi)$, phương trình (*) có đúng $3$ nghiệm",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. $\\sin x+\\sqrt{3}\\cos x=2\\left(\\dfrac{1}{2}\\sin x+\\dfrac{\\sqrt{3}}{2}\\cos x\\right)=2\\sin\\left(x+\\dfrac{\\pi}{3}\\right)$, nên (*)$\\Leftrightarrow 2\\sin\\left(x+\\dfrac{\\pi}{3}\\right)=1$.<br>- <strong>Đúng</strong>. $\\sin\\left(x+\\dfrac{\\pi}{3}\\right)=\\dfrac{1}{2}\\Leftrightarrow x+\\dfrac{\\pi}{3}=\\dfrac{\\pi}{6}+k2\\pi$ hoặc $x+\\dfrac{\\pi}{3}=\\dfrac{5\\pi}{6}+k2\\pi\\Leftrightarrow x=-\\dfrac{\\pi}{6}+k2\\pi$ hoặc $x=\\dfrac{\\pi}{2}+k2\\pi$.<br>- <strong>Đúng</strong>. (suy ra trực tiếp từ họ nghiệm thứ hai ở trên).<br>- <strong>Sai</strong>. Trong khoảng $(0;2\\pi)$ chỉ có $2$ nghiệm là $x=\\dfrac{\\pi}{2}$ và $x=\\dfrac{11\\pi}{6}$ (ứng với $k=0$ và $k=1$), không phải $3$ nghiệm."
  }
];
