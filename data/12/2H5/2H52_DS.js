// =========================================================================
// KHỐI DỮ LIỆU: 2H52 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai2H52 = [
  {
    "id": "2H523DS1",
    "question": "Trong không gian $Oxyz$, cho điểm $M(2;1;0)$ và đường thẳng<br> $d\\colon \\dfrac{x-1}{2}=\\dfrac{y+1}{1}=\\dfrac{z}{-1}$.",
    "subQuestions": [
      {
        "text": "Đường thẳng $d$ có một véc-tơ chỉ phương là $\\overrightarrow{u}=(2;1;-1)$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $(P)$ đi qua điểm $M$ và vuông góc với $d$ có phương trình tổng quát là $2x+by+cz+d=0$. Khi đó $b+c+d=-5$",
        "answer": true
      },
      {
        "text": "Gọi $M'$ là điểm đối xứng với $M$ qua $d$. Khi đó $M'(1;0;-2)$",
        "answer": false
      },
      {
        "text": "Phương trình đường thẳng $\\Delta$ đi qua điểm $M$ cắt và vuông góc với đường thẳng $d$ $\\dfrac{x-2}{1}=\\dfrac{y-1}{a}=\\dfrac{z}{b}$. Khi đó $a+b=-6$",
        "answer": true
      }
    ],
    "explain": "<br>- Véc-tơ chỉ phương của $d$ là $\\overrightarrow{u}=(2;1;-1)$.<br>- Phương trình mặt phẳng vuông góc với $d$ có pháp tuyến là $\\overrightarrow{n}=\\overrightarrow{u}=(2;1;-1)$. <br>  Phương trình tổng quát của mặt phẳng $(P)$ là $2x+y-z+d=0$.<br>  Thay điểm $M$ vào $(P)$ ta được $2\\cdot 2+1-1 \\cdot 0+d=0 \\Rightarrow 4+1+d=0 \\Rightarrow d=-5$.<br>  Do đó, $b+c+d=1-1-5=-5$.<br>- Phương trình mặt phẳng $(P)\\colon 2x+y-z-5=0$.<br>  Đường thẳng $d$ có phương trình tham số  $x=1+2t \\text{ và } y=-1+t \\text{ và } z=-t$<br>  Gọi $H$ là giao điểm của $d$ với mặt phẳng $(P)$, khi đó $H=(1+2t,-1+t,-t)$.<br>  Thay vào phương trình mặt phẳng $(P)$ ta được<br>  $2(1+2t)+(-1+t)-(-t)-5=0 \\Rightarrow t=\\dfrac{2}{3}$.<br>  Suy ra tọa độ điểm $H$ là  $H=\\left(\\dfrac{7}{3},-\\dfrac{1}{3},-\\dfrac{2}{3}\\right)$.<br>  Vì $H$ là trung điểm của đoạn $MM'$ nên $M'\\left( \\dfrac{8}{3};\\dfrac{-5}{3};\\dfrac{-4}{3}\\right) $.<br>- Gọi $N$ là giao điểm của $\\Delta$ và $d$. <br>  Vì $N$ thuộc $d$, nên tọa độ $N=(1+2t,-1+t,-t)$.<br>  $\\overrightarrow{MN}=(1+2t-2,-1+t-1,-t-0)=(-1+2t,-2+t,-t)$.<br>  Đường thẳng $\\Delta$ vuông góc với $d$ nên $\\overrightarrow{MN} \\perp \\overrightarrow{u}\\Rightarrow \\overrightarrow{MN} \\cdot \\overrightarrow{u}=0$.<br>  $\\Rightarrow(-1+2t)\\cdot 2+(-2+t)\\cdot 1+(-t)\\cdot (-1)=0$ <br>  $\\Rightarrow t=\\dfrac{2}{3}$<br>  Thay $t=\\dfrac{2}{3}$ vào $\\overrightarrow{MN}$, ta được<br>  $\\overrightarrow{MN}=\\left(\\dfrac{1}{3},-\\dfrac{4}{3},-\\dfrac{2}{3}\\right)=\\dfrac{1}{3}\\cdot(1,-4,-2)$.<br>  Chọn véc-tơ chỉ phương của $\\Delta$ là $\\overrightarrow{v}=(1,-4,-2)$.<br>  Phương trình chính tắc của $\\Delta$ là  $\\dfrac{x-2}{1}=\\dfrac{y-1}{-4}=\\dfrac{z}{-2}$.<br>  Vậy $a=-4$, $b=-2$ $\\Rightarrow a+b=-6$."
  },
  {
    "id": "2H523DS2",
    "question": "Trong không gian $Oxyz$, cho mặt phẳng $(P)\\colon 2x+y+2z-2=0$ và đường thẳng $d\\colon \\dfrac{x-1}{3} = \\dfrac{y-3}{2} = \\dfrac{z+1}{-1}$.",
    "subQuestions": [
      {
        "text": "Một vectơ pháp tuyến của mặt phẳng $(P)$ là $\\overrightarrow{n} = (2; 0; 2)$",
        "answer": false
      },
      {
        "text": "Một vectơ chỉ phương của đường thẳng $d$ là $\\overrightarrow{u} = (3; 2;-1)$",
        "answer": true
      },
      {
        "text": "Điểm $M(1; 3;-1)$ thuộc đường thẳng $d$",
        "answer": true
      },
      {
        "text": "Góc tạo bởi đường thẳng $d$ và mặt phẳng $(P)$ bằng $30{,}3^0$ (làm tròn đến hàng phần mười)",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Mặt phẳng $(P)\\colon 2x+y+2z-2=0$ có một vectơ là $\\overrightarrow{n} = (2; 1; 2)$.<br>- <strong>Đúng</strong>. Đường thẳng $d\\colon \\dfrac{x-1}{3} = \\dfrac{y-3}{2} = \\dfrac{z+1}{-1}$ có một vectơ chỉ phương là $\\overrightarrow{u} = (3; 2;-1)$.<br>- <strong>Đúng</strong>. Thay $x = 1$, $y = 3$ và $z = -1$ vào $d\\colon \\dfrac{x-1}{3} = \\dfrac{y-3}{2} = \\dfrac{z+1}{-1}$, ta được  $ \\dfrac{1-1}{3} = \\dfrac{3-3}{2} = \\dfrac{-1+1}{-1} \\Leftrightarrow 0 = 0 = 0 \\text{ (đúng).}$  Do đó, điểm $M(1; 3;-1)$ thuộc đường thẳng $d$.<br>- <strong>Sai</strong>. Góc tạo bởi đường thẳng $d$ và mặt phẳng $(P)$ được tính theo công thức  $ \\sin\\left(d, (P)\\right) = \\dfrac{\\left|3\\cdot 2 + 2\\cdot 1 + (-1)\\cdot 2 \\right|}{\\sqrt{3^2 + 2^2 + (-1)^2}\\cdot\\sqrt{2^2 + 1^2 + 2^2}} = \\dfrac{\\sqrt{14}}{7}.$  Do đó $\\left(d, (P)\\right) \\approx 32{,}3^\\circ$."
  },
  {
    "id": "2H523DS3",
    "question": "Trong không gian $Oxyz$, cho hai điểm $A(0;2;-1)$, $B(2;2;-1)$ và đường thẳng<br>  $\\Delta \\colon x=1+2t \\text{ và } y=3+t \\text{ và } z=4-5t (t\\in\\mathbb{R}).$",
    "subQuestions": [
      {
        "text": "Một vectơ chỉ phương của đường thẳng $\\Delta$ là $\\vec{u}=(1;3;4)$",
        "answer": false
      },
      {
        "text": "Phương trình mặt cầu đường kính $AB$ là $(x-1)^2+(y+2)^2+(z-1)^2=2$",
        "answer": false
      },
      {
        "text": "Phương trình chính tắc của đường thẳng $d$ đi qua điểm $A$ và song song với đường thẳng $\\Delta$ là $\\dfrac{x}{2}=\\dfrac{y+2}{1}=\\dfrac{z-1}{-5}$",
        "answer": true
      },
      {
        "text": "Gọi $\\alpha$ là góc giữa hai đường thẳng $\\Delta$ và $AB$, khi đó $\\cos\\alpha=\\dfrac{\\sqrt{30}}{15}$",
        "answer": false
      }
    ],
    "explain": "<br>- Vectơ chỉ phương của $\\Delta$ là $\\vec{u}=(2;1;-5)$.<br>- Gọi $I(1;2;-1)$ là trung điểm $AB$. Khi đó $\\left|\\overrightarrow{IA}\\right|=\\sqrt{(0-1)^2+(2-2)^2+(-1+1)^2}=1$.<br>  Phương trình mặt cầu đường kính $AB$ là $(x-1)^2+(y-2)^2+(z+1)^2=1$.<br>- Phương trình chính tắc của đường thẳng $d$ có dạng $\\dfrac{x}{2}=\\dfrac{y-2}{2}=\\dfrac{z+1}{-5}$.<br>- $\\cos\\left(\\Delta, AB\\right)=\\cos\\left(\\overrightarrow{AB},\\vec{u}_{\\Delta}\\right)=\\dfrac{|2\\cdot2+0\\cdot1+0\\cdot(-5)|}{\\sqrt{2^2+0^2+0^2}\\cdot\\sqrt{2^2+1^2+(-5)^2}}=\\dfrac{\\sqrt{30}}{30}$."
  },
  {
    "id": "2H523DS4",
    "question": "Trong không gian $Oxyz$, cho đường thẳng $\\Delta\\colon x = 2 + t \\text{ và } y = 1 - 2t \\text{ và } z = 3 + 2t$ và hai điểm $M(1;1;2)$, $N(-2;3;-2)$.",
    "subQuestions": [
      {
        "text": "Đường thẳng $\\Delta$ có vectơ chỉ phương là $\\overrightarrow{u} = (1;-2;2)$",
        "answer": true
      },
      {
        "text": "Ta có $\\overrightarrow{NM}=(3;-2;4)$.<br>  Đường thẳng $MN$ đi qua điểm $M$, có một vectơ chỉ phương $\\overrightarrow{NM}=(3;-2;4)$ nên có phương trình chính tắc là $\\dfrac{x - 1}{3} = \\dfrac{y - 1}{-2} = \\dfrac{z - 2}{4}$",
        "answer": true
      },
      {
        "text": "Mặt cầu $(S)$ tâm $M$ và bán kính $MN$ có phương trình là $(x - 1)^2 + (y - 1)^2 + (z - 2)^2 = 21$",
        "answer": false
      },
      {
        "text": "Cosin của góc tạo bởi đường thẳng $\\Delta$ và đường thẳng $MN$ bằng $\\dfrac{5\\sqrt{21}}{7}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. So với tham số, hệ số của $t$ chính là vectơ chỉ phương.<br>- <strong>Đúng</strong>. Phương trình chính tắc phải dùng điểm trên $\\Delta\\colon \\dfrac{x - 2}{1} = \\dfrac{y + 1}{-2} = \\dfrac{z - 3}{2}$.<br>- <strong>Sai</strong>. Ta có $MN^2 = (1 + 2)^2 + (1 - 3)^2 + (2 + 2)^2 = 9 + 4 + 16 = 29$. <br>  Suy ra phương trình mặt cầu $(S)$ tâm $M$ và bán kính $MN$ có phương trình là $(x - 1)^2 + (y - 1)^2 + (z - 2)^2 = 29$.<br>- <strong>Sai</strong>.  Đường thẳng $\\Delta$ và $MN$ có các vectơ chỉ phương lần lượt là $\\overrightarrow{u} = (1;-2;2)$ và $\\overrightarrow{NM} = (3;-2;4)$.<br>  Gọi $\\alpha$ là số đo của góc giữa $\\Delta$ và $MN$, ta có<br>  $\\cos \\alpha = \\dfrac{\\big|\\overrightarrow{u} \\cdot \\overrightarrow{NM}\\big|}{\\big|\\overrightarrow{u}\\big| \\cdot \\big|\\overrightarrow{NM}\\big|} = \\dfrac{\\big|1\\cdot3 + (-2)\\cdot(-2) + 2\\cdot4\\big|}{\\sqrt{1^2+(-2)^2+2^2} \\cdot \\sqrt{3^2+(-2)^2+4^2}} = \\dfrac{15}{3\\sqrt{29}}\\neq \\dfrac{5\\sqrt{21}}{7}$."
  },
  {
    "id": "2H523DS5",
    "question": "Trong không gian với hệ trục $Oxyz$, cho mặt phẳng $(P)\\colon 2x - y + z - 2 = 0$ và điểm $A(-1; 1; -1)$. Các khẳng định sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Khoảng cách từ $A$ đến mặt phẳng $(P)$ bằng $\\sqrt{6}$",
        "answer": true
      },
      {
        "text": "$\\sin$ của góc tạo bởi $OA$ và mặt phẳng $(P)$ bằng $\\dfrac{2\\sqrt{2}}{3}$",
        "answer": true
      },
      {
        "text": "Đường thẳng $\\Delta$ qua $A$ và vuông góc với $(P)$ có phương trình $\\dfrac{x - 1}{2} = \\dfrac{y + 1}{-1} = \\dfrac{z - 1}{1}$",
        "answer": false
      },
      {
        "text": "$M(a;b;c)$ là điểm thuộc $(P)$ sao cho $AM$ ngắn nhất, ta có $a + b + c = 2$",
        "answer": false
      }
    ],
    "explain": "Gọi $(P)\\colon 2x - y + z - 2 = 0$ có vectơ pháp tuyến $\\vec{n} = (2; -1; 1)$, điểm $A(-1; 1; -1)$.   <br>- <strong>Đúng</strong>.<br>  Khoảng cách từ $A$ đến mặt phẳng $(P)$ là  \\[  d = \\dfrac{|2(-1) - 1 + (-1) - 2|}{\\sqrt{2^2 + (-1)^2 + 1^2}} = \\dfrac{|-2 -1 -1 -2|}{\\sqrt{6}} = \\dfrac{6}{\\sqrt{6}} = \\sqrt{6}.  \\]<br>- <strong>Đúng</strong>.<br>  Ta có $\\vec{OA} = (-1; 1; -1)$, $\\vec{n} = (2; -1; 1)$.<br>  Gọi $\\theta$ là góc giữa $OA$ và mặt phẳng $(P)$. Khi đó  \\[  \\sin \\theta = \\dfrac{|\\vec{OA} \\cdot \\vec{n}|}{|\\vec{OA}| \\cdot |\\vec{n}|} = \\dfrac{|(-1)\\cdot2 + 1\\cdot(-1) + (-1)\\cdot1|}{\\sqrt{(-1)^2 + 1^2 + (-1)^2} \\cdot \\sqrt{2^2 + (-1)^2 + 1^2}} = \\dfrac{2\\sqrt{2}}{3}.  \\]<br>- <strong>Sai</strong>.<br>  Đường thẳng vuông góc mặt phẳng $(P)$ sẽ có vectơ chỉ phương là $\\vec{n} = (2; -1; 1)$ và đi qua $A(-1; 1; -1)$.<br>  Phương trình tham số   \\[  \\begin{cases}  x = -1 + 2t\\\\  y = 1 - t\\\\  z = -1 + t  \\end{cases}  \\Rightarrow \\dfrac{x + 1}{2} = \\dfrac{y - 1}{-1} = \\dfrac{z + 1}{1}.  \\]<br>- <strong>Sai</strong>.<br>  Điểm $M$ trên $(P)$ sao cho $AM$ ngắn nhất chính là hình chiếu vuông góc từ $A$ lên mặt phẳng $(P)$.<br>  Vì mặt phẳng có dạng $2x - y + z - 2 = 0$, thì tọa độ $M$ thỏa mãn $2a - b + c = 2$.<br>  Khi đó, do $AM$ vuông góc với mặt phẳng nên $AM$ có phương là $\\vec{n} = (2; -1; 1)$ và đi từ $A(-1; 1; -1)$ đến $M$.<br>  Gọi $\\vec{AM}=k\\vec{n} $ nên $M(-1 + 2k; 1 - k; -1 + k)$. Thay vào phương trình mặt phẳng  \\[  2(-1 + 2k) - (1 - k) + (-1 + k) = 2 \\Rightarrow k = 1.  \\]  Suy ra $M = (-1 + 2; 1 - 1; -1 + 1) = (1; 0; 0)$. Vậy $a+b+c=1\\neq 2$."
  },
  {
    "id": "2H523DS6",
    "question": "Trong không gian với hệ trục $Oxyz$ cho điểm $M(1;2;3)$ và đường thẳng $\\Delta\\colon\\dfrac{x-1}{2}=\\dfrac{y}{1}=\\dfrac{z+1}{-1}$.",
    "subQuestions": [
      {
        "text": "Đường thẳng $\\Delta$ có một vectơ chỉ phương là $\\overrightarrow{a}=(2;-1;1)$",
        "answer": false
      },
      {
        "text": "Mặt phẳng $(P)$ qua $M$ và vuông góc với $\\Delta$ có phương trình là $2x+y-z-1=0$",
        "answer": true
      },
      {
        "text": "Mặt cầu tâm $I(2;2;-1)$ và tiếp xúc với mặt phẳng $(P)$ có phương trình $(x-2)^2+(y-2)^2+(z+1)^2=6$",
        "answer": true
      },
      {
        "text": "Khoảng cách từ điểm $M$ đến đường thẳng $\\Delta$ là $5$",
        "answer": false
      }
    ],
    "explain": "<br>- Đường thẳng $\\Delta$ nhận vectơ chỉ phương có dạng $\\overrightarrow{a}=k(2;-1;-1)$, với $k\\in\\mathbb{Z}$.<br>- Mặt phẳng $(P)\\colon 2x+y-z-1=0$ có vectơ pháp tuyến là $\\overrightarrow{n}=(2;1;-1)$. <br>  $\\Rightarrow \\overrightarrow{a}\\parallel\\overrightarrow{n} \\Rightarrow (P)\\perp(\\Delta)$.<br>- Bán kính mặt cầu tâm $I(2;2;-1)$ và tiếp xúc với mặt phẳng $(P)$ là   \\[R={d}(I,(P))=\\dfrac{|2\\cdot2+2+1-1|}{\\sqrt{2^2+1^2+(-1)^2}}=\\sqrt{6}.\\]  Suy ra mặt cầu có phương trình là $(x-2)^2+(y-2)^2+(z+1)^2=6$.<br>- Khoảng cách từ điểm $M$ đến đường thẳng $\\Delta$ có $A(1;0;-1)\\in\\Delta$ và vectơ pháp tuyến $\\overrightarrow{n}=(2;1;-1)$ bằng   \\[{d}(M,\\Delta)=\\dfrac{\\left|\\left[\\overrightarrow{AM},\\overrightarrow{n}\\right]\\right|}{\\left|\\overrightarrow{n}\\right|}=\\dfrac{\\sqrt{(-6)^2+8^2+(-4)^2}}{\\sqrt{2^2+1^2+(-1)^2}}=\\dfrac{\\sqrt{174}}{3}\\approx 4{,}4.\\]"
  },
  {
    "id": "2H523DS8",
    "question": "Trong không gian $Oxyz$, cho đường thẳng $d\\colon \\dfrac{x-1}{2}=\\dfrac{y+1}{-1}= \\dfrac{z-2}{1}$ và mặt phẳng $(P)\\colon -x+2y+z-3=0$.",
    "subQuestions": [
      {
        "text": "Điểm $A(1;-1;-2)$ nằm trên đường thẳng $d$",
        "answer": false
      },
      {
        "text": "Mặt phẳng $(Q)$ song song với đường thẳng $d$ và vuông góc với mặt phẳng $(P)$ có một véc-tơ pháp tuyến là $(1;1;-1)$",
        "answer": true
      },
      {
        "text": "Góc giữa đường thẳng $d$ và mặt phẳng $(P)$ bằng $30^\\circ$",
        "answer": true
      },
      {
        "text": "Đường thẳng $\\Delta$ đi qua điểm $M(-3;1;2)$, song song với mặt phẳng $(P)$ và cắt đường thẳng $d$ tại điểm $N(a;b;c)$. Giá trị $a+b+c$ bằng $3$",
        "answer": false
      }
    ],
    "explain": "<br>- Thay tọa độ điểm $A$ vào phương trình đường thẳng $d$, ta có $\\dfrac{1-1}{2}=\\dfrac{-1+1}{-1}\\neq \\dfrac{-2-2}{1}$, do đó $A\\notin d$.<br>- Vì $(Q)\\perp (P) \\text{ và } (Q)\\parallel d\\Rightarrow \\vec{n}_{(Q)}\\perp \\vec{n}_{(P)} \\text{ và } \\vec{n}_{(Q)}\\perp\\vec{u}_{d}.$ <br>  Ta có thể chọn một véc-tơ pháp tuyến của $(Q)$ là $\\vec{n}_{(Q)}=\\left[\\vec{n}_{(P)},\\vec{u}_d\\right]=(3;3;-3)$. <br>  Vậy $\\vec{u}=(1;1;-1)$ cũng là một véc-tơ pháp tuyến của $(Q)$.<br>- Ta có   $\\sin \\left(d,(P)\\right) = \\dfrac{\\left|\\vec{u}_d\\cdot \\vec{n}_{(P)}\\right|}{\\left|\\vec{u}_d\\right|\\cdot \\left|\\vec{n}_{(P)}\\right|}$<br>$= \\dfrac{\\left|-2-2+1\\right|}{\\sqrt{2^2+(-1)^2+1^2}\\cdot\\sqrt{(-1)^2+2^2+1^2}}$<br>$= \\dfrac{1}{2}.$  Vậy $\\left(d,(P)\\right)=30^\\circ$.<br>- Gọi $(R)$ là mặt phẳng song song với $(P)$ và đi qua $M$. Khi đó $\\Delta\\subset (R)$. <br>  Vậy phương trình mặt phẳng $(R)$ là $-(x+3)+2(y-1)+(z-2)=0\\Leftrightarrow -x+2y+z-7=0$. <br>  Ta thấy giao điểm của hai đường thẳng $d$ và $\\Delta$ chính là giao điểm của đường thẳng $d$ và mặt phẳng $(R)$. <br>  Gọi $N=d\\cap (R)$. Ta có $N\\in d\\Rightarrow N(1+2t;-1-t;2+t)$. <br>  Mặt khác $N\\in (R)$ nên ta có phương trình  $-(1+2t)+2(-1-t)+(2+t)-7=0\\Leftrightarrow t=-\\dfrac{8}{3}.$  Suy ra $N\\left(-\\dfrac{13}{3};\\dfrac{5}{3};-\\dfrac{2}{3}\\right)$. <br>  Vậy $a+b+c=-\\dfrac{13}{3}+\\dfrac{5}{3}-\\dfrac{2}{3}=-\\dfrac{10}{3}$."
  },
  {
    "id": "2H525DS1",
    "question": "Trong không gian $Oxyz$, cho đường thẳng $d\\colon\\dfrac{x-1}{2}=\\dfrac{y+3}{-3}=\\dfrac{z}{4}$ và mặt phẳng $(P)\\colon x+y-2z+1=0$.",
    "subQuestions": [
      {
        "text": "Đường thẳng $d$ có véc-tơ chỉ phương $\\overrightarrow{u}=(1;2;3)$",
        "answer": false
      },
      {
        "text": "Đường thẳng $d$ đi qua điểm $M(1;2;3)$",
        "answer": false
      },
      {
        "text": "Khoảng cách từ điểm $A(1;0;-3)$ đến mặt phẳng $(P)\\colon x+y-2z+1=0$ bằng $\\dfrac{4\\sqrt{6}}{3}$",
        "answer": true
      },
      {
        "text": "Phương trình mặt phẳng $(Q)$ vuông góc $(P)$ và chứa đường thẳng $d$ có dạng $(Q)\\colon 2x+8y+5z+22=0$",
        "answer": false
      }
    ],
    "explain": "Một véc-tơ chỉ phương của $d$ là $\\overrightarrow{u}=(2;-3;4)$ và một véc-tơ pháp tuyến của mặt phẳng $(P)$ là $\\overrightarrow{n}_1=(1;-2;1)$.  <br>- Đường thẳng $d$ có véc-tơ chỉ phương là $\\overrightarrow{u}=(2;-3;4)$.<br>- Thay điểm $M(1;2;3)$ vào phương trình $\\dfrac{x-1}{2}=\\dfrac{y+3}{-3}=\\dfrac{z}{4}$ ta thấy không thỏa suy ra $M\\notin d$.<br>- Khoảng cách từ điểm $A$ đến mặt phẳng $(P)$ là $\\mathrm{d}\\left(A,(P)\\right)=\\dfrac{\\left|1\\cdot1+2\\cdot3+1\\right|}{\\sqrt{1+1+4}}=\\dfrac{4\\sqrt{6}}{3}$.<br>- Vì mặt phẳng $(Q)$ vuông góc với mặt phẳng $(P)$ và chứa $d$ nên véc-tơ pháp tuyến của $(Q)$ là $\\overrightarrow{n}=\\left[\\overrightarrow{u},\\overrightarrow{n}_1\\right]=(5;2;-1)$.<br>  Vì $(Q)$ chứa $d$ nên $(Q)$ đi qua điểm $N(1;-3;0)$. Phương trình mặt phẳng $(Q)$ là  \\[5(x-1)+2(y+3)-(z-0)=0\\Leftrightarrow 5x+2y-z+1=0.\\]"
  }
];
