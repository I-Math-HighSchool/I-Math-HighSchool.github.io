// =========================================================================
// KHỐI DỮ LIỆU: 0H43 - Trắc nghiệm
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem0H43 = [
  {
    "id": "0H431TN1",
    "question": "Cho tam giác $ABC$ có $a=4$, $c=5$, $\\widehat{B}=150^{\\circ}$. Diện tích của tam giác $ABC$ bằng<br><img src=\"data/10/0H4/im0H43/dlts_sbh_giuakii1_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$5$",
      "$10\\sqrt{3}$",
      "$5\\sqrt{3}$",
      "$10$"
    ],
    "answer": 0,
    "explain": "Ta có $S_{ABC}=\\dfrac{1}{2}ac\\sin B=\\dfrac{1}{2}\\cdot 4 \\cdot 5 \\cdot \\sin 150^{\\circ}=5$."
  },
  {
    "id": "0H431TN2",
    "question": "Diện tích $S$ của tam giác $A B C$ là",
    "options": [
      "$S=\\dfrac{1}{2} A B \\cdot B C \\cdot \\sin A$",
      "$S=\\dfrac{1}{2} A B \\cdot B C \\cdot \\cos A$",
      "$S=\\dfrac{1}{2} A B \\cdot A C \\cdot \\cos A$",
      "$S=\\dfrac{1}{2} A B \\cdot A C \\cdot \\sin A$"
    ],
    "answer": 3,
    "explain": "Diện tích $S$ của tam giác $A B C$ là $S=\\dfrac{1}{2} A B \\cdot A C \\cdot \\sin A$."
  },
  {
    "id": "0H431TN3",
    "question": "Để lắp đường dây điện cao thế từ vị trí $A$ đến vị trí $B$, do phải tránh một ngọn núi nên người ta phải nối đường dây từ vị trí $A$ đến vị trí $C$ dài $10\\,\\text{km}$, sau đó nối đường dây từ vị trí $C$ đến vị trí $B$ dài $8\\,\\text{km}$. Góc tạo bởi hai đoạn dây $AC$ và $CB$ là $70^\\circ$.  <br><img src=\"data/10/0H4/im0H43/loc_ghk1hv_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Chiều dài tăng thêm của dây điện vì không thể nối trực tiếp từ $A$ đến $B$ là bao nhiêu kilômét? (Kết quả làm tròn đến hàng phần mười)",
    "options": [
      "$7{,}5$",
      "$6{,}3$",
      "$14{,}3$",
      "$3{,}2$"
    ],
    "answer": 0,
    "explain": "Chiều dài đường dây đi vòng qua $C$ là $L_C = AC + CB = 10 + 8 = 18\\,\\text{km}.$  Chiều dài đường dây nối trực tiếp $A$ đến $B$ là $AB$. Ta có  $AB^2 = AC^2 + CB^2 - 2 \\cdot AC \\cdot CB \\cdot \\cos(\\widehat{ACB})$<br>$= 10^2 + 8^2 - 2 \\cdot 10 \\cdot 8 \\cdot \\cos(70^\\circ)$<br>$= 100 + 64 - 160 \\cdot \\cos(70^\\circ)$<br>$\\approx 109{,}28$<br>$\\Rightarrow AB = \\sqrt{109{,}28}$<br>$\\approx 10{,}5\\,\\text{km}.$  Chiều dài tăng thêm là $L_C - AB = 18 - 10{,}5 = 7{,}5\\,\\text{km}.$"
  }
];
