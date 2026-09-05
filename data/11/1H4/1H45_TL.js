// =========================================================================
// KHỐI DỮ LIỆU: 1H45 - Trả lời ngắn
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1H45 = [
  {
    "id": "1H452TL1",
    "question": "Cho hình hộp $ABCD.A'B'C'D'$.  <br>- Tìm giao tuyến giữa hai mặt phẳng $(A'AC)$ và $(ABCD)$.<br>- Gọi $M, N, P$ lần lượt là trung điểm của các cạnh $A'B, BC, CD$. Xác định điểm $I$ là giao điểm của đường thẳng $AA'$ và mặt phẳng $(MNP)$. Tính tỉ số $\\dfrac{A'I}{A'A}$.",
    "answer": "1/4",
    "explain": "<br><img src=\"data/11/1H4/im1H45/loc4_1_TN_DS_TL_THPT__011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> <br>- Ta có $AC \\subset(A'AC) \\text{ và } AC \\subset(ABCD) \\Rightarrow(A'AC) \\cap(ABCD) =AC$.<br>- Ta có $AA' \\subset (A'AC)$. Gọi $K=AC \\cap NP$<br>  $(A'AC) \\cap(MNP) = Kx // A'C // MN$<br>  $Kx \\cap AA' = I \\Rightarrow(MNP) \\cap AA' = I$.<br>  Theo định lý Thales trong tam giác $AA'C$, ta có $\\dfrac{A'I}{A'A} = \\dfrac{KC}{AC} = \\dfrac{1}{4}$."
  },
  {
    "id": "1H452TL2",
    "question": "Cho hình lăng trụ $ABC.A'B'C'$ có đáy là tam giác đều cạnh $2$.   Hình chiếu vuông góc của $A'$ lên mặt phẳng $(ABC)$ trùng với trọng tâm tam giác $ABC$.   Biết khoảng cách giữa hai đường thẳng $AA'$ và $BC$ bằng $\\dfrac{\\sqrt{3}}{2}$.   Tính thể tích $V$ của khối lăng trụ $ABC.A'B'C'$ (kết quả làm tròn đến hàng phần trăm).",
    "answer": "1,15",
    "explain": "<br><img src=\"data/11/1H4/im1H45/loc8_TT_THPT_Chuyen_B_016.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $G$ là trọng tâm tam giác $ABC$, $I$ là trung điểm $BC$, $K$ và $J$ lần lượt là hình chiếu vuông góc hạ từ $I$ và $G$ xuống $AA'$.<br>  Ta có $BC\\perp AI$ (do $AI$ là đường trung tuyến trong tam giác $ABC$ đều) và $BC\\perp A'G$ nên $BC\\perp (AIA')$, suy ra $BC\\perp IK$. Do đó $IK=\\mathrm{d}(AA',BC)=\\dfrac{\\sqrt{3}}{2}$.<br>  Ta có $AG=\\dfrac{2}{3}AI=\\dfrac{2\\sqrt{3}}{3}$ và $\\dfrac{JG}{IK}=\\dfrac{AG}{AI}=\\dfrac{2}{3}$. Suy ra $JG=\\dfrac{2}{3}IK=\\dfrac{\\sqrt{3}}{3}$.<br>  Xét tam giác $AGA'$ có $\\dfrac{1}{GJ^2}=\\dfrac{1}{GA^2}+\\dfrac{1}{GA'^2}\\Leftrightarrow \\dfrac{1}{\\left( \\dfrac{\\sqrt{3}}{3}\\right)^2 }=\\dfrac{1}{\\left(\\dfrac{2\\sqrt{3}}{3} \\right)^2 }+\\dfrac{1}{GA'^2}$.<br> Suy ra $GA'=\\dfrac{2}{3}$.<br>  Vậy $V_{ABC.A'B'C'}=GA'\\cdot S_{ABC}=\\dfrac{2}{3}\\cdot \\dfrac{\\sqrt{3}}{4}\\cdot 2^2=\\dfrac{2\\sqrt{3}}{3}\\approx 1{,}15$."
  }
];
