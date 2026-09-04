// =========================================================================
// KHỐI DỮ LIỆU: 1H42 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1H42 = [
  {
    "id": "1H422DS1",
    "question": "Cho hình chóp tam giác $S.ABC$. Gọi $M$, $N$, $P$ lần lượt là trung điểm của $BC$, $SA$ và $AC$.",
    "subQuestions": [
      {
        "text": "Hai đường thẳng $SC$ và $AB$ có đúng $1$ điểm chung",
        "answer": false
      },
      {
        "text": "Điểm $M$ thuộc mặt phẳng $\\left(SAB\\right)$",
        "answer": false
      },
      {
        "text": "Giao tuyến của $\\left(SBC\\right)$ và $\\left(SAM\\right)$ là đường thẳng $SM$",
        "answer": true
      },
      {
        "text": "Giao điểm của $MN$ và $\\left(SBP\\right)$ là giao điểm của $MN$ và $SG$, $G$ là trọng tâm $\\triangle ABC$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1D4/im1H42/dlts_11_DLTS18_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Sai</strong>.<br> Trong hình chóp tam giác   $S.ABC$, các đường thẳng $SC$ và $AB$  không cùng nằm trên một mặt phẳng nên không có điểm chung.<br>- <strong>Sai</strong>.<br> $M$ là trung điểm của $BC$. Nếu $M$ thuộc $\\left(SAB\\right) $ thì $BC\\in\\left(SAB\\right)$, điều này không đúng vì $BC$ là một cạnh của $\\triangle ABC$.<br>- <strong>Đúng</strong>.<br> Ta có $S\\in SM \\subset \\left(SAM\\right) \\text{ và } S\\in SB \\subset\\left(SBC \\right)\\Rightarrow S\\in \\left(SAM\\right)\\cap\\left(SBC \\right)$.<br>  Lại có $M\\in BC\\subset\\left(SBC\\right) \\text{ và } M\\in SM\\subset\\left(SAM\\right)\\Rightarrow M\\in \\left(SAM\\right)\\cap\\left(SBC \\right)$.<br>  Từ đó suy ra giao tuyến của $\\left(SBC\\right)$ và $\\left(SAM\\right)$ là đường thẳng $SM$.<br>- <strong>Đúng</strong>.<br> Ta có $MN \\subset \\left( SAM\\right)$, $SG \\subset \\left(SAM\\right) $ nên $MN$ và $SG$ giao nhau.<br>  Giả sử trong mặt phẳng $\\left(SAM\\right) $, ta có $K=MN\\cap SG\\quad(1)$<br>  Ta có $S \\in \\left(SAM \\right) \\text{ và } S\\in \\left(SBP\\right) \\text{ và } G\\in AM\\subset \\left(SAM \\right) \\text{ và } G\\in BP \\subset \\left(SBP\\right)\\Rightarrow$  $SG$ là giao tuyến của $\\left(SAM\\right) $ và $\\left(SBP\\right) $.<br>  Lại có $K\\in MN \\text{ và } K \\in SG \\subset \\left(SBP\\right)\\Rightarrow K=MN\\cap\\left(SBP \\right)\\quad (2)$<br>  Từ (1) và (2) ta có giao điểm của $MN$ và $\\left(SBP\\right)$ là giao điểm của $MN$ và $SG$, $G$ là trọng tâm $\\triangle ABC$."
  },
  {
    "id": "1H422DS2",
    "question": "Cho hình hộp $ABCD.A'B'C'D'$ và $I$ là trung điểm $AD$.   <br><img src=\"data/11/1D4/im1H42/dlts_11_DLTS18_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hai mặt phẳng $\\left(ADD'\\right)$ và $\\left(BCC'\\right)$",
        "answer": true
      },
      {
        "text": "Đường thẳng $AC$ song song với mặt phẳng $\\left(A'B'D'\\right)$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $\\left(BIC'\\right)$ cắt mặt phẳng $\\left(ADD'\\right)$ theo giao tuyến là đường thẳng song song $BC'$",
        "answer": true
      },
      {
        "text": "Xem hình hộp $ABCD.A'B'C'D'$ minh hoạ cho một chiếc bánh bông lan, ta cắt chiếc bánh bông lan này bởi mặt phẳng $(BIC')$. Khi đó, mặt cắt có dạng một hình bình hành",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br> Ta có $\\left(ADD'\\right)\\subset \\left(ADD'A'\\right) \\text{ và } \\left(BCC'\\right)\\subset \\left(BCC'B'\\right) \\text{ và } \\left(ADD'A'\\right)\\parallel\\left(BCC'B'\\right)\\Rightarrow \\left(ADD'\\right)\\parallel\\left(BCC'\\right)$.<br>- <strong>Đúng</strong>.<br> Ta có $AC\\subset \\left(ABCD\\right) \\text{ và } \\left(A'B'D'\\right)\\subset \\left(A'B'C'D'\\right) \\text{ và } \\left(ABCD\\right)\\parallel\\left(A'B'C'D'\\right)\\Rightarrow AC\\parallel\\left(A'B'D'\\right)$.<br>- <strong>Đúng</strong>.<br> Ta có $I \\in AD \\subset \\left(ADD'\\right) \\text{ và } I\\in IB\\subset \\left(BIC'\\right)$.<br>  Khi đó, giao tuyến của $\\left(BIC'\\right)$ và $\\left(ADD'\\right)$ là một đường thẳng đi qua $I$.<br>  Mặt khác $AD \\parallel BC'$.<br>  Do đó, giao tuyến của hai mặt phẳng $\\left(BIC'\\right)$ và $\\left(ADD'\\right)$ là một đường thẳng đi qua $I$ và song song với $BC'$.<br>- <strong>Sai</strong>.<br> Gọi $J$ là trung điểm của $DD'$. Khi đó, mặt cắt $(BIJC')$ là một hình thang."
  },
  {
    "id": "1H423DS1",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang có $CD$ là đáy lớn và $O$ là giao điểm của $AC$ và $BD$, $M$ là trung điểm của $SD$.",
    "subQuestions": [
      {
        "text": "$AB \\parallel CD$",
        "answer": true
      },
      {
        "text": "Giao tuyến của mặt phẳng $(SAB)$ và $(SCD)$ là $SO$",
        "answer": false
      },
      {
        "text": "Giao tuyến của mặt phẳng $(MAB)$ và $(SCD)$ qua $M$ và song song $CD$",
        "answer": false
      },
      {
        "text": "$SB$ và $DC$ chéo nhau",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1H4/im1H42/loc2_1_TN_DS_TL_THPT__004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Đúng</strong>.<br>  $ABCD$ là hình thang có $CD$ là đáy lớn nên $AB \\parallel CD$.<br>- <strong>Sai</strong>.<br>  Ta có $S \\in (SAB) \\cap (SCD) \\text{ và } AB \\parallel CD \\text{ và } AB \\subset (SAB) \\text{ và } CD \\subset (SCD) \\Rightarrow (SAB) \\cap (SCD)=Sx$ ($Sx \\parallel AB \\parallel CD$).<br>- <strong>Sai</strong>.<br>  Ta có $M \\in (MAB) \\cap (SCD) \\text{ và } AB \\parallel CD \\text{ và } AB \\subset (MAB) \\text{ và } CD \\subset (SCD) \\Rightarrow (MAB) \\cap (SCD)=My$ ($My \\parallel AB \\parallel CD$).<br>- <strong>Đúng</strong>.<br>  $SB$ và $DC$ chéo nhau vì $S$, $B$, $D$, $C$ không đồng phẳng."
  }
];
