// =========================================================================
// KHỐI DỮ LIỆU: 2D61 - Trắc nghiệm (bổ sung từ nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.tracNghiem2D61 = [
  {
    "id": "2D612TN1",
    "question": "Cho hai biến cố $A$ và $B$ với $\\mathrm{P}(A)=0{,}6$, $\\mathrm{P}(B)=0{,}8$, $\\mathrm{P}(AB)=0{,}4$. Tính $\\mathrm{P}(B|A)$.",
    "options": [
      "$\\dfrac{4}{7}$",
      "$\\dfrac{2}{3}$",
      "$\\dfrac{1}{2}$",
      "$\\dfrac{3}{4}$"
    ],
    "answer": 1,
    "explain": "Ta có $\\mathrm{P}(B|A)=\\dfrac{\\mathrm{P}(AB)}{\\mathrm{P}(A)}=\\dfrac{0{,}4}{0{,}6}=\\dfrac{2}{3}$."
  },
  {
    "id": "2D612TN2",
    "question": "Trong một cuộc khảo sát trên một nhóm gồm $50$ học sinh chơi cầu lông, thu được kết quả nư bảng số liệu sau. Chọn ngẫu nhiên một học sinh trong nhóm này. Tính xác suất để học sinh đươc chọn là nam, biết học sinh đó thuận tay phải.<br><img src=\"data/12/2D6/im2D61/dlts_12_DLTS29_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$\\dfrac{32}{43}$",
      "$\\dfrac{32}{37}$",
      "$\\dfrac{16}{25}$",
      "$\\dfrac{11}{4}$"
    ],
    "answer": 0,
    "explain": "Gọi biến cố $A$“ Học sinh được chọn là nam”.<br>  $B$ “ Học sinh thuận tay phải”.  Cần tính $\\mathrm{P}(A|B)=\\dfrac{32}{32+11}=43$."
  },
  {
    "id": "2D611TN3",
    "question": "Cho hai biến cố $A$ và $B$ bất kì, với $\\mathrm{P}(B) &gt; 0$. Khẳng định nào sau đây là đúng?",
    "options": [
      "$\\mathrm{P}(A|B) = \\dfrac{\\mathrm{P}(A \\cup B)}{\\mathrm{P}(B)}$",
      "$\\mathrm{P}(A|B) = \\dfrac{\\mathrm{P}(A) \\cdot \\mathrm{P}(B)}{\\mathrm{P}(B)}$",
      "$\\mathrm{P}(A|B) = \\dfrac{\\mathrm{P}(AB)}{\\mathrm{P}(B)}$",
      "$\\mathrm{P}(A|B) = \\dfrac{\\mathrm{P}(A) + \\mathrm{P}(B)}{\\mathrm{P}(B)}$"
    ],
    "answer": 2,
    "explain": "Công thức xác suất có điều kiện là $\\mathrm{P}(A|B) = \\dfrac{\\mathrm{P}(A \\cap B)}{\\mathrm{P}(B)}$."
  },
  {
    "id": "2D612TN4",
    "question": "Một cuộc khảo sát, có $200$ người tham gia, trong đó có $120$ người sử dụng smartphone và $80$ người sử dụng máy tính bảng. Trong số những người sử dụng smartphone, $70\\%$ có sử dụng mạng xã hội. Trong số những người sử dụng máy tính bảng, $40\\%$ có sử dụng mạng xã hội. Một người được chọn ngẫu nhiên từ $200$ người tham gia khảo sát. Xác suất để người đó là người sử dụng smartphone, biết rằng người đó đã sử dụng mạng xã hội bằng",
    "options": [
      "$\\dfrac{3}{7}$",
      "$\\dfrac{21}{29}$",
      "$\\dfrac{29}{50}$",
      "$\\dfrac{8}{29}$"
    ],
    "answer": 1,
    "explain": "Ta có sơ đồ cây minh họa các dữ kiện bài toán  <br><img src=\"data/12/2D6/im2D61/dlts_12_DLTS30_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $A$ là biến cố “ người sử dụng smartphone”, $B$ là biến cố “ người dùng mạng xã hội”.<br>  Suy ra, $A|B$ là biến cố “ người đó là người sử dụng smartphone, biết rằng người đó đã sử dụng mạng xã hội”.<br>  Khi đó $\\mathrm{P}(A) = \\dfrac{120}{200}=0{,}6$; $\\mathrm{P}\\left(B|A\\right) = 70\\%=0{,}7$; $\\mathrm{P}\\left(B|\\overline{A}\\right) = 40\\%=0{,}4$.<br>  Ta có $\\mathrm{P}\\left(\\overline{A}\\right) = 1-0{,}6=0{,}4$.<br>  Ta có $\\mathrm{P}(B) = \\mathrm{P}(A)\\cdot\\mathrm{P}\\left(B|A\\right) + \\mathrm{P}\\left(\\overline{A}\\right) \\cdot\\mathrm{P}\\left(B|\\overline{A}\\right)=0{,}6 \\cdot 0{,}7 + 0{,}4 \\cdot 0{,}4 = 0{,}42 + 0{,}16 = 0{,}58$.<br>  Vậy $\\mathrm{P}\\left(A|B\\right) = \\dfrac{\\mathrm{P}(AB)}{\\mathrm{P}(B)} = \\dfrac{0{,}6 \\cdot 0{,}7}{0{,}58} = \\dfrac{0{,}42}{0{,}58} = \\dfrac{21}{29}$.<br>"
  },
  {
    "id": "2D612TN5",
    "question": "Lớp 12A có $40$ học sinh, trong đó có $25$ nam và $15$ nữ. Trong đợt kiểm tra giữa kỳ II, lớp 12A có $18$ học sinh đạt điểm giỏi môn Toán, trong đó có $10$ học sinh nam và $8$ học sinh nữ.<br>   Chọn ngẫu nhiên một học sinh trong lớp, tính xác suất để chọn được một học sinh đạt điểm giỏi môn Toán, <strong>biết</strong> học sinh đó là học sinh nam.",
    "options": [
      "$0{,}25$",
      "$\\dfrac{5}{9}$",
      "$\\dfrac{7}{15}$",
      "$0{,}4$"
    ],
    "answer": 3,
    "explain": "Gọi các biến cố  <br>- $A\\colon $ “ Học sinh được chọn đạt điểm giỏi môn Toán”.<br>- $B\\colon$ “ Học sinh được chọn là học sinh nam”.  Theo đề bài, ta có  <br>- Số học sinh nam $25$.<br>- Số học sinh nam giỏi Toán $10$.  Xác suất để học sinh được chọn đạt điểm giỏi môn Toán, <strong>biết</strong> học sinh đó là nam, là xác suất có điều kiện  $  \\mathrm{P}(A|B) = \\dfrac{\\mathrm{P}(A \\cap B)}{\\mathrm{P}(B)} = \\dfrac{\\frac{10}{40}}{\\frac{25}{40}} = \\dfrac{10}{25} = \\dfrac{2}{5} = 0{,}4.  $  Vậy đáp án đúng là $0{,}4$."
  },
  {
    "id": "2D612TN6",
    "question": "Cho hai biến cố $A$, $B$ của cùng một phép thử thỏa $\\mathrm{P}(A) = 0{,}5$; $\\mathrm{P}(B) = 0{,}6$; $\\mathrm{P}(A \\cup B) = 0{,}7$. Khi đó $\\mathrm{P}(B|A)$ bằng",
    "options": [
      "$\\dfrac{2}{3}$",
      "$0{,}6$",
      "$0{,}8$",
      "$0{,}5$"
    ],
    "answer": 3,
    "explain": "Ta có công thức  \\[  \\mathrm{P}(A \\cup B) = \\mathrm{P}(A) + \\mathrm{P}(B) - \\mathrm{P}(A \\cap B) \\Rightarrow 0{,}7 = 0{,}5 + 0{,}6 - \\mathrm{P}(A \\cap B).  \\]  Suy ra $\\mathrm{P}(A \\cap B) = 0{,}4$. Do đó  \\[\\mathrm{P}(B|A) = \\dfrac{\\mathrm{P}(A \\cap B)}{\\mathrm{P}(A)} = \\dfrac{0{,}4}{0{,}5} = \\dfrac{4}{5}=0{,}8.\\]"
  },
  {
    "id": "2D612TN7",
    "question": "Cho hai biến cố $A$ và $B$ có $\\mathrm{P}(A) = 0{,}76$, $\\mathrm{P}(B) = 0{,}28$, $\\mathrm{P}(A\\,|\\,B) = 0{,}50$. Tính xác suất $\\mathrm{P}(A\\overline{B})$.",
    "options": [
      "$0{,}14$",
      "$0{,}62$",
      "$0{,}38$",
      "$0{,}11$"
    ],
    "answer": 1,
    "explain": "$\\mathrm{P}(AB) = \\mathrm{P}(A\\,|\\,B)\\cdot \\mathrm{P}(B) = 0{,}5\\cdot 0{,}28 = 0{,}14$.<br>  Vậy $\\mathrm{P}(A\\overline{B}) = \\mathrm{P}(A) - \\mathrm{P}(AB) = 0{,}76 - 0{,}14 = \\boxed{0{,}62}$"
  },
  {
    "id": "2D612TN8",
    "question": "Trong cuộc khảo sát trên một nhóm học sinh gồm các bạn thích trà sữa hoặc kem, người ta có được kết quả sau: Có $68\\%$ số học sinh thích kem, $56\\%$ số học sinh thích trà sữa, $24\\%$ số học sinh thích cả trà sữa và kem. Chọn ngẫu nhiên một bạn học sinh trong nhóm được khảo sát này. Tính xác suất để chọn được học sinh thích kem, biết rằng học sinh đó thích trà sữa (làm tròn kết quả đến hàng phần trăm).",
    "options": [
      "$0{,}42$",
      "$0{,}38$",
      "$0{,}43$",
      "$0{,}35$"
    ],
    "answer": 2,
    "explain": "Ta gọi các biến cố sau  <br>- Biến cố $K$ “ học sinh được chọn thích kem”, suy ra $\\mathrm{P}(K) = 0{,}68$.<br>- Biến cố $T$ “ học sinh được chọn thích trà sữa”, suy ra $\\mathrm{P}(T) = 0{,}56$.<br>- Do đó $\\mathrm{P}(KT) = 0{,}24$.  Vậy $\\mathrm{P}(K\\,|\\,T) = \\dfrac{\\mathrm{P}(KT)}{\\mathrm{P}(T)} = \\dfrac{0{,}24}{0{,}56} \\approx 0{,}4286 \\approx \\boxed{0{,}43}$."
  },
  {
    "id": "2D612TN9",
    "question": "Cho hai biến cố $A$ và $B$ có $\\mathrm{P}(B)=0{,}6$; $\\mathrm{P}(AB)=0{,}18$. Tính $\\mathrm{P}(A \\mid B)$.",
    "options": [
      "$0{,}3$",
      "$0{,}24$",
      "$0{,}9$",
      "$0{,}02$"
    ],
    "answer": 0,
    "explain": "Ta có $\\mathrm{P}(A\\mid B)= \\dfrac{\\mathrm{P}(AB)}{P(B)}=\\dfrac{0{,}18}{0{,}6}=0{,}3$."
  },
  {
    "id": "2D612TN10",
    "question": "Cho hai biến cố $A$ và $B$ là hai biến cố độc lập, với ${P}(A)=0{,}2024$, ${P}(B)=0{,}2025$. Tính ${P}\\left(A\\mid B\\right)$.",
    "options": [
      "$0{,}7976$",
      "$0{,}2024$",
      "$0{,}2025$",
      "$0{,}7975$"
    ],
    "answer": 1,
    "explain": "Vì hai biến cố $A$ và $B$ là hai biến cố độc lập nên ${P}\\left(A\\mid B\\right)={P}(A)=0{,}2024$."
  },
  {
    "id": "2D612TN11",
    "question": "Cho hai biến cố $A$ và $B$, với ${P}(A)=0{,}3$, ${P}(B)=0{,}6$, ${P}\\left(A\\mid B\\right)=0{,}4$. Tính ${P}\\left(B\\mid A\\right)$.",
    "options": [
      "$0{,}38$",
      "$0{,}8$",
      "$0{,}12$",
      "$0{,}2$"
    ],
    "answer": 1,
    "explain": "Ta có ${P}\\left(B\\mid A\\right)=\\dfrac{{P}\\left(A\\cap B\\right)}{{P}(A)}=\\dfrac{{P}\\left(A\\mid B\\right)\\cdot{P}(B)}{{P}(A)}=\\dfrac{0{,}4\\cdot0{,}6}{0{,}3}=0{,}8$."
  },
  {
    "id": "2D612TN12",
    "question": "Cho $A$ và $B$ là hai biến cố bất kì, với ${P}(B)&gt;0$. Khi đó",
    "options": [
      "${P}\\left(B\\mid A\\right)=\\dfrac{{P}\\left(A\\cap B\\right)}{{P}(A)}$",
      "${P}\\left(A\\mid B\\right)=\\dfrac{{P}\\left(A\\cap B\\right)}{{P}(B)}$",
      "${P}\\left(A\\mid B\\right)=\\dfrac{{P}(B)}{{P}\\left(A\\cap B\\right)}$",
      "${P}\\left(B\\mid A\\right)=\\dfrac{{P}\\left(A\\cap B\\right)}{{P}(B)}$"
    ],
    "answer": 1,
    "explain": "Với ${P}(B)&gt;0$, ta có ${P}\\left(A\\mid B\\right)=\\dfrac{{P}\\left(A\\cap B\\right)}{{P}(B)}$."
  },
  {
    "id": "2D611TN13",
    "question": "Cho $A$, $B$ là các biến cố của một phép thử $T$. Biết rằng $P(B)&gt;0$, xác suất của biến cố $A$ với điều kiện biến cố $B$ đã xảy ra được tính theo công thức nào sau đây?",
    "options": [
      "$P(A|B)=\\dfrac{P(A)}{P(B)}$",
      "$P(A|B)=\\dfrac{P(A)}{P(A B)}$",
      "$P(A| B)=\\dfrac{P(A B)}{P(B)}$",
      "$P(A|B)=\\dfrac{P(A B)}{P(A) \\cdot P(B)}$"
    ],
    "answer": 2,
    "explain": "Dựa theo công thức tính xác suất biến cố $A$ với điều kiện $B$ thì $P(A| B)=\\dfrac{P(A B)}{P(B)}$ là đáp án đúng."
  },
  {
    "id": "2D614TN14",
    "question": "Người ta nhập hai lô hàng vào kho. Lô thứ nhất chứa $10$ sản phẩm, trong đó có $3$ phế phẩm. Lô thứ hai có $4$ phế phẩm và $8$ sản phẩm tốt. Chọn ngẫu nhiên một sản phẩm. Xác suất chọn được một sản phẩm tốt là",
    "options": [
      "$\\dfrac{15}{22}$",
      "$\\dfrac{7}{15}$",
      "$\\dfrac{7}{22}$",
      "$\\dfrac{83}{242}$"
    ],
    "answer": 0,
    "explain": "Gọi $A$ là biến cố “Chọn được sản phẩm tốt”, theo đề ra, kho có $22$ sản phẩm, trong đó có $15$ sản phẩm tốt nên:<br>  $n(A)=15$, $n(\\Omega)=22$. Vậy $P(A)=\\dfrac{n(A)}{n(\\Omega)}=\\dfrac{15}{22}$."
  },
  {
    "id": "2D612TN15",
    "question": "Cho hai biến cố $A$ và $B$ có $P(A)=0{,}4$, $P(B)=0{,}8$ và $P(A \\mid B)=0{,}25$. Xác suất của biến cố $A$ giao $B$ là",
    "options": [
      "0,1",
      "0,2",
      "0,25",
      "0,4"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "2D612TN16",
    "question": "Cho hai biến cố $A$ và $B$ có $P(A)=0{,}4$, $P(B)=0{,}8$ và $P(A \\mid B)=0{,}25$. Xác suất của $B$ với điều kiện $A$ là",
    "options": [
      "0,2",
      "0,25",
      "0,5",
      "0,75"
    ],
    "answer": 2,
    "explain": ""
  },
  {
    "id": "2D612TN17",
    "question": "Cho hai biến cố $A$ và $B$ có $P(A)=0{,}4$, $P(B)=0{,}8$ và $P(A \\mid B)=0{,}25$. Xác suất của biến cố $A$ với điều kiện $A \\cup B$ là",
    "options": [
      "0,4",
      "0,5",
      "0,8",
      "1"
    ],
    "answer": 0,
    "explain": ""
  },
  {
    "id": "2D612TN18",
    "question": "Toàn thể nhân viên của một công ty được hỏi ý kiến về một dự thảo chính sách phúc lợi mới. Kết quả được ghi lại ở bảng bên. Chọn ngẫu nhiên một nhân viên của công ty.<br><img src=\"data/12/2D6/im2D61/dlts_sbh_xsontap_table1.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Gọi $A$ là biến cố \"Nhân viên đó là nam giới\" và $B$ là biến cố \"Nhân viên đó ủng hộ dự thảo chính sách phúc lợi mới\". Xác suất của biến cố $A$ với điều kiện $B$ là",
    "options": [
      "$\\dfrac{9}{16}$",
      "$\\dfrac{15}{19}$",
      "$\\dfrac{21}{50}$",
      "$\\dfrac{7}{16}$"
    ],
    "answer": 0,
    "explain": ""
  },
  {
    "id": "2D612TN19",
    "question": "Toàn thể nhân viên của một công ty được hỏi ý kiến về một dự thảo chính sách phúc lợi mới. Kết quả được ghi lại ở bảng bên. Chọn ngẫu nhiên một nhân viên của công ty.<br><img src=\"data/12/2D6/im2D61/dlts_sbh_xsontap_table1.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Gọi $A$ là biến cố \"Nhân viên đó là nam giới\" và $B$ là biến cố \"Nhân viên đó ủng hộ dự thảo chính sách phúc lợi mới\". Xác suất của biến cố $B$ với điều kiện $A$ là",
    "options": [
      "$\\dfrac{9}{16}$",
      "$\\dfrac{15}{19}$",
      "$\\dfrac{21}{50}$",
      "$\\dfrac{7}{16}$"
    ],
    "answer": 1,
    "explain": ""
  },
  {
    "id": "2D612TN20",
    "question": "Toàn thể nhân viên của một công ty được hỏi ý kiến về một dự thảo chính sách phúc lợi mới. Kết quả được ghi lại ở bảng bên. Chọn ngẫu nhiên một nhân viên của công ty.<br><img src=\"data/12/2D6/im2D61/dlts_sbh_xsontap_table1.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Gọi $A$ là biến cố \"Nhân viên đó là nam giới\" và $B$ là biến cố \"Nhân viên đó ủng hộ dự thảo chính sách phúc lợi mới\". Xác suất xảy ra it nhất một trong hai biến cố $A$ và $B$ là",
    "options": [
      "0,45",
      "0,67",
      "0,8",
      "0,92"
    ],
    "answer": 3,
    "explain": ""
  },
  {
    "id": "2D612TN21",
    "question": "Bạn Lan có 2 con xúc xắc cân đối, 1 con có màu xanh và 1 con có màu đỏ. Lan gieo đồng thời 2 con xúc xắc. Xác suất của biến cố con xúc xắc màu xanh xuất hiện mặt 1 chấm, biết rằng tổng số chấm trên hai con xúc xắc bằng 5 là",
    "options": [
      "$\\dfrac{1}{3}$",
      "$\\dfrac{1}{5}$",
      "$\\dfrac{1}{4}$",
      "$\\dfrac{1}{6}$"
    ],
    "answer": 2,
    "explain": ""
  },
  {
    "id": "2D612TN22",
    "question": "Bạn Lan có 2 con xúc xắc cân đối, 1 con có màu xanh và 1 con có màu đỏ. Lan gieo đồng thời 2 con xúc xắc. Xác suất của biến cố con xác xắc màu đỏ xuất hiện mặt 6 chấm, biết rẳng có ít nhất một con xúc xắc xuất hiện mặt 6 chấm là",
    "options": [
      "$\\dfrac{13}{36}$",
      "$\\dfrac{1}{6}$",
      "$\\dfrac{1}{2}$",
      "$\\dfrac{6}{11}$"
    ],
    "answer": 3,
    "explain": ""
  }
];
