// =========================================================================
// KHỐI DỮ LIỆU: 1H42 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1H42 = [
  {
    "id": "1H422TL1",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AD$ là đáy lớn, $BC$ là đáy nhỏ). Gọi $E$, $F$ lần lượt là trung điểm của $SA$ và $SD$. $K$ là giao điểm của các đường thẳng $AB$ và $CD$, $M$ là giao điểm của đường thẳng $SB$ và mặt phẳng $(CDE)$, $N$ là giao điểm  của đường thẳng $SC$ và mặt phẳng $(EFM)$. Cho biết $AD=2BC$. Tỉ số diện tích của hai  tam giác $KMN$ và $KEF$ là phân số tối giản $\\dfrac{a}{b}$. Tính $a+b$.<br>",
    "answer": "13",
    "explain": "<br><img src=\"data/11/1H4/im1H42/loc2_1_TN_DS_TL_THPT__005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> Trong $(SAB)$, $M=EK \\cap SB$, mà $EK \\subset (CDE)$, khi đó $M=SB \\cap (CDE)$.<br> Trong $(SAB)$, $M=EK \\cap SB$, mà $EK \\subset (CDE)$, khi đó $M=SB \\cap (CDE)$.<br> Ta có $EF$ là đường trung bình của $\\triangle SAD$ nên $EF \\parallel AD \\parallel BC$.<br> Xét $(KEF)$ và $(SBC)$ có $MN=(KEF) \\cap (SBC) \\text{ và } EF \\parallel BC \\text{ và } EF \\subset (KEF) \\text{ và } BC \\subset (SBC) \\Rightarrow MN \\parallel EF \\parallel BC$.<br> Xét $\\triangle SAK$ có $KE$ và $SB$ là hai đường trung tuyến cắt nhau tại $M$.<br> Suy ra $M$ là trọng tâm $\\triangle SAK$ hay $\\dfrac{SM}{SE}=\\dfrac{2}{3}$.<br> Áp dụng định lý Thales trong $\\triangle KEF$, có $MN \\parallel EF$, ta có $\\dfrac{KM}{KE}=\\dfrac{MN}{EF}=\\dfrac{2}{3}$.<br> Ta có $\\dfrac{S_{KMN}}{S_{KEF}}=\\left(\\dfrac{KM}{KE}\\right)^2=\\dfrac{4}{9}$.<br> Vậy $a=4$, $b=9$ nên $a+b=13$."
  }
];
