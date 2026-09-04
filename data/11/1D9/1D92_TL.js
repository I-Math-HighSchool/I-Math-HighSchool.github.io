// =========================================================================
// KHỐI DỮ LIỆU: 1D92 - Trả lời ngắn (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.traLoiNgan1D92 = [
  {
    "id": "1D922TL1",
    "question": "[Đỗ Minh Vũ]  Khảo sát một nhóm $50$ học sinh nam về các môn thể thao các em thích chơi. Kết quả thấy rằng có $30$ học sinh thích chơi đá bóng, $15$ học sinh vừa thích chơi đá bóng vừa thích chơi bóng rổ, $40$ học sinh thích chơi đá bóng hoặc bóng rổ. Chọn ngẫu nhiên một em học sinh trong nhóm này. Xác suất học sinh này thích chơi bóng rổ bằng bao nhiêu? (<em>làm tròn kết quả đến hàng phần chục</em>).",
    "answer": "0,5",
    "explain": "<br>- Gọi A là biến cố: \"học sinh thích chơi bóng đá\".<br>- Gọi B là biến cố: \"học sinh thích chơi bóng rổ\".  Khi đó ta có<br>  $n(A)=30$, $n(AB)=15$, $n(A\\cup B) = 40$ <br>  Từ $n(A\\cup B)=n(A) + n(B)-n(AB) \\Rightarrow n(B)=40-30+15=25$.<br>  Vậy xác suất để chọn được một học sinh thích chơi bóng rổ là $P(B)=\\dfrac{n(B)}{n(\\Omega)}=\\dfrac{25}{50}=0{,}5$."
  },
  {
    "id": "1D922TL2",
    "question": "Phỏng vấn về sở thích của $50$ học sinh lớp 11A về các môn thể thao yêu thích thu được kết quả có $25$ thích môn cầu lông, $20$ thích môn bóng đá và $13$ không thích cả hai môn đó. Chọn ngẫu nhiên một học sinh 11A. Tính xác suất để học sinh được chọn thích cả hai môn thể thao trong hai môn trên.",
    "answer": "0,16",
    "explain": "Gọi $A$ là biến cố \\lq\\lq học sinh được chọn thích môn cầu lông\\rq\\rq, ta có $n(A)=25$.<br>  Gọi $B$ là biến cố \\lq\\lq học sinh được chọn thích môn bóng đá\\rq\\rq, ta có $n(B)=20$.<br>  Do có $13$ bạn không thích môn nào trong cả hai môn đó nên $n(A\\cup B)=50-13=37$.<br>  Xác suất để học sinh được chọn thích cả hai môn thể thao trong hai môn trên là  \\[P(A\\cap B)=P(A)+P(B)-P(A\\cup B)=\\dfrac{25}{50}+\\dfrac{20}{50}-\\dfrac{37}{50}=0{,}16.\\]"
  }
];
