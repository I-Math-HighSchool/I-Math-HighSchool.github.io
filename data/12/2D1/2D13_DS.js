// =========================================================================
// KHỐI DỮ LIỆU: 2D13 - Đúng sai
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai2D13 = [
  {
    "id": "2D131DS1",
    "question": "Một trang sách có dạng hình chữ nhật có diện tích $384$ cm$^2$. Sau khi để lề trên và lề dưới đều là $3$ cm; lề trái và lề phải là $2$ cm; phần còn lại của trang sách được in chữ. Gọi $x$ là chiều rộng của trang sách.",
    "subQuestions": [
      {
        "text": "Chiều dài của trang sách là $384-x$ (cm)",
        "answer": false
      },
      {
        "text": "Diện tích lớn nhất của trang sách được in chữ là $360$ cm$^2$",
        "answer": false
      },
      {
        "text": "Trang sách được in chữ có diện tích lớn nhất khi $x=16$ (cm)",
        "answer": false
      },
      {
        "text": "Phần diện tích để trống là $144$ cm$^2$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Chiều dài trang sách là $\\dfrac{384}{x}$ m $(x&gt;0)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Diện tích được in chữ  $  A(x) = (x-4)\\left( \\dfrac{384}{x} - 6 \\right) = -6x+408-\\dfrac{1\\,536}{x}.  $  Miền xác định của $A(x)$ là $\\mathscr{D} = (0,+\\infty)$.<br>  Đạo hàm $A'(x) = -6+\\dfrac{1\\,536}{x^2}$.<br>  Cho $A'(x)=0$ ta được $x=16\\sqrt{2}$.<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Diện tích lớn nhất của trang sách được in chữ là $216$ cm$^2$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Diện tích lớn nhất của trang sách được in chữ là $216$ cm$^2$ khi $x=16$ cm.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Diện tích để trống là $384-216 = 168$ cm$^2$."
  },
  {
    "id": "2D131DS2",
    "question": "Cần rào ba cạnh để cùng với bờ tường có sẵn tạo thành mảnh vườn hình chữ nhật có diện tích $200 m^2$ (hình)  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_017.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Ký hiệu $x(m)$, $y(m)$ lần lượt là độ dài các cạnh của mảnh vườn vuông góc và song song với bờ tường; $L(m)$ là tổng độ dài lưới thép cần để rào mảnh vườn. Biết rằng mỗi mét lưới théo dùng để rào mảnh vườn có đơn giá $250$ nghìn đồng.",
    "subQuestions": [
      {
        "text": "$y$ được tính theo $x$ bằng công thức $y=\\dfrac{200}{x}$",
        "answer": true
      },
      {
        "text": "$L$ đạt giá trị nhỏ nhất khi $x=10$ (m)",
        "answer": true
      },
      {
        "text": "Số tiền tối thiểu để mua lưới thép rào mảnh vườn là $2{,}5$ triệu đồng",
        "answer": false
      },
      {
        "text": "$L$ được tính theo $x$ theo công thức $L=2x+\\dfrac{100}{x}$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $xy=200$, do đó $y=\\dfrac{200}{x}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $L(x)=2x+\\dfrac{200}{x}, x&gt;0$.<br>  $L'(x)=2-\\dfrac{200}{x^2}$.<br>  $L'(x)=0 \\Leftrightarrow 2-\\dfrac{200}{x^2}=0 \\Leftrightarrow x^2=100 \\Rightarrow x=10$.<br>  Ta có bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_018.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, $L$ đạt giá trị nhỏ nhất khi $x=10$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $\\min\\limits_{x \\in (0;+\\infty)} L(x) = L(10) =40$, do đó số tiền tối thiểu để mua lưới thép là $40\\cdot250\\,000=10\\,000\\,000$ (đồng).<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Do $L(x)=2x+\\dfrac{200}{x}$."
  },
  {
    "id": "2D132DS3",
    "question": "Xét hàm số $y=\\dfrac{x^2+x}{x-1}$ với $x\\in\\mathbb{R}\\setminus\\{1\\}$, có đồ thị là $(H)$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số đó là $f'(x)=\\dfrac{x^2-2x-1}{(x-1)^2}$ với $x\\in\\mathbb{R}\\setminus\\{1\\}$",
        "answer": true
      },
      {
        "text": "Đường tiệm cận xiên của $(H)$ có phương trình là $y=x-1$",
        "answer": false
      },
      {
        "text": "Khoảng cách giữa hai điểm cực trị của $(H)$ bằng $2\\sqrt{10}$",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của $f(x)$ trên khoảng $(1;+\\infty)$ là $3+2\\sqrt{2}$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $f'(x) = \\dfrac{x^2-2x-1}{(x-1)^2}$ với $x\\in\\mathbb{R}\\setminus\\{1\\}$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $f(x) = \\dfrac{x^2+x}{x-1} = x+2 + \\dfrac{2}{x-1}$. <br>  Suy ra đường tiệm cận xiên của $(H)$ có phương trình là $y=x+2$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $f'(x) = 0\\Leftrightarrow x^2-2x-1=0\\Leftrightarrow x=-\\sqrt{2}+1\\Rightarrow y = -2\\sqrt{2}+3 \\text{ hoặc } x=\\sqrt{2}+1\\Rightarrow y = 2\\sqrt{2}+3.$ <br>  Suy ra $(H)$ có hai điểm cực trị $A\\left(-\\sqrt{2}+1;-2\\sqrt{2}+3\\right)$ và $B\\left(\\sqrt{2}+1;2\\sqrt{2}+3\\right)$. <br>  Do đó, khoảng cách giữa hai điểm cực trị của $(H)$ là $AB = \\sqrt{\\left(2\\sqrt{2}\\right)^2 + \\left(4\\sqrt{2}\\right)^2} = 2\\sqrt{10}.$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có bảng biến thiên của $f(x)$ trên $(1;+\\infty)$ như sau  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_021.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy giá trị nhỏ nhất của $f(x)$ trên khoảng $(1;+\\infty)$ là $3+2\\sqrt{2}$."
  },
  {
    "id": "2D136DS4",
    "question": "Một chất điểm $M$ chuyển động trên một đường thẳng đi qua $O$. Để khảo sát chuyển động của $M$ người ta gắn trên đường thẳng đó một hệ trục toạ độ là $Ox$ với $O$ là điểm gốc, mỗi đơn vị trên trục tương ứng với độ dài $1$ mét. Xét trong $12$ giây đầu tiên, toạ độ $x(t)$ của $M$ tại thời điểm $t$ giây kể từ lúc bắt đầu khảo sát được cho bởi công thức $x(t) = -\\dfrac{t^3}{3}+6t^2+4$.",
    "subQuestions": [
      {
        "text": "Ban đầu $M$ ở vị trí cách $O$ một khoảng cách bằng $6$ mét",
        "answer": false
      },
      {
        "text": "Vận tốc tức thời của $M$ tại thời điểm $t$ giây ($0\\le t\\le 12$) là $v(t) = -t^2+12t$ (mét/giây)",
        "answer": true
      },
      {
        "text": "Trong suốt $6$ giây đầu tiên, vận tốc tức thời của $M$ luôn tăng",
        "answer": true
      },
      {
        "text": "Xét trong $12$ giây đầu tiên, tính từ lúc bắt đầu khảo sát đến lúc $M$ có vận tốc tức thời lớn nhất thì $M$ đi được một quãng đường dài $148$ mét",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $x(0) = 4$. <br>  Vậy ban đầu $M$ ở vị trí cách $O$ một khoảng cách bằng $4$ mét.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $v(t) = x'(t) = -t^2+ 12t$. <br>  Vậy vận tốc tức thời của $M$ tại thời điểm $t$ giây ($0\\le t\\le 12$) là $v(t) = -t^2+12t$ (mét/giây).<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có $v'(t) = -2t+12$. Khi đó $v'(t) &gt; 0\\Leftrightarrow -2t+12&gt;0\\Leftrightarrow t&lt;6$. <br>  Suy ra $v(t)$ đồng biến trên $[0;6]$. <br>  Vậy trong suốt $6$ giây đầu tiên, vận tốc tức thời của $M$ luôn tăng.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có bảng biến thiên của $v(t)$ như sau  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_022.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Suy ra $M$ có vận tốc tức thời lớn nhất tại $t=6$. <br>  Khi đó $x(6) - x(0) = -\\dfrac{6^3}{3} + 6\\cdot 6^2 + 4 - 4= 144$. <br>  Vậy xét trong $12$ giây đầu tiên, tính từ lúc bắt đầu khảo sát đến lúc $M$ có vận tốc tức thời lớn nhất thì $M$ đi được một quãng đường dài $144$ mét."
  },
  {
    "id": "2D132DS5",
    "question": "Cho hàm số $f(x)=\\cos 2x-x$.",
    "subQuestions": [
      {
        "text": "$f\\left(-\\dfrac{\\pi}{2}\\right)=\\dfrac{\\pi}{2}-1$; $f\\left(\\dfrac{\\pi}{2}\\right)=-\\dfrac{\\pi}{2}-1$",
        "answer": true
      },
      {
        "text": "Đạo hàm của hàm số đã cho là $f'(x)=2\\sin 2x-1$",
        "answer": false
      },
      {
        "text": "Phương trình $f'(x)=0$ có đúng hai nghiệm trên đoạn $\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ là $x=-\\dfrac{\\pi}{12}$ và $x=\\dfrac{5\\pi}{12}$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số $y=f(x)$ trên đoạn $\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ là $-\\dfrac{\\pi}{2}-1$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  $f\\left(-\\dfrac{\\pi}{2}\\right)=\\cos (-\\pi)+\\dfrac{\\pi}{2}=\\dfrac{\\pi}{2}-1$.<br> $f\\left(\\dfrac{\\pi}{2}\\right)=\\cos (\\pi)-\\dfrac{\\pi}{2}=-\\dfrac{\\pi}{2}-1$<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Đạo hàm của hàm số đã cho là $f'(x)=-2\\sin 2x-1$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Ta có $f'(x)=-2\\sin 2x-1=0\\Leftrightarrow \\sin 2x=-\\dfrac{1}{2}\\Leftrightarrow x=-\\dfrac{\\pi}{12}+k\\pi \\text{ hoặc } x=\\dfrac{7\\pi}{12}+k\\pi, k\\in \\mathbb{Z}$.<br>  Vì $x\\in \\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ nên $x\\in \\left\\{-\\dfrac{\\pi}{12};-\\dfrac{5\\pi}{12}\\right\\}$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $f\\left(-\\dfrac{\\pi}{2}\\right)=\\dfrac{\\pi}{2}-1$.<br>  $f\\left(\\dfrac{\\pi}{2}\\right)=-\\dfrac{\\pi}{2}-1$.<br>  $f\\left(-\\dfrac{\\pi}{12}\\right)=\\dfrac{\\pi}{12}+\\dfrac{\\sqrt{3}}{2}$.<br>  $f\\left(-\\dfrac{5\\pi}{12}\\right)=\\dfrac{5\\pi}{12}-\\dfrac{\\sqrt{3}}{2}$.<br>  Vậy giá trị nhỏ nhất của hàm số $y=f(x)$ trên đoạn $\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ là $-\\dfrac{\\pi}{2}-1$."
  },
  {
    "id": "2D131DS6",
    "question": "Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R}$, có đồ thị $f(x)$ như hình vẽ.  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_030.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$f(3) &lt; f(2)$",
        "answer": true
      },
      {
        "text": "Hàm số có $2$ điểm cực trị",
        "answer": true
      },
      {
        "text": "Hàm số có giá trị lớn nhất bằng $3$ trên đoạn $[0;2]$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(-1;2)$",
        "answer": false
      }
    ],
    "explain": "<br>- Hàm số nghịch biến trên khoảng $(2;+\\infty)$ nên $f(2)&gt;f(3)$.<br>- Hàm số có $2$ điểm cực trị là $x=0$, $x=2$.<br>- Hàm số có giá trị lớn nhất bằng $3$ trên đoạn $[0;2]$.<br>- Hàm số đồng biến trên khoảng $(0;2)$."
  },
  {
    "id": "2D131DS7",
    "question": "Cho hàm số $y=2^x+x+1$.",
    "subQuestions": [
      {
        "text": "Giá trị của hàm số tại $x=0$ là $ 2 $",
        "answer": true
      },
      {
        "text": "Tập xác định của hàm số là $\\mathscr{D}=(0 ;+\\infty)$",
        "answer": false
      },
      {
        "text": "Đạo hàm $y'=2^x+1$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên $[0 ; 1]$ bằng $ 4 $",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Ta có với $ x=0 $, $ y=2^0+0+1=2 $.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Tập xác định của hàm số là $ \\mathscr{D}=\\mathbb{R} $.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $ y'=2^x\\ln 2+1 $.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Do $ y'=2^x\\ln 2+1&gt;0 $, $ \\forall x \\in [0;1] $ nên hàm số đồng biến trên $ (0;1) $.<br>  Khi đó $ \\max\\limits_{[0;1]}f(x)=f(1)=2^1+1+1=4 $."
  },
  {
    "id": "2D132DS8",
    "question": "Cho hàm số $y=f(x)=x^3-3x-2$.",
    "subQuestions": [
      {
        "text": "Hàm số đạt cực tiểu tại $x=1$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(-1;1)$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên đoạn $[-1;1]$ bằng $-4$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số $y=f(2x)$ trên đoạn $\\left[-\\dfrac{1}{2};\\dfrac{1}{2}\\right]$ bằng $-4$",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số có đạo hàm $f'(x) = 3x^2 - 3$.<br>  Giải phương trình $f'(x)=0$, ta có $x=1$ và $x=-1$.<br>   Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_043.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy hàm số đạt cực tiểu tại $x=1$.<br>- Trên khoảng $(-1;1)$, ta có $f'(x) &lt; 0$ nên hàm số nghịch biến trên khoảng $(-1;1)$.<br>- Giá trị lớn nhất của hàm số trên đoạn $[-1;1]$ bằng $0$.<br>- Xét $g(x) = f(2x) = 8x^3 - 6x - 2$ trên đoạn $\\left[-\\dfrac{1}{2};\\dfrac{1}{2}\\right]$. <br>  Đạo hàm của hàm số $g(x)$ là $g'(x)=24x^2-6$.<br>  giải phương trình $g'(x)=0$, ta có $x=-\\dfrac{1}{2}$ và $x=\\dfrac{1}{2}$.<br>  Ta có $g\\left(-\\dfrac{1}{2}\\right) = 0$ và $g\\left(\\dfrac{1}{2}\\right) = -4$. <br> Vậy giá trị nhỏ nhất của $g(x)$ trên đoạn $\\left[-\\dfrac{1}{2};\\dfrac{1}{2}\\right]$ là $-4$."
  },
  {
    "id": "2D131DS9",
    "question": "Dùng một dây thép dài $60$ m uốn thành một khung có dạng như hình vẽ. Biết phần dưới là hình chữ nhật và phía trên là một tam giác đều.  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_044.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Chu vi của khung thép $3x + 2y = 60$",
        "answer": true
      },
      {
        "text": "Khi $x = \\dfrac{60}{6 - \\sqrt{3}}$ thì khung có diện tích lớn nhất",
        "answer": true
      },
      {
        "text": "Tổng diện tích của khung là $S = \\dfrac{\\sqrt{3} - 6}{4} x^2 + 30x$",
        "answer": true
      },
      {
        "text": "Diện tích phần khung hình chữ nhật là $\\left(30 - \\dfrac{3}{2}x\\right)^2$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D1/im2D1/2D13_tikz_045.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Chu vi của khung thép $3x + 2y = 60$.<br>- Diện tích của khung là $\\dfrac{\\sqrt{3}}{4}x^2 + x \\cdot \\dfrac{60-3x}{2}=\\dfrac{\\sqrt{3}-6}{4}x^2+30x$ (cm$^2$).<br>  Xét hàm số $f(x)=\\dfrac{\\sqrt{3}-6}{4}x^2+30x$ với $0&lt;x&lt;20$.<br>  Ta có $f(x)$ đạt giá trị lớn nhất khi $x=-\\dfrac{b}{2a}=\\dfrac{60}{6-\\sqrt{3}}$.<br>- Tổng diện tích của khung là $S=\\dfrac{\\sqrt{3}-6}{4}x^2+30x$.<br>- Diện tích phần khung hình chữ nhật là $x y =x \\cdot (\\dfrac{60-3x}{2})= 30x-\\dfrac{3}{2}x^2$."
  },
  {
    "id": "2D132DS10",
    "question": "Cho hàm số $y=f(x)=x^4-2x^2+2$. Xét các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên $(-\\infty ;-1)$ và $(1;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực đại tại $x=0$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên $(0;1)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên $(-1;1)$ bằng $2$",
        "answer": true
      }
    ],
    "explain": "Xét hàm số $y=f(x)=x^4-2x^2+2$, ta có  <br>- Tập xác định $\\mathbb{R}$.<br>- Đạo hàm $f'(x)=4x^3-4x$.<br>- $f'(x)=0\\Leftrightarrow 4x^3-4x=0\\Leftrightarrow x=0 \\text{ hoặc } x=1 \\text{ hoặc } x=-1.$<br>- Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_051.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Từ bảng biến thiên, ta thấy hàm số nghịch biến trên khoảng $(-\\infty ;-1)$ và đồng biến trên khoảng $(1;+\\infty)$.<br>- Từ bảng biến thiên, ta thấy hàm số đạt cực đại tại $x=0$.<br>- Từ bảng biến thiên, ta thấy hàm số nghịch biến trên $(0;1)$.<br>- Từ bảng biến thiên, ta thấy giá trị lớn nhất của hàm số trên $(-1;1)$ bằng $2$."
  },
  {
    "id": "2D132DS11",
    "question": "Cho hàm số $y=x+\\sqrt{9-x^2}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số có tập xác định $\\mathscr{D}=[-3;3]$",
        "answer": true
      },
      {
        "text": "Hàm số có hai điểm cực trị",
        "answer": false
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(-3;0)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số là $3\\sqrt{2}$",
        "answer": true
      }
    ],
    "explain": "<br>- Điều kiện $9-x^2 \\ge 0 \\Leftrightarrow -3 \\le x \\le 3$.<br>  Hàm số có tập xác định $\\mathscr{D}=[-3;3]$.<br>- $y'=1-\\dfrac{x}{\\sqrt{9-x^2}}$.<br>  Ta có $y'=0 \\Leftrightarrow 1=\\dfrac{x}{\\sqrt{9-x^2}}$<br>$\\Leftrightarrow x=\\sqrt{9-x^2}$<br>$\\Leftrightarrow 9-x^2=x^2 \\text{ và } x \\ge 0$<br>$\\Leftrightarrow x\\ge 0 \\text{ và } 9-2x^2=0$<br>$\\Leftrightarrow x=\\dfrac{3\\sqrt{2}}{2}.$  Ta có bảng biến thiên   <br><img src=\"data/12/2D1/im2D1/2D13_tikz_057.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Hàm số có $1$ điểm cực trị.<br>- Dựa vào bảng biến thiên, hàm số đồng biến trên khoảng $(-3;0)$.<br>- Dựa vào bảng biến thiên, giá trị lớn nhất của hàm số là $3\\sqrt{2}$."
  },
  {
    "id": "2D132DS12",
    "question": "Cho hàm số $y=f(x)=x^3-6 x^2+9x-1$. Xét tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số $f(x)$ là $f'(x)=3 x^2-12 x+9$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(3 ;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực đại tại điểm $x=1$ và giá trị cực đại của hàm số bằng $3$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số $f(x)$ trên đoạn $[2; 5]$ bằng $10$",
        "answer": false
      }
    ],
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}$ và $f'(x)=3x^2-12x+9$.<br>  Xét $f'(x)=0\\Leftrightarrow 3x^2-12x+9=0\\Leftrightarrow x=1 \\text{ hoặc } x=3.$<br>  Ta có $\\lim\\limits_{x \\to -\\infty} f(x) = -\\infty$ và $\\lim\\limits_{x \\to +\\infty} f(x) = +\\infty$.<br>  Bàng biến thiên   <br><img src=\"data/12/2D1/im2D1/2D13_tikz_061.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   Từ bảng biến thiên ta có  <br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Đạo hàm của hàm số $f(x)$ là $f'(x)=3 x^2-12 x+9$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Hàm số nghịch biến trên khoảng $(3 ;+\\infty)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;. Hàm số đạt cực đại tại điểm $x=1$ và giá trị cực đại của hàm số bằng $3$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;. Ta có $f(2)=1$; $f(3)=-1$ và $f(5)=19$. Do đó giá trị lớn nhất của hàm số $f(x)$ trên đoạn $[2; 5]$ bằng $19$."
  },
  {
    "id": "2D132DS13",
    "question": "Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R}$ và có đồ thị như hình vẽ.<br><img src=\"data/12/2D1/im2D1/2D13_tikz_069.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đạt cực tiểu tại $x=2$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(0;2)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên đoạn $[0; 2]$ bằng $-2$",
        "answer": false
      },
      {
        "text": "Tổng giá trị cực đại và giá trị cực tiểu của hàm số bằng $4$",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.  Hàm số đạt cực tiểu tại $x=2$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.  Hàm số nghịch biến trên khoảng $(0;2)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.  Giá trị lớn nhất của hàm số trên đoạn $[0;2]$ bằng $2$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.  Tổng giá trị cực đại và giá trị cực tiểu của hàm số bằng $2-2=0$."
  },
  {
    "id": "2D131DS14",
    "question": "Cho hàm số đa thức bậc ba $y = ax^3 + bx^2 + cx + d$ có đồ thị là đường cong trong hình vẽ bên.<br><img src=\"data/12/2D1/im2D1/2D13_tikz_072.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đã cho có hai điểm cực trị",
        "answer": true
      },
      {
        "text": "Hàm số đã cho đồng biến trên khoảng $(1;5)$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên khoảng $(0;+\\infty)$ bằng $5$",
        "answer": false
      },
      {
        "text": "$a + b + c + d = 5$",
        "answer": true
      }
    ],
    "explain": "<br>- Dựa và đồ thị, hàm số có $2$ điểm cực trị là $x=1$ và $x=3$.<br>- Hàm số đồng biến trên khoảng $(-\\infty;1)$, $(3;+\\infty)$ và nghịch biến trên khoảng $(1;3)$.<br>- Ta có $\\lim\\limits_{x\\to +\\infty} y=+\\infty$ nên hàm số không có giá trị lớn nhất của hàm số trên khoảng $(0;+\\infty)$.<br>- Ta có $f(1)=a+b+c+d$, dựa cò đồ thị $f(1)=5$. Suy ra $a + b + c + d = 5$."
  },
  {
    "id": "2D131DS15",
    "question": "Cho hàm số $y=\\dfrac{x+3}{x-2}$  . Xét tính đúng sai của mỗi mệnh đề sau",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên mỗi khoảng $(-\\infty;2)$, $(2;+\\infty)$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có đường tiệm cận đứng là $x=2$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số cắt trục tung tại điểm $A\\left(0;-\\dfrac{3}{2}\\right)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên đoạn $[-2;1]$ bằng $-4$",
        "answer": true
      }
    ],
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus \\{2\\}$.<br>  Ta có $y'=\\dfrac{-5}{(x-2)^2}&lt;0, \\forall x\\in \\mathscr{D}$.  <br>- Do $y'&lt;0,\\ \\forall x\\in \\mathscr{D}$ nên hàm số đồng biến trên mỗi khoảng $(-\\infty;2)$, $(2;+\\infty)$.<br>- Ta có $\\lim\\limits_{x\\to 2^+}f(x)=\\lim\\limits_{x\\to 2^+}\\dfrac{x+3}{x-2}=+\\infty$ vì $\\lim\\limits_{x\\to 2^+}(x+3)=5&gt;0 \\text{ và } \\lim\\limits_{x\\to 2^+}(x-2)=0 \\text{ và } x-2&gt;0 \\ (\\text{vì} \\ x\\to 2^+ \\Rightarrow x&gt;2).$<br>  Suy ra $x=2$ là tiệm cận đứng của đồ thị hàm số.<br>- Thay $x=0$ vào hàm số $y=\\dfrac{x+3}{x-2}$ ta có  \\[y=\\dfrac{0+3}{0-2}=-\\dfrac{3}{2}.\\]  Suy ra đồ thị hàm số cắt trục tung tại điểm $A\\left(0;-\\dfrac{3}{2}\\right)$.<br>- Do hàm số đồng biển trên $[-2;1]$ nên giá trị lớn nhất của hàm số trên đoạn $[-2;1]$ là  \\[y(1)=\\dfrac{1+3}{1-2}=-4.\\]"
  },
  {
    "id": "2D132DS16",
    "question": "Cho hàm số $f(x) = -x^3 + 3x^2 + 2$.",
    "subQuestions": [
      {
        "text": "Khoảng cách giữa hai điểm cực trị của đồ thị hàm số là $\\sqrt{5}$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số $y = f(x) = -x^3 + 3x^2 + 2$ trên đoạn $\\left[-2;1\\right]$ bằng $2$",
        "answer": true
      },
      {
        "text": "Điểm cực tiểu của hàm số là $x = 2$",
        "answer": false
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(0;2)$",
        "answer": true
      }
    ],
    "explain": "Ta có $f'(x)=-3x^2+6x$; $f'(x)=0\\Leftrightarrow x=0\\in [-2;1] \\text{ hoặc } x=2\\notin [-2;1].$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_092.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, hàm số đạt cực trị tại $A(0;2)$, $B(2;6)$.<br>- Ta có $AB=\\sqrt{(2-0)^2+(6-2)^2}=2\\sqrt{5}$.<br>- Ta có $f(-2) = 22$; $f(0)= 2$; $f(1)= 4$.<br>  Vậy $\\min\\limits_{[-2;1]} f(x)=2$ tại $x=0$.<br>- Dựa vào bảng biến thiên, hàm số đạt cực tiểu tại $x=0$.<br>- Dựa vào bảng biến thiên, hàm số đồng biến trên khoảng $(0;2)$."
  },
  {
    "id": "2D131DS17",
    "question": "Người ta bơm xăng vào bình xăng của một xe ô tô, biết rằng thể tích $V$\\,(lít) của lượng xăng trong bình xăng được tính theo thời gian bơm xăng $t$\\,(phút) được cho bởi công thức  \\[V(t)=300\\left(t^2-t^3\\right)+4\\text{ với }0\\le t\\le0{,}5.\\]  Gọi $V'(t)$ là tốc độ tăng thể tích tại thời điểm $t$, với $0\\le t\\le0{,}5$.",
    "subQuestions": [
      {
        "text": "Lượng xăng ban đầu trong bình là $1$\\,lít",
        "answer": false
      },
      {
        "text": "$V'(t)=300\\left(2t-3t^2\\right)+4$, với $0\\le t\\le0{,}5$",
        "answer": false
      },
      {
        "text": "Xăng chảy vào bình xăng vào thời điểm ở giây thứ $30$ có tốc độ tăng thể tích là lớn nhất",
        "answer": false
      },
      {
        "text": "Lượng xăng lớn nhất bơm vào bình xăng là $41{,}5$\\,lít",
        "answer": true
      }
    ],
    "explain": "<br>- Lượng xăng ban đầu trong bình là $V(0)=4$\\,lít.<br>- Ta có $V'(t)=300\\left(2t-3t^2\\right)$, với $0\\le t\\le0{,}5$.<br>- Ta có $V''(t)=300(2-6t)$, $V''(t)=0\\Leftrightarrow t=\\dfrac{1}{6}$.<br>  Bảng biến thiên của $V'(t)$ như hình vẽ  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_094.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy tại thời điểm $t=\\dfrac{1}{6}$\\,(phút)$=10$\\,(giây) thì tốc độ tăng thể tích là lớn nhất.<br>- Ta có $V'(t)=300t(2-3t)&gt;0$, $\\forall t\\in[0;0{,}5]$ nên $V(t)$ đồng biến trên đoạn $[0;0{,}5]$.<br>  Suy ra lượng xăng lớn nhất bơm vào bình xăng là $V(0{,}5)=41{,}5$\\,lít."
  },
  {
    "id": "2D132DS18",
    "question": "Xét hàm số $y=f(x)=\\dfrac{x^2+x-1}{x-1}$ trên nửa khoảng $(1; 4]$.",
    "subQuestions": [
      {
        "text": "$f\\left(\\dfrac{1}{2}\\right) &lt; f\\left(\\dfrac{3}{2}\\right) &lt; f\\left(\\dfrac{5}{2}\\right)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt giá trị nhỏ nhất tại điểm $x=2$",
        "answer": true
      },
      {
        "text": "Hàm số đạt giá trị lớn nhất tại điểm $x=4$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên nửa khoàng ($1; 4]$ bằng $5$",
        "answer": true
      }
    ],
    "explain": "<br>- {\\bf Sai} <br>  Ta có $f\\left(\\dfrac{1}{2}\\right)=\\dfrac{1}{2}=0{,}5$; $f\\left(\\dfrac{3}{2}\\right)=\\dfrac{11}{2}=5{,}5$; $f\\left(\\dfrac{5}{2}\\right)=\\dfrac{31}{6}\\approx 5{,}5$.<br>  Do đó $f\\left(\\dfrac{1}{2}\\right) &lt; f\\left(\\dfrac{5}{2}\\right) &lt; f\\left(\\dfrac{3}{2}\\right)$.<br>- {\\bf Đúng}<br>  $y'=\\dfrac{x^2-2x}{(x-1)^2},\\forall x\\neq 1$; $y'=0\\Leftrightarrow x^2-2x=0\\Leftrightarrow x=0 \\text{ hoặc } x=2.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_103.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên trên nừa khoảng $(1; 4]$, ta thấy hàm số đạt giá trị nhỏ nhất tại điểm $x=2$.<br>- {\\bf Sai} <br>  Dựa vào bảng biến thiên trên nừa khoảng $(1; 4]$, ta thấy hàm số không đạt giá trị lớn nhất tại điểm $x=4$.<br>- {\\bf Đúng} <br>  Dựa vào bảng biến thiên trên nừa khoảng $(1; 4]$, ta thấy giá trị nhỏ nhất của hàm số là $5$."
  },
  {
    "id": "2D131DS19",
    "question": "Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R}$ và có bảng biến thiên như hình vẽ  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_106.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên khoảng $(7;+\\infty)$",
        "answer": true
      },
      {
        "text": "$f(2)&lt;f(3)$",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực tiểu tại điểm $x=3$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên $[5;8]$ bằng $-18$",
        "answer": true
      }
    ],
    "explain": "<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Từ bảng biến thiên, ta thấy hàm số đồng biến trên khoảng $(1;3)$ và $(7;+\\infty)$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Do hàm số đồng biến trên khoảng $(1;3)$ nên $2&lt;3$ thì $f(2)&lt;f(3)$.<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Từ bảng biến thiên, ta có hàm số đạt cực đại tại $x=3$.<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Trên đoạn $[5;8]$, giá trị nhỏ nhất của hàm số là $-18$, đạt tại $x=7$."
  },
  {
    "id": "2D136DS20",
    "question": "Một chất điểm chuyển động trên đường thẳng có quãng đường đi được $s$ (tính bằng mét) theo thời gian $t$ (tính bằng giây) được biểu thị bởi công thức $s(t)=4t-\\ln(1+t)$, $t\\geq 0$.",
    "subQuestions": [
      {
        "text": "Sau 5 giây, quãng đường di chuyển của chất điểm là $s=20$ (mét)",
        "answer": false
      },
      {
        "text": "Vận tốc tức thời tại thời điểm $t$ của chất điểm là $v(t)=1+s'(t)$",
        "answer": false
      },
      {
        "text": "Vận tốc tức thời tại thời điểm $t=2$ giây là $v(2)=\\dfrac{11}{3}$ (m/s)",
        "answer": true
      },
      {
        "text": "Vận tốc luôn giảm theo thời gian",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $s(5)=20-\\ln 6$.<br>- Ta có $v(t)=s'(t)=4-\\dfrac{1}{1+t}$.<br>- Vận tốc tức thời tại thời điểm $t=2$ là $v(2)=4-\\dfrac{1}{1+2}=\\dfrac{11}{3}$ (m/s).<br>- Ta có $v'(t)=\\dfrac{1}{(1+t)^2}&gt;0,~\\forall t&gt;0$. Vậy hàm $v(t)$ là hàm đồng biến trên $(0;+\\infty)$ nên vận tốc của chất điểm tăng theo thời gian."
  },
  {
    "id": "2D136DS21",
    "question": "Công ty $X$ chuyên sản xuất một loại sản phẩm, bộ phận sản xuất ước tính rằng với $q$ sản phẩm được sản xuất trong một tháng thì tổng chi phí sẽ là $C(q)=8q^2+40 q+1300$ (nghìn đồng) và mỗi sản phẩm công ty bán với giá $P(q)=1400-2q$ (nghìn đồng).",
    "subQuestions": [
      {
        "text": "Chi phí mỗi tháng công ty phải bỏ ra để sản xuất $50$ sản phẩm là $23400$ (nghìn đồng)",
        "answer": false
      },
      {
        "text": "Lợi nhuận bán được $q$ sản phẩm là $F(q)=-10q^2+1360q-1300$ (nghìn đồng)",
        "answer": true
      },
      {
        "text": "Lợi nhuận cao nhất trong một tháng của công ty là hơn $44000$ (nghìn đồng)",
        "answer": true
      },
      {
        "text": "Nếu số lượng sản phẩm bán ra trong một tháng nằm trong khoảng từ $60$ đến $70$ thì lợi nhuận sẽ được ước tính trong khoảng $44200$ đến $44840$ (nghìn đồng)",
        "answer": false
      }
    ],
    "explain": "<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Chi phí mỗi tháng công ty phải bỏ ra để sản xuất $50$ sản phẩm là  \\[C(50)=8\\cdot 50^2+40\\cdot 50+1300=23300\\, (\\text{nghìn đồng}).\\]<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Doanh thu khi bán $q$ sản phẩm là   \\[R(q)=q\\cdot P(q)=q\\cdot (1400-2q)=1400-2q^2.\\]  Lợi nhuận khi bán được $q$ sản phẩm là   $F(q)=R(q)-C(q) =(1400-2q^2)-(8q^2+40 q+1300)$<br>$=-10q^2+1360q-1300\\, (\\text{nghìn đồng}).$<br>- &lt;strong&gt;Đúng&lt;/strong&gt;.<br>  Ta có $F(q)$ là hàm số bậc hai có hệ số $a=-10&lt;0$ nên đạt giá trị lớn nhất tại \\[q=-\\dfrac{b}{2a}=-\\dfrac{1360}{2\\cdot (-10)}=68.\\]  Khi đó $F(68)=-10\\cdot 68^2+1360\\cdot 68-1300=44940$\\,(nghìn đồng).<br>- &lt;strong&gt;Sai&lt;/strong&gt;.<br>  Với $q=60$ ta có $F(60)=-10\\cdot 60^2+1360\\cdot 60-1300=44300$\\,(nghìn đồng).<br>  Với $q=60$ ta có $F(70)=-10\\cdot 70^2+1360\\cdot 70-1300=44900$\\,(nghìn đồng).<br>  Vậy nếu số lượng sản phẩm bán ra trong một tháng nằm trong khoảng từ $60$ đến $70$ thì lợi nhuận sẽ được ước tính trong khoảng $44300$ đến $44900$\\,(nghìn đồng)."
  },
  {
    "id": "2D132DS22",
    "question": "Cho hàm số $f(x)=\\sin2x-x$.",
    "subQuestions": [
      {
        "text": "$f(0)=0;f\\left(\\dfrac{\\pi }{2}\\right)=-\\dfrac{\\pi }{2}$",
        "answer": true
      },
      {
        "text": "Đạo hàm của hàm số đã cho là $f'(x)=\\cos2x-1$",
        "answer": false
      },
      {
        "text": "Nghiệm của phương trình $f'(x)=0$ trên đoạn $\\left[0;\\dfrac{\\pi }{2}\\right]$ là $\\dfrac{\\pi }{6}$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của $f(x)$ trên đoạn $\\left[0;\\dfrac{\\pi }{2}\\right]$ là $\\dfrac{\\sqrt{3}}{2}-\\dfrac{\\pi }{6}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $f(0)=\\sin0-0=0$; $f\\left(\\dfrac{\\pi }{2}\\right)=\\sin\\pi -\\dfrac{\\pi }{2}=-\\dfrac{\\pi }{2}$.<br>- Ta có $f'(x)=(\\sin2x)'-x'=2\\cos2x-1$.<br>- $f'(x)=0\\Rightarrow \\cos2x=\\dfrac{1}{2}\\Rightarrow x=\\pm \\dfrac{\\pi }{6}+k\\pi $.<br>  Do đó, nghiệm của phương trình $f'(x)=0$ trên đoạn $\\left[0;\\dfrac{\\pi }{2}\\right]$ là $\\dfrac{\\pi }{6}$.<br>- Ta có $f(0)=0$; $f\\left(\\dfrac{\\pi }{2}\\right)=-\\dfrac{\\pi }{2}$; $f\\left(\\dfrac{\\pi }{6}\\right)=\\dfrac{\\sqrt{3}}{2}-\\dfrac{\\pi }{6}$.<br>  Do đó, giá trị lớn nhất của $f(x)$ trên đoạn $\\left[0;\\dfrac{\\pi }{2}\\right]$ là $\\dfrac{\\sqrt{3}}{2}-\\dfrac{\\pi }{6}$."
  },
  {
    "id": "2D131DS20",
    "question": "Cho hàm số $y=f(x)=ax^3+bx^2+cx+d$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D13/loc8_TT_KSCL_Cum_lien_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét tính đúng sai của các khẳng định sau",
    "subQuestions": [
      {
        "text": "Hàm số có hệ số $a&lt;0$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đi qua hai điểm $(1;2)$, $(3;4)$",
        "answer": true
      },
      {
        "text": "$f'(x)=0$ tại các giá trị $x=2$, $x=4$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên $[2;4]$ bằng $\\dfrac{7}{2}$",
        "answer": false
      }
    ],
    "explain": "<br>- Từ bảng biến thiên, ta có $\\displaystyle \\lim_{x \\to +\\infty} f(x)=-\\infty \\Rightarrow a &lt; 0$.<br>- Đồ thị hàm số có hai điểm cực trị $A(1;2)$ và $B(3;4)$ nên đi qua hai điểm $(1;2)$ và $(3;4)$.<br>- Dựa vào bảng biến thiên, ta thấy $f'(x)=0 \\Leftrightarrow x=1 \\text{ hoặc } x=3.$<br>- Ta có $y'=f'(x)=3ax^2+2bx+c$. <br>  Vì đồ thị hàm số có hai điểm cực trị $A(1;2)$ và $B(3;4)$ nên  $f'(1)=0 \\text{ và } f(1)=2 \\text{ và } f'(3)=0 \\text{ và } f(3)=4 \\Leftrightarrow 3a+2b+c=0 \\text{ và } a+b+c+d=2 \\text{ và } 27a+6b+c=0 \\text{ và } 27a+9b+3c+d=4 \\Leftrightarrow a=-\\dfrac{1}{2} \\text{ và } b=3 \\text{ và } c=-\\dfrac{9}{2} \\text{ và } d=4.$  $\\Rightarrow f(x)=-\\dfrac{1}{2}x^3+3x^2-\\dfrac{9}{2}x+4$. <br>  Trên đoạn $[2;4]$, ta tính được $f(2)=3$, $f(3)=4$, $f(4)=2$. <br>  $\\Rightarrow \\displaystyle \\min_{[2;4]} f(x)=2$."
  },
  {
    "id": "2D136DS2",
    "question": "Lợi nhuận thu được $P$ (nghìn USD) của một công ty khi dùng số tiền $x$ (nghìn USD) chi cho quảng cáo được cho bởi công thức $P(x) = -\\dfrac{1}{10}x^3 + 6x^2 + 400$ với $x \\ge 0$.",
    "subQuestions": [
      {
        "text": "Lợi nhuận của công ty tăng khi số tiền chi cho quảng cáo tăng",
        "answer": false
      },
      {
        "text": "Có hai phương án giúp công ty có thể thu được lợi nhuận bằng $800$ nghìn USD",
        "answer": true
      },
      {
        "text": "Hàm số $P = P(x)$ có hai điểm cực trị",
        "answer": false
      },
      {
        "text": "Lợi nhuận tối đa mà công ty thu được bằng $3{,}6$ triệu USD",
        "answer": true
      }
    ],
    "explain": "Ta có $P'(x) = -\\dfrac{3}{10}x^2 + 12x=0 \\Leftrightarrow x=0 \\text{ hoặc } x=40.$<br>  Ta có bảng biến thiên:  <br><img src=\"data/12/2D1/im2D13/loc8_TT_KSCL_THPT_Le__004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Khi $x &gt; 40$ thì lợi nhuận giảm.<br>- Xét phương trình $P(x)=800 \\Leftrightarrow -\\dfrac{1}{10}x^3 + 6x^2 + 400=800 \\Leftrightarrow x\\approx 58{,}84 \\text{ hoặc } x \\approx 8{,}84.$<br>  Vậy có $2$ phương án giúp công ty có thể thu được lợi nhuận bằng $800$ nghìn USD.<br>- Dựa vào bảng biến thiên ở trên, ta thấy hàm số $P=P(x)$ có $1$ điểm cực trị.<br>- Dựa vào bảng biến thiên, $\\max\\limits_{[0;+\\infty)} P(x) = P(40) = 3600$ (nghìn USD) $= 3{,}6$ (triệu USD)."
  },
  {
    "id": "2D132DS23",
    "question": "Bạn An làm đèn lồng bằng cách dùng một sợi dây đồng dài $28$ dm cắt thành ba đoạn để uốn làm khung đèn. Đoạn thứ nhất uốn thành hình vuông $ABCD$ có cạnh bằng $x$ (dm) để làm đáy, hai đoạn còn lại có độ dài bằng nhau uốn thành các đường gấp khúc $ASC$ và $BSD$. Khung đèn sau khi hoàn thiện có hình dạng là một hình chóp tứ giác đều $S.ABCD$ và bề mặt ngoài của đèn được dán giấy màu để trang trí, không dán mặt đáy (<em>xem các mối nối, dán là không đáng kể</em>).",
    "subQuestions": [
      {
        "text": "Độ dài cạnh bên của khung đèn bằng $(7 - x)$ dm với $0 &lt; x &lt; 7$",
        "answer": true
      },
      {
        "text": "Khi $x = 4$ thì độ dài đường cao của khung đèn là $1$ dm",
        "answer": true
      },
      {
        "text": "Khi các cạnh bằng nhau thì diện tích giấy màu cần dùng là $14\\sqrt{3}$ dm$^2$",
        "answer": false
      },
      {
        "text": "Thể tích phần không gian của đèn lồng lớn nhất khi $x \\approx 3{,}25$ dm",
        "answer": true
      }
    ],
    "explain": "<br><div style=\"display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:12px;margin:8px auto;\"><img src=\"data/12/2D1/im2D13/loc8_TT_KSCL_THPT_Le__006.png\" alt=\"hinh ve\" style=\"max-width:min(260px,44%);max-height:240px;width:auto;height:auto;\"><img src=\"data/12/2D1/im2D13/loc8_TT_KSCL_THPT_Le__007.png\" alt=\"hinh ve\" style=\"max-width:min(260px,44%);max-height:240px;width:auto;height:auto;\"></div>  Khối chóp tứ giác đều có $4$ cạnh đáy bằng $x$ và $4$ cạnh bên bằng $l$. <br>  Tổng chiều dài dây: $4x + 4l = 28 \\Rightarrow l = 7 - x$. <br>  Chiều cao khối chóp: $h = \\sqrt{l^2 - \\left(\\dfrac{x\\sqrt{2}}{2}\\right)^2} = \\sqrt{(7-x)^2 - \\dfrac{x^2}{2}}$.  <br>- Do $l = 7 - x &gt; 0 \\Rightarrow 0 &lt; x &lt; 7$.<br>- Thay $x = 4 \\Rightarrow h = \\sqrt{3^2 - \\dfrac{4^2}{2}} = 1$ dm.<br>- Vì các cạnh bằng nhau nên $x = 7 - x \\Leftrightarrow x = 3{,}5$. <br>  Diện tích giấy dán ($4$ mặt bên) là $S = 4 \\cdot \\dfrac{x^2\\sqrt{3}}{4} =\\dfrac{49\\sqrt{3}}{4}$ (dm$^2$).<br>- Thể tích đèn: $V = \\dfrac{1}{3}x^2\\sqrt{(7-x)^2 - \\dfrac{x^2}{2}} = \\dfrac{1}{3}\\sqrt{\\dfrac{x^6}{2} - 14x^5 + 49x^4}$. <br>  Xét hàm số $f(x) = \\dfrac{1}{2}x^6 - 14x^5 + 49x^4$ trên $(0;7)$. <br>  Ta có $f'(x) = x^3(3x^2 - 70x + 196) = 0 \\Rightarrow x= \\dfrac{35 - \\sqrt{637}}{3} \\approx 3{,}25 \\in (0;7)$. <br>  <br><img src=\"data/12/2D1/im2D13/loc8_TT_KSCL_THPT_Le__008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên, ta thấy $V$ đạt giá trị lớn nhất tại $x \\approx 3{,}25$ dm."
  },
  {
    "id": "2D136DS22",
    "question": "Nhà ông $A$ cần làm một bể chứa nước có dạng khối hộp chữ nhật không nắp, có đáy là hình chữ nhật và chiều dài gấp ba lần chiều rộng, khối hộp tương ứng có thể tích bằng $1\\,152$ (dm$^3$). Giả sử bề dày của thành bể và đáy bể là không đáng kể. Giá thuê công nhân để làm bể là $400\\,000$ (đồng/m$^2$). Gọi $x$ là chiều rộng của đáy bể ($x$ là số dương và có đơn vị là dm).",
    "subQuestions": [
      {
        "text": "Chiều cao của bể nước là $\\dfrac{384}{x^2}$ (dm)",
        "answer": true
      },
      {
        "text": "Diện tích xung quanh của bể chứa nước là $\\dfrac{3\\,072}{x}$ (dm$^2$)",
        "answer": true
      },
      {
        "text": "Tổng diện tích cần làm của bể chứa nước là $\\dfrac{3\\,072}{x}+6x^2$ (dm$^2$)",
        "answer": false
      },
      {
        "text": "Chi phí thấp nhất mà ông $A$ trả cho công nhân làm bể nước theo yêu cầu là $3\\,072\\,000$ (đồng)",
        "answer": false
      }
    ],
    "explain": "<br>- Theo bài ra, ta có chiều dài của đáy bể nước là $3x$. <br> Gọi $h$ là chiều cao của bể nước (đơn vị dm), điều kiện $h&gt;0$. <br> Theo giả thiết, ta có thể tích của bể nước là $1\\,152$ (dm$^3$) hay $x \\cdot 3x \\cdot h = 1\\,152 \\Rightarrow h= \\dfrac{384}{x^2}$. <br>  Vậy chiều cao của bể là $\\dfrac{384}{x^2}$ (dm).<br>- Diện tích xung quanh của bể chứa nước là $2 \\cdot (x+3x) \\cdot \\dfrac{384}{x^2}=\\dfrac{3\\,072}{x}$ (dm$^2$).<br>- Vậy, tổng diện tích cần làm của bể chứa nước là $S(x)=\\dfrac{3\\,072}{x}+3x^2$ (dm$^2$).<br>- Ta có $S'(x) = \\dfrac{-3\\,072+6x^3}{x^2}$. <br>  $S'(x)=0 \\Rightarrow x=8$.  <br><img src=\"data/12/2D1/im2D13/loc8_TT_QV1_TT1_LVT_B_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> Từ bảng biến thiên, ta suy ra $\\min\\limits_{(0; +\\infty)} S(x)=S(8)=576$ (dm$^2$) $=5{,}76$ (m$^2$). <br> Chi phí thấp nhất là $5{,}76 \\cdot 400\\,000=2\\,304\\,000$ (đồng)."
  },
  {
    "id": "2D131DS5",
    "question": "Cho hàm số $y = \\left(9-x^2\\right)^{\\tfrac{1}{3}} + \\ln(1-x)$.",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số là $(-\\infty;1)$",
        "answer": false
      },
      {
        "text": "Hàm số có đạo hàm $y' = \\dfrac{1}{3\\sqrt[3]{\\left(9-x^2\\right)^2}} - \\dfrac{1}{1-x}$",
        "answer": false
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(0;1)$",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên đoạn $\\left[\\dfrac{1}{4};\\dfrac{1}{2}\\right]$ bằng $\\dfrac{1}{2}\\sqrt[3]{70} - \\ln 2$",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số xác định khi và chỉ khi $9-x^2&gt;0 \\text{ và } 1-x&gt;0\\Leftrightarrow -3&lt;x&lt;3 \\text{ và } x&lt;1\\Leftrightarrow -3&lt;x&lt;1$.<br>  Vậy tập xác định của hàm số là $\\mathscr{D}=(-3;1)$.<br>- Ta có  $y = \\left(9-x^2\\right)^{\\tfrac{1}{3}} + \\ln(1-x)$<br>$\\Rightarrow y' = \\dfrac{1}{3}\\left(9-x^2\\right)^{-\\tfrac{2}{3}}\\cdot \\left(9-x^2\\right)'+\\dfrac{(1-x)'}{1-x}$<br>$= \\dfrac{-2x}{3\\sqrt[3]{\\left(9-x^2\\right)^2}}- \\dfrac{1}{1-x}.$<br>- Vì $y'= \\dfrac{-2x}{3\\sqrt[3]{\\left(9-x^2\\right)^2}}- \\dfrac{1}{1-x}$ nên với mọi $x\\in (0;1)$, ta có  \\[\\dfrac{-2x}{3\\sqrt[3]{\\left(9-x^2\\right)^2}}&lt;0 \\text{ và } -\\dfrac{1}{1-x}&lt;0\\Rightarrow y'&lt;0\\; \\forall x\\in (0;1).\\]  Vậy hàm số đã cho nghịch biến trên khoảng $(0;1)$.<br>- Vì $\\left[\\dfrac{1}{4};\\dfrac{1}{2}\\right]\\subset (0;1)$ nên hàm số đã cho nghịch biến trên $\\left[\\dfrac{1}{4};\\dfrac{1}{2}\\right]$.<br>  Vậy $\\min\\limits_{\\left[\\tfrac{1}{4};\\tfrac{1}{2}\\right]}y=y\\left(\\dfrac{1}{2}\\right)=\\dfrac{1}{2}\\sqrt[3]{70} - \\ln 2$."
  },
  {
    "id": "2D136DS6",
    "question": "Một công ty robotics thử nghiệm một xe tự hành giao hàng chuyển động thẳng trên đoạn đường thí nghiệm. Quãng đường $s(t)$ (mét) mà xe đã đi được tính từ lúc bắt đầu chuyển động tới thời điểm $t$ (giây) được mô tả bởi công thức $s(t)=-\\dfrac{1}{3}t^3+4t^2+9t$.",
    "subQuestions": [
      {
        "text": "Trong khoảng thời gian $8$ giây kể từ lúc bắt đầu chuyển động, vận tốc lớn nhất của xe là $26$ (m/s)",
        "answer": false
      },
      {
        "text": "Vận tốc của xe tại thời điểm $t=3$ giây là $21$ (m/s)",
        "answer": false
      },
      {
        "text": "Quãng đường mà xe đi được trong $8$ giây đầu (làm tròn đến hàng đơn vị) là $157$ mét",
        "answer": true
      },
      {
        "text": "Trong khoảng thời gian $t \\in [0;10]$ (giây), có thời điểm xe dừng lại",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số biểu diễn vận tốc của xe là $v(t)=s'(t)=-t^2+8t+9$.<br>  Ta có $v'(t)=-2t+8$; $v'(t)=0 \\Leftrightarrow t=4$.<br>  Xét hàm số $v(t)$ trên đoạn $[0;8]$ ta có $v(0) = 9$; $v(4) = 25$; $v(8) = 9$.<br>  Suy ra vận tốc lớn nhất của xe là $25$ (m/s) tại thời điểm $t = 4$ (giây).<br>- Tại thời điểm $t=3$ (giây) thì $v(3) = -3^2+8\\cdot 3+9 = 24$ (m/s).<br>- Quãng đường mà xe đi được trong $8$ giây đầu là  \\[  s(8) = -\\dfrac{1}{3} \\cdot 8^3+4 \\cdot 8^2+9 \\cdot 8 = \\dfrac{472}{3} \\approx 157 \\ \\text{mét}.  \\]<br>- Khi xe dừng lại, ta có $v(t)=0 \\Leftrightarrow -t^2+8t+9=0 \\Leftrightarrow t=9$ hoặc $t=-1$ (loại).<br>  Thời điểm $t=9$ giây thuộc khoảng $[0;10]$.<br>  Vậy xe dừng lại vào thời điểm $9$ (giây)."
  }
];
