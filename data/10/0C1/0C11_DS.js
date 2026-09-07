// =========================================================================
// KHỐI DỮ LIỆU: 0C11 - Đúng/Sai
// Nguồn: Lý thuyết chuẩn "Hệ ba phương trình bậc nhất ba ẩn" (phương pháp
// Gauss - khử dần ẩn đưa hệ về dạng tam giác/bậc thang rákoi giải ngược từ
// dươi lên; biện luận số nghiệm: nghiệm duy nhất, vô nghiệm, vô số nghiệm;
// ứng dụng giải bài toán thực tế) - chuyên đề Toán 10, GV tự soạn câu
// TN/ĐS/TL dựa trên lý thuyết chuẩn, đã tự kiểm tra lại toàn bộ nghiệm
// bằng tính toán trực tiếp (đối chiếu bằng sympy) trước khi đưa vào.
// =========================================================================
window.dungSai0C11 = [
  {
    "id": "0C111DS1",
    "question": "Cho hệ phương trình $\\begin{cases}x+y+z=6\\\\x-y+z=2\\\\x+y-z=0\\end{cases}$ (có nghiệm $(x;y;z)=(1;2;3)$).",
    "subQuestions": [
      {
        "text": "Hệ có nghiệm duy nhất",
        "answer": true
      },
      {
        "text": "$(x;y;z)=(1;2;3)$ là nghiệm của hệ",
        "answer": true
      },
      {
        "text": "Với nghiệm trên, $x+y+z$ bằng $5$",
        "answer": false
      },
      {
        "text": "Nếu thay $(x;y;z)=(2;2;2)$ vào hệ thì thỏa mãn phương trình (1) và (2) nhưng không thỏa mãn phương trình (3)",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Giải hệ (bằng phép trừ các phương trình) cho đúng một bộ nghiệm.<br>- <strong>Đúng</strong>. Thử lại: $1+2+3=6$; $1-2+3=2$; $1+2-3=0$, đều đúng.<br>- <strong>Sai</strong>. $x+y+z=1+2+3=6$ (chính là vế phải của phương trình (1)), không phải $5$.<br>- <strong>Đúng</strong>. Thay $(2;2;2)$: pt (1): $2+2+2=6$ ✓; pt (2): $2-2+2=2$ ✓; pt (3): $2+2-2=2\\ne 0$, không thỏa."
  }
];
