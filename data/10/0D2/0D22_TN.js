// =========================================================================
// KHỐI DỮ LIỆU: 0D22 - Trắc nghiệm
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem0D22 = [
  {
    "id": "0D221TN1",
    "question": "Hệ nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
    "options": [
      "$2x - y &lt; 1 \\text{ và } x + y &lt; 2$",
      "$x + y \\le 2 \\text{ và } y^2 \\ge 4$",
      "$2x - y + z &lt; 1 \\text{ và } y \\ge -2$",
      "$2x - y &gt; 1 \\text{ và } 3y - x - x^2 &gt; 0$"
    ],
    "answer": 0,
    "explain": "Hệ bất phương trình bậc nhất hai ẩn là $2x - y &lt; 1 \\text{ và } x + y &lt; 2.$"
  },
  {
    "id": "0D221TN2",
    "question": "Điểm nào sau đây thuộc miền nghiệm của hệ $x+y&gt;-3 \\text{ và } x-y\\leq 7$?",
    "options": [
      "$N(-7;0)$",
      "$Q(7;-10)$",
      "$P(0;-4)$",
      "$M(2;1)$"
    ],
    "answer": 3,
    "explain": "Thay $x=2$, $y=1$ vào hai bất phương trình của hệ được $2+1=3&gt;-3$ (đúng) và $2-1=1\\leq 7$ (đúng) nên điểm $M(2;1)$ thuộc miền nghiệm của hệ."
  },
  {
    "id": "0D222TN1",
    "question": "Bất phương trình bậc nhất hai ẩn nào có miền nghiệm như hình vẽ dưới đây (phần không tô đậm, kể cả đường thẳng)?  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_013.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$3 x+2 y&gt;300$",
      "$3 x+2 y \\leq 300$",
      "$3 x+2 y&lt;300$",
      "$3 x+2 y \\geq 300$"
    ],
    "answer": 1,
    "explain": "Vì miền nghiệm có kể cả đường thẳng nên phương án cần chọn là $3 x+2 y \\leq 300$ hoặc $3 x+2 y \\geq 300$.<br>  Điểm $O(0;0)$ nằm trong miền nghiệm nên thay tọa độ $O$ vào bất phương trình ta được bất đẳng thức đúng. Vậy phương án cần tìm là $3 x+2 y \\leq 300$."
  },
  {
    "id": "0D221TN3",
    "question": "Cho hệ bất phương trình $\\left\\{\\begin{array}{l}x+y>0 \\\\ 2 x+5 y<0\\end{array}\\right.$ có tập nghiệm là $S$. Khẳng định nào sau đây là khẳng định đúng?",
    "options": [
      "$(1 ; 1) \\in S$",
      "$(-1 ;-1) \\in S$",
      "$\\left(1 ;-\\dfrac{1}{2}\\right) \\in S$",
      "$\\left(-\\dfrac{1}{2} ; \\dfrac{2}{5}\\right) \\in S$"
    ],
    "answer": 2,
    "explain": "Ta thấy $\\left(1 ;-\\dfrac{1}{2}\\right) \\in S$ vì $\\left\\{\\begin{array}{l}1-\\dfrac{1}{2}>0 \\\\ 2 \\cdot 1+5 \\cdot\\left(-\\dfrac{1}{2}\\right)<0\\end{array}\\right.$."
  },
  {
    "id": "0D221TN4",
    "question": "Cho hệ bất phương trình $\\left\\{\\begin{array}{l}2 x-\\dfrac{3}{2} y \\geq 1 \\\\ 4 x-3 y \\leq 2\\end{array}\\right.$ có tập nghiệm $S$. Khẳng định nào sau đây là khẳng định đúng?",
    "options": [
      "$\\left(-\\dfrac{1}{4} ;-1\\right) \\notin S$",
      "$S=\\{(x ; y) \\mid 4 x-3=2\\}$",
      "Biểu diễn hình học của $S$ là nửa mặt phẳng chứa gốc tọa độ và kể cả bờ $d$, với $d$ là là đường thẳng $4 x-3 y=2$",
      "Biểu diễn hình học của $S$ là nưa mặt phẳng không chứa gốc tọa độ và kể cả bờ $d$, với $d$ là là đường thẳng $4 x-3 y=2$"
    ],
    "answer": 1,
    "explain": "Trước hết, ta vẽ hai đường thẳng:  $  \\begin{aligned}  &\\left(d_{1}\\right): 2 x-\\dfrac{3}{2} y=1 \\\\  &\\left(d_{2}\\right): 4 x-3 y=2  \\end{aligned}  $<br>  Thử trực tiếp ta thấy $(0 ; 0)$ là nghiệm của phương trình (2) nhưng không phải là nghiệm của phương trình (1). Sau khi gạch bỏ các miền không thích hợp, tập hợp nghiệm của bất phương trình chính là các điểm thuộc đường thẳng  $(d): 4 x-3 y=2$."
  },
  {
    "id": "0D222TN2",
    "question": "Cho hệ $\\left\\{\\begin{array}{l}2 x+3 y<5(1) \\\\ x+\\dfrac{3}{2} y<5 \\text { (2) } \\end{array}\\right.$ Gọi $S_{1}$ là tập nghiệm của bất phương trình (1), $S_{2}$ là tập nghiệm của bất phương trình (2) và $S$ là tập nghiệm của hệ thì",
    "options": [
      "$S_{1} \\subset S_{2}$",
      "$S_{2} \\subset S_{1}$",
      "$S_{2}=S$",
      "$S_{1} \\neq S$"
    ],
    "answer": 1,
    "explain": "Trước hết, ta vẽ hai đường thẳng:  $\\left(d_{1}\\right): 2 x+3 y=5$  $\\left(d_{2}\\right): x+\\dfrac{3}{2} y=5$  Ta thấy $(0 ; 0)$ là nghiệm của cà hai bất phương trình. Điều đó có nghĩa gốc tọa độ thuộc cả hai miền nghiệm của hai bất phương trình. Say khi gạch bỏ các miền không thích hợp, miền không bị gạch là miền nghiệm của hệ."
  },
  {
    "id": "0D222TN3",
    "question": "Phần không gạch chéo ở hình sau đây là biểu diễn miền nghiệm của hệ bất phương trình nào trong bốn hệ $\\mathrm{A}, \\mathrm{B}, \\mathrm{C}, \\mathrm{D}$?<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_018.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$\\left\\{\\begin{array}{l}y>0 \\\\ 3 x+2 y<6\\end{array}\\right.$",
      "$\\left\\{\\begin{array}{l}y>0 \\\\ 3 x+2 y<-6\\end{array}\\right.$",
      "$\\left\\{\\begin{array}{l}x>0 \\\\ 3 x+2 y<6\\end{array}\\right.$",
      "$\\left\\{\\begin{array}{l}x>0 \\\\ 3 x+2 y>-6\\end{array}\\right.$"
    ],
    "answer": 0,
    "explain": "Dựa vào hình vẽ ta thấy đồ thị gồm hai đường thẳng $\\left(d_{1}\\right): y=0$ và đường thẳng $\\left(d_{2}\\right): 3 x+2 y=6$  Miền nghiệm gồm phần $y$ nhận giá trị dương.  Lại có $(0 ; 0)$ thỏa mãn bất phương trình $3 x+2 y&lt;6$."
  },
  {
    "id": "0D222TN4",
    "question": "Miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x-2 y<0 \\\\ x+3 y>-2 \\text { chứa điểm nào sau đây? } \\\\ y-x<3\\end{array}\\right.$",
    "options": [
      "$A(1 ; 0)$",
      "$B(-2 ; 3)$",
      "$C(0 ;-1)$",
      "$D(-1 ; 0)$"
    ],
    "answer": 3,
    "explain": "Trước hết, ta vẽ ba đường thẳng:  $  \\begin{aligned}  &\\left(d_{1}\\right): x-2 y=0 \\\\  &\\left(d_{2}\\right): x+3 y=-2 \\\\  &\\left(d_{3}\\right): y-x=3  \\end{aligned}  $   Ta thấy $(0 ; 1)$ là nghiệm của cả ba bất phương trình. Điều đó có nghĩa điểm $(0 ; 1)$ thuộc cả ba miền nghiệm của ba bất phương trình. Sau khi gạch bỏ các miền không thích hợp, miền không bị gạch là miền nghiệm của hệ."
  },
  {
    "id": "0D222TN5",
    "question": "Miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}2 x+3 y-6<0 \\\\ x \\geq 0 \\\\ 2 x-3 y-1 \\leq 0\\end{array}\\right.$ chứa điểm nào sau đây?",
    "options": [
      "$A(1 ; 2)$",
      "$B(0 ; 2)$",
      "$C(-1 ; 3)$",
      "$D\\left(0 ;-\\dfrac{1}{3}\\right)$"
    ],
    "answer": 3,
    "explain": "Chọn D.  Trước hết, ta vẽ ba đường thẳng:  $\\left(d_{1}\\right): 2 x+3 y-6=0$  $\\left(d_{2}\\right): x=0$  $\\left(d_{3}\\right): 2 x-3 y-1=0$  Ta thấy $(1 ; 1)$ là nghiệm của các ba bất phương trình. Điều này có nghĩa là điểm $(1 ; 1)$ thuộc cả ba miền nghiệm của ba bất phương trình. Sau khi gạch bỏ các miền không thích hợp, miền không bị gạch là miền nghiệm của hệ."
  },
  {
    "id": "0D222TN6",
    "question": "Miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}2 x-1 \\leq 0 \\\\ -3 x+5 \\leq 0\\end{array}\\right.$ chứa điểm nào sau đây?",
    "options": [
      "Không có",
      "$B\\left(\\dfrac{5}{3} ; 2\\right)$",
      "$C(-3 ; 1)$",
      "$D\\left(\\dfrac{1}{2} ; 10\\right)$"
    ],
    "answer": 0,
    "explain": "Trước hết, ta vẽ hai đường thẳng:  $\\left(d_{1}\\right): 2 x-1=0$  $\\left(d_{2}\\right):-3 x+5=0$  Ta thấy $(1 ; 0)$ là không nghiệm của cả hai bất phương trình. Điều đó có nghĩa điểm $(1 ; 0)$  không thuộc cả hai miền nghiệm của hai bất phương trình. Vậy không có điểm nằm trên mặt phẳng tọa độ thỏa mãn hệ bất phương trình."
  },
  {
    "id": "0D222TN7",
    "question": "Miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}3-y<0 \\\\ 2 x-3 y+1>0\\end{array}\\right.$ chứa điểm nào sau đây?",
    "options": [
      "$A(3 ; 4)$",
      "$B(4 ; 3)$",
      "$C(7 ; 4)$",
      "$D(4 ; 4)$"
    ],
    "answer": 2,
    "explain": "Trước hết, ta vẽ hai đường thẳng:  $\\left(d_{1}\\right): 3-y=0$  $\\left(d_{2}\\right): 2 x-3 y+1=0$  Ta thấy $(6 ; 4)$ là nghiệm của hai bất phương trình. Điều đó có nghĩa điểm $(6 ; 4)$ thuộc cả hai miền nghiệm clia hai bất phương trình. Sau khi gạch bỏ các miền không thích hợp, miền không bị gạch là miền nghiệm của hệ."
  },
  {
    "id": "0D222TN8",
    "question": "Miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}3 x-2 y-6 \\geq 0 \\\\ 2(x-1)+\\dfrac{3 y}{2} \\leq 4 \\text { không chứa điểm nào sau đây? } \\\\ x \\geq 0\\end{array}\\right.$",
    "options": [
      "$A(2 ;-2)$",
      "$B(3 ; 0)$",
      "$C(1 ;-1)$",
      "$D(2 ;-3)$"
    ],
    "answer": 2,
    "explain": "Trước hết, ta vẽ ba đường thẳng:  $\\left(d_{1}\\right): 3 x-2 y-6=0$  $\\left(d_{2}\\right): 4 x+3 y-12=0$  $\\left(d_{3}\\right): x=0$  Ta thấy $(2 ;-1)$ là nghiệm của cả ba bất phương trình. Điều đó có nghĩa điềm $(2 ;-1)$ thuộc cả ba miền nghiệm của ba bất phương trình. Sau khi gạch bỏ các miền không thích hợp, miền không bị gạch là miền nghiệm của hệ."
  },
  {
    "id": "0D222TN9",
    "question": "Tìm số thực $a$ sao cho miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x \\leq 0 \\\\ y \\geq 0 \\\\ a x-3 y \\geq-12\\end{array}\\right.$ là một tam giác có diện tích bằng 6.",
    "options": [
      "$a=-4$",
      "$a=4$",
      "$a=6$",
      "$a=12$"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "0D222TN10",
    "question": "Tính diện tích $S$ của miền nghiệm hệ bất phương trình $\\left\\{\\begin{array}{l}y+x \\leq 3 \\\\ y-x \\leq 3 \\\\ y \\geq-1\\end{array}\\right.$",
    "options": [
      "$S=8$",
      "$S=25$",
      "$S=16$",
      "$S=12$"
    ],
    "answer": 2,
    "explain": ""
  },
  {
    "id": "0D222TN11",
    "question": "Tính diện tích $S$ của miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x \\geq-3 \\\\ y+x \\leq 8 \\\\ y-x \\geq-2 .\\end{array}\\right.$",
    "options": [
      "$S=48$",
      "$S=64$",
      "$S=81$",
      "$S=49$"
    ],
    "answer": 2,
    "explain": ""
  },
  {
    "id": "0D222TN12",
    "question": "Tính chu vi $P$ của miền nghiệm hệ bất phương trình $\\left\\{\\begin{array}{l}x \\geq-3 \\\\ x \\leq 6 \\\\ y \\leq 5 \\\\ y \\geq-6 .\\end{array}\\right.$",
    "options": [
      "$P=38$",
      "$P=36$",
      "$P=42$",
      "$P=40$"
    ],
    "answer": 0,
    "explain": ""
  },
  {
    "id": "0D222TN13",
    "question": "Tìm giá trị của số thực $a$ sao cho miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x \\leq a \\\\ x \\geq 0 \\\\ y \\geq 0 \\\\ y \\leq 2\\end{array}\\right.$ có  diện tích bằng $6 .$",
    "options": [
      "$a=-3$",
      "$a=8$",
      "$a=3$",
      "$a=-8$"
    ],
    "answer": 0,
    "explain": ""
  },
  {
    "id": "0D222TN14",
    "question": "Phần <strong>không bị gạch</strong> trong hình vẽ dưới đây (không kể đường thẳng), biểu diễn tập nghiệm của hệ bất phương trình nào trong các hệ bất phương trình sau?  \\def\\dotEX{}<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_021.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$-2x+3y \\leq 12 \\text{ và } 2x+y \\geq -4.$",
      "$2x-3y &gt; -12 \\text{ và } 2x+y &gt; -4.$",
      "$-2x+3y &gt; -12 \\text{ và } 2x+y &gt; -4.$",
      "$2x-3y &lt; -12 \\text{ và } 2x+y &gt; -4.$"
    ],
    "answer": 1,
    "explain": "Ta nhận thấy miền nghiệm của hệ là miền chứa điểm $O(0;0)$, thay tọa độ điểm $O$ vào các hệ bất phương trình ta nhận thấy chỉ có hệ $2x-3y &gt; -12 \\text{ và } 2x+y &gt; -4$ thỏa mãn."
  },
  {
    "id": "0D222TN15",
    "question": "Phần không gạch chéo ở hình sau đây là biểu diễn miền nghiệm của hệ bất phương trình nào trong bốn đáp án dưới đây?<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_022.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$x&gt;0 \\text{ và } 3x+2y&lt;6$",
      "$y&gt;0 \\text{ và } 3x+2y&lt;-6$",
      "$x&gt;0 \\text{ và } 3x+2y&gt;-6$",
      "$y&gt;0 \\text{ và } 3x+2y&lt;6$"
    ],
    "answer": 3,
    "explain": "Dựa vào hình vẽ, ta thấy điểm $(0;1)$ thuộc miền nghiệm.<br>  Mặt khác  <br>- $(0;1)$ không thỏa mãn hệ bất phương trình $x&gt;0 \\text{ và } 3x+2y&lt;6.$<br>- $(0;1)$ không thỏa mãn hệ bất phương trình $y&gt;0 \\text{ và } 3x+2y&lt;-6$<br>- $(0;1)$ không thỏa mãn hệ bất phương trình $x&gt;0 \\text{ và } 3x+2y&gt;-6$<br>- $(0;1)$ thỏa mãn hệ bất phương trình $y&gt;0 \\text{ và } 3x+2y&lt;6$  Do đó, phần không gạch chéo ở hình vẽ là biểu diễn miền nghiệm của hệ bất phương trình $y&gt;0 \\text{ và } 3x+2y&lt;6.$"
  },
  {
    "id": "0D222TN16",
    "question": "Phần không tô đậm trong hình vẽ bên (không kể bờ) là hình biểu diễn miền nghiệm của hệ bất phương trình nào dưới đây?<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_023.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$x-2y &lt;-2 \\text{ và } x-2y &gt; 3$",
      "$x-2y &gt;-2 \\text{ và } x-2y &gt; 3$",
      "$x-2y &gt;-2 \\text{ và } x-2y &lt; 3$",
      "$x-2y &lt;-2 \\text{ và } x-2y &lt; 3$"
    ],
    "answer": 2,
    "explain": "Từ hình vẽ ta thấy $O(0;0)$ thuộc miền nghiệm của bất phương trình, dựa vào đáp án ta thấy $O(0;0)$ thỏa mãn $x-2y &gt;-2 \\text{ và } x-2y &lt; 3$."
  },
  {
    "id": "0D222TN17",
    "question": "Tìm giá trị của số thực $a$ sao cho miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x-y \\geq a \\\\ x \\leq 0 \\\\ y \\geq 0\\end{array}\\right.$ là một tam giác có diện tích bằng $2$.",
    "options": [
      "$a=2$",
      "$a=-2$",
      "$a=\\sqrt{2}$",
      "$a=-\\sqrt{2}$"
    ],
    "answer": 3,
    "explain": ""
  },
  {
    "id": "0D222TN18",
    "question": "Tìm giá trị của số thực $m$ sao cho miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x+m y \\leq 2 \\\\ x \\geq 0 \\\\ y \\geq 0\\end{array}\\right.$  là một tam giác có diện tích bằng $4$.",
    "options": [
      "$m=2$",
      "$m=4$",
      "$m=\\dfrac{1}{4}$",
      "$m=\\dfrac{1}{2}$"
    ],
    "answer": 3,
    "explain": ""
  },
  {
    "id": "0D222TN19",
    "question": "Tìm giá trị của số thực $m$ sao cho miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x \\geq 0 \\\\ x \\leq 2 \\\\ y \\leq-1 \\\\ y \\geq m\\end{array}\\right.$ có chu vi bằng $8$.",
    "options": [
      "$m=-3$",
      "$m=2$",
      "$m=3$",
      "$m=-2$"
    ],
    "answer": 2,
    "explain": ""
  },
  {
    "id": "0D222TN20",
    "question": "Tìm giá trị của số thực dương $m$ sao cho miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x \\geq 0 \\\\ y \\geq 0 \\\\ 2 x+3 y \\leq 12 \\\\ m x+y \\geq 2\\end{array}\\right.$ có diện tích bằng $6 .$",
    "options": [
      "$m=2$",
      "$m=3$",
      "$m=\\dfrac{1}{3}$",
      "$m=\\dfrac{1}{2}$"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "0D221TN5",
    "question": "Một cửa hàng dự định kinh doanh hai loại máy điều hòa: điều hòa một chiều và điều hòa hai chiều. Khảo sát thị trường cửa hàng thấy nhu cầu của thị trường sẽ không vượt quá $100$ máy cả hai loại. Gọi $x$, $y$ lần lượt là số máy điều hòa một chiều và điều hòa hai chiều mà cửa hàng nhập vào. Khi đó, $(x; y)$ là nghiệm của hệ bất phương trình nào dưới đây?",
    "options": [
      "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x + y \\leq 100$",
      "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x + y &lt; 100$",
      "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x + y \\geq 100$",
      "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x + y &gt; 100$"
    ],
    "answer": 0,
    "explain": "Gọi $x$, $y$ lần lượt là số máy điều hòa một chiều và điều hòa hai chiều mà cửa hàng nhập vào.<br>  Điều kiện $x\\geq 0$ và $y \\geq 0$.<br>  Khảo sát thị trường cửa hàng thấy nhu cầu của thị trường sẽ không vượt quá $100$ máy cả hai loại nên ta có $x + y \\leq 100$.<br>  Vậy hệ bất phương trình đúng là $x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x + y \\leq 100.$"
  },
  {
    "id": "0D221TN6",
    "question": "Giá trị nhỏ nhất của biết thức $F(x ; y)=x-2 y$ với điều kiện $\\left\\{\\begin{array}{c}0 \\leq y \\leq 5 \\\\ x \\geq 0 \\\\ x+y-2 \\geq 0 \\\\ x-y-2 \\leq 0\\end{array}\\right.$ là",
    "options": [
      "$-10$",
      "$12$",
      "$-8$",
      "$-6$"
    ],
    "answer": 0,
    "explain": "Nhận thấy biết thức $F=y-x$ chỉ đạt giá trị nhỏ nhất tại các điểm $A, B, C$ hoặc $D$.  Ta có: $F(A)=7-2 \\times 5=-3 ; F(B)=-2 \\times 5=-10$.  $  F(C)=-2 \\times 2=-4, F(D)=2-2 \\times 0=2 \\text {. }  $  Vậy $\\min F=-10$ khi $x=0, y=5$."
  },
  {
    "id": "0D221TN7",
    "question": "Ngoài giờ học, bạn Nam làm thêm việc phụ bán cơm được 15 nghìn đồng/một giờ và phụ bán tạp hóa được 10 nghìn đồng/một giờ. Nam không thề làm thêm việc nhiều hơn 15 giờ mỗi tuần. Gọi $x, y$ lần lượt là số giờ phụ bán cơm và phụ bán tạp hóa. Hệ bất phương trình nào sau đây xác định số giờ để làm mồi việc nếu Nam muốn kiếm được ít nhất 100 nghìn đồng mỗi tuần?",
    "options": [
      "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y \\geq 15 \\text{ và } 15 x+10 y \\geq 100$",
      "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y \\leq 15 \\text{ và } 15 x+10 y&gt;100$",
      "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y \\leq 15 \\text{ và } 15 x+10 y \\geq 100$",
      "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y&gt;15 \\text{ và } 15 x+10 y&lt;100$"
    ],
    "answer": 2,
    "explain": "Gọi $x, y$ lần lượt là số giờ phụ bán cơm và phụ bán tạp hóa, tổng số giờ này không được nhiều hơn 15 nên $x+y \\leq 15$.<br> Số tiền kiếm được sau $x$ giờ phục vụ cơm là $15 x$.<br> Số tiền kiếm được sau $y$ giờ bán tạp hóa là $10 y$.<br> Để Nam kiếm được ít nhất 100 nghìn đồng mỗi tuần thì $15 x+10 y \\geq 100$.<br> Vậy ta có hệ: $x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y \\leq 15 \\text{ và } 15 x+10 y \\geq 100$."
  },
  {
    "id": "0D222TN21",
    "question": "Cho hệ $x-\\dfrac{3}{5}y&lt;5\\quad (1) \\text{ và } 5x-3y&lt;20\\quad (2)$. Gọi $S_1$ là tập nghiệm của bất phương trình (1), $S_2$ là tập nghiệm của bất phương trình (2) và $S$ là tập nghiệm của hệ thì",
    "options": [
      "$S_1=S$",
      "$S_1\\subset S_2$",
      "$S_2\\subset S_1$",
      "$S_2\\neq S$"
    ],
    "answer": 2,
    "explain": "<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_027.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> $x-\\dfrac{3}{5}y&lt;5\\quad (1) \\text{ và } 5x-3y&lt;20\\quad (2)$ $\\Leftrightarrow5x-3y&lt;25\\quad (1) \\text{ và } 5x-3y&lt;20\\quad (2')$<br> Từ miền nghiệm trên suy ra $S_2\\subset S_1$ và $S_2=S$"
  },
  {
    "id": "0D223TN1",
    "question": "Một phân xưởng có hai máy đặc chủng $M_{1}, M_{2}$ sản xuât hai loại sản phẩm ký hiệu là $A$ và $B$. Một tấn sản phẩm loại $A$ lãi 2 triệu đồng, một tấn sản phẩm loại $B$ lãi 1,6 triệu đồng. Muốn sản xuất một tấn sản phẩm loại $A$ phải dùng máy $M_{1}$ trong 1 giờ. Muốn sản xuất một tấn sản phẩm loại $B$ phải dưng máy $M_{1}$ trong 1 giờ và máy $M_{2}$ trong 1 giờ. Một máy không thể dùng để sản xuất đồng thời hai loại sản phẩm. Máy $M_{1}$ làm việc không quá 6 giờ một ngày, máy $M_{2}$ làm việc không quá 4 giờ một ngày. Hỏi số tiền lãi lớn nhất mà phân xưởng này có thể thu được trong một ngày là bao nhiêu?",
    "options": [
      "6,8 triệu đồng",
      "4 triệu đồng",
      "6,4 triệu đồng",
      "8 triệu đồng"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "0D223TN2",
    "question": "Người ta dự định dùng hai loại nguyên liệu để chiết xuất ít nhất $140 \\mathrm{~kg}$ chất $A$ và 9 kg chất $B$. Từ mỗi tấn nguyên liệu loại I giá 4 triệu đồng, có thể chiết xuất được 20 kg chất $A$ và $0,6 \\mathrm{~kg}$ chất $B$. Từ mỗi tấn nguyên liệu loại II giá 3 triệu đồng có thể chiết xuất được $10 \\mathrm{~kg}$ chất $A$ và $1,5 \\mathrm{~kg}$ chất $B$. Hỏi phải dùng bao nhiêu tấn nguyên liệu mỗi loại để chi phí mua nguyên liệu là ít nhất, biết rằng cơ sở cung cấp nguyên liệu chỉ có thể cung cấp không quá 10 tấn nguyên liệu loại $I$ và không quá 9 tấn nguyên liệu loại $I I$.",
    "options": [
      "5 tấn nguyên liệu loại $I$ và 4 tấn nguyên liệu loại $I I$",
      "10 tấn nguyên liệu loại $I$ và 2 tấn nguyên liệu loại $I I$",
      "10 tấn nguyên liệu loại $I$ và 9 tấn nguyên liệu loại $I I$",
      "Cả ba đáp án đều sai"
    ],
    "answer": 2,
    "explain": ""
  },
  {
    "id": "0D223TN3",
    "question": "Trong một cuộc thi về \"bữa ăn dinh dưỡng\", ban tổ chức yêu cầu để đảm bảo lượng dinh dưỡng hằng ngày thì mỗi gia đình có 4 thành viên cần ít nhất 900 đơn vị prôtêin và 400 đơn vị Lipít trong thức ăn hằng ngày. Mỗi kg thịt bò chứa 800 đơn vị prôtêin và 200 đơn vị Lipít, $1 \\mathrm{~kg}$ thịt heo chứa 600 đơn vị prôtêin và 400 đơn vị Lipit. Biết rằng người nội trợ chỉ được mua tối đa $1,6 \\mathrm{~kg}$ thịt bò và $1,1 \\mathrm{~kg}$ thịt heo. Biết rằng $1 \\mathrm{~kg}$ thịt bò giá $100.000 \\mathrm{~d}, 1$ $\\mathrm{kg}$ thịt heo giá $70.000$ đ. Tìm chi phí thấp nhất cho khẩu phần thức ăn đảm bảo chất dinh dưỡng?",
    "options": [
      "$100.000$ đ",
      "$107.000$ đ",
      "$109.000$ đ",
      "$150.000 \\mathrm{~d}$"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "0D221TN8",
    "question": "Trong một cuộc thi pha chế, mỗi đội chơi được sử dụng tối đa 24 g hương liệu, 9 lít nước và $210 \\mathrm{~g}$ đường để pha chế nước đường và nước táo. Để pha chế 1 lít nước đường cần $30 \\mathrm{~g}$ đường và 1 lít nước; pha chế 1 lít nước táo cần $10 \\mathrm{~g}$ đường, 1 lít nước và $4 \\mathrm{~g}$ hương liệu. Mỗi lít nước đường nhận được 20 điểm thưởng, mỗi lít nước táo nhận được 80 điểm thưởng. Hỏi cần pha chế bao nhiêu lít nước mỗi loại để được số điểm thưởng là lớn nhất?",
    "options": [
      "7 lít nước đường",
      "6 lít nước táo",
      "3 lít nước đường, 6 lít nước táo",
      "6 lít nước đường, 3 lít nước táo"
    ],
    "answer": 0,
    "explain": ""
  },
  {
    "id": "0D223TN4",
    "question": "Một máy cán thép có thể sản xuất hai sản phẩm thép tấm và thép cuộn (máy không thể sản xuất hai loại thép cùng lúc và có thể làm việc 40 giờ một tuần). Công suất sản xuất thép tấm là 250 tấn/giờ, công suất sản xuất thép cuộn là 150 tấn/giờ. Mỗi tấn thép tấm có giá 25 USD, mỗi tấn thép cuộn có giá 30 USD. Biết rằng mỗi tuần thị trường chỉ tiêu thụ tối đa 5000 tấn thép tấm và 3500 tấn thép cuộn. Hỏi cần sản xuất bao nhiêu tấn thép mỗi loại trong một tuần để lợi nhuận thu được là cao nhất?",
    "options": [
      "5000 tấn thép tấm và 3000 tấn thép cuộn",
      "4500 tấn thép tấm và 3500 tấn thép cuộn",
      "3500 tấn thép tấm và 2000 tấn thép cuộn",
      "5000 tấn thép tấm và 3500 tấn thép cuộn"
    ],
    "answer": 2,
    "explain": ""
  },
  {
    "id": "0D222TN22",
    "question": "Cho hệ bất phương trình $\\left\\{\\begin{array}{l}x-y \\leq 2 \\\\ 3 x+5 y \\leq 15 \\\\ x \\geq 0 \\\\ y \\geq 0\\end{array}\\right.$. Khẳng định nào sau đây là khẳng định sai ?",
    "options": [
      "Trên mặt phẳng tọa độ $O x y$, biểu diễn miền nghiệm của hệbất phương trình đã cho là miền tứ giác $A B C O$ kể cả các cạnh với $A(0 ; 3), B\\left(\\dfrac{25}{8} ; \\dfrac{9}{8}\\right), C(2 ; 0)$ và $O(0 ; 0)$",
      "Đường thẳng $\\Delta: x+y=m$ có giao điểm với tứ giác $A B C O$ kể cả khi $-1 \\leq m \\leq \\dfrac{17}{4}$",
      "Giá trị lớn nhất của biểu thức $x+y$, với $x$ và $y$ thỏa mãn hệ bất phương trình đã cho là $\\dfrac{17}{4}$",
      "Giá trị nhỏ nhất của biểu thức $x+y$, với $x$ và $y$ thõa mãn hệ bất phương trình đã cho là 0"
    ],
    "answer": 1,
    "explain": "Trước hết, ta vẽ bốn đường thẳng:  $\\left(d_{1}\\right): x-y=2$  $\\left(d_{2}\\right): 3 x+5 y=15$  $\\left(d_{3}\\right): x=0$  $\\left(d_{4}\\right): y=0$  Miền nghiệm là phần không bị gạch, kể cả biên."
  },
  {
    "id": "0D222TN23",
    "question": "Giá trị lớn nhất của biết thức $F(x ; y)=x+2 y$ với điều kiện $\\left\\{\\begin{array}{c}0 \\leq y \\leq 4 \\\\ x \\geq 0 \\\\ x-y-1 \\leq 0 \\\\ x+2 y-10 \\leq 0\\end{array}\\right.$ là",
    "options": [
      "$6$",
      "$8$",
      "$10$",
      "$12$"
    ],
    "answer": 2,
    "explain": "Vẽ đường thẳng $d_{1}: x-y-1=0$, đường thẳng $d_{1}$ qua hai điểm $(0 ;-1)$ và $(1 ; 0)$.  Vẽ đường thẳng $d_{2}: x+2 y-10=0$, đường thẳng $d_{2}$ qua hai điểm $(0 ; 5)$ và $(2 ; 4)$. Vẽ đường thẳng $d_{3}: y=4$.  Miền nghiệm là ngũ giác $A B C O E$ với $A(4 ; 3), B(2 ; 4), C(0 ; 4), E(1 ; 0)$.  Ta có: $F(4 ; 3)=10, F(2 ; 4)=10, F(0 ; 4)=8, F(1 ; 0)=1, F(0 ; 0)=0$.  Vậy giá trị lớn nhất của biết thức $F(x ; y)=x+2 y$ bằng 10 ."
  },
  {
    "id": "0D222TN24",
    "question": "Biểu thức $L=y-x$, với $x$ và $y$ thõa mãn hệ bất phương trình $\\left\\{\\begin{array}{l}2 x+3 y-6 \\leq 0 \\\\ x \\geq 0 \\\\ 2 x-3 y-1 \\leq 0\\end{array}\\right.$, đạt giá trị lớn nhất là $a$ và đạt giá trị nhỏ nhất là $b$. Hãy chọn kết quả đúng trong các kết quả sau:",
    "options": [
      "$a=\\dfrac{25}{8}$ và $b=-2$",
      "$a=2$ và $b=-\\dfrac{11}{12}$",
      "$a=3$ và $b=0$",
      "$a=3$ và $b=\\dfrac{-9}{8}$"
    ],
    "answer": 1,
    "explain": "Chọn B.  Trước hết, ta vẽ ba đường thẳng:  $\\left(d_{1}\\right): 2 x+3 y-6=0$  $\\left(d_{2}\\right): x=0$  $\\left(d_{3}\\right): 2 x-3 y-1=0$  Ta thấy $(0 ; 0)$ là nghiệm của cả ba bất phương trình. Điều đó có nghĩa gốc tọa độ thuộc cả ba miền nghiệm của cả ba bất phương trình. Sau khi gạch bỏ các miền không thích hợp, miền không bị gạch là miền nghiệm của hệ (kề cả biên).  Miền nghiệm là hình tam giác $A B C$ (kề cả biên), với $A(0 ; 2), B\\left(\\dfrac{7}{4} ; \\dfrac{5}{6}\\right), C\\left(0 ;-\\dfrac{1}{3}\\right)$.  Vậy ta có $a=2-0=2, b=\\dfrac{5}{6}-\\dfrac{7}{4}=-\\dfrac{11}{12}$."
  },
  {
    "id": "0D221TN9",
    "question": "Biểu thức $F=y-x$ đạt giá trị nhỏ nhất với điều kiện $\\left\\{\\begin{array}{c}-2 x+y \\leq-2 \\\\ x-2 y \\leq 2 \\\\ x+y \\leq 5 \\\\ x \\geq 0\\end{array}\\right.$ tại điểm $S(x ; y)$ có toạ độ là",
    "options": [
      "$(4 ; 1)$",
      "$(3 ; 1)$",
      "$(2 ; 1)$",
      "$(1 ; 1)$"
    ],
    "answer": 0,
    "explain": "Biểu diễn miền ngiệm của hệ bất phương trình $\\left\\{\\begin{array}{c}-2 x+y \\leq-2 \\\\ x-2 y \\leq 2 \\\\ x+y \\leq 5 \\\\ x \\geq 0\\end{array}\\right.$ trên hệ trục tọa độ như dưới đây:<br>  Nhận thấy biết thức $F=y-x$ chỉ đạt giá trị nhỏ nhất tại các điểm $A, B$ hoặc $C$.  Chỉ $C(4 ; 1)$ có tọa độ nguyên nên thỏa mãn.  Vậy $\\min F=-3$ khi $x=4, y=1$."
  },
  {
    "id": "0D221TN10",
    "question": "Cặp số nào sau đây <strong>không</strong> là một nghiệm của hệ bất phương trình $x+y \\leq 2 \\text{ và } 2 x-3 y&gt;-2$?",
    "options": [
      "$(0 ; 0)$",
      "$(1 ; 1)$",
      "$(-1 ; 1)$",
      "$(-1 ;-1)$"
    ],
    "answer": 2,
    "explain": "Vì $2\\cdot(-1)-3\\cdot1&gt;-2$ (vô lí) nên $(-1;1)$ không là nghiệm của hệ bất phương trình."
  },
  {
    "id": "0D222TN25",
    "question": "Miền nghiệm của hệ bất phương trình $\\begin{cases} x - 3y < 3 \\\\ x + y > 5 \\end{cases}$ là phần mặt phẳng chứa điểm nào sau đây?",
    "options": [
      "$A(0;0)$",
      "$B(5;3)$",
      "$C(-2;2)$",
      "$D(1;-1)$"
    ],
    "answer": 1,
    "explain": "Để xác định điểm nào thuộc miền nghiệm của hệ bất phương trình, ta thay tọa độ của từng điểm vào hai bất phương trình của hệ bất phương trình. <br>  Ta thay điểm $B (5;3)$ vào hệ bất phương trình trên, ta được <br>  $5 - 3\\cdot 3 &lt; 3 \\text{\\,\\,\\,(Đúng)} \\text{ và } 5 + 3 &gt; 5 \\text{\\,\\,\\,(Đúng).}$<br>  Vậy điểm $B$ thuộc miền nghiệm. <br>"
  },
  {
    "id": "0D221TN11",
    "question": "Cho hệ bất phương trình $x-3y&gt;5 \\text{ và } 2x+y&lt;3.$<br> Cặp số $(x;y)$ nào sau đây là nghiệm của hệ bất phương trình trên",
    "options": [
      "$(3;-1)$",
      "$(1;2)$",
      "$(3;1)$",
      "$(1;-2)$"
    ],
    "answer": 3,
    "explain": "Ta có $1-3\\cdot (-2)=7&gt;5 \\text{ và } 2\\cdot 1 + (-2)=0&lt;3.$"
  },
  {
    "id": "0D221TN12",
    "question": "Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
    "options": [
      "$3x+y \\leq 9 \\text{ và } \\frac{2}{x}-3y &gt; 1$",
      "$3x^3-5y \\geq 8 \\text{ và } |-x-4y| \\leq 20$",
      "$2x+3y^2 &gt; 5 \\text{ và } -3x-5y \\leq-6$",
      "$-3x+y \\leq-1 \\text{ và } 4x-7y &gt; 5$"
    ],
    "answer": 3,
    "explain": "Ta có $-3x+y \\leq-1 \\text{ và } 4x-7y &gt; 5$ là hệ bất phương trình bậc nhất hai ẩn."
  },
  {
    "id": "0D222TN26",
    "question": "Trên mặt phẳng tọa độ $Oxy$, điểm nào dưới đây thuộc miền nghiệm của hệ bất phương trình $2x+5y \\leq 3 \\text{ và } x-y \\geq 5$?",
    "options": [
      "$A(-1; 1)$",
      "$B(1; 1)$",
      "$C(0;-5)$",
      "$D(2; 0)$"
    ],
    "answer": 2,
    "explain": "Ta có  <br>- $2\\cdot (-1)+5\\cdot 1 \\leq 3\\text{ đúng} \\text{ và } -1-1 \\geq 5\\text{ sai}.$ <br>  $\\Rightarrow A(-1; 1)$ không thuộc miền nghiệm của hệ bất phương trình đã cho.<br>- $2\\cdot 1+5\\cdot 1 \\leq 3\\text{ sai} \\text{ và } 1-1 \\geq 5\\text{ sai}.$<br>  $\\Rightarrow B(1; 1)$ không thuộc miền nghiệm của hệ bất phương trình đã cho.<br>- $2\\cdot 0+5\\cdot (-5) \\leq 3\\text{ đúng} \\text{ và } 0+5 \\geq 5\\text{ đúng}.$<br>  $\\Rightarrow C(0; 5)$ thuộc miền nghiệm của hệ bất phương trình đã cho.<br>- $2\\cdot 2+5\\cdot 0 \\leq 3\\text{ sai} \\text{ và } 2-0 \\geq 5\\text{ sai}.$<br>  $\\Rightarrow D(2;0)$ không thuộc miền nghiệm của hệ bất phương trình đã cho."
  },
  {
    "id": "0D222TN27",
    "question": "Cặp $(x_0;y_0)$ nào dưới đây thuộc miền nghiệm của hệ $x-2y\\ge3 \\text{ và } 2x+y\\le1.$",
    "options": [
      "$(1;-1)$",
      "$(1;1)$",
      "$(0;-1)$",
      "$(3;1)$"
    ],
    "answer": 0,
    "explain": "Thay cặp số $(1;-1)$ vào hệ bất phương trình và thỏa hệ trên nên cặp số đó thuộc miền nghiệm của hệ bất phương trình."
  },
  {
    "id": "0D222TN28",
    "question": "Có bao nhiêu giá trị nguyên dương của tham số $m$ để miền nghiệm của hệ bất phương trình $\\left\\{\\begin{aligned}  & x\\le m\\\\  & y<m\\\\  \\end{aligned}\\right.$ không chứa điểm $ M\\left(0;2\\right)$?",
    "options": [
      "$ 3$",
      "$ 2$",
      "$ 1$",
      "$ 4$"
    ],
    "answer": 1,
    "explain": "$M$ không thuộc miền nghiệm của hệ bất phương trình nên $m\\le 2 \\text{ hoặc } m&lt;0\\Rightarrow m \\le 2$.<br>  Suy ra có $2$ giá trị nguyên dương của $m$ là $1$, $2$."
  },
  {
    "id": "0D222TN29",
    "question": "Đường thẳng $\\Delta $ chia mặt phẳng toạ độ $Oxy$ làm hai miền. Miền không tô đậm (không kể $\\Delta $) ở hình vẽ dưới đây là miền nghiệm của bất phương trình nào?  <br><img src=\"data/10/0D2/im0D22/loc3_0_TL_TN_DS_THPT__000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$ x+y+2\\ge 0$",
      "$ x-y+2\\le 0$",
      "$ x-y+2&gt;0$",
      "$ x-2y+2&gt;0$"
    ],
    "answer": 2,
    "explain": "Vì miền không tô đậm (không kể $\\Delta $) nên loại $ x+y+2\\ge 0$ và $ x-y+2\\le 0$.<br>  Mà $\\Delta$ đi qua $\\left(-2;0\\right)$ và $\\left(0;2\\right)$ nên bất phương trình cần tìm là $ x-y+2&gt;0$."
  },
  {
    "id": "0D223TN5",
    "question": "Một cơ sở sản xuất hai loại bàn và ghế. Để làm $1$ chiếc bàn cần $3$ tấm gỗ và $2$ giờ công; để làm $1$ chiếc ghế cần $2$ tấm gỗ và $1$ giờ công. Cơ sở có tối đa $18$ tấm gỗ và $10$ giờ công trong một ngày. Lợi nhuận từ mỗi chiếc bàn và ghế lần lượt là $200$ nghìn đồng và $100$ nghìn đồng. Gọi $x$, $y$ lần lượt là số bàn và ghế được làm trong ngày. Để lợi nhuận đạt lớn nhất, trong ngày cơ sở cần sản xuất bao nhiêu chiếc mỗi loại?",
    "options": [
      "$x=5$; $y=0$",
      "$x=0$; $y=9$",
      "$x=5$; $y=2$",
      "$x=0$; $y=0$"
    ],
    "answer": 0,
    "explain": "Gọi $x$, $y$ lần lượt là số bàn và số ghế sản xuất trong một ngày. Khi đó, $x\\ge 0$ và $y\\ge 0$. <br>  Đồng thời, kết hợp với các điều kiện về nguyên liệu và giờ công, ta được  $ x\\ge 0 \\text{ và } y\\ge 0 \\text{ và } 3x+2y\\le 18 \\text{ và } 2x+y\\le 10.$  Biểu thức tính lợi nhuận (theo đơn vị nghìn đồng) là:  $ P=200x+100y. $  Xét các phương án:  <br>- $x=5$, $y=0$ thỏa $3\\cdot 5+2\\cdot 0=15\\le 18$ và $2\\cdot 5+0=10\\le 10$.   Ta có $P=200\\cdot 5+100\\cdot 0=1000$.<br>- $x=0$, $y=9$ thỏa $3\\cdot 0+2\\cdot 9=18\\le 18$ và $0+9=9\\le 10$.  Ta có $P=200\\cdot 0+100\\cdot 9=900$.<br>- $x=5$, $y=2$ có $2\\cdot 5+2=12&gt;10$, không thỏa điều kiện giờ công nên ta loại.<br>- $x=0$, $y=0$ cho $P=0$.  Vậy lợi nhuận lớn nhất trong các phương án cho bởi phương án $x=5$, $y=0$."
  },
  {
    "id": "0D221TN13",
    "question": "Hệ nào sau đây là hệ bất phương trình bậc nhất hai ẩn?  \\def\\dotEX{}",
    "options": [
      "$3x-y&gt;5 \\text{ và } x&lt;6+4y.$",
      "$x-5y=1 \\text{ và } x+y=5.$",
      "$xy&lt;1 \\text{ và } x+4x&gt;5.$",
      "$x^2+y&lt;3 \\text{ và } x-y&gt;1.$"
    ],
    "answer": 0,
    "explain": "Ta có $3x-y&gt;5 \\text{ và } x&lt;6+4y \\Rightarrow 3x-y&gt;5 \\text{ và } x-4y&lt;6$ là hệ bất phương trình bậc nhất hai ẩn."
  },
  {
    "id": "0D222TN30",
    "question": "Phần <strong>không tô đậm</strong> trong hình vẽ dưới đây (không kể bờ), biểu diễn miền nghiệm của hệ bất phương trình nào trong các hệ bất phương trình sau?  <br><img src=\"data/10/0D2/im0D22/loc3_0_TN_DS_THPT_chu_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  \\def\\dotEX{}",
    "options": [
      "$x-y\\ge 0 \\text{ và } 2x-y\\ge 1.$",
      "$x-y&lt;0 \\text{ và } 2x-3y&gt;1.$",
      "$x-y&lt;0 \\text{ và } 2x-y&lt;1.$",
      "$x-y&gt;0 \\text{ và } 2x-y&gt;1.$"
    ],
    "answer": 3,
    "explain": "Ta tìm phương trình của hai đường thẳng. <br>  <strong>Đường thẳng thứ nhất</strong> đi qua $O(0;0)$ và $M(1;1)$ nên có hệ số góc là  $ k=\\dfrac{1-0}{1-0}=1. $  Vì đường thẳng đi qua gốc tọa độ $O(0;0)$ nên có phương trình là  $ y=x\\ \\Leftrightarrow\\ x-y=0. $   <strong>Đường thẳng thứ hai</strong> đi qua $M(1;1)$ và $N(0;-1)$ nên có hệ số góc là  $ k=\\dfrac{1-(-1)}{1-0}=2. $  Vì đường thẳng đi qua $N(0;-1)$ nên có phương trình là  $ y=2x-1\\ \\Leftrightarrow\\ 2x-y=1. $  Phần không tô đậm (không kể bờ) là miền nghiệm của hệ bất phương trình ứng với phần giao của hai nửa mặt phẳng nằm về cùng một phía xác định bởi hai đường thẳng trên. <br>   Chọn điểm $A(2;0)$ thuộc miền không tô đậm. Khi đó, $x-y=2&gt;0$ và $ 2x-y=4&gt;1$. <br>  Vậy hệ bất phương trình biểu diễn miền nghiệm là phần không tô đậm (không kể bờ) là  $ x-y&gt;0 \\text{ và } 2x-y&gt;1. $"
  },
  {
    "id": "0D222TN31",
    "question": "Miền nghiệm của hệ bất phương trình $x-2y&lt;0 \\text{ và } x+3y&gt;2 \\text{ và } x-y&lt;3$ chứa điểm nào sau đây?",
    "options": [
      "$(1;-1)$",
      "$(2;6)$",
      "$(0;-4)$",
      "$(-2;-10)$"
    ],
    "answer": 1,
    "explain": "Ta thử lần lượt từng phương án.  <br>- Với $(1; -1)$, ta có $x-2y=1-2(-1)=3&gt;0$ nên $(1; -1)$ không thuộc miền nghiệm.<br>- Với điểm $(2; 6)$, ta có $x-2y=2-2\\cdot 6=-10&lt;0$; $x+3y=2+3\\cdot 6=20&gt;2$ và $x-y=2-6=-4&lt;3$.<br>  Vậy $(2; 6)$ thỏa cả ba bất phương trình nên thuộc miền nghiệm.<br>- Với $(0; -4)$, ta có $x-2y=0-2(-4)=8&gt;0$ nên $(0;-4)$ không thuộc miền nghiệm.<br>- Với điểm $(-2; -10)$, ta có $x-2y=-2-2(-10)=18&gt;0$ nên điểm $(-2;-10)$ không thuộc miền nghiệm.   Vậy miền nghiệm của hệ chứa điểm $(2; 6)$."
  },
  {
    "id": "0D221TN14",
    "question": "Cặp số $(x;y)$ nào sau đây là nghiệm của hệ bất phương trình $x+3y\\le0 \\text{ và } x-2y\\ge1$?",
    "options": [
      "$(1;0)$",
      "$(3;1)$",
      "$(1;-3)$",
      "$(-2;3)$"
    ],
    "answer": 2,
    "explain": "Kiểm tra cặp số $(1;-3)$, ta thấy  $1 + 3(-3) = -8 \\le 0 \\quad (\\text{Đúng}) \\text{ và } 1 - 2(-3) = 7 \\ge 1 \\quad (\\text{Đúng}).$<br>  Vậy cặp số $(1;-3)$ là nghiệm của hệ bất phương trình $x+3y\\le0 \\text{ và } x-2y\\ge1.$"
  }
];
