// =========================================================================
// KHỐI DỮ LIỆU: 0H42 - Trắc nghiệm
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem0H42 = [
  {
    "id": "0H421TN1",
    "question": "Tam giác $ABC$ có $\\widehat{B}=30^{\\circ}$, $\\widehat{C}=45^{\\circ}$ và $AB=5$. Tính độ dài cạnh $AC$.<br><img src=\"data/10/0H4/im0H42/dlts_sbh_giuakii1_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$AC=\\dfrac{5\\sqrt{6}}{2}$",
      "$AC=\\dfrac{5\\sqrt{3}}{2}$",
      "$AC=\\dfrac{5\\sqrt{2}}{2}$",
      "$AC=5\\sqrt{2}$"
    ],
    "answer": 2,
    "explain": "Theo định lý Sin, ta có $\\dfrac{AC}{\\sin B}=\\dfrac{AB}{\\sin C}$ <br>  $\\Rightarrow AC=\\dfrac{AB\\sin B}{\\sin C}=\\dfrac{5\\sin 30^{\\circ}}{\\sin 45^{\\circ}}=\\dfrac{5\\sqrt{2}}{2}$."
  },
  {
    "id": "0H421TN2",
    "question": "Tam giác $A B C$ có $a=8$, $c=3$, $\\widehat{B}=60^{\\circ}$. Độ dài cạnh $b$ bằng bao nhiêu?",
    "options": [
      "$7$",
      "$\\sqrt{61}$",
      "$\\sqrt{97}$",
      "$49$"
    ],
    "answer": 0,
    "explain": "Áp dụng định lí côsin trong tam giác $ABC$ ta được  $b^2=a^2+c^2-2ac\\cos \\widehat{B}=8^2+ 3^2-2\\cdot8\\cdot3\\cdot\\cos 60^{\\circ}=49 \\Rightarrow b=7.$"
  },
  {
    "id": "0H421TN3",
    "question": "Cho tam giác $ABC$ có $AB=2$, $AC=1$ và $\\widehat{BAC}=60^\\circ$. Độ dài cạnh $BC$ là",
    "options": [
      "$BC=\\sqrt{3}$",
      "$BC=2$",
      "$BC=1$",
      "$BC=\\sqrt{2}$"
    ],
    "answer": 0,
    "explain": "Áp dụng định lí côsin trong $\\triangle ABC$<br>  $BC^2 = AB^2 + AC^2 - 2 \\cdot AB \\cdot AC \\cdot \\cos(\\widehat{BAC})$<br>$= 2^2 + 1^2 - 2 \\cdot 2 \\cdot 1 \\cdot \\cos(60^\\circ)$<br>$= 4 + 1 - 4 \\cdot \\left(\\dfrac{1}{2}\\right) = 5 - 2 = 3$<br>$\\Rightarrow BC = \\sqrt{3}.$"
  },
  {
    "id": "0H421TN4",
    "question": "Cho tam giác $ABC$ có $AB=26$, $BC=28$, $CA=30$. Độ dài đường cao $AH$ của tam giác là",
    "options": [
      "$21$",
      "$24$",
      "$14$",
      "$12$"
    ],
    "answer": 1,
    "explain": "Nửa chu vi $p = \\dfrac{AB+BC+CA}{2} = \\dfrac{26+28+30}{2} = \\dfrac{84}{2} = 42.$  Diện tích   $S = \\sqrt{p(p-AB)(p-BC)(p-CA)}$<br>$= \\sqrt{42(42-28)(42-30)(42-26)}$<br>$= 336.$  Mặt khác, $S = \\dfrac{1}{2} \\cdot a \\cdot h_a = \\dfrac{1}{2} \\cdot BC \\cdot AH$ nên  $336 = \\dfrac{1}{2} \\cdot 28 \\cdot AH$<br>$\\Rightarrow AH = \\dfrac{336}{14} = 24.$"
  },
  {
    "id": "0H421TN5",
    "question": "Cho tam giác $ABC$ có $AC = 2$, $\\widehat{C} = 150^\\circ$, $BC = \\sqrt{3}$. Tính độ dài cạnh $AB$.",
    "options": [
      "$AB = 13$",
      "$AB = 10$",
      "$AB = \\sqrt{10}$",
      "$AB = \\sqrt{13}$"
    ],
    "answer": 3,
    "explain": "Áp dụng định lý côsin trong tam giác $ABC$<br>  $AB^2 = AC^2 + BC^2 - 2 \\cdot AC \\cdot BC \\cdot \\cos {C}$<br>  Thay $AC = 2$, $BC = \\sqrt{3}$, $\\widehat{C} = 150^\\circ$ vào công thức trên, ta được  $AB^2 = 2^2 + (\\sqrt{3})^2 - 2 \\cdot 2 \\cdot \\sqrt{3} \\cdot \\cos {150^\\circ}$<br>$= 2^2 + (\\sqrt{3})^2 - 2 \\cdot 2 \\cdot \\sqrt{3} \\cdot \\left(-\\dfrac{\\sqrt{3}}{2}\\right)$<br>$= 13.$  Vậy cạnh $AB = \\sqrt{13}$."
  },
  {
    "id": "0H421TN6",
    "question": "Cho tam giác $ABC$ với $BC=a, AC=b, AB=c$. Đẳng thức nào <strong>sai</strong>?",
    "options": [
      "$c^2=b^2+a^2+2ab \\cos C$",
      "$b^2=a^2+c^2-2ac \\cos B$",
      "$c^2=b^2+a^2-2ab \\cos C$",
      "$a^2=b^2+c^2-2bc \\cos A$"
    ],
    "answer": 0,
    "explain": "Theo định lí côsin ta có $c^2=b^2+a^2-2ab \\cos C$."
  },
  {
    "id": "0H422TN4",
    "question": "Cho tam giác $ABC$ có $BC=a$, $AC=b$, $AB=c$ và $S$ là diện tích tam giác. Khẳng định nào dưới đây {\\bf sai}?",
    "options": [
      "$a^2=b^2+c^2+2b c\\cdot \\cos A$",
      "$c^2=a^2+b^2-2a b \\cdot \\cos C$",
      "$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$",
      "$S=\\dfrac{1}{2} c\\cdot a\\cdot \\sin B$"
    ],
    "answer": 0,
    "explain": "“$a^2=b^2+c^2+2b c\\cdot \\cos A$”\\, là khẳng định sai vì $a^2=b^2+c^2-2b c\\cdot \\cos A$."
  },
  {
    "id": "0H421TN7",
    "question": "Tam giác $ABC$ có $AB=3,$ $BC=6$ và $\\widehat{ABC}=60^{\\circ}$.  Khi đó $AC$ bằng",
    "options": [
      "$3\\sqrt{3}$",
      "$27$",
      "$8$",
      "$2\\sqrt{2}$"
    ],
    "answer": 0,
    "explain": "Ta có $AC^2=AB^2+BC^2-2\\cdot AB \\cdot BC\\cdot\\cos\\widehat{ABC}\\Rightarrow AC=\\sqrt{3^2+6^2-2\\cdot3\\cdot6\\cdot\\cos60^\\circ}=3\\sqrt{3}$."
  },
  {
    "id": "0H422TN2",
    "question": "Cho $\\triangle ABC$ với các cạnh $AB=c$, $AC=b$, $BC=a$. Gọi $R$, $S$ lần lượt là bán kính đường tròn ngoại tiếp và diện tích của tam giác $ABC$. Trong các phát biểu sau, phát biểu nào <strong>sai</strong>?",
    "options": [
      "$S=\\dfrac{abc}{4R}$",
      "$R=\\dfrac{a}{\\sin A}$",
      "$S=\\dfrac{1}{2}ab \\sin C$",
      "$c^{2}=a^{2}+b^{2}-2ab \\cos C$"
    ],
    "answer": 1,
    "explain": "Theo định lý sin, ta có $\\dfrac{a}{\\sin A} = 2R \\Rightarrow R = \\dfrac{a}{2\\sin A}$."
  },
  {
    "id": "0H421TN8",
    "question": "Cho $\\triangle ABC$ có $\\widehat{B}=60^{\\circ}$, $a=8$, $c=5$. Độ dài cạnh $b$ bằng",
    "options": [
      "$7$",
      "$129$",
      "$49$",
      "$\\sqrt{129}$"
    ],
    "answer": 0,
    "explain": "Áp dụng định lý cô-sin trong $\\triangle ABC$:  $b^2 = a^2 + c^2 - 2ac \\cos B$<br>$= 8^2 + 5^2 - 2 \\cdot 8 \\cdot 5 \\cdot \\cos 60^\\circ$<br>$= 64 + 25 - 80 \\cdot \\dfrac{1}{2}$<br>$= 89 - 40 = 49.$  Suy ra $b = \\sqrt{49} = 7$."
  }
];
