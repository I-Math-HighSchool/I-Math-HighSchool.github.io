// =========================================================================
// KHỐI DỮ LIỆU: 1D92 - Trả lời ngắn
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
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
    "explain": "Gọi $A$ là biến cố “ học sinh được chọn thích môn cầu lông”, ta có $n(A)=25$.<br>  Gọi $B$ là biến cố “ học sinh được chọn thích môn bóng đá”, ta có $n(B)=20$.<br>  Do có $13$ bạn không thích môn nào trong cả hai môn đó nên $n(A\\cup B)=50-13=37$.<br>  Xác suất để học sinh được chọn thích cả hai môn thể thao trong hai môn trên là  \\[P(A\\cap B)=P(A)+P(B)-P(A\\cup B)=\\dfrac{25}{50}+\\dfrac{20}{50}-\\dfrac{37}{50}=0{,}16.\\]"
  },
  {
    "id": "1D922TL3",
    "question": "Một hộp có $15$ chiếc thẻ được đánh số lần lượt từ $1$ đến $15$. Chọn ngẫu nhiên $3$ thẻ từ hộp đó. Tính xác suất để tổng $3$ số ghi trên $3$ thẻ đó là một số chia hết cho $3$<em> (kết quả được làm tròn đến hàng phần trăm)</em>.",
    "answer": "0,34",
    "explain": "Số cách lấy ngẫu nhiên đồng thời $3$ thẻ từ hộp gồm $15$ chiếc thẻ phân biệt là $\\mathrm{C}_{15}^3$ cách.<br>  Ta xét các tập hợp sau  <br>- $A$ là tập hợp các thẻ trong hộp được đánh số chia hết cho $3$, ta có $n(A)=5$.<br>- $B$ là tập hợp các thẻ trong hộp được đánh số chia cho $3$ dư $1$, ta có $n(B)=5$.<br>- $C$ là tập hợp các thẻ trong hộp được đánh số chia cho $3$ dư $2$, ta có $n(C)=5$.  Để lấy được $3$ thẻ mà tổng $3$ số ghi trên thẻ chia hết cho $3$ thì ta có các trường hợp sau  <br>- <strong>Trường hợp 1</strong>. Lấy được $3$ thẻ từ tập $A$, có $\\mathrm{C}_5^3$ cách.<br>- <strong>Trường hợp 2</strong>. Lấy được $3$ thẻ từ tập $B$, có $\\mathrm{C}_5^3$ cách.<br>- <strong>Trường hợp 3</strong>. Lấy được $3$ thẻ từ tập $C$, có $\\mathrm{C}_5^3$ cách.<br>- <strong>Trường hợp 4</strong>. Lấy được $1$ thẻ từ hộp $A$, $1$ thẻ từ hộp $B$ và $1$ thẻ từ hộp $C$, có $\\mathrm{C}_5^1\\cdot \\mathrm{C}_5^1\\cdot \\mathrm{C}_5^1=125$ cách.  Xác suất để tổng $3$ số ghi trên $3$ thẻ đó là một số chia hết cho $3$ là $\\dfrac{\\mathrm{C}_5^3\\cdot 3+125}{\\mathrm{C}_{15}^3}=\\dfrac{31}{91}\\approx 0{,}34$."
  }
];
