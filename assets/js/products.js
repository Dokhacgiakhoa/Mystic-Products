/* Mystic-Products | assets/js/products.js (24 images refreshed, 2024+ prioritized)
   - 24 ảnh ngoài (Wikimedia / Pexels / Pixabay), tìm qua Google
   - Tìm kiếm + Bộ lọc + Sắp xếp + Phân trang 6/sp
   - Fallback ảnh nếu link ngoài gãy
*/

const FALLBACK_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/3/39/Himalayan_Salt_Lamp.jpg";

/* ===== DATA 24 SẢN PHẨM (ảnh mới) ===== */
const products = [
  // ĐÁ NĂNG LƯỢNG (1–6)
  {
    name: "Thạch Anh Trắng Tinh Khiết",
    img: "https://images.pexels.com/photos/104123/pexels-photo-104123.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Thanh lọc năng lượng, khơi mở trực giác.",
    price: "320.000₫",
    priceValue: 320000,
    category: "Đá năng lượng",
  },
  {
    name: "Thạch Anh Tím Amethyst",
    img: "https://cdn.pixabay.com/photo/2024/01/23/10/26/ai-generated-8527081_1280.jpg",
    desc: "Bình an, ngủ sâu, cân bằng cảm xúc.",
    price: "380.000₫",
    priceValue: 380000,
    category: "Đá năng lượng",
  },
  {
    name: "Obsidian Đen Bảo Hộ",
    img: "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Hộ thân, trừ tà, hút năng lượng xấu.",
    price: "450.000₫",
    priceValue: 450000,
    category: "Đá năng lượng",
  },
  {
    name: "Citrine – Đá Thu Hút Tài Lộc",
    img: "https://images.pexels.com/photos/3063909/pexels-photo-3063909.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Thịnh vượng, tự tin, sáng tạo.",
    price: "410.000₫",
    priceValue: 410000,
    category: "Đá năng lượng",
  },
  {
    name: "Rose Quartz – Đá Tình Yêu",
    img: "https://images.pexels.com/photos/1454063/pexels-photo-1454063.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Yêu thương, chữa lành cảm xúc.",
    price: "390.000₫",
    priceValue: 390000,
    category: "Đá năng lượng",
  },
  {
    name: "Lapis Lazuli – Đá Trí Tuệ",
    img: "https://images.pexels.com/photos/6587859/pexels-photo-6587859.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Giao tiếp, trực giác, khai mở trí tuệ.",
    price: "470.000₫",
    priceValue: 470000,
    category: "Đá năng lượng",
  },

  // TAROT/ORACLE (7–12)
  {
    name: "Tarot Rider-Waite Cổ Điển",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tarot_Nine_of_Wands.jpg",
    desc: "Bộ bài kinh điển, dễ học cho người mới.",
    price: "550.000₫",
    priceValue: 550000,
    category: "Tarot/Oracle",
  },
  {
    name: "Tarot The Moonlight Oracle",
    img: "https://images.pexels.com/photos/6953705/pexels-photo-6953705.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Ánh trăng huyền ảo, thiền định sâu.",
    price: "620.000₫",
    priceValue: 620000,
    category: "Tarot/Oracle",
  },
  {
    name: "Tarot Shadowscapes",
    img: "https://images.pexels.com/photos/4207863/pexels-photo-4207863.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Watercolor huyền ảo, năng lượng nhẹ.",
    price: "680.000₫",
    priceValue: 680000,
    category: "Tarot/Oracle",
  },
  {
    name: "Tarot The Light Seer’s",
    img: "https://images.pexels.com/photos/6252608/pexels-photo-6252608.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Tươi sáng, nhìn nhận tích cực.",
    price: "640.000₫",
    priceValue: 640000,
    category: "Tarot/Oracle",
  },
  {
    name: "Oracle Starseed",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/85/Tarot_Movie_Logo.png",
    desc: "Kết nối vũ trụ, thức tỉnh tâm linh.",
    price: "720.000₫",
    priceValue: 720000,
    category: "Tarot/Oracle",
  },
  {
    name: "Tarot Crystal Vision",
    img: "https://images.pexels.com/photos/4207891/pexels-photo-4207891.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Truyền thống pha hiện đại, sắc nét.",
    price: "690.000₫",
    priceValue: 690000,
    category: "Tarot/Oracle",
  },

  // NẾN/TRẦM/THIỀN (13–18)
  {
    name: "Nến Oải Hương Thiền Định",
    img: "https://cdn.pixabay.com/photo/2017/08/10/03/29/aroma-2611206_1280.jpg",
    desc: "Thư giãn, xoa dịu tâm trí.",
    price: "220.000₫",
    priceValue: 220000,
    category: "Nến/Trầm/Thiền",
  },
  {
    name: "Nến Trầm Hương Thiên Nhiên",
    img: "https://cdn.pixabay.com/photo/2016/11/29/02/12/candle-1868640_1280.jpg",
    desc: "Ấm áp, thanh lọc không gian.",
    price: "250.000₫",
    priceValue: 250000,
    category: "Nến/Trầm/Thiền",
  },
  {
    name: "Trầm Que Tẩy Năng Lượng",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/21/2024-Apr_Suzhou_-_Tiger_Hill_Scenic_Area_%28Hu_Qiu%29_%E8%99%8E%E4%B8%98_-_img_37_incense_por.jpg",
    desc: "Thanh tịnh, tập trung dễ dàng.",
    price: "180.000₫",
    priceValue: 180000,
    category: "Nến/Trầm/Thiền",
  },
  {
    name: "Bộ Đồ Thiền Mini Zen Set",
    img: "https://cdn.pixabay.com/photo/2016/10/22/17/03/zen-1760023_1280.jpg",
    desc: "Khay cát + đá + nến cho góc thiền.",
    price: "390.000₫",
    priceValue: 390000,
    category: "Nến/Trầm/Thiền",
  },
  {
    name: "Bình Khuếch Tán Ánh Trăng",
    img: "https://cdn.pixabay.com/photo/2019/03/03/19/59/aroma-4034088_1280.jpg",
    desc: "Khuếch tán tinh dầu, ngủ ngon.",
    price: "460.000₫",
    priceValue: 460000,
    category: "Nến/Trầm/Thiền",
  },
  {
    name: "Chuỗi Hạt Rudraksha 108",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Rudraksha_beads.jpg",
    desc: "Đếm mantra, tịnh tâm sâu.",
    price: "350.000₫",
    priceValue: 350000,
    category: "Nến/Trầm/Thiền",
  },

  // PHỤ KIỆN PHONG THỦY (19–24)
  {
    name: "Vòng Tay Mắt Hổ Vàng",
    img: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Sức mạnh & bảo vệ chủ nhân.",
    price: "420.000₫",
    priceValue: 420000,
    category: "Phụ kiện phong thủy",
  },
  {
    name: "Vòng Tay Ngọc Bích Xanh",
    img: "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Bình an, duyên lành & may mắn.",
    price: "390.000₫",
    priceValue: 390000,
    category: "Phụ kiện phong thủy",
  },
  {
    name: "Mặt Dây Chuyền Mandala",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Gold_Mandala_Pendant.jpg",
    desc: "Biểu tượng thiền định cân bằng.",
    price: "410.000₫",
    priceValue: 410000,
    category: "Phụ kiện phong thủy",
  },
  {
    name: "Chuông Gió Đồng Tâm Linh",
    img: "https://cdn.pixabay.com/photo/2015/07/10/15/16/wind-chime-839547_1280.jpg",
    desc: "Gọi năng lượng mới, xua khí xấu.",
    price: "310.000₫",
    priceValue: 310000,
    category: "Phụ kiện phong thủy",
  },
  {
    name: "Tượng Thiền Quan Âm Mini",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Guanyin_statue.jpg",
    desc: "Bình an, từ bi, che chở.",
    price: "530.000₫",
    priceValue: 530000,
    category: "Phụ kiện phong thủy",
  },
  {
    name: "Đèn Muối Himalaya",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Himalayan_Salt_Lamp.jpg",
    desc: "Thanh lọc không khí, ánh sáng ấm.",
    price: "580.000₫",
    priceValue: 580000,
    category: "Phụ kiện phong thủy",
  },
];

/* ===== CONFIG ===== */
const perPage = 6;
let currentPage = 1;

/* ===== DOM ===== */
const grid = document.getElementById("productGrid");
const pagination = document.getElementById("pagination");
const popup = document.getElementById("popupMsg");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const sortBy = document.getElementById("sortBy");

/* ===== STATE ===== */
let filteredProducts = [...products];

/* ===== FILTER + SORT ===== */
function applyFiltersAndSort() {
  const kw = (searchInput?.value || "").trim().toLowerCase();
  const cat = categoryFilter?.value || "";
  const min = Number(minPrice?.value || 0);
  const max = Number(maxPrice?.value || 0);
  const sort = sortBy?.value || "";

  filteredProducts = products.filter((p) => {
    const matchKW =
      p.name.toLowerCase().includes(kw) || p.desc.toLowerCase().includes(kw);
    const matchCat = !cat || p.category === cat;
    const matchMin = !min || p.priceValue >= min;
    const matchMax = !max || p.priceValue <= max;
    return matchKW && matchCat && matchMin && matchMax;
  });

  if (sort === "priceAsc")
    filteredProducts.sort((a, b) => a.priceValue - b.priceValue);
  if (sort === "priceDesc")
    filteredProducts.sort((a, b) => b.priceValue - a.priceValue);
  if (sort === "nameAsc")
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name, "vi"));
  if (sort === "nameDesc")
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name, "vi"));

  currentPage = 1;
  renderProducts(currentPage);
  renderPagination();
}

/* ===== RENDER ===== */
function renderProducts(page) {
  if (!grid) return;
  grid.innerHTML = "";

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
          <img src="${p.img}" alt="${p.name}" loading="lazy" class="w-100 rounded-top"
               onerror="this.onerror=null; this.src='${FALLBACK_IMG}';">
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
}

function renderPagination() {
  if (!pagination) return;
  const pages = Math.ceil(filteredProducts.length / perPage);

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

/* ===== EVENTS ===== */
if (pagination) {
  pagination.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName.toLowerCase() === "a" && target.dataset.page) {
      e.preventDefault();
      const page = Number(target.dataset.page);
      const pages = Math.ceil(filteredProducts.length / perPage);
      if (page >= 1 && page <= pages) {
        currentPage = page;
        renderProducts(currentPage);
        renderPagination();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });
}

searchInput && searchInput.addEventListener("input", applyFiltersAndSort);
categoryFilter &&
  categoryFilter.addEventListener("change", applyFiltersAndSort);
minPrice && minPrice.addEventListener("input", applyFiltersAndSort);
maxPrice && maxPrice.addEventListener("input", applyFiltersAndSort);
sortBy && sortBy.addEventListener("change", applyFiltersAndSort);

/* ===== POPUP ===== */
function showPopup() {
  if (!popup) return;
  popup.style.display = "block";
  setTimeout(() => (popup.style.display = "none"), 1500);
}
window.showPopup = showPopup;

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  applyFiltersAndSort(); // render + phân trang
});
