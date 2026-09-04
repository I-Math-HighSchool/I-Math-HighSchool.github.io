// =========================================================================
// KHỐI DỮ LIỆU: 0D13 - Trả lời ngắn
// Nguồn: SachBaiHoc_T10/Data-T10/GiuaKiI-De-1.tex (đề luyện tập, một số câu
// đã đổi số liệu/ngữ cảnh so với bản gốc theo yêu cầu tránh trùng nội dung
// nguyên văn với đề nguồn).
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
  }
];
