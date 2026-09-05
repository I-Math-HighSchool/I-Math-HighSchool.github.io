// =========================================================================
// KHỐI DỮ LIỆU: 0H53 - Đúng sai
// Nguồn: Đề thi Giữa Kì I thật từ các trường THPT (thư mục LocID/BANK-25-26),
// giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai0H53 = [
  {
    "id": "0H531DS1",
    "question": "Cho tam giác $ABC$ có $G$ là trọng tâm và $I$ là trung điểm của đoạn thẳng $BC$. Đặt $\\vec{AB}=\\overrightarrow{a}$, $\\overrightarrow{AC}=\\overrightarrow{b}$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AI}=\\dfrac{1}{2} \\overrightarrow{a}+\\dfrac{1}{2} \\overrightarrow{b}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{IG}=-\\dfrac{1}{6} \\overrightarrow{a}+\\dfrac{1}{6} \\overrightarrow{b}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{BI}=-\\dfrac{1}{2} \\overrightarrow{a}+\\dfrac{1}{2} \\overrightarrow{b}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{CI}=\\dfrac{1}{2} \\overrightarrow{a}-\\dfrac{1}{2} \\overrightarrow{b}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\overrightarrow{AI}=\\dfrac{1}{2} \\overrightarrow{AB}+\\dfrac{1}{2} \\overrightarrow{AC}=\\dfrac{1}{2} \\overrightarrow{a}+\\dfrac{1}{2} \\overrightarrow{b}$.<br>- Ta có $\\overrightarrow{IG}=-\\dfrac{1}{3}\\overrightarrow{AI}=-\\dfrac{1}{6} \\overrightarrow{a}-\\dfrac{1}{6} \\overrightarrow{b}$.<br>- Ta có $\\overrightarrow{BI}=\\vec{AI}-\\overrightarrow{AB}=-\\dfrac{1}{2} \\overrightarrow{a}+\\dfrac{1}{2} \\overrightarrow{b}$.<br>- Ta có $\\overrightarrow{CI}=-\\overrightarrow{BI}=\\dfrac{1}{2} \\vec{a}-\\dfrac{1}{2} \\overrightarrow{b}$."
  },
  {
    "id": "0H531DS2",
    "question": "Cho hình bình hành $ABCD$. Gọi $I, J$ lần lượt là trung điểm $BC$ và $CD$. Khi đó:",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{AD}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{AI}=\\overrightarrow{AC}+\\overrightarrow{AB}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{AI}=\\overrightarrow{AB}+\\dfrac{3}{2}\\cdot\\overrightarrow{AD}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{AJ}=\\dfrac{1}{2} \\cdot \\overrightarrow{AB}+\\dfrac{3}{2}\\cdot \\overrightarrow{AD}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/10/0H5/im0H53/loc2_0_TL_TN_DS_THPT__003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- ĐÚNG.<br>  Theo quy tắc hình bình hành ta có $\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{AD}$<br>- SAI.<br>  Theo quy tắc trung điểm ta có $\\overrightarrow{AI}=\\dfrac{1}{2}\\left( \\overrightarrow{AC}+\\overrightarrow{AB}\\right)$.<br>- SAI.<br>  Ta có $\\overrightarrow{AI}=\\dfrac{1}{2}\\left( \\overrightarrow{AC}+\\overrightarrow{AB}\\right)=\\dfrac{1}{2}\\left( \\overrightarrow{AB}+\\overrightarrow{AD} +\\overrightarrow{AB}\\right) = \\overrightarrow{AB}+\\dfrac{1}{2}\\cdot \\overrightarrow{AD}$.<br>- SAI.<br>  Ta có $\\overrightarrow{AJ}=\\dfrac{1}{2}\\left( \\overrightarrow{AC}+\\overrightarrow{AD}\\right)=\\dfrac{1}{2}\\left(\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AD}\\right) =\\overrightarrow{AD}+\\dfrac{1}{2}\\cdot \\overrightarrow{AB}$."
  }
];
