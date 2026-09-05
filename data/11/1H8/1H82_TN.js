// =========================================================================
// KHỐI DỮ LIỆU: 1H82 - Trắc nghiệm
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem1H82 = [
  {
    "id": "1H821TN1",
    "question": "Để làm đường dẫn lên bắc qua một con kênh, người ta đúc một khối bê tông hình lăng trụ tam giác biết tam giác $ABC$ vuông tại $B$, các tứ giác $ABED$, $BCEF$ và $ACFD$ là các hình chữ nhật (tham khảo hình vẽ). Khẳng định nào sau đây là <strong>sai</strong>?<br><img src=\"data/11/1D8/im1H82/dlts_11_DLTS20_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$BE \\perp (ABC)$",
      "$DF \\perp (ABED)$",
      "$AB \\perp (BCFE)$",
      "$FC \\perp (DEF)$"
    ],
    "answer": 1,
    "explain": "<br>- Ta có $BE\\perp AB \\text{ và } BE\\perp BC \\Rightarrow BE\\perp (ABC)$.<br>- Ta có $AB\\perp BE \\text{ và } AB \\perp BC \\Rightarrow AB\\perp (BCFE)$.<br>- Ta có $FC\\perp EF \\text{ và } FC\\perp DE\\Rightarrow FC\\perp (DEF)$.<br>- Nếu $DF \\perp (ABED)$ thì $DF \\perp DE$ (vô lí vì $\\triangle DEF$ vuông tại $E$)."
  },
  {
    "id": "1H821TN2",
    "question": "Cho hai đường thẳng $a$, $b$ phân biệt và mặt phẳng $(P)$, biết $a \\perp (P)$ và $b \\subset (P)$. Khẳng định nào sau đây <strong>đúng</strong>?",
    "options": [
      "$(a, b) = 90^\\circ$",
      "$(a, b) = 45^\\circ$",
      "$(a, b) = 0^\\circ$",
      "$(a, b) = 60^\\circ$"
    ],
    "answer": 0,
    "explain": "Ta có $a\\perp (P) \\text{ và } b\\subset (P)\\Rightarrow a\\perp b \\Rightarrow (a,b)=90^\\circ$."
  },
  {
    "id": "1H821TN3",
    "question": "[Nguyễn Ngọc Huy Trường]  Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông, $SA$ vuông góc với mặt phẳng đáy. Mệnh đề nào sau đây <strong>đúng</strong>?<br><img src=\"data/11/1D8/im1H82/dlts_11_DLTS21_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$BA\\perp \\left(SAC\\right)$",
      "$BA\\perp \\left(SCD\\right)$",
      "$BA\\perp \\left(SBC\\right)$",
      "$BA\\perp \\left(SAD\\right)$"
    ],
    "answer": 3,
    "explain": "Ta có $BA\\perp SA, BA\\perp AD$ suy ra $BA\\perp (SAD)$."
  },
  {
    "id": "1H824TN4",
    "question": "Trong không gian, cho điểm $M$ và đường thẳng $d$. Có bao nhiêu mặt phẳng qua điểm $M$ và vuông góc với đường thẳng $d$?",
    "options": [
      "$1$",
      "$0$",
      "Vô số",
      "$2$"
    ],
    "answer": 0,
    "explain": "Có $1$ mặt phẳng qua điểm $M$ và vuông góc với đường thẳng $d$."
  },
  {
    "id": "1H824TN5",
    "question": "Cho hình chóp $S. ABC$ có $SA\\perp AB$ và $SA\\perp AC$. Đường thẳng $SA$ vuông góc với đường thẳng nào sau đây?<br><img src=\"data/11/1D8/im1H82/dlts_11_DLTS22_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$BC$",
      "$SC$",
      "$SB$",
      "$AS$"
    ],
    "answer": 0,
    "explain": "Ta có $SA\\perp AB \\text{ và } SA\\perp AC\\Rightarrow SA\\perp (ABC)\\Rightarrow SA\\perp BC$."
  },
  {
    "id": "1H824TN6",
    "question": "Đường thẳng $\\Delta$ vuông góc với mặt phẳng $(P)$ nếu",
    "options": [
      "$\\Delta$ vuông góc với hai đường thẳng cắt nhau nằm trong mặt phẳng $(P)$",
      "$\\Delta$ vuông góc với hai đường thẳng phân biệt nằm trong $(P)$",
      "$\\Delta$ vuông góc với một đường thẳng nào đó nằm trong $(P)$",
      "$\\Delta$ có một điểm chung với mặt phẳng $(P)$"
    ],
    "answer": 0,
    "explain": "Nếu đường thẳng $\\Delta$ vuông góc với hai đường thẳng cắt nhau $a$ và $b$ cùng nằm trong mặt phẳng $(P)$ thì $\\Delta \\perp (P)$."
  },
  {
    "id": "1H824TN7",
    "question": "Cho điểm $O$ và đường thẳng $d$. Số mặt phẳng đi qua $O$ và vuông góc với đường thẳng $d$ là",
    "options": [
      "$2$",
      "$1$",
      "$0$",
      "$3$"
    ],
    "answer": 1,
    "explain": "Có duy nhất $1$ mặt phẳng đi qua $O$ và vuông góc với đường thẳng $d$."
  },
  {
    "id": "1H821TN8",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi tâm $O$. Biết rằng $SA=SC$, $SB=SD$. Khẳng định nào sau đây đúng?<br><img src=\"data/11/1D8/im1H82/dlts_11_DLTS23_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$CD\\perp (SBD)$",
      "$CD\\perp AC$",
      "$SO\\perp (ABCD)$",
      "$AB\\perp (SAC)$"
    ],
    "answer": 2,
    "explain": "$SA=SC \\Rightarrow \\triangle SAC$ cân tại $S \\Rightarrow SO\\perp AC$.<br>   $SB=SD \\Rightarrow \\triangle SBD$ cân tại $S \\Rightarrow SO\\perp BD$.<br>  $AC$, $BD \\subset (ABCD)$.<br>   $AC\\cap BD=O$.<br>  Suy ra $SO\\perp (ABCD)$.<br>"
  },
  {
    "id": "1H824TN9",
    "question": "Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$, $SA$ vuông góc với đáy. Đường thẳng $BC$ vuông góc với mặt phẳng nào sau đây?<br><img src=\"data/11/1D8/im1H82/dlts_11_DLTS24_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$(SAB)$",
      "$(SBC)$",
      "$(SAC)$",
      "$(ABC)$"
    ],
    "answer": 0,
    "explain": "Ta có<br>  $AB \\perp BC \\quad (\\triangle ABC \\text{ là tam giác vuông tại } B) \\text{ và } SA \\perp BC \\quad (SA \\perp (ABC)).$<br>  Suy ra $BC\\perp (SAB)$."
  },
  {
    "id": "1H821TN10",
    "question": "Cho hình chóp $S. ABCD$ có đáy $ABCD$ là hình chữ nhật, $SA \\perp(ABCD)$. Mệnh đề nào sau đây là đúng?<br><img src=\"data/11/1D8/im1H82/dlts_11_DLTS25_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$AC\\perp(SAD)$",
      "$AB\\perp(SAD)$",
      "$BC\\perp(SAD)$",
      "$BD \\perp(SAD)$"
    ],
    "answer": 1,
    "explain": "Ta có $AB\\perp AD\\,(\\text{do } ABCD\\text{ là hìnhchữ nhật}) \\text{ và } AB\\perp SA\\,(\\text{do }SA\\perp(ABCD))\\Rightarrow AB\\perp (SAD)$."
  },
  {
    "id": "1H824TN11",
    "question": "Cho hai đường thẳng phân biệt $a$, $b$ và mặt phẳng $(P)$, trong đó $a \\perp(P)$. Tìm mệnh đề {\\bf sai} trong các mệnh đề sau.",
    "options": [
      "Nếu $b\\parallel a$ thì $b \\perp(P)$",
      "Nếu $b\\parallel (P)$ thì $b \\perp a$",
      "Nếu $b \\subset(P)$ thì $b \\perp a$",
      "Nếu $b\\parallel a$ thì $b\\parallel (P)$"
    ],
    "answer": 3,
    "explain": "Ta có $a \\perp(P) \\text{ và } b\\parallel a\\Rightarrow b\\perp (P)$.<br>  Do đó, mệnh đề \\lq\\lq Nếu $b\\parallel a$ thì $b\\parallel (P)$\\rq\\rq\\, sai."
  },
  {
    "id": "1H824TN12",
    "question": "Cho hình chóp $S. ABCD$ có $SA \\perp(ABCD)$. Hình chiếu của $S$ trên mặt phẳng $(ABCD)$ là",
    "options": [
      "$A$",
      "$B$",
      "$C$",
      "$D$"
    ],
    "answer": 0,
    "explain": "Vì $SA \\perp(ABCD)$ nên hình chiếu của $S$ trên mặt phẳng $(ABCD)$ là điểm $A$."
  },
  {
    "id": "1H824TN13",
    "question": "Cho hình chóp $S.ABCD$ có $SA\\perp(ABCD)$, tứ giác $ABCD$ là hình chữ nhật. Tìm khẳng định <strong>sai</strong>.",
    "options": [
      "$SA \\perp AB$",
      "$AC \\perp BD$",
      "$AB\\perp BC$",
      "$BD\\perp SA$"
    ],
    "answer": 1,
    "explain": "Ta có $ABCD$ là hình chữ nhật nên $AC \\perp BD$ là sai."
  },
  {
    "id": "1H821TN14",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật và $SA \\perp (ABCD)$. Khẳng định nào sau đây đúng?",
    "options": [
      "$AC \\perp (SAB)$",
      "$SC \\perp (SAB)$",
      "$AB \\perp (SAD)$",
      "$BD \\perp (SAB)$"
    ],
    "answer": 2,
    "explain": "<br><img src=\"data/11/1D8/im1H82/dlts_11_DLTS28_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có $AB \\perp AD \\quad \\text{(vì $ABCD$ là hình chữ nhật)} \\text{ và } AB \\perp SA \\quad \\text{(vì $SA \\perp (ABCD)$, $AB \\subset (ABCD)$} \\text{ và } \\text{Trong $(SAD)$, $AD \\cap SA=A$.}$<br>  $\\Rightarrow AB \\perp (SAD)$."
  },
  {
    "id": "1H821TN15",
    "question": "Cho hình chóp $S.ABCD$ có $SA\\perp(ABCD)$ và đáy $ABCD$ là hình vuông và $H$ là hình chiếu vuông góc của $A$ lên $SD$. Khẳng định nào sau đây đúng?<br><img src=\"data/11/1D8/im1H82/dlts_11_DLTS32_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$AH\\perp(SBD)$",
      "$SD\\perp(HAC)$",
      "$AH\\perp(SAD)$",
      "$AH\\perp(SCD)$"
    ],
    "answer": 3,
    "explain": "Ta có $SA\\perp(ABCD) \\text{ và } CD\\subset(ABCD)\\Rightarrow SA\\perp CD$.<br>  Mà $AD\\perp CD$ nên $CD\\perp(SAD)$, suy ra $CD\\perp AH$.<br>  Do $AH\\perp SD$ nên $AH\\perp(SCD)$."
  },
  {
    "id": "1H824TN16",
    "question": "Cho hình lập phương $ABCD\\cdot A'B'C'D'$. Đường thẳng nào sau đây vuông góc với đường thẳng $BC$?<br><img src=\"data/11/1D8/im1H82/dlts_11_DLTS32_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$BD'$",
      "$A'B'$",
      "$AD'$",
      "$BC'$"
    ],
    "answer": 1,
    "explain": "Ta có $AB\\parallel A'B' \\text{ và } AB\\perp BC\\Rightarrow A'B'\\perp BC$."
  },
  {
    "id": "1H821TN17",
    "question": "Trong không gian, cho 3 đường thẳng $a$, $b$, $c$ phân biệt và mặt phẳng $(P)$. Mệnh đề nào sau đây đúng?",
    "options": [
      "Nếu $a\\perp c$ và $(P)\\perp c$ thì $a \\parallel(P)$",
      "Nếu $a\\perp c$ và $b\\perp c$ thì $a \\parallel b$",
      "Nếu $a\\perp b$ và $b\\perp c$ thì $a\\perp c$",
      "Nếu $a\\perp b$ thì $a$ và $b$ cắt nhau hoặc chéo nhau"
    ],
    "answer": 3,
    "explain": "Trong không gian, $a\\perp b$ nên $a$ và $b$ cắt nhau hoặc chéo nhau."
  },
  {
    "id": "1H821TN18",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật và $SA\\perp(ABCD)$. Gọi $AE, AF$ lần  lượt là các đường cao của tam giác $SAB$ và tam giác $SAD$. Khẳng định nào sau đây là đúng?<br><img src=\"data/11/1D8/im1H82/dlts_11_DLTS33_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$SC\\perp(AFB)$",
      "$SC\\perp(AEC)$",
      "$SC\\perp(AED)$",
      "$SC\\perp(AEF)$"
    ],
    "answer": 3,
    "explain": "Vì $SA$ vuông góc với mặt phẳng $(ABCD) \\Rightarrow SA\\perp BC$.<br>  Mà $AB\\perp BC$ nên suy ra $BC\\perp(SAB) \\Rightarrow BC\\perp AE\\subset(SAB)$.<br>  Tam giác $SAB$ có đường cao $AE \\Rightarrow AE\\perp SB$.  Mà $AE\\perp BC \\Rightarrow AE\\perp(SBC) \\Rightarrow AE\\perp SC$.<br>  Tương tự, ta chứng minh được $AF\\perp SC$. Do đó $SC\\perp(AEF)$."
  },
  {
    "id": "1H824TN19",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$, $SA \\perp (ABCD)$. Hình chiếu của $D$ lên mặt phẳng $(SAC)$ là điểm nào sau đây?",
    "options": [
      "$C$",
      "$A$",
      "$S$",
      "$O$"
    ],
    "answer": 3,
    "explain": "<br><img src=\"data/11/1D8/im1H82/dlts_11_DLTS36_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét $BD$ và $(SAC)$, ta có  $ BD \\perp AC \\text{ (Do } ABCD \\text{ là hình vuông}) \\text{ và } BD \\perp SA \\text{ (Do } SA\\perp (ABCD) \\text{ và } BD\\subset (ABCD)) \\text{ và } AC\\subset (SAC), \\ SA\\subset (SAC), \\ SA \\cap AC = A. $  Do đó $BD\\perp (SAC)$. Suy ra $DO \\perp (SAC)$ nên $O$ là hình chiếu của $D$ lên $(SAC)$."
  },
  {
    "id": "1H824TN1",
    "question": "Cho hình chóp $S.ABC$, biết $SA\\perp (ABC)$ và tam giác $ABC$ vuông tại $A$. Đường thẳng $AB$ vuông góc với mặt phẳng nào sau đây?<br><img src=\"data/11/1H8/im1H82/loc8_TT_KSCL_THPT_Yen_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$(SAB)$",
      "$(SAC)$",
      "$(SBC)$",
      "$(ABC)$"
    ],
    "answer": 1,
    "explain": "Ta có $AB\\perp AC \\text{ và } AB\\perp SA\\Rightarrow AB\\perp (SAC)$."
  }
];
