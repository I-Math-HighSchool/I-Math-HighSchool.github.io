// =========================================================================
// KHỐI DỮ LIỆU: 1H41 - Trả lời ngắn (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
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
    "answer": "\\dfrac{1}{2}",
    "explain": "<br><img src=\"data/11/1D4/im1H41/dlts_11_DLTS4_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Trong mặt phẳng $(ACD)$, $PN \\cap AD = I$.<br>  Trong mặt phẳng $(ABD)$, $MI \\cap BD = Q$.<br>  Lấy điểm $H \\in CD$ sao cho $PH \\parallel AD$.<br>  Lấy điểm $K \\in BD$ sao cho $MK \\parallel AD$<br>  Xét $\\triangle CAD$ có $PH\\parallel AD$ <br>  $\\dfrac{PC}{CA}= \\dfrac{PH}{AD}$ (định lý Thales) \\quad <strong>(1)</strong><br>  Xét $\\triangle NHP$ và $\\triangle NDI$ có $PH\\parallel ID$<br>  $\\dfrac{NI}{NP}= \\dfrac{ID}{PH}$ (định lý Thales) \\quad <strong>(2)</strong><br>  Từ <strong>(1)</strong> và <strong>(2)</strong> suy ra $\\dfrac{IN}{NP}\\cdot\\dfrac{PC}{CA}\\cdot\\dfrac{AD}{DI}=1 \\Leftrightarrow \\dfrac{IN}{NP}=3\\Rightarrow \\dfrac{NP}{IP}=\\dfrac{1}{4}$ và $\\dfrac{IN}{IP}=\\dfrac{3}{4}$<br>Xét $ \\triangle ABD$ có $MK\\parallel AD$<br>  $\\dfrac{BM}{BA} = \\dfrac{MK}{AD}$ (định lý Thales) \\quad <strong>(3)</strong><br>  Xét $\\triangle MKQ$ và $\\triangle QDI$ có $MK \\parallel DI$<br>  $\\dfrac{IQ}{MQ}=\\dfrac{DI}{MK}$ (định lý Thales) \\quad <strong>(4)</strong><br>  Từ <strong>(3)</strong> và <strong>(4)</strong> suy ra $\\dfrac{IQ}{QM}\\cdot\\dfrac{MB}{AB}\\cdot\\dfrac{AD}{DI}=1 \\Leftrightarrow \\dfrac{IQ}{QM}=2\\Rightarrow \\dfrac{IQ}{IM}=\\dfrac{2}{3}$<br>  Ta có $\\dfrac{S_{MNP}}{S_{MIP}}=\\dfrac{NP}{IP}=\\dfrac{1}{4}$ <br>  Lại có $\\dfrac{S_{INQ}}{S_{IPM}}=\\dfrac{IN}{IP}\\cdot\\dfrac{IQ}{IM}=\\dfrac{3}{4}\\cdot\\dfrac{2}{3}= \\dfrac{1}{2} \\Rightarrow \\dfrac{S_{td}}{S_{MIP}}= \\dfrac{1}{2}$ <br>  Vậy $\\dfrac{S_{MNP}}{S_td}=\\dfrac{1}{2}$."
  }
];
