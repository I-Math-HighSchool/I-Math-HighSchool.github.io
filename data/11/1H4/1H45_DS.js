// =========================================================================
// KHỐI DỮ LIỆU: 1H45 - Đúng sai
// Nguồn: SachBaiHoc_T11 (dự án LaTeX nội bộ, chương QUAN HỆ SONG SONG
// TRONG KHÔNG GIAN, file QHSS-DS.tex), chuyển từ LaTeX, đã kiểm tra lại
// toàn bộ lời giải bằng phương pháp tọa độ trước khi đưa vào ngân hàng.
// =========================================================================
window.dungSai1H45 = [
  {
    "id": "1H451DS1",
    "question": "Cho lăng trụ tam giác $ABC.A'B'C'$ có $I$, $K$, $G$ lần lượt là trọng tâm các tam giác $ABC$, $A'B'C'$, $ACC'$. Gọi $M$, $M'$, $N$ lần lượt là trung điểm của $BC$, $B'C'$, $CC'$. Khi đó",
    "subQuestions": [
      {
        "text": "$AMM'A'$ là hình bình hành",
        "answer": true
      },
      {
        "text": "$\\dfrac{AI}{AM}=\\dfrac{AG}{AN}=\\dfrac{1}{3}$",
        "answer": false
      },
      {
        "text": "$(IKG)$ cắt $(BCC'B')$",
        "answer": false
      },
      {
        "text": "$(A'KG)\\parallel(AIB')$",
        "answer": true
      }
    ],
    "explain": "- Vì $M$, $M'$ là trung điểm của $BC$, $B'C'$ nên $MM'$ là đường trung bình của hình bình hành $BCC'B'$, suy ra $MM'\\parallel BB'$ và $MM'=BB'$; mà $AA'\\parallel BB'$ và $AA'=BB'$ (tính chất lăng trụ) nên $MM'\\parallel AA'$ và $MM'=AA'$. Suy ra $AMM'A'$ là hình bình hành. Vậy khẳng định này đúng.<br>- Vì $I$ là trọng tâm tam giác $ABC$ và $AM$ là trung tuyến nên $\\dfrac{AI}{AM}=\\dfrac{2}{3}$. Vì $G$ là trọng tâm tam giác $ACC'$ và $AN$ là trung tuyến (với $N$ là trung điểm $CC'$) nên $\\dfrac{AG}{AN}=\\dfrac{2}{3}$. Vậy $\\dfrac{AI}{AM}=\\dfrac{AG}{AN}=\\dfrac{2}{3}$ (không phải $\\dfrac{1}{3}$), nên khẳng định trên là sai. Từ đây cũng suy ra $IG\\parallel MN$, mà $MN\\subset (BCC'B')$ nên $IG\\parallel (BCC'B')$.<br>- Vì $I$, $K$ lần lượt là trọng tâm các tam giác $ABC$, $A'B'C'$ nên $IM=KM'=\\dfrac{1}{3}AM$ và $IM\\parallel KM'$, suy ra $IKM'M$ là hình bình hành, do đó $IK\\parallel MM'$; mà $MM'\\subset (BCC'B')$ nên $IK\\parallel (BCC'B')$. Kết hợp với $IG\\parallel (BCC'B')$ ở trên, ta có $(IKG)\\parallel (BCC'B')$. Vậy khẳng định \"$(IKG)$ cắt $(BCC'B')$\" là sai.<br>- Mặt phẳng $(A'KG)$ chính là mặt phẳng $(A'M'C)$ và $(AIB')$ chính là mặt phẳng $(AMB')$. Vì $AMM'A'$ là hình bình hành (câu 1) nên $AM\\parallel A'M'$, suy ra $AM\\parallel (A'M'C)$. Mặt khác $CM\\parallel B'M'$ và $CM=B'M'$ nên $CMB'M'$ là hình bình hành, suy ra $B'M\\parallel CM'$, do đó $B'M\\parallel (A'M'C)$. Vì $AM$ và $B'M$ cùng song song với $(A'M'C)$ và cắt nhau tại $M$ nên $(AMB')\\parallel (A'M'C)$, tức là $(A'KG)\\parallel (AIB')$. Vậy khẳng định này đúng."
  },
  {
    "id": "1H451DS2",
    "question": "Cho lăng trụ tam giác $ABC.A'B'C'$. Gọi $I$ và $I'$ lần lượt là trung điểm của $BC$ và $B'C'$. Khi đó",
    "subQuestions": [
      {
        "text": "$II'\\parallel BB'$",
        "answer": true
      },
      {
        "text": "$AA'I'I$ là hình bình hành",
        "answer": true
      },
      {
        "text": "$IA'$ song song $(AB'C')$",
        "answer": false
      },
      {
        "text": "Giao tuyến của $(AB'C')$ và $(A'BC')$ là đường thẳng đi qua giao điểm của hai đường thẳng $AI'$, $A'I$",
        "answer": true
      }
    ],
    "explain": "- Vì $I$, $I'$ lần lượt là trung điểm của $BC$, $B'C'$ nên $BI\\parallel B'I'$ và $BI=B'I'$, suy ra $BB'I'I$ là hình bình hành, do đó $II'\\parallel BB'$. Vậy khẳng định này đúng.<br>- Từ $II'\\parallel BB'$ mà $BB'\\parallel AA'$ (tính chất lăng trụ) nên $II'\\parallel AA'$; lại có $II'=BB'=AA'$ nên $AA'I'I$ là hình bình hành. Vậy khẳng định này đúng.<br>- Gọi $E=IA'\\cap AI'$ (hai đường chéo của hình bình hành $AA'I'I$ cắt nhau tại $E$). Vì $E\\in AI'\\subset (AB'C')$ nên $IA'$ cắt mặt phẳng $(AB'C')$ tại $E$, chứ không song song với mặt phẳng này. Vậy khẳng định \"$IA'$ song song $(AB'C')$\" là sai.<br>- Gọi $F=AB'\\cap A'B$. Vì $F\\in AB'\\subset (AB'C')$ và $F\\in A'B\\subset (A'BC')$ nên $F\\in (AB'C')\\cap (A'BC')$. Theo câu trên, $E=IA'\\cap AI'$ với $E\\in AI'\\subset (AB'C')$ và $E\\in A'I\\subset (A'BC')$ nên $E\\in (AB'C')\\cap (A'BC')$. Vậy giao tuyến của $(AB'C')$ và $(A'BC')$ chính là đường thẳng $EF$, đi qua giao điểm $E$ của hai đường thẳng $AI'$ và $A'I$. Vậy khẳng định này đúng."
  },
  {
    "id": "1H452DS1",
    "question": "Cho hình hộp $ABCD.A'B'C'D'$. Gọi $G_1$, $G_2$ lần lượt là trọng tâm của các tam giác $A'BD$, $B'D'C$. Khi đó",
    "subQuestions": [
      {
        "text": "$A'D'CB$ là hình bình hành",
        "answer": true
      },
      {
        "text": "$(A'BD)\\parallel(B'D'C)$",
        "answer": true
      },
      {
        "text": "$G_1$, $G_2$ cùng thuộc $AC'$",
        "answer": true
      },
      {
        "text": "$G_1G_2=\\dfrac{2}{3}AC'$",
        "answer": false
      }
    ],
    "explain": "- Vì $ABCD.A'B'C'D'$ là hình hộp nên $A'D'\\parallel BC$ và $A'D'=BC$, suy ra $A'D'CB$ là hình bình hành. Vậy khẳng định này đúng.<br>- Ta có $BD\\parallel B'D'$ và $CD'\\parallel A'B$ (tính chất các mặt của hình hộp), suy ra $(A'BD)\\parallel(B'D'C)$. Vậy khẳng định này đúng.<br>- Gọi $O$ là tâm của hình bình hành đáy $ABCD$ (cũng là trung điểm $BD$ và $AC$), $O'$ là tâm của $A'B'C'D'$, và $I$ là trung điểm của $AC'$. Vì $ACC'A'$ là hình bình hành ($AC\\parallel A'C'$, $AC=A'C'$) nên hai đường chéo $AC'$ và $A'C$ của nó cắt nhau tại trung điểm mỗi đường, tức $I$ cũng là trung điểm của $A'C$.<br>  Vì $G_1$ là trọng tâm tam giác $A'BD$ và $O$ là trung điểm $BD$ nên $A'O$ là trung tuyến của tam giác đó, suy ra $\\dfrac{A'G_1}{A'O}=\\dfrac{2}{3}$. Mặt khác $O$ cũng là trung điểm $AC$ nên $A'O$ đồng thời là trung tuyến của tam giác $AA'C$ kẻ từ $A'$; do đó $G_1$ cũng là trọng tâm của tam giác $AA'C$, suy ra $G_1$ thuộc trung tuyến $AI$ (từ $A$ đến trung điểm $I$ của $A'C$), mà $AI\\equiv AC'$ (vì $I\\in AC'$) nên $G_1\\in AC'$.<br>  Lập luận tương tự, $G_2$ là trọng tâm tam giác $CB'D'$ nên cũng là trọng tâm tam giác $CC'A'$, do đó $G_2$ thuộc trung tuyến $C'I\\equiv AC'$, suy ra $G_2\\in AC'$. Vậy $G_1$, $G_2$ cùng thuộc $AC'$: khẳng định này đúng.<br>- Từ chứng minh trên, $AG_1=\\dfrac{2}{3}AI=\\dfrac{2}{3}\\cdot\\dfrac{1}{2}AC'=\\dfrac{1}{3}AC'$, và tương tự $CG_2=\\dfrac{1}{3}AC'$, suy ra $G_1G_2=AC'-AG_1-CG_2=\\dfrac{1}{3}AC'$ (không phải $\\dfrac{2}{3}AC'$). Vậy khẳng định này sai."
  },
  {
    "id": "1H452DS2",
    "question": "Cho hình hộp $ABCD.A'B'C'D'$ có các cạnh $AA'$, $BB'$, $CC'$, $DD'$ song song với nhau. Khi đó",
    "subQuestions": [
      {
        "text": "$(BDA')\\parallel(B'D'C)$",
        "answer": true
      },
      {
        "text": "Đường chéo $AC'$ đi qua trọng tâm $G_1$, $G_2$ của tam giác $BDA'$ và $B'D'C$",
        "answer": true
      },
      {
        "text": "$AG_1=2G_1G_2$",
        "answer": false
      },
      {
        "text": "Mặt phẳng $(A'B'G_2)$ cắt hình hộp $ABCD.A'B'C'D'$ tạo thành một tứ giác là hình bình hành",
        "answer": true
      }
    ],
    "explain": "- Ta có $BD\\parallel B'D'$ và $CD'\\parallel A'B$ (tính chất các mặt của hình hộp), suy ra $(A'BD)\\parallel(B'D'C)$, tức là $(BDA')\\parallel(B'D'C)$. Vậy khẳng định này đúng.<br>- Gọi $O$ là tâm của hình bình hành đáy $ABCD$ (cũng là trung điểm $BD$ và $AC$), $O'$ là tâm của $A'B'C'D'$, và $I$ là trung điểm của $AC'$; vì $ACC'A'$ là hình bình hành nên $I$ cũng là trung điểm của $A'C$.<br>  Vì $G_1$ là trọng tâm tam giác $A'BD$ nên $\\dfrac{A'G_1}{A'O}=\\dfrac{2}{3}$; mà $A'O$ cũng là trung tuyến của tam giác $AA'C$ (do $O$ là trung điểm $AC$), nên $G_1$ cũng là trọng tâm tam giác $AA'C$, suy ra $G_1$ thuộc $AI\\equiv AC'$.<br>  Tương tự, $G_2$ là trọng tâm tam giác $CB'D'$ nên $G_2$ cũng là trọng tâm tam giác $CC'A'$, suy ra $G_2$ thuộc $C'I\\equiv AC'$. Vậy đường chéo $AC'$ đi qua cả $G_1$ và $G_2$: khẳng định này đúng.<br>- Từ chứng minh trên, $AG_1=CG_2=\\dfrac{2}{3}AI=\\dfrac{1}{3}AC'$; và $G_1G_2=AC'-AG_1-CG_2=\\dfrac{1}{3}AC'$, suy ra $AG_1=G_1G_2$ (không phải $AG_1=2G_1G_2$). Vậy khẳng định này sai.<br>- Gọi $P$ là trung điểm $CD'$; vì $P$ là trung điểm một cạnh của tam giác $CB'D'$ nên $B'P$ là trung tuyến của tam giác này và đi qua trọng tâm $G_2$, do đó $P\\in(A'B'G_2)$, tức mặt phẳng $(A'B'G_2)$ chính là $(A'B'P)$. Mặt phẳng này cắt mặt $(CDD'C')$ theo giao tuyến $\\Delta$ đi qua $P$ và song song với $A'B'$ (vì $A'B'\\parallel C'D'\\subset (CDD'C')$). Gọi $M$, $N$ lần lượt là giao điểm của $\\Delta$ với $CC'$, $DD'$; khi đó $MN\\parallel A'B'\\parallel C'D'$ và $MN=A'B'=C'D'$, suy ra $MNA'B'$ là hình bình hành. Mặt phẳng $(A'B'G_2)$ cắt các mặt $(ADD'A')$, $(BCC'B')$ của hình hộp lần lượt theo các đoạn $NA'$, $MB'$, nên thiết diện tạo bởi mặt phẳng này với hình hộp chính là tứ giác $MNA'B'$ - một hình bình hành. Vậy khẳng định này đúng."
  }
];
