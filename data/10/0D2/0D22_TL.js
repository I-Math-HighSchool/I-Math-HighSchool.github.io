// =========================================================================
// KHỐI DỮ LIỆU: 0D22 - Trả lời ngắn
// Nguồn: SachBaiHoc_T10/Data-T10/DS10-CD1.4-5-Bat-phuong-trinh-bac-nhat-hai-an.tex
// (bài tập giáo khoa gốc, giữ nguyên nội dung; 6 câu toán thực tế có ghi tên
// tác giả khác kèm đáp án/lời giải trống trong bản gốc đã được LOẠI BỎ khỏi
// đợt này thay vì tự chế đáp án, theo đúng quy tắc ưu tiên độ chính xác).
// =========================================================================
window.traLoiNgan0D22 = [
  {
    "id": "0D223TL1",
    "question": "Một công ty tổ chức hội thảo cần thuê xe đưa đón $120$ đại biểu và $8$ tấn thiết bị. Nơi cho thuê xe có hai loại xe $P$ và $Q$, có thể cho thuê tối đa $14$ xe loại $P$ và $6$ xe loại $Q$. Xe loại $P$ giá thuê $3$ triệu đồng, xe loại $Q$ giá thuê $2$ triệu đồng. Mỗi xe loại $P$ chở tối đa $10$ người và $1$ tấn thiết bị, mỗi xe loại $Q$ chở tối đa $10$ người và $1{,}5$ tấn thiết bị. Hỏi chi phí thấp nhất cần bỏ ra để thuê đủ xe chở người và thiết bị là bao nhiêu triệu đồng?",
    "answer": "30",
    "explain": "Gọi số xe loại $P$, $Q$ cần thuê lần lượt là $x$, $y$ xe ($x, y\\in\\mathbb{N}$).<br>Chi phí thuê xe là $C=3x+2y$ triệu đồng.<br>Theo bài ta có $$0\\le x\\le 14,\\ 0\\le y\\le 6,\\ 10x+10y\\ge 120,\\ x+1{,}5y\\ge 8.$$<br>Miền nghiệm của hệ trên là một tứ giác có các đỉnh $(6;6)$, $(12;0)$, $(14;0)$, $(14;6)$.<br>Chi phí tại các đỉnh: $C(6;6)=30$; $C(12;0)=36$; $C(14;0)=42$; $C(14;6)=54$.<br>Vậy chi phí thấp nhất là $30$ triệu đồng khi thuê $6$ xe loại $P$ và $6$ xe loại $Q$."
  },
  {
    "id": "0D223TL2",
    "question": "Công ty TNHH A dự định sản xuất ít nhất $80$ kg đường vàng và $20$ kg đường trắng từ hai nguyên liệu là mía và củ cải. Từ một tạ mía giá $600$ ngàn đồng có thể sản xuất $40$ kg đường vàng và $5$ kg đường trắng. Từ một tạ củ cải giá $300$ ngàn đồng có thể sản xuất $8$ kg đường vàng và $4$ kg đường trắng. Nhưng nhà cung cấp nguyên liệu cho công ty chỉ còn $8$ tạ mía và $12$ tạ củ cải. Hỏi chi phí mua nguyên liệu của công ty ít nhất là bao nhiêu ngàn đồng?",
    "answer": "1800",
    "explain": "Gọi $x$ là số tạ mía cần mua, $y$ là số tạ củ cải cần mua. ($x,\\, y \\ge 0$)<br>  Số lượng đường vàng: $40x + 8y \\ge 80$.<br>  Số lượng đường trắng: $5x + 4y \\ge 20$.<br>  Giới hạn nguyên liệu: $x \\le 8$; $y \\le 12$.<br>  Chi phí mua nguyên liệu: $f(x;y) = 600x + 300y$.<br>  Bài toán trở thành: Tìm giá trị nhỏ nhất của biểu thức $f(x;y) = 600x + 300y$ với $(x;y)$ thoả mãn hệ bất phương trình  $40x + 8y \\ge 80 \\text{ và } 5x + 4y \\ge 20 \\text{ và } 0\\le x \\le 8 \\text{ và } 0\\le y \\le 12$  Biểu diễn miền nghiệm của hệ bất phương trình ta được  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_024.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Miền nghiệm của hệ bất phương trình là miền đa giác $ABCDEF$ (kể cả biên) với $A\\left(\\dfrac{4}{3};\\dfrac{10}{3}\\right)$, $B(0;10)$, $C(0;12)$, $D(8;12)$, $E(8;0)$ và $F(4;0)$.<br>  Tính giá trị của $f(x;y)$ với $(x;y)$ tương ứng là toạ độ các điểm $A$, $B$, $C$, $D$, $E$, $F$ ta được $f(x;y)$ đạt giá trị nhó nhất bằng $1\\,800$ tại $x=\\dfrac{4}{3}$; $y=\\dfrac{10}{3}$.<br>  Vậy chi phí mua nguyên liệu của công ty ít nhất là $1\\,800$ ngàn đồng."
  },
  {
    "id": "0D222TL1",
    "question": "Bạn Hoa dự định làm thiệp chúc Tết handmade để bán trong hội Xuân Ất Tỵ $2025$ nhằm gây quỹ từ thiện. Biết rằng Hoa cần $1$ giờ để làm một tấm thiệp loại nhỏ và sẽ bán với giá $20$ nghìn đồng; $3$ giờ để làm một tấm thiệp loại lớn và sẽ bán với giá $30$ nghìn đồng. Hoa chỉ thu xếp được $20$ giờ nghỉ để làm thiệp và ban tổ chức yêu cầu phải làm ít nhất là $10$ tấm thiệp. Hãy cho biết bạn Hoa cần phải làm bao nhiêu tấm thiệp loại nhỏ để số tiền ủng hộ quỹ từ thiện được nhiều nhất?",
    "answer": "20",
    "explain": "Gọi $x$, $y$ ($x, y \\in \\mathbb{N}$) lần lượt là số thiệp chúc Tết loại nhỏ và loại lớn mà bạn Hoa dự định làm.<br>  Theo đề bài, ban tổ chức yêu cầu phải làm ít nhất là $10$ tấm thiệp nên ta có bất phương trình   $x+y \\leq 10$.  Mặt khác, bạn Hoa cần $1$ giờ để làm một tấm thiệp loại nhỏ, $3$ giờ để làm một tấm thiệp loại lớn và chỉ thu xếp được $20$ giờ để làm nên ta có  $x+3y \\leq 20$.  Tấm thiệp loại nhỏ bán với giá $20$ nghìn đồng, tấm thiệp loại lớn bán với giá $30$ nghìn đồng nên số tiền bạn Hoa thu được khi bán $x$ tấm thiệp loại nhỏ và $y$ tấm thiệp loại lớn là $F(x,y)=20x+30y$ nghìn đồng.<br>  Theo giả thiết, ta cần tìm $x$ và $y$ sao cho biểu thức $F(x,y)=20x+30y$ đạt giá trị lớn nhất biết $x$ và $y$ thỏa mãn hệ bất phương trình $x+y \\geq 10 \\text{ và } x+3y \\leq 20 \\text{ và } x \\geq 0 \\text{ và } y\\geq 0.$<br>  Biểu diễn miền nghiệm của hệ bất phương trình trên mặt phẳng tọa độ $Oxy$, ta được miền nghiệm là tam giác $ABC$ (kể cả các cạnh của tam giác) với $A(5;5)$, $B(10;0)$ và $C(20;0)$.  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_025.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có<br>  $F(5,5)=20\\cdot 5+30\\cdot 5=250$.<br>  $F(10,0)=20\\cdot 10 +30\\cdot 0=200$.<br>  $F(20,0)=20\\cdot 20+30\\cdot 0=400$.<br>  Vậy bạn Hoa nên làm $20$ thiệp loại nhỏ và $0$ thẻ loại lớn thì số tiền thu được sẽ nhiều nhất."
  },
  {
    "id": "0D221TL1",
    "question": "Nếu hệ $x(ay+1)+y(x-1)-3&gt; 0 \\text{ và } 2x+y(by+2)+5\\geq 0$ là hệ bất phương trình bậc nhất hai ẩn thì tổng $a+b$ bằng bao nhiêu?",
    "answer": "-1",
    "explain": "Ta có  $x(ay + 1) + y(x - 1) - 3 gt; 0 \\text{ và } 2x + y(by + 2) + 5 \\geq 0$<br>$\\Leftrightarrow   axy + x + xy - y - 3 gt; 0 \\text{ và } 2x + by^2 + 2y + 5 \\geq 0$<br>$\\Leftrightarrow   xy(a + 1) + x - y - 3 gt; 0 \\text{ và } 2x + by^2 + 2y + 5 \\geq 0. \\quad(\\ast)$  Hệ bất phương trình $(\\ast)$ là hệ bất phương trình bậc nhất hai ẩn khi và chỉ khi  \\[a+1=0 \\text{ và } b=0 \\Leftrightarrow a = -1 \\text{ và } b = 0.\\]  Vậy $a+b=-1$."
  }
];
