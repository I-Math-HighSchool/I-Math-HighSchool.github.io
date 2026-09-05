// =========================================================================
// KHỐI DỮ LIỆU: 1H84 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1H84 = [
  {
    "id": "1H843DS1",
    "question": "Cho hình chóp $S.ABCD$ có $SA\\perp(ABCD)$, đáy $ABCD$ là hình vuông và $SA=AB=a$. Gọi $I$, $J$, $K$ lần lượt là trung điểm của $SB$, $SC$, $SD$.<br><img src=\"data/11/1D8/im1H84/dlts_11_DLTS22_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tam giác $SAB$ vuông tại $B$",
        "answer": false
      },
      {
        "text": "$BD\\perp(SAC)$",
        "answer": true
      },
      {
        "text": "$(AIK) \\perp(SBC)$",
        "answer": true
      },
      {
        "text": "$J\\in(AIK)$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $SA\\perp(ABCD)\\Rightarrow SA\\perp AB\\Rightarrow \\triangle SAB$ vuông tại $A$.<br>- Ta có $BD\\perp AC \\text{ và } BD\\perp SA\\Rightarrow BD\\perp (SAC)$.<br>- Vì $SA=AB=a$ nên $\\triangle SAB$ vuông cân tại $A$. Suy ra $AI\\perp SB$.<br>  Ta có $BC\\perp AB \\text{ và } BC\\perp SA\\Rightarrow BC\\perp (SAB) $. Mà $AI\\subset (SAB)\\Rightarrow BC\\perp AI$.<br>  Ta có $AI\\perp SB \\text{ và } AI\\perp BC\\Rightarrow AI\\perp (SBC)$, mà $AI\\subset (AIK)$ suy ra $(AIK)\\perp (SBC)$.<br>- Ta có $AI\\perp (SBC)$, suy ra $AI\\perp SC$.<br>  $CD\\perp AD \\text{ và } CD\\perp SA\\Rightarrow CD\\perp (SAD) $. Mà $AK\\subset (SAD)\\Rightarrow CD\\perp AK$.<br>  Ta có $AK\\perp SD \\text{ và } AK\\perp CD\\Rightarrow AK\\perp (SBC)\\Rightarrow AK\\perp SC$.<br>  Ta có $SC\\perp AI \\text{ và } SC\\perp AK\\Rightarrow SC\\perp (AIK)$.<br>  Giả sử $J\\in (AIK)\\Rightarrow SC\\perp AJ$ (vô lý).<br>  Vậy $J\\not \\in (AIK)$."
  },
  {
    "id": "1H843DS2",
    "question": "Trong không gian cho hình lập phương $ ABCD.A'B'C'D'$. Gọi $I$ là tâm của hình vuông $ABCD$, $G$ là trọng tâm của tam giác $AB'C$.",
    "subQuestions": [
      {
        "text": "$ \\overrightarrow{ AC'}=\\overrightarrow{A B}+\\overrightarrow{A D}+\\overrightarrow{AA'} $",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{AC'} \\cdot \\overrightarrow{BI}=0 $",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{BD'}=2 \\overrightarrow{BG}$",
        "answer": false
      },
      {
        "text": "Gọi $M$ và $N$ là hai điểm lần lượt nằm trên $AC$ và $DC'$ sao cho $MN \\parallel BD'$. Khi đó $\\dfrac{MN}{BD'}=\\dfrac{m}{n}$ ($m, n \\in \\mathbb{Z} $; $ n \\neq 0 ; \\dfrac{m}{n}$ tối giản) thỏa mãn $2m+3n=13$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Ta có $ABCD.A'B'C'D'$ là hình lập phương $\\Rightarrow$ $\\overrightarrow{ AC'}=\\overrightarrow{A B}+\\overrightarrow{A D}+\\overrightarrow{AA'} $ (quy tắc hình hộp).<br>- <strong>Đúng</strong>.<br>  Vì $ABCD.A'B'C'D'$ nên $BD\\perp (ACC'A')$ hay $BI\\perp (ACC'A')\\Rightarrow BI\\perp AC'$. Vậy $\\overrightarrow{AC'}\\cdot \\overrightarrow{BI}=0$.<br>- <strong>Sai</strong>.<br>  Gọi $O$ là tâm hình lập phương $ABCD.A'B'C'D'$\\Rightarrow$ $O$ là trung điểm của $BD'$ và $AC'$.<br>  Mà $G$ là trọng tâm tam giác $AB'C$ nên $\\overrightarrow{BD'}=3 \\overrightarrow{BG}$.<br>- <strong>Sai</strong>.<br>  Do $MN \\parallel BD'$ nên các điểm $M,N,B,D'$ cùng thuộc mặt phẳng $(BD',MN)$ .<br>  Ta có ba mặt phẳng $(BD',MN)$, $(ABCD)$ và $(CDD'C')$ đôi một cắt nhau theo 3 giao tuyến $BM$, $CD$ và $D'N$.<br>  Mà $BM$ không cắt $CD$ nên ba giao tuyến $BM$, $CD$ và $D'N$ đồng quy.<br>  Gọi $E$ là giao điểm của $CD$ và $BM$ thì $E$ thuộc $D'N$.<br>  Ta có $MN \\parallel BD'$, $CD \\parallel AB$ và $CD \\parallel C'D'$ nên $\\dfrac{CE}{AB}=\\dfrac{EM}{MB}=\\dfrac{EN}{ND'}=\\dfrac{ED}{C'D'}=\\dfrac{MN}{BD'}=\\dfrac{m}{n}$<br>  $\\Rightarrow CE=ED$ $\\Rightarrow M$ là trọng tâm tam giác $BCD$. Từ đó suy ra $\\dfrac{m}{n}=\\dfrac{EM}{MB}=\\dfrac{1}{2}$ hay $m=1$, $n=2$. Vậy $2m+3n=11$ ."
  }
];
