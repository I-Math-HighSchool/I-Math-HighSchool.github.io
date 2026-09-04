// =========================================================================
// KHỐI DỮ LIỆU: 2D61 - Đúng/Sai (bổ sung từ nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai2D61 = [
  {
    "id": "2D612DS1",
    "question": "Khi kiểm tra sức khỏe tổng quát của bệnh nhân ở một bệnh viện, người ta được kết quả như sau  <br>- Có $40\\%$ bệnh nhân bị đau dạ dày.<br>- Có $30\\%$ bênh nhân thường xuyên bị stress.<br>- Trong số các bệnh nhân thường xuyên bị stress có $80\\%$ bệnh nhân bị đau dạ dày.  Chọn ngẫu nhiên một bệnh nhân.",
    "subQuestions": [
      {
        "text": "Xác suất chọn được bệnh nhân bị đau dạ dày, biết bệnh nhân đó thường xuyên stress là $0{,}8$",
        "answer": true
      },
      {
        "text": "Xác suất chọn được bệnh nhân thường xuyên bị stress, biết bệnh nhân đó không bị đau dạ dày là $0{,} 6$",
        "answer": false
      },
      {
        "text": "Xác suất chọn được bệnh nhân vừa thường xuyên bị stress vừa bị đau dạ dày là $0{,} 24$",
        "answer": true
      },
      {
        "text": "Xác suất chọn được bệnh nhân thường xuyên bị stress là $0{,}7$",
        "answer": false
      }
    ],
    "explain": "Biến cố $A$ \\lq\\lq Bệnh nhân thường xuyên bị stress\\rq\\rq.<br>  Gọi biến cố $B$ \\lq\\lq Bệnh nhân bị đau dạ dày\\rq\\rq<br>  Ta có $\\mathrm{P}(B)=0{,}4\\Leftrightarrow 0{,}3\\cdot0{,}8+0{,}7\\cdot\\mathrm{P}(B|\\overline{A})=0{,}4\\Leftrightarrow \\mathrm{P}(B|\\overline{A})=\\dfrac{8}{35}$.<br>  Ta có sơ đồ hình cây  <br><img src=\"data/12/2D6/im2D61/dlts_12_DLTS29_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $\\mathrm{P}(B|A)=0{,}8$.<br>- Ta có $\\mathrm{P}(A|\\overline{B})=\\dfrac{\\mathrm{P}(A)\\mathrm{P}(\\overline{B}|A)}{\\mathrm{P}(\\overline{B})}=\\dfrac{0{,}3\\cdot0{,}2}{0{,}3\\cdot0{,}2+0{,}7\\cdot\\dfrac{27}{35}}=0{,}1$.<br>- Ta có $\\mathrm{P}(AB)=\\mathrm{P}(B|A)\\mathrm{P}(B)=0{,}8\\cdot0{,}3=0{,}24$.<br>- Ta có $\\mathrm{P}(A)=0{,}3$."
  },
  {
    "id": "2D612DS2",
    "question": "Một lớp học có $40$ học sinh, trong đó có $27$ học sinh nam và $13$ học sinh nữ. Thống kê điểm kiểm tra cuối học kì I, lớp có $18$ em đạt điểm trung bình trở lên, trong đó có $8$ học sinh nam và $10$ học sinh nữ. Chọn ngẫu nhiên $1$ học sinh trong lớp.",
    "subQuestions": [
      {
        "text": "Xác suất học sinh được chọn là học sinh nam bằng $0{,}675$",
        "answer": true
      },
      {
        "text": "Xác suất học sinh được chọn là học sinh nữ bằng $0{,}315$",
        "answer": false
      },
      {
        "text": "Xác suất học sinh được chọn là học sinh nam và đạt điểm trung bình trở lên bằng $0{,}2$",
        "answer": true
      },
      {
        "text": "Biết rằng học sinh được chọn là nữ, xác suất học sinh đó không đạt điểm trung bình là $\\dfrac{19}{27}$",
        "answer": false
      }
    ],
    "explain": "Ta có bảng mô tả các dữ kiện của bài toán như sau:  <br><img src=\"data/12/2D6/im2D61/dlts_12_DLTS30_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $A$ là biến cố \\lq\\lq học sinh được chọn là nam\\rq\\rq, $B$ là biến cố \\lq\\lq học sinh được chọn đạt điểm trung bình trở lên\\rq\\rq.<br>  Khi đó $\\overline{A}$ là biến cố \\lq\\lq học sinh được chọn là nữ\\rq\\rq, $\\overline{B}$ là biến cố \\lq\\lq học sinh được chọn có điểm dưới trung bình\\rq\\rq.<br>  Ta có $n(\\Omega)=40$.<br>- <strong>Đúng</strong>. $n(A)=27\\Rightarrow \\mathrm{P}(A) = \\dfrac{27}{40} = 0{,}675$.<br>- <strong>Sai</strong>. $n(B)=13\\Rightarrow \\mathrm{P}(A) = \\dfrac{13}{40} = 0{,}325$.<br>- <strong>Đúng</strong>. $n(A\\cap B)=8\\Rightarrow \\mathrm{P}(A) = \\dfrac{8}{40} = 0{,}2$.<br>- <strong>Sai</strong>. $n\\left(\\overline{A}\\cap \\overline{B}\\right)=13-10=3$, $n\\left(\\overline{A}\\right)=13$.<br>  Suy ra $\\mathrm{P}\\left(\\overline{B}| \\overline{A}\\right) =\\dfrac{n\\left(\\overline{A}\\cap \\overline{B}\\right)}{n\\left(\\overline{A}\\right)} =\\dfrac{3}{13}$."
  },
  {
    "id": "2D612DS3",
    "question": "Ở cửa ra vào của một nhà sách có một thiết bị cảnh báo hàng hóa chưa được thanh toán khi qua cửa. Thiết bị phát chuông cảnh báo với $99\\%$ các hàng hóa ra cửa mà chưa thanh toán và $0{,}1\\%$ các hàng hóa đã thanh toán. Tỷ lệ hàng hóa qua cửa không được thanh toán là $0{,}1\\%$. Chọn ngẫu nhiên một hàng hóa khi đi qua cửa. Các khẳng định sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Xác suất để hàng qua cửa đã thanh toán là $99{,}9\\%$",
        "answer": true
      },
      {
        "text": "Xác suất để hàng qua cửa chưa thanh toán và thiết bị phát chuông cảnh báo là $1\\%$",
        "answer": false
      },
      {
        "text": "Xác suất để hàng qua cửa đã thanh toán và thiết bị phát chuông cảnh báo là $0{,}1\\%$",
        "answer": false
      },
      {
        "text": "Xác suất để hàng qua cửa chưa thanh toán và thiết bị không phát chuông cảnh báo là $0{,}001\\%$",
        "answer": true
      }
    ],
    "explain": "Gọi các biến cố  <br>- $A\\colon $ \\lq\\lq Hàng hóa đã thanh toán\\rq\\rq.<br>- $\\overline{A}\\colon $ \\lq\\lq Hàng hóa chưa thanh toán\\rq\\rq.<br>- $B\\colon $ \\lq\\lq Thiết bị phát chuông\\rq\\rq.<br>- $\\overline{B}\\colon $ \\lq\\lq Thiết bị không phát chuông\\rq\\rq.  Theo đề bài  <br>- $\\mathrm{P}(\\overline{A}) = 0{,}001 \\Rightarrow \\mathrm{P}(A) = 1 - 0{,}001 = 0{,}999$.<br>- $\\mathrm{P}(B|\\overline{A}) = 0{,}99$.<br>- $\\mathrm{P}(B|A) = 0{,}001$.  <br>- <strong>Đúng</strong>.<br> Vì $\\mathrm{P}(A) = 0{,}999 = 99{,}9\\%$.<br>- <strong>Sai</strong>.<br> Ta có $\\mathrm{P}(\\overline{A} \\cap B) = 0{,}001 \\cdot 0{,}99 = 0{,}00099 = 0{,}099\\%$, chứ không phải $1\\%$<br>- <strong>Sai</strong>.<br> Ta có $\\mathrm{P}(A \\cap B) = 0{,}999 \\cdot 0{,}001 = 0{,}000999 = 0{,}0999\\%$, gần $0{,}1\\%$ nhưng không chính xác nếu làm tròn đơn vị phần trăm.<br>- <strong>Đúng</strong>.<br> Ta có $\\mathrm{P}(\\overline{A} \\cap \\overline{B}) = 0{,}001 \\cdot (1 - 0{,}99) = 0{,}001 \\cdot 0{,}01 = 0{,}00001 = 0{,}001\\%$."
  },
  {
    "id": "2D612DS4",
    "question": "Lớp 12A có $30$ học sinh, trong đó có $17$ bạn nữ, còn lại là nam. Có $3$ bạn tên Hiền, trong đó có $1$ bạn nữ và $2$ bạn nam. Thầy giáo gọi ngẫu nhiên $1$ bạn lên bảng.",
    "subQuestions": [
      {
        "text": "Xác suất để bạn lên bảng có tên Hiền là $\\dfrac{1}{10}$",
        "answer": true
      },
      {
        "text": "Xác suất để bạn lên bảng có tên Hiền, nhưng với điều kiện bạn đó nữ là $\\dfrac{3}{17}$",
        "answer": false
      },
      {
        "text": "Xác suất để bạn lên bảng có tên Hiền, nhưng với điều kiện bạn đó nam là $\\dfrac{2}{13}$",
        "answer": true
      },
      {
        "text": "Nếu thầy giáo gọi $1$ bạn có tên là Hiền lên bảng thì xác xuất để bạn đó là bạn nữ là $\\dfrac{3}{17}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Xác suất để bạn lên bảng có tên Hiền là $\\dfrac{3}{30}=\\dfrac{1}{10}$.<br>- <strong>Sai</strong>.<br>  Xác suất để bạn lên bảng có tên Hiền, nhưng với điều kiện bạn đó nữ là $\\dfrac{1}{17}$.<br>- <strong>Đúng</strong>.<br>  Xác suất để bạn lên bảng có tên Hiền, nhưng với điều kiện bạn đó nam là $\\dfrac{2}{13}$.<br>- <strong>Sai</strong>.<br>  Nếu thầy giáo gọi 1 bạn có tên là Hiền lên bảng thì xác xuất để bạn đó là bạn nữ là $\\dfrac{1}{3}$."
  },
  {
    "id": "2D613DS5",
    "question": "Ông Khải lần lượt rút ra một cách ngẫu nhiên 2 lá bài từ bộ bài tây 52 lá. Lá bài rút ra không được trả lại. Gọi $A$ là biến cố \"Lá bải đầu tiên rút ra là chất cơ\" và $B$ là biến cố \"Lá bài thứ hai rút ra là lá $Q$\". Xét tính đúng sai.",
    "subQuestions": [
      {
        "text": "Xác suất của biến cố $A$ là 0,25",
        "answer": true
      },
      {
        "text": "Xác suất của biến cố $A$ giao $B$ là 0,25",
        "answer": false
      },
      {
        "text": "Xác suất của biến cố $A$ với điều kiện $B$ là 0,25",
        "answer": false
      },
      {
        "text": "$A$ và $B$ là hai biến cố độc lập",
        "answer": true
      }
    ],
    "explain": ""
  },
  {
    "id": "2D613DS6",
    "question": "Cho sơ đồ hình cây như hình bên. Xét tính đúng sai.",
    "subQuestions": [
      {
        "text": "Xác suất của biến cố $B$ với điều kiện $A$ không xảy ra là 0,6",
        "answer": true
      },
      {
        "text": "Xác suất cả hai biến cố $A$ và $B$ đều xảy ra là 0,3",
        "answer": false
      },
      {
        "text": "Xác suất của biến cố $B$ là 0,9",
        "answer": true
      },
      {
        "text": "Xác suất của biến cố $A$ với điều kiện $B$ là $\\dfrac{1}{19}$",
        "answer": true
      }
    ],
    "explain": ""
  }
];
