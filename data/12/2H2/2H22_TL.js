// =========================================================================
// KHỐI DỮ LIỆU: 2H22 - Trả lời ngắn
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan2H22 = [
  {
    "id": "2H226TL1",
    "question": "Trong không gian với một hệ trục tọa độ cho trước (đơn vị đo lấy theo kilômét), ra đa phát hiện một chiếc máy bay di chuyển với vận tốc và hướng không đổi từ điểm $A(800;500;7)$ đến điểm $B(940;550;9)$ trong $10$ phút. Nếu máy ba tiếp tục giữ nguyên vận tốc và hướng bay thì tọa độ của máy bay sau $5$ phút tiếp theo là $C(x;y;z)$. Tính giá trị của biểu thức $x+y+z$.",
    "answer": "1595",
    "explain": "Ta có $\\vec{AB}=2\\vec{BC}\\Rightarrow 140=2(x-940) \\text{ và } 50=2(y-550) \\text{ và } 2=2(z-9)\\Rightarrow x=1\\,010 \\text{ và } y=575 \\text{ và } z=10.$<br>  Suy ra $x+y+z=1\\,595$."
  },
  {
    "id": "2H222TL2",
    "question": "Trong không gian $Oxyz$ cho hình hộp $ABCD.A'B'C'D'$ với $A\\equiv O$, $B\\in Ox$, $D\\in Oy$, $A'\\in Oz$. Biết tọa độ các điểm $B(25;0;0)$, $D(0;35;0)$, $A'(0;0;16)$ và tọa độ điểm $C'(a;b;c)$. Tính tổng $a+b+c$.",
    "answer": "66",
    "explain": "Giả sử $C(x;y;z)$. Ta có $\\overrightarrow{AD}=(0;35;0)$, $\\overrightarrow{BC}=(x-25;y;z)$.<br>  Vì $ABCD$ là hình bình hành nên  $\\overrightarrow{AD}=\\overrightarrow{BC}\\Leftrightarrow x-25=0 \\text{ và } y=35 \\text{ và } z=0\\Leftrightarrow x=25 \\text{ và } y=35 \\text{ và } z=0\\Rightarrow C(25;35;0)$.<br>  Ta có $\\overrightarrow{AA'}=(0;0;16)$, $\\overrightarrow{CC'}=(a-25;b-35;c)$.<br>  Vì $ACC'A'$ là hình bình hành nên  $\\overrightarrow{CC'}=\\overrightarrow{AA'}\\Leftrightarrow a-25=0 \\text{ và } b-25=0 \\text{ và } c=16\\Leftrightarrow a=25 \\text{ và } b=25 \\text{ và } c=16.$<br>  Vậy $a+b+c=25+25+16=66$."
  },
  {
    "id": "2H224TL3",
    "question": "Cho hai vectơ $\\vec{u}=(2;1;-2)$ và $\\vec{v}=(3;-4;0)$. Tính tích vô hướng của hai vectơ $\\vec{u}$, $\\vec{v}$.",
    "answer": "2",
    "explain": "Ta có $\\overrightarrow{u}\\cdot \\overrightarrow{v}=2\\cdot3+1\\cdot (-4)+(-2)\\cdot 0=6-4+0=2$."
  },
  {
    "id": "2H223TL2",
    "question": "Trong không gian với hệ trục tọa độ $Oxyz$, cho $3$ điểm $A(1;-2;5)$, $B(2;1;3)$. Điểm $M \\in Ox$ và cách đều hai điểm $A$ và $B$. Tìm hoành độ điểm $M$?",
    "answer": "-8",
    "explain": "Vì $M \\in Ox$ nên tọa độ điểm $M$ có dạng $M(x;0;0)$.<br>  Ta có $MA = MB \\Leftrightarrow MA^2 = MB^2$.<br>  Do đó  $(1-x)^2+(-2-0)^2+(5-0)^2 = (2-x)^2+(1-0)^2+(3-0)^2$<br>$\\Leftrightarrow (1-x)^2+4+25 = (2-x)^2+1+9$<br>$\\Leftrightarrow 1-2x+x^2+29 = 4-4x+x^2+10$<br>$\\Leftrightarrow -2x+30 = -4x+14$<br>$\\Leftrightarrow 2x = -16$<br>$\\Leftrightarrow x = -8.$  Vậy hoành độ điểm $M$ là $-8$."
  },
  {
    "id": "2H223TL3",
    "question": "Hệ thống định vị toàn cầu GPS là một hệ thống cho phép xác định vị trí của một vật thể trong không gian. Trong cùng một thời điểm, vị trí của một điểm $M$ trong không gian sẽ được xác định bởi bốn vệ tinh cho trước nhờ các bộ thu phát tín hiệu đặt trên các vệ tinh. Giả sử trong không gian với hệ tọa độ $Oxyz$, có ba vệ tinh lần lượt đặt tại các điểm $A(4;6;6)$, $B(4;6;2)$, $C(6;2;14)$; vị trí $M(a;b;c) \\in (Oxy)$ sao cho $P = MA^2+2MB^2 +3MC^2$ nhỏ nhất. Tính giá trị nhỏ nhất của $P$?",
    "answer": "662",
    "explain": "Vì $M(a;b;c) \\in (Oxy)$ nên $c = 0$. Suy ra $M(a;b;0)$.<br>  Ta có $MA^2 = (a-4)^2+(b-6)^2+(0-6)^2 = a^2-8a+16+b^2-12b+36+36 = a^2+b^2-8a-12b+88$.<br>  $MB^2 = (a-4)^2+(b-6)^2+(0-2)^2 = a^2-8a+16+b^2-12b+36+4 = a^2+b^2-8a-12b+56$.<br>  $MC^2 = (a-6)^2+(b-2)^2+(0-14)^2 = a^2-12a+36+b^2-4b+4+196 = a^2+b^2-12a-4b+236$.<br>  Khi đó   $P = MA^2+2MB^2+3MC^2$<br>$= (a^2+b^2-8a-12b+88)+2(a^2+b^2-8a-12b+56)+3(a^2+b^2-12a-4b+236)$<br>$= 6a^2+6b^2-60a-48b+908 = 6(a^2-10a+25)+6(b^2-8b+16)+908-150-96$<br>$= 6(a-5)^2+6(b-4)^2+662.$  Vì $6(a-5)^2 \\ge 0$, $6(b-4)^2 \\ge 0$ nên $P \\ge 662$.<br>  Dấu “ $=$”\\, xảy ra khi $a = 5$ và $b = 4$.<br>  Vậy giá trị nhỏ nhất của $P$ là $662$."
  },
  {
    "id": "2H224TL4",
    "question": "Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $M(1;2;-3)$ lên mặt phẳng $(Oyz)$ có tọa độ là $N(a;b;c)$. Khi đó $S=2a+b+c$ bằng bao nhiêu?",
    "answer": "-1",
    "explain": "Hình chiếu vuông góc của điểm $M(1;2;-3)$ lên mặt phẳng $(Oyz)$ có tọa độ là $N(0;2;-3)$.<br>  Vậy $S=2a+b+c=2\\cdot 0+2-3=-1$."
  },
  {
    "id": "2H224TL5",
    "question": "Một người đứng ở mặt đất điều khiển hai flycam để phục vụ trong một chương trình của đài truyền hình. Flycam I ở vị trí $A$ cách vị trí điều khiển $150$ m về phía Nam và $200$ m về phía Đông, đồng thời cách mặt đất $50$ m. Flycam II ở vị trí $B$ cách vị trí điều khiển $180$ m về phía Bắc  và $240$ m về phía Tây, đồng thời cách mặt đất $60$ m. Chọn hệ trục tọa độ $Oxyz$ với gốc $O$ là vị trí người điều kiển, mặt phẳng $(Oxy)$ trùng với mặt đất, trục $Ox$ có hướng trùng với hướng nam, trục $Oy$ trùng với hướng đông, trục $Oz$ vuông góc với mặt đất hướng lên bầu trời, đơn vị trên mỗi trục tính theo mét. Khoảng cách giữa hai flycam đó bằng bao nhiêu mét ( làm tròn đến hàng đơn vị)?",
    "answer": "550",
    "explain": "Theo giả thiết, điểm $A(150;200;50)$ biểu diễn toạ độ của Flycam I và điểm $B(-180;-240;60)$ biểu diễn toạ độ của Flycam II.<br>  Suy ra khoảng cách giữa hai Flycam là   $BA=\\sqrt{(150+180)^2+(200+240)^2+(50-60)^2}\\approx 550~\\text{(m)}.$"
  },
  {
    "id": "2H224TL6",
    "question": "Ở một sân bay, vị trí của máy bay được xác định bởi điểm $P$ trong không gian $Oxyz$ (như hình vẽ).  Gọi $H$ là hình chiếu vuông góc của $P(a;b;c)$ xuống mặt phẳng $(Oxy)$. Cho biết $OP=41$, $\\left(\\overrightarrow{i},\\overrightarrow{OH}\\right)=52^{\\circ}$, $\\left(\\overrightarrow{OH},\\overrightarrow{OP}\\right)=46^{\\circ}$. Tính giá trị của biểu thức $S=a+b+c$ (kết quả làm tròn đến hàng phần mười).<br><img src=\"data/12/2D2/im2H2/2H22_tikz_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "64{,}7",
    "explain": "Ta có $OC=PH=OP \\cdot \\sin \\left(\\overrightarrow{OH}, \\overrightarrow{OP}\\right)=41 \\cdot \\sin 46^{\\circ} \\approx 29{,}49$.<br>  $OH=OP \\cdot \\cos \\left(\\overrightarrow{OH}, \\overrightarrow{OP}\\right)=41 \\cdot \\cos 46^{\\circ}\\approx 28{,}48$. <br>  $OA=OH \\cdot \\cos \\left(\\overrightarrow{i}, \\overrightarrow{OH}\\right)=28{,}48 \\cdot \\cos 52^{\\circ}\\approx 17{,}53$.<br>  $OB=OH \\cdot \\cos \\left(90^{\\circ}-\\left(\\overrightarrow{i}, \\overrightarrow{OH}\\right)\\right)=22{,}48 \\cdot \\cos \\left(90^{\\circ}-52^{\\circ}\\right)=22{,}48 \\cdot \\cos 38^{\\circ} \\approx 17{,}71$.<br>  Suy ra $M(17{,}53;17{,}71;29{,}49)$ $\\Rightarrow S=a+b+c=17{,}53+17{,}71+29{,}49=64{,}73 \\approx 64{,}7$."
  },
  {
    "id": "2H223TL7",
    "question": "Trong không gian $Oxyz$, một chiếc máy quay phim được đặt trên một giá đỡ ba chân với điểm đặt $S(0;0;6)$ và các điểm tiếp xúc với mặt đất của ba chân lần lượt là $A(0;1;0)$, $B\\left(-\\dfrac{\\sqrt{3}}{2};-\\dfrac{1}{2};0\\right)$, $C\\left(\\dfrac{\\sqrt{3}}{2};-\\dfrac{1}{2};0\\right)$. Biết rằng trọng lượng của chiếc máy là $360$\\,N. Gọi $\\overrightarrow{F_1}$, $\\overrightarrow{F_2}$, $\\overrightarrow{F_3}$ là các lực tác dụng lên giá đỡ (hình vẽ minh họa). Tính $\\dfrac{1}{10}\\cdot \\left(\\overrightarrow{F_1}\\cdot \\overrightarrow{F_2}\\right)$.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_006.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "1420",
    "explain": "Ta có $\\overrightarrow{SA}=(0;1;-6)$, $\\overrightarrow{SB}=\\left(-\\dfrac{\\sqrt{3}}{2};-\\dfrac{1}{2};-6\\right)$, $\\overrightarrow{SC}=\\left(\\dfrac{\\sqrt{3}}{2};-\\dfrac{1}{2};-6\\right)$, $\\overrightarrow{AB}=\\left(-\\dfrac{\\sqrt{3}}{2};- \\dfrac{3}{2};0\\right)$, $\\overrightarrow{BC}=\\left(\\sqrt{3};0;0\\right)$, $\\overrightarrow{AC}=\\left(\\dfrac{\\sqrt{3}}{2};-\\dfrac{3}{2};0\\right)$.<br>  Suy ra $AB=BC=AC$.<br>  Ta lại có $SA=SB=SC=\\sqrt{37}$ nên hình chiếu của $S$ trên $(ABC)$ là tâm đường tròn ngoại tiếp $\\triangle ABC$ mà $\\triangle ABC$ đều nên $SO \\perp (ABC)$.<br>  Giả sử $\\overrightarrow{F}_1=k\\overrightarrow{SA}$, $\\overrightarrow{F}_2=k\\overrightarrow{SB}$, $\\overrightarrow{F}_3=k\\overrightarrow{SC}$ với $k&gt;0$.<br>  Suy ra $\\overrightarrow{F}_1+\\overrightarrow{F}_2+\\overrightarrow{F}_3=k\\left(\\overrightarrow{SA}+\\overrightarrow{SB}+\\overrightarrow{SC}\\right)=(0;0;-18k)$.<br>  Theo đề bài ta lại có $\\left|\\overrightarrow{F}_1+\\overrightarrow{F}_2+\\overrightarrow{F}_3\\right|=360 \\Rightarrow 18k=360 \\Rightarrow k=20$.<br>  Suy ra $\\overrightarrow{F_1}= 20\\cdot \\overrightarrow{SA}=\\left(0;20;-120\\right)$; $\\overrightarrow{F_2}= 20\\cdot \\overrightarrow{SB}=\\left(-10\\sqrt{3};-10;-120\\right)$.<br>  Vậy $\\dfrac{1}{10}\\cdot \\left(\\overrightarrow{F_1}\\cdot\\overrightarrow{F_2}\\right)=1420$."
  },
  {
    "id": "2H226TL10",
    "question": "Tại một vị trí cụ thể ở núi Bà Đen người ta đặt cố định một hệ trục tọa độ $Oxyz$, mỗi đơn vị trên mỗi trục có độ dài bằng $1$ mét. Một người đứng cố định tại vị trí $B(2;0;-1)$, quan sát một chiếc cabin cáp treo và thấy rằng cabin này xuất phát từ điểm $A(-1;4;3)$, chuyển động thẳng đều theo hướng của vectơ $\\overrightarrow{u}(1;2;-2)$ với vận tốc $6$ mét/giây. Hỏi sau $5$ giây kể từ lúc xuất phát, khoảng cách giữa cabin và người quan sát bằng bao nhiêu mét? (làm tròn kết quả đến hàng phần chục).",
    "answer": "29,7",
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $C(x;y;z)$ là vị trí của cabin.<br> Khi đó $\\overrightarrow{AC}(x+1;y-4;z-3)$ và $AC=v\\cdot t=6\\cdot5=30 (m)$.<br>  Ta có $\\overrightarrow{AC}$ và $\\overrightarrow{u}$ cùng phương, cùng hướng nên<br>  $\\dfrac{x+1}{1}=\\dfrac{y-4}{2}=\\dfrac{z-3}{-2} \\Rightarrow y-4=2(x+1) \\text{ và } z-3=-2(x+1).$  Lại có $AC=\\sqrt{(x+1)^2+(y-4)^2+(z-3)^2}=\\sqrt{(x+1)^2+4(x+1)^2+4(x+1)^2}$.<br>  Ta có phương trình sau $\\sqrt{(x+1)^2+4(x+1)^2+4(x+1)^2}=30$.<br>  Giải phương trình ta được $x=9$ thỏa mãn đề bài.<br>  Suy ra $C(9;24;-17)$.<br> Vậy $BC=\\sqrt{(9-2)^2+(24-0)^2+(-17+1)^2}=\\sqrt{881}\\approx 29{,}7$.<br>  Vậy sau $5$ giây kể từ lúc xuất phát, khoảng cách giữa cabin và người quan sát là $29{,}7m$."
  },
  {
    "id": "2H224TL11",
    "question": "Để chuẩn bị cho ngày hội thao, người ta dựng bốn chiếc cột tại bốn góc của một sân bóng hình chữ nhật với kích thước là $15\\ \\mathrm{m} \\times 25\\ \\mathrm{m}$. Bốn chiếc cột vuông góc với mặt sân và có chiều cao lần lượt là $3$ mét, $4$ mét, $6$ mét và $c$ mét. Một tấm bạt lớn được căng phẳng với bốn góc được cố định vào đầu bốn cột. Xét hệ trục tọa độ $Oxyz$ như hình vẽ bên (đơn vị trên các trục là mét) thì điểm $D'$ có tọa độ là $(a; b; c)$. Tính $a-2 b+c$.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "-45",
    "explain": "Theo hệ trục tọa độ đã chọn, ta có $A'(0,0,3)$; $B'(15,0,4)$; $C'(15,25,6)$.<br>  Vì $A'B'C'D'$ là hình bình hành nên  \\[x_{D'}=x_{A'}+x_{C'}-x_{B'}=0+15-15=0 \\text{ và } y_{D'}=y_{A'}+y_{C'}-y_{B'}=0+25-0=25 \\text{ và } z_{D'}=z_{A'}+z_{C'}-z_{B'}=3+6-4=5. \\]  Suy ra $a=0$, $b=25$ và $c=5$.<br>  Vậy $a-2b+c=0-2\\cdot 25+5=45$."
  },
  {
    "id": "2H223TL12",
    "question": "Một phòng khách có thiết kế dạng hình hộp chữ nhật với chiều dài là $6$ m, chiều rộng là $4$ m và chiều cao là $4$ m. Một quạt trần được treo tại chính giữa trần nhà của phòng khách. Xét hệ trục tọa độ $Oxyz$ có gốc $O$ trùng với một góc phòng và mặt phẳng $(Oxy)$ trùng với mặt sàn, đơn vị đo được lấy theo mét (Hình vẽ).  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tính khoảng cách từ điểm treo quạt trần đến gốc $O$ theo đơn vị mét (kết quả làm tròn đến hàng phần mười).",
    "answer": "5{,}4",
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $B'$ là vị trí treo quạt trần. Ta có tọa độ $B'$ là $B'(2;3;4)$.<br>  Do đó khoảng cách từ $O$ đến vị trí treo quạt trần là $OB'=\\sqrt{2^2+3^2+4^2}\\approx 5{,}4$ (m)."
  },
  {
    "id": "2H223TL13",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, một máy bay đang bay ở tại vị trí $A(400; 200; 10)$. Theo hành trình dự định, máy bay sẽ phải bay qua vị trí $B(700; 200; 10)$. Tuy nhiên do thời tiết xấu, máy bay phải chuyển hướng bay đến vị trí $C(800; 400; 8)$. Trong quãng thời gian tránh vùng thời tiết xấu, máy bay đã phải bay chệch hướng dự định một góc $a^{\\circ}$. Tìm $a$. (kết quả làm tròn đến hàng phần mười).",
    "answer": "26{,}6",
    "explain": "Ta có $\\overrightarrow{AB}=(300;0;0)$, $\\overrightarrow{AC}=(400;200;-2)$.<br>  \\[\\cos a=\\cos \\left(\\overrightarrow{AB},\\overrightarrow{AC}\\right)=\\dfrac{300 \\cdot 400+0\\cdot200+0\\cdot(-2)}{\\sqrt{300^2+0^2+0^2}\\cdot \\sqrt{400^2+200^2+(-2)^2}}=\\dfrac{400}{\\sqrt{200\\,004}}.\\]  Suy ra góc lệch giữa phương thực tế và dự định là $\\widehat{a}\\approx26{,}6^\\circ$."
  },
  {
    "id": "2H223TL14",
    "question": "Trong không gian $Oxyz$ (đơn vị đo lấy theo km), radar phát hiện một chiếc máy bay di chuyển với tốc độ và hướng không đổi từ điểm $A(800; 500; 7)$ đến điểm $B(940; 550; 8)$ trong $10$ phút. Nếu máy bay tiếp tục giữ nguyên tốc độ và hướng bay thì tọa độ của máy bay sau 10 phút tiếp theo là $D(x; y; z)$. Khi đó, $x-y+z$ bằng bao nhiêu?",
    "answer": "489",
    "explain": "Ta có $\\overrightarrow{AB}=(140; 50; 1)$ và $\\overrightarrow{AD}=(x-800; y-500; z-7)$.<br>  Do vận tốc của vật trong suốt quá trình không thay đổi nên quãng đường đi được tỉ lệ thuận với thời gian đi.<br>  Do quãng đường $AB$ đi trong $10$ phút, còn quãng đường $AD$ đi trong $20$ phút nên ta có $AD=2AB$.<br>  Vì máy bay giữ nguyên hướng bay nên   $\\overrightarrow{AD}=2 \\overrightarrow{AB} \\Rightarrow x - 800 = 280 \\text{ và } y - 500 = 100 \\text{ và } z - 7 = 2\\Rightarrow x=1080 \\text{ và } y=600 \\text{ và } z=9\\Rightarrow x-y+z=489.$"
  },
  {
    "id": "2H223TL15",
    "question": "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB=10$, $AD=16$, $AA'=8$ (<em>hình minh họa bên dưới</em>). Chọn hệ trục tọa độ $Oxyz$ có gốc $O$ trùng với $A$, các vectơ $\\vec{AB}$, $\\vec{AD}$, $\\vec{AA'}$ lần lượt cùng hướng với $\\vec{i}$, $\\vec{j}$, $\\vec{k}$. Gọi $G(x;y;z)$ là trọng tâm của tam giác $A'BD$. Tính $T=x+2y+3z$.  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_014.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "22",
    "explain": "Vì $B(10;0;0)$, $D(0;16;0)$ và $A'(0;0;8)$ nên trọng tâm của tam giác $A'BD$ là $G\\left( \\dfrac{10}{3};\\dfrac{16}{3};\\dfrac{8}{3}\\right)$. <br>Do đó $T=x+2y+3z=\\dfrac{10}{3}+2\\cdot\\dfrac{16}{3}+3\\cdot\\dfrac{8}{3}=22$."
  },
  {
    "id": "2H223TL16",
    "question": "Trong không gian $Oxyz$, cho tam giác $ABC$ có tọa độ $A(507;525;502)$, $B(500;501;502)$,$C(520;516;502)$. Tính độ dài $HK$ với $H$ là chân đường cao hạ từ đỉnh $A$ xuống cạnh $BC,K$ là chân đường phân giác của góc $B,(K\\in AC)$, (<em>không làm tròn kết quả các phép tính trung gian, chỉ làm tròn kết quả cuối cùng đến hàng phần mười</em>).  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_015.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "7{,}9",
    "explain": "Gọi $H\\left( x_H;y_H;z_H\\right),K\\left( x_K;y_k;z_k\\right)$.<br> Vì $H$ là chân đường cao hạ từ đỉnh $A$ xuống $BC$ nên  tồn tại $k\\in\\mathbb{R}$ sao cho $\\vec{BH}=k\\vec{BC}$, suy ra $H\\left( 500+20k;501+15k;502\\right)$. <br> Mặt khác, ta cũng có $\\vec{AH}\\cdot\\vec{BC}=0\\Leftrightarrow 4(20k-2)+3(15k-24)=0\\Leftrightarrow k=\\dfrac{4}{5}$. Do đó $H(516;513;502)$.<br>  Vì $K$ là chân đường phân giác của góc $B$ nên ta có $\\vec{KA}=-\\dfrac{BA}{BC}\\cdot\\vec{KC}$, suy ra $K$ là trung điểm $AC$. Do đó $K\\left( \\dfrac{1027}{2};\\dfrac{1041}{2};502\\right) $. Vậy $HK=\\dfrac{5\\sqrt{10}}{2}\\approx 7{,}9$."
  },
  {
    "id": "2H223TL17",
    "question": "Trong không gian $Oxyz$, cho hình hộp $ABCD.A'B'C'D'$. Biết $A(2; 4; -1)$, $B(4; 1; 0)$, $C(-1; 4; 2)$ và $D'(6; 5; -3)$. Toạ độ điểm $B'(x; y; z)$. Tính $T = x + 2y - z$.",
    "answer": "15",
    "explain": "Ta có $\\vec{BC} = (-5; 3; 2)$.<br>  Gọi $D(x_D; y_D; z_D)$. Ta có  $\\vec{AD} = (x_D - 2; y_D - 4; z_D + 1)$.<br>  Do $\\vec{AD} = \\vec{BC}$ nên $x_D - 2 = -5 \\text{ và } y_D - 4 = 3 \\text{ và } z_D + 1 = 2\\Leftrightarrow x_D = -3 \\text{ và } y_D = 7 \\text{ và } z_D = 1$.  Vậy, tọa độ điểm $D(-3; 7; 1)$.<br>   Ta có $\\vec{DD'}= (9; -2; -4)$.  Gọi $B'(x; y; z)$. Ta có  $\\vec{BB'} = (x - 4; y - 1; z - 0)$.<br>  Do $\\vec{BB'} = \\vec{DD'}$ nên $x - 4 = 9 \\text{ và } y - 1 = -2 \\text{ và } z = -4\\Leftrightarrow x = 13 \\text{ và } y = -1 \\text{ và } z = -4$.<br>  Suy ra tọa độ điểm $B'(13; -1; -4)$. Vậy $T = x + 2y - z = 15$."
  },
  {
    "id": "2H224TL18",
    "question": "Trong không gian $Oxyz$, cho hình hộp chữ nhật $ABCD \\cdot A'B'C'D'$ có đỉnh $A$ trùng với gốc $O$, các vectơ $\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AA'}$ theo thứ tự cùng hướng với $\\vec{i}, \\vec{j}, \\vec{k}$ và có $AB=8, AD=6, AA'=4$. Tính tích vô hướng của hai vectơ $\\overrightarrow{AC}$ và $\\overrightarrow{AM}$ với $M$ là trung điểm của cạnh $C'D'$.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_020.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "68",
    "explain": "Ta có $\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{AD}=8\\overrightarrow{i}+6\\overrightarrow{j}+0\\overrightarrow{k}$ suy ra $\\overrightarrow{AC}=(8;6;0)$.<br>  Ta có  $\\overrightarrow{AM} = \\dfrac{1}{2}\\left(\\overrightarrow{AC'}+\\overrightarrow{AD'}\\right)=\\dfrac{1}{2}\\left(\\overrightarrow{AC'}+\\overrightarrow{AD}+\\overrightarrow{AA'}\\right)$<br>$= \\dfrac{1}{2}\\left(8\\overrightarrow{i}+6\\overrightarrow{j}+4\\overrightarrow{k}+6\\overrightarrow{j}+4\\overrightarrow{k}\\right)$<br>$= 4\\overrightarrow{i}+6\\overrightarrow{j}+4\\overrightarrow{k}.$   Suy ra $\\overrightarrow{AM}=(4;6;4)$.<br>  Vậy $\\overrightarrow{AC}\\cdot \\overrightarrow{AM}=8\\cdot 4+6\\cdot6+0\\cdot 4=68$."
  },
  {
    "id": "2H226TL19",
    "question": "Nhà máy $A$ chuyên sản xuất một loại sản phẩm cung cấp cho nhà máy $B$. Hai nhà máy thoả thuận rằng, hằng tháng $A$ cung cấp cho $B$ số lượng sản phẫm theo đơn đặt hàng của $B$ (tối đa 100 tấn sản phẩm). Nếu số lượng đặt hàng là $x$ tấn sản phẩm thì giá bán cho mỗi tấn sản phẩm là $\\mathrm{P}(x)=45-0,001x^2$ (triệu đồng). Chi phí để $A$ sản xuất $x$ tấn sản phẩm trong một tháng là $\\mathrm{C}(x)=100+30x$ (triệu đồng) (gồm 100 triệu đồng chi phí cố định và 30 triệu đồng cho mỗi tấn sản phẩm). Lợi nhuận lớn nhất mà nhà máy $A$ thu được mỗi tháng là $a$ triệu đồng. Tìm $a$. (Làm tròn đến hàng đơn vị)",
    "answer": "707",
    "explain": "Doanh thu của nhà máy khi sản xuất 1 tấn sản phẩm là $P(x)$ triệu đồng.<br>  Doanh thu của nhà máy khi sản xuất $x$ tấn sản phẩm là $x P(x)$ triệu đồng.<br>  Chi phí của nhà máy khi sản xuất $x$ tấn sản phẩm là $C(x)$ triệu đồng.<br>  Vì Lợi nhuận $=$ Doanh thu $-$ Chi phí nên ta có lợi nhuận của nhà máy A khi sản xuất $x$ tấn sản phẩm là   $H(x) = x P(x)-C(x)$<br>$= x\\left(45-0,001 x^2\\right)-(100+30 x)$<br>$= -0{,}001 x^3+15x-100, \\text { với } 0 \\leqslant x \\leqslant 100.$  $H^{\\prime}(x)=-0{,}003 x^2+15$.<br>  $H^{\\prime}(x)=0\\Leftrightarrow -0{,}003x^2+15=0\\Leftrightarrow x=50\\sqrt{2} \\text{ hoặc } x=-50\\sqrt{2}.$<br>  Chỉ có $x=50 \\sqrt{2}$ thỏa mãn điều kiện.<br>  Ta có: $H(0)=-100$; $H(50 \\sqrt{2})=500 \\sqrt{2}\\approx 707$; $H(100)=400$.<br>  Vậy lợi nhuận lớn nhất của nhà máy $A$ là $707$ triệu đồng."
  },
  {
    "id": "2H226TL20",
    "question": "Trong không gian với hệ tọa độ cho trước, một con ong bay từ điểm $A(2;4;1)$ không đổi với vận tốc và hướng bay đến điểm $B(10;12;5)$ trong $5$ giây. Nếu con ong tiếp tục giữ nguyên vận tốc và hướng bay thì tọa độ của con ong sau $3$ giây tiếp theo đạt tại vị trí $M(a;b;c)$. Tính $5a - b - c$ (làm tròn kết quả đến hàng phần mười).",
    "answer": "49{,}8",
    "explain": "Ta có $\\overrightarrow{AB}= (10 - 2;12 - 4; 5 - 1) = (8;8;4)$.<br>  Vì con ong tiếp tục giữ nguyên vận tốc và hướng bay thì tọa độ của con ong sau $3$ giây tiếp theo đạt tại vị trí $M(a;b;c)$<br>  nên $\\overrightarrow{BM} =\\dfrac{3}{5}\\overrightarrow{AB} $.<br>  Suy ra tọa độ điểm $M$ là $\\left( 10 + \\dfrac{24}{5}, 12 + \\dfrac{24}{5}, 5 + \\dfrac{12}{5} \\right)   = \\left( 14{,}8; 16{,}8; 7{,}4 \\right)$.<br>  Vậy $5a - b - c= 5\\cdot (14{,}8) - 16{,}8 - 7{,}4 = 74 - 16{,}8 - 7{,}4 = 49{,}8$."
  },
  {
    "id": "2H223TL21",
    "question": "Một hình hộp chữ nhật $ABCD.A'B'C'D'$ được đặt vào trong hệ trục tọa độ $Oxyz$ với gốc tọa độ là $A'$ và các trục như hình dưới. Biết rằng $AA'=5; AB=4; AD=3$. Biết rằng tọa độ của $C$ là $(a;b;c)$. Tính $a\\cdot b\\cdot c$.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_023.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "60",
    "explain": "Từ cách đặt hệ trục trên, ta có $A'(0;0;0)$, $D'(3;0;0)$, $B'(0;4;0)$. Suy ra $C(3;4;5)$.<br>  Từ đó $abc=3\\cdot 4\\cdot 5=60$."
  },
  {
    "id": "2H223TL22",
    "question": "Những căn nhà gỗ trong hình được phác thảo dưới dạng một hình lăng trụ đứng tam giác $OAB.O'A'B'$. Với hệ trục toạ độ $Oxyz$ thể hiện như hình vẽ, hai điểm $A'$ và $B'$ có tọa độ lần lượt là $(240; 450; 0)$ và $(120; 450; 300)$. Mỗi căn nhà gỗ có chiều dài là $a$ cm, chiều rộng là $b$ cm, mỗi cạnh bên của mặt tiền có độ dài là $c$ cm. Tính $a+b+c$ <em>(làm tròn đến hàng đơn vị)</em><br><img src=\"data/12/2D2/im2H2/2H22_tikz_025.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "2",
    "explain": "Vì $A'(240; 450; 0)$ nên khoảng cách từ $A'$ đến các trục $Ox$, $Oy$ lần lượt là $450$ cm và $240$ cm.<br>  Suy ra $A'A =450$ cm và $A'O' =240$ cm.<br>  Từ giả thiết ta có $\\overrightarrow{A'B'} =(-120; 0; 300)$.<br>  Do đó $A'B' =\\left|\\overrightarrow{A'B'}\\right| =\\sqrt{(-120)^2 +0 +300^2} =60 \\sqrt{29} \\approx 323$ cm.<br>  Vì $O'O =A'A=450$ cm và $O'$ nằm trên trục $Oy$ nên $O(0; 450; 0)$.<br>  Do đó $\\overrightarrow{O'B'} =(120; 0; 300)$ và $O'B' =\\left|\\overrightarrow{O'B'}\\right |=\\sqrt{120^2 +0 +300^2} =60 \\sqrt{29} \\approx 323$ cm.<br>  Vậy mỗi căn nhà gỗ có chiều dài là $a =450$ cm , chiều rộng là $b =240$ cm và mỗi cạnh bên của mặt tiền có độ dài là $c =323$ cm.<br>  Suy ra $a + b + c = 1013$."
  },
  {
    "id": "2H223TL23",
    "question": "Trong không gian $Oxyz$ cho ba điểm $A(3;2;-1)$, $B(-1;x;1)$, $C(7;-1;y)$. Khi $A$, $B$, $C$ thẳng hàng thì giá trị biểu thức $x+y$ bằng bao nhiêu?",
    "answer": "-8",
    "explain": "Ta có $\\overrightarrow{AB} = (-4; -x - 2; 2)$; $\\overrightarrow{AC} = (4; -3; y + 1)$.<br>  Để $A$, $B$, $C$ thẳng hàng thì \\[\\dfrac{4}{-4}=\\dfrac{-3}{-x-2}=\\dfrac{2}{y+1} \\Leftrightarrow x+2=-3 \\text{ và } y+1=-2 \\Leftrightarrow x=-5 \\text{ và } y=-3.\\]  Vậy $x+y=-5-3=-8$."
  },
  {
    "id": "2H222TL24",
    "question": "Một phòng học có thiết kế dạng hình hộp chữ nhật với chiều dài là $10$\\,m, chiều rộng là $6$\\,m và chiều cao là $4$\\,m. Một chiếc quạt được treo trên trần nhà sao cho là điểm chính giữa của phòng học. Xét hệ trục tọa độ $Oxyz$ có gốc $O \\equiv A$ trùng với một góc phòng và mặt phẳng $(Oxy)$ trùng với mặt sàn, đơn vị đo được lấy theo mét. Gọi $I(a;b;c)$ là tọa độ của điểm treo quạt. Tính giá trị $a+b+c$.  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_026.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "12",
    "explain": "Xét hệ toạ độ $Oxyz$ như hình vẽ, ta có tọa độ $C(10;6;4)$.<br>  Tọa độ điểm chính giữa phòng là trung điểm $I$ của $OC$ do đó $I(5;3;2)$.<br>  Do đó ta có $a+b+c=12$.  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_027.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">"
  },
  {
    "id": "2H226TL25",
    "question": "Trong không gian với hệ tọa độ $Oxyz$ (đơn vị trên mỗi trục tọa độ là $1$ m ), một cabin cáp treo xuất phát từ điểm $A(10;3;0)$ và chuyển động đều theo đường cáp thẳng đến vị trí $D$ cách $A$ một khoảng là $2\\,754$ m. Biết đường đi của cabin cùng phương với vectơ $\\vec{u}(2 ;-2 ; 1)$ và sau 5 phút kể từ khi xuất phát thì cabin đi đến vị trí $B$ có hoành độ $x_B=550$. Hỏi thời gian di chuyển của cabin trên quãng đường $AD$ là bao nhiêu phút (làm tròn đến hàng đơn vị nếu là số thập phân)?",
    "answer": "17",
    "explain": "Điểm $B$ có hoành độ $x_B=550 \\Rightarrow B(550;y;z) \\Rightarrow \\overrightarrow{AB}=(540;y-3;z)$.<br>  Vì đường đi của cabin cùng phương với vectơ $\\vec{u}(2;-2;1) \\Rightarrow \\overrightarrow{AB}$ cùng phương với vectơ $\\vec{u}(2 ;-2 ; 1)$ suy ra   $\\dfrac{540}{2}=\\dfrac{y-3}{-2}=\\dfrac{z}{1}\\Rightarrow y=-537 \\text{ và } z=270\\Rightarrow B(550 ;-537 ; 270).$  Do đó $AB=|\\overrightarrow{A B}|=\\sqrt{(550-10)^2+(-537-3)^2+(270-0)^2}=810.$<br>   Vận tốc chuyển động của cabin là $\\dfrac{810}{5}=162$ (m/phút).<br>  Thời gian di chuyển của cabin trên quãng đường $AD$ là $\\dfrac{2\\,754}{162}=17$ (phút)."
  },
  {
    "id": "2H223TL26",
    "question": "Hình bên dưới minh họa một cái lều hai mái là hai hình chữ nhật giống nhau trong không gian $Oxyz$, với điểm $A$ nằm trên $Ox$, điểm $C$ nằm trên $Oy$. Biết các kích thước của mái lều là $SA=5$ m, $A B=10$ m, độ cao từ $S$ xuống mặt đất là $4$ m. Bạn An muốn trang trí chiếc lều bằng cách treo các sợi dây cờ trang trí từ các góc lều $O$, $A$, $B$, $C$ đến một chiếc đèn treo từ vị trí chính giữa của $SQ$, cách $SQ$ một khoảng là $70$ cm. Hỏi tổng chiều dài sợi dây cờ trang trí tối thiểu bạn An cần mua là bao nhiêu mét? (kết quả làm tròn đến hàng phần mười)   <br><img src=\"data/12/2D2/im2H2/2H22_tikz_031.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "26{,}8",
    "explain": "Gắn hệ trục tọa độ $Oxyz$ như hình vẽ.   <br><img src=\"data/12/2D2/im2H2/2H22_tikz_032.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $I$, $K$ lần lượt là trung điểm của $OA$, $SQ$.<br>  Ta có $O A=2 I A=2 \\sqrt{5^2-4^2}=6$.<br>  Gọi $H$ là vị trí chiếc đèn, $KH=70 \\mathrm{~cm}=0,7$ m. Gọi $G$ là giao điểm của hai đường chéo của hình chữ nhật $OABC$, suy ra $HG=4-0{,}7=3,3$ m. Do đó $H(3;5;3{,}3)$.<br>  Ta thấy $OH=AH=CH=BH$ nên tổng chiều dài sợi dây màu xanh tối thiểu bạn An cần mua là $4 OH$.<br>  Ta có $\\overrightarrow{OH}=(3;5;3{,}3) \\Rightarrow 4 OH=4 \\cdot \\sqrt{3^2+5^2+(3{,}3)^2}=26{,}8$ (m)."
  },
  {
    "id": "2H226TL27",
    "question": "Hệ thống định vị toàn cầu GPS (Global Positioning System) là một hệ thống cho phép xác định vị trí của một vật thể trong không gian. Trong cùng một thời điểm, vị trí của một điểm $M$ trong không gian sẽ đươc xác định bởi bốn vệ tinh cho trước nhờ các bộ thu phát tín hiệu đặt trên các vệ tinh. Giả sử trong không gian với hệ trục tọa độ $Oxyz$, có bốn vệ tinh đặt tại các điểm có tọa độ lần lượt là $A(0;4;5)$, $B(-3;-1;3)$, $C(-2;8;9)$, $D(-7;2;-3)$ đang tiến hành theo dõi vật thể $M$ (coi là một chất điểm). Tại một thời điểm, cả bốn vệ tinh đồng thời phát tín hiệu về điểm $M$ và ngay lập tức nhận lại tín hiệu phản hồi sau những khoảng thời gian lần lượt là $t_A=0{,}2\\ \\mathrm{ms}$, $t_B=\\dfrac{1}{3}\\ \\mathrm{ms}$, $t_C=0{,}6\\ \\mathrm{ms}$, $t_D=\\dfrac{2}{3} ms$. Biết rằng vận tốc của sóng điện từ bằng vận tốc ánh sáng $c=3\\cdot10^8\\ \\mathrm{m/s}$. Tính khoảng cách từ $M$ đến $O$ biết một đơn vị độ dài trên các trục bằng $10\\ \\mathrm{km}$ thực tế (đơn vị: $\\mathrm{km}$, kết quả làm tròn đến hàng phần chục).  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_036.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "37{,}4",
    "explain": "Gọi $M(x;y;z)$.<br>  Do mỗi vệ tinh gửi tín hiệu đến $M$ và nhận lại phản hồi sau thời gian $t$, tức tín hiệu đi từ vệ tinh đến $M$ và quay về nên quãng đường đi được là gấp đôi nên<br>  $MA=\\dfrac{0{,}2\\cdot 10^{-3}\\cdot3\\cdot10^8}{2}=30\\ 000\\ \\mathrm{m}=30\\ \\mathrm{km}$;<br>  $MB=\\dfrac{\\dfrac{1}{3}\\cdot10^{-3}\\cdot3\\cdot10^8}{2}=50\\ 000\\ \\mathrm{m}=50\\ \\mathrm{km}$;<br>  $MC=\\dfrac{0{,}6\\cdot10^{-3}\\cdot3\\cdot10^8}{2}=90\\ 000\\ \\mathrm{m}=90\\ \\mathrm{km}$;<br>  $MD=\\dfrac{\\dfrac{2}{3}\\cdot10^{-3}\\cdot3\\cdot10^8}{2}=100\\ 000\\ \\mathrm{m}=100\\ \\mathrm{km}$.<br>  Do mỗi đơn vị độ dài trên các trục bằng $10\\ \\mathrm{km}$ nên<br> $x^2+(y-4)^2+(z-5)^2=3^2 \\text{ và } (x+3)^2+(y+1)^2+(z-3)^2=5^2 \\text{ và } (x+2)^2+(y-8)^2+(z-9)^2=9^2 \\text{ và } (x+7)^2+(y-2)^2+(z+3)^2=10^2\\Leftrightarrow x^2+y^2+z^2-8y-10z=-32 \\text{ và } x^2+y^2+z^2+6x+2y-6z=6 \\text{ và } x^2+y^2+z^2+4x-16y-18z=-68 \\text{ và } x^2+y^2+z^2+14x-4y+6z=38$<br>  $\\Leftrightarrow-6x-10y-4z=-38 \\text{ và } -4x+8y+8z=36 \\text{ và } -14x-4y-16z=-70\\Leftrightarrow x=1 \\text{ và } y=2 \\text{ và } z=3$.<br>  Suy ra $OM=\\sqrt{1^2+2^2+3^2}=\\sqrt{14}$.<br>  Vậy khoảng cách từ $O$ đến $M$ là $\\sqrt{14}\\cdot10\\approx37{,}4\\mathrm{km}$."
  },
  {
    "id": "2H224TL28",
    "question": "Trong không gian, cho hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ có cùng độ dài bằng $6$. Biết độ dài của vectơ $\\overrightarrow{a}+2\\overrightarrow{b}$ bằng $6\\sqrt{3}$. Biết số đo góc giữa hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ là $x$ độ. Giá trị của $x$ là bao nhiêu?",
    "answer": "120",
    "explain": "Ta có   $\\left|\\overrightarrow{a}+2\\overrightarrow{b} \\right| =6\\sqrt{3}$<br>$\\Leftrightarrow \\left|\\overrightarrow{a}+2\\overrightarrow{b} \\right|^2 =108$<br>$\\Leftrightarrow \\left|\\overrightarrow{a}\\right|^2+4\\overrightarrow{a}\\cdot \\overrightarrow{b}+4\\left|\\overrightarrow{b}\\right|^2=108$<br>$\\Leftrightarrow 36+4\\overrightarrow{a}\\cdot \\overrightarrow{b}+4\\cdot 36=108$<br>$\\Leftrightarrow 4\\overrightarrow{a}\\cdot \\overrightarrow{b}=-72$<br>$\\Leftrightarrow \\overrightarrow{a}\\cdot \\overrightarrow{b}=-18.$  Mà $\\cos\\left(\\overrightarrow{a},\\overrightarrow{b}\\right)=\\dfrac{\\overrightarrow{a}\\cdot \\overrightarrow{b}}{\\left| \\overrightarrow{a}\\right| \\cdot \\left| \\overrightarrow{b}\\right| } =\\dfrac{-18}{6\\cdot6}=-\\dfrac{1}{2}$.<br>  Suy ra $\\left(\\overrightarrow{a},\\overrightarrow{b}\\right)=120^\\circ$ hay $x=120$."
  },
  {
    "id": "2H223TL29",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho ba điểm $A(-2; 3; 1)$, $B(2; 1; 0)$, $C(-3; -1; 1)$. Cho điểm $D(a; b; c)$ thỏa mãn $ABCD$ là hình thang có đáy $AD$ và diện tích tứ giác $ABCD$ bằng $3$ lần diện tích tam giác $ABC$. Tính $P = a + b + c$.",
    "answer": "-10",
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_040.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có $\\overrightarrow{AB}=(4;-2;-1)$, $\\overrightarrow{AC}=(-1;-4;0)$, $\\overrightarrow{BC}=(-5;-2;1)$.<br>  Khi đó, $AB=\\sqrt{21}$, $AC=\\sqrt{17}$, $BC=\\sqrt{30}$, $p=\\dfrac{\\sqrt{21}+\\sqrt{17}+\\sqrt{30}}{2}$. <br>  Do đó, $S_{ABC}=\\sqrt{p(p-AB)(p-AC)(p-BC)}=\\dfrac{\\sqrt{341}}{2}$.<br>  Ta có $\\sin(\\widehat{BCA})=\\dfrac{2S_{ABC}}{BC\\cdot CA}=\\dfrac{\\sqrt{341}}{\\sqrt{510}}$.<br>  Ta có $\\widehat{BCA}=\\widehat{CAD}$ nên $\\sin \\widehat{BCA}=\\sin \\widehat{CAD}=\\dfrac{\\sqrt{341}}{\\sqrt{510}}$.<br>  Vì $\\overrightarrow{AD}$ cùng hướng với $\\overrightarrow{BC}$ nên $\\dfrac{a+2}{-5}=\\dfrac{b-3}{-2}=\\dfrac{c-1}{1}=t&gt;0  \\Leftrightarrow a=-5t-2 \\text{ và } b=-2t+3 \\text{ và } c=t+1.$  Ta có $D(-5t-2;-2t+3;t+1)$ nên $\\overrightarrow{AD}=(-5t;-2t;t)$. Do đó, $AD=\\sqrt{30t^2}$<br>  Vì diện tích tứ giác $ABCD$ bằng ba lần diện tích tam giác $ABC$ nên diện tích tam giác $ADC$ gấp hai lần diện tích tam giác $ABC$.<br>  Khi đó, ta được $S_{ADC}=\\sqrt{341}$.<br>  Suy ra $AD=\\dfrac{2S_{ADC}}{AC \\cdot\\sin \\widehat{CAD}}=\\dfrac{2S_{ADC}}{AC \\cdot\\sin \\widehat{BCA}}=\\dfrac{2\\sqrt{510}}{\\sqrt{17}} \\Leftrightarrow \\sqrt{30t^2}=\\dfrac{2\\sqrt{510}}{\\sqrt{17}}$.<br>  Bình phương hai vế của phương trình, $30t^2=120 \\Leftrightarrow t=2 \\text{ hoặc } t=-2$.<br>  So sánh với điều kiện $t&gt;0$, ta nhận $t=2$.<br>  Khi đó $D(-12;-1;3)$. Vậy $P=-12-1+3=-10$."
  },
  {
    "id": "2H222TL30",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho hình hộp $ABCD.A'B'C'D'$ có $A(0; 0; 0)$, $D'(0; 3; -3)$, $B(3; 0; 0)$. Tọa độ điểm $C'(a; b; c)$. Tính $T = a + b + c$.",
    "answer": "3",
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_041.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có $\\overrightarrow{AB}=(3;0;0)$, $\\overrightarrow{D'C'}=(a;b-3;c+3)$.<br>  Vì $\\overrightarrow{AB}=\\overrightarrow{D'C'}$ nên $a=3 \\text{ và } b-3=0 \\text{ và } c+3=0 \\Leftrightarrow a=3 \\text{ và } b=3 \\text{ và } c=-3.$<br>  Vậy $T=a+b+c=3$."
  },
  {
    "id": "2H223TL31",
    "question": "Trong không gian với hệ $Oxyz$, cho các điểm $A(19;0;0)$, $B(0;19;0)$, $E(12;0;7)$ và $F(0;12;7)$. Biết rằng mặt đáy hình vuông $ABCD$ song song với mặt đỉnh hình vuông $EFGH$ (như hình vẽ). Điểm $S(0;0;k)$ là đỉnh của hình chóp $S.EFGH$ kết hợp với khối đa diện $ABCD.EFGH$ tạo thành một khối chóp lớn $S.ABCD$. Hỏi thể tích của khối chóp $S.EFGH$ bằng bao nhiêu m$^3$? Biết rằng mỗi đơn vị tương ứng với $1$ mét trong thực tế <em>(kết quả làm tròn đến hàng đơn vị)</em>.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_042.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "1152",
    "explain": "Độ dài các cạnh hình vuông $\\left|\\overrightarrow{AB}\\right|=19\\sqrt{2}$, $\\left|\\overrightarrow{EF}\\right|=12\\sqrt{2}$. <br>  Xét $\\triangle SAB$ có $E\\in SA \\text{ và } EF\\parallel AB \\Rightarrow \\dfrac{SE}{SA}=\\dfrac{EF}{AB}=\\dfrac{12}{19}$. <br>  Suy ra $SE=\\dfrac{12}{19}SA \\Rightarrow \\overrightarrow{SE}=\\dfrac{12}{19}\\overrightarrow{SA} \\Rightarrow E-S=\\dfrac{12}{19}(A-S) \\Leftrightarrow S=\\dfrac{19E-12A}{7} \\Rightarrow k=\\dfrac{19z_E-12z_A}{7}=19$. <br>  Chiều cao của khối chóp $S.EFGH$ là khoảng cách từ $S$ đến $(EFGH)$ có phương trình $z=7$. <br>  Suy ra $h=19-7=12$. <br>  Vậy $V_{S.EFGH}=\\dfrac{1}{3}\\cdot EF^2\\cdot h=\\dfrac{1}{3}\\cdot\\left(12\\sqrt{2}\\right)^2\\cdot12=1152 \\ \\left(\\text{ m}^3\\right)$."
  },
  {
    "id": "2H224TL32",
    "question": "Cho lăng trụ $A B C . A' B' C'$ có đáy $A B C$ là tam giác vuông tại $A$ và hình chiếu vuông góc của điểm $A'$ lên mặt phẳng $(A B C)$ trùng với tâm của đường tròn ngoại tiếp $\\triangle A B C$. Gọi $G$ là trọng tâm của $\\triangle A B C$. Biết $A B=2$, $A C=4$, $A A'=\\sqrt{14}$. Tính $\\cos \\widehat{B' G C'}$ (làm tròn kết quả đến hàng phần chục).<br><img src=\"data/12/2D2/im2H2/2H22_tikz_043.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "0{,}6",
    "explain": "Gọi $ M $ là trung điểm $ BC $ và do tam giác $ ABC $ vuông tại $ A $ nên $ M $ là tâm đường tròn ngoại tiếp tam giác $ ABC $.<br>  Do đó $ A'M \\perp (ABC) $.<br>  Ta có $ BC=\\sqrt{AB^2+AC^2}=\\sqrt{2^2+4^2}=2\\sqrt{5} $.<br>  Khi đó $ AM=\\dfrac{BC}{2}=\\sqrt{5} $.<br>  Do $ \\triangle AMA' $ vuông tại $ M $ nên  $ A'M=\\sqrt{AA'^2-AM^2}=3. $  Ta xét hệ trục tọa độ với $ A(0;0;0) $ là trục tọa độ.<br>  Trục hoành là $ Ax $ và với $ C(4;0;0) $.<br>  Trục tung là $ Ay $ và với $ B(0;2;0) $.<br>  Dẫn đến $M=\\left(\\dfrac{4+0}{2};\\dfrac{0+2}{2};\\dfrac{0+0}{2}\\right)=(2;1;0)$.<br>  Trục cao là $ Mz $ vuông góc với mặt phẳng $ (ABC) $.<br>  Do đó $ A'\\left(2;1;3\\right) $ vì $ M$ là hình chiếu của $ A' $ lên $ (ABC) $.  Do $ G $ là trọng tâm tam giác $ ABC $ nên  $x_G=\\dfrac{0+0+4}{3}=0 \\text{ và } y_G=\\dfrac{0+2+0}{3}=\\dfrac{2}{3} \\text{ và } z_G=\\dfrac{0+0+0}{3}=0 \\Rightarrow G\\left(\\dfrac{4}{3};\\dfrac{2}{3};0\\right).$  Ta có $ \\overrightarrow{AC}=\\overrightarrow{A'C'} \\Rightarrow C'(6;1;3)$.<br>  Tương tự do $ \\overrightarrow{AB}=\\overrightarrow{A'B'} \\Rightarrow B'(2;3;3)$.<br>  Ta tính được $ \\overrightarrow{GB'}=\\left(\\dfrac{2}{3};\\dfrac{7}{3};3\\right) $ và $\\overrightarrow{GC'}=\\left(\\dfrac{14}{3};\\dfrac{1}{3};3\\right) $.<br>  Do đó  $\\cos \\widehat{B'GC'}=\\cos\\left(\\overrightarrow{GB'},\\overrightarrow{GC'}\\right)=\\dfrac{\\overrightarrow{GB'}\\cdot\\overrightarrow{GC'}}{\\left|\\overrightarrow{GB'}\\right|\\cdot \\left|\\overrightarrow{GC'}\\right|}\\approx 0{,}6$."
  },
  {
    "id": "2H223TL33",
    "question": "Trong không gian $O x y z$, cho tam giác $A B C$ có ba đỉnh $A$, $B$, $C$ lần lượt thuộc ba trục tọa độ $O x$, $O y$, $O z$ và có trọng tâm $G\\left(\\dfrac{1}{3} ;-\\dfrac{2}{3} ; \\dfrac{4}{3}\\right)$. Tính chu vi tam giác $A B C$ (làm tròn kết quả đến hàng phần chục).",
    "answer": "10{,}8",
    "explain": "Do $A$, $B$, $C$ lần lượt thuộc ba trục tọa độ $O x$, $O y$, $O z$ nên $ A(a;0;0) $, $ B(0;b;0) $ và $ C(0;0;c) $.<br>  Do $ G\\left(\\dfrac{1}{3} ;-\\dfrac{2}{3} ; \\dfrac{4}{3}\\right) $ là trọng tâm tam giác $ ABC $ nên  $ \\dfrac{a}{3}=\\dfrac{1}{3} \\text{ và } \\dfrac{b}{3}=-\\dfrac{2}{3} \\text{ và } \\dfrac{c}{3}=\\dfrac{4}{3}\\Leftrightarrow a=1 \\text{ và } b=-2 \\text{ và } c=4. $  Khi đó $ \\overrightarrow{AB}=(-1;-2;0) \\Rightarrow AB=\\sqrt{5}$;<br>  $ \\overrightarrow{AC}= (-1;0;4)\\Rightarrow AC=\\sqrt{17}$;<br>  $ \\overrightarrow{BC}=(0;2;4) \\Rightarrow BC=\\sqrt{20}$.<br>  Vậy chu vi tam giác $ ABC $ là $ AB+BC+CA\\approx 10{,}8 $."
  },
  {
    "id": "2H226TL34",
    "question": "Trong không gian với một hệ trục tọa độ cho trước (đơn vị đo: ki-lô-mét), ra-đa phát hiện một chiếc máy bay di chuyển với vận tốc và hướng không đổi từ điểm $A(800;500;7)$ đến điểm $B(940;550;8)$ trong $10$ phút. Nếu máy bay tiếp tục giữ nguyên vận tốc và hướng bay thì tọa độ của máy bay sau $10$ phút tiếp theo là $D(x;y;z)$. Khi đó $x+y+z$ bằng bao nhiêu?",
    "answer": "1689",
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_044.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"> <br>- Vị trí của máy bay sau $10$ phút tiếp theo là $D(x;y;z)$.<br>- Vì hướng của máy bay không đổi nên $\\overrightarrow{AB}$ và $\\overrightarrow{BD}$ cùng hướng.<br>- Do vận tốc của máy bay không đổi và thời gian bay từ $A$ đến $B$ bằng thời gian bay từ $B$ đến $D$ nên $AB = BD$.<br>- Do đó $\\overrightarrow{BD} = \\overrightarrow{AB} = \\left( 940-800; 550-500; 8-7 \\right) = (140; 50; 1)$.<br>- Mặt khác, $\\overrightarrow{BD} = (x - 940; y - 550; z - 9)$ nên $x - 940 = 140 \\text{ và } y - 550 = 50 \\text{ và } z - 8 = 1$.<br>- Giải hệ phương trình trên ta được $x =1080 \\text{ và } y =600 \\text{ và } z =9$ nên $x+y+z=1080+600+9=1689$."
  },
  {
    "id": "2H226TL35",
    "question": "Trong không gian với hệ tọa độ cho trước, đơn vị đo lấy là kilômét, rada phát hiện một máy bay chiến đấu X đi chuyển với vận tốc và hướng không đổi từ điểm $A(1\\,200; 500; 13)$ đến điểm $ B $ trong $ 30 $ phút. Nếu máy bay giữ nguyên vận tốc và hướng bay thì vị trí của máy bay sau $ 10 $ phút tiếp theo là $C(1\\,900; 800; 17)$. Tọa độ vị trí điểm $B(a; b; c)$, tính $a+b+c$.",
    "answer": "2466",
    "explain": "Ta có $ \\overrightarrow{AC}=\\dfrac{4}{3}\\cdot\\overrightarrow{AB} \\Rightarrow \\overrightarrow{AB}=\\dfrac{3}{4}\\cdot\\overrightarrow{AC}$.<br>  Mà $ \\overrightarrow{AB}=(a-1\\,200;b-500;c-13) $; $ \\overrightarrow{AC}=(700;300;4) $.<br>  Khi đó ta có $ a-1\\,200=\\dfrac{3}{4}\\cdot 700 \\text{ và } b-500=\\dfrac{3}{4}\\cdot 300 \\text{ và } c-13=\\dfrac{3}{4}\\cdot 4\\Leftrightarrow a=1\\,725 \\text{ và } b=725 \\text{ và } c=16. $<br>  Vậy $ a+b+c=1\\,725+725+16= 2\\,466$."
  },
  {
    "id": "2H223TL36",
    "question": "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ như hình vẽ. Đặt một vật tại đỉnh $A$, khi đó tác động vào vật bởi những lực $\\overrightarrow{F_1}$, $\\overrightarrow{F_2}$, $\\overrightarrow{F_3}$ với $\\left| \\overrightarrow{F_1}\\right| = 2$ N, $\\left| \\overrightarrow{F_2}\\right| = 3$ N, $\\left| \\overrightarrow{F_3}\\right| = 4$ N. Hãy xác định độ lớn của hợp lực $\\overrightarrow{F}$ tác động lên vật (làm tròn đến hàng phần trăm).<br><img src=\"data/12/2D2/im2H2/2H22_tikz_047.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "5{,}39",
    "explain": "Theo quy tắc hình hộp, ta có $\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{AC'}$.<br>  Do đó $\\overrightarrow{F}=\\overrightarrow{F_1}+\\overrightarrow{F_2}+\\overrightarrow{F_3}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{AC'}$.<br>  Ta có $AC'=\\sqrt{CC'^2+AC^2}=\\sqrt{AA'^2+AB^2+AD^2}=\\sqrt{\\left| \\overrightarrow{F_1}\\right|^2+\\left| \\overrightarrow{F_2}\\right|^2+\\left| \\overrightarrow{F_3}\\right|^2}=\\sqrt{2^2+3^2+4^2}$  Do đó $\\left|\\overrightarrow{F} \\right|=AC' \\approx 5{,}39$ N."
  },
  {
    "id": "2H223TL37",
    "question": "Căn nhà gỗ trong được phác thảo dưới dạng một hình lăng trụ tam giác đều $OAB.O'A'B'$ như hình vẽ. Chọn hệ trục tọa độ $Oxyz$ như hình vẽ (đơn vị đo lấy theo centimét), điểm $A'$ có tọa độ là $(260; 480; 0)$. Mỗi căn nhà gỗ có chiều dài là $a$ cm, chiều rộng là $b$ cm và chiều cao $c$ cm. Tính $a + b + c$ (Làm tròn đến hàng đơn vị).<br><img src=\"data/12/2D2/im2H2/2H22_tikz_048.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "965",
    "explain": "Vì $A'(260; 480; 0)$ nên khoảng cách từ $A'$ đến các trục $Ox$, $Oy$ lần lượt là $480$ cm và $260$ cm.<br>  Suy ra $A'A = 480$ cm và $A'O' = 260$ cm.<br>  Do đó $a=480$ và $b=260$.<br>  Vì căn nhà gỗ trong được phác thảo dưới dạng một hình lăng trụ tam giác đều $OAB.O'A'B'$ nên tam giác $OAB$ là tam giác đều cạnh $OA=260$ cm, chiều cao của căn nhà là độ dài đường cao của tam giác $OAB$.<br>  Khi đó $c=\\dfrac{260\\sqrt{3}}{2}\\approx 225$ cm.<br>  Khi đó $a+b+c=965$ cm."
  },
  {
    "id": "2H223TL38",
    "question": "Trong không gian $Oxy z$, cho bốn điểm $A(1; 2; 1)$, $B(2; 0; -1)$, $C(1; 3; -4)$, $D(0; -2; 2)$ và $M$ là một điểm thỏa mãn $MA^2 + MB^2 + MC^2 = 4MD^2$. Biết rằng $M$ nằm trên một mặt cầu có tâm $I(a; b; c)$, tính $a + b + c$.",
    "answer": "-5",
    "explain": "Lấy điểm $I(a;b;c)$ sao cho $\\overrightarrow{IA}+\\overrightarrow{IB}+\\overrightarrow{IC}-4\\overrightarrow{ID}=\\overrightarrow{0}$. <br>  Khi đó, ta có $I(-4;-13;12)$.<br>  Ta có  $MA^2 + MB^2 + MC^2 =4MD^2$<br>$\\Leftrightarrow \\overrightarrow{MA}^2+\\overrightarrow{MB}^2+\\overrightarrow{MC}^2-4\\overrightarrow{MD}^2=0$<br>$\\Leftrightarrow \\left(\\overrightarrow{MI}+\\overrightarrow{IA}\\right)^2+\\left(\\overrightarrow{MI}+\\overrightarrow{IB}\\right)^2+\\left(\\overrightarrow{MI}+\\overrightarrow{IB}\\right)^2-4\\left(\\overrightarrow{MI}+\\overrightarrow{IB}\\right)^2=0$<br>$\\Leftrightarrow -MI^2+2 \\cdot \\left(\\overrightarrow{IA}+\\overrightarrow{IB}+\\overrightarrow{IC}-\\overrightarrow{ID}\\right)+IA^2+IB^2+IC^2-4ID^2=0$<br>$\\Leftrightarrow MI^2=334$<br>$\\Leftrightarrow MI=\\sqrt{334}.$  Vì $I$ là điểm cố định nên $M$ thuộc vào mặt câu tâm $I(-4;-13;12)$, bán kính $R=\\sqrt{334}$.<br>  Suy ra $a+b+c=-4-13+12=-5$."
  },
  {
    "id": "2H226TL39",
    "question": "Trong không gian $Oxyz$ (đơn vị trên mỗi trục là mét), một cabin cáp treo xuất phát từ điểm $A(0; 1; 5)$ và chuyển động đều theo hướng vectơ $\\overrightarrow{u} = (1; 2; 2)$ với tốc độ $6$ m/s. Sau $6$ giây kể từ lúc xuất phát, cabin đến điểm $B(a; b; c)$. Tìm $c$.",
    "answer": "29",
    "explain": "Ta có   \\[\\left|\\overrightarrow{u}\\right|=\\sqrt{1^2+2^2+2^2}=3.\\]  Suy ra mỗi giây cabin di chuyển được một quãng đường bằng $2$ lần độ dài vectơ $\\overrightarrow{u}$.<br>  Khi đó, ta có  \\[\\overrightarrow{AB}=12\\overrightarrow{u}=(12;24;24).\\]  Suy ra \\[c-5=24 \\Leftrightarrow c=29.\\]"
  },
  {
    "id": "2H224TL40",
    "question": "Một chiếc đèn tròn được treo song song với mặt phẳng nằm ngang bởi ba sợi dây không dãn xuất phát từ điểm $O$ trên trần nhà và lần lượt buộc vào ba điểm $A$, $B$, $C$ trên đèn tròn sao cho các lực căng $\\overrightarrow{F}_1$, $\\overrightarrow{F}_2$, $\\overrightarrow{F}_3$ lần lượt trên mỗi dây $OA$, $OB$, $OC$ đôi một vuông góc với nhau và $\\left|\\overrightarrow{F}_1\\right|=\\left|\\overrightarrow{F}_2\\right|=\\left|\\overrightarrow{F}_3\\right|=a$ (N). Biết trọng lượng của chiếc đèn là $20$ N. Tìm $a$ (kết quả làm tròn đến hàng đơn vị).  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_049.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "12",
    "explain": "Chọn hệ trục toạ độ $Oxzy$ sao cho $A$ thuộc tia $Ox$, $B$ thuộc tia $Oy$, $C$ thuộc tia $Oz$.<br>   Ta có $\\overrightarrow{F}_1=(a;0;0)$, $\\overrightarrow{F}_2=(0;a;0)$,$\\overrightarrow{F}_3=(0;0;a)$.<br>   Suy ra $\\overrightarrow{F}_1+\\overrightarrow{F}_2+\\overrightarrow{F}_3=(a;a;a)$.<br>   Mà $\\overrightarrow{F}_1+\\overrightarrow{F}_2+\\overrightarrow{F}_3=\\overrightarrow{P}$ là véc-tơ trọng lượng của chiếc đèn.<br>   Do đó $\\left|\\overrightarrow{P}\\right|=a\\sqrt{3}=20\\Rightarrow a\\approx 12$.<br>"
  },
  {
    "id": "2H223TL41",
    "question": "Một phần của sân trường được định vị bởi các điểm $A$, $B$, $C$, $D$ như hình vẽ  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_050.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Bước đầu chúng được lấy \"thăng bằng\" để có cùng độ cao, biết $ABCD$ là hình thang vuông ở $A$ và $B$ với độ dài $AB=25$ m, $AD=18$ m, $BC=15$ m. Do yêu cầu kĩ thuật, khi lát phẳng phần sân trường phải thoát nước về góc sân ở $C$ nên người ta lấy độ cao ở các điểm $B$, $C$, $D$ thấp xuống hơn so với độ cao ở $A$ lần lượt là $10$ cm, $a$ cm, $6$ cm. Hỏi giá trị của $a$ bằng bao nhiêu?",
    "answer": "15",
    "explain": "Chọn hệ trục toạ độ $Axzy$ sao cho $B$ thuộc tia $Ax$, $D$ thuộc tia $Ay$.<br>   Ta có $A(0;0;0)$, $B(25;0;-10)$, $D(0;18;-a)$, $C(25;15;-6)$.  $\\overrightarrow{AB}=(25;0;-10)$, $\\overrightarrow{AD}=(0;18;-6)$, $\\overrightarrow{AC}=(25;15;-a)$, $\\left[\\overrightarrow{AB},\\overrightarrow{AD}\\right]=(180;150;450)$.<br>   Vì $A$, $B$, $C$, $D$ đồng phẳng nên<br>   $\\left[\\overrightarrow{AB},\\overrightarrow{AC}\\right]\\cdot \\overrightarrow{AD}=0\\Rightarrow 180\\cdot 25+ 150\\cdot 15 + 450\\cdot (-a)=0\\Rightarrow a=15$ (cm)."
  },
  {
    "id": "2H223TL42",
    "question": "Một người điều khiển Flycam đang đứng tại một điểm được xem là gốc tọa độ $O(0; 0; 0)$ trong không gian. Các trục tọa độ được quy ước như sau: Trục $Ox$ theo hướng Đông; trục $Oy$ theo hướng Bắc; trục $Oz$ theo hướng thẳng đứng lên trên; đơn vị mỗi trục là mét. Tại một thời điểm, Flycam ở vị trí $A$ có tọa độ $(1;-8;4)$. Khoảng cách (đường chim bay) từ người điều khiển đến Flycam tại vị trí $A$ là mấy mét?",
    "answer": "9",
    "explain": "Người điều khiển ở $O(0,0,0)$. Flycam ở $A(1,-8,4)$.<br>  Khoảng cách  $OA = \\sqrt{(1-0)^2 + (-8-0)^2 + (4-0)^2}$<br>$= \\sqrt{1^2 + (-8)^2 + 4^2}$<br>$= \\sqrt{1 + 64 + 16}$<br>$= \\sqrt{81}$<br>$= 9\\quad (\\text{m}).$"
  },
  {
    "id": "2H223TL43",
    "question": "Hai chiếc Flycam được điều khiển cùng bay lên tại một địa điểm. Sau một thời gian bay, chiếc flycam thứ nhất bay đến vị trí điểm $A$, chiếc flycam thứ hai bay đến điểm $B$. Chọn hệ trục tọa độ $Oxyz$ với gốc $O$ đặt tại điểm xuất phát của hai chiếc flycam, mặt phẳng $Oxy$ trùng với mặt đất (coi như phẳng) có trục $Ox$ hướng về phía nam, trục $Oy$ hướng về phía đông và trục $Oz$ hướng thẳng đứng lên trời (đơn vị đo mỗi trục là mét).  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_051.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Biết điểm $A$ cách mặt đất $4$m, cách điểm xuất phát $5$m về phía nam và $6$m về phía đông.<br>  Vectơ $\\overrightarrow{OB}$ có độ dài bằng $10$ và hợp với các vectơ đơn vị trên các trục tọa độ $Ox$, $Oy$, $Oz$ các góc lần lượt là $135^\\circ$, $120^\\circ$, $60^\\circ$. Khoảng cách giữa hai chiếc flycam lúc đó là bao nhiêu mét? (làm tròn đến hàng chục).",
    "answer": "16{,}4",
    "explain": "Chọn hệ trục $Oxyz$ như đề bài với trục $Ox$ hướng về phía nam, $Oy$ hướng về phía đông, $Oz$ hướng thẳng lên trên. Đơn vị mét.  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_052.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Điểm $A$ cách mặt đất $4$ m, cách điểm xuất phát $5$ m về phía nam và $6$ m về phía đông, nên tọa độ của $A$ là $A(5,\\,6,\\,4)$.<br>  Gọi $\\overrightarrow{OB}$ có độ dài $10$ và các góc lần lượt với các trục $Ox$, $Oy$, $Oz$ là $135^\\circ$, $120^\\circ$, $60^\\circ$. Do đó cosin hướng của $\\overrightarrow{OB}$ là  \\[  \\cos\\alpha=\\cos135^\\circ=-\\dfrac{\\sqrt2}{2},\\qquad  \\cos\\beta=\\cos120^\\circ=-\\dfrac{1}{2},\\qquad  \\cos\\gamma=\\cos60^\\circ=\\dfrac{1}{2}.  \\]  Vậy thành phần tọa độ của $B$ là  \\[  B\\left(10\\cos\\alpha,\\;10\\cos\\beta,\\;10\\cos\\gamma\\right)   =\\left( -5\\sqrt2,\\,-5,\\;5\\right).  \\]  Khoảng cách giữa hai điểm \\(A\\) và \\(B\\) là  $AB = \\sqrt{(x_A-x_B)^2+(y_A-y_B)^2+(z_A-z_B)^2}$<br>$= \\sqrt{\\big(5-(-5\\sqrt2)\\big)^2+(6-(-5))^2+(4-5)^2}$<br>$= \\sqrt{\\big(5+5\\sqrt2\\big)^2+11^2+(-1)^2}$<br>$= \\sqrt{25(1+2\\sqrt2+2)+121+1}$<br>$= \\sqrt{75+50\\sqrt2+122}$<br>$= \\sqrt{197+50\\sqrt2}.$  Số gần đúng  \\[  AB\\approx\\sqrt{197+50\\sqrt2}\\approx 16{,}4\\ \\text{m}.  \\]  Khoảng cách giữa hai chiếc flycam là  \\[  AB=\\sqrt{197+50\\sqrt2}\\approx16{,}4\\ \\text{m}.  \\]"
  },
  {
    "id": "2H224TL44",
    "question": "Một người đứng ở mặt đất điều khiển hai flycam để phục vụ trong một chương trình của đài truyền hình. Flycam I ở vị trí $A$ cách vị trí điều khiển $150$ m về phía nam và $200$ m về phía đông, đồng thời cách mặt đất $50$ m. Flycam II ở vị trí $B$ cách vị trí điều khiển $180$ m về phía bắc và $240$ m về phía tây, đồng thời cách mặt đất $60$ m. Chọn hệ trục tọa độ $Oxyz$ với gốc $O$ là vị trí người điều khiển, mặt phẳng $(Oxy)$ trùng với mặt đất, trục $Ox$ có hướng trùng với hướng nam, trục $Oy$ trùng với hướng đông, trục $Oz$ vuông góc với mặt đất hướng lên bầu trời, đơn vị trên mỗi trục tính theo mét. Khoảng cách giữa hai flycam đó bằng bao nhiêu mét (làm tròn đến hàng đơn vị)?",
    "answer": "550",
    "explain": "Theo giả thiết đề cho, ta có<br>  Tọa độ của flycam tại vị trí điểm $A$ là $(150; 200; 50)$.<br>  Tọa độ của flycam tại vị trí điểm $B$ là $(-180; -240; 60)$.<br>  Quãng đường flycam bay từ vị trí $A$ đến vị trí $B$ bằng khoảng cách giữa hai điểm $A$ và $B$, ta có  $AB=\\sqrt{(-180-150)^2+(-240-200)^2+(60-50)^2}=\\sqrt{302600} \\approx 550(\\mathrm{m}).$"
  },
  {
    "id": "2H224TL45",
    "question": "Cho hình chóp $S.ABCD$ có đáy hình vuông. Cho tam giác $SAB$ vuông tại $S$ và góc $SBA$ bằng $30^{\\circ}$. Mặt phẳng $(SAB)$ vuông góc mặt phẳng đáy. Gọi $M$, $N$ là trung điểm $A B$, $B C$. Tìm cosin góc tạo bởi hai đường thẳng $(SM, DN)$. (Làm tròn kết quả đến hàng phần trăm)",
    "answer": "0{,}45",
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_053.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"> Gọi hệ trục tọa độ $Oxyz$ như hình vẽ. Đặt cạnh hình vuông $ABCD$ là $a$.<br> Trong $\\triangle SAB$ kẻ $SH\\perp AB$ tại $H$ mà $AB=(SAB)\\cap (ABCD)$ và $(SAB)\\perp (ABCD)$ nên $SH\\perp (ABCD)$.<br> Xét $\\triangle ABC$ vuông tại $S$,ta có $SB=AB\\cos B=AB\\cdot \\cos 30= a\\dfrac{\\sqrt{3}}{2}$.<br> Trong $\\triangle SHB$ vuông tại $H$, ta có $SH=SB\\cdot \\sin B=a\\dfrac{\\sqrt{3}}{2}\\cdot \\sin 30=a\\dfrac{\\sqrt{3}}{4}$.<br> Trong $\\triangle ABC$ vuông tại $S$, có $SM$ là đường trung tuyến, nên $SM=AM=MB=\\dfrac{AB}{2}=\\dfrac{a}{2}$.<br> Trong $\\triangle SMH$ vuông tại $H$, ta có $HM=\\sqrt{S M^2-S H^2}=\\sqrt{\\dfrac{a^2}{4}-\\dfrac{3 a^2}{16}}=\\dfrac{a}{4}$.<br> Ta có $H B=A M+M B=\\dfrac{a}{4}+\\dfrac{a}{2}=\\dfrac{3 a}{4} \\text{ và } A H=A M-A M=\\dfrac{a}{2}-\\dfrac{a}{4}=\\dfrac{a}{4}.$<br> Khi đó ta có $H(0;0;0)$, $A\\left(-\\dfrac{a}{4};0;0\\right)$, $M\\left(\\dfrac{a}{4};0;0\\right)$, $B\\left(\\dfrac{3a}{4};0;0\\right)$, $S\\left(0;0;\\dfrac{a\\sqrt{3}}{4}\\right)$, $N\\left(\\dfrac{3a}{4};\\dfrac{2}{2};0;\\right)$, $D\\left(-\\dfrac{a}{4};a;0\\right)$.<br> Ta có $\\overrightarrow{S M}=\\left(\\dfrac{a}{4}; 0; -\\dfrac{a \\sqrt{3}}{4}\\right) \\text{ và } \\overrightarrow{DN}=\\left(a; -\\dfrac{a}{2}; 0\\right)\\Rightarrow[\\overrightarrow{S M}; \\overrightarrow{D N}]=\\left(-\\dfrac{a^2 \\sqrt{3}}{8};-\\dfrac{a^2 \\sqrt{3}}{4};-\\dfrac{a^2}{8}\\right)$.<br> Suy ra $\\cos\\left[\\overrightarrow{SM}; \\overrightarrow{DN}\\right]=\\dfrac{|\\overrightarrow{SM} \\cdot \\overrightarrow{DN}|}{|\\overrightarrow{SM}| \\cdot|\\overrightarrow{DN}|}=\\dfrac{\\dfrac{a^2}{4}}{\\dfrac{a}{2} \\cdot \\dfrac{a \\sqrt{5}}{2}}=\\dfrac{\\sqrt{5}}{5}\\approx 0{,}45$."
  },
  {
    "id": "2H223TL46",
    "question": "Trong không gian tọa độ $Oxyz$, gọi $A$, $B$, $C$ lần lượt là hình chiếu của $M(3;3;3)$ lên các trục tọa độ $Ox$, $Oy$, $Oz$. Giả sử $H(a;b;c)$ là trực tâm tam giác $ABC$. Tính $a^2+2b^2-c^2$.",
    "answer": "2",
    "explain": "Hình chiếu của $M(3;3;3)$ lên các trục tọa độ $Ox$, $Oy$, $Oz$ lần lượt là $A(3;0;0)$, $B(0;3;0)$, $C(0;0;3)$.  Ta có $AB=AC=BC=3\\sqrt{3}$ nên $\\Delta ABC$ đều. Suy ra $H$ là trọng tâm $\\Delta ABC.$<br>  Do $H$ là trọng tâm của tam giác $ABC$ nên  \\[  x_H=\\dfrac{x_A+x_B+x_C}{3} \\text{ và } x_H=\\dfrac{y_A+y_B+y_C}{3} \\text{ và } z_H=\\dfrac{z_A+z_B+z_C}{3}  \\Leftrightarrow  x_H=1 \\text{ và } y_H=1 \\text{ và } z_H=1  \\Rightarrow H(1;1;1).  \\]  Vậy $a^2+2b^2-c^2=1^2+2\\cdot1^2-1^2=2$."
  },
  {
    "id": "2H223TL47",
    "question": "Trong không gian $Oxyz$, cho hình bình hành $ABCD$ có $A(-1;1;2)$, $B(3;5;-1)$, $C(2;-1;4)$. Tính độ dài của $\\overrightarrow{BD}$. (Kết quả làm tròn đến hàng phần chục).",
    "answer": "13{,}7",
    "explain": "Ta có $\\overrightarrow{AB}=(4;4;-3)$.<br>  Đặt $D(x;y;z)$, suy ra $\\overrightarrow{DC}=(2-x;-1-y;4-z)$.<br>  Do $ABCD$ là hình bình hành nên $\\overrightarrow{AB}=\\overrightarrow{DC}$.<br>  Khi đó  \\[2-x=4 \\text{ và } -1-y=4 \\text{ và } 4-z=-3\\Leftrightarrow x=-2 \\text{ và } y=-5 \\text{ và } z=7\\Rightarrow D(-2;-5;7).\\]  Suy ra $\\overrightarrow{BD}=(-5;-10;8)$ và $BD=\\sqrt{25+100+64}=3\\sqrt{21}\\approx13{,}7$."
  },
  {
    "id": "2H222TL48",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho tam giác $ABC$ với $A(1;2;-3)$, $B(2;5;7)$, $C(-3;1;4)$. Tìm tọa độ điểm $D$ để tứ giác $ABCD$ là hình bình hành ta được $D(a;b;c)$. Tính $a+b+c$.",
    "answer": "-12",
    "explain": "Ta có $\\overrightarrow{AD} = (a-1;b-2;c+3)$; $\\overrightarrow{BC} = (-5;-4;-3)$.<br>  Để tứ giác $ABCD$ là hình bình hành thì  $ \\overrightarrow{AD} = \\overrightarrow{BC} \\Leftrightarrow a-1 = -5 \\text{ và } b-2 = -4 \\text{ và } c+3 = -3 \\Leftrightarrow a = -4 \\text{ và } b = -2 \\text{ và } c = -6 \\Rightarrow D(-4;-2;-6). $  Do đó $a + b + c = (-4) + (-2) + (-6) = -12$."
  },
  {
    "id": "2H223TL49",
    "question": "Trong không gian $Oxyz$, cho các điểm $A(1;1;1)$, $B(2;2;1)$, $C(1;0;1)$. Góc lớn nhất trong tam giác $ABC$ có số đo bằng $a^\\circ$. Số $a$ là bao nhiêu?",
    "answer": "135",
    "explain": "Ta có $\\overrightarrow{AB} = (1;1;0) \\Rightarrow AB = \\sqrt{1^2 + 1^2 + 0^2} = \\sqrt{2}$.<br>  $\\overrightarrow{AC} = (0;-1;0) \\Rightarrow AC = \\sqrt{0^2 + (-1)^2 + 0^2} = 1$.<br>  $\\overrightarrow{BC} = (-1;-2;0) \\Rightarrow BC = \\sqrt{(-1)^2 + (-2)^2 + 0^2} = \\sqrt{5}$.<br>  Suy ra $AC &lt; AB &lt; BC$ nên $\\widehat{ABC} &lt; \\widehat{ACB} &lt; \\widehat{BAC}$ (bất đẳng thức tam giác).<br>  Do đó $\\widehat{BAC}$ là góc lớn nhất trong $\\triangle ABC$.<br>  Ta có  $ \\cos\\widehat{BAC} = \\dfrac{\\overrightarrow{AB}\\cdot\\overrightarrow{AC}}{\\left|\\overrightarrow{AB} \\right|\\cdot \\left| \\overrightarrow{AC}\\right|} = \\dfrac{1\\cdot 0 + 1\\cdot (-1) + 0\\cdot 0}{\\sqrt{2}\\cdot 1} = -\\dfrac{\\sqrt{2}}{2}.$<br>  Suy ra $\\widehat{BAC} = 135^\\circ$.<br>  Vậy $a = 135$."
  },
  {
    "id": "2H224TL50",
    "question": "Có ba lực cùng tác động vào một vật. Hai trong ba lực này hợp với nhau một góc $120^{\\circ}$ và có độ lớn lần lượt là $10$ N và $8$ N. Lực thứ ba vuông góc với mặt phẳng tạo bởi hai lực đã cho và có độ lớn $6$ N. Tính độ lớn của hợp lực của ba lực trên (làm tròn đến hàng phần trăm).<br><img src=\"data/12/2D2/im2H2/2H22_tikz_055.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "10",
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_056.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có $AC=\\sqrt{AD^2+DC^2-2\\cdot AD\\cdot DC\\cdot \\cos 60^\\circ}=\\sqrt{8^2+10^2-2\\cdot 8\\cdot 10\\cdot \\dfrac{1}{2}}=2\\sqrt{21}$.<br>  Tam giác $AHE$ vuông tại $H$ nên $AE=\\sqrt{AH^2+HE^2}=\\sqrt{6^2+84}=\\sqrt{120}$.<br>  Độ lớn của hợp lực của ba lực là<br>  $AE=\\left|\\overrightarrow{AE}\\right|=\\left|\\overrightarrow{F_1}+\\overrightarrow{F_2}+\\overrightarrow{F_3}\\right|=\\sqrt{120}\\approx 10{,}95$ N."
  },
  {
    "id": "2H222TL51",
    "question": "Trong không gian với hệ tọa độ $Oxyz$ cho hai điểm $A(4;2;1)$, $B(-2;-1;4)$. Biết tọa độ điểm $M(a;b;c)$ thỏa đẳng thức $\\overrightarrow{AM}=2\\overrightarrow{MB}$. Tính $a+b+c$.",
    "answer": "3",
    "explain": "Ta có $\\overrightarrow{AM}=(a-4;b-2;c-1)$; $\\overrightarrow{MB}=(-2-a;-1-b;4-c)$.<br>  Do $\\overrightarrow{AM}=2\\overrightarrow{MB}\\Leftrightarrow a-4=2(-2-a) \\text{ và } b-2=2(-1-b) \\text{ và } c-1=2(4-c)\\Leftrightarrow a=0 \\text{ và } b=0 \\text{ và } c=3.$<br>  Vậy $M(0;0;3)$.<br>  Suy ra $a+b+C=3$."
  },
  {
    "id": "2H223TL52",
    "question": "Trên phần mềm mô phỏng việc điều khiển drone giao hàng trong không gian $Oxyz$. Một đội gồm bốn drone giao hàng $A$, $B$, $C$, $D$ xếp đội hình bay có dạng tam giác $ABC$ và $D$ nằm trên cạnh $BC$ sao cho $BD = 4DC$. Tại thời điểm các drone có tọa độ là $A(80; 20; 80)$, $B(70; 20; 20)$, $C(420; 120; 120)$. Khoảng cách giữa drone $A$ và drone $D$ bằng bao nhiêu mét? (Kết quả làm tròn đến hàng đơn vị).  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_058.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "282",
    "explain": "Gọi $D(x_D; y_D; z_D)$ suy ra <br>  $ \\overrightarrow{BD}=(x_D-70;y_D-20,z_D-20)$, $\\overrightarrow{DC}=(420-x_D;120-y_D;120-z_D)$.<br>  Vì điểm $D$ nằm trên cạnh $BC$ và $BD=4DC$ suy ra $\\overrightarrow{BD} = 4\\overrightarrow{DC}$.<br>  $\\Leftrightarrow x_D = 350 \\text{ và } y_D =100 \\text{ và } z_D =100.$  Vậy tọa độ của drone $D$ là $D(350; 100; 100)$.<br>  Khoảng cách giữa drone $A$ và drone $D$ là  $AD = \\sqrt{(x_D-x_A)^2 + (y_D-y_A)^2 + (z_D-z_A)^2}$<br>$= \\sqrt{(350-80)^2 + (100-20)^2 + (100-80)^2}$<br>$= \\sqrt{79\\,700} \\approx 282.$  Vậy khoảng cách giữa drone $A$ và drone $D$ khoảng $282$ m."
  },
  {
    "id": "2H224TL53",
    "question": "Một vật trang trí có trọng lượng $P = 15\\sqrt{2}$ N được treo lên trần nhà bằng ba sợi dây $OA, OB,$ và $OC$ bằng nhau. Ba điểm $A, B, C$ nằm trên trần nhà và tạo thành một tam giác đều. Điểm treo $O$ là giao điểm của các sợi dây. Hệ thống nằm trong trạng thái cân bằng. Biết rằng mỗi sợi dây $OA$, $OB$, $OC$ tạo với phương thẳng đứng (tức là đường đi qua $O$ và vuông góc với mặt phẳng chứa $A$, $B$, $C$) một góc $\\alpha = 45^\\circ$. Tính lực căng của mỗi sợi dây $(T_1, T_2, T_3)$ theo đơn vị Newton.  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_059.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "5",
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_060.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi các lực căng trên ba sợi dây lần lượt là $\\overrightarrow{T_1}, \\overrightarrow{T_2}, \\overrightarrow{T_3}$ và trọng lực của vật là $\\overrightarrow{P}$.<br>  $\\overrightarrow{T}_1 = k\\overrightarrow{OA}, \\quad \\overrightarrow{T}_2 = k\\overrightarrow{OB}, \\quad \\overrightarrow{T}_3 = k\\overrightarrow{OC}$.<br>  Do hệ thống ở trạng thái cân bằng, tổng hợp các lực tác dụng lên điểm $O$ bằng véc-tơ không  $\\overrightarrow{T_1} + \\overrightarrow{T_2} + \\overrightarrow{T_3} + \\overrightarrow{P} = \\overrightarrow{0}$<br>$\\left|\\overrightarrow{T}_1 + \\overrightarrow{T}_2 + \\overrightarrow{T}_3 \\right| = 15\\sqrt{2} \\quad (k&gt;0)$<br>$k \\left| \\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} \\right| = 15\\sqrt{2}$<br>$3k \\left| \\overrightarrow{OG} \\right| = 15\\sqrt{2}$<br>$\\Rightarrow  \\left| \\overrightarrow{OG} \\right| = \\dfrac{5\\sqrt{2}}{k}$<br>$\\Rightarrow \\overrightarrow{OG} = \\dfrac{5\\sqrt{2}}{k}.$  Ta lại có $\\triangle OGA$ vuông cân tại $G$ suy ra $OA = \\dfrac{5\\sqrt{2}}{k} : \\sqrt{2} = \\dfrac{5}{k}$.<br>  Vậy lực căng của mỗi sợi dây là $5$ N."
  },
  {
    "id": "2H226TL54",
    "question": "Trong không gian với một hệ trục toạ độ cho trước (đơn vị đo lấy theo kilômét), ra-đa phát hiện một chiếc máy bay di chuyển với vận tốc và hướng không đổi từ điểm $A(800;500;7)$ đến điểm $B(940;550;8)$ trong $10$ phút. Nếu máy bay tiếp tục giữ nguyên vận tốc và hướng bay thì toạ độ của máy bay sau $5$ phút tiếp theo là $D(a;b;c)$. Giá trị của $a$ bằng bao nhiêu?  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_062.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "1100",
    "explain": "Theo đề bài, ta có $\\vec{AB}=2\\vec{BD}$.<br>  Ta có $\\vec{AB}=(140;50;1)$ suy ra $\\vec{BD}=(70;25;0{,}5)$.<br>  Do đó $C(1\\,100; 575; 9)$.<br>  Vậy $a=1\\,100$."
  },
  {
    "id": "2H223TL55",
    "question": "Cho ba điểm $A(3; -1; 2)$, $B(2; 3; -3)$, $C(-2; 1; -2)$ và mặt phẳng $(Oyz)$. Gọi $M(a; b; c)$ là điểm thuộc mặt phẳng $(Oyz)$ sao cho $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} + \\overrightarrow{MB} \\cdot \\overrightarrow{MC} + \\overrightarrow{MC} \\cdot \\overrightarrow{MA}$ có giá trị nhỏ nhất. Tính tổng $a - 2b + c$.",
    "answer": "-3",
    "explain": "Vì $M \\in (Oyz)$ nên $M(0;b;c)$.<br>  Ta có $\\overrightarrow{MA}=(3;-1-b;2-c) $, $\\overrightarrow{MB}=(2;3-b;-3-c)$, $\\overrightarrow{MC}=(-2;1-b;-2-c) $.<br>  Ta có $\\overrightarrow{MA} \\cdot \\overrightarrow{MB}= \\dfrac{1}{2}\\left(MA^2+MB^2-(\\overrightarrow{MA}-\\overrightarrow{MB})^2\\right)=\\dfrac{1}{2}\\left(MA^2+MB^2-AB^2\\right)$.<br>  Ta có $\\overrightarrow{MB} \\cdot \\overrightarrow{MC}= \\dfrac{1}{2}\\left[MB^2+MC^2-\\left(\\overrightarrow{MB}-\\overrightarrow{MC}\\right)^2\\right]=\\dfrac{1}{2}\\left(MB^2+MC^2-BC^2\\right)$.<br>  Ta có $\\overrightarrow{MC} \\cdot \\overrightarrow{MA}= \\dfrac{1}{2}\\left[MC^2+MA^2-\\left(\\overrightarrow{MC}-\\overrightarrow{MA}\\right)^2\\right]=\\dfrac{1}{2}\\left(MA^2+MC^2-AC^2\\right)$.<br>  Ta có  $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} + \\overrightarrow{MB} \\cdot \\overrightarrow{MC} + \\overrightarrow{MC} \\cdot \\overrightarrow{MA}   = \\dfrac{1}{2}\\left(2MA^2+2MB^2+2MC^2-AB^2-BC^2-AC^2\\right)$<br>$= MA^2+MB^2+MC^2-\\dfrac{1}{2}\\left(AB^2+BC^2+AC^2\\right).$  Vậy để $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} + \\overrightarrow{MB} \\cdot \\overrightarrow{MC} + \\overrightarrow{MC} \\cdot \\overrightarrow{MA}$ có giá trị nhỏ nhất thì $MA^2+MB^2+MC^2$ nhỏ nhất.<br>  Gọi $I(x;y;z)$ là điểm thỏa $\\overrightarrow{IA}+\\overrightarrow{IB}+\\overrightarrow{IC}=\\overrightarrow{0}$.<br>  Ta có $3-x+2-x-2-x=0 \\text{ và } -1-y+3-y+1-y=0 \\text{ và } 2-z-3-z-2-z=0\\Leftrightarrow x=1 \\text{ và } y=1 \\text{ và } z=-1 \\Rightarrow I(1;1;-1)$.<br>  Ta có  $MA^2 + MB^2 + MC^2 = \\left(\\overrightarrow{MI} + \\overrightarrow{IA}\\right)^2  + \\left(\\overrightarrow{MI} + \\overrightarrow{IB}\\right)^2  + \\left(\\overrightarrow{MI} + \\overrightarrow{IC}\\right)^2$<br>$= 3MI^2 + IA^2 + IB^2 + IC^2  + 2\\cdot \\overrightarrow{MI} \\cdot  \\left(\\overrightarrow{IA} + \\overrightarrow{IB} + \\overrightarrow{IC}\\right)$<br>$= 3MI^2 + IA^2 + IB^2 + IC^2.$  Vậy để $MA^2+MB^2+MC^2$ nhỏ nhất thì $MI$ nhỏ nhất. Khi đó, $M$ là hình chiếu của $I$ lên mặt phẳng $(Oyz)$.<br>  Vậy $M(0;1;-1)$. Suy ra $a-2b+c=0-2\\cdot 1-1=-3$."
  },
  {
    "id": "2H224TL56",
    "question": "Cho biết bốn đoạn thẳng nối từ một đỉnh của tứ diện đến trọng tâm mặt đối diện luôn cắt nhau tại một điểm gọi là trọng tâm của tứ diện đó.<br>  Một phân tử metan CH$_4$ được cấu tạo bởi bốn nguyên tử hydrogen ở các đỉnh của một tứ diện đều và một nguyên tử carbon ở trọng tâm của tứ diện.<br>  Góc liên kết là góc tạo bởi liên hết $\\mathrm{H} - \\mathrm{C} - \\mathrm{H}$ là góc giữa các đường nối nguyên tử carbon với hai trong số các nguyên tử hydrogen. Biết cosin của góc liên kết có dạng $\\dfrac{m}{n}$ (với $n \\in \\mathbb{N}^*$; $m \\in \\mathbb{Z}$ và $\\dfrac{m}{n}$ là phân số tối giản). Tính $m+2n+1$.  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_071.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "6",
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_072.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét tứ diện đều $ABCD$ có $G$ là trọng tâm. Ta cần tìm $\\cos\\widehat{CGD}$.   Gọi $O$ là trọng tâm tam giác $BCD$, $E$ là trung điểm $CD$. Đặt $CD=2a$ ($a&gt;0$).   Hai tam giác đều $BCD$ và $ACD$ bằng nhau lần lượt có $BE$, $AE$ là đường cao nên $BE=AE=CD\\dfrac{\\sqrt{3}}{2}=a\\sqrt{3}$.  Do $O$ là trọng tâm tam giác $BCD$ nên $OE=\\dfrac{1}{3}BE=\\dfrac{a\\sqrt{3}}{3}$.  Áp dụng định lí Pythagore vào tam giác $AOE$ vuông tại $O$ ta được $AO=\\sqrt{AE^2-OE^2}=\\dfrac{2a\\sqrt{6}}{3}$.  Ta có $\\vec{GA}+\\vec{GB}+\\vec{GC}+\\vec{GD}=\\vec{0}$ nên $\\vec{GA}=\\vec{BG}+\\vec{CG}+\\vec{DG}=3\\vec{OG}$. Suy ra $GA=3OG$.  Do đó $AG=\\dfrac{3}{4}AO=\\dfrac{a\\sqrt{6}}{2}$. Dễ thấy $GA=GB=GC=GD$ nên $GC=GD=\\dfrac{a\\sqrt{6}}{2}$.  Áp dụng định lý côsin vào tam giác $GCD$ ta được $\\cos \\widehat{CGD}=\\dfrac{GC^2+GD^2-CD^2}{2\\cdot CG\\cdot CD}=-\\dfrac{1}{3}$.  Do đó $m=-1$, $n=3$ nên $m+2n+1=6$."
  },
  {
    "id": "2H226TL57",
    "question": "Trong không gian với một hệ trục toạ độ cho trước (đơn vị đo lấy theo kilômét), rađa phát hiện một chiếc máy bay di chuyển với vận tốc và hướng không đổi từ điểm $A(100;200;8)$ đến điểm $B(140;250;9)$ trong $10$ phút. Nếu máy bay tiếp tục giữ nguyên vận tốc và hướng bay thì tọa độ của máy bay sau $10$ phút tiếp theo $D(x;y;z)$. Khi đó, giá trị của biểu thức $x+y+z$ bằng bao nhiêu?  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_073.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "490",
    "explain": "Ta có $\\overrightarrow{BD}=(x-140;y-250;z-9)$ và $\\overrightarrow{AB}=(40;50;1)$. <br>  Do máy bay tiếp tục giữ nguyên vận tốc và hướng bay nên $\\overrightarrow{AB}$, $\\overrightarrow{BD}$ cùng hướng và $AB=BD$. <br>  Do đó  \\[\\overrightarrow{BD}=\\overrightarrow{AB}\\Leftrightarrow x-140=40 \\text{ và } y-250=50 \\text{ và } z-9=1\\Leftrightarrow x=180 \\text{ và } y=300 \\text{ và } z=10.\\]  Vậy $x+y+z=180+300+10=490$."
  },
  {
    "id": "2H224TL58",
    "question": "Trong quá trình cất cánh của một máy bay không người lái: Ban đầu máy bay ở vị trí $A$, máy bay cách vị trí người điều khiển $300$ m về phía nam và $200$ m về phía đông, đồng thời cách mặt đất $100$ m. Một phút sau, máy bay ở vị trí $B$ cách vị trí người điều khiển $2\\,100$ m về phía nam và $1\\,200$ m về phía đông, đồng thời cách mặt đất $250$ m. Chọn hệ trục tọa độ $Oxyz$ với gốc tọa độ $O$ trùng với vị trí người điều khiển, mặt phẳng $(Oxy)$ trùng với mặt đất, trục $Ox$ có hướng trùng với hướng nam, trục $Oy$ có hướng trùng với hướng đông, trục $Oz$ vuông góc với mặt đất hướng lên bầu trời, mỗi đơn vị trên trục tương úng với $1$ m. Biêt máy báy chuyền động thẳng đều từ $A$ đến $B$, tốc độ trung bình của máy bay không người lái đó trong quá trình đi chuyển là bao nhiêu m/s (làm tròn kết quà đến hàng đơn vị).<br><img src=\"data/12/2D2/im2H2/2H22_tikz_074.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "34",
    "explain": "Theo giả thuyết thì $A(300;200;100)$ và $B(2\\,100;1\\,200;250)$.<br>  Khi đó $AB=\\sqrt{(2\\,100-300)^2+(1\\,200-200)^2+(250-100)^2}=50\\sqrt{1\\,705}$ m.<br>  Tốc độ trung bình của máy bay di chuyển từ $A$ đến $B$ là $v=\\dfrac{AB}{60}=34$ m/s."
  },
  {
    "id": "2H223TL59",
    "question": "Cho hình lăng trụ $ABC.A'B'C'$. Gọi $M$ là trung điểm cạnh $CC'$. Đặt $\\overrightarrow{AB}=\\overrightarrow{a}$, $\\overrightarrow{AC}=\\overrightarrow{b}$, $\\overrightarrow{AA'}=\\overrightarrow{c}$. Biểu diễn vectơ $\\overrightarrow{u}=10\\cdot \\overrightarrow{AM}$ theo ba vectơ $\\overrightarrow{a}$, $\\overrightarrow{b}$ và $\\overrightarrow{c}$ ta được $\\overrightarrow{u}=\\alpha \\overrightarrow{a} + \\beta \\overrightarrow{b} + \\gamma \\overrightarrow{c}$; $\\alpha$, $\\beta$, $\\gamma \\in \\mathbb{R}$. Tính giá trị của $T=\\alpha + \\beta + \\gamma$.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_075.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "15",
    "explain": "Ta có $M$ là trung điểm của $CC'$ nên  $\\overrightarrow{MC} + \\overrightarrow{MC'}= \\overrightarrow{0}$<br>$\\Leftrightarrow \\overrightarrow{AC}- \\overrightarrow{AM} + \\overrightarrow{AC'}- \\overrightarrow{AM}= \\overrightarrow{0}$<br>$\\Leftrightarrow \\overrightarrow{AM}=\\dfrac{1}{2}\\overrightarrow{AC'} + \\dfrac{1}{2}\\overrightarrow{AC}$<br>$\\Leftrightarrow \\overrightarrow{AM}=\\dfrac{1}{2}\\overrightarrow{AA'}+ \\dfrac{1}{2} \\overrightarrow{AC} + \\dfrac{1}{2} \\overrightarrow{AC}.$<br>$\\Leftrightarrow \\overrightarrow{AM}=\\dfrac{1}{2} \\overrightarrow{AA'} + \\overrightarrow{AC}.$<br>$\\Leftrightarrow \\overrightarrow{AM}= 0\\cdot \\overrightarrow{a} + 1\\cdot \\overrightarrow{b} + \\dfrac{1}{2}\\cdot \\overrightarrow{c}$<br>$\\Leftrightarrow 10\\cdot\\overrightarrow{AM}= 0\\cdot \\overrightarrow{a} + 10\\cdot \\overrightarrow{b} + 5\\cdot \\overrightarrow{c}$<br>$\\Leftrightarrow \\overrightarrow{u}=0\\cdot \\overrightarrow{a} + 10\\cdot \\overrightarrow{b} + 5\\cdot \\overrightarrow{c}.$  Suy ra $\\alpha=0$; $\\beta=10$; $\\gamma=5$.<br>  Vậy $T=\\alpha + \\beta + \\gamma = 0+10+5 = 15$."
  },
  {
    "id": "2H224TL60",
    "question": "Một người đứng ở mặt đất điều khiển hai flycam để phục vụ trong một chương trình của đài truyền hình. Flycam I ở vị trí $A$ cách vị trí điều khiển $130~ \\mathrm{m}$ về phía nam và $170 ~ \\mathrm{m}$ về phía đông, đồng thời cách mặt đất $55 ~ \\mathrm{m}$. Flycam II ở vị trí $B$ cách vị trí điều khiển $170 ~ \\mathrm{m}$ về phía bắc và $216~ \\mathrm{m}$ về phía tây, đồng thời cách mặt đất $60 ~ \\mathrm{m}$. Chọn hệ trục toạ độ $O x y z$ với gốc $O$ là vị trí người điều khiển, mặt phẳng $(O x y)$ trùng với mặt đất, trục $O x$ có hướng trùng với hướng nam, trục $O y$ trùng với hướng đông, trục $O z$ vuông góc với mặt đất hướng lên bầu trời, đơn vị trên mỗi trục tính theo mét. Khoảng cách giữa hai flycam (làm tròn đến hàng đơn vị của mét) bằng bao nhiêu?",
    "answer": "489",
    "explain": "Theo giả thiết đề cho, ta có:<br>  Tọa độ của flycam tại vị trí điểm $A$ là $(130; 170; 55)$.<br>  Tọa độ của flycam tại vị trí điểm $B$ là $(-170 ;-216 ; 60)$.<br>  Khoảng cách giữa hai flycam bằng khoảng cách giữa hai điểm $A$ và $B$, ta có:  $  A B=\\sqrt{(-170-130)^2+(-216-170)^2+(60-55)^2}=\\sqrt{239021} \\approx <br>  489 ~ (\\mathrm{m}) .  $"
  },
  {
    "id": "2H226TL61",
    "question": "Một đường dây điện được nối từ một nhà máy điện ở $A$ (nằm tại bờ biển là đường thẳng $AB$) đến một hòn đảo $C$, khoảng cách ngắn nhất từ đảo về bờ biển là đoạn $BC$ dài $1$ km, khoảng cách từ $B$ đến $A$ là $4 km$ được minh họa bằng hình vẽ dưới đây.  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_079.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Biết rằng mỗi km dây điện đặt dưới nước chi phí mất $50$ triệu đồng, còn đặt dưới đất chi phí mất $30$ triệu đồng. Hỏi điểm $M$ trên bờ cách $A$ bao nhiêu km để khi mắc dây điện từ $A$ qua $M$ rồi đến $C$ có chi phí là ít nhất?",
    "answer": "160",
    "explain": "Đặt $AS=x$ với $0&lt;x&lt;4$, khi đó $BS=4-x$ và $CS=\\sqrt{BC^2+BS^2}=\\sqrt{1+(4-x)^2}$.<br>  Chi phí lắp đặt dây điện từ $A$ đến $S$ là $P_1=30x$.<br>  Chi phí lắp đặt dây diện từ $C$ đến $S$ là $P_2=50\\sqrt{1+(4-x)^2}$.<br>  Tổng chi phí lắp đặt dây điện là $P=P_1+P_2=30x+50\\sqrt{1+(4-x)^2}$.<br>  Xét hàm $f(x)=30x+50\\sqrt{1+(4-x)^2}$ trên khoảng $(0,4)$.<br>  Ta có $f'(x)=30-\\dfrac{50(4-x)}{\\sqrt{x^2-8x+17}}$, khi đó   $f'(x)=0\\Leftrightarrow 5(4-x)=3\\sqrt{x^2-8x+17}\\Leftrightarrow x=\\dfrac{13}{4}.$  Bảng biến thiên của hàm số $f(x)$ như sau  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_080.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy để chi phí mắc dây diện thấp nhất là $160$ triệu."
  },
  {
    "id": "2H223TL63",
    "question": "Hình bên dưới minh họa một cái lều hai mái là hai hình chữ nhật giống nhau trong không gian $O x y z$, với điểm $A$ nằm trên $O x$, điểm $C$ nằm trên $O y$. Biết các kích thước của mái lều là $S A=5 \\mathrm{~m}, AB=10 \\mathrm{~m}$, độ cao từ $S$ xuống mặt đất là $4 m$. Bạn An muốn trang trí chiếc lều bằng cách treo các sợi dây cờ trang trí từ các góc lều $O, A, B, C$ đến đuôi một chiếc đèn treo từ vị trí chính giữa của $S Q$, cách $SQ$ $50 \\mathrm{~cm}$ Hỏi tổng chiều dài sợi dây cờ trang trí tối thiểu bạn An cần mua là bao nhiêu mét?<br><img src=\"data/12/2D2/im2H22/dlts_12_DLTS10_016.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "28",
    "explain": "<br><img src=\"data/12/2D2/im2H22/dlts_12_DLTS10_017.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $I$ là trung điểm của $A C$ và $B O$;   $H$ là trung điểm của $O A$;   $E$ là vị trí treo đèn, cách $S Q$ một khoảng $50 \\mathrm{~cm}(0.5 \\mathrm{~m})$.  <br>  Tính độ dài $O B$  $  O B=\\sqrt{O A^2+A B^2}=\\sqrt{6^2+10^2}=\\sqrt{36+100}=2 \\sqrt{34}  $  Do $I$ là trung điểm của $B O$, ta có:  $  I O=I A=I C=I B=\\dfrac{1}{2} O B=\\sqrt{34}  $  Vì $H, I$ là trung điểm của $O A, O B$, ta có $H I \\| A B$ và $H I \\| S Q$ và $D$ là trung điểm của $SQ$  $  H I=\\frac{1}{2} A B=\\frac{1}{2} S Q=S D  $  Giả sử đèn được treo ở $E$  $  \\begin{aligned}  & \\rightarrow D E=30(\\mathrm{~cm})=0,3(\\mathrm{~m}) \\\\  & \\rightarrow E I=4-0,5=3,5 \\\\  & \\rightarrow E A=\\sqrt{3,5^2+(\\sqrt{34})^2} \\\\  & \\rightarrow \\text { Độ dài dây đèn là } EA\\cdot 4 \\approx 27,2(\\mathrm{~m})  \\end{aligned}  $  Vậy phải mua tối thiểu 28 $m$ dây."
  },
  {
    "id": "2H223TL64",
    "question": "Những căn nhà gỗ trong hình được phác thảo dưới dạng một hình lăng trụ đứng tam giác $OAB.O'A'B'$. Với hệ trục toạ độ $Oxyz$ thể hiện như hình vẽ, hai điểm $A'$ và $B'$ có tọa độ lần lượt là $(240; 450; 0)$ và $(120; 450; 300)$. Mỗi căn nhà gỗ có chiều dài là $a$ cm, chiều rộng là $b$ cm, mỗi cạnh bên của mặt tiền có độ dài là $c$ cm. Tính $a+b+c$ \\textit{(làm tròn đến hàng đơn vị)<br><img src=\"data/12/2D2/im2H22/dlts_12_DLTS19_011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "2",
    "explain": "Vì $A'(240; 450; 0)$ nên khoảng cách từ $A'$ đến các trục $Ox$, $Oy$ lần lượt là $450$ cm và $240$ cm.<br>  Suy ra $A'A =450$ cm và $A'O' =240$ cm.<br>  Từ giả thiết ta có $\\overrightarrow{A'B'} =(-120; 0; 300)$.<br>  Do đó $A'B' =\\left|\\overrightarrow{A'B'}\\right| =\\sqrt{(-120)^2 +0 +300^2} =60 \\sqrt{29} \\approx 323$ cm.<br>  Vì $O'O =A'A=450$ cm và $O'$ nằm trên trục $Oy$ nên $O(0; 450; 0)$.<br>  Do đó $\\overrightarrow{O'B'} =(120; 0; 300)$ và $O'B' =\\left|\\overrightarrow{O'B'}\\right |=\\sqrt{120^2 +0 +300^2} =60 \\sqrt{29} \\approx 323$ cm.<br>  Vậy mỗi căn nhà gỗ có chiều dài là $a =450$ cm , chiều rộng là $b =240$ cm và mỗi cạnh bên của mặt tiền có độ dài là $c =323$ cm.<br>  Suy ra $a + b + c = 1013$."
  },
  {
    "id": "2H222TL65",
    "question": "Với hệ trục tọa độ $Oxyz$ sao cho $O$ nằm trên mặt nước, mặt phẳng $Oxy$ là mặt nước, trục $Oz$ hướng lên trên (đơn vị đo: mét), một con chim bói cá đang ở vị trí cách mặt nước $2$ m, cách mặt phẳng $(Oxz)$, $(Oyz)$ lần lượt là $3$ m và $1$ m phóng thẳng xuống vị trí con cá, biết con cá cách mặt nước $50$ cm, cách mặt phẳng $(Oxz)$, $(Oyz)$ lần lượt là $1$ m và $1{,}5$ m. Tọa độ điểm $B$ lúc chim bói cá vừa tiếp xúc với mặt nước là $(a; b; c)$. Tính $T = 5a + 15b + 25c$.<br><img src=\"data/12/2D2/im2H22/dlts_12_DLTS36_016.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "28",
    "explain": "Gọi $A$ là vị trí con cá, $C$ là vị trí con chim bói cá, điểm $B$ là điểm lúc chim bói cá vừa tiếp xúc với mặt nước (xem hình vẽ dưới).  <br>- Do chim bói cá cách mặt phẳng $(Oxz)$ và $(Oyz)$ lần lượt $3$ m và $1$ m, đồng thời cách mặt nước $2$ m nên điểm $C$ có toạ độ $(1;3;2)$.<br>- Do con cá cách mặt phẳng $(Oxz)$ và $(Oyz)$ lần lượt $1$ m và $1{,}5$ m và cách mặt nước $0{,}5$ m nên điểm $A$ có toạ độ $(1{,}5;1;-0{,}5)$.<br>- Khoảng cách từ chim bói cá đến con cá là độ dài đoạn $AC$.<br>- Ta có $\\vec{AC}=(-0{,}5;2;2{,}5)$.  Vì $B \\in (Oxy)$ nên $B$ có toạ độ $\\left(x_B;y_B;0\\right)$.<br>  Ta có $\\vec{BC}=\\left(1-x_B;3-y_B;2-0\\right)=\\left(1-x_B;3-y_B;2\\right)$.<br>  Vì $A$, $B$, $C$ thẳng hàng nên $\\vec{AC}=k\\vec{BC}$ hay $k\\left(1-x_B\\right)=-0{,}5 \\text{ và } k\\left(3-y_B\\right)=2 \\text{ và } 2k=2{,}5 \\Leftrightarrow k=\\dfrac{5}{4} \\text{ và } x_B=\\dfrac{7}{5} \\text{ và } y_B=\\dfrac{7}{5}.$<br>  Vậy $T = 5a + 15b + 25c = 5 \\cdot 1{,}4 + 15 \\cdot 1{,}4 + 25 \\cdot 0 = 28$."
  },
  {
    "id": "2H223TL66",
    "question": "Trong không gian $Oxyz$, cho điểm $A(1;1;0)$, $B(-1;1;2)$, $C(3;1;4)$. Biết $ D(a;b;c) $ thỏa mãn $ABCD$ là hình bình hành. Tính $ a^2+b^2+c^2 $.",
    "answer": "30",
    "explain": "Gọi $D(x_D;y_D;z_D)$, ta có $ABCD$ là hình bình hành nên $\\vec{AD}=\\vec{BC}\\Leftrightarrow (x_D-1;y_D-1;z_D)=(4;0;2)\\Leftrightarrow D(5;1;2)$.<br>  Vậy $ a^2+b^2+c^2=30 $."
  },
  {
    "id": "2H223TL67",
    "question": "Trong không gian $Oxyz$, cho hình lăng trụ tam giác $A B C.A' B' C'$ có $A(1 ; 0 ; 2)$, $B(3 ; 2 ; 5)$, $C'(11 ;-3 ; 8)$. Điểm $D'(a;b;c)$ sao cho $A B C D . A' B' C' D'$ là hình hộp. Tính $ a+b+c $.<br><img src=\"data/12/2D2/im2H22/dlts_12_DLTS6_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "9",
    "explain": "Vì $A B CD . A' B' C'D'$ là hình hộp nên $ABC'D'$ là hình bình hành, suy ra $\\overrightarrow{C'D'}=\\overrightarrow{B A}$.<br>  Do đó $x_D'-11=-2 \\text{ và } y_D'+3=-2 \\text{ và } z_D'-8=-3$ hay $x_D'=9$, $y_D'=-5$ và $z_D'=5$.<br>  Suy ra $D'(9;-5;5)$.<br>   Vậy $ a+b+c=9 $."
  },
  {
    "id": "2H224TL68",
    "question": "Ở một sân bay, vị trí của máy bay được xác định bởi điểm $M$ trong không gian $Oxyz$ như hình bên. Gọi $H$ là hình chiếu vuông góc của $M$ xuống mặt phẳng $(Oxy)$. Cho biết $OM = 50$, $\\left(\\overrightarrow{i},\\overrightarrow{OH}\\right) = 64^\\circ$, $\\left(\\overrightarrow{OH},\\overrightarrow{OM}\\right) = 48^\\circ$. Biết toạ độ của điểm $M$ là $ \\left(a;b;c\\right) $, $ a $, $ b $, $ c $ được làm tròn đến hàng phần chục. Tính $ a+b-c $.<br><img src=\"data/12/2D2/im2H22/dlts_12_DLTS6_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "7,6",
    "explain": "Tam giác $OMH$ vuông tại $H$, $OM = 50$; $\\widehat{MOH} = 48^\\circ$ nên ta có $OH = OM\\cdot \\cos 48 \\approx 33{,}5$ và $OC = MH = OM \\cdot \\sin 48 \\approx 37{,}2$.<br>  Tam giác $OAH$ vuông tại $A$, $OH = 33{,}5$; $\\widehat{AOH} = 64^\\circ$ nên ta có $OA = OH\\cdot \\cos 64 \\approx 14{,}7$,<br>  $OB = AH = OH\\cdot \\sin 64 \\approx 30{,}1$.<br>  Suy ra   $\\overrightarrow{OM} = \\overrightarrow{OC} + \\overrightarrow{OH} = \\overrightarrow{OC} + \\overrightarrow{OA}+\\overrightarrow{OB}$<br>$= 14{,}7\\overrightarrow{i}+30{,}1\\overrightarrow{j}+37{,}2\\overrightarrow{k}.$  $\\Rightarrow M(14{,}7; 30{,}1; 37{,}2)$ và $ a+b-c=7{,}6 $."
  },
  {
    "id": "2H223TL69",
    "question": "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(0;2;2)$, $C(4;-1;2)$; $ AB= \\dfrac{15}{4}$, $ AC=5 $. Tìm cao độ của điểm $D$ là chân đường phân giác trong vẽ từ đỉnh $A$ của tam giác $ABC$.<br><img src=\"data/12/2D2/im2H22/dlts_12_DLTS6_006.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "2",
    "explain": "Theo tính chất chân đường phân giác ta có $\\dfrac{DB}{DC}=\\dfrac{AB}{AC}=\\dfrac{3}{4}$, suy ra $\\overrightarrow{DB}=-\\dfrac{3}{4}\\overrightarrow{DC}\\Leftrightarrow x_B-x_D=-\\dfrac{3}{4}\\left(x_C-x_D\\right) \\text{ và } y_B-y_D=-\\dfrac{3}{4}\\left(y_C-y_D\\right) \\text{ và } z_B-z_D=-\\dfrac{3}{4}\\left(z_C-z_D\\right)\\Leftrightarrow D(3;-1;2).$"
  },
  {
    "id": "2H223TL70",
    "question": "Trong không gian $Oxyz$, cho $A(1;0;0)$, $B(2;3;-1)$, $C(0;6;7)$ và gọi $M$ là điểm di động trên trục $Oy$. Tìm tung độ của điểm $M$ để $P = \\left|\\vec{MA}+\\vec{MB}+\\vec{MC}\\right|$ đạt giá trị nhỏ nhất.",
    "answer": "3",
    "explain": "$G$ là trọng tâm tam giác $ABC$, tọa độ $G(1;3;2)$.<br>  Gọi $M(0;y;0) \\in Oy$, ta có  $P=\\left|\\vec{MA}+\\vec{MB}+\\vec{MC}\\right| = \\left|3\\vec{MG}\\right| = 3MG$.<br>  Để $P_{\\min} \\Leftrightarrow MG_{\\min} \\Leftrightarrow M$ là hình của $G$ lên trục $Oy$. <br>Khi đó $M$ có tọa độ $(0;3;0)$."
  },
  {
    "id": "2H223TL71",
    "question": "Trong không gian $Oxyz$, cho điểm $A(0;-2;-3), B(-4;-4;1), C(2;-3;3)$. Giả sử điểm $M(a;0;c)$ trong mặt phẳng $Oxz$ thỏa mãn $P=MA^2+MB^2+2MC^2$ đạt giá trị nhỏ nhất. Tính $ a^2-c^2 $.",
    "answer": "-1",
    "explain": "Giả sử $ I $ thỏa mãn $ \\overrightarrow{IA} +\\overrightarrow{IB} +2\\overrightarrow{IC} =\\overrightarrow{0}$.<br>  Khi đó tọa độ điểm $ I $ là $ \\left(0;-3;1\\right) $ và $ P=4MI^2+ IA^2+IB^2+2IC^2$.<br>  Vì $ I $ cố định nên $ P $ đạt giá trị nhỏ nhất khi $ MI $ nhỏ nhất, hay $ M $ là hình chiếu của $ I $ trên $ (Oxz) $.<br>  Vậy tọa độ điểm $M$ là $M(0; 0; 1).$"
  },
  {
    "id": "2H223TL1",
    "question": "Cho hình chóp $S.ABC$ có $SA=4$ và $SA \\perp (ABC)$. Tam giác $ABC$ vuông tại $C$ có cạnh $BC$ bằng $3$. Tính khoảng cách giữa $SB$ và $AC$.<br><img src=\"data/12/2H2/im2H22/loc8_TT_KSCL_Cum_lien_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "2{,}4",
    "explain": "Chọn hệ trục tọa độ $Oxyz$ như hình vẽ, với $C$ trùng với gốc tọa độ $O(0;0;0)$.<br>  Các tia $CB$, $CA$, $Cz$ lần lượt nằm trên các trục $Ox$, $Oy$, $Oz$ ($Cz \\parallel AS$).<br>  Đặt $CA = a$ ($a &gt; 0$).<br>  Khi đó ta có  $C(0;0;0)$; $S(0;a;4)$; $A(0;a;0)$; $B(3;0;0)$.<br>  Ta có các vectơ  <br>- $\\overrightarrow{SB} = (3;-a;-4)$.<br>- $\\overrightarrow{AC} = (0;-a;0)$.<br>- $\\overrightarrow{SC} = (0;-a;-4)$.  Tích có hướng của hai vectơ $\\overrightarrow{SB}$ và $\\overrightarrow{AC}$ là  $\\left[ \\overrightarrow{SB}, \\overrightarrow{AC} \\right] = (-4a;0;-3a).$  Tích hỗn tạp $\\left[ \\overrightarrow{SB}, \\overrightarrow{AC} \\right] \\cdot \\overrightarrow{SC} = 0 + 0 + 12a = 12a$.<br>  Khoảng cách giữa hai đường thẳng chéo nhau $SB$ và $AC$ là  $\\mathrm{d}(SB,AC) = \\dfrac{\\left| \\left[ \\overrightarrow{SB}, \\overrightarrow{AC} \\right] \\cdot \\overrightarrow{SC} \\right|}{\\left| \\left[ \\overrightarrow{SB}, \\overrightarrow{AC} \\right] \\right|}$<br>$= \\dfrac{12|a|}{\\sqrt{16a^2 + 9a^2}} = \\dfrac{12|a|}{5|a|} = \\dfrac{12}{5} = 2{,}4.$"
  },
  {
    "id": "2H223TL72",
    "question": "Một chú chim bồ câu đang ở vị trí $M$ được mô hình hóa trong không gian $Oxyz$ như hình vẽ sau.  Gọi $H$ là hình chiếu của $M$ xuống mặt phẳng $(Oxy)$. Biết $OM=50\\sqrt{2}$, $\\left(\\overrightarrow{i},\\overrightarrow{OH}\\right)=60^{\\circ}$ và $\\left(\\overrightarrow{OH},\\overrightarrow{OM}\\right)=45^{\\circ}$. Nếu điểm $M\\left(a;b;c\\right)$ thì giá trị của $a+b\\sqrt{3}+c$ bằng bao nhiêu?<br><img src=\"data/12/2H2/im2H22/loc8_TT_KSCL_THPT_Le__011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "150",
    "explain": "Tam giác $OMH$ vuông cân tại $H$ nên $MH=OH=\\dfrac{OM}{\\sqrt{2}}=\\dfrac{50\\sqrt{2}}{\\sqrt{2}}=50$.<br>  Tam giác $OAH$ vuông tại $A$ nên $OA=OH\\cdot \\cos 60^{\\circ}=50\\cdot \\dfrac{1}{2}=25$.<br>  Tam giác $OBH$ vuông tại $B$ nên $OB=OH\\cdot \\sin 60^{\\circ}=50\\cdot \\dfrac{\\sqrt{3}}{2}=25\\sqrt{3}$.<br>  Do đó $M\\left(25;25\\sqrt{3};50\\right)$ suy ra $a=25 \\text{ và } b=25\\sqrt{3} \\text{ và } c=50.$<br>  Vậy $a+b\\sqrt{3}+c=25+25\\sqrt{3}\\cdot \\sqrt{3}+50=150$."
  },
  {
    "id": "2H226TL3",
    "question": "Một chiếc máy bay đang bay trong hệ trục tọa độ $Oxyz$ với mặt phẳng $(Oxy)$ là mặt đất như hình vẽ bên. Biết rằng khi đang ở độ cao $8\\,000$ mét so với mặt đất (vị trí $A$) thì máy bay chuyển động đều với vận tốc $\\overrightarrow{v}=(100;110;200)$ (đơn vị m/s). Hỏi sau $30$ giây thì máy bay đã lên đến độ cao bao nhiêu km so với mặt đất?<br><img src=\"data/12/2H2/im2H22/loc8_TT_QV1_TT1_LVT_B_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "14",
    "explain": "Sau $30$ giây, vectơ độ dời của máy bay là \\[\\overrightarrow{AB}=30\\overrightarrow{v}=(3\\,000;3\\,300;6\\,000). \\] Độ cao tăng thêm là \\[\\Delta z =z_B-z_A= 6\\,000\\text{ m}. \\] Ban đầu máy bay ở độ cao $z_A=8\\,000$ mét nên độ cao sau $30$ giây là \\[z_B=8\\,000+6\\,000=14\\,000\\text{ m}=14\\text{ km}. \\] Vậy sau $30$ giây máy bay ở độ cao $14$ km."
  },
  {
    "id": "2H223TL4",
    "question": "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(-4;-1;2)$, $B(3;5;-6)$ và $C(a;b;c)$. Biết trung điểm cạnh $AC$ thuộc trục tung, trung điểm cạnh $BC$ thuộc mặt phẳng $(Oxz)$. Tính $T=2a+b-c$.",
    "answer": "5",
    "explain": "Gọi $M$ là trung điểm cạnh $AC \\Rightarrow M\\left(\\dfrac{a-4}{2}; \\dfrac{b-1}{2}; \\dfrac{c+2}{2}\\right)$.<br> Vì $M \\in Oy \\Rightarrow \\dfrac{a-4}{2} = 0, \\text{ và } \\dfrac{c+2}{2} = 0 \\Rightarrow a = 4, \\text{ và } c = -2.$<br> Gọi $N$ là trung điểm cạnh $BC \\Rightarrow N\\left(\\dfrac{a+3}{2}; \\dfrac{b+5}{2}; \\dfrac{c-6}{2}\\right)$.<br> Vì $N \\in (Oxz)$ nên $\\dfrac{b+5}{2} = 0 \\Rightarrow b = -5$.<br> Do đó $T = 2\\cdot 4 + (-5) - (-2) = 5.$"
  }
];
