// =========================================================================
// KHỐI DỮ LIỆU: §1. Phương trình mặt phẳng - Trả lời ngắn
// Nguồn: TaiLieuThamKhao/BANK-25-26/Lop12/B2/B3/B4/B5/ThucTeOxyz/CD2-8/LuyenTapPTMC (gộp, khử trùng lặp) (chuyển từ LaTeX)
// Hình vẽ (bảng biến thiên, đồ thị...) đã được biên dịch sẵn bằng LaTeX/TikZ
// thành ảnh PNG tĩnh (không phụ thuộc TikzJax).
// =========================================================================
window.traLoiNgan2H51 = [
  {
    "id": "2H515TL1",
    "question": "Cho $K(-1;3;2)$, $A(1;2;0)$, $B(-3;4;2)$; vị trí $M(a; b; c)$ trên mặt phẳng $(Oyz)$ thỏa mãn $MA = \\sqrt{2}$, $MK=3$, $\\triangle MAB$ vuông tại $M$. Khoảng cách từ điểm $M$ đến điểm $O$ bằng bao nhiêu?",
    "answer": "1",
    "explain": "Ta có $M(0;b;c)\\in(Oyz)$. <br>  $\\vec{MK}=(1;b-3;c-2)$ <br>  $\\vec{MA}=(-1;b-2;c)$ <br>  $\\vec{MB}=(3;b-4;c-2)$ <br>  $MK=3 \\text{ và } MA=\\sqrt{2} \\text{ và } MA\\perp MB   \\Leftrightarrow 1+(b-3)^2+(c-2)^2=9 \\text{ và } 1+(b-2)^2+c^2=2 \\text{ và } -3+(b-2)(b-4)+c(c-2)=0  \\Leftrightarrow b^2+c^2-6b-4c=-5 \\text{ và } b^2+c^2-4b=-3 \\text{ và } b^2+c^2-6b-2c=-5 $ <br>  Lấy phương trình trên lần lượt trừ hai phương trình dưới, ta được   $-2b-2c=-2 \\text{ và } -2c=0\\Leftrightarrow b=1 \\text{ và } c=0$  <br> Suy ra $M(0;1;0)$."
  },
  {
    "id": "2H514TL2",
    "question": "Trong không gian $Oxyz$, cho mặt phẳng $(P)\\colon x - 2y - z + 1 = 0$ và hai điểm $A(1;-1;2)$, $B(2;-1;1)$. Mặt phẳng chứa đường thẳng $AB$ và vuông góc với $(P)$ có phương trình $ax + by + cz - 3 = 0$. Giá trị của $a+b+c$ bằng bao nhiêu?",
    "answer": "2",
    "explain": "Ta có $\\overrightarrow{AB}=(1;0;-1)$.<br>  Vectơ pháp tuyến của mặt phẳng $(P)$ là $\\overrightarrow{n_P}=(1;-2;-1)$.<br>  Gọi mặt phẳng cần tìm là $(Q)$. Mặt phẳng $(Q)$ có vectơ pháp tuyến là $\\overrightarrow{n_Q}=\\left[\\overrightarrow{AB},\\overrightarrow{n_P}\\right]= (-2;0;-2)$.<br>  Phương trình tổng quát của mặt phẳng $(Q)$ là   $-2(x-1)+0(y+1)-2(z-2)=0 \\Leftrightarrow x+z-3=0. $  Do đó $a=1 \\text{ và } b=0 \\text{ và } c=1.$<br>  Vậy $a+b+c=2$."
  },
  {
    "id": "2H514TL3",
    "question": "Hai học sinh đang chuyền bóng, bạn nữ ném bóng cho bạn nam, quả bóng bay trên không, lệch sang phải và rơi xuống mặt đất cách bạn nam $3 \\, m$ và cách bạn nữ $5 \\, m$ (tham khảo hình bên).   Cho biết quỹ đạo của quả bóng nằm trong mặt phẳng $(P)$ vuông góc với mặt đất. Ta chọn hệ trục tọa độ $Oxyz$ được mô tả trong hình. Khi đó phương trình của mặt phẳng $(P)$ có dạng $ax + y + cz + d = 0$. Tìm $3a + 4c$.<br><img src=\"data/12/2D5/im2H51/dlts_12_DLTS24_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "-4",
    "explain": "Gọi $A$ là vị trí bạn nam đứng. Ta có $OA=\\sqrt{5^2-3^2}=4$.<br>  Từ hình vẽ, ta có vị trí của bạn nữ là $O(0; 0; 0)$ vị trí bóng rơi là điểm $M(3;4;0)$.<br>   Mặt phẳng $(P)$ chứa quỹ đạo của quả bóng đi quả điểm $O$ và $M$ và $(P)\\perp (Oxy)$ nên có một véc-tơ pháp tuyến là   $\\overrightarrow{n}=\\left[ \\overrightarrow{OM},\\overrightarrow{k}\\right]=(4; -3; 0).  $  Do đó, phương trình mặt phẳng $(P)$ có dạng:  $  4x - 3y + d = 0  $   Thay điểm $O(0;0;0)$ vào phương trình  $  4\\cdot 0 - 3\\cdot 0 + d = 0 \\Rightarrow d = 0.  $   Vậy phương trình mặt phẳng là  $  4x - 3y = 0 \\Leftrightarrow -\\dfrac{4}{3}x +y =0.  $   Suy ra $a=-\\dfrac{3}{4}$, $c=0$.<br>   Vậy  $  3a + 4c = 3 \\cdot \\left(-\\dfrac{4}{3}\\right) + 4 \\cdot 0 = -4.  $"
  },
  {
    "id": "2H514TL4",
    "question": "Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x-2y+z-5=0$. Phương trình mặt phẳng $(Q)$ song song với mặt phẳng $(P)$, cách $(P)$ một khoảng bằng $ 3 $ và cắt trục $Ox$ tại điểm có hoành độ dương có dạng $2x+ay+bz+c=0$. Tính $S=a+b+c$.",
    "answer": "-15",
    "explain": "Phương trình mặt phẳng $ (Q) $ có dạng: $ 2x-2y+z+D=0 $.<br>  Vì khoảng cách từ $ (P) $ đến $ (Q) $ bằng $ 3 $ nên ta có $\\dfrac{\\left|D+5\\right|}{\\sqrt{2^2+(-2)^2+1^2}}=3$.<br>  Suy ra $ \\left|D+5\\right|=9 \\Leftrightarrow D=4 \\text{ hoặc } D=-14.$<br>  Do đó ta được $ (Q):2x-2y+z+4=0 $ hoặc $ (Q):2x-2y+z-14=0 $.<br>  Ta thấy $ (Q):2x-2y+z+4=0 $ cắt trục $ Ox $ tại điểm $ (-2;0;0) $ nên loại.<br>  Còn $ (Q):2x-2y+z-14=0 $ cắt trục $ Ox $ tại điểm $ (7;0;0) $ nên nhận.<br>  Vậy ta có $ a=-2$; $b=1$; $c=-14 $, do đó $ S=a+b+c= -15$."
  },
  {
    "id": "2H514TL5",
    "question": "Trong không gian $Oxyz$, mặt phẳng chứa trục $Oz$ và vuông góc với mặt phẳng $(\\alpha): x-y+2z-1=0$ có phương trình dạng $ax+y+bz+c=0$. Tính $S=2a+b-c$.",
    "answer": "2",
    "explain": "Gọi mặt phẳng cần tìm là $ (P) $.<br>  Ta có $ \\overrightarrow{Oz}=(0;0;1) $, $ \\overrightarrow{n}_{(\\alpha)}=(1;-1;2) $.<br>  Vì $ (P) $ chứa trục $ Oz $ và vuông góc với $ (\\alpha) $ nên ta có $ \\overrightarrow{n}_(P) =\\left[\\overrightarrow{Oz},\\overrightarrow{n}_{(\\alpha)}\\right]=(1;1;0)$.<br>  Vì $ O\\in (P) $ nên ta được phương trình của $ (P) $ là   $ 1(x-0)+1(y-0)+0(z-0)=0 \\Leftrightarrow x+y=0.$  Suy ra $ a=1;b=0;c=0 $.<br>  Vậy $S=2a+b-c=2$."
  },
  {
    "id": "2H514TL6",
    "question": "Trong không gian $Oxyz$, cho điểm $B(6;4;0)$, $C(4;5;1)$, $M(2;1;6)$. Mặt phẳng $(P)$ vuông góc với $BC$ và cách $M$ một khoảng bằng $\\sqrt{6}$ có dạng $a x+y+c z+d=0$. Tính $-3a+c$.",
    "answer": "7",
    "explain": "Vì $(P)$ có véc-tơ pháp tuyến là $\\overrightarrow{BC}=(-2;1;1)$ nên $BC$ có phương trình là $-2x+y+z+d=0$.<br>  Ta có   $\\mathrm{d}\\left(M,(P)\\right)=\\sqrt{6}$<br>$\\Leftrightarrow \\dfrac{|-2\\cdot 2+1+6+d|}{\\sqrt{(-2)^2+1^2+1^2}}=\\sqrt{6}$<br>$\\Leftrightarrow |3+d|=6$<br>$\\Leftrightarrow d=3 \\text{ hoặc } d=-9.$  <br>- Với $d=3\\Rightarrow (P)\\colon -2x+y+z+3=0$. Suy ra $a=-2$, $c=1$.<br>  Vậy $-3a+c=-3\\cdot (-2)+1=7$.<br>- Với $d=-9\\Rightarrow (P)\\colon -2x+y+z-9=0$. Suy ra $a=-2$, $c=1$.<br>  Vậy $-3a+c=-3\\cdot (-2)+1=7$.  Vậy $-3a+c=-3\\cdot (-2)+1=7$."
  },
  {
    "id": "2H511TL7",
    "question": "Trong không gian $Oxyz$, một camera an ninh đặt tại vị trí điểm $C(7;1;4)$ quay với góc quan sát ngang là $120^\\circ$ và tạo trên mặt phẳng $(P)\\colon x+2y+2z-3=0$ là một hình tròn.",
    "answer": "8.1",
    "explain": "Khoảng cách từ $C(7;1;4)$ đến $(P)$ là $d(C,(P))=\\dfrac{|1\\cdot 7+2-2\\cdot 1+2\\cdot 4-3|}{\\sqrt{1^2+2^2+2^2}}=\\dfrac{14}{3}$.<br>  Ta có $\\tan 60^\\circ=\\dfrac{r}{d}\\Rightarrow r=d\\cdot \\tan 60^\\circ=\\dfrac{14\\sqrt{3}}{3}$.<br>  Vậy bán kính đường tròn là $r=\\dfrac{14\\sqrt{3}}{3}$"
  },
  {
    "id": "2H511TL8",
    "question": "Chọn hệ trục tọa độ $Oxyz$ sao cho $O$ nằm trên mặt nước, mặt phẳng $(Oxy)$ là mặt nước, trục $Oz$ hướng lên trên (đơn vị độ dài trên các trục tọa độ là mét), một con chim bói cá đang ở vị trí (có hoành độ, tung độ và cao độ là các số thực dương) cách mặt nước $2m$, cách mặt phẳng $(Oxz)$, $(Oyz)$ lần lượt là $3\\mathrm{m}$ và $1\\mathrm{m}$ phóng thẳng xuống vị trí con cá, biết con cá ở vị trí (có hoành độ và tung độ là các số thực dương) cách mặt nước $50\\mathrm{cm}$, cách mặt phẳng $(Oxz)$, $(Oyz)$ lần lượt là $1\\mathrm{m}$ và $1{,}5\\mathrm{m}$. Tọa độ điểm $B$ lúc chim bói cá vừa tiếp xúc với mặt nước là $(a;b;c)$. Tính $T=4a+3b-25c$.<br><img src=\"data/12/2D5/im2H51/dlts_12_DLTS29_006.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "9{,}8",
    "explain": "Dựa vào đề bài ta có tọa độ các điểm $C(1;3;2)$, $A\\left(\\dfrac{3}{2};1;-\\dfrac{1}{2}\\right)$, khi đó $\\overrightarrow{AC}=\\left(-\\dfrac{1}{2};2;\\dfrac{5}{2}\\right)$.<br>  Phương trình đường thẳng $AC\\colon x=1-\\dfrac{1}{2}t \\text{ và } y=3+2t \\text{ và } z=2+\\dfrac{5}{2}t.$<br>  Gọi $B\\left(1-\\dfrac{1}{2}t; 3+2t; 2-\\dfrac{5}{2}t\\right)\\in AC$.<br>  Ta lại có $B\\in (Oxy)$ nên $2+\\dfrac{5}{2}t=0\\Leftrightarrow t=-\\dfrac{4}{5}$.<br>  Suy ra $B\\left(\\dfrac{7}{5};\\dfrac{7}{5};0 \\right)$.<br>  Vậy $T=4a+3b-25c=4\\cdot\\dfrac{7}{5}+3\\cdot\\dfrac{7}{5}-25\\cdot0=\\dfrac{49}{5}=9{,}8$."
  },
  {
    "id": "2H517TL9",
    "question": "Trong không gian $Oxyz$, một cabin cáp treo xuất phát từ điểm $A(10; 3; 0)$ và chuyển động đều theo đường cáp có vectơ chỉ phương là $\\vec{u}=(2;-2; 1)$ với tốc độ là $4{,}5$ m/s. Sau thời gian $180$ giây, Cabin dừng ở điểm $B$. Tìm tung độ điểm $B$.",
    "answer": "-537",
    "explain": "Phương trình tham số của đường thẳng đi qua điểm $A$ với vectơ chỉ phương $\\vec{u}$ là   $x=10+2t \\text{ và } y=3-2t \\text{ và } z=0+1 t.$<br>  Với $t$ là tham số đại diện cho khoảng dịch chuyển trên đường thẳng theo vectơ chỉ phương $\\vec{u}$.<br>  Ta có $|\\vec{u}| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3.$<br>  Quãng đường cabin di chuyển sau thời gian $t = 180$ giây với tốc độ $v = 4{,}5$ m/s là<br>  $s = v \\cdot t = 4{,}5 \\cdot 180 = 810$ m.<br>  Giá trị tham số $t$ ứng với quãng đường $s$:  $s = |\\vec{u}| \\cdot t \\Rightarrow t = \\dfrac{s}{|\\vec{u}|} = \\dfrac{810}{3} = 270$.<br>  Tọa độ điểm $B$ là $x_B = 10 + 2 \\cdot 270 = 550 \\text{ và } y_B = 3 - 2 \\cdot 270 = -537 \\text{ và } z_B = 0 + 1 \\cdot 270 = 270.$<br>  Vậy tung độ của điểm $B$ là $-537$."
  },
  {
    "id": "2H516TL10",
    "question": "Trên một cánh đồng điện mặt trời, người ta đã thiết lập sẵn một hệ toạ độ $Oxyz$. Hai tấm pin năng lượng lần lượt nằm trong hai mặt phẳng $(P)\\colon x+3z+1=0$ và $(Q)\\colon 2x+z+7=0$. Tính góc (đơn vị độ) giữa $(P)$ và $(Q)$.",
    "answer": "45",
    "explain": "Mặt phẳng $(P)$ có véc-tơ pháp tuyến là $\\overrightarrow{n}_P=(1;0;3)$.<br>  Mặt phẳng $(Q)$ có véc-tơ pháp tuyến là $\\overrightarrow{n}_Q=(2;0;1)$.<br>  Gọi $\\alpha$ là góc giữa hai mặt phẳng $(P)$ và $(Q)$ $(0\\le \\alpha\\le 90)$, ta có  \\[\\cos\\alpha = \\left|\\cos\\left(\\overrightarrow{n}_P,\\overrightarrow{n}_Q\\right)\\right| = \\dfrac{\\left|\\overrightarrow{n}_P\\cdot\\overrightarrow{n}_Q\\right|}{\\left|\\overrightarrow{n}_P\\right|\\cdot\\left|\\overrightarrow{n}_Q\\right|}= \\dfrac{\\left|1\\cdot 2+0\\cdot 0+3\\cdot 1=5\\right|}{\\sqrt{1^2+0^2+3^2}\\cdot\\sqrt{2^2+0^2+1^2}}=\\dfrac{1}{\\sqrt{2}}.\\]  Vậy $\\alpha=45^\\circ$."
  },
  {
    "id": "2H511TL11",
    "question": "Trong không gian với hệ toạ độ $Oxyz$, cho mặt phẳng $(P)\\colon x-2y+2z-5=0$. Điểm $M(5,1,c)$ nằm trên mặt phẳng $(P)$. Tìm $c$.",
    "answer": "1",
    "explain": "Vì điểm $M(5,1,c)$ nằm trên mặt phẳng $(P)$ nên tọa độ của $M$ thỏa mãn phương trình của $(P)$.<br>  Ta có $5-2\\cdot1+2c-5=0 \\Leftrightarrow c=1$."
  },
  {
    "id": "2H511TL12",
    "question": "Lớp $12$A có $40$ học sinh. Trong một buổi kiểm tra định kì, số học sinh của lớp $12$A được chia thành hai phòng như bảng bên. Chọn ngẫu nhiên một học sinh của lớp $12$A. Tính xác suất để học sinh được chọn ở phòng $2$, biết rằng học sinh được chọn là nữ (Kết quả làm trong đến hàng phần chục).<br><img src=\"data/12/2D5/im2H51/dlts_12_DLTS35_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "0{,}6",
    "explain": "Gọi:  <br>- $A$ là biến cố \\lq\\lq Người được chọn là ở phòng $2$.<br>- $B$ là biến cố \\lq\\lq Người được chọn là nữ.  Xác suất để học sinh được chọn ở phòng $2$, biết rằng học sinh được chọn là nữ là \\[{P}(A\\mid B)=\\dfrac{{P}(AB)}{{P}(B)}=\\dfrac{{C}^1_{12}}{{C}^1_{21}}=\\dfrac{12}{21}=\\dfrac{4}{7}\\approx 0{,}6.\\]"
  },
  {
    "id": "2H511TL13",
    "question": "Trong không gian $O x y z$, cho hình chóp $S . A B C D$ có đáy là hình thang vuông tại $A$ và $D$. Điểm $A$ trùng với gốc tọa độ $O$, $S\\left(0 ; 0 ; 3 \\sqrt{2}\\right)$, $B(0 ; 4 ; 0)$, $C(3 ; 2 ; 0)$ (như hình vẽ). Gọi $G$ là trọng tâm của tam giác $S B C$. Tính côsin của góc giữa hai vectơ $\\overrightarrow{A G}$ và $\\overrightarrow{B D}$ (kết quả làm tròn đến hàng phần chục).<br><img src=\"data/12/2D1/im2D13/dlts_12_DLTS11_014.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "-0{,}4",
    "explain": "Ta có $S\\left(0 ; 0 ; 3 \\sqrt{2}\\right)$; $B(0 ; 4 ; 0)$, $C(3 ; 2 ; 0)$ và $A(0 ; 0 ; 0)$.<br>  Vì $A B C D$ là hình thang vuông tại $A$ và $D$ nên $D(3 ; 0 ; 0)$.<br>  Vì $G$ là trọng tâm của tam giác $S B C$ nên $G(1 ; 2 ; \\sqrt{2})$. <br>  Khi đó ta có  $\\overrightarrow{A G}=\\left(1 ; 2 ; \\sqrt{2}\\right) \\Rightarrow A G=\\sqrt{7};$  $ \\overrightarrow{B D}=(3 ;-4 ; 0) \\Rightarrow B D=5.$  Do đó $\\cos \\left(\\overrightarrow{A G} ; \\overrightarrow{B D}\\right)=\\dfrac{\\overrightarrow{A G} \\cdot \\overrightarrow{B D}}{A G \\cdot B D}=\\dfrac{-5}{\\sqrt{7} .5} \\approx-0{,}4$."
  },
  {
    "id": "2H517TL14",
    "question": "Hai chiếc máy bay không người lái cùng xuất phát tại một địa điểm. Bay được $15$ phút thì chiếc thứ nhất cách điểm xuất phát về phía Nam $3$ km và về phía Tây $4{,}5$ km, đồng thời cách mặt đất $2$ km; còn chiếc máy bay thứ hai cách điểm xuất phát về phía Đông $5$ km và về phía Bắc $2$ km, đồng thời cách mặt đất $1$ km. Tính khoảng cách giũa hai máy bay đó sau $15$ phút tiếp theo (đơn vị ki-lô-mét), biết rằng hai chiếc máy bay tiếp tục chuyển động mà không thay đổi vận tốc và hướng bay so với ban đầu; thời tiết không có gió. (Kết quả làm tròn đến hàng phần chục)",
    "answer": "21{,}6",
    "explain": "Chọn hệ trục tọa độ $O x y z$, gốc tọa độ $O$ đặt tại điểm xuất phát, mặt phẳng $(O x y)$ trùng với mặt đất, trục $O x$ hướng về phía Nam, trục $O y$ hướng về phía Tây, trục $O z$ hướng thẳng đứng lên trời, đơn vị đo lấy theo ki-lô-met.<br>  Khi đó vị trí $2$ chiếc máy bay sau $15$ phút xuất phát là $A(3 ; 4,5 ; 2) $; $B(-2 ;-5 ; 1)$.<br>  Khoảng cách giữa $2$ máy bay trong $10$ phút đầu là $A B=\\sqrt{5^2+9{,}5^2+1^2}=\\sqrt{116{,}25}$ (km).<br>  Khoảng cách giữa $2$ máy bay sau $20$ phút kể từ lúc xuất phát là $C D=2 A B=2 \\sqrt{116{,}25} \\approx 21{,}6$ (km)."
  },
  {
    "id": "2H514TL15",
    "question": "Cho 2 véc-tơ $\\overrightarrow{a},\\overrightarrow{b}$ biết $|\\overrightarrow{a}|=|\\overrightarrow{b}|=1$ và hai véc-tơ $\\overrightarrow{u}=\\dfrac{2}{5}\\overrightarrow{a}-3\\overrightarrow{b}$ và $\\overrightarrow{v}=\\overrightarrow{a}+\\overrightarrow{b}$ vuông góc với nhau. Khi đó cosin góc giữa 2 véc-tơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ bằng.",
    "answer": "-1",
    "explain": "Ta có<br>  $\\overrightarrow{u}\\cdot\\overrightarrow{v}=0$<br>$\\Leftrightarrow \\left(\\dfrac{2}{5}\\overrightarrow{a}-3\\overrightarrow{b}\\right)\\cdot\\left(\\overrightarrow{a}+\\overrightarrow{b}\\right)=0$<br>$\\Leftrightarrow \\dfrac{2}{5}\\vec{a}^2-\\dfrac{2}{5}\\vec{a}\\cdot\\vec{b}-3\\vec{a}\\cdot\\vec{b}-3\\vec{b}^2=0$<br>$\\Leftrightarrow \\dfrac{2}{5}\\left|\\vec{a}\\right|^2-\\dfrac{2}{5}\\vec{a}\\cdot\\vec{b}-3\\vec{a}\\cdot\\vec{b}-3\\left|\\vec{a}\\right|^2=0$<br>$\\Leftrightarrow \\dfrac{2}{5}-\\dfrac{13}{5}\\vec{a}\\cdot\\vec{b}-3=0$<br>$\\Leftrightarrow \\vec{a}\\cdot\\vec{b}=-1.$  Mà $\\cos(\\vec{a};\\vec{b})=\\dfrac{\\vec{a}\\cdot\\vec{b}}{\\left|\\vec{a}\\right|\\cdot\\left|\\vec{b}\\right|} =-1$  nên cosin góc giữa 2 véc-tơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$bằng $-1$. %góc giữa 2 véc-tơ $(\\vec{a};\\vec{b})= 180^{\\circ} $."
  },
  {
    "id": "2H511TL16",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho hình thang $ABCD$ có hai đáy $AB$, $CD$; tọa độ ba đỉnh $A(1;2;1)$, $B(2;0;-1)$, $C(6;1;0)$. Biết hình thang có diện tích bằng $6\\sqrt{2}$. Giả sử đỉnh $D(a;b;c)$, Tính $P=3a+b-c$<br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS19_017.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "20",
    "explain": "Có $\\overrightarrow{AB}=(1;-2;-2)\\Rightarrow AB=3$<br>  $\\overrightarrow{BC}=(4;1;1)\\Rightarrow BC=3\\sqrt{2}$<br>   Ta có $\\overrightarrow{AB}\\cdot\\overrightarrow{BC}=0$ Nên $ABCD$ là hình thang vuông tại $B, C$ nên chiều cao của hình thang là $BC=3\\sqrt{2}$.  Do diện tích hình thang bằng $6\\sqrt{2}$ nên  $\\dfrac{DC+AB}{2}\\cdot{BC}=6\\sqrt{2}\\Rightarrow DC=1$.<br>  Suy ra $\\overrightarrow{DC}=\\dfrac{1}{3}\\overrightarrow{AB}\\Rightarrow6-a=\\dfrac{1}{3} \\text{ và } 1-b=\\dfrac{-2}{3} \\text{ và } -c=\\dfrac{-2}{3}\\Leftrightarrow a=\\dfrac{17}{3} \\text{ và } b=\\dfrac{5}{3} \\text{ và } c=\\dfrac{2}{3}$<br>  Vậy $P=3a+b-c= 3\\cdot {\\dfrac{17}{3}}+\\dfrac{5}{3}-\\dfrac{2}{3}= 20$."
  },
  {
    "id": "2H515TL17",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho hình chóp $S.ABCD$, đáy $ABCD$ là hình chữ nhật. Biết $A(0; 0; 0)$, $AD = 2$; $AB = 4$; $SA = 4$. Gọi $M$ là trung điểm của $SB$. Tính khoảng cách từ $B$ đến mặt phẳng $(CDM)$ (Kết quả làm tròn đến hàng phần trăm).",
    "answer": "1{,}41",
    "explain": "Ta có $A(0; 0; 0)$.<br>  Do $AD=2$, $SA=4$ nên $D(2;0;0)$ và $S(0,0,4)$.<br>  Tứ giác $ABCD$ là hình chữ nhật nên <br>  $x_A + x_C = x_B + x_D \\text{ và } y_A + y_C = y_B + y_D \\text{ và } z_A + z_C = z_B + z_D \\Rightarrow x_C = 2 \\text{ và } y_C = 4 \\text{ và } z_C = 0 \\Rightarrow C(2; 4; 0).$  Gọi $M$ là trung điểm của $SB \\Rightarrow M(0; 2; 2)$.<br>  Ta có $ \\overrightarrow{CD} = (0; -4; 0), \\overrightarrow{CM} = (-2; -2; 2) \\Rightarrow \\left[\\overrightarrow{CD}, \\overrightarrow{CM}\\right] = (-8; 0; -8).$<br>  Mặt phẳng $(CDM)$ có một vec-tơ pháp tuyến $\\overrightarrow{n} = (1; 0; 1)$. <br>  Suy ra $(CDM)$ có phương trình: $x + z - 2 = 0$. <br>  Vậy $ d(B, (CDM)) = \\dfrac{|0 + 0 - 2|}{\\sqrt{1^2 + 0^2 + 1^2}} = \\sqrt{2}$."
  },
  {
    "id": "2H511TL18",
    "question": "Cho tứ diện đều $ABCD$. Lấy $M, N$ lần lượt là trung điểm các cạnh $AC$ và $CD$. Tính góc giữa hai vectơ $\\overrightarrow{BM}$, $\\overrightarrow{AN}$ (đơn vị radian, kết quả làm tròn đến hàng phần trăm).",
    "answer": "1{,}7",
    "explain": "<br><img src=\"data/12/2D5/im2H51/dlts_12_DLTS21_012.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Đặt $AB = 1$ (đơn vị dài).<br>  $ABCD$ là Tứ diện đều $ABCD $ có $M$ là trung điểm $AC$, $N$ là trung điểm $CD$.<br>   Suy ra $BM=AN=\\dfrac{\\sqrt{3}}{2}$.<br>  Ta có $\\cos\\widehat{BAN}=\\dfrac{{AB}^2+{AN}^2-{BN}^2}{2\\cdot AB \\cdot AN}=\\dfrac{\\sqrt{3}}{3}$.<br>  $\\widehat{CAN}=\\dfrac{1}{2}\\cdot \\widehat{CAD}=30^{\\circ}$.<br>  $\\vec{BM} \\cdot \\vec{AN}=(\\vec{AM}-\\vec{AB})\\cdot \\vec{AN}=\\vec{AM}\\cdot \\vec{AN}-\\vec{AB}\\cdot \\vec{AN}=AM\\cdot AN\\cdot \\cos\\widehat{CAN}-AB\\cdot AN\\cdot \\cos\\widehat{BAN}=\\dfrac{9-8\\sqrt{3}}{24}$.<br>  Gọi ${\\theta}$ là góc giữa hai vectơ ${\\vec{BM}}$ và ${\\vec{AN}}$.<br>  $\\cos \\theta = \\dfrac{\\vec{BM} \\cdot \\vec{AN}}{|\\vec{BM}| |\\vec{AN}|} = \\dfrac{-1}{8}$.<br>  ${\\theta \\approx 1{,}7}$.<br>  Vậy $\\left(\\overrightarrow{BM};\\overrightarrow{AN} \\right)\\approx 1{,}7$."
  }
];
