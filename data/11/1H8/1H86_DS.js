// =========================================================================
// KHỐI DỮ LIỆU: 1H86 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1H86 = [
  {
    "id": "1H862DS1",
    "question": "Cho hình chóp $S. ABC$ có đáy $ABC$ vuông cân tại $B$, $S A \\perp(ABC)$, $AB=a$, $S A=a \\sqrt{3}$.",
    "subQuestions": [
      {
        "text": "Đường thẳng $BC$ vuông góc với đường thẳng $SB$",
        "answer": true
      },
      {
        "text": "Góc tạo bởi hai đường thẳng $SB$ và $AB$ bằng góc tạo bởi hai mặt phẳng $(SBC)$ và $(ABC)$",
        "answer": true
      },
      {
        "text": "Cosin góc tạo bởi hai đường thẳng $SB$ và $AB$ bằng $\\dfrac{\\sqrt{3}}{2}$",
        "answer": false
      },
      {
        "text": "Góc tạo bởi hai mặt phẳng $(SBC)$ và $(ABC)$ bằng $45^{\\circ}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1D8/im1H86/dlts_11_DLTS25_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Đúng</strong>.<br>  Ta có $BC\\perp SA\\,(\\text{do }SA\\perp(ABC)) \\text{ và } BC\\perp AB\\,(\\text{do}\\triangle ABC\\text{ vuông cân tại }B)\\Rightarrow BC\\perp (SAB)$.<br>  Do đó $BC\\perp SB$.<br>- <strong>Đúng</strong>.<br>  Ta có $(SBC)\\cap(ABC)=BC \\text{ và } BC\\perp SB \\text{ và } BC\\perp AB\\Rightarrow(\\big((SBC),(ABC)\\big))=(SB,AB)=\\widehat{SBA}$.<br>- <strong>Sai</strong>.<br>  Ta có $\\big(SB,AB\\big)=\\widehat{SBA}$.<br>  Tam giác $SAB$ vuông tại $A$ có   <br>- $SB=\\sqrt{SA^2+AB^2}=\\sqrt{\\left(a\\sqrt{3}\\right)^2+a^2}=2a$.<br>- $\\cos \\widehat{SBA}=\\dfrac{AB}{SB}=\\dfrac{a}{2a}=\\dfrac{1}{2}$.  Vậy cosin góc tạo bởi hai đường thẳng $SB$ và $AB$ bằng $\\dfrac{1}{2}$.<br>- <strong>Sai</strong>.<br>  Ta có góc tạo bởi hai mặt phẳng $(SBC)$ và $(ABC)$ chính là $\\widehat{SBA}$.<br>  Tam giác $SAB$ vuông tại $A$ có   <br>- $SB=\\sqrt{SA^2+AB^2}=\\sqrt{\\left(a\\sqrt{3}\\right)^2+a^2}=2a$.<br>- $\\cos \\widehat{SBA}=\\dfrac{AB}{SB}=\\dfrac{a}{2a}=\\dfrac{1}{2}\\Rightarrow \\widehat{SBA}=60^\\circ$.  Vậy góc tạo bởi hai mặt phẳng $(SBC)$ và $(ABC)$ có số bằng $60^\\circ$."
  },
  {
    "id": "1H862DS2",
    "question": "Cho hình chóp $S. ABC$ có $S A \\perp(ABC)$, tam giác $ABC$ đều, $H$ là trung điểm của $BC$",
    "subQuestions": [
      {
        "text": "Mặt phẳng $(S AB)$ vuông góc với mặt phẳng $(ABC)$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $(SAH)$ vuông góc với mặt phẳng $(SBC)$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $(SAC)$ vuông góc với mặt phẳng $(S AB)$",
        "answer": false
      },
      {
        "text": "Góc giữa hai mặt phẳng $(SBC)$ và $(ABC)$ là $\\widehat{SHA}$",
        "answer": true
      }
    ],
    "explain": ".  <br><img src=\"data/11/1D8/im1H86/dlts_11_DLTS25_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Đúng</strong>.<br>  Ta có $SA\\perp(ABC) \\text{ và } SA\\subset(SAB)\\Rightarrow (SAB)\\perp(ABC)$.<br>- <strong>Đúng</strong>.<br>  Ta có $BC\\perp AH \\text{ và } BC\\perp SA\\Rightarrow BC\\perp(SAH)$.<br>  Mà $BC\\subset (SBC)$ nên $(SBC)\\perp(SAH)$.<br>- <strong>Sai</strong>.<br>  Ta có $(SAC)\\cap(SAB)=SA \\text{ và } SA\\perp AB \\text{ và } SA\\perp AC\\Rightarrow\\big((SAC),(SAB)\\big)=\\widehat{BAC}=60^\\circ$.<br>  Vậy $(SAC)$ không góc với $(SAB)$.<br>- <strong>Đúng</strong>.<br>  Ta có $(SBC)\\cap(ABC)=BC \\text{ và } BC\\perp AH \\text{ và } BC\\perp SH\\Rightarrow \\big((SBC),(ABC)\\big)=\\widehat{SHA}$."
  }
];
