// =========================================================================
// KHỐI DỮ LIỆU: 1H87 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1H87 = [
  {
    "id": "1H872DS1",
    "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông $ABCD$ tâm $O$ cạnh $a$, $SA\\perp (ABCD)$ và $SA=a\\sqrt{2}$. Gọi $M$, $N$ lần lượt là hình chiếu của điểm $A$ lên các đường thẳng $SB$ và $SD$.",
    "subQuestions": [
      {
        "text": "$BC\\perp SB$",
        "answer": true
      },
      {
        "text": "Đường thẳng $BD$ vuông góc với mặt phẳng $(SAC)$",
        "answer": true
      },
      {
        "text": "$MN$ và $BD$ là hai đường thẳng chéo nhau",
        "answer": false
      },
      {
        "text": "Gọi $K$ là giao điểm của $SC$ với mặt phẳng $(AMN)$. Khi đó, diện tích tứ giác $AMKN$ bằng $\\dfrac{2a^2\\sqrt{2}}{3}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1D8/im1H87/dlts_11_DLTS23_006.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $BC\\perp AB \\text{ và } BC\\perp SA \\text{ và } AB,SA\\subset (SAB)\\Rightarrow BC\\perp (SAB)\\Rightarrow BC\\perp SB$.<br>- Ta có $BD\\perp AC \\text{ và } BD\\perp SA \\text{ và } AC,SC\\subset (SAC)\\Rightarrow BD\\perp (SAC)$.<br>- $M$, $N$, $B$, $D\\in (SBD) \\Rightarrow MN$, $BD$ đồng phẳng.<br>- Ta có $SB=SC=a\\sqrt{3}$, $SC=2a$.<br>   $\\triangle SAB$ vuông tại $A$ có $AM$ là đường cao $\\Rightarrow SM\\cdot SB=SA^2\\Rightarrow \\dfrac{SM}{SB}=\\dfrac{SA^2}{SB^2}=\\dfrac{2}{3}$.<br>   Chứng minh tương tự ta có $\\dfrac{SN}{SD}=\\dfrac{SA^2}{SD^2}=\\dfrac{2}{3}$.<br>   Ta có $\\dfrac{SA}{SA}+\\dfrac{SK}{SC}=\\dfrac{SM}{SB}+\\dfrac{SN}{SD}\\Rightarrow \\dfrac{SK}{SC}=\\dfrac{SM}{SB}+\\dfrac{SN}{SD}-\\dfrac{SA}{SA}=\\dfrac{1}{3}$.<br>   Vì $\\triangle AKM=\\triangle AKN$ nên $V_{S.AMKN}=2V_{S.AKM}$.<br>   Ta có $\\dfrac{2V_{S.AKM}}{V_{S.ABC}}=2\\cdot \\dfrac{SA}{SA}\\cdot \\dfrac{SM}{SB}\\cdot \\dfrac{SK}{SC}=2\\cdot 1\\cdot \\dfrac{2}{3}\\cdot \\dfrac{1}{3}=\\dfrac{4}{9}$.<br>   $\\Rightarrow V_{S.AMKN}=\\dfrac{4}{9}\\cdot V_{S.ABC}=\\dfrac{4}{9}\\cdot \\dfrac{1}{3}\\cdot \\dfrac{AB\\cdot BC}{2}\\cdot SA=\\dfrac{4}{9}\\cdot \\dfrac{1}{3}\\cdot \\dfrac{a\\cdot a}{2}\\cdot a\\sqrt{2}=\\dfrac{2a^3\\sqrt{2}}{27}$.<br>   Ta lại có $BC\\perp (SAB)\\Rightarrow BC\\perp AM$.<br>   Mà $AM\\perp SB \\text{ và } BC,SB\\subset (SAC)\\Rightarrow AM\\perp (SAC)\\Rightarrow AM\\perp SK$.<br>   Chứng minh tương tự ta được $AN\\perp SK$.<br>   $\\Rightarrow SK\\perp (AMN)\\Rightarrow SK$ là đường cao chóp $S.AMKN$.<br>   $\\Rightarrow V_{S.AMKN}=\\dfrac{1}{3}\\cdot SK\\cdot S_{AMKN}$.<br>   $\\Rightarrow S_{AMKN}=\\dfrac{3V_{S.AMKN}}{SK}=\\dfrac{3V_{S.AMKN}}{\\dfrac{1}{3}SC}=\\dfrac{3\\cdot \\dfrac{2a^3\\sqrt{2}}{27}}{\\dfrac{1}{3}\\cdot 2a}=\\dfrac{a^2\\sqrt{2}}{3}$."
  },
  {
    "id": "1H872DS2",
    "question": "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật có cạnh $AB=a$, $AD=2a$, $SA$ vuông góc với đáy và $SA=3a$.",
    "subQuestions": [
      {
        "text": "$SA \\perp CD$",
        "answer": true
      },
      {
        "text": "$(SB; (ABCD))=\\widehat{SBA}$",
        "answer": true
      },
      {
        "text": "$V_{S.ABCD}=\\dfrac{2}{3}a^3$",
        "answer": false
      },
      {
        "text": "$(SBD) \\perp (SAC)$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1D8/im1H87/dlts_11_DLTS24_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Vì $SA\\perp (ABCD)$ nên $SA \\perp CD$.<br>- Vì $SA\\perp (ABCD)$ nên $AB$ là hình chiếu vuông góc của $SB$ lên $(ABCD)$.<br>  Suy ra $(SB; (ABCD))=(SB,AB)=\\widehat{SBA}$.<br>- Ta có  $V_{S.ABCD}=\\dfrac{1}{3}SA\\cdot AB\\cdot AD=\\dfrac{1}{3}\\cdot 3a \\cdot a\\cdot 2a=2a^3$.<br>- Giả sử $(SAC)\\perp (SBD)$.<br>  Ta có $SO=(SAC)\\cap (SBD)$.<br>  Trong $(SAC)$ vẽ $SK\\perp SO$.<br>  Suy ra $SK\\perp (SBD)$.<br>  Suy ra $SK\\perp BD$.<br>  mà $SA\\perp BD$ ($SA\\perp (ABCD)$).<br>  Suy ra $BD\\perp (SAC)$.<br>  Suy ra $BD\\perp AC$ (Vô lý do $ABCD$ là hình chữ nhật).<br>  Vậy $(SAC)$ không vuông góc với $(SBD)$."
  },
  {
    "id": "1H872DS3",
    "question": "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB=3$, $BC=4$, $AA'=5$. Các mệnh đề sau đây đúng hay sai?",
    "subQuestions": [
      {
        "text": "Hai mặt phẳng $\\left(AA' C' C\\right),\\left(BDD' B'\\right)$ vuông góc với nhau",
        "answer": false
      },
      {
        "text": "sin góc giữa mặt phẳng $\\left(A' BC\\right)$ và $(ABCD)$ bằng $\\dfrac{5}{\\sqrt{34}}$",
        "answer": true
      },
      {
        "text": "Khoảng cách giữa hai mặt phẳng $\\left(ACD'\\right)$ và $\\left(A'C'B\\right)$ bằng $\\dfrac{60}{\\sqrt{769}}$",
        "answer": true
      },
      {
        "text": "Thể tích khối hộp chữ nhật bằng $60$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1D8/im1H87/dlts_11_DLTS29_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Sai</strong>.<br>  Giả sử $(AA'C'C)$ vuông góc $(BDD'B')$. <br>  Khi đó, do $(AA'C'C) \\cap(BDD'B')=OO'$ và $A'C' \\perp OO'$ nên $A'C' \\perp(BDD'B')$.<br>  Suy ra $A'C' \\perp B'D'$(vô lý vì $A'B'C'D'$ là hình chữ nhật).<br>- <strong>Đúng</strong>.<br>  Ta có $BC=(A'BC) \\cap(ABCD) \\text{ và } AB \\perp BC \\text{ và } A'B \\perp BC \\Rightarrow \\big((A'BC),(ABCD)\\big)=(A'B,AB)=\\widehat{A'BA}$.<br>  Ta có $\\sin\\big((A'BC),(ABCD)\\big)=\\sin\\widehat{A'BA}=\\dfrac{AA'}{A'B}=\\dfrac{5}{\\sqrt{5^2+3^2}}=\\dfrac{5}{\\sqrt{34}}$.<br>- <strong>Đúng</strong>.<br>  Do $AC \\parallel(A'C'B)$ nên $(ACD') \\parallel(A'C'B)$. <br>  Suy ra $\\mathrm{d}\\left((ACD'),(A'C'B)\\right)=\\mathrm{d}\\left(O',(ACD')\\right)$.<br>  Trong mặt phẳng $(BB'D'D)$, gọi $I=O'D\\cap OD'$, khi đó $I$ là trung điểm $O'D$ nên $\\mathrm{d}\\left(O',(ACD')\\right)=\\mathrm{d}\\left(D,(ACD')\\right)$.<br>  Gọi $H$, $T$ lần lượt là hình chiếu của điểm $D$ lên $AC$ và $D'H$. <br>  Khi đó  $AC \\perp DH \\text{ và } AC \\perp DD' \\Rightarrow AC \\perp(DHD')$.<br>  Hơn thế, ta có $DT \\perp D'H \\text{ và } DT \\perp AC \\Rightarrow DT \\perp(ACD')$.  Suy ra $\\mathrm{d}\\left(D,(ACD')\\right)=DT$.<br>  Ta có  \\[  \\dfrac{1}{DT^2}=\\dfrac{1}{DA^2}+\\dfrac{1}{DC^2}+\\dfrac{1}{D'D^2} \\Rightarrow DH=\\dfrac{60}{\\sqrt{769}}.  \\]<br>- <strong>Đúng</strong>.<br>  $V=3 \\cdot 4 \\cdot 5=60$."
  },
  {
    "id": "1H872DS4",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a\\sqrt{3}$. Cạnh bên $SA=a$ và vuông góc với mặt đáy $(ABCD)$.",
    "subQuestions": [
      {
        "text": "Hình chiếu vuông góc của $B$ lên mặt phẳng $(SAD)$ là $A$",
        "answer": true
      },
      {
        "text": "$(SBC)\\perp(SAB)$",
        "answer": true
      },
      {
        "text": "Thể tích khối chóp $S.ABCD$ bằng $a^3$",
        "answer": true
      },
      {
        "text": "Khoảng cách giữa hai đường thẳng $SD$, $AB$ bằng $\\dfrac{a\\sqrt{3}}{4}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1D8/im1H87/dlts_11_DLTS32_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $SA\\perp(ABCD) \\text{ và } AB\\subset(ABCD)\\Rightarrow AB\\perp SA$.<br>  Do $ABCD$ là hình vuông nên $AB\\perp AD$, suy ra $AB\\perp(SAD)$ tại $A$.<br>  Vậy hình chiếu vuông góc của $B$ lên mặt phẳng $(SAD)$ là $A$.<br>- Ta có $SA\\perp(ABCD) \\text{ và } BC\\subset(ABCD)\\Rightarrow BC\\perp SA$.<br>  Do $ABCD$ là hình vuông nên $AB\\perp BC$, suy ra $BC\\perp(SAB)$.<br>  Mà $BC\\subset(SBC)$ nên $(BSC)\\perp(SAB)$.<br>- Thể tích khối chóp $S.ABCD$ là $V=\\dfrac{1}{3}\\cdot SA\\cdot S_{ABCD}=\\dfrac{1}{3}\\cdot a\\cdot \\left(a\\sqrt{3}\\right)^2=a^3$.<br>- Kẻ $AH\\perp SD$ tại $H$ trong $(SCD)$.<br>  Do $AB\\perp(SAD)$ nên $AB\\perp AH$ tại $A$.<br>  Vậy $AH$ là đoạn vuông góc chung của $AB$ và $SD$, suy ra $\\mathrm{d}(AB,SD)=AH$.<br>  Tam giác $SAD$ có $\\dfrac{1}{AH^2}=\\dfrac{1}{SA^2}+\\dfrac{1}{AD^2}=\\dfrac{4}{3a^2}$.<br>  Suy ra khoảng cách giữa hai đường thẳng $SD$, $AB$ là $\\mathrm{d}(AB,SD)=AH=\\dfrac{a\\sqrt{3}}{2}$."
  },
  {
    "id": "1H872DS5",
    "question": "Cho hình lăng trụ đều $ABC.A'B'C'$ có $AC=2a$, $AA'=a$. Gọi $M$ là trung điểm của $B'C'$.<br><img src=\"data/11/1D8/im1H87/dlts_11_DLTS33_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng $60^\\circ$",
        "answer": true
      },
      {
        "text": "$BC\\perp(AA'M)$",
        "answer": true
      },
      {
        "text": "Góc giữa hai mặt phẳng $(A'BC)$ và $(BCC'B')$ bằng $30^\\circ$",
        "answer": false
      },
      {
        "text": "Thể tích của khối tứ diện $A'.ABC$ là $V=\\dfrac{a^3\\sqrt{3}}{3}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Vì lăng trụ là lăng trụ đều nên $ABC$ và $A'B'C'$ là các tam giác đều.<br>  Do $AB\\parallel A'B'$ nên $(AB,B'C')=(A'B',B'C')$.<br>  Tam giác $A'B'C'$ đều, do đó $\\widehat{A'B'C'} =60^{\\circ }$. Vậy góc giữa $AB$ và $B'C'$ bằng $60^{\\circ }$.<br>- <strong>Đúng</strong>.<br>Vì $ABC.A'B'C'$ là lăng trụ đều, suy ra $A'A\\perp (ABC) \\Rightarrow BC\\perp A'A$. <br>  Vì $A'B'C'$ là tam giác đều và $M$ là trung điểm $B'C'$, suy ra $B'C'\\perp A'M \\Rightarrow BC \\perp A'M$. <br>  Do đó $BC\\perp (A'AM)$.<br>- <strong>Sai</strong>.<br>Gọi $I$ là trung điểm của $BC$. <br>  Vì $(BCC'B')\\cap (A'BC) = BC$.<br>  Ta có $BC \\perp A'M \\text{ và } BC \\perp MI$  nên góc giữa $(A'BC)$ và $(BCC'B')$ là $\\widehat{A'IM}$. <br>  Ta có $\\tan \\widehat{ A'IM}=\\dfrac{A'M}{MI}=\\dfrac{a\\sqrt{3}}{a}=\\sqrt{3}$. <br>  Suy ra $\\widehat{ A'IM}=60^{\\circ }$. <br>  Vậy góc giữa hai mặt phẳng $(A'BC)$ và $(BCC'B')$ bằng $60^{\\circ }$.<br>- <strong>Đúng</strong>.<br>  Thể tích khối tứ diện $V_{A'.ABC}=\\dfrac{1}{3}\\cdot S_{\\Delta ABC} \\cdot A'A = \\dfrac{1}{3}\\cdot \\dfrac{(2a)^2\\cdot \\sqrt{3}}{4} \\cdot a = \\dfrac{a^3 \\sqrt{3}}{3}$"
  },
  {
    "id": "1H872DS6",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$, cạnh bằng $a$, cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA=a$ (minh họa bằng hình vẽ).<br><img src=\"data/11/1D8/im1H87/dlts_11_DLTS35_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng cách từ đỉnh $S$ đến mặt phẳng $(ABCD)$ là độ dài đoạn $SO$",
        "answer": false
      },
      {
        "text": "$SO \\perp(ABCD)$",
        "answer": false
      },
      {
        "text": "Thể tích khối chóp $S.ABCD$ bằng $\\dfrac{a^3}{3}$",
        "answer": true
      },
      {
        "text": "$(SBD) \\perp(SAC)$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Vì $SA\\perp(ABCD)$ nên khoảng cách từ đỉnh   $S$ đến mặt phẳng $(ABCD)$ là độ dài đoạn $SA$.<br>- <strong>Sai</strong>. Theo giả thiết ta có $SA \\perp (ABCD)$ mà $SA \\nparallel SO$ nên $SO \\not\\perp (ABCD)$.<br>- <strong>Đúng</strong>.<br>  Thể tích khối chóp $S.ABCD$ bằng $V_{S.ABCD}=\\dfrac{1}{3}\\cdot S_{ABCD}\\cdot SA=\\dfrac{1}{3}\\cdot a^2\\cdot a=\\dfrac{a^3}{3}$.<br>- <strong>Đúng</strong>.<br>  Ta có $BD \\perp AC\\quad (ABCD \\text{ là hình vuông}) \\text{ và } BD \\perp SA \\quad (SA\\perp (ABCD), BD \\subset (ABCD)) \\text{ và } AC \\cap SA =A<br> \\Rightarrow BD \\perp (SAC)$ mà $BD \\subset (SBD)$ suy ra $(SBD) \\perp (SAC)$.<br>"
  },
  {
    "id": "1H872DS7",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật có cạnh $AB=a$, $AD=3a$, biết $SA \\perp (ABCD)$ và $SA=4a$. Khi đó:",
    "subQuestions": [
      {
        "text": "$(SC,(ABCD))=\\widehat{SCA}$",
        "answer": true
      },
      {
        "text": "$(SAC)\\perp (SBD)$",
        "answer": false
      },
      {
        "text": "$(SAB)\\perp (SBC)$",
        "answer": true
      },
      {
        "text": "$V_{S.ABCD}=4a^3$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1D8/im1H87/dlts_11_DLTS36_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Đúng</strong>. Vì $SA\\perp (ABCD)$ nên $A$ là hình chiếu của $S$ lên $(ABCD)$. Mà $C$ là hình chiếu của $C$ lên $(ABCD)$ nên $AC$ là hình chiếu của $SC$ lên $(ABCD)$. <br>  Do đó góc giữa đường thẳng $SC$ và mặt phẳng $(ABCD)$ là góc $\\widehat{SCA}$.<br>- <strong>Sai</strong>. Trong mặt phẳng $(ABCD)$, kẻ $AH \\perp BD$ tại $H$. Xét $BD$ và $(SAH)$, ta có  $ BD \\perp AH \\text{ và } BD \\perp SA \\text{ (Do } SA\\perp (ABCD) \\text{ và } BD\\subset (ABCD)) \\text{ và } AH\\subset (SAH), \\ SA\\subset (SAH), \\ SA \\cap AH = A. $  Do đó $BD\\perp (SAH)$. Mà $BD\\subset (SBD)$ nên $(SBD) \\perp (SAH)$. <br>   Ta có $(SAC) \\cap (SAH) = SA$. Giả sử $(SBD)\\perp(SAC)$. Khi đó, $SA \\perp (SBD)$. <br>  Điều này vô lí vì đường thẳng $SA$ không vuông góc với đường thẳng $SD$ nằm trong mặt phẳng $(SBD)$. <br>   Do đó hai mặt phẳng $(SBD)$ và $(SAC)$ không vuông góc với nhau.<br>- <strong>Đúng</strong>. Xét $BC$ và $(SAB)$, ta có  $ BC \\perp AB \\text{ (Do } ABCD \\text{ là hình chữ nhật}) \\text{ và } BC \\perp SA \\text{ (Do } SA\\perp (ABCD) \\text{ và } BC\\subset (ABCD)) \\text{ và } AB\\subset (SAB), \\ SA\\subset (SAB), \\ SA \\cap AB = A. $  Do đó $BC\\perp (SAB)$. Mà $BC\\subset (SBC)$ nên $(SBC) \\perp (SAB)$.<br>- <strong>Đúng</strong>. Ta có $S_{ABCD}= AB\\cdot AD = a \\cdot 3a = 3a^2$. Suy ra   $ V_{S.ABCD}=\\dfrac{1}{3}\\cdot SA \\cdot S_{ABCD}=\\dfrac{1}{3} \\cdot 4a \\cdot 3a^2 = 4a^3. $"
  }
];
