// =========================================================================
// KHỐI DỮ LIỆU: §2. Định lý sin và định lý côsin trong tam giác - Đúng sai
// Nguồn: SachBaiHoc_T10/Data-T10/HH10-CD1.4-DS.tex (chuyển từ LaTeX)
// Hình vẽ (bảng biến thiên, đồ thị, bảng số liệu...) đã được biên dịch sẵn
// bằng LaTeX/TikZ thành ảnh PNG tĩnh (không phụ thuộc TikzJax).
// =========================================================================
window.dungSai0H42 = [
  {
    "id": "0H421DS1",
    "question": "Cho tam giác $ABC$ có $AB=3$, $AC=2$,$\\widehat{A}=60^\\circ$. Trên cạnh $BC$ lấy điểm $M$ nằm giữa $B$ và $C$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$BC^{2}=AB^{2}+AC^{2}+2 AB\\cdot AC\\cdot\\cos A$",
        "answer": false
      },
      {
        "text": "$BC=\\sqrt{7}$",
        "answer": true
      },
      {
        "text": "$\\cos B=\\dfrac{\\sqrt{7}}{7}$",
        "answer": false
      },
      {
        "text": "Độ dài $AM$ nhỏ nhất bằng $\\dfrac{189}{49}$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos A$<br>- $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos A=9+4-2\\cdot 3\\cdot 2\\cdot\\cos 60^\\circ=7\\Rightarrow BC=\\sqrt{7}$.<br>- $\\cos B=\\dfrac{AB^{2}+BC^{2}-AC^{2}}{2\\cdot AB\\cdot BC}=\\dfrac{9+7-4}{2\\cdot 3\\cdot\\sqrt{7}}=\\dfrac{2\\sqrt{7}}{7}$.<br>- Với $M$ tùy ý nằm giữa $B$ và $C$ ,ta có  $AM^{2} = AB^{2}+BM^{2}-2 AB\\cdot BM\\cdot\\cos B=9+BM^{2}-2\\cdot 3\\cdot BM\\cdot\\dfrac{2\\sqrt{7}}{7}$<br>$= BM^{2}-\\dfrac{12\\sqrt{7}}{7} BM+9$<br>$= \\left(BM-\\dfrac{6\\sqrt{7}}{7}\\right)^{2}+\\dfrac{189}{49}\\geq\\dfrac{189}{49}.$  Do đó $AM^{2}\\geq\\dfrac{189}{49}\\Rightarrow AM\\geq\\dfrac{\\sqrt{189}}{7}$.<br>  Dấu bằng xảy ra khi $BM-\\dfrac{6\\sqrt{7}}{7}=0\\Leftrightarrow BM=\\dfrac{6\\sqrt{7}}{7}$ hay $BM=\\dfrac{6}{7}BC$."
  },
  {
    "id": "0H422DS2",
    "question": "Cho $\\triangle ABC$, có diện tích bằng $12\\sqrt{3}$, cạnh $AB=6$, $\\widehat{BAC}=120^\\circ$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Có $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos B$",
        "answer": false
      },
      {
        "text": "Độ dài cạnh $BC=2\\sqrt{37}$",
        "answer": true
      },
      {
        "text": "Bán kính đường tròn ngoại tiếp $\\triangle ABC$ là $\\dfrac{3\\sqrt{111}}{2}$",
        "answer": false
      },
      {
        "text": "Độ dài chân đường phân giác trong góc $A$ của $\\triangle ABC$ có độ dài là $\\dfrac{25}{7}$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos A$<br>- Ta có $S=\\dfrac{1}{2}AB\\cdot AC\\cdot\\sin A\\Rightarrow\\dfrac{1}{2}\\cdot 6\\cdot AC\\cdot\\sin 120^\\circ=12\\sqrt{3}\\Rightarrow AC=8$.<br>  Suy ra $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos A$<br>  $\\Rightarrow BC^{2}=6^{2}+8^{2}-2\\cdot 6\\cdot 8\\cdot\\cos 120^\\circ=148$.  $\\Rightarrow BC=2\\sqrt{37}$.<br>- Bán kính đường tròn ngoại tiếp tam giác $\\triangle ABC$ là $R$. Ta có<br>  $S_{ABC}=\\dfrac{AB\\cdot AC\\cdot BC}{4\\cdot R}\\Rightarrow R=\\dfrac{AB\\cdot AC\\cdot BC}{4 S_{ABC}}=\\dfrac{6\\cdot 8\\cdot 2\\sqrt{37}}{4\\cdot 12\\sqrt{3}}=\\dfrac{2\\sqrt{111}}{3}$<br>- Gọi $M$ là chân đường phân giác góc $A$. Ta có <br>  $S_{ABC}=S_{ABM}+S_{ACM} \\Rightarrow \\dfrac{1}{2} AB \\cdot AC \\sin \\widehat{BAC}=\\dfrac{1}{2} AB \\cdot AM \\sin \\dfrac{\\widehat{BAC}}{2}+\\dfrac{1}{2} AC \\cdot AM \\sin \\dfrac{\\widehat{BAC}}{2}$.<br>  Do đó $AM = \\dfrac{ AB \\cdot AC \\sin \\widehat{BAC}}{ \\left(AB + AC\\right) \\sin \\dfrac{\\widehat{BAC}}{2}} = \\dfrac{ 6 \\cdot 8 \\sin 120^\\circ}{ \\left(6 + 8\\right) \\sin 60^\\circ} = \\dfrac{24}{7}$."
  },
  {
    "id": "0H421DS3",
    "question": "Cho $\\triangle ABC$ có $BC=a$, $CA=b$, $AB=c$ và bán kính đường tròn ngoại tiếp $R$.",
    "subQuestions": [
      {
        "text": "$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}=R$",
        "answer": false
      },
      {
        "text": "Nếu $a=50\\mathrm{~cm}$, $\\widehat{B}=65^\\circ$ và $\\widehat{C}=45^\\circ$ thì bán kính đường tròn ngoại tiếp làm tròn kết quả đến hàng phần mười là $R\\approx 26{,}6\\mathrm{~cm}$",
        "answer": true
      },
      {
        "text": "Nếu $a=10$, $\\widehat{B}=80^\\circ$, $R=10$ thì góc $\\widehat{C}=60^\\circ$",
        "answer": false
      },
      {
        "text": "Giả sử tam giác $ABC$ được bạn An đã cắt từ một tấm tôn hình tròn có bán kính $R=1~\\mathrm{(m)}$. Để tam giác $ABC$ có $A=45^\\circ,B=75^\\circ$ thì An phải cắt miếng tôn theo hai dây cung $AB\\approx 1{,}73(\\mathrm{~m})$ và $BC\\approx 1{,}41(\\mathrm{~m})$.(kết quả làm tròn đến hàng phần trăm)",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}=2 R$.<br>- Vì $A+B+C=180^\\circ\\Rightarrow A=180^\\circ-\\left(65^\\circ+45^\\circ\\right)=70^\\circ$.<br>  Ta có $\\dfrac{a}{\\sin A}=2 R$ nên $R=\\dfrac{50}{2\\cdot\\sin 70^\\circ}\\approx 26{,}6$.<br>- Ta có $\\dfrac{a}{\\sin A}=2R \\Rightarrow \\sin A=\\dfrac{a}{2R}=\\dfrac{10}{20}=\\dfrac{1}{2}$. Vì $B=80^\\circ$ nên $A&lt;100^\\circ$, suy ra $A=30^\\circ$. Vậy $C=180^\\circ-80^\\circ-30^\\circ=70^\\circ$.<br>- Xét tam giác $ABC$ ta có $A+B+C=180^\\circ\\Rightarrow C=180^\\circ-45^\\circ-75^\\circ=60^\\circ$.<br>  Áp dụng định lý sin ta có $\\dfrac{AB}{\\sin C}=\\dfrac{BC}{\\sin A}=2 R=2$.<br>  Suy ra $AC=2\\sin C=2\\sin 60^\\circ\\approx 1{,}73(\\mathrm{~m})$ và $BC=2\\sin A=2\\sin 45^\\circ\\approx 1{,}41(\\mathrm{~m})$."
  },
  {
    "id": "0H424DS4",
    "question": "Cho $\\triangle ABC$ có $BC=a$, $CA=b$, $AB=c$ và bán kính đường tròn ngoại tiếp $R$.",
    "subQuestions": [
      {
        "text": "$a\\sin C=c\\sin A$",
        "answer": true
      },
      {
        "text": "Nếu $a=7$, $B=60^\\circ$ và $C=75^\\circ$ thì $b=\\dfrac{7\\sqrt{6}}{2}$",
        "answer": true
      },
      {
        "text": "Nếu $a=7$, $B=60^\\circ$ và $C=75^\\circ$ thì $R=7\\sqrt{2}$",
        "answer": false
      },
      {
        "text": "Nếu $4\\sin A=3\\sin B-2\\sin C$ và $b=2 c$ thì $\\triangle ABC$ vuông tại $A$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $\\dfrac{a}{\\sin A}=\\dfrac{c}{\\sin C}\\Leftrightarrow a\\sin C=c\\sin A$.<br>- Ta có $A+B+C=180^\\circ\\Rightarrow A=180^\\circ-\\left(60^\\circ+75^\\circ\\right)=45^\\circ$.<br>  Mà $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}$ nên $b=\\dfrac{7\\cdot\\sin 60^\\circ}{\\sin 45^\\circ}=\\dfrac{7\\sqrt{6}}{2}$.<br>- Ta có $\\dfrac{a}{\\sin A}=2 R$ nên $R=\\dfrac{7}{2\\cdot\\sin 45^\\circ}=\\dfrac{7\\sqrt{2}}{2}$.<br>- Ta có $4\\sin A=3\\sin B-2\\sin C\\Leftrightarrow\\dfrac{4a}{2R}=\\dfrac{3b}{2R}-\\dfrac{2c}{2R}\\Leftrightarrow 4a=3b-2c$.<br>  Mà $b=2c$ nên $4a=6c-2c\\Leftrightarrow 4a=4c\\Leftrightarrow a=c$.<br>  Suy ra $\\triangle ABC$ cân tại $B$ nên không thể vuông tại $A$."
  },
  {
    "id": "0H422DS5",
    "question": "Cho tam giác $ABC$ có $a=13$, $b=8$, $c=7$. Các mệnh đề sau đây đúng hay sai?",
    "subQuestions": [
      {
        "text": "Góc $A$ bằng $60^\\circ$",
        "answer": false
      },
      {
        "text": "Diện tích tam giác $AB C$ là $14\\sqrt{3}$",
        "answer": true
      },
      {
        "text": "Chiều cao từ $A$ đến $B C$ là $\\dfrac{28\\sqrt{3}}{13}$",
        "answer": true
      },
      {
        "text": "Bán kính đường tròn nội tiếp tam giác $AB C\\sqrt{3}$",
        "answer": true
      }
    ],
    "explain": "<br>- $a^{2}=b^{2}+c^{2}-2 b c\\cos A\\Rightarrow\\cos A=\\dfrac{b^{2}+c^{2}-a^{2}}{2 b c}=-\\dfrac{1}{2}\\Rightarrow A=120^\\circ$.<br>- $S=\\dfrac{1}{2}b c\\sin A=\\dfrac{1}{2}56\\cdot\\dfrac{\\sqrt{3}}{2}=14\\sqrt{3}$.<br>- $S=\\dfrac{1}{2}a\\cdot h_{a}\\Rightarrow h_{a}=\\dfrac{2 S}{a}=\\dfrac{28\\sqrt{3}}{13}$.<br>- $S=p\\cdot r\\Rightarrow r=\\dfrac{2 S}{a+b+c}=\\dfrac{2.14\\sqrt{3}}{7+8+13}=\\sqrt{3}$."
  },
  {
    "id": "0H422DS6",
    "question": "Cho tam giác $ABC$ có $BC=a=7$; $AC=b=8$; $AB=c=5$.",
    "subQuestions": [
      {
        "text": "Góc $\\widehat{BAC}=60^\\circ$",
        "answer": true
      },
      {
        "text": "Diện tích tam giác $ABC$ là $10\\sqrt{3}$",
        "answer": true
      },
      {
        "text": "Chiều cao từ $A$ đến $BC$ là $\\dfrac{20\\sqrt{3}}{7}$",
        "answer": true
      },
      {
        "text": "Bán kính đường tròn ngoại tiếp tam giác $ABC$ bằng $\\dfrac{7\\sqrt{3}}{3}$",
        "answer": true
      }
    ],
    "explain": "<br>- $\\cos A=\\dfrac{b^{2}+c^{2}-a^{2}}{2bc}=\\dfrac{8^{2}+5^{2}-7^{2}}{2\\cdot 8\\cdot 5}=\\dfrac{1}{2}\\Rightarrow A=60^\\circ$.<br>- $S=\\dfrac{1}{2} b\\cdot c \\cdot \\sin A=\\dfrac{1}{2}\\cdot 8\\cdot 5\\cdot\\sin 60^\\circ=10\\sqrt{3}$.<br>- Ta có $S=\\dfrac{1}{2}a \\cdot h_{a}\\Rightarrow h_{a}=\\dfrac{2 S}{a}=\\dfrac{2 \\cdot 10\\sqrt{3}}{7}=\\dfrac{20\\sqrt{3}}{7}$.<br>- Ta có: $S=\\dfrac{a\\cdot b\\cdot c}{4R}\\Rightarrow R=\\dfrac{a\\cdot b\\cdot c}{4 S}=\\dfrac{7 \\cdot 8\\cdot 5}{4\\cdot 10\\sqrt{3}}=\\dfrac{7\\sqrt{3}}{3}$."
  },
  {
    "id": "0H421DS7",
    "question": "Cho tam giác $\\triangle ABC$ có $AC=b=7$; $AB=c=5$; $\\cos A=\\dfrac{3}{5}$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Góc $A$ là góc tù",
        "answer": false
      },
      {
        "text": "$a=4\\sqrt{2}$",
        "answer": true
      },
      {
        "text": "$\\sin A=-\\dfrac{4}{5}$",
        "answer": false
      },
      {
        "text": "Độ dài đường cao hạ từ đỉnh $A$ bằng $\\dfrac{7\\sqrt{2}}{2}$",
        "answer": true
      }
    ],
    "explain": "<br>- $\\cos A=\\dfrac{3}{5}&gt;0\\Rightarrow A$ nhọn.<br>- $a=\\sqrt{b^{2}+c^{2}-2bc\\cos A}=\\sqrt{7^{2}+5^{2}-2\\cdot 7\\cdot 5\\cdot\\dfrac{3}{5}}=\\sqrt{32}=4\\sqrt{2}$.<br>- $\\sin^{2}A=1-\\cos^{2}A=1-\\left(\\dfrac{3}{5}\\right)^{2}=\\dfrac{16}{25}$.<br>  Suy ra $\\sin A=\\dfrac{4}{5} \\text{ hoặc } \\sin A=-\\dfrac{4}{5}$ vì $0\\leq A\\leq 180^\\circ$ nên $\\sin A=\\dfrac{4}{5}$.<br>- $S=\\dfrac{1}{2}bc\\sin A=\\dfrac{1}{2}\\cdot 7\\cdot 5\\cdot\\dfrac{4}{5}=14$<br>  mà $S=\\dfrac{1}{2}a\\cdot h_{a}\\Leftrightarrow 14=\\dfrac{1}{2}\\cdot 4\\sqrt{2}\\cdot h_{a}\\Leftrightarrow h_{a}=\\dfrac{7\\sqrt{2}}{2}$."
  },
  {
    "id": "0H422DS8",
    "question": "Cho tam giác $ABC$ có $AB=2$; $AC=3$; $BC=4$. Xét tính đúng sai của các mệnh đề sau.<br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Diện tích của tam giác $ABC$ là $S_{ABC}=\\dfrac{3\\sqrt{15}}{4}$",
        "answer": true
      },
      {
        "text": "Bán kính đường tròn nội tiếp của tam giác $ABC$ là $r=\\dfrac{\\sqrt{15}}{5}$",
        "answer": false
      },
      {
        "text": "Gọi $M$, $N$ lần lượt là trung điểm của cạnh $AC$ và $AB$. Khi đó, $S_{ANC}&lt;S_{AMB}$",
        "answer": false
      },
      {
        "text": "Gọi $D$ là điểm đối xứng của $N$ qua $B$. Khi đó, $\\cos \\widehat{NCD}=\\dfrac{2\\sqrt{115}}{23}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $S_{ABC}=\\sqrt{p(p-AB)(p-AC)(p-BC)}=\\dfrac{3\\sqrt{15}}{4}$.<br>- Ta có: $S_{ABC}=p\\cdot r\\Rightarrow r=\\dfrac{S_{ABC}}{p}=\\dfrac{\\sqrt{15}}{6}\\neq\\dfrac{\\sqrt{15}}{5}$.<br>- Ta có $\\dfrac{S_{ANC}}{S_{ABC}}=\\dfrac{\\dfrac{1}{2}AN\\cdot AC\\cdot\\sin \\widehat{BAC}}{\\dfrac{1}{2}AC\\cdot AB\\cdot\\sin \\widehat{BAC}}=\\dfrac{AN}{AB}=\\dfrac{1}{2}\\Rightarrow S_{ANC}=\\dfrac{1}{2}S_{ABC}$.<br>  Tương tự $\\dfrac{S_{AMB}}{S_{ABC}}=\\dfrac{\\dfrac{1}{2}AM\\cdot AB\\cdot\\sin \\widehat{BAC}}{\\dfrac{1}{2}AC\\cdot AB\\cdot\\sin \\widehat{BAC}}=\\dfrac{AM}{AC}=\\dfrac{1}{2}\\Rightarrow S_{AMB}=\\dfrac{1}{2}S_{ABC}$.<br>  Khi đó $S_{ANC}=S_{AMB}$.<br>- Ta có $ND=2 NB=2\\Rightarrow AD=3$.<br>  Ta có $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos \\widehat{BAC}\\Rightarrow\\cos \\widehat{BAC}=-\\dfrac{1}{4}$.<br>  Ta có $CD^{2}=AD^{2}+AC^{2}-2\\cdot AD\\cdot AC\\cdot\\cos \\widehat{BAC}\\Rightarrow CD=\\dfrac{3\\sqrt{10}}{2}$.<br>  Ta có $CN^{2}=\\dfrac{2\\left(CA^{2}+CB^{2}\\right)-AB^{2}}{4}\\Rightarrow CN=\\dfrac{\\sqrt{46}}{2}$.<br>  Ta có $DN^{2}=CN^{2}+CD^{2}-2 CN\\cdot CD\\cdot\\cos \\widehat{NCD}\\Rightarrow\\cos \\widehat{NCD}=\\dfrac{2\\sqrt{115}}{23}$."
  },
  {
    "id": "0H422DS9",
    "question": "Cho tam giác $ABC$ cân tại $A$ có $C=30^\\circ$, $BC=3\\mathrm{~cm}$. Xét tính đúng sai của các khẳng định sau.",
    "subQuestions": [
      {
        "text": "Bán kính đường tròn ngoại tiếp của tam giác $ABC$ là $R=\\sqrt{3}$",
        "answer": true
      },
      {
        "text": "Diện tích tam giác $ABC$ là $\\dfrac{\\sqrt{3}}{4}\\mathrm{~cm}^{2}$",
        "answer": false
      },
      {
        "text": "$MB\\perp NC$ ở đó $M$, $N$ là trung điểm của $AC$ và $AB$",
        "answer": false
      },
      {
        "text": "Trên tia đối của tia $AC$ ta lấy $D$ sao cho $BD=\\dfrac{3\\sqrt{2}}{2}\\mathrm{~cm}$. Khi đó $\\cos \\widehat{ABD}=\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Do tam giác $ABC$ cân tại $A$ nên $B=C=30^\\circ\\Rightarrow A=120^\\circ$.<br>  Theo định lí sin ta có: $R=\\dfrac{BC}{2\\sin A}=\\dfrac{3}{2\\cdot\\dfrac{\\sqrt{3}}{2}}=\\sqrt{3}$.<br>- Theo định lí sin ta có: $AB=2 R\\cdot\\sin C=2\\cdot\\sqrt{3}\\cdot\\sin 30^\\circ=2\\cdot\\sqrt{3}\\cdot\\dfrac{1}{2}=\\sqrt{3}\\Rightarrow AC=\\sqrt{3}$.<br>  Diện tích tam giác $ABC$ là $S=\\dfrac{1}{2}AB\\cdot AC\\cdot\\sin A=\\dfrac{1}{2}\\cdot\\sqrt{3}\\cdot\\sqrt{3}\\cdot\\dfrac{\\sqrt{3}}{2}=\\dfrac{3\\sqrt{3}}{4}\\mathrm{~cm}^{2}$.<br>- Do tam giác $ABC$ cân tại $A$ nên $BM=CN$.<br>  Áp dụng công thức đường trung tuyến ta được:  $BM^{2}=CN^{2}=\\dfrac{BC^{2}+AB^{2}}{2}-\\dfrac{AC^{2}}{4}=\\dfrac{3^{2}+\\sqrt{3}^{2}}{2}-\\dfrac{\\sqrt{3}^{2}}{4}=\\dfrac{21}{4}.$  $\\Rightarrow BM=CN=\\dfrac{\\sqrt{21}}{2}$.  Gọi $G$ là trọng tâm tam giác $ABC$. Suy ra $GB=GC=\\dfrac{2}{3}BM=\\dfrac{2}{3}\\cdot\\dfrac{\\sqrt{21}}{2}=\\dfrac{\\sqrt{21}}{3}$.<br>  Xét tam giác $GBC$ ta thấy $GB^{2}+GC^{2}=\\dfrac{42}{9}\\neq BC^{2}$ nên $GB$ không vuông góc $GC$.<br>- Xét tam giác $ABD$ có $\\widehat{DAB}=60^\\circ$. Áp dụng định lí cô-sin vào tam giác $ABD$ có  $BD^{2}=AB^{2}+AD^{2}-2\\cdot AB\\cdot AD\\cdot\\cos \\widehat{DAB}$<br>$\\Leftrightarrow 3+AD^{2}-2\\cdot\\sqrt{3}\\cdot AD\\cdot\\dfrac{1}{2}=\\dfrac{9}{2}$<br>$\\Leftrightarrow 2 AD^{2}-2\\sqrt{3}\\cdot AD-3=0$<br>$\\Leftrightarrow A D=\\dfrac{\\sqrt{3}+3}{2} \\text{(thoả)} \\text{ hoặc } A D=\\dfrac{\\sqrt{3}-3}{2} \\text{(không thoả).}$  Ta có $\\cos \\widehat{ABD}=\\dfrac{AB^{2}+BD^{2}-AD^{2}}{2\\cdot AB\\cdot BD}=\\dfrac{3+\\dfrac{9}{2}-\\dfrac{6+3\\sqrt{3}}{2}}{2\\cdot\\sqrt{3}\\cdot\\dfrac{3\\sqrt{2}}{2}}=\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}$."
  },
  {
    "id": "0H421DS10",
    "question": "Tam giác $ABC$ có $2\\sin A=\\sin B$; $c=2$ và $a^{2}+b^{2}=15$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Độ dài cạnh $AB$ lớn nhất",
        "answer": false
      },
      {
        "text": "Độ dài cạnh $BC=\\sqrt{3}$",
        "answer": true
      },
      {
        "text": "$\\cos C=\\dfrac{11}{12}$",
        "answer": true
      },
      {
        "text": "Bán kính đường tròn nội tiếp tam giác là $r=\\dfrac{3\\sqrt{69}-2\\sqrt{23}}{46}$",
        "answer": true
      }
    ],
    "explain": "<br>- Áp dụng định lý sin ta có $a = 2R\\sin A$; $b=2R\\sin B$ nên $2\\sin A=\\sin B\\Rightarrow 2a=b$ mà $a^{2}+b^{2}=15\\Rightarrow a^{2}+4 a^{2}=15\\Rightarrow a=\\sqrt{3}\\Rightarrow b=2\\sqrt{3}$.<br>  Do đó $b&gt;c&gt;a\\Rightarrow \\widehat{ABC}$ là góc lớn nhất.<br>- Ta có $BC=a=\\sqrt{3}$.<br>- Áp dụng định lý cô-sin ta có $\\cos C=\\dfrac{a^{2}+b^{2}-c^{2}}{2\\cdot a\\cdot b}=\\dfrac{11}{12}$.<br>- Ta có $p=\\dfrac{a+b+c}{2}=\\dfrac{3\\sqrt{3}+2}{2}$.<br>  Diện tích tam giác $S=\\sqrt{p(p-a)(p-b)(p-c)}=pr\\Rightarrow r=\\dfrac{\\sqrt{p(p-a)(p-b)(p-c)}}{p}=\\dfrac{3\\sqrt{69}-2\\sqrt{23}}{46}$."
  },
  {
    "id": "0H422DS11",
    "question": "Cho tam giác $ABC$ biết $AB=2$; $AC=5$; $\\widehat{BAC}=60^\\circ$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Bán kính đường tròn ngoại tiếp tam giác $ABC$ là $R=\\dfrac{BC}{2\\cdot\\sin \\widehat{BAC}}$",
        "answer": true
      },
      {
        "text": "Độ dài cạnh $BC$ bằng $2\\sqrt{6}$",
        "answer": false
      },
      {
        "text": "Diện tích tam giác $ABC$ bằng $\\dfrac{5\\sqrt{3}}{2}$",
        "answer": true
      },
      {
        "text": "Gọi $E$ là điểm thỏa mãn $\\overrightarrow{BE}=3\\overrightarrow{CE}$. Bán kính đường tròn ngoại tiếp tam giác $ABE$ bằng $\\dfrac{19\\sqrt{11343}}{285}$",
        "answer": true
      }
    ],
    "explain": "<br>- Áp dụng định lý sin cho tam giác $ABC$ ta có $\\dfrac{BC}{\\sin \\widehat{BAC}}=2R\\Leftrightarrow R=\\dfrac{BC}{2\\cdot\\sin \\widehat{BAC}}$.<br>- Áp dụng định lý cos cho tam giác $ABC$ ta có $BC^{2}=2^{2}+5^{2}-2\\cdot 2\\cdot 5\\cdot\\cos 60^\\circ=19\\Rightarrow BC=\\sqrt{19}$.<br>- Ta có diện tích tam giác $ABC$ là $S=\\dfrac{1}{2}AB\\cdot AC\\cdot\\sin \\widehat{BAC}=\\dfrac{1}{2}\\cdot 2\\cdot 5\\cdot\\sin 60^\\circ=\\dfrac{5\\sqrt{3}}{2}$.<br>- Ta có $BE=\\dfrac{3}{2}BC=\\dfrac{3\\sqrt{19}}{2}$.<br>  Từ định lý $\\cos$ cho tam giác $ABC$ ta có $\\cos B=\\dfrac{BA^{2}+BC^{2}-AC^{2}}{2\\cdot AB\\cdot BC}=\\dfrac{4+19-25}{2\\cdot 2\\cdot\\sqrt{19}}=-\\dfrac{1}{2\\sqrt{19}}\\Rightarrow\\sin B=\\sqrt{1-\\cos^{2}B}=\\dfrac{5\\sqrt{57}}{38}$.<br>  Áp dụng định lý cos cho tam giác $ABE$ ta có $AE^{2}=AB^{2}+BE^{2}-2\\cdot AB\\cdot BE\\cdot\\cos B=4+\\left(\\dfrac{3\\sqrt{19}}{2}\\right)^{2}-2\\cdot 2\\cdot\\dfrac{3\\sqrt{19}}{2}\\cdot\\left(-\\dfrac{1}{2\\sqrt{19}}\\right)=\\dfrac{199}{4}$  $\\Rightarrow AE=\\dfrac{\\sqrt{199}}{2}$.  Vậy bán kính đường tròn ngoại tiếp tam giác $ABE$ là $R_{1}=\\dfrac{AE}{2\\sin B}=\\dfrac{\\sqrt{199}}{2\\cdot\\dfrac{5\\sqrt{57}}{38}}=\\dfrac{19\\sqrt{199}}{5\\sqrt{57}}=\\dfrac{19\\sqrt{11343}}{285}.$"
  },
  {
    "id": "0H422DS12",
    "question": "Cho tam giác $ABC$ có cạnh $AB=c$, $BC=a$, $CA=b$.",
    "subQuestions": [
      {
        "text": "Khi $a=b=c=5$ thì $\\cot A=\\dfrac{1}{\\sqrt{3}}$",
        "answer": true
      },
      {
        "text": "Khi $a=\\sqrt{2}b=\\sqrt{2}c$ thì $\\cot A=1$",
        "answer": false
      },
      {
        "text": "$\\cot A=\\dfrac{b^{2}+c^{2}-a^{2}}{5S}$ ,với $S$ là diện tích tam giác $ABC$",
        "answer": false
      },
      {
        "text": "$\\cot A+\\cot B+\\cot C=\\dfrac{b^{2}+c^{2}+a^{2}}{4 S}$ ,với $S$ là diện tích tam giác $ABC$",
        "answer": true
      }
    ],
    "explain": "<br>- Khi $a=b=c=5$ thì tam giác $ABC$ đều nên $\\cot A=\\cot 60^\\circ=\\dfrac{1}{\\sqrt{3}}$<br>- Khi $a=\\sqrt{2}b=\\sqrt{2}c\\Leftrightarrow b=c=\\dfrac{a}{\\sqrt{2}}$ suy ra tam giác $ABC$ vuông cân tại $A$.<br>  Do đó $\\cot A=\\cot 90^\\circ=0$.<br>- Theo định lí sin và định lí côsin ta có  $\\sin A=\\dfrac{a}{2 R};\\cos A=\\dfrac{b^{2}+c^{2}-a^{2}}{2 bc},(R$ là bán kính đường tròn ngoại tiếp tam giác $ABC)$.<br>  Và công thức $S=\\dfrac{abc}{4 R}\\Leftrightarrow\\dfrac{R}{abc}=\\dfrac{1}{4 S}$.<br>  Khi đó $\\cot A=\\dfrac{\\cos A}{\\sin A}=\\dfrac{b^{2}+c^{2}-a^{2}}{2 bc}:\\dfrac{a}{2 R}=\\dfrac{b^{2}+c^{2}-a^{2}}{abc}R=\\dfrac{b^{2}+c^{2}-a^{2}}{4S}$.<br>- Ta lại có $\\cot B=\\dfrac{a^{2}+c^{2}-b^{2}}{4 S};\\cot C=\\dfrac{a^{2}+b^{2}-c^{2}}{4 S}$.<br>  Khi đó $\\cot A+\\cot B+\\cot C=\\dfrac{b^{2}+c^{2}-a^{2}}{4 S}+\\dfrac{a^{2}+c^{2}-b^{2}}{4 S}+\\dfrac{a^{2}+b^{2}-c^{2}}{4 S}=\\dfrac{b^{2}+c^{2}+a^{2}}{4 S}$."
  },
  {
    "id": "0H422DS13",
    "question": "Cho tam giác $ABC$ với $AB=2,BC=3,CA=4$. Xét tính đúng, sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Tam giác $ABC$ có diện tích bằng $\\sqrt{2}$",
        "answer": false
      },
      {
        "text": "Tam giác $ABC$ có chiều cao $AH=1$",
        "answer": false
      },
      {
        "text": "Tam giác $ABC$ có góc $B$ là góc tù",
        "answer": true
      },
      {
        "text": "Tam giác $ABC$ có tổng độ dài bán kính đường tròn nội tiếp và ngoại tiếp bằng $\\dfrac{7\\sqrt{15}}{10}$",
        "answer": true
      }
    ],
    "explain": "<br>- Trong tam giác $ABC$ có $p=\\dfrac{2+3+4}{2}=\\dfrac{9}{2}$ nên theo công thức Hê-rông ta có $S=\\sqrt{p(p-a)(p-b)(p-c)}=\\dfrac{3\\sqrt{15}}{4}$.<br>- $S=\\dfrac{1}{2}AH\\cdot BC\\Leftrightarrow AH=\\dfrac{2S}{BC}=\\dfrac{\\sqrt{15}}{2}$.<br>- Theo định lí cô-sin, $\\cos B=\\dfrac{AB^{2}+BC^{2}-AC^{2}}{2\\cdot AB\\cdot BC}=\\dfrac{2^{2}+3^{2}-4^{2}}{2\\cdot 2\\cdot 3}=-\\dfrac{1}{4}&lt;0 \\Rightarrow B&gt;90^\\circ$.<br>- Ta có $S=\\dfrac{a b c}{4 R}\\Leftrightarrow R=\\dfrac{a b c}{4 S}=\\dfrac{2.3\\cdot 4}{4\\cdot\\dfrac{3\\sqrt{15}}{4}}=\\dfrac{8\\sqrt{15}}{15}$.<br>  Lại có $S=pr\\Leftrightarrow r=\\dfrac{S}{p}=\\dfrac{\\sqrt{15}}{6}$.<br>  Vậy $R+r=\\dfrac{8\\sqrt{15}}{15}+\\dfrac{\\sqrt{15}}{6}=\\dfrac{7\\sqrt{15}}{10}$."
  },
  {
    "id": "0H421DS14",
    "question": "Từ vị trí $A$ người ta quan sát một cây cao (hình vẽ). Biết $AH=4\\mathrm{~m}$, $HB=20\\mathrm{~m}$, $\\widehat{BAC}=45^\\circ$.  <br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Độ dài đoạn $AB=24$",
        "answer": false
      },
      {
        "text": "$\\tan \\widehat{ABH}=\\dfrac{1}{5}$",
        "answer": true
      },
      {
        "text": "Số đo góc $\\widehat{ACB}$ làm tròn đến phút là $56^\\circ 18'$",
        "answer": true
      },
      {
        "text": "Độ dài đoạn $BC=\\dfrac{52}{3}$",
        "answer": true
      }
    ],
    "explain": "<br>- Độ dài $AB=\\sqrt{4^{2}+20^{2}}=4\\sqrt{26}$.<br>- Xét tam giác vuông $AHB$ có $\\tan \\widehat{ABH}=\\dfrac{AH}{BH}=\\dfrac{4}{20}=\\dfrac{1}{5}$.<br>- Góc $\\widehat{CBA}=90^\\circ-\\widehat{ABH}\\approx 78^\\circ 41'\\Rightarrow \\widehat{ACB} = 180^\\circ-45^\\circ-\\widehat{CBA}\\approx 56^\\circ 18'$.<br>- Áp dụng định lí sin trong tam giác $ABC$ ta có $\\dfrac{BC}{\\sin 45^\\circ}=\\dfrac{AB}{\\sin\\widehat{ACB}}\\Rightarrow BC=\\dfrac{AB\\cdot\\sin 45^\\circ}{\\sin \\widehat{ACB}}=\\dfrac{52}{3}$."
  },
  {
    "id": "0H422DS15",
    "question": "Cho tam giác $ABC$ có $AB=2\\sqrt{3},AC=3$ và $\\cos A=\\dfrac{-\\sqrt{3}}{9}$.",
    "subQuestions": [
      {
        "text": "Góc nhỏ nhất trong tam giác là góc $B$",
        "answer": false
      },
      {
        "text": "Độ dài cạnh $BC$ là $5$",
        "answer": true
      },
      {
        "text": "Gọi $M$ là trung điểm của cạnh $AC$. Độ dài cạnh $BM$ là $\\sqrt{13}$",
        "answer": false
      },
      {
        "text": "Diện tích của tam giác $ABC$ là $\\sqrt{26}$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $\\cos A=\\dfrac{-\\sqrt{3}}{9}$ nên góc $A$ là góc lớn nhất<br>  mà $AB&lt;AC\\Rightarrow C&lt;B$. Vậy góc $C$ là góc nhỏ nhất trong tam giác $ABC$.<br>- Theo định lí cô-sin trong tam giác ta có  $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos A = 3^{2}+ (2\\sqrt{3})^{2}-2\\cdot 3\\cdot 2\\sqrt{3}\\cdot\\dfrac{-\\sqrt{3}}{9}=25\\Rightarrow BC=5.$<br>- Theo định lí cô-sin trong tam giác $AMB$ ta có  $BM^{2}=AB^{2}+AM^{2}-2 AB\\cdot AM\\cdot\\cos A=3^{2}+(\\sqrt{3})^{2}-2\\cdot 3\\cdot\\sqrt{3}\\cdot\\dfrac{-\\sqrt{3}}{9}=14 \\Rightarrow BM=\\sqrt{14}.$<br>- Ta có $\\sin A=\\sqrt{1-\\cos^{2}A}=\\sqrt{1-\\left(\\dfrac{-\\sqrt{3}}{9}\\right)^{2}}=\\dfrac{\\sqrt{78}}{9}$.<br>  Diện tích của tam giác $ABC$ là $S=\\dfrac{1}{2}AB\\cdot AC\\cdot\\sin A=\\dfrac{1}{2}\\cdot 2\\sqrt{3}\\cdot 3\\cdot\\dfrac{\\sqrt{78}}{9}=\\sqrt{26}$."
  },
  {
    "id": "0H421DS16",
    "question": "Cho tam giác $ABC$ có $AB=6;AC=8;\\widehat{BAC}=90^\\circ$. Gọi $D,E$ là các điểm thuộc cạnh $BC$ sao cho $CD=BE=\\dfrac{1}{4}BC$.",
    "subQuestions": [
      {
        "text": "Tam giác $ABC$ vuông cân",
        "answer": false
      },
      {
        "text": "Độ dài cạnh $BC=10$",
        "answer": true
      },
      {
        "text": "Số đo góc $\\widehat{ABC}=60^\\circ$",
        "answer": false
      },
      {
        "text": "Số đo góc $\\widehat{EAD}\\approx 52^\\circ$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $AB=6;AC=8\\Rightarrow\\triangle ABC$ không cân.<br>- Ta có $BC^{2}=AB^{2}+AC^{2}=6^{2}+8^{2}=100\\Rightarrow BC=10$.<br>- Xét $\\triangle ABC:\\tan \\widehat{ABC}=\\dfrac{AC}{AB}=\\dfrac{8}{6}=\\dfrac{4}{3}\\Rightarrow \\widehat{ABC}\\approx 53^\\circ$.  Vậy $A B C=60^\\circ$ (sai)<br>- Vì $CD=BE=\\dfrac{1}{4}BC\\Rightarrow CD=BE=\\dfrac{5}{2}\\Rightarrow DE=5$.<br>  Vì $\\triangle ABC$ vuông tại $A$ suy ra $\\cos \\widehat{ABC}=\\dfrac{AB}{BC}=\\dfrac{3}{5};\\cos \\widehat{ACB}=\\dfrac{AC}{BC}=\\dfrac{4}{5}$.<br>  Áp dụng định lí cô sin cho $\\triangle ABE$ và $\\triangle ACD$ có $AE^{2}=AB^{2}+BE^{2}-2 AB\\cdot BE\\cdot\\cos \\widehat{ABE}=6^{2}+\\left(\\dfrac{5}{2}\\right)^{2}-2\\cdot 6\\cdot\\dfrac{5}{2}\\cdot\\dfrac{3}{5}=\\dfrac{97}{4}\\Rightarrow AE=\\dfrac{\\sqrt{97}}{2}.$  $AD^{2}=AC^{2}+CD^{2}-2 AC\\cdot CD\\cdot\\cos \\widehat{ACD}=8^{2}+\\left(\\dfrac{5}{2}\\right)^{2}-2\\cdot 8\\cdot\\dfrac{5}{2}\\cdot\\dfrac{4}{5}=\\dfrac{153}{4}\\Rightarrow AD=\\dfrac{\\sqrt{153}}{2}$.<br>  $\\cos \\widehat{DAE}=\\dfrac{AD^{2}+AE^{2}-DE^{2}}{2\\cdot AD\\cdot AE}=\\dfrac{\\dfrac{153}{4}+\\dfrac{97}{4}-5^{2}}{2\\cdot\\dfrac{\\sqrt{153}}{2}\\cdot\\dfrac{\\sqrt{97}}{2}}\\approx 0{,}6156 \\Rightarrow \\widehat{DAE}\\approx 52^\\circ$."
  },
  {
    "id": "0H421DS17",
    "question": "Cho tam giác $ABC$ có $AB=15$, $AC=20$ và $\\widehat{BAC}=60^\\circ$. Gọi $R$, $r$ lần lượt là bán kính đường tròn ngoại tiếp, nội tiếp tam giác $ABC$. Các kết quả làm tròn đến hàng đơn vị.",
    "subQuestions": [
      {
        "text": "$BC=18$",
        "answer": true
      },
      {
        "text": "$\\widehat{ABC}=75^\\circ$",
        "answer": false
      },
      {
        "text": "$S=129$",
        "answer": false
      },
      {
        "text": "$2R-5r&lt;0$",
        "answer": true
      }
    ],
    "explain": "<br>- Áp dụng định lí cô-sin trong tam giác $ABC$, ta có  $BC^{2}=AB^{2}+AC^{2}-2\\cdot AB\\cdot AC\\cdot\\cos A=15^{2}+20^{2}-2\\cdot 15\\cdot 20\\cdot\\cos 60^\\circ=325.$  Do đó $BC=\\sqrt{325}\\approx 18$.<br>- Ta có   $\\cos B=\\dfrac{AB^{2}+BC^{2}-AC^{2}}{2\\cdot AB\\cdot BC}=\\dfrac{5^{2}+18^{2}-20^{2}}{2\\cdot 15\\cdot 18}=\\dfrac{149}{540}.$  Do đó $\\widehat{ABC}\\approx 74^\\circ$.<br>- Diện tích tam giác $ABC$ là $S=\\dfrac{1}{2}AB\\cdot AC\\cdot\\sin \\widehat{BAC}=\\dfrac{1}{2}\\cdot 15\\cdot 20\\cdot\\sin 60^\\circ=75\\sqrt{3}\\approx 130$.<br>- Áp dụng định lí Sin trong tam giác $A B C$ ,ta có  $2 R=\\dfrac{BC}{\\sin A} \\Leftrightarrow R=\\dfrac{BC}{2\\cdot\\sin A}=\\dfrac{\\sqrt{325}}{2\\cdot\\sin 60^\\circ}=\\sqrt{\\dfrac{325}{3}}.$  Lại có $S=r\\cdot \\dfrac{a+b+c}{2}\\Leftrightarrow r=\\dfrac{2S}{a+b+c}=\\dfrac{2.75\\sqrt{3}}{15+\\sqrt{325}+20}\\approx 4{,}9$.<br>  Do đó $2R-5r&lt;0$."
  },
  {
    "id": "0H421DS18",
    "question": "Cho tam giác $ABC$ có $BC=12~(\\mathrm{cm})$, $AC=15~(\\mathrm{cm})$, $C=120^\\circ$. Các độ dài đoạn thẳng làm tròn đến hàng phần trăm và số đo góc làm tròn đến độ.",
    "subQuestions": [
      {
        "text": "$AB^{2}=AC^{2}+CB^{2}+2 BC\\cdot AC\\cdot\\cos C$",
        "answer": false
      },
      {
        "text": "$\\widehat{BAC}=26^\\circ$",
        "answer": true
      },
      {
        "text": "Độ dài đường cao hạ từ $C$ của tam giác là $CH=6{,}65~(\\mathrm{cm})$",
        "answer": true
      },
      {
        "text": "Độ dài đường phân giác trong hạ từ $C$ là $C D$ lớn hơn $7~(\\mathrm{cm})$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- $AB^{2}=AC^{2}+CB^{2}-2 BC\\cdot AC\\cdot\\cos C$.<br>- Ta có   $AB^{2} = AC^{2}+CB^{2}-2 BC\\cdot AC\\cdot\\cos C$<br>$= 12^{2}+15^{2}-2\\cdot 12\\cdot 15\\cdot\\cos 120^\\circ$<br>$= 549$<br>$\\Leftrightarrow AB = \\sqrt{549}=3\\sqrt{61}$  Áp dụng định lý sin, ta có $\\dfrac{BC}{\\sin A}=\\dfrac{AB}{\\sin C}\\Rightarrow \\sin A=\\dfrac{12\\cdot\\sin 120^\\circ}{3\\sqrt{61}}=\\dfrac{2\\sqrt{83}}{61}$<br>  $\\Rightarrow A\\approx 26^\\circ$ (vì góc $C$ tù nên góc $A$ nhọn)<br>- Xét tam giác vuông $AHC$ có $\\sin A=\\dfrac{CH}{CA}\\Rightarrow CH=AC\\cdot\\sin A\\approx 6{,}65$.<br>- Gọi $D$ là chân đường phân giác trong, ta có  $\\dfrac{AD}{BD}=\\dfrac{AC}{CB}=\\dfrac{5}{4}\\Rightarrow AD=\\dfrac{5}{4}BD\\Rightarrow AD=\\dfrac{5}{9}\\cdot 3\\sqrt{61}=\\dfrac{5\\sqrt{61}}{3}$.<br>  Áp dụng định lý sin trong tam giác $ACD$ ta có $\\dfrac{CD}{\\sin A}=\\dfrac{AD}{\\sin 60^\\circ}\\Rightarrow CD=\\dfrac{AD\\cdot\\sin A}{\\sin 60^\\circ}\\approx 6{,}67&lt;7$."
  },
  {
    "id": "0H422DS19",
    "question": "Cho tam giác $ABC$ có độ dài ba cạnh là $AB=2,BC=5,CA=6$. Gọi $M$ là trung diểm của $BC$.",
    "subQuestions": [
      {
        "text": "Trong tam giác $ABC$, số đo của góc $B$ là lớn nhất",
        "answer": true
      },
      {
        "text": "Giá trị của $\\cos B$ là $\\dfrac{7}{20}$",
        "answer": false
      },
      {
        "text": "Diện tích của tam giác $ABC$ là $\\dfrac{3\\sqrt{39}}{4}$",
        "answer": true
      },
      {
        "text": "$\\dfrac{\\sqrt{55}}{2}$ là độ dài đường trung tuyến $M A$ của tam giác $ABC$",
        "answer": true
      }
    ],
    "explain": "<br>- Cạnh $CA=6$ là lớn nhất trong 3 cạnh của tam giác $ABC$ nên góc $B$ là góc lớn nhất.<br>- Áp dụng hệ quả định lí cô-sin ta có $\\cos B=\\dfrac{a^{2}+c^{2}-b^{2}}{2\\cdot a\\cdot c}=\\dfrac{5^{2}+2^{2}-6^{2}}{2\\cdot 5\\cdot 2}=-\\dfrac{7}{20}$.<br>- Ta có $p=\\dfrac{2+5+6}{2}=\\dfrac{13}{2}$. Áp dụng công thức Hê-rông ta có $S=\\sqrt{p(p-a)(p-b)(p-c)}=\\dfrac{3\\sqrt{39}}{4}.$<br>- Áp dụng công thức tính độ dài trung tuyến ta có  $MA=\\sqrt{\\dfrac{c^{2}+b^{2}}{2}-\\dfrac{a^{2}}{4}}=\\sqrt{\\dfrac{2^{2}+6^{2}}{2}-\\dfrac{5^{2}}{4}}=\\dfrac{\\sqrt{55}}{2}$."
  },
  {
    "id": "0H421DS20",
    "question": "Hai người dân đứng cách nhau $30\\mathrm{~m}$ cùng nhìn lên đỉnh của một tòa nhà theo góc nhìn lần lượt là $30^\\circ$ và $50^\\circ$ (tham khảo hình vẽ).  <br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Các mệnh đề sau đúng hay sai? (các kết quả làm tròn đến hàng phần chục)",
    "subQuestions": [
      {
        "text": "Góc nhìn từ đỉnh tòa nhà về hai phía $A$ và $B$ nơi hai người dân đang đứng là góc $A C B$ có số đo $30^\\circ$",
        "answer": false
      },
      {
        "text": "Khoảng cách từ vị trí người $A$ tới nóc của tòa nhà là $43,9~\\rm{m}$",
        "answer": true
      },
      {
        "text": "Chiều cao của tòa nhà là khoảng $30\\mathrm{~m}$",
        "answer": false
      },
      {
        "text": "Vì gặp sự cố nên tầng trên cùng của tòa nhà đang bị cháy. Để cứu hộ đám cháy, một xe cứu hỏa đã tiếp cận dưới chân tòa nhà và chân thang đứng cách mặt đất $1,8~m$,chiều dài tối đa của thang xếp là $40\\mathrm{~m}$. Để tiếp cận được đám cháy thì xe cứu hỏa phải đứng cách chân tòa một khoảng xa nhất là $21,7\\mathrm{~m}$",
        "answer": true
      }
    ],
    "explain": "<br>- Xét tam giác $\\triangle ABC$ có $\\widehat{BAC}=180^\\circ-50^\\circ = 130^\\circ$, $\\widehat{ABC}=30^\\circ$ nên $\\widehat{ACB} = 180^\\circ-130^\\circ-30^\\circ=20^\\circ$.<br>- Áp dụng định lý sin cho tam giác $\\triangle ABC$ ta được  $\\dfrac{AB}{\\sin C}=\\dfrac{AC}{\\sin B}\\Rightarrow\\dfrac{30}{\\sin 20^\\circ}=\\dfrac{AC}{\\sin 30^\\circ}\\Rightarrow AC=\\dfrac{30\\cdot\\sin 30^\\circ}{\\sin 20^\\circ}\\approx 43,9\\mathrm{~m}.$<br>- Xét tam giác $CHA$ vuông tại $H$ nên $CH=AC\\sin 50^\\circ\\approx 33,6\\mathrm{~m}$.<br>- ${}$  <br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Chân thang cách mặt đất $1{,}8~\\rm{m}$ ta có: $CK=CH-HK=33{,}6=1{,}8=31{,}8 ~\\rm{m}$.<br>  Khi đó, khoảng cách tới chân tòa nhà xa nhất có thể là $KD=\\sqrt{CD^{2}-CK^{2}}=\\sqrt{40^{2}-31{,}8^{2}}\\approx 24{,}3\\mathrm{~m}$."
  },
  {
    "id": "0H421DS21",
    "question": "Lúc 7 giờ kém 5 sáng,bạn Mai đi xe đạp tự nhà (điểm $\\mathrm{A}$) đến trường (điểm $\\mathrm{B}$) phải đi lên dốc và xuống một con dốc (hình vẽ). Cho biết đoạn lên dốc dài $300\\mathrm{~m},A=6^\\circ,B=4^\\circ$. Gọi $C$ là đỉnh dốc. Xác định tính đúng sai của các mệnh đề sau.  <br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Độ dốc lúc lên cao hơn lúc xuống",
        "answer": true
      },
      {
        "text": "Độ cao con dốc là (làm tròn đến hàng phần mười) là $31,3 \\mathrm{~m}$",
        "answer": false
      },
      {
        "text": "Quãng đường chim bay đi từ nhà đến trường (làm tròn đến hàng đơn vị) là $749\\mathrm{~m}$",
        "answer": false
      },
      {
        "text": "Để kịp đến trường lúc 7h đúng, Mai đã lên dốc với vận tốc (làm tròn đến hàng đơn vị) là $6\\mathrm{~km}/\\mathrm{h}$, biết Mai khi xuống dốc bạn đi tự do không đạp xe với vận tốc không đổi là $15\\mathrm{~km}/\\mathrm{h}$",
        "answer": true
      }
    ],
    "explain": "<br>- Do $A&gt;B$ nên độ dốc lúc lên cao hơn lúc xuống.<br>- Áp dụng hệ thức lượng trong tam giác vuông $ACH$, ta có độ cao con dốc là $CH=AC\\cdot\\sin A=300\\cdot\\sin 6^{0}\\approx 31,4~(\\mathrm{m})$.<br>- Xét tam giác $ABC$ có $\\widehat{ACB} = 180^\\circ - 4^\\circ - 6^\\circ = 170^\\circ$.<br>  Áp dụng định lý $\\sin$ ta có $\\dfrac{AC}{\\sin B}=\\dfrac{AB}{\\sin C}\\Rightarrow AB=\\dfrac{AC\\cdot\\sin C}{\\sin B}\\approx 747~(\\mathrm{m})$.<br>- Sử dụng định lý sin ta có $\\dfrac{BC}{\\sin A}=\\dfrac{AC}{\\sin B}\\Rightarrow BC=\\dfrac{AC\\cdot\\sin A}{\\sin B}\\approx 449,5~(\\mathrm{m})$ .<br>  Thời gian bạn Mai đi từ nhà tới trường  $\\dfrac{5}{60}=\\dfrac{1}{12}=\\dfrac{A C}{v_{A C}}+\\dfrac{B C}{15}\\Rightarrow v_{A C}=A C:\\left(\\dfrac{1}{12}-\\dfrac{B C}{15}\\right)=0,3:\\left(\\dfrac{1}{12}-\\dfrac{0,3\\cdot\\sin 6^\\circ}{15\\cdot\\sin 4^\\circ}\\right)\\approx 6~(\\mathrm{km}/\\mathrm{h}).$"
  },
  {
    "id": "0H422DS22",
    "question": "Ông Ba có một mảnh vườn hình tam giác $ABC$ có $B&gt;90^\\circ$. Cho biết độ dài các cạnh $AB$, $AC$ lần lượt là $20$ mét và $30$ mét; $\\widehat{BAC}=45^\\circ$.",
    "subQuestions": [
      {
        "text": "Diện tích của mảnh vườn của ông Ba là $150\\sqrt{2}$ mét vuông",
        "answer": true
      },
      {
        "text": "Ông Ba muốn dựng hàng rào bao quanh mảnh vườn theo các cạnh của tam giác $ABC$. Tổng độ dài của hàng rào là $21{,}25$ mét (làm tròn đến chữ số thứ hai sau dấu phẩy)",
        "answer": false
      },
      {
        "text": "Ông Ba lấy điểm $M$ trên cạnh $AC$ và dựng đoạn hàng rào $BM$ sao cho mảnh vườn được chia thành hai tam giác có diện tích bằng nhau. Khi đó đoạn hàng rào $BM$ có độ dài là $14{,}17$ mét (làm tròn đến chữ số thứ hai sau dấu phẩy)",
        "answer": true
      },
      {
        "text": "Ông Ba tiếp tục dựng hàng rào $BH$ vuông góc với cạnh $AC$ ($H$ thuộc $AC$) và muốn xác định vị trí điểm $N$ thuộc mảnh vườn tam giác $AHB$ sao cho $NA:NH:NB=1:2:3$. Khi đó, tổng $NA+NB+NH$ bằng 25,27 mét (làm tròn đến chữ số thứ hai sau dấu phẩy)",
        "answer": true
      }
    ],
    "explain": "<br>- Diện tích mảnh vườn là $S_{ABC}=\\dfrac{1}{2}AB\\cdot AC\\cdot\\sin \\widehat{BAC}=\\dfrac{1}{2}\\cdot 20\\cdot 30\\cdot\\sin 45^\\circ = 150\\sqrt{2}$ mét vuông.<br>- Áp dụng định lí cosin cho tam giác $ABC$   $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos \\widehat{BAC}=20^{2}+30^{2}-2\\cdot 20\\cdot 30\\cdot\\cos 45^\\circ=1300-600\\sqrt{2}$  Suy ra $BC=\\sqrt{1300-600\\sqrt{2}}$.<br>  Tổng độ dài hàng rào là: $AB+BC+CA=20+\\sqrt{1300-600\\sqrt{2}}+30\\approx 71,25$ mét.<br>- Do hai tam giác $ABM$ và $BCM$ có chung đường cao từ đỉnh $B$ nên $\\dfrac{S_{ABM}}{S_{BCM}}=\\dfrac{MA}{MC}$. Do đó hai tam giác có diện tích bằng nhau khi $MA=MC=\\dfrac{AC}{2}=\\dfrac{30}{2}=15$ mét.<br>  Áp dụng định lí cosin cho tam giác $ABM$   $BM^{2}=AB^{2}+AM^{2}-2 AB\\cdot AM\\cdot\\cos \\widehat{BAC}=20^{2}+15^{2}-2\\cdot 20\\cdot 15\\cdot\\cos 45^\\circ=625-300\\sqrt{2}.$  Suy ra $BM=\\sqrt{625-300\\sqrt{2}}\\approx 14,17.$<br>- Tam giác $AHB$ vuông tại $H$ có $A=45^\\circ$ nên vuông cân tại $H$. Đặt $HA=HB=a$ thì $a=AB\\sin \\widehat{HAB}=20\\sin 45^\\circ=10\\sqrt{2}$.<br>  Đặt $NA=x$ thì $NH=2x$, $NB=3x$.<br>  Áp dụng định lí cosin cho $\\triangle HMA:\\cos \\widehat{NHA}=\\dfrac{HA^{2}+HN^{2}-AN^{2}}{2 HA\\cdot HN}=\\dfrac{a^{2}+4x^{2}-x^{2}}{4ax}=\\dfrac{3x^{2}+a^{2}}{4ax}$.<br>  Áp dụng định lí cosin cho $\\triangle HMB:\\cos \\widehat{NHB}=\\dfrac{HB^{2}+HN^{2}-BN^{2}}{2 HB\\cdot HN}=\\dfrac{a^{2}+4x^{2}-9x^{2}}{4ax}=\\dfrac{a^{2}-5x^{2}}{4ax}$.<br>  Do $\\widehat{NHA}+\\widehat{NHB}=90^\\circ$ nên $\\sin \\widehat{NHA}=\\cos \\widehat{NHB}$. Do đó ta có:  $\\left(\\dfrac{3x^{2}+a^{2}}{4ax}\\right)^{2}+\\left(\\dfrac{a^{2}-5x^{2}}{4ax}\\right)^{2}=1$<br>$\\Leftrightarrow 9x^{4}+6a^{2}x^{2}+a^{4}+a^{4}-10a^{2}x^{2}+25x^{2}=16a^{2}x^{2}$<br>$\\Leftrightarrow 34 x^{4}-20 a^{2}x^{2}+2 a^{4}=0$<br>$\\Leftrightarrow x^{2}=\\dfrac{5+2\\sqrt{2}}{17}a^{2} \\text{ hoặc } x^{2}=\\dfrac{5-2\\sqrt{2}}{17}a^{2}.$  Do $\\widehat{NHB}$ nhọn nên $\\cos \\widehat{NHB}=\\dfrac{a^{2}-5x^{2}}{4ax}&gt;0$, suy ra $x^{2}&lt;\\dfrac{a^{2}}{5}$.<br>  Vậy $x^{2}=\\dfrac{5-2\\sqrt{2}}{17}a^{2}$ tức là $x=\\sqrt{\\dfrac{5-2\\sqrt{2}}{17}}a$.<br>  Do đó  $N A+N B+N H=x+3 x+2 x=5 x=5\\sqrt{\\dfrac{5-2\\sqrt{2}}{17}}a=5\\sqrt{\\dfrac{5-2\\sqrt{2}}{17}}\\cdot 10\\sqrt{2}=50\\sqrt{\\dfrac{10-4\\sqrt{2}}{17}}\\approx 25,27.$"
  }
];
