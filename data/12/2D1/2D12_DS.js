// =========================================================================
// KHỐI DỮ LIỆU: 2D12 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai2D12 = [
  {
    "id": "2D121DS1",
    "question": "Cho hàm số $f(x)=-x^3+3x+5$.",
    "subQuestions": [
      {
        "text": "Hàm số có giá trị cực đại là $7$, giá trị cực tiểu là $3$",
        "answer": false
      },
      {
        "text": "$f'(x)=-3x^2+3$",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực tiểu tại $x_1=-1$ và đạt cực đại tại $x_2=1$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên các khoảng $(-\\infty;-1)$ và $(1;+\\infty)$; nghịch biến trên khoảng $(-1;1)$",
        "answer": true
      }
    ],
    "explain": "Tập xác định của hàm số $\\mathscr{D}=\\mathbb{R}$.<br>  Ta có $y'=-3x^2+3$.<br>  $y'=0\\Leftrightarrow -3x^2+3=0\\Leftrightarrow x=\\pm 1$.<br>  Bảng biến thiên   <br><img src=\"data/12/2D1/im2D1/2D12_tikz_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Từ bảng biến thiên ta có giá trị cực đại là $7$ và giá trị cực tiểu là $5$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Vì $f'(x)=-3x^2+3$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Từ bảng biến thiên ta có hàm số đạt cực tiểu tại $x=-1$ và đạt cực đại tại $x=1$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Từ bảng biến thiên ta có hàm số đồng biến trên các khoảng $(-\\infty;-1)$ và $(1;+\\infty)$; nghịch biến trên khoảng $(-1;1)$."
  },
  {
    "id": "2D121DS2",
    "question": "Cho hàm số $f(x)=x^3-3x^2+3$.",
    "subQuestions": [
      {
        "text": "Hàm số nghịch biến trên khoảng $\\left(0;2\\right)$",
        "answer": true
      },
      {
        "text": "$f\\left(10^6\\right)&lt;f\\left(10^8\\right)$",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực đại tại $x=2$",
        "answer": false
      },
      {
        "text": "Tổng giá trị cực đại và giá trị cực tiểu của hàm số bằng $2$",
        "answer": true
      }
    ],
    "explain": "Ta có tập xác định $ \\mathscr{D}=\\mathbb{R} $.<br>  $ y'=3x^2-6x $; $ y'=0\\Leftrightarrow x=0 \\text{ hoặc } x=2. $<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_006.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Đúng.<br>  Hàm số nghịch biến trên khoảng $ (0;2) $.<br>- Đúng.<br>  Hàm số đồng biến trên $ (2;+\\infty) $ nên $f\\left(10^6\\right)&lt;f\\left(10^8\\right)$.<br>- Sai.<br>   Hàm số đạt cực đại tại $ x=0 $.<br>- Đúng. Ta có $ M=y_{\\text{CĐ}}=  3 \\text{ và } m=y_{\\text{CT}} =-1\\Rightarrow M+m=2 $."
  },
  {
    "id": "2D122DS3",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_012.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số $y=f(x)$ đạt cực đại tại $x=2$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ đồng biến trên khoảng $(-\\infty;2)$",
        "answer": false
      },
      {
        "text": "Phương trình đường thẳng qua $2$ điểm cực trị của đồ thị hàm số $y=f(x)$ là $d\\colon y=ax+b$. Khi đó $a+2b=2$",
        "answer": true
      },
      {
        "text": "Giá trị cực tiểu của hàm số $y=f(x)$ là $y_{\\text{CT}}=-4$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Hàm số $y=f(x)$ đạt cực đại tại $x=0$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Hàm số $y=f(x)$ đồng biến trên khoảng $(-\\infty;0)$ và $(3;+\\infty)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Phương trình đường thẳng qua $2$ điểm cực trị $(0;2)$ và $(3;-4)$ của đồ thị hàm số $y=f(x)$ là $d\\colon y=-2x+2$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Giá trị cực tiểu của hàm số $y=f(x)$ là $y=-4$."
  },
  {
    "id": "2D122DS4",
    "question": "Cho hàm số $f(x)=\\dfrac{-x^2+x-2}{x+1}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số là $f'(x)=\\dfrac{-x^2-2x+3}{(x+1)^2}$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(1;+\\infty)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có tiệm cận xiên là đường thẳng $y=-x+2$",
        "answer": true
      },
      {
        "text": "Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số có phương trình là $y=-x+1$",
        "answer": false
      }
    ],
    "explain": "<br>- Điều kiện xác định $x+1\\ne 0 \\Leftrightarrow x\\ne -1$. <br>  Suy ra tập xác định của hàm số là $ \\mathscr{D}=\\mathbb{R}\\setminus\\{-1\\}$.<br>  Ta có $f(x)=-x+2-\\dfrac{4}{x+1}$.<br>  $f'(x)=-1+\\dfrac{4}{(x+1)^2}  =\\dfrac{4-(x+1)^2}{(x+1)^2}=\\dfrac{-x^2-2x+3}{(x+1)^2}$.<br>- $f'(x)=0\\Rightarrow 4-(x+1)^2=0 \\Rightarrow (x+1)^2=4 \\Rightarrow x+1=-2 \\text{ hoặc } x+1=2\\Rightarrow x=-3 \\text{ hoặc } x=1.$  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_022.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vì vậy trên khoảng $(1;+\\infty)$, hàm số nghịch biến.<br>- Vì $\\lim\\limits_{x\\to\\pm\\infty}\\left[f(x)-(-x+2)\\right]=0 \\Rightarrow y=-x+2$ là tiệm cận xiên của đồ thị hàm số.<br>- Đồ thị hàm số có hai điểm cực trị là $A(-3;7)$ và $B(1;-1)$.<br>  Đường thẳng $AB$ có phương trình là  \\[\\dfrac{x-(-3)}{1-(-3)}=\\dfrac{y-7}{-1-7} \\Leftrightarrow y=-2x+1.  \\]"
  },
  {
    "id": "2D121DS5",
    "question": "Cho hàm số $f(x)=\\log_{\\frac{1}{2}}(x^2-5x+4).$",
    "subQuestions": [
      {
        "text": "Hàm số $y=f(x)$ đồng biến trên khoảng $\\left(-\\infty;\\dfrac{5}{2}\\right)$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ có đạo hàm $f'(x)=\\dfrac{5-2x}{(x^2-5x+4)\\ln 2}$",
        "answer": true
      },
      {
        "text": "Hàm số $y=f(x)$ có tập xác định $\\mathscr{D}=(-\\infty;1]\\cup [4;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số có một điểm cực trị",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Hàm số $f(x)=\\log_{\\frac{1}{2}}(x^2-5x+4)$ xác định khi $x^2-5x+4&gt;0\\Rightarrow x&gt;4 \\text{ hoặc } x&lt;1.$<br>  Suy ra tập xác định của hàm số là $\\mathscr{D}=(-\\infty;1)\\cup (4;+\\infty)$.<br>  Do đó hàm số không xác định trên $\\left(-\\infty;\\dfrac{5}{2}\\right)$ nên không đồng biến trên khoảng $\\left(-\\infty;\\dfrac{5}{2}\\right)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  $f(x)=\\log_{\\frac{1}{2}}(x^2-5x+4)\\Rightarrow f'(x)=\\dfrac{(x^2-5x+4)'}{(x^2-5x+4)\\cdot \\ln\\dfrac{1}{2}}=\\dfrac{5-2x}{(x^2-5x+4)\\cdot \\ln2}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Ta có tập xác định của hàm số $y=f(x)$ là $\\mathscr{D}=(-\\infty;1)\\cup (4;+\\infty)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Ta có $\\dfrac{5-2x}{(x^2-5x+4)}\\cdot \\ln2=0\\Rightarrow x=\\dfrac{5}{2}$.<br>  Vì $1&lt;\\dfrac{5}{2}&lt;4$ nên $x=\\dfrac{5}{2}$ không thuộc$\\mathscr{D}$.<br>   Do đó hàm số không đạt cực trị tại $x=\\dfrac{5}{2}$."
  },
  {
    "id": "2D122DS6",
    "question": "Cho hàm số $y = f(x)$ có đồ thị như sau:  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_028.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số $y = f(x)$ đồng biến trên khoảng $(-3; 2)$",
        "answer": true
      },
      {
        "text": "Hàm số $y = f(x)$ nghịch biến trên các khoảng $(-5; -3)$ và $(2; 5)$",
        "answer": true
      },
      {
        "text": "Hàm số $y = f(x)$ có $x = -3$ là điểm cực tiểu",
        "answer": true
      },
      {
        "text": "Hàm số $y = f(x)$ có $x = -5$ là điểm cực đại",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Hàm số $y = f(x)$ đồng biến trên khoảng $(-4; 2)$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Hàm số $y = f(x)$ nghịch biến trên các khoảng $(-5; -3)$ và $(2; 5)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Hàm số $y = f(x)$ đạt cực tiểu tại $x = -3$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Hàm số $y = f(x)$ đạt cực đại tại $x = 2$."
  },
  {
    "id": "2D121DS7",
    "question": "Cho hàm số $y=\\dfrac{x^2-2x+2}{x-1}$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số đã cho là $y'=\\dfrac{x^2-2x}{x+1}$",
        "answer": false
      },
      {
        "text": "Giá trị cực đại của hàm số bằng $-2$",
        "answer": true
      },
      {
        "text": "Điểm cực tiểu của hàm số bằng $0$",
        "answer": false
      },
      {
        "text": "Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số đã cho có phương trình là $y=2x-2$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Ta có  $ y'=\\dfrac{(2x-2)(x-1)-\\left(x^2-2x+2\\right)}{(x-1)^2}=\\dfrac{2x^2-4x+2-x^2+2 x-2}{(x-1)^2}=\\dfrac{x^2-2 x}{(x-1)^2}.$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Tập xác định $\\mathscr{D}=\\mathbb{R} \\setminus \\{1\\}$.<br>  Ta có $y'=\\dfrac{x^2-2x}{(x-1)^2}$, cho $y'=0 \\Leftrightarrow x^2-2x=0 \\Leftrightarrow x=0 \\text{ hoặc } x=2.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_035.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên ta thấy giá trị cực đại của hàm số bằng $-2$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Từ bảng biến thiên ta thấy điểm cực tiểu của hàm số bằng $2$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Đồ thị hàm số $y=\\dfrac{x^2-2x+2}{x-1}$ có hai điểm cực trị lần lượt là $A(0 ;-2)$, $B(2;2)$.<br>  Phương trình đường thẳng đi qua hai điểm $A$, $B$ là $\\dfrac{x-0}{2-0}=\\dfrac{y+2}{2+2} \\Leftrightarrow y=2x-2$."
  },
  {
    "id": "2D122DS8",
    "question": "Hàm số $y=f(x)$. Đồ thị của hàm số $y=f'(x)$ như hình bên. Khi đó:<br><img src=\"data/12/2D1/im2D1/2D12_tikz_055.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số $y=f(x)$ có $4$ điểm cực trị",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ đồng biến trên khoảng $(-\\infty;-2)$",
        "answer": false
      },
      {
        "text": "Hàm số $g(x)=f(x^2)$ đồng biến trên khoảng $\\left(\\sqrt{5};+\\infty\\right)$",
        "answer": true
      },
      {
        "text": "Hàm số $g(x)=f\\left(x^2\\right)$ có $5$ điểm cực trị",
        "answer": true
      }
    ],
    "explain": "Từ đồ thị của hàm số $y=f'(x)$ ta có bảng biến thiên của hàm số $y=f(x)$  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_056.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên ta có  <br>- {\\bf Sai}.<br>  Bảng biến thiên có $y'$ đổi dấu qua $3$ giá trị nên hàm số $y=f(x)$ có ba điểm cực trị.<br>- {\\bf Sai}.<br>  Hàm số $y=f(x)$ nghịch biến trên khoảng $(-\\infty; -2)$.<br>- {\\bf Đúng}.<br>  Ta có $g'(x)=2xf'\\left(x^2\\right)=0\\Leftrightarrow x=0 \\text{ hoặc } x^2=0 \\text{ hoặc } x^2=1 \\text{ hoặc } x^2=3\\Leftrightarrow x=0 \\text{ hoặc } x=\\pm 1 \\text{ hoặc } x=\\pm 3.$<br>  Bảng xét dấu của $g'(x)$  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_057.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng xét dấu của $g'(x)$ ta thấy hàm số $g(x)$ đồng biến trên khoảng $\\left(\\sqrt{3}; +\\infty\\right)$ nên hàm số $g(x)$ cũng đồng biến trên khoảng $\\left(\\sqrt{5}; +\\infty\\right)$.<br>- {\\bf Đúng}. <br>   Từ bảng xét dấu của $g'(x)$ ta thấy $g'(x)$ đổi dấu $5$ lần nên hàm số $g(x)=f(x^2)$ có $5$ điểm cực trị."
  },
  {
    "id": "2D122DS9",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như hình vẽ bên dưới  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_064.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Giá trị cực đại của hàm số bằng $2$",
        "answer": true
      },
      {
        "text": "Giá trị cực tiểu của hàm số bằng $-1$",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực đại tại $x=0$ và $x=1$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực tiểu tại $x=-2$",
        "answer": true
      }
    ],
    "explain": "<br>- Giá trị cực đại của hàm số bằng $2$.<br>- Giá trị cực tiểu của hàm số bằng $-1$<br>- Hàm số đạt cực đại tại $x=2$.<br>- Hàm số đạt cực tiểu tại $x=-2$."
  },
  {
    "id": "2D122DS10",
    "question": "Bạn An muốn tận dụng hết một sợi dây thừng dài $12$ dm để làm thiệp tặng bạn trong dịp Noel. An dự định cắt sợi dây thành hai đoạn, đoạn thứ $I$ uốn thành một đường tròn, đoạn thứ $II$ gấp thành hai hình vuông bằng nhau. Sau đó, đặt ba hình lên bìa carton để làm thiệp. Gọi $S_1$ là diện tích hình tròn, $S_2$ là diện tích hai hình vuông được tạo thành từ hai đoạn dây nêu trên (như hình vẽ dưới). Theo bạn An, để trang trí hình vuông, mỗi dm$^2$ mất $30$ phút; để trang trí hình tròn, mỗi dm$^2$ mất $20$ phút. Giả sử $x~(0&lt; $x$ &lt; 12)$ là chiều dài đoạn dây thứ $I$, đơn vị là dm. Mọi kết quả làm tròn $1$ chữ số thập phân.   <br><img src=\"data/12/2D1/im2D1/2D12_tikz_075.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tổng diện tích $S_1+S_2$ là một hàm số $S(x)$ luôn đồng biến trên tập xác định của nó",
        "answer": false
      },
      {
        "text": "Tổng diện tích $S_1+S_2$ là hàm số $S(x)$ có một điểm cực trị",
        "answer": true
      },
      {
        "text": "Tổng thời gian trang trí thiệp là một hàm số $T(x)=\\dfrac{5}{\\pi} x^2+\\dfrac{15}{32}(12-x)^2$, tính bằng phút",
        "answer": true
      },
      {
        "text": "Tổng thời gian trang trí thiệp ngắn nhất khi $x \\approx 4,4\\mathrm{~dm}$",
        "answer": false
      }
    ],
    "explain": "Đoạn dây thứ $I$ dài $x$ dm được uốn thành một đường tròn, tức là chu vi của đường tròn này là $x$. Dùng công thức chu vi của hình tròn $C = 2\\pi r$, ta có  \\[x = 2\\pi r \\Rightarrow r = \\frac{x}{2\\pi}.\\]  Diện tích hình tròn $S_1$ là $S_1 = \\pi r^2 = \\pi \\left(\\dfrac{x}{2\\pi}\\right)^2 =\\dfrac{x^2}{4\\pi}$.<br>  Đoạn dây thứ $II$ dài $12 - x$ dm được gấp thành hai hình vuông. Tổng chiều dài dây dùng cho hai hình vuông là $12 - x$, tức là chiều dài mỗi cạnh của một hình vuông là  $ \\dfrac{12 - x}{8}$.<br>  Diện tích một hình vuông là $\\left(\\dfrac{12 - x}{8}\\right)^2$.<br>  Vì có hai hình vuông, tổng diện tích hai hình vuông $S_2$ là  \\[S_2 = 2\\cdot \\left(\\dfrac{12 - x}{8}\\right)^2 = 2\\cdot\\dfrac{(12 - x)^2}{64} = \\dfrac{(12 - x)^2}{32}.\\]  Tổng diện tích $S_1 + S_2$ là  \\[S_1 + S_2 = \\dfrac{x^2}{4\\pi} + \\dfrac{(12 - x)^2}{32}.\\]  <br>- Ta có $S(x)=S_1 + S_2 = \\dfrac{x^2}{4\\pi} + \\dfrac{(12 - x)^2}{32} $.<br>  $S'(x)= \\dfrac{x}{2\\pi}+\\dfrac{2(12-x)(-1)}{32}=\\dfrac{x}{2\\pi}-\\dfrac{12-x}{16}$.<br>  $S'(x)=0\\Leftrightarrow \\dfrac{x}{2\\pi}-\\dfrac{12-x}{16}=0\\Leftrightarrow x=\\dfrac{12\\pi}{8+\\pi}$.  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_076.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Suy ra $S(x)$ đồng biến trên $\\left(\\dfrac{12\\pi}{8+\\pi};12\\right)$, nghịch biến trên $\\left(0;\\dfrac{12\\pi}{8+\\pi}\\right)$.<br>- $S(x)$ có $1$ điểm cực tiểu.<br>- Tổng thời gian trang trí thiệp là hàm số $T(x)$ và được tính như sau<br>- Thời gian trang trí hình tròn: Mỗi dm$^2$ mất $20$ phút, diện tích hình tròn là $S_1 = \\dfrac{x^2}{4\\pi}$, nên thời gian trang trí hình tròn là  \\[\\text{Thời gian trang trí hình tròn} = 20\\cdot \\dfrac{x^2}{4\\pi} = \\frac{5x^2}{\\pi}.\\]<br>- Thời gian trang trí hai hình vuông: Mỗi dm$^2$ mất $30$ phút, diện tích hai hình vuông là $S_2 = \\dfrac{(12 - x)^2}{32}$, nên thời gian trang trí hai hình vuông là  \\[30\\cdot \\dfrac{(12 - x)^2}{32} = \\dfrac{15(12 - x)^2}{32}.\\]  Vậy tổng thời gian trang trí thiệp $T(x)$ là  \\[T(x) = \\dfrac{5x^2}{\\pi} + \\dfrac{15(12 - x)^2}{32}.\\]<br>- Ta có $T'(x)=\\dfrac{10x}{\\pi}-\\dfrac{15(12-x)}{16} $.<br>  $T'(x)=0\\Leftrightarrow \\dfrac{10x}{\\pi}-\\dfrac{15(12-x)}{16}=0\\Leftrightarrow x=\\dfrac{36\\pi}{3\\pi+32}$.  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_077.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có $\\min T(x)=S_2$ khi $x=\\dfrac{36\\pi}{3\\pi+32}\\approx 2{,}7$.<br>  Vậy tổng thời gian trang trí thiệp ngắn nhất khi $x \\approx 2{,}7$ dm."
  },
  {
    "id": "2D122DS11",
    "question": "Cho hàm số $f(x)=ax^3+bx^2+cx+d$ $(a$, $b$, $c$, $d \\in \\mathbb{R})$ có đồ thị như hình.<br><img src=\"data/12/2D1/im2D1/2D12_tikz_080.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tổng $a+b+c+d=1$",
        "answer": true
      },
      {
        "text": "Hàm số $y=f(x)$ đồng biến trên khoảng $(0; 1)$",
        "answer": true
      },
      {
        "text": "Giá trị cực đại của hàm số $f(x)$ bằng $3$",
        "answer": true
      },
      {
        "text": "Đường thẳng $(d)\\colon y=3x-1$ đi qua hai điểm cực trị của đồ thị",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Đồ thị hàm số có tâm đối xứng là điểm $I(1;1)$ nên ta có $a+b+c+d=1$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Hàm số $y=f(x)$ đồng biến trên khoảng $(0;2)$ nên hàm số $y=f(x)$ đồng biến trên khoảng $(0;1)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Giá trị cực đại của hàm số $f(x)$ bằng $3$<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Do $3\\cdot 2-1=5$ nên đường thẳng $(d)\\colon y=3x-1$ không đi qua điểm cực đại của đồ thị."
  },
  {
    "id": "2D122DS12",
    "question": "Cho hàm số $y=f(x)=2x^3-3x+1$",
    "subQuestions": [
      {
        "text": "Giá trị cực đại là giá trị lớn nhất",
        "answer": false
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(-\\infty; 0)$",
        "answer": false
      },
      {
        "text": "Hàm số xác định trên tập $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có hai điểm cực trị",
        "answer": true
      }
    ],
    "explain": "<br>- {\\bf Sai} <br>  Ta có $\\lim\\limits_{x\\to -\\infty}=-\\infty$ và $\\lim\\limits_{x\\to +\\infty}=+\\infty$.<br>  Do đó, hàm số đã cho không có giá trị lớn nhất và giá trị nhỏ nhất trên $\\mathbb{R}$.<br>- {\\bf Sai}<br>  Ta có $y'=6x^2-3$; $y'=0\\Leftrightarrow 6x^2-3=0\\Leftrightarrow x=\\dfrac{1}{\\sqrt{2}}$.<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_081.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, ta thấy hàm số đã cho đồng biến trên các khoảng $\\left(-\\infty;-\\dfrac{1}{\\sqrt{2}}\\right)$ và $\\left(-\\dfrac{1}{\\sqrt{2}};+\\infty\\right)$.<br>- {\\bf Đúng} <br>  Hàm số xác định trên tập $\\mathbb{R}$.<br>- {\\bf Đúng} <br>  Dựa vào bảng biến thiên, ta thấy hàm số đã cho có $2$ điểm cực trị."
  },
  {
    "id": "2D122DS13",
    "question": "Hàm số $y=f(x)$ có đạo hàm trên $\\mathbb{R}$ và có đồ thị như hình vẽ sau.<br><img src=\"data/12/2D1/im2D1/2D12_tikz_090.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số $f(x)$ đạt cực đại tại $x=-1$, đạt cực tiểu tại $x=1$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ giảm trên khoảng $(-2;2)$",
        "answer": false
      },
      {
        "text": "Giá trị cực đại của hàm số là $-2$",
        "answer": false
      },
      {
        "text": "Hàm số $g(x)=\\left[f(x)\\right]^2+2\\,024$ có $4$ điểm cực trị",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Từ đồ thị hàm số $y=f(x)$, ta có hàm số $f(x)$ đạt cực đại tại $x=-1$, đạt cực tiểu tại $x=1$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Từ đồ thị hàm số $y=f(x)$, ta có hàm số $f(x)$ giảm trên khoảng $(-1;1)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Hàm số có giá trị cực đại là $y_{\\text{CĐ}}=2$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $g'(x)=2f(x)\\cdot f'(x)$. Do đó  $g'(x)=0$<br>$\\Leftrightarrow f(x)=0 \\text{ hoặc } f'(x)=0$<br>$\\Leftrightarrow x=a\\in (-2;-1) \\text{ hoặc } x=0 \\text{ hoặc } x=b\\in (1;2) \\text{ hoặc } x=-1 \\text{ hoặc } x=1.$  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_091.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy hàm số $g(x)$ có $5$ điểm cực trị."
  },
  {
    "id": "2D121DS14",
    "question": "Cho hàm số $y=\\dfrac{x^2-2x+2}{x-1}$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số đã cho là $y'=\\dfrac{x^2-2x}{(x-1)^2}$",
        "answer": true
      },
      {
        "text": "Giá trị cực đại của hàm số bằng $2$",
        "answer": false
      },
      {
        "text": "Điểm cực tiểu của hàm số bằng $0$",
        "answer": false
      },
      {
        "text": "Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số đã cho có phương trình là $y=2x+2$",
        "answer": false
      }
    ],
    "explain": "Điều kiện xác định $x\\neq 1$, suy ra tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus \\{1\\}$.  <br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $y' = \\dfrac{\\left(x^2-2x+2\\right)'\\cdot (x-1)-(x-1)'\\cdot \\left(x^2-2x+2\\right)}{x-1)^2}$<br>$= \\dfrac{(2x-2)(x-1)-(x^2-2x+2)}{(x-1)^2}$<br>$= \\dfrac{x^2-2x}{(x-1)^2}.$<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Xét $y'=0\\Leftrightarrow x^2-2x=0\\Leftrightarrow x=0 \\text{ hoặc } x=2.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D12_tikz_105.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên, ta thấy giá trị cực đại của hàm số bằng $-2$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Từ bảng biến thiên, ta thấy điểm cực tiểu của hàm số bằng $2$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Gọi đường thẳng đi qua hai điểm cực trị đã cho có phương trình là $d\\colon y=ax+b$.<br>  Do $d$ đi qua hai điểm $(0;-2)$ và $(2;2)$ nên ta có hệ phương trình  $b=-2 \\text{ và } 2a+b=2\\Leftrightarrow b=-2 \\text{ và } a=2.$  Vậy phương trình đường thẳng cần tìm là $y=2x-2$."
  },
  {
    "id": "2D122DS15",
    "question": "Cho hàm số $y=f(x)=x^4-2x^2-5$. Xét tính đúng sai của các mệnh đề sau.",
    "subQuestions": [
      {
        "text": "Hàm số $f(x)$ có $3$ điểm cực trị",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ đồng biến trên $(0;+\\infty)$",
        "answer": false
      },
      {
        "text": "Điểm $M(0;1)$ là điểm cực tiểu của đồ thị hàm số $y=f(x)$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ và $y=f(2x)$ có cùng điểm cực đại",
        "answer": true
      }
    ],
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}$.<br>  Ta có $y'=4x^3-4x$; $y'=0\\Leftrightarrow x=0 \\text{ hoặc } x=\\pm 1.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D12/dlts_12_DLTS1_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên ta thấy  <br>- Đúng.<br>- Sai.<br>- Sai.<br>- Đúng.<br>  Xét $g(x)=f(2x)=16x^4-8x^2-5\\Rightarrow g'(x)=64x^3-16x$.<br>  Ta có $g'(x)=0\\Leftrightarrow x=0 \\text{ hoặc } x=\\pm \\dfrac{1}{2}.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D12/dlts_12_DLTS1_011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta thấy hàm số $y=f(x)$ và $g(x)=f(2x)$ đều đạt cực đại tại $x=0$."
  },
  {
    "id": "2D121DS16",
    "question": "Giá trị cực tiểu của hàm số $ y=x^2\\ln x$ là",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số là $ \\mathscr{D}=\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "$y'=2x\\ln x+x$",
        "answer": true
      },
      {
        "text": "Hàm số có giá trị cực tiểu là $-\\dfrac{1}{2\\mathrm{e}}$ tại $ x=\\mathrm{e}^{-\\dfrac{1}{2}}$",
        "answer": true
      },
      {
        "text": "Hàm số không có tiệm cận.",
        "answer": true
      }
    ],
    "explain": "Tập xác định của hàm số là $ \\mathscr{D}=\\left(0;+\\infty\\right)$.<br>  Ta có $ y'=2x\\ln x+x=x\\left(2\\ln x+1\\right)$, $ y'=0$\\Leftrightarrow\\left[\\begin{array}{l}  x=0\\notin \\mathscr{D}\\\\  2\\ln x+1=0  \\end{array}\\right.$ $\\Leftrightarrow\\ln x=-\\dfrac{1}{2}$\\Leftrightarrow x=\\mathrm{e}^{-\\dfrac{1}{2}}$.<br>  Lập bảng biến thiên của hàm số  <br><img src=\"data/12/2D1/im2D12/dlts_12_DLTS2_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên, ta có hàm số có giá trị cực tiểu là $-\\dfrac{1}{2\\mathrm{e}}$ tại $ x=\\mathrm{e}^{-\\dfrac{1}{2}}$.  Ta có:   $\\lim\\limits_{x\\rightarrow 0^+} f(x)= 0 $ nên hàm số không có tiệm cận đứng.  $\\lim\\limits_{x\\rightarrow +\\vc} f(x)= +\\vc $ nên hàm số không có tiệm cận ngang."
  },
  {
    "id": "2D122DS17",
    "question": "Cho hàm số $y=f(x)=ax^3+bx^2+cx+d$ với $a \\neq 0$ có đồ thị như hình vẽ sau<br><img src=\"data/12/2D1/im2D12/dlts_12_DLTS2_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đạt cực tiểu tại $x=-1$",
        "answer": false
      },
      {
        "text": "Phương trình $f(x)=2$ có 3 nghiệm phân biệt",
        "answer": true
      },
      {
        "text": "Đồ thị trên là đồ thị của hàm số $y=f(x)=x^3-3 x+2$",
        "answer": false
      },
      {
        "text": "Điểm cực đại của đồ thị hàm số $y=f(4-x)+1$ là $(5;4)$",
        "answer": true
      }
    ],
    "explain": "<br>- Sai. Vì hàm số đạt cực tiểu tại $x=1$.<br>- Đúng. Vì đường thẳng $y=2$ cắt đồ thị hàm số $y=f(x)$ tại $3$ điểm phân biệt.<br>- Sai. <br>  Ta có $f(-1)=3 \\text{ và } f(0)=1 \\text{ và } f(1)=-1 \\text{ và } f'(1)=0 \\Leftrightarrow-a+b-c+d=3 \\text{ và } d=1 \\text{ và } a+b+c+d=-1 \\text{ và } 3 a+2 b+c=0 \\Leftrightarrow a=1 \\text{ và } b=0 \\text{ và } c=-3 \\text{ và } d=1.$<br>  Vậy $y=f(x)=x^3-3x+1$.<br>- Đúng. Đặt $g(x)=f(4-x)+1 \\Rightarrow g'(x)=-f'(4-x)$.<br>  $g'(x)=0 \\Leftrightarrow -f'(4-x)=0 \\Leftrightarrow4-x =-1 \\text{ hoặc } 4-x =1\\Leftrightarrow x=5 \\text{ hoặc } x=3.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D12/dlts_12_DLTS2_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy điểm cực đại của đồ thị hàm số $y=f(4-x)+1$ là $(5 ; 4)$."
  },
  {
    "id": "2D127DS18",
    "question": "Một cơ sở sản xuất khăn mặt đang bán mỗi chiếc khăn với giá $30\\,000$ đồng một chiếc và mỗi tháng cơ sở bán được trung bình $3\\,000$ chiếc khăn. Cơ sở sản xuất đang có kế hoạch tăng giá bán để có lợi nhận tốt hơn. Sau khi tham khảo thị trường, người quản lý thấy rằng nếu từ mức giá $30\\,000$ đồng mà cứ tăng giá thêm $1\\,000$ đồng thì mỗi tháng sẽ bán ít hơn $100$ chiếc. Biết vốn sản xuất một chiếc khăn không thay đổi là $18\\,000$ đồng.",
    "subQuestions": [
      {
        "text": "Nếu cơ sở bán mỗi chiếc khăn với giá $31\\,000$ đồng thì số tiền lãi sau $1$ tháng là $44$ triệu đồng",
        "answer": false
      },
      {
        "text": "Sau khi cơ sở tăng giá mỗi chiếc khăn thêm $x$ (nghìn đồng) thì tổng số lợi nhuận một tháng của cơ sở được tính theo công thức $f(x)=-100x^2+1\\,800x+36\\,000$",
        "answer": true
      },
      {
        "text": "Để đạt lợi nhuận lớn nhất thì số khăn bán ra giảm $800$ chiếc",
        "answer": false
      },
      {
        "text": "Để đạt lợi nhuận lớn nhất thì mỗi chiếc khăn cần bán với giá $39\\,000$ đồng",
        "answer": true
      }
    ],
    "explain": "<br>- Cứ tăng giá thêm $1$ (nghìn đồng) thì số chiếc khăn bán ra giảm $100$ chiếc nên tăng $x$ (nghìn đồng) thì số khăn bán ra giảm $100x$ chiếc.<br>   Do đó tổng số khăn bán ra mỗi tháng là $3\\,000-100x$ chiếc.<br>- Lúc đầu bán với giá $30$ (nghìn đồng), mỗi chiếc khăn có lãi $12$ (nghìn đồng). Sau khi tăng giá, mỗi chiếc khăn thu được số lãi là $12+x$ (nghìn đồng).<br>   Do đó tổng số lợi nhuận một tháng thu được sau khi tăng giá là $f(x)=(3\\,000-100x)(12+x)=-100x^2+1\\,800x+36\\,000$ (nghìn đồng).<br>- Xét hàm số $f(x)=-100x^2+1\\,800x+36\\,000$ trên $(0;+\\infty)$.<br>   Ta có $f'(x)=0\\Leftrightarrow -200x+1\\,800=0\\Leftrightarrow x=9$.<br>   Lập bảng biến thiên của hàm số $f(x)$ trên $(0;+\\infty)$ ta thấy hàm số đạt giá trị lớn nhất khi $x=9$.<br>- Để thu được lợi nhuận cao nhất thì cơ sở sản xuất cần tăng giá bán mỗi chiếc khăn là $9\\,000$ đồng tức là mỗi chiếc khăn bán với giá mới là $39\\,000$ đồng."
  }
];
