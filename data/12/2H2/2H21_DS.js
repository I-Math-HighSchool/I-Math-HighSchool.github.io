// =========================================================================
// KHỐI DỮ LIỆU: 2H21 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai2H21 = [
  {
    "id": "2H211DS1",
    "question": "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $\\sqrt{10}$ (tham khảo hình vẽ).  Các mệnh đề sau đây đúng hay sai?<br><img src=\"data/12/2D2/im2H2/2H21_tikz_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{DA}+\\overrightarrow{C{C}'}+\\overrightarrow{DC}=\\overrightarrow{D{B}'}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{AB}-\\overrightarrow{AC}=\\overrightarrow{C{A}'}-\\overrightarrow{C{D}'}$",
        "answer": true
      },
      {
        "text": "$\\left(\\overrightarrow{B{A}'},\\overrightarrow{D'D}\\right)=45^\\circ $",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{B{C}'}.\\,\\overrightarrow{AC}=10$",
        "answer": true
      }
    ],
    "explain": "<br>- Đúng.<br>  Ta có $\\overrightarrow{DA}+\\overrightarrow{C{C}'}+\\overrightarrow{DC}=\\left(\\overrightarrow{DA}+\\overrightarrow{DC}\\right)+\\overrightarrow{C{C}'}=\\overrightarrow{DB}+\\overrightarrow{BB'}=\\overrightarrow{D{B}'}$.<br>- Đúng.<br>   Ta có $\\overrightarrow{AB}-\\overrightarrow{AC}=\\overrightarrow{C{A}'}-\\overrightarrow{C{D}'}\\Leftrightarrow \\overrightarrow{CB}=\\overrightarrow{D'A'}$.<br>- Sai.<br> $\\left(\\overrightarrow{B{A}'},\\overrightarrow{D'D}\\right)=\\left(\\overrightarrow{B{A}'},\\overrightarrow{B'B}\\right)=180^\\circ-\\widehat{A'BB'}=180^\\circ-45^\\circ=135^\\circ $.<br>- Đúng.<br>  Ta có $ \\triangle D'AC $ đều suy ra $ \\widehat{D'AC}=60^{\\circ} $.<br>  Mặt khác $ \\left(\\overrightarrow{BC'}, \\overrightarrow{A C}\\right)=\\left(\\overrightarrow{A D'}, \\overrightarrow{A C}\\right)=\\widehat{D'AC}=60^{\\circ} $. <br>  $ \\overrightarrow{BC'} \\cdot \\overrightarrow{AC}=BC' \\cdot A C \\cdot \\cos 60^{\\circ}=\\sqrt{10} \\sqrt{2} \\cdot \\sqrt{10} \\sqrt{2} \\cdot \\dfrac{1}{2}=10 $."
  },
  {
    "id": "2H212DS2",
    "question": "Cho tứ diện $ABCD$ có $M$, $N$ lần lượt là trung điểm các cạnh $AC$ và $BD$. Gọi $G$ là trung điểm của đoạn thẳng $MN$.",
    "subQuestions": [
      {
        "text": "$\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec{0}$",
        "answer": true
      },
      {
        "text": "$\\vec{GB}+\\vec{GD}=\\vec{MN}$",
        "answer": true
      },
      {
        "text": "$2\\vec{NM}=\\vec{AB}+\\vec{CD}$",
        "answer": false
      },
      {
        "text": "$\\vec{GA}+\\vec{GC}=2\\vec{GM}$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H21_tikz_013.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- &lt;strong&gt;Đúng&lt;/strong&gt;<br>  Vì $\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=2(\\vec{M}+\\vec{GN})=\\vec{0}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;<br>  Vì $\\vec{GB}+\\vec{GD}=2\\vec{GN}=\\vec{MN}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;<br>  Vì $\\vec{AB}+\\vec{CD}=(\\vec{AM}+\\vec{MN}+\\vec{NB})+(\\vec{CN}+\\vec{NM}+\\vec{ND})<br>  =2\\vec{MN}+(\\vec{AM}+\\vec{CM})+(\\vec{NB}+\\vec{ND})=2\\vec{MN}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;<br>  Vì theo tính chất trung điểm của đoạn thẳng ta có $\\vec{GA}+\\vec{GC}=2\\vec{GM}$."
  },
  {
    "id": "2H212DS3",
    "question": "Một vật là chiếc đèn chùm treo có khối lượng $m=6\\mathrm{~kg}$ được thiết kế với đĩa đèn được giữ bởi bốn đoạn xích $SA$, $SB$, $SC$, $SD$ sao cho $S.ABCD$ là hình chóp tứ giác đều, có $\\widehat{ASC}=60^{\\circ}$. Biết $\\vec{P}=m\\cdot \\vec{g}$ trong đó $\\vec{g}$ là véc-tơ gia tốc rơi tự do có độ lớn $10$ m/s$^2$, $\\vec{P}$ là trọng lực tác động lên vật có đơn vị là $N$, $m$ là khối lượng của vật có đơn vị kg. Khi đó:<br><img src=\"data/12/2D2/im2H2/2H21_tikz_023.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{SA}+\\overrightarrow{SD}=\\overrightarrow{SB}+\\overrightarrow{SC}$",
        "answer": false
      },
      {
        "text": "$|\\overrightarrow{SA}+\\overrightarrow{SB}+\\overrightarrow{SC}+\\overrightarrow{SD}|=0$",
        "answer": false
      },
      {
        "text": "Độ lớn của trọng lực $\\vec{P}$ tác động lên chiếc đèn chùm bằng $60$ N",
        "answer": true
      },
      {
        "text": "Độ lớn của lực căng cho mỗi sợi xích bằng $10\\sqrt{3}$ N",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H21_tikz_024.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Gọi lực căng dây của chiếc cân đòn lần lượt là $\\overrightarrow{SA}$, $\\overrightarrow{SB}$, $\\overrightarrow{SC}$, $\\overrightarrow{SD}$ và $O$ là giao điểm của $AC$ và $BD$.<br>  Ta có $\\overrightarrow{SA}-\\overrightarrow{SB}+\\overrightarrow{SD}-\\overrightarrow{SC}=\\overrightarrow{BA}+\\overrightarrow{CD}=2\\overrightarrow{BA}\\ne \\overrightarrow{0}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  $\\overrightarrow{SA}+\\overrightarrow{SB}+\\overrightarrow{SC}+\\overrightarrow{SD}=4\\overrightarrow{SO}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có trọng lực tác dụng lên chiếc cân là $P=m\\cdot g=\\cdot 10=60$ $\\mathrm{N}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $|\\vec{P}|=4|\\overrightarrow{SO}|$, suy ra $SO=15$ N.<br>  Ta có $\\triangle SAC$ là tam giác đều có $SO=15$ nên $SC=10\\sqrt{3}$.<br>  Suy ra $SA=\\dfrac{15\\sqrt{2}}{2}=\\dfrac{30\\sqrt{2}}{4}$.<br>  Vậy độ lớn của lực căng cho mỗi sợi xích bằng $10\\sqrt{3}$ N."
  },
  {
    "id": "2H212DS4",
    "question": "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$ (tham khảo hình vẽ).  <br><img src=\"data/12/2D2/im2H2/2H21_tikz_033.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AD}-\\overrightarrow{AA'}=\\overrightarrow{DA'}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{AC}=\\overrightarrow{A'C'}$",
        "answer": false
      },
      {
        "text": "Góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{DC'}$ là $\\left(\\overrightarrow{AB},\\overrightarrow{DC'}\\right)=45^\\circ$",
        "answer": true
      },
      {
        "text": "Tích vô hướng $\\overrightarrow{AB}\\cdot \\overrightarrow{DC'}=-a^2$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Ta có $\\overrightarrow{AD}-\\overrightarrow{AA'}=\\overrightarrow{A'D}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $\\overrightarrow{AC}=\\overrightarrow{A'C'}$ (Vì $AC=A'C'$ và $AC \\parallel A'C'$).<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $\\overrightarrow{AB}=\\overrightarrow{DC}$.<br>  Suy ra $\\left(\\overrightarrow{AB},\\overrightarrow{DC'}\\right)=\\left(\\overrightarrow{DC},\\overrightarrow{DC'}\\right)=\\widehat{CDC'}$.<br>  Do $\\triangle DCC'$ vuông cân tại $C$ nên $\\widehat{CDC'}=45^\\circ$.<br>  Vậy $\\left(\\overrightarrow{AB},\\overrightarrow{DC'}\\right)=45^\\circ$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Vì tam giác $\\triangle DCC'$ vuông cân tại $C$ nên   \\[DC'=\\sqrt{CC'^2+CD^2}=\\sqrt{a^2+a^2}=a\\sqrt{2}.\\]  $\\overrightarrow{AB}\\cdot \\overrightarrow{DC'}=AB\\cdot DC'\\cdot \\cos \\left(\\overrightarrow{AB},\\overrightarrow{DC'}\\right)=a\\cdot a\\sqrt{2}\\cdot \\cos 45^\\circ=a^2$."
  },
  {
    "id": "2H211DS5",
    "question": "Trong không gian Oxyz , gọi $ \\vec{i}, \\vec{j}, \\vec{k} $ là các vecto đơn vị, điểm $ \\mathrm{M}(2 ; 0 ; 1), \\mathrm{N}(3 ; 2 ; 4) $. Các khẳng định sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{N M}=(1 ; 2 ; 3)$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{O M}=2 \\vec{j}+\\vec{k}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{O N}=2 \\vec{i}+3 \\vec{j}+4 \\vec{k}$",
        "answer": false
      },
      {
        "text": "$OM=3$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  $\\overrightarrow{NM} = (-1; -2; -3)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  $\\overrightarrow{OM} = 2\\vec{i} + \\vec{k}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  $\\overrightarrow{ON} = 3\\vec{i} + 2\\vec{j} + 4\\vec{k}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  $OM=\\sqrt{2^2 + 1^2} = \\sqrt{5}$."
  },
  {
    "id": "2H212DS6",
    "question": "Trong không gian, cho tứ diện $A B C D$. Gọi $I$, $J$ lần lượt là trung điểm $A D$, $B C$, $G$ là trung điểm $I J$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{I J}=\\dfrac{\\overrightarrow{A B}+\\overrightarrow{C D}}{3}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{G I}=\\overrightarrow{G J}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{G A}+\\overrightarrow{G B}+\\overrightarrow{G C}+\\overrightarrow{G D}=\\overrightarrow{0}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{A G}=\\dfrac{1}{4}(\\overrightarrow{A B}+\\overrightarrow{A C}+\\overrightarrow{A D})$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H21_tikz_037.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $ \\overrightarrow{IJ}=\\dfrac{1}{2} \\left(\\overrightarrow{IB}+\\overrightarrow{IC}\\right)=\\dfrac{1}{2}\\left(\\overrightarrow{IA}+\\overrightarrow{AB}+\\overrightarrow{ID}+\\overrightarrow{DC}\\right)=\\dfrac{1}{2}\\left(\\overrightarrow{AB}+\\overrightarrow{DC}\\right)=\\dfrac{\\overrightarrow{AB}-\\overrightarrow{CD}}{2}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $ \\overrightarrow{GI}=-\\overrightarrow{GJ} $.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $ \\overrightarrow{G A}+\\overrightarrow{G B}+\\overrightarrow{G C}+\\overrightarrow{G D}=2\\overrightarrow{GI}+2\\overrightarrow{GJ}=2\\left(\\overrightarrow{GI}+\\overrightarrow{GJ}\\right)=\\overrightarrow{0} $.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Do ta có  $\\overrightarrow{G A}+\\overrightarrow{G B}+\\overrightarrow{G C}+\\overrightarrow{G D}= \\overrightarrow{0}$<br>$\\Leftrightarrow -\\overrightarrow{AG}=-\\overrightarrow{GA}-\\overrightarrow{AB} - \\overrightarrow{GA} - \\overrightarrow{AC} - \\overrightarrow{GA} - \\overrightarrow{AD}$<br>$\\Leftrightarrow -4 \\overrightarrow{AG} = -\\overrightarrow{AB}-\\overrightarrow{AC}- \\overrightarrow{AD}$<br>$\\Leftrightarrow \\overrightarrow{AG} =\\dfrac{\\overrightarrow{AB}+\\overrightarrow{AC}+\\overrightarrow{AD}}{4}.$"
  },
  {
    "id": "2H212DS7",
    "question": "Cho hình lập phương $ABCD.A'B'C'D'.$<br><img src=\"data/12/2D2/im2H2/2H21_tikz_041.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Gọi $G$ là trọng tâm $\\triangle ABC$ thì $\\overrightarrow{A'A}+\\overrightarrow{A'B}+\\overrightarrow{A'C}=\\overrightarrow{A'G}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{BA}+\\overrightarrow{BC}+\\overrightarrow{BB'}=\\overrightarrow{BD'}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC}$",
        "answer": true
      },
      {
        "text": "Nếu cạnh của hình lập phương là $a$ thì $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=a^2$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;.   $G \\text{ là trọng tâm } \\triangle ABC  \\Rightarrow \\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\overrightarrow{0}$<br>$\\Rightarrow \\forall A': \\overrightarrow{A'A}+\\overrightarrow{A'B}+\\overrightarrow{A'C}=3\\overrightarrow{A'G}.$  Do đó $\\overrightarrow{A'A}+\\overrightarrow{A'B}+\\overrightarrow{A'C}=\\overrightarrow{A'G}$ là khẳng định sai.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Theo quy tắc hình hộp, ta có $\\overrightarrow{BA}+\\overrightarrow{BC}+\\overrightarrow{BB'}=\\overrightarrow{BD'}.$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Theo quy tắc hình bình hành, ta có $\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC}.$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có   $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}  = \\overrightarrow{AB}\\cdot\\left(\\overrightarrow{AB}+\\overrightarrow{AD}\\right)$<br>$= {\\overrightarrow{AB}}^2+\\overrightarrow{AB}\\cdot\\overrightarrow{AD}$<br>$= AB^2 = a^2.$"
  },
  {
    "id": "2H212DS8",
    "question": "Cho hình lăng trụ tam giác đều $ABC.A'B'C'$ có $AB=a$ và $AA'=a\\sqrt{2}$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{BC}$",
        "answer": true
      },
      {
        "text": "Gọi $M$ là trung điểm của $BC$, khi đó $\\overrightarrow{A'M}=\\overrightarrow{A'A}+\\overrightarrow{A'B'}-\\overrightarrow{CM}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{A'M}\\cdot\\overrightarrow{AC}=\\dfrac{a^2\\sqrt{3}}{4}$",
        "answer": false
      },
      {
        "text": "Góc giữa vectơ $\\overrightarrow{AB'}$ và $\\overrightarrow{BC'}$ bằng $60^\\circ$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H21_tikz_047.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">   <br>- Theo quy tắc ba điểm, ta có $\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{BC}$.<br>- Ta có  $\\overrightarrow{A'M} = \\overrightarrow{A'A}+\\overrightarrow{AB}+\\overrightarrow{BM}$<br>$= \\overrightarrow{A'A}+\\overrightarrow{AB}+\\overrightarrow{BM}$<br>$= \\overrightarrow{A'A}+\\overrightarrow{A'B'}+\\overrightarrow{BM}$<br>$= \\overrightarrow{A'A}+\\overrightarrow{AB}-\\overrightarrow{CM}.$<br>- Ta có $\\overrightarrow{A'M}\\cdot\\overrightarrow{AC}=(\\overrightarrow{A'A}+\\overrightarrow{AM})\\cdot\\overrightarrow{AC}=\\overrightarrow{A'A}\\cdot\\overrightarrow{AC}+\\overrightarrow{AM}\\cdot\\overrightarrow{AC}=0+AM\\cdot AC \\cdot \\cos 30^\\circ=\\dfrac{3a^2}{4}.$<br>- Ta có $\\cos (\\overrightarrow{AB'},\\overrightarrow{BC'})=\\dfrac{\\overrightarrow{AB'}\\cdot \\overrightarrow{BC'}}{AB'\\cdot BC'}.$  Trong đó  <br>- $\\overrightarrow{AB'}\\cdot \\overrightarrow{BC'}=(\\overrightarrow{AA'}+\\overrightarrow{AB})\\cdot (\\overrightarrow{BB'}+\\overrightarrow{BC})=\\overrightarrow{AA'}\\cdot\\overrightarrow{BB'}+\\overrightarrow{AA'}\\cdot\\overrightarrow{BC}+\\overrightarrow{AB}\\cdot\\overrightarrow{BB'}+\\overrightarrow{AB}\\cdot\\overrightarrow{BC}=AA'^2+0+0-\\overrightarrow{BA}\\cdot\\overrightarrow{BC}$<br>  $=(a\\sqrt{2})^2-a\\cdot a\\cos60^\\circ=\\dfrac{3a^2}{2}$.<br>- $AB'=BC'=\\sqrt{a^2+(a\\sqrt{2})^2}=a\\sqrt{3}$.  Suy ra $\\cos (\\overrightarrow{AB'},\\overrightarrow{BC'})=\\dfrac{\\overrightarrow{AB'}\\cdot \\overrightarrow{BC'}}{AB'\\cdot BC'}=\\dfrac{1}{2}.$  Vậy $(\\overrightarrow{AB'},\\overrightarrow{BC'})=60^\\circ$."
  },
  {
    "id": "2H212DS9",
    "question": "Cho hình lập phương $ABCD.A'B'C'D'$ có $AD'=3a\\sqrt{2}$.",
    "subQuestions": [
      {
        "text": "Góc giữa $\\vec{AC}$ và $\\vec{AD'}$ bằng $60^{\\circ}$",
        "answer": true
      },
      {
        "text": "$\\left|\\vec{AB}+\\vec{AD}\\right|=3a\\sqrt{2}$",
        "answer": true
      },
      {
        "text": "Số véc-tơ có điểm đầu và điểm cuối là các đỉnh của hình lập phương và ngược hướng với véc-tơ $\\vec{AB}$ là $3$",
        "answer": false
      },
      {
        "text": "$\\vec{AC}\\cdot\\vec{BA}=9a^2$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H21_tikz_056.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Do $ABCD.A'B'C'D'$ là hình lập phương nên ta có $AC=CD'=AD'$, suy ra $ACD'$ là tam giác đều.<br>  Vậy góc giữa $\\vec{AC}$ và $\\vec{AD'}$ bằng $\\widehat{CAD'}=60^\\circ$.<br>- Ta có $\\left|\\vec{AB}+\\vec{AD}\\right|=\\left|\\vec{AC}\\right|=AC=3a\\sqrt{2}$.<br>- Có $4$ véc-tơ có điểm đầu và điểm cuối là các đỉnh của hình lập phương và ngược hướng với véc-tơ $\\vec{AB}$ là $\\vec{BA}$, $\\vec{CD}$, $\\vec{C'D'}$, $\\vec{B'A'}$.<br>- Do $ABCD$ là hình vuông nên $AC=AB\\sqrt{2}\\Rightarrow AB=3a$.<br>  Ta có $\\vec{AC}\\cdot\\vec{BA}=-\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=-AB\\cdot AC\\cdot\\cos45^\\circ=-3a\\cdot3a\\sqrt{2}\\cdot\\dfrac{\\sqrt{2}}{2}=-9a^2$."
  },
  {
    "id": "2H213DS10",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông, cạnh $AB=6$. Gọi $H$ là trung điểm cạnh $AD$, $SH$ vuông góc với mặt đáy $(ABCD)$. Độ dài $SH=\\sqrt{55}$.",
    "subQuestions": [
      {
        "text": "Hai vectơ $\\overrightarrow{A B}$ và $\\overrightarrow{C D}$ là hai vectơ cùng phương",
        "answer": true
      },
      {
        "text": "Độ dài vectơ $\\left| \\overrightarrow{S A}\\right| =9$",
        "answer": false
      },
      {
        "text": "Góc tạo bởi $2$ vectơ $\\overrightarrow{S A}$ và $\\overrightarrow{C D}$ là $90^{\\circ}$",
        "answer": true
      },
      {
        "text": "Tích vô hướng $\\overrightarrow{S A} \\cdot \\overrightarrow{C H}=9$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H21_tikz_069.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Vì $AB\\parallel CD$ nên hai vectơ $\\overrightarrow{A B}$ và $\\overrightarrow{C D}$ là hai vectơ cùng phương.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Tam giác $SHA$ vuông nên $SA=\\sqrt{SH^2+HA^2}=\\sqrt{55+9}=8$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $SA\\perp (ABCD)$ nên $SA\\perp CD$. Khi đó góc tạo bởi $2$ vectơ $\\overrightarrow{S A}$ và $\\overrightarrow{C D}$ là $90^{\\circ}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. $\\overrightarrow{S A} \\cdot \\overrightarrow{C H}=\\left(\\overrightarrow{SH}+\\overrightarrow{HA} \\right)\\left(\\overrightarrow{CD}+\\overrightarrow{DH} \\right)=\\overrightarrow{HA}\\cdot \\overrightarrow{DH}=9$.<br>  Vì $SH\\perp (ABCD)$ và $CD, DH\\subset (ABCD)$ nên $\\overrightarrow{SH}\\cdot \\overrightarrow{CD}=0$; $CD\\perp AD$ suy ra $\\overrightarrow{CD}\\cdot \\overrightarrow{HA}=0$."
  },
  {
    "id": "2H212DS11",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho điểm $A(2; 0; 0)$, $B(0; 2; 0)$, $C(0; 0; 2)$. Gọi $G$ là trọng tâm của tam giác $ABC$.",
    "subQuestions": [
      {
        "text": "Nếu $M$ là điểm thỏa $\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}=5\\cdot \\overrightarrow{MO}$ thì ba điểm $O$, $M$, $G$ thằng hàng",
        "answer": false
      },
      {
        "text": "Chu vi của tam giác $ABC$ bằng $6\\sqrt{2}$",
        "answer": true
      },
      {
        "text": "Tọa độ là trọng tâm của tam giác $ABC$ là $G(1;1;1)$",
        "answer": false
      },
      {
        "text": "Thể tích tứ diện $O ABC$ bằng $\\dfrac{8}{3}$",
        "answer": false
      }
    ],
    "explain": "<br>- {\\bf Đúng} <br>  Ta có $\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}=5\\cdot \\overrightarrow{MO} \\Leftrightarrow \\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}+3\\overrightarrow{MG}=5\\cdot \\overrightarrow{MO}$<br>$\\Leftrightarrow 3\\cdot \\overrightarrow{MG}=5\\cdot \\overrightarrow{MO}\\text{ (tính chất trọng tâm).}$<br>$\\Leftrightarrow \\overrightarrow{MG}=\\dfrac{5}{3}\\cdot \\overrightarrow{MO}.$  Do đó, ba điểm $O$, $M$, $G$ thằng hàng.<br>- {\\bf Đúng}<br>  Ta có $AB=AC=BC=2\\sqrt{2}$.<br>  Do đó, chu vi của tam giác $ABC$ bằng $6\\sqrt{2}$.<br>- {\\bf Sai} <br>  Tọa độ là trọng tâm của tam giác $ABC$ là $G\\left(\\dfrac{2}{3};\\dfrac{2}{3};\\dfrac{2}{3}\\right)$.<br>- {\\bf Sai} <br>  Thể tích tứ diện $O ABC$ bằng $V=\\dfrac{1}{6}\\cdot OA\\cdot OB\\cdot OC=\\dfrac{4}{3}$."
  },
  {
    "id": "2H212DS12",
    "question": "Cho hình lập phương $ABCD.A'B'C'D'$ (tham khảo hình vẽ bên).<br><img src=\"data/12/2D2/im2H2/2H21_tikz_077.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Có $3$ vectơ đối với vectơ $\\overrightarrow{AB}$",
        "answer": false
      },
      {
        "text": "Gọi $G$ là trọng tâm tam giác $BA'D$. Khi đó $\\overrightarrow{AC'}=2\\overrightarrow{AG}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{B'C'}+\\overrightarrow{D'C'}$",
        "answer": true
      },
      {
        "text": "Góc giữa hai vectơ $\\overrightarrow{BD}$ và $\\overrightarrow{CD'}$ bằng $120^{\\circ}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H21_tikz_078.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- {\\bf Sai} <br>  Các vectơ đối với vectơ $\\overrightarrow{AB}$ là $\\overrightarrow{BA}$; $\\overrightarrow{CD}$; $\\overrightarrow{C'D'}$ và $\\overrightarrow{B'A'}$.<br>- {\\bf Sai}<br>  Vì $G$ là trọng tâm tam giác $BA'D$ nên   $\\overrightarrow{GB}+\\overrightarrow{GA'}+\\overrightarrow{GD}=\\overrightarrow{0} \\Leftrightarrow \\overrightarrow{AB}+\\overrightarrow{AA'}+\\overrightarrow{AD}=3\\overrightarrow{AG}$<br>$\\Leftrightarrow \\overrightarrow{AC'}=3\\overrightarrow{AG}\\text{ (quy tắc hình hộp).}$<br>- {\\bf Đúng} <br>  Ta có   <br>- $\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC}$ (quytắc hình bình hành).<br>- $\\overrightarrow{B'C'}+\\overrightarrow{D'C'}=\\overrightarrow{B'C'}-\\overrightarrow{B'A'}=\\overrightarrow{A'C'}$.<br>- $\\overrightarrow{AC}=\\overrightarrow{A'C'}$ (do $AA'C'C$ là hình chữ nhật).  Do đó $\\overrightarrow{AB}+\\overrightarrow{AD}=\\overline{B'C'}+\\overrightarrow{D'C'}$.<br>- {\\bf Sai} <br>  Ta có $CD'\\parallel BA'$ suy ra $\\left(\\overrightarrow{BD},\\overrightarrow{CD'}\\right)=\\left(\\overrightarrow{BD},\\overrightarrow{BA'}\\right)=60^\\circ$ (do $\\triangle BDA'$ đều)."
  },
  {
    "id": "2H212DS13",
    "question": "Cho hình hộp chữ nhật $ABCD.A' B' C' D'$, biết $AB=2, AD=6, AA'=8$.  Gọi $M$ là trung điểm của $B' C'$.<br><img src=\"data/12/2D2/im2H2/2H21_tikz_085.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Độ dài của $\\overrightarrow{CB}+\\overrightarrow{C' D'}+\\overrightarrow{AM}$ bằng $\\sqrt{73}$",
        "answer": true
      },
      {
        "text": "$\\cos \\left(\\overrightarrow{DC}, \\overrightarrow{A' C'}\\right)=\\dfrac{\\sqrt{2}}{2}$",
        "answer": false
      },
      {
        "text": "Tích vô hướng $\\overrightarrow{AC} \\cdot \\overrightarrow{D' C'}=4$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{AO}=\\dfrac{1}{3}\\left(\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}\\right)$ (Với $O$ là trung điểm của $AC'$)",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có  $\\overrightarrow{CB}+\\overrightarrow{C' D'}+\\overrightarrow{AM} = \\overrightarrow{CB}+\\overrightarrow{CD}+\\overrightarrow{AM}$<br>$= \\overrightarrow{CA}+\\overrightarrow{AM}$<br>$= \\overrightarrow{CM}.$  Khi đó $\\left|\\overrightarrow{CB}+\\overrightarrow{C' D'}+\\overrightarrow{AM}\\right|=\\left|\\overrightarrow{CM}\\right|=CM=\\sqrt{CC'^2+C'M^2}=\\sqrt{8^2+3^2}=\\sqrt{73}$. <br>- Ta có  $\\cos \\left(\\overrightarrow{DC}; \\overrightarrow{A' C'}\\right)=\\cos \\left(\\overrightarrow{DC}; \\overrightarrow{AC}\\right)=\\cos \\widehat{ACD}=\\dfrac{DC}{AC}=\\dfrac{2}{\\sqrt{2^2+6^2}}=\\dfrac{\\sqrt{10}}{10}.$<br>- Ta có  $\\overrightarrow{AC}\\cdot \\overrightarrow{D'C'} = \\overrightarrow{AC}\\cdot \\overrightarrow{DC}$<br>$= AC\\cdot DC \\cdot \\cos \\left(\\overrightarrow{AC}; \\overrightarrow{DC}\\right)$<br>$= AC \\cdot DC \\cdot \\cos \\left(\\widehat{ACD}\\right)$<br>$= \\sqrt{2^2+6^2}\\cdot 2 \\cdot \\dfrac{\\sqrt{10}}{10}$<br>$= 4.$<br>- Ta có, theo quy tắc hình hộp, ta có $\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'} = \\overrightarrow{AC'}=2\\overrightarrow{AO}$.<br>  Suy ra $\\overrightarrow{AO}=\\dfrac{1}{2}\\left(\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}\\right)$."
  },
  {
    "id": "2H212DS14",
    "question": "Trong không gian với hệ trục tọa độ $Oxyz$, cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có độ dài các cạnh $AB = 1$; $AD = 2$; $AA' = 4$. Biết $A$ trùng với gốc toạ độ, vectơ $\\overrightarrow{AB}$; $\\overrightarrow{AD}$; $\\overrightarrow{AA'}$ lần lượt cùng chiều với ba vectơ đơn vị $\\overrightarrow{i}$; $\\overrightarrow{j}$; $\\overrightarrow{k}$.<br><img src=\"data/12/2D2/im2H2/2H21_tikz_090.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{CC'} = \\overrightarrow{AC'}$",
        "answer": true
      },
      {
        "text": "Tọa độ của điểm $B(1;0;0)$",
        "answer": true
      },
      {
        "text": "Số đo góc giữa hai mặt phẳng $(A'BD)$ và $(ABD)$ bằng $60^\\circ$",
        "answer": false
      },
      {
        "text": "Gọi $M$ là trung điểm $DD'$, điểm $N$ nằm trên mặt phẳng $(ABCD)$. Tổng khoảng cách từ $N$ đến $M$ và từ $N$ đến $A'$ có giá trị nhỏ nhất bằng $2\\sqrt{10}$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{AC'}$.<br>  Mà $\\overrightarrow{AA'}=\\overrightarrow{CC'}$ nên $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{CC'} = \\overrightarrow{AC'}$.<br>- Toạ độ của điểm $B$ là $B(1;0;0)$.<br>- Xét $\\triangle ABD$ vuông tại $A$ có $AB=1$, $AD= 2$ nên $BD=\\sqrt{AB^2+AD^2}=\\sqrt{5}$.<br>   <br><img src=\"data/12/2D2/im2H2/2H21_tikz_091.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Kẻ $AI\\perp BD$, $I\\in BD$ thì $AI=\\dfrac{AB\\cdot AD}{BD}=\\dfrac{1\\cdot 2}{\\sqrt{5}}=\\dfrac{2\\sqrt{5}}{5}$.<br>  Ta có $A'A \\perp (ABCD)$ nên $A'A\\perp BD$ và $AI\\perp BD$.<br>  Suy ra $BD \\perp (A'AI)$.<br>  Mà $BD$ là giao tuyến của hai mặt phẳng $(A'BD)$ và $(ABD)$ nên góc giữa hai mặt phẳng $(A'BD)$ và $(ABD)$ bằng góc giữa $A'I$ và $AI$.<br>  Xét $\\triangle A'AI$ vuông tại $A$ có $\\tan \\widehat{A'IA}=\\dfrac{AA'}{AI}=\\dfrac{4}{\\dfrac{2\\sqrt{5}}{5}}=2\\sqrt{5}$.<br>  Suy ra $\\widehat{A'IA}\\approx 77{,}4^\\circ$.<br>  Do đó góc giữa $A'I$ và $AI$ bằng $\\widehat{A'IA}\\approx 77{,}4^\\circ$ hay góc giữa hai mặt phẳng $(A'BD)$ và $(ABD)$ bằng khoảng $77{,}4^\\circ$.<br>  Vậy số đo góc giữa hai mặt phẳng $(A'BD)$ và $(ABD)$ không bằng $60^\\circ$.<br>- Gọi $E$ là điểm đối xứng với điểm $A'$ qua điểm $A$.<br>  <br><img src=\"data/12/2D2/im2H2/2H21_tikz_092.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có $A'N+NM=EN+NM\\ge EM$.<br>  Mà $M(0;2;2)$, $E(0;0;-4)$ nên $\\overrightarrow{EM}= (0;2;6)$.<br>  Suy ra $EM=\\sqrt{0^2+2^2+6^2}=2\\sqrt{10}$.<br>  Vậy tổng khoảng cách từ $N$ đến $M$ và từ $N$ đến $A'$ có giá trị nhỏ nhất bằng $2\\sqrt{10}$."
  },
  {
    "id": "2H212DS15",
    "question": "Cho hình hộp đứng $ABCD.A'B'C'D'$ có đáy là hình thoi. Gọi giao điểm của hai đường chéo $AC$, $BD$ là $O$ và giao điểm của hai đường chéo $A'C'$, $B'D'$ là $O'$. Biết $AC=a$, $BD=a\\sqrt{3}$ và $AA'=2a$.",
    "subQuestions": [
      {
        "text": "Hai vectơ $\\overrightarrow{A'C'}$ và $\\overrightarrow{CA}$ ngược hướng với nhau",
        "answer": true
      },
      {
        "text": "Tổng của hai vectơ $\\overrightarrow{OC}$ và $\\overrightarrow{BB'}$ là vectơ $\\overrightarrow{AO'}$",
        "answer": true
      },
      {
        "text": "Tích vô hướng của hai vectơ $\\overrightarrow{A'C'}$ và $\\overrightarrow{BO}$ bằng $0$",
        "answer": true
      },
      {
        "text": "$\\cos \\left(\\overrightarrow{O'D'}, \\overrightarrow{O'B}\\right)=\\dfrac{\\sqrt{57}}{19}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H21_tikz_094.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Hai vectơ $\\overrightarrow{A'C'}$ và $\\overrightarrow{CA}$ ngược hướng với nhau.<br>- Tổng của hai vectơ $\\overrightarrow{OC}$ và $\\overrightarrow{BB'}$ là  \\[\\overrightarrow{OC}+\\overrightarrow{BB'}=\\overrightarrow{AO}+\\overrightarrow{AA'}=\\overrightarrow{AO'}.\\]<br>- Đáy $ABCD$ là hình thoi nên $AC \\perp BD$.<br>  Ta có   \\[\\overrightarrow{A'C'}\\cdot \\overrightarrow{BO}=\\overrightarrow{AC}\\cdot \\overrightarrow{BO}=0.\\]<br>- Ta có   $\\cos \\left(\\overrightarrow{O'D'}, \\overrightarrow{O'B}\\right)  =\\cos\\widehat {BO'D'}=\\cos\\left(180^\\circ-\\widehat {BO'B'}\\right)=-\\cos \\widehat {BO'B'}$<br>$=-\\dfrac{B'O'}{BO'}  \\ne\\dfrac{\\sqrt{57}}{19}.$  &lt;strong&gt;Lưu ý. &lt;/strong&gt;Ta có thể tính trực tiếp giá trị của $\\cos \\left(\\overrightarrow{O'D'}, \\overrightarrow{O'B}\\right)$ như sau:<br>  Ta có $B'O'=\\dfrac{BD}{2}=\\dfrac{\\sqrt{3}}{2}$; $BO'=\\sqrt{B'O'^2+BB'^2}=\\sqrt{\\left(\\dfrac{\\sqrt{3}}{2}\\right)^2+2^2}=\\dfrac{\\sqrt{19}}{2}$.<br>  Do đó  \\[\\cos \\left(\\overrightarrow{O'D'}, \\overrightarrow{O'B}\\right)=-\\dfrac{B'O'}{BO'}=-\\dfrac{\\sqrt{57}}{19}.\\]"
  },
  {
    "id": "2H212DS16",
    "question": "Cho tứ diện đều $ABCD$ cạnh $6a$. Gọi $M$ là trung điểm cạnh $CD$.",
    "subQuestions": [
      {
        "text": "Có $6$ vectơ (khác vectơ-không) có điểm đầu và điểm cuối lấy từ các đỉnh của tứ diện",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{AC}-\\overrightarrow{BM}=\\overrightarrow{CM}-\\overrightarrow{AB}$",
        "answer": false
      },
      {
        "text": "Độ dài của vectơ $\\overrightarrow{AC}-\\overrightarrow{AB}+\\dfrac{1}{2} \\overrightarrow{CD}$ bằng $\\dfrac{a \\sqrt{3}}{2}$",
        "answer": false
      },
      {
        "text": "Tích vô hướng $(\\overrightarrow{AD}+\\overrightarrow{AC}) \\cdot \\overrightarrow{CD}=0$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H21_tikz_095.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Có $\\mathrm{A}_{6}^{2}=12$ vectơ (khác vectơ-không) có điểm đầu và điểm cuối lấy từ các đỉnh của tứ diện.<br>- Ta có $\\overrightarrow{AC}-\\overrightarrow{BM}=\\overrightarrow{AB}+\\overrightarrow{BC}-\\overrightarrow{BC}-\\overrightarrow{CM}=\\overrightarrow{AB}-\\overrightarrow{CM}=-\\left(\\overrightarrow{CM}-\\overrightarrow{AB} \\right) $.<br>- Ta có $\\left| \\overrightarrow{AC}-\\overrightarrow{AB}+\\dfrac{1}{2} \\overrightarrow{CD}\\right|= \\left| \\overrightarrow{BC}+ \\overrightarrow{CM}\\right| = \\left| \\overrightarrow{BM}\\right|=3a\\sqrt{3}$.<br>- Ta có $\\left( \\overrightarrow{AD}+\\overrightarrow{AC}\\right) \\cdot \\overrightarrow{CD}=\\left( \\overrightarrow{AM}+\\overrightarrow{MD}+\\overrightarrow{AM}+\\overrightarrow{MC}\\right) \\cdot \\overrightarrow{CD}=2\\overrightarrow{AM} \\cdot \\overrightarrow{CD}=0$."
  },
  {
    "id": "2H212DS17",
    "question": "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $5$. Gọi $M$ là trung điểm của $CC'$.",
    "subQuestions": [
      {
        "text": "$AM = \\dfrac{1}{2} \\left| \\overrightarrow{AC} + \\overrightarrow{AC'} \\right|$",
        "answer": true
      },
      {
        "text": "Góc giữa hai véc-tơ $\\vec{DB}$ và $\\vec{B'C'}$ bằng $45^\\circ$",
        "answer": false
      },
      {
        "text": "$\\left| \\overrightarrow{AB} + \\overrightarrow{B'C} + \\overrightarrow{AA'} \\right| = 5\\sqrt{3}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{BC}\\cdot\\overrightarrow{AC'} = 25$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H21_tikz_099.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Vì $M$ là trung điểm $CC'$ nên $\\vec{AM}=\\dfrac{1}{2}\\left(\\vec{AC}+\\vec{AC'}\\right)$. Do đó $AM = \\dfrac{1}{2} \\left| \\overrightarrow{AC} + \\overrightarrow{AC'} \\right|$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $\\left(\\vec{DB},\\vec{B'C'}\\right)=\\left(\\vec{DB},\\vec{BC}\\right)=180^\\circ-\\left(\\vec{BD},\\vec{BC}\\right)=180^\\circ-45^\\circ=135^\\circ$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có  $\\left| \\overrightarrow{AB} + \\overrightarrow{B'C} + \\overrightarrow{AA'} \\right|  =\\left| \\overrightarrow{AB} + \\overrightarrow{B'C} + \\overrightarrow{CC'} \\right|$<br>$=\\left| \\overrightarrow{AB} + \\overrightarrow{B'C'} \\right|$<br>$=\\left| \\overrightarrow{AB} + \\overrightarrow{BC}\\right|$<br>$=\\left| \\overrightarrow{AC}\\right|$<br>$=5\\sqrt{2}.$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\vec{BC}\\cdot\\vec{AC'}=\\vec{AD}\\cdot\\vec{AC'}=AD\\cdot AC'\\cdot\\cos\\left(\\vec{AD},\\vec{AC'}\\right) = 5\\cdot 5\\sqrt{3}\\cdot\\cos\\widehat{DAC'}$.<br>  Vì tam giác $DAC'$ vuông tại $D$ nên $\\cos\\widehat{DAC'}=\\dfrac{AD}{AC'}=\\dfrac{1}{\\sqrt{3}}$.<br>  Vậy $\\vec{BC}\\cdot\\vec{AC'}=5\\cdot 5\\sqrt{3}\\cdot\\dfrac{1}{\\sqrt{3}}=25$."
  },
  {
    "id": "2H213DS18",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật. Biết $AB=a$, $AD=2 a$, cạnh bên $SA=2a$ và vuông góc với mặt đáy. Gọi $M$, $N$ lần lượt là trung điểm của các cạnh $SB$, $SD$.",
    "subQuestions": [
      {
        "text": "Hai vectơ $\\overrightarrow{AB}$, $\\overrightarrow{CD}$ cùng hướng",
        "answer": false
      },
      {
        "text": "Giá trị $\\tan$ của góc giữa hai vectơ $\\overrightarrow{CS}$ và $\\overrightarrow{CA}$ bằng $\\dfrac{2\\sqrt{5}}{5}$",
        "answer": true
      },
      {
        "text": "Tích vô hướng $\\overrightarrow{AM} \\cdot \\overrightarrow{A B}=\\dfrac{a^2}{2}$",
        "answer": true
      },
      {
        "text": "Độ dài của vectơ $\\overrightarrow{A M}-\\overrightarrow{AN}$ là $\\dfrac{a \\sqrt{3}}{2}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H21/dlts_12_DLTS13_012.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Sai</strong>. Ta thấy: $ABCD$ là hình chữ nhật nên $AB \\parallel CD$, do đó hai vectơ $\\overrightarrow{AB}, \\overrightarrow{CD}$ ngược hướng.<br>- <strong>Đúng</strong>. Ta có: $(\\overrightarrow{CS}, \\overrightarrow{C A})=\\widehat{SCA}$.<br>  Do $ABCD$ là hình chữ nhật nên: $A C=\\sqrt{AB^2+AD^2}=a \\sqrt{5}$.<br>  Hình chóp $S.ABCD$ có $SA$ vuông góc với mặt đáy nên tam giác $SAC$ là tam giác vuông tại $A$.<br>  Suy ra $\\tan\\widehat{SCA}=\\dfrac{SA}{A C}=\\dfrac{2a}{a\\sqrt{5}}=\\dfrac{2\\sqrt{5}}{5}$. Do đó $\\tan(\\overrightarrow{CS}, \\overrightarrow{CA})=\\dfrac{2 \\sqrt{5}}{5}$.<br>- <strong>Đúng</strong>. Ta có: $\\overrightarrow{AM} \\cdot \\overrightarrow{AB}=|\\overrightarrow{AM}| \\cdot|\\overrightarrow{AB}| \\cdot \\cos (\\overrightarrow{AM}, \\overrightarrow{AB})=|\\overrightarrow{AM}| \\cdot|\\overrightarrow{AB}| \\cdot \\cos \\widehat{MAB}$.<br>  Hình chóp $S.ABCD$ có $SA$ vuông góc với mặt đáy nên tam giác $SAB$ là tam giác vuông tại $A$. Suy ra: $SB=\\sqrt{SA^2+AB^2}=a\\sqrt{5}$.<br>  Trong tam giác $SAB$ vuông tại $A$ có $AM$ là đường trung tuyến nên: $AM=\\dfrac{1}{2} S B=\\dfrac{a \\sqrt{5}}{2}$.  Lại có $M$ là trung điểm của $SB$ nên $M B=\\dfrac{1}{2} SB=\\dfrac{a\\sqrt{5}}{2}$, suy ra tam giác $MAB$ cân tại $M$.<br>  Do đó $\\cos \\widehat{MAB}=\\cos\\widehat{M BA}=\\dfrac{AB}{SB}$.<br>  $\\overrightarrow{AM} \\cdot \\overrightarrow{AB}=|\\overrightarrow{AM}| \\cdot|\\overrightarrow{AB}| \\cdot \\cos (\\overrightarrow{AM}, \\overrightarrow{AB})=AM\\cdot AB \\cdot \\dfrac{AB}{SB}=\\dfrac{AM}{SB} \\cdot AB^2=\\dfrac{a^2}{2}$.<br>- <strong>Sai</strong>. Ta có: $|\\overrightarrow{AM}-\\overrightarrow{A N}|=|\\overrightarrow{MN}|=MN$.<br>  Vì $M$, $N$ lần lượt là trung điểm của các cạnh $SB$, $SD$ nên $MN$ là đường trung bình của tam giác $SBD$. Do đó: $MN=\\dfrac{1}{2} BD=\\sqrt{AB^2+AD^2}=\\dfrac{a\\sqrt{5}}{2}$.  <br>  Vậy $|\\overrightarrow{AM}-\\overrightarrow{AN}|=|\\overrightarrow{MN}|=\\dfrac{a \\sqrt{5}}{2}$."
  },
  {
    "id": "2H212DS19",
    "question": "Trong không gian $Oxyz$, cho $\\overrightarrow{O A}=3 \\vec{i}-\\vec{k}$ và $B(-1;2;3), C(1;4;1)$.",
    "subQuestions": [
      {
        "text": "$A(3;0;-1)$",
        "answer": true
      },
      {
        "text": "Ba điểm $A,B,C$ thẳng hàng",
        "answer": false
      },
      {
        "text": "Điểm $D(a;b;c)$ là điểm đối xứng của với $A$ qua $B$. Khi đó $a+b+c=6$",
        "answer": true
      },
      {
        "text": "Điểm $M(m;n;p)$ trên mặt phẳng $(Oxy)$ sao cho $MA^2+MB^2+MC^2$ đạt giá trị nhỏ nhất. Khi đó $m+n+p=0$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Vì $\\overrightarrow{OA}=3 \\cdot \\vec{i}+0 \\cdot \\vec{j}-1 \\cdot \\vec{k}$ nên $A(3; 0;-1)$.<br>- <strong>Sai</strong>. Ta có $\\overrightarrow{AB}=(-4;2;4)$, $\\overrightarrow{AC}=(-2;4;2)$.<br>  Giả sử tồn tại $k\\in \\mathbb{R}$ sao cho: $\\overrightarrow{AB}=k\\cdot \\overrightarrow{AC} \\Leftrightarrow\\left\\{\\begin{aligned}&-4=-2 k\\\\&2=4k\\\\&4=2k\\end{aligned} \\Leftrightarrow\\left\\{\\begin{aligned}&k=2 \\\\&k=\\frac{1}{2}\\end{aligned} \\Leftrightarrow k=\\varnothing\\right.\\right.$ hệ này vô nghiệm. Suy ra $\\overrightarrow{AB}, \\overrightarrow{AC}$ không cùng phương, do đó $A,B,C$ không thẳng hàng.<br>- <strong>Đúng</strong>. Vì $D$ là điểm đối xứng với $A$ qua $B$ nên $B$ là trung điểm của $A D$.<br>  Ta có $\\left\\{\\begin{aligned}&x_D=2 x_B-x_A=-5 \\\\& y_D=2y_B-y_A=4 \\\\& z_D=2 z_B-z_A=7 .\\end{aligned}\\right.$ suy ra $D(-5;4;7)$. Do đó $a=-5, b=4, c=7$.<br>  Vậy $a+b+c=6$.<br>- <strong>Sai</strong>. Gọi $I(x;y;z)$ là điểm thỏa mãn $\\overrightarrow{IA}+\\overrightarrow{IB}+\\overrightarrow{IC}=\\overrightarrow{0}$.<br>  Khi đó: $\\left\\{\\begin{aligned}&3-x-1-x+1-x=0\\\\& 0-y+2-y+4-y=0 \\\\& -1-z+3-z+1-z=0\\end{aligned} \\Leftrightarrow\\left\\{\\begin{aligned}&x=1 \\\\&y=2 \\\\&z=1\\end{aligned} \\Rightarrow I(1;2;1)\\right.\\right.$<br>  Ta có: $MA^2+MB^2+MC^2=(\\overrightarrow{MI}+\\overrightarrow{IA})^2+(\\overrightarrow{MI}+\\overrightarrow{IB})^2+(\\overrightarrow{MI}+\\overrightarrow{IC})^2$<br>  $=3MI^2+IA^2+IB^2+IC^2+2\\overrightarrow{MI}(\\overrightarrow{IA}+\\overrightarrow{IB}+\\overrightarrow{IC})=3 MI^2+IA^2+IB^2+IC^2$.<br>  Do $IA^2+IB^2+IC^2$ không thay đổi nên $MA^2+MB^2+MC^2$ nhỏ nhất khi $MI$ nhỏ nhất hay $M$ là hình chiếu vuông góc của điểm $I$ trên mặt phẳng $(O x y)$.<br>  Do đó $M(1;2;0)$ suy ra $m=1, n=2, p=0$.<br>  Vậy $m+n+p=1+2+0=3$."
  }
];
