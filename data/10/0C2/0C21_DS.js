// =========================================================================
// KHỐI DỮ LIỆU: 0C21 - Đúng/Sai
// Nguồn: Lý thuyết chuẩn "Phương pháp quy nạp toán học" (hai bước: kiểm
// tra mệnh đề đúng tại giá trị bắt đầu; giả thiết quy nạp và chứng minh
// mệnh đề đúng ở bước kế tiếp) minh họa qua các đẳng thức tổng quen thuộc
// ($1+2+\cdots+n$, $1+3+\cdots+(2n-1)$, $1^2+2^2+\cdots+n^2$) và tính
// chia hết ($n^3-n$ chia hết cho $3$) - chuyên đề Toán 10, GV tự soạn câu
// TN/ĐS/TL dựa trên lý thuyết chuẩn, đã tự kiểm tra lại toàn bộ phép tính
// trước khi đưa vào.
// =========================================================================
window.dungSai0C21 = [
  {
    "id": "0C211DS1",
    "question": "Xét mệnh đề $P(n)$: \"$1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$\", chứng minh bằng phương pháp quy nạp toán học.",
    "subQuestions": [
      {
        "text": "Bước cơ sở là kiểm tra $P(1)$ đúng",
        "answer": true
      },
      {
        "text": "Giả thiết quy nạp là giả sử $P(k)$ đúng với một số nguyên dương $k$ nào đó",
        "answer": true
      },
      {
        "text": "Ở bước quy nạp, ta cần chứng minh lại $P(k)$ đúng",
        "answer": false
      },
      {
        "text": "Khi $n=4$, tổng $1+2+3+4$ bằng $\\dfrac{4\\cdot 5}{2}=10$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Đây là bước đầu tiên của phép chứng minh quy nạp.<br>- <strong>Đúng</strong>. Đây chính là giả thiết quy nạp.<br>- <strong>Sai</strong>. Ở bước quy nạp ta cần chứng minh $P(k+1)$ đúng (dựa vào giả thiết $P(k)$ đúng), chứ không phải chứng minh lại $P(k)$.<br>- <strong>Đúng</strong>. $1+2+3+4=10$ và $\\dfrac{4\\cdot 5}{2}=10$, khớp nhau."
  }
];
