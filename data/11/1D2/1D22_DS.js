// =========================================================================
// KHỐI DỮ LIỆU: 1D22 - Đúng sai
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D22 = [
  {
    "id": "1D222DS1",
    "question": "Trong một hội chợ đón Xuân, một gian hàng sữa muốn xếp $900$ hộp sữa theo quy luật là hàng trên cùng có $1$ hộp sữa, mỗi hàng ngay phía dưới lần lượt được xếp nhiều hơn $2$ hộp so với hàng trên nó.",
    "subQuestions": [
      {
        "text": "Số hộp sữa ở các hàng lập thành một cấp số cộng với số hạng đầu $u_1=1$ và công sai $d=2$",
        "answer": true
      },
      {
        "text": "Hàng thứ $10$ có $20$ hộp sữa",
        "answer": false
      },
      {
        "text": "$23$ hộp là số hộp sữa ở hàng thứ $12$",
        "answer": true
      },
      {
        "text": "Cần $30$ hàng để xếp hết tất cả số hộp sữa lên gian hàng",
        "answer": true
      }
    ],
    "explain": "<br>- Do mỗi hàng ngay phía dưới lần lượt được xếp nhiều hơn $2$ hộp so với hàng trên nó nên số hộp sữa ở các hàng lập thành một cấp số cộng với số hạng đầu $u_1=1$ và công sai $d=2$.<br>- Số hộp sữa ở hàng thứ $10$ là $u_{10}=u_1+9d=1+9\\cdot2=19$ (hộp).<br>- Số hộp sữa ở hàng thứ $12$ là $u_{12}=u_1+11d=1+11\\cdot2=23$ (hộp).<br>- Gọi $n$ là số hàng để đặt $900$ hộp sữa của gian hàng, ta có  $S_n=900 \\Leftrightarrow \\dfrac{n}{2}\\left(2u_1+(n-1)d\\right)=900$<br>$\\Leftrightarrow \\dfrac{n}{2}\\left(2\\cdot1+(n-1)\\cdot2\\right)=900$<br>$\\Leftrightarrow n^2=900\\Leftrightarrow n=30.$  Vậy cần $30$ hàng để xếp hết tất cả số hộp sữa lên gian hàng."
  },
  {
    "id": "1D222DS2",
    "question": "Cho cấp số cộng $(u_n)$ với $u_1=-2$, $u_4=4$.",
    "subQuestions": [
      {
        "text": "Viết thêm $2$ số xen giữa số hạng $u_1$ và $u_{10}$ của cấp số cộng $(u_n)$ để được một cấp số nhân có $4$ số hạng. Nếu viết tiếp thì số hạng thứ $10$ của cấp số nhân vừa tìm được là $1\\,024$",
        "answer": true
      },
      {
        "text": "Công sai của cấp số cộng $(u_n)$ là $d=2$",
        "answer": true
      },
      {
        "text": "Số hạng thứ $10$ của cấp số cộng $(u_n)$ là $16$",
        "answer": true
      },
      {
        "text": "Số hạng tổng quát của cấp số cộng $(u_n)$ là $u_n=2n-3, \\forall n \\in \\mathbb{N}^{*}$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $u_4=u_1+3d\\Leftrightarrow 4=-2+3d\\Leftrightarrow d=2$.<br>  Suy ra $u_{10}=u_1+9d=-2+9\\cdot 2=16$.<br>  Ta có cấp số nhân $a_1=u_1=-2$, $a_2$, $a_3$, $a_4=u_{10}=16<br>  \\Leftrightarrow a_1q^3=16\\Leftrightarrow -2q^3=16\\Leftrightarrow q=-2$.<br>  Do đó $a_{10}=a_1q^9=-2\\cdot (-2)^9=1\\,024$.<br>- Công sai của cấp số cộng $(u_n)$ là $d=2$.<br>- $u_{10}=u_1+9d=-2+9\\cdot 2=16$.<br>- Ta có $u_n=u_1+(n-1)d=-2+(n-1)\\cdot 2=2n-4$."
  },
  {
    "id": "1D222DS3",
    "question": "Cho dãy số $\\left(u_n\\right)$ có số hạng tổng quát $u_n=3n+1$.",
    "subQuestions": [
      {
        "text": "Tổng $8$ số hạng đầu của cấp số cộng $\\left(u_n\\right)$ bằng $116$",
        "answer": true
      },
      {
        "text": "Dãy số $\\left(u_n\\right)$ là dãy số giảm",
        "answer": false
      },
      {
        "text": "Số hạng thứ tư của dãy số là $u_4=13$",
        "answer": true
      },
      {
        "text": "Dãy số đã cho là một cấp số cộng có công sai là $d=2$",
        "answer": false
      }
    ],
    "explain": "$u_{n-1}=3(n-1)+1=3n-2$.<br>   $u_n-u_{n-1}=3n+1-(3n-2)=3$.<br>   Vậy dãy $\\left(u_n\\right)$ là cấp số cộng với công sai $d=3$, $u_1=3\\cdot 1+1=4$.  <br>- $S_8=\\dfrac{8\\left[2\\cdot 4+(8-1)\\cdot 3\\right]}{2}=116$.<br>- Công sai $d=3&gt;0$ nên dãy số $\\left(u_n\\right)$ là dãy số tăng.<br>- $u_4=4+3\\cdot 3=13$.<br>- Dãy $\\left(u_n\\right)$ là cấp số cộng với công sai $d=3$."
  },
  {
    "id": "1D222DS4",
    "question": "Em P sau khi học bài \\lq\\lq Cấp số cộng\\rq\\rq đã về nhà lấy đậu để chơi trò xếp hạt đậu thành các hàng sao cho số hạt đậu ở các hàng tạo thành dãy cấp số cộng $(u_n)$. Biết ở hàng đầu tiên P xếp $5$ hạt đậu, hàng thứ hai P xếp $9$ hạt đậu.",
    "subQuestions": [
      {
        "text": "Công sai của cấp số cộng $d=6$",
        "answer": false
      },
      {
        "text": "Số hạt đậu ở hàng thứ $10$ là $42$ hạt",
        "answer": false
      },
      {
        "text": "Số hạt đậu ở hàng thứ $85$ là $341$ hạt",
        "answer": true
      },
      {
        "text": "Để xếp được $85$ hàng đầu tiên, P cần $14\\,705$ hạt đậu",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $u_1 = 5$, $u_2 = 9 \\Rightarrow d = u_2 - u_1 = 4$.<br>- $u_{10} = u_1 + 9d = 5 + 9\\cdot 4 = 41$.<br>- $u_{85} = u_1 + 84d = 5 + 84\\cdot 4 = 5 + 336 = 341$.<br>- Tổng số hạt đậu là $S_{85} = \\dfrac{85(u_1 + u_{85})}{2} = \\dfrac{85\\cdot (5 + 341)}{2} = \\dfrac{85 \\cdot 346}{2} = 85 \\cdot 173 = 14\\,705.$"
  },
  {
    "id": "1D222DS5",
    "question": "Cho dãy số $\\left(u_n\\right)$, biết $u_1=-1 \\text{ và } u_{n+1}=u_n+3$ với $n\\ge 1$. Khi đó",
    "subQuestions": [
      {
        "text": "Năm số hạng đầu tiên của dãy số lần lượt là $-1$; $2$; $5$; $8$; $11$",
        "answer": true
      },
      {
        "text": "Số hạng thứ tám của dãy là $19$",
        "answer": false
      },
      {
        "text": "Công thức số hạng tổng quát của dãy số là $u_n=2n-3$",
        "answer": false
      },
      {
        "text": "$104$ là số hạng thứ $36$ của dãy số đã cho",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $u_2=u_1+d=-1+3=2$.<br>  Năm số hạng đầu tiên của dãy $\\left(u_n\\right)$ là $u_1=-1$, $u_2=2$, $u_3=5$, $u_4=8$, $u_5=11$.<br>- Ta có $u_{n+1}-u_n=3=d$, với $n\\ge 1$ nên dãy số $\\left(u_n\\right)$ đã cho là cấp số cộng có<br> $u_1=-1$, $d=3$.  Suy ra $u_8=-1+7 \\cdot 3=20$.<br>- Dãy số $\\left(u_n\\right)$ đã cho là cấp số cộng với công sai $d=3$, nên   \\[u_n=u_1+(n-1)\\cdot 3=3n-4.\\]<br>- $u_{36}=3\\cdot 36-4=104$."
  },
  {
    "id": "1D224DS2",
    "question": "Cho cấp số cộng $(u_n)$ có $u_1=5$ và $u_2=9$. Khi đó:",
    "subQuestions": [
      {
        "text": "Tổng $85$ số hạng đầu tiên của cấp số cộng là $S_{85}=14705$",
        "answer": true
      },
      {
        "text": "Công sai của cấp số cộng $d=6$",
        "answer": false
      },
      {
        "text": "Số hạng $u_{85}$ của cấp số cộng là $341$",
        "answer": true
      },
      {
        "text": "Số hạng $u_{10}$ của cấp số cộng là $42$",
        "answer": false
      }
    ],
    "explain": "Ta có $d=u_2-u_1=9-5=4$. <br>- <strong>Đúng</strong>. Vì $S_{85}=\\dfrac{85}{2}\\left[2\\cdot5+(85-1)\\cdot4\\right]=14705$.<br>- <strong>Sai</strong>. Vì $d=4$.<br>- <strong>Đúng</strong>. Vì $u_{85}=5+(85-1)\\cdot4=341$.<br>- <strong>Sai</strong>. Vì $u_{10}=5+(10-1)\\cdot4=41$."
  },
  {
    "id": "1D222DS6",
    "question": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = -5$, công sai $d = 3$.",
    "subQuestions": [
      {
        "text": "11 là số hạng thứ 5 của cấp số cộng trên",
        "answer": false
      },
      {
        "text": "Số hạng tổng quát của cấp số cộng trên là $u_n = 3n - 8$",
        "answer": true
      },
      {
        "text": "Số 2025 là một số hạng của cấp số cộng trên",
        "answer": false
      },
      {
        "text": "$S = u_{26} + u_{27} + \\ldots + u_{50} = 2660$",
        "answer": false
      }
    ],
    "explain": "<br>- Số hạng thứ $5$ là $u_5 = u_1 + 4d = -5 + 4\\cdot3 = 7 \\ne 11$.<br>- $u_n = u_1 + (n-1)d = -5 + 3(n-1) = 3n - 8$.<br>- Xét $3n - 8 = 2025 \\Leftrightarrow 3n = 2\\,033$. Vì $2\\,033$ không chia hết cho 3 nên không tồn tại $n \\in \\mathbb{N}^*$.<br>- $S = \\sum\\limits_{k=26}^{50} u_k$. Ta có $u_{26} = 3\\cdot26-8 = 70$; $u_{50} = 3\\cdot50-8 = 142$.<br>  Số số hạng là $50 - 26 + 1 = 25$. <br>  Tổng $S = \\dfrac{25}{2}\\cdot(70 + 142) = \\dfrac{25}{2}\\cdot212 = 25 \\cdot 106 = 2\\,650 \\ne 2\\,660$."
  },
  {
    "id": "1D225DS1",
    "question": "Một công ty có chế độ đãi ngộ cho nhân viên gắn bó với công ty, quy tắc trả tiền lương như sau, tháng đầu tiên vào làm việc bất kì nhân viên nào cũng được trả mức lương cơ bản $400\\$ một tháng, các tháng làm việc tiếp theo, ngoài lương cơ bản này, nhân viên còn nhận được một khoảng tiền thưởng $20\\$ nhiều hơn số tiền mà họ nhận được ở tháng trước đó. Gọi $u_n$ $(\\$)$ là số tiền lương và thưởng mà nhân viên nhận được ở tháng thứ $n$. Khi đó:",
    "subQuestions": [
      {
        "text": "Dãy số $(u_n)$ là cấp số cộng có $u_1 = 400$ và $d = 20$",
        "answer": true
      },
      {
        "text": "Lương và thưởng người này nhận được ở tháng thứ sáu là $500\\$",
        "answer": true
      },
      {
        "text": "Nhân viên A của công ty vào làm đủ 6 tháng thì tổng số tiền mà anh ta nhận được là $3\\,000\\$",
        "answer": false
      },
      {
        "text": "Nhân viên B của công ty này vào làm ở tháng $1$, anh ta đã kí cam kết xin ứng trước tiền lương $4$ tháng, tuy nhiên đến hết tháng $12$ thì anh ta mới được phép nhận tất cả tiền lương thưởng còn lại, anh ta nhẩm tính rằng mình sẽ nhận được $4\\,400\\$",
        "answer": true
      }
    ],
    "explain": "<br>- Hiển nhiên vì tiền lương tháng sau bằng tổng tiền lương tháng trước đó cộng với $20\\$.<br>- Ta có  \\[u_6 = u_1 + 5d = 400 + 5\\cdot20 = 500.\\]  Vậy lương và thưởng của người này nhận được ở tháng thứ sáu là $500\\$.<br>- Ta có  \\[S_6 = \\dfrac{6}{2} (u_1 + u_6) = 3 \\cdot (400 + 500) = 3 \\cdot 900 = 2\\,700.\\]  Vậy tổng số tiền khi nhân viên A của công ty làm đủ 6 tháng là $2\\,700\\$.<br>- Tính $S_4 = \\dfrac{4}{2}(u_1 + u_4) = 2 \\cdot (400 + 3\\cdot20 + 400) = 1\\,720$.<br>  Và $S_{12} = \\dfrac{12}{2} (u_1 + u_{12}) = 6 \\cdot (400 + 11\\cdot20 + 400) = 6\\,120$.<br>  Vậy số tiền lương thưởng còn lại mà nhân viên B nhận được là   \\[6\\,120 - 1\\,720 = 4\\,400.\\]"
  },
  {
    "id": "1D224DS3",
    "question": "Cho cấp số cộng $(u_n)$ có tổng $n$ số hạng đầu tiên là $S_n=n^2+3n$.",
    "subQuestions": [
      {
        "text": "$S_1=4;S_2=8$",
        "answer": false
      },
      {
        "text": "Cấp số cộng $(u_n)$ có $u_1=4$ và công sai $d=2$",
        "answer": true
      },
      {
        "text": "Số hạng tổng quát của cấp số cộng là $u_n=2+2n$",
        "answer": true
      },
      {
        "text": "Số $46$ là số hạng thứ $20$ của cấp số cộng",
        "answer": false
      }
    ],
    "explain": "Ta có $S_n=n^2+3n$.  <br>- $S_1=1^2+3\\cdot1=4$ và $S_2=2^2+3\\cdot2=10$.<br>- Ta có $u_1=S_1=4$; $u_2=S_2-S_1=10-4=6$.  Công sai $d=u_2-u_1=6-4=2$.<br>- Số hạng tổng quát của cấp số cộng là \\[u_n=u_1+(n-1)d=4+(n-1)2=4+2n-2=2n+2.\\]<br>- Xét $u_n=46\\Leftrightarrow 2n+2=46\\Leftrightarrow 2n=44\\Leftrightarrow n=22$.<br>  Vậy $46$ là số hạng thứ $22$ của cấp số cộng."
  },
  {
    "id": "1D223DS1",
    "question": "Một hộp chứa các viên bi có kích thước và khối lượng như nhau gồm $5$ bi trắng, $6$ bi đỏ và $7$ bi xanh. Chọn ngẫu nhiên $6$ viên bi từ hộp; trong đó có $x$ viên bi trắng, $y$ viên bi đỏ và $z$ viên bi xanh.",
    "subQuestions": [
      {
        "text": "Xác suất chọn được $6$ viên bi đủ ba màu, đồng thời ba số $x-y$, $y-z$, $z-x$ theo thứ tự lập thành cấp số cộng là $\\dfrac{40}{221}$",
        "answer": true
      },
      {
        "text": "Xác suất chọn được ít nhất một viên bi màu xanh nhỏ hơn $0{,}95$",
        "answer": false
      },
      {
        "text": "Xác suất chọn được $6$ viên bi toàn màu xanh là $\\dfrac{1}{2\\,652}$",
        "answer": true
      },
      {
        "text": "Xác suất chọn được ít nhất $5$ viên bi màu xanh là $\\dfrac{1}{78}$",
        "answer": true
      }
    ],
    "explain": "Số cách chọn ngẫu nhiên $6$ viên bi từ $18$ viên là $n (\\Omega)=\\mathrm{C}_{18}^6=18\\,564$.  <br>- Do $6$ viên bi đủ ba màu nên ta có điều kiện sau $1\\le x\\le 5 \\text{ và } 1\\le y\\le 6 \\text{ và } 1\\le z\\le 7 \\text{ và } x+y+z=6$.<br> Ba số $x-y$, $y-z$, $z-x$ lập thành cấp số cộng nên \\[ y-z=\\dfrac{(x-y)+(z-x)}{2} \\Leftrightarrow 2(y-z)=-y+z \\Leftrightarrow 3y = 3z \\Rightarrow y= z.  \\] Kết hợp hai điều kiện $x+y+z=6 \\text{ và } y=z \\text{ và } 1\\le x\\le 5 \\text{ và } 1\\le y\\le 6 \\text{ và } 1\\le z\\le 7\\Rightarrow x+2y=6 \\text{ và } 1\\le x\\le 5 \\text{ và } 1\\le y\\le 6.$<br> Ta xét các cặp $\\left(x, y\\right)$ nguyên dương.  <br>- Nếu $y=1 \\Rightarrow x=6-2\\cdot 1=4$, có cặp $(x, y, z) = (4, 1, 1)$.<br>- Nếu $y=2 \\Rightarrow x=6-2\\cdot 2=2$, có cặp $(x, y, z) = (2, 2, 2)$.<br>- Nếu $y=3 \\Rightarrow x=6-2\\cdot 3=0$, loại do $x \\geq 1$. Các trường hợp thỏa mãn <br>- Với cặp $(x, y, z) = (4, 1, 1)$: $4$ trắng, $1$ đỏ, $1$ xanh.<br> Số cách chọn là $\\mathrm{C}_5^4 \\cdot \\mathrm{C}_6^1 \\cdot \\mathrm{C}_7^1 = 5 \\cdot 6 \\cdot 7 = 210$.<br>- Với cặp $(x, y, z) = (2, 2, 2)$: $2$ trắng, $2$ đỏ, $2$ xanh.<br> Số cách chọn là $\\mathrm{C}_5^2 \\cdot \\mathrm{C}_6^2 \\cdot \\mathrm{C}_7^2 = 10 \\cdot 15 \\cdot 21 = 3\\,150$. Gọi $A$ là biến cố \\lq\\lq $6$ viên bi được chọn có đủ ba màu \\rq\\rq. <br>  Số kết quả thuận lợi cho biến cố $A$ là $n(A)=210+3\\,150=3\\,360$. <br>  Xác suất biến cố $A$ là $\\mathrm{P} (A) = \\dfrac{3\\,360}{18\\,564} = \\dfrac{40}{221}$.<br>- Biến cố $B$ \\lq\\lq Chọn được ít nhất một viên bi màu xanh\\rq\\rq.<br> $\\overline{B}$ là \\lq\\lq Không chọn được viên bi màu xanh nào ($6$ viên đều là trắng hoặc đỏ) \\rq\\rq. <br> Tổng số bi trắng và đỏ là $5 + 6 = 11$ (viên).<br> Vậy $n \\left(\\overline{B} \\right)=\\mathrm{C}_{11}^6=462$. <br>  Xác suất $\\mathrm{P} \\left(\\overline{B} \\right)$ là $\\mathrm{P} \\left(\\overline{B} \\right)=\\dfrac{n \\left(\\overline{B} \\right)}{n \\left(\\Omega \\right)}=\\dfrac{462}{18\\,564} = \\dfrac{11}{442}$. <br>  Xác suất $\\mathrm{P} (B)$ là $\\mathrm{P} (B)=1-\\mathrm{P} \\left(\\overline{B} \\right)=1-\\dfrac{11}{442} \\approx 0{,}97511 \\approx 0{,}98&gt; 0{,}95$.<br>- Xét biến cố $C$ là \\lq\\lq Chọn được 6 viên bi toàn màu xanh \\rq\\rq $\\Rightarrow n(C)=\\mathrm{C}_7^6=7$. <br>  Xác suất của biến cố $C$ là $\\mathrm{P} (C) = \\dfrac{7}{18\\,564}= \\dfrac{1}{2\\,652}$.<br>- Xét biến cố $D$ là \\lq\\lq Chọn được ít nhất $5$ viên bi màu xanh \\rq\\rq.<br> Biến cố này gồm hai trường hợp  <br>- Lấy $5$ viên xanh và $1$ viên (trắng hoặc đỏ từ $5+6=11$ viên). <br> Số cách lấy là $\\mathrm{C}_7^5 \\cdot \\mathrm{C}_{11}^1=21 \\cdot 11=231$ (cách).<br>- Lấy $6$ viên xanh và $0$ viên (trắng hoặc đỏ), có $\\mathrm{C}_7^6 \\cdot \\mathrm{C}_{11}^0=7\\cdot 1=7$ (cách). Số kết quả thuận lợi cho biến cố $D$ là $231+7=238$. <br>  Xác suất $\\mathrm{P} (D)$ là $\\mathrm{P} (D)=\\dfrac{n(D)}{n(\\Omega)}=\\dfrac{238}{18\\,564}=\\dfrac{1}{78}$."
  }
];
