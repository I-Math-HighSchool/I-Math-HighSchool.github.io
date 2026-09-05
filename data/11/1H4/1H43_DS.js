// =========================================================================
// KHỐI DỮ LIỆU: 1H43 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1H43 = [
  {
    "id": "1H432DS1",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M$ là điểm thuộc cạnh $SA$ sao cho $SM=\\dfrac{1}{3}SA$ và $N$ là điểm thuộc cạnh $SD$ sao cho $SN=\\dfrac{2}{3}SD$. Xét tính đúng sai các phát biểu sau",
    "subQuestions": [
      {
        "text": "Hai đường thẳng $SA$ và $BC$ cắt nhau",
        "answer": false
      },
      {
        "text": "$BC$ song song với mặt phẳng $(SAD)$",
        "answer": true
      },
      {
        "text": "Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là đường thẳng đi qua $S$ và song song với $AD$",
        "answer": false
      },
      {
        "text": "Giao điểm của đường thẳng $MN$ và mặt phẳng $(ABCD)$ là điểm $P$ với $P=MN \\cap AD$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1D4/im1H43/dlts_11_DLTS15_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Sai</strong>.<br>  Đường thẳng $SA$ nằm trong mặt phẳng $(SAD)$. Đường thẳng $BC$ song song với $AD$(do $ABCD$ là hình bình hành), mà $AD \\subset(SAD)$, $BC \\not\\subset(SAD)$, nên $BC \\parallel(SAD)$.<br>  Do đó, $BC$ và $SA$ là hai đường thẳng chéo nhau(không đồng phẳng), chúng không thể cắt nhau.<br>- <strong>Đúng</strong>.<br>  Ta có $BC \\parallel AD \\text{ và } AD \\subset(SAD) \\text{ và } BC \\not\\subset(SAD) \\Rightarrow BC \\parallel(SAD)$.<br>- <strong>Sai</strong>.<br>  Ta có $S \\in(SAB) \\cap(SCD) \\text{ và } AB \\subset(SAB), CD \\subset(SCD) \\text{ và } AB \\parallel CD$<br>  Do đó, giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là đường thẳng $d$ đi qua $S$ và song song với $AB$(và $CD$).<br>- <strong>Đúng</strong>.<br>  Trong $\\triangle SAD$, ta có $\\dfrac{SM}{SA}=\\dfrac{1}{3}$ và $\\dfrac{SN}{SD}=\\dfrac{2}{3}$.<br>  Vì $\\dfrac{SM}{SA} \\ne \\dfrac{SN}{SD}$, theo định lý Thales đảo, đường thẳng $MN$ không song song với $AD$. <br>  Khi đó $MN\\cap AD=P$, nên $M\\in MN$ và $M\\in AD\\subset(ABCD)$.<br>  Do đó $P$ chính là giao điểm của $MN$ và mặt phẳng $(ABCD)$, và $P=MN \\cap AD$."
  },
  {
    "id": "1H432DS2",
    "question": "Cho hình chóp $S. ABCD$, có đáy $ABCD$ là hình bình hành (tham khảo hình bên). Gọi $M$ là trung điểm của cạnh $BC$, $I$ là điểm thuộc cạnh $SC$ sao cho $SI=2IC$. Gọi $P$ là giao điểm của $AC$ và $(SMD)$. Gọi $K$ là giao điểm của $AI$ và $(SMD)$.<br><img src=\"data/11/1D4/im1H43/dlts_11_DLTS5_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Ta có $P$ cũng là giao điểm của hai đường thẳng $AC$ và $SD$",
        "answer": false
      },
      {
        "text": "Ta có $K$ cũng là giao điểm của hai đường thẳng $AI$ và $SP$",
        "answer": true
      },
      {
        "text": "Đường thẳng $IP$ song song với mặt phẳng $(SAB)$",
        "answer": true
      },
      {
        "text": "Đường thẳng $SD$ cắt mặt phẳng $(IMA)$ tại $H$. Gọi $\\dfrac{MK}{MH}=\\dfrac{a}{b}$ trong đó $a, b$ là hai số nguyên dương và $\\dfrac{a}{b}$ là phân số tối giản. Ta có $a+b=7$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1D4/im1H43/dlts_11_DLTS5_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Sai</strong>.<br>  Trong $(ABCD)$ ta có $P=AC\\cap MD\\Rightarrow P\\in AC \\text{ và } P\\in MD\\subset (SMD)\\Rightarrow AC\\cap (SMD)=\\{P\\}$.<br>  Suy ra $P$ là giao điểm của hai đường thẳng $AC$ và $MD$.<br>- <strong>Đúng</strong>.<br>  Trong $(SAC)$ ta có $K=AI\\cap SP\\Rightarrow K\\in AI \\text{ và } K\\in SP\\subset (SMD)\\Rightarrow AI\\cap (SMD)=\\{K\\}$.<br>  Suy ra $K$ là giao điểm của hai đường thẳng $AI$ và $SP$.<br>- <strong>Đúng</strong>.<br>  Ta có $CM \\parallel AD\\Rightarrow \\dfrac{PC}{PA}=\\dfrac{MC}{AD}=\\dfrac{1}{2}$ và $\\dfrac{IC}{IS}=\\dfrac{1}{2}$.<br>  Suy ra $IP\\parallel SA$ mà $SA\\subset (SAB)\\Rightarrow IP\\parallel (SAB)$.<br>- <strong>Sai</strong>.<br>  Áp dụng định lí Menelaus vào $\\triangle SDP$, có $\\dfrac{HS}{HD} \\cdot \\dfrac{MD}{MP} \\cdot \\dfrac{KP}{KS}=1$.<br>  Mà $\\dfrac{KP}{KS}=\\dfrac{IP}{SA}=\\dfrac{PC}{AC}=\\dfrac{1}{3}$ và $\\dfrac{MD}{MP}=3$.<br>  Suy ra $\\dfrac{HS}{HD} \\cdot 3 \\cdot \\dfrac{1}{3}=1 \\Rightarrow HS=HD \\Rightarrow \\dfrac{SH}{SD}=\\dfrac{1}{2}$.<br>  Áp dụng định lí Menelaus vào $\\triangle MDH$, có $\\dfrac{KM}{KH} \\cdot \\dfrac{SH}{SD} \\cdot \\dfrac{PD}{PM}=1$.<br>  Lại có $\\dfrac{PD}{PM}=2$, suy ra   $\\dfrac{KM}{KH} \\cdot \\dfrac{1}{2} \\cdot 2=1 \\Rightarrow KM=KH \\Rightarrow \\dfrac{MK}{MH}=\\dfrac{1}{2}$.<br>  Khi đó $a=1$ và $b=2$. Vậy $a+b=1+2=3$."
  },
  {
    "id": "1H433DS1",
    "question": "Cho tứ giác $ABCD$ có $AC$ và $BD$ giao nhau tại $O$ và một điểm $S$ không thuộc mặt phẳng $(ABCD)$. Trên đoạn $SC$ lấy một điểm $M$ không trùng với $S$ và $C$.",
    "subQuestions": [
      {
        "text": "$SO$ là giao tuyến của hai mặt phẳng $(SAC)$ và $(ABC)$",
        "answer": false
      },
      {
        "text": "$SO$ là giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$",
        "answer": true
      },
      {
        "text": "Giao điểm của đường thẳng $SO$ với mặt phẳng $(ABM)$ là điểm $K$ với $K = AM \\cap SO$",
        "answer": true
      },
      {
        "text": "Giao điểm của đường thẳng $SD$ với mặt phẳng $(ABM)$ là điểm $N$ thuộc đường thẳng $AK$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1H4/im1H43/loc_ghk1nq_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $A$, $C$ là hai điểm chung của hai mặt phẳng $(SAC)$ và $(ABC)$. Suy ra $AC$ là giao tuyến của hai mặt phẳng $(SAC)$ và $(ABC)$.<br>- Ta có $AC$ và $BD$ giao nhau tại $O$ $ \\Rightarrow O \\in (SAC) \\cap (SBD)$, $S \\in (SAC) \\cap (SBD)$.<br>  Suy ra $SO$ là giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$.<br>- Ta có $K = AM \\cap SO$ nên $K \\in AM$ và $K \\in SO$. Suy ra $K \\in (ABM)$ và $K \\in SO$.<br> Vậy $K$ là giao điểm của đường thẳng $SO$ với mặt phẳng $(ABM)$.<br>- Ta có $B$, $K$ là hai điểm chung của hai mặt phẳng $(SBD)$ và $(ABM)$. Suy ra $BK$ là giao tuyến của hai mặt phẳng $(SBD)$ và $(ABM)$.<br>  Trong mặt phẳng $(SBD)$, vẽ $N$ là giao điểm của $BK$ và $SD$.<br>  Ta có $N \\in BK$ nên $N \\in (ABM)$, $N \\in SD$ nên $N \\in (SBD)$.<br>  Vậy $N$ là giao điểm của đường thẳng $SD$ với mặt phẳng $(ABM)$.<br>"
  },
  {
    "id": "1H433DS2",
    "question": "Cho hình chóp $S. ABCD$ có đáy là tứ giác lồi không có cặp cạnh song song. Gọi $M$, $N$ lần lượt là trung điểm $SA$, $SB$ và $P=AC\\cap BD$, $d$ là giao tuyến giữa mặt phẳng $(MNP)$ và mặt phẳng $(ABCD)$.",
    "subQuestions": [
      {
        "text": "Đường thẳng $d$ đi qua điểm $P$ và song song với đường thẳng $CD$",
        "answer": false
      },
      {
        "text": "Gọi $E=d \\cap BC$, khi đó $NE\\parallel SC$",
        "answer": false
      },
      {
        "text": "Gọi $F=d \\cap AD$, khi đó $(SAD) \\cap(MNP)=MF$",
        "answer": true
      },
      {
        "text": "Tứ giác $MNEF$ là hình thang",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1H4/im1H43/loc2_1_TN_DS_TL_THPT__010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $P\\in (MNP)\\cap (ABCD) \\text{ và } MN\\subset (MNP) \\text{ và } AB\\subset (ABCD) \\text{ và } MN\\parallel AB\\Rightarrow (MNP)\\cap (ABCD)=d$ với $d~\\text{qua}~P \\text{ và } d\\parallel AB\\parallel MN.$<br>- Giả sử $NE\\parallel SC$. Vì $N$ là trung điểm $SB$ nên $NE$ là đường trung bình tam giác $SBC$. Suy ra $E$ là trung điểm $BC$ vô lý vì $ABCD$ là tứ giác bất kỳ.<br>  Do đó $NE$ không song song với $SC$.<br>- Ta có $M\\in (SAD) \\cap(MNP)$.<br>  $F\\in d$, $d\\subset (MNP)$ suy ra $F\\in (MNP)$.<br>  $F\\in AD$, $AD\\subset (SAD)$ suy ra $F\\in (SAD)$.<br>  Suy ra $F\\in (SAD) \\cap(MNP)$.<br>  Do đó $(SAD) \\cap(MNP)=MF$.<br>- Vì $MN\\parallel FD$ nên $MNEF$ là hình thang."
  },
  {
    "id": "1H433DS3",
    "question": "Cho hình chóp $S.ABCD$ có đáy là hình thang $AB \\parallel CD$, $AB = 2CD$. $M, N$ lần lượt là trung điểm cạnh $AB, SA$.",
    "subQuestions": [
      {
        "text": "Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là đường thẳng $xSx'$, $xSx' \\parallel AD$",
        "answer": false
      },
      {
        "text": "Giao điểm giữa đường $SD$ và mặt $(CMN)$ là trung điểm của đoạn thẳng $SD$",
        "answer": true
      },
      {
        "text": "$AD \\parallel (CMN)$",
        "answer": true
      },
      {
        "text": "$(P)$ là mặt phẳng chứa đường $MN$ và song song với đường $SD$. Gọi $E$ là giao điểm giữa đường $CD$ với mặt $(P)$, khi đó $\\dfrac{EC}{DC} = \\dfrac{1}{2}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1H4/im1H43/loc2_1_TN_DS_TL_THPT__004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   <br>- Hai mặt phẳng $(SAB)$ và $(SCD)$ chứa hai đường thẳng song song là $AB$ và $CD$. Giao tuyến $Sx$ phải song song với $AB$ và $CD$.<br>  Khẳng định song song với $AD$ là sai.<br>- Xét tứ giác $AMCD$: Do $M$ là trung điểm $AB$ và $AB=2CD, AB \\parallel CD$ nên $AM = CD$ và $AM \\parallel CD$.<br>  Suy ra $AMCD$ là hình bình hành $\\Rightarrow MC \\parallel AD$.<br>  Trong $(SAD)$, qua $N$ kẻ đường thẳng song song với $AD$ (do $AD \\parallel MC \\subset (CMN)$).<br>  Vì $N$ là trung điểm $SA$ nên đường thẳng này cắt $SD$ tại trung điểm $I$.<br>  Vậy giao điểm là trung điểm $SD$.<br>- Ta có $MC \\parallel AD$ (chứng minh trên).<br>  Mà $MC \\subset (CMN)$, $AD \\not\\subset (CMN) \\Rightarrow AD \\parallel (CMN)$.<br>- Ta có $MN$ là đường trung bình $\\Delta SAB \\Rightarrow MN \\parallel SB$.<br>  Vậy $(P)$ chứa $MN$ và song song $SD$ thì $(P) \\parallel (SBD)$.<br>  Giao tuyến của $(P)$ với $(ABCD)$ là đường thẳng qua $M$ và song song với $BD$.<br>  Xét trong mặt phẳng đáy $(ABCD)$: Gọi $E$ là giao điểm của đường thẳng qua $M$ song song $BD$ với đường thẳng $CD$.<br>  Ta tính được $D$ là trung điểm của $EC$ (dựa vào định lý Thales hoặc phép vị tự tâm $A$, tỉ số $\\dfrac{3}{2}$ và các tính chất hình thang).<br>  Khi đó $EC = 2DC \\Rightarrow \\dfrac{EC}{DC} = 2$."
  }
];
