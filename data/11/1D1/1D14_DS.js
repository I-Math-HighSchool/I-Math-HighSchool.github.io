// =========================================================================
// KHỐI DỮ LIỆU: 1D14 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 5), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D14 = [
  {
    "id": "1D141DS1",
    "question": "Cho hàm số $f(x)=\\tan 2x-1$. Khi đó",
    "subQuestions": [
      {
        "text": "Giá trị của hàm số $f(x)$ tại $x=\\dfrac{\\pi}{8}$ bằng $0$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ là hàm số chẵn",
        "answer": false
      },
      {
        "text": "Tập xác định của hàm số $f(x)$ là $\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{4}+k\\dfrac{\\pi}{2},\\,k \\in \\mathbb{Z} \\right\\}$ và tập giá trị là $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ là hàm tuần hoàn",
        "answer": true
      }
    ],
    "explain": "<br>- $f\\left(\\dfrac{\\pi}{8}\\right)=\\tan 2\\left(\\dfrac{\\pi}{8}\\right)-1=1-1=0$.<br>- $f(-x)=\\tan(-2x)-1=-\\tan 2x-1\\ne f(x)$ nên $f(x)$ là hàm số không chẵn.<br>- $\\cos 2x\\ne 0\\Leftrightarrow x\\ne\\dfrac{\\pi}{4}+k\\dfrac{\\pi}{2}$ $(k\\in \\mathbb{Z})$. Suy ra $\\mathscr{D}=\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{4}+k\\dfrac{\\pi}{2},~ k\\in \\mathbb{Z} \\right\\}$.<br>  Và $\\tan 2x$ nhận mọi giá trị $\\mathbb{R}$ nên $f(x)=\\tan 2x-1$ cũng có tập giá trị $\\mathbb{R}$.<br>- $\\tan 2x$ có chu kỳ $T=\\dfrac{\\pi}{2}$ nên hàm số $f(x)$ tuần hoàn với chu kỳ $T=\\dfrac{\\pi}{2}$."
  },
  {
    "id": "1D141DS2",
    "question": "Cho hàm số $y=f(x)=\\cos x$.  \\def\\dotEX{}",
    "subQuestions": [
      {
        "text": "Giá trị của $f\\left(\\dfrac{\\pi}{3}\\right)$ là một số nguyên.",
        "answer": false
      },
      {
        "text": "Tập xác định của hàm số $y = f(x)$ là $\\mathbb{R}$.",
        "answer": true
      },
      {
        "text": "Đồ thị của hàm số $y = f(x)$ có dạng:<br>   <br><img src=\"data/11/1D1/im1D14/1D14_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": true
      },
      {
        "text": "Số nghiệm phương trình $2\\cos x - 1 = 0$ trên đoạn $[-\\pi; 2\\pi]$ là $3$.",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Ta có $f\\left(\\dfrac{\\pi}{3}\\right)=\\cos \\dfrac{\\pi}{3}=\\dfrac{1}{2}\\notin\\mathbb{Z}$.<br>- <strong>Đúng</strong>.<br>  Hàm số $y=f(x)=\\cos x$ có tập xác định là $\\mathscr{D}=\\mathbb{R}$.<br>- <strong>Đúng</strong>.<br>  Hàm số $y=f(x)=\\cos x$ là hàm số lẻ nên đồ thị đống xứng qua trục tung.<br>  Ta có $f(0)=\\cos 0=1$, $f(2\\pi)=\\cos 2\\pi=1$.<br>  $f(-\\pi)=\\cos (-\\pi)=-1 $, $f(\\pi)=\\cos \\pi =-1$.<br>  Nên đồ thị trên là đồ thị hàm số $y=\\cos x$.<br>- <strong>Đúng</strong>.<br>  Ta có   $2\\cos x - 1 = 0$<br>$\\Leftrightarrow \\cos x =\\dfrac{1}{2}$<br>$\\Leftrightarrow x=\\dfrac{\\pi}{3}+k2\\pi \\text{ hoặc } x=-\\dfrac{\\pi}{3}+k2\\pi (k\\in \\mathbb{Z}).$  <br>- Với $x=\\dfrac{\\pi}{3}+k2\\pi$.<br>  Vì $x\\in [-\\pi; 2\\pi]$ nên $-\\pi\\le \\dfrac{\\pi}{3}+k2\\pi\\le 2\\pi \\Leftrightarrow -\\dfrac{2}{3}\\le k\\le \\dfrac{5}{6}$.<br>  Vì $k\\in \\mathbb{Z} $ nên $k=0$. Suy ra $x= \\dfrac{\\pi}{3}$.<br>- Với $x=-\\dfrac{\\pi}{3}+k2\\pi$.<br>  Vì $x\\in [-\\pi; 2\\pi]$ nên $-\\pi\\le -\\dfrac{\\pi}{3}+k2\\pi\\le 2\\pi \\Leftrightarrow -\\dfrac{1}{3}\\le k\\le \\dfrac{7}{6}$.<br>  Vì $k\\in \\mathbb{Z} $ nên $k\\in\\{0;1\\}$. Suy ra $x\\in\\left\\{-\\dfrac{\\pi}{3};\\dfrac{5\\pi}{3}\\right\\} $.  Vậy số nghiệm của phương trình trên $[-\\pi; 2\\pi]$ là $3$."
  },
  {
    "id": "1D147DS3",
    "question": "Đồ thị của một hàm số $y = f(x)$ được biểu diễn như sau  <br><img src=\"data/11/1D1/im1D14/1D14_tikz_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số này là của hàm số $y = \\tan x$",
        "answer": false
      },
      {
        "text": "Hàm số là hàm số lẻ",
        "answer": true
      },
      {
        "text": "Tất cả các nghiệm của phương trình $y = 0$ có thể được biểu diễn là $x = \\dfrac{\\pi}{2} + k2\\pi$ $(k \\in \\mathbb{Z})$",
        "answer": false
      },
      {
        "text": "Số nghiệm của phương trình $f(x) = m$ trên đoạn $\\left[-2\\pi;2\\pi\\right]$ là $6$ với mọi số thực $m$",
        "answer": false
      }
    ],
    "explain": "<br>- Đồ thị hàm số này của $y = \\cot x$ vì dựa vào đồ thị thì $y = f\\left(\\dfrac{\\pi}{2}\\right) = 0$ mà $y = \\tan x$ không xác định tại $x = \\dfrac{\\pi}{2}$.<br>- Hàm số $y = \\cot x$ là hàm số lẻ.<br>- Dựa vào đồ thị ta có tất cả các nghiệm của phương trình $y = 0$ đều được biểu diễn là $x = \\dfrac{\\pi}{2} + k\\pi$ với ($k \\in \\mathbb{Z}$).<br>- Dựa vào đồ thị ta thấy đường thẳng $y = f(x) = m$ chỉ cắt đồ thị tại 4 điểm phân biệt trên đoạn $\\left[-2\\pi;2\\pi\\right]$."
  },
  {
    "id": "1D141DS4",
    "question": "Cho hàm số $f(x)=\\tan x+2$.",
    "subQuestions": [
      {
        "text": "Hàm số $f(x)$ là hàm số lẻ",
        "answer": false
      },
      {
        "text": "Tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}\\setminus\\{k\\pi$, $k\\in\\mathbb{Z}\\}$",
        "answer": false
      },
      {
        "text": "$f\\left(\\dfrac{\\pi}{4}\\right)=3$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ có giá trị lớn nhất là $1$",
        "answer": false
      }
    ],
    "explain": "<br>- Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2}+k\\pi, k\\in\\mathbb{Z}\\right\\}$.<br>   Ta có $f(-x)=\\tan(-x)+2=-\\tan x+2$.<br>   Do $f(-x)\\ne f(x)$ và $f(-x)\\ne -f(x)$ nên hàm số không chẵn, không lẻ.<br>- Tập xác định của hàm số $y=\\tan x$ là $\\mathscr{D}=\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2}+k\\pi, k\\in\\mathbb{Z}\\right\\}$.<br>- Ta có $f\\left(\\dfrac{\\pi}{4}\\right)=\\tan\\dfrac{\\pi}{4}+2=1+2=3$.<br>- Tập giá trị của hàm số $f(x)=\\tan x+2$ là $\\mathbb{R}$. Hàm số không có giá trị lớn nhất."
  },
  {
    "id": "1D141DS5",
    "question": "Cho hàm số $f(x)=\\tan x-x$. Khi đó",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}\\setminus \\left\\{\\dfrac{\\pi}{2}+k\\pi,\\, k\\in \\mathbb{Z}\\right\\}$",
        "answer": true
      },
      {
        "text": "$f\\left(\\dfrac{\\pi}{3} \\right)=f\\left(-\\dfrac{\\pi}{3} \\right)$",
        "answer": false
      },
      {
        "text": "$f\\left(-x\\right)=-f(x)$, $\\forall x\\in \\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số nhận trục $Oy$ làm trục đối xứng",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Hàm số $f(x)=\\tan x$ có điều kiện xác định là $x\\ne \\dfrac{\\pi}{2}+k\\pi$, $k\\in \\mathbb{Z}$.<br>- <strong>Sai</strong>.<br>  Ta có   <br>- $f\\left(\\dfrac{\\pi}{3} \\right)= \\sqrt{3}-\\dfrac{\\pi}{3}$,<br>- $f\\left(-\\dfrac{\\pi}{3} \\right)= -\\sqrt{3}+\\dfrac{\\pi}{3}$.  Suy ra $f\\left(\\dfrac{\\pi}{3} \\right)\\ne f\\left(-\\dfrac{\\pi}{3} \\right)$.<br>- <strong>Đúng</strong>.<br>  Ta có $f(-x)= \\tan (-x) +x=-\\tan x +x=-(\\tan x -x)=-f(x)$, $\\forall x\\in \\mathbb{R}$.<br>- <strong>Sai</strong>.<br>  Ta có $f\\left(-x\\right)=-f(x)$ nên hàm số $f(x)$ là hàm số lẻ.<br>  Vậy đồ thị của hàm số nhận gốc tọa độ $O$ làm tâm đối xứng."
  },
  {
    "id": "1D148DS6",
    "question": "Một vật dao động xung quanh vị trí cân bằng theo phương trình $x=1{,}5\\cos \\left(\\dfrac{t\\pi}{4} \\right)$ (tham khảo hình vẽ); trong đó $t$ là thời gian được tính bằng giây và quãng đường $h=|x|$ được tính bằng mét là khoảng cách theo phương ngang của chất điểm đối với vị trí cân bằng. Khi đó<br><img src=\"data/11/1D1/im1D14/1D14_tikz_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Vật ở xa vị trí cân bằng nhất nghĩa là $h=1{,}5$ m",
        "answer": false
      },
      {
        "text": "Khi vật ở vị trí cân bằng thì $\\cos \\left(\\dfrac{t\\pi}{4} \\right)=0$",
        "answer": true
      },
      {
        "text": "Trong $10$ giây đầu tiên, có hai thời điểm vật ở xa vị trí cân bằng nhất",
        "answer": false
      },
      {
        "text": "Trong khoảng từ $0$ đến $20$ giây thì vật đi qua vị trí cân bằng $4$ lần",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Vật ở vị trí cân bằng khi $h=0$ m.<br>- <strong>Đúng</strong>.<br>  Vật ở vị trí cân bằng khi $\\cos \\left(\\dfrac{t\\pi}{4} \\right)=0$.<br>- <strong>Sai</strong>.<br>  Trong $10$ giây đầu tiên tức là $t \\in \\left[0;10 \\right]$ có $3$ thời điểm mà vật ở xa vị trí cân bằng nhất là $t=0$, $t=4$ và $t=8$.<br>- <strong>Sai</strong>.<br>  Trong khoảng từ $0$ đến $20$ giây tức là $t \\in \\left[0;20 \\right]$ có $5$ lần vật đi qua vị trí cân bằng khi $t=2$, $t=6$, $t=10$, $t=14$, $t=18$."
  },
  {
    "id": "1D141DS7",
    "question": "Cho hàm số $y=2\\cos\\left(\\dfrac{\\pi x}{6}\\right)+11$.",
    "subQuestions": [
      {
        "text": "Hàm số có tập xác định là $\\Bbb{R}$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho là hàm số lẻ",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số bằng $13$",
        "answer": true
      },
      {
        "text": "Phương trình $y=11$ có đúng $8$ nghiệm trên đoạn $[0;100]$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Hàm số có tập xác định là $\\Bbb{R}$.<br>- <strong>Sai</strong>.<br>  Ta có $f(-x)=2\\cos\\left(-\\dfrac{\\pi x}{6}\\right)+11=2\\cos\\left(\\dfrac{\\pi x}{6}\\right)+11=f(x)$, $\\forall x\\in \\Bbb{R}$.<br>  Suy ra hàm số đã cho là hàm số chẵn.<br>- <strong>Đúng</strong>.<br>  Ta có   $-1\\le \\cos\\left(-\\dfrac{\\pi x}{6}\\right)\\le 1, \\, \\forall x\\in \\Bbb{R}$<br>$\\Rightarrow -2\\le 2\\cos\\left(-\\dfrac{\\pi x}{6}\\right)\\le 2$<br>$\\Rightarrow 9\\le 2\\cos\\left(-\\dfrac{\\pi x}{6}\\right)+11\\le 13$<br>$\\Rightarrow 9\\le y\\le 13.$  Giá trị lớn nhất của hàm số bằng $13$ khi $\\cos\\left(\\dfrac{\\pi x}{6}\\right)=1\\Leftrightarrow \\dfrac{\\pi x}{6}=k2\\pi \\Leftrightarrow x=12k$, $k\\in \\Bbb{Z}$.<br>- <strong>Sai</strong>.<br>  Phương trình   $y=11 \\Leftrightarrow 2\\cos\\left(\\dfrac{\\pi x}{6}\\right)+11=11$<br>$\\Leftrightarrow \\cos\\left(\\dfrac{\\pi x}{6}\\right)=0\\Leftrightarrow \\dfrac{\\pi x}{6}=\\dfrac{\\pi}{2}+k\\pi$<br>$\\Leftrightarrow x=3+6k, k\\in \\Bbb{Z}.$  Xét $x\\in [0;100]\\Leftrightarrow 0\\le 3+6k\\le 100\\Leftrightarrow -\\dfrac{1}{2}\\le k\\le \\dfrac{97}{6}\\Rightarrow k\\in \\{0;1;\\ldots;16\\}$.<br>  Vậy phương trình $y=11$ có đúng $17$ nghiệm trên đoạn $[0;100]$."
  },
  {
    "id": "1D141DS8",
    "question": "Cho hàm số $f(x)=\\tan 2x-1$.",
    "subQuestions": [
      {
        "text": "Giá trị của hàm số $f(x)$ tại $x=\\dfrac{\\pi}{8}$ bằng $0$",
        "answer": true
      },
      {
        "text": "Tập xác định của hàm số $f(x)$ là $\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{4}+\\dfrac{k\\pi}{2}\\right\\}$ ($k \\in \\mathbb{Z}$) và tập giá trị là $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ là hàm số chẵn",
        "answer": false
      },
      {
        "text": "Hàm số $f(x)$ là hàm tuần hoàn",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $f\\left(\\dfrac{\\pi}{8}\\right)=\\tan\\left(2 \\cdot \\dfrac{\\pi}{8}\\right)-1=\\tan\\dfrac{\\pi}{4}-1=1-1=0$.<br>- Điều kiện xác định $2x \\ne \\dfrac{\\pi}{2}+k\\pi \\Leftrightarrow x \\ne \\dfrac{\\pi}{4}+\\dfrac{k\\pi}{2}$ ($k \\in \\mathbb{Z}$).<br>  Suy ra tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{4}+\\dfrac{k\\pi}{2}\\right\\}$ ($k \\in \\mathbb{Z}$).<br>  Do $y=\\tan 2x$ và $y=1$ có tập giá trị là $\\mathbb{R}$ nên $f(x)$ có tập giá trị là $\\mathbb{R}$.<br>- Ta có $\\forall x \\in \\mathscr{D}$ suy ra $-x \\in \\mathscr{D}$.<br>  Ta có $f(-x)=\\tan(-2x)-1=-\\tan2x-1=-(\\tan2x+1)$.<br>  Suy ra $f(-x) \\ne f(x)$ và $f(-x) \\ne -f(x)$.<br>  Vậy hàm số $f(x)$ là hàm số không chẵn, không lẻ.<br>- Chọn $T=\\dfrac{\\pi}{2}$. Với mọi $x \\in \\mathscr{D}$, ta có  <br>- $x+T \\in \\mathscr{D}$ và $x-T \\in \\mathscr{D}$;<br>- $f(x+T)=f\\left(2\\left(x+\\dfrac{\\pi}{2}\\right)\\right)-1=\\tan(2x+\\pi) -1=\\tan2x -1=f(x)$;<br>- $f(x-T)=f\\left(2\\left(x-\\dfrac{\\pi}{2}\\right)\\right) -1= \\tan(2x-\\pi) -1=\\tan2x -1 =f(x)$.  Suy ra hàm số $f(x)$ là hàm số tuần hoàn."
  },
  {
    "id": "1D141DS9",
    "question": "Cho hàm số $f(x)=3\\sin x+2$.",
    "subQuestions": [
      {
        "text": "Giá trị của hàm số khi $x=\\pi$ bằng $2$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ tuần hoàn với chu kì $2\\pi$",
        "answer": true
      },
      {
        "text": "Phương trình $f(x)=0$ có tất cả $8$ nghiệm thuộc nửa khoảng $\\left[-\\dfrac{7\\pi}{2};4\\pi\\right)$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ có giá trị nhỏ nhất bằng $2$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Ta có $f(\\pi)=3\\sin \\pi +2=2$.<br>- <strong>Đúng</strong>.<br>  Hàm $y=\\sin x$ tuần hoàn với chu kì $2\\pi$ nên hàm số $f(x)=3\\sin x+2$ tuần hoàn với chu kì $2\\pi$.<br>- <strong>Đúng</strong>.<br>  Ta có $f(x)=0\\Leftrightarrow \\sin x=-\\dfrac{2}{3}$.<br>  Gọi $\\alpha\\in \\left[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right]$ thỏa mãn $\\sin \\alpha=-\\dfrac{2}{3}$. Khi đó ta có   $\\sin x=-\\dfrac{2}{3}\\Leftrightarrow \\sin x=\\sin\\alpha\\Leftrightarrow x=\\alpha+k2\\pi \\text{ hoặc } x=\\pi-\\alpha+k2\\pi (k\\in \\mathbb{Z}).$  Tiếp theo ta sẽ đếm số nghiệm thuộc nửa khoảng $\\left[-\\dfrac{7\\pi}{2};4\\pi\\right)$.  <br>- Với $x=\\alpha+k2\\pi$, ta có $-\\dfrac{7\\pi}{2}\\leq \\alpha+k2\\pi &lt;4\\pi\\Leftrightarrow -1{,}63\\leq k&lt; 2{,}11$.<br>  Mà $k\\in \\mathbb{Z}$ nên $k\\in \\{-1;0;1;2\\}$.<br>- Với $x=\\pi-\\alpha+k2\\pi$, ta có $-\\dfrac{7\\pi}{2}\\leq \\pi-\\alpha+k2\\pi &lt;4\\pi\\Leftrightarrow -2{,}36\\leq k&lt; 1{,}38$.<br>  Mà $k\\in \\mathbb{Z}$ nên $k\\in \\{-2;-1;0;1\\}$.  Vậy có tất cả $8$ nghiệm thỏa mãn yêu cầu.<br>- <strong>Sai</strong>.<br>  Ta có $-1\\leq \\sin x\\leq 1$ nên $-3\\leq 3\\sin x\\leq 3$.<br>  Suy ra $-1\\leq f(x)\\leq 5$.<br>  Vậy hàm số $f(x)$ có giá trị nhỏ nhất bằng $-1$."
  },
  {
    "id": "1D147DS10",
    "question": "Cho hàm số $y=\\cos x$ có đồ thị như hình bên dưới  <br><img src=\"data/11/1D1/im1D14/1D14_tikz_014.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đã cho có đồ thị đối xứng qua trục $Oy$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho là hàm số chẵn",
        "answer": true
      },
      {
        "text": "Phương trình $\\cos x=\\dfrac{1}{2}$ có hai nghiệm phân biệt trên $\\left[-\\pi;\\pi \\right] $",
        "answer": true
      },
      {
        "text": "Phương trình $\\cos x=\\dfrac{1}{2}$ có tập nghiệm $S=\\left\\lbrace \\pm \\dfrac{\\pi}{6}+k2\\pi|k \\in \\mathbb{Z} \\right\\rbrace$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br> Đồ thị hàm số $y=\\cos x$ đối xứng qua trục tung $Oy$.<br>- <strong>Đúng</strong>.<br> Hàm số $y=\\cos x$ là hàm số chẵn vì $\\cos(-x)=\\cos x$.<br>- <strong>Đúng</strong>.<br> Ta có $\\cos x=\\dfrac{1}{2}$<br>$\\Rightarrow \\cos x=\\cos \\dfrac{\\pi}{3}$<br>$\\Rightarrow x=\\dfrac{\\pi}{3}+k2\\pi \\text{ hoặc } x=-\\dfrac{\\pi}{3}+k2\\pi.$  Vì $x\\in \\left[-\\pi;\\pi\\right]$ nên $x=\\dfrac{\\pi}{3}$, $x=-\\dfrac{\\pi}{3}$.<br>- <strong>Sai</strong>.<br> Phương trình $\\cos x=\\dfrac{1}{2}$ có tập nghiệm $S=\\left\\lbrace \\pm \\dfrac{\\pi}{3}+k2\\pi|k \\in \\mathbb{Z} \\right\\rbrace$."
  },
  {
    "id": "1D147DS11",
    "question": "Trong mặt phẳng tọa độ $O x y$, cho đồ thị hàm số $y=\\sin x$ trên đoạn $[-2 \\pi ; 2 \\pi]$ như hình vẽ sau   <br><img src=\"data/11/1D1/im1D14/1D14_tikz_015.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đã cho đồng biến trên khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$",
        "answer": true
      },
      {
        "text": "Trên đoạn $[-2 \\pi ; 2 \\pi]$ hàm số đã cho đạt giá trị lớn nhất bằng $0$",
        "answer": false
      },
      {
        "text": "Trên đoạn $[-2 \\pi ; 2 \\pi]$ phương trình $2 \\sin x-1=0$ có 4 nghiệm phân biệt",
        "answer": true
      },
      {
        "text": "Chu kì tuần hoàn của hàm số đã cho là $T=4 \\pi$",
        "answer": false
      }
    ],
    "explain": "<br>- Dựa vào đồ thị hàm số đã đo ta thấy với $x\\in\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right) $ đồ thị có hướng đi lên từ trái qua phải. Đo đó hàm số đồng biến trên khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$.<br>- Dựa vào đồ thị ta thấy $-1\\le y\\le 1$. Do đó giá trị lớn nhất bằng $1$.<br>- Phương trình $2\\sin x=1\\Leftrightarrow \\sin x=\\dfrac{1}{2}$.<br>  Nghiệm của phương trình trong đoạn $[-2\\pi; 2\\pi ]$ là số giao điểm của đồ thị với đường thẳng $y=\\dfrac{1}{2}$.<br>  Từ đồ thị ta thấy phương trình có $4$ nghiệm phân biệt.<br>- Chu kì tuần hoàn của hàm số đã cho là $t=2\\pi$."
  },
  {
    "id": "1D141DS12",
    "question": "Cho $y=\\sin x+\\sqrt{3}\\cos x+1$.",
    "subQuestions": [
      {
        "text": "Hàm số có tập xác định là $\\mathscr{D}=\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Hàm số tuần hoàn với chu kỳ $T=\\pi$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số nhận trục tung làm trục đối xứng",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số là $2+\\sqrt{3}$",
        "answer": false
      }
    ],
    "explain": "Ta có hàm số $y=\\sin x+\\sqrt{3}\\cos x+1=2\\left(\\dfrac{1}{2}\\sin x+\\dfrac{\\sqrt{3}}{2}\\cos x\\right)+1=2\\sin\\left(x+\\dfrac{\\pi}{3}\\right)+1$.  <br>- Hàm số $y=2\\sin\\left(x+\\dfrac{\\pi}{3}\\right)+1$ có tập xác định là $\\mathscr{D}=\\mathbb{R}$.<br>- Hàm số $y=k\\sin (ax+b)$ với $a\\ne 0$ tuần hoàn với chu kỳ $T=\\dfrac{2\\pi}{|a|}$.<br>  Suy ra hàm số $y=2\\sin\\left(x+\\dfrac{\\pi}{3}\\right)+1$ tuần hoàn với chu kỳ $T=\\dfrac{2\\pi}{1}=2\\pi$.<br>- Xét hàm số $y=f(x)=2\\sin\\left(x+\\dfrac{\\pi}{3}\\right)+1$.<br>  $\\forall x\\in \\mathscr{D}\\Rightarrow -x\\in \\mathscr{D}$.<br>  Khi đó $f(-x)=2\\sin (-x+\\dfrac{\\pi}{3})+1\\ne f(x)$.<br>  Do đó hàm số $y=f(x)$ không phải là hàm số chẵn, do đó đồ thị hàm số không nhận trục tung làm trục đối xứng.<br>- Ta có $\\sin \\left(x+\\dfrac{\\pi}{3}\\right)\\le 1\\Leftrightarrow 2\\sin \\left(x+\\dfrac{\\pi}{3}\\right)+1\\le 3$.<br>  Vậy giá trị lớn nhất của hàm số là $3$."
  },
  {
    "id": "1D141DS13",
    "question": "Cho hàm số $f(x) = \\cos(2x)$. Khi đó:",
    "subQuestions": [
      {
        "text": "Hàm số đã cho là hàm số chẵn trên $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Chu kỳ của hàm số đã cho bằng $2\\pi$",
        "answer": false
      },
      {
        "text": "Tập giá trị của hàm số là $[-1; 1]$",
        "answer": true
      },
      {
        "text": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{0\\}$",
        "answer": false
      }
    ],
    "explain": "Xét hàm số $y = \\cos2x$  <br>- Tập xác định $D = \\mathbb{R}$.<br>   $\\forall x \\in D \\Rightarrow -x \\in D$.<br>   Ta có $f(-x) = \\cos(-2x) = \\cos2x = f(x)$.<br>   Do đó hàm số là hàm số chẵn trên $\\mathbb{R}$.<br>- Hàm số tuần hoàn với chu kỳ $T = \\dfrac{2\\pi}{|2|} = \\pi$.<br>- Ta có $-1 \\le \\cos2x \\le 1$ với mọi $x \\in \\mathbb{R}$ nên tập giá trị của hàm số là $[-1; 1]$.<br>- Hàm số xác định với mọi $x \\in \\mathbb{R}$ nên tập xác định là $D = \\mathbb{R}$."
  },
  {
    "id": "1D141DS14",
    "question": "Cho hàm số $y = 3 - \\sin(2x)$, khi đó",
    "subQuestions": [
      {
        "text": "Tập giá trị của hàm số là $T = [2; 3]$",
        "answer": false
      },
      {
        "text": "Hàm số có tập xác định $\\mathscr{D} = \\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Chu kỳ của hàm số $T = \\pi$",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số bằng $ 2 $",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Ta có $-1 \\le \\sin(2x) \\le 1 \\Leftrightarrow -1 \\le -\\sin(2x) \\le 1 \\Leftrightarrow 2 \\le 3 - \\sin(2x) \\le 4$.<br>  Tập giá trị là $[2; 4]$.<br>- <strong>Đúng</strong>. Hàm số $ \\sin $ có tập xác định $\\mathscr{D} = \\mathbb{R}$.<br>- <strong>Đúng</strong>. Chu kỳ $T = \\dfrac{2\\pi}{|2|} = \\pi$.<br>- <strong>Đúng</strong>. Dựa vào tập giá trị $[2; 4]$, giá trị nhỏ nhất là $2$."
  },
  {
    "id": "1D141DS15",
    "question": "Xét hàm số $y=\\cos 2x$.",
    "subQuestions": [
      {
        "text": "Hàm số có tập xác định là $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Là hàm số tuần hoàn với chu kỳ $2\\pi$",
        "answer": false
      },
      {
        "text": "Tập giá trị của hàm số là $T=[-2;2]$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số nhận trục tung làm trục đối xứng",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số $y=\\cos 2x$ có tập xác định là $\\mathscr{D}=\\mathbb{R}$.<br>- Hàm số $y=\\cos 2x$ là hàm số tuần hoàn với chu kỳ $\\pi$.<br>- Tập giá trị của hàm số là $T=[-2;2]$.<br>- $y=\\cos2x$ là hàm chẵn nên đồ thị của nó nhận trục tung làm trục đối xứng."
  },
  {
    "id": "1D141DS16",
    "question": "Cho hàm số $f(x)=\\dfrac{10}{3\\cos x+5}$.",
    "subQuestions": [
      {
        "text": "Hàm số $f(x)$ có tập xác định là $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ là hàm số lẻ trên $\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số $f(x)$ trên $\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ bằng $5$",
        "answer": false
      },
      {
        "text": "Nếu $f(x)=3$ thì $\\cos 2x =-\\dfrac{31}{18}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng.</strong><br>   Hàm số $f(x)$ xác định khi $3\\cos x+5\\ne 0$ (luôn đúng vì $3\\cos x+5 \\ge -3+5=2&gt;0$.<br>  Tập xác định $\\mathscr{D}=\\mathbb{R}$.<br>- <strong>Sai.</strong><br>   Với mọi $x\\in \\mathscr{D}$ thì $-x\\in\\mathscr{D}$.  <br>  Ta có $f(-x)=\\dfrac{10}{3\\cos (-x)+5}=\\dfrac{10}{3\\cos x+5}=f(x)$.<br>  Vậy $f(x)$ là hàm số chẵn trên $\\mathbb{R}$.<br>- <strong>Sai.</strong><br>   Với $x\\in \\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ thì $\\cos x \\in [0;1]$.<br>   Khi đó giá trị lớn nhất của $f(x)$ là $2$ khi $\\cos x=0$ và giá trị nhỏ nhất của $f(x)$ bằng $\\dfrac{5}{4}$ khi $\\cos x=1$.<br>- <strong>Sai.</strong><br>   Ta có $f(x)=3\\Leftrightarrow \\dfrac{10}{3\\cos x+5}=3\\Leftrightarrow \\cos x=-\\dfrac{5}{9}$.<br>  Do đó $\\cos 2x=2\\cos^2 x - 1=2\\cdot \\dfrac{25}{81}-1=-\\dfrac{31}{81}$."
  },
  {
    "id": "1D148DS17",
    "question": "Hằng ngày, mực nước của con kênh lên xuống theo thủy triều. Độ sâu $h(m)$ của mực nước trong kênh tại thời điểm $t(h)(0 \\leq t \\leq 24)$ được cho bởi công thức  $h=3 \\cos \\left(\\dfrac{\\pi t}{6}+\\dfrac{\\pi}{3}\\right)+12.$",
    "subQuestions": [
      {
        "text": "Độ sâu của mực nước trong kênh nhỏ nhất bằng $9$\\,m",
        "answer": true
      },
      {
        "text": "Độ sâu của mực nước trong kênh lớn nhất bằng $15$\\,m",
        "answer": true
      },
      {
        "text": "Trong $1$ ngày có đúng $3$ thời điểm mà độ sâu của mực nước trong kênh đạt giá trị lớn nhất",
        "answer": false
      },
      {
        "text": "Độ sâu của mực nước trong kênh tại thời điểm $12$ (h) bằng $13$\\,m",
        "answer": false
      }
    ],
    "explain": "$\\forall x\\in \\mathbb{R}$, ta có $-1\\le \\cos \\left(\\dfrac{\\pi t}{6}+\\dfrac{\\pi}{3}\\right)\\le 1$<br>$\\Leftrightarrow -3\\le 3\\cos \\left(\\dfrac{\\pi t}{6}+\\dfrac{\\pi}{3}\\right)\\le 3$<br>$\\Leftrightarrow -3+12\\le 3 \\cos \\left(\\dfrac{\\pi t}{6}+\\dfrac{\\pi}{3}\\right)+12\\le 3+12$<br>$\\Leftrightarrow 9\\le h\\le 15\\quad (*).$  <br>- Từ $(*)$ suy ra độ sâu của mực nước trong kênh nhỏ nhất bằng $9$\\,m.<br>- Từ $(*)$ suy ra độ sâu của mực nước trong kênh lớn nhất bằng $15$\\,m.<br>- Độ sâu của mực nước trong kênh lớn nhất bằng $15$\\,m khi  $\\cos \\left(\\dfrac{\\pi t}{6}+\\dfrac{\\pi}{3}\\right)=1$<br>$\\Leftrightarrow \\dfrac{\\pi t}{6}+\\dfrac{\\pi}{3}=k2\\pi$<br>$\\Leftrightarrow t=-2+12k,\\,k\\in\\mathbb{Z}.$  Vì $0\\le t\\le 24$ nên $0\\le -2+12k\\le 24$ hay $\\dfrac{1}{6}\\le k\\le \\dfrac{13}{6}$.<br>  Mà $k\\in\\mathbb{Z}$ nên $k\\in\\{1;2\\}$. <br>  Vậy trong $1$ ngày có đúng $2$ thời điểm mà độ sâu của mực nước trong kênh đạt giá trị lớn nhất.<br>- Độ sâu của mực nước trong kênh tại thời điểm $12$ (h) là  \\[h=3 \\cos \\left(\\dfrac{12\\pi }{6}+\\dfrac{\\pi}{3}\\right)+12=\\dfrac{27}{2}\\ne 13.\\]"
  },
  {
    "id": "1D141DS18",
    "question": "Xét tính đúng sai của các phát biểu sau",
    "subQuestions": [
      {
        "text": "Hàm số $y=2\\tan x$ có tập xác định là $D=\\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{4}+k\\dfrac{\\pi}{2}, k \\in \\mathbb{Z}\\right\\}$",
        "answer": false
      },
      {
        "text": "Tập giá trị của hàm số $y=-2\\sin\\left(\\dfrac{5\\pi}{2}-2x\\right)+11$ là $S=[9;13]$",
        "answer": true
      },
      {
        "text": "$\\cos\\left(2x+\\dfrac{\\pi}{3}\\right)+\\cos\\left(2x-\\dfrac{\\pi}{3}\\right)=\\cos 2x$",
        "answer": true
      },
      {
        "text": "$\\sin\\alpha &gt; 0$ với mọi $\\alpha \\in \\left(\\dfrac{3\\pi}{2}; 2\\pi\\right)$",
        "answer": false
      }
    ],
    "explain": "<br>- {\\bf Sai.}<br>  Hàm số xác định khi $\\cos x \\neq 0 \\Leftrightarrow x \\neq \\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}$.<br>  Tập xác định là $D=\\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$.<br>- {\\bf Đúng.}<br>  Ta có $-1 \\le \\sin\\left(\\dfrac{5\\pi}{2}-2x\\right) \\le 1 \\Leftrightarrow -2 \\le -2\\sin\\left(\\dfrac{5\\pi}{2}-2x\\right) \\le 2$.<br>  Suy ra $9 \\le -2\\sin\\left(\\dfrac{5\\pi}{2}-2x\\right)+11 \\le 13$. Vậy tập giá trị là $S=[9;13]$.<br>- {\\bf Đúng.}<br>  Ta có $\\text{VT} = 2\\cos 2x \\cos \\dfrac{\\pi}{3} = 2\\cos 2x \\cdot \\dfrac{1}{2} = \\cos 2x = \\text{VP}$.<br>- {\\bf Sai.}<br>  Vì $\\alpha \\in \\left(\\dfrac{3\\pi}{2}; 2\\pi\\right)$ thuộc góc phần tư thứ IV nên $\\sin\\alpha &lt; 0$."
  },
  {
    "id": "1D141DS19",
    "question": "Xét tính đúng sai của các phát biểu sau:",
    "subQuestions": [
      {
        "text": "Hàm số $y=2 \\tan x$ có tập xác định là $D=\\mathbb{R}\\backslash\\{\\dfrac{\\pi}{4}+k\\dfrac{\\pi}{2},k\\in\\mathbb{Z}\\}$",
        "answer": false
      },
      {
        "text": "Tập giá trị của hàm số $y=-2 \\sin\\left(\\dfrac{5\\pi}{2}-2x\\right)+11$ là $S=[9;13]$",
        "answer": true
      },
      {
        "text": "$\\cos\\left(2x+\\dfrac{\\pi}{3}\\right)+\\cos\\left(2x-\\dfrac{\\pi}{3}\\right)=\\cos 2x$",
        "answer": true
      },
      {
        "text": "$\\sin \\alpha&gt;0$ với mọi $\\alpha\\in\\left(\\dfrac{3\\pi}{2};2\\pi\\right)$",
        "answer": false
      }
    ],
    "explain": "<br>- Hàm số $y=2 \\tan x = \\dfrac{2\\sin x}{\\cos x}$ xác định khi $\\cos x \\neq 0 \\Leftrightarrow x \\neq \\dfrac{\\pi}{2} + k\\pi, (k\\in\\mathbb{Z})$.<br>  Vậy tập xác định là $D=\\mathbb{R}\\backslash\\{\\dfrac{\\pi}{2}+k\\pi, k\\in\\mathbb{Z}\\}$.<br>- Ta có \\[\\sin\\left(\\dfrac{5\\pi}{2}-2x\\right) = \\sin\\left(2\\pi + \\dfrac{\\pi}{2}-2x\\right) = \\sin\\left(\\dfrac{\\pi}{2}-2x\\right) = \\cos 2x.\\]  Do đó $y = -2\\cos 2x + 11$.<br>  Ta có   $-1 \\le \\cos 2x \\le 1$<br>$\\Leftrightarrow -2 \\le -2\\cos 2x \\le 2$<br>$\\Leftrightarrow 9 \\le -2\\cos 2x + 11 \\le 13.$  Vậy tập giá trị là $S=[9;13]$.<br>- Ta có  $\\cos\\left(2x+\\dfrac{\\pi}{3}\\right)+\\cos\\left(2x-\\dfrac{\\pi}{3}\\right) = 2 \\cos\\left(\\dfrac{(2x+\\frac{\\pi}{3}) + (2x-\\frac{\\pi}{3})}{2}\\right) \\cos\\left(\\dfrac{(2x+\\frac{\\pi}{3}) - (2x-\\frac{\\pi}{3})}{2}\\right)$<br>$= 2 \\cos(2x) \\cos\\left(\\dfrac{\\pi}{3}\\right)$<br>$= 2 \\cos(2x) \\cdot \\dfrac{1}{2}$<br>$= \\cos 2x.$<br>- Khi $\\alpha\\in\\left(\\dfrac{3\\pi}{2};2\\pi\\right)$ thuộc góc phần tư thứ IV, nên $\\sin \\alpha &lt; 0$."
  },
  {
    "id": "1D147DS20",
    "question": "Cho hai hàm số lượng giác $y=f(x)=\\sin x$ và $y=g(x)=\\cos x$ và các đường cong $(C)$, $(C')$ như hình bên dưới. Khi đó, các mệnh đề sau đúng hay sai?  <br><img src=\"data/11/1D1/im1D14/1D14_tikz_031.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$f\\left(\\dfrac{\\pi}{3} \\right)=\\dfrac{\\sqrt{3}}{2}$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số $y=\\sin x$, $y=\\cos x$ lần lượt là các đường cong $(C)$, $(C')$ ở hình vẽ trên",
        "answer": false
      },
      {
        "text": "Trên $\\left[-\\dfrac{\\pi}{4};\\dfrac{3\\pi}{4} \\right]$, giá trị nhỏ nhất của hàm số $y=f(x)=\\sin x$ là $-1$",
        "answer": false
      },
      {
        "text": "Tổng hoành độ các giao điểm của $(C)$, $(C')$ trên $[-6\\pi;6\\pi]$ là $-3\\pi$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $f\\left(\\dfrac{\\pi}{3} \\right)=\\sin\\left(\\dfrac{\\pi}{3}\\right)=\\dfrac{\\sqrt{3}}{2}$.<br>- Từ hình vẽ ta thấy $(C)$ là đồ thị của hàm số $y=g(x)=\\cos x$ và $(C')$ là đồ thị của hàm số $y=g(x)=\\sin x$.<br>- Trên $\\left[-\\dfrac{\\pi}{4};\\dfrac{3\\pi}{4} \\right]$, giá trị nhỏ nhất của hàm số $y=f(x)=\\sin x$ là $\\sin\\left(-\\dfrac{\\pi}{4}\\right)=-\\dfrac{\\sqrt{2}}{2}$.<br>- Từ hình vẽ ta thấy trên $[-6\\pi;6\\pi]$ có hoành độ các giao điểm của $(C)$, $(C')$ là<br>  $-\\dfrac{23\\pi}{4}$; $-\\dfrac{19\\pi}{4}$; $-\\dfrac{15\\pi}{4}$; $-\\dfrac{11\\pi}{4}$; $-\\dfrac{7\\pi}{4}$; $-\\dfrac{3\\pi}{4}$; $\\dfrac{\\pi}{4}$; $\\dfrac{5\\pi}{4}$; $\\dfrac{9\\pi}{4}$; $\\dfrac{13\\pi}{4}$; $\\dfrac{17\\pi}{4}$; $\\dfrac{21\\pi}{4}$.<br>  Do đó tổng hoành độ các giao điểm của $(C)$, $(C')$ trên $[-6\\pi;6\\pi]$ là $-3\\pi$."
  },
  {
    "id": "1D141DS21",
    "question": "Cho hàm số $y=2\\sin x$. Khi đó",
    "subQuestions": [
      {
        "text": "Điểm $M\\left(2; \\dfrac{\\pi}{2}\\right)$ thuộc đồ thị hàm số",
        "answer": false
      },
      {
        "text": "Hàm số tuần hoàn với chu kì $T=\\pi$",
        "answer": false
      },
      {
        "text": "Hàm số có tập xác định là $D=\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Tập giá trị của hàm số là $[-2; 2]$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $2\\cdot \\sin 2\\neq \\dfrac{\\pi}{2}$.<br>  Do đó, điểm $M\\left(2; \\dfrac{\\pi}{2}\\right)$ không thuộc đồ thị hàm số đã cho.<br>- Hàm số $y=2\\sin x$ tuần hoàn với chu kì $T=2\\pi$.<br>- Hàm số $y=2\\sin x$ có tập xác định là $D=\\mathbb{R}$.<br>- Tập giá trị của hàm số $y=2\\sin x$ là $[-2; 2]$ vì $-1\\leq\\sin x\\leq 1$."
  },
  {
    "id": "1D141DS22",
    "question": "\\text{ }",
    "subQuestions": [
      {
        "text": "Cho $0&lt; \\alpha &lt; \\dfrac{\\pi}{2}$. Xét được dấu của biểu thức $A=\\cos \\left(\\alpha+\\dfrac{\\pi}{2}\\right) &gt; 0$",
        "answer": false
      },
      {
        "text": "Cho $\\cos x=\\dfrac{4}{5}$ và $\\dfrac{3\\pi}{2} &lt; x &lt; 2\\pi$. Khi đó, $\\cos 2x=-\\dfrac{7}{25}$",
        "answer": false
      },
      {
        "text": "Hằng ngày mực nước của con kênh lên xuống theo thủy triều. Độ sâu $h$ (mét) của mực nước trong kênh tính theo thời gian $t$ (giờ) được cho bởi công thức $h(t)=2\\sin \\left(\\dfrac{\\pi t}{4}+\\dfrac{\\pi}{6}\\right)+15$. Chiều sâu của mực nước cao nhất là $17$ m",
        "answer": true
      },
      {
        "text": "Góc có số đo $270^\\circ$ đổi ra radian là $\\dfrac{3\\pi}{2}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $0 &lt; \\alpha &lt; \\dfrac{\\pi}{2} \\Leftrightarrow \\dfrac{\\pi}{2} &lt; \\alpha+\\dfrac{\\pi}{2} &lt; \\pi \\Rightarrow \\cos\\left(\\alpha+\\dfrac{\\pi}{2}\\right) &lt; 0$.<br>- Ta có $\\cos 2x = 2\\cos^2x - 1 = 2\\cdot\\left(\\dfrac{4}{5}\\right)^2 - 1 = \\dfrac{7}{25}$.<br>- Ta có   $-1 \\leq \\sin \\left(\\dfrac{\\pi t}{4}+\\dfrac{\\pi}{6}\\right) \\leq 1$<br>$\\Leftrightarrow -2 \\leq 2\\sin \\left(\\dfrac{\\pi t}{4}+\\dfrac{\\pi}{6}\\right) \\leq 2$<br>$\\Leftrightarrow 13 \\leq 2\\sin \\left(\\dfrac{\\pi t}{4}+\\dfrac{\\pi}{6}\\right) + 15 \\leq 17$<br>$\\Leftrightarrow 13 \\leq h(t) \\leq 17.$  Suy ra, chiều sâu của mực nước cao nhất là $17$ mét.<br>- Góc có số đo $270^\\circ$ đổi ra radian là $\\dfrac{270\\pi}{180} = \\dfrac{3\\pi}{2}$."
  },
  {
    "id": "1D141DS23",
    "question": "Cho hàm số lượng giác $y = 4\\cos 2x + 3$.",
    "subQuestions": [
      {
        "text": "Hàm số có tập xác định là $[-1; 1]$",
        "answer": false
      },
      {
        "text": "Hàm số có chu kì tuần hoàn là $\\pi$",
        "answer": true
      },
      {
        "text": "Hàm số có tập giá trị là $[-1; 7]$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho là hàm số chẵn",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số có tập xác định là $\\mathscr{D}=\\mathbb{R}$.<br>- Chu kì của hàm số $y = \\cos(ax+b)$ là $T = \\dfrac{2\\pi}{|a|}$. Ở đây $a=2$ nên $T = \\dfrac{2\\pi}{2} = \\pi$.<br>- Ta có $-1 \\le \\cos 2x \\le 1   \\Leftrightarrow -4 \\le 4\\cos 2x \\le 4$<br>$\\Leftrightarrow -1 \\le 4\\cos 2x + 3 \\le 7.$  Suy ra tập giá trị là $[-1; 7]$.<br>- Xét $y = f(x) = 4\\cos 2x + 3$.<br>   Với mọi $x\\in \\mathscr{D} \\Rightarrow -x \\in \\mathscr{D}$.  $f(-x) = 4\\cos(-2x) + 3 = 4\\cos 2x + 3 = f(x).$  Vậy hàm số là hàm số chẵn."
  },
  {
    "id": "1D147DS24",
    "question": "Cho hàm số $f(x)=\\sin x$.<br><img src=\"data/11/1D1/im1D14/1D14_tikz_036.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số $g(x)=f(x)\\cdot x^3$ là hàm số lẻ",
        "answer": false
      },
      {
        "text": "Hàm số $f(x)$ có đồ thị như hình bên",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ đồng biến trên khoảng $(\\pi;2\\pi)$",
        "answer": false
      },
      {
        "text": "Hàm số $f(x)$ có tập giá trị là $\\mathbb{R}$",
        "answer": false
      }
    ],
    "explain": "<br>- Hàm số $g(x)$ có tập xác định $\\mathscr{D}=\\mathbb{R}$ và $g(-x)= \\left[ \\sin (-x)\\right]\\cdot (-x)^3 = \\sin x \\cdot x^3 =g(x)$. Do đó $g(x)$ là hàm số chẵn.<br>- Đồ thị đã cho là đồ thị của hàm số $y=\\sin x$.<br>- Từ đồ thị hàm số, ta thấy hàm số nghịch biến trên khoảng $\\left(\\pi; \\dfrac{3\\pi}{2}\\right)$ và đồng biến trên khoảng $\\left( \\dfrac{3\\pi}{2};2\\pi\\right)$.<br>- Vì $-1\\le \\sin x\\le 1$ với mọi $x\\in\\mathbb{R}$ nên tập giá trị của hàm số là $[-1;1]$."
  }
];
