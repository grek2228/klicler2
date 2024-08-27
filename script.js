// Загружаем данные из localStorage или устанавливаем значения по умолчанию
let coins = localStorage.getItem('coins') ? parseInt(localStorage.getItem('coins')) : 0;
let clickValue = localStorage.getItem('clickValue') ? parseInt(localStorage.getItem('clickValue')) : 1;
let upgradeCost = localStorage.getItem('upgradeCost') ? parseInt(localStorage.getItem('upgradeCost')) : 10;

const apple = document.getElementById('apple');
const coinsDisplay = document.getElementById('coins');
const upgradeButton = document.getElementById('upgrade-button');
const upgradeCostDisplay = document.getElementById('upgrade-cost');

// Обновляем отображение монет и стоимости улучшения
coinsDisplay.innerText = coins;
upgradeCostDisplay.innerText = upgradeCost;

apple.addEventListener('click', () => {
    coins += clickValue;
    coinsDisplay.innerText = coins;
    localStorage.setItem('coins', coins); // Сохраняем монеты в localStorage
    checkUpgradeAvailability();
});

upgradeButton.addEventListener('click', () => {
    if (coins >= upgradeCost) {
        coins -= upgradeCost;
        clickValue++;
        upgradeCost = Math.floor(upgradeCost * 1.5); // Увеличиваем стоимость улучшения
        coinsDisplay.innerText = coins;
        upgradeCostDisplay.innerText = upgradeCost;

        // Сохраняем обновленные значения в localStorage
        localStorage.setItem('coins', coins);
        localStorage.setItem('clickValue', clickValue);        
        localStorage.setItem('upgradeCost', upgradeCost);
        
        checkUpgradeAvailability();
    }
});

// Функция для проверки доступности кнопки улучшения
function checkUpgradeAvailability() {
    upgradeButton.disabled = coins < upgradeCost; // Деактивируем кнопку, если недостаточно монет
}
