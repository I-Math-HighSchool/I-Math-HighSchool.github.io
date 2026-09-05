// =========================================================================
// KHỐI DỮ LIỆU: 2D14 - Trắc nghiệm
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem2D14 = [
  {
    "id": "2D141TN1",
    "question": "Cho hàm số $y = f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Đồ thị của hàm số đã cho có mấy đường tiệm cận?",
    "options": [
      "$4$",
      "$3$",
      "$1$",
      "$2$"
    ],
    "answer": 3,
    "explain": "Có $\\lim\\limits_{x \\to \\pm \\infty} y=4$ nên $y=4$ là đường tiệm cận ngang.<br>  Có $\\lim\\limits_{x \\to 2^{+}} y=-\\infty$ nên $x=2$ là đường tiệm cận đứng.<br>  Vậy đồ thị của hàm số đã cho có $2$ đường tiệm cận."
  },
  {
    "id": "2D143TN2",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tổng số đường tiệm cận của đồ thị hàm số đã cho là",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    "answer": 2,
    "explain": "Từ bảng biến thiên  <br>- Ta có $\\lim\\limits_{x\\to -3^-}f(x)=+\\infty$; $\\lim\\limits_{x\\to 3^-}f(x)=+\\infty$ suy ra đồ thị hàm số có $2$ tiệm cận đứng là các đường thẳng $x=-3$ và $x=3$.<br>- Có $\\lim\\limits_{x\\to -\\infty}f(x)=0$ nên đồ thị hàm số có tiệm cận ngang $y=0$.  Vậy đồ thị hàm số có $3$ đường tiệm cận."
  },
  {
    "id": "2D141TN3",
    "question": "Trong các khẳng định sau, khẳng định nào đúng?",
    "options": [
      "Nếu $\\lim \\limits_{x\\to a^-}f(x)=-\\infty$ thì $x=-a$ là đường tiệm cận đứng của đồ thị hàm số $y=f(x)$",
      "Nếu $\\lim \\limits_{x\\to -\\infty}f(x)=b$ thì $y=-b$ là đường tiệm cận ngang của đồ thị hàm số $y=f(x)$",
      "Nếu $\\lim \\limits_{x\\to +\\infty}f(x)=-\\infty$ thì đồ thị hàm số $y=f(x)$ không có tiệm cận ngang",
      "Nếu $\\lim \\limits_{x\\to a^-}f(x)=+\\infty$ thì $x=a$ là đường tiệm cận đứng của đồ thị hàm số $y=f(x)$"
    ],
    "answer": 3,
    "explain": "$\\lim \\limits_{x\\to a^-}f(x)=+\\infty$ thì $x=a$ là đường tiệm cận đứng của đồ thị hàm số $y=f(x)$"
  },
  {
    "id": "2D141TN4",
    "question": "Tâm đối xứng của đồ thị hàm số $y=\\dfrac{2 x-1}{x+1}$ có tọa độ là",
    "options": [
      "$(-1 ; 2)$",
      "$(-1 ; 0)$",
      "$(0 ; 1)$",
      "$(2 ;-1)$"
    ],
    "answer": 0,
    "explain": "Đồ thị hàm số $y=\\dfrac{2 x-1}{x+1}$ có tiệm cận đứng $x=-1$ và tiệm cận ngang $y=2$ nên có tâm đối xứng là $I(-1;2)$."
  },
  {
    "id": "2D141TN5",
    "question": "Tiệm cận xiên của đồ thị hàm số $y=\\dfrac{2 x^2+15 x-16}{x+5}$ là",
    "options": [
      "$y=x+5$",
      "$y=2 x-5$",
      "$y=2 x+5$",
      "$y=x-5$"
    ],
    "answer": 2,
    "explain": "Hàm số viết thành $y=2x+5 -\\dfrac{41}{x+5}$.<br>  Ta có  $\\lim\\limits_{x \\to \\pm\\infty} [y-(2x+5)]  = \\lim\\limits_{x \\to \\pm\\infty} \\left(-\\dfrac{41}{x+5}\\right) = 0$.<br>  Do đó, tiệm cận xiên của đồ thị hàm số $y=\\dfrac{2 x^2+15 x-16}{x+5}$ là $y=2 x+5$."
  },
  {
    "id": "2D143TN6",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Đường tiệm cận đứng của đồ thị hàm số đã cho có phương trình là",
    "options": [
      "$x=0$",
      "$y=0$",
      "$y=2$",
      "$x=2$"
    ],
    "answer": 0,
    "explain": "Dựa vào bảng biến thiên ta có $ \\lim \\limits_{x \\to 0^+} y=+\\infty $ nên $ x=0 $ là tiệm cận đứng của đồ thị hàm số."
  },
  {
    "id": "2D141TN7",
    "question": "Đường tiệm cận xiên của đồ thị hàm số $y=x+1-\\dfrac{5}{x-2}$ có phương trình là",
    "options": [
      "$y=x+1$",
      "$y=x$",
      "$y=x-2$",
      "$y=x-5$"
    ],
    "answer": 0,
    "explain": "Ta có $ \\lim \\limits_{x \\to -\\infty } \\left[y-(x+1)\\right] =0$ nên $ y=x+1 $ là tiệm cận xiên của đồ thị hàm số."
  },
  {
    "id": "2D141TN8",
    "question": "Cho hàm số $y=\\dfrac{ax+b}{cx+d},\\,(a, b, c, d \\in \\mathbb{R}$, $c \\neq 0$, $a d-b c \\neq 0)$ có đồ thị là đường cong trong hình bên. Tiệm cận ngang của đồ thị hàm số đã cho có phương trình là<br><img src=\"data/12/2D1/im2D1/2D14_tikz_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$x=-1$",
      "$y=-1$",
      "$y=1$",
      "$x=1$"
    ],
    "answer": 2,
    "explain": "Tiệm cận ngang của đồ thị hàm số đã cho có phương trình là $y=1$."
  },
  {
    "id": "2D143TN9",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như hình vẽ sau  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Đường tiệm cận ngang của đồ thị hàm số đã cho là",
    "options": [
      "$x = 3$",
      "$x = -3$",
      "$y = 3$",
      "$y = -3$"
    ],
    "answer": 2,
    "explain": "Ta có $\\lim\\limits_{x \\to -\\infty} f(x) = 3$ và $\\lim\\limits_{x \\to +\\infty} f(x) = -\\infty$.<br>  Do đó đồ thị hàm số có một đường tiệm cận ngang là $y = 3$."
  },
  {
    "id": "2D141TN10",
    "question": "Đồ thị hàm số $y=\\dfrac{1-3 x}{x+2}$ có các đường tiệm cận đứng và tiệm cận ngang lần lượt là",
    "options": [
      "$x=-2$ và $y=1$",
      "$x=-2$ và $y=-3$",
      "$x=-2$ và $y=3$",
      "$x=2$ và $y=1$"
    ],
    "answer": 1,
    "explain": "Ta có $\\displaystyle\\lim_{x\\rightarrow + \\infty}\\dfrac{1-3x}{x+2} = \\lim\\limits_{x\\rightarrow + \\infty}\\dfrac{ \\dfrac{1}{x}-3}{1+\\dfrac{2}{x}} = - 3$ và $\\displaystyle\\lim_{x\\rightarrow - \\infty}\\dfrac{1-3x}{x+2} = \\lim\\limits_{x\\rightarrow - \\infty}\\dfrac{ \\dfrac{1}{x}-3}{1+\\dfrac{2}{x}} = - 3$ nên đường thẳng $y = -3$ là tiệm cận ngang của đồ thị hàm số. <br>  Ta có $\\displaystyle\\lim_{x\\rightarrow -2^{-}}\\dfrac{1-3x}{x+2} = - \\infty$ và   $\\displaystyle\\lim_{x\\rightarrow -2^{+}}\\dfrac{1-3x}{x+2} = + \\infty$ nên đường thẳng $x = -2$ là tiệm cận đứng của đồ thị hàm số."
  },
  {
    "id": "2D141TN11",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Khẳng định nào sau đây là đúng?",
    "options": [
      "Đồ thị hàm số có hai đường tiệm cận ngang",
      "Đồ thị hàm số có tiệm cận đứng $x=1$, tiệm cận ngang $y=-1$",
      "Đồ thị hàm số có tiệm cận đứng $x=-1$, tiệm cận ngang $y=1$",
      "Đồ thị hàm số có hai đường tiệm cận đứng"
    ],
    "answer": 1,
    "explain": "Dựa vào bảng biến thiên ta thấy đồ thị hàm số có tiệm cận đứng $x=1$ và tiệm cận ngang $y=-1$."
  },
  {
    "id": "2D141TN12",
    "question": "Cho hàm số $y=\\dfrac{x^2-2x+6}{x+1}$.",
    "options": [
      "Đồ thị hàm số có một tiệm cận xiên là $y=x+1$",
      "Đồ thị hàm số có một tiệm cận xiên là $y=x-3$",
      "Đồ thị hàm số không có tiệm cận xiên",
      "Đồ thị hàm số có một tiệm cận xiên là $y=x+3$"
    ],
    "answer": 1,
    "explain": "Ta có $y=\\dfrac{x^2-2x+6}{x+1}=x-3 +\\dfrac{3}{x+1}$ nên đồ thị hàm số có một tiệm cận xiên là đường thẳng $y=x-3$."
  },
  {
    "id": "2D141TN13",
    "question": "Cho hàm số $y=2x-3+\\dfrac{1}{x-1}$, tiệm cận xiên của đồ thị hàm số có phương trình",
    "options": [
      "$y=2x-3$",
      "$y=2x+1$",
      "$x=1$",
      "$y=2x$"
    ],
    "answer": 0,
    "explain": "Ta có, $\\lim\\limits_{x\\to \\pm \\infty}\\left[y-(2x-3)\\right]=\\lim\\limits_{x\\to \\pm \\infty}\\left(\\dfrac{1}{x-1}\\right)=0$.<br>  Do đó $y=2x-3$ là tiệm cận xiên của đồ thị hàm số."
  },
  {
    "id": "2D141TN14",
    "question": "Tiệm cận đứng của đồ thị hàm số $y = \\dfrac{3x + 1}{x - 2}$ là đường thẳng có phương trình",
    "options": [
      "$x = 3$",
      "$x = 2$",
      "$y = 3$",
      "$y = 2$"
    ],
    "answer": 1,
    "explain": "Tiệm cận đứng là $x = 2$."
  },
  {
    "id": "2D141TN15",
    "question": "Tổng số lượng đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y=\\dfrac{2}{x^2-x}$ bằng",
    "options": [
      "$3$",
      "$2$",
      "$1$",
      "$0$"
    ],
    "answer": 0,
    "explain": "Tập xác định: $\\mathscr{D}=\\mathbb{R}\\setminus\\{0;1\\}$.<br>  Ta có: <br>  $\\mathop {\\lim }\\limits_{x \\to -\\infty } y = 0$. Tương tự: $\\mathop {\\lim }\\limits_{x \\to +\\infty } y = 0$. Đồ thị hàm số có tiệm cận ngang $y=0$.<br>  $\\mathop {\\lim }\\limits_{x \\to 0^-} y = +\\infty$. Tương tự:  $\\mathop {\\lim }\\limits_{x \\to 0^+} y = -\\infty$.<br>  $\\mathop {\\lim }\\limits_{x \\to 1^- } y = -\\infty$. Tương tự: $\\mathop {\\lim }\\limits_{x \\to 1^+ } y = +\\infty$.<br>  Đồ thị hàm số có tiệm cận đứng là $x=0$ và $x=1$.<br>  Vậy tổng số lượng đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số đã cho là $3$."
  },
  {
    "id": "2D143TN16",
    "question": "Cho hàm số $y=\\dfrac{ax+b}{x+c}$ ($a$, $b$, $c$ là các hằng số thực) có đồ thị như hình vẽ bên. Hai đường tiệm cận của đồ thị hàm số cắt nhau tại $I$. Tọa độ của điểm $I$ là<br><img src=\"data/12/2D1/im2D1/2D14_tikz_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$(2;2)$",
      "$(1;2)$",
      "$(2;1)$",
      "$(0;0)$"
    ],
    "answer": 0,
    "explain": "Đồ thị hàm số có đường tiệm cận đứng là $x=2$, đường tiệm cận ngang là $y=2$.<br> Vậy tọa độ của $I$ là $(2;2)$."
  },
  {
    "id": "2D141TN17",
    "question": "Đồ thị hàm số $y=\\dfrac{6x+7}{6-2x}$ có đường tiệm cận đứng, đường tiệm cận ngang lần lượt là",
    "options": [
      "$x=-3$; $y=3$",
      "$x=3$; $y=-3$",
      "$x=3$; $y=1$",
      "$x=1$; $y=3$"
    ],
    "answer": 1,
    "explain": "Tiệm cận đứng, đường tiệm cận ngang lần lượt là $x=3$; $y=-3$."
  },
  {
    "id": "2D141TN18",
    "question": "Cho hàm số $y=f(x)$ có đồ thị như hình vẽ bên. Đồ thị hàm số đã cho có đường tiệm cận đứng là<br><img src=\"data/12/2D1/im2D1/2D14_tikz_012.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$x=0$",
      "$y=1$",
      "$x=1$",
      "$x=-1$"
    ],
    "answer": 2,
    "explain": "Tiệm cận đứng là đường thẳng $x=1$."
  },
  {
    "id": "2D141TN19",
    "question": "Cho hàm số $y = \\dfrac{2x-1}{x-2}$. Đường tiệm cận đứng của đồ thị hàm số có phương trình là",
    "options": [
      "$y=2$",
      "$y=x$",
      "$x=2$",
      "$x=3$"
    ],
    "answer": 2,
    "explain": "Hàm số $y = \\dfrac{2x-1}{x-2}$ có tập xác định $\\mathscr{D} = \\mathbb{R} \\setminus \\{2\\}$.<br>  Ta có   $\\lim\\limits_{x \\to 2^+} \\dfrac{2x-1}{x-2} = +\\infty.$  Nên đường thẳng $x=2$ là tiệm cận đứng của đồ thị hàm số."
  },
  {
    "id": "2D141TN20",
    "question": "Số đường tiệm cận đứng của đồ thị hàm số $y=\\dfrac{4x}{x^2-1}$ là",
    "options": [
      "$2$",
      "$1$",
      "$3$",
      "$0$"
    ],
    "answer": 0,
    "explain": "Điều kiện xác định $x^2-1\\neq 0\\Leftrightarrow x\\neq \\pm1$.<br>  Ta có  \\item $\\lim\\limits_{x\\to1^+} y=+\\infty$, $\\lim\\limits_{x\\to1^-}y=-\\infty$ suy ra đồ thị hàm số có tiệm cận đứng $x=1$.<br>  \\item $\\lim\\limits_{x\\to-1^+} y=+\\infty$, $\\lim\\limits_{x\\to-1^-}y=-\\infty$ suy ra đồ thị hàm số có tiệm cận đứng $x=-1$.<br>  Vậy đồ thị hàm số có hai tiệm cận đứng là $x=1$ và $x=-1$."
  },
  {
    "id": "2D141TN21",
    "question": "Tiệm cận đứng của đồ thị hàm số $y=\\dfrac{2x+2\\,025}{x-1}$ là",
    "options": [
      "$x=-2$",
      "$x=2$",
      "$x=1$",
      "$x=-1$"
    ],
    "answer": 2,
    "explain": "Tập xác định: $\\mathscr{D}=\\mathbb{R}\\setminus\\{1\\}$.<br>  Ta có: $\\lim\\limits_{x\\to 1^-}y=\\lim\\limits_{x\\to 1^-}=\\dfrac{2x+2\\,025}{x-1}=-\\infty;\\lim\\limits_{x\\to 1^+}y=\\lim\\limits_{x\\to 1^+}=\\dfrac{2x+2\\,025}{x-1}=+\\infty$.<br>  $\\Rightarrow$ Tiệm cận đứng của đồ thị là $x=1$."
  },
  {
    "id": "2D141TN22",
    "question": "Đường tiệm cận xiên của đồ thị hàm số $y=\\dfrac{2x^2+x-2}{x+1}$ là",
    "options": [
      "$y=-1$",
      "$y=2$",
      "$y=2x-1$",
      "$y=2x+1$"
    ],
    "answer": 2,
    "explain": "Ta có $y=\\dfrac{2x^2+x-2}{x+1}=2x-1-\\dfrac{1}{x+1}$ nên đường tiệm cận xiên có phương trình $y=2x-1$."
  },
  {
    "id": "2D141TN23",
    "question": "Tiệm cận ngang của đồ thị hàm số $y = \\dfrac{4x + 1}{x - 1}$ là",
    "options": [
      "$y = \\dfrac{1}{4}$",
      "$y = 4$",
      "$y = 1$",
      "$y = -1$"
    ],
    "answer": 1,
    "explain": "Tiệm cận ngang của đồ thị hàm số là $y = 4$ vì khi $x \\to \\infty$, $y \\to 4$."
  },
  {
    "id": "2D141TN24",
    "question": "Cho hàm số $y=\\dfrac{a x+b}{c x+d}$ có đồ thị như hình dưới.   Giá trị $\\dfrac{a}{c}-\\dfrac{d}{c}$ bằng<br><img src=\"data/12/2D1/im2D1/2D14_tikz_017.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">6",
    "options": [
      "$-1$",
      "$-2$",
      "$1$",
      "$0$"
    ],
    "answer": 3,
    "explain": "Đường tiệm cận đứng: $x=1$ nên $c+ d =0$ hay $\\dfrac{d}{c}=-1$.<br>  Đường tiệm cận ngang: $y=-1$ nên $\\dfrac{a}{c}=-1$.<br>  Vậy $\\dfrac{a}{c} -\\dfrac{d}{c} = 0.$"
  },
  {
    "id": "2D143TN25",
    "question": "Cho hàm số $y=f(x)$ xác định, có đạo hàm trên $(-2;+\\infty)\\setminus \\{0\\}$ và có bảng biến thiên như hình vẽ dưới đây  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_018.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị của hàm số là bao nhiêu?",
    "options": [
      "$2$",
      "$3$",
      "$1$",
      "$4$"
    ],
    "answer": 0,
    "explain": "Từ bảng biến thiên ta có tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị của hàm số là $2$."
  },
  {
    "id": "2D141TN26",
    "question": "Cho hàm số $y=\\dfrac{x^2-1}{x}$ có đồ thị như hình vẽ bên. Khẳng định nào sau đây đúng?<br><img src=\"data/12/2D1/im2D1/2D14_tikz_019.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "Đồ thị hàm số có đúng một tiệm cận xiên là $y=x$",
      "Đồ thị hàm số có tiệm cận đứng là $x=0$ và tiệm cận xiên là $y=x$",
      "Đồ thị hàm số có tiệm cận ngang là $y=0$ và tiệm cận xiên là $y=x$",
      "Đồ thị hàm số có tiệm cận đứng là $x=0$ và tiệm cận ngang là $y=0$"
    ],
    "answer": 1,
    "explain": "Từ hình vẽ ta thấy đồ thị hàm số đã cho có hai đường tiệm cận. Tiệm cận đứng là $x=0$ và tiệm cận xiên là $y=x$."
  },
  {
    "id": "2D141TN27",
    "question": "Hàm số $y=f(x)$ xác định trên $\\mathbb{R}\\setminus\\{-1;1\\}$, có đạo hàm trên $\\mathbb{R}\\setminus\\{-1;1\\}$ và có bảng biến thiên như sau:  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_020.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Đồ thị hàm số $y=f(x)$ có bao nhiêu tiệm cận (tiệm cận đứng và tiệm cận ngang)?",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$1$"
    ],
    "answer": 1,
    "explain": "Dựa vào bảng biến thiên, ta thấy đồ thị hàm số có  <br>- Tiệm cận ngang: $y=0$.<br>- Tiệm cận đứng: $x=-1$, $x=1$.  Vậy, đồ thị hàm số có $3$ đường tiệm cận."
  },
  {
    "id": "2D141TN28",
    "question": "Tiệm cận đứng của đồ thị hàm số $y=\\dfrac{4x^2-x+1}{3x+2}$ là đường thẳng",
    "options": [
      "$x=-\\dfrac{2}{3}$",
      "$x=\\dfrac{2}{3}$",
      "$x=\\dfrac{4}{3}$",
      "$x=-\\dfrac{3}{2}$"
    ],
    "answer": 0,
    "explain": "Tiệm cận đứng của đồ thị hàm số $y=\\dfrac{4x^2-x+1}{3x+2}$ là $x=-\\dfrac{2}{3}$."
  },
  {
    "id": "2D141TN29",
    "question": "Cho hàm số $ y=f(x) $ có bảng biến thiên như sau:  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_022.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tổng số tiệm cận đứng và tiệm cận ngang của đồ thị hàm số đã cho là",
    "options": [
      "$3$",
      "$2$",
      "$1$",
      "$4$"
    ],
    "answer": 1,
    "explain": "Ta có $\\lim\\limits_{x\\to +\\infty} f(x)=1$ và $\\lim\\limits_{x \\to -\\infty} f(x)=1$, suy ra tiệm cận ngang của đồ thị hàm số là $y=1$.<br> Lại có $\\lim\\limits_{x\\to 1^-} f(x)=-\\infty$ suy ra tiệm cận đứng của đồ thị hàm số là $x=1$.<br>  Tổng số tiệm cận đứng và tiệm cận ngang của đồ thị hàm số đã cho là $2$."
  },
  {
    "id": "2D141TN30",
    "question": "Phương trình tiệm cận xiên của đồ thị hàm số $y=\\dfrac{x^2+2x+2}{x+1}$ là",
    "options": [
      "$y=x$",
      "$y=x-1$",
      "$y=x+1$",
      "$y=2 x-1$"
    ],
    "answer": 2,
    "explain": "Ta có $y= x+1 +\\dfrac{1}{x+1}$, ta có  $\\lim_{x\\to\\pm\\infty} (y - (x+1)) = \\lim_{x\\to\\pm\\infty} \\left(\\dfrac{1}{x+1}\\right) = 0$   Vậy đường thẳng $y=x+1$ là tiệm cận xiên của đồ thị hàm số."
  },
  {
    "id": "2D141TN31",
    "question": "Tiệm cận ngang của đồ thị hàm số $y=\\dfrac{x-2}{x+1}$ là",
    "options": [
      "$x=-1$",
      "$y=1$",
      "$y=-2$",
      "$x=2$"
    ],
    "answer": 1,
    "explain": "Ta có $\\lim_{x\\to\\pm\\infty} \\left(\\dfrac{x-2}{x+1}\\right) = 1$.<br>  Vậy đường thẳng $y=1$ là tiệm cận ngang của đồ thị hàm số."
  },
  {
    "id": "2D141TN32",
    "question": "Đường tiệm cận ngang của đồ thị hàm số $y=\\dfrac{4x+1}{2x-2}$ là",
    "options": [
      "$y=2$",
      "$x=2$",
      "$x=1$",
      "$y=1$"
    ],
    "answer": 0,
    "explain": "Ta có $\\lim\\limits_{x\\to +\\infty}\\dfrac{4x+1}{2x-2}=\\lim\\limits_{x\\to +\\infty}\\dfrac{4+\\dfrac{1}{x}}{2-\\dfrac{2}{x}}=2.$  Vậy đường thẳng $y=2$ là tiệm cận ngang của đồ thị hàm số đã cho."
  },
  {
    "id": "2D141TN33",
    "question": "Tiệm cận ngang của đồ thị hàm số $y=\\dfrac{2 x-1}{x-1}$ là đường thẳng có phương trình",
    "options": [
      "$x=1$",
      "$x=\\dfrac{1}{2}$",
      "$y=2$",
      "$y=1$"
    ],
    "answer": 2,
    "explain": "Tiệm cận ngang của đồ thị hàm số là $y=2$."
  },
  {
    "id": "2D141TN34",
    "question": "Đường tiệm cận xiên của đồ thị hàm số $ y = 2x - 1 + \\dfrac{1}{x + 1} $ có phương trình là",
    "options": [
      "$y = 2x - 1$",
      "$y = x + 1$",
      "$y = -2x + 1$",
      "$y = -2x - 1$"
    ],
    "answer": 0,
    "explain": "Ta có $\\displaystyle \\lim_{x\\to \\pm\\infty}\\dfrac{1}{x+1}= 0$ nên đường thẳng $y=2x-1$ là tiệm cận xiên của đồ thị hàm số.<br>  Vậy đồ thị hàm số có $y=2x-1$ là đường tiệm xiên của đồ thị hàm số."
  },
  {
    "id": "2D141TN35",
    "question": "Tiệm cận ngang của đồ thị hàm số $y=\\dfrac{5x+1}{x-1}$ là",
    "options": [
      "$y=-5$",
      "$y=5$",
      "$y=-1$",
      "$y=1$"
    ],
    "answer": 1,
    "explain": "Ta có   $\\lim\\limits_{x \\rightarrow +\\infty} \\dfrac{5x+1}{x-1} = \\lim\\limits_{x \\rightarrow +\\infty} \\dfrac{5+\\dfrac{1}{x}}{1-\\dfrac{1}{x}}=5$; <br> $\\lim\\limits_{x \\rightarrow -\\infty} \\dfrac{5x+1}{x-1}= \\lim\\limits_{x \\rightarrow -\\infty} \\dfrac{5+\\dfrac{1}{x}}{1-\\dfrac{1}{x}} = 5$. <br>  Vậy đồ thị hàm số $y=\\dfrac{5x+1}{x-1}$ có đường tiệm cận ngang $y=5$."
  },
  {
    "id": "2D141TN36",
    "question": "Đường tiệm cận xiên của đồ thị hàm số $y=2x+7+\\dfrac{8}{x-1}$ là",
    "options": [
      "$y=x-1$",
      "$y=2x+1$",
      "$y=-x+1$",
      "$y=2x+7$"
    ],
    "answer": 3,
    "explain": "Ta có $\\lim\\limits_{x\\to+\\infty}\\left(y-2x-7\\right)=\\lim\\limits_{x\\to+\\infty}\\left(\\dfrac{8}{x-1}\\right)=0$ và $\\lim\\limits_{x\\to-\\infty}\\left(y-2x-7\\right)=\\lim\\limits_{x\\to-\\infty}\\left(\\dfrac{8}{x-1}\\right)=0$ nên $y=2x+7$ là tiệm cận xiên của đồ thị hàm số."
  },
  {
    "id": "2D141TN37",
    "question": "Đường tiệm cận đứng của đồ thị hàm số $y=\\dfrac{2024x+3}{x-2025}$ là",
    "options": [
      "$x=2024$",
      "$y=2024$",
      "$y=2025$",
      "$x=2025$"
    ],
    "answer": 3,
    "explain": "Do $\\lim\\limits_{x\\to {2025}^-}\\dfrac{2024x+3}{x-2025}=-\\infty$, $\\lim\\limits_{x\\to {2025}^+}\\dfrac{2024x+3}{x-2025}=+\\infty$ nên $x=2025$ là tiệm cận đứng của đồ thị hàm số $y=\\dfrac{2024x+3}{x-2025}$."
  },
  {
    "id": "2D141TN38",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_028.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   Tổng số tiệm cận đứng và tiệm cận ngang của đồ thị hàm số đã cho là",
    "options": [
      "$4$",
      "$1$",
      "$3$",
      "$2$"
    ],
    "answer": 3,
    "explain": "Dựa vào đồ thị hàm số ta có $\\lim\\limits_{x \\to -\\infty} f(x)=2\\Rightarrow y=2$ là đường tiệm cận ngang của đồ thị hàm số.<br>  $\\lim\\limits_{x \\to 0^+} f(x)=+\\infty\\Rightarrow x=0$ là đường tiệm cận đứng của đồ thị hàm số.<br>  Vậy đồ thị hàm số có tổng cộng là hai đường tiệm cận."
  },
  {
    "id": "2D143TN39",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như hình vẽ sau.   <br><img src=\"data/12/2D1/im2D1/2D14_tikz_029.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số đã cho là",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$1$"
    ],
    "answer": 1,
    "explain": "Từ bảng biến thiên, ta có  <br>- $\\lim\\limits_{x \\to -\\infty} y = 3 \\Rightarrow$ tiệm cận ngang $y = 3$.<br>- $\\lim\\limits_{x \\to +\\infty} y = 2 \\Rightarrow$ tiệm cận ngang $y = 2$.<br>- $\\lim\\limits_{x \\to 0^+} y = -\\infty \\Rightarrow$ tiệm cận đứng $x = 0$.  Vậy tổng số đường tiệm cận đứng và ngang là $3$."
  },
  {
    "id": "2D141TN40",
    "question": "Cho hàm số $f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_030.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tổng số tiệm cận đứng và tiệm cận ngang của đồ thị hàm số đã cho là",
    "options": [
      "$1$",
      "$2$",
      "$4$",
      "$3$"
    ],
    "answer": 1,
    "explain": "Dựa vào bảng biến thiên ta thấy   <br>- $\\lim \\limits_{x \\to 0^{-}} f(x)=-\\infty$, suy ra đường thẳng $x=0$ là đường tiệm cận đứng của đồ thị hàm số đã cho.<br>- $\\lim \\limits_{x \\to -\\infty} f(x)=0$, suy ra đường thẳng $y=0$ là đường tiệm cận ngang của đồ thị hàm số đã cho."
  },
  {
    "id": "2D141TN41",
    "question": "Hàm số nào sau đây có một tiệm cận",
    "options": [
      "$y=\\dfrac{x+3}{2 x-1}$",
      "$y=\\dfrac{x^2+3 x-2}{x+3}$",
      "$y=\\dfrac{4}{x-1}$",
      "$y=\\dfrac{2 x}{x^2+1}$"
    ],
    "answer": 3,
    "explain": "Ta có $\\lim \\limits_{x \\to \\pm\\infty} \\dfrac{2 x}{x^2+1}=0$, suy ra đường thẳng $y=0$ là đường tiệm cận ngang duy nhất của đồ thị hàm số $y=\\dfrac{2 x}{x^2+1}$."
  },
  {
    "id": "2D141TN42",
    "question": "Đường tiệm cận ngang của đồ thị hàm số $y=\\dfrac{3x-1}{x+2}$ có phương trình là",
    "options": [
      "$y=-\\dfrac{1}{2}$",
      "$y=3$",
      "$x=3$",
      "$x=-2$"
    ],
    "answer": 1,
    "explain": "Đường tiệm cận ngang của đồ thị hàm số $y=\\dfrac{3x-1}{x+2}$ có phương trình $y=3$."
  },
  {
    "id": "2D141TN43",
    "question": "Tiệm cận đứng của đồ thị hàm số $y=\\dfrac{1}{\\sqrt{x-3}}$ là đường thẳng có phương trình",
    "options": [
      "$y=0$",
      "$x=-3$",
      "$x=3$",
      "$y=3$"
    ],
    "answer": 2,
    "explain": "Tập xác định $\\mathscr{D}=(3;+\\infty)$.<br>  Nhận thấy $\\lim\\limits_{x\\to 3^+}y=\\lim\\limits_{x\\to 3^+}\\dfrac{1}{\\sqrt{x-3}}=+\\infty$ nên $x=3$ là tiệm cận đứng của đồ thị hàm số."
  },
  {
    "id": "2D141TN44",
    "question": "Tổng số các đường tiệm cận của đồ thị hàm số $y=\\dfrac{x+1}{x^2-6x-16}$ là",
    "options": [
      "$1$",
      "$3$",
      "$4$",
      "$2$"
    ],
    "answer": 1,
    "explain": "Điều kiện $x^2-6x-16\\neq 0\\Leftrightarrow x\\neq 8 \\text{ và } x\\neq -2.$<br>  Ta có $\\lim\\limits_{x\\to 8^+}y=+\\infty $ suy ra $x=8$ là tiệm cận đứng của đồ thị hàm số.<br>  $\\lim\\limits_{x\\to -2^+}y=+\\infty $ suy ra $x=-2$ là tiệm cận đứng của đồ thị hàm số.<br>  $\\lim\\limits_{x\\to +\\infty}y=0$, $\\lim\\limits_{x\\to -\\infty}y=0$ suy ra $y=0$ là tiệm cận ngang của đồ thị hàm số.<br>  Vậy đồ thị hàm số có $3$ đường tiệm cận."
  },
  {
    "id": "2D141TN45",
    "question": "Tiệm cận đứng của đồ thị hàm số $y = \\dfrac{3x+2}{x-2}$ là đường thẳng có phương trình",
    "options": [
      "$x=-2$",
      "$x=-1$",
      "$x=3$",
      "$x=2$"
    ],
    "answer": 3,
    "explain": "Tiệm cận đứng của đồ thị hàm số $y = \\dfrac{3x+2}{x-2}$ là đường thẳng có phương trình $x=2$."
  },
  {
    "id": "2D141TN46",
    "question": "Đường thẳng nào dưới đây là tiệm cận ngang của đồ thị hàm số $y=\\dfrac{-x+1}{2x+1}$?",
    "options": [
      "$y=-\\dfrac{1}{2}$",
      "$y=1$",
      "$y=-1$",
      "$y=-2$"
    ],
    "answer": 0,
    "explain": "Ta có $\\lim\\limits_{x\\to\\pm\\infty}y=\\lim\\limits_{x\\to\\pm\\infty}\\dfrac{-x+1}{2x+1}=-\\dfrac{1}{2}$.<br>  Suy ra đồ thị hàm số nhận $y=-\\dfrac{1}{2}$ làm tiệm cận ngang."
  },
  {
    "id": "2D141TN47",
    "question": "Cho hàm số $y = f(x)=\\dfrac{x^2+3x-1}{x+2}$ có đồ thị $(V)$. Đường tiệm cận xiên của đồ thị hàm số $(V)$ có phương trình nào sau đây?",
    "options": [
      "$y=x-3$",
      "$y=x$",
      "$y=x+2$",
      "$y=x+1$"
    ],
    "answer": 3,
    "explain": "Tập xác định: $\\mathscr{D}=\\mathbb{R}\\setminus \\{-2\\}$.<br>  Ta có:   $a=\\lim\\limits_{x\\to +\\infty}\\dfrac{f(x)}{x}=\\lim\\limits_{x\\to +\\infty}\\dfrac{x^2+3x-1}{x(x+2)}=1;$<br>$b=\\lim\\limits_{x\\to +\\infty}[f(x)-ax]=\\lim\\limits_{x\\to +\\infty}\\dfrac{x^2+3x-1}{x+2}-x=1.$  Ta cũng có $\\lim\\limits_{x\\to -\\infty}\\dfrac{f(x)}{x}=1$; $\\lim\\limits_{x\\to -\\infty}[f(x)-ax]=1$.<br>  Do đó, đồ thị hàm số có tiệm cận xiên là đường thẳng $y=x+1$."
  },
  {
    "id": "2D141TN48",
    "question": "Tiệm cận đứng của đồ thị hàm số $y = \\dfrac{2x + 1}{x - 1}$ là",
    "options": [
      "$x = 1$",
      "$x = -\\dfrac{1}{2}$",
      "$y = 2$",
      "$y = -1$"
    ],
    "answer": 0,
    "explain": "Tập xác định $\\mathscr{D} = \\mathbb{R}\\setminus \\left\\lbrace 1\\right\\rbrace$.<br>  Ta có  <br>- $\\displaystyle \\lim\\limits_{x \\to 1^{-}} y = \\lim\\limits_{x \\to 1^{-}} \\dfrac{2x + 1}{x - 1} = \\lim\\limits_{x \\to 1^{-}} \\left(2 + \\dfrac{3}{x - 1}\\right) = -\\infty$ nên $x = 1$ là tiệm cận đứng của đồ thị hàm số.<br>- $\\displaystyle \\lim\\limits_{x \\to 1^{+}} y = \\lim\\limits_{x \\to 1^{+}} \\dfrac{2x + 1}{x - 1} = \\lim\\limits_{x \\to 1^{+}} \\left(2 + \\dfrac{3}{x - 1}\\right) = +\\infty$ nên $x = 1$ là tiệm cận đứng của đồ thị hàm số.  Vậy $x = 1$ là tiệm cận đứng của đồ thị hàm số đã cho."
  },
  {
    "id": "2D141TN49",
    "question": "Tiệm cận đứng của đồ thị hàm số $y=\\dfrac{x+2}{x+1}$ là",
    "options": [
      "$x=1$",
      "$x=2$",
      "$x=-1$",
      "$x=-2$"
    ],
    "answer": 2,
    "explain": "Tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}\\setminus\\{-1\\}$.<br>  Ta có $\\lim\\limits_{x\\to(-1)^+}y=\\lim\\limits_{x\\to(-1)^+}\\dfrac{x+2}{x+1}=+\\infty$ và $\\lim\\limits_{x\\to(-1)^-}y=\\lim\\limits_{x\\to(-1)^-}\\dfrac{x+2}{x+1}=-\\infty$ nên $x=-1$ là tiệm cận đứng của đồ thị hàm số."
  },
  {
    "id": "2D143TN50",
    "question": "Hình vẽ bên là đồ thị của hàm số $y=\\dfrac{a x+b}{c x+d}$.  Đường tiệm cận đứng của đồ thị hàm số có phương trình là<br><img src=\"data/12/2D1/im2D1/2D14_tikz_033.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=1$",
      "$x=2$",
      "$x=1$",
      "$y=2$"
    ],
    "answer": 2,
    "explain": "Đường tiệm cận đứng của đồ thị hàm số có phương trình là $x=1$."
  },
  {
    "id": "2D141TN51",
    "question": "Trong các hàm số sau, hàm số nào có bảng biến thiên như hình vẽ dưới đây:<br><img src=\"data/12/2D1/im2D1/2D14_tikz_037.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=\\dfrac{-x-1}{x-2}$",
      "$y=\\dfrac{x+3}{x-2}$",
      "$y=\\dfrac{x-3}{x-2}$",
      "$y=\\dfrac{x+1}{x-2}$"
    ],
    "answer": 0,
    "explain": "Từ bảng biến thiên ta có:<br>  Hàm số có tiệm cận đứng là đường thẳng $x=2$ và tiệm cận ngang là đường thẳng $y=-1$ nên hàm số $y=\\dfrac{-x-1}{x-2}$ thỏa mãn yêu cầu bài toán."
  },
  {
    "id": "2D141TN52",
    "question": "Tiệm cận ngang của đồ thị hàm số $y=\\dfrac{1+4x}{x-1}$ là",
    "options": [
      "$y=1$",
      "$y=4$",
      "$y=-1$",
      "$y=-4$"
    ],
    "answer": 1,
    "explain": "Ta có $\\lim\\limits_{x\\to+\\infty}\\dfrac{1+4x}{x-1}=4$ và $\\lim\\limits_{x\\to-\\infty}\\dfrac{1+4x}{x-1}=4$ nên đồ thị hàm số có 1 đường tiệm cận ngang là $y=4$."
  },
  {
    "id": "2D141TN53",
    "question": "Đường tiệm cận xiên của đồ thị hàm số $f(x)=\\dfrac{2x^2+x-1}{2x-1}$ là",
    "options": [
      "$y=x-4$",
      "$y=x+1$",
      "$y=2x+2$",
      "$y=x+4$"
    ],
    "answer": 1,
    "explain": "Ta có $f(x)=\\dfrac{2x^2+x-1}{2x-1}=\\dfrac{(2x-1)(x+1)}{2x-1}=x+1$.<br>  Do đó, tiệm cận xiên của đồ thị hàm số đã cho là $y=x+1$."
  },
  {
    "id": "2D141TN54",
    "question": "Tiệm cận ngang của đồ thị hàm số $y = f(x)=\\dfrac{2x-1}{x+3}$ có phương trình là",
    "options": [
      "$x=1$",
      "$y=1$",
      "$x = 2$",
      "$y=2$"
    ],
    "answer": 3,
    "explain": "Tiệm cận ngang của đồ thị hàm số $y = f(x)=\\dfrac{2x-1}{x+3}$ có phương trình là $y=2$."
  },
  {
    "id": "2D141TN55",
    "question": "Số đường tiệm cận của đồ thị hàm số $y=\\dfrac{-x+3}{x+5}$ là",
    "options": [
      "$2$",
      "$1$",
      "$3$",
      "$0$"
    ],
    "answer": 0,
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus \\{-5\\}$.<br>  Ta có $\\lim\\limits_{x\\to \\pm \\infty} y= \\lim\\limits_{x\\to \\pm \\infty}\\dfrac{-x+3}{x+5}=-1$.<br>  Suy ra $y=-1$ là đường tiệm cận ngang.<br>  Ta có $\\lim\\limits_{x\\to (-5)^+} y= \\lim\\limits_{x\\to (-5)^+}\\dfrac{-x+3}{x+5}=+\\infty$; $\\lim\\limits_{x\\to (-5)^-} y= \\lim\\limits_{x\\to (-5)^-}\\dfrac{-x+3}{x+5}=-\\infty$.<br>  Suy ra $x=-5$ là đường tiệm cận đứng.<br>  Vậy đồ thị hàm số đã cho có hai đường tiệm cận."
  },
  {
    "id": "2D141TN56",
    "question": "Đường tiệm cận xiên của đồ thị hàm số $y=\\dfrac{2x^2+x-5}{x+1}$ là",
    "options": [
      "$y=x+1$",
      "$y=2x-1$",
      "$y=2x+1$",
      "$y=2x+3$"
    ],
    "answer": 1,
    "explain": "Ta có $y=\\dfrac{2x^2+x-5}{x+1}=2x-1-\\dfrac{4}{x+1}$ nên đồ thị hàm số có đường tiệm cận xiên là đường thẳng $y=2x-1$."
  },
  {
    "id": "2D143TN57",
    "question": "Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R} \\setminus\\{-1; 1\\}$, liên tục trên mỗi khoảng xác định và có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_043.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $(C)\\colon y=f(x)$ là",
    "options": [
      "$4$",
      "$3$",
      "$5$",
      "$2$"
    ],
    "answer": 0,
    "explain": "Đồ thị hàm số có hai đường tiệm cận đứng là đường thẳng $x=-1$ và $x=1$, hai đường tiệm cận ngang là đường thẳng $y=-2$ và $y=2$.<br>  Vậy tổng có $4$ đường tiệm cận đứng và đường tiệm cận ngang của đồ thị hàm số."
  },
  {
    "id": "2D141TN58",
    "question": "Cho hàm số $y=f(x)$ có đồ thị như hình vẽ  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_044.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Phát biểu nào sau đây đúng?",
    "options": [
      "Đồ thị hàm số đã cho có đường tiệm cận đứng là $x=0$",
      "Đồ thị hàm số đã cho không có tiệm cận đứng",
      "Đồ thị hàm số đã cho có tiệm đường tiệm cận đứng là $y=0$",
      "Đồ thị hàm số đã cho có đường tiệm cận đứng là $x=-1$"
    ],
    "answer": 0,
    "explain": "Đồ thị hàm số đã cho có đường tiệm cận đứng là $x=0$."
  },
  {
    "id": "2D141TN59",
    "question": "Tiệm cận xiên của đồ thị hàm số $y =x-\\dfrac{4}{x-1}$ là đường thẳng",
    "options": [
      "$y = x$",
      "$y = x - 4$",
      "$y = x - 1$",
      "$y = -4$"
    ],
    "answer": 0,
    "explain": "Vì $\\lim\\limits_{x\\to+\\infty}\\left[f(x)-x\\right]=\\lim\\limits_{x\\to+\\infty}\\dfrac{-4}{x-1}=0$ nên đường thẳng $y=x$ là tiệm cận xiên của đồ thị hàm số đã cho."
  },
  {
    "id": "2D141TN60",
    "question": "Đường thẳng nào dưới đây là tiệm cận đứng của đồ thị hàm số $y = \\dfrac{2x+1}{x+1}$?",
    "options": [
      "$y=2$",
      "$x=-1$",
      "$x=1$",
      "$y=-1$"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "2D141TN61",
    "question": "Cho hàm số bậc ba $y = f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_047.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Hàm số đã cho là",
    "options": [
      "$f(x) = -x^3 + 3x^2 -2$",
      "$f(x) = x^3 + 3x -2$",
      "$f(x) = \\dfrac{x^3}{3} + x^2 -2$",
      "$f(x) =x^3 + 3x^2 -2$"
    ],
    "answer": 3,
    "explain": "Xét $f(x) = ax^3 + bx^2 + cx +d $.<br> $f'(x) = 3ax^2 + 2bx + c =0$.<br> $-8a +4b -2c +d =2 \\text{ và } d =0 \\text{ và } 12a-4b+c =0 \\text{ và } c =0$\\Rightarrow$a=1 \\text{ và } b=3 \\text{ và } c=0 \\text{ và } d=-2$.<br> $\\Rightarrow f(x)=x^3 + 3x^2 -2$."
  },
  {
    "id": "2D141TN62",
    "question": "Tiệm cận đứng của đồ thị hàm số $y=\\dfrac{2x-1}{x-2}$ là",
    "options": [
      "$x=1$",
      "$y=1$",
      "$y=2$",
      "$x=2$"
    ],
    "answer": 3,
    "explain": "Điều kiện xác định $x\\ne 2$.<br>  Ta có $\\lim\\limits_{x\\to 2^+} \\dfrac{2x-1}{x-2}=+\\infty$.<br>  Suy ra $x=2$ là tiệm cận đứng của đồ thị hàm số."
  },
  {
    "id": "2D141TN63",
    "question": "Đường tiệm cận ngang của đồ thị hàm số $y=\\dfrac{2024x+2025}{x-5}$ là",
    "options": [
      "$y=2025$",
      "$y=2024$",
      "$y=1$",
      "$y=-5$"
    ],
    "answer": 1,
    "explain": "Xét hàm số $y = \\dfrac{2024x+2025}{x-5}$.<br>  Ta có   \\[  \\lim\\limits_{x \\to \\pm\\infty} \\dfrac{2024x+2025}{x-5}=  \\lim\\limits_{x \\to \\pm\\infty} \\dfrac{2024 + \\frac{2025}{x}}{1 - \\dfrac{5}{x}}=2024.  \\]  Vậy đường tiệm cận ngang của đồ thị hàm số là $y = 2024$."
  },
  {
    "id": "2D143TN64",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau.  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_048.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tổng số đường tiệm cận đứng và đường tiệm cận ngang của đồ thị hàm số là",
    "options": [
      "$4$",
      "$3$",
      "$2$",
      "$1$"
    ],
    "answer": 2,
    "explain": "Theo bảng biến thiên, $\\lim\\limits_{x \\to -\\infty} f(x)=1$ và $\\lim\\limits_{x \\to 1^-}f(x)=-\\infty$.<br>  Do đó đồ thị hàm số $yf(x)$ có đường tiệm cận đứng là $x=1$ và đường tiệm cận ngang là $y=1$.<br>  Vậy tổng số đường tiệm cận là $2$."
  },
  {
    "id": "2D141TN65",
    "question": "Đường tiệm cận đứng của đồ thị hàm số $y=\\dfrac{x^{2}+3x-1}{x+1}$ là",
    "options": [
      "$x=-1$",
      "$x=1$",
      "$x=0$",
      "$x=2$"
    ],
    "answer": 0,
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{-1\\}$.<br>  Ta có $\\lim\\limits_{x \\to-1^{+}} \\dfrac{x^{2}+3x-1}{x+1}=-\\infty$ và $\\lim\\limits_{x \\to-1^{-}} \\dfrac{x^{2}+3x-1}{x+1}=+\\infty$.<br>  Vậy tiệm cận đứng của đồ thị hàm số đã cho là $x=-1$."
  },
  {
    "id": "2D141TN66",
    "question": "Cho hàm số $y=f(x)$ có đồ thị như hình vẽ bên. Tiệm cận đứng của đồ thị là<br><img src=\"data/12/2D1/im2D14/dlts_12_DLTS1_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$x=-1$",
      "$x=1$",
      "$x=0$",
      "$x=2$"
    ],
    "answer": 1,
    "explain": "Từ đồ thị hàm số $y=f(x)$ ta thấy $\\lim\\limits_{x \\to 1^{+}} f(x)=-\\infty$ và $\\lim\\limits_{x \\to 1^{-}} f(x)=+\\infty$.<br>  Vậy tiệm cận đứng của đồ thị hàm số đã cho là $x=1$."
  },
  {
    "id": "2D141TN67",
    "question": "Đồ thị hàm số $y=f(x)$ có tiệm cận xiên là đường thẳng<br><img src=\"data/12/2D1/im2D14/dlts_12_DLTS1_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y=x$",
      "$y=x-1$",
      "$y=2x-1$",
      "$y=x+1$"
    ],
    "answer": 3,
    "explain": "Từ đồ thị hàm số $y=f(x)$ ta thấy tiệm cận xiên là đi qua điểm có tọa độ $(-1;0)$ và $(0;1)$ nên đường tiệm cận xiên có phương trình $y=x+1$."
  },
  {
    "id": "2D141TN68",
    "question": "Đường tiệm cận xiên của đồ thị hàm số $y=\\dfrac{2x^2+x-3}{x+1}$ có phương trình là",
    "options": [
      "$y=x+2$",
      "$y=x-2$",
      "$y=2x+1$",
      "$y=2x-1$"
    ],
    "answer": 3,
    "explain": "Ta có $y=\\dfrac{2x^2+x-3}{x+1}=2x-1-\\dfrac{2}{x+1}$.<br>  Mà $\\lim\\limits_{x \\to +\\infty} \\left(\\dfrac{2x^2+x-3}{x+1} - \\left(2x-1\\right)\\right)=\\lim\\limits_{x \\to +\\infty} \\dfrac{-2}{x+1}=0$ <br>  nên đường tiệm cận xiên của đồ thị hàm số $y=\\dfrac{2x^2+x-3}{x+1}$ có phương trình là $y=2x-1$."
  },
  {
    "id": "2D143TN69",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D14/dlts_12_DLTS2_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Số đường tiệm cận ngang của đồ thị hàm số $y=f(x)$",
    "options": [
      "$1$",
      "$4$",
      "$2$",
      "$3$"
    ],
    "answer": 0,
    "explain": "Do $\\lim\\limits_{x \\to+\\infty} y=1$, $\\lim\\limits_{x \\to-\\infty} y=1 \\Rightarrow$ đồ thị hàm số có $1$ tiệm cận ngang là $y=1$."
  },
  {
    "id": "2D141TN70",
    "question": "Cho hàm số $y=f(x)$ có $\\lim\\limits_{x \\to 2^+} f(x)=+\\infty$ và $\\lim\\limits_{x \\to 2^-} f(x)=-\\infty$. Khẳng định nào sau đây đúng?",
    "options": [
      "Đồ thị hàm số đã cho có hai tiệm cận đứng phân biệt",
      "Đồ thị hàm số đã cho có đúng một tiệm cận ngang là đường thẳng $y=2$",
      "Đồ thị hàm số đã cho có đúng một tiệm cận đứng là đường thẳng $x=2$",
      "Đồ thị hàm số đã cho không có tiệm cận đứng"
    ],
    "answer": 2,
    "explain": "Ta có $\\lim\\limits_{x \\to 2^+} f(x)=+\\infty$ và $\\lim\\limits_{x \\to 2^-} f(x)=-\\infty$.<br>  Vậy tiệm cận đứng của đồ thị hàm số đã cho là $x=-2$."
  },
  {
    "id": "2D141TN71",
    "question": "Tiệm cận xiên của đồ thị hàm số $y=f(x)=\\dfrac{x^2-3x-7}{x+2}$ là",
    "options": [
      "$y=x+2$",
      "$y=x+4$",
      "$y=x-3$",
      "$y=x-5$"
    ],
    "answer": 3,
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\left\\{-2\\right\\}$. Ta có $f(x)=x-5+\\dfrac{3}{x+2}$ nên  \\[ \\lim\\limits_{x\\to \\pm\\infty} \\left[f(x)-(x-5)\\right]=\\lim\\limits_{x\\to \\pm \\infty} \\frac{3}{x+2}=0. \\]  Vậy đồ thị hàm số có tiệm cận xiên là đường thẳng $y=x-5$."
  },
  {
    "id": "2D141TN72",
    "question": "Đồ thị hàm số $y=\\sqrt{x^{2}+2x+2}$ có mấy đường tiệm cận xiên?",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$3$"
    ],
    "answer": 2,
    "explain": "Ta có   <br>- $\\lim\\limits_{x \\to+\\infty} \\dfrac{\\sqrt{x^{2}+2x+2}}{x}=\\lim\\limits_{x \\to+\\infty} \\dfrac{\\sqrt{1+\\dfrac{2}{x}+\\dfrac{2}{x^{2}}}}{1}=1$.<br>- $\\lim\\limits_{x \\to+\\infty}\\left(\\sqrt{x^{2}+2x+2}-x\\right)=\\lim\\limits_{x \\to+\\infty} \\dfrac{2x+2}{\\sqrt{x^{2}+2x+2}+x}=\\lim\\limits_{x \\to+\\infty} \\dfrac{2+\\dfrac{2}{x}}{\\sqrt{1+\\dfrac{2}{x}+\\dfrac{2}{x^{2}}}+1}=1$.  Ta có   <br>- $\\lim\\limits_{x \\to-\\infty} \\dfrac{\\sqrt{x^{2}+2x+2}}{x}=\\lim\\limits_{x \\to-\\infty} \\dfrac{-\\sqrt{1+\\dfrac{2}{x}+\\dfrac{2}{x^{2}}}}{1}=-1$.<br>- $\\lim\\limits_{x \\to-\\infty}\\left(\\sqrt{x^{2}+2x+2}+x\\right)=\\lim\\limits_{x \\to-\\infty} \\dfrac{2x+2}{\\sqrt{x^{2}+2x+2}-x}=\\lim\\limits_{x \\to-\\infty} \\dfrac{2+\\dfrac{2}{x}}{\\sqrt{1+\\dfrac{2}{x}+\\dfrac{2}{x^{2}}}-1}=-1$.  Vậy đồ thị hàm số có hai tiệm cận xiên là $y=x+1$ và $y=-x-1$."
  },
  {
    "id": "2D141TN73",
    "question": "Một mảnh vườn hình chữ nhật có diện tích bằng $150$ m$^2$. Biết độ dài một cạnh của mảnh vườn là $ (x-2)$ m. Biểu thức tính chu vi của mảnh vườn là $P(x)$ m. Phương trình đường tiệm cận xiên của đồ thị hàm số $ P(x)$ là",
    "options": [
      "$ y=2x-4$",
      "$ y=2x$",
      "$ y=2x+4$",
      "$ y=x-2$"
    ],
    "answer": 0,
    "explain": "Cạnh còn lại của hình chữ nhật là $\\dfrac{150}{x-2}$ m.<br>  Chu vi của mảnh vườn là  $ P(x)=\\left[x-2+\\dfrac{150}{x-2}\\right].2\\Rightarrow P(x)=2x-4+\\dfrac{300}{x-2}, \\text{với } x &gt; 2.$  Ta có: $\\lim\\limits_{x\\to+\\infty}\\left(P(x)-\\left(2x-4\\right)\\right)=\\lim\\limits_{x\\to+\\infty}\\dfrac{300}{x-2}=0$. Vậy đồ thị hàm số $ P(x)$ có tiệm cận xiên là đường thẳng $ y=2x-4$."
  },
  {
    "id": "2D141TN74",
    "question": "Tiệm cận đứng của đồ thị hàm số $y=\\dfrac{3x+2}{x-2}$ là đường thẳng có phương trình",
    "options": [
      "$x=-1$",
      "$x=-2$",
      "$x=2$",
      "$x=3$"
    ],
    "answer": 2,
    "explain": "Ta có $\\lim\\limits_{x \\rightarrow 2^{+}} \\dfrac{3x+2}{x-2}=+\\infty$; $\\lim\\limits_{x \\rightarrow 2^{-}} \\dfrac{3x+2}{x-2}=-\\infty$. Đồ thị hàm số có đường tiệm cận đứng là $x=2$."
  },
  {
    "id": "2D141TN75",
    "question": "Tiệm cận đứng của đồ thị hàm số $y=\\dfrac{2x-2}{x+1}$ là",
    "options": [
      "$y=2$",
      "$x=-1$",
      "$x=1$",
      "$y=-1$"
    ],
    "answer": 1,
    "explain": "Vì $\\lim\\limits_{x\\to -1^{\\pm}}f(x)=\\mp\\infty$ nên đồ thị hàm số nhận đường thẳng $x=-1$ làm tiệm cận đứng."
  },
  {
    "id": "2D141TN76",
    "question": "Đồ thị hàm số $y=\\dfrac{x^2+2x+2}{x+1}$ có tiệm cận xiên là đường thẳng",
    "options": [
      "$y=x$",
      "$y=2x-1$",
      "$y=x-1$",
      "$y=x+1$"
    ],
    "answer": 3,
    "explain": "Gọi tiệm cận xiên của đồ thị hàm số là $y=ax+b(a\\neq 0)$.<br>  $a=\\lim\\limits_{x\\to+\\infty}\\dfrac{y}{x} =\\lim\\limits_{x\\to+\\infty}\\dfrac{x^2+2x+2}{x^2+x} =\\lim\\limits_{x\\to+\\infty}\\dfrac{1+\\dfrac{2}{x}+\\dfrac{2}{x^2}}{1+\\dfrac{1}{x}} =1$.<br>  $b=\\lim\\limits_{x\\to+\\infty}(y-x) =\\lim\\limits_{x\\to+\\infty}\\left(\\dfrac{x^2+2x+2}{x+1}-x\\right) =\\lim\\limits_{x\\to+\\infty}\\dfrac{x+2}{x+1}=\\lim\\limits_{x\\to+\\infty}\\dfrac{1+\\dfrac{2}{x}}{1+\\dfrac{1}{x}} =1$.<br>  Vậy tiệm cận xiên của đồ thị hàm số là $y=x+1$."
  },
  {
    "id": "2D141TN77",
    "question": "Đường tiệm cận xiên của đồ thị hàm số $y=\\dfrac{2x^2-x+2}{x+1}$ có phương trình là",
    "options": [
      "$y=2x-3$",
      "$y=2x+3$",
      "$y=x+1$",
      "$y=2x-1$"
    ],
    "answer": 0,
    "explain": "Ta có $\\lim\\limits_{x\\to +\\infty} \\dfrac{2x^2-x+2}{x(x+1)}=2$ và   $\\lim\\limits_{x\\to +\\infty} \\left(y-2x\\right)=\\lim\\limits_{x\\to +\\infty} \\dfrac{2x^2-x+2}{x+1}-2x=\\lim\\limits_{x\\to +\\infty} \\dfrac{-3x+2}{x(x+1)}=-3$. <br>  Vậy đồ thị hàm số đã cho có một đường tiệm cận xiên là $y=2x-3$."
  },
  {
    "id": "2D141TN78",
    "question": "Số đường tiệm cận của đồ thị hàm số $y=\\dfrac{2x^2-3x-2}{x^2-4}$ là",
    "options": [
      "$0$",
      "$2$",
      "$1$",
      "$0$"
    ],
    "answer": 1,
    "explain": "Ta có $y=\\dfrac{2x^2-3x-2}{x^2-4}=\\dfrac{2x+1}{x+2}$.<br>   Do $\\lim \\limits_{x\\to \\pm \\infty}\\dfrac{2x^2-3x-2}{x^2-4}=\\lim \\limits_{x\\to \\pm \\infty}\\dfrac{2x+1}{x+2}=2$ nên tiệm cận ngang của đồ thị hàm số là đường thẳng $y=2$.<br>   Do $\\lim \\limits_{x\\to -2^-}\\dfrac{2x^2-3x-2}{x^2-4}=\\lim \\limits_{x\\to -2^-}\\dfrac{2x+1}{x+2}=-\\infty$ nên tiệm cận đứng của đồ thị hàm số là đường thẳng $x=-2$.<br>   Vậy đồ thị hàm số có hai tiệm cận."
  },
  {
    "id": "2D141TN79",
    "question": "Trong các hàm số sau đây, hàm số nào có đồ thị nhận đường thẳng $x=1$ làm đường tiệm cận đứng?",
    "options": [
      "$y=\\dfrac{2x-1}{x-1}$",
      "$y=\\dfrac{x^2+2x-3}{2x-3}$",
      "$y=x-\\sqrt{x^2+2}$",
      "$y=\\dfrac{2}{x^2+x+1}$"
    ],
    "answer": 0,
    "explain": "Ta có $\\lim\\limits_{x \\to 1^+}\\, \\dfrac{2x-1}{x-1}=+\\infty$ và $\\lim\\limits_{x \\to 1^+}\\, \\dfrac{2x-1}{x-1}=-\\infty$.<br>  Do đó, hàm số $y=\\dfrac{2x-1}{x-1}$ có đồ thị nhận đường thẳng $x=1$ làm đường tiệm cận đứng."
  },
  {
    "id": "2D141TN80",
    "question": "Tiệm cận xiên của đồ thị hàm số $y=3x+\\dfrac{2}{x-1}$ là",
    "options": [
      "$y=3$",
      "$y=3x$",
      "$y=x+1$",
      "$y=x-1$"
    ],
    "answer": 1,
    "explain": "Tập xác định $\\mathbb{R} \\setminus \\{1\\}$. <br>  Ta có $\\lim \\limits_{x \\to-\\infty} \\left[f(x)-3x\\right] = \\lim \\limits_{x\\to-\\infty} \\dfrac{2}{x-1}=0$. <br>  Vậy đường thẳng $y=3x$ là tiệm cận xiên của đồ thị hàm số $y=3x+\\dfrac{2}{x-1}$."
  },
  {
    "id": "2D143TN81",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như hình bên. Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số đã cho bằng<br><img src=\"data/12/2D1/im2D14/dlts_12_DLTS8_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$1$",
      "$2$",
      "$0$",
      "$3$"
    ],
    "answer": 3,
    "explain": "Dựa vào bảng biến thiên ta thấy đồ thị hàm số trên có $2$ tiệm cận đứng và $1$ tiệm cận ngang.<br>  Vậy có tổng cộng 3 đường tiệm cận đứng và tiệm cận ngang."
  },
  {
    "id": "2D141TN82",
    "question": "Tiệm cận xiên của đồ thị hàm số $y=\\dfrac{x^2-2x+3}{x+1}$ có phương trình là",
    "options": [
      "$y=x+1$",
      "$y=x-1$",
      "$y=x-3$",
      "$y=x+3$"
    ],
    "answer": 2,
    "explain": "Biến đổi biểu thức của hàm số ta được  \\[y=f(x)=\\dfrac{x^2-2x+3}{x+1}=x-3+\\dfrac{6}{x+1}.\\]  Ta có $\\lim\\limits_{x\\to+\\infty}\\left[f(x)-(x-3)\\right]=\\lim\\limits_{x\\to+\\infty}\\left(\\dfrac{6}{x+1}\\right)=0 \\text{ và } \\lim\\limits_{x\\to-\\infty}\\left[f(x)-(x-3)\\right]=\\lim\\limits_{x\\to-\\infty}\\left(\\dfrac{6}{x+1}\\right)=0.$<br>  Vậy nên đồ thị hàm số nhận $y=x-3$ làm tiệm cận xiên."
  },
  {
    "id": "2D141TN83",
    "question": "Đường tiệm cận ngang của đồ thị hàm số $y=\\dfrac{2024}{x-1}$ là đường thẳng có phương trình",
    "options": [
      "$x=1$",
      "$y=0$",
      "$y=2024$",
      "$x=0$"
    ],
    "answer": 1,
    "explain": "Ta có $\\lim\\limits_{x\\to \\pm \\infty} y=0$.<br>  Đồ thị hàm số $y=\\dfrac{2024}{x-1}$ có tiệm cận ngang là đường thẳng $y=0$."
  },
  {
    "id": "2D141TN2",
    "question": "Cho hàm số $y=f(x)$ có $\\lim \\limits_ {x\\to-\\infty}f(x)=3$, $\\lim \\limits_{x\\to{2^+}}f(x)=-\\infty $. Mệnh đề nào sau đây đúng?",
    "options": [
      "Đồ thị hàm số đã cho có hai tiệm cận ngang",
      "Đồ thị hàm số đã cho có hai tiệm cận đứng",
      "Đồ thị hàm số đã cho có tiệm cận ngang là đường thẳng $y=3$",
      "Đồ thị hàm số đã cho có tiệm cận ngang là đường thẳng $y=2$"
    ],
    "answer": 2,
    "explain": "Ta có $\\lim \\limits_ {x\\to-\\infty}f(x)=3\\Rightarrow y=3$ là tiệm cận ngang của đồ thị hàm số.<br>  $\\lim \\limits_{x\\to{2^+}}f(x)=-\\infty \\Rightarrow x=2$ là tiệm cận đứng của đồ thị hàm số."
  },
  {
    "id": "2D141TN84",
    "question": "[Phan Ngọc Hiền - Lớp 12 - Đề cuối học kì 1 - Cà Mau]%[Phạm Văn Long]  Cho hàm số $y=\\dfrac{ax+b}{cx+d},\\,(a, b, c, d \\in \\mathbb{R}$, $c \\neq 0$, $a d-b c \\neq 0)$ có đồ thị là đường cong trong hình bên. Tiệm cận ngang của đồ thị hàm số đã cho có phương trình là<br><img src=\"data/12/2D1/im2D14/loc3_2_TL_TN_DS_THPT__000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$x=-1$",
      "$y=-1$",
      "$y=1$",
      "$x=1$"
    ],
    "answer": 2,
    "explain": "Tiệm cận ngang của đồ thị hàm số đã cho có phương trình là $y=1$."
  },
  {
    "id": "2D141TN85",
    "question": "Tiệm cận đứng của đồ thị hàm số $y=\\dfrac{5}{x-1}$ là đường thẳng có phương trình",
    "options": [
      "$x=5$",
      "$y=0$",
      "$y=1$",
      "$x=1$"
    ],
    "answer": 3,
    "explain": "Ta có: $\\lim\\limits_{x\\to 1^-}y=-\\infty$; $\\lim\\limits_{x\\to 1^+}y=+\\infty$. <br>  Suy ra $x=1$ là đường tiệm cận đứng của đồ thị hàm số."
  },
  {
    "id": "2D141TN86",
    "question": "Đường tiệm cận ngang của đồ thị hàm số $y = \\dfrac{2x-4}{x-1}$ có phương trình là",
    "options": [
      "$x=1$",
      "$y=2$",
      "$x=2$",
      "$y=4$"
    ],
    "answer": 1,
    "explain": "$\\lim\\limits_{x\\to\\infty} \\dfrac{2x-4}{x-1} = 2$ nên $y = 2$ là đường tiệm cận ngang của đồ thị hàm số."
  },
  {
    "id": "2D141TN87",
    "question": "Cho hàm số $y=f(x)$ có đồ thị như hình vẽ bên. Tiệm cận ngang của đồ thị hàm số là đường thẳng có phương trình<br><img src=\"data/12/2D1/im2D14/loc8_TT_THPT_AnDuong__000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$ x=-1 $",
      "$ x=1 $",
      "$ y=2 $",
      "$ y=-2 $"
    ],
    "answer": 2,
    "explain": "Tiệm cận ngang của đồ thị hàm số là $y=2$."
  },
  {
    "id": "2D141TN88",
    "question": "Cho đồ thị hàm số $y=\\dfrac{2x^2+x-5}{x+3}$ có đường tiệm cận xiên là đường thẳng $\\Delta\\colon y=ax+b$ với $a$, $b\\in \\mathbb{R}$, $a\\ne 0$. Giá trị của tổng $a+b$ bằng",
    "options": [
      "$3$",
      "$-5$",
      "$7$",
      "$-3$"
    ],
    "answer": 3,
    "explain": "Ta có $ y=\\dfrac{2x^2+x-5}{x+3}=2x-5+\\dfrac{10}{x+3}$ nên $\\Delta\\colon y=2x-5$.<br>  Khi đó $a+b=2-5=-3$."
  },
  {
    "id": "2D141TN89",
    "question": "Tiệm cận đứng của đồ thị hàm số $y=\\dfrac{2x+4}{x-1}$ là",
    "options": [
      "$x=1$",
      "$x=-1$",
      "$x=2$",
      "$x=-2$"
    ],
    "answer": 0,
    "explain": "Ta có $\\lim\\limits_{x \\to 1^+} \\dfrac{2x+4}{x-1} = +\\infty$ và $\\lim\\limits_{x \\to 1^-} \\dfrac{2x+4}{x-1} = -\\infty$.<br>  Suy ra $x=1$ là tiệm cận đứng của đồ thị hàm số."
  },
  {
    "id": "2D141TN6",
    "question": "Cho hàm số $y=f(x)$ có tập xác định $\\mathscr{D}=(-\\infty;5]$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D14/loc8_TT_THPT_NguyenKh_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tiệm cận ngang của đồ thị hàm số $y=f(x)$ là đường thẳng có phương trình là",
    "options": [
      "$y=4$",
      "$y=-2$",
      "$y=5$",
      "$x=5$"
    ],
    "answer": 1,
    "explain": "Từ bảng biến thiên suy ra hàm số $\\lim\\limits_{x \\to-\\infty} f(x)=-2\\Rightarrow y=-2$ là tiệm cận ngang của đồ thị hàm số $y=f(x)$ trên $\\mathscr{D}=\\left(-\\infty; 5\\right]$."
  },
  {
    "id": "2D141TN90",
    "question": "Đường tiệm cận xiên của đồ thị hàm số $y=\\dfrac{x^2+2x-2}{x-2}$ là",
    "options": [
      "$y=-x+3$",
      "$y=x+3$",
      "$y=x-3$",
      "$y=x+4$"
    ],
    "answer": 3,
    "explain": "Ta có $y = \\dfrac{x^2+2x-2}{x-2} = x + 4 + \\dfrac{6}{x-2}$.<br>  Vì $\\lim\\limits_{x \\to \\infty} [y - (x+4)] = \\lim\\limits_{x \\to \\infty} \\dfrac{6}{x-2} = 0$, nên đường thẳng $y=x+4$ là tiệm cận xiên của đồ thị hàm số."
  },
  {
    "id": "2D143TN8",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D14/loc8_TT_THPT_NguyenVi_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tổng số đường tiệm cận ngang và tiệm cận đứng của đồ thị hàm số đã cho là",
    "options": [
      "$1$",
      "$2$",
      "$4$",
      "$3$"
    ],
    "answer": 1,
    "explain": "Dựa vào bảng biến thiên ta có  <br>- $\\lim\\limits_{x\\to 0^+} f(x) = +\\infty$ nên $x=0$ là đường tiệm cận đứng của đồ thị hàm số.<br>- $\\lim\\limits_{x\\to -\\infty} f(x) = 2$ nên $y=2$ là đường tiệm cận ngang của đồ thị hàm số.  Vậy đồ thị hàm số đã cho có $2$ đường tiệm cận đứng và ngang."
  },
  {
    "id": "2D141TN9",
    "question": "Tiệm cận xiên của đồ thị hàm số $y = f(x) = \\dfrac{-x^2+x+3}{1-x}$ đi qua điểm nào dưới đây?",
    "options": [
      "$N(2;1)$",
      "$Q(1;1)$",
      "$P(2;-2)$",
      "$M(1;2)$"
    ],
    "answer": 1,
    "explain": "Điều kiện xác định $x \\ne 1$.<br>  Khi đó $y = f(x) = \\dfrac{-x^2+x+3}{1-x} = x - \\dfrac{3}{1-x}$.<br>  Ta có $\\lim\\limits_{x \\to \\pm\\infty} \\left[f(x) - x\\right] = \\lim\\limits_{x \\to \\pm\\infty} \\dfrac{3}{1 - x} = 0$.<br>  Suy ra đường tiệm cận xiên của đồ thị hàm số là $y=x$.<br>  Thay $x = 1$ vào phương trình $y = x$ ta được $y = 1$.<br>  Vậy đường tiệm cận xiên của đồ thị hàm số đi qua điểm $Q(1;1)$."
  },
  {
    "id": "2D141TN91",
    "question": "Phương trình đường tiệm cận ngang của đồ thị hàm số $y = f(x) =\\dfrac{-2x-1}{x-2}$ là",
    "options": [
      "$y = -2$",
      "$x = 2$",
      "$x = -2$",
      "$y = 2$"
    ],
    "answer": 0,
    "explain": "Ta có $\\lim\\limits_{x\\to +\\infty} y = \\lim\\limits_{x\\to +\\infty} \\dfrac{-2x-1}{x-2} = -2$ và $\\lim\\limits_{x\\to -\\infty} y = \\lim\\limits_{x\\to -\\infty} \\dfrac{-2x-1}{x-2} = -2$.<br>  Vậy $y = -2$ là tiệm cận ngang của đồ thị hàm số."
  }
];
