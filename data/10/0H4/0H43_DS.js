// =========================================================================
// KHỐI DỮ LIỆU: 0H43 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai0H43 = [
  {
    "id": "0H431DS1",
    "question": "Cho tam giác $ABC$ có $AB=1$; $AC=2$; $\\widehat A=120^{\\circ}$.",
    "subQuestions": [
      {
        "text": "Diện tích tam giác $ABC$ bằng $2$",
        "answer": false
      },
      {
        "text": "Độ dài cạnh $BC=\\sqrt{7}$",
        "answer": true
      },
      {
        "text": "Bán kính đường tròn ngoại tiếp tam giác $ABC$ là $R=\\dfrac{\\sqrt{21}}{3}$",
        "answer": true
      },
      {
        "text": "Bán kính đường tròn nội tiếp tam giác $ABC$ là $r=\\dfrac{3\\sqrt{3}-\\sqrt{21}}{2}$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $S_{\\triangle ABC} = \\dfrac{1}{2}\\cdot AB\\cdot AC\\cdot \\sin A=\\dfrac{1}{2}\\cdot 1\\cdot2\\cdot\\sin 120^\\circ=\\dfrac{\\sqrt{3}}{2}$.<br>- Ta có $BC=\\sqrt{AB^2+AC^2-2\\cdot AB\\cdot AC\\cdot\\cos A}=\\sqrt{7}$.<br>- Ta có $R=\\dfrac{AB\\cdot AC\\cdot BC}{4S_{\\triangle ABC}}=\\dfrac{1\\cdot2\\cdot\\sqrt{7}}{4\\cdot\\frac{\\sqrt{3}}{2}}=\\dfrac{\\sqrt{21}}{3}$.<br>- Ta có $p=\\dfrac{3+\\sqrt{7}}{2}$. Suy ra $r=\\dfrac{S}{p}=\\dfrac{3\\sqrt{3}-\\sqrt{21}}{2}$."
  },
  {
    "id": "0H431DS2",
    "question": "Cho tam giác $ABC$ có các cạnh $AB = 5$, $AC = 8$, và $BC = 7$.",
    "subQuestions": [
      {
        "text": "Chu vi tam giác $ABC$ bằng $20$",
        "answer": true
      },
      {
        "text": "$\\cos C = \\dfrac{1}{7}$",
        "answer": false
      },
      {
        "text": "Bán kính đường tròn ngoại tiếp tam giác $ABC$ là $R = \\dfrac{35}{8\\sqrt{3}}$",
        "answer": false
      },
      {
        "text": "Lấy điểm $K$ là điểm đối xứng của $B$ qua $C$. Diện tích tam giác $ABK$ bằng $30\\sqrt{3}$",
        "answer": false
      }
    ],
    "explain": "<br>- Chu vi tam giác $ABC$ là $AB + AC + BC = 5 + 8 + 7 = 20$ là đúng.<br>- Áp dụng định lý côsin trong tam giác $ABC$ với góc $C$ <br>  $\\cos C = \\dfrac{AC^2 + BC^2-AB^2}{2 \\cdot AC \\cdot BC}$<br>$= \\dfrac{ 8^2 + 7^2 - 5^2}{2 \\cdot 8 \\cdot 7}$<br>$= \\dfrac{11}{14}$<br>- Ta có $\\sin C = \\sqrt{1 - \\cos^2 C} = \\sqrt{1 - \\left(\\dfrac{11}{14}\\right)^2} = \\dfrac{5\\sqrt{3}}{14}$ (do $0^\\circ &lt; C &lt; 180^\\circ$ nên $\\sin C &gt;0$). <br>  Bán kính đường tròn ngoại tiếp tam giác $ABC$ là $R = \\dfrac{AB}{2\\sin C} = \\dfrac{5}{2 \\cdot \\dfrac{5\\sqrt{3}}{14}} = \\dfrac{7\\sqrt{3}}{3}$. <br>- $K$ là điểm đối xứng của $B$ qua $C$, nghĩa là $C$ là trung điểm của $BK$. <br>  <br><img src=\"data/10/0H4/im0H43/loc2_0_TL_TN_DS_THPT__003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   Tam giác $ABC$ có diện tích $S_{ABC} = \\dfrac{1}{2}\\cdot AC \\cdot BC \\cdot \\sin C = \\dfrac{1}{2} \\cdot 8 \\cdot 7 \\cdot \\dfrac{5\\sqrt{3}}{14} = 10\\sqrt{3}$. <br>  Tam giác $ABK$ có đáy $BK = 2 BC = 2 \\cdot 7 = 14$.<br>   Hai tam giác $ABC$ và $ABK$ có chung đường cao kẻ từ đỉnh $A$ xuống đường thẳng $BK$ (chứa cạnh đáy $BC$ và $BK$).<br>   Tỉ số diện tích của hai tam giác có chung đường cao bằng tỉ số độ dài hai đáy tương ứng:  $\\dfrac{S_{\\Delta ABK}}{S_{\\Delta ABC}} = \\dfrac{BK}{BC} = \\dfrac{2 \\cdot BC}{BC} = 2$.  Diện tích tam giác $ABK$ được tính bằng $S_{\\Delta ABK} = 2 \\cdot S_{\\Delta ABC}$.  Diện tích tam giác $ABK$ là $S_{\\Delta ABK} = 2 \\cdot 10\\sqrt{3} = 20\\sqrt{3}$."
  },
  {
    "id": "0H431DS3",
    "question": "Tam giác $ABC$ có $AB=14$, $AC=13$, $BC=15$. Khi đó",
    "subQuestions": [
      {
        "text": "Tam giác $ABC$ có diện tích là $39$",
        "answer": false
      },
      {
        "text": "Tam giác $ABC$ có bán kính đường tròn nội tiếp là $4$",
        "answer": true
      },
      {
        "text": "Độ dài đường cao ứng với cạnh $AB$ có độ dài là $12$",
        "answer": true
      },
      {
        "text": "Tam giác $ABC$ có $3$ góc là góc nhọn",
        "answer": true
      }
    ],
    "explain": "Nửa chu vi tam giác là $p = \\dfrac{13+14+15}{2} = 21$.  <br>- Diện tích $S = \\sqrt{p(p-a)(p-b)(p-c)} = \\sqrt{21 \\cdot 6 \\cdot 8 \\cdot 7} = 84$.<br>- Bán kính nội tiếp $r = \\dfrac{S}{p} = \\dfrac{84}{21} = 4$.<br>- Ta có $S = \\dfrac{1}{2}c \\cdot h_c \\Rightarrow 84 = \\dfrac{1}{2} \\cdot 14 \\cdot h_c \\Rightarrow h_c = 12$.<br>- Áp dụng định lý cô-sin, ta có  $\\cos A = \\dfrac{b^2+c^2-a^2}{2bc} = \\dfrac{13^2+14^2-15^2}{2\\cdot 13 \\cdot 14} = \\dfrac{140}{364} gt; 0 \\Rightarrow \\widehat{A} lt; 90^\\circ$<br>$\\cos B = \\dfrac{a^2+c^2-b^2}{2ac} = \\dfrac{13^2+15^2-14^2}{2\\cdot 13 \\cdot 15} = \\dfrac{198}{390} gt; 0 \\Rightarrow \\widehat{B} lt; 90^\\circ$<br>$\\cos C = \\dfrac{a^2+b^2-c^2}{2ab} = \\dfrac{13^2+14^2-15^2}{2\\cdot 13 \\cdot 14} = \\dfrac{140}{364} gt; 0 \\Rightarrow \\widehat{C} lt; 90^\\circ.$  Vậy $\\triangle ABC$ có $3$ góc là góc nhọn."
  }
];
