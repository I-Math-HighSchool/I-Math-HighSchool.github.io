// =========================================================================
// KHỐI DỮ LIỆU: 2H51 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai2H51 = [
  {
    "id": "2H516DS1",
    "question": "Cho mặt phẳng $(P)\\colon 2x+y-z+4=0$ và ba điểm $A(-1;-2; 0)$, $B(0; 0; 4)$, $C(1; 0; 5)$.",
    "subQuestions": [
      {
        "text": "Vectơ pháp tuyến của mặt phẳng $(P)$ là $\\vec{n}=(2; 1;-1)$",
        "answer": true
      },
      {
        "text": "Góc giữa hai mặt phẳng $(P)$ và $(Oyz)$ tính theo độ làm tròn đến hàng đơn vị là $48^{\\circ}$",
        "answer": false
      },
      {
        "text": "Mặt phẳng qua ba điểm $A, B, C$ là xác định duy nhất",
        "answer": true
      },
      {
        "text": "Điểm $M\\in (Oxz)$ sao cho $\\left|\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}\\right|$ đạt giá trị nhỏ nhất có tọa độ là $M(-3; 0; 2)$",
        "answer": false
      }
    ],
    "explain": "<br>- Mặt phẳng $(P)$ có một vectơ pháp tuyến là $\\vec{n}=(2; 1;-1)$.<br>- Mặt phẳng $(Oyz)$ có một vectơ pháp tuyến là $(1;0;0)$. Gọi $\\alpha$ là góc giữa $(P)$ và $(Oyz)$. Ta có $\\cos\\alpha=\\dfrac{|2|}{\\sqrt{6}}$ suy ra $\\alpha\\approx 35^\\circ$.<br>- Ta có $\\overrightarrow{AB}=(1;2;4)$, $\\overrightarrow{AC}=(2;2;5)$ suy ra $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ không cùng phương hay $A,B,C$ không thẳng hàng. Do đó có duy nhất một mặt phẳng đi qua ba điểm $A$, $B$, $C$.<br>- Với $I\\left(0;-\\dfrac{2}{3};3\\right)$ ta có $\\overrightarrow{IA}+\\overrightarrow{IB}+\\overrightarrow{IC}=\\vec{0}$. Khi đó $\\left|\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}\\right|=3\\left|\\overrightarrow{MI}\\right|$.<br>  Suy ra $\\left|\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}\\right|$ nhỏ nhất khi $\\left|\\overrightarrow{MI}\\right|$ nhỏ nhất, suy ra $MI\\perp (Oxz)$ hay $M$ là hình chiếu của $I$ lên $(Oxz)$. Vậy $M(0;0;3)$."
  },
  {
    "id": "2H511DS2",
    "question": "Trong không gian $(Oxyz)$ cho hai điểm $A(1 ;-2 ; 3)$ và $B(2 ; 1 ;-3)$ và mặt phẳng $(\\alpha)$ có phương trình $2 x-y+2 z-2025=0$",
    "subQuestions": [
      {
        "text": "Điểm $M(1 ;-2024 ;-1)$ là một điểm thuộc mặt phẳng",
        "answer": false
      },
      {
        "text": "Một vec-tơ pháp tuyến của mặt phẳng $(\\alpha)$ là $\\vec{n}=(2 ;-1 ; 2)$",
        "answer": true
      },
      {
        "text": "Phương trình mặt phẳng đi qua $B$ và song song với mặt phẳng $(\\alpha)$ có dạng $a x+y+b z+c=0$. Khi đó $a+b+c=-7$",
        "answer": true
      },
      {
        "text": "Phương trình mặt phẳng đi qua $A$ và vuông góc với đường thẳng $AB$ có dạng là $x+3 y-6 z-23=0$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.  Thay tọa độ của $M(1 ;-2024 ;-1)$ vào phương trình mặt phẳng $(\\alpha) \\colon 2x-y+2z-2025=0$, ta được  $  2+2024-2-2025 = 0 \\quad \\text{(sai)}.  $  Do đó điểm $M(1 ;-2024 ;-1)$ không thuộc mặt phẳng $(\\alpha)$.<br>- <strong>Đúng</strong>. Một vec-tơ pháp tuyến của mặt phẳng $(\\alpha)$ là $\\vec{n}=(2 ;-1 ; 2)$.<br>- <strong>Đúng</strong>. Phương trình mặt phẳng đi qua $B$ và song song với mặt phẳng $(\\alpha)$ có dạng $(P) \\colon ax+y+bz+c=0$. Điều này xảy ra khi  $  \\dfrac{a}{2} = \\dfrac{1}{-1} = \\dfrac{b}{2} \\ne \\dfrac{c}{-2025}.  $  Từ đó, ta có $a=-2$, $b=-2$ và $c \\ne 2025$.<br>  Mà $B \\in (P)$ nên   $  -4 + 1 + 6 + c = 0 \\Rightarrow c=-3.  $  Khi đó $a+b+c=-7$.<br>- <strong>Sai</strong>.  Mặt phẳng $(Q)$ đi qua $A$ và vuông góc với đường thẳng $AB$ nhận $\\vec{AB} = (1;3;-6)$ làm một vec-tơ pháp tuyến. Do đó, $(Q)$ có phương trình  $  (x-1)+3(y+2)-6(z-3) = 0 \\Leftrightarrow x+3y-6z+23=0.  $  Vậy phương trình mặt phẳng cần tìm là $(Q) \\colon x+3y-6z+23=0$."
  },
  {
    "id": "2H511DS3",
    "question": "Trong không gian $Oxyz$, gọi mặt phẳng $(P)$ là sân trường Ngô Gia Tự; hai điểm $A(4;1;3)$, $B(1;-2;3)$ lần lượt nằm trên đỉnh nóc toà nhà hiệu bộ và đỉnh nóc toà nhà thí nghiệm thực hành; điểm $C(1;-2;0)$ là chân cột cờ trên sân trường.",
    "subQuestions": [
      {
        "text": "Biết cột cờ là giá của vectơ $\\vec{n}=(2;-1;2)$. Phương trình của $(P)$ là $2x-y+2z-4=0$",
        "answer": true
      },
      {
        "text": "Chiều cao của toà nhà thí nghiệm thực hành bằng $3$",
        "answer": false
      },
      {
        "text": "Gọi $H(a;b;c)$ là hình chiếu của điểm $A$ lên $(P)$. Giá trị của $a+b+c$ bằng $5$",
        "answer": true
      },
      {
        "text": "Tổ Giáo Dục Quốc Phòng đang tổ chức giải rê bóng quanh chướng ngại vật trên sân trường. Gọi $M$ là điểm di chuyển của quả bóng (giả sử quả bóng di chuyển khắp mặt sân). Giá trị nhỏ nhất của $MA+MB$ bằng $\\sqrt{42}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Phương trình mặt phẳng $(P)$ là  $2(x-1)-(y+2)+2(z-0)=0\\Leftrightarrow 2x-y+2z-4=0.$<br>- <strong>Đúng</strong>.<br>  Chiều cao của toà nhà thí nghiệm thực hành là cao độ của điểm $B$ là $3$.<br>- <strong>Đúng</strong>.<br>  Gọi $d$ là đường thẳng qua $A$ và vuông góc với $(P)$. Khi đó $H=d\\cap (P)$.<br>  Ta có $d\\colon x=4+2t \\text{ và } y=1-t \\text{ và } z=3+2t.$<br>  Tọa độ $H$ là nghiệm hệ phương trình $x=4+2t \\text{ và } y=1-t \\text{ và } z=3+2t \\text{ và } 2x-y+2z-4=0.\\Leftrightarrow x=2 \\text{ và } y=2 \\text{ và } z=1 \\text{ và } t=-1.$<br>  Vậy $H(2;2;1)$ suy ra $a+b+c=5$.<br>- <strong>Đúng</strong>.<br>  Gọi $A'(0;3;-1)$ là điểm đối xứng của $A$ qua $H$.<br>  Khi đó $MA+MB=MA'+MB\\ge A'B$ dấu bằng xảy ra khi $A'$, $M$, $B$ thẳng hàng.<br>  Giá trị nhỏ nhất bằng $A'B=\\sqrt{(1-0)^2+(-2-3)^2+(3-(-1))^2}=\\sqrt{42}$."
  },
  {
    "id": "2H514DS4",
    "question": "Trong không gian $Oxyz$, cho điểm $M(2;3;-5)$ và $A$, $B$, $C$ lần lượt là hình chiếu vuông góc của điểm $M$ lên các trục tọa độ $Ox$, $Oy$, $Oz$.",
    "subQuestions": [
      {
        "text": "Tọa độ điểm $B(2;0;0)$",
        "answer": false
      },
      {
        "text": "Mặt phẳng $(ABC)$ có phương trình $\\dfrac{x}{2}+\\dfrac{y}{3}-\\dfrac{z}{5}=0$",
        "answer": false
      },
      {
        "text": "Khoảng cách từ điểm $M$ đến mặt phẳng $(ABC)$ bằng $\\dfrac{60}{19}$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $(Q)$ qua $M$ và song song mặt phẳng $(Oxz)$ có phương trình $x+z+3=0$",
        "answer": false
      }
    ],
    "explain": "Do $A$, $B$, $C$ lần lượt là hình chiếu vuông góc của điểm $M(2;3;-5)$ lên các trục tọa độ $Ox$, $Oy$, $Oz$ nên $A(2;0;0)$, $B(0;3;0)$, $C(0;0;-5)$.  <br>- Ta có $B(0;3;0)$.<br>- Phương trình mặt phẳng $(ABC)$ là $\\dfrac{x}{2}+\\dfrac{y}{3}-\\dfrac{z}{5}=1$.<br>- Mặt phẳng $(ABC)$ có phương trình là $\\dfrac{x}{2}+\\dfrac{y}{3}-\\dfrac{z}{5}=1\\Leftrightarrow15x+10y-6z-30=0$.<br>  Khoảng cách từ điểm $M$ đến mặt phẳng $(ABC)$ là  \\[\\mathrm{d}\\big(M,(P)\\big)=\\dfrac{\\left|15\\cdot2+10\\cdot3-6\\cdot(-5)-30\\right|}{\\sqrt{15^2+10^2+(-6)^2}}=\\dfrac{60}{19}.\\]<br>- Mặt phẳng $(Q)$ song song với $(Oxz)$ nên nhận vectơ $\\vec{j}=(0;1;0)$ làm vectơ pháp tuyến.<br>  Do $(Q)$ đi qua $M(2;3;-5)$ nên $(Q)$ có phương trình là $y-3=0$."
  },
  {
    "id": "2H511DS5",
    "question": "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1;2;3)$, $B(4;5;6)$, $C(1;0;2)$ và mặt phẳng $(P)\\colon x+2y-z+1=0$.",
    "subQuestions": [
      {
        "text": "$(P)$ có một vectơ pháp tuyến $\\vec{n}=(1;2;-1)$",
        "answer": true
      },
      {
        "text": "Điểm $A$ thuộc mặt phẳng $(P)$",
        "answer": false
      },
      {
        "text": "Mặt phẳng $(ABC)$ có phương trình $x+y-2z+3=0$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $(Q)$ qua $A$, $B$ và vuông góc với mặt phẳng $(P)$ có phương trình $3x-2y-z+4=0$",
        "answer": false
      }
    ],
    "explain": "<br>- Mặt phẳng $(P)\\colon x+2y-z+1=0$ có vectơ pháp tuyến là $\\vec{n}=(1;2;-1)$.<br>- Thay tọa độ điểm $A$ vào phương trình mặt phẳng $(P)$ ta được  \\[1+2\\cdot2-3+1=0\\Leftrightarrow3=0\\text{ (vô lý).}\\]  Vậy điểm $A$ không thuộc mặt phẳng $(P)$.<br>- Ta có $\\vec{AB}=(3;3;3)$, $\\vec{AC}=(0;-2;-1)$.<br>  Mặt phẳng $(ABC)$ có vectơ pháp tuyến là $\\overrightarrow{n}=\\left[\\vec{AB},\\vec{AC}\\right]=(3;3;-6)$.<br>  Do mặt phẳng $(ABC)$ đi qua điểm $A(1;2;3)$ nên có phương trình là  \\[3(x-1)+3(y-2)-6(z-3)=0\\Leftrightarrow x+y-2z+3=0.\\]<br>- Mặt phẳng $(Q)$ có vectơ pháp tuyến là $\\vec{n}_{(Q)}=\\left[\\vec{AB},\\vec{n}\\right]=(9;-6;-3)$.<br>  Do mặt phẳng $(Q)$ đi qua $A(1;2;3)$ nên có phương trình là   \\[9(x-1)-6(y-2)-3(z-3)=0\\Leftrightarrow3x-2y-z-4=0.\\]"
  },
  {
    "id": "2H511DS6",
    "question": "Trong không gian $Oxyz$, cho hai điểm $A(1;2;-2)$, $B(2;-2;1)$ và mặt phẳng $(Q)\\colon x+3y+z+3=0$.",
    "subQuestions": [
      {
        "text": "Điểm $B$ không thuộc mặt phẳng $(Q)$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $Q$ có một vectơ pháp tuyến là $\\vec{n}=(1;3;1)$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $P$ đi qua hai điểm $A$, $B$ và vuông góc với mặt phẳng $(Q)$ có phương trình là $-13x+2y+7z+23=0$",
        "answer": true
      },
      {
        "text": "Góc giữa đường thẳng $AB$ và mặt phẳng $(Q)$ (đơn vị: độ, làm tròn đến hàng phần chục) là $61{,}8^\\circ$",
        "answer": false
      }
    ],
    "explain": "<br>- Thay tọa độ điểm $B$ vào $(Q)$ ta được $2+3\\cdot(-2)+1+3=0$ nên $B\\in(Q)$.<br>- Vectơ pháp tuyến của $(Q)$ là $\\vec{n}_{P}=(1;3;1)$.<br>- Ta có $\\overrightarrow{AB}=(1;-4;3)$ và $\\vec{n}_{Q}=(1;3;1)$.<br>  Ta có vectơ pháp tuyến của mặt phẳng $(P)$ $\\vec{n}_{P}=[\\overrightarrow{AB},\\vec{n}_{Q}]=(-13;2;7)$.<br>  Phương trình mặt phẳng $(P)$ đi qua $A(1;2;-2)$ có vectơ pháp tuyến $\\vec{n}_{P}=(-13;2;7)$ có dạng $-13(x-1)+2(y-2)+7(z+2)=0\\Leftrightarrow -13x+2y+7z+23=0$.<br>- $\\sin\\left(\\overrightarrow{AB}, \\vec{n}_{Q}\\right)=\\dfrac{|1-12+3|}{\\sqrt{26}\\cdot\\sqrt{11}}=\\dfrac{4\\sqrt{286}}{143}$.<br>  Suy ra $(AB, (Q))\\approx28{,}2^\\circ$."
  },
  {
    "id": "2H511DS7",
    "question": "Trong không gian $Oxyz$, cho hai mặt phẳng $(P)\\colon 2x - y + z + 4 = 0$ và $(Q)\\colon x + y + z - 2 = 0$.",
    "subQuestions": [
      {
        "text": "Điểm $A(-1;2;0)$ thuộc mặt phẳng $(P)$",
        "answer": true
      },
      {
        "text": "Điểm $B(2;1;-3)$ không thuộc mặt phẳng $(P)$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $(P)$ có một vectơ pháp tuyến là $\\overrightarrow{n} = (2;1;1)$",
        "answer": false
      },
      {
        "text": "Cosin của góc tạo bởi hai mặt phẳng $(P)$ và $(Q)$ là $\\dfrac{\\sqrt{2}}{3}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Thay tọa độ điểm $A(-1;2;0)$ vào phương trình $(P)$ ta được $2\\cdot(-1) - 2 + 0 + 4 = 0\\Leftrightarrow0=0$ đúng.<br>  Vậy $A\\in(P)$.<br>- <strong>Đúng</strong>. Thay tọa độ điểm $B$ vào phương trình $(P)$ ta được $2\\cdot(2) - 1 + (-3) + 4 = 0\\Leftrightarrow4=0$ sai.  Vậy $B\\not\\in(P)$.<br>- <strong>Sai</strong>. Mặt phẳng $(P)\\colon 2x - y + z + 4 = 0$ có vectơ pháp tuyến $\\overrightarrow{n}=(2;-1;1)$.<br>- <strong>Đúng</strong>.  Hai mặt phẳng $(P)$ và $(Q)$ có các vectơ pháp tuyến lần lượt là $\\overrightarrow{n}_P = (2;-1;1)$ và $\\overrightarrow{n}_Q = (1;1;1)$.<br>  Gọi $\\phi$ là số đo của góc giữa $(P)$ và $(Q)$, ta có<br>  $\\cos \\phi = \\dfrac{\\big|\\overrightarrow{n}_P \\cdot \\overrightarrow{n}_Q\\big|}{\\big|\\overrightarrow{n}_P\\big| \\cdot \\big|\\overrightarrow{n}_Q\\big|} = \\dfrac{\\big|2\\cdot1 + (-1)\\cdot1 + 1\\cdot1\\big|}{\\sqrt{2^2+(-1)^2+1^2} \\cdot \\sqrt{1^2+1^2+1^2}} = \\dfrac{2}{\\sqrt{6}\\sqrt{3}}=\\dfrac{\\sqrt{2}}{3}$."
  },
  {
    "id": "2H511DS8",
    "question": "Trong không gian $Oxyz$, cho mặt phẳng $(P)$ có phương trình $10x + 7y - 26z + 2 = 0$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{n} = \\left( 10; 7; -26 \\right)$ là một vectơ pháp tuyến của mặt phẳng $(P)$",
        "answer": true
      },
      {
        "text": "Khoảng cách từ điểm $M\\left( 0;1;-1 \\right)$ đến mặt phẳng $(P)$ bằng $\\dfrac{7\\sqrt{33}}{33}$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $(P)$ vuông góc với mặt phẳng $(Q)\\colon 10x + 7y - 26z + 2 = 0$",
        "answer": false
      },
      {
        "text": "Mặt phẳng $(\\alpha)$ đi qua hai điểm $A\\left( -2;-2;-2 \\right)$, $B\\left( 0;-2;-1 \\right)$ và vuông góc với mặt phẳng $(P)$ có phương trình dạng $ax + by + cz - 138 = 0$. Khi đó $a + b + c = -69$",
        "answer": false
      }
    ],
    "explain": "<br>- $\\overrightarrow{n} = \\left( 10; 7; -26 \\right)$ là một vectơ pháp tuyến của mặt phẳng $(P)$.<br>- $\\mathrm{d}(M;(P))=\\dfrac{|7+26+2|}{\\sqrt{10^2+7^2+26^2}}=\\dfrac{7\\sqrt{33}}{33}$.<br>- Dễ thấy mặt phẳng $(P)$ trùng mặt phẳng $(Q)$.<br>- Ta có $\\overrightarrow{AB}=(2;0;1)$.<br>  Vì mặt phẳng $(\\alpha)$ đi qua $A$, $B$ đồng thời vuông góc với $(P)$ nên mặt phẳng $(\\alpha)$ có véc-tơ pháp tuyến là $\\overrightarrow{n_\\alpha}=\\left[\\overrightarrow{AB};\\overrightarrow{n}\\right]=(33;-62;-14)$<br>  Suy ra phương trình mặt phẳng $(\\alpha) \\colon 33x-66y-14z-138=0$.<br>  Vậy $a + b + c = -43$."
  },
  {
    "id": "2H514DS9",
    "question": "Một sân vận động được xây dựng theo mô hình là hình chóp cụt $OA GD.BCFE$ có hai đáy song song với nhau. Mặt sân $OAGD$ là hình chữ nhật và được gắn hệ trục $Oxyz$ như hình vẽ (đơn vị trên mỗi trục tọa độ là mét). Mặt sân $OAGD$ có chiều dài $O A=100$ m, chiều rộng $OD=60$ m và tọa độ điểm $B(10;10;8)$.   <br><img src=\"data/12/2D5/im2H51/dlts_12_DLTS34_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Cosin của góc giữa hai mặt phẳng $(OAG)$ và $(BCF)$ bằng $1$",
        "answer": true
      },
      {
        "text": "Khoảng cách từ $B$ đến $(OAG)$ bằng $8$ m",
        "answer": true
      },
      {
        "text": "Một cặp vectơ chỉ phương của $(OACB)$ là $(\\overrightarrow{OA}, \\overrightarrow{OG})$",
        "answer": false
      },
      {
        "text": "Phương trình tổng quát của mặt phẳng $(OACB)$ có dạng $a x+4y+cz+d=0$. Giá trị biểu thức $a+c+d=-5$",
        "answer": true
      }
    ],
    "explain": "Ta có $D(0;60;0)$, $A(100;0;0)$.  <br>- $(OAG)$ và $(BCF)$ là hai mặt phẳng song song.<br>  Suy ra $\\cos ((OAG),(BCF))=\\cos 0^\\circ=1$.<br>- Mặt phẳng $(OAG)$ trùng với mặt phẳng $(Oxy)\\colon z=0$.<br>  Suy ra $\\mathrm{d}(B,(OAG))=\\mathrm{d}(B,(Oxy))=|z_B|=8$.<br>- Một cặp vectơ chỉ phương của $(OACB)$ là $(\\overrightarrow{OA}, \\overrightarrow{OB})$<br>- $(OACB)$ có vectơ pháp tuyến $\\overrightarrow{n}=\\left[\\overrightarrow{OA};\\overrightarrow{OB}\\right]=(0;-800;1\\,000)=200(0;-4;5)$ và đi qua $O(0;0;0)$ và có phương trình là  \\[0(x-0)-4(y-0)+5(z-0)=0\\Leftrightarrow 4y-5z=0.\\]  Suy ra $a=0$, $c=-5$, $d=0$.<br>  Vậy $a+c+d=-5$."
  },
  {
    "id": "2H516DS2",
    "question": "Trong không gian với hệ trục tọa độ $Oxyz$ cho ba điểm $A(1;-2;-1)$, $B(-1;0;0)$, $C(0;2;3)$. Khi đó",
    "subQuestions": [
      {
        "text": "$AB=3$",
        "answer": true
      },
      {
        "text": "Phương trình mặt phẳng $(ABC)$ là $4x+7y+6z+16=0$",
        "answer": false
      },
      {
        "text": "Khoảng cách từ $O$ đến $(ABC)$ là $\\dfrac{16\\sqrt{101}}{101}$",
        "answer": false
      },
      {
        "text": "Góc giữa hai mặt phẳng $(ABC)$ và $(Oxy)$ (làm tròn đến hàng đơn vị) bằng $53^{\\circ}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Ta có $\\overrightarrow{AB}=(-2;2;1)$ nên $AB=\\sqrt{(-2)^2+2^2+1^2}=3$.<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{AB}=(-2;2;1)$ và $\\overrightarrow{AC}=(-1;4;4)$ nên $\\overrightarrow{n}_{1}=\\left[\\overrightarrow{AB},\\overrightarrow{AC}\\right]=(4;7;-6)$.<br>  Phương trình mặt phẳng $(ABC)$ đi qua điểm $A(1;-2;-1)$ và có vectơ pháp tuyến $\\overrightarrow{n}_1=(4;7;-6)$ là  \\[  4(x-1)+7(y+2)-6(z+1)=0 \\Leftrightarrow 4x+7y-6z+4=0.  \\]<br>- <strong>Sai</strong>.<br>  Ta có  \\[  \\mathrm{d}[O,(ABC)]=\\dfrac{|4(0)+7(0)-6(0)+4|}{\\sqrt{4^2+7^2+(-6)^2}}=\\dfrac{4\\sqrt{101}}{101}.  \\]<br>- <strong>Đúng</strong>.<br>  Ta có $\\overrightarrow{n}_1=(4;7;-6)$ là vectơ pháp tuyến của mặt phẳng $(ABC)$. <br>  Ta có $\\overrightarrow{k}=(0;0;1)$ là vectơ pháp tuyến của mặt phẳng $(Oxy)$.<br>  Khi đó  \\[  \\cos\\left[(ABC),(Oxy)\\right]=\\dfrac{\\left|\\overrightarrow{n}_1\\cdot \\overrightarrow{k}\\right|}{\\left|\\overrightarrow{n}_1\\right|\\cdot \\left| \\overrightarrow{k}\\right|}=\\dfrac{|0\\cdot 4 + 0 \\cdot 7 + 1 \\cdot (-6) |}{\\sqrt{0^2+0^2+1^2}\\cdot \\sqrt{4^2+7^2+(-6)^2}}=\\dfrac{6\\sqrt{101}}{101}.  \\]  Suy ra $\\left[(ABC),(Oxy)\\right]\\approx 53^\\circ$."
  }
];
