// =========================================================================
// KHỐI DỮ LIỆU: 2D62 - Trả lời ngắn (bổ sung từ nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.traLoiNgan2D62 = [
  {
    "id": "2D622TL1",
    "question": "Trong số $45$ hệ nhóm máu đươc ghi nhận, $ABO$ vẫn là hệ thống quan trọng nhất trong truyền máu và ghép tạng vì hầu hết mọi người trên $6$ tháng tuổi đều có kháng thể kháng A hoặc kháng B có ý nghĩa lâm sàng trong huyết thanh. Nhóm máu A chứa kháng thể chống lại nhóm máu B trong huyết thanh và ngược lại, trong khi nhóm máu O không chứa kháng nguyên A và kháng nguyên B nhưng có cả kháng thể kháng A và kháng B trong huyết thanh. Hệ nhóm máu ABO gồm 4 nhóm máu là A, B, O và AB với tỷ lệ phân bố trong cộng đồng khác nhau ở từng chủng tộc. Ở Việt Nam, tỷ lệ này là: nhóm O khoảng $45\\%$, nhóm B khoảng $30\\%$, nhóm A khoảng $20\\%$ và nhóm AB khoảng $5\\%$.Lấy ngẫu nhiên một người cần hiến máu và một người hiến máu. Tính xác suất có thể thực hiện truyền máu (đơn vị $\\%$ kết quả làm tròn đến hàng phần chục).",
    "answer": "60{,}8",
    "explain": "Ta có  <br>- Nhóm máu A có thể truyền cho nhóm máu A và AB.<br>- Nhóm máu B có thể truyền cho nhóm máu B và AB.<br>- Nhóm máu O có thể truyền cho tất cả nhóm máu.<br>- Nhóm máu AB chỉ có thể truyền cho AB.  <strong>Trường hợp 1:</strong> Người hiến máu có nhóm máu A, khi đó người cần hiến máu phải thuộc nhóm máu A hoặc AB.<br>  Suy ra xác suất có thể truyền máu là $20\\%\\cdot (20\\%+5\\%)=0{,}05$.<br>  <strong>Trường hợp 2:</strong> Người hiến máu có nhóm máu B, khi đó người cần hiến máu phải thuộc nhóm máu B hoặc AB.<br>  Suy ra xác suất có thể truyền máu là $30\\%\\cdot (30\\%+5\\%)=0{,}105$.<br>  <strong>Trường hợp 3:</strong> Người hiến máu có nhóm máu O, khi đó người cần hiến máu có thể thuộc nhóm máu bất kỳ.<br>  Suy ra xác suất có thể truyền máu là $45\\%=0{,}45$.<br>  <strong>Trường hợp 4:</strong> Người hiến máu có nhóm máu AB, khi đó người cần hiến máu phải thuộc nhóm máu AB.<br>  Suy ra xác suất có thể truyền máu là $5\\%\\cdot5\\%=0{,}0025$.<br>  Vậy xác suất có thể truyền máu là $0{,}05+0{,}105+0{,}45+0{,}0025=0{,}6075=60{,}75\\%\\approx 60{,}8\\%$."
  },
  {
    "id": "2D624TL2",
    "question": "Một công ty có ba phân xưởng sản xuất $A$, $B$, $C$. Xưởng $A$ sản xuất $50\\%$ tổng số sản phẩm, xác suất sản phẩm bị lỗi là $2\\%$. Xưởng $B$ sản xuất $20\\%$ tổng số sản phẩm và xác suất sản phẩm bị lỗi là $3\\%$. Xưởng $C$ sản xuất $30\\%$ tổng số sản phẩm, xác suất sản phẩm bị lỗi là $5\\%$. Chọn ngẫu nhiên một sản phẩm bị lỗi, hỏi xác suất sản phẩm đó do xưởng $B$ sản xuất là bao nhiêu? (Kết quả làm tròn đến phần trăm).",
    "answer": "0{,}19",
    "explain": "Gọi  <br>- $A$, $B$, $C\\colon $ “ biến cố sản phẩm được sản xuất từ xưởng $A$, $B$, $C$”.<br>- $L\\colon $ “ biến cố sản phẩm bị lỗi”.  Theo đề bài  $\\mathrm{P}(A) = 0{,}5,\\quad \\mathrm{P}(B) = 0{,}2,\\quad \\mathrm{P}(C) = 0{,}3,$<br>$\\mathrm{P}(L|A) = 0{,}02,\\quad \\mathrm{P}(L|B) = 0{,}03,\\quad \\mathrm{P}(L|C) = 0{,}05.$  Áp dụng định lý xác suất toàn phần  $\\mathrm{P}(L) = \\mathrm{P}(A)\\mathrm{P}(L|A) + \\mathrm{P}(B)\\mathrm{P}(L|B) + \\mathrm{P}(C)\\mathrm{P}(L|C)$<br>$= 0{,}5 \\cdot 0{,}02 + 0{,}2 \\cdot 0{,}03 + 0{,}3 \\cdot 0{,}05$<br>$= 0{,}01 + 0{,}006 + 0{,}015 = 0{,}031.$  Áp dụng công thức Bayes để tính $\\mathrm{P}(B|L)$  \\[  \\mathrm{P}(B|L) = \\dfrac{\\mathrm{P}(B)\\mathrm{P}(L|B)}{\\mathrm{P}(L)} = \\dfrac{0{,}2 \\cdot 0{,}03}{0{,}031} = \\dfrac{0{,}006}{0{,}031} \\approx 0{,}19.  \\]"
  },
  {
    "id": "2D622TL3",
    "question": "Trường THPT Thị xã Quảng trị, có $20\\%$ học sinh tham gia câu lạc bộ âm nhạc, trong số học sinh đó thì có $75\\%$ học sinh biết chơi đàn guitar. Ngoài ra, trong số học sinh không tham gia câu lạc bộ âm nhạc có $10\\%$ học sinh biết chơi đàn guitar. Chọn ngẫu nhiên $1$ học sinh của trường. Giả sử học sinh đó biết chơi đàn guitar. Xác suất để chọn được học sinh thuộc câu lạc bộ âm nhạc là bao nhiêu? (làm tròn đến hàng phần trăm).",
    "answer": "0,65",
    "explain": "Gọi $A$ là biến cố học sinh tham gia CLB âm nhạc, ta có ${P}(A)=0{,}2\\Rightarrow {P}(\\overline{A})=1-0{,}2=0{,}8$.<br>  Gọi $G$ là biến cố học sinh biết chơi đàn guitar, ta có ${P}(G\\mid A) = 0{,}75$; ${P}(G\\mid \\overline{A}) = 0{,}1$.<br>  Xác suất để chọn được học sinh thuộc CLB âm nhạc, biết rằng học sinh đó biết chơi đàn guitar là ${P}(A\\mid G)=\\dfrac{ {P}(G\\mid A)\\cdot {P}(A)}{{P}(G\\mid A)\\cdot {P}(A)+{P}(G\\mid\\overline{A})\\cdot {P}(\\overline{A})}=\\dfrac{0{,}75 \\cdot 0{,}2}{0{,}75 \\cdot 0{,}2 + 0{,}1 \\cdot 0{,}8 } = \\dfrac{0{,}15}{0{,}15 + 0{,}08} \\approx 0{,}65.$"
  },
  {
    "id": "2D622TL4",
    "question": "Một hộp chứa $10$ viên bi xanh và $5$ viên bi đỏ. Bạn An lấy ra ngẫu nhiên $1$ viên bi từ hộp, xem màu, rồi bỏ ra ngoài. Nếu viên bi An lấy ra có màu xanh, bạn Bình sẽ lấy ra ngẫu nhiên $2$ viên bi từ hộp; còn nếu viên bi An lấy ra có màu đỏ, bạn Bình sẽ lấy ra ngẫu nhiên $3$ viên bi từ hộp. Tính xác suất để An lấy được viên bi màu xanh, biết rằng tất cả các viên bi được hai bạn chọn ra đều có đủ cả hai màu.",
    "answer": "0.55",
    "explain": "Giải bằng sơ đồ cây."
  },
  {
    "id": "2D622TL5",
    "question": "Trường THPT X có $20\\%$ học sinh tham gia câu lạc bộ âm nhạc, trong số học sinh đó có $85\\%$ học sinh biết chơi đàn guitar. Ngoài ra, có $10\\%$ số học sinh không tham gia câu lạc bộ âm nhạc cũng biết chơi đàn guitar. Chọn ngẫu nhiên một học sinh của trường. Giả sử học sinh đó biết chơi đàn guitar. Xác suất học sinh đó thuộc câu lạc bộ âm nhạc là bao nhiêu?",
    "answer": "0{,}68",
    "explain": "Gọi các biến cố:  <br>- $M$: học sinh thuộc câu lạc bộ âm nhạc.<br>- $G$: học sinh biết chơi đàn guitar.  Theo đề bài, ta có:  \\[  \\mathrm{P}(M) = 0{,}2, \\quad \\mathrm{P}(G\\mid M) = 0{,}85, \\quad \\mathrm{P}(\\overline{M}) = 0{,}8, \\quad \\mathrm{P}(G\\mid \\overline{M}) = 0{,}1.  \\]  Xác suất học sinh biết chơi guitar:  \\[  \\mathrm{P}(G) = \\mathrm{P}(M) \\cdot \\mathrm{P}(G\\mid M) + \\mathrm{P}(\\overline{M}) \\cdot \\mathrm{P}(G\\mid \\overline{M}) = 0{,}2 \\cdot 0{,}85 + 0{,}8 \\cdot 0{,}1 = 0{,}17 + 0{,}08 = 0{,}25.  \\]  Áp dụng định lý Bayes, xác suất học sinh thuộc câu lạc bộ âm nhạc biết chơi guitar là:  \\[  \\mathrm{P}(M\\mid G) = \\dfrac{\\mathrm{P}(M) \\cdot \\mathrm{P}(G\\mid M)}{\\mathrm{P}(G)} = \\dfrac{0{,}20 \\cdot 0{,}85}{0{,}25} = \\dfrac{0{,}17}{0{,}25} = 0{,}68.  \\]"
  },
  {
    "id": "2D622TL6",
    "question": "Trong một kho rượu số lượng rượu loại A, rượu loại B và rượu loại C chiếm tỉ lệ lần lượt là $50\\%$, $30\\%$, $20\\%$. Người ta chọn ngẫu nhiên một chai rượu trong kho và đưa cho $6$ người sành rượu nếm thử để xác định xem đây là loại rượu nào. Giả sử mỗi người có xác suất đoán đúng là $70\\%$. Có $3$ người kết luận chai rượu loại A, $2$ người kết luận chai rượu loại B và $1$ người kết luận chai rượu loại C. Hỏi khi đó xác suất để chai rượu được chọn thuộc loại A là bao nhiêu? (làm tròn kết quả đến hàng phần trăm).",
    "answer": "82",
    "explain": "Gọi các biến cố:  <br>- $A$: Chai rượu được chọn là loại A.<br>- $B$: Chai rượu được chọn là loại B.<br>- $C$: Chai rượu được chọn là loại C.<br>- $E$: Sự kiện 6 người nếm rượu đưa ra kết luận: 3 người nói loại A ($K_A=3$), 2 người nói loại B ($K_B=2$), 1 người nói loại C ($K_C=1$).  Ta có: $P(A) = 0{,}5$; $P(B) = 0{,}3$; $P(C) = 0{,}2$,<br>  Xác suất mỗi người đoán đúng: $p = 0{,}70$<br>  Xác suất mỗi người đoán sai: $1 - p = 0{,}30$<br>  Khi một người đoán sai, họ sẽ đoán một trong hai loại còn lại. Giả sử họ chọn ngẫu nhiên giữa hai loại sai đó, vậy xác suất đoán sai thành một loại cụ thể (ví dụ, rượu là A nhưng người đó đoán là B) là $\\dfrac{1-p}{2}= 0{,}15$.<br>  Số cách 6 người đưa ra kết luận (3A, 2B, 1C) được tính bằng tổ hợp đa thức:  \\[ N_{\\text{cách}} = \\dfrac{6!}{3! \\cdot 2! \\cdot 1!} = \\dfrac{720}{6 \\cdot 2 \\cdot 1} = 60. \\]  <strong>Tính $P(E | A)$</strong>: Chai rượu thực sự là loại A.  <br>- 3 người đoán đúng A: xác suất $(0{,}70)^3$<br>- 2 người đoán sai là B (thực tế là A, đoán B): xác suất $(0{,}15)^2$<br>- 1 người đoán sai là C (thực tế là A, đoán C): xác suất $(0{,}15)^1$  Ta có $P(E | A) = N_{\\text{cách}} \\times (0{,}70)^3 \\times (0{,}15)^2 \\times (0{,}15)^1 \\approx 0{,}046 $.<br>  2. <strong>Tính $P(E | B)$</strong>: Chai rượu thực sự là loại B.  <br>- 3 người đoán sai là A (thực tế là B, đoán A): xác suất $(0{,}15)^3$<br>- 2 người đoán đúng B: xác suất $(0{,}70)^2$<br>- 1 người đoán sai là C (thực tế là B, đoán C): xác suất $(0{,}15)^1$  Ta có $P(E | B) = N_{\\text{cách}} \\times (0{,}15)^3 \\times (0{,}70)^2 \\times (0{,}15)^1 \\approx 0{,}015 $.<br>  3. <strong>Tính $P(E | C)$</strong>: Chai rượu thực sự là loại C.  <br>- 3 người đoán sai là A (thực tế là C, đoán A): xác suất $(0{,}15)^3$<br>- 2 người đoán sai là B (thực tế là C, đoán B): xác suất $(0{,}15)^2$<br>- 1 người đoán đúng C: xác suất $(0{,}70)^1$  Ta có $P(E | C) = N_{\\text{cách}} \\times (0{,}15)^3 \\times (0{,}15)^2 \\times (0{,}70)^1\\approx 0{,}003 $.<br>  Ta có $P(E) = P(E | A) P(A) + P(E | B) P(B) + P(E | C) P(C) \\approx 0{,}028$.<br>  Khi đó $P(A | E) = \\dfrac{P(E | A) P(A)}{P(E)} \\approx 0{,}82$.<br>  Vậy, xác suất để chai rượu được chọn thuộc loại A là khoảng $82\\%$."
  },
  {
    "id": "2D622TL7",
    "question": "Trong một kì thi tốt nghiệp trung học phổ thông, một tỉnh X có $60\\%$ học sinh lựa chọn tổ hợp D07 (gồm các môn Toán, Hóa học, Tiếng Anh). Biết rằng, nếu một học sinh lựa chọn tổ hợp D07 thì xác suất để học sinh đó đỗ đại học là $0{,}5$; còn nếu một học sinh không lựa chọn tổ hợp D07 thì xác suất để học sinh đó đỗ đại học là $0{,}71$. Chọn ngẫu nhiên một học sinh của tỉnh X đã tốt nghiệp trung học phổ thông trong kì thi trên. Tính xác suất để học sinh đó đỗ đại học (kết quả làm tròn đến hàng phần trăm).",
    "answer": "0,58",
    "explain": "Gọi $A$ là biến cố “ Học sinh đó lựa chọn tổ hợp D07 ”.<br>  Gọi $B$ là biến cố “ Học sinh đó đỗ đại học ”.<br>  Theo giả thiết, ta có $\\mathrm{P}(A)=60\\%$, $\\mathrm{P} \\left(B \\mid A\\right)=0{,}5$, $\\mathrm{P} \\left(B \\mid \\overline{A}\\right)=0{,}71$.<br>  Theo công thức xác suất toàn phần, ta có  $\\mathrm{P} (B) =\\mathrm{P} \\left(B \\mid A\\right) \\cdot \\mathrm{P} (A)+ \\mathrm{P} \\left(B \\mid \\overline{A}\\right) \\cdot \\mathrm{P} \\left(\\overline{A}\\right)$<br>$=0{,}5 \\cdot 60\\% + 0{,}71 \\cdot \\left(1-60\\%\\right)$<br>$\\approx 0{,}58.$  Vậy xác suất để học sinh được chọn đỗ đại học vào khoảng $0{,}58$."
  },
  {
    "id": "2D624TL8",
    "question": "Trước khi đưa ra thị trường một sản phẩm, công ty phỏng vấn $800$ khách hàng và được kết quả là $550$ ngưới nói sẽ mua, còn $250$ người nói sẽ không mua. Theo kinh nghiệm của nhà sản xuất thì trong những người nói mua sẽ có $60\\%$ số người chắc chắn mua, còn trong những người nói sẽ không mua lại có $1\\%$ người chắc chắn mua. Chon ngẫu nhiên một khách hàng. Xác suất chọn được khách hàng chắc chắn mua là bao nhiêu? (Kết quả làm trong đến hàng phần trăm).",
    "answer": "0{,}42",
    "explain": "Gọi các biến cố:  <br>- $A$: Người được chọn nói sẽ mua.<br>- $\\overline{A}$: Người được chọn nói sẽ không mua.<br>- $B$: Người được chọn chắc chắn mua.  Ta có ${P}(A) = \\dfrac{550}{800} = \\dfrac{11}{16}$, ${P}\\left(\\overline{A}\\right) = \\dfrac{250}{800} = \\dfrac{5}{16}$.<br>  Theo giả thiết: ${P}(B \\mid A) = 0{,}6$, ${P}(B \\mid \\overline{A}) = 0{,}01$.<br>  Áp dụng công thức xác suất toàn phần:  $P(B) = {P}(A)\\cdot {P}(B \\mid A) + {P}\\left(\\overline{A}\\right)\\cdot {P}\\left(B \\mid \\overline{A}\\right)$<br>$= \\dfrac{11}{16}\\cdot 0{,}6 + \\dfrac{5}{16}\\cdot 0{,}01$<br>$= \\dfrac{133}{320} \\approx 0{,}42$  Vậy xác suất cần tìm là $0{,}42$."
  },
  {
    "id": "2D622TL9",
    "question": "Nhân dịp kỷ niệm $50$ năm ngày thành lập trường, các học sinh lựa chọn tham gia thi đấu thể thao hoặc biểu diễn văn nghệ. Lớp 12A có $60\\%$ số học sinh tham gia thi đấu thể thao và còn lại $40\\%$ số học sinh tham gia biểu diễn văn nghệ. Biết rằng các bạn nữ đều tham gia biểu diễn văn nghệ. Trong số các bạn nam có $20\\%$ tham gia văn nghệ và $80\\%$ tham gia thi đấu thể thao. Chọn ngẫu nhiên 1 học sinh trong lớp. Biết rằng học sinh này tham gia biểu diễn văn nghệ, xác suất để học sinh này là nữ là bao nhiêu phần trăm?",
    "answer": "62.5",
    "explain": "Gọi xác suất chọn được một học sinh nam trong lớp là $\\mathrm{P}(A)=a$. <br>  Vậy xác suất chọn được một học sinh nữ trong lớp là $\\mathrm{P}\\left(\\overline{A}\\right)=1-a$. <br>  Gọi $B$ là biến cố “ Học sinh được chọn tham gia thi đấu thể thao”. <br>  Vậy $\\overline{B}$ là biến cố “ Học sinh được chọn tham gia biểu diễn văn nghệ”. <br>  Theo đề bài, ta có $\\mathrm{P}(B|A)=0{,}8$, $\\mathrm{P}(\\overline{B}|A)=0{,}2$, $\\mathrm{P}(B|\\overline{A})=0$, $\\mathrm{P}(\\overline{B}|\\overline{A})=1$. <br>  Lập sơ đồ cây xác suất  <br><img src=\"data/12/2D5/im2H52/dlts_12_DLTS36_017.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có $\\mathrm{P}(B)=0{,}6$. Áp dụng công thức xác suất toàn phần ta có  $\\mathrm{P}(B)=\\mathrm{P}(A)\\cdot \\mathrm{P}\\left(B\\mid A\\right)+\\mathrm{P}\\left(\\overline{A}\\right)+\\mathrm{P}\\left(B\\mid \\overline{A}\\right)\\Leftrightarrow 0{,}6=0{,}8a+0(1-a)\\Leftrightarrow a=0{,}75.$  Vậy $\\mathrm{P}(A)=0{,}75$ và $\\mathrm{P}\\left(\\overline{A}\\right)=0{,}25$. <br>  Yêu cầu bài toán là tính xác suất $\\mathrm{P}\\left(\\overline{A}\\mid\\overline{B}\\right)$. <br>  Áp dụng công thức xác suất Bayes, ta có  $\\mathrm{P}\\left(\\overline{A}\\mid\\overline{B}\\right)=\\dfrac{\\mathrm{P}\\left(\\overline{B}\\mid\\overline{A}\\right)\\cdot\\mathrm{P}\\left(\\overline{A}\\right)}{\\mathrm{P}\\left(\\overline{B}\\right)}=\\dfrac{1\\cdot 0{,}25}{1-0{,}6}=0{,}625.$  Vậy xác suất chọn được một bạn nữ biết rằng bạn đó tham gia văn nghệ là $62{,}5\\%$."
  },
  {
    "id": "2D622TL10",
    "question": "Một vận động viên bóng bàn thắng $60 \\%$ các séc đấu anh ta được ra bóng trước và $45 \\%$ các séc đấu anh ta không được ra bóng trước. Trong một séc đấu, trọng tài gieo một đồng xu cân đối để xác định ai là người ra bóng trước.  Tính xác suất vận động viên đó thắng séc đấu.",
    "answer": "0{,}525",
    "explain": ""
  },
  {
    "id": "2D622TL11",
    "question": "Người ta quan sát một nhóm người trưởng thành trong 5 năm. Ở thời điểm bắt đầu quan sát, có $30 \\%$ số người được quan sát thường xuyên hút thuốc. Sau 5 năm, người ta nhận thấy tỉ lệ tử vong trong số những người thường xuyên hút thuốc cao gấp 3 lần ti lệ này trong nhóm những người còn lại. Chọn ngẫu nhiên một người trong nhóm và thấy người này từ vong trong 5 năm quan sát, tính xác suất người đó thường xuyên hút thuốc.",
    "answer": "0{,}5625",
    "explain": ""
  },
  {
    "id": "2D622TL12",
    "question": "Hộp thứ nhất chứa 5 viên bi xanh và 1 viên bi đỏ. Hộp thứ hai chứa 4 viên bi đỏ. Chọn ngẫu nhiên 3 viên bi từ hộp thứ nhất và bỏ vào hộp thứ hai, rồi từ hộp thứ hai chọn ra ngẫu nhiên 2 viên bi.  \\item Tính xác suất của biến cố 2 viên bi lấy ra ở hộp thứ hai có cùng màu.",
    "answer": "0{,}476",
    "explain": ""
  }
];
