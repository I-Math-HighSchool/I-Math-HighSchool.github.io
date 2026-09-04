// =========================================================================
// KHỐI DỮ LIỆU: 1H85 - Trả lời ngắn (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.traLoiNgan1H85 = [
  {
    "id": "1H855TL1",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang vuông tại $A$ và $D$, $SA$ vuông góc với mặt phẳng $(ABCD)$. Gọi $M$ là trung điểm của đoạn thẳng $AB$ và $G$ là trọng tâm tam giác $SCD$. Biết $AB=2$, $AD=CD=1$, góc giữa đường thẳng $SC$ và mặt phẳng $(ABCD)$ bằng $60^\\circ$. Khoảng cách giữa hai đường thẳng chéo nhau $MD$ và $GC$ bằng bao nhiêu? (Kết quả làm tròn đến hàng phần chục).",
    "answer": "0{,}5",
    "explain": "<br><img src=\"data/11/1D8/im1H85/dlts_11_DLTS23_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có $MD\\parallel BC\\Rightarrow \\mathrm{d}(MD,GC)=\\mathrm{d}\\left(MD,(NCB)\\right)$, với $N$ là trung điểm của $SD$.<br>  Gọi $I=AD\\cap BC$, ta có $D$ là trung điểm của $AI$, gọi $K$ là trung điểm của $AD$.<br>  Ta có $NK\\perp (ABCD)$ và $\\dfrac{DI}{KI}=\\dfrac{2}{3}$ nên $\\mathrm{d}\\left(MD,(NCB)\\right)=\\mathrm{d}\\left(D,(NCB)\\right)=\\dfrac{2}{3}\\mathrm{d}\\left(K,(NCB)\\right)$.<br>  Chú ý: $AC\\perp BC$ nên kẻ $KE\\parallel AC$ cắt $BC$ tại $E$.<br>  Suy ra $KE\\perp BC\\Rightarrow BC\\perp (NKE)$ nên $(NKE)\\perp (NBC)$ theo giao tuyến $NE$.<br>  Từ $K$ kẻ $KH\\perp NE$ tại $H$ suy ra $\\mathrm{d}\\left(K,(NCB)\\right)=KH$.<br>  Ta có $AC=\\sqrt{2}$, mà $\\dfrac{KE}{AC}=\\dfrac{IK}{IA}=\\dfrac{3}{4}\\Rightarrow KE=\\dfrac{3\\sqrt{2}}{4}$.<br>  Do $\\left(SC,(ABCD)\\right)=\\widehat{\\left(SC,AC\\right)}=\\widehat{SCA}=60^{\\circ}\\Rightarrow SA=\\sqrt{6}\\Rightarrow NK=\\dfrac{\\sqrt{6}}{2}$.<br>  Xét tam giác $NKE$ vuông tại $K$ có đường cao ứng với cạnh huyền là $KH$ nên \\[\\dfrac{1}{KH^2}=\\dfrac{1}{KN^2}+\\dfrac{1}{KE^2}\\Rightarrow KH=\\dfrac{3\\sqrt{14}}{14}\\Rightarrow \\mathrm{d}(MD,GC)=\\dfrac{2}{3}\\cdot\\dfrac{3\\sqrt{14}}{14}=\\dfrac{\\sqrt{14}}{7}\\approx 0{,}5.\\]"
  },
  {
    "id": "1H853TL2",
    "question": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh bằng $\\sqrt{3}$. Cạnh bên $SA=\\sqrt{3}$ và vuông góc với mặt phẳng đáy $(ABC)$. Khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$ bằng bao nhiêu? (Kết quả làm tròn đến hàng phần trăm).",
    "answer": "1{,}13",
    "explain": "<br><img src=\"data/11/1D8/im1H85/dlts_11_DLTS23_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $I$ là trung điểm của $BC$, ta có $BC\\perp AI \\text{ và } BC\\perp SA\\Rightarrow BC\\perp (SAI)$.<br>  Từ $A$ kẻ $AH\\perp SI\\Rightarrow AH\\perp (SBC)$.<br>  Vậy $\\mathrm{d}(A,(SBC))=AH$. Ta có $\\dfrac{1}{AH^2}=\\dfrac{1}{SA^2}+\\dfrac{1}{AI^2}=\\dfrac{1}{3}+\\dfrac{4}{9}\\Rightarrow AH=\\dfrac{3\\sqrt{7}}{7}$.<br>  Suy ra $\\mathrm{d}(A,(SBC)) = \\dfrac{3\\sqrt{7}}{7} \\approx 1{,}13$."
  },
  {
    "id": "1H853TL3",
    "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh bằng $5$, $SA$ vuông góc với mặt đáy. Khoảng cách giữa hai đường thẳng $SA$ và $BD$ có dạng $\\dfrac{a\\sqrt{b}}{2}$ ($a$, $b\\in \\mathbb{Z}$). Tính $a-b$.<br><img src=\"data/11/1D8/im1H85/dlts_11_DLTS24_006.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "3",
    "explain": "Gọi $O$ là tâm hình vuông $ABCD$.<br>  Ta có $SA\\perp AO$ và $AO\\perp BD$.<br>  Nên $\\mathrm{d}(SA,BD)=AO=\\dfrac{AC}{2}=\\dfrac{AB\\sqrt{2}}{2}=\\dfrac{5\\sqrt{2}}{2}$.<br>  Suy ra $a=5$, $b=2$. Vậy $a-b=3$."
  },
  {
    "id": "1H854TL4",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh bằng $3$, $SA$ vuông góc với mặt phẳng $(ABCD)$ và $SC=3\\sqrt{5}$. Biết khoảng cách từ $A$ đến mặt phẳng $(SBC)$ là $\\dfrac{a \\sqrt{3}}{b}$ (với $\\dfrac{a}{b}$ tối giản). Tính $3 a+2 b$.",
    "answer": "13",
    "explain": "<br><img src=\"data/11/1D8/im1H85/dlts_11_DLTS28_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $H$ là hình chiếu của $A$ lên $SB$ khi đó $AH\\perp SB$.<br>  Ta có $BC\\perp AB \\text{ và } BC\\perp SA$  $\\Rightarrow BC \\perp (SAB).$<br>  Mà $AH \\subset (SAB)$ nên $AH \\perp BC$.<br>  Lại có $AH \\perp SB \\text{ và } AH \\perp BC$  $\\Rightarrow AH \\perp (SBC) \\Rightarrow AH=\\mathrm{\\,d}\\left(A,(SBC) \\right).$<br>  Ta có $AC=3\\sqrt{2}$, $SA=\\sqrt{SC^2 -AC^2}=\\sqrt{\\left(3\\sqrt{5}\\right)^2-\\left(3\\sqrt{2}\\right)^2}=3\\sqrt{3}$.<br>  Vì $AH$ là đường cao trong tam giác vuông $SAB$ nên ta có $\\dfrac{1}{AH^2}=\\dfrac{1}{SA^2}+\\dfrac{1}{AB^2}\\Rightarrow \\dfrac{1}{AH^2}=\\dfrac{1}{\\left(3\\sqrt{3}\\right)^2}+\\dfrac{1}{3^2}\\Rightarrow AH=\\dfrac{3\\sqrt3}{2}.$  Suy ra $a=3$, $b=2$.<br>  Vậy $3a+2b=3\\cdot 3+2\\cdot 2=13$."
  },
  {
    "id": "1H855TL5",
    "question": "Cho tứ diện đều $ABCD$ có cạnh bằng $4\\sqrt{2}$. Tính khoảng cách của giữa đường thẳng chéo nhau $AB$ và $CD$.",
    "answer": "4",
    "explain": "<br><img src=\"data/11/1D8/im1H85/dlts_11_DLTS28_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $M$, $N$ lần lượt là trung điểm của $AB$ và $CD$.<br>  Ta có $MN\\perp AB \\text{ và } MN \\perp CD.$<br>  $\\Rightarrow MN$ là đường vuông góc chung của $AB$ và $CD$.<br>  $\\Rightarrow \\mathrm{\\,d}(AB,CD)=MN$.<br>  Ta có $BN$ là đường cao trong tam giác đều $BCD$ nên $BN=\\dfrac{\\left(4\\sqrt{2}\\right)\\sqrt{3}}{2}=2\\sqrt{6}$.<br>  $M$ là trung điểm $AB$ nên $BM=\\dfrac{1}{2} AB=2\\sqrt{2}$.<br>   $\\Rightarrow MN=\\sqrt{BN^2-BM^2}=4$.<br>"
  },
  {
    "id": "1H853TL6",
    "question": "Cho hình chóp tứ giác đều $S.ABCD$, có đáy là hình vuông cạnh bằng $2$, cạnh bên bằng $2\\sqrt{2}$. Tính khoảng cách giữa hai đường thẳng $AB$ và $SD$ (<em>kết quả làm tròn đến hàng phần chục</em>)?<br><img src=\"data/11/1D8/im1H85/dlts_11_DLTS35_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "1{,}9",
    "explain": "Gọi $O$ là giao điểm của $AC$ và $BD$.<br>  Vì $S.ABCD$ là hình chóp tứ giác đều nên $ABCD$ là hình vuông.<br>  Do đó $O$ là trung điểm của $AC$ và $BD$.<br>  Suy ra $AC = 2OC$ hay $\\dfrac{AC}{OC} = 2$.<br>  Vì $AB\\parallel (SCD)$ nên   $\\mathrm{d}(AB,SD) = \\mathrm{d}\\left(AB,(SCD)\\right) = \\mathrm{d}\\left(A,(SCD)\\right).$  Hơn nữa, ta có  $ \\dfrac{\\mathrm{d}\\left(A,(SCD)\\right)}{\\mathrm{d}\\left(O,(SCD)\\right)} = \\dfrac{AC}{OC} = 2 \\Rightarrow \\mathrm{d}\\left(A,(SCD)\\right) = 2\\mathrm{d}\\left(O,(SCD)\\right). $  Trong $(ABCD)$, dựng $OM\\perp CD$.<br>  Trong $(SOM)$, dựng $OH\\perp SM$.<br>  Suy ra $OH\\perp SM \\text{ và } OH\\perp CD \\Rightarrow OH\\perp (SCD)$ do đó $\\mathrm{d}\\left(O,(SCD)\\right) = OH$.<br>  Ta có  <br>- $OM = \\dfrac{1}{2}AD = \\dfrac{1}{2}\\cdot 2 = 1$.<br>- $OC = \\dfrac{1}{2}AC = \\dfrac{1}{2}\\sqrt{AB^2 + BC^2} = \\dfrac{1}{2}\\sqrt{2^2 + 2^2} = \\sqrt{2}$.<br>- $SO = \\sqrt{SC^2 - OC^2} = \\sqrt{\\left(2\\sqrt{2}\\right)^2 - \\left(\\sqrt{2}\\right)^2} = \\sqrt{6}$.  Xét $\\triangle SOM$ vuông tại $O$ có $OH$ là đường cao nên  $ OH = \\dfrac{OM\\cdot SO}{\\sqrt{OM^2 + SO^2}} = \\dfrac{1\\cdot\\sqrt{6}}{\\sqrt{1^2 + \\left(\\sqrt{6}\\right)^2}} = \\dfrac{\\sqrt{42}}{7}.$  Vậy $\\mathrm{d}\\left(AB,(SCD)\\right) = 2\\mathrm{d}\\left(O,(SCD)\\right) = 2OH = \\dfrac{2\\sqrt{42}}{7} \\approx 1{,}9$."
  },
  {
    "id": "1H854TL7",
    "question": "Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$, $AB=3$, $SA\\perp(ABC)$ và $SA=5$. Tính khoảng cách từ $A$ đến mặt phẳng $(SBC)$ (làm tròn kết quả đến hàng phần trăm).",
    "answer": "2,57",
    "explain": "<br><img src=\"data/11/1D8/im1H85/dlts_11_DLTS36_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Trong mặt phẳng $(SAB)$ kẻ $AH\\perp SB$, $(H\\in SB)$.<br>  Vì $SA\\perp (ABC)\\Rightarrow SA\\perp BC$ và $\\triangle ABC$ vuông tại $B$ nên $BC\\perp AB$.<br>  Ta có $BC\\perp AB \\text{ và } BC\\perp SA\\Rightarrow BC\\perp (SAB)\\Rightarrow BC\\perp AH$.<br>  Lại có $AH\\perp BC \\text{ và } AH\\perp SB\\Rightarrow AH\\perp (SBC)$.<br>  Từ đó suy ra $\\mathrm{d}\\big(A,(SBC)\\big)=AH$.<br>  Xét tam giác $SAB$ vuông tại $A$ có  \\[AH=\\dfrac{SA\\cdot AB}{\\sqrt{SA^2+AB^2}}=\\dfrac{5\\cdot 3}{\\sqrt{5^2+3^2}}=\\dfrac{15\\sqrt{34}}{34}\\approx 2{,}57.\\]  Vậy khoảng cách từ $A$ đến mặt phẳng $(SBC)$ khoảng $2{,}57$."
  }
];
