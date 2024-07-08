document.addEventListener('DOMContentLoaded', function() {
    const addItemBtn = document.getElementById('addItemBtn');
    const markPurchasedBtn = document.getElementById('markPurchasedBtn');
    const clearListBtn = document.getElementById('clearListBtn');
    const itemInput = document.getElementById('itemInput');
    const shoppingList = document.getElementById('shoppingList');

    let items = [];

    addItemBtn.addEventListener('click', function() {
        const newItem = itemInput.value.trim();
        if (newItem !== '') {
            items.push({ name: newItem, purchased: false });
            renderShoppingList();
            itemInput.value = '';
        }
    });

    function renderShoppingList() {
        shoppingList.innerHTML = '';
        items.forEach(function(item, index) {
            const li = document.createElement('li');
            li.textContent = item.name;
            if (item.purchased) {
                li.classList.add('purchased');
            }
            li.addEventListener('click', function() {
                items[index].purchased = !items[index].purchased;
                renderShoppingList();
            });
            shoppingList.appendChild(li);
        });
    }

    markPurchasedBtn.addEventListener('click', function() {
        items.forEach(function(item) {
            item.purchased = true;
        });
        renderShoppingList();
    });

    clearListBtn.addEventListener('click', function() {
        items = [];
        renderShoppingList();
    });
});
