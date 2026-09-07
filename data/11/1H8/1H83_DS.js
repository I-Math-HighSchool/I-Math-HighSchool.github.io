// =========================================================================
// KHỐI DỮ LIỆU: 1H83 - Đúng/Sai
// Nguồn: Lý thuyết & ví dụ minh hoạ "Phép chiếu vuông góc" (SGK Kết nối tri thức 11,
// tập 2, HK2) - GV tự soạn câu hỏi TN/DS/TL dựa trên nội dung này, đã tự giải và
// kiểm tra lại đáp án trước khi thêm.
// =========================================================================
window.dungSai1H83 = [
  {
    "id": "1H831DS1",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông, $SA\\perp(ABCD)$. Gọi $O$ là giao điểm của $AC$ và $BD$.",
    "subQuestions": [
      {
        "text": "$AC$ là hình chiếu vuông góc của $SC$ trên mặt phẳng $(ABCD)$",
        "answer": true
      },
      {
        "text": "$O$ là hình chiếu vuông góc của điểm $B$ trên mặt phẳng $(SAC)$",
        "answer": true
      },
      {
        "text": "Hình chiếu vuông góc của tam giác $SAB$ trên mặt phẳng $(ABCD)$ là tam giác $SAB$",
        "answer": false
      },
      {
        "text": "Góc giữa đường thẳng $SA$ và mặt phẳng $(ABCD)$ bằng $90^{\\circ}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Vì $SA\\perp(ABCD)$ nên $S$ chiếu thành $A$, còn $C\\in(ABCD)$ giữ nguyên, do đó $SC$ chiếu thành $AC$.<br>- <strong>Đúng</strong>. Vì $ABCD$ là hình vuông nên $BD\\perp AC$; lại có $SA\\perp(ABCD)\\Rightarrow SA\\perp BD$. Suy ra $BD\\perp(SAC)$. Vì $O\\in BD$ và $O\\in AC\\subset(SAC)$ nên $O$ chính là hình chiếu vuông góc của $B$ trên $(SAC)$.<br>- <strong>Sai</strong>. Vì $S\\notin(ABCD)$ nên hình chiếu của $S$ là $A$; hình chiếu của tam giác $SAB$ trên $(ABCD)$ chỉ còn là đoạn thẳng $AB$ (suy biến), không phải tam giác $SAB$.<br>- <strong>Đúng</strong>. Theo định nghĩa, khi $SA\\perp(ABCD)$ thì góc giữa $SA$ và $(ABCD)$ bằng $90^{\\circ}$."
  }
];
