// =========================================================================
// KHỐI DỮ LIỆU: 1H81 - Trả lời ngắn (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.traLoiNgan1H81 = [
  {
    "id": "1H812TL1",
    "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA \\perp (ABCD)$, $SA=a\\sqrt{2}$. Tính góc giữa $AD$ và $SC$ (theo đơn vị độ).<br><img src=\"data/11/1D8/im1H81/dlts_11_DLTS20_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "60",
    "explain": "Vì $ABCD$ là hình vuông nên $AD \\parallel BC$.<br>  Do đó, góc giữa đường thẳng $AD$ và $SC$ bằng góc giữa đường thẳng $BC$ và $SC$. <br>  Đó chính là góc $\\widehat{SCB}$ (vì nếu góc này nhọn hoặc vuông) hoặc $180^\\circ - \\widehat{SCB}$ (nếu góc này tù).<br>  Xét tam giác $SAB$ vuông tại $A$ (do $SA \\perp (ABCD) \\Rightarrow SA \\perp AB$)<br>  $SB^2 = SA^2 + AB^2 = (a\\sqrt{2})^2 + a^2 = 2a^2 + a^2 = 3a^2$ hay $SB = a\\sqrt{3}$.<br>  Ta có $BC \\perp AB, AB \\subset (SAB) \\text{ và } BC \\perp SA, SA \\subset (SAB) \\text{ và } SA \\cap AB=A.$<br>  Do đó, $BC \\perp (SAB)$ hay $BC \\perp SB$.<br>  Vậy góc giữa $BC$ và $SC$ chính là góc $\\widehat{SCB}$.<br>  Trong tam giác $SBC$ vuông tại $B$, ta có:<br>  $\\cos(\\widehat{SCB}) = \\dfrac{BC}{SC} = \\dfrac{a}{2a} = \\dfrac{1}{2}$.<br>  Suy ra $\\widehat{SCB} = 60^\\circ$.<br>  Vậy góc giữa $AD$ và $SC$ là $60^\\circ$."
  },
  {
    "id": "1H812TL2",
    "question": "[Đỗ Minh Vũ]  Cho hình lăng trụ $ABC.A'B'C'$ có đáy $A B C$ là tam giác đều cạnh a. Điểm $H$ là trung điểm cạnh $B C$, $A' H \\perp(ABC)$ và $A' H=\\dfrac{3 a}{2}$. Gọi $\\alpha$ là góc giữa hai đường thẳng $C C'$ và $A B$. Khi đó, $\\cos \\alpha$ bằng $\\sqrt{\\dfrac{a}{b}}$, $\\left( \\dfrac{a}{b} \\text { là phân số tối giản} \\right)$ . Hiệu $a-b$ bằng bao nhiêu?%}",
    "answer": "-13",
    "explain": "<br><img src=\"data/11/1D8/im1H81/dlts_11_DLTS21_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Do $CC' \\parallel AA'$ nên $(CC',AB)=(AA',AB)$.<br>  Ta có<br>  $AB=a$, $AA'=\\sqrt{A'H^2+AH^2}=\\sqrt{\\dfrac{9a^2}{4}+\\dfrac{3a^2}{4}}=a\\sqrt{3}.$<br> $A'B=\\sqrt{A'H^2+BH^2}=\\sqrt{\\dfrac{9a^2}{4}+\\dfrac{a^2}{4}}=\\dfrac{a\\sqrt{10}}{2}$.<br>  Áp dụng định lí cosin trong tam giác $AA'B$ có<br>  $\\cos \\widehat{BAA'}=\\dfrac{AB^2+AA'^2-A'B^2}{2\\cdot AB\\cdot AA'}=\\dfrac{a^2+3a^2-\\dfrac{10a^2}{4}}{2 \\cdot a\\cdot a\\sqrt{3}}=\\sqrt{\\dfrac{3}{16}} &gt; 0. <br>  \\Rightarrow \\cos(CC',AB)=\\cos \\widehat{BAA'} = \\sqrt{\\dfrac{3}{16}} \\Rightarrow a - b = 3 - 16 = -13$."
  }
];
