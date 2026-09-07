// =========================================================================
// KHỐI DỮ LIỆU: 1H83 - Trắc nghiệm
// Nguồn: Lý thuyết & ví dụ minh hoạ "Phép chiếu vuông góc" (SGK Kết nối tri thức 11,
// tập 2, HK2) - GV tự soạn câu hỏi TN/DS/TL dựa trên nội dung này, đã tự giải và
// kiểm tra lại đáp án trước khi thêm.
// =========================================================================
window.tracNghiem1H83 = [
  {
    "id": "1H831TN1",
    "question": "Trong không gian, phép chiếu song song lên mặt phẳng $(P)$ theo phương $\\Delta$ được gọi là phép chiếu vuông góc lên $(P)$ khi nào?",
    "options": [
      "Khi $\\Delta$ vuông góc với $(P)$",
      "Khi $\\Delta$ song song với $(P)$",
      "Khi $\\Delta$ nằm trong $(P)$",
      "Khi $\\Delta$ tạo với $(P)$ một góc $45^{\\circ}$"
    ],
    "answer": 0,
    "explain": "Theo định nghĩa: Phép chiếu song song lên mặt phẳng $(P)$ theo phương $\\Delta$ <strong>vuông góc</strong> với $(P)$ được gọi là phép chiếu vuông góc lên mặt phẳng $(P)$."
  },
  {
    "id": "1H831TN2",
    "question": "Cho hình chóp $S.ABC$ có $SA\\perp(ABC)$. Hình chiếu vuông góc của điểm $S$ trên mặt phẳng $(ABC)$ là điểm nào sau đây?",
    "options": [
      "Điểm $A$",
      "Điểm $B$",
      "Điểm $C$",
      "Trọng tâm tam giác $ABC$"
    ],
    "answer": 0,
    "explain": "Vì $SA\\perp(ABC)$ nên $A$ chính là chân đường vuông góc hạ từ $S$ xuống mặt phẳng $(ABC)$. Do đó hình chiếu vuông góc của $S$ trên $(ABC)$ là điểm <strong>$A$</strong>."
  },
  {
    "id": "1H831TN3",
    "question": "Cho hình chóp $S.ABC$ có $SA\\perp(ABC)$. Hình chiếu vuông góc của tam giác $SBC$ trên mặt phẳng $(ABC)$ là hình nào sau đây?",
    "options": [
      "Tam giác $ABC$",
      "Tam giác $SBC$",
      "Đoạn thẳng $BC$",
      "Điểm $A$"
    ],
    "answer": 0,
    "explain": "Vì $SA\\perp(ABC)$ nên hình chiếu của $S$ là $A$; hai điểm $B$, $C$ đã nằm trong $(ABC)$ nên tự chiếu thành chính nó. Vậy hình chiếu vuông góc của tam giác $SBC$ trên $(ABC)$ là <strong>tam giác $ABC$</strong>."
  },
  {
    "id": "1H831TN4",
    "question": "Cho hình chóp $S.ABC$ có $SA=SB=SC$. Gọi $O$ là hình chiếu vuông góc của $S$ trên mặt phẳng $(ABC)$. Khẳng định nào sau đây đúng?",
    "options": [
      "$O$ là tâm đường tròn ngoại tiếp tam giác $ABC$",
      "$O$ là trọng tâm tam giác $ABC$",
      "$O$ là trực tâm tam giác $ABC$",
      "$O$ là tâm đường tròn nội tiếp tam giác $ABC$"
    ],
    "answer": 0,
    "explain": "Xét ba tam giác $SOA$, $SOB$, $SOC$ có $SO$ chung, $SO\\perp OA,\\,OB,\\,OC$ và $SA=SB=SC$ nên ba tam giác này bằng nhau (cạnh huyền - cạnh góc vuông). Suy ra $OA=OB=OC$, do đó $O$ là <strong>tâm đường tròn ngoại tiếp</strong> tam giác $ABC$."
  },
  {
    "id": "1H831TN5",
    "question": "Cho hình chóp $S.ABC$ có $SA\\perp(ABC)$ và tam giác $ABC$ vuông tại $B$. Hình chiếu vuông góc của tam giác $SBC$ trên mặt phẳng $(SAB)$ là hình nào sau đây?",
    "options": [
      "Tam giác $SAB$",
      "Tam giác $SBC$",
      "Đoạn thẳng $SB$",
      "Tam giác $SAC$"
    ],
    "answer": 0,
    "explain": "Ta có $BC\\perp AB$ (giả thiết) và $BC\\perp SA$ (do $SA\\perp(ABC)$) nên $BC\\perp(SAB)$, suy ra $B$ là hình chiếu vuông góc của $C$ trên $(SAB)$. Hai điểm $S$, $B$ đã thuộc $(SAB)$ nên giữ nguyên. Vậy hình chiếu của tam giác $SBC$ trên $(SAB)$ là <strong>tam giác $SAB$</strong>."
  },
  {
    "id": "1H831TN6",
    "question": "Cho đường thẳng $a$ và mặt phẳng $(P)$ không vuông góc với nhau, gọi $a'$ là hình chiếu vuông góc của $a$ trên $(P)$, và $b$ là một đường thẳng nằm trong $(P)$. Theo định lí ba đường vuông góc, khẳng định nào sau đây đúng?",
    "options": [
      "$b\\perp a \\Leftrightarrow b\\perp a'$",
      "$b\\perp a \\Leftrightarrow b\\parallel a'$",
      "$b\\parallel a \\Leftrightarrow b\\perp a'$",
      "$b\\perp a'$ luôn đúng với mọi đường thẳng $b$ nằm trong $(P)$"
    ],
    "answer": 0,
    "explain": "Định lí ba đường vuông góc: đường thẳng $b$ nằm trong $(P)$ vuông góc với $a$ khi và chỉ khi $b$ vuông góc với hình chiếu vuông góc $a'$ của $a$ trên $(P)$."
  }
];
