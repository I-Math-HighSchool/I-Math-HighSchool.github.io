// =========================================================================
// KHỐI DỮ LIỆU: 1D65 - Đúng/Sai
// Nguồn: Các bài toán mũ/lôgarit nâng cao (bất phương trình cơ bản, phương pháp
// mũ hoá - lôgarit hoá, đặt ẩn phụ, hàm số/đánh giá, tham số) - trích và biên
// soạn lại từ thư mục "26-Toan11-HKII(Form-23-Oxyz)/Data-Logarit" (CD5.1-CD5.5),
// đã tự giải lại và kiểm tra từng câu trước khi thêm; loại bỏ các câu có lời
// giải nguồn sai/không nhất quán sau khi kiểm tra.
// =========================================================================
window.dungSai1D65 = [
  {
    "id": "1D651DS1",
    "question": "Xét bất phương trình $8^{x^2-3x+4}\\le\\left(\\dfrac{1}{4}\\right)^{3x-15}$.",
    "subQuestions": [
      {
        "text": "Bất phương trình đã cho tương đương với $x^2-x-6\\le 0$",
        "answer": true
      },
      {
        "text": "Tập nghiệm của bất phương trình là đoạn $[-2;3]$",
        "answer": true
      },
      {
        "text": "Bất phương trình có đúng $3$ nghiệm nguyên dương",
        "answer": true
      },
      {
        "text": "Bất phương trình có đúng $6$ nghiệm nguyên",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Đưa về cùng cơ số $2$: $2^{3(x^2-3x+4)}\\le 2^{-2(3x-15)} \\Leftrightarrow 3(x^2-3x+4)\\le -2(3x-15) \\Leftrightarrow x^2-x-6\\le 0$.<br>- <strong>Đúng</strong>. $x^2-x-6\\le 0 \\Leftrightarrow (x-3)(x+2)\\le 0 \\Leftrightarrow -2\\le x\\le 3$.<br>- <strong>Đúng</strong>. Caác số ngòo đoương trong $1�m�B�2;I�CI�\n� là $\\{1;2;;\\}$: có $3$ số.<br>- <strong>Đúng</strong>. Caic số nguyên (không cần dương) trong $[-2;3]$ là $\\{-2;-1;0;1;2;3\\}$: có $6$ số."
  }
];
