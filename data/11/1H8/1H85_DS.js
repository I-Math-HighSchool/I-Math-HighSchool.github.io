// =========================================================================
// KHỐI DỮ LIỆU: 1H85 - Đúng sai
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1H85 = [
  {
    "id": "1H853DS1",
    "question": "Cho hình chóp $S.ABCD$, đáy là hình vuông tâm $O$ và $SA = SC$, $SB = SD$ (tham khảo hình vẽ). Khi đó:<br><img src=\"data/11/1D8/im1H85/dlts_11_DLTS20_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$SO \\perp (ABCD)$",
        "answer": true
      },
      {
        "text": "Hình chiếu của điểm $C$ trên mặt phẳng $(SAB)$ là điểm $B$",
        "answer": false
      },
      {
        "text": "Hình chiếu của đường thẳng $SA$ trên mặt phẳng $(SBD)$ là đường thẳng $SC$",
        "answer": false
      },
      {
        "text": "Gọi $H$ là hình chiếu của $O$ trên mặt phẳng $(SAB)$, biết hình vuông $ABCD$ cạnh $a$, $SO = \\dfrac{a\\sqrt{3}}{2}$. Khi đó $OH = \\dfrac{a\\sqrt{3}}{4}$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1D8/im1H85/dlts_11_DLTS20_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Đúng</strong>. Xét $\\triangle SAC$ cân tại $S$ có $SO$ là đường trung tuyến.<br>  Suy ra $SO$ là đường cao của $\\triangle SAC$. Do đó $SO\\perp AC$.<br>  Xét $\\triangle SBD$ cân tại $S$ có $SO$ là đường trung tuyến.<br>  Suy ra $SO$ là đường cao của $\\triangle SBD$. Do đó $SO\\perp BD$.<br>  Ta có $SO\\perp AC \\quad \\text{(cmt)} \\text{ và } SO \\perp BD \\quad\\text {(cmt)} \\text{ và } AC\\text{ cắt } BD \\text{ tại } O \\text{ trong } (ABCD) \\Rightarrow SO \\perp (ABCD) $.<br>- <strong>Sai</strong>. Nếu hình chiếu của điểm $C$ trên mặt phẳng $(SAB)$ là điểm $B$ thì $BC\\perp SB$.<br>  Mà $BC\\perp SO$ và $SB$ cắt $SO$ tại $S$ trong $(SAC)$.<br>  Nên $BC\\perp (SBD)$. Suy ra $BC\\perp BD$. Khi đó $\\widehat{CBD}=90^\\circ$ (vô lí).<br>  Vậy hình chiếu của điểm $C$ trên mặt phẳng $(SAB)$ <strong>không</strong> là điểm $B$.<br>- <strong>Sai</strong>. $SC\\not\\subset (SBD)$ nên hình chiếu của đường thẳng $SA$ trên mặt phẳng $(SBD)$ <strong>không</strong> là đường thẳng $SC$.<br>- <strong>Đúng</strong>. Gọi $M$ là trung điểm $AB$. Xét $\\triangle OAB$ cân tại $O$ có $OM$ là đường trung tuyến nên $OM$ cũng là đường cao.<br>  Suy ra $OM\\perp AB$.<br>  Mà $AB\\perp SO $ (do $SO\\perp (ABCD) $, $AB\\subset (ABCD)$).<br>  Nên $AB\\perp (SOM)$.  Trong $(SOM)$, dựng $OH\\perp SM$ tại $H$.<br>  Ta có $OH\\perp SM \\text{ và } OH\\perp AB \\text {( vì )}AB\\perp (SOM) \\text{ và } SM \\text{ cắt }AB \\text{ tại }M \\text{ trong }(SAB)$ $\\Rightarrow OH\\perp (SAB)$ tại $H$.<br>  Vậy $H$ là hình chiếu của $O$ trên mặt phẳng $(SAB)$.<br>  Xét $\\triangle ABD$ có $OM$ là đường trung bình. Suy ra $OM=\\dfrac{AD}{2}=\\dfrac{a}{2}$.<br>  Xét $\\triangle SOM$ vuông tại $O$ có $OH$ là đường cao  $\\dfrac{1}{OH^2}=\\dfrac{1}{SO^2}+ \\dfrac{1}{OM^2}\\Leftrightarrow \\dfrac{1}{OH^2}=\\dfrac{1}{\\left(\\dfrac{a\\sqrt{3}}{2}\\right)^2} + \\dfrac{1}{\\left( \\dfrac{a}{2}\\right)^2} \\Leftrightarrow OH=\\dfrac{a\\sqrt{3}}{4}.$  Vậy $OH=\\dfrac{a\\sqrt{3}}{4}$."
  },
  {
    "id": "1H853DS2",
    "question": "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $2\\sqrt{3}$.",
    "subQuestions": [
      {
        "text": "Độ dài đường chéo của hình lập phương bằng $2\\sqrt{6}$",
        "answer": false
      },
      {
        "text": "Gọi $O$ là tâm của hình vuông $ABCD$. Giao điểm của đường thẳng $DB'$ và mặt phẳng $\\left(D'AC\\right)$ là giao điểm của hai đường thẳng $DB'$ và $D'O$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $\\left(D'AC\\right)$ vuông góc với mặt phẳng $\\left(BDD'B'\\right)$",
        "answer": true
      },
      {
        "text": "Khoảng cách giữa hai mặt phẳng $\\left(D'AC\\right)$, $\\left(BC'A'\\right)$ bằng $\\dfrac{2\\sqrt{6}}{3}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1D8/im1H85/dlts_11_DLTS23_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- $AC'=2\\sqrt{3}\\cdot\\sqrt{3}=6$.<br>- Ta có $D'O$, $DB'\\subset \\left(BDD'B'\\right)\\Rightarrow D'O \\cap DB'$.<br>  Mà $D'O \\subset \\left(D'AC\\right)$ nên giao điểm của đường thẳng $DB'$ và mặt phẳng $\\left(D'AC\\right)$ là giao điểm của hai đường thẳng $DB'$ và $D'O$.<br>- Ta có $AC\\perp BD$, $AC\\perp AA' \\Rightarrow AC\\perp \\left(BDD'B'\\right)$.<br>   Mà $AC \\subset \\left(D'AC\\right) \\Rightarrow \\left(D'AC\\right)\\perp \\left(BDD'B'\\right)$.<br>- Ta có $A'C'\\parallel AC \\text{ và } BO'\\parallel D'O \\text{ và } A'C',BO' \\subset \\left(BC'A'\\right) \\text{ và } AC,D'O \\subset \\left(D'AC\\right)\\Rightarrow \\left(D'AC\\right)\\parallel \\left(BC'A'\\right)<br>   \\Rightarrow \\mathrm{d}\\left(\\left(D'AC\\right),\\left(BC'A'\\right)\\right)=\\mathrm{d}\\left(B,\\left(D'AC\\right)\\right)$.<br>   Mà $\\dfrac{\\mathrm{d}\\left(B,\\left(D'AC\\right)\\right)}{\\mathrm{d}\\left(D,\\left(D'AC\\right)\\right)}=\\dfrac{BO}{DO}=1\\Rightarrow \\mathrm{d}\\left(B,\\left(D'AC\\right)\\right)=\\mathrm{d}\\left(D,\\left(D'AC\\right)\\right)$.<br>  Vẽ $DH\\perp D'O$ tại $H$.<br>   Ta có $AC\\perp OD \\text{ và } AC\\perp DD' \\text{ và } OD,DD' \\subset \\left(ODD'\\right)\\Rightarrow AC\\perp \\left(ODD'\\right)\\Rightarrow AC\\perp DH$.<br>   Mà $DH\\perp D'O \\text{ và } D'O,AC \\subset \\left(D'AC\\right)\\Rightarrow DH\\perp \\left(D'AC\\right)$.<br>   Suy ra $\\mathrm{d}\\left(D,\\left(D'AC\\right)\\right)=DH$.<br>   $OD=2\\sqrt{3}\\cdot \\dfrac{\\sqrt{2}}{2}=\\sqrt{6}$.<br>   $D'O=\\sqrt{OD^2+DD'^2}=\\sqrt{\\left(\\sqrt{6}\\right)^2+\\left(2\\sqrt{3}\\right)^2}=3\\sqrt{2}$.<br>   $DH=\\dfrac{OD\\cdot DD'}{D'O}=\\dfrac{\\sqrt{6}\\cdot 2\\sqrt{3}}{3\\sqrt{2}}=2$."
  },
  {
    "id": "1H853DS3",
    "question": "Cho hình chóp $S.ABC$ có hai mặt phẳng $(SAB)$ và $(SAC)$ cùng vuông góc với đáy. Tam giác $ABC$ vuông cân tại $B$, $BC = a$. Góc giữa đường thẳng $SB$ và mặt phẳng $(ABC)$ bằng $60^\\circ$.",
    "subQuestions": [
      {
        "text": "$SA \\perp (ABC)$",
        "answer": true
      },
      {
        "text": "$BC \\perp (SAB)$",
        "answer": true
      },
      {
        "text": "$SA = a$",
        "answer": false
      },
      {
        "text": "$\\mathrm{d}(A, (SBC)) = \\dfrac{a\\sqrt{3}}{3}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1D8/im1H85/dlts_11_DLTS26_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Đúng</strong>.<br>  Ta có  $(SAB) \\perp (ABC) \\text{ và } (SAC) \\perp (ABC) \\text{ và } (SAB) \\cap (SAC) = SA \\Rightarrow SA \\perp (ABC)$.<br>- <strong>Đúng</strong>.<br>  Ta có $BC \\perp AB \\text{ (do } \\triangle ABC \\text{ vuông cân tại } B) \\text{ và } BC \\perp SA, \\text{ (do } SA \\perp (ABC)) \\text{ và } AB, SA \\subset (SAB) \\text{ và } AB \\cap SA = \\{A\\}\\Rightarrow BC \\perp (SAB)$.<br>- <strong>Sai</strong>.<br>  Vì $SA \\perp (ABC)$ nên hình chiếu của $SB$ lên mặt phẳng $(ABC)$ là $AB$.<br>  Do đó, góc giữa đường thẳng $SB$ và mặt phẳng $(ABC)$ là góc $\\widehat{SBA}$. Theo giả thiết, $\\widehat{SBA} = 60^\\circ$.<br>  Xét tam giác $\\triangle SAB$ vuông tại $A$ ta có $\\tan\\widehat{SBA} = \\dfrac{SA}{AB}$.<br>  Vì $\\triangle ABC$ vuông cân tại $B$ có $BC=a$, suy ra $AB = BC = a$.<br>  Ta có $\\tan60^\\circ = \\dfrac{SA}{a} \\Rightarrow SA = a \\cdot \\tan60^\\circ = a\\sqrt{3}$.<br>- <strong>Sai</strong>.<br>  Trong mặt phẳng $(SAB)$, kẻ đường cao $AH \\perp SB$ tại $H$.<br>  Ta có $BC \\perp (SAB)$, suy ra $BC \\perp AH$.<br>  Vì $AH$ vuông góc với cả $SB$ và $BC$, nên $AH \\perp (SBC)$.<br>  Do đó, khoảng cách từ $A$ đến mặt phẳng $(SBC)$ là $\\mathrm{d}(A, (SBC)) = AH=\\dfrac{SA\\cdot AB}{\\sqrt{SA^2+AB^2}}=\\dfrac{a\\sqrt{3}\\cdot a}{\\sqrt{(a\\sqrt{3})^2+a^2}}=\\dfrac{a\\sqrt{3}}{2}.$"
  },
  {
    "id": "1H853DS4",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, $SA\\perp(ABCD)$, $SA=5a$, $AB=3a$, $BC=4a$.",
    "subQuestions": [
      {
        "text": "Thể tích của hình chóp $S.ABCD$ bằng $10a^3$",
        "answer": false
      },
      {
        "text": "Góc giữa đường thẳng $SC$ và mặt phẳng $(ABCD)$ bằng $45^\\circ$",
        "answer": true
      },
      {
        "text": "$(SAC)\\perp(SBD)$",
        "answer": false
      },
      {
        "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(SBD)$ là $\\dfrac{60\\sqrt{769}}{769}a$",
        "answer": true
      }
    ],
    "explain": "\\centerline{  <br><img src=\"data/11/1D8/im1H85/dlts_11_DLTS34_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  }  <br>- Thể tích hình chóp $S.ABCD$ là $V=\\dfrac{1}{3}\\cdot B\\cdot h=\\dfrac{1}{3}\\cdot AB\\cdot BC\\cdot SA=\\dfrac{1}{3}\\cdot 3a\\cdot 4a\\cdot 5a=20a^3.$<br>- Ta có $AC$ là hình chiếu của $SC$ lên mặt phẳng $(ABCD)$.<br>  Suy ra $\\widehat{\\left(SC, (ABCD)\\right)}=\\widehat{SCA}$.<br>  Ta có $AC=\\sqrt{AB^2+BC^2}=5a$.<br>  Khi đó $\\tan\\widehat{SCA}=\\dfrac{SA}{AC}=\\dfrac{5a}{5a}=1\\Rightarrow \\widehat{SCA}=45^\\circ$.<br>- Vì $ABCD$ là hình chữ nhật nên $AC$ và $BD$ không vuông góc.<br>  Do đó $(SAC)$ và $(SBD)$ không vuông góc.<br>- Gọi $K$ là hình chiếu của $A$ lên $BD$.<br>  Khi đó ta có $BD\\perp AK \\text{ và } BD\\perp SA\\Rightarrow BD\\perp (SAK)\\Rightarrow (SAK)\\perp(SBD)$.<br>  Lại có $(SAK)\\cap (SBD)=SK$ nên gọi $H$ là hình chiếu của $A$ lên $SK$ thì $AH\\perp (SBD)$ nên $\\mathrm{d}(A,(SBD))=AH$.<br>  Ta có $\\dfrac{1}{AH^2}=\\dfrac{1}{AS^2}+\\dfrac{1}{AK^2}=\\dfrac{1}{AS^2}+\\dfrac{1}{AB^2}+\\dfrac{1}{AD^2}=\\dfrac{1}{25a^2}+\\dfrac{1}{9a^2}+\\dfrac{1}{16a^2}=\\dfrac{769}{3\\,600a^2}$.<br>  Suy ra $AH=\\dfrac{60a}{\\sqrt{769}}=\\dfrac{60\\sqrt{769}a}{769}$."
  },
  {
    "id": "1H853DS5",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh bằng $a$, $SA$ vuông góc với mặt phẳng $\\left(ABCD\\right)$ và $SA=a\\sqrt{3}$.",
    "subQuestions": [
      {
        "text": "$SA\\perp BD$",
        "answer": true
      },
      {
        "text": "$\\left(SAC\\right)\\perp\\left(SBD\\right)$",
        "answer": true
      },
      {
        "text": "Góc giữa đường thẳng $SB$ và mặt phẳng $\\left(ABCD\\right)$ bằng $30^{\\circ}$",
        "answer": false
      },
      {
        "text": "Khoảng cách giữa hai đường thẳng $AD$ và $SB$ bằng $\\dfrac{a\\sqrt{3}}{2}$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1H8/im1H85/loc8_TT_KSCL_THPT_Yen_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Có $SA$ vuông góc với mặt phẳng $\\left(ABCD\\right)$ và $BC\\subset (ABCD)$ nên $SA\\perp BD$.<br>- Có $SA\\perp BD$; $AC\\perp BD$ nên $BD\\perp\\left(SAC\\right)$. <br>  Mà $BD\\subset\\left(SBD\\right)$ nên $\\left(SAC\\right)\\perp\\left(SBD\\right)$.<br>- $SA\\perp\\left(ABCD\\right)$ nên $AB$ là hình chiếu của $SB$ lên $(ABCD)$. <br>  Suy ra góc giữa đường thẳng $SB$ và mặt phẳng $\\left(ABCD\\right)$ bằng góc $\\widehat{SBA}$. <br>  Ta có $\\tan\\widehat{SBA}=\\dfrac{SA}{AB}=\\sqrt{3}\\Rightarrow \\widehat{SBA}=60^{\\circ}$.<br>- Gọi $K$ là hình chiếu của $A$ lên $SB$.<br>  Vì $BC\\perp AB \\text{ và } BC\\perp SA$ nên $BC\\perp (SAB)$.<br>  Mà $AK\\subset (SAB)$ suy ra $BC\\perp AK$.<br>  Ta có $AK\\perp SB \\text{ và } AK\\perp BC\\Rightarrow AK\\perp\\left(SBC\\right)$.<br>  Mặt khác $AD\\parallel \\left(SBC\\right)$ suy ra $\\mathrm{d}\\left(AD; SB\\right)=\\mathrm{d}\\left(A; \\left(SBC\\right)\\right)=AK$.<br>  Ta có $AK\\cdot SB=SA\\cdot AB\\Rightarrow AK=\\dfrac{SA\\cdot AB}{SB}=\\dfrac{a\\sqrt{3}}{2}$.<br>  <strong>Cách khác:</strong>  Ta có $AD\\perp SA \\text{ và } AD\\perp AB\\Rightarrow AD\\perp (SAB)$.<br>  Mà $AK\\subset (SAB)$ suy ra $AD\\perp AK$ tại $A$.<br>  Mặt khác $AK\\perp SB$ tại $K$.<br>  Suy ra $AK$ là đoạn vuông góc chung của $AD$ và $SB$.<br>  Vậy $\\mathrm{d}\\left(AD; SB\\right)=AK$.<br>  Ta có $AK\\cdot SB=SA\\cdot AB\\Rightarrow AK=\\dfrac{SA\\cdot AB}{SB}=\\dfrac{a\\sqrt{3}}{2}$."
  },
  {
    "id": "1H854DS2",
    "question": "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$, cạnh bên bằng $\\sqrt{2}a$. Gọi $F$ là trung điểm của cạnh $SA$.",
    "subQuestions": [
      {
        "text": "Khoảng cách từ $S$ đến mặt phẳng $(FCD)$ bằng $\\dfrac{a\\sqrt{10}}{5}$",
        "answer": true
      },
      {
        "text": "Góc giữa đường thẳng $SA$ và mặt phẳng đáy bằng $30^\\circ$",
        "answer": false
      },
      {
        "text": "Thể tích của khối chóp $S.FCD$ bằng $\\dfrac{a^3\\sqrt{3}}{24}$",
        "answer": false
      },
      {
        "text": "Khoảng cách giữa $AC$ và $SB$ bằng $\\dfrac{a\\sqrt{6}}{4}$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1H8/im1H85/loc8_TT_THPT_Chuyen_B_010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $O=AC\\cap BD$.<br>  Tam giác $ABC$ vuông tại $B$ có $AC=\\sqrt{AB^2+BC^2}=\\sqrt{a^2+a^2}=a\\sqrt{2}$.<br>  Tam giác $SAO$ vuông tại $O$ có $SO=\\sqrt{SA^2-AO^2}=\\sqrt{\\left(a\\sqrt{2}\\right)^2-\\left(\\dfrac{a\\sqrt{2}}{2}\\right)^2}=\\dfrac{a\\sqrt{6}}{2}$.  <br>- Vì $F$ là trung điểm của $SA$ nên $\\mathrm{d}(S,(FCD))=\\mathrm{d}(A,(FCD))$.\\qquad $(1)$<br>  Gọi $I$ là hình chiếu vuông góc của $F$ trên $(ABCD)$ suy ra $I$ là trung điểm của $AO$.<br>  Vì $AI\\cap (FCD)=C\\Rightarrow \\dfrac{\\mathrm{d}(I,(FCD))}{\\mathrm{d}(A,(FCD))}=\\dfrac{IC}{AC}=\\dfrac{3}{4}<br>  \\Rightarrow \\mathrm{d}(A,(FCD))=\\dfrac{4}{3}\\mathrm{d}(I,(FCD))$.\\qquad $(2)$<br>  Gọi $M$ và $H$ lần lượt là là hình chiếu vuông góc của $I$ trên $CD$ và $FM$.<br>  Khi đó  \\[CD\\perp IM \\text{ và } CD\\perp FI\\Rightarrow CD\\perp (FIM).\\]  Mà $IH\\subset (FIM)\\Rightarrow IH\\perp (FCD)$ do đó $\\mathrm{d}(I,(FCD))=IH$.<br>  Ta có $FI=\\dfrac{1}{2}SO=\\dfrac{1}{2}\\cdot \\dfrac{a\\sqrt{6}}{2}=\\dfrac{a\\sqrt{6}}{4}$.<br>  Mà $IM\\parallel AD\\Rightarrow \\dfrac{IM}{AD}=\\dfrac{CI}{CA}=\\dfrac{3}{4}\\Rightarrow IM=\\dfrac{3}{4}AD=\\dfrac{3}{4}\\cdot a=\\dfrac{3a}{4}$.<br>  Trong tam giác $FIM$ vuông tại $I$, đường cao $IH$ có  \\[\\dfrac{1}{IH^2}=\\dfrac{1}{IM^2}+\\dfrac{1}{FI^2}=\\dfrac{1}{\\left(\\frac{3a}{4}\\right)^2}+\\dfrac{1}{\\left(\\frac{a\\sqrt{6}}{4}\\right)^2}=\\dfrac{16}{9a^2}+\\dfrac{8}{3a^2}=\\dfrac{40}{9a^2}.\\]  Suy ra $IH^2=\\dfrac{9a^2}{40}\\Rightarrow IH=\\dfrac{3a\\sqrt{10}}{20}$.\\qquad $(3)$<br>  Từ $(1)$, $(2)$ và $(3)$, ta có  \\[\\mathrm{d}(S,(FCD))=\\dfrac{4}{3}OH=\\dfrac{4}{3}\\cdot\\dfrac{3a\\sqrt{10}}{20}=\\dfrac{a\\sqrt{10}}{5}.\\]<br>- Ta có $SO\\perp (ABCD)$ nên  $\\left(SA,(ABCD)\\right)=(SA,AO)=\\widehat{SAO}=\\alpha$.<br>  Tam giác $SAO$ vuông tại $O$ có $\\cos\\alpha=\\dfrac{OA}{SA}=\\dfrac{\\frac{a\\sqrt{2}}{2}}{a\\sqrt{2}} =\\dfrac{1}{2}\\Rightarrow \\alpha=60^\\circ$.<br>- Ta có  \\[V_{S.ACD}=\\dfrac{1}{2}V_{S.ABCD}=\\dfrac{1}{2}\\cdot\\dfrac{1}{3}SO\\cdot S_{ABCD}=\\dfrac{1}{6}\\cdot \\dfrac{a\\sqrt{6}}{2}\\cdot a^2=\\dfrac{a^3\\sqrt{6}}{12}.\\]  \\[\\dfrac{V_{S.FCD}}{V_{S.ACD}}=\\dfrac{SF}{SA}=\\dfrac{1}{2}\\Rightarrow V_{S.FCD}=\\dfrac{1}{2}V_{S.ACD}=\\dfrac{1}{2}\\cdot \\dfrac{a^3\\sqrt{6}}{12}=\\dfrac{a^3\\sqrt{6}}{24}.\\]<br>- Gọi $K$ là hình chiếu vuông góc của $O$ trên $SB$.<br> Khi đó  $AC\\perp DB \\text{ và } AC\\perp SO\\Rightarrow AC\\perp (SBD)$.<br>  Mà $OK\\subset (SBD)$ nên $OK\\perp AC$.<br>  Do đó $OK$ là đoạn vuông góc chung của hai đường thẳng chéo nhau $AC$ và $SB$.<br>  Tam giác $SOB$ vuông tại $O$ có đường cao $OK$ nên  \\[\\dfrac{1}{OK^2}=\\dfrac{1}{SO^2}+\\dfrac{1}{OB^2}=\\dfrac{1}{\\left(\\frac{a\\sqrt{6}}{2}\\right)^2}+\\dfrac{1}{\\left(\\frac{a\\sqrt{2}}{2}\\right)^2}=\\dfrac{8}{3a^2}\\Rightarrow OK=\\dfrac{a\\sqrt{6}}{4}.\\]  Vậy $\\mathrm{d}\\left(AC,SB\\right)=OK=\\dfrac{a\\sqrt{6}}{4}$."
  }
];
