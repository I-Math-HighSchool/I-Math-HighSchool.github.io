// =========================================================================
// KHỐI DỮ LIỆU: 2D14 - Đúng sai
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai2D14 = [
  {
    "id": "2D141DS1",
    "question": "Cho hàm số $y=f(x)=\\dfrac{\\sqrt{x}}{x-2}$.",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số có một đường tiệm cận đứng và hai đường tiệm cận ngang",
        "answer": false
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(2;+\\infty)$",
        "answer": false
      },
      {
        "text": "Tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}\\setminus\\{2\\}$",
        "answer": false
      },
      {
        "text": "Hàm số không có giá trị lớn nhất",
        "answer": true
      }
    ],
    "explain": "Tập xác định của hàm số $\\mathscr{D}=[0;+\\infty)\\setminus\\{2\\}$.<br>  Ta có $y'=\\dfrac{\\left(\\sqrt{x}\\right)'\\cdot(x-2)-\\sqrt{x}\\cdot(x-2)'}{(x-2)^2}=\\dfrac{-x-2}{2\\sqrt{x}(x-2)^2}&lt;0,\\,\\forall x\\in\\mathscr{D}$.<br>  Ta có  <br>- $\\lim\\limits_{x\\to2^-}f(x)=\\lim\\limits_{x\\to2^-}\\dfrac{\\sqrt{x}}{x-2}=-\\infty$; $\\lim\\limits_{x\\to2^+}f(x)=\\lim\\limits_{x\\to2^+}\\dfrac{\\sqrt{x}}{x-2}=+\\infty$.<br>  Suy ra $x=2$ là tiệm cận đứng của đồ thị hàm số.<br>- $\\lim\\limits_{x\\to+\\infty}f(x)=\\lim\\limits_{x\\to+\\infty}\\dfrac{\\sqrt{x}}{x-2}=0$.<br>   Suy ra $y=0$ là tiệm cận ngang của đồ thị hàm số.  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- &lt;strong&gt;Sai&lt;/strong&gt;. Vì đồ thị có một đường tiệm cận đứng và một đường tiệm cận ngang.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Vì hàm số nghịch biến trên khoảng $(2;+\\infty)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Tập xác định của hàm số $\\mathscr{D}=[0;+\\infty)\\setminus\\{2\\}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. <br>  Từ bảng biến thiên ta suy ra hàm số không có giá trị lớn nhất."
  },
  {
    "id": "2D141DS2",
    "question": "Cho hàm số $y=f(x)=\\dfrac{x^2+ax+b}{x+m}$ có đồ thị như hình vẽ.  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Ta có $a=b$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(-\\infty;-1)$",
        "answer": false
      },
      {
        "text": "Đường thẳng $x=-1$ là đường tiệm cận đứng của đồ thị hàm số",
        "answer": true
      },
      {
        "text": "Hàm số không có giá trị lớn nhất trên $[-5;-3]$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Đồ thị có tiệm cận đứng là đường thẳng $x=-1$, nên suy ra $m=1$.<br>  Đồ thị cắt trục tung tại điểm $(0;2)$, suy ra $\\dfrac{b}{m}=2\\Rightarrow b=2$.<br>  Mặt khác đồ thị hàm số đi qua điểm $(-2;-2)$ nên ta được  $-2=\\dfrac{(-2)^2-2a+2}{x+1}\\Leftrightarrow a=2.$  Vậy $a=b$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Từ đồ thị hàm số suy ra hàm số đồng biến trên khoảng $(-\\infty;-2)$, nghịch biến trên khoảng $(-2,-1)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Từ đồ thị hàm số ta có đường thẳng $x=-1$ là đường tiệm cận đứng của đồ thị.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Trên đoạn $[-5;-3]$ hàm số đồng biến nên $\\max\\limits_{[-5;-3]} f(x)=f(-3)$."
  },
  {
    "id": "2D141DS3",
    "question": "Cho hàm số $y=\\dfrac{2 x+7}{x+2}$.",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số đã cho là $\\mathscr{D}=\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Đạo hàm của hàm số đã cho là $y'=-\\dfrac{3}{(x+2)^2}, \\forall x \\neq-2$",
        "answer": true
      },
      {
        "text": "Bảng biến thiên của hàm số đã cho là <br>  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_006.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": false
      },
      {
        "text": "Gọi $I$ là giao điểm của hai đường tiệm cận. Khoảng cách từ điểm $I$ đến đường thẳng $\\Delta\\colon 3 x-4 y-1=0$ bằng $3$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Tập xác định của hàm số đã cho là $\\mathscr{D} = \\mathbb{R}\\setminus \\{-2\\}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Đạo hàm $y'=-\\dfrac{3}{(x+2)^2}, \\forall x \\neq-2$.<br>- &lt;strong&gt;Sai.&lt;/strong&gt; Bảng biến thiên của hàm số đã cho  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- &lt;strong&gt;Đúng.&lt;/strong&gt; Gọi $I(-2;2)$ là giao điểm của hai đường tiệm cận.<br>Vì $d(I,\\Delta)=\\dfrac{\\left|3\\cdot x_I-4\\cdot y_I-1\\right|}{\\sqrt{3^2+(-4)^2}}=\\dfrac{\\left|3\\cdot (-2)-4\\cdot 2-1\\right|}{5}=3$."
  },
  {
    "id": "2D141DS4",
    "question": "Hàm số $y=\\dfrac{3x+1}{x-2}$ có các tiệm cận là",
    "subQuestions": [
      {
        "text": "$y=3$",
        "answer": true
      },
      {
        "text": "$y=2$",
        "answer": false
      },
      {
        "text": "$x=3$",
        "answer": false
      },
      {
        "text": "$x=2$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{3x+1}{x-2}=\\lim_{x \\to +\\infty} \\dfrac{3+\\frac{1}{x}}{1-\\frac{2}{x}}=\\dfrac{3}{1}=3$.<br>  Do đó đồ thị hàm số đã cho có tiện cận ngang $y=3$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.Ta có $\\displaystyle\\lim_{x \\to +\\infty}\\dfrac{3x+1}{x-2}=3= \\displaystyle\\lim_{x \\to -\\infty}\\dfrac{3x+1}{x-2}$ nên đồ thị hàm số chỉ có một tiệm cận ngang $y=3$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $\\displaystyle\\lim_{x \\to 3^{+}}\\dfrac{3x+1}{x-2}=10=\\lim_{x \\to 3^{-}}\\dfrac{3x+1}{x-2}$ nên $x=3$ không là tiệm cận đứng của đồ thị hàm số đã cho.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $\\displaystyle\\lim_{x \\to 2^{+}}\\dfrac{3x+1}{x-2}=+\\infty$ và $\\displaystyle\\lim_{x \\to 2^{-}}\\dfrac{3x+1}{x-2}=-\\infty$ nên $x=2$ là tiệm cận đứng của đồ thị hàm số đã cho."
  },
  {
    "id": "2D141DS5",
    "question": "Cho hàm số $y = f(x) = \\dfrac{x^2-x+2}{x-2}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Đồ thị $(C)$ có tiệm cận đứng là đường thẳng $x=2$",
        "answer": true
      },
      {
        "text": "Đường thẳng $y=x+1$ là tiệm cận xiên của đồ thị $(C)$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(-\\infty;0)$ và $(4;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực đại tại điểm $x=4$",
        "answer": false
      }
    ],
    "explain": "Tập xác định của hàm số là $\\mathscr{D} = \\mathbb{R} \\setminus \\{2\\}$.  <br>- Ta có $\\lim\\limits_{x \\to 2^+} y=\\lim\\limits_{x \\to 2^+} \\dfrac{x^2-x+2}{x-2}=+\\infty$.<br>  Nên đường thẳng $x=2$ là tiệm cận đứng của đồ thị $(C)$.<br>- Tiệm cận xiên.  Ta thực hiện phép chia đa thức:  $y = \\dfrac{x^2-x+2}{x-2} = x+1 + \\dfrac{4}{x-2}.$  Do $\\lim\\limits_{x \\to \\pm \\infty} \\left( y - (x+1) \\right) = \\lim\\limits_{x \\to\\pm \\infty} \\dfrac{4}{x-2} = 0$, nên đường thẳng $y=x+1$ là tiệm cận xiên của đồ thị $(C)$.<br>- Tính đơn điệu và cực trị. Ta có  $y' = \\dfrac{x^2-4x}{(x-2)^2}$  Cho $y'=0 \\Leftrightarrow x^2-4x = 0 \\Leftrightarrow x=0 \\text{ hoặc } x=4.$<br>  Bảng biến thiên   <br><img src=\"data/12/2D1/im2D1/2D14_tikz_013.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Hàm số đồng biến trên khoảng $(-\\infty;0)$ và $(4;+\\infty)$.<br>- Hàm số đạt cực đại tại $x=0$."
  },
  {
    "id": "2D141DS6",
    "question": "Cho hàm số $y=\\dfrac{-x^2+x+1}{x+1}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Đồ thị $(C)$ có tiệm cận xiên đi qua điểm $A(1;2)$",
        "answer": false
      },
      {
        "text": "Hàm số có tập xác định là $\\mathscr{D} = \\mathbb{R} \\setminus \\{1\\}$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có tiệm cận đứng là đường thẳng $x=-1$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(-3;6)$",
        "answer": false
      }
    ],
    "explain": "Tập xác định $\\mathscr{D}= \\mathbb{R} \\setminus \\{-1\\}$.<br>  Hàm số được viết lại $y=-x+2-\\dfrac{1}{x+1}$ suy ra $y'= -1+\\dfrac{1}{(x+1)^2}=0\\Rightarrow x=0 \\text{ hoặc } x=-2.$  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_014.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Đồ thị $(C)$ có tiệm cận xiên $y=-x+2$ và không đi qua điểm $A(1;2)$.<br>- Tập xác định $\\mathscr{D} = \\mathbb{R} \\setminus \\{-1\\}$.<br>- Đồ thị hàm số có tiệm cận đứng là đường thẳng $x=-1$.<br>- Từ bảng biến thiên suy ra hàm số không đồng biến trên khoảng $(-3;6)$."
  },
  {
    "id": "2D141DS7",
    "question": "Cho hàm số $f(x)=\\dfrac{2x-3}{x^2+4}$.",
    "subQuestions": [
      {
        "text": "Hàm số $f(x)$ có điểm cực đại là $x=4$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số $y=f(x)$ nhận trục hoành làm tiệm cận ngang",
        "answer": true
      },
      {
        "text": "$f(24)=\\dfrac{9}{116}$",
        "answer": true
      },
      {
        "text": "Tập giá trị của hàm số đã cho là đoạn $[a;b]$ thì $3a+4b=2$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Từ $f(x)=\\dfrac{2x-3}{x^2+4}\\Rightarrow f'(x)=\\dfrac{2(x^2+4)-2x(2x-3)}{(x^2+4)^2}=\\dfrac{-2x^2+6x+8}{(x^2+4)^2}$.<br>  $f'(x)=0\\Leftrightarrow \\dfrac{-2x^2+6x+8}{(x^2+4)^2}=0$. <br>  Suy ra $-2x^2+6x+8=0\\Leftrightarrow x=4 \\text{ hoặc } x=-1.$<br>  Ta có bảng biến thiên:   <br><img src=\"data/12/2D1/im2D1/2D14_tikz_015.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên ta thấy hàm số $f(x)$ có điểm cực đại là $x=4$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có: $\\lim\\limits_{x\\to +\\infty}f(x)=\\lim\\limits_{x\\to +\\infty}\\dfrac{2x-3}{x^2+4}=0;\\lim\\limits_{x\\to -\\infty}f(x)=\\lim\\limits_{x\\to -\\infty}\\dfrac{2x-3}{x^2+4}=0$.<br>  Do đó, đồ thị hàm số có đường tiệm cận ngang là $y=0$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  $f(24)=\\dfrac{2\\cdot 24-3}{24^2+4}=\\dfrac{45}{580}=\\dfrac{9}{116}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Từ bảng biến thiên, ta thấy tập giá trị của hàm số $f(x)$ là đoạn $\\left[-1;\\dfrac{1}{4}\\right]$.<br>  Do đó $a=-1;b=\\dfrac{1}{4}$.<br>  Suy ra $3a+4b=3\\cdot (-1)+4\\cdot \\dfrac{1}{4}=-2.$"
  },
  {
    "id": "2D141DS8",
    "question": "Cho hàm số $y = f(x)$ có bảng biến thiên như trên. Xét tính đúng sai của các mệnh đề sau:  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_016.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số có giá trị cực tiểu bằng $2$",
        "answer": true
      },
      {
        "text": "Đường thẳng $x = -2$ là tiệm cận đứng của đồ thị hàm số",
        "answer": true
      },
      {
        "text": "Hàm số có giá trị lớn nhất trên đoạn $[-5; -3]$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có 3 đường tiệm cận",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Hàm số có giá trị cực tiểu bằng $2$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Đường thẳng $x = -2$ là tiệm cận đứng của đồ thị hàm số.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. $\\max\\limits_{[-5;-3]} y = -6$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Đồ thị hàm số chỉ có một đường tiệm cận, đó là đường tiệm cận đứng."
  },
  {
    "id": "2D141DS9",
    "question": "Cho hàm số $y=\\dfrac{3 x^2-4 x+1}{4 x}$",
    "subQuestions": [
      {
        "text": "Tâm đối xứng của đồ thị hàm số là $I(0 ;-1)$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có một tiệm cận đứng",
        "answer": true
      },
      {
        "text": "Tiệm cận xiên của đồ thị hàm số tạo với hai trục tọa độ một tam giác có diện tích $S=\\dfrac{4}{3}$",
        "answer": false
      },
      {
        "text": "Tổng khoảng cách từ điểm $A(-2 ; 0)$ đến hai đường tiệm cận của đồ thị là $ 4 $",
        "answer": true
      }
    ],
    "explain": "Ta có $ y= \\dfrac{3 x^2-4 x+1}{4 x}=\\dfrac{3}{4}x-1+\\dfrac{1}{4x}$.<br>  Hàm số có tập xác định là $ \\mathscr{D}=\\mathbb{R}\\setminus\\{0\\} $.<br>  Ta có $ \\lim\\limits_{x \\to \\pm\\infty} \\left[f(x)-\\left(\\dfrac{3}{4}x-1\\right)\\right]$= $\\lim\\limits_{x \\to \\pm \\infty}\\dfrac{1}{4x}=0$ nên đồ thị hàm số có tiệm cận xiên là $ y=\\dfrac{3}{4}x-1 $.<br>  Và $ \\lim \\limits_{x \\to 0^+}f(x)=+\\infty$ nên đồ thị hàm số có tiệm cận đứng là $ x=0 $.  <br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có tâm đối xứng là giao điểm của tiệm cận đứng và tiệm cận xiên của đồ thị hàm số nên tọa độ của $ I $ thỏa  $ y=\\dfrac{3}{4}x-1 \\text{ và } x=0 \\Leftrightarrow x=0 \\text{ và } y=-1. $  Vậy tâm đối xứng của đồ thị hàm số là $ A(0;-1) $.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Đồ thị hàm số có một tiệm cận đứng là $ x=0 $.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Giao điểm của tiệm cận xiên với các trục tọa độ $ Ox$, $ Oy $ lần lượt là $ B\\left(\\dfrac{4}{3};0\\right) $, $ A(0;-1) $.<br>  Do đó $ S=\\dfrac{1}{2}OA\\cdot OB = \\dfrac{1}{2}\\cdot\\dfrac{4}{3}\\cdot 1=\\dfrac{2}{3} $.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có khoảng cách từ $ A(-2;0) $ đến tiệm cận đứng $ x=0 $ của đồ thị hàm số là $ \\dfrac{|-2|}{\\sqrt{1^2}}=2 $.<br>  Khoảng cách từ $ A(-2;0) $ đến tiệm cận xiên $ y=\\dfrac{3}{4}x-1 \\Leftrightarrow 3x-4y-4=0 $ của đồ thị hàm số là $ \\dfrac{|3\\cdot(-2)-4\\cdot 0 -4|}{\\sqrt{3^2+(-4)^2}}= 2$.<br>  Vậy tổng khoảng cách từ $ A(-2;0) $ đến hai đường tiệm cận của đồ thị hàm số là $ 2+2=4 $."
  },
  {
    "id": "2D141DS10",
    "question": "Cho hàm số $(C_1)\\colon y = f(x) = \\dfrac{3x-1}{x-2}$; $(C_2)\\colon y = g(x) = x-1 - \\dfrac{2}{2x-1}$.",
    "subQuestions": [
      {
        "text": "Hàm số $y = f(x)$ luôn nghịch biến trên $\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "$\\max\\limits_{[1;2]} g(x) = \\dfrac{1}{3}$, $\\min\\limits_{[1;2]} g(x) = -2$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số $y = f(x)$ có tiệm cận đứng và tiệm cận ngang tạo với $2$ trục tọa độ một đa giác có chu vi bằng $6$",
        "answer": false
      },
      {
        "text": "Hai đường tiệm cận của đồ thị hàm số $y = f(x)$ cùng với đường tiệm cận xiên của đồ thị hàm số $y = g(x)$ tạo thành tam giác có diện tích bằng $2$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Tập xác định của hàm số $y=f(x)$ là $\\mathscr{D}=\\mathbb{R}\\setminus\\{2\\}$ nên hàm số $y=f(x)$ không nghịch biến trên $\\mathbb{R}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $g'(x) = 1 + \\dfrac{4}{(2x-1)^2} &gt; 0$, $\\forall x \\ne \\dfrac{1}{2}$.  Mặt khác $g(1) = -2$, $g(2) = \\dfrac{1}{3}$.<br>  Do đó $\\max\\limits_{[1;2]} g(x) = \\dfrac{1}{3}$, $\\min\\limits_{[1;2]} g(x) = -2$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Vì $\\lim\\limits_{x \\to \\pm\\infty} f(x) = \\lim\\limits_{x \\to \\pm\\infty} \\dfrac{3x-1}{x-2} = \\lim\\limits_{x \\to \\pm\\infty} \\dfrac{3-\\dfrac{1}{x}}{1-\\dfrac{2}{x}} = 3$.<br>  Nên đồ thị hàm số $y=f(x)$ có một tiệm cận ngang là $y=3$.<br>  Vì $\\lim\\limits_{x \\to 2^+} f(x) = \\lim\\limits_{x \\to 2^+} \\dfrac{3x-1}{x-2} = +\\infty$.<br>  Nên đồ thị hàm số $y=f(x)$ có một tiệm cận đứng là $x=2$.<br>  Do đó hàm số $y = f(x)$ có tiệm cận đứng và tiệm cận ngang tạo với $2$ trục tọa độ một hình chữ nhật có chiều dài bằng $3$, chiều rộng bằng $2$ nên có chu vi bằng $2\\cdot(3+2)=12$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $\\lim\\limits_{x \\to +\\infty} \\left[g(x) - (x-1)\\right] =\\lim\\limits_{x \\to +\\infty} \\left[- \\dfrac{2}{2x-1}\\right] =0$.<br>  Suy ra tiệm cận xiên của đồ thị hàm số $y=g(x)$ là đường thẳng $d\\colon y=x-1$.<br>  Giao điểm hai đường tiệm cận của đồ thị hàm số $y=f(x)$ là $A(2;3)$.<br>  Giao điểm đường tiệm cận đứng của đồ thị hàm số $y=f(x)$ và đường tiệm cận xiên của đồ thị hàm số $y=g(x)$ là $B(2;1)$.<br>  Giao điểm đường tiệm cận ngang của đồ thị hàm số $y=f(x)$ và đường tiệm cận xiên của đồ thị hàm số $y=g(x)$ là $C(4;3)$.<br>  Mặt khác hai đường tiệm cận của đồ thị hàm số $y=f(x)$ vuông góc với nhau nên tam giác $ABC$ vuông tại $A$.<br>  Ta có $AB=|1-3|=2$, $AC=|4-2|=2$.<br>  Suy ra $S_{\\triangle ABC} = \\dfrac{1}{2}\\cdot AB\\cdot AC = 2$."
  },
  {
    "id": "2D141DS11",
    "question": "Cho hàm số $y=\\dfrac{x^2+4}{x}.$",
    "subQuestions": [
      {
        "text": "Đồ thị có tiệm cận đứng là đường thẳng $x=0$",
        "answer": true
      },
      {
        "text": "Đạo hàm của hàm số đã cho là $y'=\\dfrac{x^2-4}{x^2}$",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực đại tại $x=2$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có tiệm cận xiên là đường thẳng $y=x$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.   $\\lim\\limits_{x\\to0^+}\\dfrac{x^2+4}{x}=\\lim\\limits_{x\\to0^+}\\left(x+\\dfrac{4}{x}\\right)=+\\infty. \\text{ và } \\lim\\limits_{x\\to0^-}\\dfrac{x^2+4}{x}=\\lim\\limits_{x\\to0^-}\\left(x+\\dfrac{4}{x}\\right)=-\\infty.\\Rightarrow$ đường thẳng $x=0$ là tiệm cận đứng.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $y=\\dfrac{x^2+4}{x}=x+\\dfrac{4}{x}$  $\\Rightarrow y'=1-\\dfrac{4}{x^2}=\\dfrac{x^2-4}{x^2}.$<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $y'=0 \\Leftrightarrow x^2-4=0\\Leftrightarrow x=2 \\text{ hoặc } x=-2.$<br>  Bảng biến thiên:  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_021.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, ta thấy hàm số đạt cực đại tại $x=-2$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có   $\\lim\\limits_{x\\to\\pm\\infty }\\left(y-x\\right)=\\lim\\limits_{x\\to\\pm\\infty }\\left(\\dfrac{x^2+4}{x} - x\\right)=\\lim\\limits_{x\\to\\pm\\infty}\\dfrac{4}{x}=0.$<br>  $\\Rightarrow$ đường thẳng $y=x$ là tiệm cận xiên."
  },
  {
    "id": "2D141DS12",
    "question": "Cho hàm số $y=\\dfrac{x^2+x+2}{x-1}$. Các mệnh đề dưới đây đúng hay sai ?",
    "subQuestions": [
      {
        "text": "Hàm số có đạo hàm $y'=\\dfrac{x^2-2 x-3}{(x-1)^2}$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có đường tiệm cận đứng là $x=1$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có điểm cực tiểu là $A(-1;-1)$",
        "answer": false
      },
      {
        "text": "Đường tiệm cận xiên của đồ thị hàm số là $y=x+2$",
        "answer": true
      }
    ],
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus \\{1\\}$.  <br>- Ta có $y'=\\dfrac{x^2-2x-3}{(x-1)^2}$.<br>- Vì $\\lim\\limits_{x \\to 1^+}y=+\\infty$ nên đồ thị hàm số có tiệm cận đứng là $x=1$.<br>- Cho $y'=0$ ta được $x=-1 \\text{ hoặc } x=3$.<br>  Bảng biến thiên của hàm số  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_023.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ BBT, suy ra đồ thị hàm số có điểm cực đại $A(-1;-1)$.<br>- Ta có $y=x+2+\\dfrac{4}{x-1}$ nên đồ thị hàm số có tiệm cận xiên $y=x+2$."
  },
  {
    "id": "2D141DS13",
    "question": "Cho hàm số $y=\\dfrac{x^2+x-1}{x-1}$.",
    "subQuestions": [
      {
        "text": "Đường tiệm cận đứng của đồ thị hàm số có phương trình $x=1$",
        "answer": true
      },
      {
        "text": "Giá trị cực tiểu của hàm số bằng $1$",
        "answer": false
      },
      {
        "text": "Khoảng cách giữa hai điểm cực trị của đồ thị hàm số bằng $\\sqrt{26}$",
        "answer": false
      },
      {
        "text": "Gọi $M$ là điểm thuộc đồ thị hàm số sao cho $M$ cách đều hai đường tiệm cận của đồ thị hàm số và $I$ là tâm đối xứng của đồ thị hàm số. Ta có $IM=\\sqrt{2+2\\sqrt{2}}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\lim\\limits_{x\\to 1^+} y=+\\infty$ và $\\lim\\limits_{x\\to 1^-} y=-\\infty$.<br>  Suy ra đồ thị hàm số có đường tiệm cận đứng là $x=1$.<br>- Xét $y'=\\dfrac{(2x+1)(x-1)-(x^2+x-1)}{(x-1)^2}=\\dfrac{x^2-2x}{(x-1)^2}$.<br>  Cho $y'=0\\Leftrightarrow x=0 \\text{ hoặc } x=2.$<br>  Bảng biến thiên của hàm số  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_024.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, giá trị cực tiểu của hàm số bằng $5$.<br>- Hai điểm cực trị của đồ thị hàm số lần lượt là $(0;1)$ và $(2;5)$.<br>  Khoảng cách giữa hai điểm cực trị của đồ thị hàm số bằng  $\\sqrt{(2-0)^2+(5-1)^2}=2\\sqrt{5}.$<br>- Ta có $y=x+2+\\dfrac{1}{x-1}$.<br>  Mà $\\lim\\limits_{x\\to +\\infty} \\left[y-(x+2)\\right]=0$.<br>  Nên đường thẳng $y=x+2$ là đường tiệm cận xiên của đồ thị hàm số.<br>  Điểm $I$ là tâm đối xứng của đồ thị hàm số nên $I$ là giao điểm của đường tiệm cận đứng và tiệm cận xiên.<br>  Khi đó, ta được $I(1;3)$.<br>  Gọi $M\\left(x;x+2+\\dfrac{1}{x-1}\\right)$ thuộc đồ thị hàm số.<br>  Khoảng cách từ điểm $M$ đến các đường tiệm cận bằng nhau nên  $|x-1|=\\left|\\dfrac{1}{x-1}\\right|\\cdot \\dfrac{1}{\\sqrt{2}}$<br>$\\Rightarrow (x-1)^2=\\dfrac{1}{\\sqrt{2}}$  Ta có  $IM = \\sqrt{(x-1)^2+\\left(x-1+\\dfrac{1}{x-1}\\right)^2}=\\sqrt{(x-1)^2+(x-1)^2+\\dfrac{1}{(x-1)^2}+2}$<br>$= \\sqrt{\\dfrac{1}{\\sqrt{2}}+\\dfrac{1}{\\sqrt{2}}+\\sqrt{2}+2}=\\sqrt{2+2\\sqrt{2}}.$"
  },
  {
    "id": "2D141DS14",
    "question": "Cho hàm số $y=\\dfrac{x^2-3x+6}{x-1}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số có đạo hàm $y'=\\dfrac{x^2-2x-3}{\\left(x-1\\right)^2}$",
        "answer": true
      },
      {
        "text": "Hàm số có tập xác định $\\mathscr{D}=\\mathbb{R}\\backslash\\{-1\\}$",
        "answer": false
      },
      {
        "text": "Các khoảng nghịch biến của hàm số chứa $5$ số nguyên",
        "answer": false
      },
      {
        "text": "Gọi $I$ tâm đối xứng của đồ thị $(C)$. Tiếp tuyến của đồ thị tại điểm có hoành độ $x=2$ cắt hai đường tiệm cận tại $A$, $B$. Diện tích tam giác $IAB$ bằng $12$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có  $y' = \\dfrac{\\left(x^2-3x+6\\right)'(x-1)-\\left(x^2-3x+6\\right)(x-1)'}{(x-1)^2}$<br>$= \\dfrac{(2x-3)(x-1)-(x^2-3x+6) \\cdot 1}{\\left(x-1\\right)^2}$<br>$= \\dfrac{x^2-2x-3}{\\left(x-1\\right)^2}.$<br>- Tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}\\backslash\\{1\\}$.<br>- Ta có $y'=0 \\Leftrightarrow x^2-2x-3 = 0 \\Leftrightarrow x=-1 \\text{ hoặc } x=3.$ <br>  Bảng xét dấu  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_025.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Hàm số nghịch biến trên khoảng $(-1;1)$ và $(1;3)$ chứa các số nguyên là $0$; $2$.<br>- Ta có  \\[\\lim\\limits_{x \\rightarrow 1^+} y= \\lim\\limits_{x \\rightarrow 1^+} \\dfrac{x^2-3x+6}{x-1} = +\\infty.\\]  \\[\\lim\\limits_{x \\rightarrow 1^-} y= \\lim\\limits_{x \\rightarrow 1^-} \\dfrac{x^2-3x+6}{x-1} = -\\infty.\\]  $\\Rightarrow x=1$ là đường tiệm cận đứng của đồ thị hàm số.  Ta có   \\[y=\\dfrac{x^2-3x+6}{x-1}=\\dfrac{(x-1)^2 -(x-1) +4}{x-1}=x-2+\\dfrac{4}{x-1}.\\]  $\\Rightarrow y=x-2$ là đường tiệm cận xiên của đồ thị hàm số. <br>  Tâm đối xứng $I$ của đồ thị $(C)$ là giao điểm của hai đường tiệm cận. <br>  $\\Rightarrow I(1;-1)$. <br>  Ta có $y'(2) = -3$; $y(2) = 4$. <br>  Phương trình tiếp tuyến của đồ thị tại điểm có hoành độ $x=2$ là  $y-4=-3 \\cdot (x-2)$<br>$\\Leftrightarrow y=-3x+10.$  <br>- Tiếp tuyến giao với đường tiệm cận đứng $x=1$ tại điểm $A(1;7)$.<br>- Tiếp tuyến giao với đường tiệm cận xiên tại điểm $B(3;1)$.  Ta có $IA=8$, $IB=2\\sqrt{2}$, $AB=2\\sqrt{10}$ <br>  Nửa chu vi tam giác $IAB$ là $p=4+\\sqrt{2}+\\sqrt{10}$. <br>  Diện tích tam giác $IAB$ là   $S = \\sqrt{(4+\\sqrt{2}+\\sqrt{10})(4+\\sqrt{2}+\\sqrt{10}-8)(4+\\sqrt{2}+\\sqrt{10}-2\\sqrt{2})(4+\\sqrt{2}+\\sqrt{10}-2\\sqrt{10})}$<br>$= 8.$"
  },
  {
    "id": "2D141DS15",
    "question": "Cho hàm số $y=f(x)$ xác định trên$ \\mathbb{R}$ và có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_026.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">   Xét tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Hàm số đã cho đồng biến trên khoảng $(0;+\\infty)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số $f(x)$ không có tiệm cận",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số đã cho trên $\\mathbb{R}$ bằng $3$",
        "answer": false
      },
      {
        "text": "Hàm số đã cho không có giá trị nhỏ nhất trên $\\mathbb{R}$",
        "answer": true
      }
    ],
    "explain": "Dựa vào bảng biến thiên ta có  <br>- &lt;strong&gt;Sai&lt;/strong&gt;. Hàm số đã cho đồng biến trên khoảng $(0;+\\infty)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Đồ thị hàm số $f(x)$ không có tiệm cận.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Giá trị lớn nhất của hàm số đã cho trên $\\mathbb{R}$ bằng $3$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Hàm số đã cho không có giá trị nhỏ nhất trên $\\mathbb{R}$."
  },
  {
    "id": "2D141DS16",
    "question": "Cho hàm số $y=f(x)=\\dfrac{x^2}{x-1}$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số đã cho là $f'(x)=\\dfrac{x^2+2x}{(x-1)^2}$",
        "answer": false
      },
      {
        "text": "Hàm số đã cho nghịch biến trên khoảng $(0;2)$",
        "answer": false
      },
      {
        "text": "Giao điểm hai đường tiệm cận của đồ thị hàm số đã cho có tọa độ là $(1;2)$",
        "answer": true
      },
      {
        "text": "Khoảng cách của hai điểm cực trị của đồ thị hàm số đã cho bằng $\\sqrt{5}$",
        "answer": false
      }
    ],
    "explain": "<br>- Sai.<br>  Ta có $y'=f'(x)=\\dfrac{2x\\cdot (x-1)-x^2\\cdot 1}{(x-1)^2}=\\dfrac{x^2-2x}{(x-1)^2}$<br>- Sai.<br>  Ta có $f'(x)=0\\Leftrightarrow x=0$ hoặc $x=2$.<br>  Ta có bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_031.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên suy ra hàm số nghịch biến trên các khoảng $(0;1)$ và $(1;2)$.<br>- Đúng.<br>  Ta có $f(x)=\\dfrac{x^2}{x-1}=x+1+\\dfrac{1}{x-1}$.<br>  $\\lim\\limits_{x\\to 1^-}f(x)=-\\infty$; $\\lim\\limits_{x\\to 1^+}f(x)=+\\infty$.<br>  $\\lim\\limits_{x\\to \\pm \\infty}\\left[f(x)-(x+1)\\right]=\\lim\\limits_{x\\to \\pm \\infty}\\dfrac{1}{x-1}=0$.<br>  Suy ra, đồ thị hàm số $f(x)$ có tiệm cận đứng là đường thẳng $x=1$ và tiệm cận xiên là đường thẳng $y=x+1$.<br>  Giao điểm của hai đường tiệm cận là điểm $I(1;2)$.<br>- Sai.<br>  Tọa độ hai điểm cực trị của đồ thị hàm số là $O(0;0)$ và $A(2;4)$.<br>  Ta có $OA=\\sqrt{2^2+4^2}=2\\sqrt{5}$."
  },
  {
    "id": "2D141DS17",
    "question": "Cho hàm số $y=\\dfrac{2x^2-2x+2}{-x+1}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số đạt cực tiểu tại $x=2$",
        "answer": false
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(-\\infty;0)\\cup(2;+\\infty)$",
        "answer": false
      },
      {
        "text": "Đồ thị $(C)$ có tiệm cận xiên là đường thẳng $2x+y=0$",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên đoạn $\\left[\\dfrac{3}{2};\\dfrac{5}{2}\\right]$ bằng $-\\dfrac{19}{3}$",
        "answer": false
      }
    ],
    "explain": "Tập xác định là $\\mathscr{D}=\\mathbb{R}\\setminus\\{1\\}$.<br>  Ta có $y'=\\dfrac{-2x^2+4x}{(-x+1)^2}$, $y'=0\\Leftrightarrow x=0 \\text{ hoặc } x=2.$<br>  Bảng biến thiên của hàm số như hình vẽ  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_032.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Dựa vào bảng biến thiên, hàm số đạt cực tiểu tại $x=0$<br>- Dựa vào bảng biến thiên, hàm số nghịch biến trên khoảng $(-\\infty;0)$ và $(2;+\\infty)$.<br>- Ta có $y=\\dfrac{2x^2-2x+2}{-x+1}=-2x+\\dfrac{2}{-x+1}$.<br>  Suy ra $\\lim\\limits_{x\\to\\pm\\infty}\\left(y+2x\\right)=\\lim\\limits_{x\\to\\pm\\infty}\\dfrac{2}{-x+1}=0$ nên $2x+y=0$ là tiệm cận xiên của đồ thị $(C)$.<br>- Dựa vào bảng biến thiên, giá trị nhỏ nhất của hàm số trên đoạn $\\left[\\dfrac{3}{2};\\dfrac{5}{2}\\right]$ là $y\\left(\\dfrac{3}{2}\\right)=-7$."
  },
  {
    "id": "2D141DS18",
    "question": "Cho hàm số $y=\\dfrac{x^2+8}{x+1}$.",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số có một tiệm cận đứng là $x=-1$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có một tiệm cận xiên là $y=x-1$",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực tiểu tại $x=2$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(-4;-1)$",
        "answer": false
      }
    ],
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus \\{-1\\}$.<br>  Ta có $y=x-1+\\dfrac{9}{x+1}$.<br>  $y'=\\dfrac{x^2+2x-8}{(x+1)^2}$.<br>  $y'=0\\Leftrightarrow x=2 \\text{ hoặc } x=-4.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_034.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Do $\\lim\\limits_{x\\to {-1}^+}y=+\\infty$ nên đồ thị hàm số có một tiệm cận đứng là $x=-1$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Do $\\lim\\limits_{x\\to +\\infty}(y-(x-1))=\\lim\\limits_{x\\to +\\infty}\\dfrac{9}{x+1}=0$ nên đồ thị hàm số có một tiệm cận xiên là $y=x-1$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Hàm số đạt cực tiểu tại $x=2$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Hàm số nghịch biến trên khoảng $(-4;-1)$."
  },
  {
    "id": "2D141DS19",
    "question": "Cho hàm số $y = \\dfrac{x^2-x+1}{-x+1}$.<br><img src=\"data/12/2D1/im2D1/2D14_tikz_039.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tiệm cận đứng của đồ thị hàm số là $x = 1$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(0;2)$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên khoảng $(1; +\\infty)$ bằng $-3$",
        "answer": true
      },
      {
        "text": "Hàm số có đồ thị như hình vẽ bên",
        "answer": true
      }
    ],
    "explain": "<br>- Tiệm cận đứng của đồ thị hàm số là $-x + 1 = 0 \\Leftrightarrow x = 1$.<br>  Vậy tiệm cận đứng của đồ thị hàm số là $x = 1$.<br>- Tính đạo hàm của hàm số:<br>  $y' = \\dfrac{-x(x-2)}{(-x+1)^2}=0\\Leftrightarrow-x(x-2)=0 \\Leftrightarrow x=0 \\text{ hoặc } x-2=0\\Leftrightarrow x=0 \\text{ hoặc } x=2.$<br>  Bảng biến thiên của hàm số  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_040.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên ta thấy hàm số đồng biến trên khoảng $(0; 1)$ và $(1; 2)$.<br>- Từ bảng biến thiên ta thấy giá trị lớn nhất của hàm số trên khoảng $(1; +\\infty)$ là $-3$.<br>- Đồ thị hàm số  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_041.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào đồ thị, ta thấy:  <br>- Tiệm cận đứng là $x = 1$.<br>- Tiệm cận xiên là $y = -x$.<br>- Đồ thị cắt trục $Oy$ tại điểm $(0; 1)$.<br>- Đồ thị có một điểm cực trị tại $x = 2$, $y = -3$.  Vậy hàm số $y = \\dfrac{x^2-x+1}{-x+1}$ có đồ thị phù hợp với đồ thị hình vẽ trên."
  },
  {
    "id": "2D141DS20",
    "question": "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và có bảng biến thiên như sau:  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_042.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đã cho nghịch biến trên $(-1;3)$",
        "answer": false
      },
      {
        "text": "Hàm số đã cho có điểm cực tiểu là $\\dfrac{1}{3}$ và cực tiểu là $1$",
        "answer": false
      },
      {
        "text": "Hàm số có giá trị lớn nhất bằng $3$ và giá trị nhỏ nhất bằng $\\dfrac{1}{3}$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có một đường tiệm cận",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số đã cho nghịch biến trên $(-1;1)$.<br>- Hàm số đã cho có điểm cực tiểu là $x=1$ và cực tiểu là $y_\\text{CT}=\\dfrac{1}{3}$.<br>- Hàm số có giá trị lớn nhất bằng $3$ tại $x=-1$ và giá trị nhỏ nhất bằng $\\dfrac{1}{3}$ tại $x=1$.<br>- Tập xác định $\\mathscr{D}=\\mathbb{R}$.<br>  Ta có $\\lim\\limits_{x \\to \\pm \\infty} f(x)=1$.<br>  Do đó hàm số đã cho có đúng một đường tiệm cận ngang $y=1$."
  },
  {
    "id": "2D141DS21",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như hình vẽ.  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_045.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tiệm cận đứng của đồ thị hàm số là $x=-1$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có hai tiệm cận ngang",
        "answer": true
      },
      {
        "text": "Hàm số có giá trị nhỏ nhất là $0$",
        "answer": false
      },
      {
        "text": "Tiệm cận ngang của đồ thị hàm số $y=\\dfrac{4}{f(x)-3}$ là $y=-1$ và $y=-2$",
        "answer": true
      }
    ],
    "explain": "<br>- Do $\\lim\\limits_{x\\to -1^+} f(x)=+\\infty$ nên tiệm cận đứng của đồ thị hàm số là $x=-1$.<br>- Do $\\lim\\limits_{x\\to +\\infty} f(x)=1$ và $\\lim\\limits_{x\\to -\\infty} f(x)=-1$ nên tiệm cận ngang của đồ thị hàm số là $y=1$ và $y=-1$.<br>  Vậy đồ thị hàm số có hai tiệm cận ngang.<br>- Hàm số không có giá trị nhỏ nhất.<br>- Ta có $\\lim\\limits_{x\\to -\\infty} \\dfrac{4}{f(x)-3}=\\dfrac{4}{-1-3}=-1$ và $\\lim\\limits_{x\\to +\\infty} \\dfrac{4}{f(x)-3}=\\dfrac{4}{1-3}=-2$ nên tiệm cận ngang của đồ thị hàm số $y=\\dfrac{4}{f(x)-3}$ là $y=-1$ và $y=-2$."
  },
  {
    "id": "2D141DS22",
    "question": "Cho hàm số $y = \\dfrac{2x-3}{x+1}$ có đồ thị là $(C)$.",
    "subQuestions": [
      {
        "text": "Đồ thị $(C)$ của hàm số có tiệm cận ngang là đường thẳng $y = 2$",
        "answer": true
      },
      {
        "text": "Đồ thị $(C)$ của hàm số có tiệm cận đứng là đường thẳng $x = -1$",
        "answer": true
      },
      {
        "text": "Đồ thị $(C)$ qua điểm $M(0;-3)$",
        "answer": true
      },
      {
        "text": "Tâm đối xứng của $(C)$ nằm trên đường thẳng $\\Delta\\colon 3x - y + 1 = 0$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Tiệm cận ngang là đường thẳng $y = 2$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Tiệm cận đứng là đường thẳng $x = -1$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Vì $-3=\\dfrac{2\\cdot 0-3}{0+1}$ nên điểm $M(0;-3)$ thuộc $(C)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Gọi $I$ là tâm đối xứng của $(C)$, khi đó $I(-1;2)$ và $I \\not\\in \\Delta$."
  },
  {
    "id": "2D141DS23",
    "question": "Cho hàm số $y = g(x)$ có bảng biến thiên như hình vẽ sau  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_046.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số $y = g(x)$ nghịch biến trên $(0;+\\infty)$",
        "answer": true
      },
      {
        "text": "Hàm số $y=g(x)$ đạt cực đại tại $x=0$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số $y=g(x)$ luôn cắt trục hoành tại ít nhất một điểm",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số $y = \\dfrac{1}{g(x) -1}$ có $a$ đường tiệm cận đứng và $b$ đường tiệm cận ngang. Khi đó $a^2 + b^2 =10$",
        "answer": false
      }
    ],
    "explain": "d) $a$ là tiệm cận đứng <br>  $g(x)-1=0 \\Rightarrow -2 \\le a &lt; 0$<br>  $\\lim y = \\dfrac{1}{\\lim y(x) -1}= \\dfrac{1}{-\\infty -1}=0=b$ <br>  $\\Rightarrow a^2 + b^2 &lt; 10$"
  },
  {
    "id": "2D141DS24",
    "question": "Cho hàm số $y=h(x)=\\dfrac{x^2-2x-1}{x+1}$.",
    "subQuestions": [
      {
        "text": "Khoảng cách giữa hai điểm cực trị của đồ thị hàm số $y=h(x)$ bằng $10$",
        "answer": false
      },
      {
        "text": "$\\lim_{x\\to +\\infty}h(x)=+\\infty$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số $y=h(x)$ và đường thẳng $(d): y=-2x$ có hai điểm chung phân biệt",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số $y=h(x)$ có tiệm cận xiên là đường thẳng $(\\Delta): y=x-3$",
        "answer": true
      }
    ],
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\backslash\\{-1\\}$.<br>  Ta có $h(x)=\\dfrac{x^2-2x-1}{x+1}=x-3+\\dfrac{2}{x+1}$.<br>  $h'(x)=1-\\dfrac{2}{(x+1)^2}=0 \\Rightarrow (x+1)^2=2 \\Rightarrow x=-1\\pm \\sqrt{2}$.  <br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Hai điểm cực trị của đồ thị hàm số là $A(-1-\\sqrt{2};-2\\sqrt{2}-4) $ và $B(-1+\\sqrt{2};2\\sqrt{2}-4)$.<br>  Khoảng cách giữa hai điểm cực trị là $AB=\\sqrt{\\left(2 \\sqrt{2}\\right)^2+\\left( 4 \\sqrt{2}\\right)^2}=\\sqrt{8+32}=\\sqrt{40}=2 \\sqrt{10}.$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.  $ \\lim\\limits_{x\\to+\\infty}h(x)=\\lim\\limits_{x\\to+\\infty}\\left(x\\cdot\\dfrac{1-\\dfrac{2}{x}-\\dfrac{1}{x^2}}{1+\\dfrac{1}{x}} \\right) =+\\infty$ <br>vì $\\lim_{x\\to+\\infty}x=+\\infty \\text{ và } \\lim_{x\\to+\\infty}\\dfrac{1-\\dfrac{2}{x}-\\dfrac{1}{x^2}}{1+\\dfrac{1}{x}}=1&gt;0.$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.  Xét phương trình hoành độ giao điểm $x-3+\\dfrac{2}{x+1}=-2x \\Leftrightarrow  x=\\dfrac{\\sqrt{3}}{3} \\text{ hoặc } x=-\\dfrac{\\sqrt{3}}{3}.$<br>  Phương trình có hai nghiệm phân biệt nên đồ thị hàm số $y=h(x)$ và đường thẳng $(d): y=-2x$ có hai điểm chung phân biệt.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.  Từ khai triển trên, tiệm cận xiên là $y=x-3$."
  },
  {
    "id": "2D141DS25",
    "question": "Cho hàm số $y=\\dfrac{x^2+2x-2}{x-1}$ có đồ thị $(C)$. Xét tính đúng sai của các mệnh đề sau.",
    "subQuestions": [
      {
        "text": "Đồ thị $(C)$ cắt trục tung tại điểm có tung độ bằng $2$",
        "answer": true
      },
      {
        "text": "Đồ thị $(C)$ nhận đường thẳng $x=1$ làm tiệm cận đứng",
        "answer": true
      },
      {
        "text": "Đồ thị $(C)$ có tiệm cận xiên là đường thẳng $y=x+2$",
        "answer": false
      },
      {
        "text": "Đồ thị $(C)$ nhận trung điểm đoạn nối hai điểm cực trị làm tâm đối xứng",
        "answer": true
      }
    ],
    "explain": "<br>- Đúng.<br>  Do đồ thị $(C)$ cắt trục tung tại điểm có hoành độ bằng $0$ nên tung độ $y=\\dfrac{0^2+2\\cdot 0-2}{0-1}=2$.<br>- Đúng.<br>  Do $\\lim\\limits_{x\\to 1^+}\\dfrac{x^2+2x-2}{x-1}=+\\infty$ và $\\lim\\limits_{x\\to 1^-}\\dfrac{x^2+2x-2}{x-1}=-\\infty$ nên đồ thị $(C)$ nhận đường thẳng $x=1$ làm tiệm cận đứng.<br>- Sai.<br>  Vì $a=\\lim\\limits_{x\\to +\\infty}\\dfrac{x^2+2x-2}{x^2-x}=1$ và $b=\\lim\\limits_{x\\to +\\infty}\\left(\\dfrac{x^2+2x-2}{x-1}-x\\right)=\\lim\\limits_{x\\to +\\infty}\\dfrac{3x-2}{x-1}=3$.<br>  Suy ra đường thẳng $y=x+3$ là tiệm cận xiên của đồ thị $(C)$.<br>- Đúng.<br>  Ta có $y'=\\dfrac{x^2-2x}{(x-1)^2}$; $y'=0\\Leftrightarrow x=0 \\text{ hoặc } x=2.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D14/dlts_12_DLTS1_012.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Đồ thị có hai điểm cực trị là $A(2;6)$, $B(0;2)$.<br>  Trung điểm của $AB$ là $I(1;4)$.<br>  Vì đồ thị hàm số $y=\\dfrac{x^2+2x-2}{x-1}$ có tiệm cận đứng là $x=1$ và tiệm cận xiên là $y=x+3$ nên giao điểm của hai đường tiệm cận trên là $I(1;4)$.<br>  Mặt khác giao điểm của hai đường tiệm cận là tâm đối xứng của đồ thị hàm số.<br>  Vậy đồ thị hàm số $y=\\dfrac{x^2+2x-2}{x-1}$ nhận trung điểm đoạn nối hai điểm cực trị làm tâm đối xứng."
  },
  {
    "id": "2D141DS26",
    "question": "Cho hàm số $y=\\dfrac{x^2-x+1}{x-1}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số đạt cực đại tại $x=0$ và đạt cực tiểu tại $x=2$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(0;2)$",
        "answer": false
      },
      {
        "text": "Đồ thị $(C)$ nhận đường thẳng $x=1$ làm tiệm cận đứng",
        "answer": true
      },
      {
        "text": "Đường tiệm cận xiên của đồ thị song song với đường thẳng $x+y+6=0$",
        "answer": false
      }
    ],
    "explain": "Ta có   $y=x+\\dfrac{1}{x-1}$; $y'=1-\\dfrac{1}{(x-1)^2}$.<br>  $y'=0 \\Rightarrow 1-\\dfrac{1}{(x-1)^2}=0 \\Leftrightarrow\\left[\\begin{aligned}  &x=0, y=-1 \\\\  &x=2, y=3.  \\end{aligned}\\right.$<br>  Do $\\lim\\limits_{x\\to-1^{-}} \\left(\\dfrac{x^2-x+1}{x-1}\\right)=-\\infty$ ; $\\lim\\limits_{x\\to-1^{+}}\\left(\\dfrac{x^2-x+1}{x-1}\\right)=+\\infty$.<br>   Suy ra đường thẳng $x=1$ là tiệm cận đứng của đồ thị hàm số.<br>  Và $\\lim\\limits_{x\\to-\\infty}(y-x)=\\lim\\limits_{x\\to-\\infty}\\left(\\dfrac{1}{x-1}\\right)=0$; $\\lim\\limits_{x\\to+\\infty}(y-x)=\\lim\\limits_{x\\to+\\infty}\\left(\\dfrac{1}{x-1}\\right)=0$.<br>Suy ra đường thẳng $y=x$ là tiệm cận xiên của đồ thị hàm số. Từ đó đường tiệm cận xiên không song song với đường thằng $x+y+6=0 \\Leftrightarrow y=-x-6$.<br>  Bảng biến thiên:  <br><img src=\"data/12/2D1/im2D14/dlts_12_DLTS13_011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Hàm số đạt cực đại tại $x=0$ và đạt cực tiểu tại $x=2$.<br>  Hàm số đồng biến trên khoảng $(-\\infty;0)$ và $(2;+\\infty)$.<br>  Hàm số nghịch biến trên mỗi khoảng $(0;1)$ và $(1;2)$."
  },
  {
    "id": "2D141DS27",
    "question": "Cho hàm số $y=\\dfrac{a{x^2}+bx+c}{mx+n}$ có đồ thị như hình vẽ.<br><img src=\"data/12/2D1/im2D14/dlts_12_DLTS2_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đã cho nghịch biến trên khoảng $\\left(-2;0\\right)$",
        "answer": false
      },
      {
        "text": "Đồ thị của hàm số đã cho có tiệm cận đứng $x=-1$",
        "answer": true
      },
      {
        "text": "Đồ thị của hàm số đã cho có tiệm cận xiên $y=x+1$",
        "answer": true
      },
      {
        "text": "Gọi $A$, $B$ là $2$ điểm cực trị của hàm số đã cho, diện tích tam giác $OAB$ bằng $\\sqrt{5}$",
        "answer": false
      }
    ],
    "explain": "<br>- Tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}\\setminus\\left\\{-1\\right\\}$.  Dựa vào đồ thị, ta thấy hàm số nghịch biến trên các khoảng $\\left(-2;-1\\right)$ và $\\left(-1;0\\right)$.<br>- Dựa vào đồ thị, ta thấy đường tiệm cận đứng của đồ thị hàm số $x=-1$.<br>- Dựa vào đồ thị, ta thấy đường tiệm cận xiên của đồ thị hàm số đi qua $2$ điểm là $\\left(-1;0\\right)$ và $\\left(0;1\\right)$ nên có phương trình là $\\dfrac{x}{-1}+\\dfrac{y}{1}=1$ hay $y=x+1$ .<br>- Giả sử $A\\left(-2;-2\\right)$ là điểm cực đại, $B$ $\\left(0;2\\right)$ là điểm cực tiểu của đồ thị hàm số đã cho. Ta có $OA=2\\sqrt{2}$, $OB=2$. Dựa vào đồ thị, ta có $\\widehat{AOB}=135^\\circ$, suy ra  $S_{OAB}=\\frac{1}{2}OA\\cdot OB\\cdot \\sin 135^\\circ=2.$"
  },
  {
    "id": "2D141DS28",
    "question": "Cho hàm số $y=\\dfrac{x^2-2x-3}{x-1}$ có đồ thị $(\\mathscr{C})$.",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số nhận đường thẳng $y=x+1$ làm tiệm cận xiên",
        "answer": false
      },
      {
        "text": "Hàm số có $2$ điểm cực trị",
        "answer": false
      },
      {
        "text": "Gọi $A$, $B$, $C$ là giao điểm của đồ thị hàm số với các trục $Ox$, $Oy$. Diện tích tam giác $ABC$ bằng $6$",
        "answer": true
      },
      {
        "text": "Nếu $d_1\\colon y=a_1x+b_1$ và $d_2\\colon y=a_2x+b_2$ là phương trình hai trục đối xứng của đồ thị hàm số $(\\mathscr{C})$ thì $a_1^2+a_2^2+b_1^2+b_2^2=12$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\lim\\limits_{x\\to +\\infty} y=\\dfrac{x^2-2x-3}{x(x-1)}=1$, $\\lim\\limits_{x\\to +\\infty} (y-x)=\\lim\\limits_{x\\to +\\infty} \\dfrac{-x-3}{x-1}=-1$. <br>  Vậy đồ thị hàm số đã cho có một đường tiệm cận xiên là $y=x-1$.<br>- Xét hàm số $y=\\dfrac{x^2-2x-3}{x-1}$. <br>  Ta có $y'=\\dfrac{(2x-2)(x-1)-(x^2-2x-3)}{(x-1)^2}=\\dfrac{x^2-2x+5}{(x-1)^2}&gt;0$ với mọi $x\\neq 1$. <br>  Vậy hàm số đã cho không có điểm cực trị.<br>- Xét phương trình hoành độ giao điểm  $\\dfrac{x^2-2x-3}{x-1}=0\\Rightarrow x^2-2x-3=0\\Rightarrow x=-1 \\text{ hoặc } x=3.$  Vậy giao điểm của đồ thị hàm số với trục hoành là $A(-1;0)$ và $B(3;0)$. <br>  Ta có $y(0)=3$, vậy giao điểm của đồ thị hàm số với trục tung là $C(0;3)$. <br>  Ta có $\\mathrm{d}(C,AB)=3$, vậy diện tích tam giác $ABC$ là $S_{ABC}=\\dfrac{1}{2}\\cdot 4\\cdot 3=6$.<br>- $a_1=\\tan \\dfrac{3\\pi}{8}$, $b_1=-\\tan \\dfrac{3\\pi}{8}$, $a_2=-\\cot \\dfrac{3\\pi}{8}$, $b_2=\\cot \\dfrac{3\\pi}{8}$."
  },
  {
    "id": "2D142DS1",
    "question": "Cho hàm số $y=f(x)=\\dfrac{ax^2+bx+c}{x+d}$ có đồ thị là đường cong như hình vẽ bên dưới. Biết đường tiệm cận xiên của đồ thị hàm số đi qua hai điểm $(0;1)$ và $(1;0)$. <br><img src=\"data/12/2D1/im2D14/loc8_TT_QV1_TT1_LVT_B_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên khoảng $(-4;0)$",
        "answer": false
      },
      {
        "text": "Tập xác định của hàm số là $\\mathbb{R}\\setminus \\left\\{2\\right\\}$",
        "answer": false
      },
      {
        "text": "Ta có $a+b+c+d=-2$",
        "answer": true
      },
      {
        "text": "Tiếp tuyến tại điểm $M$ thuộc đồ thị hàm số cắt các đường tiệm cận lần lượt tại $A$ và $B$. Khi đó $MA \\cdot MB$ đạt giá trị nhỏ nhất là $8\\sqrt{2}-8$",
        "answer": true
      }
    ],
    "explain": "<br>- Trên khoảng $(-4;0)$, hàm số không liên tục nên hàm số không đồng biến trên khoảng $(-4;0)$.<br>- Tập xác định của hàm số $\\mathscr{D}=\\mathbb{R}\\setminus \\left\\{-2\\right\\}$.<br>- Ta có đường tiệm cận xiên có phương trình $d_1 \\colon y=-x+1$ và đường tiệm cận đứng $d_2 \\colon x=-2$. Vậy ta có $y=f(x)=-x+1+\\dfrac{m}{x+2}$. <br>  Mà đồ thị hàm số đi qua điểm $(-4;7)$, nên $m=-4$. <br>  Vậy $y=f(x)=-x+1+\\dfrac{-4}{x+2}=\\dfrac{-x^2-x-2}{x+2}$. <br> Khi đó $a=-1$, $b=-1$, $c=-2$, $d=2$. <br>  Vậy $a+b+c+d=-2$.<br>- Gọi $M\\left(x_0;-x_0+1-\\dfrac{4}{x_0+2}\\right)$. <br>  Tiếp tuyến với đồ thị hàm số tại điểm $M$ có phương trình là  \\[ \\Delta \\colon y=\\left(-1+\\dfrac{4}{(x_0+2)^2}\\right)(x-x_0)+\\dfrac{-x_0^2-x_0-2}{x_0+2}.  \\] Gọi $A$ là giao điểm của $d_1\\cap \\Delta$, nên tọa độ điểm $A$ là nghiệm của hệ phương trình  \\[ y=\\left(-1+\\dfrac{4}{(x_0+2)^2}\\right)(x-x_0)+\\dfrac{-x_0^2-x_0-2}{x_0+2} \\text{ và } y=-x+1\\Leftrightarrow x=2x_0+2 \\text{ và } y=-2x_0-1 \\Rightarrow A (2x_0+2;-2x_0-1).  \\] Gọi $B$ là giao điểm của $d_2\\cap \\Delta$, nên tọa độ điểm $B$ là nghiệm của hệ phương trình  \\[ y=\\left(-1+\\dfrac{4}{(x_0+2)^2}\\right)(x-x_0)+\\dfrac{-x_0^2-x_0-2}{x_0+2} \\text{ và } x=-2\\Leftrightarrow x=-2 \\text{ và } y=\\dfrac{3x_0-2}{x_0+2} \\Rightarrow B\\left(-2;\\dfrac{3x_0-2}{x_0+2}\\right).  \\] Ta có  $MA =\\sqrt{(x_0+2)^2+\\left(-x_0-2+\\dfrac{4}{x_0+2}\\right)^2}$<br>$MB =\\sqrt{(-x_0-2)^2+\\left(\\dfrac{-x_0^2-x_0-2-3x_0+2}{x_0+2}\\right)^2}$<br>$=\\sqrt{(-x_0-2)^2+\\left(-x_0-2+\\dfrac{4}{x_0+2}\\right)^2}$<br>$=\\sqrt{(x_0+2)^2+\\left(-(x_0+2)+\\dfrac{4}{x_0+2}\\right)^2}.$ Vậy $MA \\cdot MB=(-x_0-2)^2+\\left(-x_0-2+\\dfrac{4}{x_0+2}\\right)^2$. <br>  Đặt $t=x_0+2$, theo bất đẳng thức Cauchy, ta có \\[ MA\\cdot MB=t^2+\\left(t-\\dfrac{4}{t}\\right)^2=2t^2+\\dfrac{16}{t^2}-8\\ge 2\\sqrt{2t^2 \\cdot \\dfrac{16}{t^2}}-8=8\\sqrt{2}-8.  \\] Khi đó $MA\\cdot MB$ đạt giá trị nhỏ nhất là $8\\sqrt{2}-8$."
  },
  {
    "id": "2D141DS29",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như hình vẽ sau.  <br><img src=\"data/12/2D1/im2D14/loc8_TT_THPT_DaoDuyTu_011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét tính đúng sai của các khẳng định sau:",
    "subQuestions": [
      {
        "text": "Hàm số $y=f(x)$ nghịch biến trên khoảng $(0;+\\infty )$",
        "answer": true
      },
      {
        "text": "Hàm số $y=f(x)$ đạt cực đại tại $x=0$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ có giá trị lớn nhất bằng 1",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số $y=\\dfrac{1}{f(x)-1}$ có $a$ đường tiệm cận đứng và $b$ đường tiệm cận ngang. Khi đó $a^2+b^2=5$",
        "answer": true
      }
    ],
    "explain": "<br>- Từ bảng biến thiên, ta thấy hàm số nghịch biến trên khoảng $(0;+\\infty )$.<br>- Từ bảng biến thiên, ta thấy hàm số không xác định tại $x=0$ nên không đạt cực đại tại đó.<br>- Từ bảng biến thiên, ta thấy hàm số không có giá trị lớn nhất và giá trị nhỏ nhất.<br>- Dựa vào bảng biến thiên ta có $\\lim\\limits_{x\\to +\\infty }f(x)=-\\infty \\Rightarrow \\lim\\limits_{x\\to +\\infty }\\dfrac{1}{f(x)-1}=0$.<br>  Do đó đồ thị hàm số có $1$ đường tiệm cận ngang là $y=0$.<br>  Dựa vào bảng biến thiên là có tồn tại $x_1\\in ( -2;0 )$ sao cho $f(x_1)=1$ và $\\lim\\limits_{x\\to 0^+} f(x)=1$<br>  $\\Rightarrow \\lim\\limits_{x\\to x_1^+}\\dfrac{1}{f(x)-1}=+\\infty $; $\\lim\\limits_{x\\to x_1^-}\\dfrac{1}{f(x)-1}=-\\infty $, $\\lim\\limits_{x\\to 0^+}\\dfrac{1}{f(x)-1}=-\\infty $.<br>  Suy ra đồ thị hàm số có $2$ đường tiệm cận đứng là $x=x_1,x=0$.<br>  Do đó $a=2,b=1\\Rightarrow a^2+b^2=5$."
  },
  {
    "id": "2D141DS30",
    "question": "Cho hàm số $y=\\dfrac{2x^2+5x}{x+3}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\backslash \\{-3\\}$",
        "answer": true
      },
      {
        "text": "Hàm số có hai cực trị có tổng hoành độ của cực trị bằng $-6$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có tiệm cận ngang $y=-3$",
        "answer": false
      },
      {
        "text": "Khoảng cách từ điểm $M(2;1)$ đến đường tiệm cận xiên của đồ thị $(C)$ bằng $\\dfrac{2\\sqrt{5}}{5}$",
        "answer": false
      }
    ],
    "explain": "<br>- Tập xác định $\\mathscr{D}=\\mathbb{R}\\backslash \\{-3\\}$.<br>- Ta có $y=\\dfrac{2x^2+5x}{x+3}=2x-1+\\dfrac{3}{x+3}\\Rightarrow y'=2-\\dfrac{3}{(x+3)^2}$.<br>  Suy ra $y'=0\\Leftrightarrow 2-\\dfrac{3}{(x+3)^2}=0\\Leftrightarrow \\dfrac{2x^2+12x+15}{(x+3)^2}=0\\Leftrightarrow 2x^2+12x+15=0$ có hai nghiệm phân biệt.<br>  Vậy hàm số có hai cực trị có tổng hoành độ của cực trị bằng $\\dfrac{-12}{2}=-6$.<br>- Ta có $\\lim\\limits_{x\\to +\\infty }\\dfrac{2x^2+5x}{x+3}=+\\infty , \\lim\\limits_{x\\to -\\infty }\\dfrac{2x^2+5x}{x+3}=-\\infty $, nên đồ thị hàm số không có tiệm cận ngang.<br>- Ta có $\\lim\\limits_{x\\to +\\infty }\\left[y-(2x-1)\\right]= \\lim\\limits_{x\\to +\\infty }\\dfrac{3}{x+3}=0; \\lim\\limits_{x\\to -\\infty }\\left[y-(2x-1)\\right]= \\lim\\limits_{x\\to -\\infty }\\dfrac{3}{x+3}=0$.<br>  Nên đồ thị hàm số có tiệm cận xiên là $\\Delta \\colon y=2x-1\\Leftrightarrow 2x-y-1=0$.<br>  Khoảng cách từ điểm $M(2;1)$ đến $\\Delta $ là   $\\mathrm{d}(M,\\Delta )=\\dfrac{| 2\\cdot 2-1-1 |}{\\sqrt{2^2+(-1)^2}}=\\dfrac{2\\sqrt{5}}{5}.$"
  },
  {
    "id": "2D141DS31",
    "question": "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D14/loc8_TT_THPT_NguyenKh_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số đã cho có hai đường tiệm cận ngang",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên $(-\\infty ;+\\infty)$ bằng $8$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên $(8 ; 38)$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên $\\mathbb{R}$ bằng $142$",
        "answer": false
      }
    ],
    "explain": "<br>- Dựa vào bảng biến thiên ta có $\\lim\\limits_{x \\to-\\infty} f(x)=142$ suy ra đường thẳng có phương trình $y=142$ là một đường tiệm cận ngang của đồ thị hàm số.<br> Tương tự $\\lim\\limits_{x \\to+\\infty} f(x)=14$ suy ra đường thẳng $y=14$ cũng là một đường tiệm cận ngang.<br>- Trên $\\mathbb{R}$ ta có $f(x) \\geq f(-1)=8$ vậy giá trị nhỏ nhất của hàm số bằng $8$.<br>- Ta có $f'(x)&gt;0 \\Leftrightarrow x \\in(-1 ; 1)$ nên hàm số đồng biến trên $(-1;1)$ mà $(8 ; 38) \\not \\subset(-1 ; 1)$.<br>- Vì $\\lim\\limits_{x \\to-\\infty} f(x)=142$ và $f(x)&lt;142, \\forall x \\in \\mathbb{R}$ nên hàm số không có giá trị lớn nhất trên $\\mathbb{R}$."
  },
  {
    "id": "2D143DS5",
    "question": "Cho hàm số $y = f(x) = \\dfrac{x^2+3x+3}{x+2}$.",
    "subQuestions": [
      {
        "text": "Phương trình tiếp tuyến của đồ thị hàm số đã cho song song với đường thẳng $y=-3x-11$ đi qua điểm $B(1;-6)$",
        "answer": true
      },
      {
        "text": "Tổng giá trị cực đại và giá trị cực tiểu của hàm số đã cho bằng $-4$",
        "answer": false
      },
      {
        "text": "Đường tiệm cận xiên của đồ thị hàm số đã cho đi qua điểm $A(0;2)$",
        "answer": false
      },
      {
        "text": "Hàm số đã cho đồng biến trên $(-\\infty;-3)$ và $(-1;+\\infty)$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $y'=\\dfrac{x^2+4x+3}{(x+2)^2}$.<br>  Vì tiếp tuyến của đồ thị hàm số đã cho song song với đường thẳng $y=-3x-11$ nên ta có:  $\\dfrac{x^2+4x+3}{(x+2)^2}=-3\\Rightarrow x^2+4x+3=-3x^2-12x-12$<br>$\\Leftrightarrow 4x^2+16x+15=0 \\Leftrightarrow x=-\\dfrac{3}{2} \\text{ hoặc } x=-\\dfrac{5}{2}.$  Với $x=-\\dfrac{5}{2}$ suy ra $y\\left(-\\dfrac{5}{2}\\right)=-\\dfrac{7}{2}$.<br>  Phương trình tiếp tuyến là $y=-3\\left(x+\\dfrac{5}{2}\\right)-\\dfrac{7}{2}=-3x-11$.<br>  Với $x=-\\dfrac{3}{2} \\Rightarrow y\\left(-\\dfrac{3}{2}\\right)=\\dfrac{3}{2}$.<br>  Phương trình tiếp tuyến là $y=-3\\left(x+\\dfrac{3}{2}\\right)+\\dfrac{3}{2}=-3x-3$.<br>  Ta thấy điểm $B(1 ;-6)$ thuộc đường thẳng $y=-3x-3$.<br>- Điều kiện xác định $x \\ne -2$.<br>  Ta có $y'= \\dfrac{x^2+4x+3}{(x+2)^2}$; $y' = 0 \\Leftrightarrow x=-1 \\text{ hoặc } x=-3.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D14/loc8_TT_THPT_NguyenVi_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên, hàm số có $y_\\text{CĐ}=-3$; $y_\\text{CT}=1$.<br>  Ta có $y_\\text{CĐ}+y_\\text{CT}=-3+1=-2$.<br>- Khi đó $y = \\dfrac{x^2+3x+3}{x+2} = x+1+\\dfrac{1}{x+2}$. <br>  Ta có $\\lim\\limits_{x \\to \\pm\\infty} \\left[f(x)-(x+1)\\right] = \\lim\\limits_{x \\to \\pm\\infty} \\dfrac{1}{x+2} = 0$.<br>   $\\Rightarrow y=x+1$ là đường tiệm cận xiên của đồ thị hàm số.<br>  Thay tọa độ điểm $A(0;2)$ vào phương trình đường tiệm cận xiên ta được $0+1=2$ (Vô lí).<br>  Do đó đường tiệm cận xiên của đồ thị hàm số đã cho không đi qua điểm $A(0;2)$.<br>- Từ bảng biến thiên hàm số đã cho đồng biến trên các khoảng $(-\\infty;-3)$ và $(-1;+\\infty)$."
  }
];
