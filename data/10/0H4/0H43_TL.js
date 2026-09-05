// =========================================================================
// KHỐI DỮ LIỆU: 0H43 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan0H43 = [
  {
    "id": "0H432TL1",
    "question": "Một thành phố dự định xây dựng một trạm cấp nước sạch để phục vụ cho hai khu dân cư $A$ và $B$ nằm trên một bãi đất ven sông, được mô hình hoá như hình vẽ. Biết rằng trạm cấp nước phải đặt tại vị trí $C$ trên bờ sông; $AB=8$ km, khoảng cách từ $A$ và $B$ đến bờ sông lần lượt là $AM=3$ km, $BN=6$ km; $M$, $N$, $C$ thẳng hàng. Gọi $T$ là tổng độ dài đường ống dẫn nước từ trạm nước $C$ đến $A$ và $B$. Tìm giá trị nhỏ nhất của $T$ (kết quả làm tròn đến hàng phần chục).<br><img src=\"data/10/0H4/im0H43/dlts_sbh_giuakii1_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "11,7",
    "explain": "Gọi $H$ là hình chiếu vuông góc của $A$ trên đường thẳng $BN$ và $B'$ đối xứng với $B$ qua $MN$.<br>Ta có $AM=HN=3$, $BH=3$, $B' N=BN=6$.<br>Tam giác $ABH$ vuông tại $H\\Rightarrow AH^2=AB^2-BH^2=8^2-3^2=55$.<br>Tam giác $AHB'$ vuông tại $H$ có $B' H=B' N+HN=6+3=9$<br>$\\Rightarrow AB'^2=AH^2+B' H^2=55+9^2=136\\Rightarrow AB'=\\sqrt{136}\\approx 11{,}7$.<br>Vậy giá trị nhỏ nhất của $T$ là $AB'\\approx 11{,}7$ km."
  },
  {
    "id": "0H431TL1",
    "question": "Hai tàu du lịch xuất phát từ hai thành phố cảng $A$ và $B$ cách nhau $300$ km đến đảo $C$ như hình minh họa. Biết hai tàu cùng chuyển động đều với vận tốc $80$ km/h và $\\widehat{CAB} = 30^\\circ$, $\\widehat{CBA} = 45^\\circ$. Tàu 1 ở thành phố $A$ khởi hành lúc $8$ h, tàu $2$ ở thành phố $B$ muốn đến đảo $C$ cùng lúc với tàu $1$ thì phải khởi hành sau tàu $1$ bao nhiêu phút? (làm tròn kết quả đến hàng đơn vị của phút)<br><img src=\"data/10/0H4/im0H43/loc2_0_TL_TN_DS_THPT__004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "48",
    "explain": "Xét tam giác $ABC$, ta có $\\widehat{ACB} = 180^\\circ - (\\widehat{CAB} + \\widehat{CBA}) = 180^\\circ - (30^\\circ + 45^\\circ) = 105^\\circ$.<br>  Áp dụng định lý sin trong tam giác $ABC$, ta có $\\dfrac{AC}{\\sin\\widehat{CBA}} = \\dfrac{BC}{\\sin\\widehat{CAB}} = \\dfrac{AB}{\\sin\\widehat{ACB}}$.<br>  Suy ra $AC=\\dfrac{AB \\cdot \\sin\\widehat{CBA}}{\\sin\\widehat{ACB}}$ và $BC=\\dfrac{AB \\cdot \\sin\\widehat{CAB}}{\\sin\\widehat{ACB}}$.<br>  Thời gian tàu $1$ đi từ $A$ đến $C$ là $t_1=\\dfrac{AC}{80}$ (giờ).<br>  Thời gian tàu $2$ đi từ $B$ đến $C$ là $t_2=\\dfrac{BC}{80}$ (giờ).<br>  Khi đó  $t=t_1-t_2=\\dfrac{AC}{80}-\\dfrac{BC}{80}=\\dfrac{300\\cdot\\sin45^\\circ}{80\\sin105^\\circ}-\\dfrac{300\\cdot\\sin30^\\circ}{80\\cdot\\sin105^\\circ}\\approx0{,}8 \\ (\\text{giờ}).$  Vậy $t=0{,}8$ (giờ).<br>  Đổi sang phút $t \\approx 0{,}8 \\cdot 60 \\approx 48$ (phút)."
  },
  {
    "id": "0H431TL2",
    "question": "Trên sườn đồi có $1$ cái cây thẳng đứng (tham khảo hình vẽ) đổ bóng dài $AB=39{,}5$ m xuống đồi. Biết góc nghiêng của sườn đồi là $\\alpha=\\widehat{OAB}=26^{\\circ}$ so với phương ngang và góc nâng của mặt trời là $\\beta=\\widehat{OAC}=50^{\\circ}$. Tính chiều cao $BC$ của cái cây (đơn vị tính là mét và kết quả làm tròn đến hàng đơn vị).<br><img src=\"data/10/0H4/im0H43/loc2_0_TN_DS_TLN_THPT_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "25",
    "explain": "<br>- Tam giác $OAB$ vuông tại $O$ nên $OA=AB\\cdot \\cos 26^\\circ \\approx 35{,}5$ (m).<br>- Tam giác $OAC$ vuông tại $O$ nên $AC=\\dfrac{OA}{\\cos 50^\\circ}=\\dfrac{35{,}5}{\\cos 50^\\circ}\\approx 55{,}23$ (m).<br>- $\\widehat{CAB}=\\beta-\\alpha=50^\\circ-26^\\circ=24^\\circ$.<br>- Áp dụng định lí côsin cho tam giác $ABC$ ta được  $BC =\\sqrt{AB^2+AC^2-2\\cdot AB\\cdot AC\\cdot \\cos \\widehat{CAB}}$<br>$=\\sqrt{(39{,}5)^2+(55{,}23)^2-2\\cdot 39{,}5\\cdot 55{,}23\\cdot \\cos 24^\\circ}$<br>$\\approx 25~\\text{(m)}.$"
  },
  {
    "id": "0H431TL3",
    "question": "Nhà anh Bình có một cái ao với hình dạng là một nửa hình tròn, bờ ao là đường kính $ AB=12$ m. Trên lối đi quanh ao (tức trên cung $\\overset\\frown{AB}$) anh Bình đặt $ 3$ chiếc cọc tại vị trí điểm $ C$, $D$ và $ B$. Sau đó anh Bình dùng lưới rào thành một vùng mặt ao hình tam giác $ BCD$ để nuôi vịt trong đó, biết rằng $\\overset\\frown{AD}=\\overset\\frown{CD}$. Khi số đo $\\overset\\frown{AD}$ bằng $ 30^\\circ$ thì diện tích của phần ao được rào để nuôi vịt bằng $ a\\sqrt{b}\\,\\mathrm{m^2}$, với $a&gt;b$, $ a\\in\\mathbb{Z}$, $b\\in\\mathbb{Z}$. Giá trị của $ a^2+b^2$ bằng bao nhiêu?<br><img src=\"data/10/0H4/im0H43/loc3_0_TL_TN_DS_THPT__001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "90",
    "explain": "Vì $\\wideparen{AD}=\\wideparen{CD} \\text{ và } \\text{sđ}\\wideparen{AD}=30^\\circ\\Rightarrow \\widehat{AOD}=\\widehat{DOC}=30^\\circ \\text{ và } \\widehat{DOB}=150^\\circ.$<br>  Ta có <br>$BD=\\sqrt{OD^2+OB^2-2.OD.OB.\\cos 150^\\circ}=\\sqrt{72+36\\sqrt{3}}$.<br>  $DC=\\sqrt{OD^2+OC^2-2.OD.OC.\\cos 30^\\circ}=\\sqrt{72-36\\sqrt{3}}$.<br>  Mặt khác $\\widehat{BDC}=\\dfrac{1}{2}\\widehat{BOC}=\\dfrac{1}{2}.120^\\circ=60^\\circ$.  Suy ra $S_{\\triangle BCD}=\\dfrac{1}{2}\\cdot DC\\cdot BD\\cdot\\sin\\widehat{BDC}=\\dfrac{1}{2}\\cdot\\sqrt{72-36\\sqrt{3}}\\cdot\\sqrt{72+36\\sqrt{3}}\\cdot\\sin 60^\\circ=9\\sqrt{3} $.<br>  Vậy $a=9$, $b=3$ nên $a^2+b^2=90$."
  }
];
