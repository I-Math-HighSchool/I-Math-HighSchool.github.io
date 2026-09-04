// =========================================================================
// KHỐI DỮ LIỆU: 0H54 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai0H54 = [
  {
    "id": "0H541DS1",
    "question": "Cho hình vuông $ABCD$ cạnh $a$. Gọi $E$ là trung điểm $BC$ và $F$ là điểm thuộc đoạn $BD$ sao cho $BF=\\dfrac{3}{4}BD$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{BA}+\\overrightarrow{BD}=\\overrightarrow{BC}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{AB}\\cdot\\overrightarrow{DB}=a^{2}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{EF}=-\\dfrac{3}{4}\\overrightarrow{AB}+\\dfrac{1}{4}\\overrightarrow{AD}$",
        "answer": true
      },
      {
        "text": "$\\left| \\overrightarrow{FA}+\\overrightarrow{FE}\\right| =\\dfrac{a\\sqrt{5}}{2}$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/10/0H5/im0H54/loc2_0_TN_DS_TLN_Chuy_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Sai</strong>. Theo quy tắc hình bình hành, ta có $\\overrightarrow{BA}+\\overrightarrow{BC}=\\overrightarrow{BD}$.<br>- <strong>Đúng</strong>. $\\overrightarrow{AB}\\cdot\\overrightarrow{DB}=\\left| \\overrightarrow{AB}\\right| \\cdot\\left|\\overrightarrow{DB} \\right|\\cdot\\cos\\widehat{ABD} =a\\cdot a\\sqrt{2}\\cdot\\cos45^\\circ=a^{2}$.<br>- <strong>Đúng</strong>. $\\overrightarrow{EF}=\\overrightarrow{EB}+\\overrightarrow{BF}=-\\dfrac{1}{2}\\overrightarrow{BC}+\\dfrac{3}{4}\\overrightarrow{BD}=-\\dfrac{1}{2}\\overrightarrow{AD}+\\dfrac{3}{4}\\left(\\overrightarrow{BA}+\\overrightarrow{AD} \\right) =-\\dfrac{3}{4}\\overrightarrow{AB}+\\dfrac{1}{4}\\overrightarrow{AD}$.<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{FA}=\\overrightarrow{FD}+\\overrightarrow{DA}=\\dfrac{1}{4}\\overrightarrow{BD}-\\overrightarrow{AD}=\\dfrac{1}{4}\\left( \\overrightarrow{BA}+\\overrightarrow{AD}\\right)-\\overrightarrow{AD}=-\\dfrac{1}{4}\\overrightarrow{AB}-\\dfrac{3}{4}\\overrightarrow{AD}$.<br>  Ta xét $\\overrightarrow{FA}\\cdot\\overrightarrow{FE}=\\left(-\\dfrac{1}{4}\\overrightarrow{AB}-\\dfrac{3}{4}\\overrightarrow{AD} \\right) \\cdot\\left(-\\dfrac{3}{4}\\overrightarrow{AB}+\\dfrac{1}{4}\\overrightarrow{AD} \\right)=\\dfrac{3}{16}AB^2-\\dfrac{1}{2}\\overrightarrow{AB}\\cdot\\overrightarrow{AD}-\\dfrac{3}{16}AD^2$.<br>  Mà $AB$ vuông góc với $AD$ nên $\\overrightarrow{AB}\\cdot\\overrightarrow{AD}=0$.<br>  Suy ra $\\overrightarrow{FA}\\cdot\\overrightarrow{FE}=\\dfrac{3}{16}a^2-\\dfrac{3}{16}a^2=0$ nên $FA\\perp FE$.<br>  Suy ra tam giác $AFE$ vuông tại $F$.<br>  Gọi $K$ là trung điểm $AE$, khi đó $FK=\\dfrac{1}{2}AE$.<br>  Xét $\\left| \\overrightarrow{FA}+\\overrightarrow{FE}\\right|=\\left|2\\cdot\\overrightarrow{FK} \\right|=2\\cdot FK=2\\cdot\\dfrac{1}{2}\\cdot AE=AE$.<br>  Trong tam giác $ABE$ vuông tại $B$, ta có $AE=\\sqrt{AB^2+BE^2}=\\sqrt{\\left( a\\right)^2+\\left( \\dfrac{a}{2}\\right)^2}=\\dfrac{a\\sqrt{5}}{2}$."
  }
];
