// =========================================================================
// KHỐI DỮ LIỆU: §5. Khảo sát và vẽ đồ thị hàm số - Đúng/Sai
// Nguồn: TaiLieuThamKhao/BANK-25-26/Lop12/C1.5-DoThi.tex (chuyển từ LaTeX)
// Hình vẽ (bảng biến thiên, đồ thị...) đã được biên dịch sẵn bằng LaTeX/TikZ
// thành ảnh PNG tĩnh (không phụ thuộc TikzJax).
// =========================================================================
window.dungSai2D15 = [
  {
    "id": "2D158DS1",
    "question": "Một chất điểm chuyển động theo phương trình $S=-t^3+9 t^2+21 t+9$ trong đó $t$ tính bằng giây $(s)$ và $S$ tính bằng mét $(m)$. Xét tính đúng sai của các khẳng định sau.",
    "subQuestions": [
      {
        "text": "$v(t)=-3 t^2+18 t+2$",
        "answer": false
      },
      {
        "text": "Vận tốc của chất điểm tại giây thứ $2$ là $45$ m/s",
        "answer": true
      },
      {
        "text": "Vận tốc của chất điểm tại thời điểm gia tốc triệt tiêu là $45$ m/s",
        "answer": false
      },
      {
        "text": "Vận tốc chuyển động đạt giá trị lớn nhất tại thời điểm $t=3$ s",
        "answer": true
      }
    ],
    "explain": "Ta có  <br>- &lt;strong&gt;Sai&lt;/strong&gt; Vận tốc $v(t) = S'(t) = -3t^2 + 18t + 21$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt; Tại $t=2$, $v(2) = -3(2)^2 + 18(2) + 21 = -12 + 36 + 21 = 45$ m/s.<br>- &lt;strong&gt;Sai&lt;/strong&gt; Gia tốc $a(t) = v'(t) = -6t + 18$.<br>   Gia tốc triệt tiêu khi $a(t) = 0 \\Leftrightarrow -6t + 18 = 0 \\Leftrightarrow t = 3$.<br>   Khi đó $v(3) = -3(3)^2 + 18(3) + 21 = -27 + 54 + 21 = 48$ m/s.<br>- &lt;strong&gt;Đúng&lt;/strong&gt; Để tìm thời điểm vận tốc lớn nhất, ta xét $v'(t) = a(t) = -6t + 18 = 0 \\Leftrightarrow t = 3$.<br>   Vì $v''(t) = a'(t) = -6 &lt; 0$ nên $v(t)$ đạt cực đại tại $t=3$."
  },
  {
    "id": "2D151DS2",
    "question": "Cho hàm số $y=\\dfrac{-2x^2+3x+12}{x+2}$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số đã cho là $y'=\\dfrac{-2x^2-8x-6}{x+2}$",
        "answer": true
      },
      {
        "text": "Tiệm cận đứng và tiệm cận xiên của đồ thị hàm số lần lượt là $x=-2$, $y=-2x+7$",
        "answer": true
      },
      {
        "text": "Bảng biến thiên của hàm số đã cho là<br>     <br><img src=\"data/12/2D1/im2D1/2D15_tikz_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": false
      },
      {
        "text": "Gọi $A$, $B$ là hai điểm cực trị của đồ thị hàm số $y=f(x)$, $O$ là gốc tọa độ. Khi đó diện tích tam giác $OAB$ bằng $6$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $y'=\\dfrac{-2x^2-8x-6}{(x+2)^2}$.<br>- Ta có $y= \\dfrac{-2x^2+3x+12}{x+2} = -2x + 7 - \\dfrac{2}{x+2}$.<br>  Vậy tiệm cận đứng là $x=-2$ và tiệm cận xiên là $y=-2x+7$.<br>- Ta có $y'=0\\Leftrightarrow -2x^2 - 8x - 6 =0\\Leftrightarrow x=-1 \\text{ hoặc } x=-3.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- Gọi $A(-3;15)$ và $B(-1;7)$ là 2 điểm cực trị.<br>  Ta có $\\overrightarrow{AB}=(2;-8)\\Rightarrow AB=2\\sqrt{17}$.<br>  Phương trình đường thẳng $AB\\colon \\dfrac{x+3}{2}=\\dfrac{y-15}{-8}$ hay $AB\\colon 4x+y-3=0$.<br>  Ta có $S_{OAB}=\\dfrac{1}{2}\\cdot \\mathrm{d}[O,AB]\\cdot AB=\\dfrac{1}{2}\\cdot \\dfrac{3}{\\sqrt{17}}\\cdot 2\\sqrt{17}=3$."
  },
  {
    "id": "2D151DS3",
    "question": "Cho hàm số $y=\\dfrac{x^2-2x+5}{x-1}$.",
    "subQuestions": [
      {
        "text": "Giá trị nhỏ nhất của hàm số trên đoạn $\\left[-2;0\\right]$ bằng $-4$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có đường tiệm cận xiên là đường thẳng $y=x-1$",
        "answer": true
      },
      {
        "text": "Tâm đối xứng của đồ thị hàm số là điểm $I\\left(1;2\\right)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số không cắt trục hoành",
        "answer": true
      }
    ],
    "explain": "<br>- Sai.<br>  Tập xác định $ \\mathscr{D}=\\mathbb{R}\\setminus \\{1\\} $.<br>  $ y'=\\dfrac{x^2-2x-3}{\\left(x-1\\right)^2} $; $ y'=0\\Rightarrow x=-1\\in [-2;0] \\text{ hoặc } x=3 \\notin [-2;0]. $<br>  Ta có $ f\\left(-2\\right)=-\\dfrac{13}{3} $; $ f\\left(0\\right)=-5$; $ f\\left(-1\\right)=-4$.<br>  Suy ra giá trị nhỏ nhất của hàm số trên $\\left[-2;0\\right]$ bằng $ -5 $.<br>- Đúng.<br>  Ta có $\\lim\\limits_{x \\rightarrow+\\infty}[y - (x-1)]=\\lim\\limits_{x \\rightarrow +\\infty} \\dfrac{4}{x-1}=0$.<br>  Suy ra $ y=x-1 $ là tiệm cận xiên của đồ thị hàm số.<br>- Sai.<br>  Ta có $ \\lim \\limits_{x \\to 1^- } y=-\\infty $ nên $ x=1 $ là tiệm cận đứng.<br>  Tọa độ tâm đối xứng là nghiệm của hệ phương trình   $x=1 \\text{ và } y=x-1\\Leftrightarrow x=1 \\text{ và } y=0 \\Rightarrow I\\left(1;0\\right). $<br>- Đúng.<br>  Ta có $ x^2-2x+5&gt;0,~\\forall x\\in \\mathscr{D} $."
  },
  {
    "id": "2D151DS4",
    "question": "Cho hàm số $f(x)=ax^3+bx^2+cx+d$ có đồ thị như hình vẽ.<br><img src=\"data/12/2D1/im2D1/2D15_tikz_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đã cho nghịch biến trên $(-\\infty;1)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực tiểu tại $x=0$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số cắt trục hoành tại $1$ điểm",
        "answer": true
      },
      {
        "text": "Hàm số đã cho là $y=-2x^3+3x+1$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Hàm số đã cho nghịch biến trên $(-\\infty;0)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Hàm số đạt cực tiểu tại $x=0$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Đồ thị hàm số cắt trục hoành tại $1$ điểm.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.  Ta có $f'(x)=3ax^2+2bx+c$.<br>  Từ hình vẽ ta có hàm số $f'(0)=0 \\text{ và } f'(1)=0 \\text{ và } f(1)=2 \\text{ và } f(0)=1\\Rightarrow c=0 \\text{ và } 3a+2b+c=0 \\text{ và } a+b+c+d=2 \\text{ và } d=1\\Rightarrow a=-2 \\text{ và } b=3 \\text{ và } c=0 \\text{ và } d=1.$<br>  Vậy $y=-2x^3+3x+1$."
  },
  {
    "id": "2D151DS5",
    "question": "Cho hàm số $y=x^3-3x+2$.",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số có tâm đối xứng là điểm $(0;2)$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho không có cực trị",
        "answer": false
      },
      {
        "text": "Tập xác định của hàm số đã cho là $(0;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực tiểu tại $x=1$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $y'=3x^2-3$, $y''=6x$, $y''=0\\Leftrightarrow x=0$, $y(0)=2$. Khi đó điểm $(0;2)$ là tâm đối xứng của đồ thị hàm số.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có hàm số đã cho là hàm số bậc ba có $y'=0\\Leftrightarrow x=\\pm 1$ nên hàm số đã cho có hai điểm cực trị.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Tập xác định của hàm số đã cho là $\\mathbb{R}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. <br>  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Suy ra hàm số đạt cực tiểu tại $x=1$."
  },
  {
    "id": "2D151DS6",
    "question": "Cho hàm số $y=\\dfrac{2x+1}{x-1}$.",
    "subQuestions": [
      {
        "text": "Hàm số nghịch biến trên $\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có tiệm đứng là $x=1$ và tiệm cận ngang là $y=2$",
        "answer": true
      },
      {
        "text": "Tổng các giá trị lớn nhất trên đoạn $[2; 3]$ và giá trị nhỏ nhất trên đoạn $[-2;-1]$ là $\\dfrac{13}{2}$",
        "answer": false
      },
      {
        "text": "Hàm số có đồ thị như hình sau<br>  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_018.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}\\setminus\\{1\\}$.<br>  $y'=\\dfrac{-3}{(x-1)^2}&lt;0$ nên hàm số nghịch biến trên các khoảng $(-\\infty; 1)$ và $(1;+\\infty)$.<br>- Xét $\\lim\\limits_{x\\to1^+}\\dfrac{2x+1}{x-1}=+\\infty$ do đó $x=1$ là đường tiệm cận đứng của đồ thị hàm số.<br>  Ta có $\\lim\\limits_{x\\to -\\infty} \\dfrac{2x+1}{x-1}=2$ và $\\lim\\limits_{x\\to +\\infty} \\dfrac{2x+1}{x-1}=2$ nên $y=2$ là đường tiệm cận ngang của đồ thị hàm số.<br>- Do hàm số nghịch biến trên từng khoảng xác định nên $\\max\\limits_{[2;3]}y=y(2)=5, \\min\\limits_{[-2;-1]}y=y(-1)=\\dfrac{1}{2}.$  Suy ra $\\max\\limits_{[2;3]}y+\\min\\limits_{[-2;-1]}y=5+\\dfrac{1}{2}=\\dfrac{11}{2}$.<br>- Đồ thị hàm số đã cho là   <br><img src=\"data/12/2D1/im2D1/2D15_tikz_017.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">"
  },
  {
    "id": "2D158DS7",
    "question": "Lợi nhuận $N$ của một doanh nghiệp (triệu đồng) khi doanh nghiệp dùng số tiền $x$ để quảng cáo cho sản phẩm của doanh nghiệp đó ước tính theo công thức $N=f(x)=-0{,}1x^3+6x^2+400$, với $x \\geq 0$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm $f(x)$ là $f'(x)=-0{,}3x^2+12x+400$",
        "answer": false
      },
      {
        "text": "Khi tăng số tiền quảng cáo trong khoảng $(0; 40)$ thì lợi nhuận $N$ cũng tăng",
        "answer": true
      },
      {
        "text": "Phương án dùng số tiền quảng cáo $x$ sao cho lợi nhuận lớn nhất khi $x=40$",
        "answer": true
      },
      {
        "text": "Có hai phương án dùng số tiền đề quảng cáo sao cho lợi nhuận thu về là $800$",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số có đạo hàm là $f'(x)=-0{,}3x^2+12x$.<br>- Ta có $f'(x)=0\\Leftrightarrow x=0 \\text{ hoặc } x=40$, ta có bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_019.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên ta thấy $f(x)$ đồng biến trên khoảng $(0;40)$ nên khi tăng số tiền quảng cáo trong khoảng từ $(0;40)$ thì lợi nhuận cũng tăng.<br>- Lợi nhuận đạt lớn nhất là $3\\,600$ khi $x=40$.<br>- Đường thẳng $y=800$ cắt đồ thị hàm số $f(x)$ tại hai điểm trong khoảng $(0;+\\infty)$ nên có hai phương án dùng số tiền để quảng cáo sao cho lợi nhuận thu về là $800$."
  },
  {
    "id": "2D155DS8",
    "question": "Cho hàm số $y=f(x)$ có đạo hàm trên $\\mathbb{R}$ và $f'(x)$ là hàm số bậc ba có đồ thị là đường cong trong hình bên.<br><img src=\"data/12/2D1/im2D1/2D15_tikz_022.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số $y=f(x)$ đồng biến trên khoảng $(-\\infty;-2)$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ có hai điểm cực trị",
        "answer": false
      },
      {
        "text": "Trên đoạn $[-3;1]$, hàm số $y=f(x)$ đạt giá trị lớn nhất bằng $f(-2)$",
        "answer": false
      },
      {
        "text": "Đồ thị của hàm số $g(x) = \\dfrac{x+2}{f'(x)}$ có tất cả $2$ đường tiệm cận",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_023.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Hàm số $y=f(x)$ nghịch biến trên khoảng $(-\\infty;-2)$.<br>- Hàm số $y=f(x)$ có một cực trị.<br>- Trên đoạn $[-3;1]$, hàm số $y=f(x)$ nghịch biến nên hàm số đạt giá trị lớn nhất bằng $f(-3)$.<br>- Ta có $f'(x)=a(x+2)^2(x-1)$.<br>  Do $f'(0)=-4\\Leftrightarrow -4a=-4\\Leftrightarrow a=1$.<br>  Vậy $f'(x)=(x+2)^2(x-1)$.<br>  Nên $g(x)=\\dfrac{x+2}{(x+2)^2(x-1)}=\\dfrac{1}{(x+2)(x-1)}$.<br>  Do $\\lim\\limits_{x\\to 1+}g(x)=+\\infty$ và $\\lim\\limits_{x\\to (-2)^-}g(x)=+\\infty$ nên  đồ thị hàm số có hai đường tiệm đứng là $x=-2$ và $x=1$.<br>  Do $\\lim\\limits_{x\\to \\pm\\infty}g(x)=0$ nên đồ thị hàm số có đường tiệm cận ngang là $y=0$.<br>  Vậy đồ thị hàm số $y=g(x)$ có $3$ đường tiệm cận."
  },
  {
    "id": "2D151DS9",
    "question": "Cho hàm số $y=f(x)=ax^3+bx^2+cx+d$ có đồ thị như hình dưới đây  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_026.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên khoảng $(-1;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực tiểu tại $x=1$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số cắt $Oy$ tại điểm có toạ độ $(0;1)$",
        "answer": true
      },
      {
        "text": "Trong 4 số $a$, $b$, $c$, $d$ có $3$ số dương",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Từ đồ thị hàm số, ta thấy trên khoảng $(-1;+\\infty)$ hàm số không đồng biến.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Từ đồ thị hàm số, ta thấy hàm số đạt cực tiểu tại $x=0$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Dựa vào đồ thị hàm số $f(x)$, ta thấy hàm số cắt trục $Oy$ tại điểm $(0;1)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Đồ thị hàm số đi qua điểm $(0;1)$ nên ta có $f(0)=a\\cdot 0^3+b\\cdot 0^2+c\\cdot 0+d=1\\Rightarrow d=1$.<br>  Đồ thị hàm số đi qua điểm $(-1;2)$ nên ta có $f(-1)=a\\cdot (-1)^3+b\\cdot (-1)^3+c\\cdot (-1)+d=2\\Rightarrow -a+b-c+d=2.$  Đồ thị hàm số đi qua điểm $(-2;1)$ nên ta có $f(-2)=a\\cdot (-2)^3+b\\cdot (-2)^3+c\\cdot (-2)+d=1\\Rightarrow -8a+4b-2c+d=1.$  Từ $y=ax^3+bx^2+cx+d\\Rightarrow y'=3ax^2+2bx+c$.<br>  Mặt khác, hàm số đạt cực tiểu tại $x=0$ nên $0=3\\cdot 0^2\\cdot a+2\\cdot 0.b+c\\Rightarrow c=0$. <br>  Do đó ta có hệ $-a+b-c+1=2 \\text{ và } -8a+4b-2c+1=1 \\text{ và } c=0 \\text{ và } d=1\\Rightarrow a=1 \\text{ và } b=2 \\text{ và } c=0 \\text{ và } d=1.$<br>  Vậy trong 4 số $a$, $b$, $c$, $d$ có ba số dương.<br>"
  },
  {
    "id": "2D151DS10",
    "question": "Cho hàm số $ y=x+\\dfrac{4}{x} $.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số đã cho là $ y’=1+\\dfrac{4}{x^2} $",
        "answer": false
      },
      {
        "text": "Đạo hàm của hàm số đã cho nhận giá trị âm trên các khoảng $ (-2 ; 0) \\cup(0 ; 2) $ và nhận giá trị dương trên các khoảng $ (-\\infty ;-2) \\cup(2 ;+\\infty) $",
        "answer": true
      },
      {
        "text": "Bảng biến thiên của hàm số đã cho là<br>  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_029.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đã cho là<br>  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_030.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Vì $y' = 1 - \\dfrac{4}{x^2}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Xét dấu của đạo hàm $y'$.<br>  $y' = 0$ khi $1 - \\dfrac{4}{x^2} = 0 \\Rightarrow \\dfrac{4}{x^2} = 1 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$.<br>  &lt;strong&gt;Xét dấu của $y'$ trên các khoảng:&lt;/strong&gt;  <br>- Trên khoảng $(-\\infty, -2)$, chọn $x = -3$: $y' = 1 - \\dfrac{4}{9} &gt; 0$.<br>- Trên khoảng $(-2, 0)$, chọn $x = -1$: $y' = 1 - 4 &lt; 0$.<br>- Trên khoảng $(0, 2)$, chọn $x = 1$: $y' = 1 - 4 &lt; 0$.<br>- Trên khoảng $(2, +\\infty)$, chọn $x = 3$: $y' = 1 - \\dfrac{4}{9} &gt; 0$.  Vậy đạo hàm $y'$ nhận giá trị âm trên các khoảng $(-2, 0) \\cup (0, 2)$ và nhận giá trị dương trên các khoảng $(-\\infty, -2) \\cup (2, +\\infty)$. Đáp án này &lt;strong&gt;đúng&lt;/strong&gt;.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.  Dựa vào bảng biến thiên, đồ thị hàm số có các đặc điểm:  <br>- Đi qua các điểm $(-2, -4)$ và $(2, 4)$.<br>- Tăng trên các khoảng $(-\\infty, -2)$ và $(2, +\\infty)$.<br>- Giảm trên các khoảng $(-2, 0)$ và $(0, 2)$."
  },
  {
    "id": "2D151DS11",
    "question": "Cho hàm số $f(x)$ xác định trên $\\mathbb{R} \\setminus \\{1\\}$ và có bảng biến thiên như hình dưới  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_033.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$f(x)$ đạt cực đại tại $x=0$",
        "answer": true
      },
      {
        "text": "$\\max\\limits_{(-\\infty ;+\\infty)} f(x)=3$",
        "answer": false
      },
      {
        "text": "$f(x)$ nghịch biến trên $(0 ;+\\infty)$",
        "answer": false
      },
      {
        "text": "Tiếp tuyến của đồ thị hàm số tại $A(0 ; 2)$ là $y=2$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Dựa vào bảng biến thiên ta thấy hàm số $ f(x) $ đạt cực đại tại $ x=0 $.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Vì dựa vào bảng biên thiên ta có $ f(x)&lt;3 $, $ \\forall x \\in \\mathbb{R} $ và không tồn tại $ x \\in \\mathbb{R} $ để $ f(x)=3 $.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Vì trên $ (0;+\\infty) $ hàm số không xác định tại $ x=1 $.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có tại $ A(0;2) $ thì $ x_0=0 $, $ y_0=2 $, $ y'(x_0)=0 $.<br>  Khi đó phương trình tiếp tuyến của hàm số tại $ A(0;2) $ là $ y=0(x-0)+2 \\Leftrightarrow y=2 $."
  },
  {
    "id": "2D151DS12",
    "question": "Cho hàm số $f(x)=\\dfrac{x^2-2x+6}{x+1}$",
    "subQuestions": [
      {
        "text": "Hàm số $f(x)$ đồng biến trên khoảng $(2 ;+\\infty)$",
        "answer": true
      },
      {
        "text": "Đường tiệm cận xiên của đồ thị hàm số đã cho đi qua điểm $M(4 ; 1)$",
        "answer": true
      },
      {
        "text": "$\\max\\limits_{[0;9]}f(x)=2$",
        "answer": false
      },
      {
        "text": "Hàm số $y=x \\cdot[f(x)]^2$ có đúng 3 điểm cực trị",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số có TXĐ: $\\mathscr{D}=\\mathbb{R}\\setminus\\{-1\\}$.<br> $y'=\\dfrac{x^2+2x-8}{(x+1)^2}$, $y'=0 \\Leftrightarrow x=-4 \\text{ hoặc } x=2.$<br> Bảng biến thiên <br><img src=\"data/12/2D1/im2D1/2D15_tikz_043.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"> Từ bảng biến thiên ta có hàm số đồng biến trên các khoảng $(-\\infty;-4)$ và $(2;+\\infty)$.<br>- Tiệm cận xiên của hàm số có dạng $y=ax+b$.<br> + $a = \\lim\\limits_{x\\to +\\infty}\\dfrac{f(x)}{x}=1$.<br> + $b = \\lim\\limits_{x\\to +\\infty}(f(x)-x)=\\lim\\limits_{x\\to +\\infty} \\dfrac{-3x+6}{x+1}=-3$.<br> Vậy tiệm cận xiên của hàm số là $y = x - 3$, và đường thẳng này đi qua $M(4;1)$.<br>- $f(0)=6$; $f(9)=\\dfrac{69}{10}$.<br> Từ bảng biến thiên ta có $\\max\\limits_{[0;9]}f(x)=\\max\\{f(0);f(9)\\}=\\dfrac{69}{10}$.<br>- Xét hàm số $g(x)=x \\cdot[f(x)]^2$.<br> Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$.<br> $g'(x)=[f(x)]^2+2x\\cdot f(x)\\cdot f'(x)=f(x) [f(x) + 2x f'(x)]$.<br> Cho $g'(x) = 0 \\Leftrightarrow f(x) = 0 (1) \\text{ hoặc } f(x) + 2x f'(x) = 0 (2).$ <br>- $(1)\\Leftrightarrow \\dfrac{x^2-2x+6}{x+1}=0 \\Leftrightarrow x^2-2x+6 =0$ (vô nghiệm).<br>- Xét phương trình $(2)$ $(2) \\Leftrightarrow \\dfrac{x^2-2x+6}{x+1}+25\\left(\\dfrac{x^2+2x-8}{(x+1)^2}\\right)=0$<br>$\\Leftrightarrow 3x^3+3x^2-12x+6 =0 \\Leftrightarrow x=1 \\text{ hoặc } x=-1\\pm\\sqrt{3}.$ Vậy phương trình $g'(x) = 0$ có 3 nghiệm đơn phân biệt khác $-1$.<br> Do $g'(x)$ đổi dấu qua 3 nghiệm này, nên hàm số $g(x)$ có đúng $3$ điểm cực trị."
  },
  {
    "id": "2D151DS13",
    "question": "Cho hàm số $y=f(x)=\\dfrac{ax+b}{cx+1}$ với $a$, $b$, $c\\in\\mathbb{R}$ có đồ thị như hình vẽ  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_045.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số $f'(x)&lt;0,\\,\\,\\forall x\\in\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ nghịch biến trên khoảng $(1;+\\infty)$ và đồng biến trên khoảng $(-\\infty ;1)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có tiệm cận đứng là $x=1$ và tiệm cận ngang là $y=-1$",
        "answer": true
      },
      {
        "text": "Tổng $a+b+c=5$",
        "answer": false
      }
    ],
    "explain": "Đồ thị nhận đường thẳng $y=-1$ làm tiệm cận ngang nên $\\lim\\limits_{x\\to +\\infty}\\dfrac{ax+b}{cx+1}=-1\\Leftrightarrow \\dfrac{a}{c}=-1.\\qquad (1)$  Đồ thị nhận đường thẳng $x=1$ làm tiệm cận đứng nên $1\\cdot c+1=0 \\text{ và } 1\\cdot a+b \\ne 0.$ \\qquad (2)<br>   Đồ thị đi qua các điểm $(2;0)$, $(0;-2)$ nên ta có $2a+b=0 \\text{ và } f(0)=-2.$ \\qquad (3)<br>   Từ $(1)$, $(2)$ và $(3)$ ta có $b=-2 \\text{ và } c=-1 \\text{ và } a=1$.<br>  Vậy đồ thị đã cho là đồ thị của hàm số $y=\\dfrac{x-2}{-x+1}$.  <br>- Ta có $f'(x)=\\dfrac{-2}{(-x+1)^2}&lt;0,\\,\\forall x\\in\\mathbb{R}\\setminus \\{1\\}$.<br>- Hàm số nghịch biến trên mỗi khoảng $(-\\infty;1)$, $(1;+\\infty)$.<br>- Đồ thị hàm số có tiệm cận đứng là đường thẳng $x=1$ và tiệm cận ngang là đường thẳng $y=-1$<br>- Vì $b=-2 \\text{ và } c=-1 \\text{ và } a=1$ nên $a+b+c=-2$."
  },
  {
    "id": "2D151DS14",
    "question": "Cho hàm số $f(x)=\\dfrac{ax^2+bx+c}{x+n}$ (với $a \\ne 0$) có đồ thị là đường cong như hình vẽ.  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_052.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số có tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus \\{-2\\}$",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực đại tại $x=-3$; đạt cực tiểu tại $x=-1$",
        "answer": true
      },
      {
        "text": "Tiệm cận đứng của đồ thị hàm số đã cho là đường thẳng $y=-2$",
        "answer": false
      },
      {
        "text": "Công thức xác định của hàm số đã cho là $y=\\dfrac{x^2+3x+3}{x+2}$",
        "answer": true
      }
    ],
    "explain": "<br>- Dựa vào hình vẽ, hàm số không xác định tại $x=-2$ nên tập xác định là $\\mathscr{D}=\\mathbb{R}\\setminus \\{-2\\}$.<br>- Hàm số đạt cực đại tại $x=-3$; đạt cực tiểu tại $x=-1$.<br>- Tiệm cận đứng của đồ thị hàm số đã cho là đường thẳng $x=-2$.<br>- Tiệm cận đứng của đồ thị hàm số đã cho là đường thẳng $x=-n$ nên $-n=-2 \\Rightarrow n=2$. Khi đó $f(x)=\\dfrac{ax^2+bx+c}{x+2}$.<br>  Đường tiệm cận xiên của đồ thị hàm số là đường thẳng đi qua $2$ điểm $(0;1)$ và $(-1;0)$ nên có phương trình $\\dfrac{x}{-1}+\\dfrac{y}{1}=1 \\Leftrightarrow y=x+1$. Khi đó $a=1$.<br>  Đồ thị hàm số đi qua điểm $(-1;1)$ nên $1-b+c=1 \\Leftrightarrow -b+c=0 \\quad (1).$  Đồ thị hàm số đi qua điểm $(-3;-3)$ nên $\\dfrac{9a-3b+c}{-3+2}=-3 \\Rightarrow 9-3b+c=3 \\Leftrightarrow -3b+c=-6 \\quad (2).$  Từ $(1)$ và $(2)$, ta có $b=c=3$.<br>  Vậy công thức xác định của hàm số đã cho là $y=\\dfrac{x^2+3x+3}{x+2}$."
  },
  {
    "id": "2D151DS15",
    "question": "Cho hàm số $y=-x^3+6x^2-9x+1$.<br><img src=\"data/12/2D1/im2D1/2D15_tikz_055.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số cắt trục tung tại điểm $(0; 1)$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(1; 3)$",
        "answer": false
      },
      {
        "text": "Đồ thị của hàm số là đường cong trong hình vẽ bên",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên khoảng $(-\\infty; 5)$ bằng $-3$",
        "answer": false
      }
    ],
    "explain": "Xét $f'(x)=-3x^2+12x-9$, cho $f'(x)=0\\Leftrightarrow x=1 \\text{ hoặc } x=3.$<br>  Bảng biến thiên của hàm số  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_056.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Cho $x=0$ suy ra $y=-0^3+6\\cdot 0^2-9\\cdot 0+1=1$.<br>  Vậy đồ thị hàm số cắt trục tung tại điểm $(0;1)$.<br>- Dựa vào bảng biến thiên, hàm số đồng biến trên khoảng $(1;3)$.<br>- Hàm số đã cho có hai điểm cực trị dương, nằm bên phải trục $Oy$.<br>  Do đó, hình vẽ đã cho không phải là đồ thị của hàm số.<br>- Bảng biến thiên của hàm số trên $(-\\infty;5)$  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_057.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, hàm số không có giá trị nhỏ nhất trên khoảng $(-\\infty;5)$."
  },
  {
    "id": "2D151DS16",
    "question": "Cho hàm số $y=f(x)=\\dfrac{x^2+3 x+5}{x+2}$. Xét tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số có tiệm cận đứng là đường thẳng $x=-2$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có tiệm cận xiên là đường thẳng $y=x+1$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có tâm đối xứng là điểm $I(-2 ;-1)$",
        "answer": true
      },
      {
        "text": "Hàm số không có cực trị",
        "answer": true
      }
    ],
    "explain": "Ta có $y=f(x)=\\dfrac{x^2+3 x+5}{x+2}=x+1+\\dfrac{3}{x+2}$. Suy ra $y'=f'(x)=1-\\dfrac{3}{(x+2)^2}$.  <br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\mathop{\\lim}\\limits_{x\\rightarrow -2^-}y=+\\infty$ và $\\mathop{\\lim}\\limits_{x\\rightarrow -2^+}y=-\\infty$.<br>  Vậy đồ thị hàm số có hai đường tiệm cận đứng là $x=-2$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.Do $\\lim\\limits_{x \\to \\infty} [f(x) - (x + 1)] = \\lim\\limits_{x \\to \\infty} \\dfrac{1}{x + 1} = 0$ nên đường thẳng $y = x + 1$ là đường tiệm cận xiên của đồ thị hàm số đã cho.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Tâm đối xứng $I(-2 ;-1)$ của đồ thị làm giao điểm của tiệm cận đứng và tiện cận xiên có phương trình $x=-2$ và $y=x+1$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $y=0\\Leftrightarrow 1-\\dfrac{3}{(x+2)^2}\\Leftrightarrow \\dfrac{3}{(x+2)^2}=1\\Leftrightarrow x=-3-\\sqrt{2} \\text{ hoặc } x=3-\\sqrt{2}$."
  },
  {
    "id": "2D151DS17",
    "question": "Cho hàm số $y=f(x)=\\dfrac{x^2+4x-1}{x-1}$ có đồ thị là $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số có đạo hàm $y'=\\dfrac{x^2-2x-3}{(x-1)^2}$",
        "answer": true
      },
      {
        "text": "Hàm số có $1$ cực trị",
        "answer": false
      },
      {
        "text": "Điểm $I(1;4)$ là giao điểm của hai đường tiệm cận của đồ thị hàm số $(C)$",
        "answer": false
      },
      {
        "text": "Diện tích của tam giác tạo bởi đường thẳng đi qua $2$ điểm cực trị của đồ thị hàm số $y=f(x)$ với $2$ trục tọa độ bằng $4$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $y'=\\dfrac{(2x+4)(x-1)-(x^2+4x-1)}{(x-1)^2}=\\dfrac{x^2-2x-3}{(x-1)^2}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Do $y'=0\\Rightarrow x=-1 \\text{ hoặc } x=3.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_063.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Suy ra hàm số có hai cực trị.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.  <br>- $y=f(x)=\\dfrac{x^2+4x-1}{x-1}=x+5+\\dfrac{4}{x-1}$.<br>- Đồ thị hàm số có đường tiệm cận đứng là $x=1$.<br>- Đồ thị hàm số có đường tiệm cận xiên là $y=x+5$.  Điểm $I(1;6)$ là giao điểm của hai đường tiệm cận của đồ thị hàm số $(C)$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Đường thẳng đi qua hai điểm cực trị là $\\Delta\\colon y=2x+4$.<br>  Đường thẳng $\\Delta$ tạo với hai trục tọa độ một tam giác $OAB$ với $A(-2;0)$, $B(0;4)$.<br>  Ta có $S_{OAB}=\\dfrac{1}{2}\\cdot OA\\cdot OB=\\dfrac{1}{2}\\cdot 2\\cdot 4=4$."
  },
  {
    "id": "2D151DS18",
    "question": "Cho hàm số $y = \\dfrac{x^2 + x + 7}{x + 2}$.",
    "subQuestions": [
      {
        "text": "Hàm số đã cho có đạo hàm là $y' = \\dfrac{x^2 + 4x - 5}{x + 2}$",
        "answer": false
      },
      {
        "text": "Điểm $A(-5; -9)$, $B(1; 3)$ lần lượt là điểm cực đại và điểm cực tiểu của đồ thị hàm số trên",
        "answer": true
      },
      {
        "text": "Đường tiệm cận xiên của đồ thị hàm số đã cho là $y = x - 1$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đã cho đi qua $12$ điểm có hoành độ và tung độ là những số nguyên",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Kiểm tra đạo hàm&lt;/strong&gt;  $  y' = \\dfrac{(2x + 1)(x + 2) - (x^2 + x + 7)}{(x + 2)^2} = \\dfrac{x^2 + 4x - 5}{(x + 2)^2}.  $<br>- &lt;strong&gt;Xác định điểm cực trị&lt;/strong&gt;<br>  Giải phương trình $y' = 0 \\Leftrightarrow x^2 + 4x - 5 = 0 \\Leftrightarrow x=-5 \\text{ hoặc } x=1.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_068.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, ta có điểm $A(-5; -9)$, $B(1; 3)$ lần lượt là điểm cực đại và điểm cực tiểu của đồ thị hàm số.<br>- &lt;strong&gt;Tìm tiệm cận xiên&lt;/strong&gt;  $  y = \\dfrac{x^2 + x + 7}{x + 2} = (x - 1) + \\dfrac{9}{x + 2}.  $  Suy ra tiệm cận xiên $y = x - 1$.<br>- &lt;strong&gt;Đếm điểm nguyên:&lt;/strong&gt;<br>  Điều kiện: $x + 2$ phải là ước của $9$ (vì $y = x - 1 + \\dfrac{9}{x + 2}$).<br>  Các ước $\\pm 1, \\pm 3, \\pm 9$ $\\Rightarrow$ $6$ giá trị $x$:   $x = -11, -5, -3, -1, 1, 7$.<br>  Tương ứng $6$ điểm nguyên:   $(-11; -13)$, $(-5; -9)$, $(-3; -13)$, $(-1; 7)$, $(1; 3)$, $(7; 7)$.<br>  Suy ra chỉ có $6$ điểm có toạ độ nguyên."
  },
  {
    "id": "2D158DS19",
    "question": "Một chất điểm chuyển động theo phương trình $s(t)=t^3-3t^2+8t+1$, trong đó $t$ tính bằng giây và $s(t)$ tính bằng mét. Các phát biểu sau đúng hay sai",
    "subQuestions": [
      {
        "text": "Vận tốc nhỏ nhất của chất điểm là $5$\\,m/s",
        "answer": true
      },
      {
        "text": "Tại thời điểm mà chất điểm di chuyển được $13$\\,m, vận tốc khi đó bằng $8$\\,m/s",
        "answer": true
      },
      {
        "text": "Gia tốc tại thời điểm chất điểm đạt vận tốc nhỏ nhất bằng $2$\\,m/s$^2$",
        "answer": false
      },
      {
        "text": "Vận tốc của chất điểm tại thời điểm $t=3$\\,s bằng $8$\\,m/s",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. <br>  Ta có $v(t)=s'(t)=3t^2-6t+8$. Suy ra $v'(t)=6t-6$.<br>  Cho $v'(t)=0 \\Leftrightarrow t=1$.  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_074.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, vận tốc nhỏ nhất của chất điểm là $5$\\,m/s.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $s(t)=13 \\Leftrightarrow t^3-3t^2+8t+1=13 \\Leftrightarrow t=2$.<br>  khi đó $v(2)=8$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Ta có $a(t)=v'(t)=6t-6$.<br>  Thời điểm chất điểm đạt vận tốc nhỏ nhất là $t=1$ nên $a(1)=0$\\,m/s$^2$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  $v(3)=17$\\,m/s."
  },
  {
    "id": "2D151DS20",
    "question": "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và có đồ thị như hình vẽ bên.<br><img src=\"data/12/2D1/im2D1/2D15_tikz_075.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Giá trị nhỏ nhất của hàm số $y=f(x)$ trên đoạn $[-1; 2]$ bằng $-1$ đạt được chỉ khi $x=2$",
        "answer": false
      },
      {
        "text": "Có $7$ giá trị nguyên của $m$ để phương trình $2f(x)+m=0$ có $3$ nghiệm phân biệt",
        "answer": true
      },
      {
        "text": "Gọi $x_1$, $x_2$ lần lượt là hoành độ điểm cực đại, hoành độ cực tiểu của hàm số $y=f(x)$. Ta có $x_1\\cdot x_2=-3$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ nghịch biến trên khoảng $(-1; 1)$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Dựa vào đồ thị hàm số $f(x)$, ta có giá trị nhỏ nhất của hàm số trên đoạn $[-1;2]$ bằng $-1$ đạt được chỉ khi $x=1$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $2f(x)+m=0 \\Leftrightarrow f(x)=\\dfrac{-m}{2}$.<br>  Để phương trình $2f(x)+m=0$ có $3$ nghiệm phân biệt thì đường thẳng $y=\\dfrac{-m}{2}$ cần cắt đồ thị hàm số $y=f(x)$ tại $3$ điểm phân biệt.<br>  Dựa vào đồ thị, ta có $-1 &lt; \\dfrac{-m}{2} &lt; 3 \\Leftrightarrow -6&lt;m&lt;2$.<br>  Do $m \\in \\mathbb{Z}$ nên $m \\in \\{-5;-4;-3;-2;-1;0;1\\}$.<br>  Vậy có $7$ giá trị nguyên của $m$ thỏa yêu cầu.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Ta có  <br>- $x_1$ là hoành độ điểm cực đại, khi đó $x_1=-1$.<br>- $x_2$ là hoành độ điểm cực tiểu, khi đó $x_2=1$.  Suy ra $x_1 \\cdot x_2=-1$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Dựa vào đồ thị, hàm số $y=f(x)$ nghịch biến trên khoảng $(-1;1)$."
  },
  {
    "id": "2D151DS21",
    "question": "Cho hàm số $y=f(x)=-x^3-3x^2+4$.",
    "subQuestions": [
      {
        "text": "Phương trình $f'(x)=0$ có hai nghiệm phân biệt là $x=0$ hoặc $x=-2$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho đạt cực tiểu tại $x=0$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số đã cho nhận điểm $(-1;-2)$ làm tâm đối xứng",
        "answer": false
      },
      {
        "text": "Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số đã cho cách gốc tọa độ $O$ một khoảng bằng $\\dfrac{4\\sqrt{5}}{5}$",
        "answer": true
      }
    ],
    "explain": "<br>- Đúng.<br>  Ta có $y'=f'(x)=-3x^2-6x$; $f'(x)=0\\Leftrightarrow x=0$ hoặc $x=-2$.<br>- Sai.<br>  Ta có bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_077.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy, hàm số đạt cực tiểu tại điểm $x=-2$ và đạt cực đại tại điểm $x=0$.<br>- Sai.<br>  Ta có $f''(x)=-6x-6$; $f''(x)=0\\Leftrightarrow x=-1$. Do đó tâm đối xứng của đồ thị hàm số là điểm $(-1;2)$.<br>- Đúng<br>  Tọa độ hai điểm cực trị của đồ thị hàm số là $A(-2;0)$ và $B(0;4)$. Đường thẳng $AB$ có phương trình  $\\dfrac{x}{-2}+\\dfrac{y}{4}=1\\Leftrightarrow 2x-y+4=0.$  Khoảng cách từ $O$ đến đường thẳng $AB$ là  $\\mathrm{d}(O;AB)=\\dfrac{|2\\cdot 0-0+4|}{\\sqrt{2^2+(-1)^2}}=\\dfrac{4\\sqrt{5}}{5}.$"
  },
  {
    "id": "2D151DS22",
    "question": "Cho hàm số $y=\\dfrac{x^3}{3}-2x^2+3x$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số là $(0;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số có hai điểm cực trị",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực đại tại $x=1$",
        "answer": true
      },
      {
        "text": "Đường thẳng $y=-\\dfrac{4}{3}$ là tiếp tuyến của đồ thị $(C)$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Tập xác định của hàm số là $(-\\infty;+\\infty)$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $y'=x^2-4x+3$.<br>  $y'=0\\Leftrightarrow x=1 \\text{ hoặc } x=3.$<br>  Khi đó hàm số đã cho có hai điểm cực trị.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có bảng biến thiên của hàm số đã cho  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_084.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy hàm số đạt cực đại tại $x=1$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Đường thẳng $y=-\\dfrac{4}{3}$ song song với trục hoành, không đi qua điểm cực trị của đồ thị hàm số đã cho nên nó không là tiếp tuyến của đồ thị $(C)$."
  },
  {
    "id": "2D151DS23",
    "question": "Cho đồ thị hàm số bậc ba như hình vẽ bên dưới  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_086.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Điểm cực đại của đồ thị hàm số là $(-1;2)$",
        "answer": true
      },
      {
        "text": "Đồ thị cắt trục hoành tại hai điểm phân biệt",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có hai điểm cực trị đối xứng với nhau qua gốc tọa độ $O$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(1;+\\infty)$",
        "answer": true
      }
    ],
    "explain": "<br>- Đồ thị hàm số có điểm cực đại là $(-1;2)$.<br>- Đồ thị hàm số cắt trục hoành $y=0$ tại ba điểm phân biệt.<br>- Đồ thị hàm số có hai điểm cực trị là $(-1;2)$ và $(1;-2)$ đối xứng với nhau qua gốc tọa độ $O$.<br>- Hàm số đồng biến trên $(-\\infty;-1)$ và $(1;+\\infty)$."
  },
  {
    "id": "2D151DS24",
    "question": "Cho hàm số $y = f(x)$ có bảng biến thiên như hàm số dưới đây. Xét tính đúng sai của các khẳng định sau  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_088.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Phương trình $f(x) = 4$ có $4$ nghiệm phân biệt",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số đã cho có một đường tiệm cận đứng",
        "answer": true
      },
      {
        "text": "Hàm số đã cho đồng biến trên khoảng $(1;2)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên $(2;3]$ bằng $-4$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Dựa vào bảng biến thiên, ta thấy phương trình $f(x) = 4$ có hai nghiệm phân biệt là $x_1 &lt; 1$ và $x_2 \\in (1;2)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có  <br>- $\\displaystyle \\lim\\limits_{x \\to 2^{-}} f(x) = +\\infty$ nên $x = 2$ là tiệm cận đứng của đồ thị hàm số.<br>- $\\displaystyle \\lim\\limits_{x \\to 2^{+}} f(x) = -\\infty$ nên $x = 2$ là tiệm cận đứng của đồ thị hàm số.  Vậy đồ thị hàm số đã cho chỉ có một tiệm cận đứng là $x = 2$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Vì $f'(x) &gt; 0 \\Leftrightarrow x \\in (1;2)$ nên hàm số đã cho đồng biến trên khoảng $(1;2)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Vì $f'(x) &gt; 0 \\Leftrightarrow x \\in (2;3]$ nên hàm số đã cho đồng biến trên khoảng $(2;3]$ và $f(3) = -4$ nên giá trị lớn nhất của hàm số trên $(2;3]$ bằng $-4$."
  },
  {
    "id": "2D155DS25",
    "question": "Cho hàm số $y = f(x)$. Biết đạo hàm của $y = f(x)$ là hàm số $y = f'(x) = x^3 - 3x + 2$ có đồ thị là đường cong trong hình vẽ. Xét tính đúng sai của các khẳng định sau  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_089.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Điểm cực đại của đồ thị hàm số $y = f'(x)$ là $(-1;4)$",
        "answer": true
      },
      {
        "text": "Hàm số $y = f(x)$ có hai điểm cực trị",
        "answer": false
      },
      {
        "text": "Hàm số $y = f(x)$ đồng biến trên khoảng $(-\\infty;-2)$",
        "answer": true
      },
      {
        "text": "$f'(1) = 0$",
        "answer": false
      }
    ],
    "explain": "Ta có $f'(x) = 0 \\Leftrightarrow x^3 - 3x + 2 = 0 \\Leftrightarrow x = 1 \\text{ hoặc } x = -2.$<br>  Bảng biến thiên của hàm số $y = f(x)$  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_090.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Dựa vào đồ thị của $f'(x)$, ta thấy điểm cực đại của đồ thị hàm số $y = f'(x)$ là $(-1;4)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Vì phương trình $f'(x)$ chỉ đổi dấu từ âm sang dương khi đi qua $x = -2$ nên chỉ có $x = -2$ là cực trị của hàm số.<br>  Vậy hàm số $y = f(x)$ chỉ có một điểm cực trị.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Dựa vào bảng biến thiên, ta thấy hàm số $y = f(x)$ đồng biến trên $(-2;+\\infty)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Dựa vào kết quả tìm nghiệm từ phương trình $f'(x) = 0$, ta thấy $f'(1) = 0$."
  },
  {
    "id": "2D151DS26",
    "question": "Cho hàm số $y=\\dfrac{x^2+3x+5}{x+2}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số đã cho có đạo hàm $y'=\\dfrac{x^2+4x+1}{(x+2)^2}$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đã cho cắt trục hoành tại 2 điểm phân biệt",
        "answer": false
      },
      {
        "text": "Tâm đối xứng của đồ thị hàm số có tọa độ $(-2;-1)$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đã cho có 1 đường tiệm cận đứng, 1 đường tiệm cận ngang và 1 đường tiệm cận xiên",
        "answer": false
      }
    ],
    "explain": "<br>- $y'=\\dfrac{x^2+4x+1}{(x+2)^2}$.<br>- Phương trình hoành độ giao điểm: $x^2+3x+5=0$. <br>  Do $\\Delta=3^2-4\\cdot 5= -11 &lt; 0$ nên phương trình trên vô nghiệm, tức là đồ thị hàm số đã cho không cắt trục hoành.<br>- Đồ thị hàm số đã cho có tiệm cận đứng $x=-2$ và tiệm cận xiên $y=x+1$. <br>  Tâm đối xứng của đồ thị hàm số và giao điểm của tiệm cận đứng và tiệm cận xiên, khi đó $I(-2;-1)$.<br>- Đồ thị hàm số không có tiệm cận ngang vì $\\lim\\limits_{x \\to +\\infty}y=+\\infty$ và $\\lim\\limits_{x \\to -\\infty}y=-\\infty$."
  },
  {
    "id": "2D151DS27",
    "question": "Cho hàm số $y=\\dfrac{a x+1}{b x+c}$ ($a, b, c \\in R$ và $b \\neq 0$) có bảng biến thiên như hình bên dưới.  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_104.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số không có giá trị lớn nhất trên $(-1; 5]$",
        "answer": false
      },
      {
        "text": "Biết $f(0)=1$. Giá trị $a+b+c=4$",
        "answer": true
      },
      {
        "text": "Đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số lần lượt là $x=-1$; $y=2$",
        "answer": true
      },
      {
        "text": "$y' &gt; 0$, $\\forall x \\in \\mathbb{R}$",
        "answer": false
      }
    ],
    "explain": "<br>- Vì hàm số đồng biến trên $(-1; 5]$ nên $\\max\\limits_{(-1;5]} f(x)=f(5)$.<br>- Ta có   <br>- $f(0)=1 \\Rightarrow \\dfrac{1}{c}=1 \\Rightarrow c=1$.<br>- Tiệm cận đứng $x=-\\dfrac{c}{b}=-1 \\Rightarrow c=b$. Suy ra $b=1$.<br>- Tiệm cận ngang $y=\\dfrac{a}{b}= 2 \\Rightarrow a=2b$. Suy ra $a=2$.  Vậy $a+b+c=2+1+1=4$.<br>- $y' &gt; 0$, $\\forall x \\in \\mathbb{R}\\setminus\\{-1\\}$."
  },
  {
    "id": "2D151DS28",
    "question": "Cho hàm số $y=f(x)=\\dfrac{x^2-2x+2}{x+2}$.",
    "subQuestions": [
      {
        "text": "$y'=\\dfrac{x^2+4x-2}{(x+2)^2}$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có một đường tiệm cận đứng là $x=-2$",
        "answer": true
      },
      {
        "text": "Trên đoạn $[0;6]$, hàm số có giá trị lớn nhất bằng $\\dfrac{13}{4}$ và có giá trị nhỏ nhất bằng $1$",
        "answer": false
      },
      {
        "text": "Giao điểm của hai đường tiệm cận của đồ thị hàm số là điểm $I(-2;-6)$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $y'=\\dfrac{x^2+4x-6}{(x+2)^2}$.<br>- Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{-2\\}$.<br>  Ta có $\\lim\\limits_{x \\to (-2)^+} f(x)=+\\infty$.<br>  Đồ thị hàm số có một đường tiệm cận đứng là $x=-2$.<br>- Trên đoạn $[0;6]$, ta có  \\[y'=\\dfrac{x^2+4x-6}{(x+2)^2}=0\\Rightarrow x^2+4x-6=0\\Leftrightarrow x=1\\in [0;6] \\text{ hoặc } x=-6 \\notin [0;6].\\]  Tính được các giá trị $f(0)=1$, $f(1)=\\dfrac{1}{3}$, $f(6)=\\dfrac{13}{4}$.<br>  Vậy $\\max\\limits_{[0;6]} f(x)=\\dfrac{13}{4}$ tại $x=6$; $\\min\\limits_{[0;6]} f(x)=\\dfrac{1}{3}$ tại $x=1$.<br>- Tiệm cận đứng $x=-2$.<br>  Tiệm cận xiên $y=ax+b$, trong đó  <br>- $a=\\lim\\limits_{x\\to +\\infty}\\left[\\dfrac{f(x)}{x}\\right]=\\lim\\limits_{x\\to +\\infty}\\left[\\dfrac{x^2-2x+2}{x+2}:x\\right]=1$.<br>- $b=\\lim\\limits_{x\\to +\\infty}\\left[f(x)-ax\\right]=\\lim\\limits_{x\\to +\\infty}\\left[\\dfrac{x^2-2x+2}{x+2}-1\\cdot x\\right]=-4$.  Suy ra tiệm cận xiên $y=x-4$.<br>  Vậy giao điểm hai đường tiệm cận có toạ độ là   \\[x=-2 \\text{ và } y=x-4\\Leftrightarrow x=-2 \\text{ và } y=-2-4=-6\\Rightarrow I(-2;-6).\\]"
  },
  {
    "id": "2D151DS29",
    "question": "Cho hàm số $y=\\dfrac{x^2+4x+7}{x+1}$.",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên mỗi khoảng xác định của nó",
        "answer": false
      },
      {
        "text": "Hàm số đạt giá trị lớn nhất tại điểm $x=-3$",
        "answer": false
      },
      {
        "text": "Hai điểm cực trị của đồ thị hàm số nằm về hai phía đối với đường thẳng $(\\Delta)\\colon y=-1$",
        "answer": true
      },
      {
        "text": "Hai trục đối xứng của đồ thị hàm số vuông góc với nhau tại điểm $I(-1; 2)$",
        "answer": true
      }
    ],
    "explain": "<br>- Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{-1\\}$.<br>  Ta có $y'=\\dfrac{2^2+2x-3}{(x+1)^2}$. <br>  Xét $y'=0\\Leftrightarrow x=-3 \\text{ hoặc } x=1.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_109.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy hàm số đồng biến trên khoảng $(-\\infty;-3)$ và $(1;+\\infty)$.<br>- Hàm số không có giá trị lớn nhất trên $\\mathscr{D}$.<br>- Hai điểm cực trị của đồ thị hàm số là $(-3;-2)$ và $(1;6)$. Dễ thấy hai điểm này nằm về hai phía của đường thẳng $\\Delta\\colon y=-1$.<br>- Đồ thị hàm số có đường tiệm cận đứng là $x=-1$, đường tiệm cận xiên là $y=x+3$.<br>  Vậy hai trục đối xứng của đồ thị hàm số đi qua điểm $I(-1; 2)$ và hai trục đối xứng này vuông góc nhau."
  },
  {
    "id": "2D151DS30",
    "question": "Cho hàm số $y=x^3-3 x^2+4$.",
    "subQuestions": [
      {
        "text": "Tập xác định là $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Đạo hàm của hàm số đã cho là $y^{\\prime}=3 x^2-6 x$",
        "answer": true
      },
      {
        "text": "Bảng biến thiên của hàm số đã cho là\\newline  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_119.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số đã cho là \\newline  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_120.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": false
      }
    ],
    "explain": "Hàm số $y=x^3-3 x^2+4$ có tập xác định là $\\mathbb{R}$.<br>  $y'=3x^2-6x$.<br>  $y'=0 \\Leftrightarrow 3x^2-6x=0 \\Leftrightarrow x=0 \\text{ hoặc } x=2.$<br>- Hàm số là hàm đa thức nên có tập xác định là $\\mathbb{R}$.<br>- Có $y'=3x^2-6x$.<br>- Tại $x=0 \\Leftrightarrow y=4$ nên bảng biến thiên sai.<br>- Tại $x=0 \\Leftrightarrow y=4$ nên đồ thị sai."
  },
  {
    "id": "2D151DS31",
    "question": "Cho hàm số $y=f(x)=ax^3+bx^2+cx+d, (a\\neq 0)$ có đồ thị như hình bên. Xét tính đúng, sai của các mệnh đề sau.<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS1_013.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hệ số $a&gt;0$",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực đại tại $x=0$",
        "answer": false
      },
      {
        "text": "Phương trình $3f(x)=5$ có 3 nghiệm phân biệt",
        "answer": true
      },
      {
        "text": "$f(x)=x^3-3x^2-2$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Từ dạng đồ thị hàm số ta có $a&gt;0$.<br>- <strong>Sai</strong>. Từ đồ thị ta có hàm số đạt cực đại tại $x=-2$.<br>- <strong>Đúng</strong>. Ta có $3f(x)-5=0 \\Leftrightarrow f(x)= \\dfrac{5}{3}$.<br>   Từ đồ thị ta thấy đường thẳng $y=\\dfrac{5}{3}$ cắt đồ thị hàm số $y=f(x)$ tại $3$ điểm phân biệt, nên phương trình $f(x)= \\dfrac{5}{3}$ có $3$ nghiệm phân biệt.<br>- <strong>Sai</strong>.   Đồ thị giao với $Oy$ tại điểm có tung độ $-2$ nên $d=-2$.<br>  Đồ thị đi qua các điểm $(-2;2), (-1;0), (1;2)$ nên ta có   $-8a+4b-2c-2=2 \\text{ và } -a+b-c-2=0 \\text{ và } a+b+c-2=2  \\Rightarrow  a=1 \\text{ và } b=3 \\text{ và } c=0 \\Rightarrow f(x)=x^3-3x^2-2.$"
  },
  {
    "id": "2D151DS32",
    "question": "Cho hàm số $y=f(x)$ có đồ thị $(C)$ như hình vẽ bên<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS1_014.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đồ thị $(C)$ cắt trục $Oy$ tại điểm có tung độ bằng $2$",
        "answer": true
      },
      {
        "text": "Đồ thị $(C)$ có tiệm cận đứng là đường thẳng $x-1=0$",
        "answer": true
      },
      {
        "text": "Hàm số $y=f(x)$ có hai cực trị trong đó $y_{CT}&gt;y_{\\text{CĐ}}$",
        "answer": true
      },
      {
        "text": "Hai đường tiệm cận của đồ thị cùng với trục hoành tạo thành tam giác có diện tích bằng $2$",
        "answer": false
      }
    ],
    "explain": "Quan sát đồ thị ta thấy,  <br>- Đồ thị $(C)$ cắt $Oy$ tại điểm $(0;2)$ có tung độ bằng $2$.<br>- Đồ thị $(C)$ có tiệm cận đứng $x=1$.<br>- Hàm số $y=f(x)$ có hai cực trị và $y_{CT}&gt;y_{\\text{CĐ}}$.<br>- Hai đường tiệm cận và trục hoành tạo thành tam giác vuông, có độ dài hai cạnh góc vuông là $4$ và $4$. Suy ra diện tích tam giác là $S=8$."
  },
  {
    "id": "2D158DS33",
    "question": "Anh B chế tạo một bể cá có dạng khối hình hộp chữ nhật không nắp có thể tích $0,096$ m$^3$, chiều cao $h=0,6$ m, chiều rộng $x$, chiều dài $y$, với $0&lt;x&lt;y$. Anh B dùng loại kính để làm các mặt bên có giá $70.000$ đồng/m$^2$ và loại kính để làm mặt đáy có giá $100.000$ đồng/m$^2$. Mọi chi phí khác xem như không đáng kể. Khi đó",
    "subQuestions": [
      {
        "text": "Hàm số biểu thị $y$ theo $x$ là $y=\\dfrac{0{,}16}{x}$",
        "answer": true
      },
      {
        "text": "Chi phí mua kính để làm đáy bể là 11200 đồng",
        "answer": false
      },
      {
        "text": "Biểu thức tính chi phí làm các mặt xung quanh là $C_{xq}=84000\\left(x+\\dfrac{0{,}16}{x} \\right)$",
        "answer": true
      },
      {
        "text": "Chi phí làm bể cá thấp nhất là 100000 đồng",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Thể tích khối hộp hình chữ nhật: $V=xyh=xy\\cdot0{,}6=0{,}096$  $\\Rightarrow xy=0,16 \\Rightarrow y=\\dfrac{0{,}16}{x}$.<br>- <strong>Sai</strong>. Diện tích đáy bể là $S_d=xy=0{,}16 m^2$.<br>  Chi phí mua kính để làm đáy bể là $C_d=100000\\cdot S_d=16000$ đồng<br>- <strong>Đúng</strong>. Diện tích các mặt xung quanh:  $S_{xq}=2x\\cdot0{,}6+2y\\cdot0{,}6=1{,}2 \\left(x+\\dfrac{0{,}16}{x}\\right)$.<br>  Biểu thức tính chi phí làm các mặt xung quanh là  $C_{xq}=70000\\cdot S_{xq}=84000\\left(x+\\dfrac{0,16}{x}\\right)$.<br>- <strong>Sai</strong>. Chi phí làm bể cá  $C(x)=C_{xq}+C_d=84000\\left(x+\\dfrac{0{,}16}{x}\\right)+16000 \\ge 84000\\cdot 2 \\sqrt{ x \\cdot \\dfrac{0{,}16}{x}}+16000=83200.$  Vậy chi phí thấp nhất để làm bể cá là  $83200$ đồng khi $x=\\dfrac{0,16}{x} \\Leftrightarrow x = \\dfrac{2}{5}$."
  },
  {
    "id": "2D158DS34",
    "question": "Công ty $X$ chuyên sản xuất một loại sản phẩm, bộ phận sản xuất ước tính rằng với $q$ sản phẩm được sản xuất trong một tháng thì tổng chi phí sẽ là $C(q)=8q^2+40q+1400$ (nghìn đồng) và mỗi sản phẩm công ty bán với giá $P(q)=1400-2q$ (nghìn đồng).",
    "subQuestions": [
      {
        "text": "Chi phí mỗi tháng công ty phải bỏ ra để sản xuất 50 sản phẩm là $23400$ (nghìn đồng)",
        "answer": true
      },
      {
        "text": "Lợi nhuận bán được $q$ sản phẩm là $F(q)=-10q^2+1440q-1400$ (nghìn đồng)",
        "answer": false
      },
      {
        "text": "Lợi nhuận cao nhất trong một tháng của công ty là hơn $50000$ (nghìn đồng)",
        "answer": false
      },
      {
        "text": "Nếu số lượng sản phẩm bán ra trong một tháng nằm trong khoảng từ $60$ đến $70$ thì lợi nhuận sẽ được ước tính trong khoảng $44200$ đến $44840$ (nghìn đồng)",
        "answer": true
      }
    ],
    "explain": "<br>- Chi phí mỗi tháng công ty phải bỏ ra để sản xuất $50$ sản phẩm là $C(50)=8\\cdot 50^2+40\\cdot 50+1400=23400$ (nghìn đồng).<br>- Tổng số tiền thu được sau khi bán $q$ sản phẩm là $q\\cdot \\left(1400-2q\\right)=-2q^2+1400q$. <br>  Do đó, lợi nhuận khi bán $q$ sản phẩm là \\[ F(q)=-2q^2+1400q-8q^2-40q-1400 =-10q^2+1360q-1400 \\text{ (nghìn đồng)}\\]<br>- Áp dụng công thức tọa độ đỉnh $I$ của parabol ta có:  \\[I \\left(\\dfrac{-b}{2a};\\dfrac{-\\Delta}{4a} \\right)=\\left(\\dfrac{-1360}{2\\cdot (-10)};\\dfrac{4\\cdot (-10)\\cdot (-1400)-1360^2}{4\\cdot (-10)} \\right)=(68;44840)\\]  Vì hàm lợi nhuận là một parabol có hệ số $a &lt; 0$ nên giá trị lớn nhất của hàm số là $y_I=44840$ (nghìn đồng).<br>- Xét hàm số $F(q)=-10q^2+1360q-1400$ trên khoảng $(60;70)$. <br>  $F^{\\prime}(q)=-20q+1360$ <br>  $F^{\\prime}(q)=0\\Leftrightarrow q=68$. <br>  Ta có bảng biến thiên:  <br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS4_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy nếu số lượng sản phẩm bán ra trong một tháng nằm trong khoảng từ $60$ đến $70$ thì lợi nhuận sẽ được ước tính trong khoảng $44200$ đến $44840$ (nghìn đồng)."
  },
  {
    "id": "2D151DS35",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau.<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS9_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số nghịch biến trên các khoảng $\\left(-\\infty ;3\\right)$ và $\\left(3;+\\infty\\right)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên khoảng $\\left(-\\infty ;3\\right)$ bằng $1$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có một tiệm cận đứng và một tiệm cận xiên",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số đi qua điểm $M\\left(3;1\\right)$",
        "answer": false
      }
    ],
    "explain": "<br>- Đúng.<br>  Hàm số nghịch biến trên các khoảng $\\left(-\\infty ;3\\right)$ và $\\left(3;+\\infty\\right)$.<br>- Sai. <br>  Hàm số không có giá trị lớn nhất của hàm số trên khoảng $\\left(-\\infty ;3\\right)$.<br>- Sai. <br>  Đồ thị có tiệm cận đứng $ x=3 $ và không có tiệm cận xiên.<br>- Sai. <br>  Tại $ x=3 $, hàm số không xác định."
  }
];
