// =========================================================================
// KHỐI DỮ LIỆU: 0H42 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì I thật từ các trường THPT (thư mục LocID/BANK-25-26),
// giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan0H42 = [
  {
    "id": "0H421TL1",
    "question": "Cho hình vuông $ABCD$ cạnh bằng $3$. Trên cạnh $AB$ lấy điểm $M$ sao cho $BM = 1$, trên cạnh $CD$ lấy điểm $N$ sao cho $DN = 1$ và $P$ là trung điểm $BC$. Tính $\\cos \\widehat{MNP}$ (kết quả làm tròn đến hàng phần trăm).",
    "answer": "0,82",
    "explain": "<br><img src=\"data/10/0H4/im0H42/loc2_0_TL_TN_DS_THPT__004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Trên cạnh $AB$ lấy điểm $Q$ sao cho $AQ=1$, ta có tứ giác $AQND$ là hình chữ nhật.<br>  Theo định lí Py-ta-go:<br>  $MN=\\sqrt{QN^2+QM^2}=\\sqrt{10}$, $PN=\\sqrt{NC^2+CP^2}=\\dfrac{5}{2}$, $PM=\\sqrt{PB^2+BM^2}=\\dfrac{\\sqrt{13}}{2}$.<br>  Áp dụng định lí Cô-sin trong tam giác $MNP$ ta có:<br>  $\\cos \\widehat{MNP}=\\dfrac{PN^2+NM^2-PM^2}{2\\cdot PN \\cdot NM}=\\dfrac{\\dfrac{25}{4}+10-\\dfrac{13}{4}}{2\\cdot \\dfrac{5}{2}\\cdot\\sqrt{10}}\\approx 0{,}82.$"
  },
  {
    "id": "0H421TL2",
    "question": "Cho tam giác $ABC$ có $\\widehat{C}$ nhọn và $AC=3$; $BC=4$; $S_{ABC}=3\\sqrt{3}$ (tham khảo hình vẽ). Tính độ dài cạnh $AB$ (kết quả làm tròn đến hàng phần trăm).<br><img src=\"data/10/0H4/im0H42/loc2_0_TN_DS_TLN_THPT_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "3{,}61",
    "explain": "Ta có  $S_{ABC}=3\\sqrt{3} \\Leftrightarrow \\dfrac{1}{2}\\cdot CA\\cdot CB\\cdot \\sin \\widehat{ACB}=3\\sqrt{3}$<br>$\\Leftrightarrow \\dfrac{1}{2}\\cdot 3\\cdot 4\\cdot \\sin \\widehat{ACB}=3\\sqrt{3}$<br>$\\Leftrightarrow \\sin \\widehat{ACB}=\\dfrac{\\sqrt{3}}{2}$<br>$\\Leftrightarrow \\widehat{ACB}=60^\\circ ~(\\text{do}~ \\widehat{C}~ \\text{nhọn}).$  Áp dụng định lí côsin cho tam giác $ABC$ ta có  $AB =\\sqrt{AC^2+BC^2-2\\cdot AC\\cdot BC\\cdot \\cos \\widehat{ACB}}$<br>$=\\sqrt{3^2+4^2-2\\cdot 3\\cdot 4\\cdot \\cos 60^\\circ}$<br>$=\\sqrt{13}$<br>$\\approx 3{,}61.$"
  }
];
