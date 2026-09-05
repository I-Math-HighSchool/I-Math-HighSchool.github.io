// =========================================================================
// KHỐI DỮ LIỆU: 1H41 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1H41 = [
  {
    "id": "1H415DS1",
    "question": "Cho hình chóp tứ giác $S.ABCD$, biết đường thẳng chứa cạnh $AB$ cắt đường thẳng chứa cạnh $CD$ tại $E$. Khi đó",
    "subQuestions": [
      {
        "text": "$SA$ là giao tuyến của hai mặt phẳng $(SAB)$ và $(SAD)$",
        "answer": true
      },
      {
        "text": "Đường thẳng $SE$ không nằm trong mặt phẳng $(SAB)$",
        "answer": false
      },
      {
        "text": "Đường thẳng $S E$ nằm trong mặt phẳng $(SCD)$",
        "answer": true
      },
      {
        "text": "$SE$ là giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1D4/im1H41/dlts_11_DLTS10_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Vì $S$, $A$ là $2$ điểm chung của $(SAB)$ và $(SAD)$ nên $SA$ là giao tuyến của hai mặt phẳng này.<br>- Vì $E$ nằm trên đường thẳng $AB$ nên $SE$ nằm trong mặt phẳng $(SAB)$.<br>- Vì $E$ nằm trên đường thẳng $CD$ nên $SE$ nằm trong mặt phẳng $(SCD)$.<br>- Vì $S$, $E$ là hai điểm chung của hai mặt phẳng $(SAC)$ và $(SCD)$ nên $SE$ là giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$."
  },
  {
    "id": "1H413DS1",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $O$ là giao điểm của $AC$ và $BD$, $M$ là trung điểm của cạnh $SA$ (tham khảo hình vẽ).<br><img src=\"data/11/1H4/im1H41/loc3_1_TL_TN_DS_THPT__000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đường thẳng $MC$ đi qua trọng tâm của tam giác $SBD$",
        "answer": true
      },
      {
        "text": "Đường thẳng $SO$ là giao tuyến của hai mặt phẳng ($SAC$) và ($SBD$)",
        "answer": true
      },
      {
        "text": "Nếu $(MBC)\\cap (SAD)=d$ thì $d$ đi qua trung điểm của cạnh $SD$",
        "answer": true
      },
      {
        "text": "Hai đường thẳng $BC$ và $SD$ cắt nhau",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1H4/im1H41/loc3_1_TL_TN_DS_THPT__001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Trong $(SAC)$ gọi $G=CM\\cap SO$. Do $SO$ và $CM$ là $2$ trung tuyến của $\\triangle SAC$ nên $G$ là trọng tâm $\\triangle SAC$. Suy ra $G\\in SO \\text{ và } \\dfrac{SG}{SO}=\\dfrac{2}{3}.\\qquad (*)$<br>  Xét $\\triangle SBD$ có $SO$ là trung tuyến và kết hợp với $(*)$ ta có $G$ là trọng tâm $\\triangle SBD$.<br>  Do đó $MC$ đi qua trọng tâm của tam giác $SBD$.<br>- Ta có $(SAC)\\cap (SBD)=SO$.<br>- Ta có $M\\in (MBC)\\cap (SAD) \\text{ và } BC\\subset (MBC) \\text{ và } AD\\subset (SAD) \\text{ và } BC\\parallel AD~\\text{(cạnh đối hình bình hành)}<br>  \\Rightarrow (MBC)\\cap (SAD)=d$ với $d$ qua $M$ và $d\\parallel BC\\parallel AD$.<br>  Trong $(SAD)$ gọi $N=d\\cap SD$.<br>  Do $M$ là trung điểm $SA$ mà $MN\\parallel AD$ nên $MN$ là đường trung bình $\\triangle SAD$. Suy ra $N$ là trung điểm $SD$.<br>- Hai đường thẳng $BC$ và $SD$ chéo nhau."
  }
];
