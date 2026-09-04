// =========================================================================
// KHỐI DỮ LIỆU: 0D13 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì I thật từ các trường THPT (thư mục LocID/BANK-25-26),
// giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan0D13 = [
  {
    "id": "0D135TL1",
    "question": "Một cuộc khảo sát về khán giả tại một rạp chiếu phim cho thấy trong $1\\,250$ khán giả được phỏng vấn có $700$ khán giả đã xem phim hành động, $820$ khán giả đã xem phim hài. Biết rằng toàn bộ khán giả được phỏng vấn đã xem ít nhất một trong hai thể loại phim trên. Hỏi có bao nhiêu khán giả đã xem cả phim hành động và phim hài?",
    "answer": "270",
    "explain": "Gọi $A$ là tập hợp khán giả đã xem phim hành động, khi đó $n(A)=700$.<br>$B$ là tập hợp khán giả đã xem phim hài, khi đó $n(B)=820$.<br>$n(A\\cup B)$ là tổng số khán giả đã xem ít nhất một trong hai thể loại, khi đó $n(A\\cup B)=1\\,250$.<br>$n(A\\cap B)$ là số khán giả đã xem cả hai thể loại phim.<br>Theo công thức $n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$ ta có $$1\\,250=700+820-n(A\\cap B) \\Leftrightarrow n(A\\cap B)=1\\,520-1\\,250=270.$$ Vậy có $270$ khán giả đã xem cả phim hành động và phim hài."
  },
  {
    "id": "0D134TL1",
    "question": "Cho hai tập $A=(-10;4)$ và $B=[-5;3]$. Tập hợp $C_A B$ có bao nhiêu phần tử là số nguyên?",
    "answer": "4",
    "explain": "$C_AB=A\\setminus B=(-10;-5) \\cup (3;4)$.<br>Tập hợp $C_A B$ có $4$ phần tử là số nguyên."
  },
  {
    "id": "0D131TL1",
    "question": "Cho hai tập khác rỗng $A=(m-1; 104]; B=(-6; 2m+2)$. Có bao nhiêu giá trị nguyên của tham số $m$ để $A\\cap B\\ne \\varnothing$?",
    "answer": "107",
    "explain": "Xét các điều kiện:  <br>- Tập $A = (m-1; 104]\\ne \\varnothing$ khi $m-1&lt;104\\Rightarrow m&lt;105$.<br>- Tập $B = (-6; 2m+2)\\ne \\varnothing$ khi $-6&lt;2m+2\\Rightarrow m&gt;-4$.<br>- $A\\cap B\\ne \\varnothing$ khi $m-1&lt;2m+2\\Rightarrow m&gt;-3$.  S0 với điều kiện suy ra $-3&lt;m&lt;105$.<br>  Do $m\\in \\mathbb{Z}$ nên $m\\in \\{{-2, -1, 0,\\cdots, 104}\\}$.<br>  Vậy có $107$ giá trị nguyên của tham số $m$ để $A\\cap B\\ne \\varnothing$"
  },
  {
    "id": "0D133TL2",
    "question": "Cho tập $A=\\left\\{x \\in \\mathbb{Z} \\mid(2-x)\\left(2x^2+3x+1\\right)=0\\right\\}$;<br> $B=\\left\\{x \\in \\mathbb{R} \\mid x^2+(2m+1) x+2m=0\\right\\}$ với $m \\in \\mathbb{R}$. Tìm $m$ để tập $A\\cup B$ có đúng $3$ phần từ và tổng bình phương của chúng bằng $9$.",
    "answer": "1",
    "explain": "Ta có $(2-x)\\left(2x^2+3x+1\\right)=0\\Leftrightarrow x=2\\in \\mathbb{Z} \\text{ hoặc } x=-1\\in \\mathbb{Z} \\text{ hoặc } x=-\\dfrac{1}{2}\\notin \\mathbb{Z}.$<br>  Suy ra $A=\\left\\{x \\in \\mathbb{Z} \\mid(2-x)\\left(2x^2+3x+1\\right)=0\\right\\}=\\{-1;2\\}$.<br>  Ta có $x^2+(2m+1) x+2m=0\\Leftrightarrow x=-1 \\text{ hoặc } x=-2m.$<br>  Suy ra $B=\\left\\{x \\in \\mathbb{R} \\mid x^2+(2m+1) x+2m=0\\right\\}=\\{-1;-2m\\}$.<br>  Theo đề bài ta có   $-2m\\ne -1 \\text{ và } -2m\\ne 2 \\text{ và } (-1)^2+2^2+(2m)^2=9 \\Leftrightarrow m\\ne \\dfrac{1}{2} \\text{ và } m\\ne -1 \\text{ và } m=\\pm 1$<br>$\\Leftrightarrow m=1.$"
  }
];
