// =========================================================================
// KHỐI DỮ LIỆU: 0D21 - Trả lời ngắn
// Nguồn: SachBaiHoc_T10/Data-T10/DS10-CD1.4-5-Bat-phuong-trinh-bac-nhat-hai-an.tex
// (bài tập giáo khoa gốc, giữ nguyên nội dung; 6 câu toán thực tế có ghi tên
// tác giả khác kèm đáp án/lời giải trống trong bản gốc đã được LOẠI BỎ khỏi
// đợt này thay vì tự chế đáp án, theo đúng quy tắc ưu tiên độ chính xác).
// =========================================================================
window.traLoiNgan0D21 = [
  {
    "id": "0D213TL1",
    "question": "Một xưởng may cần $50$ giờ để may xong một bộ vest và $40$ giờ để may xong một bộ áo dài. Biết thời gian tối đa cho việc may hai loại trang phục trên là $200$ giờ. Nếu gọi $x$, $y$ ($x, y\\in \\mathbb{N}$) lần lượt là số bộ vest, bộ áo dài mà xưởng may được trong thời gian cho phép thì $x$, $y$ phải thỏa mãn bất phương trình $ax+4y\\le b$ ($a, b\\in \\mathbb{N}$). Tính $T=a-b$.",
    "answer": "-15",
    "explain": "Tổng thời gian may hai loại trang phục là $50x+40y$.<br>Vì thời gian tối đa cho việc may hai loại trang phục trên là $200$ giờ nên $50x+40y\\le 200\\Leftrightarrow 5x+4y\\le 20$.<br>Suy ra $a=5$, $b=20$.<br>Vậy $T=a-b=5-20=-15$."
  },
  {
    "id": "0D211TL1",
    "question": "Mẹ cho bạn An $200$ nghìn đồng để mua vở và bút bi cho năm học mới. Khi đến nhà sách loại vở mà An hay dùng có giá $7$ nghìn đồng một quyển, loại bút bi An hay dùng có giá $4{,}5$ nghìn đồng một cây. Gọi $x$ và $y$ ($x, y \\in \\mathbb{N}$) lần lượt là số quyển vở và số bút bi bạn An mua. Khi đó $x$ và $y$ thỏa mãn bất phương trình $ax + 9y \\le b$. Biểu thức $5a + b$ có giá trị là bao nhiêu?",
    "answer": "470",
    "explain": "Tổng số tiền An chi để mua x quyển vở là $7x$ (nghìn đồng).<br>  Tổng số tiền An chi để mua y cây bút bi là $4{,}5y$ (nghìn đồng).<br>  Vì tổng số tiền chi tiêu không vượt quá $200$ nghìn đồng, ta có bất phương trình  \\[ 7x + 4{,}5y \\le 200\\Rightarrow 14x + 9y \\le 400. \\]  Ta có $a = 14$ và $b = 400$.<br>  Vậy $5a + b=5\\cdot 14 + 400 = 470$."
  },
  {
    "id": "0D211TL2",
    "question": "Bạn Lan mang $120\\,000$ đồng đi nhà sách để mua một số quyển tập và bút. Biết rằng giá một quyển tập là $8\\,000$ đồng và giá của một cây bút là $6\\,000$ đồng. Bạn Lan có thể mua được $x$ quyển tập và $y$ cây bút. Bất phương trình theo $x$, $y$ diễn tả số quyển tập và cây bút mà bạn Lan mua là $4x+m y \\leq n$. Tính $m+n$.",
    "answer": "63",
    "explain": "Gọi $x$ là số quyển tập bạn Lan mua được, $y$ là số cây bút bạn Lan mua được. Khi đó   $8\\,000x+6\\,000y \\le 120\\,000 \\Leftrightarrow 4x+3y\\le 60.$  Khi đó, $m=3$ và $n=60$ nên $m+n=63$."
  },
  {
    "id": "0D213TL2",
    "question": "Một đội sản xuất cần $55$ giờ để làm xong một sản phẩm loại (I) và $45$ giờ để làm xong một sản phẩm loại (II). Biết thời gian tối đa cho việc sản xuất hai sản phẩm trên là $180$ giờ. Nếu gọi $x$, $y$ ($x, y\\in \\Bbb{N}$) lần lượt là số sản phẩm loại (I), loại (II) mà đội làm được trong thời gian cho phép thì $x$, $y$ phải thỏa mãn bất phương trình $ax+9y\\le b$ ($a, b\\in \\Bbb{N}$). Tính $T=a-b$.",
    "answer": "-25",
    "explain": "Tổng thời gian sản xuất hai loại sản phẩm là $55x+45y$.<br>  Vì thời gian tối đa cho việc sản xuất hai sản phẩm trên là $180$ giờ nên $55x+45y\\le 180\\Leftrightarrow 11x+9y\\le 36$.<br>  Suy ra $a=11$, $b=36$.<br>  Vậy $T=a-b=11-36=-25$."
  },
  {
    "id": "0D213TL3",
    "question": "Một đội sản xuất cần $55$ giờ để làm xong một sản phẩm loại (I) và $45$ giờ để làm xong một sản phẩm  loại (II). Biết thời gian tối đa cho việc sản xuất hai sản phẩm trên là $180$ giờ. Nếu $x$, $y$ ($x$, $y\\in \\mathbb{N}$) lần lượt là số sản phẩm loại (I), loại (II) mà đội làm được trong thời gian cho phép thì $x$, $y$ phải thỏa mãn bất phương trình $ax+9y\\le b$ ($a$, $b\\in \\mathbb{Z}$). Giá trị của biểu thức $T=2a+b$ bằng bao nhiêu?",
    "answer": "58",
    "explain": "Thời gian để làm xong $x$ sản phẩm loại (I) là $55x$ (giờ).<br>  Thời gian để làm xong $y$ sản phẩm loại (II) là $45y$ (giờ).<br>  Tổng thời gian làm xong $x$ sản phẩm loại (I) và $y$ sản phẩm loại (II) là $55x+45y$ (giờ).<br>  Vì thời gian tối đa cho việc sản xuất hai sản phẩm trên là $180$ giờ nên ta có bất phương trình \\[55x+45y\\le 180 \\text{ hay } 11x+9y\\le 36.\\]  Suy ra $a=11$ và $b=36$.<br>  Vậy $T=2a+b=2\\cdot 11+36=58$."
  }
];
