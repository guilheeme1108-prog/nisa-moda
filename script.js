/**
 * NISA MODA FITNESS — E-Commerce Engine
 * Catálogo de Produtos, Seletor de Cores/Tamanhos, Galeria e Sacola Inteligente
 *
 * DICA PARA ATUALIZAR PREÇOS:
 * Basta alterar o campo `price` (ex: 159.90) na lista `PRODUCTS` abaixo!
 */

const PRODUCTS = [
    {
        id: 'conjunto-corrida',
        name: 'Conjunto Corrida Nisa',
        category: 'conjuntos',
        categoryLabel: 'Conjuntos',
        price: 159.90,
        badge: 'Mais Vendido',
        badgeType: 'dark',
        description: 'Conjunto esportivo de alta performance com acabamento contrastante em branco, cós anatômico que modela a cintura e top com alças cruzadas nas costas.',
        sizes: ['P', 'M', 'G'],
        colors: [
            {
                name: 'Preto',
                hex: '#171717',
                front: 'img/conjunto-corrida/preto-frente.jpg',
                back: 'img/conjunto-corrida/dupla-1.jpg'
            },
            {
                name: 'Azul Bebê',
                hex: '#9BB7D4',
                front: 'img/conjunto-corrida/azul-frente.jpg',
                back: 'img/conjunto-corrida/azul-costas.jpg'
            },
            {
                name: 'Marrom Café',
                hex: '#5C3327',
                front: 'img/conjunto-corrida/marrom-frente.jpg',
                back: 'img/conjunto-corrida/marrom-costas.jpg'
            },
            {
                name: 'Amarelo Manteiga',
                hex: '#F3EA92',
                front: 'img/conjunto-corrida/amarelo-frente.jpg',
                back: 'img/conjunto-corrida/amarelo-costas.jpg'
            },
            {
                name: 'Rosa Bebê',
                hex: '#F2B8C6',
                front: 'img/conjunto-corrida/rosa-frente.jpg',
                back: 'img/conjunto-corrida/dupla-2.jpg'
            }
        ],
        extraPhotos: [
            'img/conjunto-corrida/dupla-1.jpg',
            'img/conjunto-corrida/dupla-2.jpg'
        ]
    },
    {
        id: 'macacao-duo',
        name: 'Macaquinho Duo',
        category: 'macacoes',
        categoryLabel: 'Macacões',
        price: 169.90,
        badge: 'Lançamento',
        badgeType: 'rose',
        description: 'Macaquinho manga curta com recorte sofisticado, zero transparência e compressão na medida certa para valorizar suas curvas com máximo conforto.',
        sizes: ['P', 'M', 'G'],
        colors: [
            {
                name: 'Preto',
                hex: '#171717',
                front: 'img/macacao-duo/preto-frente.jpg',
                back: 'img/macacao-duo/preto-costas.jpg'
            },
            {
                name: 'Azul Marinho',
                hex: '#122249',
                front: 'img/macacao-duo/azul-frente.jpg',
                back: 'img/macacao-duo/azul-costas.jpg'
            }
        ],
        extraPhotos: [
            'img/macacao-duo/em-pe.jpg',
            'img/macacao-duo/sentada-1.jpg',
            'img/macacao-duo/sentadas-2.jpg'
        ]
    },
    {
        id: 'macacao-longo',
        name: 'Macacão Longo Nisa',
        category: 'macacoes',
        categoryLabel: 'Macacões',
        price: 199.90,
        badge: 'Premium',
        badgeType: 'dark',
        description: 'Peça única longa de modelagem escultural. Costas cavadas com caimento impecável e tecido encorpado de toque macio e alta elasticidade.',
        sizes: ['P', 'M', 'G'],
        colors: [
            {
                name: 'Marrom Café',
                hex: '#4A1E1B',
                front: 'img/macacao-longo/marrom-frente.jpg',
                back: 'img/macacao-longo/marrom-costas.jpg'
            },
            {
                name: 'Azul Marinho',
                hex: '#122249',
                front: 'img/macacao-longo/azul-frente.jpg',
                back: 'img/macacao-longo/azul-costas.jpg'
            }
        ],
        extraPhotos: []
    },
    {
        id: 'conjunto-com-bolso',
        name: 'Conjunto com Bolso',
        category: 'conjuntos',
        categoryLabel: 'Conjuntos',
        price: 164.90,
        badge: 'Novo',
        badgeType: 'rose',
        description: 'Conjunto versátil composto por top de alças finas e short de cintura alta com bolso lateral funcional para levar celular ou chave durante o treino.',
        sizes: ['P', 'M', 'G'],
        colors: [
            {
                name: 'Azul Marinho',
                hex: '#122249',
                front: 'img/conjunto-com-bolso/azul-frente.jpg',
                back: 'img/conjunto-com-bolso/azul-costas.jpg'
            }
        ],
        extraPhotos: [
            'img/short-com-bolso-lateral/frente-lateral.jpg'
        ]
    },
    {
        id: 'top-frente-u',
        name: 'Top Frente U',
        category: 'tops',
        categoryLabel: 'Tops & Blusas',
        price: 89.90,
        badge: 'Essencial',
        badgeType: 'dark',
        description: 'Top frente única com decote U elegante e costas livres. Sustentação firme e bordado exclusivo Nisa no peito.',
        sizes: ['P', 'M', 'G'],
        colors: [
            {
                name: 'Preto',
                hex: '#171717',
                front: 'img/top-frente-u/preto-frente.jpg',
                back: 'img/top-frente-u/preto-costas.jpg'
            },
            {
                name: 'Marrom Claro',
                hex: '#844631',
                front: 'img/top-frente-u/marrom-claro-frente.jpg',
                back: 'img/top-frente-u/marrom-claro-costas.jpg'
            },
            {
                name: 'Marrom Escuro',
                hex: '#5E2421',
                front: 'img/top-frente-u/marrom-escuro-frente.jpg',
                back: 'img/top-frente-u/marrom-escuro-costas.jpg'
            },
            {
                name: 'Azul Marinho',
                hex: '#163372',
                front: 'img/top-frente-u/azul-frente.jpg',
                back: 'img/top-frente-u/azul-costas.jpg'
            }
        ],
        extraPhotos: []
    },
    {
        id: 'short-com-bolso-lateral',
        name: 'Short com Bolso Lateral',
        category: 'shorts',
        categoryLabel: 'Shorts',
        price: 94.90,
        badge: '',
        badgeType: '',
        description: 'Short avulso de compressão com cós alto anatômico e bolso lateral profundo. Ideal para corrida, musculação e uso casual.',
        sizes: ['P', 'M', 'G'],
        colors: [
            {
                name: 'Azul Marinho',
                hex: '#122249',
                front: 'img/short-com-bolso-lateral/frente-lateral.jpg',
                back: 'img/short-com-bolso-lateral/costas.jpg'
            }
        ],
        extraPhotos: [
            'img/short-com-bolso-lateral/frente.jpg'
        ]
    },
    {
        id: 'blusa-dry-fit',
        name: 'Blusa Dry Fit Nisa',
        category: 'tops',
        categoryLabel: 'Tops & Blusas',
        price: 79.90,
        badge: 'Leveza',
        badgeType: 'rose',
        description: 'Camiseta em malha Dry Fit microperfurada ultra respirável com monograma Nisa na barra. Mantém a pele fresca durante todo o treino.',
        sizes: ['P', 'M', 'G'],
        colors: [
            {
                name: 'Branco Off',
                hex: '#F3F2EE',
                front: 'img/blusa-dry-fit/longe.jpg',
                back: 'img/blusa-dry-fit/frente.jpg'
            }
        ],
        extraPhotos: []
    }
];

// Estado das seleções nos cards e da sacola
const cardSelections = {};
let cart = [];
let currentCategory = 'todos';
let searchQuery = '';

// Inicializa estado padrão de cada produto
PRODUCTS.forEach(p => {
    cardSelections[p.id] = {
        colorIndex: 0,
        size: p.sizes[1] || p.sizes[0], // Padrão 'M'
        view: 'front' // 'front' | 'back'
    };
});

// Utilitário de Moeda (R$)
function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Carregar sacola do localStorage
function loadCart() {
    try {
        const saved = localStorage.getItem('nisa_cart_v1');
        if (saved) {
            cart = JSON.parse(saved);
        }
    } catch (e) {
        cart = [];
    }
}

function saveCart() {
    try {
        localStorage.setItem('nisa_cart_v1', JSON.stringify(cart));
    } catch (e) {
        // Ignora erro de storage privado
    }
}

// Renderizar Vitrine de Produtos
function renderCatalog() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const filtered = PRODUCTS.filter(product => {
        const matchesCat = currentCategory === 'todos' || product.category === currentCategory;
        const q = searchQuery.trim().toLowerCase();
        if (!q) return matchesCat;

        const inName = product.name.toLowerCase().includes(q);
        const inCat = product.categoryLabel.toLowerCase().includes(q);
        const inColors = product.colors.some(c => c.name.toLowerCase().includes(q));
        return matchesCat && (inName || inCat || inColors);
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--details);">
                <p style="font-size: 1rem; color: var(--text-main); margin-bottom: 0.5rem;">Nenhuma peça encontrada para sua busca.</p>
                <span style="font-size: 0.82rem;">Tente outro termo ou selecione "TODOS" nos filtros acima.</span>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(product => {
        const state = cardSelections[product.id];
        const activeColor = product.colors[state.colorIndex];
        const currentImg = state.view === 'back' && activeColor.back ? activeColor.back : activeColor.front;
        const installmentValue = formatCurrency(product.price / 3);

        const badgeHTML = product.badge
            ? `<span class="product-badge ${product.badgeType === 'rose' ? 'rose' : ''}">${product.badge}</span>`
            : '';

        const swatchesHTML = product.colors.map((c, idx) => `
            <button
                type="button"
                class="color-swatch ${idx === state.colorIndex ? 'active' : ''}"
                style="background-color: ${c.hex};"
                title="${c.name}"
                aria-label="Cor ${c.name}"
                onclick="selectProductColor('${product.id}', ${idx})"
            ></button>
        `).join('');

        const sizesHTML = product.sizes.map(s => `
            <button
                type="button"
                class="size-pill ${s === state.size ? 'active' : ''}"
                onclick="selectProductSize('${product.id}', '${s}')"
            >${s}</button>
        `).join('');

        return `
            <article class="product-card" data-product-id="${product.id}">
                <div class="product-image-box" onclick="openProductModal('${product.id}')">
                    ${badgeHTML}
                    <img
                        src="${currentImg}"
                        alt="${product.name} - ${activeColor.name}"
                        class="main-photo"
                        id="img-${product.id}"
                        loading="lazy"
                    >
                    <div class="image-actions" onclick="event.stopPropagation()">
                        <button
                            type="button"
                            class="img-action-btn ${state.view === 'back' ? 'active-view' : ''}"
                            id="flip-btn-${product.id}"
                            onclick="toggleProductView('${product.id}')"
                            title="Alternar entre frente e costas"
                        >
                            <i class="ph ph-arrows-clockwise"></i>
                            <span>${state.view === 'back' ? 'FRENTE' : 'COSTAS'}</span>
                        </button>
                        <button
                            type="button"
                            class="img-action-btn"
                            onclick="openProductModal('${product.id}')"
                            title="Ampliar e ver mais fotos"
                        >
                            <i class="ph ph-corners-out"></i>
                        </button>
                    </div>
                </div>

                <div class="product-info">
                    <span class="product-category-tag">${product.categoryLabel}</span>
                    <h3 class="product-title">${product.name}</h3>

                    <div class="product-price-block">
                        <span class="product-price">${formatCurrency(product.price)}</span>
                        <span class="product-installments">ou 3x de ${installmentValue} sem juros</span>
                    </div>

                    <div class="product-option-row">
                        <div class="option-label">
                            <span>Cor</span>
                            <span class="selected-color-name" id="color-label-${product.id}">${activeColor.name}</span>
                        </div>
                        <div class="color-swatches" id="swatches-${product.id}">
                            ${swatchesHTML}
                        </div>
                    </div>

                    <div class="product-option-row">
                        <div class="option-label">
                            <span>Tamanho</span>
                        </div>
                        <div class="size-pills" id="sizes-${product.id}">
                            ${sizesHTML}
                        </div>
                    </div>

                    <button type="button" class="add-to-cart-btn" onclick="addProductToCart('${product.id}')">
                        <i class="ph ph-shopping-bag"></i>
                        <span>ADICIONAR À SACOLA</span>
                    </button>
                </div>
            </article>
        `;
    }).join('');
}

// Trocar Cor no Card sem recarregar todo o grid
window.selectProductColor = function(productId, colorIndex) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    cardSelections[productId].colorIndex = colorIndex;
    cardSelections[productId].view = 'front';

    const activeColor = product.colors[colorIndex];
    const imgEl = document.getElementById(`img-${productId}`);
    const labelEl = document.getElementById(`color-label-${productId}`);
    const flipBtn = document.getElementById(`flip-btn-${productId}`);
    const swatchesContainer = document.getElementById(`swatches-${productId}`);

    if (imgEl) imgEl.src = activeColor.front;
    if (labelEl) labelEl.textContent = activeColor.name;
    if (flipBtn) {
        flipBtn.classList.remove('active-view');
        const span = flipBtn.querySelector('span');
        if (span) span.textContent = 'COSTAS';
    }
    if (swatchesContainer) {
        Array.from(swatchesContainer.children).forEach((btn, idx) => {
            btn.classList.toggle('active', idx === colorIndex);
        });
    }
};

// Alternar visualização Frente / Costas
window.toggleProductView = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const state = cardSelections[productId];
    const activeColor = product.colors[state.colorIndex];
    state.view = state.view === 'front' ? 'back' : 'front';

    const imgEl = document.getElementById(`img-${productId}`);
    const flipBtn = document.getElementById(`flip-btn-${productId}`);

    if (imgEl) {
        imgEl.src = state.view === 'back' && activeColor.back ? activeColor.back : activeColor.front;
    }
    if (flipBtn) {
        flipBtn.classList.toggle('active-view', state.view === 'back');
        const span = flipBtn.querySelector('span');
        if (span) span.textContent = state.view === 'back' ? 'FRENTE' : 'COSTAS';
    }
};

// Selecionar Tamanho (P, M, G)
window.selectProductSize = function(productId, size) {
    cardSelections[productId].size = size;
    const sizesContainer = document.getElementById(`sizes-${productId}`);
    if (sizesContainer) {
        Array.from(sizesContainer.children).forEach(btn => {
            btn.classList.toggle('active', btn.textContent === size);
        });
    }
};

// Adicionar item à Sacola
window.addProductToCart = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const state = cardSelections[productId];
    const selectedColor = product.colors[state.colorIndex];
    const cartKey = `${product.id}__${selectedColor.name}__${state.size}`;

    const existing = cart.find(item => item.key === cartKey);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            key: cartKey,
            productId: product.id,
            name: product.name,
            color: selectedColor.name,
            size: state.size,
            price: product.price,
            image: selectedColor.front,
            qty: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} (${selectedColor.name} - ${state.size}) adicionado à sacola!`);

    // Pequena animação no contador da sacola
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.classList.add('bump');
        setTimeout(() => badge.classList.remove('bump'), 300);
    }
};

// Atualizar Quantidade ou Remover da Sacola
window.changeCartItemQty = function(key, delta) {
    const index = cart.findIndex(item => item.key === key);
    if (index === -1) return;

    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
};

window.removeCartItem = function(key) {
    cart = cart.filter(item => item.key !== key);
    saveCart();
    updateCartUI();
};

// Renderizar Interface da Sacola Lateral
function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    const headerCountEl = document.getElementById('cart-header-count');
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const footerEl = document.getElementById('cart-footer');

    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    if (countEl) countEl.textContent = totalItems;
    if (headerCountEl) headerCountEl.textContent = `(${totalItems})`;
    if (subtotalEl) subtotalEl.textContent = formatCurrency(totalPrice);

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="ph ph-shopping-bag-open"></i>
                <p>Sua sacola está vazia</p>
                <span>Escolha suas peças favoritas na vitrine para adicioná-las aqui.</span>
            </div>
        `;
        if (footerEl) footerEl.style.display = 'none';
        return;
    }

    if (footerEl) footerEl.style.display = 'block';

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-meta">Cor: <strong>${item.color}</strong> &middot; Tam: <strong>${item.size}</strong></p>
                <p class="cart-item-price">${formatCurrency(item.price * item.qty)}</p>
                <div class="cart-item-controls">
                    <div class="qty-selector">
                        <button type="button" class="qty-btn" onclick="changeCartItemQty('${item.key}', -1)">-</button>
                        <span class="qty-val">${item.qty}</span>
                        <button type="button" class="qty-btn" onclick="changeCartItemQty('${item.key}', 1)">+</button>
                    </div>
                    <button type="button" class="remove-item-btn" onclick="removeCartItem('${item.key}')" title="Remover peça">
                        <i class="ph ph-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Abrir / Fechar Sacola
function openCart() {
    document.getElementById('cart-overlay')?.classList.add('open');
    document.getElementById('cart-drawer')?.classList.add('open');
}

function closeCart() {
    document.getElementById('cart-overlay')?.classList.remove('open');
    document.getElementById('cart-drawer')?.classList.remove('open');
}

// Modal de Galeria / Visualização Ampliada do Produto
window.openProductModal = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const state = cardSelections[productId];
    const activeColor = product.colors[state.colorIndex];

    // Reúne todas as fotos da cor atual + fotos extras em dupla/poses
    const allPhotos = [activeColor.front];
    if (activeColor.back && !allPhotos.includes(activeColor.back)) {
        allPhotos.push(activeColor.back);
    }
    product.extraPhotos.forEach(p => {
        if (!allPhotos.includes(p)) allPhotos.push(p);
    });

    const modalContent = document.getElementById('modal-content');
    const modalOverlay = document.getElementById('product-modal-overlay');
    if (!modalContent || !modalOverlay) return;

    const thumbsHTML = allPhotos.map((src, i) => `
        <img
            src="${src}"
            alt="Miniatura ${i + 1}"
            class="modal-thumb ${i === 0 ? 'active' : ''}"
            onclick="switchModalMainPhoto(this, '${src}')"
        >
    `).join('');

    const swatchesHTML = product.colors.map((c, idx) => `
        <button
            type="button"
            class="color-swatch ${idx === state.colorIndex ? 'active' : ''}"
            style="background-color: ${c.hex};"
            title="${c.name}"
            onclick="selectProductColor('${product.id}', ${idx}); openProductModal('${product.id}')"
        ></button>
    `).join('');

    const sizesHTML = product.sizes.map(s => `
        <button
            type="button"
            class="size-pill ${s === state.size ? 'active' : ''}"
            onclick="selectProductSize('${product.id}', '${s}'); openProductModal('${product.id}')"
        >${s}</button>
    `).join('');

    modalContent.innerHTML = `
        <div class="modal-gallery">
            <div class="modal-main-img-wrap">
                <img src="${allPhotos[0]}" alt="${product.name}" id="modal-main-img">
            </div>
            <div class="modal-thumbs">
                ${thumbsHTML}
            </div>
        </div>
        <div class="modal-details">
            <span class="product-category-tag">${product.categoryLabel}</span>
            <h2 class="product-title" style="font-size: 1.7rem; margin-bottom: 0.6rem;">${product.name}</h2>
            <div class="product-price-block">
                <span class="product-price" style="font-size: 1.4rem;">${formatCurrency(product.price)}</span>
                <span class="product-installments">ou 3x de ${formatCurrency(product.price / 3)} sem juros</span>
            </div>
            <p class="modal-desc">${product.description}</p>

            <div class="product-option-row">
                <div class="option-label">
                    <span>Cor selecionada</span>
                    <span class="selected-color-name">${activeColor.name}</span>
                </div>
                <div class="color-swatches">
                    ${swatchesHTML}
                </div>
            </div>

            <div class="product-option-row" style="margin-bottom: 1.6rem;">
                <div class="option-label">
                    <span>Tamanho</span>
                </div>
                <div class="size-pills">
                    ${sizesHTML}
                </div>
            </div>

            <button type="button" class="add-to-cart-btn" onclick="addProductToCart('${product.id}'); closeProductModal(); openCart();">
                <i class="ph ph-shopping-bag"></i>
                <span>ADICIONAR E VER SACOLA</span>
            </button>
        </div>
    `;

    modalOverlay.classList.add('open');
};

window.switchModalMainPhoto = function(thumbEl, src) {
    const mainImg = document.getElementById('modal-main-img');
    if (mainImg) mainImg.src = src;
    document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
};

window.closeProductModal = function() {
    document.getElementById('product-modal-overlay')?.classList.remove('open');
};

// Toast de feedback
let toastTimer = null;
function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

// Inicialização de Eventos
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderCatalog();
    updateCartUI();

    // Eventos dos Filtros de Categoria
    document.querySelectorAll('.filter-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category') || 'todos';
            renderCatalog();
        });
    });

    // Clique nos Cards de "Coleções em Destaque" filtra automaticamente a vitrine abaixo
    document.querySelectorAll('.category-card[data-filter-cat]').forEach(card => {
        card.addEventListener('click', () => {
            const targetCat = card.getAttribute('data-filter-cat');
            if (!targetCat) return;
            currentCategory = targetCat;
            document.querySelectorAll('.filter-pill').forEach(b => {
                b.classList.toggle('active', b.getAttribute('data-category') === targetCat);
            });
            renderCatalog();
        });
    });

    // Eventos da Sacola
    document.getElementById('cart-open-btn')?.addEventListener('click', openCart);
    document.getElementById('cart-close-btn')?.addEventListener('click', closeCart);
    document.getElementById('cart-overlay')?.addEventListener('click', closeCart);

    // Eventos do Modal
    document.getElementById('modal-close-btn')?.addEventListener('click', closeProductModal);
    document.getElementById('product-modal-overlay')?.addEventListener('click', (e) => {
        if (e.target.id === 'product-modal-overlay') closeProductModal();
    });

    // Barra de Busca
    const searchBar = document.getElementById('search-bar');
    const searchInput = document.getElementById('search-input');
    document.getElementById('search-toggle-btn')?.addEventListener('click', () => {
        searchBar?.classList.toggle('open');
        if (searchBar?.classList.contains('open')) {
            searchInput?.focus();
        }
    });
    document.getElementById('search-close-btn')?.addEventListener('click', () => {
        searchBar?.classList.remove('open');
        if (searchInput) searchInput.value = '';
        searchQuery = '';
        renderCatalog();
    });
    searchInput?.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderCatalog();
        const catalogSection = document.getElementById('produtos');
        if (searchQuery.length === 1 && catalogSection) {
            catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Botão de Finalizar Pedido (preparado para futura integração com número do WhatsApp)
    document.getElementById('checkout-btn')?.addEventListener('click', () => {
        const nameInput = document.getElementById('customer-name');
        const customerName = nameInput?.value.trim() || 'Cliente';
        const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

        showToast(`Pedido de ${customerName} (${formatCurrency(total)}) pronto! Assim que definir o WhatsApp da loja, ativaremos o envio direto.`);
    });
});
