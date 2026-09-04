// =========================================================================
// KHỐI DỮ LIỆU: 0D22 - Trả lời ngắn
// Nguồn: SachBaiHoc_T10/Data-T10/GiuaKiI-De-1.tex (đề luyện tập, một số câu
// đã đổi số liệu/ngữ cảnh so với bản gốc theo yêu cầu tránh trùng nội dung
// nguyên văn với đề nguồn).
// =========================================================================
window.traLoiNgan0D22 = [
  {
    "id": "0D223TL1",
    "question": "Một công ty tổ chức hội thảo cần thuê xe đưa đón $120$ đại biểu và $8$ tấn thiết bị. Nơi cho thuê xe có hai loại xe $P$ và $Q$, có thể cho thuê tối đa $14$ xe loại $P$ và $6$ xe loại $Q$. Xe loại $P$ giá thuê $3$ triệu đồng, xe loại $Q$ giá thuê $2$ triệu đồng. Mỗi xe loại $P$ chở tối đa $10$ người và $1$ tấn thiết bị, mỗi xe loại $Q$ chở tối đa $10$ người và $1{,}5$ tấn thiết bị. Hỏi chi phí thấp nhất cần bỏ ra để thuê đủ xe chở người và thiết bị là bao nhiêu triệu đồng?",
    "answer": "30",
    "explain": "Gọi số xe loại $P$, $Q$ cần thuê lần lượt là $x$, $y$ xe ($x, y\\in\\mathbb{N}$).<br>Chi phí thuê xe là $C=3x+2y$ triệu đồng.<br>Theo bài ta có $$0\\le x\\le 14,\\ 0\\le y\\le 6,\\ 10x+10y\\ge 120,\\ x+1{,}5y\\ge 8.$$<br>Miền nghiệm của hệ trên là một tứ giác có các đỉnh $(6;6)$, $(12;0)$, $(14;0)$, $(14;6)$.<br>Chi phí tại các đỉnh: $C(6;6)=30$; $C(12;0)=36$; $C(14;0)=42$; $C(14;6)=54$.<br>Vậy chi phí thấp nhất là $30$ triệu đồng khi thuê $6$ xe loại $P$ và $6$ xe loại $Q$."
  }
];
