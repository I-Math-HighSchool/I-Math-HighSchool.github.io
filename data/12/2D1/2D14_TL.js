// =========================================================================
// KHỐI DỮ LIỆU: 2D14 - Trả lời ngắn
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan2D14 = [
  {
    "id": "2D144TL1",
    "question": "Một công ty sản xuất đồ chơi ước tính chi phí để sản xuất $x$ (sản phẩm), $x&gt;0$ là $C(x)=2x^2-x+25$ (nghìn đồng). Gọi $f(x)$ là chi phí trung bình sản xuất mỗi sản phẩm. Phương trình đường tiệm cận xiên của đồ thị hàm số $y=f(x)$ có dạng $y=ax+b$. Tính $T=b-a$.",
    "answer": "-3",
    "explain": "Chi phí trung bình sản xuất mỗi sản phẩm là $f(x)=\\dfrac{C(x)}{x}=2x-1+\\dfrac{25}{x}$.<br>  Ta có $\\lim\\limits_{x\\to +\\infty} \\left[f(x)-(2x-1)\\right]=\\lim\\limits_{x\\to +\\infty} \\dfrac{25}{x}=0$.<br>  Suy ra $y=2x-1$ là tiệm cận xiên của đồ thị hàm số.<br>  Vậy $a=2$ và $b=-1$, do đó $T=b-a=-3$."
  },
  {
    "id": "2D143TL2",
    "question": "Cho hàm số $y = \\dfrac{x^2 + x - 2}{x + 4}$ có đồ thị $(C)$. Hình thang tạo bởi các đường tiệm cận đứng, tiệm cận xiên của đồ thị $(C)$ và các trục tọa độ như hình vẽ bên. Tính diện tích hình thang đó.  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "20",
    "explain": "Ta có $y = \\dfrac{x^2 + x - 2}{x + 4} = x - 3 + \\dfrac{10}{x+4}$.<br>  Ta có tiệm cận đứng và tiệm cận xiên của đồ thị lần lượt là $x = -4$ và $y = x - 3$.<br>   Giao điểm của tiệm cận đứng và trục hoành là $A(-4; 0)$.<br>  Giao điểm của tiệm cận xiên và trục tung là $B(0; -3)$.<br>   Hai đường tiệm cận cắt nhau tại $C(-4;-7)$.<br>  Hình thang cần tính diện tích là hình thang vuông $OABC$ (với $O$ là gốc tọa độ).<br>  Diện tích hình thang $OABC$: $S = \\dfrac{(AC + OB) \\cdot OA}{2} = \\dfrac{(7 + 3) \\cdot 4}{2} = 20$."
  },
  {
    "id": "2D141TL3",
    "question": "Cho hàm số $y=f(x)=\\dfrac{4 x^2-7 x+1}{3 x-1}$ có đồ thị $(C)$. Đồ thị $(C)$ có đường tiệm cận xiên là $y=a x+b$ . Khi đó $3 a+9 b$ bằng",
    "answer": "-13",
    "explain": "Ta có   <br>- $a=\\lim \\limits_{x \\to +\\infty} \\left(\\dfrac{4 x^2-7 x+1}{3 x-1} : x\\right) =\\dfrac{4}{3}$.<br>- $b=\\lim \\limits_{x \\to +\\infty} \\left(\\dfrac{4 x^2-7 x+1}{3 x-1} -\\dfrac{4}{3}x\\right) =-\\dfrac{17}{9}$.  Vậy đồ thị hàm số đã cho có một đường tiệm cận xiên $y=\\dfrac{4}{3}x-\\dfrac{17}{9}$.<br>  Tương tự khi $x \\to -\\infty$.<br>  Suy ra $a=\\dfrac{4}{3}$ và $b=-\\dfrac{17}{9}$. <br>  Do đó $3a+9b=3\\cdot\\dfrac{4}{3}+9\\cdot\\left(-\\dfrac{17}{9}\\right)=-13$."
  },
  {
    "id": "2D141TL4",
    "question": "Tìm số đường tiệm cận của đồ thị hàm số sau $y = \\dfrac{-2x-1}{\\sqrt{x^2+x+2}}$.",
    "answer": "2",
    "explain": "Tập xác định $\\mathscr{D} = \\mathbb{R}$. <br>  Do đó đồ thị hàm số không có tiệm cận đứng.  \\[  \\lim_{x \\to -\\infty} \\frac{-2x-1}{\\sqrt{x^2+x+1}} = \\lim_{x \\to -\\infty} \\dfrac{x\\left(-2-\\dfrac{1}{x}\\right)}{-x\\sqrt{1+\\dfrac{1}{x}+\\dfrac{1}{x^2}}} = \\lim_{x \\to -\\infty} \\dfrac{-2-\\dfrac{1}{x}}{-\\sqrt{1+\\dfrac{1}{x}+\\dfrac{1}{x^2}}} = 2.  \\]  nên $y = 2$ là tiệm cận ngang của đồ thị hàm số (khi $x \\to -\\infty$).  \\[  \\lim_{x \\to +\\infty} \\dfrac{-2x-1}{\\sqrt{x^2+x+1}} = \\lim_{x \\to +\\infty} \\dfrac{x\\left(-2-\\dfrac{1}{x}\\right)}{x\\sqrt{1+\\dfrac{1}{x}+\\frac{1}{x^2}}} = \\lim_{x \\to +\\infty} \\frac{-2-\\dfrac{1}{x}}{\\sqrt{1+\\dfrac{1}{x}+\\dfrac{1}{x^2}}} = -2.  \\]  nên $y = -2$ là tiệm cận ngang của đồ thị hàm số (khi $x \\to +\\infty$).<br>  Vậy hàm số có $2$ tiệm cận."
  },
  {
    "id": "2D144TL5",
    "question": "Để loại bỏ $x\\%$ một loại tảo độc khỏi một hồ nước, người ta ước tính chi phí bỏ ra là $C(x)=\\dfrac{45x}{100-x}$ (triệu đồng), với $0\\leqslant x&lt;100$. Đồ thị hàm số $C(x)$ có tiệm cận đứng là đường thẳng $x=a$. Khi đó $a+24$ có giá trị là bao nhiêu?",
    "answer": "124",
    "explain": "Ta có $\\lim\\limits_{x\\to 100^-}\\dfrac{45}{100-x}=+\\infty$. <br>  Suy ra $C(x)$ nhận $x=100=a$ là đường tiệm cận đứng. <br>  Vậy $a+24=124$."
  },
  {
    "id": "2D141TL6",
    "question": "Tiệm cận xiên của đồ thị hàm số $y = \\dfrac{2x^2+3x+2}{x+1}$ có dạng $y = ax+b$, tính $18a+1\\,989b$.",
    "answer": "2025",
    "explain": "Thực hiện phép chia đa thức  \\[  \\dfrac{2x^2+3x+2}{x+1}=2x+1+\\dfrac{1}{x+1}.  \\]  Do đó tiệm cận xiên là $y=2x+1$, suy ra $a=2$, $b=1$.<br>   Vậy $18a+1\\,989b=18\\cdot2+1\\,989\\cdot1=36+1\\,989=2\\,025$."
  },
  {
    "id": "2D142TL7",
    "question": "Hàm số $y=f(x)=\\dfrac{x+1}{(3-x) \\cdot \\sqrt{x-m}}$, $m$ là tham số. Có tất cả bao nhiêu giá trị nguyên của $m \\in[-50 ; 50]$ để đồ thị hàm số có đúng $2$ đường tiệm cận.",
    "answer": "49",
    "explain": "Tập xác định $\\mathscr{D}=(m ;+\\infty)\\setminus\\{3\\}$.<br>  Ta có $\\lim\\limits_{x \\to+\\infty} f(x)=0$ nên đồ thị hàm số có tiệm cận ngang là $y=0$.<br>  Đồ thị hàm số có đúng $2$ đường tiệm cận khi và chỉ khi đồ thị hàm số có đúng $1$ đường tiệm cận đứng. Khi đó xảy ra 2 trường hợp sau  <br>- &lt;strong&gt;Trường hợp 1.&lt;/strong&gt; $m=-1$.<br>  Tập xác định $\\mathscr{D}=(-1 ;+\\infty) \\setminus\\{3\\}$.<br>  Khi đó $f(x)=\\dfrac{x+1}{(3-x) \\sqrt{x+1}}=\\dfrac{\\sqrt{x+1}}{3-x} \\Rightarrow \\lim\\limits_{x \\rightarrow 3^{+}} f(x)=-\\infty, \\lim\\limits_{x \\rightarrow 3^{-}} f(x)=+\\infty$ nên đồ thị hàm số có duy nhất $1$ tiệm cận đứng là $x=3$.<br>- &lt;strong&gt;Trường hợp 2.&lt;/strong&gt; $m \\neq-1$.<br>  Ta có $\\lim\\limits_{x \\to m^{+}}|f(x)|=+\\infty$ nên $x=m$ là một tiệm cận đứng của đồ thị hàm số.<br>  Để $x=m$ là tiệm cận đứng duy nhất của đồ thị hàm số thì $m \\geq 3$.  Do đó $m=-1 \\text{ hoặc } m \\geq 3$.<br>  Với $m$ nguyên và $m \\in[-50 ; 50] \\Rightarrow m \\in\\{-1 ; 3 ; 4 ; 5 ; \\ldots ; 50\\}$.<br>  Vậy có $49$ giá trị nguyên của $m$ thỏa mãn."
  },
  {
    "id": "2D141TL8",
    "question": "Đồ thị hàm số $y = \\dfrac{x^2-2x+5}{x^2-1}$ có bao nhiêu đường tiệm cận?",
    "answer": "3",
    "explain": "Ta có   <br>- $\\lim\\limits_{x\\to \\pm \\infty}y=\\lim\\limits_{x\\to \\pm \\infty} \\left(\\dfrac{x^2-2x+5}{x^2-1}\\right)=\\lim\\limits_{x\\to \\pm \\infty} \\left(\\dfrac{1-\\dfrac{2}{x}+\\dfrac{5}{x^2}}{1-\\dfrac{1}{x^2}}\\right)=1$ do đó $y=1$ là tiệm cận ngang của đồ thị hàm số.<br>- $\\lim\\limits_{x\\to 1^{+}}y=\\lim\\limits_{x\\to 1^{+}}\\left(\\dfrac{x^2-2x+5}{x^2-1}\\right)=+\\infty$ do đó $x=1$ là tiệm cận đứng của đồ thị hàm số.<br>- $\\lim\\limits_{x\\to -1^{+}}y=\\lim\\limits_{x\\to -1^{+}}\\left(\\dfrac{x^2-2x+5}{x^2-1}\\right)=-\\infty$ do đó $x=-1$ là tiệm cận đứng của đồ thị hàm số.  Vậy đồ thị hàm số có ba đường tiệm cận."
  },
  {
    "id": "2D141TL9",
    "question": "Đường tiệm cận đứng và đường tiệm cận ngang của đồ thị hàm số $y = \\dfrac{5x+2026}{x-2025}$ cùng với hai trục tọa độ tạo thành hình chữ nhật có chu vi bằng bao nhiêu?",
    "answer": "4060",
    "explain": "Xét hàm số $y = \\dfrac{5x+2026}{x-2025}$.<br>  Tập xác định: $\\mathscr{D} = \\mathbb{R} \\setminus \\{2025\\}$.<br>  $\\bullet$ Tiệm cận đứng:<br>  Ta có $\\lim\\limits_{x \\to 2025^+} y = +\\infty$ và $\\lim\\limits_{x \\to 2025^-} y = -\\infty$.<br>  Vậy đường tiệm cận đứng của đồ thị hàm số là đường thẳng $x = 2025$.<br>  $\\bullet$ Tiệm cận ngang:<br>  Ta có $\\lim\\limits_{x \\to \\pm\\infty} y = \\lim\\limits_{x \\to \\pm\\infty} \\dfrac{5x+2026}{x-2025} = \\lim\\limits_{x \\to \\pm\\infty} \\dfrac{5 + \\dfrac{2026}{x}}{1 - \\dfrac{2025}{x}} = 5$.<br>  Vậy đường tiệm cận ngang của đồ thị hàm số là đường thẳng $y = 5$.<br>  $\\bullet$ Các trục tọa độ là các đường thẳng $x = 0$ (trục $Oy$) và $y = 0$ (trục $Ox$).<br>  Bốn đường thẳng $x = 2025$, $y = 5$, $x = 0$ và $y = 0$ tạo thành một hình chữ nhật có các đỉnh tại $(0; 0)$, $(2025; 0)$, $(2025; 5)$ và $(0; 5)$.<br>  Hình chữ nhật này có chiều dài là $2025 - 0 = 2025$ và chiều rộng là $5 - 0 = 5$.<br>  Chu vi của hình chữ nhật là:  $P = 2 \\cdot (2025 + 5) = 2 \\cdot 2030 = 4060.$"
  },
  {
    "id": "2D141TL10",
    "question": "Gọi $I(a;b)$ là giao điểm của đường tiệm cận đứng và đường tiệm cận ngang của đồ thị hàm số $y=\\dfrac{x-2}{x+2}$.  Giá trị của biểu thức $T=a+b$ là bao nhiêu?",
    "answer": "-1",
    "explain": "Ta có $\\displaystyle\\lim\\limits_{x\\to -\\infty}y=\\displaystyle\\lim\\limits_{x\\to +\\infty}y=1$ nên đường thẳng $y=1$ là tiệm cận ngang của đồ thị hàm số.<br>  Lại có $\\displaystyle\\lim\\limits_{x\\to (-2)^+}y=-\\infty$ và $\\displaystyle\\lim\\limits_{x\\to (-2)^-}y=+\\infty$ nên đường thẳng $x=-2$ là tiệm cận đứng của đồ thị hàm số.<br>  Suy ra giao điểm của hai đường tiệm cận là $I(-2;1)$ hay $a=-2$; $b=1$.<br>  Vậy $T=a+b=-1$."
  },
  {
    "id": "2D141TL11",
    "question": "Đồ thị hàm số $y=\\dfrac{4-x^2}{x^2-6x+8}$ có bao nhiêu đường tiệm cận?",
    "answer": "2",
    "explain": "Ta có $y=\\dfrac{4-x^2}{x^2-6x+8}=\\dfrac{(2-x)(2+x)}{(x-4)(x-2)}=-\\dfrac{2+x}{x-4}$. <br>  Đồ thị có $2$ đường tiệm cận gồm $1$ tiệm cận đứng $x=4$ và $1$ tiệm cận ngang $y=-1$."
  },
  {
    "id": "2D141TL12",
    "question": "Hàm số $y=a x^3+b x^2+c x+d$ có đồ thị như hình vẽ. Tính giá trị biểu thức $P=1000 a+100 b+10 c+d$.<br><img src=\"data/12/2D1/im2D1/2D14_tikz_027.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "1404",
    "explain": "Vì đồ thị hàm số cắt trục tung tại điểm có tung độ bằng $4$ nên $d=4$.<br>  Ta có $y' = 3ax^2 + 2bx + c$. Vì hàm số đạt cực trị tại $x=0$ và $x=2$ nên ta có $c=0 \\text{ và } 12a+4b=0.$<br>  Mặt khác đồ thị hàm số đi qua điểm $A(1;0)$ nên $a+b+c+4=0$.<br>  Từ đó giải hệ phương trình ta thu được $a=2$, $b=-6$, $c=0$.<br>  Vậy $P=1000 a+100 b+10 c+d = 1404$."
  },
  {
    "id": "2D141TL13",
    "question": "Số dân của một thị trấn sau $t$ năm kể từ năm 1970 được ước tính bởi công thức $f(t) = \\dfrac{20t+5}{t+2}$ ($f(t)$ được tính bằng nghìn người). Xem $y=f(t)$ là một hàm số xác định trên nửa khoảng $[0; +\\infty)$. Đồ thị hàm số $y=f(t)$ có đường tiệm cận ngang là $y=a$. Giá trị của $a$ là bao nhiêu?",
    "answer": "20",
    "explain": "Ta có $\\lim \\limits_{t \\to +\\infty} f(t) = \\lim \\limits_{t \\to +\\infty} \\dfrac{20t + 5}{t + 2} = \\lim \\limits_{t \\to +\\infty} \\dfrac{20 + \\dfrac{5}{t}}{1 + \\dfrac{2}{t}} = \\dfrac{20 + 0}{1 + 0} = 20$.<br>  Suy ra tiệm cận ngang của đồ thị hàm số $f(t)$ là đường thẳng $y = 20$.<br>  Vậy $a = 20$."
  },
  {
    "id": "2D141TL14",
    "question": "Đồ thị hàm số $y = x^3 - 6x^2 + 2$ có hai điểm cực trị $A$ và $B$ cùng với gốc tọa độ $O$ tạo thành một tam giác có diện tích bằng bao nhiêu?",
    "answer": "4",
    "explain": "Tập xác định $D=\\mathbb{R}$.<br>  Ta có $y' = 3x^2 - 12x$.<br>  Ta có $y' = 0 \\Leftrightarrow 3x^2 - 12x = 0 \\Leftrightarrow x=0 \\text{ hoặc } x=4.$<br>  Ta có $y(0)=2$, $y(4)=-30$.<br>  Suy ra hai điểm cực trị là $A(0; 2)$ và $B(4; -30)$.<br>  Ta có $OA = \\sqrt{(0-0)^2 + (2-0)^2} = 2$.<br>  Ta thấy hai điểm $O(0; 0)$ và $A(0; 2)$ cùng nằm trên trục $Oy$.<br>  Do đó chiều cao $h$ của tam giác $OAB$ ứng với cạnh $OA$ là khoảng cách từ $B$ đến trục $Oy$.<br>  Suy ra $h = \\mathrm d(B, Oy) = |x_B| = |4| = 4$.<br>  Vậy diện tích tam giác $OAB$ là $S_{\\triangle OAB} = \\dfrac{1}{2} \\cdot OA \\cdot h = \\dfrac{1}{2} \\cdot 2 \\cdot 4 = 4$."
  },
  {
    "id": "2D141TL15",
    "question": "Cho hàm số $y=\\dfrac{-9x+1}{x+5}$. Biết các đường tiệm cận của đồ thị đã cho tạo với hai trục tọa độ một hình chữ nhật, hỏi hình chữ nhật có chu vi bằng bao nhiêu?",
    "answer": "28",
    "explain": "Ta có $\\lim\\limits_{x\\to\\pm \\infty}\\dfrac{-9x+1}{x+5}=-9$.<br>  $\\lim\\limits_{x\\to-5^+}\\dfrac{-9x+1}{x+5}=+\\infty$, $\\lim\\limits_{x\\to-5^-}\\dfrac{-9x+1}{x+5}=-\\infty$<br>  Suy ra đồ thị hàm số có tiệm cận đứng đường thẳng $x=-5$ và đường tiệm cận ngang là $y=-9$.<br>  Chu vi hình chữ nhật $C=2(5+9)=28$"
  },
  {
    "id": "2D141TL16",
    "question": "Đồ thị hàm số $y = \\dfrac{x-3}{x-1}$ có bao nhiêu đường tiệm cận?",
    "answer": "2",
    "explain": "Điều kiện xác định: $x - 1 \\neq 0 \\Leftrightarrow x \\neq 1$.<br>  Tập xác định: $\\mathscr{D} = \\mathbb{R}\\setminus\\left\\lbrace 1 \\right\\rbrace$.<br>  Ta có  <br>- $\\displaystyle \\lim\\limits_{x \\to \\pm \\infty} y = \\lim\\limits_{x \\to \\pm \\infty} \\dfrac{x-3}{x-1} = 1$ nên đường thẳng $y = 1$ là tiệm cận ngang của đồ thị hàm số.<br>- $\\displaystyle \\lim\\limits_{x \\to 1^{-}} y = \\lim\\limits_{x \\to 1^{-}} \\dfrac{x-3}{x-1} = +\\infty$ nên đường thẳng $x = 1$ là tiệm cận đứng của đồ thị hàm số.<br>- $\\displaystyle \\lim\\limits_{x \\to 1^{+}} y = \\lim\\limits_{x \\to 1^{+}} \\dfrac{x-3}{x-1} = -\\infty$ nên đường thẳng $x = 1$ là tiệm cận đứng của đồ thị hàm số.  Vậy đồ thị hàm số đã cho có $2$ đường tiệm cận."
  },
  {
    "id": "2D141TL17",
    "question": "Biết rằng tiệm cận xiên của đồ thị hàm số $y=\\dfrac{2x^2-x+3}{x-1}$ đi qua điểm $A(a;0)$. Giá trị của $a$ bằng bao nhiêu?",
    "answer": "-0,5",
    "explain": "Điều kiện $x \\ne 1$.<br>  Ta có $y=\\dfrac{2x^2-x+3}{x-1}=2x+1+\\dfrac{4}{x-1}$.<br>  Suy ra $\\lim\\limits_{x \\to +\\infty}[f(x)-(2x+1)]=\\lim\\limits_{x \\to +\\infty}\\dfrac{4}{x-1}=0$.<br>  Do đó $y=2x+1$ là tiệm cận xiên của đồ thị hàm số.<br>  Vì tiệm cận xiên đi qua điểm $A(a;0)$ nên ta có<br>  $0=2a+1 \\Leftrightarrow a=-\\dfrac{1}{2}=-0{,}5$."
  },
  {
    "id": "2D141TL18",
    "question": "Cho hàm số $y=\\dfrac{ax^2+bx+c}{x+d}$ có đồ thị như hình vẽ dưới đây. Tính $a+b-c-d$.  <br><img src=\"data/12/2D1/im2D1/2D14_tikz_035.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "-2",
    "explain": "Từ đồ thị hàm số, ta xác định các yếu tố sau  <br>- Đồ thị có tiệm cận đứng là đường thẳng $x=-1 \\Leftrightarrow d=1$.<br>- Đồ thị đi qua $O(0,0)$ suy ra $\\dfrac{c}{d}=0$ hay $c=0$.<br>- Đồ thị có tiệm cận xiên là đường thẳng đi qua các điểm $(1,0)$ và $(0;1)$.<br>  Vậy tiệm cận xiên là $y=-x+1$.  Ta có $y=\\dfrac{ax^2+bx+c}{x+d}= ax + (b-ad) + \\dfrac{c-bd+ad^2}{x+d}$.<br>  Tiệm cận xiên có phương trình $y=ax+(b-ad)$.<br>  Đồng nhất với phương trình $y=-x+1$, ta được $a=-1 \\text{ và } b-ad=1$.<br>  Thay $a=-1$ và $d=1$ ta được $b=0$.<br>  Vậy các hệ số là $a=-1, b=c=0, d=1$.<br>  Giá trị của biểu thức là $a+b-c-d = -1+0-0-1 = -2$."
  },
  {
    "id": "2D141TL19",
    "question": "Cho hàm số $y = \\dfrac{x^2-8x+10}{x-2}$. Biết đường tiệm cận xiên của đồ thị hàm số có dạng $y=ax+b$. Tính giá trị của $a+b$.",
    "answer": "-5",
    "explain": "Ta có $y = x-6+\\dfrac{-2}{x-2}$.<br>  Vì $\\lim \\limits_{x \\to \\pm\\infty} \\dfrac{-2}{x-2} = 0$, nên đường tiệm cận xiên của đồ thị hàm số là $y=x-6$.<br>  Đồng nhất với phương trình $y=ax+b$, ta có $a=1$ và $b=-6$.<br>  Vậy giá trị của $a+b$ là $1+(-6)=-5$."
  },
  {
    "id": "2D144TL20",
    "question": "Một ống khói của nhà máy điện hát nhân có mặt cắt là một hypebol $(H)$ có phương trình chính tắc là $\\dfrac{x^2}{27^2}-\\dfrac{y^2}{40^2}=1$ (xem hình dưới). Hai nhánh bên trên của $Ox$ của $(H)$ là đồ thị $(C)$ của hàm số $y=\\dfrac{40}{27}\\sqrt{x^2-27^2}$ (phần nét liên đậm). Đường thẳng $y=\\dfrac{a}{b}x$ là một tiệm cận xiên của $(C)$. Biết rằng $a\\in\\mathbb{N}$, $b\\in\\mathbb{N}^*$, $\\dfrac{a}{b}$ là phân số tối giản. Tính $a+b$.<br><img src=\"data/12/2D1/im2D1/2D14_tikz_036.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "67",
    "explain": "Đặt $f(x)=\\dfrac{40}{27}\\sqrt{x^2-27^2}$.<br>  Ta có $\\lim\\limits_{x \\to +\\infty} \\dfrac{f(x)}{x} = \\lim\\limits_{x \\to +\\infty} \\dfrac{40}{27} \\dfrac{\\sqrt{x^2-27^2}}{x} = \\lim\\limits_{x \\to +\\infty} \\dfrac{40}{27} \\cdot \\dfrac{\\sqrt{1-\\dfrac{27^2}{x^2}}}{1} = \\dfrac{40}{27}$.<br>  Lại có $\\lim\\limits_{x \\to +\\infty} \\left(f(x)-\\dfrac{40}{27}x\\right) = \\lim\\limits_{x \\to +\\infty} \\left(\\dfrac{40}{27} \\sqrt{x^2-27^2} - \\dfrac{40}{27}x \\right) = \\dfrac{40}{27} \\lim\\limits_{x \\to +\\infty} \\dfrac{-27^2}{\\sqrt{x^2-27^2}+x}=0$.<br>  Do đó đồ thị hàm số có một tiệm cận xiên là $y=\\dfrac{40}{27}x$. Suy ra $a=40$ và $b=27$.<br>  Vậy $a+b=67$."
  },
  {
    "id": "2D141TL21",
    "question": "Cho hàm số $y=2x+1+\\sqrt{x^2-4x+5}$. Biết đồ thị hàm số có hai tiệm cận xiên cắt nhau tại $I (a;b)$. Tính $a+b$.",
    "answer": "7",
    "explain": "Hàm số $y=2x+1+\\sqrt{x^2-4x+5}$ xác định với mọi $x\\in\\mathbb{R}$.<br>  Ta có  <br>- $\\lim\\limits_{x\\to -\\infty}\\dfrac{f(x)}{x}=\\lim\\limits_{x\\to -\\infty}\\dfrac{2x+1+\\sqrt{x^2-4x+5}}{x}=\\lim\\limits_{x\\to -\\infty}\\left(2+\\dfrac{1}{x}-\\sqrt{1-\\dfrac{4}{x}+\\dfrac{5}{x^2}}\\right)=1$.<br>- $\\lim\\limits_{x\\to +\\infty}\\dfrac{f(x)}{x}=\\lim\\limits_{x\\to +\\infty}\\dfrac{2x+1+\\sqrt{x^2-4x+5}}{x}=\\lim\\limits_{x\\to +\\infty}\\left(2+\\dfrac{1}{x}+\\sqrt{1-\\dfrac{4}{x}+\\dfrac{5}{x^2}}\\right)=3$.<br>- Với $a=1$, ta có  $b = \\lim\\limits_{x\\to-\\infty}\\left[f(x)-ax\\right]$<br>$= \\lim\\limits_{x\\to-\\infty}\\left(x+1+\\sqrt{x^2-4x+5}\\right)$<br>$= 1+\\lim\\limits_{x\\to-\\infty}\\left(x+\\sqrt{x^2-4x+5}\\right)$<br>$= 1+\\lim\\limits_{x\\to-\\infty}\\dfrac{4x-5}{x-\\sqrt{x^2-4x+5}}$<br>$= 1+\\lim\\limits_{x\\to-\\infty}\\dfrac{4-\\dfrac{5}{x}}{1+\\sqrt{1-\\dfrac{4}{x}+\\dfrac{5}{x^2}}}$<br>$= 3.$  Suy ra, $d_1\\colon y=x+3$ là tiệm cận xiện của đồ thị hàm số đã cho.<br>- Với $a=3$, ta có  $b = \\lim\\limits_{x\\to+\\infty}\\left[f(x)-ax\\right]$<br>$= \\lim\\limits_{x\\to+\\infty}\\left(-x+1+\\sqrt{x^2-4x+5}\\right)$<br>$= 1+\\lim\\limits_{x\\to+\\infty}\\left(\\sqrt{x^2-4x+5}-x\\right)$<br>$= 1+\\lim\\limits_{x\\to+\\infty}\\dfrac{-4x+5}{\\sqrt{x^2-4x+5}+x}$<br>$= 1+\\lim\\limits_{x\\to+\\infty}\\dfrac{-4+\\dfrac{5}{x}}{\\sqrt{1-\\dfrac{4}{x}+\\dfrac{5}{x^2}}+1}$<br>$= -1.$  Suy ra, $d_2\\colon y=3x-1$ là tiệm cận xiện của đồ thị hàm số đã cho.  Khi đó, giao điểm của $d_1$ và $d_2$ là nghiệm của phương trình $x+3=3x-1\\Leftrightarrow x=2$, $y=5$.<br>  Suy ra $d_1$ và $d_2$ cắt nhau tại điểm $I(2;5)$.<br>  Vậy $a+b=7$."
  },
  {
    "id": "2D144TL22",
    "question": "Số lượng sản phầm bán được của một công ty trong $x$ (tháng) được tính theo công thức $S(x)=250\\left(4-\\dfrac{9}{3+x}\\right)$, trong đó $x \\geq 1$. Khi $x$ càng lớn thì số lượng sản phầm bán được của công ty đó trong $x$ (tháng) sẽ tiến gần đến bao nhiêu sản phảm?",
    "answer": "1000",
    "explain": "Ta có $\\lim\\limits_{x\\to +\\infty} S(x)=\\lim\\limits_{x\\to +\\infty} 250\\left(4-\\dfrac{9}{3+x}\\right)=1\\,000$.<br>  Vậy khi $x$ càng lớn thì số lượng sản phẩm bán được của công ty đó sẽ tiến gần tới $1\\,000$ sản phẩm."
  },
  {
    "id": "2D141TL23",
    "question": "Cho hàm số $y=\\dfrac{x^2+3x+2}{x-3}$ có đường tiệm cận xiên của đồ thị là $y=g(x)=ax+b$. Tính $g(-2)$?",
    "answer": "4",
    "explain": "$\\text{Ta có: } a=\\lim\\limits_{x \\to +\\infty} \\dfrac{f(x)}{x} = \\lim\\limits_{x \\to +\\infty}\\dfrac{x^2+3x+2}{x(x-3)}=1.$<br>$\\text{và } b=\\lim\\limits_{x \\to +\\infty} \\left[f(x)-x\\right]=\\lim\\limits_{x \\to +\\infty}\\dfrac{6x+2}{x-3}= 6.$  Vậy đường tiệm cận xiên của đồ thị hàm số là $y=g(x)=x+6$.<br>  Do đó $g(-2)=4$."
  },
  {
    "id": "2D141TL24",
    "question": "Cho hàm số $f(x)=2x-\\sqrt{x^{2}-x}$. Tìm số đường tiệm cận xiên của đồ thị hàm số.",
    "answer": "2",
    "explain": "Hàm số xác định và liên tục trên $\\mathscr{D}=(-\\infty;0]\\cup[1;+\\infty)$.<br>  Ta có  <br>- $a=\\lim\\limits_{x \\to+\\infty} \\dfrac{f(x)}{x}=\\lim\\limits_{x \\to+\\infty} \\dfrac{2x-\\sqrt{x^{2}-x}}{x}=\\lim\\limits_{x \\to+\\infty}\\left(2-\\sqrt{1-\\dfrac{1}{x}}\\right)=1$.<br>- $b=\\lim\\limits_{x \\to+\\infty}(f(x)-x)=\\lim\\limits_{x \\to+\\infty}\\left(x-\\sqrt{x^{2}-x}\\right)=\\lim\\limits_{x \\to+\\infty} \\dfrac{x}{x+\\sqrt{x^{2}-x}}=\\lim\\limits_{x \\to+\\infty} \\dfrac{1}{1+\\sqrt{1-\\dfrac{1}{x}}}=\\dfrac{1}{2}$.  Suy ra $y=x+\\dfrac{1}{2}$ là một tiệm cận xiên của đồ thị hàm số đã cho.<br>  Mặt khác,  <br>- $a=\\lim\\limits_{x \\to-\\infty} \\dfrac{f(x)}{x}=\\lim\\limits_{x \\to-\\infty} \\dfrac{2x-\\sqrt{x^{2}-x}}{x}=\\lim\\limits_{x \\to-\\infty}\\left(2+\\sqrt{1-\\dfrac{1}{x}}\\right)=3$.<br>- $b=\\lim\\limits_{x \\to-\\infty}(f(x)-3x)=-\\lim\\limits_{x \\to-\\infty}\\left(x+\\sqrt{x^{2}-x}\\right)=-\\lim\\limits_{x \\to-\\infty} \\dfrac{x}{x-\\sqrt{x^{2}-x}}=-\\lim\\limits_{x \\to-\\infty} \\dfrac{1}{1+\\sqrt{1-\\dfrac{1}{x}}}=-\\dfrac{1}{2}$.  Suy ra $y=3x-\\dfrac{1}{2}$ là một tiệm cận xiên của đồ thị hàm số đã cho.<br>  Vậy đồ thị hàm số có hai đường tiệm cận xiên."
  },
  {
    "id": "2D143TL26",
    "question": "Người ta muốn làm một cái bể dạng hình hộp chữ nhật không nắp (như hình vẽ) có thể tích bằng $5$ m$^{3}$. Chiều cao của bể là $10$ dm, các kích thước khác là $x$ mét, $y$ mét với $x&gt;0$ và $y&gt;0$. Diện tích toàn phần của bể (không kể nắp) là hàm số $S(x)$ trên khoảng $(0;+\\infty)$. Đường tiệm cận xiên của đồ thị hàm số $S(x)$ là đường thẳng $y=ax+b$. Tính giá trị của biểu thức $P=a^{2}+b^{2}$.  <br><img src=\"data/12/2D1/im2D14/dlts_12_DLTS2_014.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "29",
    "explain": "Ta có $10$ dm = $1$ m.  Do thể tích của bể là $5$ m$^{3}$ nên $1 \\cdot x\\cdot y=5 \\Leftrightarrow xy=5$.<br>  Diện tích toàn phần của bể là $S(x)=x\\cdot y+2\\cdot1\\cdot x+2\\cdot1\\cdot y=5+2x+\\dfrac{10}{x}$, $(x&gt;0)$.<br>  Ta có $\\lim\\limits_{x \\to+\\infty}(S(x)-(5+2x))=\\lim\\limits_{x \\to+\\infty} \\dfrac{10}{x}=0$.<br>  Suy ra đồ thị hàm số $S(x)$ có đường tiệm cận xiên là $y=2x+5 \\Rightarrow a=2$, $b=5$.<br>  Ta có $P=a^{2}+b^{2}=2^{2}+5^{2}=29$."
  },
  {
    "id": "2D141TL1",
    "question": "Cho hàm số $y= \\dfrac{2x+3}{1-x}$. Gọi đường thẳng tiệm cận đứng và tiệm cận ngang của đồ thị hàm số lần lượt có phương trình $x=a$; $y=b$. Khi đó tổng $a+3b$ bằng bao nhiêu?",
    "answer": "-5",
    "explain": "Tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y=\\dfrac{2x+3}{1-x} $ lần lượt là $x=1$; $y=-2$.<br>  Suy ra $a=1$; $b=-2$.<br>   Vậy $a+3b=1+3\\cdot (-2)=-5$."
  },
  {
    "id": "2D142TL2",
    "question": "Cho hàm số $f\\left( x \\right)$ liên tục trên $\\mathbb{R}$ và $\\lim\\limits_{x\\to -\\infty }\\,f\\left( x \\right)=1$; $\\lim\\limits_{x\\to +\\infty}\\,f\\left(x\\right)=+\\infty$. Có bao nhiêu giá trị nguyên của tham số $m$ thuộc $\\left[ -2\\,020;2\\,020 \\right]$ để đồ thị hàm số $g\\left( x \\right)=\\dfrac{\\sqrt{x^2+1\\,000x}+x}{\\sqrt{2f\\left( x \\right)-f^2\\left(x\\right)}+m}$ có tiệm cận ngang nằm dưới đường thẳng $y=-1$.",
    "answer": "499",
    "explain": "Ta có   <br>- $\\lim\\limits_{x\\to +\\infty }f\\left( x \\right)=+\\infty \\Rightarrow \\lim\\limits_{x\\to +\\infty }\\left[ 2f\\left( x \\right)-f^2\\left( x \\right) \\right]=-\\infty$.<br>  Do đó không tồn tại $\\lim\\limits_{x\\to +\\infty }g\\left( x \\right)$.<br>- $\\lim\\limits_{x\\to -\\infty }f\\left( x \\right)=1\\Rightarrow \\lim\\limits_{x\\to -\\infty }\\left[\\sqrt{2f\\left( x \\right)-f^2\\left( x \\right)}+m \\right]=1+m$.  Ta có   $\\lim\\limits_{x\\to -\\infty }\\,\\left[ \\sqrt{x^2+1\\,000x}+x \\right] = \\lim\\limits_{x\\to -\\infty }\\,\\left[ \\dfrac{1\\,000x}{\\sqrt{x^2+1\\,000x}-x} \\right]$<br>$= \\lim\\limits_{x\\to -\\infty }\\,\\left[ \\dfrac{1\\,000}{-\\sqrt{1+\\dfrac{1\\,000}{x}}-1} \\right]=-500.$  Do đó $\\lim\\limits_{x\\to -\\infty }\\,g\\left( x \\right)=\\dfrac{-500}{1+m}\\,\\left( m\\ne -1 \\right)$ suy ra tiệm cận ngang của đồ thị hàm số $g\\left( x \\right)$ là đường thẳng $y=\\dfrac{-500}{1+m}$.<br>  Để đồ thị hàm số $g\\left( x \\right)$ có tiệm cận ngang nằm dưới đường thẳng $y=-1$ khi và chỉ khi   $\\dfrac{-500}{1+m}&lt;-1\\Leftrightarrow \\dfrac{m-499}{m+1}&lt;0\\Leftrightarrow -1&lt;m&lt;499.$   Mà $m$ nguyên thuộc $\\left[ -2020;2020 \\right]$ nên $m\\in \\left\\{ 0;1;2;\\ldots;498 \\right\\}$.<br>  Vậy có $498-0+1=499$ giá trị nguyên của $m$."
  },
  {
    "id": "2D141TL25",
    "question": "Đồ thị hàm số $y=\\dfrac{3x-1}{x+4}$ có đường tiệm cận đứng cắt đường tiệm cận ngang tại điểm $I$. Tính khoảng cách từ điểm $I$ đến gốc tọa độ $O$.",
    "answer": "5",
    "explain": "Tiệm cận đứng là $x=-4$.<br>  Tiệm cận ngang là $y=\\dfrac{3}{1}=3$.<br>  Giao điểm của hai đường tiệm cận là $I(-4; 3)$.<br>  Khoảng cách từ điểm $I$ đến điểm $O$ là $IO=\\sqrt{(0+4)^2+(0-3)^2}=5$."
  }
];
