// =========================================================================
// KHỐI DỮ LIỆU: 0D32 - Đúng sai
// Nguồn: Bài tập giáo khoa (thư mục SachBaiHoc_T10/Data-T10, file
// HH10-CD1.4-DS.tex / DS10-CD3.4-DS.tex, đã có tag định tuyến %[...] sẵn
// trong nguồn), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu
// trúc dữ liệu.
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
    "explain": "Ta có $(P)\\colon y=-x^2+(a+b)x-ab$.<br>  Vì $(P)$ có đỉnh $I(1;4)$ nên ta có  $4=-1+(a+b)-ab \\text{ và } \\dfrac{a+b}{2}=1$<br>$\\Leftrightarrow ab=-3 \\text{ và } a+b=2$<br>$\\Rightarrow a(2-a)=-3$<br>$\\Leftrightarrow a=-1\\Rightarrow b=3\\text{ (nhận)} \\text{ hoặc } a=3\\Rightarrow b=-1\\text{ (loại).}$  <br>- Ta có $a+2b=5$ nên phát biểu “ $a+2b=1$”\\, là sai.<br>- Ta có $(P)\\colon y=-(x+1)(x-3)=-x^2+2x+3$.<br>  Phương trình hoành độ giao điểm của $(P)$ và $(d)$  \\[-x^2+2x+3=x+1\\Leftrightarrow -x^2+x+2=0x=-1 \\text{ hoặc } x=2.\\]  Vậy mệnh đề ``Đường thẳng $(d)\\colon y=x+1$ luôn cắt $(P)$ tại hai điểm phân biệt'' đúng.<br>- Ta có $f(x)=-x^2+2x+3$, $f(x)=0\\Leftrightarrow x=-1 \\text{ hoặc } x=3.$<br>  Suy ra $f(x)&gt;0 \\Leftrightarrow -1&lt;x&lt;3$.<br>  Vậy mệnh đề ``$f(x)&gt;0,\\,\\forall x \\in(-1;2)$'' đúng.<br>- Vì $(P)\\colon y=-x^2+2x+3$ có đỉnh $I(1;4)$ và bề lõm quay xuống nên ta có bảng biến thiên sau  <br><img src=\"data/10/0D3/im0D32/dlts_sbh_ds10cd34_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Khi đó giá trị nhỏ nhất của hàm số đã cho trên $\\left[-\\dfrac{1}{2};2\\right]$ là $\\dfrac{7}{4}$.<br>  Vậy mệnh đề ``Giá trị nhỏ nhất của hàm số đã cho trên $\\left[-\\dfrac{1}{2};2\\right]$ là $\\dfrac{7}{4}$'' đúng."
  },
  {
    "id": "0D323DS6",
    "question": "Cho hàm số $y=f(x)=ax^2+bx+c$ có đồ thị như hình vẽ bên. Các mệnh đề sau đúng hay sai?<br><img src=\"data/10/0D3/im0D32/dlts_sbh_ds10cd34_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
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
    "explain": "<br>- $f(x)&lt;0$ tương ứng với phần đồ thị hàm số nằm phía dưới trục hoành, tức là $x \\in(-3;-1)$.<br>  Vậy mệnh đề ``Với $x \\in(-3;-1)$ thì $f(x)&lt;0$'' đúng.<br>- Đồ thị của hàm số có bề lõm hướng lên trên, suy ra $a&gt;0$.<br>  Đồ thị của hàm số có trục đối xứng $x=\\dfrac{-b}{2a}&lt;0\\Rightarrow b&gt;0$.<br>  Đồ thị hàm số cắt trục $Oy$ tại điểm $(0;c)$ có tung độ dương, suy ra $c&gt;0$.<br>  Vậy mệnh đề ``Ta có $a&gt;0$; $b&gt;0$; $c&gt;0$'' đúng.<br>- Từ đồ thị hàm số $y=f(x)$, suy ra đồ thị hàm số $y=|f(x)|$ như sau  <br><img src=\"data/10/0D3/im0D32/dlts_sbh_ds10cd34_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Số nghiệm của phương trình $|f(x)|=m$ chính là số giao điểm của đồ thị hàm số $y=|f(x)|$ và đường thẳng $y=m$.<br>  Căn cứ vào hình vẽ suy ra để phương trình $|f(x)|=m$ có $4$ nghiệm phân biệt khi $0&lt;m&lt;1$.<br>  Vậy mệnh đề ``Phương trình $|f(x)|=m$ có $4$ nghiệm phân biệt với mọi $m&gt;0$'' sai.<br>- Đồ thị hàm số $y=ax^2+bx+c$ đi qua các điểm có tọa độ $(-3;0)$, $(-1;0)$, $(0;3)$ nên  \\[9a-3b+c=0 \\text{ và } a-b+c=0 \\text{ và } c=3\\Leftrightarrow a=1 \\text{ và } b=4 \\text{ và } c=3.\\] $af(x)^2+bf(x)+c=0\\Leftrightarrow f(x)^2+4f(x)+3=0\\Leftrightarrow f(x)=-3 \\text{ hoặc } f(x)=-1.$<br>  Căn cứ vào đồ thị hàm số $y=f(x)$, suy ra phương trình $f(x)=-3$ vô nghiệm, phương trình $f(x)=-1$ có nghiệm duy nhất $x=-2$, suy ra phương trình $af(x)^2+bf(x)+c=0$ có đúng $1$ nghiệm.<br>  Vậy mệnh đề ``Phương trình $af(x)^2+bf(x)+c=0$ có $4$ nghiệm phân biệt'' sai."
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
  },
  {
    "id": "0D324DS1",
    "question": "Cho hàm số $y=x^2+2m x+4$ có đồ thị $(P)$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Với $m=1$ đồ thị $(P)$ không cắt trục hoành",
        "answer": true
      },
      {
        "text": "Với $m=-2$ đồ thị $(P)$ tiếp xúc trục hoành",
        "answer": true
      },
      {
        "text": "Với $m=\\dfrac{7}{2}$ đồ thị $(P)$ cắt trục hoành tại hai điểm phân biệt",
        "answer": true
      },
      {
        "text": "Với $m=-\\dfrac{5}{2}$ đồ thị $(P)$ cắt trục hoành tại hai điểm phân biệt $A$, $B$. Khi đó độ dài đoạn thẳng $AB=4$",
        "answer": false
      }
    ],
    "explain": "<br>- Với $m=1\\Rightarrow y=x^2+2x+4$ ta có đồ thị $(P)\\colon y=x^2+2x+4$ không cắt trục hoành vì phương trình $y=0\\Leftrightarrow x^2+2x+4=0$ vô nghiệm do $\\Delta'=-3&lt;0$.<br>  Vậy mệnh đề ``Với $m=1$ đồ thị $(P)$ không cắt trục hoành'' đúng.<br>- Với $m=-2\\Rightarrow y=x^2-4x+4$ ta có đồ thị $(P)\\colon y=x^2-4x+4$ tiếp xúc trục hoành vì phương trình $y=0\\Leftrightarrow x^2-4x+4=0\\Leftrightarrow(x-2)^2=0$ có nghiệm kép $x=2$.<br>  Vậy mệnh đề ``Với $m=-2$ đồ thị $(P)$ tiếp xúc trục hoành'' đúng.<br>- Với $m=\\dfrac{7}{2} \\Rightarrow y=x^2+7x+4$ ta có đồ thị $(P)\\colon y=x^2+7x+4$ cắt trục hoành tại hai điểm phân biệt vì phương trình $y=0\\Leftrightarrow x^2+7x+4=0$ có hai nghiệm phân biệt do $\\Delta=33&gt;0$.<br>  Vậy mệnh đề ``Với $m=\\dfrac{7}{2}$ đồ thị $(P)$ cắt trục hoành tại hai điểm phân biệt'' đúng.<br>- Với $m=-\\dfrac{5}{2} \\Rightarrow y=x^2-5x+4$ ta có phương trình $y=0\\Leftrightarrow x^2-5x+4=0\\Leftrightarrow x=1 \\text{ hoặc } x=4$ có hai nghiệm phân biệt nên đồ thị $(P)\\colon y=x^2-5x+4$ cắt trục hoành tại hai điểm phân biệt $A(1;0)$ và $B(4;0)$. Khi đó độ dài đoạn thẳng $AB=\\sqrt{(4-1)^2}=3$.<br>  Vậy mệnh đề ``Với $m=-\\dfrac{5}{2}$ đồ thị $(P)$ cắt trục hoành tại hai điểm phân biệt $A$, $B$. Khi đó độ dài đoạn thẳng $AB=4$'' sai."
  },
  {
    "id": "0D323DS1",
    "question": "Cho hàm số $y=f(x)$ có đồ thị dạng parabol như hình bên. Các mệnh đề sau đúng hay sai?<br><img src=\"data/10/0D3/im0D32/dlts_sbh_ds10cd33b2_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Parabol trên là đồ thị của hàm số $y=-x^2+2x$",
        "answer": true
      },
      {
        "text": "Khoảng nghịch biến của hàm số $f(x)$ là $(-\\infty;2)$",
        "answer": false
      },
      {
        "text": "Tập nghiệm của bất phương trình $f(x) \\geq 0$ là $S=(0;2)$",
        "answer": false
      },
      {
        "text": "$f(x)&lt;0,\\,\\forall x \\in(-\\infty;0) \\cup(2;+\\infty)$",
        "answer": true
      }
    ],
    "explain": "Giả sử $y=f(x)=ax^2+bx+c$ $(a \\neq 0)$.<br>- Dựa vào đồ thị đề bài cho suy ra  $c=0 \\text{ và } a+b+c=1 \\text{ và } 4a+2b+c=0   \\Leftrightarrow  a=-1 \\text{ và } b=2 \\text{ và } c=0.$<br>  Do đó $y=-x^2+2x$.<br>  Vậy mệnh đề ``Parabol trên là đồ thị của hàm số $y=-x^2+2x$'' đúng.<br>- Dựa vào đồ thị ta thấy trên khoảng $(-\\infty;1)$ đồ thị đi lên từ trái sang phải nên hàm số đồng biến trên khoảng $(-\\infty;1)$, trên khoảng $(1;+\\infty)$ đồ thị đi xuống từ trái sang phải nên hàm số nghịch biến trên khoảng $(1;+\\infty)$.<br>  Vậy mệnh đề ``Khoảng nghịch biến của hàm số $f(x)$ là $(-\\infty;2)$'' sai.<br>- Dựa vào đồ thị suy ra tập nghiệm của bất phương trình $f(x) \\geq 0$ là $S=[0;2]$.<br>  Vậy mệnh đề ``Tập nghiệm của bất phương trình $f(x) \\geq 0$ là $S=(0;2)$'' sai.<br>- Trên $(-\\infty;0) \\cup(2;+\\infty)$, đồ thị hàm số $f(x)$ nằm phía dưới trục $Ox$ nên $f(x)&lt;0,\\,\\forall x\\in (-\\infty;0) \\cup(2;+\\infty)$.<br>  Vậy mệnh đề ``$f(x)&lt;0,\\,\\forall x \\in(-\\infty;0) \\cup(2;+\\infty)$'' đúng."
  },
  {
    "id": "0D323DS2",
    "question": "Cho hàm số bậc hai $y=ax^2+bx+c$ có đồ thị như hình vẽ sau. Các mệnh đề sau đúng hay sai?<br><img src=\"data/10/0D3/im0D32/dlts_sbh_ds10cd33b2_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$a&gt;0$",
        "answer": true
      },
      {
        "text": "$c&gt;0$",
        "answer": false
      },
      {
        "text": "$a-2b+c=7$",
        "answer": true
      },
      {
        "text": "$a-b^2+c^3=10$",
        "answer": false
      }
    ],
    "explain": "Khi $x=1$ thì $y=-2\\Rightarrow a+b+c=-2$.<br>  Khi $x=2$ thì $y=1\\Rightarrow 4a+2b+c=1$.<br>  Đồ thị cắt trục tung tại điểm có tung độ bằng $-1$ nên $c=-1$.<br>  Ta có hệ phương trình $c=-1 \\text{ và } a+b+c=-2 \\text{ và } 4a+2b+c=1 \\Leftrightarrow a=2 \\text{ và } b=-3 \\text{ và } c=-1.$  <br>- Vì bề lõm của parabol quay lên nên $a&gt;0$.  Vậy mệnh đề ``$a&gt;0$'' đúng.<br>- Ta có $c=-1&lt;0$ nên mệnh đề ``$c&gt;0$'' sai.<br>- Ta có $a-2b+c=7$ nên mệnh đề ``$a-2b+c=7$'' đúng.<br>- Ta có $a-b^2+c^3=-8$ nên mệnh đề ``$a-b^2+c^3=10$'' sai."
  },
  {
    "id": "0D322DS1",
    "question": "Cho hàm số $y=-x^2+2mx+1$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Với $m=1$ hàm số đồng biến trên khoảng $(-\\infty;1)$",
        "answer": true
      },
      {
        "text": "Với $m=-2$ hàm số nghịch biến trên khoảng $(-\\infty;-2)$",
        "answer": false
      },
      {
        "text": "Hàm số đồng biến trên $(-\\infty;3)$ khi và chỉ khi $m=3$",
        "answer": false
      },
      {
        "text": "Có $4$ giá trị nguyên dương của $m$ để hàm số nghịch biến $(5;+\\infty)$",
        "answer": false
      }
    ],
    "explain": "Ta có $a=-1&lt;0$; $-\\dfrac{b}{2a}=m$ nên hàm số đã cho đồng biến trên khoảng $(-\\infty;m)$, nghịch biến trên khoảng $(m;+\\infty)$.  <br>- Với $m=1$ hàm số đồng biến trên khoảng $(-\\infty;1)$ nên mệnh đề ``Với $m=1$ hàm số đồng biến trên khoảng $(-\\infty;1)$'' đúng.<br>- Với $m=-2$ hàm số đồng biến trên khoảng $(-\\infty;-2)$ nên mệnh đề ``Với $m=-2$ hàm số nghịch biến trên khoảng $(-\\infty;-2)$'' sai.<br>- Hàm số đồng biến trên $(-\\infty;3)$ khi và chỉ khi $(-\\infty;3) \\subset(-\\infty;m) \\Leftrightarrow m \\geq 3$ nên mệnh đề ``Hàm số đồng biến trên $(-\\infty;3)$ khi và chỉ khi $m=3$'' sai.<br>- Hàm số nghịch biến $(5;+\\infty)$ khi và chỉ khi $(5;+\\infty) \\subset(m;+\\infty) \\Leftrightarrow m \\leq 5$ mà do $m$ nguyên dương nên $m \\in\\{1; 2; 3; 4; 5\\}$ nên có $5$ giá trị $m$ thỏa mãn nên mệnh đề ``Có $4$ giá trị nguyên dương của $m$ để hàm số nghịch biến $(5;+\\infty)$'' sai."
  },
  {
    "id": "0D321DS8",
    "question": "Cho hàm số $y=-x^2+2x+3$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Tọa độ đỉnh $I(1;2)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có trục đối xứng là đường thẳng $x=2$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số là Parabol có bề lõm hướng xuống dưới",
        "answer": true
      }
    ],
    "explain": "Hàm số $y=-x^2+2x+3$ có $a=-1$, $b=2$, $c=3$.  <br>- Tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}$.<br>- Tọa độ đỉnh $x_I=-\\dfrac{b}{2a}=1$; $y_I=-1^2+2\\cdot 1+3=4\\Rightarrow I(1;4)$.<br>- Đồ thị hàm số có trục đối xứng là đường thẳng $x=1$.<br>- Vì $a=-1&lt;0$ nên đồ thị hàm số là Parabol có bề lõm hướng xuống dưới."
  },
  {
    "id": "0D324DS2",
    "question": "Trong mặt phẳng tọa độ cho đồ thị $(P)\\colon y=2x^2-3x+2$ và $(d)\\colon y=x+2$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Parabol $(P)$ và đường thẳng $(d)$ không giao nhau",
        "answer": false
      },
      {
        "text": "Số giao điểm của Parabol $(P)$ và đường thẳng $(d)$ là $2$",
        "answer": true
      },
      {
        "text": "Hoành độ giao điểm của Parabol $(P)$ và đường thẳng $(d)$ lần lượt là $x=2$ và $x=0$",
        "answer": true
      },
      {
        "text": "Tọa độ giao điểm của Parabol $(P)$ và đường thẳng $(d)$ lần lượt là $A(0;2)$ và $B(2;0)$",
        "answer": false
      }
    ],
    "explain": "Phương trình hoành độ giao điểm của Parabol $(P)\\colon y=2x^2-3x+2$ và đường thẳng $(d)\\colon y=x+2$ là  \\[2x^2-3x+2=x+2\\Leftrightarrow 2x^2-4x=0\\Leftrightarrow x=2 \\text{ hoặc } x=0.\\]  Suy ra Parabol $(P)$ và đường thẳng $(d)$ giao nhau tại hai điểm phân biệt có toạ độ lần lượt là $A(0;2)$ và $B(2;4)$."
  },
  {
    "id": "0D321DS2",
    "question": "Cho hàm số $y=f(x)=x^2$ có đồ thị $(C)$ và hàm số $y=g(x)=-2x+3$ có đồ thị là đường thẳng $(d)$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Điểm $M(-1;1)$ thuộc đồ thị $(C)$",
        "answer": true
      },
      {
        "text": "Hàm số $y=f(x)$ nghịch biến trên $(1;5)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số $(C)$ đi qua giao điểm của đường thẳng $(d)$ với trục tung",
        "answer": false
      },
      {
        "text": "Điểm $A(1;1)$ và $B(-3;9)$ là hai giao điểm của đồ thị $(C)$ và đường thẳng $(d)$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $f(-1)=1$ nên $M(-1; 1) \\in(C)$.<br>  Vậy mệnh đề ``Điểm $M(-1;1)$ thuộc đồ thị $(C)$'' đúng.<br>- Hàm số $y=f(x)=x^2$ đồng biến trên $(0;+\\infty)$ và nghịch biến trên $(-\\infty;0)$.<br>  Lại có $(1;5) \\subset(0;+\\infty)$ nên hàm số đồng biến trên $(1;5)$.<br>  Vậy mệnh đề ``Hàm số $y=f(x)$ nghịch biến trên $(1;5)$'' sai.<br>- Đường thẳng $(d)$ cắt trục tung tại điểm có $N(0;3)$. Ta có $f(0)=0$ nên điểm $N(0;3)$ không thuộc đồ thị hàm số $(C)$.<br>  Vậy mệnh đề ``Đồ thị hàm số $(C)$ đi qua giao điểm của đường thẳng $(d)$ với trục tung'' sai.<br>- Thay tọa độ điểm $A(1;1)$ và $B(-3;9)$ vào phương trình của $(C)$ và $(d)$ đều thỏa mãn.<br>  Vậy mệnh đề ``Điểm $A(1;1)$ và $B(-3;9)$ là hai giao điểm của đồ thị $(C)$ và đường thẳng $(d)$'' đúng."
  },
  {
    "id": "0D321DS9",
    "question": "Cho hàm số $y=a x^2+b x+2$ với $a \\neq 0$, có đồ thị là $(P)$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Biết $(P)$ đi qua hai điểm $M(1;0)$ và $N(-1;0)$. Khi đó $a+2024b=-2$",
        "answer": true
      },
      {
        "text": "Biết $(P)$ đi qua điểm $E(-1;5)$ và có trục đối xứng là $x=1$. Khi đó $2a+b=1$",
        "answer": false
      },
      {
        "text": "Biết $(P)$ đi qua điểm $F(-1;6)$ và có tung độ đỉnh bằng $-\\dfrac{1}{4}$. Khi đó $ab=-36$",
        "answer": false
      },
      {
        "text": "Biết $(P)$ có đỉnh là điểm $S\\left(-1;-\\dfrac{3}{2}\\right)$. Khi đó $(2a+b)\\,\\vdots\\, 14$",
        "answer": true
      }
    ],
    "explain": "<br>- $(P)$ đi qua hai điểm $M(1;0)$ và $N(-1;0)$ nên ta có $a+b+2=0 \\text{ và } a-b+2=0\\Leftrightarrow a=-2 \\text{ và } b=0.$<br>  Do đó $a+2024b=-2$.<br>  Vậy mệnh đề ``Biết $(P)$ đi qua hai điểm $M(1;0)$ và $N(-1;0)$. Khi đó $a+2024b=-2$'' đúng.<br>- $(P)$ có trục đối xứng là $x=1\\Rightarrow-\\dfrac{b}{2a}=1\\Rightarrow 2a+b=0\\quad (1)$.<br>  Mặt khác $(P)$ đi qua điểm $E(-1;5)$ nên $a-b+2=5\\Leftrightarrow a-b=3\\quad (2)$.<br>  Từ $(1)$, $(2)$ suy ra $a=1$, $b=-2$. Do đó $2a+b=0$.<br>  Vậy mệnh đề ``Biết $(P)$ đi qua điểm $E(-1;5)$ và có trục đối xứng là $x=1$. Khi đó $2a+b=1$'' sai.<br>- $(P)$ đi qua điểm $F(-1;6)$ nên $a-b+2=6\\Leftrightarrow a-b=4\\Leftrightarrow a=b+4$ \\quad $(3)$.<br>  Lại có $(P)$ có tung độ đỉnh bằng $-\\dfrac{1}{4}$ nên  $-\\dfrac{\\Delta}{4a}=-\\dfrac{1}{4} \\Rightarrow \\dfrac{b^2-4ac}{4a}=\\dfrac{1}{4} \\Rightarrow b^2-8a=a \\Rightarrow b^2-9a=0\\quad (4)$.<br>  Thay $(3)$ vào $(4)$ được $b^2-9(b+4)=0\\Leftrightarrow b^2-9b-36=0\\Leftrightarrow b=-3\\Rightarrow a=1 \\text{ hoặc } b=12\\Rightarrow a=16.$<br>  Suy ra $ab=-3$ hoặc $ab=192$.<br>  Vậy mệnh đề ``Biết $(P)$ đi qua điểm $F(-1;6)$ và có tung độ đỉnh bằng $-\\dfrac{1}{4}$. Khi đó $ab=-36$'' sai.<br>- Vì $(P)$ có đỉnh là điểm $S\\left(-1;-\\dfrac{3}{2}\\right)$ nên hoành độ đỉnh $x=-1=-\\dfrac{b}{2a} \\Rightarrow 2a-b=0\\quad (5)$.<br>  Lại có $(P)$ đi qua $S\\left(-1;-\\dfrac{3}{2}\\right)$ nên $a-b+2=-\\dfrac{3}{2} \\Leftrightarrow a-b=-\\dfrac{7}{2}\\quad (6)$.<br>  Từ $(5)$, $(6)$ ta được $a=\\dfrac{7}{2}$, $b=7$ $\\Rightarrow 2a+b=14$.<br>  Vậy mệnh đề ``Biết $(P)$ có đỉnh là điểm $S\\left(-1;-\\dfrac{3}{2}\\right)$. Khi đó $(2a+b)\\,\\vdots\\, 14$'' đúng."
  },
  {
    "id": "0D323DS7",
    "question": "Cho hàm số bậc hai $y=f(x)=a x^2+b x+c$ có đồ thị như hình vẽ bên.<br><img src=\"data/10/0D3/im0D32/loc_ghk1lhp_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số có trục đối xứng $x=-\\dfrac{3}{2}$",
        "answer": true
      },
      {
        "text": "$a &gt; 0$, $b &lt; 0$, $c &gt; 0$",
        "answer": false
      },
      {
        "text": "Phương trình $f(x)=0$ có hai nghiệm phân biệt",
        "answer": true
      },
      {
        "text": "Tập hợp các giá trị $x$ nguyên sao cho $f(x) \\leq 3$ có $4$ phần tử",
        "answer": false
      }
    ],
    "explain": "<br>- Đồ thị hàm số có trục đối xứng là $x=-\\dfrac{3}{2}$.<br>- Dựa vào hình dáng đồ thị hàm số, ta có $a&gt;0$.<br>  Ta có $f(0)=3=c&gt;0$.<br>  Đồ thị hàm số có trục đối xứng là $x=-\\dfrac{3}{2}$, do đó $-\\dfrac{b}{2a}=-\\dfrac{3}{2}$, suy ra $b&gt;0$.<br>- Đồ thị hàm số cắt trục hoành tại hai điểm phân biệt nên phương trình $f(x)=0$ có hai nghiệm phân biệt.<br>- Trên đoạn $\\left[ -\\dfrac{3}{2};0\\right]$ phương trình $f(x)=0$ có $2$ giá trị nguyên $x=-1$, $x=0$ thỏa mãn $f(x)\\le 3$. Do $x=-\\dfrac{3}{2}$ là trục đối xứng của đồ thị hàm số nên có $4$ giá trị nguyên thảo mãn yêu cầu."
  },
  {
    "id": "0D323DS8",
    "question": "Cho hàm số $y=-x^2+3$. Khi đó:",
    "subQuestions": [
      {
        "text": "Tọa độ đỉnh $I$ của parabol $I(0;3)$",
        "answer": true
      },
      {
        "text": "Bề lõm parabol hướng lên",
        "answer": false
      },
      {
        "text": "Hàm số đã cho đồng biến trên khoảng $(0;+\\infty)$ và nghịch biến trên khoảng $(-\\infty;0)$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số là $3$, khi $x=0$",
        "answer": true
      }
    ],
    "explain": "<br>- ĐÚNG.<br>  Ta có $a=-1$, $b=0$, $c=-3$ từ đó hoành độ đỉnh $I$ là $x_{I}=-\\dfrac{b}{2a}=0$ và tung độ đỉnh $y_{I}=-0^2+3=3$. Vậy $I(0;3)$.<br>- SAI.<br>  Vì hệ số $a=-1&lt;0$ nên bề lõm parabol hướng xuống dưới.<br>- SAI.<br>  Ta có bảng biến thiên:  <br><img src=\"data/10/0D3/im0D32/loc2_0_TL_TN_DS_THPT__002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên hàm số đã cho nghịch biến trên khoảng $(0;+\\infty)$ và đồng biến trên khoảng $(-\\infty;0)$.<br>- ĐÚNG.<br>  Với hệ số $a=-1&lt;0$ thì hàm số đạt giá trị lớn nhất tại $x=-\\dfrac{b}{2a}=0$ là giá trị lớn nhất của hàm số là $y(0)=3$."
  },
  {
    "id": "0D323DS9",
    "question": "Xét hàm số bậc hai $y = -x^2 + 4x + 5$ có đồ thị là parabol $(P)$.",
    "subQuestions": [
      {
        "text": "Trục đối xứng của đồ thị $(P)$ là đường thẳng $x = 2$",
        "answer": true
      },
      {
        "text": "Tung độ đỉnh $I$ của parabol $(P)$ là $y_I = 9$",
        "answer": true
      },
      {
        "text": "Hệ số $a = -1 &lt; 0$, nên đồ thị của hàm số là parabol có bề lõm hướng lên trên",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên đoạn $[0; 4]$ là $12$",
        "answer": false
      }
    ],
    "explain": "<br>- Trục đối xứng của đồ thị hàm số là $x = \\dfrac{-4}{2 \\cdot (-1)} = 2$.<br>- Ta có hoành độ đỉnh $I$ của parabol là $x_I = 2$.<br>  Thay $x = 2$ vào hàm số ta được $y = -2^2 + 4 \\cdot 2 + 5 = 9$.<br>  Suy ra tung độ đỉnh $I$ của parabol là $y_I = 9$.<br>- Do hệ số $a = -1 &lt; 0$ nên đồ thị hàm số có bề lõm hướng xuống dưới.<br>- Bảng biên thiên của đồ thị hàm số  <br><img src=\"data/10/0D3/im0D32/loc3_0_TN_DS_THPT_chu_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên, suy ra trên đoạn $[0; 4]$, hàm số đạt giá trị lớn nhất là $9$ khi $x=2$."
  }
];
