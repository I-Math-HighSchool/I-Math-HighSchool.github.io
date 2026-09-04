// =========================================================================
// KHỐI DỮ LIỆU: §2. Hàm số bậc hai - Đúng sai
// Nguồn: SachBaiHoc_T10/Data-T10/DS10-CD3.4-DS.tex (chuyển từ LaTeX)
// Hình vẽ (bảng biến thiên, đồ thị, bảng số liệu...) đã được biên dịch sẵn
// bằng LaTeX/TikZ thành ảnh PNG tĩnh (không phụ thuộc TikzJax).
// =========================================================================
window.dungSai0D32 = [
  {
    "id": "0D321DS1",
    "question": "Cho hàm số bậc hai $y=2x^2-4x+c$ có đồ thị là một parabol $(P)$. Biết $(P)$ đi qua điểm $M(0; 1)$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Trục đối xứng là đường thẳng $x=-1$",
        "answer": false
      },
      {
        "text": "$c&gt;0$",
        "answer": true
      },
      {
        "text": "$(P)$ đi qua $A(1;-1)$",
        "answer": true
      },
      {
        "text": "$(P)$ có bề lõm quay xuống dưới",
        "answer": false
      }
    ],
    "explain": "<br>- Trục đối xứng là đường thẳng $x=1$.<br>- $(P)$ đi qua điểm $M(0;1)$ nên $c=1$.<br>- $(P)$ là đồ thị hàm số $y=2x^2-4x+1$ nên đi qua điểm $A(1;-1)$.<br>- $a=2&gt;0$ nên $(P)$ có bề lõm quay lên trên."
  },
  {
    "id": "0D322DS2",
    "question": "Cho hàm số $y=x^2-4x+3$. Xác định tính đúng sai của các khẳng định sau?",
    "subQuestions": [
      {
        "text": "Trên khoảng $(-\\infty;1)$ hàm số đồng biến",
        "answer": false
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(2;+\\infty)$ và nghịch biến trên khoảng $(-\\infty;2)$",
        "answer": true
      },
      {
        "text": "Trên khoảng $(3;+\\infty)$ hàm số nghịch biến",
        "answer": false
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(4;+\\infty)$ và đồng biến trên khoảng $(-\\infty;4)$",
        "answer": false
      }
    ],
    "explain": "Hàm số $y=x^2-4x+3$ có $a=1&gt;0$.<br>  Khi $a&gt;0$, hàm số đồng biến trên khoảng $\\left(-\\dfrac{b}{2a};+\\infty\\right)$ và nghịch biến trên khoảng $\\left(-\\infty;-\\dfrac{b}{2a}\\right)$.<br>  Vì vậy hàm số đồng biến trên khoảng $(2;+\\infty)$ và nghịch biến trên khoảng $(-\\infty;2)$"
  },
  {
    "id": "0D321DS3",
    "question": "Cho hàm số $f(x)=-3x^2+x+2$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Hàm số luôn nghịch biến trên $\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số đi qua điểm $A(2;-8)$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(0;2)$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số bằng $\\dfrac{25}{12}$",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số bậc hai không thể đồng biến hoặc nghịch biến trên $\\mathbb{R}$ nên mệnh đề ``Hàm số luôn nghịch biến trên $\\mathbb{R}$'' sai.<br>- Vì $f(2)=-3\\cdot 2^2+2+2=-8$ nên mệnh đề ``Đồ thị hàm số đi qua điểm $A(2;-8)$'' đúng.<br>- Hàm số $f(x)=-3x^2+x+2$ đồng biến trên khoảng $\\left(-\\infty;\\dfrac{1}{6}\\right)$ mà $(0;2) \\not\\subset\\left(-\\infty;\\dfrac{1}{6}\\right)$.<br>  Vậy mệnh đề ``Hàm số đồng biến trên khoảng $(0;2)$'' sai.<br>- Hàm số $f(x)=-3x^2+x+2$ đạt giá trị lớn nhất tại $x=\\dfrac{1}{6}$ và $f\\left(\\dfrac{1}{6}\\right)=-3\\cdot \\left(\\dfrac{1}{6}\\right)^2+\\dfrac{1}{6}+2=\\dfrac{25}{12}$ nên giá trị lớn nhất của hàm số bằng $\\dfrac{25}{12}$.<br>  Vậy mệnh đề ``Giá trị lớn nhất của hàm số bằng $\\dfrac{25}{12}$'' đúng."
  },
  {
    "id": "0D321DS4",
    "question": "Cho hàm số bậc hai $y=ax^2+bx+c$ có đồ thị là $(P)$. Biết $(P)$ đi qua $A(-1;1)$ và có đỉnh $I(1;-3)$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$a+b+c=-3$",
        "answer": true
      },
      {
        "text": "$b=2a$",
        "answer": false
      },
      {
        "text": "$a-2b+3c=-1$",
        "answer": true
      },
      {
        "text": "$(P)$ đi qua điểm $B(4;6)$",
        "answer": true
      }
    ],
    "explain": "Vì $(P)$ có đỉnh $I(1;-3)$ nên ta có $a+b+c=-3 \\text{ và } -\\dfrac{b}{2a}=1 \\Leftrightarrow a+b+c=-3 \\text{ và } b=-2a.$<br>  Suy ra mệnh đề ``$a+b+c=-3$'' đúng, mệnh đề ``$b=2a$'' sai.<br>  Vì $(P)$ đi qua $A(-1;1)$ nên ta có $a-b+c=1$.<br>  Ta có hệ phương trình $a+b+c=-3 \\text{ và } 2a+b=0 \\text{ và } a-b+c=1 \\Leftrightarrow a=1 \\text{ và } b=-2 \\text{ và } c=-2$  $\\Rightarrow a-2b+3c=-1$.<br>  Suy ra mệnh đề ``$a-2b+3c=-1$'' đúng.<br>  Thay tọa độ điểm $B(4;6)$ vào phương trình $(P)\\colon y=x^2-2x-2$ ta được $6=4^2-2\\cdot 4-2\\Leftrightarrow 6=6$ (đúng) nên $B(4;6)\\in (P)$.<br>  Vậy mệnh đề ``$(P)$ đi qua điểm $B(4;6)$'' đúng."
  },
  {
    "id": "0D321DS5",
    "question": "Cho hàm số bậc hai $y=f(x)=-(x-a)(x-b)$ có đồ thị là $(P)$ $(a&lt;b)$. Biết $(P)$ có đỉnh $I(1;4)$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$a+2b=1$",
        "answer": false
      },
      {
        "text": "Đường thẳng $(d)\\colon y=x+1$ luôn cắt $(P)$ tại hai điểm phân biệt",
        "answer": true
      },
      {
        "text": "$f(x)&gt;0,\\,\\forall x \\in(-1;2)$",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên $\\left[-\\dfrac{1}{2};2\\right]$ là $\\dfrac{7}{4}$",
        "answer": true
      }
    ],
    "explain": "Ta có $(P)\\colon y=-x^2+(a+b)x-ab$.<br>  Vì $(P)$ có đỉnh $I(1;4)$ nên ta có  $4=-1+(a+b)-ab \\text{ và } \\dfrac{a+b}{2}=1$<br>$\\Leftrightarrow ab=-3 \\text{ và } a+b=2$<br>$\\Rightarrow a(2-a)=-3$<br>$\\Leftrightarrow a=-1\\Rightarrow b=3\\text{ (nhận)} \\text{ hoặc } a=3\\Rightarrow b=-1\\text{ (loại).}$  <br>- Ta có $a+2b=5$ nên phát biểu \\lq\\lq $a+2b=1$\\rq\\rq\\, là sai.<br>- Ta có $(P)\\colon y=-(x+1)(x-3)=-x^2+2x+3$.<br>  Phương trình hoành độ giao điểm của $(P)$ và $(d)$  \\[-x^2+2x+3=x+1\\Leftrightarrow -x^2+x+2=0x=-1 \\text{ hoặc } x=2.\\]  Vậy mệnh đề ``Đường thẳng $(d)\\colon y=x+1$ luôn cắt $(P)$ tại hai điểm phân biệt'' đúng.<br>- Ta có $f(x)=-x^2+2x+3$, $f(x)=0\\Leftrightarrow x=-1 \\text{ hoặc } x=3.$<br>  Suy ra $f(x)&gt;0 \\Leftrightarrow -1&lt;x&lt;3$.<br>  Vậy mệnh đề ``$f(x)&gt;0,\\,\\forall x \\in(-1;2)$'' đúng.<br>- Vì $(P)\\colon y=-x^2+2x+3$ có đỉnh $I(1;4)$ và bề lõm quay xuống nên ta có bảng biến thiên sau  <br><img src=\"data/10/0D3/im0D32/dlts_sbh_ds10cd34_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Khi đó giá trị nhỏ nhất của hàm số đã cho trên $\\left[-\\dfrac{1}{2};2\\right]$ là $\\dfrac{7}{4}$.<br>  Vậy mệnh đề ``Giá trị nhỏ nhất của hàm số đã cho trên $\\left[-\\dfrac{1}{2};2\\right]$ là $\\dfrac{7}{4}$'' đúng."
  },
  {
    "id": "0D323DS6",
    "question": "Cho hàm số $y=f(x)=ax^2+bx+c$ có đồ thị như hình vẽ bên. Các mệnh đề sau đúng hay sai?<br><img src=\"data/10/0D3/im0D32/dlts_sbh_ds10cd34_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Với $x \\in(-3;-1)$ thì $f(x)&lt;0$",
        "answer": true
      },
      {
        "text": "Ta có $a&gt;0$; $b&gt;0$; $c&gt;0$",
        "answer": true
      },
      {
        "text": "Phương trình $|f(x)|=m$ có $4$ nghiệm phân biệt với mọi $m&gt;0$",
        "answer": false
      },
      {
        "text": "Phương trình $af(x)^2+bf(x)+c=0$ có $4$ nghiệm phân biệt",
        "answer": false
      }
    ],
    "explain": "<br>- $f(x)&lt;0$ tương ứng với phần đồ thị hàm số nằm phía dưới trục hoành, tức là $x \\in(-3;-1)$.<br>  Vậy mệnh đề ``Với $x \\in(-3;-1)$ thì $f(x)&lt;0$'' đúng.<br>- Đồ thị của hàm số có bề lõm hướng lên trên, suy ra $a&gt;0$.<br>  Đồ thị của hàm số có trục đối xứng $x=\\dfrac{-b}{2a}&lt;0\\Rightarrow b&gt;0$.<br>  Đồ thị hàm số cắt trục $Oy$ tại điểm $(0;c)$ có tung độ dương, suy ra $c&gt;0$.<br>  Vậy mệnh đề ``Ta có $a&gt;0$; $b&gt;0$; $c&gt;0$'' đúng.<br>- Từ đồ thị hàm số $y=f(x)$, suy ra đồ thị hàm số $y=|f(x)|$ như sau  <br><img src=\"data/10/0D3/im0D32/dlts_sbh_ds10cd34_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Số nghiệm của phương trình $|f(x)|=m$ chính là số giao điểm của đồ thị hàm số $y=|f(x)|$ và đường thẳng $y=m$.<br>  Căn cứ vào hình vẽ suy ra để phương trình $|f(x)|=m$ có $4$ nghiệm phân biệt khi $0&lt;m&lt;1$.<br>  Vậy mệnh đề ``Phương trình $|f(x)|=m$ có $4$ nghiệm phân biệt với mọi $m&gt;0$'' sai.<br>- Đồ thị hàm số $y=ax^2+bx+c$ đi qua các điểm có tọa độ $(-3;0)$, $(-1;0)$, $(0;3)$ nên  \\[9a-3b+c=0 \\text{ và } a-b+c=0 \\text{ và } c=3\\Leftrightarrow a=1 \\text{ và } b=4 \\text{ và } c=3.\\] $af(x)^2+bf(x)+c=0\\Leftrightarrow f(x)^2+4f(x)+3=0\\Leftrightarrow f(x)=-3 \\text{ hoặc } f(x)=-1.$<br>  Căn cứ vào đồ thị hàm số $y=f(x)$, suy ra phương trình $f(x)=-3$ vô nghiệm, phương trình $f(x)=-1$ có nghiệm duy nhất $x=-2$, suy ra phương trình $af(x)^2+bf(x)+c=0$ có đúng $1$ nghiệm.<br>  Vậy mệnh đề ``Phương trình $af(x)^2+bf(x)+c=0$ có $4$ nghiệm phân biệt'' sai."
  },
  {
    "id": "0D321DS7",
    "question": "Xác định tính đúng, sai của các khẳng định sau?",
    "subQuestions": [
      {
        "text": "Tập hợp tất cả các giá trị của tham số $m$ để hàm số $y=mx^2+2(m-1)x+2m+1$ nghịch biến trên $(-1;2)$ là $m \\leq \\dfrac{1}{6}$",
        "answer": false
      },
      {
        "text": "Cho đa thức $f(x)$ hệ số thực và thỏa điều kiện $2f(x)+f(1-x)=x^2,\\, \\forall x \\in \\mathbb{R}$. Hàm số $y=3f(x)$ đồng biến trên $(0;+\\infty)$",
        "answer": true
      },
      {
        "text": "Số giá trị của tham số $m$ sao cho parabol $(P)\\colon y=x^2-4x+m$ cắt trục $Ox$ tại hai điểm phân biệt $A$, $B$ thỏa mãn $OA=3OB$ là $2$",
        "answer": true
      },
      {
        "text": "Cho parabol $(P)\\colon y=f(x)=ax^2+bx+c,\\,a \\neq 0$ biết $(P)$ đi qua $M(4;3)$, $(P)$ cắt $Ox$ tại $N(3;0)$ và $Q$ sao cho $\\triangle INQ$ có diện tích bằng $1$ đồng thời hoành độ điểm $Q$ nhỏ hơn $3$. Khi đó hàm số $f(2x-1)$ đồng biến trên khoảng $\\left(\\dfrac{1}{2};+\\infty\\right)$ ($I$ là đỉnh của parabol $(P)$)",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $a=m$, $-\\dfrac{b}{2a}=\\dfrac{1-m}{m}$ với $m \\neq 0$.  <br>- Trường hợp $m=0$: Hàm số đã cho trở thành $y=-2x+1$, là hàm số nghịch biến trên $\\mathbb{R}$ nên cũng nghịch biến trên $(-1;2)$. Tức $m=0$ thỏa mãn yêu cầu của bài toán.<br>- Trường hợp $m&lt;0$: Ta có $a=m&lt;0$ nên hàm số nghịch biến trên $\\left(\\dfrac{1-m}{m};+\\infty\\right)$.<br>  Do vậy yêu cầu của bài toán $\\Leftrightarrow \\dfrac{1-m}{m} \\leq-1\\Leftrightarrow \\dfrac{1}{m} \\leq 0$, đúng với $m&lt;0$.<br>- Trường hợp $m&gt;0$: Ta có $a=m&gt;0$ nên hàm số nghịch biến trên $\\left(-\\infty;\\dfrac{1-m}{m}\\right)$.<br>  Do vậy yêu cầu của bài toán $\\Leftrightarrow\\dfrac{1-m}{m} \\geq 2\\Leftrightarrow \\dfrac{1-3m}{m} \\geq 0\\Leftrightarrow 0&lt;m \\leq \\dfrac{1}{3}$.<br>  Tóm lại $m \\leq \\dfrac{1}{3}$.<br>  Vậy mệnh đề ``Tập hợp tất cả các giá trị của tham số $m$ để hàm số $y=mx^2+2(m-1)x+2m+1$ nghịch biến trên $(-1;2)$ là $m \\leq \\dfrac{1}{6}$'' sai.<br>- Từ giả thiết, thay $x$ bởi $1-x$ ta được $2f(1-x)+f(x)=(x-1)^2$.<br>  Khi đó ta có $2f(x)+f(1-x)=x^2 \\text{ và } 2f(1-x)+f(x)=x^2-2x+1\\Rightarrow f(x)=x^2+2x-1$.<br>  Do đó hàm số $y=3f(x)$ đồng biến trên $(-1;+\\infty)$ nên cũng đồng biến trên khoảng $(0;+\\infty)$.<br>  Vậy mệnh đề ``Cho đa thức $f(x)$ hệ số thực và thỏa điều kiện $2f(x)+f(1-x)=x^2,\\, \\forall x \\in \\mathbb{R}$. Hàm số $y=3f(x)$ đồng biến trên $(0;+\\infty)$'' đúng.<br>- Phương trình hoành độ giao điểm của $(P)$ và $Ox$ là $x^2-4x+m=0.\\quad (*)$<br>  $(P)$ cắt $Ox$ tại hai điểm phân biệt $A$, $B\\Leftrightarrow (*)$ có hai nghiệm phân biệt $\\Leftrightarrow \\Delta'=4-m&gt;0\\Leftrightarrow m&lt;4$.<br>  Gọi $x_A$, $x_B$ là hai nghiệm của $(*)$.<br>  Ta có $OA=3OB\\Rightarrow\\left|x_A\\right|=3\\left|x_B\\right|\\Leftrightarrow x_A=3x_B \\text{ hoặc } x_A=-3x_B.$  <br>- TH1: $x_A=3x_B \\Rightarrow x_A=3x_B \\text{ và } x_A+x_B=4 \\text{ và } x_A \\cdot x_B=m  \\Leftrightarrow x_A=3 \\text{ và } x_B=1 \\text{ và } x_A \\cdot x_B=m \\Rightarrow m=x_A \\cdot x_B=3&lt;4$.<br>- TH2: $x_A=-3x_B \\Rightarrow x_A=-3x_B \\text{ và } x_A+x_B=4 \\text{ và } x_A \\cdot x_B=m \\Leftrightarrow x_A=6 \\text{ và } x_B=-2 \\text{ và } x_A \\cdot x_B=m \\Rightarrow m=x_A \\cdot x_B=-12&lt;4$.  Do đó $m \\in\\{-12;3\\}$.<br>  Vậy mệnh đề ``Số giá trị của tham số $m$ sao cho parabol $(P)\\colon y=x^2-4x+m$ cắt trục $Ox$ tại hai điểm phân biệt $A$, $B$ thỏa mãn $OA=3OB$ là $2$'' đúng.<br>- Vì $(P)$ đi qua $M(4;3)$ nên $3=16a+4b+c.\\quad (1)$<br>  Mặt khác $(P)$ cắt $Ox$ tại $N(3;0)$ suy ra $0=9a+3b+c\\quad (2)$.<br>  $(P)$ cắt $Ox$ tại $Q$ nên $Q(t;0)$, $t&lt;3$.<br>  Theo định lý Vi-ét ta có $t+3=-\\dfrac{b}{a} \\text{ và } 3t=\\dfrac{c}{a}.$<br>  Ta có $S_{\\triangle INQ}=\\dfrac{1}{2} IH\\cdot NQ$ với $H$ là hình chiếu của $I\\left(-\\dfrac{b}{2a};-\\dfrac{\\Delta}{4a}\\right)$ lên trục hoành.<br>  Do $IH=\\left|-\\dfrac{\\Delta}{4a}\\right|$, $NQ=3-t$ nên  $S_{\\triangle INQ}=1 \\Leftrightarrow \\dfrac{1}{2}\\left|-\\dfrac{\\Delta}{4a}\\right|\\cdot(3-t)=1$<br>$\\Leftrightarrow (3-t)\\left|\\left(\\dfrac{b}{2a}\\right)^2-\\dfrac{c}{a}\\right|=\\left|\\dfrac{2}{a}\\right|$<br>$\\Leftrightarrow (3-t)\\left|\\dfrac{(t+3)^2}{4}-3t\\right|=\\left|\\dfrac{2}{a}\\right|$<br>$\\Leftrightarrow (3-t)^3=\\dfrac{8}{|a|}.\\quad (3)$  Từ $(1)$ và $(2)$ ta có $7a+b=3\\Leftrightarrow b=3-7a$, suy ra $t+3=-\\dfrac{3-7a}{a} \\Leftrightarrow \\dfrac{1}{a}=\\dfrac{4-t}{3}$.<br>  Thay vào $(3)$ ta có $(3-t)^3=\\dfrac{8(4-t)}{3} \\Leftrightarrow 3t^3-27t^2+73t-49=0\\Leftrightarrow t=1$.<br>  Suy ra $a=1\\Rightarrow b=-4\\Rightarrow c=3$.<br>  Do đó parabol $(P)$ cần tìm là $y=f(x)=x^2-4x+3$.<br>  Khi đó $f(2x-1)=(2 x-1)^2-4(2 x-1)+3=4x^2-12x+8$.  Hàm số này đồng biến trên khoảng $\\left(\\dfrac{3}{2};+\\infty\\right)$.<br>  Vậy mệnh đề ``Hàm số $f(2x-1)$ đồng biến trên khoảng $\\left(\\dfrac{1}{2};+\\infty\\right)$'' sai."
  },
  {
    "id": "0D322DS8",
    "question": "Cho hàm số: $f(x)=-2x^2+(m-1) x-2$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Tập tất cả các giá trị thực của tham số $m$ để đồ thị hàm số $y=f(x)$ nằm hoàn toàn phía dưới trục hoành là $(-\\infty;-3] \\cup[5;+\\infty)$",
        "answer": false
      },
      {
        "text": "Tổng các giá trị thực của tham số $m$ để đồ thị hàm số $y=f(x)$ cắt đường thẳng $y=x-1$ tại $2$ điểm phân biệt có hoành độ $x_1$, $x_2$: $x_1^2+x_2^2=4$ bằng $4$",
        "answer": true
      },
      {
        "text": "Tập tất cả các giá trị thực của tham số $m$ để hàm số $y=f(x)$ nghịch biến trên khoảng $(1;+\\infty)$ là $\\{5\\}$",
        "answer": false
      },
      {
        "text": "Tập tất cả các giá trị thực của tham số $m$ để hàm số $y=|f(x)|$ đồng biến trên $(2;+\\infty)$ là $[3;5] \\cup[6;9)$",
        "answer": false
      }
    ],
    "explain": "<br>- Đồ thị hàm số $y=f(x)$ nằm hoàn toàn phía dưới trục hoành  $\\Leftrightarrow -2x^2+(m-1) x-2 lt; 0, \\forall x \\in \\mathbb{R}$<br>$\\Leftrightarrow a=-2 lt;0 \\text{ và } \\Delta=(m-1)^2-16 lt;0$<br>$\\Leftrightarrow -3 lt;m lt;5.$  Vậy mệnh đề ``Tập tất cả các giá trị thực của tham số $m$ để đồ thị hàm số $y=f(x)$ nằm hoàn toàn phía dưới trục hoành là $(-\\infty;-3] \\cup[5;+\\infty)$'' sai.<br>- Phương trình hoành độ giao điểm của đồ thị hàm số $y=f(x)$ và đường thẳng $y=x-1$ là  \\[-2x^2+(m-1) x-2=x-1\\Leftrightarrow 2x^2-(m-2) x+1=0.\\]  Yêu cầu bài toán  $\\Leftrightarrow \\Delta=(m-2)^2-8 gt;0 \\text{ và } \\left(x_1+x_2\\right)^2-2x_1x_2=4$<br>$\\Leftrightarrow (m-2)^2 gt;8 \\text{ và } \\dfrac{(m-2)^2}{4}-2\\cdot \\dfrac{1}{2}=4\\text { (Vi-ét)}$<br>$\\Leftrightarrow (m-2)^2 gt;8 (1) \\text{ và } (m-2)^2=20 \\text{ (thỏa mãn (1))}$<br>$\\Leftrightarrow m^2-4m-16=0.$  Tổng các giá trị thực của tham số $m$ thoả mãn bằng $4$.<br>  Vậy mệnh đề ``Tổng các giá trị thực của tham số $m$ để đồ thị hàm số $y=f(x)$ cắt đường thẳng $y=x-1$ tại $2$ điểm phân biệt có hoành độ $x_1$, $x_2$: $x_1^2+x_2^2=4$ bằng $4$'' đúng.<br>- Hoành độ đỉnh của parabol $y=f(x)$ là $x_I=\\dfrac{m-1}{4}$.<br>  Mà $a=-2&lt;0$ nên hàm số nghịch biến trên khoảng $\\left(\\dfrac{m-1}{4};+\\infty\\right)$.<br>  Khi đó hàm số $y=f(x)$ nghịch biến trên khoảng $(1;+\\infty) \\Leftrightarrow \\dfrac{m-1}{4} \\leq 1 \\Leftrightarrow m \\leq 5$.<br>  Vậy mệnh đề ``Tập tất cả các giá trị thực của tham số $m$ để hàm số $y=f(x)$ nghịch biến trên khoảng $(1;+\\infty)$ là $\\{5\\}$'' sai.<br>- Cách vẽ đồ thị hàm số $y=|f(x)|$ từ đồ thị hàm số $y=f(x)$:  <br>- Giữ nguyên phần đồ thị hàm số $y=f(x)$ ở phía trên trục hoành.<br>- Lấy đối xứng phần đồ thị hàm số $y=f(x)$ ở phía dưới trục hoành qua trục hoành rồi xoá phần đồ thị hàm số $y=f(x)$ ở phía dưới trục hoành.  Vì đồ thị hàm số $y=f(x)$ là parabol hướng bề lõm xuống dưới nên:<br>  Hàm số $y=|f(x)|$ đồng biến trên $(2;+\\infty)$ khi và chỉ khi hàm số $y=f(x)$ nghịch biến trên khoảng $(2;+\\infty)$ và $f(x) \\leq 0,\\, \\forall x \\in[2;+\\infty)$  $\\Leftrightarrow f(2)\\leq 0 \\text{ và } \\dfrac{m-1}{4} \\leq 2$<br>$\\Leftrightarrow 2m-12\\leq 0 \\text{ và } m \\leq 9$<br>$\\Leftrightarrow m \\leq 6.$  Do đó $m \\in(-\\infty;6]$.<br>  Vậy mệnh đề ``Tập tất cả các giá trị thực của tham số $m$ để hàm số $y=|f(x)|$ đồng biến trên $(2;+\\infty)$ là $[3;5] \\cup[6;9)$'' sai."
  }
];
