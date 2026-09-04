// =========================================================================
// KHỐI DỮ LIỆU: 1H43 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
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
    "explain": "<br><img src=\"data/11/1D4/im1H43/dlts_11_DLTS15_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Sai</strong>.<br>  Đường thẳng $SA$ nằm trong mặt phẳng $(SAD)$. Đường thẳng $BC$ song song với $AD$(do $ABCD$ là hình bình hành), mà $AD \\subset(SAD)$, $BC \\not\\subset(SAD)$, nên $BC \\parallel(SAD)$.<br>  Do đó, $BC$ và $SA$ là hai đường thẳng chéo nhau(không đồng phẳng), chúng không thể cắt nhau.<br>- <strong>Đúng</strong>.<br>  Ta có $BC \\parallel AD \\text{ và } AD \\subset(SAD) \\text{ và } BC \\not\\subset(SAD) \\Rightarrow BC \\parallel(SAD)$.<br>- <strong>Sai</strong>.<br>  Ta có $S \\in(SAB) \\cap(SCD) \\text{ và } AB \\subset(SAB), CD \\subset(SCD) \\text{ và } AB \\parallel CD$<br>  Do đó, giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là đường thẳng $d$ đi qua $S$ và song song với $AB$(và $CD$).<br>- <strong>Đúng</strong>.<br>  Trong $\\triangle SAD$, ta có $\\dfrac{SM}{SA}=\\dfrac{1}{3}$ và $\\dfrac{SN}{SD}=\\dfrac{2}{3}$.<br>  Vì $\\dfrac{SM}{SA} \\ne \\dfrac{SN}{SD}$, theo định lý Thales đảo, đường thẳng $MN$ không song song với $AD$. <br>  Khi đó $MN\\cap AD=P$, nên $M\\in MN$ và $M\\in AD\\subset(ABCD)$.<br>  Do đó $P$ chính là giao điểm của $MN$ và mặt phẳng $(ABCD)$, và $P=MN \\cap AD$."
  },
  {
    "id": "1H432DS2",
    "question": "Cho hình chóp $S. ABCD$, có đáy $ABCD$ là hình bình hành (tham khảo hình bên). Gọi $M$ là trung điểm của cạnh $BC$, $I$ là điểm thuộc cạnh $SC$ sao cho $SI=2IC$. Gọi $P$ là giao điểm của $AC$ và $(SMD)$. Gọi $K$ là giao điểm của $AI$ và $(SMD)$.<br><img src=\"data/11/1D4/im1H43/dlts_11_DLTS5_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
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
    "explain": "<br><img src=\"data/11/1D4/im1H43/dlts_11_DLTS5_006.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Sai</strong>.<br>  Trong $(ABCD)$ ta có $P=AC\\cap MD\\Rightarrow P\\in AC \\text{ và } P\\in MD\\subset (SMD)\\Rightarrow AC\\cap (SMD)=\\{P\\}$.<br>  Suy ra $P$ là giao điểm của hai đường thẳng $AC$ và $MD$.<br>- <strong>Đúng</strong>.<br>  Trong $(SAC)$ ta có $K=AI\\cap SP\\Rightarrow K\\in AI \\text{ và } K\\in SP\\subset (SMD)\\Rightarrow AI\\cap (SMD)=\\{K\\}$.<br>  Suy ra $K$ là giao điểm của hai đường thẳng $AI$ và $SP$.<br>- <strong>Đúng</strong>.<br>  Ta có $CM \\parallel AD\\Rightarrow \\dfrac{PC}{PA}=\\dfrac{MC}{AD}=\\dfrac{1}{2}$ và $\\dfrac{IC}{IS}=\\dfrac{1}{2}$.<br>  Suy ra $IP\\parallel SA$ mà $SA\\subset (SAB)\\Rightarrow IP\\parallel (SAB)$.<br>- <strong>Sai</strong>.<br>  Áp dụng định lí Menelaus vào $\\triangle SDP$, có $\\dfrac{HS}{HD} \\cdot \\dfrac{MD}{MP} \\cdot \\dfrac{KP}{KS}=1$.<br>  Mà $\\dfrac{KP}{KS}=\\dfrac{IP}{SA}=\\dfrac{PC}{AC}=\\dfrac{1}{3}$ và $\\dfrac{MD}{MP}=3$.<br>  Suy ra $\\dfrac{HS}{HD} \\cdot 3 \\cdot \\dfrac{1}{3}=1 \\Rightarrow HS=HD \\Rightarrow \\dfrac{SH}{SD}=\\dfrac{1}{2}$.<br>  Áp dụng định lí Menelaus vào $\\triangle MDH$, có $\\dfrac{KM}{KH} \\cdot \\dfrac{SH}{SD} \\cdot \\dfrac{PD}{PM}=1$.<br>  Lại có $\\dfrac{PD}{PM}=2$, suy ra   $\\dfrac{KM}{KH} \\cdot \\dfrac{1}{2} \\cdot 2=1 \\Rightarrow KM=KH \\Rightarrow \\dfrac{MK}{MH}=\\dfrac{1}{2}$.<br>  Khi đó $a=1$ và $b=2$. Vậy $a+b=1+2=3$."
  }
];
