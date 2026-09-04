// =========================================================================
// KHỐI DỮ LIỆU: 2D61 - Trả lời ngắn (bổ sung từ nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.traLoiNgan2D61 = [
  {
    "id": "2D614TL1",
    "question": "Một kho hàng do hai nhà máy sản xuất. Biết tỉ lệ sản phẩm đóng góp của nhà máy một bằng $\\dfrac{1}{3}$ sản phẩm đóng góp của nhà máy hai và tỉ lệ phế phẩm do nhà máy một, nhà máy hai sản xuất lần lượt là $0{,}1\\%$ và $0{,}2\\%$. Chọn ngẫu nhiên một sản phẩm. Biết sản phẩm chọn được là phế phẩm. Xác suất để sản phẩm đó do nhà máy hai sản xuất là $\\dfrac{a}{b}$ $\\left(a,b\\in\\mathbb{N}^*, \\dfrac{a}{b}\\ \\text{tối giản}\\right)$. Tính $a-2b$.",
    "answer": "-8",
    "explain": "Gọi biến cố $A$ \\lq\\lq Sản phầm chọn được do nhà máy I sản xuất\\rq\\rq;  Biến cố $B$ \\lq\\lq Sản phẩm chọn được là phế phẩm\\rq\\rq.<br>  Khi đó $\\mathrm{P}(A)=\\dfrac{1}{4}$, $\\mathrm{P}(\\overline{A})=\\dfrac{3}{4}$.<br>  Ta lại có $\\mathrm{P}(B|A)=0{,}1\\%$, $\\mathrm{P}(B|\\overline{A})=0{,}2\\%$.<br>  Ta cần tính $\\mathrm{P}(\\overline{A}|B)$.<br>  Theo công thức Bayes  $\\mathrm{P}(\\overline{A}|B)=\\dfrac{\\mathrm{P}(\\overline{A})\\cdot\\mathrm{P}(B|\\overline{A})}{\\mathrm{P}(B)}=\\dfrac{\\dfrac{3}{4}\\cdot 0{,}2\\%}{\\dfrac{1}{4}\\cdot0{,}1\\%+\\dfrac{3}{4}\\cdot0{,}2\\%}=\\dfrac{6}{7}$.  Suy ra $a=6$, $b=7$.  Vậy $a-2b=6-2\\cdot7=-8$."
  },
  {
    "id": "2D613TL2",
    "question": "[Dự án đề kiểm tra Toán 12 HKII NH24-25- Hector Tran]%[2-TN-DS-TLN-THPT-ThiXaQuangTri-QuangTri-HKII-N24-25]  Trên mặt bàn có $5$ lá bài đỏ và $5$ lá bài đen chưa được lật. An thực hiện lật ngẫu nhiên lần lượt từng lá bài, trước khi lật từng lá bài An phải đoán màu của lá bài đó và luôn đoán sao cho xác suất đoán đúng màu của lá bài sắp lật là lớn nhất. Xác suất lần lật bài thứ $3$, An đoán đúng màu của lá bài đó là bao nhiêu? (làm tròn kết quả đến hàng phần trăm).",
    "answer": "0,56",
    "explain": "Sau $2$ lần lật thẻ ta có $4$ khả năng các cặp thẻ đỏ (R) và đen (B) đã lật là $RR$; $RB$; $BR$; $BB$.<br>   Khi đó<br>   ${P}(RR) = \\dfrac{5}{10} \\cdot \\dfrac{4}{9} = \\dfrac{2}{9}$;  ${P}(RB) = \\dfrac{5}{10} \\cdot \\dfrac{5}{9} = \\dfrac{5}{18}$; ${P}(BR) = \\dfrac{5}{10} \\cdot \\dfrac{5}{9} = \\dfrac{5}{18}$; ${P}(BB) = \\dfrac{5}{10} \\cdot \\dfrac{4}{9} = \\dfrac{2}{9}$.<br>   Gọi $X$ là xác suất đoán đúng lần thứ $3$, ta có<br>  ${P}(X) = {P}(RR) \\cdot {P}(X|RR) + {P}(RB)\\cdot {P}(X|RB) + {P}(BR) \\cdot {P}(X|BR) + {P}(BB)\\cdot {P}(X|BB)$<br>   ${P}(X) = \\dfrac{2}{9} \\cdot \\dfrac{5}{8} + \\dfrac{5}{18} \\cdot \\dfrac{4}{8} + \\dfrac{5}{18} \\cdot \\dfrac{4}{8} + \\dfrac{2}{9} \\cdot \\dfrac{5}{8}\\approx 0{,}56$."
  },
  {
    "id": "2D614TL3",
    "question": "Một công ty dược phẩm muốn so sánh tác dụng điều trị bệnh X của hai loại thuốc M và N. Công ty đã tiến hành thử nghiệm với $4\\,000$ bệnh nhân mắc bệnh X trong đó có $2\\,400$ bệnh nhân dùng thuốc M, $1\\,600$ bệnh nhân dùng thuốc N. Kết quả được cho trong bảng sau  <br><img src=\"data/12/2D6/im2D61/dlts_12_DLTS34_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Chọn ngẫu nhiên một bệnh nhân trong số $4\\,000$ bệnh nhân thử nghiệm sau khi uống thuốc. Xác suất bệnh nhân đó uống thuốc M, biết rằng bệnh nhân đó khỏi bệnh là $\\dfrac{a}{b}$. Tính $a+b$.",
    "answer": "11",
    "explain": "Gọi $A$ là biến cố \\lq\\lq Bệnh nhân uống thuốc M\\rq\\rq.<br>  Gọi $B$ là biến cố \\lq\\lq Bệnh nhân khỏi bệnh\\rq\\rq.<br>  Yêu cầu bài toán là tính $\\mathrm{P}(A\\mid B)$.<br>  Ta có $n(B)=1\\,600+1\\,200=2\\,800$, $n(AB)=1\\,600$.<br>  Xác suất cần tìm là  \\[\\mathrm{P}(A\\mid B)=\\dfrac{n(AB)}{n(B)}=\\dfrac{1\\,600}{2\\,800}=\\dfrac{4}{7}.\\]"
  }
];
