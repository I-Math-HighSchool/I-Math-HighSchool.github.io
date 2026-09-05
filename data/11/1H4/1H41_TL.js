// =========================================================================
// KHỐI DỮ LIỆU: 1H41 - Trả lời ngắn
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1H41 = [
  {
    "id": "1H413TL1",
    "question": "Cho tứ diện $ABCD$. Gọi hai điểm $A'$ và $E$ lần lượt là trọng tâm của tam giác $BCD$ và tam giác $ACD$. Gọi $G$ là giao điểm của hai đường thẳng $AA'$ và $BE$. Tính tỉ số $\\dfrac{GA}{GA'}$.",
    "answer": "3",
    "explain": "<br><img src=\"data/11/1D4/im1H41/dlts_11_DLTS4_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $E$ là trọng tâm của tam giác $ACD$, $M$ là trung điểm của $CD$.<br>  Nối $BE$ cắt $AA'$ tại $G$ suy ra $G$ là trọng tâm tứ diện.<br>  Xét tam giác $MAB$, có $\\dfrac{ME}{MA} = \\dfrac{MA'}{MB}=\\dfrac{1}{3}$ suy ra $A'E \\parallel AB \\Rightarrow \\dfrac{A'E}{AB} = \\dfrac{1}{3}$.<br>  Khi đó, theo định lý Thales suy ra $\\dfrac{A'E}{AB}=\\dfrac{A'G}{AG}=\\dfrac{1}{3} \\Rightarrow \\dfrac{GA}{GA'}= 3$."
  },
  {
    "id": "1H414TL2",
    "question": "Cho tứ diện $ABCD$ có $M$, $N$ lần lượt là trung điểm của $AB$, $CD$; $P$ là điểm thuộc cạnh $AC$ sao  cho $AP=2PC$. Gọi $S_{MNP}=2$ là diện tích tam giác $MNP$ và $S_{td}$ là diện tích thiết diện của tứ diện cắt bởi  $(MNP)$. Tỉ số $\\dfrac{S_{MNP}}{S_{td}}$ bằng bao nhiêu?",
    "answer": "0,5",
    "explain": "<br><img src=\"data/11/1D4/im1H41/dlts_11_DLTS4_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Trong mặt phẳng $(ACD)$, $PN \\cap AD = I$.<br>  Trong mặt phẳng $(ABD)$, $MI \\cap BD = Q$.<br>  Lấy điểm $H \\in CD$ sao cho $PH \\parallel AD$.<br>  Lấy điểm $K \\in BD$ sao cho $MK \\parallel AD$<br>  Xét $\\triangle CAD$ có $PH\\parallel AD$ <br>  $\\dfrac{PC}{CA}= \\dfrac{PH}{AD}$ (định lý Thales) \\quad <strong>(1)</strong><br>  Xét $\\triangle NHP$ và $\\triangle NDI$ có $PH\\parallel ID$<br>  $\\dfrac{NI}{NP}= \\dfrac{ID}{PH}$ (định lý Thales) \\quad <strong>(2)</strong><br>  Từ <strong>(1)</strong> và <strong>(2)</strong> suy ra $\\dfrac{IN}{NP}\\cdot\\dfrac{PC}{CA}\\cdot\\dfrac{AD}{DI}=1 \\Leftrightarrow \\dfrac{IN}{NP}=3\\Rightarrow \\dfrac{NP}{IP}=\\dfrac{1}{4}$ và $\\dfrac{IN}{IP}=\\dfrac{3}{4}$<br>Xét $ \\triangle ABD$ có $MK\\parallel AD$<br>  $\\dfrac{BM}{BA} = \\dfrac{MK}{AD}$ (định lý Thales) \\quad <strong>(3)</strong><br>  Xét $\\triangle MKQ$ và $\\triangle QDI$ có $MK \\parallel DI$<br>  $\\dfrac{IQ}{MQ}=\\dfrac{DI}{MK}$ (định lý Thales) \\quad <strong>(4)</strong><br>  Từ <strong>(3)</strong> và <strong>(4)</strong> suy ra $\\dfrac{IQ}{QM}\\cdot\\dfrac{MB}{AB}\\cdot\\dfrac{AD}{DI}=1 \\Leftrightarrow \\dfrac{IQ}{QM}=2\\Rightarrow \\dfrac{IQ}{IM}=\\dfrac{2}{3}$<br>  Ta có $\\dfrac{S_{MNP}}{S_{MIP}}=\\dfrac{NP}{IP}=\\dfrac{1}{4}$ <br>  Lại có $\\dfrac{S_{INQ}}{S_{IPM}}=\\dfrac{IN}{IP}\\cdot\\dfrac{IQ}{IM}=\\dfrac{3}{4}\\cdot\\dfrac{2}{3}= \\dfrac{1}{2} \\Rightarrow \\dfrac{S_{td}}{S_{MIP}}= \\dfrac{1}{2}$ <br>  Vậy $\\dfrac{S_{MNP}}{S_td}=\\dfrac{1}{2}$."
  },
  {
    "id": "1H413TL2",
    "question": "Cho hình tứ diện $ABCD$ có tất cả các cạnh bằng $6$. Gọi $M$, $N$ lần lượt là trung điểm của $CA$, $CB$. $P$ là điểm trên cạnh $BD$ sao cho $BP=2PD$. Gọi $(H)$ là hình giới hạn bởi giao tuyến của mặt phẳng $(MNP)$ với các mặt của tứ diện $ABCD$. Tính diện tích hình $(H)$ (kết quả làm tròn đến hàng phần trăm).",
    "answer": "8,93",
    "explain": "<br><img src=\"data/11/1H4/im1H41/loc8_TT_THPT_Chuyen_B_013.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có $MN$ là đường trung bình của tam giác $ABC$ nên $MN\\parallel AB$. Suy ra $AB\\parallel (MNP)$.<br>  Qua $P$ kẻ $PQ$ song song với $AB$ và cắt $AD$ tại $Q$. Vì $AB\\subset (DAB)$ nên giao tuyến của $(MNP)$ và $(DAB)$ là $PQ$.<br>  Vậy hình $(H)$ giới hạn bởi giao tuyến của mặt phẳng $(MNP)$ với các mặt của tứ diện $ABCD$ là tứ giác $MNPQ$<br>  Ta có $AM=\\dfrac{1}{2}AC=3$, $AQ=\\dfrac{2}{3}AD=4$.<br>  $MQ=\\sqrt{AM^2+AQ^2-2AM\\cdot AQ\\cos60^{\\circ}}=\\sqrt{3^2+4^2-2\\cdot3\\cdot4\\cos60^\\circ}=\\sqrt{13}$.<br>  Tương tự, ta cũng có $PN=\\sqrt{13}$.<br>  Ta có $QP=\\dfrac{1}{3}AB=2$, $MN=\\dfrac{1}{2}AB=3$.<br>  Trong hình thang $MNPQ$, gọi $I$ là chân đường cao hạ từ $Q$ xuống $MN$, $J$ là chân đường cao hạ từ $P$ xuống $MN$. Ta chứng minh được hai tam giác $QMI$ và $PNJ$ bằng nhau, suy ra $MI=NJ=\\dfrac{MN-PQ}{2}=\\dfrac{1}{2}$. Khi đó $QI=PJ=\\sqrt{QM^2-MI^2}=\\sqrt{13-\\dfrac{1}{4}}=\\dfrac{\\sqrt{51}}{2}$.<br>  Vậy $S_{MNPQ}=\\dfrac{QP+MN}{2}\\cdot QI=\\dfrac{2+3}{2}\\cdot\\dfrac{\\sqrt{51}}{2}=\\dfrac{5\\sqrt{51}}{4}\\approx 8{,}93$."
  }
];
