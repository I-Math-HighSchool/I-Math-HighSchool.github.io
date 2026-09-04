// =========================================================================
// KHỐI DỮ LIỆU: 1H45 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1H45 = [
  {
    "id": "1H452TL1",
    "question": "Cho hình hộp $ABCD.A'B'C'D'$.  <br>- Tìm giao tuyến giữa hai mặt phẳng $(A'AC)$ và $(ABCD)$.<br>- Gọi $M, N, P$ lần lượt là trung điểm của các cạnh $A'B, BC, CD$. Xác định điểm $I$ là giao điểm của đường thẳng $AA'$ và mặt phẳng $(MNP)$. Tính tỉ số $\\dfrac{A'I}{A'A}$.",
    "answer": "1/4",
    "explain": "<br><img src=\"data/11/1H4/im1H45/loc4_1_TN_DS_TL_THPT__011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"> <br>- Ta có $AC \\subset(A'AC) \\text{ và } AC \\subset(ABCD) \\Rightarrow(A'AC) \\cap(ABCD) =AC$.<br>- Ta có $AA' \\subset (A'AC)$. Gọi $K=AC \\cap NP$<br>  $(A'AC) \\cap(MNP) = Kx // A'C // MN$<br>  $Kx \\cap AA' = I \\Rightarrow(MNP) \\cap AA' = I$.<br>  Theo định lý Thales trong tam giác $AA'C$, ta có $\\dfrac{A'I}{A'A} = \\dfrac{KC}{AC} = \\dfrac{1}{4}$."
  }
];
