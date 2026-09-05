// =========================================================================
// KHỐI DỮ LIỆU: 2H22 - Đúng sai
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai2H22 = [
  {
    "id": "2H223DS1",
    "question": "Trong không gian với hệ trục toạ độ $Oxyz$, cho tam giác $ABC$ có toạ độ các điểm $A(2;-1;0)$, $B(2;1;-2)$, $C(-2;5;6)$.",
    "subQuestions": [
      {
        "text": "Gọi $M$ là điểm thoả mãn đẳng thức $\\overrightarrow{MB}+\\overrightarrow{MC}=\\overrightarrow{CA}$. Khi đó, độ dài của đoạn thẳng $OM=\\dfrac{65}{2}$",
        "answer": false
      },
      {
        "text": "Gọi $E(m;3;n)$ là điểm sao cho tam giác $BCE$ là cân tại $E$. Khi đó, ta có $m\\ne 0$; $n\\ne2$ và $m-2n+4=0$",
        "answer": true
      },
      {
        "text": "Gọi $D(a;b;c)$ là đỉnh thứ tư của hình bình hành $ABCD$. Khi đó, giá trị của biểu thức $a+b+c=9$",
        "answer": true
      },
      {
        "text": "Độ dài của đoạn thẳng $BC$ bằng $2\\sqrt{6}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Gọi $M(x;y;z)$.<br>  Ta có $\\overrightarrow{MB}=(2-x;1-y;-2-z)$, $\\overrightarrow{MC}=(-2-x;5-y;6-z)$, $\\overrightarrow{CA}=(4;-6;-6)$.<br>  Ta có   $\\overrightarrow{MB}+\\overrightarrow{MC}=\\overrightarrow{CA}$<br>$\\Leftrightarrow 2-x-2-x=4 \\text{ và } 1-y+5-y=-6 \\text{ và } -2-z+6-z=-6$<br>$\\Leftrightarrow x=-2 \\text{ và } y=6 \\text{ và } z=-5.$  Toạ độ $M(-2;6;-5)$. Độ dài $OM=\\sqrt{(-2)^2+6^2+(-5)^2}=\\sqrt{65}$.<br>- <strong>Đúng</strong>.<br>  Gọi $I$ là trung điểm của $BC$, suy ra $I(0;3;4)$.<br>  Ta có <br>- $\\overrightarrow{BE}=(m-2;;2;n+2)\\Rightarrow BE=\\sqrt{(m-2)^2+4+(n+2)^2}$.<br>- $\\overrightarrow{CE}=(m+2;;-2;n-6)\\Rightarrow BE=\\sqrt{(m+2)^2+4+(n-6)^2}$.  Tam giác $BCE$ cân tại $E$ khi và chỉ khi   $E\\ne I \\text{ và } BE=CE$<br>$\\Leftrightarrow m\\ne0; \\,n\\ne 2 \\text{ và } \\sqrt{(m-2)^2+4+(n+2)^2}=\\sqrt{(m+2)^2+4+(n-6)^2}$<br>$\\Leftrightarrow m\\ne0; \\,n\\ne 2 \\text{ và } m-2n+4=0$<br>- <strong>Đúng</strong>.<br>  $ABCD$ là hình bình hành nên $x_A+x_C=x_B+x_D \\text{ và } y_A+y_C=y_B+y_D \\text{ và } z_A+z_C=z_B+z_D\\Leftrightarrow 2-2=2+a \\text{ và } -1+5=1+b \\text{ và } 0+6=-2+c\\Leftrightarrow a=-2 \\text{ và } b=3 \\text{ và } c=8.$  Vậy $a+b+c=-2+3+8=9$.<br>- <strong>Sai</strong>. Ta có $\\overrightarrow{BC}=(-4;4;8) \\Rightarrow BC=\\sqrt{(-4)^2+4^2+8^2}=4\\sqrt{6}$."
  },
  {
    "id": "2H223DS2",
    "question": "Trong không gian $Oxyz$, $\\Delta ABC$ với $A(1;2;3)$, $B(5;0;-1)$ và $C(-3;1;7)$. Các khẳng định sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Chu vi $\\Delta ABC$ bằng $23{,}1$ làm tròn tới hàng phần chục",
        "answer": true
      },
      {
        "text": "$\\cos \\widehat{BAC}=\\dfrac{5\\sqrt{33}}{33}$",
        "answer": false
      },
      {
        "text": "Tọa độ $\\vec{AB}=(4;-2;-4)$",
        "answer": true
      },
      {
        "text": "Khi $ABCD$ là hình bình hành thì hoành độ của điểm $D$ bằng $7$",
        "answer": false
      }
    ],
    "explain": "<br>- <br>- $\\vec{AB}=(4; -2; -4) \\Rightarrow AB = \\sqrt{4^2 + (-2)^2 + (-4)^2} = 6$.<br>- $\\vec{AC}=(-4; -1; 4) \\Rightarrow AC = \\sqrt{(-4)^2 + (-1)^2 + 4^2} = \\sqrt{33}$.<br>- $\\vec{BC}=(-8; 1; 8) \\Rightarrow BC = \\sqrt{(-8)^2 + 1^2 + 8^2} = \\sqrt{129}$.<br>- Chu vi $\\Delta ABC$ là $AB + AC + BC = 6 + \\sqrt{33} + \\sqrt{129} \\approx 23{,}1$.<br>- $\\cos \\widehat{BAC} = \\dfrac{\\vec{AB} \\cdot \\vec{AC}}{AB \\cdot AC} = \\dfrac{-30}{6\\sqrt{33}}= \\dfrac{-5\\sqrt{33}}{33}$.<br>- $\\vec{AB}=(4;-2;-4)$.<br>- Gọi $D(x; y; z)$. Do $ABCD$ là hình bình hành nên $\\vec{AB} = \\vec{DC}$. <br>- $\\vec{AB} = (4; -2; -4)$<br>- $\\vec{DC} = (-3-x; 1-y; 7-z)$ Suy ra: \\[-3-x = 4 \\text{ và } 1-y = -2 \\text{ và } 7-z = -4 \\Leftrightarrow x = -7 \\text{ và } y = 3 \\text{ và } z = 11.\\] Vậy, $D(-7; 3; 11)$. Hoành độ của $D$ là $-7$."
  },
  {
    "id": "2H224DS3",
    "question": "Một sân vận động với sân bóng phẳng hình chữ nhật có chấm trắng trung tâm là nơi giao bóng, một đường kẻ vạch chia đôi sân và các khán đài. Khán đài $A$ gồm những dãy ghế nằm vuông góc với vạch chia đôi sân có độ cao tăng dần (các ghế cùng hàng thì cùng độ cao so với mặt sân). Chọn hệ trục tọa độ $Oxyz$ sao cho $O$ trùng với điểm giao bóng, mặt phẳng $Oxy$ trùng với mặt sân, trục $Ox$ trùng với vạch chia đôi sân, tia $Oz$ vuông góc với mặt sân (đơn vị đo lấy theo mét).  Một khán giả ngồi tại vị trí $M$ của khán đài $A$, có hình chiếu vuông góc lên mặt phẳng chứa sân là một điểm thuộc $Ox$. Góc hợp bởi $OM$ và mặt sân là $\\alpha$ với $\\sin \\alpha=\\dfrac{1}{3}$, nếu người này di chuyển 10 $(m)$ trên hàng ngang đến ngồi tại một vị trí $N$ thì góc hợp bởi $ON$ và mặt sân là $\\beta$ với $\\sin \\beta=\\dfrac{\\sqrt{10}}{10}$. Gọi $h(m)$ là độ cao tại $M$ so với mặt sân.   <br><img src=\"data/12/2H2/im2H22/loc2_2_TN_DS_TL_SGD_H_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Điểm $M$ có cao độ bằng $0$",
        "answer": false
      },
      {
        "text": "Điểm $N$ có cùng tung độ với điểm $M$",
        "answer": false
      },
      {
        "text": "$OM=3h$",
        "answer": true
      },
      {
        "text": "$h=10$ m",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $z_M=MH$, vì khán giả ngồi tại vị trí $M$ có độ cao cao hơn so với mặt sân, nên cao độ của điểm $M$ phải lớn hơn $0$.<br>- Khi người đó dịch chuyển tới vị trí điểm $N$ thì $y_N=y_M+10$, nên điểm $N$ không có cùng tung độ với điểm $M$.<br>- Xét tam giác $OHM$ vuông tại $H$ có  $OH=OM\\cdot \\sin\\alpha\\Leftrightarrow OM=\\dfrac{OH}{\\sin\\alpha}=3h.$<br>- Gọi $K$ là hình chiếu vuông góc của $N$ trên $(Oxy)$. <br>  Xét tam giác $OMN$ vuông tại $M$ ta có $ON=\\sqrt{OM^2+MN^2}=\\sqrt{9h^2+100}$. <br>  Xét tam giác $OKN$ vuông tại $K$ có   $\\sin\\beta=\\dfrac{HN}{ON}=\\dfrac{h}{\\sqrt{9h^2+100}}=\\dfrac{1}{\\sqrt{10}}\\Leftrightarrow h^2=100\\Leftrightarrow h=10.$"
  },
  {
    "id": "2H224DS4",
    "question": "Trong hệ trục tọa độ $Oxyz$, cho hai vectơ $\\vec{a}=(2;1;-2)$, $\\vec{b}=(0;-1;1)$.",
    "subQuestions": [
      {
        "text": "$\\cos\\left(\\vec{a},\\vec{b}\\right)=\\dfrac{\\vec{a}\\cdot\\vec{b}}{\\left|\\vec{a}\\right|\\cdot\\left|\\vec{b}\\right|}$",
        "answer": true
      },
      {
        "text": "$\\vec{a}\\cdot\\vec{b}=3$",
        "answer": false
      },
      {
        "text": "$\\left|\\vec{b}\\right|=\\sqrt{2}$",
        "answer": true
      },
      {
        "text": "Góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ bằng $45^\\circ$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. <br>  Ta có $\\cos(\\vec{a},\\vec{b})=\\dfrac{\\vec{a}\\cdot\\vec{b}}{\\left|\\vec{a}\\right|\\cdot\\left|\\vec{b}\\right|}$ theo công thức tích vô hướng.<br>- <strong>Sai</strong>. <br>  Ta có $\\vec{a}\\cdot\\vec{b}=2\\cdot 0+1\\cdot (-1)+(-2)\\cdot 1=-3$.<br>- <strong>Đúng</strong>. <br>  Ta có $\\left|\\vec{b}\\right|=\\sqrt{(-1)^2+1^2}=\\sqrt{2}$.<br>- <strong>Sai</strong>. <br>  Ta có  $\\cos\\left(\\vec{a},\\vec{b}\\right)=\\dfrac{\\vec{a}\\cdot\\vec{b}}{\\left|\\vec{a}\\right|\\cdot\\left|\\vec{b}\\right|}=\\dfrac{-3}{3\\cdot \\sqrt{2}}=-\\dfrac{1}{\\sqrt{2}}.$  Suy ra $\\left(\\vec{a},\\vec{b}\\right)=135^\\circ$."
  },
  {
    "id": "2H223DS3",
    "question": "Trong không gian $Oxyz$, cho tam giác $ABC$ với $A\\left(2;1;1\\right)$, $B\\left(1;2;1\\right)$ và $C\\left(-2;2;0\\right)$.",
    "subQuestions": [
      {
        "text": "Số đo góc $\\widehat{BAC}$ làm tròn tới hàng phần mười theo đơn vị độ bằng $33{,}6^{\\circ}$",
        "answer": true
      },
      {
        "text": "Tọa độ trọng tâm $G$ của tam giác $ABC$ là $G\\left(\\dfrac{1}{3};\\dfrac{5}{3};\\dfrac{2}{3}\\right)$",
        "answer": true
      },
      {
        "text": "Diện tích của tam giác $ABC$ bằng $\\sqrt{11}$",
        "answer": false
      },
      {
        "text": "Đường phân giác trong của góc $\\widehat{BAC}$ cắt cạnh $BC$ tại điểm $D$ có tọa độ là $(a;b;c)$ thì $a+b+c=3$",
        "answer": true
      }
    ],
    "explain": "Ta có $\\overrightarrow{AB}=(-1;1;0)$; $\\overrightarrow{AC}=(-4;1;-1)$.<br>  Suy ra $\\left[\\overrightarrow{AB};\\overrightarrow{AC}\\right]=(-1;-1;3)$.  <br>- Ta có $\\cos(\\widehat{BAC}) = \\dfrac{\\overrightarrow{AB} \\cdot \\overrightarrow{AC}}{\\left|\\overrightarrow{AB}\\right| \\cdot \\left|\\overrightarrow{AC}\\right|}= \\dfrac{5}{\\sqrt{2} \\cdot 3\\sqrt{2}} = \\dfrac{5}{6}$.<br>  Suy ra $\\widehat{BAC}\\approx 33{,}557^{\\circ}$.<br>  Làm tròn tới hàng phần mười, ta được $33{,}6^{\\circ}$.<br>- Tọa độ của trọng tâm $G$ của $\\triangle ABC$ $x=\\dfrac{x_A+x_B+x_C}{3}=\\dfrac{1}{3} \\text{ và } y_G=\\dfrac{y_A+y_B+y_C}{3}=\\dfrac{5}{3} \\text{ và } z_G=\\dfrac{z_A+z_B+z_C}{3}=\\dfrac{2}{3}\\Rightarrow G\\left(\\dfrac{1}{3};\\dfrac{5}{3};\\dfrac{2}{3}\\right).$<br>- Ta có $S_{\\triangle ABC}=\\dfrac{1}{2}\\cdot\\left|\\left[\\overrightarrow{AB};\\overrightarrow{AC}\\right]\\right|=\\dfrac{1}{2}\\cdot \\sqrt{(-1)^2+(-1)^2+3^2}=\\dfrac{\\sqrt{11}}{2}$.<br>- Vì $AD$ là đường phân giác trong của góc $\\widehat{BAC}$, theo tính chất đường phân giác, ta có  $\\dfrac{DB}{DC} = \\dfrac{AB}{AC}=\\dfrac{1}{3}\\Rightarrow \\dfrac{\\overrightarrow{DB}}{\\overrightarrow{DC}}=-\\dfrac{1}{3}\\Leftrightarrow \\overrightarrow{DC}=-3\\overrightarrow{DB}$. \\,\\,\\ $(*)$.  Ta có $(*)\\Leftrightarrow (-2-a;2-b;-c)=-3(1-a;2-a;1-c)\\Rightarrow a=\\dfrac{1}{4} \\text{ và } b=2 \\text{ và } c=\\dfrac{3}{4}.$<br>  Vậy $a + b + c = \\dfrac{1}{4} + 2 + \\dfrac{3}{4}=3$."
  },
  {
    "id": "2H223DS4",
    "question": "Cho hình hộp $ABCD.A'B'C'D'$ có $AB=1$; $AD=2$; $AA'=3$, $\\widehat{A'AB}=90^{\\circ}$; $\\widehat{A'AD}=120^{\\circ}$; $\\widehat{DAB}=60^{\\circ}$. Khi đó",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB} \\cdot \\overrightarrow{AD}=-1$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{BA}+\\overrightarrow{BC}+\\overrightarrow{CC'}=\\overrightarrow{BD'}$",
        "answer": true
      },
      {
        "text": "Đường chéo $AC'$ có độ dài bằng $\\sqrt{14}$",
        "answer": false
      },
      {
        "text": "Số đo góc giữa hai vecto $\\overrightarrow{AB}$, $\\overrightarrow{AC'}$ làm tròn tới hàng đơn vị theo đơn vị độ bằng $39^{\\circ}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = |\\overrightarrow{AB}| \\cdot |\\overrightarrow{AD}| \\cdot \\cos(\\widehat{DAB}= 1 \\cdot 2 \\cdot \\cos 60^{\\circ} = 1$.<br>- Ta có $\\overrightarrow{BA}+\\overrightarrow{BC}+\\overrightarrow{CC'} = \\overrightarrow{BD} + \\overrightarrow{DD'}= \\overrightarrow{BD'}$.<br>- Ta có   $AC'^2 = (\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'})^2$<br>$= AB^2+AD^2+AA'^2+2\\overrightarrow{AB}\\cdot\\overrightarrow{AD}+2\\overrightarrow{AB}\\cdot\\overrightarrow{AA'}+2\\overrightarrow{AD}\\cdot\\overrightarrow{AA'}$<br>$= 1^2 + 2^2 + 3^2 + 2 \\cdot 1 \\cdot 2 \\cdot \\cos 60^{\\circ} + 2 \\cdot 1 \\cdot 3 \\cdot \\cos 90^{\\circ} + 2\\cdot 2 \\cdot 3 \\cdot \\cos 120^{\\circ}$<br>$= 10.$  Suy ra $AC' = \\sqrt{10}$.<br>- Ta có   $\\cos(\\overrightarrow{AB}, \\overrightarrow{AC'}) = \\dfrac{\\overrightarrow{AB}\\cdot\\overrightarrow{AC'}}{|\\overrightarrow{AB}|\\cdot|\\overrightarrow{AC'}|}$<br>$= \\dfrac{\\overrightarrow{AB} \\cdot (\\overrightarrow{AB} + \\overrightarrow{AD}+\\overrightarrow{AA'})}{|\\overrightarrow{AB}| \\cdot |\\overrightarrow{AC'}|}$<br>$= \\dfrac{\\overrightarrow{AB}^2 + \\overrightarrow{AB}\\overrightarrow{AD} + \\overrightarrow{AB}\\overrightarrow{AA'}}{|\\overrightarrow{AB}| \\cdot |\\overrightarrow{AC'}|}$<br>$= \\dfrac{1 + 1 + 0}{1 \\cdot \\sqrt{10}}$<br>$= \\dfrac{2}{\\sqrt{10}}.$  Suy ra $(\\overrightarrow{AB}, \\overrightarrow{AC'}) \\approx 51^{\\circ}$."
  },
  {
    "id": "2H223DS5",
    "question": "Trong không gian $O x y z$, cho $A(2 ; 0 ;-1)$, $B(1 ; 2 ; 1)$, $C(3 ; 1 ;-2)$.",
    "subQuestions": [
      {
        "text": "Ba điểm $A$, $B$, $C$ lập được thành một tam giác",
        "answer": true
      },
      {
        "text": "$G(2 ; 1 ;-1)$ là trọng tâm của $\\triangle ABC$",
        "answer": false
      },
      {
        "text": "Gọi $D(a ; b ; c)$ sao cho $ABCD$ là hình bình hành. Khi đó $ a+b+c= 5$",
        "answer": false
      },
      {
        "text": "$\\cos \\widehat{BAC}=-\\dfrac{\\sqrt{3}}{9}$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta thấy $\\overrightarrow{AB} = (-1;2;2)$ và $\\overrightarrow{AC} = (1;1;-1)$. Do $\\dfrac{-1}{1} \\ne \\dfrac{2}{1}$ nên $\\overrightarrow{AB}$ không cùng phương $\\overrightarrow{AC}$.<br>  Suy ra ba điểm $A$, $B$, $C$ lập được thành một tam giác.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. $G\\left(2 ; 1 ;-\\dfrac{2}{3}\\right)$ là trọng tâm của $\\triangle ABC$.<br>- Ta có $\\overrightarrow{CD} = (a-3;b-1;c+2)$ và $\\overrightarrow{BA} = (1;-2;-2)$.<br>  Để $ABCD$ là hình bình hành thì $\\overrightarrow{CD} = \\overrightarrow{BA}$ hay $a=4$, $b=-1$ và $c=-4$.<br>  Khi đó, $a+b+c=-1$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có  $  \\cos\\widehat{BAC}  = \\cos(\\overrightarrow{AB},\\overrightarrow{AC})  = \\dfrac{\\overrightarrow{AB} \\cdot \\overrightarrow{AC}}{AB \\cdot AC}  =-\\dfrac{\\sqrt{3}}{9}.  $"
  },
  {
    "id": "2H223DS6",
    "question": "Trong không gian toạ độ $Oxyz$, cho hai véc-tơ $\\overrightarrow{u}=(-1; 2; 2)$ và $\\overrightarrow{v}=(-3;-4; 0)$.",
    "subQuestions": [
      {
        "text": "Nếu một véc-tơ có tọa độ là $(x; y; z)$ thì véc-tơ đó có độ dài là $\\sqrt{x^2+y^2+z^2}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{u}$, $\\overrightarrow{v}$ cùng phương",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{u} \\cdot \\overrightarrow{v}=5$",
        "answer": false
      },
      {
        "text": "Góc giữa hai véc-tơ $\\overrightarrow{u}$ và $\\overrightarrow{v}$ (làm tròn đến hàng đơn vị của độ) là $115^{\\circ}$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Nếu một véc-tơ có tọa độ là $(x; y; z)$ thì véc-tơ đó có độ dài là $\\sqrt{x^2+y^2+z^2}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Ta có $\\dfrac{-1}{-3}\\ne \\dfrac{2}{-4}$ nên $\\overrightarrow{u}$, $\\overrightarrow{v}$ không cùng phương.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Ta có $\\overrightarrow{u} \\cdot \\overrightarrow{v}=(-1)\\cdot (-3)+2\\cdot (-4)+2\\cdot 0=-5$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Ta có $\\cos \\left(\\overrightarrow{u},\\overrightarrow{v}\\right)=\\dfrac{\\overrightarrow{u} \\cdot \\overrightarrow{v}}{\\left |\\overrightarrow{u}\\right | \\cdot \\left |\\overrightarrow{v}\\right |}=\\dfrac{-5}{3\\cdot 5}=-\\dfrac{1}{3}$.<br>  Vậy $\\left(\\overrightarrow{u},\\overrightarrow{v}\\right)\\approx 108^\\circ$."
  },
  {
    "id": "2H223DS7",
    "question": "Một tháp trung tâm kiểm soát không lưu ở sân bay cao $80$ m sử dụng ra đa có phạm vi theo dõi $500$ km được đặt trên đỉnh tháp. Chọn hệ trục toạ độ $Oxyz$ có gốc $O$ trùng với vị trí chân tháp, mặt phẳng $(Oxy)$ trùng với mặt đất sao cho trục $Ox$ hướng về phía Tây, trục $Oy$ hướng về phía Nam, trục $Oz$  hướng thẳng đứng lên phía trên (đơn vị trên mỗi trục tính theo kilômét).  Một máy bay tại vị trí $A$ cách mặt đất $10$ km, cách $300$ km về phía Tây và $200$ km về phía Nam so với tháp trung tâm kiểm soát không lưu        <br><img src=\"data/12/2D2/im2H2/2H22_tikz_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Ra đa ở vị trí có toạ độ $(0; 0; 0)$",
        "answer": false
      },
      {
        "text": "Vị trí $A$ có tọa độ $(300; 200; 10)$",
        "answer": true
      },
      {
        "text": "Khoảng cách từ máy bay đến ra đa là khoảng $360{,}67$ km (làm tròn kết quả đến hàng phần trăm)",
        "answer": false
      },
      {
        "text": "Ra đa của trung tâm kiểm soát không lưu không phát hiện được máy bay tại vị trí $A$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Theo giả thiết, ra đa ở vị trí có toạ độ $(0;0;0{,}08)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Vì điểm $A(300;200;10)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Khoảng cách từ máy bay đến ra đa là  $\\sqrt{(300-0)^2+(200-0)^2+(10-0{,}08)^2} \\approx 360{,}69$\\,(km).<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Vì $360{,}69&lt; 500$ nên ra đa của trung tâm kiểm soát không lưu có phát hiện được máy bay tại vị trí $A$."
  },
  {
    "id": "2H223DS8",
    "question": "Trong không gian $Oxyz$, cho các điểm $A(4;2;-1)$, $B(1;-1;2)$ và $C(0;-2;3)$.",
    "subQuestions": [
      {
        "text": "Tọa độ điểm $N$ thuộc mặt phẳng $(Oxy)$, sao cho $A$, $B$, $N$ thẳng hàng là $(3;-1;0)$",
        "answer": false
      },
      {
        "text": "Tọa độ trung điểm $I$ của đoạn thẳng $AC$ là $(2;0;1)$",
        "answer": true
      },
      {
        "text": "$\\vec{AB}=(-3;-3;3)$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $M$ sao cho $\\vec{AB}+\\vec{CM}=\\vec{0}$ là $(3;1;0)$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;<br>  Vì điểm $N$ thuộc mặt phẳng $(Oxy)$ nên $N(x;y;0)$.<br>  Ta có $\\vec{AN}=(x-4;y-2;1)$, $\\vec{BN}=(x-1;y+1;-2)$.<br>  Để $A$, $B$, $N$ thẳng hàng thì hai vectơ $\\vec{AN}$, $\\vec{BN}$ cùng phương. Do đó, $\\vec{AN}=k\\vec{BN}$ (với $k$ là số thực bất kì).<br>  $\\Rightarrow x-4=k(x-1) \\text{ và } y-2=k(y+1) \\text{ và } 1=-2k   \\Rightarrow x-4=-\\dfrac{1}{2}(x-1) \\text{ và } y-2=-\\dfrac{1}{2}(y+1) \\text{ và } k=-\\dfrac{1}{2}  \\Rightarrow x=3 \\text{ và } y=1.$<br>  Vậy $N(3;1;0)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;<br>  Tọa độ trung điểm $I$ của đoạn thẳng $AC$ là<br>  $x_I=\\dfrac{4+0}{2} \\text{ và } y_I=\\dfrac{2+(-2)}{2} \\text{ và } z_I=\\dfrac{-1+3}{2}  \\Leftrightarrow x_I=2 \\text{ và } y_I=0 \\text{ và } z_I=1.$<br>  Vậy $I(2;0;1)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;<br>  Ta có $\\vec{AB}=(-3;-3;3)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;<br>  Gọi $M(x;y;z)$ thì $\\vec{MC}=(-x;-2-y;3-z)$.<br>  Vì $\\vec{AB}+\\vec{CM}=\\vec{0} \\Rightarrow \\vec{AB}=\\vec{MC}   \\Rightarrow -x=-3 \\text{ và } -2-y=-3 \\text{ và } 3-z=3   \\Leftrightarrow x=3 \\text{ và } y=1 \\text{ và } z=0  \\Rightarrow M(3;1;0)$."
  },
  {
    "id": "2H223DS9",
    "question": "Trong không gian với hệ trục toạ độ $Oxyz$, cho hình bình hành $ABCD$ có $A(-1;3;0)$, $B(1;2;-1)$, $C(1;1;-2)$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB} = (2;-1;-1)$",
        "answer": true
      },
      {
        "text": "$\\cos\\left(\\overrightarrow{AB},\\overrightarrow{AC}\\right) = \\dfrac{2\\sqrt{2}}{3}$",
        "answer": true
      },
      {
        "text": "Diện tích của tam giác $ABC$ bằng $2\\sqrt{2}$",
        "answer": false
      },
      {
        "text": "Toạ độ của điểm $D$ là $(-1;2;-1)$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\overrightarrow{AB} = (2;-1;-1)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\overrightarrow{AC} = (2;-2;-2)$. <br>  Suy ra $\\cos\\left(\\overrightarrow{AB},\\overrightarrow{AC}\\right) = \\dfrac{\\overrightarrow{AB}\\cdot \\overrightarrow{AC}}{AB\\cdot AC} = \\dfrac{2\\cdot 2 + (-1)\\cdot (-2) + (-1)\\cdot (-2)}{\\sqrt{2^2 + (-1)^2 + (-1)^2} \\cdot \\sqrt{2^2 + (-2)^2 + (-2)^2}} = \\dfrac{2\\sqrt{2}}{3}.$<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $\\sin \\widehat{BAC} = \\sqrt{1-\\cos^2 \\widehat{BAC}} = \\sqrt{1-\\left(\\dfrac{2\\sqrt{2}}{3}\\right)^2} = \\dfrac{1}{3}$. <br>  Suy ra $S_{ABC} = \\dfrac{1}{2}\\cdot AB\\cdot AC \\cdot \\sin\\widehat{BAC} = \\dfrac{1}{2}\\cdot \\sqrt{6}\\cdot 2\\sqrt{3}\\cdot \\dfrac{1}{3} = \\sqrt{2}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có   $\\overrightarrow{CD} = \\overrightarrow{BA}\\Leftrightarrow x_D-1 = -2 \\text{ và } y_D - 1 = 1 \\text{ và } z_D + 2 = 1\\Leftrightarrow x_D = -1 \\text{ và } y_D = 2 \\text{ và } z_D = -1.$  Vậy toạ độ điểm $D$ là $(-1;2;-1)$."
  },
  {
    "id": "2H223DS10",
    "question": "Trong không gian $Oxyz$, cho hai điểm $M(2;3;-1)$, $N(-1;1;1)$.",
    "subQuestions": [
      {
        "text": "Tọa độ vectơ $\\overrightarrow{OM}$ cho bởi $\\overrightarrow{OM} = 2\\overrightarrow{i} - 3\\overrightarrow{j} + \\overrightarrow{k}$",
        "answer": false
      },
      {
        "text": "Độ dài của vectơ $|\\overrightarrow{MN}|$ bằng $\\sqrt{17}$",
        "answer": true
      },
      {
        "text": "Tọa độ của vectơ $\\overrightarrow{v} = \\overrightarrow{OM} + \\overrightarrow{ON}$ là $\\overrightarrow{v}=(1;4;0)$",
        "answer": true
      },
      {
        "text": "Cho $P(1;m-1;3)$. Tam giác $MNP$ vuông tại $N$ khi và chỉ khi $m=1$",
        "answer": true
      }
    ],
    "explain": "Ta có $M(2;3;-1)$ và $N(-1;1;1)$.  <br>- $\\overrightarrow{OM} = (2;3;-1) = 2\\overrightarrow{i} + 3\\overrightarrow{j} - \\overrightarrow{k}$.<br>- Tọa độ vectơ $\\overrightarrow{MN} = (-3; -2; 2)$.<br>  Suy ra $|\\overrightarrow{MN}| = \\sqrt{(-3)^2 + (-2)^2 + 2^2} = \\sqrt{17}$.<br>- Tọa độ của vectơ $\\overrightarrow{v} = \\overrightarrow{OM} + \\overrightarrow{ON}= (2+(-1); 3+1; -1+1) = (1; 4; 0)$.<br>- Tam giác $MNP$ vuông tại $N$ khi $\\overrightarrow{NM} \\cdot \\overrightarrow{NP} = 0$.  <br>- $\\overrightarrow{NM} = (3; 2; -2)$.<br>- $\\overrightarrow{NP} = (1-(-1); (m-1)-1; 3-1) = (2; m-2; 2)$.  Tích vô hướng $\\overrightarrow{NM} \\cdot \\overrightarrow{NP} = 3 \\cdot 2 + 2 \\cdot (m-2) + (-2) \\cdot 2 = 6 + 2m - 4 - 4 = 2m - 2$.  $\\overrightarrow{NM} \\cdot \\overrightarrow{NP} = 0 \\Leftrightarrow 2m - 2 = 0 \\Leftrightarrow m = 1.$"
  },
  {
    "id": "2H223DS11",
    "question": "Khối rubik như hình vẽ có độ dài cạnh bằng $2$. Khi gắn rubik vào hệ trục tọa độ trong không gian $Oxyz$, cho ta lập phương $ABCD.A'B'C'D'$ có $A(0;0;0)$, $B(2;0;0)$, $D(0;2;0)$, $A'(0;0;2)$. Gọi $N$ là trung điểm của $AA'$.  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">\\quad  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_012.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ điểm $B(2;0;0)$ suy ra vectơ là $\\overrightarrow{OB} = 2\\overrightarrow{i} + 0\\overrightarrow{j} + 0\\overrightarrow{k}$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $C(0;2;2)$",
        "answer": false
      },
      {
        "text": "Tọa độ của điểm $N$ là $N(0;0;1)$",
        "answer": true
      },
      {
        "text": "Độ dài của vectơ $\\overrightarrow{AC'}$ bằng $3\\sqrt{2}$",
        "answer": false
      }
    ],
    "explain": "<br>- Lập phương $ABCD.A'B'C'D'$ có cạnh bằng $2$, với $A(0;0;0)$, $B(2;0;0)$, $D(0;2;0)$, $A'(0;0;2)$.<br>  Tọa độ vectơ $\\overrightarrow{OB} = (2;0;0) = 2\\overrightarrow{i} + 0\\overrightarrow{j} + 0\\overrightarrow{k}$.<br>- Toạ độ điểm $C(2;2;0)$.<br>- $N$ là trung điểm của $AA'$ nên  $N \\left( \\dfrac{0+0}{2}; \\dfrac{0+0}{2}; \\dfrac{0+2}{2} \\right) = N(0;0;1).$<br>- Độ dài của vectơ $\\overrightarrow{AC'}$ là  $|\\overrightarrow{AC'}|=AC' = 2\\sqrt{3}.$"
  },
  {
    "id": "2H224DS12",
    "question": "Trong không gian $Oxyz$ cho các vectơ  $\\overrightarrow{a}=(-2;1;1)$, $\\overrightarrow{b}=(2;-1;1)$, $\\overrightarrow{c}=(x;1;y)$, $\\overrightarrow{u}=-2\\overrightarrow{a}+3\\overrightarrow{b}$. Gọi $\\varphi$ là góc giữa hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ và $\\overrightarrow{c}$ là một vectơ cùng phương với $\\overrightarrow{b}$.",
    "subQuestions": [
      {
        "text": "$|\\overrightarrow{a}|=\\sqrt{6}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{u}=(10;-5;4)$",
        "answer": false
      },
      {
        "text": "$x+y=3$",
        "answer": false
      },
      {
        "text": "$\\cos\\varphi=-\\dfrac{2}{3}$",
        "answer": true
      }
    ],
    "explain": "<br>- $\\left|\\overrightarrow{a}\\right|=\\sqrt{(-2)^2+1^2+1^2}=\\sqrt{6}$.<br>- $-2\\overrightarrow{a}+3\\overrightarrow{b}=(10;-5;1)\\ne(10;-5;4)$.<br>  Vậy $(10;-5;4)$ không phải là tọa độ của $\\overrightarrow{u}$.<br>- Vì $\\overrightarrow{c}$ cùng phương với $\\overrightarrow{b}$ nên $\\overrightarrow{c}=k\\overrightarrow{b}\\Rightarrow x=2k \\text{ và } 1=-1k \\text{ và } y=k \\Rightarrow x=-2 \\text{ và } k=-1 \\text{ và } y=-1.$<br>  Suy ra $(x;y)=(-2;-1)\\Rightarrow x+y=-3$.<br>- $\\cos\\varphi=\\dfrac{\\overrightarrow{a}\\cdot\\overrightarrow{b}}{\\left|\\overrightarrow{a}\\right|\\cdot\\left|\\overrightarrow{b}\\right|}  =\\dfrac{(-2)\\cdot2+1\\cdot(-1)+1\\cdot1}{\\sqrt{(-2)^2+1^2+1^2}\\cdot\\sqrt{2^2+(-1)^2+1^2}}=\\dfrac{-4}{6}=-\\dfrac{2}{3}$."
  },
  {
    "id": "2H223DS13",
    "question": "Trong không gian $Oxyz$ cho tam giác $ABC$ với $A(3;0;-1)$, $B(1;3;-2)$, $C(2;-6;0)$. Gọi $G$ là trọng tâm của tam giác $ABC$, điểm $M(a;b;c)$ nằm trên trục hoành và cách đều hai điểm $A$ và $B$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB}=(2;-3;1)$",
        "answer": false
      },
      {
        "text": "$BC=\\sqrt{86}$",
        "answer": true
      },
      {
        "text": "$G(2;-1;-1)$",
        "answer": true
      },
      {
        "text": "$a+b+c=-1$",
        "answer": true
      }
    ],
    "explain": "<br>- $\\overrightarrow{AB}=(1-3;3-0;-2+1)=(-2;3;-1)$.<br>- $\\overrightarrow{BC} = (1;-9;2)\\Rightarrow \\left|\\overrightarrow{BC}\\right|=\\sqrt{1^2+(-9)^2+2^2}=\\sqrt{86}$.  Vậy $BC=\\sqrt{86}$.<br>- Gọi $G(x;y;z)$ là trọng tâm tam giác $ABC$, ta có  \\[x=\\dfrac{3+1+2}{3} \\text{ và } y=\\dfrac{0+3-6}{3} \\text{ và } z=\\dfrac{-1-2+0}{3}\\Leftrightarrow x=2 \\text{ và } y=-1 \\text{ và } z=-1.  \\]  Vậy $G(2;-1;-1)$.<br>- Vì điểm $M$ nằm trên trục hoành nên $M(a;0;0)$. Suy ra $b=0$ và $c=0$.<br>  Vì $M$ cách đều $A$ và $B$ nên $MA=MB$, tức là  $\\sqrt{(3-a)^2+0^2+(-1)^2}=\\sqrt{(1-a)^2+3^2+2^2}$<br>$\\Leftrightarrow\\ \\sqrt{(3-a)^2+1}=\\sqrt{(1-a)^2+13}$<br>$\\Leftrightarrow\\ (3-a)^2+1=(1-a)^2+13$<br>$\\Leftrightarrow\\ a=-1.$  Vậy $a+b+c=-1+0+0=-1$."
  },
  {
    "id": "2H223DS14",
    "question": "Cho hình hộp $ABCD.A'B'C'D'$, biết điểm $A(0;0;0)$, $B(1;0;0)$, $C(1;2;0)$, $D'(-1;3;5)$. Gọi $M, N$ là tâm của các hình bình hành $ABB'A'$, $CC'D'D$.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_017.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ $D(0;2;0)$",
        "answer": true
      },
      {
        "text": "Tọa độ $A'(-1;1;5)$",
        "answer": true
      },
      {
        "text": "Tọa độ $\\overrightarrow{MN} = (-1;1;0)$",
        "answer": false
      },
      {
        "text": "$\\left|\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{CC'}\\right| = \\sqrt{29}$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Vì $ABCD$ là hình bình hành nên $\\overrightarrow{DC} = \\overrightarrow{AB}\\Leftrightarrow (1-x; 2-y; -z) = (1;0;0) \\Leftrightarrow D(0;2;0)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\overrightarrow{AA'} = \\overrightarrow{DD'}\\Leftrightarrow \\overrightarrow{AA'} =(-1; 1; 5)\\Leftrightarrow A'(-1;1;5)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. $M$ là trung điểm của $BA'$ nên $M\\left( 0;\\dfrac{1}{2}; \\dfrac{5}{2}\\right)$ và $N$ là trung điểm của $CD'$ nên $N\\left( 0;\\dfrac{5}{2}; \\dfrac{5}{2}\\right)$.<br>  Vậy $\\overrightarrow{MN} = (0;2;0)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $\\overrightarrow{CC'} = \\overrightarrow{DD'} = (-1; 1; 5)$.<br>  Vậy $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{CC'} = (1;0;0) + (0;2;0) + (-1;1;5) = (0; 3; 5)$.<br>  Suy ra $|\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{CC'} | = \\sqrt{34}$."
  },
  {
    "id": "2H224DS15",
    "question": "Cho hình chóp $S.ABCD$ đáy là hình thang vuông tại $A$ và $D$, $SA \\perp (ABCD)$. Góc giữa $SB$ và mặt phẳng đáy bằng $45^\\circ$, $E$ là trung điểm của $SD$, $AB = 2a$, $AD = DC = a$. Gọi $G$ là trọng tâm của tam giác $ACE$. Chọn hệ trục tọa độ như hình vẽ.  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_024.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{SA} \\cdot \\overrightarrow{CB} = 0$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{CE} = \\overrightarrow{CD} + \\overrightarrow{CS}$",
        "answer": false
      },
      {
        "text": "Tọa độ của điểm $C(a; 2a; 0)$",
        "answer": false
      },
      {
        "text": "Độ dài $BG$ là $\\dfrac{a\\sqrt{113}}{6}$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Vì $SA\\perp (ABCD)$ nên $SA\\perp BC$ do đó $\\overrightarrow{SA} \\cdot \\overrightarrow{CB} = 0$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Vì $E$ là trung điểm của $SD$ nên $\\overrightarrow{CE} = \\dfrac{1}{2}\\left(\\overrightarrow{CD} + \\overrightarrow{CS}\\right)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Dựa vào hình vẽ, ta có $A(0;0;0)$, $B(0;2a;0)$, $D(a;0;0)$.<br>  Vì $CD \\parallel AB$ và $CD=\\dfrac{1}{2}AB$ nên $\\overrightarrow{DC}=\\dfrac{1}{2}\\overrightarrow{AB}$.<br>  Mà $\\overrightarrow{AB}=(0;2a;0)$.<br>  Do đó $x_C-a=0 \\text{ và } y_C=a \\text{ và } z_C=0 \\Leftrightarrow x_C=a \\text{ và } y_C=a \\text{ và } z_C=0.$<br>  Vậy $C(a;a;0)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Xét tam giác $SAB$ vuông tại $A$ có $\\widehat{B}=45^\\circ$ suy ra tam giác $SAB$ vuông cân tại $A$ hay $SA=AB=2a$.<br>  Do đó $S(0;0;2a)$.<br>  Vì $E$ là trung điểm $SD$ nên $E\\left(\\dfrac{a}{2};0;\\dfrac{a}{2}\\right)$.<br>  Vì $G$ là trọng tâm tam giác $ACE$ nên $G\\left(\\dfrac{a}{2};\\dfrac{a}{3};\\dfrac{a}{6}\\right)$.<br>  Khi đó $BG=\\sqrt{\\left(\\dfrac{a}{2}-0\\right)^2 + \\left(\\dfrac{a}{3}-2a\\right)^2 + \\left(\\dfrac{a}{6}-0\\right)^2}=\\dfrac{a\\sqrt{110}}{6}$.<br>  Vậy $BG=\\dfrac{a\\sqrt{110}}{6}$."
  },
  {
    "id": "2H223DS16",
    "question": "Trong không gian $Oxyz$, cho hình bình hành $ABCD$, biết $A(-1; 0; 3)$, $B(2; 1; -1)$, $C(3; 2; 2)$.",
    "subQuestions": [
      {
        "text": "Côsin góc $C$ của tam giác $ABC$ bằng $\\dfrac{\\sqrt{231}}{77}$",
        "answer": true
      },
      {
        "text": "Tọa độ của điểm $D$ là $D(0; 1; 6)$",
        "answer": true
      },
      {
        "text": "Điểm $M \\in (Oxy)$ sao cho $A$, $M$, $B$ thẳng hàng có tọa độ $M \\left( \\dfrac{5}{4}; -\\dfrac{3}{4}; 0 \\right)$",
        "answer": false
      },
      {
        "text": "Tọa độ điểm $N$ thỏa mãn $\\overrightarrow{NA} + \\overrightarrow{NB} - 3\\overrightarrow{NC} = \\overrightarrow{0}$ là $N(10; 5; 4)$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $\\overrightarrow{CA}=(-4;-2;1)$, $\\overrightarrow{CB}=(-1;-1;-3)$.<br>  Khi đó  \\[\\cos C = \\cos \\left(\\overrightarrow{CA},\\overrightarrow{CB}\\right) = \\dfrac{(-4)\\cdot(-1) + (-2)\\cdot(-1) + 1\\cdot(-3)}{\\sqrt{(-4)^2+(-2)^2+1^2}\\cdot\\sqrt{(-1)^2+(-1)^2+(-3)^2}} = \\dfrac{\\sqrt{231}}{77}.\\]<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Vì $ABCD$ là hình bình hành nên $\\overrightarrow{AD}=\\overrightarrow{BC} \\Leftrightarrow x_D+1=1 \\text{ và } y_D=1 \\text{ và } z_D-3=3 \\Leftrightarrow x_D=0 \\text{ và } y_D=1 \\text{ và } z_D=6.$<br>  Vậy $D(0;1;6)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Vì $M\\in (Oxy)$ nên $M(a;b;0)$.<br>  Ta có $\\overrightarrow{AB}=(3;1;-4)$, $\\overrightarrow{AM}=(a+1;b;-3)$.<br>  Để $A$, $M$, $B$ thẳng hàng thì $\\overrightarrow{AM}$ và $\\overrightarrow{AB}$ cùng phương suy ra  \\[\\dfrac{a+1}{3}=\\dfrac{b}{1}=\\dfrac{-3}{-4} \\Leftrightarrow a=\\dfrac{5}{4} \\text{ và } b=\\dfrac{3}{4}.\\]  Vậy $M\\left(\\dfrac{5}{4};\\dfrac{3}{4};0\\right)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Ta có  $\\overrightarrow{NA} + \\overrightarrow{NB} - 3\\overrightarrow{NC} = \\overrightarrow{0}$<br>$\\Leftrightarrow \\overrightarrow{NA}-\\overrightarrow{NC} + \\overrightarrow{NB}-\\overrightarrow{NC} = \\overrightarrow{NC}$<br>$\\Leftrightarrow \\overrightarrow{NC}=\\overrightarrow{CA}+\\overrightarrow{CB}.$  Ta lại có $\\overrightarrow{CA}=(-4;-2;1)$, $\\overrightarrow{CB}=(-1;-1;-3)$.<br>  Suy ra $\\overrightarrow{CA}+\\overrightarrow{CB}=(-5;-3;-2)$.<br>  Khi đó $3-x_N=-5 \\text{ và } 2-y_N=-3 \\text{ và } 2-z_N=-2 \\Leftrightarrow x_N=8 \\text{ và } y_N=5 \\text{ và } z_N=4.$<br>  Vậy $N(8;5;4)$."
  },
  {
    "id": "2H223DS17",
    "question": "Trong không gian với hệ trục tọa độ $Oxyz$, cho ba điểm $A(1; 2; 3)$, $B(2; 1; 5)$, $C(2; 4; 2)$.",
    "subQuestions": [
      {
        "text": "Điểm $I(a; b; c)$ nằm trên mặt phẳng $(Oxz)$ thỏa mãn $|3\\overrightarrow{IB} - \\overrightarrow{IC}|$ đạt giá trị nhỏ nhất. Khi đó $a - 2b + 2c = 15$",
        "answer": false
      },
      {
        "text": "Góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ bằng $30^\\circ$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = (5; 7; 10)$",
        "answer": true
      },
      {
        "text": "Tọa độ trung điểm của $AB$ là $\\left(\\dfrac{3}{2};\\dfrac{3}{2};4\\right)$",
        "answer": true
      }
    ],
    "explain": "<br>- Lấy điểm $M$ sao cho $3\\overrightarrow{MB}-\\overrightarrow{MC}$. Khi đó $M\\left(2;-\\dfrac{1}{2};4\\right)$.<br>  Ta có $\\left|3\\overrightarrow{IB}-\\overrightarrow{IC}\\right|=\\left|3\\overrightarrow{IM}+3\\overrightarrow{MB}-\\overrightarrow{IM}-\\overrightarrow{MC}\\right|=\\left|2\\overrightarrow{IM}\\right|=2IM$.<br>  $\\left|3\\overrightarrow{IB}-\\overrightarrow{IC}\\right|$ đạt giá trị nhỏ nhất khi $IM$ nhỏ nhất.<br>  Suy ra $I$ là hình chiếu $M$ lên mặt phẳng $\\left(Oxz\\right)$ nên $I\\left(2;0;4\\right)$.<br>  Do đó ta có $a-2b+2c=10$.<br>- Ta có $\\overrightarrow{AB}=(1;-1;2)$ và $\\overrightarrow{AC}=(1;2;-1)$.<br>  Khi đó  \\[\\cos \\left(\\overrightarrow{AB},\\overrightarrow{AC}\\right)=\\dfrac{1 \\cdot 1+ (-1) \\cdot 2 +2 \\cdot (-1)}{\\sqrt{1^2+(-1)^2+2^2} \\cdot \\sqrt{1^2+2^2+(-1)^2}}=-\\dfrac{1}{2}.\\]  Nên góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ là $120^\\circ$.<br>- Ta có $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = (5; 7; 10)$.<br>- Tọa độ trung điểm của $AB$ là $\\left(\\dfrac{3}{2}; \\dfrac{3}{2}; 4\\right)$."
  },
  {
    "id": "2H224DS18",
    "question": "Trong không gian $Oxyz$, cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, cạnh bên $SA$ vuông góc với đáy. Biết $A(0; 0; 0)$, $B(3; 0; 0)$, $D(0; 4; 0)$ và $S(0; 0; 5)$ (tham khảo hình vẽ).<br><img src=\"data/12/2D2/im2H2/2H22_tikz_028.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Điểm $C$ có tọa độ là $(3; 4; 0)$",
        "answer": true
      },
      {
        "text": "Vectơ $\\overrightarrow{SC}$ có tọa độ là $(-3; -4; 5)$",
        "answer": false
      },
      {
        "text": "Trọng tâm $\\triangle SBD$ có tọa độ là $\\left(1; \\dfrac{4}{3}; \\dfrac{5}{3}\\right)$",
        "answer": true
      },
      {
        "text": "Nếu $M$ là trung điểm $AB$ thì $MD$ vuông góc với $SC$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng.&lt;/strong&gt;<br>  Gọi tọa độ $C(m; n; 0) \\in (Oxy)$.<br>  Ta có $\\overrightarrow{AD} = (0; 4; 0)$; $\\overrightarrow{BC} =(m - 3; n; 0)$.<br>  Do $\\overrightarrow{AD} = \\overrightarrow{BC} \\Leftrightarrow m = 3 \\text{ và } n = 4 \\text{ và } 0=0$. Suy ra tọa độ $C(3; 4; 0).$<br>- &lt;strong&gt;Sai.&lt;/strong&gt;<br>  Tọa độ $\\overrightarrow{SC} = (3; 4; -5)$.<br>- &lt;strong&gt;Đúng.&lt;/strong&gt;<br>  Trọng tâm $\\triangle SBD$ có tọa độ là $G\\left(1; \\dfrac{4}{3}; \\dfrac{5}{3}\\right)$.<br>- &lt;strong&gt;Sai.&lt;/strong&gt;<br>  Tọa độ $M \\left(\\dfrac{3}{2}; 0; 0\\right)$. Khi đó $\\overrightarrow{MD} = \\left(-\\dfrac{3}{2}; 0; 5\\right)$.<br>  Mặt khác $\\overrightarrow{SC} = (3; 4; -5)$.<br>  Suy ra $\\overrightarrow{MD} \\cdot \\overrightarrow{SC} = -\\dfrac{3}{2}\\cdot 3 + 0 \\cdot 4 + 5 \\cdot (-5) \\ne 0$.<br>  Vậy $MD$ không vuông góc với $SC$."
  },
  {
    "id": "2H223DS19",
    "question": "Trong không gian $Oxyz$, cho hình chóp đều $S.ABCD$ có $SB=5$, $CD=3\\sqrt{2}$ được gắn vào hệ trục sao cho tâm của đáy $ABCD$ trùng với gốc tọa độ $O$ như hình vẽ.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_030.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ đỉnh $S(0;0;4)$",
        "answer": true
      },
      {
        "text": "Trọng tâm tam giác $SCD$ là điểm $G(-1;1;1)$",
        "answer": false
      },
      {
        "text": "Gọi $M$ là trung điểm cạnh $SD$ thì $BM=2\\sqrt{6}$",
        "answer": false
      },
      {
        "text": "Nếu $E(a;0;b)$ thuộc mặt phẳng $(Oxz)$ sao cho $|EG-EA|$ là lớn nhất thì $4a^2-b^2=5$, ($G$ là trọng tâm tam giác $SCD$)",
        "answer": true
      }
    ],
    "explain": "<br>- {\\bf Đúng}.<br>  Ta có $AC=BD=6$.<br>  Xét tam giác vuông $SOB$ ta có $SO=\\sqrt{SB^2-OB^2}=\\sqrt{5^2-3^2}=4$.<br>   Vậy đỉnh $S(0;0;4)$.<br>- {\\bf Sai}.<br>  Ta có $S(0;0;4)$, $C(0;3;0)$ và $D(-3;0;0)$.<br>  Trọng tâm tam giác $SCD$ là điểm $G\\left(-1;1;\\dfrac{4}{3}\\right)$.<br>- {\\bf Sai}.<br>  Ta có $B(3;0;0)$.<br>  Vì $M$ là trung điểm cạnh $SD$ suy ra $M\\left(-\\dfrac{3}{2};0;2\\right)$.<br>  Vậy $BM=\\sqrt{\\left(-\\dfrac{3}{2}-3\\right)^2+(0-0)^2+(2-0)^2}=\\dfrac{\\sqrt{97}}{2}$.<br>- {\\bf Đúng}.<br>  Ta có $C$ đối xứng với $A$ qua $(Oxz)$ nên $EA=EC$.<br>  Ta có $|EG-EA|=|EG-EC|$.<br>  Do $E$ và $C$ nằm cùng phía với $(Oxz)$ nên $|EG-EA|=|EG-EC|\\le CG$.<br>  Dấu $\"=\"$ xảy ra khi $E=CG\\cap(Oxz)$.<br>  Mà $G$ là trọng tâm tam giác $SCD$ nên $E$ là trung điểm $SD\\Rightarrow E\\left(-\\dfrac{3}{2};0;2\\right)$."
  },
  {
    "id": "2H223DS20",
    "question": "Cho hình chóp tứ giác đều $S. ABCD$ có $O$ là tâm của đáy $ABCD$, cạnh đáy bằng $a$, cạnh bên bằng $2a$ (<em>tham khảo hình bên dưới</em>).  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_033.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Cosin góc giữa hai vectơ $\\overrightarrow{BA}$ và $\\overrightarrow{CS}$ bằng $\\dfrac{1}{4}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC}+\\overrightarrow{OD}=\\overrightarrow{0}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{SA}=\\overrightarrow{SC}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{AO}\\cdot\\overrightarrow{SD}=\\dfrac{a^2}{2}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_034.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- $\\cos\\left(\\overrightarrow{BA},\\overrightarrow{CS}\\right)=\\cos\\left(\\overrightarrow{CD},\\overrightarrow{CS}\\right)=\\cos \\widehat{SCD}=\\dfrac{CD^2+CS^2-DS^2}{2CD.CS}=\\dfrac{a^2}{2a.2a^2}=\\dfrac{1}{4}$.<br>- $\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC}+\\overrightarrow{OD}=\\left(\\overrightarrow{OA}+\\overrightarrow{{OC}}\\right)+\\left(\\overrightarrow{OB}+\\overrightarrow{OD}\\right)=\\overrightarrow{0}$ (do $O$ là trung điểm $AC$, $BD$).<br>- Hai vectơ $\\overrightarrow{SA}$ và $\\overrightarrow{SC}$ cùng độ dài nhưng khác hướng, do đó $\\overrightarrow{SA}\\neq \\overrightarrow{SC}$.<br>- Ta có<br>  $\\overrightarrow{AO}\\cdot \\overrightarrow{SD}=\\overrightarrow{AO}\\cdot\\left(\\overrightarrow{OD}-\\overrightarrow{OS}\\right)=\\overrightarrow{AO}\\cdot\\overrightarrow{OD}-\\overrightarrow{AO}\\cdot \\overrightarrow{OS}=0$ (do $S.ABCD$ là chóp đều)."
  },
  {
    "id": "2H223DS21",
    "question": "Trong không gian $Oxyz$, cho hình hộp chữ nhật $ABCD\\cdot A'B'C'D'$ có đỉnh $A$ trùng với gốc toạ độ $O$, các vectơ $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{AA'}$ theo thứ tự cùng hướng với các vectơ $\\overrightarrow{i}$, $\\overrightarrow{j}$, $\\overrightarrow{k}$ và $AB=4$, $AD=3$, $\\left(\\overrightarrow{AC},\\overrightarrow{AC'} \\right)=\\ 30^{\\circ}$",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB}=4\\overrightarrow{i}+0\\overrightarrow{j}+0\\overrightarrow{k}$",
        "answer": true
      },
      {
        "text": "$C'(4;3;5\\sqrt{3})$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{AC}=3\\overrightarrow{i}+4\\overrightarrow{j}+0\\overrightarrow{k}$",
        "answer": true
      },
      {
        "text": "Gọi $x,y,z$ theo thứ tự là số đo các góc hợp bởi vectơ $\\overrightarrow{AC'}$ với các vectơ $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{AA'}$. Khi đó $\\cos^2 x+\\cos^2 y+\\cos^2 z=1$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_035.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">   <br>- Ta có $B(4;0;0)\\Rightarrow \\overrightarrow{AB}=4.\\overrightarrow{i}+0.\\overrightarrow{j}+0.\\overrightarrow{k}$.<br>- Trong tam giác vuông $ACC'$ có: $\\tan \\widehat{CAC'}=\\dfrac{CC'}{AC} \\Rightarrow CC'=AC.\\tan30^\\circ=\\dfrac{5}{\\sqrt{3}}$.<br>  Khi đó $\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=4.\\overrightarrow{i}+3\\overrightarrow{j}+CC'.\\overrightarrow{k}\\Rightarrow C'\\left(4;3;\\dfrac{5}{\\sqrt{3}}\\right)$.<br>- $\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{AD}=4\\overrightarrow{i}+3\\overrightarrow{j}+0\\overrightarrow{k}$.<br>- Trong các tam giác vuông $ABC'$, $ADC'$, $AA'C'$ ta lần lượt có<br>  $\\cos x = \\dfrac{AB}{AC'}=\\dfrac{4}{\\dfrac{10\\sqrt{3}}{3}}=\\dfrac{2\\sqrt{3}}{5} \\text{ và } \\cos y = \\dfrac{AD}{AC'}=\\dfrac{3}{\\dfrac{10\\sqrt{3}}{3}}=\\dfrac{3\\sqrt{3}}{10} \\text{ và } \\cos z = \\dfrac{AA'}{AC'}=\\dfrac{\\dfrac{5}{\\sqrt{3}}}{\\dfrac{10\\sqrt{3}}{3}}=\\dfrac{1}{2}   \\Rightarrow \\cos^2x= \\dfrac{12}{25} \\text{ và } \\cos^2y=\\dfrac{27}{100} \\text{ và } \\cos^2z=\\dfrac{1}{4} \\Rightarrow \\cos^2x + \\cos^2y + \\cos^2z = 1$."
  },
  {
    "id": "2H223DS22",
    "question": "Trong không gian với hệ trục $Oxyz$ cho hình lăng trụ $OAB.O'A'B'$ Biết $O(0;0;0)$, $A(2;0;0)$, $B(0;1;0)$, $O'(0;0;3)$.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_039.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đường thẳng $AO'$ có một vectơ chỉ phương là $\\overrightarrow{a}=(2;0;-3)$",
        "answer": true
      },
      {
        "text": "Góc gữa hai đường thẳng $O'A'$ và $AB$ bằng $56^\\circ28'$ (làm tròn kết quả đến hàng phút)",
        "answer": false
      },
      {
        "text": "Mặt phẳng $(ABO')$ có một vectơ pháp tuyến là $\\overrightarrow{n}=(3;6;2)$",
        "answer": true
      },
      {
        "text": "Trong tất các mặt cầu tiếp xúc với hai đường thẳng $AB$ và $OO'$ thì mặt cầu có bán kính $R=\\dfrac{\\sqrt{5}}{5}$ là mặt cầu có bán kính nhỏ nhất trong các mặt cầu nói trên",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\overrightarrow{AO'}=(2;0;-3)$.<br>- Ta có $\\left|\\overrightarrow{AB}\\right|=\\sqrt{5}$, $\\left|\\overrightarrow{O'A'}\\right|=2$. <br>  Khi đó $\\cos\\alpha=\\dfrac{\\left|\\overrightarrow{O'A'}\\cdot\\overrightarrow{AB}\\right|}{\\left|\\overrightarrow{O'A'}\\right|\\cdot\\left|\\overrightarrow{AB}\\right|}=\\dfrac{2\\sqrt{5}}{5}$. <br>  Suy ra $\\alpha\\approx 26{,}565\\approx 26^\\circ33'$.<br>- Ta có $\\overrightarrow{AO'}=(-2;0;3)$, $\\overrightarrow{AB}=(-2;1;0)$. <br>  Gọi $\\overrightarrow{n}$ là $1$ vectơ pháp tuyến của mặt phẳng cần tìm.<br>  Vì $\\overrightarrow{n}\\perp \\overrightarrow{AO'} \\text{ và } \\overrightarrow{n}\\perp \\overrightarrow{AB}\\Rightarrow \\overrightarrow{n}=\\left[\\overrightarrow{AO'},\\overrightarrow{AB}\\right]=(3;6;2)$.<br>- Mặt cầu có bán kính nhỏ nhất tiếp xúc với hai đường thẳng có tâm là trung điểm đoạn vuông góc chung. <br>  Có $\\overrightarrow{OO'}=(0;0;3)$, $\\overrightarrow{AB}=(-2;1;0)$ <br>  Suy ra Phương trình của hai đường thẳng là  \\[OO'\\colonx=0 \\text{ và } y=0 \\text{ và } z=3t;\\quad AB\\colonx=2-2t' \\text{ và } y=t' \\text{ và } z=0.\\]  Gọi $M\\in OO'$; $M(0;0;3t)$, $N\\in AB$; $N(2-2t';t';0)$ sao cho $MN$ là đoạn vuông góc chung giữa $OO'$ và $AB$. <br>  Khi đó $\\overrightarrow{MN}=(2-2t';t';-3t)$. <br>  Do $MN$ là đoạn vuông góc chung \\[\\Leftrightarrow \\overrightarrow{MN}\\cdot\\overrightarrow{OO'}=0 \\text{ và } \\overrightarrow{MN}\\cdot\\overrightarrow{AB}=0 \\Leftrightarrow -9t=0 \\text{ và } -2(2-2t')+t'=0 \\Leftrightarrow t=0 \\text{ và } t'=\\dfrac{4}{5} \\Rightarrow M=(0;0;0) \\text{ và } N=\\left(\\dfrac{2}{5};\\dfrac{4}{5};0\\right).\\]  Suy ra bán kính nhỏ nhất mặt cầu thỏa mãn là   \\[\\dfrac{\\left|\\overrightarrow{MN}\\right|}{2}=\\dfrac{\\sqrt{\\left(\\dfrac{2}{5}\\right)^2+\\left(\\dfrac{4}{5}\\right)^2}}{2}=\\dfrac{\\sqrt{5}}{5}.\\]"
  },
  {
    "id": "2H223DS23",
    "question": "Trong không gian $Oxyz$ cho $\\overrightarrow{a}=(2 ; 1 ;-2)$ và $\\overrightarrow{b}=(0 ; 3 ; 0)$. Các mệnh đề dưới đây đúng hay sai?",
    "subQuestions": [
      {
        "text": "Độ dài véc tơ $\\overrightarrow{a}$ bằng 3",
        "answer": true
      },
      {
        "text": "Tích vô hướng của véc tơ $\\overrightarrow{a} ; \\vec{b}$ là $\\overrightarrow{a} \\cdot \\overrightarrow{b}=5$",
        "answer": false
      },
      {
        "text": "Tích có hướng của vec tơ $\\overrightarrow{a} ; \\overrightarrow{b}$ là $\\left[\\overrightarrow{a} ; \\overrightarrow{b}\\right]=(6 ; 0 ;-4)$",
        "answer": false
      },
      {
        "text": "Véc tơ $\\overrightarrow{c}=(3 ; 2 ;-2)$ vuông góc với $\\overrightarrow{a}=(2 ; 1 ;-2)$",
        "answer": false
      }
    ],
    "explain": "<br>- $|\\overrightarrow{a}|=\\sqrt{2^2+1^2+2^2}=3$.<br>- $\\overrightarrow{a} \\cdot \\overrightarrow{b}=2\\cdot0 + 1\\cdot 3 -2\\cdot 0=3$.<br>- $\\left[\\overrightarrow{a} ; \\overrightarrow{b}\\right]=(1\\cdot0 +2\\cdot3; -2\\cdot0-2\\cdot0 ;2\\cdot3-0\\cdot1)=(6;0;6)$.<br>- Ta có $\\overrightarrow{a} \\cdot \\overrightarrow{c}=6+2+4=12 \\ne 0$ nên véc tơ $\\overrightarrow{c}$ không vuông góc với $\\overrightarrow{a}$."
  },
  {
    "id": "2H223DS24",
    "question": "Một chiếc trực thăng $H$ cất cánh từ một sân bay. Xét hệ trục tọa độ $O x y z$ có gốc tọa độ $O$ là chân tháp điều khiển sân bay; trục $O x$ là hướng đông, trục $O y$ là hướng bắc và trục $O z$ là trục thẳng đứng, đơn vị trên mỗi trục là kilômét. Trực thăng cất cánh từ điểm $G$ trên mặt đất. Vị trí của trực thăng tại thời điểm $t$ phút sau khi cất cánh $(t \\geq 0)$ có tọa độ là $M\\left(1+t ; \\dfrac{1}{2}+2 t ; 2 t\\right)$. Một hòn đảo ở vị trí $D(150 ; 115 ; 0)$",
    "subQuestions": [
      {
        "text": "Toạ độ điểm $G$ là $\\left(1 ; \\dfrac{1}{2}; 0\\right)$",
        "answer": true
      },
      {
        "text": "Toạ độ của véctơ $\\overrightarrow{M D}$ là $\\left(149-t ; \\dfrac{129}{2}-2 t ;-2 t\\right)$",
        "answer": false
      },
      {
        "text": "Khoảng cách của trực thăng so với vị trí xuất phát sau 5 phút bay là 15 km",
        "answer": true
      },
      {
        "text": "Trực thăng $H$ bay đến vị trí $M_0(x_0 ; y_0 ; z_0)$ thì khoảng cách từ trực thăng đến $D$ là nhỏ nhất. Khi đó $20(x_0+y_0+z_0)=4320$",
        "answer": false
      }
    ],
    "explain": "<br>- Từ giả thiết vị trí của trực thăng tại thời điểm $t$ phút sau khi cất cánh $(t \\geq 0)$ có tọa độ là $M\\left(1+t ; \\dfrac{1}{2}+2 t ; 2 t\\right)$ ta cho $t=0$ được tọa độ điểm $G\\left(1;\\dfrac{1}{2};0\\right)$.<br>- $\\overrightarrow{M D}$ là $\\left(149-t ; \\dfrac{229}{2}-2 t ;-2 t\\right)$.<br>- Sau thời gian $5$ phút thì trực thăng ở vị trí điểm $K\\left(6;\\dfrac{21}{2};10\\right)$.<br>  Vậy khoảng cách của trực thăng so với vị trí xuất phát là $GK=\\sqrt{5^2+10^2+10^2}=15$ (km).<br>- Ta có $MD=\\sqrt{(149-t)^2 + \\left(\\dfrac{229}{2}-2t\\right)^2+4t^2}=\\sqrt{9(t-42)^2+\\dfrac{77741}{4}} \\geq \\dfrac{17\\sqrt{269}}{2}$.<br>  Dấu đẳng thức xảy ra khi $t=42$. Do đó khoảng cách từ trực thăng đến $D$ nhỏ nhất khi $t=42$ hay trực thăng ở vị trí $M_0\\left(43;\\dfrac{169}{2};84\\right)$.<br>  Suy ra $x_0=43 \\text{ và } y_0=\\dfrac{169}{2} \\text{ và } z_0=84. \\Rightarrow 20(x_0+y_0+z_0)=4230$."
  },
  {
    "id": "2H223DS25",
    "question": "Trong không gian $Oxyz$, cho tam giác $ABC$ biết $A(2;1;1)$, $B(1;2;1)$, $C(2;-1;3)$.",
    "subQuestions": [
      {
        "text": "Độ dài cạnh $AB$ bằng $\\sqrt{2}$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $M$ sao cho $\\vec{AB}+\\vec{AM}=\\vec{0}$ là $(3;0;1)$",
        "answer": true
      },
      {
        "text": "Tọa độ trọng tâm của tam giác $ABC$ là $(5;2;0)$",
        "answer": false
      },
      {
        "text": "$\\widehat{BAC}=45^{\\circ}$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $AB=\\sqrt{(1-2)^2+(2-1)^2+(1-1)^2}=\\sqrt{2}$.<br>- Do $\\vec{AB}+\\vec{AM}=\\vec{0}$ nên $A$ là trung điểm của $BM$.<br>  Suy ra $x_M=2x_A-x_B=3 \\text{ và } y_M=2y_A-y_B=0 \\text{ và } z_M=2z_A-z_B=1\\Rightarrow M(3;0;1)$.<br>- Gọi $G$ là trọng tâm của tam giác $ABC$, ta có $x_G=\\dfrac{x_A+x_B+x_C}{3}=\\dfrac{5}{3} \\text{ và } y_G=\\dfrac{y_A+y_B+y_C}{3}=\\dfrac{2}{3} \\text{ và } z_G=\\dfrac{z_A+z_B+z_C}{3}=\\dfrac{5}{3}\\Rightarrow G\\left(\\dfrac{5}{3};\\dfrac{2}{3};\\dfrac{5}{3}\\right)$.<br>- Ta có $\\vec{AB}=(-1;1;0)$, $\\vec{AC}=(0;-2;2)$, suy ra  \\[\\cos\\widehat{BAC}=\\cos\\left(\\vec{AB},\\vec{AC}\\right)=\\dfrac{\\vec{AB}\\cdot\\vec{AC}}{\\left|\\vec{AB}\\right|\\cdot\\left|\\vec{AC}\\right|}=\\dfrac{-2}{\\sqrt{2}\\cdot\\sqrt{8}}=-\\dfrac{1}{2}.\\]  Vậy $\\widehat{BAC}=120^\\circ$."
  },
  {
    "id": "2H223DS26",
    "question": "Trong không gian $Oxyz$, cho $\\triangle ABC$, biết $A(3;1;-3)$, $B(4; 2;0)$, $C(-1;0;3)$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{OA}=3\\overrightarrow{i}+\\overrightarrow{j}+3\\overrightarrow{k}$",
        "answer": false
      },
      {
        "text": "$G(2;1;0)$ là trọng tâm tam giác $ABC$",
        "answer": true
      },
      {
        "text": "Hình chiếu của $C$ lên $Ox$ là $C'(-1; 0; 0)$",
        "answer": true
      },
      {
        "text": "Khoảng cách giữa $2$ điểm $A$ và $B$ bằng $\\sqrt{8}$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $\\overrightarrow{OA}=3\\overrightarrow{i}+\\overrightarrow{j}-3\\overrightarrow{k}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br> Tam giác $ABC$ có tọa độ trọng tâm $G=\\left( \\dfrac{3+4-1}{3};\\dfrac{1+2+0}{3};\\dfrac{-3+0+3}{3}\\right) =(2;1;0)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Hình chiếu của $C$ lên $Ox$ là $C'(-1;0;0)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $AB=\\sqrt{(4-3)^2+(2-1)^2+(0+3)^2}=\\sqrt{11}$."
  },
  {
    "id": "2H224DS27",
    "question": "Trong không gian $Oxyz$, vị trí của điểm $M$ như hình vẽ. Gọi $H$ là hình chiếu vuông góc của $M$ xuống mặt phẳng $(Oxy)$. Cho biết $AH=12$, $(\\vec{i},\\overrightarrow{OH})=30^{\\circ}$, $(\\overrightarrow{OH}, \\overrightarrow{OM})=60^{\\circ}$.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_045.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ của điểm $A$ là $(12\\sqrt{3};0;0)$",
        "answer": true
      },
      {
        "text": "Tọa độ của điểm $B$ là $(12;0;0)$",
        "answer": false
      },
      {
        "text": "$OC=OM\\cdot \\sin \\widehat{HOM}$",
        "answer": true
      },
      {
        "text": "Tọa độ của điểm $M$ là $(12\\sqrt{3};12;48\\sqrt{3})$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $OA=AH\\cdot \\cot 30^\\circ=12\\sqrt{3}$ nên $A=(12\\sqrt{3};0;0)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $OB=AH=12$ nên $A=(0;12;0)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $OC=OM\\cdot \\cos \\widehat{MOC}= OM\\cdot \\sin \\widehat{HOM}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $OH=\\sqrt{OA^2+AH^2}=\\sqrt{(12\\sqrt{3})^2+12^2}=24$.<br>  $HM=OH\\cdot \\tan 60^\\circ=24\\sqrt{3}$.  Suy ra $M(12\\sqrt{3};12;24\\sqrt{3})$."
  },
  {
    "id": "2H223DS28",
    "question": "Trong hệ trục $Oxyz$, cho 3 điểm $A(1;0;0)$, $B(0;0;1)$, $C(2;1;1)$. Xét tính đúng sai của các mệnh đề",
    "subQuestions": [
      {
        "text": "Diện tích của tam giác $ABC$ bằng $\\dfrac{\\sqrt{6}}{2}$ (đvdt)",
        "answer": true
      },
      {
        "text": "Gọi $D(x ; y ; z)$ sao cho tứ giác $A B C D$ là một hình bình hành khi đó $x+y+z=3$",
        "answer": false
      },
      {
        "text": "Độ dài đường cao của tam giác $ABC$ hạ từ $A$ bằng $AH=\\dfrac{\\sqrt{30}}{5}$ (đơn vị dài)",
        "answer": true
      },
      {
        "text": "Thể tích của khối chóp $S.ABCD$ với đỉnh $S(0;3;4)$ bằng $2$ (đvtt)",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\overrightarrow{AB}=(-1;0;1) \\text{ và } \\overrightarrow{AC}=(1;1;1)\\Rightarrow\\left[ \\overrightarrow{AB},\\overrightarrow{AC}\\right]=(-1;2;-1)\\Rightarrow\\left|\\left[ \\overrightarrow{AB},\\overrightarrow{AC}\\right]\\right|=\\sqrt{6}$.<br>  $S_{ABC}=\\dfrac{1}{2}\\cdot\\left|\\left[ \\overrightarrow{AB},\\overrightarrow{AC}\\right]\\right|=\\dfrac{\\sqrt{6}}{2}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Do $ABCD$ là hình bình hành nên<br>  $\\overrightarrow{AB}=\\overrightarrow{CD}\\Rightarrow x=1+2-0=3 \\text{ và } y=0+1-0=1 \\text{ và } z=0+1-1=0\\Rightarrow x+y+z=4$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\overrightarrow{BC}=(2;1;0)\\Rightarrow BC=\\sqrt{5}$.<br>  Ta có $AH=\\dfrac{2S_{ABC}}{BC}=\\dfrac{\\sqrt{30}}{5}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $\\overrightarrow{n}=\\left[ \\overrightarrow{AB},\\overrightarrow{AC}\\right]=(-1;2;-1)$ là vectơ pháp tuyến của $(ABCD)$.<br>  Nên $(ABCD)\\colon x-2y+z-1=0$, $\\mathrm{d}\\left(S,(ABCD)\\right)=\\dfrac{3}{\\sqrt{6}}=\\dfrac{\\sqrt{6}}{2}$.<br>  $V_{S.ABCD}=\\dfrac{1}{3}\\cdot\\mathrm{d}\\left(S,(ABCD)\\right)\\cdot2\\cdot S_{ABC}=\\dfrac{1}{3}\\cdot\\dfrac{\\sqrt{6}}{2}\\cdot2\\cdot\\dfrac{\\sqrt{6}}{2}=1$ (đvtt)."
  },
  {
    "id": "2H223DS29",
    "question": "Trong không gian $Oxyz$, cho vectơ $\\overrightarrow{OA} = (2;1;3)$ và điểm $B(3;4;5)$.",
    "subQuestions": [
      {
        "text": "Cho $N \\in (Oxy)$ để $\\triangle ABN$ cân tại $N$ và tam giác $OAN$ vuông tại $O$. Tổng hoành độ và tung độ điểm $N$ thỏa mãn yêu cầu bằng $\\dfrac{18}{5}$",
        "answer": true
      },
      {
        "text": "Tọa độ của điểm $A$ là $(2;1;3)$",
        "answer": true
      },
      {
        "text": "Nếu $A$, $B$, $M(x;y;1)$ thẳng hàng thì tổng $x + y = -1$",
        "answer": true
      },
      {
        "text": "Gọi $C(a;b;c)$ thỏa mãn $\\triangle ABC$ nhận $G(1;1;1)$ làm trọng tâm. Khi đó $a + b + c = -9$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\overrightarrow{OA} = (2;1;3) \\Rightarrow A(2;1;3)$.<br>  Vì $N \\in (Oxy)$ nên $N(x;y;0) \\Rightarrow \\overrightarrow{AN} = (x-2;y-1;-3)$, $\\overrightarrow{BN} = (x-3;y-4;-5)$.<br>  Để $\\triangle ABN$ cân tại $N$ thì  $ AN = BN \\Leftrightarrow AN^2 = BN^2 \\Leftrightarrow (x-2)^2 + (y-1)^2 + 9 = (x-3)^2 + (y-4)^2 + 25. \\qquad (1) $  Hơn nữa, ta có $\\overrightarrow{ON} = (x;y;0)$.<br>  Để $\\triangle OAN$ vuông tại $O$ thì  $ \\overrightarrow{OA}\\cdot \\overrightarrow{ON} = 0 \\Leftrightarrow 2\\cdot x + 1\\cdot y + 3\\cdot 0 = 0 \\Leftrightarrow y = -2x. $  Thay $y = -2x$ vào $(1)$, ta được  $(x-2)^2 + (y-1)^2 + 9 = (x-3)^2 + (y-4)^2 + 25$<br>$\\Leftrightarrow (x-2)^2 + (-2x-1)^2 + 9 = (x-3)^2 + (-2x-4)^2 + 25$<br>$\\Leftrightarrow x^2 - 4x + 4 + 4x^2 + 4x + 1 + 9 = x^2 - 6x + 9 + 4x^2 + 16x + 16 + 25$<br>$\\Leftrightarrow -10x = 36$<br>$\\Leftrightarrow x = -\\dfrac{18}{5}.$  Suy ra $y = -2x = -2\\cdot \\left(-\\dfrac{18}{5}\\right) = \\dfrac{36}{5} \\Rightarrow N\\left(-\\dfrac{18}{5};\\dfrac{36}{5};0\\right)$.<br>  Do đó, tổng hoành độ và tung độ điểm $N$ thỏa mãn yêu cầu bằng   $x + y = -\\dfrac{18}{5} + \\dfrac{36}{5} = \\dfrac{18}{5}.$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\overrightarrow{OA} = (2;1;3) \\Rightarrow A(2;1;3)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\overrightarrow{AB} = (1;3;2)$, $\\overrightarrow{AM} = (x-2;y-1;-2)$.<br>  Nếu $A$, $B$, $M$ thẳng hàng thì $\\overrightarrow{AB}$ và $\\overrightarrow{AM}$ cùng phương hay  $ \\dfrac{x-2}{1} = \\dfrac{y-1}{3} = \\dfrac{-2}{2} \\Leftrightarrow \\dfrac{x-2}{1} = \\dfrac{-2}{2} \\text{ và } \\dfrac{y-1}{3} = \\dfrac{-2}{2} \\Leftrightarrow x = 1 \\text{ và } y = -2 \\Rightarrow x + y = 1 + (-2) = -1. $<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Để $\\triangle ABC$ nhận $G(1;1;1)$ làm trọng tâm thì  $ 1 = \\dfrac{2 + 3 + a}{3} \\text{ và } 1 = \\dfrac{1 + 4 + b}{3} \\text{ và } 1 = \\dfrac{3 + 5 + c}{3} \\Leftrightarrow a = -2 \\text{ và } b = -2 \\text{ và } c = -5 \\Rightarrow a + b + c = (-2) + (-2) + (-5) = -9. $"
  },
  {
    "id": "2H223DS30",
    "question": "Trong không gian $Oxyz$, cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có đỉnh $A$ trùng với gốc tọa độ $O$ và các đỉnh $B$; $C$; $D'$ có tọa độ lần lượt là $(3;0;0)$, $(3;4;0)$, $(0;4;5)$. Khi đó<br><img src=\"data/12/2D2/im2H2/2H22_tikz_054.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB}\\cdot \\overrightarrow{AC}=0$",
        "answer": false
      },
      {
        "text": "Tọa độ điểm $D$ là $(0;4;0)$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{AB'}$",
        "answer": false
      },
      {
        "text": "Tọa độ điểm $C'$ là $(3;4;5)$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>   Ta thấy $\\overrightarrow{AB}=(3;0;0)$, $\\overrightarrow{AC}=(3;4;0)$ nên $\\overrightarrow{AB}\\cdot \\overrightarrow{AC}=9\\neq 0$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>   Vì $D$ là hình chiếu vuông góc của $D'$ lên $Ay$ nên $D(0;4;0)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>   Vì $A'$ là hình chiếu vuông góc của $D'$ lên $Az$ nên $A'(0;0;5)$.<br>  Vì $\\overrightarrow{AB'}=\\overrightarrow{AB}+\\overrightarrow{AA'}=(3;0;5)$ nên $B'(3;0;5)$.<br>  Do đó $\\overrightarrow{AD}+\\overrightarrow{AA'}=(0;4;5)\\neq \\overrightarrow{AB'}=(3;0;5)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>   Theo quy tắc hình hộp, ta có $\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=(3;4;5)$ nên $C'(3;4;5)$."
  },
  {
    "id": "2H223DS31",
    "question": "Trong không gian $Oxyz$, cho các điểm $A(3;1;1)$, $B(1;1;-1)$ và $C(2;-2;-3)$.",
    "subQuestions": [
      {
        "text": "Tọa độ trung điểm $I$ của đọan thẳng $AB$ là $(2;1;0)$",
        "answer": true
      },
      {
        "text": "Hình chiếu vuông góc của điểm $B$ lên mặt phẳng $(Oxz)$ có tọa độ là $(0;1;0)$",
        "answer": false
      },
      {
        "text": "Toạ độ trọng tâm của tam giác $ABC$ là $(2;0;-1)$",
        "answer": true
      },
      {
        "text": "Độ dài đoạn $BC$ là $14$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Tọa độ trung điểm $I$ của đoạn thẳng $AB$ là $I\\left(\\dfrac{3+1}{2};\\dfrac{1+1}{2};\\dfrac{1+(-1)}{2}\\right)$ hay $I(2;1;0)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Điểm $B$ chiếu xuống mặt phẳng $(Oxz)$ nên ta sẽ giữ nguyên hoành độ và cao độ, còn tung độ bằng $0$, do đó ta có điểm $(1;0;-1)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Trọng tâm của tam giác $ABC$ có tọa độ là $G\\left(\\dfrac{3+1+2}{3};\\dfrac{1+1+(-2)}{3};\\dfrac{1+(-1)+(-3)}{3}\\right)$ hay $G(2;0;-1)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Ta có $\\overrightarrow{BC}=(1;-3;-2)$ nên $BC=\\left|\\overrightarrow{BC}\\right|=\\sqrt{1+9+4}=\\sqrt{14}$."
  },
  {
    "id": "2H223DS32",
    "question": "Trong không gian $Oxyz$, cho các vectơ  $\\overrightarrow{a}=(-2;3;1),\\, \\overrightarrow{b}=(1;-1;2),\\, \\overrightarrow{c}=(-7;9;-4).$",
    "subQuestions": [
      {
        "text": "$2\\overrightarrow{a}=(-4;6;2)$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{a}+2\\overrightarrow{b}=(0;1;3)$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{c}=2\\overrightarrow{a}-3\\overrightarrow{b}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{a}\\cdot \\overrightarrow{b}=-7$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  $2\\overrightarrow{a}=(-2\\cdot 2;3\\cdot 2;1\\cdot 2)=(-4;6;2)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  $\\overrightarrow{a}=(-2;3;1)$.<br>  $2\\overrightarrow{b}=(2;-2;4)$.<br>  $\\overrightarrow{a}+2\\overrightarrow{b}=(0;1;5)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  $2\\overrightarrow{a}=(-4;6;2)$.<br>  $-3\\overrightarrow{b}=(-3;3;-6)$.<br>  $2\\overrightarrow{a}-3\\overrightarrow{b}=(-7;9;-4)=\\overrightarrow{c}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  $\\overrightarrow{a}\\cdot \\overrightarrow{b}  =(-2)\\cdot 1+3\\cdot (-1)+1\\cdot 2=-3$."
  },
  {
    "id": "2H223DS33",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho ba điểm $A(1;1;2)$; $B(3;1;0)$ và $C(-2;1;5)$.",
    "subQuestions": [
      {
        "text": "Điểm đối xứng của điểm $A$ qua trục hoành là điểm $A'(-1;1;2)$",
        "answer": false
      },
      {
        "text": "Tọa độ của vectơ $\\overrightarrow{OB}=(-3;-1;0)$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{AB}=2\\vec{i}-2\\vec{k}$",
        "answer": true
      },
      {
        "text": "Trọng tâm của tam giác $ABC$ là điểm $G\\left(\\dfrac{2}{3};1;\\dfrac{7}{3}\\right)$",
        "answer": true
      }
    ],
    "explain": "<br>- Điểm đối xứng của điểm $A(1;1;2)$ qua trục hoành là điểm $A'(1;-1;-2)$.<br>- Tọa độ của vectơ $\\overrightarrow{OB}=(3;1;0)$.<br>- Ta có $\\overrightarrow{AB}=(2;0;-2)=2\\vec{i}-2\\vec{k}$.<br>- Toa độ trọng tâm $G$ của tam giác $ABC$ là   \\[x_G=\\dfrac{1+3+(-2)}{3}=\\dfrac{2}{3} \\text{ và } y_G=\\dfrac{1+1+1}{3}=1 \\text{ và } z_G=\\dfrac{2+0+5}{3}=\\dfrac{7}{3}\\Rightarrow G\\left(\\dfrac{2}{3};1;\\dfrac{7}{3}\\right).\\]"
  },
  {
    "id": "2H223DS36",
    "question": "Trong không gian $Oxyz$ cho các điểm $A(5 ; 1 ; 3) ; B(4 ; 2 ; 3) ; C(5 ; 0 ; 3)$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB}=(-1 ; 1 ; 0)$; $\\overrightarrow{A C}=(0 ;-1 ; 0)$",
        "answer": true
      },
      {
        "text": "$AB=\\sqrt{3}$; $AC=2$",
        "answer": false
      },
      {
        "text": "Góc $\\widehat{B A C}=45^{\\circ}$",
        "answer": true
      },
      {
        "text": "Diện tích tam giác $ABC$ bằng $\\dfrac{1}{2}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\overrightarrow{AB}=(-1 ; 1 ; 0)$; $\\overrightarrow{A C}=(0 ;-1 ; 0)$.<br>- Ta có $AB=\\sqrt{(-1)^2+1^2+0^2}=\\sqrt{2}$.<br>  $AC=\\sqrt{0^2+(-1)^2+0^2}=1$.<br>- Ta có $\\cos ({BAC})=\\left| \\cos (\\vec{AB};\\vec{AC}) \\right|= \\dfrac{\\left| (-1)\\cdot0+1\\cdot(-1)+0\\cdot0\\right| }{\\sqrt{2}\\cdot1}=\\dfrac{1}{\\sqrt{2}}$<br>  Suy ra $\\widehat{BAC}=45^\\circ$.<br>- Diện tích tam giác $ABC$ là<br>  $S=\\dfrac{1}{2}AB\\cdot AC \\cdot \\sin ({BAC})=\\dfrac{1}{2} \\sqrt{2}\\cdot 1 \\cdot \\sin (45^\\circ)=\\dfrac{1}{2}$"
  },
  {
    "id": "2H223DS37",
    "question": "Trong không gian $Oxyz$, cho hình chóp đều $S.ABCD$ có $SB=10$, $CD=6\\sqrt{2}$ được gắn vào hệ trục sao cho tâm của đáy $ABCD$ trùng với gốc tọa độ $O$ như hình vẽ.<br><img src=\"data/12/2D2/im2H22/dlts_12_DLTS10_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ đỉnh $S(0;0;6)$",
        "answer": false
      },
      {
        "text": "Trọng tâm tam giác $SCD$ là điểm $G\\left(-2;2;\\dfrac{8}{3}\\right)$",
        "answer": true
      },
      {
        "text": "Gọi $M$ là trung điểm cạnh $SD$ thì $BM=\\sqrt{79}$",
        "answer": false
      },
      {
        "text": "Nếu $E(a;0;b)$ thuộc mặt phẳng $(Oxz)$ sao cho $|EG-EA|$ là lớn nhất thì $4a^2-b^2=5$ ($G$ là trọng tâm tam giác $SCD$)",
        "answer": false
      }
    ],
    "explain": "Ta tính được $BD=CD\\sqrt{2}=12$, suy ra $SO=\\sqrt{SB^2-OB^2}=\\sqrt{10^2-6^2}=8$.<br>  Do hệ trục tọa độ gắn như hình vẽ nên ta có tọa độ các điểm như sau $O(0;0;0)$, $A(0;-6;0)$, $B(6;0;0)$, $C(0;6;0)$, $D(-6;0;0)$ và $S(0;0;8)$.  <br>- <strong>Sai</strong>.<br>  Tọa độ đỉnh $S(0;0;8)$.<br>- <strong>Đúng</strong>.<br>  $G$ là trọng tâm tam giác $SCD$ nên $G\\left(-2;2;\\dfrac{8}{3}\\right)$.<br>- <strong>Sai</strong>.<br>  $M$ là trung điểm cạnh $SD$ nên $M(-3;0;4)$.<br>  Khi đó $\\overrightarrow{BM}=(-9;0;4)$, suy ra $BM=\\left|\\overrightarrow{BM}\\right|=\\sqrt{(-9)^2+4^2}=\\sqrt{97}$.<br>- <strong>Sai</strong>.<br>  Nhận thấy $A$ và $G$ nằm khác phía so với mặt phẳng $(Oxz)$.<br>  Gọi $G'$ là điểm đối xứng với $G$ qua mặt phẳng $(Oxz)$ nên ta có $G'\\left(-2;-2;\\dfrac{8}{3}\\right)$.<br>  Khi đó $|EG-EA|=|EG'-EA|\\leq AG'$.<br>  Dấu \\lq\\lq$=$\\rq\\rq\\ xảy ra khi $E$ là giao điểm của đường thẳng $AG'$ với mặt phẳng $(Oxz)$.<br>  Ta có $\\overrightarrow{AG'}=\\left(-2;4;\\dfrac{8}{3}\\right)$.<br>  Đường thẳng $AG'$ đi qua $A(0;-6;0)$ và có một vectơ chỉ phương là $\\overrightarrow{u}=\\dfrac{3}{2}\\overrightarrow{AG'}=(-3;6;4)$ nên có phương trình tham số là $x=-3t \\text{ và } y=-6+6t \\text{ và } z=4t.$<br>  Giao điểm của $AG'$ và mặt phẳng $(Oxz)$ thỏa mãn \\[-6+6t=0\\Leftrightarrow t=1\\Rightarrow E(-3;0;4).\\]  Suy ra $a=-3$, $b=4$ nên $4a^2-b^2=4\\cdot (-3)^2-4^2=20$."
  },
  {
    "id": "2H223DS38",
    "question": "Trong không gian $Oxyz$, cho hai điểm $B\\left( 0;3;1\\right)$, $C\\left( -3;6;4\\right)$. Các khẳng định sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Véc-tơ đơn vị của trục $ Oy $ là $ \\overrightarrow{j}=(0;-1;0) $",
        "answer": false
      },
      {
        "text": "$ \\overrightarrow{BC}=\\left(3;-3;-3\\right) $",
        "answer": false
      },
      {
        "text": "Hình chiếu của $ C $ trên $ \\left(Oxy\\right) $ có tọa độ là $ \\left(-3;6;0\\right) $",
        "answer": true
      },
      {
        "text": "Gọi $M$ là điểm nằm trên đoạn $BC$ sao cho $MC=2MB$. Tọa độ của $ M $ là $ \\left( -1;4;2\\right) $",
        "answer": true
      }
    ],
    "explain": "<br>- Véc-tơ đơn vị của trục $ Oy $ là $ \\overrightarrow{j}=(0;1;0) $.<br>- $ \\overrightarrow{BC}=\\left(x_C-x_B;y_C-y_B;z_C-z_B\\right)\\left(-3;3;3\\right) $.<br>- Hình chiếu của $ C $ trên $ \\left(Oxy\\right) $ có tọa độ là $ \\left(-3;6;0\\right) $<br>- Gọi $M(a;b;c)$, khi đó $\\overrightarrow{MC}=-2\\overrightarrow{MB} \\Leftrightarrow -3-a=-2(-a) \\text{ và } 6-b=-2(3-b) \\text{ và } 4-c=-2(1-c) \\Leftrightarrow a=-1 \\text{ và } b=4 \\text{ và } c=2.$<br>  Vậy $M\\left( -1;4;2\\right)$."
  },
  {
    "id": "2H223DS39",
    "question": "Cho hình hộp chữ nhật $ OACB.O'A'C'B' $ có $ OA=2 $; $ OB=3 $; $ OC=4 $ được đặt trong không gian $ Oxyz $ như hình vẽ. Các khẳng định sau đúng hay sai?<br><img src=\"data/12/2D2/im2H22/dlts_12_DLTS6_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ điểm $A$ là $(2;0;0)$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $C$ là $(2;3;0)$",
        "answer": true
      },
      {
        "text": "Tọa độ của $C'$ là $(2;3;4)$",
        "answer": true
      },
      {
        "text": "Gọi $ I $ là tâm của hình hộp chữ nhật đã cho. Tọa độ $ I $ là $H(1;2;2)$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $A(2;0;0)$.<br>- Ta có $ C(2;3;0) $.<br>- Ta có $ C'(2;3;4) $.<br>- $ I $ là trung điểm $ OC' $.<br>  $\\overrightarrow{OI}=\\dfrac{1}{2}\\overrightarrow{OC'}=\\dfrac{1}{2}\\left(\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OO'}\\right) =\\dfrac{1}{2}(2\\overrightarrow{i}+3\\overrightarrow{j}+4\\overrightarrow{k}) \\Rightarrow I\\left(1;\\dfrac{3}{2};2\\right)$."
  },
  {
    "id": "2H224DS40",
    "question": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh bằng $2$, $SA$ vuông góc với đáy và $SA =1$. Thiết lập hệ toạ độ $ Oxyz $ như hình vẽ bên. Các khẳng định sau đúng hay sai?<br><img src=\"data/12/2D2/im2H22/dlts_12_DLTS6_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ điểm $ H $ là $\\left(0;0;1\\right) $",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $ B $ là $ (1;0;0) $",
        "answer": false
      },
      {
        "text": "Tọa độ điểm $ S $ là $ \\left(0;\\sqrt{3};1\\right) $",
        "answer": true
      },
      {
        "text": "Tọa độ véc-tơ $ \\overrightarrow{AC}=\\left(1;\\sqrt{3};0\\right) $",
        "answer": false
      }
    ],
    "explain": "<br>- Dựa vào hình vẽ ta thấy $ H \\in Oz $, $ OH=AS=1 $ nên $ H(0;0;1) $.<br>- $ B $ thuộc tia đối của tia $ Ox $, $ OB=1 $ nên $ B\\left(-1;0;0\\right) $.<br>- $ S \\in \\left(Oyz\\right) $, hình chiếu của $ S $ lên trục $ Oy, Oz $ lần lượt là $ A, H $ và $ OA=\\sqrt{AB^2-BO^2}=\\sqrt{3} $; $ OH=AS=1 $ nên $ S\\left(0;\\sqrt{3};1\\right) $.<br>- $ A(0;\\sqrt{3};0) $, $ C(1;0;0) \\Rightarrow \\overrightarrow{AC}=\\left(1;\\sqrt{3};0\\right)$."
  },
  {
    "id": "2H223DS41",
    "question": "Trong hệ trục tọa độ $O x y z$, cho bốn điểm $A(0 ;-2 ; 1)$; $B(1;0;-2)$; $C(3 ; 1 ;-2)$; $D(-2;-2;-1)$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Bốn điểm $A$, $B$, $C$, $D$ không đồng phẳng",
        "answer": false
      },
      {
        "text": "Tam giác $A C D$ là tam giác vuông tại $A$",
        "answer": true
      },
      {
        "text": "Góc giữa hai véctơ $\\overrightarrow{A B}$ và $\\overrightarrow{C D}$ là góc tù",
        "answer": true
      },
      {
        "text": "Tam giác $A B D$ là tam giác cân tại $B$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Ta có $\\overrightarrow{AB}=(1;2;-3)$, $\\overrightarrow{AC}=(3;3;-3)$, $\\overrightarrow{AD}=(-2;0;-2)$.<br>  Suy ra $\\left[\\overrightarrow{AB},\\overrightarrow{AC}\\right]\\cdot\\overrightarrow{AD}=0$ nên $A$, $B$, $C$, $D$ đồng phẳng.<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{AC}\\cdot\\overrightarrow{AD}=0 \\text{ và } AC=3\\sqrt{3}\\neq AD=2\\sqrt{2}$ nên tam giác $ACD$ vuông tại $A$.<br>- <strong>Sai</strong>. Ta có $\\overrightarrow{CD}=(-5;-3;1)\\Rightarrow CD=\\sqrt{35}$, $\\overrightarrow{AB}=(1;2;-3)\\Rightarrow AB=\\sqrt{14}$.<br>   Ta có $\\cos\\left(\\overrightarrow{AB},\\overrightarrow{CD}\\right)=\\dfrac{\\overrightarrow{AB}\\cdot \\overrightarrow{CD}}{AB\\cdot CD}=\\dfrac{-\\sqrt{10}}{5}$.<br>  Vậy góc giữa hai véctơ $\\overrightarrow{A B}$ và $\\overrightarrow{CD}$ là góc tù.<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{AB}=(1;2;-3)\\Rightarrow AB=\\sqrt{14} \\text{ và } \\overrightarrow{BD}=(-3;-2;1)\\Rightarrow BD=\\sqrt{14}$. Vậy $\\triangle{ABD}$ cân tại $B$."
  },
  {
    "id": "2H226DS1",
    "question": "Hình vẽ sau mô tả vị trí của máy bay vào thời điểm $9$ giờ $30$ phút. Biết các đơn vị trên hình tính theo đơn vị km.  <br><img src=\"data/12/2H2/im2H22/loc8_TT_THPT_AnDuong__011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Phi công để máy bay ở chế độ tự động với vận tốc theo hướng đông là $750$\\,km/h, độ cao không đổi. Biết rằng gió thỏi theo hướng đông với vận tốc $10$\\,m/s. Giả sử vận tốc và hướng gió không đổi thì lúc $10$ giờ $30$ phút máy bay ở tọa độ $(150;1\\,086;9)$",
        "answer": true
      },
      {
        "text": "Tọa độ của máy bay vào lúc $9$ giờ $30$ phút là $(300;150;9)$",
        "answer": false
      },
      {
        "text": "Vào thời điểm $9$ giờ $30$ phút máy bay ở độ cao $9$\\,km",
        "answer": true
      },
      {
        "text": "Sau khi bay đến vị trí lúc $10$ giờ $30$ phút thì máy bay bay ngược lại với vận tốc $800$\\,km/h với độ cao không đổi, biết lúc đó trời lặng gió thì lúc $11$ giờ máy bay ở tọa độ $(686;150;9)$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Ta có $v=10\\,m/s=10\\cdot3,6=36\\,km/h$.<br>  Lại có tọa độ máy bay theo hình vẽ là $(150;300;9)$.<br>  Vì cả máy bay và gió đều cùng hướng Đóng nên vận tốc tổng là $v=750+36=786$\\,km/h.<br>  Quãng đường máy bay bay từ $9$ giờ $30$ phút đến $10$ giờ $30$ phút là $s=786\\cdot 1=786$\\,km.<br>  Khi đó máy bay đã di chuyển được thêm được theo hướng Đông là $300+786=1\\,086$\\,km.<br>  Vậy tọa độ máy bay lúc $10$ giờ $30$ phút là $(150;1\\,086;9)$<br>- <strong>Sai</strong>.<br>  Dựa vào hình mô tả, ta thấy máy bay đang ở tọa độ $(150;300;9)$.<br>- <strong>Đúng</strong>.<br>  Dựa vào hình mô tả, ta thấy máy bay vào lúc $9$ giờ $30$ phút đang ở độ cao $9$\\,km.<br>- <strong>Sai</strong>.<br>  Quãng đường máy bay quay ngược lại từ $10$ giờ $30$ phút đến $11$ giờ là $s=v\\cdot t=800\\cdot0{,}5=400$\\,km.<br>  Vì lúc đó trời lặng gió và máy bay ở độ cao không đổi nên vị trí máy bay quay người lại là $1\\,086-400=686$\\,km.<br>  Vậy tọa độ của máy bay lúc $11$ giờ là $(150;686;9)$."
  },
  {
    "id": "2H223DS42",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho ba điểm $A(-3; 2;-1)$, $B(-1;-1;-3)$, $C(-2; 4;-3)$.",
    "subQuestions": [
      {
        "text": "Điểm $I(-1; 1;-2)$ là trung điểm của đoạn thẳng $BC$",
        "answer": false
      },
      {
        "text": "$AB=\\sqrt{17}$ và $AC=\\sqrt{3}$",
        "answer": false
      },
      {
        "text": "Tam giác $ABC$ là một tam giác vuông",
        "answer": true
      },
      {
        "text": "Diện tích tam giác $ABC$ là $S_{ABC}=\\dfrac{3\\sqrt{17}}{4}$",
        "answer": false
      }
    ],
    "explain": "<br>- Trung điểm của đoạn thẳng $BC$ là $I\\left(-\\dfrac{3}{2}; \\dfrac{3}{2};-3\\right)$.<br>- $  \\begin{aligned}  & A B=\\sqrt{\\left(x_B-x_A\\right)^2+\\left(y_B-y_A\\right)^2+\\left(z_B-z_A\\right)^2}=\\sqrt{2^2+(-3)^2+(-2)^2}=\\sqrt{17} \\\\  & A C=\\sqrt{\\left(x_C-x_A\\right)^2+\\left(y_C-y_A\\right)^2+\\left(z_C-z_A\\right)^2}=\\sqrt{1+2^2+(-2)^2}=3.  \\end{aligned}  $<br>- Ta có: $\\overrightarrow{AB}=(2;-3;-2), \\overrightarrow{AC}=(1; 2;-2)$.<br>  $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}=0\\Rightarrow AB\\perp AC$ nên tam giác $ABC$ là tam giác vuông tại $A$.<br>- Tam giác $ABC$ là tam giác vuông tại $A$ nên   \\[S_{ABC}=\\dfrac{1}{2} \\cdot AB\\cdot AC=\\dfrac{1}{2} \\cdot \\sqrt{17} \\cdot 3=\\dfrac{3\\sqrt{17}}{2}.\\]"
  },
  {
    "id": "2H226DS3",
    "question": "Trong không gian $Oxyz$, xem mặt đất là mặt phẳng $(Oxy)$; trục $Oz$ hướng lên (đơn vị trên mỗi trục là một kilomet). Tại cùng một thời điểm, một radar phát hiện một máy bay tại $A(0; 0; 10)$ bay theo hướng $\\vec{v}=(-4; 3; 0)$ không đổi và một xe tăng tại $O$ di chuyển theo hướng $\\vec{u}=(3; 4; 0)$ không đổi. Sau $20$ giây radar xác định được vị trí máy bay tại $B(-8; 6; 10)$ và xe tăng tại $E\\left(\\dfrac{3}{20}; \\dfrac{1}{5}; 0\\right)$.",
    "subQuestions": [
      {
        "text": "Nếu máy bay và xe tăng tiếp tục giữ nguyên hướng và vận tốc không đổi thì 10 giây tiếp theo vị trí máy bay và xe tăng lần lượt là $C(-12; 9; 10)$, $F\\left(\\dfrac{9}{40}; \\dfrac{3}{10}; 0\\right)$",
        "answer": true
      },
      {
        "text": "Khoảng cách giữa máy bay và xe tăng sau $20$ giây kể từ lúc radar phát hiện là $15$ km (kết quả làm tròn đến hàng đơn vị)",
        "answer": false
      },
      {
        "text": "Vận tốc trung bình của xe tăng trong 20 giây đầu tiên là $12{,}5$ m/s",
        "answer": true
      },
      {
        "text": "Một lúc sau, radar phát hiện máy bay vẫn giữ nguyên hướng bay ban đầu và cách $A$ một khoảng $27$ km, tốc độ máy bay lúc đó $1\\,800$ km/h, đồng thời xe tăng đang di chuyển theo hướng ban đầu và cách $O$ $1$ kilomet với tốc độ $60$ km/h. Tốc độ thay đổi khoảng cách giữa máy bay và xe tăng lúc này là $1\\,689$ km/h (kết quả làm tròn đến hàng đơn vị)",
        "answer": true
      }
    ],
    "explain": "<br>- Vì máy bay giữ nguyên hướng và tốc độ nên sau $10$ giây máy bay đến vị trí $C$, ta có $\\vec{AB}=2\\vec{BC}$.<br>  Gọi $C(a; b; c) \\Rightarrow \\vec{BC}=(a+8; b-6; c-10)$; $\\vec{AB}=(-8; 6; 0)$. Ta có  $\\vec{AB}=2 \\vec{BC} \\Rightarrow-8=2(a+8) \\text{ và } 6=2(b-6) \\text{ và } 0=2(c-10)\\Leftrightarrow a=-12 \\text{ và } b=9 \\text{ và } c=10\\Rightarrow C(-12; 9; 10).$  Tương tự, xe tăng giữ nguyên hướng và vận tốc nên sau $10$ giây đến vị trí $F$, ta có $\\vec{OE}=2 \\vec{EF}$.<br>  Gọi $F(a;b;c)\\Rightarrow \\vec{EF}=\\left(a-\\dfrac{3}{20}; b-\\dfrac{1}{5}; c\\right)$. Ta có   $\\vec{OE}=2 \\vec{EF} \\Rightarrow\\dfrac{3}{20}=2\\left(a-\\dfrac{3}{20}\\right) \\text{ và } \\dfrac{1}{5}=2\\left(b-\\dfrac{1}{5}\\right) \\text{ và } 0=2c\\Leftrightarrow a=\\dfrac{9}{40} \\text{ và } b=\\dfrac{3}{10} \\text{ và } c=10\\Rightarrow F\\left(\\dfrac{9}{40}; \\dfrac{3}{10}; 0\\right).$<br>- Khoảng cách giữa máy bay và xe tăng là<br> $BE=\\sqrt{\\left(\\dfrac{3}{20}+8\\right)^2+\\left(\\dfrac{1}{5}+6\\right)^2+(-10)^2} \\approx 14$ km.<br>- Quãng đường xe tăng đi được trong $20$ giây đầu tiên là  $OE=\\sqrt{\\left(\\dfrac{3}{20}\\right)^2+\\left(\\dfrac{1}{5}\\right)^2+0^2}=0{,}25 \\text{ km}=250 \\text{ m} \\Rightarrow v_{tb}=12{,}5 \\text{ m/s}.$<br>- Giả sử sau thời gian $t$ máy bay đang ở vị trí $D$ và xe tăng đang ở vị trí $K$.<br>  Vectơ vận tốc của máy bay là $\\vec{v}_1=1\\,800 \\cdot \\dfrac{\\vec{v}}{|\\vec{v}|}=(-1\\,440; 1\\,080; 0)$.<br>  Ta có $\\vec{AD}=t \\cdot \\vec{v}_1 \\Rightarrow D(-1\\,440t; 1\\,080t; 0)$.<br>  Vectơ vận tốc của xe tăng là $\\vec{u}_1=60 \\cdot \\dfrac{\\vec{u}}{|\\vec{u}|}=(36; 48; 0) \\Rightarrow \\vec{OK}=t \\cdot \\vec{u}_1 \\Rightarrow K(36t; 48t; 0)$.<br>  Khoảng cách giữa máy bay và xe tăng là  $DK=\\sqrt{1\\,476^2 t^2+1\\,032^2 t^2+100}=f(t)$  Thời gian máy bay di chuyển $27$ km là $\\dfrac{27}{1\\,800}=0{,}015$ giờ.<br>  Tốc độ thay đổi khoảng cách giữa máy bay và xe tăng lúc này là $f'(0{,}015)=1\\,689$ km/h."
  }
];
