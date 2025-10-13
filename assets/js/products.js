/* Mystic-Products | assets/js/products.js
   - 24 sản phẩm (ảnh Unsplash công khai)
   - 6 sp / trang, phân trang Bootstrap
   - Tìm kiếm theo tên & mô tả (realtime)
   - Card tỉ lệ 2:3, tối đa 300x450 (xử lý bằng styles.css / inline style trong products.html)
*/

// ===== DATA: 24 SẢN PHẨM =====
const products = [
  {
    name: "Thạch Anh Trắng Tinh Khiết",
    img: "https://images.unsplash.com/photo-1599947218193-1b3f403c9f85",
    desc: "Thanh lọc năng lượng, khơi mở trực giác.",
    price: "320.000₫",
  },
  {
    name: "Thạch Anh Tím Amethyst",
    img: "https://images.unsplash.com/photo-1615486364159-b4aa1d9d5c83",
    desc: "Bình an, ngủ sâu, cân bằng cảm xúc.",
    price: "380.000₫",
  },
  {
    name: "Obsidian Đen Bảo Hộ",
    img: "https://images.unsplash.com/photo-1612214070475-1e96b9a453cc",
    desc: "Hộ thân, trừ tà, hấp thu năng lượng xấu.",
    price: "450.000₫",
  },
  {
    name: "Citrine – Đá Thu Hút Tài Lộc",
    img: "https://images.unsplash.com/photo-1620245081519-8539b0b5d2c0",
    desc: "Mang thịnh vượng và sự tự tin.",
    price: "410.000₫",
  },
  {
    name: "Rose Quartz – Đá Tình Yêu",
    img: "https://images.unsplash.com/photo-1602680202198-5d1bb1c1b33c",
    desc: "Lan tỏa năng lượng yêu thương, hàn gắn.",
    price: "390.000₫",
  },
  {
    name: "Lapis Lazuli – Đá Trí Tuệ",
    img: "https://images.unsplash.com/photo-1620245090213-5ad7530a8dc1",
    desc: "Tăng giao tiếp, sáng tạo, trực giác.",
    price: "470.000₫",
  },
  {
    name: "Tarot Rider-Waite Cổ Điển",
    img: "https://images.unsplash.com/photo-1607604276583-212c45f00b66",
    desc: "Kinh điển, dễ tiếp cận cho người mới.",
    price: "550.000₫",
  },
  {
    name: "Tarot The Moonlight Oracle",
    img: "https://images.unsplash.com/photo-1603297638320-26f9b0b04610",
    desc: "Ánh trăng huyền ảo cho thiền định.",
    price: "620.000₫",
  },
  {
    name: "Tarot Shadowscapes",
    img: "https://images.unsplash.com/photo-1628521283155-dbf8f22f9d0b",
    desc: "Watercolor huyền ảo, năng lượng nhẹ.",
    price: "680.000₫",
  },
  {
    name: "Tarot The Light Seer’s",
    img: "https://images.unsplash.com/photo-1632435496568-42258fc9a8b4",
    desc: "Tươi sáng, nhìn nhận bản thân tích cực.",
    price: "640.000₫",
  },
  {
    name: "Oracle Starseed",
    img: "https://images.unsplash.com/photo-1625069392393-6b44877a730f",
    desc: "Kết nối vũ trụ, thức tỉnh tâm linh.",
    price: "720.000₫",
  },
  {
    name: "Tarot Crystal Vision",
    img: "https://images.unsplash.com/photo-1622042431768-671d34a56df3",
    desc: "Truyền thống pha hiện đại sắc nét.",
    price: "690.000₫",
  },
  {
    name: "Nến Hương Oải Hương Thiền Định",
    img: "https://images.unsplash.com/photo-1507652955-f3dcef5a3be3",
    desc: "Thư giãn, tập trung năng lượng.",
    price: "220.000₫",
  },
  {
    name: "Nến Trầm Hương Thiên Nhiên",
    img: "https://images.unsplash.com/photo-1595196725876-b7b8b7b0f49e",
    desc: "Ấm áp, tẩy uế không gian.",
    price: "250.000₫",
  },
  {
    name: "Trầm Que Tẩy Năng Lượng",
    img: "https://images.unsplash.com/photo-1611080626911-3fd4346c0cc2",
    desc: "Không gian thanh tịnh, dễ tập trung.",
    price: "180.000₫",
  },
  {
    name: "Bộ Đồ Thiền Mini Zen Set",
    img: "https://images.unsplash.com/photo-1590595904414-8a50420d01c1",
    desc: "Khay cát + đá + nến cho góc thiền.",
    price: "390.000₫",
  },
  {
    name: "Bình Khuếch Tán Ánh Trăng",
    img: "https://images.unsplash.com/photo-1581674039830-f0cf89a9a7a1",
    desc: "Khuếch tán tinh dầu, ngủ ngon.",
    price: "460.000₫",
  },
  {
    name: "Chuỗi Hạt Rudraksha 108",
    img: "https://images.unsplash.com/photo-1581382575270-2f8e3ac12a5f",
    desc: "Đếm mantra, biểu tượng tịnh tâm.",
    price: "350.000₫",
  },
  {
    name: "Vòng Tay Mắt Hổ Vàng",
    img: "https://images.unsplash.com/photo-1612214070475-1e96b9a453cc",
    desc: "Sức mạnh & bảo vệ chủ nhân.",
    price: "420.000₫",
  },
  {
    name: "Vòng Tay Ngọc Bích Xanh",
    img: "https://images.unsplash.com/photo-1587888637140-7d2bde8a7b34",
    desc: "Bình an, duyên lành & may mắn.",
    price: "390.000₫",
  },
  {
    name: "Mặt Dây Chuyền Mandala",
    img: "https://images.unsplash.com/photo-1579033461380-8e33aa0045ec",
    desc: "Biểu tượng thiền định cân bằng.",
    price: "410.000₫",
  },
  {
    name: "Chuông Gió Đồng Tâm Linh",
    img: "https://images.unsplash.com/photo-1509551388414-5c9c8ff4d06b",
    desc: "Gọi năng lượng mới, xua khí xấu.",
    price: "310.000₫",
  },
  {
    name: "Tượng Thiền Quan Âm Mini",
    img: "https://images.unsplash.com/photo-1618223558962-08c41a89b088",
    desc: "Bình an, từ bi, che chở.",
    price: "530.000₫",
  },
  {
    name: "Đèn Muối Himalaya",
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    desc: "Thanh lọc không khí, ánh sáng ấm.",
    price: "580.000₫",
  },
];

// ===== CẤU HÌNH PHÂN TRANG =====
const perPage = 6;
let currentPage = 1;

// ===== DOM ELEMENTS =====
const grid = document.getElementById("productGrid");
const pagination = document.getElementById("pagination");
const popup = document.getElementById("popupMsg");
const searchInput = document.getElementById("searchInput");

// ===== TÌM KIẾM =====
let filteredProducts = [...products];

function totalPages() {
  return Math.ceil(filteredProducts.length / perPage);
}

function attachBuyHandlers() {
  // Nếu muốn bỏ inline onclick, có thể dùng delegation ở đây (giữ inline cho đơn giản).
}

// ===== RENDER SẢN PHẨM =====
function renderProducts(page) {
  if (!grid) return;
  grid.innerHTML = "";

  // Nếu không có kết quả
  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center">
        <p class="text-light">Không tìm thấy sản phẩm phù hợp.</p>
      </div>`;
    if (pagination) pagination.innerHTML = "";
    return;
  }

  const start = (page - 1) * perPage;
  const current = filteredProducts.slice(start, start + perPage);

  current.forEach((p) => {
    grid.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <div class="product-card text-center p-2">
          <img src="${p.img}" alt="${p.name}" loading="lazy" class="w-100 rounded-top">
          <div class="p-3">
            <h5>${p.name}</h5>
            <h6 class="small text-light">${p.desc}</h6>
            <p class="mb-2 text-warning fw-semibold">${p.price}</p>
            <button class="btn-buy" onclick="showPopup()">
              <i class="bi bi-cart-plus"></i> Mua ngay
            </button>
          </div>
        </div>
      </div>`;
  });

  attachBuyHandlers();
}

// ===== RENDER PHÂN TRANG =====
function renderPagination() {
  if (!pagination) return;
  const pages = totalPages();

  // Nếu chỉ 1 trang, ẩn thanh phân trang
  if (pages <= 1) {
    pagination.innerHTML = "";
    return;
  }

  pagination.innerHTML = `
    <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
      <a class="page-link" href="#" data-page="${currentPage - 1}">Trước</a>
    </li>`;

  for (let i = 1; i <= pages; i++) {
    pagination.innerHTML += `
      <li class="page-item ${currentPage === i ? "active" : ""}">
        <a class="page-link" href="#" data-page="${i}">${i}</a>
      </li>`;
  }

  pagination.innerHTML += `
    <li class="page-item ${currentPage === pages ? "disabled" : ""}">
      <a class="page-link" href="#" data-page="${currentPage + 1}">Sau</a>
    </li>`;
}

// ===== ĐỔI TRANG (EVENT DELEGATION) =====
if (pagination) {
  pagination.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName.toLowerCase() === "a" && target.dataset.page) {
      e.preventDefault();
      const page = Number(target.dataset.page);
      const pages = totalPages();
      if (page >= 1 && page <= pages) {
        currentPage = page;
        renderProducts(currentPage);
        renderPagination();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });
}

// ===== TÌM KIẾM REALTIME =====
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();
    filteredProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(keyword) ||
        p.desc.toLowerCase().includes(keyword)
    );
    currentPage = 1;
    renderProducts(currentPage);
    renderPagination();
  });
}

// ===== POPUP “MUA NGAY” =====
function showPopup() {
  if (!popup) return;
  popup.style.display = "block";
  setTimeout(() => (popup.style.display = "none"), 1500);
}

// Expose cho inline onclick
window.showPopup = showPopup;

// ===== KHỞI TẠO =====
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(currentPage);
  renderPagination();
});
